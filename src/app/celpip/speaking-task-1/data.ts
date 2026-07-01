// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview and Template" },
  { id: "structure", label: "Sample" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title:
      "Use prep time to identify the main problem and brainstorm 2–3 solutions.",
    body: "Jot down quick notes: problem, emotion, three pieces of advice with reasons.",
  },
  {
    category: "delivery",
    color: "text-sapphire",
    title: "Start with empathy — it makes your advice more meaningful.",
    body: 'Beginning with "I understand..." or "That sounds really difficult..." sets a positive tone.',
  },
  {
    category: "language",
    color: "text-emerald2",
    title: 'Use "I would" to personalize advice; avoid sounding preachy.',
    body: '"I would try..." sounds more humble than "You should definitely..."',
  },
  {
    category: "language",
    color: "text-amber2",
    title: "Support every suggestion with at least one reason.",
    body: "Don't just list ideas. Explain WHY each would help.",
  },
  {
    category: "mistakes",
    color: "text-rose2",
    title: "Don't sound judgmental about their situation.",
    body: 'Show understanding, not criticism. "That must be hard" scores better than "That was a bad choice."',
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: "Don't give vague advice.",
    body: '"Just be positive" is weak. "Try setting daily goals, which will help you stay motivated" is strong.',
  },
  {
    category: "delivery",
    color: "text-violet2",
    title: "End with encouragement and confidence in them.",
    body: '"I\'m sure you\'ll handle this well" or "You\'ve got this" shows belief in their ability.',
  },
  {
    category: "prep",
    color: "text-gold",
    title: "You have 90 seconds — don't rush to fill silence.",
    body: "Thoughtful pauses are fine. It's better to give great advice slowly than ramble quickly.",
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];

export const SCORE_CRITERIA = [
  {
    label: "Fluency",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: "Smooth delivery with natural pacing. Confidence when giving advice shows you understand the situation.",
  },
  {
    label: "Coherence",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Ideas flow logically. Your advice is clear and well-structured with reasons and examples.",
  },
  {
    label: "Vocabulary",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Words that express suggestions, reasoning, and empathy. Show range beyond basic vocabulary.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Varied sentence structures, conditional forms, and accurate grammar throughout.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Acknowledge (15s)",
    desc: "Show you understand the problem and empathize",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Advise (60s)",
    desc: "Give 2–3 concrete pieces of advice with reasoning",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Conclude (15s)",
    desc: "Summarize your advice and offer encouragement",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Fluency: "Natural, confident delivery. No hesitation when giving advice.",
      Coherence:
        "Advice is well-organized and logically connected. Ideas flow smoothly.",
      Vocabulary:
        "Sophisticated words for suggestions, reasoning, and empathy. Varied choices.",
      Grammar:
        "Complex sentences used confidently. Minimal errors that don't affect understanding.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Fluency:
        "Mostly smooth with minor hesitations. Generally confident delivery.",
      Coherence: "Advice is clear and organized. Most transitions work well.",
      Vocabulary: "Good range of relevant words. Some repetition acceptable.",
      Grammar:
        "Minor errors don't significantly impact meaning. Generally accurate structures.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Fluency:
        "Noticeable pauses and hesitations. Some stumbling when explaining.",
      Coherence:
        "Advice present but may lack clear organization or support.",
      Vocabulary:
        "Limited range. Basic words repeated. Some incorrect word choices.",
      Grammar:
        "Several errors. Some affect clarity. Simple sentence structures dominate.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Fluency: "Frequent hesitation and pausing. Choppy delivery.",
      Coherence: "Advice is unclear or poorly organized. Difficult to follow.",
      Vocabulary: "Very limited. Mostly basic words only.",
      Grammar:
        "Frequent errors that obscure meaning. Very simple structures only.",
    },
  },
];

export const ADVICE_TOOLKIT = [
  {
    title: "Giving Suggestions (Mix these):",
    items: [
      "If I were you, I would...",
      "You should / could / ought to...",
      "I'd strongly suggest / recommend...",
      "Another thing you might consider...",
      "I think you would benefit from...",
      "Have you thought about...?",
    ],
  },
  {
    title: "Transitions & Sequencing:",
    items: [
      "First / First of all",
      "Second / Additionally / Also",
      "Third / Finally / One more thing",
      "Another approach would be...",
      "In addition to that...",
      "What I mean is...",
    ],
  },
  {
    title: "Reason & Consequence (CRITICAL):",
    items: [
      "Because / Since / As",
      "So / Therefore / That's why",
      "Which would [benefit]",
      "This will help you [result]",
      "As a result / Consequently",
      "You'll find that / It will make...",
    ],
  },
  {
    title: "Empathetic Language:",
    items: [
      "I understand / I can see why",
      "That must be [challenging/stressful]",
      "I know how [emotion] feels",
      "In my experience / From what I've seen",
      "That's a valid concern",
      "I'm confident you can...",
    ],
  },
  {
    title: "Confidence & Closure:",
    items: [
      "I'm sure you'll succeed",
      "You've got this / You can do it",
      "I believe in you",
      "To summarize...",
      "These approaches will help you...",
      "You'll definitely feel better when...",
    ],
  },
];

