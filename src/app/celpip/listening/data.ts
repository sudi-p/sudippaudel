// @ts-nocheck
/* eslint-disable */

// CELPIP-General Listening: ~47–55 min · 38 scored questions · 6 parts.
// Audio plays ONCE — no replay. A short Practice Task at the start is NOT scored.

export const GOLDEN_RULES = [
  "Every clip plays ONCE — there is no replay button. Full focus, first time.",
  "Note-taking is allowed — use the note board for numbers, names, and decisions.",
  "In most parts you can't return to a previous question — commit and move on.",
  "Never leave a blank. Wrong answers aren't penalized, so always guess.",
  "Watch for distractors — words you heard that are the wrong answer in context.",
  "Use the unscored Practice Task to set your headset volume and settle nerves.",
];

export const PARTS = [
  {
    n: 1,
    name: "Listening to Problem Solving",
    theme: "sapphire",
    questions: "8 questions",
    format: "Conversation, split into segments",
    summary:
      "Two people discuss a problem. The conversation is broken into chunks, and a question appears after each chunk — you answer as you go and can't go back.",
    tricks: [
      "In the first few seconds, lock down WHO has the problem and WHAT it is.",
      "Track every option or solution suggested, and note which one they settle on.",
      "Listen for reason signals — \"the issue is…\", \"because…\", \"the problem with that…\".",
      "Questions come one at a time between segments: answer fast, then reset for the next chunk.",
      "You cannot replay or revisit earlier questions — make your best choice and keep moving.",
    ],
  },
  {
    n: 2,
    name: "Listening to a Daily Life Conversation",
    theme: "emerald2",
    questions: "5 questions",
    format: "One casual conversation, then questions",
    summary:
      "A relaxed conversation between friends, family, or coworkers. You hear the whole thing once, then answer all the questions.",
    tricks: [
      "Map the relationship and the situation early — who are they and why are they talking?",
      "Tone and feelings are often tested. Note attitude words and emotional shifts.",
      "Track plans and agreements: who will do what, when, and where.",
      "Answers often rely on implied meaning — listen for what's suggested, not just stated.",
    ],
  },
  {
    n: 3,
    name: "Listening for Information",
    theme: "amber2",
    questions: "6 questions",
    format: "Informational conversation (facts & details)",
    summary:
      "An information-giving exchange — like a phone enquiry or interview. Loaded with concrete details: numbers, dates, names, prices, instructions.",
    tricks: [
      "This is where notes pay off most — jot numbers, times, names, and amounts as you hear them.",
      "Expect corrections: \"actually, it's…\", \"sorry, I meant…\". The updated detail is the answer.",
      "Don't grab the first number you hear — wait to see if it gets revised.",
      "Organize your notes by who / what / when / how much so you can find facts fast.",
    ],
  },
  {
    n: 4,
    name: "Listening to a News Item",
    theme: "rose2",
    questions: "5 questions",
    format: "Short news report (monologue)",
    summary:
      "A brief, formal news broadcast read by one speaker. Tests your grasp of the main event and its key facts.",
    tricks: [
      "The first sentence usually carries the core: who, what, and where. Catch it.",
      "Note cause and effect, statistics, and any future plans or next steps mentioned.",
      "News English is formal and often passive — focus on the underlying facts, not the wording.",
      "Anticipate questions about consequences and about quotes from officials or experts.",
    ],
  },
  {
    n: 5,
    name: "Listening to a Discussion",
    theme: "violet2",
    questions: "8 questions",
    format: "Multi-speaker discussion (may show images)",
    summary:
      "Several people (often three) discuss a topic, like a workplace meeting. Some questions show images on screen that you match to what's described.",
    tricks: [
      "Keep speakers separate — use initials in your notes to track WHO says WHAT.",
      "If images appear, match each description to the correct picture as you listen.",
      "Listen for agreement, disagreement, and the final decision the group reaches.",
      "Note each person's opinion or role, plus any task that gets assigned to them.",
    ],
  },
  {
    n: 6,
    name: "Listening to Viewpoints",
    theme: "sapphire",
    questions: "6 questions",
    format: "Long monologue presenting several viewpoints",
    summary:
      "One speaker lays out multiple perspectives on a single topic. It's long, dense, and comes last — exactly when fatigue is highest.",
    tricks: [
      "This is the toughest part and arrives when you're tired — consciously re-focus before it starts.",
      "The speaker walks through several viewpoints; note each one and the speaker's own stance.",
      "Track opinion signals — \"some argue…\", \"however…\", \"in my view…\", \"on the other hand…\".",
      "Questions target main ideas, supporting details, and the speaker's final conclusion.",
    ],
  },
];

export const GENERAL_STRATEGY = [
  {
    title: "Before the audio",
    items: [
      "Skim the answer options whenever they appear before the clip — predict what to listen for.",
      "Set headset volume during the practice task; flag any audio issue to the administrator immediately.",
      "Have your note board ready and your pen in hand before each part begins.",
    ],
  },
  {
    title: "While listening",
    items: [
      "Listen for meaning and intent, not isolated words — distractors reuse words you heard.",
      "Note only key triggers: numbers, names, decisions, opinions. Don't try to transcribe.",
      "Catch signpost words — \"but\", \"however\", \"finally\", \"the main reason\" — they flag answers.",
    ],
  },
  {
    title: "Choosing answers",
    items: [
      "Eliminate clearly wrong options first, then choose the best of what remains.",
      "If two options seem right, pick the one that matches the speaker's intent, not just the words.",
      "Never leave a blank — there's no penalty, so always lock in a best guess before moving on.",
    ],
  },
  {
    title: "Pacing & mindset",
    items: [
      "You can't replay or go back — don't freeze on a missed detail; refocus for the next question.",
      "Save your sharpest focus for Parts 5 and 6, the longest and hardest sections.",
      "Stay calm if you miss something — one detail rarely sinks a whole part. Keep going.",
    ],
  },
];

export const THEME = {
  sapphire: { badge: "bg-sapphire-light text-sapphire-dark", accent: "text-sapphire", num: "bg-sapphire" },
  emerald2: { badge: "bg-emerald2-light text-emerald2-dark", accent: "text-emerald2", num: "bg-emerald2" },
  amber2: { badge: "bg-amber2-light text-amber2-dark", accent: "text-amber2", num: "bg-amber2" },
  rose2: { badge: "bg-rose2-light text-rose2-dark", accent: "text-rose2", num: "bg-rose2" },
  violet2: { badge: "bg-violet2-light text-violet2-dark", accent: "text-violet2", num: "bg-violet2" },
};
