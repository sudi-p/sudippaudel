// ─────────────────────────────────────────────────────────────────────────────
// 1. ADD to data.js
// ─────────────────────────────────────────────────────────────────────────────

export const VOICE_RULES = [
  {
    id: "active-def",
    voice: "active",
    title: "What is Active Voice?",
    body: "The subject performs the action. The sentence follows the natural order: Subject → Verb → Object. Active voice is direct, clear, and energetic.",
    formula: "Subject + Verb + Object",
    tip: "Active voice is preferred in CELPIP speaking tasks — it sounds more natural, confident, and conversational.",
  },
  {
    id: "passive-def",
    voice: "passive",
    title: "What is Passive Voice?",
    body: "The subject receives the action. The doer (agent) is either unknown, unimportant, or deliberately omitted. Passive voice is formed with be + past participle.",
    formula: "Subject + be (conjugated) + Past Participle + (by agent)",
    tip: "Passive voice is common in CELPIP Writing Task 1 formal emails and Writing Task 2 essays — it creates an objective, impersonal tone.",
  },
  {
    id: "passive-tenses",
    voice: "passive",
    title: "Passive Voice Across Tenses",
    body: 'The passive works in every tense by changing the form of "be" while keeping the past participle.',
    formula: null,
    tenseTable: [
      {
        tense: "Present simple",
        active: "They check the reports.",
        passive: "The reports are checked.",
      },
      {
        tense: "Past simple",
        active: "They cancelled the event.",
        passive: "The event was cancelled.",
      },
      {
        tense: "Future simple",
        active: "They will review the policy.",
        passive: "The policy will be reviewed.",
      },
      {
        tense: "Present perfect",
        active: "They have repaired the road.",
        passive: "The road has been repaired.",
      },
      {
        tense: "Past perfect",
        active: "They had informed the staff.",
        passive: "The staff had been informed.",
      },
      {
        tense: "Present continuous",
        active: "They are building a new school.",
        passive: "A new school is being built.",
      },
      {
        tense: "Past continuous",
        active: "They were processing my claim.",
        passive: "My claim was being processed.",
      },
      {
        tense: "Modal (will)",
        active: "They will address the issue.",
        passive: "The issue will be addressed.",
      },
      {
        tense: "Modal (should)",
        active: "They should review the plan.",
        passive: "The plan should be reviewed.",
      },
    ],
    tip: null,
  },
  {
    id: "when-to-use",
    voice: "both",
    title: "When to use each voice",
    body: null,
    formula: null,
    whenTable: [
      {
        situation: "Doer is unknown",
        voice: "Passive",
        example: "My bicycle was stolen last night.",
      },
      {
        situation: "Doer is unimportant",
        voice: "Passive",
        example: "The application form must be submitted by Friday.",
      },
      {
        situation: "Formal / impersonal tone",
        voice: "Passive",
        example: "It is recommended that residents conserve water.",
      },
      {
        situation: "Describing a process",
        voice: "Passive",
        example: "The water is filtered and then distributed to homes.",
      },
      {
        situation: "Personal opinion / story",
        voice: "Active",
        example: "I strongly believe the city should invest in transit.",
      },
      {
        situation: "Advice giving",
        voice: "Active",
        example: "You should speak with your manager directly.",
      },
      {
        situation: "Describing a scene",
        voice: "Active",
        example: "A large crowd is gathering near the city hall.",
      },
      {
        situation: "Emphasising the doer",
        voice: "Active",
        example: "The government announced new housing grants yesterday.",
      },
    ],
    tip: null,
  },
];

