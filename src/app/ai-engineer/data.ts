// data.js
// Single source of truth for the AI Engineer front page.
// Edit the arrays below — the page component just maps over them.
//
// priority / difficulty both map to a fixed color in page.jsx:
//   High priority / Advanced   -> rose2   (red)
//   Medium priority / Intermediate -> amber2 (yellow)
//   Low priority / Beginner    -> emerald2 (green)
// so the color is derived automatically — you only ever set the label.

export const roadmap = {
  href: "/ai-engineer/roadmap",
  kicker: "Start Here",
  title: "The SWE → AI Engineer Roadmap",
  description:
    "The full path from a general software engineering background to an AI engineering role — what to learn first, what to skip until later, and how the pieces (models, retrieval, evals, deployment) fit together.",
};

// ─── Core topics ───
// Each is meant to link out to its own deep-dive page,
// e.g. /ai-engineer/topics/rag
export const topics = [
  {
    slug: "rag",
    href: "/ai-engineer/topics/rag",
    category: "Core Concept",
    title: "Retrieval-Augmented Generation (RAG)",
    priority: "High",
    description:
      "Grounding LLM output in external documents via retrieval instead of relying on parametric memory alone. The most commonly asked-about pattern in AI engineering interviews today.",
    tags: ["Chunking strategy", "Retrieval quality", "Hybrid search"],
  },
  {
    slug: "prompt-engineering",
    href: "/ai-engineer/topics/prompt-engineering",
    category: "Core Concept",
    title: "Prompt Engineering",
    priority: "High",
    description:
      "Structuring instructions, examples, and context so a model reliably does what you want. Cheap to iterate on, and often the highest-leverage lever before reaching for fine-tuning.",
    tags: ["Few-shot examples", "System prompts", "Output formatting"],
  },
  {
    slug: "embeddings-vector-db",
    href: "/ai-engineer/topics/embeddings-vector-db",
    category: "Core Concept",
    title: "Embeddings & Vector Databases",
    priority: "High",
    description:
      "How text/images get turned into vectors, how similarity search works, and how to choose between pgvector, Pinecone, Weaviate, and others for a given scale.",
    tags: ["Cosine similarity", "ANN indexes", "Index choice"],
  },
  {
    slug: "agents-tool-use",
    href: "/ai-engineer/topics/agents-tool-use",
    category: "Core Concept",
    title: "Agents & Tool Use",
    priority: "High",
    description:
      "Letting a model call functions, use tools, and take multi-step actions toward a goal. Covers function calling, planning loops, and where agents reliably break down.",
    tags: ["Function calling", "ReAct loops", "Failure modes"],
  },
  {
    slug: "evals",
    href: "/ai-engineer/topics/evals",
    category: "Core Concept",
    title: "Evaluation & Testing (Evals)",
    priority: "High",
    description:
      "Measuring whether an LLM system actually works — offline eval sets, LLM-as-judge, regression testing across prompt/model changes. Underrated until something breaks in prod.",
    tags: ["LLM-as-judge", "Golden datasets", "Regression testing"],
  },
  {
    slug: "context-management",
    href: "/ai-engineer/topics/context-management",
    category: "Core Concept",
    title: "Context Window Management",
    priority: "Medium",
    description:
      "Deciding what actually goes into the context window — summarization, truncation, memory strategies — as conversations and retrieved documents grow past the window limit.",
    tags: ["Summarization", "Sliding window", "Memory strategies"],
  },
  {
    slug: "orchestration-frameworks",
    href: "/ai-engineer/topics/orchestration-frameworks",
    category: "Tooling",
    title: "Orchestration Frameworks",
    priority: "Medium",
    description:
      "LangChain, LlamaIndex, and similar frameworks for wiring together retrieval, prompting, and tool calls — useful to know, but not a substitute for understanding what's underneath them.",
    tags: ["LangChain", "LlamaIndex", "When to skip the framework"],
  },
  {
    slug: "fine-tuning",
    href: "/ai-engineer/topics/fine-tuning",
    category: "Core Concept",
    title: "Fine-Tuning & Adaptation",
    priority: "Medium",
    description:
      "When fine-tuning actually beats prompting, plus the practical options: full fine-tuning, LoRA/QLoRA, and instruction tuning on a small task-specific dataset.",
    tags: ["LoRA / QLoRA", "Dataset prep", "When NOT to fine-tune"],
  },
  {
    slug: "model-selection",
    href: "/ai-engineer/topics/model-selection",
    category: "Applied",
    title: "Model Selection & Cost/Latency Tradeoffs",
    priority: "Medium",
    description:
      "Picking the right model for a task — not always the biggest one. Weighing accuracy against cost-per-token and latency for a production use case.",
    tags: ["Cost per token", "Latency budgets", "Open vs. closed models"],
  },
  {
    slug: "llmops",
    href: "/ai-engineer/topics/llmops",
    category: "Applied",
    title: "LLMOps: Deployment & Monitoring",
    priority: "Medium",
    description:
      "Shipping an LLM feature to production — logging prompts/responses, tracking drift and cost, versioning prompts, and rolling back safely when quality regresses.",
    tags: ["Prompt versioning", "Cost monitoring", "Rollback strategy"],
  },
  {
    slug: "multimodal",
    href: "/ai-engineer/topics/multimodal",
    category: "Core Concept",
    title: "Multimodal Models",
    priority: "Low",
    description:
      "Working with models that handle images, audio, or video alongside text — useful to understand conceptually even before it's needed on the job.",
    tags: ["Vision-language models", "Audio input", "Cross-modal retrieval"],
  },
  {
    slug: "safety-guardrails",
    href: "/ai-engineer/topics/safety-guardrails",
    category: "Applied",
    title: "Safety & Guardrails",
    priority: "Low",
    description:
      "Input/output filtering, prompt-injection defenses, and content moderation layers around an LLM application — increasingly relevant as systems gain more autonomy.",
    tags: ["Prompt injection", "Output filtering", "Moderation APIs"],
  },
];

