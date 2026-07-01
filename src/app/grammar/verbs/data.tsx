export const VERB_TYPES = [
  {
    id: "action",
    name: "Action verb",
    cat: "function",
    def: "Expresses a physical or mental action — the subject actively does something.",
    examples: [
      "She <em>runs</em> every morning.",
      "He <em>decided</em> to quit.",
    ],
    overlaps: [
      {
        with: "transitive",
        desc: "Most action verbs are also transitive — the action passes to an object.",
        sentence: "She <em>kicked</em> the ball.",
      },
      {
        with: "intransitive",
        desc: "Some action verbs need no object at all.",
        sentence: "The baby <em>cried</em>.",
      },
      {
        with: "auxiliary",
        desc: '"Do" is both an action verb and an auxiliary.',
        sentence: "I <em>do</em> yoga. / I <em>do not</em> know.",
      },
    ],
    exclusive:
      "Action vs stative is often the sharpest distinction — most pure stative verbs (know, believe, own) cannot be action verbs.",
    spotlightVerb: "run",
    spotlightTags: ["action", "intransitive"],
  },
  {
    id: "linking",
    name: "Linking verb",
    cat: "function",
    def: "Connects the subject to a description (adjective or noun). Does not show action — describes a state.",
    examples: ["She <em>seems</em> tired.", "He <em>became</em> a doctor."],
    overlaps: [
      {
        with: "stative",
        desc: "Linking verbs are almost always stative — they describe a state, not an action.",
        sentence: "The soup <em>smells</em> delicious.",
      },
      {
        with: "action",
        desc: 'Verbs like "smell", "taste", "look" can be linking OR action depending on meaning.',
        sentence:
          "She <em>looked</em> sad. (linking) / She <em>looked</em> at me. (action)",
      },
    ],
    exclusive:
      'Linking verbs cannot be transitive — they never take a direct object. "She seems a doctor" needs "to be" in between.',
    spotlightVerb: "smell",
    spotlightTags: [
      "linking (linking use)",
      "action (action use)",
      "stative (linking use)",
    ],
  },
  {
    id: "auxiliary",
    name: "Auxiliary verb",
    cat: "function",
    def: "Helps the main verb express tense, voice, mood, or aspect. Always paired with another verb.",
    examples: [
      "She <em>is running</em>.",
      "He <em>has eaten</em>.",
      "I <em>did not know</em>.",
    ],
    overlaps: [
      {
        with: "modal",
        desc: "All modal verbs ARE auxiliary verbs — a subset of the auxiliary category.",
        sentence: "<em>Can</em> you help? / She <em>will</em> arrive.",
      },
      {
        with: "action",
        desc: '"Have", "do", "be" can each function as a full action verb OR as an auxiliary.',
        sentence:
          "I <em>have</em> a car. (action) / I <em>have</em> eaten. (auxiliary)",
      },
    ],
    exclusive:
      "When functioning as auxiliaries, these verbs have no independent meaning — they only modify the main verb.",
    spotlightVerb: "have",
    spotlightTags: [
      'action ("I have a car")',
      'auxiliary ("I have eaten")',
      'causative ("I had it fixed")',
    ],
  },
  {
    id: "modal",
    name: "Modal verb",
    cat: "special",
    def: "A subset of auxiliary verbs that express ability, possibility, permission, or obligation. Never change form.",
    examples: [
      "You <em>should</em> rest.",
      "She <em>might</em> come.",
      "He <em>must</em> leave.",
    ],
    overlaps: [
      {
        with: "auxiliary",
        desc: "Every modal IS an auxiliary — modal is a specific type within the auxiliary family.",
        sentence: "<em>Must</em> = auxiliary that expresses obligation.",
      },
    ],
    exclusive:
      'Modals are unique: they never take -s, -ed, or -ing. You cannot say "she cans swim" or "he musted go."',
    spotlightVerb: "can",
    spotlightTags: ["modal", "auxiliary"],
  },
  {
    id: "transitive",
    name: "Transitive verb",
    cat: "object",
    def: "Requires a direct object — the action passes from subject to something or someone.",
    examples: ["She <em>bought</em> a car.", "He <em>loves</em> music."],
    overlaps: [
      {
        with: "action",
        desc: "Most transitive verbs are also action verbs — the subject actively does something to the object.",
        sentence: "She <em>kicked</em> the ball.",
      },
      {
        with: "stative",
        desc: "Some stative verbs are also transitive — the subject holds a state toward an object.",
        sentence: "I <em>own</em> a house. (stative + transitive)",
      },
      {
        with: "causative",
        desc: "Causative verbs are always transitive — they need both an object and an action done to it.",
        sentence: "She <em>had</em> her hair <em>cut</em>.",
      },
    ],
    exclusive: null,
    spotlightVerb: "love",
    spotlightTags: ["transitive", "stative"],
  },
  {
    id: "intransitive",
    name: "Intransitive verb",
    cat: "object",
    def: "Does NOT take a direct object. The action stays with the subject.",
    examples: ["The baby <em>slept</em>.", "She <em>arrived</em> early."],
    overlaps: [
      {
        with: "action",
        desc: "Intransitive verbs are usually action verbs — the subject does something, just to no object.",
        sentence: "He <em>laughed</em>.",
      },
      {
        with: "linking",
        desc: '"Appear", "seem", "become" are intransitive linking verbs — they describe, not act.',
        sentence: "She <em>appears</em> happy.",
      },
    ],
    exclusive:
      'The transitive/intransitive divide is the most fluid — many verbs work both ways. "She runs" (intransitive) vs "she runs a company" (transitive).',
    spotlightVerb: "run",
    spotlightTags: [
      "action",
      'intransitive ("She runs")',
      'transitive ("She runs a company")',
    ],
  },
  {
    id: "stative",
    name: "Stative verb",
    cat: "state",
    def: "Describes a state, not an action. Usually not used in continuous tenses.",
    examples: [
      "I <em>know</em> the answer.",
      "She <em>believes</em> him.",
      "He <em>owns</em> a car.",
    ],
    overlaps: [
      {
        with: "linking",
        desc: "Stative verbs and linking verbs heavily overlap — both describe states rather than actions.",
        sentence: "The cake <em>tastes</em> sweet. (stative + linking)",
      },
      {
        with: "transitive",
        desc: "Many stative verbs are transitive — they hold a state toward an object.",
        sentence: "I <em>love</em> her. / She <em>wants</em> more.",
      },
      {
        with: "action",
        desc: "Some verbs switch between stative and action meaning — changing the meaning entirely.",
        sentence:
          "I <em>think</em> it is wrong. (stative) / I <em>am thinking</em> about it. (action)",
      },
    ],
    exclusive:
      'The one firm rule: stative verbs cannot use continuous tenses for their stative meaning. "I am knowing" is always wrong. But the same verb in action meaning can: "I am thinking hard."',
    spotlightVerb: "think",
    spotlightTags: [
      'stative ("I think it\'s true")',
      'action ("I am thinking about it")',
    ],
  },
  {
    id: "causative",
    name: "Causative verb",
    cat: "special",
    def: "Shows that the subject causes or arranges for something to happen, often via someone else.",
    examples: [
      "She <em>made</em> him apologize.",
      "I <em>got</em> my hair cut.",
      "He <em>had</em> it repaired.",
    ],
    overlaps: [
      {
        with: "transitive",
        desc: "Causative verbs are always transitive — they must have both an object and a following action.",
        sentence: "She <em>made</em> him leave.",
      },
      {
        with: "auxiliary",
        desc: '"Have" and "get" are commonly both auxiliaries and causatives depending on context.',
        sentence:
          "I <em>had</em> the car fixed. (causative) / I <em>had</em> eaten. (auxiliary)",
      },
      {
        with: "action",
        desc: "Causative verbs are action verbs — the subject is actively causing or arranging something.",
        sentence: "She <em>let</em> the children play outside.",
      },
    ],
    exclusive:
      'The causative meaning depends on structure, not just the verb. "Have" alone is not causative — it must be followed by object + past participle (had it fixed) or object + base verb (had him wait).',
    spotlightVerb: "have",
    spotlightTags: [
      'action ("I have a car")',
      'auxiliary ("I have eaten")',
      'causative ("I had it fixed")',
    ],
  },
];

