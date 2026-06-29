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
    label: "Task Fulfillment",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: "Did you address all requirements? Did you hit the word count (180–199 words)?",
  },
  {
    label: "Coherence",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Is the email organized logically? Does it flow from greeting to closing?",
  },
  {
    label: "Vocabulary",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Professional tone, varied word choice, and appropriate register for business communication.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Accurate sentence structure, spelling, and punctuation with minimal errors.",
  },
];

export const FOUR_PART = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Greeting (1–2 lines)",
    desc: "Professional salutation (Dear [Name] or Dear Sir/Madam)",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Opening (2–3 sentences)",
    desc: "State the purpose of the email clearly and politely",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Body (3–4 sentences)",
    desc: "Provide details, explanation, or key information",
  },
  {
    n: "4",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Closing (1–2 sentences)",
    desc: "Polite sign-off with your name",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      "Task Fulfillment":
        "Meets all requirements. Word count is 180–199 words. Email is complete with all requested elements. Completed within time constraints.",
      Coherence:
        "Email flows naturally from greeting to closing. Ideas are organized logically.",
      Vocabulary:
        'Professional register throughout. Varied word choice. Uses appropriate phrases (e.g., "I would appreciate it if...").',
      Grammar:
        "Grammar and spelling are near-perfect. Sentences are well-constructed with good variety.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      "Task Fulfillment":
        "Addresses main requirements. Word count is close to 180–199. Most elements are included.",
      Coherence:
        "Email is organized and easy to follow. Transitions are present.",
      Vocabulary:
        "Generally professional tone. Some variety in word choice. Occasional repetition of simple words.",
      Grammar:
        "Grammar is mostly accurate. Minor errors present but don't disrupt meaning. Spelling is correct.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      "Task Fulfillment":
        "Partially addresses requirements. Word count may be below or above the range. Some elements missing.",
      Coherence:
        "Email is present but may lack clear organization. Some ideas don't connect smoothly.",
      Vocabulary:
        "Basic tone, sometimes too casual. Limited word range. Frequent repetition.",
      Grammar:
        "Several grammatical errors. Some spelling mistakes. Meaning is usually clear but sometimes unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      "Task Fulfillment":
        "Does not fully address requirements. Significantly below or above word count. Missing key elements.",
      Coherence: "Email is disorganized or incomplete. Difficult to follow.",
      Vocabulary: "Not professional. Very limited vocabulary range.",
      Grammar:
        "Frequent and serious errors. Spelling mistakes. Meaning is sometimes unclear.",
    },
  },
];

