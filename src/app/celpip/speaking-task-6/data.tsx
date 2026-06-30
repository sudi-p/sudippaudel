// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "My Template" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
];

export const SCORE_CRITERIA = [
  {
    label: "Tone",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: 'Politeness and tact. You speak to a real person, so warmth, empathy, and soft modals (would, could, might) are essential. "More words = more polite."',
  },
  {
    label: "Task",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "You clearly choose one option, address the right person, deliver the news, and propose a solution. Don't sit on the fence.",
  },
  {
    label: "Coherence",
    badge: "bg-amber2-light text-amber2-dark",
    text: "A logical flow: greeting → validate their view → deliver the news → offer a solution → close. Easy to follow.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Accurate conditionals and polite request structures. Varied, complex sentences add sophistication.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Greeting & Situation (15s)",
    desc: "Greet the person warmly, signal it's important, and briefly set up the situation",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Empathize & Deliver (25s)",
    desc: "Validate their feelings, then gently deliver your decision (the option you chose)",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Solution & Close (20s)",
    desc: "Offer a compromise or alternative, then close persuasively and warmly",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Tone: "Consistently warm, tactful, and indirect. Soft modals and empathy throughout; never blunt.",
      Task: "Clearly chooses one option, addresses the right person, delivers the news, and offers a strong solution.",
      Coherence:
        "Greeting → validation → news → solution → close flows naturally and is easy to follow.",
      Grammar:
        "Confident conditionals and polite structures. Varied, complex sentences.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Tone: "Generally polite with some soft modals, though a few phrasings may sound a little direct.",
      Task: "Chooses an option and offers a solution, though one step (validation or compromise) may be thin.",
      Coherence: "Logical and mostly easy to follow; transitions may be basic.",
      Grammar:
        "Mostly accurate; minor errors in conditionals don't impede meaning.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Tone: "Often too direct or blunt. Few soft modals; may sound like a command rather than a polite request.",
      Task: "The choice or the solution is unclear, or the response doesn't sound like talking to a real person.",
      Coherence: "Some structure, but the flow jumps around or skips steps.",
      Grammar:
        "Errors in conditionals and tense; meaning sometimes unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Tone: "Abrupt or impolite. No softening; may sound rude or confusing.",
      Task: "No clear option chosen, no real solution, or doesn't address a person at all.",
      Coherence: "Disjointed or very brief. Hard to follow.",
      Grammar: "Frequent errors. Meaning is often unclear.",
    },
  },
];

// Fixed template signposts highlighted inside each sample answer.
export const TEMPLATE_PHRASES = [
  "hope you're doing well!",
  "There's something a little",
  "I wanted to talk to you about",
  "and I completely understand",
  "The thing is,",
  "So I think the best approach would be",
  "I'd be happy to",
  "I really hope you understand",
];

