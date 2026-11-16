import { Topic, h2, h3, h4, p, ul, ol, table, code } from "./types";

export const enterprise: Topic = {
  id: "enterprise-api-agent",
  title: "Agentic AI over Enterprise APIs",
  tag: "System Design Question",
  blurb: "An agent that talks to Salesforce, SAP and internal databases: auth, rate limiting, error recovery, plus coding, project and latency questions.",
  question: [
    h2("System Design & Architecture"),
    p("Design an agentic AI system that needs to interact with multiple enterprise APIs (Salesforce, SAP, internal databases). How would you handle authentication, rate limiting, and error recovery?"),
    h3("What I'm looking for:"),
    h4("Architecture Components:"),
    ul(
      "API gateway pattern with centralized authentication management",
      "Service layer abstraction to decouple agent logic from API specifics",
      "Message queue (Redis/RabbitMQ) for async operations",
      "Database for state management and audit trails"
    ),
    h4("Authentication Strategy:"),
    ul("OAuth 2.0 flows with token refresh handling", "AWS Secrets Manager/vault", "Token caching"),
    h4("Rate Limiting Approach:"),
    ul(
      "Implement token bucket or leaky bucket algorithms",
      "Track rate limits per API (Salesforce has different limits than SAP)",
      "Queue management with priority levels",
      "Graceful degradation (return partial results if one API is throttled)",
      "Exponential backoff for retry attempts"
    ),
    h4("Error Recovery:"),
    ul(
      "Circuit breaker pattern to prevent cascading failures",
      "Idempotency keys for safe retries",
      "Dead letter queues for failed operations",
      "Comprehensive logging with correlation IDs",
      "Fallback strategies (cached data, alternative APIs)"
    ),
    h2("Coding & Implementation"),
    ul("**Live coding:** Build a simple function that implements tool calling with error handling and retry logic"),
    h2("Experience-Based Questions/Project Deep Dive"),
    ul("Tell me about the most complex AI system you've built. What were the challenges and how did you overcome them?"),
    h2("Problem-Solving Scenarios"),
    h3("Case Study"),
    ul("Our AI agent is taking too long to respond (15+ seconds). How would you diagnose and optimize this?"),
  ],
  answer: [
    h2("Summary"),
    p("The agent should never call Salesforce, SAP or a database directly: every call goes through one gateway that owns credentials, rate limits, retries and audit, so the agent only decides what to do."),
    h2("At a glance"),
    p("The agent decides *what* to do and the gateway decides *how safely*. Fast reads go straight through, slow or throttled work goes through the queue, and the gateway records every call in the state database. (The original shows a 4-layer architecture diagram here.)"),

    h2("Architecture components"),
    p("Four pieces do the work: a gateway that every call passes through, a service layer that hides each vendor, a queue that absorbs bursts, and a database that remembers what happened."),
    table(["Component", "What it is", "Why you need it"],
      ["API gateway", "One entry point between agent and enterprise APIs. Handles auth, rate limits, logging, timeouts.", "Credentials and limits live in one place, so no tool can bypass them."],
      ["Service layer (adapters)", "One adapter per system (`SalesforceClient`, `SapClient`, `DbClient`) behind a shared interface such as `get_customer(id)`.", "The agent says *what* it wants. Swapping a vendor or an API version never touches agent logic."],
      ["Message queue (Redis or RabbitMQ)", "Buffer between the agent and slow or throttled calls. Supports priorities and retries.", "Long jobs run async, bursts are smoothed, and a throttled API does not block the agent."],
      ["State database", "Stores task state, tool-call records and an append-only audit trail.", "The agent resumes after a crash, and you can answer “who changed what, and why”."]
    ),
    p("Redis is the lighter choice (fast, simple, good for token buckets and short queues). RabbitMQ gives stronger delivery guarantees, acknowledgements and built-in dead-letter exchanges. Say which you would pick and why: for enterprise writes where losing a message is costly, RabbitMQ."),
    p("The service layer is the concept interviewers probe most. It is the adapter pattern: the agent sees a stable, typed tool such as `update_opportunity(id, stage)`, and the adapter translates it into Salesforce REST or SAP OData, maps errors to a common set (`RateLimited`, `AuthExpired`, `NotFound`, `Transient`), and normalises responses."),

    h2("Authentication strategy"),
    p("The agent never holds a credential: the gateway fetches secrets from a vault, gets short-lived OAuth tokens, caches them, and refreshes before they expire."),
    p("**OAuth 2.0 flows.** Pick the flow by who the agent acts for."),
    table(["Flow", "Use when", "Example here"],
      ["Client credentials", "The agent acts as itself (a service account), no user present.", "Background sync jobs against SAP or an internal API."],
      ["JWT bearer", "Server-to-server, no user prompt, signed assertion instead of a secret.", "Salesforce integration user."],
      ["Authorization code + PKCE", "The agent acts *on behalf of* a user and needs their permissions.", "A sales rep asks the agent to update their own opportunities."],
      ["Refresh token", "Renew an access token without asking the user again.", "Long-running user-delegated sessions."]
    ),
    p("**Token refresh.** Access tokens are short-lived. Refresh *proactively* a little before expiry, and also reactively on a `401`: refresh once, retry the call once, then fail. Guard the refresh with a lock (single-flight) so ten parallel calls trigger one refresh, not ten."),
    p("**Secrets vault.** Client secrets, private keys and refresh tokens live in AWS Secrets Manager or HashiCorp Vault, never in code, env files or prompts. The gateway reads them at start-up with an IAM role, supports rotation without redeploy, and every read is audited. Keep secrets out of the LLM context entirely: the model sees tool names and results, never tokens."),
    p("**Token caching.** Cache the access token in memory (and in Redis if several gateway instances share it) with a TTL slightly shorter than its real expiry. Key it by system *and* identity (`salesforce:user-123`), so one user's token is never used for another."),
    p("**Least privilege.** Scope tokens per tool: a read-only token for lookup tools, a write token only for tools that mutate data."),

    h2("Rate limiting approach"),
    p("Throttle on your side before the vendor does it for you: one limiter per API, a priority queue in front of it, and partial answers when one system is slow."),
    table(["Technique", "How it works", "When to choose it"],
      ["Token bucket", "A bucket refills at *r* tokens per second up to a capacity *b*. Each call spends one token. Empty bucket means wait.", "Default. Allows short bursts up to *b* while holding the average rate at *r*."],
      ["Leaky bucket", "Requests enter a queue and leave at a fixed rate.", "When the downstream system needs a perfectly smooth rate."]
    ),
    p("Tokens available at time *t* (the bucket never exceeds its capacity):"),
    code("latex", String.raw`tokens(t) = \min\bigl(b,\; tokens(t_{last}) + r \cdot (t - t_{last})\bigr)`),
    p("**Per-API limits.** Salesforce, SAP and your database each get their own bucket, configured from that system's real limits (Salesforce meters API requests over a rolling period and caps concurrent calls; an SAP gateway is limited by how it is configured). Also read the server's own signals, such as a `429` status and the `Retry-After` header, and shrink the bucket when they appear. One shared limiter would let a slow SAP starve Salesforce."),
    p("**Priority queues.** Give each queued call a priority: user-facing reads first, user-triggered writes next, background syncs last. A background job must never delay a person waiting on an answer. Add ageing so low-priority work is not starved forever."),
    p("**Graceful degradation.** Fan out to the systems in parallel with a per-call deadline. If SAP is throttled, return the Salesforce and database results, mark the SAP part as `unavailable`, and tell the user what is missing. Partial and honest beats late and complete. Queue the SAP call to finish in the background."),
    p("**Exponential backoff with jitter.** After a failure wait `base × 2^attempt`, capped, then add random jitter so a crowd of retries does not hit the API at the same instant. Honour `Retry-After` when the server sends it. Retry only errors that can succeed later: `429`, `503`, timeouts. Never retry a `400` or `403`."),

    h2("Error recovery"),
    p("Assume every call can fail. Contain the failure (breaker), make retries safe (idempotency), park what cannot succeed (dead letter queue), and keep enough evidence to debug it (correlation IDs)."),
    table(["Pattern", "What it does", "Failure it prevents"],
      ["Circuit breaker", "Counts failures per API. Past a threshold it *opens* and fails fast for a cool-down, then lets one *half-open* probe through.", "A dead SAP making every agent step wait for a timeout, and your retries hammering it while it recovers."],
      ["Idempotency keys", "A unique key per logical operation, sent with each attempt. The server (or your gateway) returns the stored result for a key it has seen.", "A retried “create order” creating two orders."],
      ["Dead letter queue (DLQ)", "After the retry budget is spent, the message moves to a separate queue with its error and context.", "Poison messages blocking the queue, or silent data loss. A human or a job replays them later."],
      ["Correlation IDs", "One ID created per user request and passed through the agent, gateway, queue and every API call, in structured logs.", "“It failed somewhere”. One search shows the whole path."],
      ["Fallbacks", "Serve cached data (marked with its age), use an alternative source, or return a partial result.", "A single outage turning into a total outage."]
    ),
    p("One call, three possible ends. An open breaker skips the API and uses a fallback, a retryable failure waits and tries again within its budget, and a call that exhausts the budget lands in the dead letter queue with its error attached. (The original shows a decision-flow diagram here.)"),
    p("Fallbacks differ for reads and writes. A read can fall back to a stale cache, labelled as stale. A write must never be guessed: queue it with its idempotency key and tell the user it is pending."),

    h2("Live coding: tool calling with retries"),
    p("The function below classifies errors, retries only the ones that can succeed, reuses one idempotency key across attempts, and always returns a structured result the agent can reason about. I ran it against a flaky tool, a permanent failure and a throttled tool to confirm the behaviour."),
    code("python", `import random
import time
import uuid


class ToolError(Exception):
    retryable = False


class RateLimited(ToolError):
    retryable = True

    def __init__(self, retry_after=None):
        super().__init__("rate limited")
        self.retry_after = retry_after


class Transient(ToolError):  # timeouts, 5xx
    retryable = True


class Permanent(ToolError):  # 400, 403, 404: never retry
    pass


def call_tool(tools, name, args, *, correlation_id,
              max_attempts=4, base=0.5, cap=8.0, deadline=20.0, log=print):
    """Run one tool call with retries. Always returns a dict the agent can read."""
    if name not in tools:
        return {"ok": False, "error": f"unknown tool '{name}'", "retryable": False}

    key = str(uuid.uuid4())  # one idempotency key for ALL attempts of this call
    start = time.monotonic()
    last = None

    for attempt in range(1, max_attempts + 1):
        try:
            data = tools[name](**args, idempotency_key=key)
            log(f"[{correlation_id}] {name} ok attempt={attempt}")
            return {"ok": True, "data": data, "attempts": attempt}
        except ToolError as e:
            last = e
            log(f"[{correlation_id}] {name} {type(e).__name__} attempt={attempt}")
            if not e.retryable:
                break
            # honour Retry-After, else exponential backoff with full jitter
            delay = getattr(e, "retry_after", None) or random.uniform(
                0, min(cap, base * 2 ** attempt))
            if attempt == max_attempts or time.monotonic() - start + delay > deadline:
                break
            time.sleep(delay)
        except Exception as e:  # unknown bug: do not retry blindly
            last = e
            log(f"[{correlation_id}] {name} unexpected {e!r}")
            break

    return {"ok": False, "error": str(last) or type(last).__name__,
            "retryable": getattr(last, "retryable", False), "attempts": attempt}`),
    p("What to say while you write it:"),
    ol(
      "**Classify first.** Retrying a `403` wastes time and a retry of a `429` is exactly right, so the error type carries a `retryable` flag.",
      "**One idempotency key per logical call**, created before the loop. A retry after a timeout cannot create a duplicate record.",
      "**Backoff with jitter, bounded twice**: by `max_attempts` and by an overall `deadline`, because the agent has a user waiting.",
      "**Return errors as data.** The model gets `{\"ok\": false, \"retryable\": ...}` and can choose to apologise, try another tool or ask the user, instead of the whole run crashing.",
      "**Next improvements to name**: a circuit breaker around `tools[name]`, async I/O with `asyncio.sleep`, and a per-tool timeout."
    ),

    h2("Project deep dive"),
    p("Tell one true story in five beats, about two minutes, and spend most of the time on the challenges and what *you* decided. Only you can supply the facts; the table gives the beats and the questions that fill them."),
    table(["Beat", "Say", "Fill in with your own project"],
      ["1. Context", "What the system did, who used it, and why it was hard.", "One sentence on the user and the business problem."],
      ["2. Your role", "What you owned, not what the team did.", "Components you designed or built; decisions you made."],
      ["3. Architecture", "The main pieces and the one trade-off you are proud of.", "Where the LLM sat, what tools it called, where state lived."],
      ["4. Challenges", "Two or three real problems, each with cause and fix.", "See the prompts below."],
      ["5. Result and lessons", "A measured outcome and what you would change.", "A number you can defend, one thing you would redo."]
    ),
    p("Common challenges in agent systems, to match against what really happened to you:"),
    ul(
      "**Unreliable tool use.** The model picked the wrong tool or malformed arguments. Fix: schema validation, clearer tool descriptions, a retry that feeds the error back to the model.",
      "**Hallucinated or stale facts.** Fix: ground answers in tool results, cite the source, add evaluation cases.",
      "**Latency and cost.** Fix: parallel tool calls, smaller model for easy steps, caching, shorter prompts.",
      "**Flaky downstream APIs.** Fix: the patterns above (limits, breakers, idempotency).",
      "**No way to know if a change helped.** Fix: an evaluation set of real tasks, run on every prompt or model change.",
      "**Safety of actions.** Fix: read-only by default, human approval for writes, full audit trail."
    ),
    p("Pick the challenges you actually faced. Interviewers follow up on detail, and an invented story falls apart on the second question."),

    h2("Case study: the agent takes 15+ seconds"),
    p("Measure before changing anything: trace one slow request end to end, find which stage owns most of the time, then fix the biggest stage first."),
    p("**Step 1: Instrument.** Add a trace (OpenTelemetry or your LLM-observability tool) with a span per stage, tagged with the correlation ID: prompt build, each LLM call, each tool call, queue wait, post-processing. Look at percentiles (p50, p95, p99), not averages, and compare slow requests against fast ones."),
    p("**Step 2: Find where the time goes.**"),
    table(["Symptom in the trace", "Likely cause", "Fix"],
      ["Many sequential LLM calls", "The agent loop takes too many steps", "Fewer, better tools. Plan once, then act. Cap iterations."],
      ["One huge LLM call", "Large prompt or long output", "Trim context, summarise history, retrieve only relevant chunks, limit output length."],
      ["Tool calls run one after another", "Independent calls are serialised", "Run independent calls in parallel (`asyncio.gather`)."],
      ["One slow API dominates", "Salesforce or SAP latency, throttling, retries", "Cache reads, batch requests, set timeouts, use the circuit breaker, return partial results."],
      ["Long gap before the first call", "Queue wait or cold start", "Scale workers, reserve capacity for interactive priority."],
      ["Token refresh or connection setup on each call", "No token cache, no connection reuse", "Cache tokens, use a pooled HTTP client with keep-alive."],
      ["Nothing visible until the end", "Everything is waited for", "Stream the answer and progress updates as they happen."]
    ),
    p("**Step 3: Apply the fixes in order of payoff.**"),
    ol(
      "**Do less**: remove unnecessary LLM calls and tool calls, cache repeated lookups (with a sensible TTL), enable prompt caching for the stable part of the prompt.",
      "**Do it in parallel**: independent tool calls together, with a per-call deadline.",
      "**Use a smaller or faster model** for routing, extraction and simple steps. Keep the large model for hard reasoning.",
      "**Move slow work off the request path**: return a quick answer and finish the rest asynchronously through the queue, then notify.",
      "**Make waiting feel shorter**: stream tokens and show status (“checking Salesforce...”)."
    ),
    p("**Step 4: Prove it.** Set a latency budget per stage, alert on p95, and re-run an evaluation set to confirm answers did not get worse. A faster wrong answer is a regression."),
    p("In the interview, lead with the method (measure, find the dominant stage, fix, verify) before listing techniques. It shows you would not guess."),
  ],
};