//---------- Verbs ------------------------

// ── DATA ──────────────────────────────────────────────────────────────

export const TENSES = [
  // ── Simple tenses ──────────────────────────────────────────────────────────
  {
    group: "Simple tenses",
    name: "Present simple",
    form: "V / V-s (he/she/it)",
    use: "Habits, general facts, schedules, and permanent situations.",
    signal: "always, usually, every day, never, often, generally",
    examples: [
      {
        task: "Writing Task 2",
        scenario:
          "Stating a general fact in an opinion essay about public transit",
        sentence:
          "Public transit <em>reduces</em> traffic congestion and lowers carbon emissions in dense urban areas.",
      },
      {
        task: "Speaking Task 7",
        scenario: "Expressing a general opinion about remote work",
        sentence:
          "Many employees <em>prefer</em> working from home because it <em>saves</em> them hours of commuting every week.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining a recurring problem in a complaint email to a landlord",
        sentence:
          "The heating system <em>stops</em> working every time the temperature <em>drops</em> below minus ten degrees.",
      },
    ],
  },
  {
    group: "Simple tenses",
    name: "Past simple",
    form: "V-ed (regular) / irregular form",
    use: "Completed actions at a specific time in the past.",
    signal: "yesterday, last week, in 2022, ago, at that time",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Describing a personal experience — a time you overcame a challenge",
        sentence:
          "When I first <em>arrived</em> in Canada, I <em>struggled</em> to understand the local accent, but I <em>joined</em> a language group and gradually <em>improved</em>.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining the background of a complaint email about a cancelled class",
        sentence:
          "I <em>registered</em> for the eight-week fitness program last month and <em>paid</em> the full fee in advance.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Describing a difficult situation you once handled — noise complaint from a neighbour",
        sentence:
          "My neighbour <em>knocked</em> on my door late at night and <em>asked</em> me to lower the volume, so I <em>apologised</em> immediately.",
      },
    ],
  },
  {
    group: "Simple tenses",
    name: "Future simple",
    form: "will + V",
    use: "Predictions, spontaneous decisions, promises, and offers.",
    signal: "tomorrow, next week, soon, I think, I believe",
    examples: [
      {
        task: "Speaking Task 4",
        scenario:
          "Making a prediction about what will happen if a park is converted into a parking lot",
        sentence:
          "If the city removes the green space, residents <em>will lose</em> their only outdoor recreational area, and property values <em>will likely drop</em>.",
      },
      {
        task: "Writing Task 1",
        scenario: "Making a promise or commitment at the end of a formal email",
        sentence:
          "I <em>will ensure</em> that the issue is resolved before the end of the week and <em>will send</em> you a confirmation once it is done.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Predicting the outcome of a policy in an opinion essay about education funding",
        sentence:
          "Without additional investment in teacher training, student performance <em>will continue</em> to decline in underfunded schools.",
      },
    ],
  },

  // ── Continuous tenses ──────────────────────────────────────────────────────
  {
    group: "Continuous tenses",
    name: "Present continuous",
    form: "am / is / are + V-ing",
    use: "Actions happening right now, temporary situations, or planned future arrangements.",
    signal: "now, at the moment, currently, this week, these days",
    examples: [
      {
        task: "Speaking Task 3",
        scenario:
          "Describing a scene in an image showing a busy community market",
        sentence:
          "In the image, vendors <em>are selling</em> fresh produce and customers <em>are browsing</em> the stalls along the street.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining an ongoing problem in an email to a property manager",
        sentence:
          "The water <em>is leaking</em> from the bathroom ceiling, and the damage <em>is spreading</em> to the wall beside the window.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Describing an unusual situation — construction starting unexpectedly outside your window",
        sentence:
          "Workers <em>are drilling</em> into the pavement directly outside my apartment, and the noise <em>is making</em> it impossible to concentrate.",
      },
    ],
  },
  {
    group: "Continuous tenses",
    name: "Past continuous",
    form: "was / were + V-ing",
    use: "An action in progress at a specific past time, or one action interrupted by another.",
    signal: "while, when, at that moment, at 3 pm yesterday",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Narrating a personal story — the moment you received important news",
        sentence:
          "I <em>was preparing</em> for a job interview when my phone rang and I found out I had already been offered the position.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Explaining a difficult situation involving a misunderstanding with a coworker",
        sentence:
          "I <em>was presenting</em> my report in the meeting when my colleague interrupted and questioned my data in front of everyone.",
      },
      {
        task: "Writing Task 1",
        scenario: "Providing context in an email about a delivery issue",
        sentence:
          "I <em>was waiting</em> at home all afternoon for the delivery, but the courier marked the package as undeliverable without attempting to ring the doorbell.",
      },
    ],
  },
  {
    group: "Continuous tenses",
    name: "Future continuous",
    form: "will be + V-ing",
    use: "An action that will be in progress at a specific future moment.",
    signal: "at this time tomorrow, by noon, next Friday at 3 pm",
    examples: [
      {
        task: "Speaking Task 5",
        scenario:
          "Explaining why you cannot attend an event while giving advice to a friend about scheduling",
        sentence:
          "I <em>will be travelling</em> to Ottawa for a work conference next weekend, so I <em>will not be able</em> to help you move.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Mentioning a future schedule conflict in a polite email requesting a reschedule",
        sentence:
          "On the day of the proposed meeting, I <em>will be attending</em> a mandatory training session at a different location.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Predicting ongoing societal change in an essay about technology and employment",
        sentence:
          "Within a decade, machines <em>will be performing</em> many of the routine tasks that currently require human workers in manufacturing and logistics.",
      },
    ],
  },

  // ── Perfect tenses ─────────────────────────────────────────────────────────
  {
    group: "Perfect tenses",
    name: "Present perfect",
    form: "have / has + past participle",
    use: "A past action with present relevance, life experience, or an action that started in the past and continues now.",
    signal: "just, already, yet, ever, never, since, for, recently, so far",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Establishing urgency in a complaint email about an unresolved maintenance issue",
        sentence:
          "I <em>have submitted</em> three maintenance requests over the past month, but the broken heating system <em>has not been repaired</em> yet.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Supporting an opinion about remote work by citing recent changes",
        sentence:
          "Many companies <em>have already adopted</em> hybrid work models and <em>have reported</em> higher employee satisfaction as a result.",
      },
      {
        task: "Speaking Task 2",
        scenario:
          "Introducing a personal experience question about travel or living abroad",
        sentence:
          "I <em>have lived</em> in three different countries over the past eight years, and each experience <em>has shaped</em> the way I see the world.",
      },
    ],
  },
  {
    group: "Perfect tenses",
    name: "Past perfect",
    form: "had + past participle",
    use: 'An action that was completed before another past action. The "further back" past.',
    signal: "before, after, already, by the time, when, once",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Telling a story about missing an opportunity — arriving late to a job interview",
        sentence:
          "By the time I arrived at the office, the hiring manager <em>had already interviewed</em> the other candidates and <em>had filled</em> the position.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining the timeline of events in a complaint email about a defective product",
        sentence:
          "I contacted your customer service team only after I <em>had tried</em> every troubleshooting step listed in the product manual.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Describing how you resolved a conflict after a misunderstanding had already occurred",
        sentence:
          "I apologised to my colleague once I realised that she <em>had not received</em> my earlier message and <em>had been waiting</em> for me unnecessarily.",
      },
    ],
  },
  {
    group: "Perfect tenses",
    name: "Future perfect",
    form: "will have + past participle",
    use: "An action that will be completed before a specific point in the future.",
    signal: "by next week, by the time, before, by then",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Making a commitment in a formal email about resolving a complaint",
        sentence:
          "I assure you that our team <em>will have addressed</em> the issue and sent a replacement unit before the end of the business week.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Projecting a future outcome in an essay about urban housing policy",
        sentence:
          "By 2035, the city <em>will have exhausted</em> its available land for new construction if current development rates continue unchecked.",
      },
      {
        task: "Speaking Task 4",
        scenario:
          "Predicting a positive outcome if a community garden proposal is approved",
        sentence:
          "If the project receives funding this spring, volunteers <em>will have planted</em> over five hundred trees in the neighbourhood by the end of summer.",
      },
    ],
  },

  // ── Perfect continuous ─────────────────────────────────────────────────────
  {
    group: "Perfect continuous",
    name: "Present perfect continuous",
    form: "have / has been + V-ing",
    use: "An action that started in the past, is still ongoing, and emphasises duration or visible result.",
    signal: "for, since, how long, lately, recently, all day",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Emphasising how long a problem has been ongoing in a complaint email about noise",
        sentence:
          "My neighbour <em>has been playing</em> loud music past midnight for the past three weeks, and my sleep <em>has been suffering</em> as a result.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Advising a friend who has been struggling with workload and burnout",
        sentence:
          "It sounds like you <em>have been taking</em> on too many responsibilities without enough support, and that kind of pressure adds up over time.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Expressing an opinion about transit delays supported by recent personal experience",
        sentence:
          "Commuters <em>have been experiencing</em> serious delays on the main subway line for months, which suggests the infrastructure urgently needs investment.",
      },
    ],
  },
  {
    group: "Perfect continuous",
    name: "Past perfect continuous",
    form: "had been + V-ing",
    use: "An ongoing action that was in progress before another past event — emphasises duration up to a past point.",
    signal: "for, since, before, when, by the time",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Describing a personal experience — finally getting a job after a long search",
        sentence:
          "I <em>had been applying</em> for positions for nearly six months before I finally received an offer from a company that matched my skills.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Providing context in a formal complaint email about a service provider",
        sentence:
          "I <em>had been waiting</em> for a technician for over four hours when I received a message saying the appointment had been cancelled without notice.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Explaining the background of a tense situation before you intervened",
        sentence:
          "The two colleagues <em>had been disagreeing</em> over the project timeline for weeks before I stepped in and suggested a compromise.",
      },
    ],
  },
  {
    group: "Perfect continuous",
    name: "Future perfect continuous",
    form: "will have been + V-ing",
    use: "Emphasises the duration of an action up to a specific future point. Formal and advanced.",
    signal: "by, for, by the time",
    examples: [
      {
        task: "Writing Task 2",
        scenario:
          "Making a long-term argument about climate policy in an opinion essay",
        sentence:
          "By 2050, governments <em>will have been ignoring</em> climate warnings for nearly a century, and the consequences <em>will be</em> irreversible.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Expressing a strong opinion about the need for transit reform using duration",
        sentence:
          "By the time the new subway line opens, commuters <em>will have been tolerating</em> these delays for over a decade with no meaningful improvement.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Emphasising duration in a formal letter requesting recognition or resolution",
        sentence:
          "By the end of this month, I <em>will have been renting</em> this unit for five years and have never once missed a payment or violated any terms.",
      },
    ],
  },
];

