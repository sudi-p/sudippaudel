export const PARTS_OF_SPEECH = [
  {
    tag: "Subject",
    color: "#1e40af",
    bg: "#dbeafe",
    emoji: "👤",
    definition: "Who or what the sentence is about. Usually a noun or pronoun.",
    tips: [
      "Every sentence needs a subject.",
      "It can be a single word or a phrase.",
      "Ask 'who?' or 'what?' before the verb to find it.",
    ],
    examples: [
      "<u>She</u> submitted the application on time.",
      "<u>The community centre</u> was renovated last year.",
      "<u>Working remotely</u> has become very common.",
    ],
  },
  {
    tag: "Verb",
    color: "#166534",
    bg: "#dcfce7",
    emoji: "⚡",
    definition:
      "The action or state in the sentence. Every sentence must have one.",
    tips: [
      "Verbs change form with tense.",
      "Linking verbs (is, are, was) connect the subject to a description.",
      "Auxiliary verbs (have, will, can) support the main verb.",
    ],
    examples: [
      "She <u>submitted</u> the form before the deadline.",
      "They <u>have been waiting</u> for a response for two weeks.",
      "The new policy <u>seems</u> reasonable.",
    ],
  },
  {
    tag: "Object",
    color: "#92400e",
    bg: "#fef3c7",
    emoji: "🎯",
    definition:
      "Receives the action of the verb. There are two types: direct and indirect.",
    tips: [
      "Direct object: what/whom the action affects.",
      "Indirect object: to/for whom the action is done.",
      "Not all verbs take objects (intransitive verbs).",
    ],
    examples: [
      "She emailed <u>the manager</u>. (direct)",
      "He sent <u>her</u> the updated schedule. (indirect)",
      "They completed <u>the application</u>.",
    ],
  },
  {
    tag: "Adjective",
    color: "#5b21b6",
    bg: "#ede9fe",
    emoji: "🎨",
    definition: "Describes or modifies a noun or pronoun, giving more detail.",
    tips: [
      "Usually placed before the noun it describes.",
      "Can follow linking verbs as a predicate adjective.",
      "Comparative: more affordable. Superlative: most affordable.",
    ],
    examples: [
      "A <u>detailed</u> response is expected.",
      "The instructions were <u>unclear</u>.",
      "She felt <u>confident</u> and <u>well-prepared</u>.",
    ],
  },
  {
    tag: "Adverb",
    color: "#0f766e",
    bg: "#ccfbf1",
    emoji: "⚙️",
    definition:
      "Modifies a verb, adjective, or another adverb — answers how, when, where, or to what degree.",
    tips: [
      "Many adverbs end in -ly.",
      "Can appear at the start, middle, or end of a sentence.",
      "Never modifies a noun (that is an adjective's job).",
    ],
    examples: [
      "She responded <u>promptly</u> to the complaint.",
      "<u>Recently</u>, the transit authority announced new routes.",
      "The task was <u>surprisingly</u> straightforward.",
    ],
  },
  {
    tag: "Conjunction",
    color: "#be185d",
    bg: "#fce7f3",
    emoji: "🔗",
    definition:
      "Joins words, phrases, or clauses together. Three main types: coordinating, subordinating, correlative.",
    tips: [
      "FANBOYS = For, And, Nor, But, Or, Yet, So (coordinating).",
      "Subordinating: because, although, when, if, since.",
      "Correlative: either...or, neither...nor, both...and.",
    ],
    examples: [
      "The commute was long, <u>but</u> the job was worth it.",
      "<u>Although</u> the rent increased, she decided to renew the lease.",
      "<u>Both</u> clarity <u>and</u> tone matter in professional emails.",
    ],
  },
  {
    tag: "Preposition",
    color: "#b45309",
    bg: "#fef9c3",
    emoji: "📍",
    definition:
      "Shows the relationship between a noun/pronoun and another word — usually location, time, or direction.",
    tips: [
      "Always followed by a noun or pronoun (its object).",
      "Common prepositions: in, on, at, by, for, with, about, under, through.",
      "Avoid ending formal sentences with a preposition.",
    ],
    examples: [
      "The form is <u>on</u> the front desk.",
      "Please submit your documents <u>by</u> Friday.",
      "She walked <u>through</u> the main entrance.",
    ],
  },
  {
    tag: "Pronoun",
    color: "#0369a1",
    bg: "#e0f2fe",
    emoji: "♻️",
    definition:
      "Replaces a noun to avoid repetition. Types: personal, possessive, reflexive, relative, demonstrative, indefinite.",
    tips: [
      "Must agree in number and gender with the noun it replaces.",
      "Reflexive: himself, herself, themselves.",
      "Relative: who, which, that (introduce clauses).",
    ],
    examples: [
      "<u>She</u> contacted <u>him</u> about the complaint.",
      "The decision is <u>theirs</u> to make.",
      "The supervisor <u>who</u> reviewed the file approved it.",
    ],
  },
  {
    tag: "Article",
    color: "#065f46",
    bg: "#d1fae5",
    emoji: "📰",
    definition:
      "Specifies whether a noun is definite (the) or indefinite (a, an). Acts as a type of determiner.",
    tips: [
      "'The' = specific, already known.",
      "'A/An' = any one of a kind, first mention.",
      "Use 'an' before vowel sounds, not vowel letters.",
    ],
    examples: [
      "She submitted <u>a</u> complaint.",
      "<u>The</u> complaint was reviewed within two days.",
      "It was <u>an</u> unexpected outcome.",
    ],
  },
  {
    tag: "Interjection",
    color: "#7c3aed",
    bg: "#f5f3ff",
    emoji: "😮",
    definition:
      "An exclamation that expresses emotion, often standing alone or set apart with a comma or exclamation mark.",
    tips: [
      "Usually grammatically independent from the rest of the sentence.",
      "Can be mild (Oh, well) or strong (Wow! Ouch!).",
      "Use sparingly in formal writing.",
    ],
    examples: [
      "<u>Wow!</u> That is an impressive improvement.",
      "<u>Oh</u>, I did not realize the office had moved.",
      "<u>Great!</u> I will send the confirmation right away.",
    ],
  },
  {
    tag: "Determiner",
    color: "#4338ca",
    bg: "#e0e7ff",
    emoji: "🔢",
    definition:
      "Introduces a noun and provides context such as quantity, possession, or specificity. Includes articles, demonstratives, quantifiers, and possessives.",
    tips: [
      "Demonstratives: this, that, these, those.",
      "Quantifiers: many, few, some, any, every, each.",
      "Possessives: my, your, his, her, its, our, their.",
    ],
    examples: [
      "<u>Many</u> applicants submitted their forms late.",
      "<u>Each</u> section of the test has a time limit.",
      "<u>Her</u> written response was well-organized.",
    ],
  },
  {
    tag: "Complement",
    color: "#6b7280",
    bg: "#f3f4f6",
    emoji: "🪞",
    definition:
      "Completes the meaning of the subject or object via a linking verb. Can be a noun, pronoun, or adjective.",
    tips: [
      "Subject complement follows linking verbs (be, seem, appear).",
      "Object complement describes or renames the object.",
      "Differs from an adverb — it describes a noun, not a verb.",
    ],
    examples: [
      "She became <u>the team lead</u> after six months. (subject complement)",
      "The board appointed him <u>director</u>. (object complement)",
      "The new scheduling system seems <u>efficient</u>.",
    ],
  },
];

