// @ts-nocheck
/* eslint-disable */

// CELPIP-General Reading: ~55–60 min · 38 scored questions · 4 parts.
// Self-paced — you budget your own time and CAN move back and forth.
// A short Practice Task at the start is NOT scored.

export const GOLDEN_RULES = [
  "Reading is self-paced — you control the clock across all four parts.",
  "You CAN move back and forth and review answers within the section.",
  "Skim first for the gist, then scan for the specific answer — don't read every word.",
  "Answers are paraphrased — match the meaning, not the exact words from the text.",
  "Never leave a blank. Guessing is free, so always lock in a best answer.",
  "Part 4 is the longest and densest, and it comes last — protect time for it.",
]

export const PARTS = [
  {
    n: 1,
    name: "Reading Correspondence",
    theme: "sapphire",
    questions: "11 questions",
    format: "A message + a reply to complete",
    summary:
      "You read a personal letter or email, answer comprehension questions, then complete a reply by choosing words to fill its blanks.",
    tricks: [
      "Skim the message first for the essentials: who wrote it, to whom, why, and in what tone.",
      "Comprehension answers tend to follow the order of the message — locate the relevant line.",
      "For the reply blanks, pick the option that fits BOTH the meaning and the formality/tone.",
      "Pronouns, dates, and times are classic detail traps — read them carefully.",
    ],
  },
  {
    n: 2,
    name: "Reading to Apply a Diagram",
    theme: "emerald2",
    questions: "8 questions",
    format: "A diagram/graphic + an email response",
    summary:
      "You read a diagram, chart, or illustrated list alongside an email, then answer questions and complete a response using the information shown.",
    tricks: [
      "Study the diagram's structure first — headings, categories, and labels — before the questions.",
      "Cross-reference: match what the email asks against the right row, cell, or section of the diagram.",
      "For the response blanks, make sure your choice actually agrees with the diagram's facts.",
      "Beware options that are true in general but don't fit this specific person's need.",
    ],
  },
  {
    n: 3,
    name: "Reading for Information",
    theme: "amber2",
    questions: "9 questions",
    format: "Paragraphs A–D + statements to match",
    summary:
      "An informational passage split into labelled paragraphs. You match each statement to the paragraph it relates to — or to \"not given\".",
    tricks: [
      "This is a pure scanning task — read the statement first, then hunt the paragraphs for its idea.",
      "Identify keywords in the statement, then look for paraphrases, not the identical words.",
      "Don't read top-to-bottom — jump straight to where the idea is likely to appear.",
      "\"Not given\" is a genuine option: if nothing supports the statement, choose it — don't force a match.",
    ],
  },
  {
    n: 4,
    name: "Reading for Viewpoints",
    theme: "rose2",
    questions: "10 questions",
    format: "Article + reader comment to complete",
    summary:
      "A passage presenting different opinions (often a news report) followed by a reader comment. Tests stance, attitude, and inference.",
    tricks: [
      "Pin down each viewpoint and WHO holds it — the article's author versus the commenter.",
      "Separate fact from opinion; many questions test attitude and stance, not just details.",
      "For the comment-completion blanks, keep the writer's opinion and tone consistent throughout.",
      "It's the longest, densest part and arrives last — budget enough time and re-focus before it.",
    ],
  },
]

export const GENERAL_STRATEGY = [
  {
    title: "Time budget",
    items: [
      "You have ~55–60 minutes for all four parts — split it and watch the clock.",
      "Don't over-invest in early questions; Parts 3 and 4 need your remaining time and energy.",
      "If a question stalls you, flag it, move on, and return — you're allowed to come back.",
    ],
  },
  {
    title: "Skim & scan",
    items: [
      "Skim the whole text once for gist before answering — know what it's broadly about.",
      "Then scan for specific answers using keywords; you rarely need to read every sentence.",
      "Use structure — headings, paragraph labels, diagram sections — to jump to the right spot.",
    ],
  },
  {
    title: "Choosing answers",
    items: [
      "Match meaning, not vocabulary — correct answers paraphrase the text.",
      "Eliminate options that are too extreme, off-topic, or true-but-irrelevant.",
      "For fill-in-the-blank parts, test each option for grammar AND sense in the sentence.",
    ],
  },
  {
    title: "Review & mindset",
    items: [
      "Never leave a blank — there's no penalty, so guess before moving on.",
      "If time remains, revisit flagged questions rather than re-checking ones you were sure of.",
      "Stay calm with unfamiliar topics — the answers are always in the text, not your prior knowledge.",
    ],
  },
]

export const THEME = {
  sapphire: { badge: "bg-sapphire-light text-sapphire-dark", accent: "text-sapphire", num: "bg-sapphire" },
  emerald2: { badge: "bg-emerald2-light text-emerald2-dark", accent: "text-emerald2", num: "bg-emerald2" },
  amber2: { badge: "bg-amber2-light text-amber2-dark", accent: "text-amber2", num: "bg-amber2" },
  rose2: { badge: "bg-rose2-light text-rose2-dark", accent: "text-rose2", num: "bg-rose2" },
  violet2: { badge: "bg-violet2-light text-violet2-dark", accent: "text-violet2", num: "bg-violet2" },
}
