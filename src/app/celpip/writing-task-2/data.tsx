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
    text: "Did you take a clear position? Is it 180-199 words? Did you support your argument with evidence?",
  },
  {
    label: "Coherence",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Is the essay organized logically? Do ideas flow from intro to conclusion with clear transitions?",
  },
  {
    label: "Vocabulary",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Academic register, varied word choice, and sophisticated transitions.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Accurate sentence structure, varied syntax, and minimal errors.",
  },
];

export const FOUR_PART = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Introduction (2–3 sentences)",
    desc: "Hook, context, and clear thesis statement taking a position",
  },
  {
    n: "2,3",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Body Paragraphs (2 × 3–4 sentences)",
    desc: 'Each supports the thesis with one main idea, evidence, and reasoning; the second adds an "Admittedly...However" concession',
  },
  {
    n: "4",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Conclusion (2–3 sentences)",
    desc: "Restate thesis, summarize key points, end with a strong final thought",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      "Task Fulfillment":
        "Clear position taken. Word count 180–199. Well-developed argument with compelling evidence. Completed within time constraints.",
      Coherence:
        "Essay flows logically. Strong paragraph structure and transitions. Ideas build toward a conclusion.",
      Vocabulary:
        "Academic register throughout. Sophisticated transitions and persuasive language. Varied word choice.",
      Grammar:
        "Grammar and spelling are nearly perfect. Varied sentence structures demonstrate control.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      "Task Fulfillment":
        "Position is clear. Word count generally within range. Argument is supported but could be stronger.",
      Coherence:
        "Essay is organized and easy to follow. Most paragraphs have clear topic sentences. Some transitions present.",
      Vocabulary:
        "Generally academic tone. Some variety in word choice. Occasional repetition of key terms.",
      Grammar:
        "Grammar is mostly accurate. Minor errors present but don't disrupt meaning.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      "Task Fulfillment":
        "Position exists but may be unclear. Word count may be below range. Argument is basic and underdeveloped.",
      Coherence:
        "Essay structure exists but may lack clear organization. Transitions are basic or missing.",
      Vocabulary:
        "Some academic vocabulary but often basic. Limited variety. Repetitive word choice.",
      Grammar:
        "Several grammatical errors. Some spelling mistakes. Meaning is usually clear but sometimes unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      "Task Fulfillment":
        "Position unclear or missing. Word count significantly below range. Minimal development of argument.",
      Coherence:
        "Organization is weak or absent. Difficult to follow. No clear paragraph structure.",
      Vocabulary:
        "Very basic vocabulary. Not academic in register. Heavy repetition.",
      Grammar:
        "Frequent and serious errors. Meaning is sometimes unclear.",
    },
  },
];

