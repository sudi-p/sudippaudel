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
    label: "Vocabulary",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: 'Precise, vivid descriptive language — strong adjectives, collocations, and spatial phrases instead of "big" and "nice."',
  },
  {
    label: "Coherence",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Logical spatial organization: overview first, then detail by detail (left → right, foreground → background) so the listener can picture it.",
  },
  {
    label: "Fluency",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Smooth, confident delivery with minimal hesitation. You sound like you're genuinely describing something to a real person.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Accurate structures — present continuous for actions, prepositions of place, and a clear question at the end.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Setup & Overview (15s)",
    desc: "Greet the person, say why you're calling, and give a one-line overview of what you're looking at",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Detailed Description (35s)",
    desc: "Walk through the image spatially; describe colours, shapes, actions, and what makes it unusual",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Closing Question (10s)",
    desc: "Ask the specific question from the prompt and end the call naturally",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Vocabulary:
        'Precise, sophisticated descriptive language. Strong adjectives and collocations ("a sleek, contoured frame") instead of basic words.',
      Coherence:
        "Overview followed by a clear spatial tour. The listener can easily picture the scene.",
      Fluency:
        "Natural, confident delivery with very few pauses. Sounds like a real phone call.",
      Grammar:
        "Accurate present continuous, prepositions of place, and a well-formed closing question.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Vocabulary:
        'Good descriptive range with some strong adjectives, though a few basic words ("big," "nice") slip in.',
      Coherence:
        "Generally organized; spatial language is used but transitions may be basic.",
      Fluency:
        "Mostly smooth with occasional pauses to think. Still easy to follow.",
      Grammar: "Mostly accurate; minor errors don't disrupt the description.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Vocabulary:
        'Basic, repetitive words ("there is," "I see"). Little vivid or precise description.',
      Coherence:
        "Description jumps around; hard for the listener to picture the layout.",
      Fluency:
        "Noticeable pauses and hesitations. May lose track mid-description.",
      Grammar:
        "Errors in tense or prepositions; the closing question may be missing or unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Vocabulary: "Very limited range. Almost no descriptive detail.",
      Coherence:
        "Description is disjointed or very brief. No clear organization.",
      Fluency:
        "Frequent hesitations, fillers, or long silences. Choppy delivery.",
      Grammar:
        "Frequent errors. Meaning is often unclear; no closing question.",
    },
  },
];

