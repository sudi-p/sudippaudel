// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview and Template" },
  { id: "structure", label: "Sample" },
  { id: "qtypes", label: "Question Types" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
];

export const SCORE_CRITERIA = [
  {
    label: "Fluency",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: 'Smooth, natural delivery with minimal hesitation. Filler words like "um" or "uh" signal low fluency.',
  },
  {
    label: "Grammar",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Accurate sentence structure and tense control. Complex sentences show range; simple errors cost points.",
  },
  {
    label: "Vocabulary",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Word choice that fits the topic and shows range. Repetition (saying the same word over and over) is a red flag.",
  },
  {
    label: "Coherence",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Your story has a clear beginning, middle, and end. Ideas connect logically; transitions are smooth.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Opening (20s)",
    desc: "Name the event, when it happened, why it mattered",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Body (50s)",
    desc: "Describe one key moment with sensory details; show emotion shift",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Closing (20s)",
    desc: "Reflect on what you learned or how it changed you",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Fluency:
        "Speaks naturally with very few pauses or filler words. Rhythm is conversational.",
      Grammar:
        "Consistent use of complex sentences with minimal errors. Tense control is secure.",
      Vocabulary:
        "Precise word choice; shows range and avoids repetition. Phrasal verbs or advanced collocations appear naturally.",
      Coherence:
        "Story flows seamlessly. Transitions feel organic, not forced. Clear cause-and-effect.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Fluency:
        "Mostly fluent with occasional pauses to think. Some filler words but not excessive.",
      Grammar:
        "Mostly accurate; some complex sentences mixed with simple ones. Minor errors don't disrupt meaning.",
      Vocabulary:
        "Good range; some attempt at less common words. Occasional repetition of key terms.",
      Coherence:
        'Story is organized and easy to follow. Transitions are present but sometimes basic ("and then," "so").',
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Fluency:
        "Noticeable pauses; some filler words. May lose thread of thought mid-sentence.",
      Grammar:
        "Mix of simple and complex structures; some errors in tense or agreement. Meaning is usually clear.",
      Vocabulary:
        "Basic vocabulary; frequent repetition. Limited range; mostly high-frequency words.",
      Coherence:
        "Story is present but may jump around. Transitions are weak or missing.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Fluency:
        "Frequent hesitation; heavy reliance on filler words or silence. Choppy delivery.",
      Grammar:
        "Frequent errors in basic structures (subject-verb, tense). Meaning is sometimes unclear.",
      Vocabulary:
        "Very limited; heavy repetition. Mostly basic, everyday words only.",
      Coherence:
        "Story is disjointed or incomplete. Difficult to follow the narrative thread.",
    },
  },
];

