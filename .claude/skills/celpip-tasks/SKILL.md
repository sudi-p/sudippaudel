---
name: celpip-tasks
description: Authoritative reference for all CELPIP Speaking (Tasks 1–8) and Writing (Tasks 1–2) task formats, prompts, timing, word counts, structure, and scoring. READ THIS BEFORE generating, editing, or reviewing any CELPIP practice content, prompts, sample answers, templates, vocab banks, tips, or task data.ts files in this repo (src/app/celpip/**). Use when the user asks to create or modify content for any speaking-task-N or writing-task-N page.
---

# CELPIP Task Reference

Read this file fully before producing any CELPIP content. Every prompt, sample answer,
template, tip, or word/time budget you generate MUST match the specs below. When the user
asks for content for a specific task, jump to that task's section and honor its exact
timing, word count, and what the prompt presents to the test-taker.

> Test is fully computer-delivered. Speaking responses are recorded; writing is typed.
> Both modules are rated by trained CELPIP raters on a 12-point scale that maps to CLB levels.

---

## SPEAKING — 8 tasks, ~15–20 minutes total

General rules:
- Each task: on-screen prep time, then a recorded spoken response (mic only — no second take).
- Prep time is **20–60 seconds** depending on task; response time is **60 or 90 seconds**.
- Tasks 3 and 4 share the **same illustration**. Task 8 uses a separate unusual picture.
- Picture-based tasks: 3, 4, 8. All others are text-prompt scenarios.

| # | Task name | Prep | Response | Picture? |
|---|-----------|------|----------|----------|
| 1 | Giving Advice | 30s | 90s | No |
| 2 | Talking About a Personal Experience | 30s | 60s | No |
| 3 | Describing a Scene | 30s | 60s | Yes |
| 4 | Making Predictions | 30s | 60s | Yes (same image as T3) |
| 5 | Comparing and Persuading | 60s | 60s | No |
| 6 | Dealing with a Difficult Situation | 60s | 60s | No |
| 7 | Expressing Opinions | 30s | 90s | No |
| 8 | Describing an Unusual Situation | 30s | 60s | Yes |

### Task 1 — Giving Advice (prep 30s / speak 90s)
Prompt gives a scenario where a friend/family/colleague faces a decision or problem.
You give **supportive advice** with reasons. Tone: empathetic, not preachy. Use "I would…",
modals (could/should/might). Structure: acknowledge → 2–3 pieces of advice each with a reason
→ encouragement.

**My Template (from `speaking-task-1/data.ts` → `BLUEPRINT`):**
1. Acknowledge (15s) — show you understand the problem and empathize
2. Advise (60s) — give 2–3 concrete pieces of advice with reasoning
3. Conclude (15s) — summarize your advice and offer encouragement

### Task 2 — Personal Experience (prep 30s / speak 60s)
Prompt asks you to recount a specific memorable past event ("Describe a time when…").
Heavily tests **past tenses** and narrative detail. Structure: set scene (when/where/who) →
what happened (sequence) → outcome/feeling. Use sequencing words (first, then, after that).

**My Template (from `speaking-task-2/data.tsx` → `BLUEPRINT`):**
1. Opening (20s) — name the event, when it happened, why it mattered
2. Body (50s) — describe one key moment with sensory details; show emotion shift
3. Closing (20s) — reflect on what you learned or how it changed you

### Task 3 — Describing a Scene (prep 30s / speak 60s)
You see an illustration and describe it to **someone who cannot see it**.
Cover: setting/location, people and what they're doing, objects, spatial relations
(left/right/foreground/background), and mood. Use present continuous ("a man is…"),
prepositions of place, and ordered spatial scanning.

**My Template (from `speaking-task-3/data.tsx` → `BLUEPRINT` + `TEMPLATE_PARTS`):**
1. Setting (~10s) — "This image shows a [scene], taken during [the day / the evening]. The
   atmosphere looks [mood], and [one striking detail stands out]."
2. Details (~35s) — "In the foreground, [nearest objects/people and what they're doing]. In
   the middle, [what's happening, plus main colours]. In the background, [what's further back]."
3. Impression/Conclusion (~15s) — "Overall, [what the scene captures]. It looks like [your
   interpretation], and I would [personal reaction]."

### Task 4 — Making Predictions (prep 30s / speak 60s)
**Same image as Task 3.** Predict what will happen next.
Tests **future forms** (will, going to, might, is likely to). Base predictions on visual
cues already described. Structure: 2–3 predictions, each with a reason grounded in the scene.

**My Template (from `speaking-task-4/data.tsx` → `BLUEPRINT` + `CLOSING_TEMPLATES`):**
1. Setup (10s) — acknowledge the scenario briefly; show you understood it
2. Predictions (35s) — present 2–3 specific, logical predictions using conditional language
3. Reasoning (15s) — explain why these predictions make sense; link to real-world factors
   Closing line: "Overall, [how the scene will change in an hour], because [a real-world
   reason — time of day, weather, or human nature]."

### Task 5 — Comparing and Persuading (prep 60s / speak 60s)
You're shown **two options**; you select one, then the computer picks the other. You must
persuade a person to agree with **your** choice. Note the longer 60s prep. Structure:
state choice → 2–3 persuasive reasons with benefits → address why it beats the alternative →
call to agree. Comparative/superlative language, persuasive phrasing.

**My Template (from `speaking-task-5/data.tsx` → `BLUEPRINT`):**
1. Opening & Soft Rejection (10s) — greet the person, acknowledge their option, and state
   which one you've chosen
2. Compare 2–3 Points (40s) — price first, then value, then one detail — comparing your
   choice against theirs
3. Conclusion (10s) — restate your choice and ask for their agreement

### Task 6 — Dealing with a Difficult Situation (prep 60s / speak 60s)
A scenario forces a tricky choice — typically **break bad news / decline politely / resolve
a conflict**, often choosing between two people/options to address. Note 60s prep.
Tone: diplomatic, polite, solution-oriented. Structure: address the situation tactfully →
explain → offer a solution/compromise → reassure.

**My Template (from `speaking-task-6/data.tsx` → `BLUEPRINT`):**
1. Greeting & Situation (15s) — greet the person warmly, signal it's important, and briefly
   set up the situation
2. Empathize & Deliver (25s) — validate their feelings, then gently deliver your decision
   (the option you chose)
3. Solution & Close (20s) — offer a compromise or alternative, then close persuasively and
   warmly

### Task 7 — Expressing Opinions (prep 30s / speak 90s)
A debatable societal statement; agree or disagree and **defend your position**.
Longer 90s response. Structure: clear position → 2–3 reasons each with explanation + example →
brief acknowledgment of other side → restate position. Opinion/justification language.

**My Template (from `speaking-task-7/data.tsx` → `BLUEPRINT`):**
1. Statement (10s) — clearly state your opinion on the topic
2. Support (40s) — give 2–3 reasons with specific examples
3. Closing (10s) — restate your position and summarize why

### Task 8 — Describing an Unusual Situation (prep 30s / speak 60s)
You see an **unusual/absurd picture** and describe it (often framed as describing an item to
someone over the phone who can't see it). Tests precise **descriptive vocabulary** for shape,
size, colour, material, and function/use. Structure: overview → detailed features → purpose
or what's odd about it.

**My Template (from `speaking-task-8/data.tsx` → `BLUEPRINT`):**
1. Setup & Overview (15s) — greet the person, say why you're calling, and give a one-line
   overview of what you're looking at
2. Detailed Description (35s) — walk through the image spatially; describe colours, shapes,
   actions, and what makes it unusual
3. Closing Question (10s) — ask the specific question from the prompt and end the call
   naturally

### Speaking scoring (4 equally weighted dimensions)
Content/Coherence · Vocabulary · Listenability · Task Fulfillment.

---

## WRITING — 2 tasks, ~53 minutes total

General rules:
- Typed responses. **150–200 words** each (aim ~170–200). No hard max, but over-writing wastes
  time and doesn't raise the score; under 150 loses development marks.
- Suggested split per task: ~5 min plan, ~18–20 min write, ~3–5 min review.
- Built-in word counter; basic editing only (no spell-check grammar correction).

| # | Task name | Time | Words |
|---|-----------|------|-------|
| 1 | Writing an Email | 27 min | 150–200 |
| 2 | Responding to Survey Questions / Opinion | 26 min | 150–200 |

### Task 1 — Writing an Email (27 min, 150–200 words)
Prompt gives a **situation** and **3–4 bullet points** of information you MUST include.
Decide formal vs. informal from the recipient/context. Required structure:
- Subject line (clear, relevant)
- Greeting ("Dear …" / "Hi …")
- Opening: purpose of the email
- Body: address **every** bullet, with context/details/request
- Closing: appreciation / next step
- Sign-off + name

Match register to audience. Cover all bullets — missing one hurts Task Fulfillment.

**My Template (from `writing-task-1/data.tsx` → `FOUR_PART`):**
1. Greeting (1–2 lines) — professional salutation (Dear [Name] or Dear Sir/Madam)
2. Opening (2–3 sentences) — state the purpose of the email clearly and politely
3. Body (3–4 sentences) — provide details, explanation, or key information
4. Closing (1–2 sentences) — polite sign-off with your name

Reusable signpost phrases (`TEMPLATE_PHRASES`): "Dear", "I am writing to", "Thank you for",
"I look forward to", "Sincerely,", "Best regards,".

### Task 2 — Responding to a Survey / Opinion (26 min, 150–200 words)
Prompt presents a survey scenario with **two options**. Instructions read like:
"Choose the option you prefer. Why do you prefer your choice? Explain the reasons."
Pick ONE and justify. Structure:
- Opening: state your chosen option clearly
- Body: 2–3 developed reasons, each with explanation + specific example
- Optional: brief counterargument acknowledging the other option
- Closing: confidently restate your choice (≈2 sentences)

**My Template (from `writing-task-2/data.tsx` → `FOUR_PART`):**
1. Introduction (2–3 sentences) — hook, context, and clear thesis statement taking a position
2. Body Paragraphs (2 × 3–4 sentences) — each supports the thesis with one main idea, evidence,
   and reasoning; the second adds an "Admittedly… However…" concession
3. Conclusion (2–3 sentences) — restate thesis, summarize key points, end with a strong final
   thought

Reusable signpost phrases (`TEMPLATE_PHRASES`): "In my view,", "First,", "Additionally,",
"Admittedly,", "However,", "In conclusion,", "Ultimately,".

### Writing scoring (4 dimensions)
Content/Coherence · Vocabulary (Lexical Range) · Readability · Task Fulfillment.

---

## When generating content for this repo

- Page/data lives under `src/app/celpip/<speaking-task-N|writing-task-N>/data.ts`.
- Existing `data.ts` files use tabbed sections (e.g. Overview, Template, Vocab Bank, Pro Tips)
  with `TABS`, `TIPS`, etc. Match the existing file's shape and tone — don't invent a new schema.
- Any practice prompt you write must reflect the **exact prep/response time** (speaking) or
  **time + 150–200 word target** (writing) of that task.
- Sample answers should fit the response budget (a 60s spoken answer ≈ 120–150 words;
  90s ≈ 180–220 words) and demonstrate the task's target grammar (e.g. past tense for T2,
  future for T4, persuasion for T5).
- Tips/templates must align with the task's required structure above.