export const ACTIVE_EXAMPLES = [
  {
    task: "Speaking Task 7",
    scenario:
      "Expressing a strong opinion about the need for more cycling lanes in a city",
    sentence:
      "The city <em>should invest</em> in dedicated cycling lanes to reduce traffic congestion and improve public health.",
    why: "Active voice makes your opinion sound direct and confident — ideal for opinion tasks where you are defending a position.",
  },
  {
    task: "Speaking Task 1",
    scenario:
      "Giving advice to a friend who missed an important deadline at work",
    sentence:
      "You <em>should speak</em> with your manager immediately and <em>explain</em> what happened before the situation gets worse.",
    why: "Active voice with modal verbs (should) is the natural structure for advice — it places the listener as the subject in control of the action.",
  },
  {
    task: "Speaking Task 2",
    scenario:
      "Describing a personal experience — moving to a new city for the first time",
    sentence:
      "When I first <em>arrived</em> in Toronto, I <em>did not know</em> anyone, so I <em>joined</em> a local community group to meet new people.",
    why: "Personal narratives (Task 2) always use active voice — the story is about what YOU did, making you the natural subject of every verb.",
  },
  {
    task: "Speaking Task 5",
    scenario:
      "Comparing two options — living downtown vs. living in the suburbs",
    sentence:
      "People who <em>live</em> downtown <em>save</em> time on commuting, but they <em>pay</em> significantly higher rent for smaller spaces.",
    why: "Active voice makes comparisons crisp and balanced. Both subjects are doing something — commuting, paying, living — which is exactly the structure Speaking Task 5 rewards.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Opening sentence of an opinion essay arguing that governments should fund public libraries",
    sentence:
      "Public libraries <em>provide</em> communities with free access to knowledge, cultural resources, and digital services that many residents cannot afford independently.",
    why: "A strong active opening sentence in Task 2 establishes your argument immediately — subject (libraries) + verb (provide) + object (communities) = clear, authoritative claim.",
  },
  {
    task: "Speaking Task 4",
    scenario:
      "Predicting what will happen if a neighbourhood park is removed to build a shopping mall",
    sentence:
      "If the city <em>removes</em> the park, families <em>will lose</em> their only green space and children <em>will have</em> nowhere safe to play.",
    why: "Conditional predictions use active voice naturally. The subject of each clause is clear — city, families, children — making the cause-effect chain easy for the examiner to follow.",
  },
  {
    task: "Speaking Task 3",
    scenario:
      "Describing a scene in an image showing a busy farmers market on a Saturday morning",
    sentence:
      "Vendors <em>are setting up</em> their stalls, shoppers <em>are browsing</em> the produce, and a group of children <em>are playing</em> near the fountain.",
    why: "Scene description uses active present continuous naturally — each subject is actively doing something visible, which makes the description vivid and organised.",
  },
  {
    task: "Writing Task 1",
    scenario:
      "Opening of a semi-formal email to a neighbour about a recurring noise problem",
    sentence:
      "I <em>am writing</em> to raise a concern about the noise levels late at night that <em>have been affecting</em> my sleep for the past two weeks.",
    why: 'In semi-formal complaint emails, active voice keeps the tone personal and direct. Starting with "I am writing" is the standard professional email opener.',
  },
  {
    task: "Speaking Task 8",
    scenario:
      "Describing an unusual situation — you arrive at work and find the office completely empty",
    sentence:
      "When I <em>walked</em> in, I <em>noticed</em> that no one <em>had arrived</em> yet, all the lights <em>were off</em>, and a note <em>was sitting</em> on the reception desk.",
    why: "Narrating an unusual situation (Task 8) uses active voice to make the sequence of discoveries feel immediate and real — as if you are reliving it.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Conclusion of an essay arguing that individuals bear more responsibility than governments for environmental protection",
    sentence:
      "Individuals <em>make</em> purchasing decisions every day that either <em>support</em> or <em>undermine</em> sustainable practices, and no government policy can fully <em>replace</em> that personal responsibility.",
    why: "A strong active conclusion re-centres the argument on a clear subject (individuals) and drives home the essay's main point with confident, unambiguous verbs.",
  },
  {
    task: "Speaking Task 6",
    scenario:
      "Explaining how you handled a difficult situation — a disagreement with a coworker in front of a client",
    sentence:
      "I <em>calmly interrupted</em> the conversation, <em>suggested</em> we discuss the matter privately, and <em>offered</em> the client an alternative solution on the spot.",
    why: "In Task 6 (dealing with a difficult situation), active voice shows you took initiative — you are the subject who acted, which demonstrates competence and confidence.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Body paragraph arguing that technology improves access to education",
    sentence:
      "Online platforms <em>allow</em> students in rural areas to <em>access</em> the same high-quality courses that urban students <em>attend</em> in person, effectively <em>bridging</em> the educational gap.",
    why: "Each clause has a clear active subject — platforms, students — making the argument easy to follow and logically structured, which Writing Task 2 rewards with higher Coherence scores.",
  },
];