// Each scenario's template/answer line is an array of segments:
//   string | { h: "highlighted text" } | { br: true }
// Each thoughtProcess item is { label, body } where body is an array of:
//   string | { em: "italic text" }
export const SCENARIOS = [
  {
    title: "Scenario 1 — Online Order Problem",
    meta: "Complaint · Formal",
    questionLead:
      "You recently bought a laptop online that arrived damaged. Write an email to the company's customer service. In your email:",
    questionPoints: [
      "explain what you ordered and what was wrong with it",
      "describe how the problem has affected you",
      "say what you would like the company to do",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "a company I don't know → ",
          { em: "Formal" },
          " (Email Types): no contractions, polite forms.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: ['it\'s a complaint → Opening table row "Complaint".'],
      },
      {
        label: "Point 1 → Paragraph 1 (facts):",
        body: [
          "order number, date, exactly what was damaged — no feelings yet.",
        ],
      },
      {
        label: "Point 2 → Paragraph 2 (feelings):",
        body: [
          '"disappointed" (Emotion table) + how it affected me; a light softener ("I must admit…"), but kept firm because it\'s a complaint.',
        ],
      },
      {
        label: "Point 3 → Paragraph 3 (request):",
        body: ['use-case "Refund / replacement".'],
      },
      {
        label: "Closing:",
        body: [
          'formal closing sentence + "Sincerely," (Closing & Sign-off → Formal).',
        ],
      },
    ],
    template: [
      ["Dear ", { h: "[Customer Service Manager]" }, ","],
      [
        "I am writing to express my dissatisfaction regarding ",
        { h: "[the damaged laptop]" },
        ".",
      ],
      [{ h: "[Order #, date, what was wrong — facts only]" }],
      [
        "I must admit I was ",
        { h: "[disappointed]" },
        " because ",
        { h: "[effect on me]" },
        ".",
      ],
      ["I would appreciate ", { h: "[refund / replacement]" }, "."],
      [
        "Thank you for your prompt attention to this matter; I look forward to your response.",
      ],
      ["Sincerely,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Customer Service Manager,",
      "I am writing to express my dissatisfaction regarding a laptop I purchased from your online store on March 10th (Order #WX789456). When the package arrived yesterday, I was dismayed to find the screen badly cracked, and the box itself contained no protective cushioning whatsoever. It was clear that the item had not been packed with reasonable care before shipping.",
      "I must admit I was quite disappointed by this experience, particularly given the substantial purchase price of $1,200. As the device is now completely unusable, I have been unable to begin the important work for which I originally bought it, and this delay has caused me considerable inconvenience this week.",
      "I would therefore appreciate either a full refund to my original payment method or a replacement unit, sent with proper protective packaging to prevent further damage. For your reference, I have attached several clear photographs that show both the cracked screen and the inadequate packaging in detail.",
      "Thank you for your prompt attention to this matter; I look forward to receiving your response and a swift resolution.",
      "Sincerely,\nMark Thompson",
    ],
  },
  {
    title: "Scenario 2 — Course Inquiry",
    meta: "Inquiry · Formal",
    questionLead:
      "You want to take an English course at a local institute. Write an email to the admissions office. In your email:",
    questionPoints: [
      "say which course you are interested in and why",
      "ask about the details you need (deadline, schedule, fees)",
      "ask about the enrollment requirements",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "an admissions office I don't know → ",
          { em: "Formal" },
          ", but warm — no complaint here.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: [
          'Opening table row "Request (Information)" — "I am writing to inquire about…".',
        ],
      },
      {
        label: "Point 1 → Paragraph 1:",
        body: ["which course and why I want it (facts about me)."],
      },
      {
        label: "Point 2 → Paragraph 2 (feelings flex):",
        body: [
          'the emotion here is positive — "keen / eager" (Emotion table) — expressed politely.',
        ],
      },
      {
        label: "Point 3 → Paragraph 3 (request):",
        body: [
          'the specific questions, softened with "Could you please…" and "I would also like to know…".',
        ],
      },
      {
        label: "Closing:",
        body: [
          '"I look forward to hearing from you." + "Best regards," (a warm-formal sign-off).',
        ],
      },
    ],
    template: [
      ["Dear ", { h: "[Admissions Officer]" }, ","],
      ["I am writing to inquire about ", { h: "[the course]" }, "."],
      [{ h: "[Which course + why I want it]" }],
      ["I am particularly keen to ", { h: "[goal / motivation]" }, "."],
      [
        "Could you please ",
        { h: "[questions: deadline, schedule, fees, requirements]" },
        "?",
      ],
      ["Thank you for your assistance; I look forward to hearing from you."],
      ["Best regards,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Admissions Officer,",
      "I am writing to inquire about enrolment in your English Conversation Course for Spring 2026, which a friend recently recommended to me. I am currently studying at ABC Institute and am hoping to strengthen my speaking and listening skills before I begin university later this year.",
      "I am particularly keen to join this programme because I have heard that its small class sizes give students a great deal of individual speaking practice. As someone who learns best through regular conversation, I believe this approach would suit my goals extremely well and help me build confidence.",
      "Before applying, I would be grateful for some further information. Could you please let me know the enrolment deadline, the weekly class schedule, and the full tuition fees? I would also like to confirm the entry requirements, as I understand that an intermediate level of English is expected, and to ask whether any flexible payment options are available.",
      "Thank you very much for your assistance with these questions. I look forward to hearing from you soon and hope to join the course this spring.",
      "Best regards,\nSophia Chen",
    ],
  },
  {
    title: "Scenario 3 — Heating Repair",
    meta: "Request / Complaint · Semi-formal",
    questionLead:
      "The heating in your apartment has stopped working. Write an email to your landlord. In your email:",
    questionPoints: [
      "explain the problem and when it started",
      "describe how it is affecting you",
      "ask the landlord to take action",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "a landlord I already know → ",
          { em: "Semi-formal" },
          " — polite and warm, but firm because it's urgent.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: ['Opening table row "Request (Action / Help)".'],
      },
      {
        label: "Point 1 → Paragraph 1 (facts):",
        body: ["unit number, what failed, when it started."],
      },
      {
        label: "Point 2 → Paragraph 2 (feelings):",
        body: [
          '"concerned" (Emotion table) about the cold and my belongings — softened but firm.',
        ],
      },
      {
        label: "Point 3 → Paragraph 3 (request):",
        body: ['use-case "Repair / action" + "Setting a deadline (polite)".'],
      },
      {
        label: "Closing:",
        body: ['semi-formal closing sentence + "Best regards,".'],
      },
    ],
    template: [
      ["Dear ", { h: "[Mr. Jackson]" }, ","],
      [
        "I am writing to request your assistance with ",
        { h: "[the broken heating]" },
        ".",
      ],
      [{ h: "[Unit #, what failed, when it started]" }],
      [
        "I am rather concerned because ",
        { h: "[effect — cold, belongings, safety]" },
        ".",
      ],
      [
        "I would be grateful if you could ",
        { h: "[arrange a repair by a date]" },
        ".",
      ],
      ["Thank you for your understanding; I look forward to hearing from you."],
      ["Best regards,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Mr. Jackson,",
      "I am writing to request your urgent assistance with the heating system in my apartment, Unit 304 at 250 Main Street. The system stopped working completely four days ago, and since then the indoor temperature has dropped close to freezing, even with extra blankets and a small portable heater.",
      "I am rather concerned about the situation, as the persistent cold is beginning to damage some of my belongings and is making the apartment genuinely difficult to live in. I reported the problem by phone earlier in the week, but unfortunately it has not yet been looked at, and the weather forecast suggests conditions will only get colder.",
      "I would be grateful if you could arrange for a qualified technician to carry out the necessary repairs as soon as possible, ideally within the next two days. If it would help, I am happy to be at home to provide access at whatever time is most convenient for the technician.",
      "Thank you for your understanding and for treating this as a priority; I look forward to hearing from you very soon.",
      "Best regards,\nRobert Kim",
    ],
  },
  {
    title: "Scenario 4 — Thank a Colleague",
    meta: "Appreciation · Semi-formal",
    questionLead:
      "A colleague helped you a great deal on a recent project. Write an email to thank them. In your email:",
    questionPoints: [
      "explain what they helped you with",
      "describe the difference it made",
      "say what you hope for in the future",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "a colleague I know → ",
          { em: "Semi-formal" },
          " — warm and personal.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: ['Opening table row "Appreciation".'],
      },
      {
        label: "Point 1 → Paragraph 1 (facts):",
        body: ["exactly what they helped with."],
      },
      {
        label: "Point 2 → Paragraph 2 (feelings):",
        body: [
          '"grateful / impressed" (Emotion table) — here the emotion is the point, so lead with it.',
        ],
      },
      {
        label: "Point 3 → Paragraph 3:",
        body: ['the "request" is softer — a hope to work together again.'],
      },
      {
        label: "Closing:",
        body: ['warm closing sentence + "Best regards,".'],
      },
    ],
    template: [
      ["Dear ", { h: "[Ms. Rodriguez]" }, ","],
      ["I am writing to express my appreciation for ", { h: "[their help]" }, "."],
      [{ h: "[What exactly they did]" }],
      ["I am sincerely grateful, as ", { h: "[the difference it made]" }, "."],
      ["I hope ", { h: "[to work together again / future wish]" }, "."],
      ["Thank you once again for everything."],
      ["Best regards,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Ms. Rodriguez,",
      "I am writing to express my sincere appreciation for the support you gave me during our recent product launch. In particular, your patient guidance on the final presentation and your detailed feedback on my early drafts made an enormous difference to my work.",
      "I am sincerely grateful for the time and energy you devoted to helping me, especially as I know how busy your own schedule was. Thanks to your advice, the presentation was far clearer and more confident than my first attempt, and several colleagues commented on how smoothly the entire launch went. More than that, I valued the calm, encouraging way you explained things, which helped me genuinely learn rather than simply fix mistakes.",
      "I sincerely hope we have the opportunity to collaborate again on a future project, as I am certain there is a great deal more I could learn from working alongside you. Please do not hesitate to let me know if there is ever any way I can return the favour.",
      "Thank you once again for everything; your support genuinely made this project a success, and it was truly appreciated.",
      "Best regards,\nDavid Wong",
    ],
  },
  {
    title: "Scenario 5 — Restaurant Feedback",
    meta: "Feedback / Suggestion · Formal",
    questionLead:
      "You recently had dinner at a restaurant and want to share feedback. Write an email to the manager. In your email:",
    questionPoints: [
      "describe what you enjoyed about your visit",
      "explain what was disappointing",
      "suggest how they could improve",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "a manager I don't know → ",
          { em: "Formal" },
          " and balanced — not an angry complaint.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: ['Opening table row "Suggestion / Recommendation".'],
      },
      {
        label: "Point 1 → Paragraph 1 (facts):",
        body: ["what was good — start positive."],
      },
      {
        label: "Point 2 → Paragraph 2 (feelings):",
        body: [
          '"disappointed" (Emotion table) about the slow service, softened with "However…" and "I must admit…".',
        ],
      },
      {
        label: "Point 3 → Paragraph 3 (request):",
        body: ['use-case "Suggestion / resolution" — a constructive recommendation.'],
      },
      {
        label: "Closing:",
        body: ['formal closing sentence + "Sincerely,".'],
      },
    ],
    template: [
      ["Dear ", { h: "[Restaurant Manager]" }, ","],
      [
        "I am writing to suggest an improvement regarding ",
        { h: "[my recent visit]" },
        ".",
      ],
      [{ h: "[What was good — facts]" }],
      ["However, I must admit I was ", { h: "[disappointed by ...]" }, "."],
      ["It would be helpful if you could ", { h: "[suggestion]" }, "."],
      ["Thank you for considering this feedback."],
      ["Sincerely,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Restaurant Manager,",
      "I am writing to suggest a small improvement following my dinner at your restaurant last Friday evening. I should begin by saying that the food itself was genuinely excellent: both the flavours and the presentation of every dish were outstanding, and my guests and I thoroughly enjoyed the meal from start to finish.",
      "However, I must admit that I was rather disappointed by the standard of service that evening. We waited more than forty minutes for our appetizers, even though the restaurant was only half full, and our server appeared unfamiliar with several items on the menu and could not answer our questions about them.",
      "It would be helpful if you could consider introducing a short staff-training session covering both the menu and the management of waiting times during busier periods. I believe a modest change of this kind would allow the quality of the service to match the very high standard of the food, which would greatly enhance the overall experience for your guests.",
      "Thank you for taking the time to consider this feedback; I genuinely hope to return and enjoy another meal soon.",
      "Sincerely,\nPatricia Adams",
    ],
  },
  {
    title: "Scenario 6 — Community Welcome Party",
    meta: "Suggestion / Recommendation · Semi-formal",
    questionLead:
      "You are a member of a youth committee planning a welcome party for newcomers to the neighbourhood. Write an email to the Chairperson of the Community Committee. In your email:",
    questionPoints: [
      "suggest two activities that would help newcomers meet local residents",
      "explain why these activities would be beneficial for young people and families",
      "recommend where the committee can obtain the food, decorations, and other supplies",
    ],
    thoughtProcess: [
      {
        label: "Reader → tone:",
        body: [
          "the committee Chairperson, a known official → ",
          { em: "Semi-formal" },
          " — professional and warm, since we work together.",
        ],
      },
      {
        label: "Purpose → opening sentence:",
        body: ['Opening table row "Suggestion / Recommendation".'],
      },
      {
        label: "Point 1 → Paragraph 1:",
        body: ['the two activities, signposted with "Firstly… Secondly…".'],
      },
      {
        label: "Point 2 → Paragraph 2:",
        body: [
          "here this paragraph carries the ",
          { em: "reasoning / benefits" },
          ' rather than personal emotion, opened with a confident "I believe…".',
        ],
      },
      {
        label: "Point 3 → Paragraph 3:",
        body: [
          'the recommendation — use-case "Suggestion / resolution" — naming where to source supplies.',
        ],
      },
      {
        label: "Closing:",
        body: ['offer to help + semi-formal closing sentence + "Best regards,".'],
      },
    ],
    template: [
      ["Dear ", { h: "[Mr. Bennett / Chairperson]" }, ","],
      ["I am writing to suggest ", { h: "[two activities + supply ideas]" }, "."],
      ["Firstly, ", { h: "[activity 1]" }, ". Secondly, ", { h: "[activity 2]" }, "."],
      [
        "I believe these would benefit ",
        { h: "[young people and families]" },
        " because ",
        { h: "[reasons]" },
        ".",
      ],
      [
        "I would recommend ",
        { h: "[where to obtain food, decorations, supplies]" },
        ".",
      ],
      ["Thank you for considering these ideas; I would be glad to help."],
      ["Best regards,", { br: true }, { h: "[Your Name]" }],
    ],
    answer: [
      "Dear Mr. Bennett,",
      "I am writing to suggest two activities for the upcoming welcome party for newcomers, along with some recommendations for sourcing the supplies we will need.",
      "Firstly, I would suggest organising a friendly neighbourhood potluck, where each family brings a dish that represents their culture. Secondly, we could arrange a series of small group games and an outdoor scavenger hunt that pairs newcomers with long-time residents.",
      "I believe these activities would be especially beneficial for young people and families. Sharing food naturally encourages conversation and helps break the ice, while the team games give children and teenagers a relaxed, enjoyable way to make new friends.",
      "For the food, decorations, and other supplies, I would recommend approaching the local grocery store and bakery on Main Street, as both have generously supported community events in the past. In addition, the craft shop near the library often donates decorations, and we could borrow tables and chairs from the community hall at no cost.",
      "Thank you for considering these ideas; I would be glad to help organise the event in any way I can.",
      "Best regards,\nDaniel Cruz",
    ],
  },
];