export const SENTENCE_TYPES = [
  {
    name: "Simple Sentence",
    emoji: "1️⃣",
    color: "#1e40af",
    bg: "#dbeafe",
    formula: "Subject + Verb (+ Object)",
    definition:
      "Contains one independent clause with a subject and a predicate. Expresses one complete thought.",
    examples: [
      "She submitted the form.",
      "The landlord increased the rent.",
      "My colleague works at the downtown office.",
    ],
    celpipTip:
      "Use simple sentences for clear, direct statements in Writing Task 1.",
  },
  {
    name: "Compound Sentence",
    emoji: "2️⃣",
    color: "#166534",
    bg: "#dcfce7",
    formula: "Independent Clause + Coordinator + Independent Clause",
    definition:
      "Two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon.",
    examples: [
      "I wanted to attend the session, but I had a shift that evening.",
      "She updated her resume; she applied to three positions.",
      "He requested a transfer, yet his manager denied it.",
    ],
    celpipTip:
      "Shows logical relationships — great for Writing Task 2 argument paragraphs.",
  },
  {
    name: "Complex Sentence",
    emoji: "🔀",
    color: "#92400e",
    bg: "#fef3c7",
    formula:
      "Independent Clause + Subordinating Conjunction + Dependent Clause",
    definition:
      "One independent clause and one or more dependent (subordinate) clauses. Shows cause, contrast, time, or condition.",
    examples: [
      "Although the commute was long, she accepted the position.",
      "She left the meeting early because she had another appointment.",
      "If you practise speaking daily, your fluency will improve.",
    ],
    celpipTip:
      "Demonstrates range and sophistication — aim for this in Speaking Tasks 5 to 8.",
  },
  {
    name: "Compound-Complex Sentence",
    emoji: "🔗",
    color: "#5b21b6",
    bg: "#ede9fe",
    formula: "2+ Independent Clauses + 1+ Dependent Clause",
    definition:
      "Combines both compound and complex structures. Most elaborate type — requires careful punctuation.",
    examples: [
      "Although she was nervous, she delivered the presentation clearly, and the team responded positively.",
      "Because the transit line was delayed, many employees arrived late, but the meeting was rescheduled.",
    ],
    celpipTip:
      "Use sparingly for high-level writing — shows mastery of English structure.",
  },
  {
    name: "Declarative",
    emoji: "📣",
    color: "#0f766e",
    bg: "#ccfbf1",
    formula: "Subject + Verb + ...",
    definition:
      "Makes a statement or provides information. Ends with a period. Most common sentence type.",
    examples: [
      "The registration deadline is Friday at 5 pm.",
      "Canada has ten provinces and three territories.",
      "She completed the writing task in under 25 minutes.",
    ],
    celpipTip: "The backbone of all CELPIP writing and speaking tasks.",
  },
  {
    name: "Interrogative",
    emoji: "❓",
    color: "#be185d",
    bg: "#fce7f3",
    formula: "Auxiliary + Subject + Verb + ...?",
    definition:
      "Asks a question. Ends with a question mark. Often inverts subject-verb order.",
    examples: [
      "Have you received the confirmation email?",
      "Where is the nearest transit station?",
      "What time does the community centre close?",
    ],
    celpipTip: "Useful in Speaking Task 3 (giving directions or instructions).",
  },
  {
    name: "Imperative",
    emoji: "👉",
    color: "#b45309",
    bg: "#fef9c3",
    formula: "(You) + Base Verb + ...",
    definition:
      "Gives a command, instruction, or request. Subject 'you' is usually implied, not stated.",
    examples: [
      "Please submit your application by the deadline.",
      "Turn left at the intersection and continue for two blocks.",
      "Be specific and organized in your written response.",
    ],
    celpipTip:
      "Appears in instructions and advice — useful in Writing Task 1 (emails).",
  },
  {
    name: "Exclamatory",
    emoji: "❗",
    color: "#7c3aed",
    bg: "#f5f3ff",
    formula: "What/How + Noun/Adjective + Subject + Verb!",
    definition:
      "Expresses strong emotion or surprise. Ends with an exclamation mark. Avoid in formal writing.",
    examples: [
      "What a well-organized response!",
      "How quickly the time passed!",
      "That was an excellent suggestion!",
    ],
    celpipTip:
      "Avoid in formal tasks. Acceptable in informal letter-writing (Task 1).",
  },
];