// Each essay: template rows (badge + text), idea generator (2 reasons,
// each with who/what/detail), and a model essay (array of paragraphs).
export const ESSAYS = [
  {
    title: "Essay 1 — Remote vs. Office Work",
    template: [
      { badge: "Intro", badgeClass: "bg-sapphire-light text-sapphire-dark", text: "Position: remote work is the superior choice for companies and staff." },
      { badge: "Reason 1", badgeClass: "bg-emerald2-light text-emerald2-dark", text: "It significantly boosts productivity." },
      { badge: "Reason 2 + concession", badgeClass: "bg-amber2-light text-amber2-dark", text: "It improves well-being — concede office collaboration, but modern tools replace it." },
      { badge: "Conclusion", badgeClass: "bg-violet2-light text-violet2-dark", text: "Restate and urge companies to embrace the flexible model." },
    ],
    ideas: [
      {
        title: "Reason 1 — Productivity",
        who: "Employees & companies",
        what: "Sharper focus and higher efficiency",
        detail: "No commute or distractions → faster, more accurate work and less turnover",
      },
      {
        title: "Reason 2 — Well-being",
        who: "Employees & their families",
        what: "Better work-life balance, less burnout",
        detail: "Autonomy builds loyalty; video tools replace office collaboration without commuting",
      },
    ],
    essay: [
      "Modern businesses increasingly debate whether employees should work remotely or in the office. In my view, remote work is the superior choice for both companies and their staff.",
      "First, remote work significantly increases productivity by eliminating commute stress and office distractions. Employees working from home report sharper focus and noticeably better output quality. This uninterrupted environment allows staff to complete demanding tasks more quickly and accurately. As a result, companies benefit from reduced turnover and greater overall efficiency.",
      "Additionally, remote work improves employee well-being by offering flexibility and a healthier work-life balance. Workers who enjoy greater autonomy also experience less burnout and tend to remain with their employers far longer. Admittedly, in-person offices provide valuable face-to-face collaboration and spontaneous teamwork. However, modern tools such as video conferencing and shared project boards replicate this benefit effectively, without the daily cost and lost time of commuting.",
      "In conclusion, remote work enhances both productivity and personal well-being while remaining fully collaborative. Companies should therefore embrace this flexible model to secure long-term success and a satisfied, loyal workforce. Ultimately, prioritising people and performance together is simply good business.",
    ],
  },
  {
    title: "Essay 2 — University vs. Practical Training",
    template: [
      { badge: "Intro", badgeClass: "bg-sapphire-light text-sapphire-dark", text: "Position: practical training is more valuable in today's job market." },
      { badge: "Reason 1", badgeClass: "bg-emerald2-light text-emerald2-dark", text: "It gives immediately applicable, job-ready skills." },
      { badge: "Reason 2 + concession", badgeClass: "bg-amber2-light text-amber2-dark", text: "It is far more affordable — concede university's breadth, but it is costly with no job guarantee." },
      { badge: "Conclusion", badgeClass: "bg-violet2-light text-violet2-dark", text: "Restate; it is the smarter choice for most students." },
    ],
    ideas: [
      {
        title: "Reason 1 — Job-ready skills",
        who: "Graduates & employers",
        what: "Faster employment and earnings",
        detail: "Contribute from day one → faster promotions and stronger long-term earnings",
      },
      {
        title: "Reason 2 — Affordability",
        who: "Students & their families",
        what: "Less debt, greater financial security",
        detail: "Far cheaper than tuition; degrees cost years of time and money with no guaranteed job",
      },
    ],
    essay: [
      "Students today often wonder whether a university degree or practical training offers the better route to success. I firmly believe that practical training programmes are more valuable in today's competitive job market.",
      "First, practical training equips students with immediately applicable skills that employers actively demand. Because graduates can begin contributing on their very first day, they earn income and build professional experience far sooner than university graduates. This head start often translates into faster promotions and stronger long-term earnings.",
      "Additionally, practical training costs significantly less than university tuition, sparing students from years of heavy debt. Admittedly, a university education provides broad theoretical knowledge and a wider range of career possibilities. However, this breadth frequently comes at an enormous cost in time and money, with no guarantee of employment, whereas specialised training leads directly to a job.",
      "In conclusion, practical training offers superior value through immediate employability, affordability, and a clear path into the workforce. For most students seeking financial security and rapid advancement, it is undoubtedly the smarter choice. Ultimately, real-world readiness matters more to employers than a diploma alone.",
    ],
  },
  {
    title: "Essay 3 — Company Uniforms",
    template: [
      { badge: "Intro", badgeClass: "bg-sapphire-light text-sapphire-dark", text: "Position: introducing company uniforms is a good idea." },
      { badge: "Reason 1", badgeClass: "bg-emerald2-light text-emerald2-dark", text: "They project professionalism and a cohesive image." },
      { badge: "Reason 2 + concession", badgeClass: "bg-amber2-light text-amber2-dark", text: "They foster equality and team spirit — concede personal expression, but unity and convenience win." },
      { badge: "Conclusion", badgeClass: "bg-violet2-light text-violet2-dark", text: "Restate; uniforms are a practical investment." },
    ],
    ideas: [
      {
        title: "Reason 1 — Professional image",
        who: "Clients/customers & the company",
        what: "Stronger reputation and sales",
        detail: "Clients instantly recognise staff and trust a coordinated, competent team",
      },
      {
        title: "Reason 2 — Equality & team spirit",
        who: "Employees & colleagues",
        what: "Inclusive, focused environment and higher morale",
        detail: "No fashion comparisons; also saves staff time and money every morning",
      },
    ],
    essay: [
      "Many organisations must decide whether their employees should wear uniforms or dress freely. I strongly support introducing company uniforms in the workplace.",
      "First, uniforms project professionalism and create a cohesive company image. When clients arrive, they instantly recognise staff and perceive the organisation as organised and trustworthy. Customers naturally place greater trust in a team that looks coordinated and competent. This polished appearance strengthens client confidence and can directly improve a company's reputation and sales.",
      "Additionally, uniforms foster equality and team spirit by removing fashion-based comparisons among colleagues. Employees are then judged on performance rather than clothing, which builds a more inclusive and focused environment. Admittedly, some workers value the chance to express their personality through fashion. However, the benefits of unity and daily convenience clearly outweigh individual wardrobe preferences, since uniforms also save staff time and money every morning.",
      "In conclusion, company uniforms represent a practical investment in professionalism, equality, and employee convenience. Organisations that adopt them stand to gain a stronger image and a more united, productive team. Ultimately, the small loss of individual choice is a worthwhile trade for these lasting advantages.",
    ],
  },
  {
    title: "Essay 4 — Public Swimming Pool vs. Community Garden",
    template: [
      { badge: "Intro", badgeClass: "bg-sapphire-light text-sapphire-dark", text: "Position: a community garden is the better investment than a pool." },
      { badge: "Reason 1", badgeClass: "bg-emerald2-light text-emerald2-dark", text: "It serves every resident year-round." },
      { badge: "Reason 2 + concession", badgeClass: "bg-amber2-light text-amber2-dark", text: "It strengthens community bonds — concede a pool's exercise value, but pools are costly and seasonal." },
      { badge: "Conclusion", badgeClass: "bg-violet2-light text-violet2-dark", text: "Restate; the garden is the wiser long-term choice." },
    ],
    ideas: [
      {
        title: "Reason 1 — Inclusivity",
        who: "All residents — elderly, children, non-swimmers",
        what: "Public money benefits the whole community",
        detail: "Fresh produce and gentle activity year-round, not just for swimmers",
      },
      {
        title: "Reason 2 — Community bonds",
        who: "Diverse neighbours across the area",
        what: "Stronger social cohesion and food security",
        detail: "Shared cultivation unites residents; the garden runs continuously, unlike a seasonal pool",
      },
    ],
    essay: [
      "When a neighbourhood receives funding for a new facility, it must choose carefully. I believe a community garden is a better investment than a public swimming pool for our diverse area.",
      "First, a garden serves every resident year-round, regardless of age or ability. Unlike a pool, it benefits the elderly, young children, and non-swimmers equally, providing fresh produce alongside gentle outdoor activity. This inclusivity ensures that public money improves the lives of the entire community rather than a select few.",
      "Additionally, a community garden strengthens neighbourhood bonds by bringing diverse residents together around shared cultivation. These connections build the kind of social cohesion that a pool rarely creates. Admittedly, a swimming pool offers excellent exercise and recreation for swimmers. However, pools demand costly year-round maintenance and operate only seasonally, whereas a garden runs continuously and even improves local food security.",
      "In conclusion, a community garden better serves our neighbourhood's varied needs, promotes sustainability, and builds lasting connections. For genuine, long-term community value, it is clearly the wiser choice. By choosing the garden, we invest in health, belonging, and a greener future for all.",
    ],
  },
];