export const TIPS = [
  {
    category: "structure",
    label: "Structure",
    color: "text-gold",
    title: "Follow the 4-part structure every time.",
    body: "Greeting → Opening → Body → Closing. This is expected and makes your email immediately professional.",
  },
  {
    category: "structure",
    label: "Structure",
    color: "text-sapphire",
    title: "Keep paragraphs short and clear.",
    body: "Each paragraph should have one main idea. Use line breaks (empty lines) to separate sections.",
  },
  {
    category: "tone",
    label: "Tone",
    color: "text-emerald2",
    title: "Be professional and polite, even if making a complaint.",
    body: 'Use "I would appreciate..." instead of "I need..." Avoid all caps, excessive exclamation marks, or casual language.',
  },
  {
    category: "tone",
    label: "Tone",
    color: "text-amber2",
    title: "Match the formality of the original request.",
    body: "If the prompt uses formal language, stay formal. If it's slightly casual, you can adjust accordingly — but never go too casual.",
  },
  {
    category: "language",
    label: "Language",
    color: "text-rose2",
    title: "Use linking words to connect ideas.",
    body: 'Words like "Furthermore," "However," "As a result" make your email flow better and show advanced writing.',
  },
  {
    category: "language",
    label: "Language",
    color: "text-violet2",
    title: "Be specific with details.",
    body: 'Instead of "I need time off," write "I need time off from Monday, March 15 to Friday, March 19." Details show careful communication.',
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-gold",
    title: "Don't be too casual or slang.",
    body: 'No "Hey," "Thanks a ton," "BTW," or "ASAP." These are too informal for professional communication.',
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-sapphire",
    title: "Don't ignore word count.",
    body: "180–199 words is the target within 27 minutes. Too short (under 150) or too long (over 220) is a clear signal you don't manage time well or ignore instructions.",
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-emerald2",
    title: "Don't forget to proofread.",
    body: "Within the 27-minute window, allocate time to check spelling, grammar, and punctuation. Typos are avoidable and cost points.",
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "structure", label: "Structure" },
  { id: "tone", label: "Tone" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes to Avoid" },
];