export const MODALS = [
  {
    modal: "can",
    negative: "cannot / can't",
    note: "Use 'can' for present ability, informal permission, or general possibility. Very common in CELPIP speaking tasks.",
    meanings: ["Ability (present)", "Permission (informal)", "Possibility"],
    examples: [
      {
        task: "Speaking Task 5",
        scenario:
          "Describing your own qualifications during a phone call about a job posting.",
        sentence: "I can work flexible hours and I can start immediately.",
      },
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing to a neighbour to offer help with a community event.",
        sentence:
          "I can bring extra chairs and I can help set up the hall before the event starts.",
      },
      {
        task: "Speaking Task 6",
        scenario: "Advising a friend on how to deal with a noisy neighbour.",
        sentence:
          "You can speak to the building manager — they can usually resolve these issues quickly.",
      },
    ],
  },
  {
    modal: "could",
    negative: "could not / couldn't",
    note: "Use 'could' for past ability, polite requests, or weak possibility. More tentative than 'can' — preferred in formal CELPIP writing.",
    meanings: ["Past ability", "Polite request", "Weak possibility"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Writing a formal email to a landlord requesting a repair.",
        sentence:
          "Could you please arrange for the heating system to be inspected before the weekend?",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Giving advice to someone who is stressed about a deadline at work.",
        sentence:
          "You could try breaking the project into smaller tasks — that could make it feel much more manageable.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Discussing options with a friend who is considering moving to a new city.",
        sentence:
          "You could look into renting first — that way you could get a feel for the neighbourhood before committing.",
      },
    ],
  },
  {
    modal: "may",
    negative: "may not",
    note: "Use 'may' for formal permission or 50/50 possibility. More formal than 'can' or 'might' — excellent in CELPIP writing tasks.",
    meanings: ["Formal permission", "Possibility"],
    examples: [
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Discussing the potential downsides of remote work in an opinion essay.",
        sentence:
          "Working from home may reduce collaboration among team members, which may negatively affect company culture over time.",
      },
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing to a manager requesting time off for a family obligation.",
        sentence:
          "I may need to take Friday afternoon off, as I have a family appointment that may run longer than expected.",
      },
      {
        task: "Speaking Task 8",
        scenario: "Expressing uncertainty about a community planning decision.",
        sentence:
          "The new transit line may benefit commuters in the east end, but it may also increase noise levels for nearby residents.",
      },
    ],
  },
  {
    modal: "might",
    negative: "might not",
    note: "Use 'might' for low probability or hesitant suggestions. Weaker than 'may' — useful when expressing doubt or exploring unlikely options.",
    meanings: ["Weak possibility (< 50%)"],
    examples: [
      {
        task: "Speaking Task 6",
        scenario:
          "Helping a friend decide whether to accept a job offer in another city.",
        sentence:
          "It might be worth visiting the city first — you might feel differently once you've seen the neighbourhood in person.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Acknowledging the other side of the argument about mandatory community service.",
        sentence:
          "While some students might resist at first, they might ultimately find the experience rewarding and career-building.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Advising a coworker who is unsure about raising a concern with their manager.",
        sentence:
          "You might want to send an email first — your manager might appreciate having time to think it over before a meeting.",
      },
    ],
  },
  {
    modal: "must",
    negative: "must not / mustn't",
    note: "Use 'must' for strong obligation or logical certainty. 'Must not' expresses prohibition. Common in formal writing and deduction contexts.",
    meanings: ["Strong obligation", "Logical deduction (certainty)"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Writing to a tenant about building rules after a complaint.",
        sentence:
          "All residents must ensure that noise levels are kept to a minimum after 10 PM, as per the building agreement.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Arguing that governments should take action on climate change.",
        sentence:
          "Governments must implement stricter emission regulations — the consequences of inaction must not be underestimated.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Discussing a candidate's qualifications while comparing two job applicants.",
        sentence:
          "She has three degrees and ten years of experience — she must be the strongest candidate we've seen this year.",
      },
    ],
  },
  {
    modal: "should",
    negative: "should not / shouldn't",
    note: "Use 'should' for advice, recommendations, and expectations. One of the most useful modals in CELPIP — natural in both speaking and writing.",
    meanings: ["Advice / recommendation", "Mild obligation", "Expectation"],
    examples: [
      {
        task: "Speaking Task 6",
        scenario:
          "Recommending a course of action to a friend dealing with a difficult coworker.",
        sentence:
          "You should speak to your supervisor about this — you shouldn't have to handle it on your own.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario: "Arguing in favour of public transportation investment.",
        sentence:
          "City councils should prioritize expanding bus and subway networks, as this should reduce traffic congestion significantly.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Discussing what a community centre should offer to attract young families.",
        sentence:
          "The centre should offer affordable childcare programs — that should encourage more families to use the facility regularly.",
      },
    ],
  },
  {
    modal: "will",
    negative: "will not / won't",
    note: "Use 'will' for future facts, promises, and spontaneous decisions. Essential for Writing Task 1 emails and Speaking Tasks involving future plans.",
    meanings: ["Future fact / prediction", "Promise", "Spontaneous decision"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Confirming attendance at a work event in a reply email.",
        sentence:
          "I will attend the orientation session on Thursday and I will bring the completed forms as requested.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Making a commitment during a discussion about covering for a colleague.",
        sentence:
          "Don't worry — I will handle the client calls while she is away and I will keep everyone updated.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario: "Making a prediction about the future of online education.",
        sentence:
          "As technology continues to advance, online learning will become the primary mode of education for millions of students worldwide.",
      },
    ],
  },
  {
    modal: "would",
    negative: "would not / wouldn't",
    note: "Use 'would' for polite requests, conditional situations, and past habits. One of the most versatile and formal-sounding modals in English.",
    meanings: ["Polite request", "Conditional", "Past habit", "Wish"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing a formal complaint email to a property management company.",
        sentence:
          "I would appreciate a prompt response to this matter, as the situation has been ongoing for several weeks.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Discussing what would happen if public transit were made free.",
        sentence:
          "If public transit were made free, more commuters would choose it over driving, which would reduce emissions city-wide.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Giving advice to a friend who is unhappy at their current job.",
        sentence:
          "If I were in your position, I would update my resume now — I wouldn't wait until things get worse.",
      },
    ],
  },
  {
    modal: "shall",
    negative: "shall not / shan't",
    note: "Use 'shall' for formal offers, suggestions with I/we, and legal or official language. Less common in everyday speech but useful in formal CELPIP writing.",
    meanings: ["Formal future (I/we)", "Offer", "Suggestion"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing a formal email to a committee chair offering to lead a session.",
        sentence:
          "I shall prepare a full presentation for the board and shall ensure all materials are distributed in advance.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Offering to take responsibility during a team discussion about an upcoming project.",
        sentence:
          "Shall I take the lead on the research portion? I can have a draft ready by Thursday.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Formally proposing a solution during a community meeting discussion.",
        sentence:
          "Shall we consider allocating part of the budget to green spaces? That might address several of the concerns raised.",
      },
    ],
  },
  {
    modal: "ought to",
    negative: "ought not to",
    note: "Use 'ought to' as a more formal or moral alternative to 'should'. Slightly stronger — implies a duty or expectation based on reason or ethics.",
    meanings: ["Moral duty / advice"],
    examples: [
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Arguing that employers have a responsibility to support employee mental health.",
        sentence:
          "Companies ought to provide mental health resources for their staff — employees ought not to feel that seeking help will affect their careers.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Advising a friend who witnessed workplace misconduct about what to do.",
        sentence:
          "You really ought to report what you saw — staying silent ought not to be seen as the safer option here.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Discussing responsibilities of local government regarding aging infrastructure.",
        sentence:
          "The city council ought to address these road conditions before winter — residents ought to be able to expect safe streets year-round.",
      },
    ],
  },
];