// ─── Interview prep ───
// Each category is meant to link out to its own deep-dive page,
// e.g. /ai-engineer/interview/system-design
export const interviewPrep = [
  {
    slug: "system-design",
    href: "/ai-engineer/interview/system-design",
    title: "AI System Design",
    priority: "High",
    description:
      "Designing an end-to-end LLM-powered system under real constraints — the most common interview format for AI engineering roles above entry level.",
    sampleQuestions: [
      "Design a RAG system for a company's internal documentation.",
      "How would you reduce latency in a customer-facing chatbot?",
      "Design an evaluation pipeline for a summarization feature.",
    ],
  },
  {
    slug: "llm-fundamentals",
    href: "/ai-engineer/interview/llm-fundamentals",
    title: "LLM & ML Fundamentals",
    priority: "High",
    description:
      "Conceptual questions on how transformers, attention, and training actually work — enough depth to reason about failure modes, not just use the APIs.",
    sampleQuestions: [
      "Explain how self-attention works in a transformer.",
      "What's the difference between fine-tuning and RAG, and when would you choose each?",
      "Why does a model hallucinate, and what reduces it?",
    ],
  },
  {
    slug: "applied-coding",
    href: "/ai-engineer/interview/applied-coding",
    title: "Applied Coding",
    priority: "High",
    description:
      "Live-coding rounds focused on building a small piece of an LLM pipeline — often a retrieval step, a prompt chain, or a simple eval script, not classic LeetCode.",
    sampleQuestions: [
      "Implement a simple chunking function for long documents.",
      "Write a function that calls an LLM API with retries and backoff.",
      "Build a minimal cosine-similarity search over a list of embeddings.",
    ],
  },
  {
    slug: "behavioral-case",
    href: "/ai-engineer/interview/behavioral-case",
    title: "Behavioral & Case Studies",
    priority: "Medium",
    description:
      "Past-project deep dives and judgment questions — how you scoped an AI feature, handled a model that underperformed, or made a build-vs-buy call.",
    sampleQuestions: [
      "Walk me through an AI feature you shipped, end to end.",
      "Tell me about a time a model behaved unexpectedly in production.",
      "How do you decide between an off-the-shelf API and a custom model?",
    ],
  },
  {
    slug: "take-home",
    href: "/ai-engineer/interview/take-home",
    title: "Take-Home & Project Rounds",
    priority: "Medium",
    description:
      "Common formats for take-home assignments — typically a small end-to-end RAG or agent build with a short write-up on your design decisions.",
    sampleQuestions: [
      "Build a small RAG app over a provided document set.",
      "Add an eval script that scores your app's answers automatically.",
      "Write up the trade-offs you made and what you'd improve with more time.",
    ],
  },
];

// ─── Project ideas ───
// Sample projects that show up either as take-homes or as strong
// portfolio pieces to point to during interviews.
export const projectIdeas = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot Over Private Docs",
    difficulty: "Beginner",
    description:
      "A chatbot that answers questions grounded in a specific document set (e.g. a product's docs), with citations back to source chunks.",
    skills: ["Chunking", "Embeddings", "Vector search"],
  },
  {
    slug: "eval-harness",
    title: "Evaluation Harness / LLM-as-Judge",
    difficulty: "Intermediate",
    description:
      "A script that runs a set of test prompts against a model, scores the outputs (via rules or a second LLM as judge), and flags regressions.",
    skills: ["Golden datasets", "LLM-as-judge", "Regression tracking"],
  },
  {
    slug: "tool-use-agent",
    title: "Agent With Tool Use",
    difficulty: "Intermediate",
    description:
      "An agent that can call a small set of real tools (search, calculator, a database lookup) to complete multi-step tasks, with visible reasoning steps.",
    skills: ["Function calling", "Planning loops", "Error handling"],
  },
  {
    slug: "fine-tune-small-task",
    title: "Fine-Tune a Small Model for a Niche Task",
    difficulty: "Advanced",
    description:
      "Fine-tune a small open model (via LoRA/QLoRA) on a narrow, well-defined task and compare it against prompting a larger general model on the same task.",
    skills: ["LoRA/QLoRA", "Dataset curation", "Cost/quality comparison"],
  },
  {
    slug: "multimodal-search",
    title: "Multimodal Image + Text Search",
    difficulty: "Advanced",
    description:
      "A search app that lets a user query a mixed image/text collection using natural language, returning relevant items across both modalities.",
    skills: ["Vision-language embeddings", "Cross-modal retrieval"],
  },
  {
    slug: "cost-latency-optimization",
    title: "Cost/Latency Optimization for a Production LLM App",
    difficulty: "Intermediate",
    description:
      "Take an existing (slow or expensive) LLM app and reduce cost or latency — via caching, smaller models for easy cases, or batching — while holding quality steady.",
    skills: ["Caching", "Model routing", "Load testing"],
  },
];

// ─── Getting started steps ───
export const gettingStarted = [
  {
    step: "1",
    title: "Skim the Roadmap",
    description:
      "Read the roadmap overview first to see how the topics below connect, before diving into any single one.",
  },
  {
    step: "2",
    title: "Focus on High-Priority Topics First",
    description:
      "Work through the High-priority topics and interview categories before the Medium/Low ones — they show up most often in both real systems and interviews.",
  },
  {
    step: "3",
    title: "Build While You Study",
    description:
      "Pick a project idea that matches the topic you just studied, so the concept gets tested against something you actually built, not just read about.",
  },
];