export const QUESTION_TYPES = [
  {
    n: "1",
    badge: "bg-emerald2",
    accent: "text-emerald2",
    title: "Achievement / Proud Moment",
    hint: 'e.g. "Describe something you are proud of"',
    prompts: [
      "Describe a personal accomplishment you are proud of.",
      "Talk about a goal you worked hard to achieve.",
      "Describe a time you overcame a significant challenge.",
    ],
    vocab: [
      {
        word: "persevere",
        meaning: "to continue despite difficulty",
        example:
          "I had to persevere through months of setbacks before I succeeded.",
      },
      {
        word: "milestone",
        meaning: "an important achievement or turning point",
        example:
          "Finishing my first marathon was a major milestone in my life.",
      },
      {
        word: "tenacity",
        meaning: "determination and persistence",
        example:
          "It was pure tenacity that got me through the final exam period.",
      },
      {
        word: "gratifying",
        meaning: "giving pleasure or satisfaction",
        example: "Hearing the audience applaud was deeply gratifying.",
      },
      {
        word: "accomplished",
        meaning:
          "successfully completed; also used as an adjective for skilled",
        example: "I finally felt accomplished after years of hard work.",
      },
      {
        word: "setback",
        meaning: "a reversal or check in progress",
        example: "Every setback taught me something valuable about resilience.",
      },
    ],
    model:
      "A few years ago, I decided to run my first half-marathon — something I'd told myself I'd do since my twenties but kept putting off. I wasn't a runner at all; I could barely jog for ten minutes straight when I started training. The milestone I remember most is the final stretch of the race. My legs were burning, and I could hear my own breathing louder than the crowd. But then I rounded the last corner and saw the finish line, and something just clicked — I pushed through. Crossing that line, I felt a wave of accomplishment I hadn't expected. It was the most gratifying moment I'd had in years. That race taught me that I can persevere through discomfort if the goal matters to me. Now, whenever a work challenge feels overwhelming, I think back to those last two hundred meters.",
  },
  {
    n: "2",
    badge: "bg-rose2",
    accent: "text-rose2",
    title: "Challenge / Difficult Experience",
    hint: 'e.g. "Describe a time you faced a difficulty"',
    prompts: [
      "Describe a difficult situation you faced and how you dealt with it.",
      "Talk about a time things did not go as planned.",
      "Describe a time you made a mistake and what you learned from it.",
    ],
    vocab: [
      {
        word: "overwhelming",
        meaning: "very intense, hard to cope with",
        example:
          "The pressure of deadlines felt completely overwhelming at first.",
      },
      {
        word: "resilience",
        meaning: "ability to recover quickly from difficulties",
        example: "That year tested my resilience in ways I didn't expect.",
      },
      {
        word: "cope with",
        meaning: "to deal with something difficult",
        example: "I had to find new strategies to cope with the situation.",
      },
      {
        word: "pivotal",
        meaning: "of crucial importance; a turning point",
        example: "That failure turned out to be a pivotal moment in my career.",
      },
      {
        word: "in hindsight",
        meaning: "looking back on a past event with new understanding",
        example: "In hindsight, I wish I had asked for help sooner.",
      },
      {
        word: "come to terms with",
        meaning: "to accept a difficult reality",
        example:
          "It took months to come to terms with the decision I had made.",
      },
    ],
    model:
      "During my final year of university, I failed an important exam that I had been counting on to boost my average. I remember walking out of that exam hall and feeling the weight of every hour I hadn't studied. It was genuinely overwhelming — I sat in a coffee shop for an hour just staring at the ceiling. But after that, I made a decision to cope with the setback head-on. I met with my professor, figured out where my understanding had broken down, and restructured how I studied entirely. I retook the paper two months later and passed with distinction. In hindsight, that failure was a pivotal turning point — it forced me to build real study habits instead of relying on last-minute cramming. I came to terms with the fact that I'd been overconfident, and honestly, that lesson has been more valuable than most things I learned in university.",
  },
  {
    n: "3",
    badge: "bg-sapphire",
    accent: "text-sapphire",
    title: "Memorable Place / Travel",
    hint: 'e.g. "Describe a place that was meaningful to you"',
    prompts: [
      "Describe a place you visited that left a strong impression on you.",
      "Talk about a trip that was particularly meaningful.",
      "Describe a place from your childhood that you remember fondly.",
    ],
    vocab: [
      {
        word: "serene",
        meaning: "calm, peaceful, and untroubled",
        example:
          "The valley at dawn was completely serene — not a sound except the river.",
      },
      {
        word: "awe-inspiring",
        meaning: "filling someone with wonder",
        example: "Standing at the edge of the canyon was truly awe-inspiring.",
      },
      {
        word: "remote",
        meaning: "far from civilization; isolated",
        example:
          "The village was so remote that there was no cell signal for miles.",
      },
      {
        word: "bustling",
        meaning: "full of activity and energy",
        example:
          "The market was bustling with vendors and locals by midmorning.",
      },
      {
        word: "nostalgia",
        meaning: "a sentimental longing for the past",
        example:
          "Visiting my hometown filled me with nostalgia for simpler times.",
      },
      {
        word: "immersed in",
        meaning: "deeply absorbed or surrounded by",
        example: "I felt completely immersed in the local culture within days.",
      },
    ],
    model:
      "A few years ago I visited a small coastal village in Portugal — a place I almost didn't go to because it was so remote that it wasn't on any of the usual tourist lists. The moment I arrived, I understood why people kept it quiet. The village was perched on cliffs above the Atlantic, and in the early morning everything was completely serene — just the sound of waves and the smell of salt in the air. I remember sitting outside a tiny café with an espresso, watching fishing boats come in, and feeling fully immersed in a pace of life I'd forgotten existed. There was no agenda, no Wi-Fi, nothing urgent. That morning filled me with a kind of nostalgia for slowness — for what life felt like before everything became so connected. I came home craving more of that stillness, and since then I've made a point of taking at least one trip a year to somewhere deliberately off the beaten path.",
  },
  {
    n: "4",
    badge: "bg-violet2",
    accent: "text-violet2",
    title: "Important Person / Relationship",
    hint: 'e.g. "Describe someone who influenced you"',
    prompts: [
      "Describe a person who has had a significant influence on your life.",
      "Talk about someone you admire and explain why.",
      "Describe a time when someone helped you through a difficult period.",
    ],
    vocab: [
      {
        word: "mentor",
        meaning: "an experienced person who advises and guides",
        example:
          "My professor became an unexpected mentor during my final year.",
      },
      {
        word: "instill",
        meaning: "to gradually introduce a quality or value into someone",
        example: "She instilled in me a deep respect for honest work.",
      },
      {
        word: "selfless",
        meaning: "putting others' needs before one's own",
        example: "His selfless dedication to the community was inspiring.",
      },
      {
        word: "profound impact",
        meaning: "a deep and significant effect",
        example: "Her advice had a profound impact on how I approach problems.",
      },
      {
        word: "look up to",
        meaning: "to admire and respect someone",
        example: "I've always looked up to my older sister for her courage.",
      },
      {
        word: "invaluable",
        meaning: "extremely useful; beyond price",
        example: "Her guidance was invaluable when I was starting my career.",
      },
    ],
    model:
      "The person who has had the most profound impact on how I work is my first manager at my job out of university. I was twenty-three and genuinely overconfident, and she could see that immediately. What I remember most is a specific meeting — I'd presented an idea I was really proud of, and she waited until everyone else left the room, then quietly said, 'That was good. Now tell me what you'd do if it fails.' I didn't have an answer. She became an invaluable mentor from that point on — not because she was warm and encouraging, but because she was honest in a way that was genuinely rare. She instilled in me the habit of thinking two steps ahead and owning my mistakes before they became someone else's problem. I've looked up to her ever since. Even now, when I'm making a big decision, I ask myself what she would ask me — and nine times out of ten, it's a harder question than the one I was already thinking about.",
  },
  {
    n: "5",
    badge: "bg-amber2",
    accent: "text-amber2",
    title: "Life-Changing Decision / Event",
    hint: 'e.g. "Describe a decision that changed your life"',
    prompts: [
      "Describe an important decision you made and how it affected your life.",
      "Talk about a turning point in your life.",
      "Describe an unexpected event that changed your plans.",
    ],
    vocab: [
      {
        word: "turning point",
        meaning: "a time when a decisive change occurs",
        example:
          "Moving to Canada was the turning point that shaped my entire career.",
      },
      {
        word: "leap of faith",
        meaning: "an act of trusting without proof",
        example: "Quitting my stable job was a genuine leap of faith.",
      },
      {
        word: "weigh the options",
        meaning: "to carefully consider the choices available",
        example:
          "I spent weeks trying to weigh the options before I committed.",
      },
      {
        word: "irreversible",
        meaning: "not able to be undone",
        example:
          "I knew the decision was largely irreversible, which made it harder.",
      },
      {
        word: "shaped who I am",
        meaning: "strongly influenced one's identity",
        example:
          "That experience shaped who I am in ways I'm still discovering.",
      },
      {
        word: "take the plunge",
        meaning: "to decide to do something difficult or risky",
        example: "Eventually I just had to take the plunge and commit.",
      },
    ],
    model:
      "About four years ago, I made a decision that I was genuinely terrified about — I left a stable, well-paying job to move to a different city and start fresh in a field I'd never formally worked in. It felt irreversible and, honestly, reckless. I remember spending weeks trying to weigh the options, going back and forth in my head every night. But there was a moment — I was sitting at my desk at the old job, staring at a spreadsheet I didn't care about at all, and I thought: if I'm this bored at twenty-seven, what does forty-five look like? That was the turning point. I took the plunge. The first six months were harder than I expected — I had to rebuild credibility from scratch and earn trust I'd had for years at my old place. But I was engaged in a way I hadn't been in years. That decision shaped who I am now more than anything else I've done as an adult. I'd do it again without question.",
  },
  {
    n: "6",
    badge: "bg-gold",
    accent: "text-gold",
    title: "Celebration / Special Event",
    hint: 'e.g. "Describe a memorable celebration"',
    prompts: [
      "Describe a memorable celebration or special event from your past.",
      "Talk about a family tradition or event that is meaningful to you.",
      "Describe a moment when you celebrated with people you care about.",
    ],
    vocab: [
      {
        word: "cherish",
        meaning: "to hold something dear; to treasure it",
        example: "I still cherish the photographs from that evening.",
      },
      {
        word: "festive atmosphere",
        meaning: "a joyful, celebratory mood or setting",
        example: "The whole room had a warm, festive atmosphere.",
      },
      {
        word: "momentous",
        meaning: "of great importance or significance",
        example: "It was a momentous occasion for our entire family.",
      },
      {
        word: "overcome with emotion",
        meaning: "to feel a strong emotion suddenly and intensely",
        example: "When they called my name, I was overcome with emotion.",
      },
      {
        word: "mark the occasion",
        meaning: "to do something special to celebrate or remember an event",
        example: "We went out for dinner to mark the occasion properly.",
      },
      {
        word: "reminisce",
        meaning: "to think or talk about past experiences fondly",
        example: "We spent the whole evening reminiscing about old times.",
      },
    ],
    model:
      "One of the most momentous evenings I can remember is my parents' twenty-fifth wedding anniversary. My siblings and I had planned the whole thing in secret — a dinner at a restaurant near the water, with family flying in from three different cities. The moment that stands out most is when my parents walked in and saw everyone there. My mother put her hand over her mouth. She was completely overcome with emotion, and honestly so was I — I hadn't realized until that moment how rarely we were all together. The room had this warm, festive atmosphere — fairy lights, old photographs on the tables, music playing from their wedding year. We stayed for four hours, just reminiscing, laughing at old stories I'd never heard. I still cherish that night. It reminded me that the most meaningful things in life are almost never the big planned milestones — they're the evenings where everyone you love is in the same room.",
  },
];