export const PASSIVE_EXAMPLES = [
  {
    task: "Writing Task 1",
    scenario:
      "Formal complaint email to a property management company about an unresolved repair",
    sentence:
      "A maintenance request <em>was submitted</em> over three weeks ago, and the issue <em>has not been resolved</em> despite two follow-up calls.",
    why: "Passive voice in formal complaint emails creates an objective, professional tone. The focus stays on what was done (or not done), not on accusing a specific person.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay discussing how public policy shapes environmental behaviour",
    sentence:
      "When recycling programs <em>are introduced</em> at the municipal level, household waste <em>is significantly reduced</em> within the first year of implementation.",
    why: "Passive voice in essay body paragraphs creates an academic tone. The focus is on the outcome (waste reduced) rather than who reduces it — appropriate for general policy claims.",
  },
  {
    task: "Writing Task 1",
    scenario: "Formal email to a university registrar requesting a transcript",
    sentence:
      "I would appreciate it if my official transcript could <em>be sent</em> to the address provided below at your earliest convenience.",
    why: '"Could be sent" (passive modal) is the most polite form of a request in formal writing. It removes direct pressure on the reader by not making them the subject of the obligation.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Discussing the impact of social media in an opinion essay about technology",
    sentence:
      "Young people <em>are constantly bombarded</em> with unrealistic images online, and their self-esteem <em>is gradually eroded</em> as a result.",
    why: "Passive voice here emphasises that young people are the recipients of harm — they are acted upon, not acting. This structures the argument as one about vulnerability and systemic impact.",
  },
  {
    task: "Speaking Task 4",
    scenario:
      "Predicting what will happen if a hospital in a small town is closed",
    sentence:
      "If the hospital <em>is closed</em>, hundreds of patients <em>will be forced</em> to travel long distances for emergency care, and lives could <em>be put</em> at risk.",
    why: 'Passive constructions like "will be forced" and "be put at risk" are common in formal predictions — they emphasise consequence without needing to assign blame.',
  },
  {
    task: "Writing Task 1",
    scenario: "Email to an online retailer about a delayed order",
    sentence:
      "My order <em>was placed</em> on the 3rd of October, and I <em>was informed</em> at the time that it would arrive within five business days.",
    why: 'Passive voice establishes a timeline of events objectively. "Was placed" and "was informed" focus on what happened, not on who is responsible — keeping the tone factual rather than confrontational.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay arguing that more funding should be given to mental health services",
    sentence:
      "Mental health conditions <em>are often misunderstood</em> and <em>are frequently left untreated</em> due to a lack of publicly funded support services.",
    why: 'Double passive constructions ("are misunderstood" + "are left untreated") create a powerful accumulation of systemic failures — ideal for establishing a problem before proposing your solution.',
  },
  {
    task: "Speaking Task 7",
    scenario:
      "Expressing an opinion about whether schools should be responsible for teaching life skills",
    sentence:
      "Many essential life skills, such as financial literacy and conflict resolution, <em>are never taught</em> in schools, which means students <em>are left</em> unprepared for adult life.",
    why: 'Using passive voice in opinion tasks adds weight to a claim about systemic neglect. "Are never taught" and "are left" emphasise institutional failure without needing to name a specific actor.',
  },
  {
    task: "Writing Task 1",
    scenario:
      "Formal letter to a city council requesting repairs to a damaged sidewalk",
    sentence:
      "The sidewalk along Maple Avenue <em>has not been repaired</em> since the damage <em>was first reported</em> to the city over two months ago.",
    why: 'Present perfect passive ("has not been repaired") is the ideal structure for complaints about unresolved issues — it links a past event to an ongoing present consequence.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay about whether traditional media or social media should be trusted for news",
    sentence:
      "Traditional news articles <em>are written</em> by trained journalists, <em>are edited</em> by experienced professionals, and <em>are held</em> to strict standards of factual accuracy.",
    why: "Triple passive construction emphasises process and rigour. The focus is entirely on what happens to the article — the quality controls — rather than on the people performing them.",
  },
  {
    task: "Speaking Task 3",
    scenario:
      "Describing what has happened in a news broadcast image showing a damaged building after a storm",
    sentence:
      "It appears that several windows <em>have been shattered</em>, the roof <em>has been partially torn off</em>, and the surrounding street <em>has been closed</em> to traffic.",
    why: "Present perfect passive is ideal for describing results visible in an image. You can see what has been done — windows shattered, roof torn — without knowing who or what caused it.",
  },
  {
    task: "Writing Task 1",
    scenario:
      "Closing sentence of a formal complaint email escalating the issue",
    sentence:
      "If this matter <em>is not resolved</em> within the next five business days, a formal complaint <em>will be filed</em> with the relevant consumer protection authority.",
    why: 'Passive voice in escalation sentences keeps the tone formal and impersonal while still delivering a firm ultimatum — "will be filed" sounds more professional than "I will file a complaint."',
  },
];

export const VOICE_TRAPS = [
  {
    wrong: "✗ The letter was written by me to the manager.",
    right: "✓ I wrote the letter to the manager.",
    why: 'When the doer (agent) IS known and important, active voice is cleaner. Passive with "by me" sounds awkward and unnatural.',
  },
  {
    wrong: "✗ A decision was made by the committee to reject the proposal.",
    right: "✓ The committee decided to reject the proposal.",
    why: "If you know the agent and want to emphasise who acted, use active voice. Passive here buries the most important information.",
  },
  {
    wrong: "✗ The problem should be spoken about to your manager by you.",
    right: "✓ You should speak to your manager about the problem.",
    why: "Passive voice with advice (should) sounds extremely unnatural in speaking. Active is always preferred for advice-giving.",
  },
  {
    wrong: "✗ It was gone to the store by her.",
    right: "✓ She went to the store.",
    why: "Intransitive verbs (go, arrive, sleep) cannot be made passive — they have no object to become the subject. This is one of the most common passive errors.",
  },
  {
    wrong: "✗ My essay has been written by me yesterday.",
    right: "✓ I wrote my essay yesterday.",
    why: "Passive voice with clear personal authorship and a past time marker is redundant. Simple past active is natural here.",
  },
  {
    wrong:
      "✗ The new policy was being announced by the government last Tuesday.",
    right: "✓ The government announced the new policy last Tuesday.",
    why: 'Past continuous passive ("was being announced") is awkward when a simple past active construction communicates the same idea more clearly.',
  },
];