export const PHRASAL = [
  {
    verb: "give up",
    meaning: "stop doing something / quit",
    separable: true,
    examples: [
      "She gave <em>up</em> smoking last year.",
      "Don't give up on your dreams.",
    ],
  },
  {
    verb: "look after",
    meaning: "take care of",
    separable: false,
    examples: [
      "She looks after her elderly parents.",
      "Can you look after the kids tonight?",
    ],
  },
  {
    verb: "bring up",
    meaning: "raise a child / mention a topic",
    separable: true,
    examples: [
      "She was brought up in Toronto.",
      "He brought up an interesting point.",
    ],
  },
  {
    verb: "run out of",
    meaning: "have no more of something",
    separable: false,
    examples: ["We've run out of milk.", "I ran out of time during the exam."],
  },
  {
    verb: "put off",
    meaning: "postpone / delay",
    separable: true,
    examples: [
      "Don't put off your work until tomorrow.",
      "The meeting was put off until Friday.",
    ],
  },
  {
    verb: "get over",
    meaning: "recover from (illness or emotion)",
    separable: false,
    examples: [
      "It took her a month to get over the flu.",
      "He never got over the breakup.",
    ],
  },
  {
    verb: "come across",
    meaning: "find or meet by chance",
    separable: false,
    examples: [
      "I came across an old photo album.",
      "She comes across as very confident.",
    ],
  },
  {
    verb: "turn down",
    meaning: "reject / refuse an offer",
    separable: true,
    examples: ["He turned down the job offer.", "She turned the volume down."],
  },
  {
    verb: "look into",
    meaning: "investigate / examine",
    separable: false,
    examples: ["The police are looking into the matter.", "I'll look into it."],
  },
  {
    verb: "make up",
    meaning: "invent / reconcile after argument",
    separable: true,
    examples: ["She made up an excuse.", "They argued but quickly made up."],
  },
  {
    verb: "take on",
    meaning: "accept responsibility / hire",
    separable: true,
    examples: [
      "She took on a new project.",
      "The company took on 50 new staff.",
    ],
  },
  {
    verb: "set up",
    meaning: "establish / arrange",
    separable: true,
    examples: ["They set up a new business.", "Can you set up a meeting?"],
  },
  {
    verb: "break down",
    meaning: "stop working / lose emotional control",
    separable: false,
    examples: [
      "The car broke down on the highway.",
      "She broke down in tears.",
    ],
  },
  {
    verb: "carry out",
    meaning: "perform / complete a task",
    separable: true,
    examples: [
      "The team carried out a detailed inspection.",
      "Carry out the plan.",
    ],
  },
  {
    verb: "go through",
    meaning: "experience something difficult / examine",
    separable: false,
    examples: [
      "She went through a tough divorce.",
      "Let's go through the report together.",
    ],
  },
];