export const SAMPLE_ANSWERS = [
  {
    accent: "text-gold",
    scenario: "Scenario 1 · An unusual bed in a furniture store",
    prompt:
      "You're in a furniture store and see a bed you'd like to buy, but you can't take a photo. Call a family member, describe the bed, and ask whether you should buy it.",
    imagePrompt:
      "An unusual single bed in a modern furniture store, the pale wooden frame and soft grey mattress contoured into the shape of a person lying on their side, with a hollow for the head and a raised section for the knees, only allowing left-side sleeping, bright showroom lighting, photorealistic, product display shot.",
    setup:
      "Hi Mom, I'm at the furniture store and you won't believe what I'm looking at — a single bed curved into the shape of a person lying on their side.",
    description:
      "The frame is made of pale wood with a soft grey mattress on top, and instead of being flat, it dips and curves so your body slots right into it, with a hollow for your head and a raised part for your knees. What makes it really unusual is that you can only sleep on your left side; there's no way to lie on your back. I think it's designed to be as comfortable as a cocoon.",
    question:
      "So, do you think I should buy it? It's a little pricey and definitely odd, but I love it. Let me know what you think — the store closes in 20 minutes!",
  },
  {
    accent: "text-sapphire",
    scenario: "Scenario 2 · A strange sport at a sports centre",
    prompt:
      "You see two people playing an unusual sport at a sports centre. Call a friend, describe what the sport is and what each player is doing, and ask if they'd like to try it.",
    imagePrompt:
      "Two athletes inside a boxing ring wearing boxing gloves and shorts, but seated at a small table in the centre playing a game of chess while wearing noise-cancelling headphones, a referee standing beside them, a crowd watching in an indoor arena, bright spotlights, photorealistic, wide shot.",
    setup:
      "Hi George, I'm at the sports centre and you won't believe what I'm looking at — two people in a boxing ring playing a game of chess.",
    description:
      "Both players are wearing boxing gloves and shorts, and they're sitting at a small table right in the centre of the ring, with big headphones on to block out the crowd. One of them is leaning forward, carefully moving a chess piece, while the other waits with his gloves resting on the table, and a referee stands beside them in front of a whole audience. What makes it really unusual is that it's a real sport where you switch between boxing rounds and chess rounds.",
    question:
      "It looks fascinating — would you be interested in trying it with me sometime? Let me know what you think!",
  },
  {
    accent: "text-emerald2",
    scenario: "Scenario 3 · A bizarre building on the street",
    prompt:
      "You're walking through town and see an unusual building. Call a friend, describe it in detail, and ask if they want to visit it with you this weekend.",
    imagePrompt:
      "A completely upside-down house built as a tourist attraction, the roof on the ground and the foundation pointing at the sky, an upside-down car parked on the inverted driveway, bright blue sky, people taking photos in front of it, daytime, photorealistic, wide street view.",
    setup:
      "Hi Priya, I'm walking through town and you won't believe what I'm looking at — a whole house built completely upside down.",
    description:
      "The roof is sitting flat on the ground, the foundation is pointing straight up at the sky, and even the windows and front door are upside down. On the driveway, there's a car parked upside down too, as if it crashed from above, and it's painted in bright colours with a crowd of people taking photos. What makes it really unusual is that you can go inside, where the furniture is also mounted on the ceiling. I think it's a tourist attraction.",
    question:
      "It's such a fun attraction — do you want to come and visit it with me this weekend? Let me know what you think!",
  },
  {
    accent: "text-amber2",
    scenario: "Scenario 4 · An unusual sight at the harbour",
    prompt:
      "You're at the waterfront and see something unexpected floating in the harbour. Call a family member, describe what you see, and ask if they've heard anything about it.",
    imagePrompt:
      "A giant inflatable yellow rubber duck, several storeys tall, floating in a city harbour next to the waterfront, dwarfing the boats around it, crowds of people gathered on the pier taking photos, blue sky with light clouds, daytime, photorealistic, wide-angle shot.",
    setup:
      "Hi Dad, I'm at the harbour and you won't believe what I'm looking at — a giant rubber duck floating in the water, several storeys tall.",
    description:
      "It's a bright yellow inflatable duck, the kind you'd see in a bathtub, except it completely dwarfs the boats around it, and it's bobbing gently in the middle of the harbour right next to the pier. There's a huge crowd gathered along the waterfront, and almost everyone is taking photos. What makes it really unusual is how cheerful and surreal it looks against the city skyline behind it. I think it might be some kind of public art installation.",
    question:
      "Have you heard anything about it on the news? I'm curious how long it'll be here — let me know what you think!",
  },
  {
    accent: "text-rose2",
    scenario: "Scenario 5 · A strange vending machine",
    prompt:
      "You spot an unusual vending machine in a mall. Call a friend, describe what it sells and how it looks, and ask if they think you should try it.",
    imagePrompt:
      "An unusual vending machine in a shopping mall that dispenses live potted plants instead of snacks, glass front showing rows of small green succulents and flowers in pots, glowing interior lights, a digital touchscreen on the front, modern mall corridor in the background, photorealistic, eye-level shot.",
    setup:
      "Hi Sam, I'm at the mall and you won't believe what I'm looking at — a vending machine that sells live plants instead of snacks.",
    description:
      "It's about the size of a normal drinks machine, with a big glass front, and inside there are rows and rows of little potted plants — mostly succulents and small flowers — all lit up with soft glowing lights. On the front there's a digital touchscreen where you pick the plant you want, pay, and it drops down gently like a chocolate bar would. What makes it really unusual is that the plants seem perfectly healthy inside a machine. I think it's a clever modern twist on vending.",
    question:
      "Do you think I should try it and grab one for my desk? Let me know what you think — I'm tempted to buy a little cactus right now!",
  },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "In 30 seconds, lock in an overview + the order you'll describe things.",
    body: "Decide your one-line overview and a path through the image (left → right, or biggest feature → smallest). Note the closing question so you don't forget it.",
  },
  {
    category: "delivery",
    color: "text-sapphire",
    title: "Talk like it's a real phone call.",
    body: "Greet the person, sound a little excited about how unusual it is, and speak naturally. The task is framed as calling a friend or family member — so make it sound conversational.",
  },
  {
    category: "language",
    color: "text-emerald2",
    title: "Lead with an overview before the details.",
    body: '"Basically, it\'s a bed shaped like a sleeping person" gives the listener a frame. Then fill in the details so they can build the picture in their mind.',
  },
  {
    category: "language",
    color: "text-amber2",
    title: "Use spatial language and present continuous.",
    body: '"On the left, a man is moving a chess piece; behind him, a referee is standing." Prepositions of place plus present continuous make the scene vivid and easy to follow.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: 'Swap "baby English" for precise adjectives.',
    body: 'Replace "big," "nice," and "strange" with "enormous," "striking," and "bizarre." Precise, vivid vocabulary is what pushes you into the 9+ band.',
  },
  {
    category: "mistakes",
    color: "text-rose2",
    title: "Don't forget the closing question.",
    body: "Every prompt ends with a specific request — should I buy it, would you try it, have you seen this. Skipping it is one of the biggest score-killers on this task.",
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: "Don't just list objects randomly.",
    body: '"There\'s a duck. There\'s a boat. There are people." is hard to picture. Connect details spatially: "In the middle of the harbour, a giant duck is floating, dwarfing the boats around it."',
  },
  {
    category: "delivery",
    color: "text-gold",
    title: "Point out — and guess at — what's unusual.",
    body: 'Name the odd part clearly ("what makes it strange is...") and offer a quick guess at why it exists. This shows engagement and fills your 60 seconds naturally.',
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];