// Fixed template fragments highlighted inside each sample (the reusable
// skeleton; everything else is scenario-specific fill-in).
export const TEMPLATE_PHRASES = [
  "I understand",
  "and that must",
  "I went through something similar a few years ago, so I'd like to share a few suggestions.",
  "First, if I were you, I would",
  ", because",
  "Second, you might want to",
  ", so",
  ", which",
  "Third, I'd recommend",
  "These steps will",
  "I'm confident you can do this",
];

export const SAMPLES = [
  {
    scenario:
      "Scenario 1: Career Change (Friend Nervous About Starting Over)",
    lines: [
      "\"Hi Sarah, I understand you're worried about changing careers, and that must feel overwhelming. I went through something similar a few years ago, so I'd like to share a few suggestions.\"",
      "First, if I were you, I would update your resume to highlight transferable skills, because employers value what you've already learned.",
      "Second, you might want to start networking in your new field by attending industry events or joining online communities, so you can hear about opportunities before you apply.",
      "Third, I'd recommend taking an online course to build specific skills for the new career, which will boost your confidence and make you more competitive.",
      'These steps will show employers you\'re serious and well-prepared, and I\'m confident you can do this."',
    ],
  },
  {
    scenario: "Scenario 2: Time Management at Work",
    lines: [
      "\"Hi Mark, I understand work feels overwhelming right now, and that must be really stressful. I went through something similar a few years ago, so I'd like to share a few suggestions.\"",
      "First, if I were you, I would create a priority list each morning, because it shows you which tasks matter most and stops you wasting energy on smaller things.",
      "Second, you might want to block time for focused work without interruptions, maybe turning off email for an hour, so you finish tasks faster without being constantly distracted.",
      "Third, I'd recommend talking to your manager about which tasks you can delegate or postpone, which will lighten your load since they might not realize you're overloaded.",
      'These steps will help you feel much more in control of your day, and I\'m confident you can do this."',
    ],
  },
  {
    scenario: "Scenario 3: Building Friendships (Feeling Lonely)",
    lines: [
      "\"Hi Emma, I understand you're feeling lonely while trying to build a social circle, and that must be hard. I went through something similar a few years ago, so I'd like to share a few suggestions.\"",
      "First, if I were you, I would join one activity or club that interests you, like a sports team, book club, or volunteer group, because you'll meet people with shared interests.",
      "Second, you might want to attend regularly and talk to the same people instead of just showing up once, so the bonds have time to develop naturally.",
      "Third, I'd recommend hosting a small gathering or inviting someone for coffee, which will help because most people appreciate when someone takes the initiative.",
      'These steps will give you real opportunities to connect, and I\'m confident you can do this."',
    ],
  },
  {
    scenario: "Scenario 4: Starting a New Hobby",
    lines: [
      "\"Hi Jake, I understand you're nervous about starting a new hobby, and that must feel a little daunting. I went through something similar a few years ago, so I'd like to share a few suggestions.\"",
      "First, if I were you, I would research beginner resources like YouTube tutorials, books, and community classes, because they help you avoid expensive mistakes and learn the basics safely.",
      "Second, you might want to start with one affordable beginner kit rather than buying everything at once, so you can try it without a big investment.",
      "Third, I'd recommend finding others doing the same hobby in online communities or local groups, which will keep you motivated since they can answer your questions.",
      'These steps will help you build confidence without feeling overwhelmed, and I\'m confident you can do this."',
    ],
  },
  {
    scenario: "Scenario 5: Improving English Skills",
    lines: [
      "\"Hi Maria, I understand improving your English feels like a big effort, and that must be frustrating at times. I went through something similar a few years ago, so I'd like to share a few suggestions.\"",
      "First, if I were you, I would set a specific daily practice routine of even just 30 minutes, because consistency is what builds real progress.",
      "Second, you might want to mix listening, speaking, reading, and writing instead of focusing on one skill, so all parts of the language reinforce each other.",
      "Third, I'd recommend finding a conversation partner online or locally, which will build your confidence faster because you practise naturally rather than studying alone.",
      'These steps will help you reach your goals, and I\'m confident you can do this."',
    ],
  },
];