export const IRREGULAR = [
  { base: "be", past: "was/were", pp: "been", pattern: "unique" },
  { base: "beat", past: "beat", pp: "beaten", pattern: "A-A-B" },
  { base: "begin", past: "began", pp: "begun", pattern: "vowel change" },
  { base: "bite", past: "bit", pp: "bitten", pattern: "A-B-B+en" },
  { base: "blow", past: "blew", pp: "blown", pattern: "ew/own" },
  { base: "break", past: "broke", pp: "broken", pattern: "A-B-B+en" },
  { base: "bring", past: "brought", pp: "brought", pattern: "A-B-B" },
  { base: "build", past: "built", pp: "built", pattern: "A-B-B" },
  { base: "buy", past: "bought", pp: "bought", pattern: "A-B-B" },
  { base: "catch", past: "caught", pp: "caught", pattern: "A-B-B" },
  { base: "choose", past: "chose", pp: "chosen", pattern: "A-B-B+en" },
  { base: "come", past: "came", pp: "come", pattern: "A-B-A" },
  { base: "cut", past: "cut", pp: "cut", pattern: "A-A-A" },
  { base: "do", past: "did", pp: "done", pattern: "unique" },
  { base: "drink", past: "drank", pp: "drunk", pattern: "vowel change" },
  { base: "drive", past: "drove", pp: "driven", pattern: "A-B-B+en" },
  { base: "eat", past: "ate", pp: "eaten", pattern: "A-B-B+en" },
  { base: "fall", past: "fell", pp: "fallen", pattern: "A-B-B+en" },
  { base: "feel", past: "felt", pp: "felt", pattern: "A-B-B" },
  { base: "fight", past: "fought", pp: "fought", pattern: "A-B-B" },
  { base: "find", past: "found", pp: "found", pattern: "A-B-B" },
  { base: "fly", past: "flew", pp: "flown", pattern: "ew/own" },
  {
    base: "forget",
    past: "forgot",
    pp: "forgotten",
    pattern: "A-B-B+en",
  },
  { base: "get", past: "got", pp: "got/gotten", pattern: "A-B-B" },
  { base: "give", past: "gave", pp: "given", pattern: "A-B-B+en" },
  { base: "go", past: "went", pp: "gone", pattern: "unique" },
  { base: "grow", past: "grew", pp: "grown", pattern: "ew/own" },
  { base: "have", past: "had", pp: "had", pattern: "A-B-B" },
  { base: "hear", past: "heard", pp: "heard", pattern: "A-B-B" },
  { base: "hide", past: "hid", pp: "hidden", pattern: "A-B-B+en" },
  { base: "hold", past: "held", pp: "held", pattern: "A-B-B" },
  { base: "keep", past: "kept", pp: "kept", pattern: "A-B-B" },
  { base: "know", past: "knew", pp: "known", pattern: "ew/own" },
  { base: "lead", past: "led", pp: "led", pattern: "A-B-B" },
  { base: "leave", past: "left", pp: "left", pattern: "A-B-B" },
  { base: "let", past: "let", pp: "let", pattern: "A-A-A" },
  { base: "lie", past: "lay", pp: "lain", pattern: "vowel change" },
  { base: "lose", past: "lost", pp: "lost", pattern: "A-B-B" },
  { base: "make", past: "made", pp: "made", pattern: "A-B-B" },
  { base: "meet", past: "met", pp: "met", pattern: "A-B-B" },
  { base: "pay", past: "paid", pp: "paid", pattern: "A-B-B" },
  { base: "put", past: "put", pp: "put", pattern: "A-A-A" },
  {
    base: "read",
    past: "read",
    pp: "read",
    pattern: "A-A-A (pronunciation changes)",
  },
  { base: "ride", past: "rode", pp: "ridden", pattern: "A-B-B+en" },
  { base: "ring", past: "rang", pp: "rung", pattern: "vowel change" },
  { base: "rise", past: "rose", pp: "risen", pattern: "vowel change" },
  { base: "run", past: "ran", pp: "run", pattern: "A-B-A" },
  { base: "say", past: "said", pp: "said", pattern: "A-B-B" },
  { base: "see", past: "saw", pp: "seen", pattern: "unique" },
  { base: "sell", past: "sold", pp: "sold", pattern: "A-B-B" },
  { base: "send", past: "sent", pp: "sent", pattern: "A-B-B" },
  { base: "set", past: "set", pp: "set", pattern: "A-A-A" },
  { base: "show", past: "showed", pp: "shown", pattern: "A-B-B+en" },
  { base: "sing", past: "sang", pp: "sung", pattern: "vowel change" },
  { base: "sit", past: "sat", pp: "sat", pattern: "A-B-B" },
  { base: "sleep", past: "slept", pp: "slept", pattern: "A-B-B" },
  { base: "speak", past: "spoke", pp: "spoken", pattern: "A-B-B+en" },
  { base: "spend", past: "spent", pp: "spent", pattern: "A-B-B" },
  { base: "stand", past: "stood", pp: "stood", pattern: "A-B-B" },
  { base: "steal", past: "stole", pp: "stolen", pattern: "A-B-B+en" },
  { base: "swim", past: "swam", pp: "swum", pattern: "vowel change" },
  { base: "take", past: "took", pp: "taken", pattern: "A-B-B+en" },
  { base: "teach", past: "taught", pp: "taught", pattern: "A-B-B" },
  { base: "tell", past: "told", pp: "told", pattern: "A-B-B" },
  { base: "think", past: "thought", pp: "thought", pattern: "A-B-B" },
  { base: "throw", past: "threw", pp: "thrown", pattern: "ew/own" },
  {
    base: "understand",
    past: "understood",
    pp: "understood",
    pattern: "A-B-B",
  },
  { base: "wake", past: "woke", pp: "woken", pattern: "A-B-B+en" },
  { base: "wear", past: "wore", pp: "worn", pattern: "A-B-B+en" },
  { base: "win", past: "won", pp: "won", pattern: "A-B-B" },
  { base: "write", past: "wrote", pp: "written", pattern: "A-B-B+en" },
];