export const CLAUSE_TYPES = [
  {
    name: "Independent Clause",
    badge: "Main",
    badgeColor: "#1e40af",
    badgeBg: "#dbeafe",
    definition:
      "A clause that can stand alone as a complete sentence. Has a subject and a verb.",
    examples: [
      {
        text: "She finished the project.",
        explanation:
          "'She' is the subject and 'finished' is the verb. This is a complete thought on its own.",
      },
      {
        text: "The results were impressive.",
        explanation:
          "'The results' is the subject and 'were' is the linking verb. Stands alone as a full sentence.",
      },
    ],
  },
  {
    name: "Dependent (Subordinate) Clause",
    badge: "Sub",
    badgeColor: "#166534",
    badgeBg: "#dcfce7",
    definition:
      "Cannot stand alone. Must be attached to an independent clause. Begins with a subordinating conjunction or relative pronoun.",
    examples: [
      {
        text: "Because she worked hard…",
        explanation:
          "'Because' is the subordinating conjunction. 'She' is the subject, 'worked' is the verb. Incomplete on its own — needs a main clause.",
      },
      {
        text: "…who called yesterday.",
        explanation:
          "'Who' is the relative pronoun acting as the subject, 'called' is the verb. This fragment must attach to a noun it describes.",
      },
      {
        text: "Although the weather was bad…",
        explanation:
          "'Although' is the subordinating conjunction. 'The weather' is the subject, 'was' is the verb. Leaves the reader waiting for the main clause.",
      },
    ],
  },
  {
    name: "Relative Clause",
    badge: "Rel",
    badgeColor: "#92400e",
    badgeBg: "#fef3c7",
    definition:
      "A dependent clause that modifies a noun, introduced by who, whom, whose, which, or that.",
    examples: [
      {
        text: "The man who called is here.",
        explanation:
          "'who called' is the relative clause — 'who' is the subject, 'called' is the verb. It modifies the noun 'man'.",
      },
      {
        text: "The book that I recommended is nice.",
        explanation:
          "'that I recommended' is the relative clause — 'I' is the subject, 'recommended' is the verb, and 'that' is the relative pronoun acting as the object.",
      },
      {
        text: "The city where she grew up is very far.",
        explanation:
          "'where she grew up' is the relative clause — 'she' is the subject, 'grew up' is the verb, and 'where' refers to the city (place).",
      },
    ],
  },
  {
    name: "Noun Clause",
    badge: "Noun",
    badgeColor: "#5b21b6",
    badgeBg: "#ede9fe",
    definition:
      "A dependent clause that functions as a noun — can be a subject, object, or complement.",
    examples: [
      {
        text: "What she said surprised me.",
        explanation:
          "'What she said' is the noun clause acting as the subject of the sentence. 'She' is the subject inside the clause, 'said' is the verb.",
      },
      {
        text: "I know that he is honest.",
        explanation:
          "'that he is honest' is the noun clause acting as the object of 'know'. 'He' is the subject, 'is' is the verb inside the clause.",
      },
      {
        text: "The question is whether we should go.",
        explanation:
          "'whether we should go' is the noun clause acting as the subject complement. 'We' is the subject, 'should go' is the verb phrase inside the clause.",
      },
    ],
  },
  {
    name: "Adverbial Clause",
    badge: "Adv",
    badgeColor: "#0f766e",
    badgeBg: "#ccfbf1",
    definition:
      "A dependent clause that functions as an adverb — tells when, where, how, why, or under what condition.",
    examples: [
      {
        text: "When the meeting ends, we'll debrief.",
        explanation:
          "'When the meeting ends' is the adverbial clause telling when. 'The meeting' is the subject, 'ends' is the verb. The comma separates it from the main clause.",
      },
      {
        text: "She smiled because she was happy.",
        explanation:
          "'because she was happy' is the adverbial clause telling why. 'She' is the subject, 'was' is the verb. No comma needed when the adverbial clause comes after the main clause.",
      },
      {
        text: "If you need help, ask.",
        explanation:
          "'If you need help' is the adverbial clause telling under what condition. 'You' is the subject, 'need' is the verb. The main clause 'ask' is an imperative.",
      },
    ],
  },
];