export const TIPS = [
  {
    category: "planning",
    label: "Planning",
    color: "text-gold",
    title: "Spend 5 minutes planning before you write.",
    body: "Write your thesis and outline your 2 main arguments. This prevents rambling and ensures a strong structure.",
  },
  {
    category: "planning",
    label: "Planning",
    color: "text-sapphire",
    title: "Take a clear position from the start.",
    body: 'Don\'t sit on the fence. "I believe X is better than Y" is stronger than "Both have advantages and disadvantages."',
  },
  {
    category: "structure",
    label: "Structure",
    color: "text-emerald2",
    title: "Use the 4-paragraph format consistently.",
    body: "Introduction → 2 body paragraphs → Conclusion. This is expected and immediately shows organization.",
  },
  {
    category: "structure",
    label: "Structure",
    color: "text-amber2",
    title: "Start each body paragraph with a topic sentence.",
    body: '"First, X is important because..." — this tells the reader what to expect in that paragraph.',
  },
  {
    category: "language",
    label: "Language",
    color: "text-rose2",
    title: "Use transition phrases to connect ideas.",
    body: '"Furthermore," "In contrast," "As a result" make your essay flow better and show advanced writing.',
  },
  {
    category: "language",
    label: "Language",
    color: "text-violet2",
    title: "Vary your sentence structure.",
    body: "Mix short sentences with longer, complex ones. This shows grammatical control and keeps the essay engaging.",
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-gold",
    title: "Don't exceed the word count too much.",
    body: "180–199 is the target. If you write 250+ words, it signals poor time management and inability to concisely organize your thoughts within the 26-minute window.",
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-sapphire",
    title: 'Don\'t use "I think" or "In my opinion" constantly.',
    body: 'You can use it in your thesis, but avoid repeating it. "It is clear that..." or "Evidence shows..." sound more academic.',
  },
  {
    category: "mistakes",
    label: "Mistakes to Avoid",
    color: "text-emerald2",
    title: "Proofread before submitting.",
    body: "You have no time limit — spend the last 5 minutes checking spelling, grammar, and punctuation. Typos are avoidable.",
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "planning", label: "Planning" },
  { id: "structure", label: "Structure" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes to Avoid" },
];
