export const CONJ_GROUPS = [
  {
    category: "Coordinating Conjunctions",
    emoji: "🔗",
    color: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
    intro:
      "Join two independent clauses, words, or phrases of equal grammatical rank. Remember: FANBOYS.",
    comments: [
      "When and/but/or/so joins two complete sentences, use a comma before it. When they join only words, phrases, or parts inside one clause, skip the comma.",
      "Use a comma before 'yet' when it means 'but' joining two independent clauses, but don't use a comma when 'yet' means 'still' inside a sentence, and use a comma after it only when it starts a sentence for emphasis.",
    ],
    items: [
      {
        word: "For",
        meaning: "Gives a reason (formal, like 'because').",
        examples: [
          "She declined the job offer, for the commute was too long.",
          "He chose to take night classes, for it was the only schedule that worked.",
        ],
        tip: "Rarely used in modern spoken English — prefer 'because'.",
      },
      {
        word: "And",
        meaning: "Adds one idea to another.",
        examples: [
          "She updated her résumé and applied to several positions.",
          "The neighbourhood has good schools, affordable housing, and easy transit access.",
        ],
        tip: "Don't use a comma with 'and' when joining only two items.",
      },
      {
        word: "Nor",
        meaning: "Presents an additional negative alternative.",
        examples: [
          "He did not respond to the survey, nor did he attend the community meeting.",
          "The landlord neither fixed the heating nor reduced the rent.",
        ],
        tip: "Invert the subject and verb after 'nor': nor did she, nor was he.",
      },
      {
        word: "But",
        meaning: "Shows contrast or exception.",
        examples: [
          "I wanted to attend the information session, but I had a shift that evening.",
          "The transit system is extensive but often unreliable during peak hours.",
        ],
        tip: "Use a comma before 'but' when joining two full clauses.",
      },
      {
        word: "Or",
        meaning: "Presents an alternative or choice.",
        examples: [
          "You can submit the form online or visit the service centre in person.",
          "Should we schedule the meeting on Monday or Wednesday?",
        ],
        tip: "Can imply a warning: Renew your licence on time, or you will face a fine.",
      },
      {
        word: "Yet",
        meaning: "Shows contrast, similar to 'but' (more formal).",
        examples: [
          "The city has invested in new bike lanes, yet many residents still feel unsafe cycling.",
          "The apartment was small, yet it was well-located and affordable.",
        ],
        tip: "More formal and emphatic than 'but'.",
      },
      {
        word: "So",
        meaning: "Shows result or consequence.",
        examples: [
          "The last bus had already left, so she called a rideshare.",
          "He completed all the required documents, so his application was processed quickly.",
        ],
        tip: "Always use a comma before 'so' when joining two clauses.",
      },
    ],
  },
  {
    category: "Subordinating Conjunctions",
    emoji: "🔀",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    comments: [
      "If a subordinate clause comes first → use a comma : Before you sleep, do your homework.",
      "If it comes second → usually no comma: Do your homework before you sleep.",
    ],
    intro:
      "Introduce a dependent (subordinate) clause and connect it to an independent clause. They show relationships like time, cause, condition, and contrast.",
    items: [
      {
        word: "because",
        meaning: "Gives the reason for something.",
        examples: [
          "She chose to live downtown because it reduced her daily commute significantly.",
          "He requested a transfer because the noise level in the open office was affecting his productivity.",
        ],
        tip: "Do not start a sentence with 'because' in formal writing unless the independent clause follows.",
      },
      {
        word: "although / though / even though",
        meaning: "Shows unexpected contrast.",
        examples: [
          "Although the cost of living has risen, many families are choosing to stay in the city.",
          "She submitted the application on time, even though she had very little notice.",
        ],
        tip: "'Even though' is stronger and more emphatic than 'although'.",
      },
      {
        word: "while",
        meaning: "Simultaneous actions OR contrast.",
        examples: [
          "She reviewed the lease agreement while her husband unpacked the boxes.",
          "While I understand the policy, I believe it places an unfair burden on new employees.",
        ],
        tip: "Context determines meaning — time or contrast.",
      },
      {
        word: "if",
        meaning: "States a condition.",
        examples: [
          "If the city expands the transit network, more residents will leave their cars at home.",
          "Please contact the front desk if you require any assistance during your stay.",
        ],
        tip: "Use simple present (not future) in the 'if' clause: If she arrives, not if she will arrive.",
      },
      {
        word: "unless",
        meaning: "Except if; only if not.",
        examples: [
          "Unless the landlord addresses the mould issue, the tenant plans to contact the housing authority.",
          "Do not sign the contract unless you have read all the terms carefully.",
        ],
        tip: "Never use 'unless' with a negative verb: unless you don't → incorrect.",
      },
      {
        word: "when",
        meaning: "At the time that something happens.",
        examples: [
          "Please send me the meeting agenda when it is ready.",
          "When she moved to Vancouver, she was surprised by how expensive rental housing was.",
        ],
        tip: "Like 'if', use present tense in the 'when' clause for future events.",
      },
      {
        word: "before / after",
        meaning: "Shows time sequence.",
        examples: [
          "Review the employee handbook before your first day at the office.",
          "She felt much more settled after she found a reliable childcare provider.",
        ],
        tip: "The subordinate clause can come first or second — use a comma if it comes first.",
      },
      {
        word: "since",
        meaning: "From the time that; or because (formal).",
        examples: [
          "Since you have raised this concern, I am happy to clarify the process.",
          "Traffic in this area has worsened since the new shopping centre opened.",
        ],
        tip: "Can be ambiguous — 'since we moved' (time) vs 'since you insist' (reason). Context matters.",
      },
      {
        word: "until / till",
        meaning: "Up to the point in time when.",
        examples: [
          "Please wait until the supervisor returns before processing the request.",
          "She worked till late to finish the community newsletter.",
        ],
        tip: "'Till' is informal but correct. 'Til' is non-standard — avoid it.",
      },
      {
        word: "as soon as",
        meaning: "Immediately when something happens.",
        examples: [
          "Please call the building manager as soon as you notice any water damage.",
          "She updated her emergency contact information as soon as she received the HR email.",
        ],
        tip: "Emphasizes immediacy. Use present tense in the dependent clause.",
      },
      {
        word: "so that / in order that",
        meaning: "States the purpose or goal.",
        examples: [
          "The city redesigned the intersection so that pedestrians could cross more safely.",
          "He arrived early in order that he could introduce himself before the panel interview began.",
        ],
        tip: "'So that' is far more common in everyday English.",
      },
      {
        word: "as long as / provided that",
        meaning: "States a condition that must be met.",
        examples: [
          "You may work from home as long as you are available during core business hours.",
          "Provided that all documents are submitted on time, the application will be reviewed within two weeks.",
        ],
        tip: "More formal alternatives to 'if'.",
      },
      {
        word: "whereas / while",
        meaning: "Contrast between two facts.",
        examples: [
          "Renting offers flexibility, whereas owning a home builds long-term equity.",
          "Urban centres have abundant transit options, while rural communities often rely entirely on personal vehicles.",
        ],
        tip: "'Whereas' is more formal. Both highlight a direct contrast. When whereas / while = contrast between two ideas → comma before it When while = time → no comma",
      },
    ],
  },
  {
    category: "Correlative Conjunctions",
    emoji: "⚖️",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
    intro:
      "Work in pairs to connect two equal grammatical elements. The key rule: both parts must be followed by the same grammatical structure (parallel structure).",
    items: [
      {
        word: "both … and",
        meaning: "Adds two items together (inclusive).",
        examples: [
          "The new policy benefits both full-time employees and part-time contractors.",
          "Both the written test and the speaking component must be completed on the same day.",
        ],
        tip: "Verb agrees with plural: Both the cat and the dog are hungry.",
      },
      {
        word: "either … or",
        meaning: "Presents two alternatives (one or the other).",
        examples: [
          "You can either submit your documents by email or drop them off at the front desk.",
          "Either the manager or the team lead will contact you within 24 hours.",
        ],
        tip: "Verb agrees with the nearest subject: Either the students or the teacher is responsible.",
      },
      {
        word: "neither … nor",
        meaning: "Negates both options.",
        examples: [
          "Neither the noise complaint nor the parking issue was resolved after the building meeting.",
          "She found the new scheduling system neither user-friendly nor clearly explained.",
        ],
        tip: "Never use 'not' with 'neither…nor' — it's already negative.",
      },
      {
        word: "not only … but also",
        meaning: "Emphasizes that two things are true.",
        examples: [
          "The community centre not only offers fitness classes but also provides free language workshops.",
          "Not only did she complete the report ahead of schedule, but she also included a detailed recommendation.",
        ],
        tip: "When 'not only' starts a sentence, invert the subject and verb: Not only did she win, but she also broke the record.",
      },
      {
        word: "whether … or",
        meaning: "Presents two possibilities, often in indirect questions.",
        examples: [
          "I am unsure whether to request a deferral or reschedule the appointment entirely.",
          "Whether you choose to appeal the decision or accept it, please inform us by Friday.",
        ],
        tip: "Do not confuse with 'if' — 'whether…or' always implies two options.",
      },
      {
        word: "as … as",
        meaning: "Compares two equal things.",
        examples: [
          "The written response should be as detailed as the speaking task allows.",
          "Her second attempt at the test was as strong as her first, if not stronger.",
        ],
        tip: "Use subject pronoun after the second 'as' in formal writing: as tall as I (not me).",
      },
      {
        word: "no sooner … than",
        meaning: "Shows that one action happened immediately after another.",
        examples: [
          "No sooner had she submitted the online form than she received a confirmation email.",
          "No sooner did the doors open than the crowd began filing into the community hall.",
        ],
        tip: "Always invert subject and verb after 'no sooner': No sooner had I, not No sooner I had.",
      },
      {
        word: "the more … the more",
        meaning: "Shows proportional relationship between two things.",
        examples: [
          "The more you engage with English outside the classroom, the more natural it will feel.",
          "The clearer your written response, the more effectively your message will come across.",
        ],
        tip: "Both clauses use comparative adjectives or adverbs.",
      },
    ],
  },
  {
    category: "Conjunctive Adverbs",
    emoji: "🔄",
    color: "#5b21b6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    comments: [
      "Therefore and Consequently are interchangeable, but 'therefore' is more common in everyday and academic English, while 'consequently' is slightly more formal and emphasizes the resulting effect.",
    ],
    intro:
      "Act like conjunctions but are actually adverbs. They connect two independent clauses and must be preceded by a semicolon (or period) and followed by a comma.",
    items: [
      {
        word: "however",
        meaning: "Shows contrast or contradiction.",
        examples: [
          "The apartment was within budget; however, it was located far from public transit.",
          "I appreciate your concern; however, the decision has already been finalized.",
        ],
        tip: "Do not use a comma alone before 'however' — use a semicolon: ✗ She tried, however she failed.",
      },
      {
        word: "therefore",
        meaning: "Shows a logical result or conclusion.",
        examples: [
          "The registration deadline has passed; therefore, late submissions will not be accepted.",
          "Remote work reduces commute times; therefore, many employees report higher job satisfaction.",
        ],
        tip: "Very common in formal and academic writing.",
      },
      {
        word: "furthermore / moreover",
        meaning: "Adds an additional, stronger point.",
        examples: [
          "The program offers practical training; furthermore, graduates receive job placement support.",
          "The neighbourhood has excellent schools; moreover, property values have remained stable.",
        ],
        tip: "'Moreover' is slightly more formal than 'furthermore'.",
      },
      {
        word: "nevertheless / nonetheless",
        meaning: "Shows that something is true despite what was just said.",
        examples: [
          "The test format was unfamiliar; nevertheless, she managed her time well and finished all sections.",
          "The feedback was discouraging; nonetheless, he revised the email and resubmitted it.",
        ],
        tip: "Stronger concession than 'however' — implies overcoming an obstacle.",
      },
      {
        word: "consequently",
        meaning: "Shows a direct result or effect.",
        examples: [
          "The city failed to maintain the cycling infrastructure; consequently, many commuters returned to driving.",
          "She did not check the schedule in advance; consequently, she missed the registration window.",
        ],
        tip: "More formal than 'so'. Common in academic and formal writing.",
      },
      {
        word: "meanwhile",
        meaning: "Shows two things happening at the same time.",
        examples: [
          "The manager reviewed the client file; meanwhile, the assistant prepared the meeting room.",
          "She drafted her written response for the test; meanwhile, her study partner practised speaking aloud.",
        ],
        tip: "Signals simultaneous actions — similar to 'at the same time'.",
      },
      {
        word: "otherwise",
        meaning: "Shows what would happen if the condition is not met.",
        examples: [
          "Please confirm your appointment by Thursday; otherwise, your time slot will be given to another applicant.",
          "Back up your work regularly; otherwise, you risk losing your progress if the system crashes.",
        ],
        tip: "Similar to 'or else' — implies a warning or consequence.",
      },
      {
        word: "indeed",
        meaning: "Confirms or emphasizes a point strongly.",
        examples: [
          "The CELPIP test reflects real-life Canadian situations; indeed, most tasks are set in everyday workplace or community contexts.",
          "Clear organization is important in written tasks; indeed, a well-structured response often scores higher than a longer but disorganized one.",
        ],
        tip: "Can also appear mid-sentence for emphasis without a semicolon.",
      },
    ],
  },
  {
    category: "Common Traps",
    emoji: "⚠️",
    color: "#be185d",
    bg: "#fce7f3",
    border: "#fbcfe8",
    items: [
      {
        word: "because vs. because of",
        meaning:
          "BECAUSE = conjunction (followed by a clause). BECAUSE OF = preposition (followed by a noun).",
        examples: [
          "✓ She declined the offer because the salary was too low.",
          "✓ She declined the offer because of the low salary.",
          "✗ She declined the offer because of the salary was too low.",
        ],
        tip: "",
      },
      {
        word: "although vs. despite / in spite of",
        meaning:
          "ALTHOUGH = conjunction (clause follows). DESPITE / IN SPITE OF = preposition (noun or gerund follows).",
        examples: [
          "✓ Although the commute was long, she accepted the position.",
          "✓ Despite the long commute, she accepted the position.",
          "✗ Despite the commute was long, she accepted the position.",
        ],
        tip: "",
      },
      {
        word: "so vs. so that",
        meaning:
          "SO = result (coordinating conjunction). SO THAT = purpose (subordinating).",
        examples: [
          "✓ The office was fully booked, so she worked from home. (result)",
          "✓ She arrived early so that she could review her notes before the interview. (purpose)",
          "✗ The office was fully booked, so that she worked from home.",
        ],
        tip: "",
      },
      {
        word: "while vs. whereas",
        meaning:
          "Both show contrast. WHILE can also show time (simultaneous actions). WHEREAS is contrast only.",
        examples: [
          "✓ While she completed the writing task, her timer was running. (time)",
          "✓ Urban areas have many transit options, whereas rural communities have very few. (contrast)",
          "✓ While I see the benefits of remote work, I think in-person collaboration is still valuable. (contrast)",
        ],
        tip: "",
      },
      {
        word: "comma splice with however",
        meaning:
          "HOWEVER is not a coordinating conjunction — you cannot join two clauses with just a comma.",
        examples: [
          "✗ The policy seems fair, however it may be difficult to enforce.",
          "✓ The policy seems fair; however, it may be difficult to enforce.",
          "✓ The policy seems fair. However, it may be difficult to enforce.",
        ],
        tip: "",
      },
      {
        word: "unless vs. if not",
        meaning:
          "UNLESS = only if not. Never use 'unless' with a negative verb.",
        examples: [
          "✓ Unless you submit all required documents, your application will not be processed.",
          "✗ Unless you don't submit all required documents, your application will not be processed.",
          "✓ If you don't submit all required documents, your application will not be processed.",
        ],
        tip: "",
      },
      {
        word: "neither…nor with verb agreement",
        meaning: "Verb agrees with the subject closest to the verb.",
        examples: [
          "✓ Neither the supervisor nor the employees were informed about the policy change.",
          "✓ Neither the employees nor the supervisor was informed about the policy change.",
          "✗ Neither the supervisor nor the employees was informed about the policy change.",
        ],
        tip: "",
      },
      {
        word: "not only…but also — word order",
        meaning:
          "When 'not only' starts a sentence, the subject and auxiliary verb must be inverted.",
        examples: [
          "✓ Not only did the new transit line reduce travel times, but it also improved air quality in the city.",
          "✗ Not only the new transit line reduced travel times, but it also improved air quality.",
        ],
        tip: "",
      },
    ],
  },
];