export const CATEGORY_SUMMARY = [
  { num: "1", label: "Achievement", color: "text-emerald2" },
  { num: "2", label: "Challenge", color: "text-rose2" },
  { num: "3", label: "Memorable Place", color: "text-sapphire" },
  { num: "4", label: "Important Person", color: "text-violet2" },
  { num: "5", label: "Life-Changing Decision", color: "text-amber2" },
  { num: "6", label: "Celebration / Event", color: "text-gold" },
];

// Reusable template signals highlighted inside each sample. Task 2 is a
// narrative, so the consistent fixed frame is the closing reflection.
export const TEMPLATE_PHRASES = [
  "I remember",
  "I'll never forget",
  "Not only was it",
  "but it also",
  "made me feel",
  "made me realize",
  "Overall, it was truly",
];

export const COMPLETE_EXAMPLES = [
  {
    border: "border-sapphire",
    title: "Example 1: Overcoming Fear",
    opening:
      "A few years ago, I decided to take a solo backpacking trip through Southeast Asia for three months. I'd never traveled alone before, and honestly, I was terrified.",
    body: "The first week was in Thailand. I remember walking through Bangkok's night market at dusk — the smell of grilled seafood was everywhere, and the crowd noise was physically overwhelming. My hands were shaking as I tried to navigate the streets with just a map. But then this street vendor noticed I was lost and helped me find my hostel. Not only was it unexpected, but it also completely changed how I felt about being alone in a foreign place.",
    closing:
      "That trip made me feel braver than I'd ever felt before, and it made me realize people are kinder than I expected. Overall, it was truly life-changing — I've since traveled to ten more countries, and I wouldn't trade that experience for anything.",
  },
  {
    border: "border-emerald2",
    title: "Example 2: Learning a Skill",
    opening:
      "Last year, I decided to learn guitar even though I had no musical background whatsoever. My brother had left his old guitar at my place, and one day I just picked it up.",
    body: "The first month was frustrating. My fingers would hurt after just ten minutes of practice, and the strings buzzed when I played chords. Not only was it painfully slow progress, but it also felt embarrassing every time I messed up in front of my roommate. I nearly gave up. But then one afternoon, I sat down and played 'Wonderwall' all the way through for the first time — I remember my heart racing and my hands trembling with excitement.",
    closing:
      "That afternoon made me feel like I'd finally accomplished something real, and it made me realize you don't need talent to start — just patience. Overall, it was truly rewarding, and now I play three times a week and I'm learning more complex songs.",
  },
  {
    border: "border-amber2",
    title: "Example 3: A Memorable Celebration",
    opening:
      "A couple of years ago, we threw my grandmother's 80th birthday party. The whole extended family came from different cities — we hadn't all been together in five years.",
    body: "We had dinner at her favorite restaurant by the riverside. The moment I'll never forget is when the waiter brought out the cake — it was shaped like a lotus flower, her favorite flower. Not only was it emotional, but it also brought the whole room to a stop before everyone started clapping and singing. I could smell jasmine flowers on the table and taste the sweetness of the cake when we cut it together.",
    closing:
      "That night made me feel closer to my family than I had in years, and it made me realize how precious those moments are. Overall, it was truly unforgettable — I'm so grateful I was there, and now I make sure to visit her every month.",
  },
  {
    border: "border-rose2",
    title: "Example 4: An Unexpected Decision",
    opening:
      "During my second year of university, I had a scholarship to study engineering. But halfway through the semester, I realized I hated it. So I made a big decision — I switched to studying environmental science instead.",
    body: "I remember how anxious I was as I made the call — my stomach was twisting the whole time. But to my surprise, my father said, 'If you're not happy, change it. Life is too short to spend it doing something you don't believe in.' Not only was it a relief to hear, but it also made me stop worrying about what everyone else thought. The switch was tough — I had to retake some classes — but suddenly, going to class didn't feel like a burden anymore.",
    closing:
      "That decision made me feel like I'd finally taken control of my own life, and it made me realize I need to listen to my gut. Overall, it was truly the best decision I've made — now I work for an environmental NGO, and I couldn't imagine a different path.",
  },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "Don't memorize — outline instead.",
    body: "During prep, scribble 3–4 key words for each part (opening event, key moment detail, closing reflection). Then speak from those cues, not from memory. Examiners can tell.",
  },
  {
    category: "prep",
    color: "text-sapphire",
    title: "Pick a story you know well.",
    body: "If you're thinking hard about whether something happened or when, your fluency suffers. Choose an experience you've already told friends about multiple times.",
  },
  {
    category: "delivery",
    color: "text-emerald2",
    title: "Speak as if you're telling a friend, not an examiner.",
    body: 'Overly formal language signals nervousness. Talk naturally. "I was like..." or "So anyway..." are fine — better than stilted phrasing.',
  },
  {
    category: "delivery",
    color: "text-amber2",
    title: "Pause > filler words.",
    body: 'A 2-second silence while you think is better than "um" or "uh." Examiners know you\'re gathering thoughts. Filler suggests you\'re losing control.',
  },
  {
    category: "language",
    color: "text-rose2",
    title: "One strong sensory detail beats five vague ones.",
    body: '"The air smelled like pine and rain" is worth more than "it was nice and quiet and peaceful." Specific → fluent.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: "Show, don't tell.",
    body: 'Instead of "I was really nervous," say "My heart was pounding as I stepped forward." Specific language shows grammar range.',
  },
  {
    category: "mistakes",
    color: "text-gold",
    title: "Don't stop or correct yourself.",
    body: 'If you misspeak or notice a grammar error, keep going. Stopping to say "wait, I meant..." signals anxiety. Examiners understand imperfection.',
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: 'Avoid "I want to talk about..." opening.',
    body: 'Jump straight into the story: "A few years back, I..." This signals confidence and uses time efficiently.',
  },
  {
    category: "mistakes",
    color: "text-emerald2",
    title: "Don't finish early and go silent.",
    body: "If you run out of ideas, add one more detail to a key moment or expand your reflection. 90 seconds should feel natural, not rushed or cut short.",
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];
