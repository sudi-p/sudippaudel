// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "My Template" },
  { id: "scenarios", label: "Scenario Types" },
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

// Real-exam categories of difficult situation. Every Task 6 prompt is a
// variation of one of these. Each sample answer reuses the SAME template
// skeleton from "My Template" (the highlighted TEMPLATE_PHRASES) so learners
// see one reliable structure works for every category.
export const SCENARIO_TYPES = [
  {
    n: "1",
    badge: "bg-rose2",
    accent: "text-rose2",
    title: "Declining a Request",
    examples:
      "e.g. a friend asks to borrow money or your car, a relative wants to move in, someone asks you to cover their shift",
    phrases: [
      {
        phrase: "I really wish I could help with this",
        use: "Buy goodwill before you say no.",
      },
      {
        phrase: "I'm just not in a position to…",
        use: "A soft, blameless way to refuse.",
      },
      {
        phrase: "It's not that I don't want to, it's that…",
        use: "Separate the person from the refusal.",
      },
      {
        phrase: "What I can do instead is…",
        use: "Pivot from a flat no to an offer.",
      },
    ],
    approachHint:
      "Lead with warmth, give one honest reason, and never leave them empty-handed — always pivot to what you CAN do.",
    responseLabel: "Friend wants to borrow your car",
    greeting:
      "Hi Dani, hope you're doing well! There's something a little tricky I wanted to talk to you about — your road trip next weekend.",
    empathize:
      "I know how much you've been looking forward to it, and I completely understand why you'd want a reliable car for the drive. The thing is, I actually need my car that same weekend to take my mom to her medical appointments, so I'm afraid I can't lend it to you this time.",
    solution:
      "So I think the best approach would be to help you book a rental from the place near campus that does student discounts, and I'd be happy to split the cost with you as an early birthday gift. I really hope you understand — I want your trip to go perfectly!",
  },
  {
    n: "2",
    badge: "bg-sapphire",
    accent: "text-sapphire",
    title: "Cancelling or Breaking Bad News",
    examples:
      "e.g. cancelling a trip or party, missing a wedding, telling someone an event has been called off",
    phrases: [
      {
        phrase: "I've got some news you're not going to love",
        use: "Pre-warn them gently before the blow.",
      },
      {
        phrase: "I held off telling you, hoping things would change",
        use: "Show it wasn't careless.",
      },
      {
        phrase: "This is completely out of my hands",
        use: "Make clear it isn't a free choice.",
      },
      {
        phrase: "Let's find another way to make it happen",
        use: "Keep the door open for next time.",
      },
    ],
    approachHint:
      "Pre-warn gently, take the blame off yourself where it's genuine, and immediately propose a way to reschedule or make up for it.",
    responseLabel: "Cancelling a weekend trip",
    greeting:
      "Hi Priya, hope you're doing well! There's something a little disappointing I wanted to talk to you about — our trip this weekend.",
    empathize:
      "I know we've both been counting down to this for weeks, and I completely understand if you're upset, because honestly I am too. The thing is, an urgent project at work has just been moved up and I have to be in the office on Saturday, so I'm afraid I won't be able to come away with you this weekend.",
    solution:
      "So I think the best approach would be to push the trip to the long weekend next month, and I'd be happy to handle all the rebooking and cover any change fees myself. I really hope you understand — let's lock in a new date as soon as I'm free!",
  },
  {
    n: "3",
    badge: "bg-amber2",
    accent: "text-amber2",
    title: "Addressing a Problem Behaviour",
    examples:
      "e.g. a noisy roommate, a coworker who leaves early, a neighbour's barking dog, a friend who's always late",
    phrases: [
      {
        phrase: "I've been meaning to bring this up gently",
        use: "Signal care, not an attack.",
      },
      {
        phrase: "I'm sure you haven't even noticed, but…",
        use: "Give them an easy way out.",
      },
      {
        phrase: "It's starting to affect me a bit, so…",
        use: "Make it about impact, not blame.",
      },
      {
        phrase: "Could we find a system that works for both of us?",
        use: "Invite a shared fix instead of a demand.",
      },
    ],
    approachHint:
      "Never accuse. Assume they didn't realise, describe the impact on you (not their character), and propose a shared fix.",
    responseLabel: "Roommate's late-night noise",
    greeting:
      "Hi Alex, hope you're doing well! There's something a little awkward I wanted to talk to you about — the noise late at night.",
    empathize:
      "I know how much you love having friends over, and I completely understand — it's your home too, and I'd never want to spoil that. The thing is, I've got back-to-back exams this week, and the late-night noise has been making it really hard for me to sleep and concentrate.",
    solution:
      "So I think the best approach would be to keep things a bit quieter after about eleven on weeknights, and I'd be happy to give you the whole place to yourself this weekend to make up for it. I really hope you understand — I promise it's just for exam week!",
  },
  {
    n: "4",
    badge: "bg-emerald2",
    accent: "text-emerald2",
    title: "Apologizing for a Mistake",
    examples:
      "e.g. you broke a borrowed item, missed a deadline, forgot an important date, lost something of theirs",
    phrases: [
      {
        phrase: "I owe you an honest apology",
        use: "Take ownership in the first breath.",
      },
      {
        phrase: "There's no excuse, but here's what happened",
        use: "Accountability before any explanation.",
      },
      {
        phrase: "I take full responsibility for this",
        use: "Don't shift the blame elsewhere.",
      },
      {
        phrase: "Please let me make this right",
        use: "Move straight toward repair.",
      },
    ],
    approachHint:
      "Own it fully and fast, skip the excuses, and lead with a concrete way to make it right — repair, replace, or compensate.",
    responseLabel: "Cracked a borrowed camera lens",
    greeting:
      "Hi Maya, hope you're doing well! There's something a little difficult I wanted to talk to you about — the camera you so kindly lent me.",
    empathize:
      "I know how much that camera means to you, and I completely understand if you're frustrated when you hear this. The thing is, while I was hiking on the trip it slipped from my hands and the lens cracked — there's really no excuse, and I take full responsibility for it.",
    solution:
      "So I think the best approach would be to take it straight to the official repair shop this week, or replace the lens entirely if you'd prefer, and I'd be happy to cover every cent. I really hope you understand — I'm so sorry, and thank you for being so gracious about it.",
  },
  {
    n: "5",
    badge: "bg-violet2",
    accent: "text-violet2",
    title: "Choosing Between Two Commitments",
    examples:
      "e.g. two friends' events on the same night, your manager and a colleague both need you, a family event clashes with work",
    phrases: [
      {
        phrase: "I've been torn about this all week",
        use: "Show the choice was genuinely hard.",
      },
      {
        phrase: "It came down to a real clash of timing",
        use: "Frame it as logistics, not preference.",
      },
      {
        phrase: "It's nothing to do with how much I value you",
        use: "Protect the relationship.",
      },
      {
        phrase: "Let me make it up to you properly",
        use: "Offer the other person a make-good.",
      },
    ],
    approachHint:
      "Make clear the clash is about timing, not how much you care, then commit clearly to one and offer the other person a genuine make-up plan.",
    responseLabel: "Two friends' events, same night",
    greeting:
      "Hi Sam, hope you're doing well! There's something a little sensitive I wanted to talk to you about — your dinner this Saturday.",
    empathize:
      "I know you've put so much thought into the evening, and I completely understand if this is disappointing to hear. The thing is, my sister's farewell party turned out to be the very same night, and since she's moving abroad the next morning, I feel I really have to be there for her.",
    solution:
      "So I think the best approach would be for me to take you out, just the two of us, the following week — my treat — and I'd be happy to help you set up on Saturday beforehand so your dinner still goes brilliantly. I really hope you understand — you mean a lot to me, and I'll make it up to you!",
  },
];

export const SCENARIO_CHEATSHEET = [
  {
    cat: "Declining a Request",
    cues: "someone asks for money, your car, your time, or a favour you can't give",
    color: "text-rose2",
  },
  {
    cat: "Cancelling / Bad News",
    cues: "you have to back out, call something off, or share news they won't like",
    color: "text-sapphire",
  },
  {
    cat: "Problem Behaviour",
    cues: "someone's habit — noise, lateness, mess — is affecting you",
    color: "text-amber2",
  },
  {
    cat: "Apologizing",
    cues: "you broke, lost, forgot, or damaged something — it's your fault",
    color: "text-emerald2",
  },
  {
    cat: "Competing Commitments",
    cues: "two people or duties clash and you can only choose one",
    color: "text-violet2",
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
