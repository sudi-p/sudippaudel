// @ts-nocheck
/* eslint-disable */

// Compact, exam-day templates pulled from each task's full study guide.
// Each `parts` entry is one beat of the response: a label, the timing/role,
// and a fill-in-the-blank frame to memorize.

export const GOLDEN_RULES = [
  "Speaking: you get ONE take per task — keep talking, never restart.",
  "Writing: aim 170–200 words. Under 150 loses development marks.",
  "Always answer EVERY bullet / part of the prompt — that's Task Fulfillment.",
  "Use the [brackets] as slots. Memorize the frame, swap in the topic.",
  "Past tense for T2 · Present continuous for T3 · Future forms for T4.",
];

export const SPEAKING = [
  {
    n: 1,
    name: "Giving Advice",
    theme: "sapphire",
    prep: "30s prep",
    speak: "90s speak",
    powerMove: "Start with empathy, end with encouragement — and give a REASON for every tip.",
    parts: [
      {
        label: "Acknowledge",
        meta: "~15s",
        frame: "\"I understand you're worried about [problem] — that's totally natural.\"",
      },
      {
        label: "Advise ×2–3",
        meta: "~60s",
        frame: "\"First, if I were you, I'd [advice], because [reason]. Second, you should [advice], so [result]. Third, I'd recommend [advice], which will [benefit].\"",
      },
      {
        label: "Conclude",
        meta: "~15s",
        frame: "\"These steps will really help. I'm sure you'll handle this well!\"",
      },
    ],
  },
  {
    n: 2,
    name: "Personal Experience",
    theme: "sapphire",
    prep: "30s prep",
    speak: "60s speak",
    powerMove: "Tell ONE story in the past tense — set the scene, sequence events, end with a feeling.",
    parts: [
      {
        label: "Opening",
        meta: "~10s",
        frame: "\"A few years back, [event] happened — it's a moment I still think about.\"",
      },
      {
        label: "Body",
        meta: "~40s",
        frame: "\"It was [when/where, who with]. First, [what happened]. Then [next thing]. I felt [emotion] because [why].\"",
      },
      {
        label: "Closing",
        meta: "~10s",
        frame: "\"Looking back, that experience taught me [lesson / how it changed me].\"",
      },
    ],
  },
  {
    n: 3,
    name: "Describe the Image",
    theme: "sapphire",
    prep: "30s prep",
    speak: "60s speak",
    powerMove: "Scan foreground → middle → background. Present continuous + prepositions of place.",
    parts: [
      {
        label: "Setting",
        meta: "~10s",
        frame: "\"This is [place], during [time of day]. The atmosphere looks [busy / peaceful / lively].\"",
      },
      {
        label: "Details",
        meta: "~35s",
        frame: "\"In the foreground, [a person] is [—ing]. In the middle, [detail]. In the background, [detail]. I can see [colours].\"",
      },
      {
        label: "Impression",
        meta: "~15s",
        frame: "\"Overall, the scene feels [calm / chaotic / cheerful] to me.\"",
      },
    ],
  },
  {
    n: 4,
    name: "Make Predictions",
    theme: "emerald2",
    prep: "30s prep",
    speak: "60s speak",
    powerMove: "Same image as T3. Use future forms (will / going to / might / is likely to) tied to visual cues.",
    parts: [
      {
        label: "Setup",
        meta: "~10s",
        frame: "\"Based on what's in the scene, here's what I think will happen next.\"",
      },
      {
        label: "Predictions ×2–3",
        meta: "~35s",
        frame: "\"First, [person] is probably going to [action], because [cue]. Then, [event] is likely to happen. They might also [prediction].\"",
      },
      {
        label: "Reasoning",
        meta: "~15s",
        frame: "\"Overall, the scene will become [change] as [reason grounded in the picture].\"",
      },
    ],
  },
  {
    n: 5,
    name: "Compare & Persuade",
    theme: "emerald2",
    prep: "60s prep",
    speak: "60s speak",
    powerMove: "Pick ONE option. Lead with price + exact numbers, then value, then one detail. Comparatives everywhere.",
    parts: [
      {
        label: "Open + soft reject",
        meta: "~10s",
        frame: "\"Hi [name], I saw you were leaning toward [their option]. I get why, but I really think [your option] is better for us.\"",
      },
      {
        label: "Compare ×2–3",
        meta: "~40s",
        frame: "\"First, on price, [yours] costs [X] — much cheaper than [theirs] at [Y]. Also, it [benefit], which matters because [reason]. Finally, [one detail].\"",
      },
      {
        label: "Close + ask",
        meta: "~10s",
        frame: "\"So let's go with [your option] — what do you say?\"",
      },
    ],
  },
  {
    n: 6,
    name: "Difficult Situation",
    theme: "amber2",
    prep: "60s prep",
    speak: "60s speak",
    powerMove: "Be diplomatic: empathize first, deliver the hard news gently, then offer a compromise.",
    parts: [
      {
        label: "Greet + situation",
        meta: "~15s",
        frame: "\"Hi [name], hope you're well. I have something a bit delicate to talk about regarding [situation].\"",
      },
      {
        label: "Empathize + deliver",
        meta: "~25s",
        frame: "\"I know you were counting on [their hope], and I completely understand. However, I'm afraid that [your decision].\"",
      },
      {
        label: "Solution + close",
        meta: "~20s",
        frame: "\"The best way forward would be to [solution]. I'd be happy to [offer]. I hope you see where I'm coming from — [warm sign-off].\"",
      },
    ],
  },
  {
    n: 7,
    name: "Express Opinions",
    theme: "amber2",
    prep: "30s prep",
    speak: "90s speak",
    powerMove: "Take a clear side. 2–3 reasons, each with a real example. Briefly acknowledge the other side.",
    parts: [
      {
        label: "Statement",
        meta: "~10s",
        frame: "\"I strongly believe [your opinion]. In my view, this is because [core reason].\"",
      },
      {
        label: "Support ×2–3",
        meta: "~65s",
        frame: "\"First, [reason 1]. For example, [specific example]. Second, [reason 2], which shows [why it matters]. Some may argue [other side], but [rebuttal].\"",
      },
      {
        label: "Closing",
        meta: "~15s",
        frame: "\"In conclusion, I firmly believe [restate opinion]. The evidence clearly shows that [summary].\"",
      },
    ],
  },
  {
    n: 8,
    name: "Unusual Situation",
    theme: "rose2",
    prep: "30s prep",
    speak: "60s speak",
    powerMove: "You're describing it over the phone. Precise shape, size, colour, material — and what's odd about it.",
    parts: [
      {
        label: "Setup + overview",
        meta: "~15s",
        frame: "\"Hi [name], I'm calling because I'm looking at [the thing] — it's the strangest thing I've ever seen. It's basically [one-line overview].\"",
      },
      {
        label: "Detailed description",
        meta: "~35s",
        frame: "\"On the left / in the centre, there's [main feature]. Next to it, [detail]. What makes it unusual is [odd part]. It's [colour/material] and looks like [comparison].\"",
      },
      {
        label: "Closing question",
        meta: "~10s",
        frame: "\"So, what do you think — [the question from the prompt]? Let me know soon!\"",
      },
    ],
  },
];