export const SAMPLE_ANSWERS = [
  {
    accent: "text-gold",
    scenario: "Scenario 1 · Cousin's extended stay",
    situation:
      "Your cousin wants to stay at your apartment for two months while job-hunting, but your lease bans long-term guests.",
    options: [
      {
        label: "Option A",
        text: "ask your roommate to make an exception",
        chosen: false,
      },
      {
        label: "Option B",
        text: "tell your cousin she can't stay, and help her find another place.",
        chosen: true,
      },
    ],
    speakingTo: "speaking to your cousin, Sam",
    greeting:
      "Hi Sam, hope you're doing well! There's something a little delicate I wanted to talk to you about — your plan to stay with me this summer.",
    empathize:
      "I know you were really excited about it, and I completely understand it would help you save money while you look for a job. The thing is, my lease doesn't allow guests to stay longer than three days, and my roommate and I could actually risk eviction if we broke that rule.",
    solution:
      "So I think the best approach would be to find you an affordable hostel or sublet nearby, and I'd be happy to help cover your first week so you'd have a comfortable place without putting us at risk. I really hope you understand — I can't wait to see you soon!",
  },
  {
    accent: "text-sapphire",
    scenario: "Scenario 2 · A noisy roommate",
    situation:
      "Your roommate plays loud music late at night and you have important exams this week.",
    options: [
      {
        label: "Option A",
        text: "talk to your roommate directly",
        chosen: true,
      },
      { label: "Option B", text: "complain to the landlord.", chosen: false },
    ],
    speakingTo: "speaking to your roommate, Alex",
    greeting:
      "Hi Alex, hope you're doing well! There's something a little delicate I wanted to talk to you about — the music late at night.",
    empathize:
      "I know how much you love your music, and I completely understand. The thing is, I've got really important exams this week, and the late-night music has been making it hard for me to sleep and focus.",
    solution:
      "So I think the best approach would be to keep things a bit quieter after ten on weeknights, or you could use headphones during exam season, and I'd be happy to do the same for you when you've got deadlines. I really hope you understand — thanks so much!",
  },
  {
    accent: "text-emerald2",
    scenario: "Scenario 3 · A coworker leaving early",
    situation:
      "A coworker often leaves early and asks you to cover their work, which is becoming too much.",
    options: [
      { label: "Option A", text: "talk to the coworker first", chosen: true },
      { label: "Option B", text: "report it to your manager.", chosen: false },
    ],
    speakingTo: "speaking to your coworker, Jordan",
    greeting:
      "Hi Jordan, hope you're doing well! There's something a little delicate I wanted to talk to you about — covering your tasks when you leave early.",
    empathize:
      "I know you've had a lot going on lately, and I completely understand. The thing is, covering your tasks on top of my own has started to get a bit overwhelming, and I'm worried it might affect the quality of both our work.",
    solution:
      "So I think the best approach would be to split the workload more evenly, or you could let me know in advance on the days you need to leave early so we can plan around it together. I really hope you understand — thanks so much for hearing me out!",
  },
  {
    accent: "text-amber2",
    scenario: "Scenario 4 · A damaged borrowed camera",
    situation:
      "You borrowed your friend's camera for a trip and accidentally cracked the lens.",
    options: [
      {
        label: "Option A",
        text: "tell your friend honestly and offer to fix it",
        chosen: true,
      },
      {
        label: "Option B",
        text: "quietly get it repaired and say nothing.",
        chosen: false,
      },
    ],
    speakingTo: "speaking to your friend, Maya",
    greeting:
      "Hi Maya, hope you're doing well! There's something a little awkward I wanted to talk to you about — the camera you kindly lent me.",
    empathize:
      "I know how much that camera means to you, and I completely understand. The thing is, while I was on the trip it slipped and the lens got cracked — I feel terrible about it, and I take full responsibility.",
    solution:
      "So I think the best approach would be for me to pay for a professional repair, or replace the lens entirely if that's easier for you. I really hope you understand — I'm so sorry, and thank you for being so understanding!",
  },
  {
    accent: "text-rose2",
    scenario: "Scenario 5 · Cancelling a planned trip",
    situation:
      "You planned a weekend trip with a friend, but a work emergency means you have to cancel.",
    options: [
      {
        label: "Option A",
        text: "call your friend and explain",
        chosen: true,
      },
      {
        label: "Option B",
        text: "ask the travel agency to reschedule and decide later.",
        chosen: false,
      },
    ],
    speakingTo: "speaking to your friend, Chris",
    greeting:
      "Hi Chris, hope you're doing well! There's something a little delicate I wanted to talk to you about — our trip this weekend.",
    empathize:
      "I know how much we've both been looking forward to this, and I completely understand if you're disappointed — I am too. The thing is, an urgent issue has come up at work that I just can't get out of, so I'm afraid I won't be able to make our trip this weekend.",
    solution:
      "So I think the best approach would be to reschedule for the following weekend if that works for you, and I'd be happy to sort out changing the bookings and cover any rebooking fees. I really hope you understand — let's lock in a new date soon!",
  },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "Pick one option in the first few seconds.",
    body: "You have 60 seconds to prepare. Choose one of the two options quickly (usually the harder, more responsible one) and spend the rest planning how to say it kindly.",
  },
  {
    category: "prep",
    color: "text-sapphire",
    title: "Decide who you're speaking to.",
    body: "Each option usually means addressing a different person. Picture them by name and imagine you're really on the phone — it makes your tone far more natural.",
  },
  {
    category: "delivery",
    color: "text-emerald2",
    title: "Validate their feelings before the bad news.",
    body: '"I know how much you were looking forward to this..." softens whatever comes next. Empathy first, decision second.',
  },
  {
    category: "language",
    color: "text-amber2",
    title: "More words = more polite.",
    body: 'Soften everything with "would," "could," "might," "I was wondering if..." Indirect phrasing sounds more respectful and scores higher on tone.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: "Always offer a solution, not just a refusal.",
    body: 'Saying "no" isn\'t enough. Propose a compromise — "I\'d be happy to help you find..." — so you leave the relationship intact.',
  },
  {
    category: "mistakes",
    color: "text-rose2",
    title: "Don't sit on the fence.",
    body: "You must clearly commit to ONE option. Trying to do both, or staying vague, is one of the biggest score-killers on this task.",
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: "Don't be blunt or commanding.",
    body: 'Avoid "You must," "You have to," or "No, that won\'t work." These sound rude. Frame everything as a gentle request or suggestion.',
  },
  {
    category: "delivery",
    color: "text-gold",
    title: 'Close warmly — don\'t ask "What do you think?"',
    body: 'End by seeking agreement ("I hope you understand") and a friendly sign-off. Asking their opinion invites a counter-argument you won\'t have time to handle.',
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];