export const COMPLEX_SENTENCES = [
  // ── COMPOUND SENTENCES (10) ──────────────────────────────────────────
  {
    type: "compound",
    emoji: "📧",
    scenario:
      "CELPIP Writing Task 1 — Emailing a landlord about a broken heater in winter",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "The heating system stopped working on Monday evening.",
        thought:
          "IC1 — I state the problem clearly with a time marker. This is a complete fact the landlord needs.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "the temperature inside the apartment has dropped significantly.",
        thought:
          "IC2 — I explain the consequence at home. Both ideas are equally important to establish urgency.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" connects two related facts in sequence. The broken heater caused the temperature drop — "and" links them naturally.',
      },
    ],
    final:
      "The heating system stopped working on Monday evening, <strong>and</strong> the temperature inside the apartment has dropped significantly.",
    tip: 'Useful for <strong>Writing Task 1 (email)</strong>. In complaint emails, compound sentences with "and" let you state the problem AND its impact in one professional sentence — examiners reward clear problem framing in the opening lines.',
  },
  {
    type: "compound",
    emoji: "🏙️",
    scenario:
      "CELPIP Speaking Task 2 — Talking about a Personal Experience: Describing changes in your old neighbourhood over time",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Several new restaurants and cafés have opened along the main street.",
        thought:
          "IC1 — a specific, observable change from a past memory. I can visualize and describe it clearly.",
      },
      {
        label: "Simple clause 2",
        sentence: "the area has become much more vibrant and lively.",
        thought:
          "IC2 — the overall effect of those changes. A natural result worth adding.",
      },
      {
        label: "Choose connector",
        sentence: "so",
        thought:
          '"So" signals that IC2 is the result of IC1. New openings → vibrancy. This cause-effect relationship sounds analytical and fluent.',
      },
    ],
    final:
      "Several new restaurants and cafés have opened along the main street, <strong>so</strong> the area has become much more vibrant and lively.",
    tip: 'Useful for <strong>Speaking Task 2 (Personal Experience)</strong>. Using "so" to show cause and effect moves your past narrative beyond simple description into reflective analysis — a key differentiator between CLB 7 and CLB 9+ responses.',
  },
  {
    type: "compound",
    emoji: "🤝",
    scenario:
      "CELPIP Speaking Task 1 — Giving Advice to a friend who got a poor performance review at work",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "You should speak with your manager privately to understand the feedback.",
        thought:
          "IC1 — the first piece of advice. Direct, actionable, complete.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "you could ask a trusted colleague to help you identify areas for improvement.",
        thought:
          "IC2 — a second option. These are two equally valid suggestions.",
      },
      {
        label: "Choose connector",
        sentence: "or",
        thought:
          '"Or" presents IC2 as an alternative to IC1. I am giving two options, not forcing one solution — this sounds considerate and helpful.',
      },
    ],
    final:
      "You should speak with your manager privately to understand the feedback, <strong>or</strong> you could ask a trusted colleague to help you identify areas for improvement.",
    tip: 'Useful for <strong>Speaking Task 1 (Giving Advice)</strong>. Offering alternative solutions with "or" shows flexibility and empathy — both qualities that score exceptionally well on Task Fulfillment and Coherence criteria.',
  },
  {
    type: "compound",
    emoji: "🌆",
    scenario:
      "CELPIP Writing Task 2 — Opinion essay: Should cities invest in public transit or road expansion?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Expanding road infrastructure may reduce congestion in the short term.",
        thought:
          "IC1 — I acknowledge the opposing side fairly. This shows balanced thinking.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it does not address the long-term environmental consequences of increased car use.",
        thought: "IC2 — my counter-argument. I am pivoting to my position.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" is perfect for acknowledging a point and then refuting it. It\'s the most common connector in academic argument for this purpose.',
      },
    ],
    final:
      "Expanding road infrastructure may reduce congestion in the short term, <strong>but</strong> it does not address the long-term environmental consequences of increased car use.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. The concede-then-counter pattern with "but" is a high-scoring move — it shows you can acknowledge the other option before defending your own choice.',
  },
  {
    type: "compound",
    emoji: "📞",
    scenario:
      "CELPIP Speaking Task 6 — Dealing with a Difficult Situation: Calling a medical clinic to reschedule a last-minute appointment",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "I have an appointment scheduled for Thursday at 2 pm.",
        thought:
          "IC1 — I identify the appointment clearly. The receptionist needs context first.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "I am afraid I will not be able to make it due to an urgent work commitment.",
        thought:
          "IC2 — I explain why I need to break the commitment. Polite and specific.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" signals the contrast: I have the appointment, BUT I cannot attend. It\'s natural and polite in spoken English.',
      },
    ],
    final:
      "I have an appointment scheduled for Thursday at 2 pm, <strong>but</strong> I am afraid I will not be able to make it due to an urgent work commitment.",
    tip: "Useful for <strong>Speaking Task 6 (Dealing with a Difficult Situation)</strong>. This context-then-problem compound structure sets up an official concession beautifully before you offer alternatives to resolve the conflict.",
  },
  {
    type: "compound",
    emoji: "🏫",
    scenario:
      "CELPIP Writing Task 2 — Should schools replace textbooks with tablets?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Tablets give students access to a vast range of updated educational resources.",
        thought: "IC1 — a clear benefit supporting one side of the argument.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "many schools in lower-income communities cannot afford to provide them for every student.",
        thought:
          "IC2 — a real practical limitation. Adding this makes the argument nuanced.",
      },
      {
        label: "Choose connector",
        sentence: "yet",
        thought:
          '"Yet" is like "but" but more formal — ideal for academic writing. It signals a surprising or important counterpoint.',
      },
    ],
    final:
      "Tablets give students access to a vast range of updated educational resources, <strong>yet</strong> many schools in lower-income communities cannot afford to provide them for every student.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. Replacing "but" with "yet" raises your vocabulary register instantly — a practical swap that signals writing maturity and can push your Lexical Range score from CLB 7 to CLB 9.',
  },
  {
    type: "compound",
    emoji: "🧳",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Working from home vs. working in a corporate office",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Working from home offers greater flexibility and reduces commute time.",
        thought:
          "IC1 — I state the main benefit of my preferred option clearly.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it can also lead to feelings of isolation and reduced team collaboration.",
        thought:
          "IC2 — I acknowledge a downside. Showing balance in Speaking Task 7 earns higher marks.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" pivots from my positive claim to a concession. I am not ignoring the other side — I am showing I have thought about it.',
      },
    ],
    final:
      "Working from home offers greater flexibility and reduces commute time, <strong>but</strong> it can also lead to feelings of isolation and reduced team collaboration.",
    tip: "Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. Showing both sides of a debate before landing on your core position fulfills the Coherence/Content criteria — it signals a mature, analytical thinker under pressure.",
  },
  {
    type: "compound",
    emoji: "🛒",
    scenario:
      "CELPIP Writing Task 1 — Email to a store about a defective product received online",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "I ordered a blender from your website three weeks ago.",
        thought: "IC1 — context. Time and action are both clear.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it arrived with a cracked base and does not function properly.",
        thought:
          "IC2 — the problem. Both facts together form the complaint — one without the other is incomplete.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" contrasts the expectation (a working product) with the reality (a defective one). Natural for complaints.',
      },
    ],
    final:
      "I ordered a blender from your website three weeks ago, <strong>but</strong> it arrived with a cracked base and does not function properly.",
    tip: "Useful for <strong>Writing Task 1 (formal complaint email)</strong>. This two-part compound structure — context + problem — is the ideal opening sentence for any complaint email. Examiners look for clear purpose in the first two lines; this delivers it efficiently.",
  },
  {
    type: "compound",
    emoji: "🌳",
    scenario:
      "CELPIP Writing Task 2 — Should city parks be converted into housing developments?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Green spaces provide residents with vital areas for recreation and mental well-being.",
        thought:
          "IC1 — a strong benefit of keeping parks. I want to now add a counterpoint the opposition might use.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "the city is facing a severe housing shortage that cannot be ignored.",
        thought:
          "IC2 — the reality of the opposing argument. I'm being fair before making my case.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" here doesn\'t contrast — it adds. I am saying both things are true simultaneously, which makes the dilemma feel real.',
      },
    ],
    final:
      "Green spaces provide residents with vital areas for recreation and mental well-being, <strong>and</strong> the city is facing a severe housing shortage that cannot be ignored.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Using "and" to present a genuine tension — rather than taking a side immediately — is a sophisticated setup that shows examiners you understand the full complexity of the issue before committing to your position.',
  },
  {
    type: "compound",
    emoji: "👩‍⚕️",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Proposing a solution to reduce wait times at a community health clinic",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "The clinic could introduce an online booking system for routine appointments.",
        thought: "IC1 — a concrete solution proposal. Clear and practical.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "this would significantly reduce the number of walk-in patients during peak hours.",
        thought:
          "IC2 — the expected benefit of the solution. Together, solution + impact = a complete proposal.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" links the solution to its benefit. This is the most natural connector when adding a positive consequence to a positive suggestion.',
      },
    ],
    final:
      "The clinic could introduce an online booking system for routine appointments, <strong>and</strong> this would significantly reduce the number of walk-in patients during peak hours.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. The solution + "and" + benefit formula is the most efficient structure for any policy proposal response — it answers both "what" and "why" in one fluent sentence within your 90-second limit.',
  },
  // ── COMPLEX SENTENCES (10) ──────────────────────────────────────────
  {
    type: "complex",
    emoji: "✉️",
    scenario:
      "CELPIP Writing Task 1 — Requesting a deadline extension from a professor",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "I am writing to request a brief extension on the assignment deadline.",
        thought:
          "IC — the main purpose of my email. Clear and direct. But I want to explain WHY I need it.",
      },
      {
        label: "Dependent clause",
        sentence:
          "because I have been dealing with a family emergency this week",
        thought:
          'DC — the reason. It cannot stand alone — it depends on the IC to give it purpose. "Because" introduces the explanation.',
      },
      {
        label: "Choose connector",
        sentence: "because",
        thought:
          '"Because" answers "why?" It makes the DC subordinate — the reason supports the request, it isn\'t the main message.',
      },
    ],
    final:
      "I am writing to request a brief extension on the assignment deadline <strong>because</strong> I have been dealing with a family emergency this week.",
    tip: "Useful for <strong>Writing Task 1 (formal or semi-formal email)</strong>. Leading with your purpose (IC) before your reason (because + DC) is standard professional email structure. Examiners for Task 1 specifically assess whether your email purpose is clear within the first sentence — this pattern guarantees it.",
  },
  {
    type: "complex",
    emoji: "🏙️",
    scenario:
      "CELPIP Writing Task 2 — Arguing that cities should invest in cycling infrastructure",
    steps: [
      {
        label: "Independent clause",
        sentence: "Urban air quality would improve dramatically.",
        thought:
          "IC — my main claim. It's a strong, confident statement. Now I want to make it conditional.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if more residents chose cycling over driving for short distances",
        thought:
          'DC — the condition under which IC is true. "If" creates a first conditional — realistic and possible.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" creates a conditional relationship. The improvement (IC) depends on the behaviour change (DC). This is persuasive writing logic.',
      },
    ],
    final:
      "Urban air quality would improve dramatically <strong>if</strong> more residents chose cycling over driving for short distances.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Second conditional sentences ("would… if…") are one of the most powerful structures in CELPIP writing — they make your argument sound logical and forward-thinking rather than purely opinion-based.',
  },
  {
    type: "complex",
    emoji: "🗣️",
    scenario:
      "CELPIP Speaking Task 4 — Making Predictions: Anticipating how people will react to construction noise near a school classroom",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "The school board will likely ask to reschedule noisy construction work for after school hours.",
        thought:
          "IC — my prediction. Direct, clear, stands alone based on what I see. I want to add why it will happen.",
      },
      {
        label: "Dependent clause",
        sentence:
          "so that students can concentrate during examinations and important lessons",
        thought:
          'DC — purpose clause. "So that" introduces the logic for the prediction. It depends on the IC.',
      },
      {
        label: "Choose connector",
        sentence: "so that",
        thought:
          '"So that" = purpose. I am not just saying what will happen — I am saying WHY based on the visual context, which makes the prediction stronger.',
      },
    ],
    final:
      "The school board will likely ask to reschedule noisy construction work for after school hours <strong>so that</strong> students can concentrate during examinations and important lessons.",
    tip: 'Useful for <strong>Speaking Task 4 (Making Predictions)</strong>. "So that" + modal verb is a purpose clause that signals sophisticated grammar — it connects a visual trend to a logical consequence, boosting your Content/Coherence score.',
  },
  {
    type: "complex",
    emoji: "💼",
    scenario:
      "CELPIP Speaking Task 5 — Comparing and Persuading: Advising a colleague why your chosen business layout is safer",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "We should test our service on a smaller focus group using my option first.",
        thought:
          "IC — structured persuasion. Suggesting a compromise layout strategy. I want to add a timeline condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "before we make any final commitments to the management about the floor plan",
        thought:
          'DC — a time clause. "Before" tells them WHEN to test. This makes the argument feel protective and analytical.',
      },
      {
        label: "Choose connector",
        sentence: "before",
        thought:
          '"Before" subordinates the final decision to the safer testing phase. It implies a strategic process, which sounds professional.',
      },
    ],
    final:
      "We should test our service on a smaller focus group using my option first <strong>before</strong> we make any final commitments to the management about the floor plan.",
    tip: 'Useful for <strong>Speaking Task 5 (Comparing and Persuading)</strong>. Sequencing your persuasive arguments chronologically with "before" signals structural control, helping you break down complex choices cleanly in under 60 seconds.',
  },
  {
    type: "complex",
    emoji: "🏥",
    scenario:
      "CELPIP Writing Task 2 — Should governments fund preventive healthcare or treatment?",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Governments would spend significantly less on treating chronic diseases.",
        thought:
          "IC — a key claim in my argument. Complete on its own. But I need to add the condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if they invested more heavily in preventive health education and community programs",
        thought:
          'DC — the condition. My IC is a consequence of this investment. "If" makes it a conditional argument.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" creates a second conditional here (would + if + past) — a hypothetical but realistic policy scenario. Perfect for essay arguments.',
      },
    ],
    final:
      "Governments would spend significantly less on treating chronic diseases <strong>if</strong> they invested more heavily in preventive health education and community programs.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. The second conditional ("would… if… past tense") is the go-to structure for policy arguments in Task 2 — it frames your chosen option as the logical solution to a real problem, which is exactly the reasoning pattern examiners reward at CLB 9+.',
  },
  {
    type: "complex",
    emoji: "🧒",
    scenario:
      "CELPIP Speaking Task 2 — Talking about a Personal Experience: Relating a meaningful childhood event",
    steps: [
      {
        label: "Independent clause",
        sentence: "I remember feeling incredibly nervous.",
        thought:
          "IC — a personal emotional memory. Short and vivid. I want to add WHEN this happened to give context.",
      },
      {
        label: "Dependent clause",
        sentence:
          "when I performed in my first school play at the age of seven",
        thought:
          'DC — a time clause. "When" pins the feeling to a specific moment. It depends on IC to make full sense.',
      },
      {
        label: "Choose connector",
        sentence: "when",
        thought:
          '"When" connects the emotion (IC) to the specific event (DC). It creates a vivid, story-like quality that sounds natural in spoken English.',
      },
    ],
    final:
      "I remember feeling incredibly nervous <strong>when</strong> I performed in my first school play at the age of seven.",
    tip: 'Useful for <strong>Speaking Task 2 (Talking about a Personal Experience)</strong>. "When" clauses instantly create a clear narrative arc — they anchor an emotion to a specific historical milestone, keeping your story well-paced.',
  },
  {
    type: "complex",
    emoji: "🌐",
    scenario:
      "CELPIP Writing Task 2 — Should social media companies be regulated by governments?",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Social media platforms often fail to adequately protect users' personal data.",
        thought:
          "IC — a claim that supports regulation. I want to add context — this is especially true in one situation.",
      },
      {
        label: "Dependent clause",
        sentence:
          "although many of them claim to have strict privacy policies in place",
        thought:
          'DC — a concession. "Although" shows I am aware of the counter-argument. This makes my IC stronger by contrast.',
      },
      {
        label: "Choose connector",
        sentence: "although",
        thought:
          '"Although" signals: I know the other side\'s argument — and yet my claim still stands. This concede-then-argue structure is a top essay technique.',
      },
    ],
    final:
      "Social media platforms often fail to adequately protect users' personal data, <strong>although</strong> many of them claim to have strict privacy policies in place.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Placing "although" after your main claim (IC first, concession second) keeps your position dominant. This is more persuasive than leading with the concession — your argument lands first and the counter-argument is immediately weakened.',
  },
  {
    type: "complex",
    emoji: "📬",
    scenario:
      "CELPIP Writing Task 1 — Email to a community centre requesting a refund for a cancelled fitness class",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "I would like to request a full refund for the eight-week yoga program I registered for.",
        thought:
          "IC — the request is clear and polite. Now I need to explain the reason.",
      },
      {
        label: "Dependent clause",
        sentence:
          "since the program was cancelled without prior notice on your part",
        thought:
          'DC — "since" here means "because" (causal). It gives the reason for the refund request and assigns responsibility professionally.',
      },
      {
        label: "Choose connector",
        sentence: "since",
        thought:
          '"Since" (causal) is slightly more formal than "because." It implies the reason is known and undeniable — a stronger tone for a legitimate complaint.',
      },
    ],
    final:
      "I would like to request a full refund for the eight-week yoga program I registered for, <strong>since</strong> the program was cancelled without prior notice on your part.",
    tip: 'Useful for <strong>Writing Task 1 (formal complaint or request email)</strong>. Swapping "because" for causal "since" is a quick vocabulary upgrade that raises your Lexical Range score. It also sounds more assertive — implying the reason is self-evident and the request is therefore undeniable.',
  },
  {
    type: "complex",
    emoji: "🚌",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Recommending structural upgrades to a transit layout",
    steps: [
      {
        label: "Independent clause",
        sentence: "More residents would use public transit regularly.",
        thought:
          "IC — a confident prediction. My argument is: usage would go up. But this needs a condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if bus routes were expanded to reach suburban neighbourhoods that are currently underserved",
        thought:
          'DC — the condition. "If" + past tense = second conditional recommendation. This is the change I am proposing.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" makes this a policy recommendation: I am saying what WOULD happen if a specific change were made. It\'s persuasive and structured.',
      },
    ],
    final:
      "More residents would use public transit regularly <strong>if</strong> bus routes were expanded to reach suburban neighbourhoods that are currently underserved.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. Second conditional recommendations ("would… if… were") are highly effective for abstract, opinion-based tasks — they structure a policy alternative smoothly without sounding too aggressive or definitive.',
  },
  {
    type: "complex",
    emoji: "👨‍👩‍👧",
    scenario:
      "CELPIP Speaking Task 1 — Giving Advice: Advising a sibling on how to balance their kids' habits",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Children are more likely to develop strong social skills and healthy habits.",
        thought:
          "IC — my main claim. Strong, positive, complete. But I need to show WHEN or UNDER WHAT CONDITION.",
      },
      {
        label: "Dependent clause",
        sentence:
          "when parents actively limit their screen time and encourage outdoor activities instead",
        thought:
          'DC — the condition using "when." It explains what parents need to do for the IC to be true.',
      },
      {
        label: "Choose connector",
        sentence: "when",
        thought:
          '"When" here functions as a conditional — "in situations where parents do this, children benefit." It\'s softer than "if" and sounds more like an observed truth.',
      },
    ],
    final:
      "Children are more likely to develop strong social skills and healthy habits <strong>when</strong> parents actively limit their screen time and encourage outdoor activities instead.",
    tip: 'Useful for <strong>Speaking Task 1 (Giving Advice)</strong>. Grounding your suggestions using an structural "when" clause makes your advice sound like an observable pattern rather than an unproven opinion, which gives your monologue added authority.',
  },
  // ── COMPOUND-COMPLEX SENTENCES (10) ────────────────────────────────
  {
    type: "compound-complex",
    emoji: "📧",
    scenario:
      "CELPIP Writing Task 1 — Email to a neighbour about noise during night hours",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "I have genuinely enjoyed living next door to you over the past two years.",
        thought:
          "IC1 — I open positively to avoid sounding aggressive. This is good email strategy.",
      },
      {
        label: "Independent clause 2",
        sentence:
          "I wanted to raise a concern about the noise levels late at night",
        thought:
          'IC2 — the actual purpose of the email. "But" will contrast the positive IC1 with this concern.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "because it has been making it difficult for me to sleep before work",
        thought:
          'DC — the impact on me. "Because" subordinates this reason to IC2, adding necessary detail without making it the main message.',
      },
    ],
    final:
      "I have genuinely enjoyed living next door to you over the past two years, <strong>but</strong> I wanted to raise a concern about the noise levels late at night <strong>because</strong> it has been making it difficult for me to sleep before work.",
    tip: 'Useful for <strong>Writing Task 1 (informal or semi-formal complaint email)</strong>. The structure positive IC + "but" + concern + "because" + impact is the ideal formula for any neighbour or acquaintance complaint email. It maintains tone (polite), delivers purpose (the concern), and provides justification (the impact) — all three elements that Task 1 marking requires.',
  },
  {
    type: "compound-complex",
    emoji: "🏫",
    scenario:
      "CELPIP Writing Task 2 — Should uniforms be mandatory in public schools?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Although school uniforms may restrict individual expression, they create a sense of equality among students",
        thought:
          'Leading DC = "Although… expression." IC1 = "they create a sense of equality." "Although" concedes, IC1 argues. Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and they reduce the social pressure associated with branded clothing",
        thought:
          'IC2 — a second benefit. "And" adds it to IC1. Together IC1 + IC2 form a compound structure supporting uniforms.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          'One dependent clause + two independent clauses joined by "and." Classic compound-complex pattern for a body paragraph.',
      },
    ],
    final:
      "<strong>Although</strong> school uniforms may restrict individual expression, they create a sense of equality among students, <strong>and</strong> they reduce the social pressure associated with branded clothing.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. The pattern "Although [concession], [argument 1], and [argument 2]" is one of the most efficient body paragraph sentence structures for Task 2 — it concedes, argues, and extends all in one sentence, demonstrating exactly the range of grammar that moves scores from CLB 7 to CLB 9+.',
  },
  {
    type: "compound-complex",
    emoji: "🗣️",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Defending why hybrid workplace models are ideal",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "Remote work has proven to be highly effective for many professionals.",
        thought:
          "IC1 — I establish my position with a confident claim backed by general observation.",
      },
      {
        label: "Independent clause 2",
        sentence:
          "some roles genuinely require in-person collaboration and cannot function well remotely",
        thought:
          'IC2 — I acknowledge the counter-argument honestly. "But" will signal this turn.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which is why a flexible hybrid model may be the most practical solution",
        thought:
          'DC introduced by "which is why" — a relative clause that draws a conclusion from IC2. It depends on IC2 to make sense.',
      },
    ],
    final:
      "Remote work has proven to be highly effective for many professionals, <strong>but</strong> some roles genuinely require in-person collaboration and cannot function well remotely, <strong>which is why</strong> a flexible hybrid model may be the most practical solution.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. "Which is why" introduces a relative clause of conclusion. It allows you to synthesize opposite view perspectives fluidly and deliver a balanced ultimate answer before your 90 seconds run out.',
  },
  {
    type: "compound-complex",
    emoji: "🌆",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Resolving infrastructure gridlock or transit overcrowding",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Since many commuters travel during the same two-hour window each morning, the buses become dangerously overcrowded",
        thought:
          'Leading DC = "Since… morning." IC1 = "the buses become dangerously overcrowded." "Since" = because. Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "so the city should consider introducing staggered shift incentives for local businesses",
        thought:
          'IC2 — the proposed solution. "So" = result/recommendation. It flows from the problem stated in IC1.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "so" + IC2',
        thought:
          'DC explains the cause → IC1 describes the problem → "so" leads to IC2 (solution). Perfect problem-solution structure.',
      },
    ],
    final:
      "<strong>Since</strong> many commuters travel during the same two-hour window each morning, the buses become dangerously overcrowded, <strong>so</strong> the city should consider introducing staggered shift incentives for local businesses.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. The structure "Since [cause], [problem], so [solution]" condenses a multi-step analytical argument into a single coherent framework. This showcases high-level analytical fluency to the assessors.',
  },
  {
    type: "compound-complex",
    emoji: "🌿",
    scenario:
      "CELPIP Writing Task 2 — Should individuals or governments take responsibility for reducing plastic waste?",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "Individuals can make meaningful choices to reduce plastic use in their daily lives.",
        thought:
          "IC1 — one side of the argument. I want to balance it with a government responsibility (IC2).",
      },
      {
        label: "Independent clause 2",
        sentence:
          "governments must also enforce regulations that hold corporations accountable",
        thought:
          'IC2 — the other side. "And" connects both sides as equally important.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "since consumer-level changes alone are insufficient to address industrial-scale pollution",
        thought:
          'DC — "since" = because. It justifies why IC2 (government action) is necessary. It depends on IC2.',
      },
    ],
    final:
      "Individuals can make meaningful choices to reduce plastic use in their daily lives, <strong>and</strong> governments must also enforce regulations that hold corporations accountable, <strong>since</strong> consumer-level changes alone are insufficient to address industrial-scale pollution.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. Adding "since" to justify the second independent clause transforms a simple compound sentence into compound-complex — and shows that you can provide reasoning, not just claims. Examiners at CLB 9+ expect every argument to be supported, not just stated.',
  },
  {
    type: "compound-complex",
    emoji: "👩‍💼",
    scenario:
      "CELPIP Speaking Task 6 — Dealing with a Difficult Situation: Explaining to a stressed colleague why you must decline taking on extra work",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Even though it might feel impossible to slow down right now, I need to stick to my current task list",
        thought:
          'Leading DC = "Even though… right now." IC1 = "I need to stick to my current task list." Concession + declaring your boundary.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and I should also encourage you to speak with our supervisor about redistribution",
        thought:
          'IC2 — a constructive compromise path. "And" links it cleanly to support the coworker.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          "Acknowledge their stress first (DC), set your boundary firmly (IC1), then provide an actionable team step (IC2). This sounds balanced and professional.",
      },
    ],
    final:
      "<strong>Even though</strong> it might feel impossible to slow down right now, I need to stick to my current task list, <strong>and</strong> I should also encourage you to speak with our supervisor about redistribution.",
    tip: "Useful for <strong>Speaking Task 6 (Dealing with a Difficult Situation)</strong>. In Task 6, you are specifically evaluated on tone and social awareness while delivering hard news. Starting with an 'even though' clause validates the situation up front, ensuring a professional delivery.",
  },
  {
    type: "compound-complex",
    emoji: "🏡",
    scenario:
      "CELPIP Writing Task 1 — Email to a property management company about an unresolved maintenance request",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "I submitted a maintenance request for the broken bathroom window over three weeks ago.",
        thought:
          "IC1 — establishes the timeline clearly. The reader immediately understands the delay.",
      },
      {
        label: "Independent clause 2",
        sentence: "no one has come to inspect or repair it yet",
        thought:
          'IC2 — the unresolved status. "But" contrasts what I did (submitted request) with what didn\'t happen (no repair).',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which has become a serious safety and security concern for my household",
        thought:
          'DC — "which" relative clause showing impact. It depends on IC2 and adds urgency to the complaint.',
      },
    ],
    final:
      "I submitted a maintenance request for the broken bathroom window over three weeks ago, <strong>but</strong> no one has come to inspect or repair it yet, <strong>which</strong> has become a serious safety and security concern for my household.",
    tip: 'Useful for <strong>Writing Task 1 (formal complaint email)</strong>. The non-restrictive relative clause "which has become…" escalates urgency without starting a new sentence — it keeps the tone controlled and professional while still communicating that the issue is serious. Task 1 formal emails are evaluated on tone as well as content.',
  },
  {
    type: "compound-complex",
    emoji: "📊",
    scenario:
      "CELPIP Writing Task 2 — Is technology making people more or less productive?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "While technology has undoubtedly streamlined many workplace tasks, it has also introduced significant distractions",
        thought:
          'DC = "While… tasks." IC1 = "it has also introduced significant distractions." "While" = contrast (whereas). Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "so the overall impact on productivity depends largely on how intentionally it is used",
        thought:
          'IC2 — a nuanced conclusion. "So" shows this follows from the tension set up by DC + IC1.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "so" + IC2',
        thought:
          "This entire sentence makes a balanced argument: acknowledge benefits (DC) + note drawbacks (IC1) + draw conclusion (IC2). Three ideas, one sentence.",
      },
    ],
    final:
      "<strong>While</strong> technology has undoubtedly streamlined many workplace tasks, it has also introduced significant distractions, <strong>so</strong> the overall impact on productivity depends largely on how intentionally it is used.",
    tip: "Useful for <strong>Writing Task 2 (Survey Response)</strong> as a thesis or conclusion sentence. This compound-complex sentence presents both sides of the argument AND your nuanced position in a single sentence — a strategy that immediately demonstrates the balanced reasoning examiners look for at CLB 9 and above.",
  },
  {
    type: "compound-complex",
    emoji: "🎙️",
    scenario:
      "CELPIP Speaking Task 8 — Describing an Unusual Situation: Calling a friend to describe an absurd, bizarre piece of public art you see",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "It appears that a massive abstract structure has been installed outside the city hall.",
        thought:
          'IC1 — careful language ("it appears that") to introduce a bizarre, hard-to-explain shape. Sounds fluent.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "a giant metallic clock face is attached directly to its base",
        thought:
          'IC2 — specific, highly unusual details to paint a picture. "And" merges it naturally.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which looks incredibly bizarre because there are no hour hands on it",
        thought:
          "DC — relative clause detailing the unusual trait. It relies on IC2 to complete its meaning.",
      },
    ],
    final:
      "It appears that a massive abstract structure has been installed outside the city hall, <strong>and</strong> a giant metallic clock face is attached directly to its base, <strong>which looks incredibly bizarre</strong> because there are no hour hands on it.",
    tip: "Useful for <strong>Speaking Task 8 (Describing an Unusual Situation)</strong>. In Task 8, you must describe an abstract or surreal scene to someone who can't see it. Using a relative clause with 'which looks...' lets you describe a complex detail and explicitly label its strangeness seamlessly.",
  },
  {
    type: "compound-complex",
    emoji: "🏙️",
    scenario:
      "CELPIP Writing Task 2 — Conclusion paragraph: Should cities prioritise affordable housing over cultural landmarks?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Although preserving cultural landmarks is important for a city's identity, the urgent need for affordable housing must take priority in areas where residents are being displaced",
        thought:
          'DC = "Although… identity." IC1 = "the urgent need… must take priority." Long but structured. "Where" adds a relative clause inside IC1.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and both goals can ultimately be achieved through thoughtful, long-term urban planning",
        thought:
          'IC2 — the optimistic resolution. "And" bridges the tension into a conclusion. Strong essay closing move.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          "Concede (DC) + argue (IC1) + resolve (IC2). This is the structure of a high-scoring conclusion paragraph.",
      },
    ],
    final:
      "<strong>Although</strong> preserving cultural landmarks is important for a city's identity, the urgent need for affordable housing must take priority in areas where residents are being displaced, <strong>and</strong> both goals can ultimately be achieved through thoughtful, long-term urban planning.",
    tip: "Useful for <strong>Writing Task 2 (Survey Response)</strong> conclusion paragraph. The concede → argue → resolve structure (Although DC, IC1, and IC2) is the most powerful closing pattern for Task 2 — it shows balanced thinking, a clear position, and an optimistic forward-looking resolution, all of which are Content/Coherence markers at CLB 9+.",
  },
];