export const WRITING = [
  {
    n: 1,
    name: "Writing an Email",
    theme: "amber2",
    time: "27 min",
    words: "150–200 words",
    powerMove: "Read the recipient → pick formal vs. informal. Then cover EVERY bullet, one per body sentence.",
    parts: [
      {
        label: "Subject + Greeting",
        meta: "1–2 lines",
        frame: "Subject: [clear, specific topic]  ·  \"Dear [Name],\" (formal) or \"Hi [Name],\" (informal)",
      },
      {
        label: "Opening",
        meta: "2–3 sentences",
        frame: "\"I am writing to [purpose of the email].\"",
      },
      {
        label: "Body — hit every bullet",
        meta: "3–5 sentences",
        frame: "\"[Bullet 1 with detail]. Additionally, [bullet 2]. I would also like to [bullet 3 / request].\"",
      },
      {
        label: "Closing + sign-off",
        meta: "1–2 sentences",
        frame: "\"Thank you for your time. I look forward to your reply.\"  ·  \"Sincerely, [Name]\"",
      },
    ],
  },
  {
    n: 2,
    name: "Survey / Opinion Response",
    theme: "rose2",
    time: "26 min",
    words: "150–200 words",
    powerMove: "Choose ONE option up front. 2 developed reasons + examples. Concede the other side, then refute it.",
    parts: [
      {
        label: "Introduction",
        meta: "2–3 sentences",
        frame: "\"While both options have merit, I strongly prefer [option] for two main reasons.\"",
      },
      {
        label: "Body 1",
        meta: "3–4 sentences",
        frame: "\"Firstly, [reason 1]. For instance, [specific example that proves it].\"",
      },
      {
        label: "Body 2 + concession",
        meta: "3–4 sentences",
        frame: "\"Secondly, [reason 2]. Admittedly, [other option] offers [point]; however, [why yours still wins].\"",
      },
      {
        label: "Conclusion",
        meta: "2–3 sentences",
        frame: "\"In conclusion, for the reasons above, [option] is clearly the better choice.\"",
      },
    ],
  },
];

// Tailwind token map so cards can theme by string key.
export const THEME = {
  sapphire: { badge: "bg-sapphire-light text-sapphire-dark", hover: "group-hover:text-sapphire", num: "bg-sapphire" },
  emerald2: { badge: "bg-emerald2-light text-emerald2-dark", hover: "group-hover:text-emerald2", num: "bg-emerald2" },
  amber2: { badge: "bg-amber2-light text-amber2-dark", hover: "group-hover:text-amber2", num: "bg-amber2" },
  rose2: { badge: "bg-rose2-light text-rose2-dark", hover: "group-hover:text-rose2", num: "bg-rose2" },
};