export const FILL_SENTENCES = [
  {
    before: "She",
    after: "here for five years.",
    answer: "has lived",
    options: ["lives", "has lived", "lived", "is living"],
    explain:
      "Action that started in the past and continues → <strong>present perfect</strong>: has + past participle.",
  },
  {
    before: "When I arrived, he",
    after: "already left.",
    answer: "had already left",
    options: [
      "already left",
      "has already left",
      "had already left",
      "was leaving",
    ],
    explain:
      "Action completed before another past action → <strong>past perfect</strong>: had + past participle.",
  },
  {
    before: "I",
    after: "a strange noise while I was sleeping.",
    answer: "heard",
    options: ["hear", "heard", "have heard", "was hearing"],
    explain:
      "Completed action at a specific past time → <strong>past simple</strong>.",
  },
  {
    before: "The report",
    after: "by the team last week.",
    answer: "was written",
    options: ["wrote", "has written", "was written", "is written"],
    explain:
      "Passive voice: subject receives the action → <strong>be + past participle</strong>.",
  },
  {
    before: "By next month, she",
    after: "the project.",
    answer: "will have completed",
    options: [
      "will complete",
      "completes",
      "has completed",
      "will have completed",
    ],
    explain:
      "Action completed before a future point → <strong>future perfect</strong>: will have + past participle.",
  },
  {
    before: "You",
    after: "smoke in this building.",
    answer: "must not",
    options: ["should not", "must not", "do not have to", "cannot"],
    explain:
      '"Must not" = prohibition (forbidden). "Do not have to" would mean it is not necessary — very different.',
  },
  {
    before: "He",
    after: "when the accident happened.",
    answer: "was driving",
    options: ["drove", "has driven", "was driving", "drives"],
    explain:
      "Action in progress when interrupted → <strong>past continuous</strong>: was/were + V-ing.",
  },
  {
    before: "I enjoy",
    after: "on weekends.",
    answer: "hiking",
    options: ["to hike", "hike", "hiking", "hiked"],
    explain:
      '"Enjoy" is always followed by a <strong>gerund</strong> (V-ing), never an infinitive.',
  },
  {
    before: "If I",
    after: "more time, I would travel the world.",
    answer: "had",
    options: ["have", "had", "would have", "will have"],
    explain:
      "Second conditional (unreal present): <strong>if + past simple</strong>, would + base verb.",
  },
  {
    before: "The children",
    after: "in the garden all afternoon.",
    answer: "have been playing",
    options: ["played", "are playing", "have been playing", "were playing"],
    explain:
      "Ongoing action from past to now with emphasis on duration → <strong>present perfect continuous</strong>.",
  },
  {
    before: "She",
    after: "Spanish for two years before she moved to Mexico.",
    answer: "had been studying",
    options: [
      "studied",
      "has been studying",
      "had been studying",
      "was studying",
    ],
    explain:
      "Ongoing action completed before another past event → <strong>past perfect continuous</strong>.",
  },
  {
    before: "You",
    after: "see a doctor — that cough sounds serious.",
    answer: "should",
    options: ["must", "should", "can", "will"],
    explain:
      '"Should" = advice/recommendation. "Must" would be very strong obligation here.',
  },
];

