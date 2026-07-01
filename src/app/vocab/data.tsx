const shuffleArray = (array: any) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

// ─── Emotions Vocabulary ───────────────────────────────────────────
export const EMOTIONS = shuffleArray([
  {
    emotion: "Happy",
    emoji: "😊",
    words: [
      {
        word: "Content",
        intensity: "Mild",
        meaning: "Quietly satisfied and at ease.",
        examples: [
          "I felt content sitting by the window with a warm cup of tea.",
          "She's content with a simple life and doesn't need much to be happy.",
        ],
      },
      {
        word: "Cheerful",
        intensity: "Mild",
        meaning: "Visibly happy and in good spirits.",
        examples: [
          "He gave a cheerful wave as he walked into the office.",
          "Despite the rain, she stayed cheerful all morning.",
        ],
      },
      {
        word: "Delighted",
        intensity: "Moderate",
        meaning: "Very pleased about something.",
        examples: [
          "I was delighted to hear that you got the job.",
          "They were delighted with the surprise party we arranged.",
        ],
      },
      {
        word: "Thrilled",
        intensity: "Strong",
        meaning: "Filled with excitement and joy.",
        examples: [
          "She was thrilled when she opened the acceptance letter.",
          "We're absolutely thrilled to be moving into our new home.",
        ],
      },
      {
        word: "Ecstatic",
        intensity: "Strong",
        meaning: "Overwhelmingly happy; full of joy.",
        examples: [
          "The fans were ecstatic when the team scored in the final minute.",
          "I was ecstatic the moment I crossed the finish line.",
        ],
      },
    ],
  },
  {
    emotion: "Sad",
    emoji: "😔",
    words: [
      {
        word: "Down",
        intensity: "Mild",
        meaning: "Slightly low or unhappy.",
        examples: [
          "I've been feeling a bit down since the holidays ended.",
          "He seemed down after hearing the news.",
        ],
      },
      {
        word: "Disheartened",
        intensity: "Moderate",
        meaning: "Having lost confidence or hope.",
        examples: [
          "She felt disheartened after failing the test twice.",
          "The team was disheartened by the slow progress.",
        ],
      },
      {
        word: "Miserable",
        intensity: "Strong",
        meaning: "Deeply unhappy and uncomfortable.",
        examples: [
          "I was miserable being stuck indoors with the flu.",
          "He looked miserable standing alone in the cold rain.",
        ],
      },
      {
        word: "Heartbroken",
        intensity: "Strong",
        meaning: "Crushed by grief or deep disappointment.",
        examples: [
          "She was heartbroken when her childhood pet passed away.",
          "They were heartbroken to leave the city they loved.",
        ],
      },
      {
        word: "Devastated",
        intensity: "Strong",
        meaning: "Completely overwhelmed by sorrow.",
        examples: [
          "He was devastated when he heard about the accident.",
          "We were devastated to lose the championship by one point.",
        ],
      },
    ],
  },
  {
    emotion: "Angry",
    emoji: "😠",
    words: [
      {
        word: "Annoyed",
        intensity: "Mild",
        meaning: "Mildly bothered or irritated.",
        examples: [
          "I was annoyed that the bus was late again.",
          "She got annoyed by the constant interruptions.",
        ],
      },
      {
        word: "Frustrated",
        intensity: "Moderate",
        meaning: "Upset at being unable to achieve something.",
        examples: [
          "He felt frustrated when the project kept getting delayed.",
          "I'm frustrated that I can't fix this on my own.",
        ],
      },
      {
        word: "Furious",
        intensity: "Strong",
        meaning: "Extremely angry.",
        examples: [
          "She was furious when she found out the truth.",
          "He was furious about being blamed for someone else’s mistake.",
        ],
      },
      {
        word: "Enraged",
        intensity: "Strong",
        meaning: "Filled with violent, intense anger.",
        examples: [
          "The crowd was enraged by the unfair decision.",
          "He was enraged when he saw the damage to his car.",
        ],
      },
      {
        word: "Livid",
        intensity: "Strong",
        meaning: "So angry one can barely speak.",
        examples: [
          "My manager was livid about the missed deadline.",
          "She was livid when she discovered the lie.",
        ],
      },
    ],
  },
  {
    emotion: "Afraid",
    emoji: "😨",
    words: [
      {
        word: "Uneasy",
        intensity: "Mild",
        meaning: "Slightly worried or uncomfortable.",
        examples: [
          "I felt uneasy walking home in the dark.",
          "Something about the silence made her uneasy.",
        ],
      },
      {
        word: "Anxious",
        intensity: "Moderate",
        meaning: "Nervous and worried about what might happen.",
        examples: [
          "He was anxious before his first job interview.",
          "I'm anxious about the results of the medical test.",
        ],
      },
      {
        word: "Frightened",
        intensity: "Moderate",
        meaning: "Scared by something sudden or threatening.",
        examples: [
          "The loud thunder frightened the children.",
          "She was frightened when the lights suddenly went out.",
        ],
      },
      {
        word: "Terrified",
        intensity: "Strong",
        meaning: "Extremely afraid.",
        examples: [
          "I was terrified during the turbulent flight.",
          "He was terrified of speaking in front of large crowds.",
        ],
      },
      {
        word: "Petrified",
        intensity: "Strong",
        meaning: "So scared one is frozen with fear.",
        examples: [
          "She was petrified when she saw the snake on the trail.",
          "He stood petrified as the storm grew closer.",
        ],
      },
    ],
  },
  {
    emotion: "Surprised",
    emoji: "😲",
    words: [
      {
        word: "Startled",
        intensity: "Mild",
        meaning: "Briefly shocked by something sudden.",
        examples: [
          "I was startled by the knock at the door.",
          "The cat was startled by the loud noise.",
        ],
      },
      {
        word: "Amazed",
        intensity: "Moderate",
        meaning: "Filled with wonder or admiration.",
        examples: [
          "We were amazed by the view from the mountain top.",
          "She was amazed at how quickly he learned the language.",
        ],
      },
      {
        word: "Astonished",
        intensity: "Strong",
        meaning: "Greatly surprised; hard to believe.",
        examples: [
          "I was astonished to see how much the city had changed.",
          "They were astonished by the size of the crowd.",
        ],
      },
      {
        word: "Flabbergasted",
        intensity: "Strong",
        meaning: "Utterly shocked and lost for words.",
        examples: [
          "He was flabbergasted when he won the lottery.",
          "I was flabbergasted by the unexpected apology.",
        ],
      },
    ],
  },
  {
    emotion: "Excited",
    emoji: "🤩",
    words: [
      {
        word: "Eager",
        intensity: "Mild",
        meaning: "Keen and looking forward to something.",
        examples: [
          "The students were eager to start the new project.",
          "I'm eager to see how the story ends.",
        ],
      },
      {
        word: "Enthusiastic",
        intensity: "Moderate",
        meaning: "Full of energy and interest.",
        examples: [
          "She was enthusiastic about joining the volunteer program.",
          "He gave an enthusiastic response to the new idea.",
        ],
      },
      {
        word: "Thrilled",
        intensity: "Strong",
        meaning: "Extremely excited and pleased.",
        examples: [
          "We were thrilled to be invited to the wedding.",
          "I was thrilled to finally meet my favourite author.",
        ],
      },
      {
        word: "Exhilarated",
        intensity: "Strong",
        meaning: "Energized and thrilled with excitement.",
        examples: [
          "I felt exhilarated after finishing the marathon.",
          "The roller coaster left us feeling exhilarated.",
        ],
      },
    ],
  },
  {
    emotion: "Calm",
    emoji: "😌",
    words: [
      {
        word: "Relaxed",
        intensity: "Mild",
        meaning: "Free from tension and stress.",
        examples: [
          "I felt relaxed after a long walk on the beach.",
          "She looked relaxed once the exams were over.",
        ],
      },
      {
        word: "At ease",
        intensity: "Mild",
        meaning: "Comfortable and untroubled.",
        examples: [
          "He immediately put me at ease with his friendly smile.",
          "I felt at ease in the quiet, familiar room.",
        ],
      },
      {
        word: "Serene",
        intensity: "Moderate",
        meaning: "Peaceful and untroubled.",
        examples: [
          "The lake was serene in the early morning light.",
          "She had a serene expression even under pressure.",
        ],
      },
      {
        word: "Tranquil",
        intensity: "Strong",
        meaning: "Deeply calm and peaceful.",
        examples: [
          "We spent a tranquil weekend in the countryside.",
          "The garden offered a tranquil escape from the busy city.",
        ],
      },
    ],
  },
  {
    emotion: "Confused",
    emoji: "😕",
    words: [
      {
        word: "Puzzled",
        intensity: "Mild",
        meaning: "Unable to understand something.",
        examples: [
          "I was puzzled by the strange instructions.",
          "She gave me a puzzled look when I asked the question.",
        ],
      },
      {
        word: "Perplexed",
        intensity: "Moderate",
        meaning: "Confused and unable to find an answer.",
        examples: [
          "He was perplexed by the sudden change in plans.",
          "The results left the scientists perplexed.",
        ],
      },
      {
        word: "Baffled",
        intensity: "Strong",
        meaning: "Completely unable to understand.",
        examples: [
          "The detectives were baffled by the missing evidence.",
          "I'm baffled by how the machine stopped working.",
        ],
      },
      {
        word: "Bewildered",
        intensity: "Strong",
        meaning: "Deeply confused and disoriented.",
        examples: [
          "The tourists looked bewildered in the busy station.",
          "She was bewildered by the conflicting advice she received.",
        ],
      },
    ],
  },
]);

export const INTENSITY_STYLES = {
  Mild: "bg-emerald2-light text-emerald2-dark",
  Moderate: "bg-amber2-light text-amber2-dark",
  Strong: "bg-rose2-light text-rose2-dark",
};

// ─── Collocations ──────────────────────────────────────────────────

export const COLLOCATIONS = [
  {
    category: "Making Decisions",
    emoji: "🤔",
    items: [
      {
        collocation: "make a decision",
        question: "We need to ___________ before the deadline.",
        answer: "make a decision",
        example: "We need to make a decision before the deadline.",
      },
      {
        collocation: "reach a conclusion",
        question: "After reviewing the data, the team finally ___________.",
        answer: "reached a conclusion",
        example: "After reviewing the data, we reached a conclusion.",
      },
      {
        collocation: "weigh the options",
        question:
          "She took her time before committing — she wanted to ___________.",
        answer: "weigh the options",
        example: "She took her time to weigh the options carefully.",
      },
      {
        collocation: "come to an agreement",
        question:
          "After hours of negotiation, the two sides finally ___________.",
        answer: "came to an agreement",
        example: "The two sides finally came to an agreement.",
      },
      {
        collocation: "take a stand",
        question: "It was time for him to ___________ on the issue.",
        answer: "take a stand",
        example: "It was time for him to take a stand on the issue.",
      },
      {
        collocation: "change your mind",
        question: "He ___________ after hearing her argument.",
        answer: "changed his mind",
        example: "He changed his mind after hearing her argument.",
      },
      {
        collocation: "keep an open mind",
        question: "Try to ___________ during the discussion.",
        answer: "keep an open mind",
        example: "Try to keep an open mind during the discussion.",
      },
    ],
  },
  {
    category: "Work & Effort",
    emoji: "💼",
    items: [
      {
        collocation: "make progress",
        question: "We are steadily ___________ on the project.",
        answer: "making progress",
        example: "We are making steady progress on the project.",
      },
      {
        collocation: "meet a deadline",
        question: "The team worked overtime to ___________.",
        answer: "meet the deadline",
        example: "The team worked overtime to meet the deadline.",
      },
      {
        collocation: "take responsibility",
        question: "He was willing to ___________ for the error.",
        answer: "take responsibility",
        example: "He was willing to take responsibility for the error.",
      },
      {
        collocation: "put in the effort",
        question: "You need to ___________ if you want to see results.",
        answer: "put in the effort",
        example: "You need to put in the effort to see results.",
      },
      {
        collocation: "do your best",
        question: "All I ask is that you ___________.",
        answer: "do your best",
        example: "All I ask is that you do your best.",
      },
      {
        collocation: "carry out a task",
        question: "She ___________ with great precision.",
        answer: "carried out every task",
        example: "She carried out every task with great precision.",
      },
      {
        collocation: "make an effort",
        question: "He ___________ to improve his communication skills.",
        answer: "made a real effort",
        example: "He made a real effort to improve his communication skills.",
      },
      {
        collocation: "achieve a goal",
        question:
          "With discipline, anyone can ___________ they set for themselves.",
        answer: "achieve any goal",
        example: "With discipline, anyone can achieve their goals.",
      },
    ],
  },
  {
    category: "Talking & Communicating",
    emoji: "🗣️",
    items: [
      {
        collocation: "make a point",
        question: "She paused mid-sentence to ___________.",
        answer: "make a point",
        example: "She paused to make an important point.",
      },
      {
        collocation: "raise a concern",
        question: "Several employees ___________ about the new policy.",
        answer: "raised concerns",
        example: "Several employees raised concerns about the new policy.",
      },
      {
        collocation: "give an example",
        question: "Could you ___________ of what you mean?",
        answer: "give an example",
        example: "Could you give an example of what you mean?",
      },
      {
        collocation: "express an opinion",
        question: "Everyone was encouraged to ___________ freely.",
        answer: "express their opinion",
        example: "Everyone was encouraged to express their opinion freely.",
      },
      {
        collocation: "draw a conclusion",
        question: "It is too early to ___________ from the results.",
        answer: "draw a conclusion",
        example: "It is too early to draw a conclusion from the results.",
      },
      {
        collocation: "get your point across",
        question: "He struggled to ___________ in the meeting.",
        answer: "get his point across",
        example: "He struggled to get his point across in the meeting.",
      },
      {
        collocation: "come to the point",
        question: "Please ___________ — we don't have much time.",
        answer: "come to the point",
        example: "Please come to the point — we don't have much time.",
      },
      {
        collocation: "break the news",
        question: "It was hard to ___________ to the family.",
        answer: "break the news",
        example: "It was hard to break the news to the family.",
      },
    ],
  },
  {
    category: "Problems & Solutions",
    emoji: "🔧",
    items: [
      {
        collocation: "solve a problem",
        question: "They worked together to ___________ quickly.",
        answer: "solve the problem",
        example: "They worked together to solve the problem quickly.",
      },
      {
        collocation: "face a challenge",
        question: "She ___________ during her first year abroad.",
        answer: "faced many challenges",
        example: "She faced many challenges during her first year abroad.",
      },
      {
        collocation: "deal with a situation",
        question: "He remained calm and ___________ professionally.",
        answer: "dealt with the situation",
        example:
          "He remained calm and dealt with the situation professionally.",
      },
      {
        collocation: "overcome an obstacle",
        question: "The team had to ___________ before finishing the project.",
        answer: "overcome several obstacles",
        example: "The team had to overcome several unexpected obstacles.",
      },
      {
        collocation: "find a solution",
        question: "We need to ___________ that works for everyone.",
        answer: "find a solution",
        example: "We need to find a solution that works for everyone.",
      },
      {
        collocation: "take action",
        question: "The government decided to ___________ immediately.",
        answer: "take action",
        example: "The government decided to take action immediately.",
      },
      {
        collocation: "address an issue",
        question: "The report ___________ in the community.",
        answer: "addresses several key issues",
        example: "The report addresses several key issues in the community.",
      },
    ],
  },
  {
    category: "Time & Planning",
    emoji: "📅",
    items: [
      {
        collocation: "run out of time",
        question: "We ___________ before finishing the presentation.",
        answer: "ran out of time",
        example: "We ran out of time before finishing the presentation.",
      },
      {
        collocation: "save time",
        question: "Taking the highway will ___________ on our commute.",
        answer: "save us time",
        example: "Taking the highway will save us a lot of time.",
      },
      {
        collocation: "make plans",
        question: "Let's ___________ to meet up next weekend.",
        answer: "make plans",
        example: "Let's make plans to meet up next weekend.",
      },
      {
        collocation: "set a goal",
        question:
          "She ___________ to read twelve books by the end of the year.",
        answer: "set a goal",
        example: "She set a goal to read twelve books by the end of the year.",
      },
      {
        collocation: "manage your time",
        question: "Learning to ___________ is essential in university.",
        answer: "manage your time",
        example: "Learning to manage your time is essential in university.",
      },
      {
        collocation: "keep track of",
        question: "It's important to ___________ your spending.",
        answer: "keep track of",
        example: "It's important to keep track of your spending.",
      },
      {
        collocation: "ahead of schedule",
        question: "The construction was completed ___________.",
        answer: "ahead of schedule",
        example: "The construction was completed ahead of schedule.",
      },
    ],
  },
  {
    category: "Feelings & Reactions",
    emoji: "💬",
    items: [
      {
        collocation: "have mixed feelings",
        question: "I ___________ about moving to a new city.",
        answer: "have mixed feelings",
        example: "I have mixed feelings about moving to a new city.",
      },
      {
        collocation: "lose your temper",
        question: "He rarely ___________, even under pressure.",
        answer: "loses his temper",
        example: "He rarely loses his temper, even under pressure.",
      },
      {
        collocation: "come as a surprise",
        question: "The announcement ___________ to everyone.",
        answer: "came as a complete surprise",
        example: "The announcement came as a complete surprise.",
      },
      {
        collocation: "feel at home",
        question: "She immediately ___________ in the new neighbourhood.",
        answer: "felt at home",
        example: "She immediately felt at home in the new neighbourhood.",
      },
      {
        collocation: "take it personally",
        question: "Please don't ___________ — it's just constructive feedback.",
        answer: "take it personally",
        example: "Please don't take the feedback personally.",
      },
      {
        collocation: "lose hope",
        question: "Even after three setbacks, she refused to ___________.",
        answer: "lose hope",
        example: "Even after three setbacks, she refused to lose hope.",
      },
      {
        collocation: "burst into tears",
        question: "He ___________ when he heard the unexpected news.",
        answer: "burst into tears",
        example: "He burst into tears when he heard the good news.",
      },
    ],
  },
  {
    category: "Describing Change",
    emoji: "📈",
    items: [
      {
        collocation: "make improvements",
        question: "The city ___________ to public transit.",
        answer: "made significant improvements",
        example: "The city made significant improvements to public transit.",
      },
      {
        collocation: "bring about change",
        question: "Education can ___________ in society.",
        answer: "bring about change",
        example: "Education can bring about meaningful change in society.",
      },
      {
        collocation: "play a role",
        question: "Diet ___________ in long-term health.",
        answer: "plays a major role",
        example: "Diet plays a major role in long-term health.",
      },
      {
        collocation: "have an impact",
        question: "Social media ___________ on how we communicate.",
        answer: "has had a huge impact",
        example: "Social media has had a huge impact on how we communicate.",
      },
      {
        collocation: "lead to",
        question: "Poor planning often ___________ unnecessary delays.",
        answer: "leads to",
        example: "Poor planning often leads to unnecessary delays.",
      },
      {
        collocation: "result in",
        question: "The new strategy ___________ a 20% increase in sales.",
        answer: "resulted in",
        example: "The new strategy resulted in a 20% increase in sales.",
      },
      {
        collocation: "give rise to",
        question: "The shortage ___________ widespread public concern.",
        answer: "gave rise to",
        example: "The shortage gave rise to widespread public concern.",
      },
    ],
  },
  {
    category: "Social & Relationships",
    emoji: "🤝",
    items: [
      {
        collocation: "make friends",
        question: "It took her a few months to ___________ at the new school.",
        answer: "make friends",
        example: "It took her a few months to make friends at the new school.",
      },
      {
        collocation: "keep in touch",
        question: "We promised to ___________ after the conference.",
        answer: "keep in touch",
        example: "We promised to keep in touch after the conference.",
      },
      {
        collocation: "get along with",
        question: "She ___________ all of her coworkers.",
        answer: "gets along with",
        example: "She gets along with all of her coworkers.",
      },
      {
        collocation: "lend a hand",
        question: "He was always willing to ___________ when needed.",
        answer: "lend a hand",
        example: "He was always willing to lend a hand when needed.",
      },
      {
        collocation: "lose touch with",
        question: "After moving abroad, she ___________ many old friends.",
        answer: "lost touch with",
        example: "After moving abroad, she lost touch with many old friends.",
      },
      {
        collocation: "build trust",
        question: "It takes time to ___________ in any relationship.",
        answer: "build trust",
        example: "It takes time to build trust in any relationship.",
      },
    ],
  },
];
export const IDIOM_GROUPS = [
  {
    category: "Work & Career",
    emoji: "💼",
    color: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
    items: [
      {
        idiom: "get the ball rolling",
        meaning: "To start a project or activity.",
        example: "Let's get the ball rolling on the new campaign.",
      },
      {
        idiom: "think outside the box",
        meaning: "To think creatively, beyond conventional ideas.",
        example: "We need to think outside the box to solve this problem.",
      },
      {
        idiom: "on the same page",
        meaning: "To have the same understanding or agreement.",
        example:
          "Before we proceed, let's make sure we're all on the same page.",
      },
      {
        idiom: "go the extra mile",
        meaning: "To put in more effort than is required.",
        example: "She always goes the extra mile for her clients.",
      },
      {
        idiom: "touch base",
        meaning: "To make brief contact with someone to share updates.",
        example: "I'll touch base with you after the meeting.",
      },
      {
        idiom: "bite off more than you can chew",
        meaning: "To take on more responsibility than you can handle.",
        example:
          "He bit off more than he could chew by managing three projects at once.",
      },
      {
        idiom: "back to the drawing board",
        meaning: "To start something over after a failure.",
        example: "The prototype failed, so it's back to the drawing board.",
      },
      {
        idiom: "burn the midnight oil",
        meaning: "To work very late into the night.",
        example: "She burned the midnight oil to finish the report on time.",
      },
      {
        idiom: "cut corners",
        meaning: "To do something the easy way, often sacrificing quality.",
        example:
          "The contractor cut corners, and the building failed inspection.",
      },
      {
        idiom: "in the loop",
        meaning: "Informed about what is happening.",
        example: "Please keep me in the loop about any changes.",
      },
      {
        idiom: "learn the ropes",
        meaning: "To learn the basics of a job or activity.",
        example: "It takes a few weeks to learn the ropes in any new job.",
      },
      {
        idiom: "ahead of the curve",
        meaning: "More advanced than the current trend or standard.",
        example:
          "Our company is ahead of the curve when it comes to AI adoption.",
      },
    ],
  },
  {
    category: "Time & Urgency",
    emoji: "⏰",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    items: [
      {
        idiom: "in the nick of time",
        meaning: "At the last possible moment.",
        example: "She arrived in the nick of time to catch her flight.",
      },
      {
        idiom: "once in a blue moon",
        meaning: "Very rarely.",
        example: "He only visits once in a blue moon.",
      },
      {
        idiom: "beat the clock",
        meaning: "To finish something before a deadline.",
        example: "We barely beat the clock to submit the application.",
      },
      {
        idiom: "buy time",
        meaning: "To delay something in order to have more time.",
        example:
          "He asked extra questions to buy time during the presentation.",
      },
      {
        idiom: "around the clock",
        meaning: "All day and all night, continuously.",
        example: "The team worked around the clock to meet the deadline.",
      },
      {
        idiom: "at the eleventh hour",
        meaning: "At the last minute, almost too late.",
        example: "The deal was signed at the eleventh hour.",
      },
      {
        idiom: "kill time",
        meaning: "To do something to pass time while waiting.",
        example: "She read a magazine to kill time before the interview.",
      },
      {
        idiom: "pressed for time",
        meaning: "In a hurry, not having enough time.",
        example: "I can't talk now — I'm really pressed for time.",
      },
    ],
  },
  {
    category: "Feelings & Attitude",
    emoji: "😊",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
    items: [
      {
        idiom: "on cloud nine",
        meaning: "Extremely happy.",
        example: "She was on cloud nine after getting the promotion.",
      },
      {
        idiom: "under the weather",
        meaning: "Feeling slightly ill.",
        example: "I'm a bit under the weather today, so I'll work from home.",
      },
      {
        idiom: "bite the bullet",
        meaning: "To endure a painful or difficult situation.",
        example: "Just bite the bullet and get the dentist appointment done.",
      },
      {
        idiom: "have a chip on your shoulder",
        meaning: "To feel resentful or bitter about something.",
        example:
          "He's had a chip on his shoulder since he was passed over for promotion.",
      },
      {
        idiom: "keep your chin up",
        meaning: "To stay positive in a difficult situation.",
        example: "Keep your chin up — things will get better.",
      },
      {
        idiom: "let the cat out of the bag",
        meaning: "To accidentally reveal a secret.",
        example: "She let the cat out of the bag about the surprise party.",
      },
      {
        idiom: "get cold feet",
        meaning: "To suddenly feel nervous or reluctant about something.",
        example: "He got cold feet right before the job interview.",
      },
      {
        idiom: "lose your cool",
        meaning: "To become angry or lose emotional control.",
        example:
          "He lost his cool during the argument and said things he regretted.",
      },
      {
        idiom: "over the moon",
        meaning: "Extremely pleased or happy.",
        example: "She was over the moon when she found out she got in.",
      },
      {
        idiom: "drive someone up the wall",
        meaning: "To irritate someone greatly.",
        example: "The constant noise drove her up the wall.",
      },
    ],
  },
  {
    category: "Communication & Relationships",
    emoji: "🗣️",
    color: "#5b21b6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    items: [
      {
        idiom: "beat around the bush",
        meaning: "To avoid getting to the main point.",
        example: "Stop beating around the bush and tell me what happened.",
      },
      {
        idiom: "spill the beans",
        meaning: "To reveal secret information.",
        example: "Who spilled the beans about the merger?",
      },
      {
        idiom: "hit the nail on the head",
        meaning: "To describe something exactly right.",
        example: "You hit the nail on the head with that analysis.",
      },
      {
        idiom: "read between the lines",
        meaning: "To understand the hidden meaning of something.",
        example:
          "Read between the lines — she's clearly unhappy with the decision.",
      },
      {
        idiom: "give someone the cold shoulder",
        meaning: "To deliberately ignore someone.",
        example: "After the argument, she gave him the cold shoulder all week.",
      },
      {
        idiom: "break the ice",
        meaning:
          "To do or say something to relieve tension in a new situation.",
        example: "He told a joke to break the ice at the start of the meeting.",
      },
      {
        idiom: "see eye to eye",
        meaning: "To agree with someone.",
        example:
          "They don't always see eye to eye, but they work well together.",
      },
      {
        idiom: "sit on the fence",
        meaning: "To avoid taking a side in an argument.",
        example: "You can't sit on the fence forever — you need to decide.",
      },
      {
        idiom: "bury the hatchet",
        meaning: "To end a conflict and make peace.",
        example:
          "After years of disagreement, they finally buried the hatchet.",
      },
      {
        idiom: "pull someone's leg",
        meaning: "To joke or tease someone.",
        example: "Are you serious or just pulling my leg?",
      },
    ],
  },
  {
    category: "Money & Resources",
    emoji: "💰",
    color: "#0f766e",
    bg: "#ccfbf1",
    border: "#5eead4",
    items: [
      {
        idiom: "cost an arm and a leg",
        meaning: "To be very expensive.",
        example: "That new phone costs an arm and a leg.",
      },
      {
        idiom: "break the bank",
        meaning: "To cost more money than one can afford.",
        example:
          "We want a nice vacation, but nothing that will break the bank.",
      },
      {
        idiom: "tighten your belt",
        meaning: "To spend less money due to financial difficulty.",
        example: "With the pay cut, we had to tighten our belts.",
      },
      {
        idiom: "make ends meet",
        meaning: "To have just enough money for basic needs.",
        example: "With two part-time jobs, she barely makes ends meet.",
      },
      {
        idiom: "a dime a dozen",
        meaning: "Very common and of little value.",
        example: "Good ideas are a dime a dozen — execution is what matters.",
      },
      {
        idiom: "on a shoestring",
        meaning: "With a very small budget.",
        example: "They launched the startup on a shoestring.",
      },
      {
        idiom: "penny-wise, pound-foolish",
        meaning: "Careful with small expenses but wasteful with large ones.",
        example:
          "Skipping the maintenance check was penny-wise, pound-foolish.",
      },
      {
        idiom: "hit the jackpot",
        meaning: "To have great success or luck.",
        example: "They hit the jackpot with that real estate investment.",
      },
    ],
  },
  {
    category: "Challenges & Problem Solving",
    emoji: "🧩",
    color: "#be185d",
    bg: "#fce7f3",
    border: "#fbcfe8",
    items: [
      {
        idiom: "hit a brick wall",
        meaning: "To reach a point where no progress is possible.",
        example: "We hit a brick wall in the negotiations.",
      },
      {
        idiom: "in hot water",
        meaning: "In trouble or a difficult situation.",
        example: "He found himself in hot water after missing the deadline.",
      },
      {
        idiom: "between a rock and a hard place",
        meaning: "Facing two equally difficult options.",
        example:
          "She was between a rock and a hard place choosing between the two jobs.",
      },
      {
        idiom: "bite the dust",
        meaning: "To fail or come to an end.",
        example: "Three of our competitors bit the dust during the recession.",
      },
      {
        idiom: "throw in the towel",
        meaning: "To give up and admit defeat.",
        example: "After months of losses, the startup threw in the towel.",
      },
      {
        idiom: "jump through hoops",
        meaning: "To do many difficult things in order to achieve something.",
        example: "I had to jump through hoops to get the visa approved.",
      },
      {
        idiom: "cross that bridge when you come to it",
        meaning: "To deal with a problem only when it actually happens.",
        example:
          "Don't worry about the final exam yet — cross that bridge when you come to it.",
      },
      {
        idiom: "the last straw",
        meaning:
          "The final problem in a series that causes one to lose patience.",
        example: "Being late again was the last straw for her manager.",
      },
      {
        idiom: "a blessing in disguise",
        meaning: "Something that seems bad at first but turns out to be good.",
        example:
          "Losing that job was a blessing in disguise — I found a much better one.",
      },
      {
        idiom: "weather the storm",
        meaning: "To survive a difficult period.",
        example:
          "The company managed to weather the storm of the economic crisis.",
      },
    ],
  },
];