export const QUIZ_QS = [
  {
    q: '"I have been waiting for an hour." — What tense is this?',
    opts: [
      "Present perfect",
      "Past continuous",
      "Present perfect continuous",
      "Past perfect",
    ],
    ans: 2,
    exp: "<strong>have/has been + V-ing</strong> = present perfect continuous. Shows an action in progress from past to now with duration.",
  },
  {
    q: "Which sentence is correct?",
    opts: [
      "I am knowing the answer.",
      "I know the answer.",
      "I am knowing answer.",
      "I have been knowing the answer.",
    ],
    ans: 1,
    exp: '"Know" is a <strong>stative verb</strong> — it describes a state, not an action. Stative verbs are not used in continuous tenses.',
  },
  {
    q: 'Choose the correct modal: "You ___ take off your shoes — it\'s optional."',
    opts: ["must", "should", "don't have to", "mustn't"],
    ans: 2,
    exp: '"Don\'t have to" = not necessary / optional. "Mustn\'t" = forbidden. These are opposite in meaning!',
  },
  {
    q: '"She ___ to the party if she had known about it." What fits?',
    opts: ["would come", "would have come", "will come", "came"],
    ans: 1,
    exp: "Third conditional (unreal past): <strong>would have + past participle</strong>.",
  },
  {
    q: "Which verb is intransitive?",
    opts: [
      "She bought a car.",
      "He kicked the ball.",
      "The baby arrived.",
      "I love music.",
    ],
    ans: 2,
    exp: '"Arrived" takes no direct object — the action stays with the subject. It is <strong>intransitive</strong>.',
  },
  {
    q: '"By July, she ___ here for ten years." Which form fits?',
    opts: ["will work", "will have worked", "has worked", "will be working"],
    ans: 1,
    exp: '"By July" + duration → <strong>future perfect</strong>: will have + past participle.',
  },
  {
    q: 'What follows "avoid"?',
    opts: ["to eat", "eat", "eating", "eaten"],
    ans: 2,
    exp: '"Avoid" is always followed by a <strong>gerund</strong> (V-ing): avoid eating, avoid making.',
  },
  {
    q: '"The window was broken by the wind." — What voice is this?',
    opts: ["Active", "Passive", "Causative", "Conditional"],
    ans: 1,
    exp: "<strong>Passive voice</strong>: be + past participle. The subject receives the action.",
  },
  {
    q: "Which is a linking verb?",
    opts: ["run", "eat", "seem", "build"],
    ans: 2,
    exp: '"Seem" is a <strong>linking verb</strong> — it connects the subject to a description: She seems tired.',
  },
  {
    q: '"She ___ when the phone rang." Choose the correct form.',
    opts: ["slept", "was sleeping", "has slept", "had slept"],
    ans: 1,
    exp: "Action in progress when interrupted → <strong>past continuous</strong>: was/were + V-ing.",
  },
  {
    q: 'Which sentence uses "should have" correctly?',
    opts: [
      "You should have called earlier.",
      "You should called earlier.",
      "You should have call earlier.",
      "You should calling earlier.",
    ],
    ans: 0,
    exp: '"Should have" expresses past regret: <strong>should + have + past participle</strong>.',
  },
  {
    q: '"Get" in "I got my hair cut" is a ___ verb.',
    opts: ["linking", "auxiliary", "causative", "modal"],
    ans: 2,
    exp: '"Get" here is a <strong>causative verb</strong> — someone else performs the action on your behalf.',
  },
];
