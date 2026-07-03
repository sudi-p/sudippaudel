// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview and Template" },
  { id: "structure", label: "Sample" },
  { id: "scenarios", label: "Scenario Types" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
];

export const SCORE_CRITERIA = [
  {
    label: "Vocabulary",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: "Range and precision of words used to describe what you see. Adjectives and spatial language are critical.",
  },
  {
    label: "Coherence",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Logical flow from one detail to the next — not jumping around. A clear spatial path (foreground → background).",
  },
  {
    label: "Fluency",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Smooth delivery with minimal hesitation or filler sounds. Natural rhythm without rushing.",
  },
  {
    label: "Accuracy",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Grammar, tense consistency (present continuous for actions), and sentence variety.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Setting (10s)",
    desc: "What's the overall scene? Indoor/outdoor, time of day, mood or atmosphere?",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Details (35s)",
    desc: "Scan the image: foreground → middle → background. What people, objects, colors, actions?",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Impression (15s)",
    desc: "What do you think or feel about the scene? Is it peaceful, chaotic, beautiful, ordinary?",
  },
];

// ─── THE DETAIL TRAP ───
// The #1 reason test-takers run out of time on Task 3: the image holds more
// detail than 60 seconds can cover, so they "zoom in" on one area, over-describe
// it, and never reach the conclusion. This "Pan, don't zoom" method keeps the
// response balanced. It is shown in the Overview and reused as a body reminder
// inside every scenario's Perfect Response Example.
export const BODY_METHOD = {
  problem:
    "A Task 3 picture always has more detail than 60 seconds can hold. The most common mistake is to zoom in on one corner, describe it exhaustively, and run out of time before reaching the conclusion — which costs marks in both Coherence and Task Fulfillment.",
  fixLabel: 'The fix — "Pan, don\'t zoom"',
  steps: [
    {
      title: "Split the image into 3 zones",
      desc: "Foreground, middle, and background. Give each zone roughly 10–12 seconds so no single area swallows all your time.",
    },
    {
      title: "2–3 things per zone, then move on",
      desc: "Name the main people or objects and one action or colour — then deliberately pan to the next zone. Never describe a single object in depth.",
    },
    {
      title: "Leave minor details out on purpose",
      desc: "You are not expected to mention everything. Breadth sounds organised; a deep-dive sounds stuck. Pick only what stands out most.",
    },
    {
      title: "At ~45 seconds, stop and conclude",
      desc: "The moment you reach the 45-second mark, move to your impression — even if part of the image is left undescribed. Always land the ending.",
    },
  ],
};

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Vocabulary:
        'Precise descriptive language. Uses spatial language ("foreground," "nestled") naturally. Adjectives are varied and appropriate ("vibrant" vs. "bright").',
      Coherence:
        "Description follows a logical path (e.g., foreground → background). Transitions are smooth and natural.",
      Fluency:
        "Speaks smoothly with very few pauses. Rhythm is natural, not rushed or halting.",
      Accuracy:
        "Present continuous tense for actions is consistent. Grammar is accurate; sentences are varied.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Vocabulary:
        "Good range of descriptive words. Spatial language is used but may not always be flawless. Some repetition of adjectives.",
      Coherence:
        'Description is organized but transitions may be basic ("and then," "also"). Generally easy to follow.',
      Fluency:
        "Mostly fluent with occasional pauses to think. Some hesitation but not excessive.",
      Accuracy:
        "Present continuous is mostly correct. Some minor grammatical errors that don't disrupt meaning.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Vocabulary:
        'Basic descriptive words. May struggle with spatial language. Heavy repetition ("there is," "I see").',
      Coherence:
        "Description may jump around or lack clear organization. Difficult to follow the spatial layout.",
      Fluency:
        "Noticeable pauses and hesitations. May lose track mid-description.",
      Accuracy:
        "Errors in present continuous or other tenses. Some sentences are unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Vocabulary:
        "Very limited range. Little to no spatial language. Heavy repetition or inaccuracy.",
      Coherence:
        "Description is disjointed or very brief. No clear logical flow.",
      Fluency:
        "Frequent hesitations, filler words, or long silences. Choppy delivery.",
      Accuracy: "Frequent grammatical errors. Meaning is sometimes unclear.",
    },
  },
];

// ─── SCENARIO TYPES PANE ───
// Each scenario renders as an accordion with: key vocabulary grid, opening +
// closing template cards, and a "Perfect Response Example" (Setting/Details/
// Impression). Per-category colours are stored alongside the content.
export const SCENARIOS = [
  {
    id: "sc-serene",
    icon: "🌿",
    iconClass: "bg-sapphire text-white",
    title: "Serene / Peaceful",
    subtitle: "beaches, parks, countryside, sunsets, forests, lakes",
    vocabHeading: "text-sapphire",
    openingBox: "bg-sapphire-light",
    openingLabel: "text-sapphire-dark",
    atmosphere: [
      {
        word: "Tranquil",
        meaning: "free from anxiety or stress; very quiet",
      },
      {
        word: "Pristine",
        meaning: "in its original, unspoiled condition",
      },
      {
        word: "Golden hour",
        meaning: "the soft, warm light just after sunrise or before sunset",
      },
    ],
    mood: [
      {
        word: "Serene",
        meaning: "calm and peaceful, with no disturbance",
      },
      {
        word: "Idyllic",
        meaning: "extremely happy, peaceful, or picturesque",
      },
      {
        word: "Placid",
        meaning: "not easily upset; calm on the surface",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "A serene lake surrounded by tall pine trees, captured at sunrise."],
        ["What's the overall mood?", "Quiet, still, and misty — deeply peaceful."],
        ["One striking detail?", "A soft, golden light is filtering through the trees."],
      ],
      combined:
        '"This image shows a serene lake at sunrise, surrounded by tall pine trees. The atmosphere is quiet and misty, with a soft, golden light filtering through the trees."',
      tip: "name the location type + mood adjective + lighting in one sentence.",
    },
    closing: {
      questions: [
        ["React emotionally:", "It feels incredibly peaceful and idyllic."],
        ["Make an observation:", "The scene captures a rare moment of complete stillness in nature."],
        ["Connect to a larger idea:", "It looks like a remote retreat far from city noise — the perfect place to unwind and recharge."],
      ],
      combined:
        '"Overall, this is an incredibly peaceful and idyllic scene. It looks like a remote retreat far from city noise, and I think it would be the perfect place to sit quietly, enjoy nature, and recharge."',
      tip: 'use "stillness," "escape," or "unwind" to match the mood.',
    },
    example: {
      imageDesc:
        "A misty lake at sunrise, pine trees on the banks, a wooden rowboat moored at a dock.",
      sceneReflects:
        "It reflects a still, untouched moment in nature — early morning before anyone is around. The point of the scene is calm, isolation, and the soft transition from night to day.",
      seeing: [
        "A wooden dock and a moored rowboat",
        "The still, mirror-like lake surface",
        "Pine trees along the banks",
        "Thick morning mist",
        "Muted blue, green, and grey tones",
      ],
      ignoring: [
        "The wood grain and rope on the dock",
        "Counting or naming individual trees",
        "Any birds or reeds at the edges",
        "The exact shape of the rowboat",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground",
          sentence:
            "In the foreground, a weathered wooden dock stretches out over the still water, and a small rowboat is moored alongside it.",
          why: "Zone 1 — I name the two nearest, most dominant objects (dock + boat) and stop. I don't describe the wood grain or rope, which would eat my time.",
        },
        {
          zone: "Middle",
          sentence:
            "The surface of the lake is completely undisturbed, reflecting the mist and the pine trees on its banks.",
          why: "Zone 2 — one clear observation about the water plus its reflection, which links foreground to background without lingering.",
        },
        {
          zone: "Background",
          sentence:
            "Moving toward the background, the trees become denser and gradually disappear into a thick morning mist.",
          why: "Zone 3 — a single 'moving toward the background' transition and the furthest element (the mist). I resist counting trees.",
        },
        {
          zone: "Colour wrap",
          sentence:
            "The colours are muted — soft blues, greens, and greys — giving the entire scene a dreamy, almost painterly quality.",
          why: "One colour sentence covering the whole image reinforces the mood and signals I'm ready to conclude at ~45s.",
        },
      ],
      setting:
        '"This image shows a serene lake at sunrise, surrounded by tall pine trees. The atmosphere is quiet and misty, with a soft, golden light filtering through the trees."',
      details:
        '"In the foreground, a weathered wooden dock stretches out over the still water, and a small rowboat is moored alongside it. The surface of the lake is completely undisturbed, reflecting the mist and the pine trees on its banks. Moving toward the background, the trees become denser and gradually disappear into a thick morning mist. The colours are muted — soft blues, greens, and greys — giving the entire scene a dreamy, almost painterly quality."',
      impression:
        '"Overall, this is an incredibly peaceful and idyllic scene. It looks like a remote retreat far from city noise, and I think it would be the perfect place to sit quietly, enjoy nature, and recharge."',
    },
  },
  {
    id: "sc-bustling",
    icon: "🏙️",
    iconClass: "bg-gold text-white",
    title: "Bustling / Lively",
    subtitle: "city streets, markets, transport hubs, shopping districts",
    vocabHeading: "text-gold",
    openingBox: "bg-gold/10",
    openingLabel: "text-amber2-dark",
    atmosphere: [
      {
        word: "Bustling",
        meaning: "full of energetic, noisy activity",
      },
      {
        word: "Congested",
        meaning: "overcrowded, especially with traffic",
      },
      {
        word: "Hustle and bustle",
        meaning: "the noisy, busy activity of a crowded place",
      },
    ],
    mood: [
      {
        word: "Vibrant",
        meaning: "full of energy and enthusiasm",
      },
      {
        word: "Animated",
        meaning: "full of life, excitement, and activity",
      },
      {
        word: "Frenetic",
        meaning: "fast and energetic in a slightly chaotic way",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "A vibrant city intersection, taken at midday."],
        ["What's the overall mood?", "Full of energy and movement — fast-paced and dynamic."],
        ["One striking detail?", "Crowds are crossing in every direction while traffic builds up on the road."],
      ],
      combined:
        '"This image shows a vibrant, bustling city intersection, taken at midday. The scene is full of energy and movement, and the overall atmosphere feels fast-paced and dynamic."',
      tip: 'use "movement" and "energy" — they signal the busy category immediately.',
    },
    closing: {
      questions: [
        ["React emotionally:", "The frenetic energy feels exciting and alive."],
        ["Make an observation:", "It perfectly captures the hustle and bustle of a busy city centre."],
        ["Connect to a larger idea:", "It's a vivid snapshot of everyday urban life, where people are always on the move."],
      ],
      combined:
        '"Overall, this is a vivid snapshot of urban life. The scene perfectly captures the hustle and bustle of a busy city centre, and despite the frenetic energy, there is something exciting and alive about it."',
      tip: '"hustle and bustle" and "dynamic" are high-score phrases for this category.',
    },
    example: {
      imageDesc:
        "A busy downtown intersection at midday — pedestrians crossing, cyclists, taxis, storefronts, tall office buildings.",
      sceneReflects:
        "It reflects the relentless energy of a modern city at its busiest hour — commerce, traffic, and people all colliding at one intersection. The point of the scene is pace and density.",
      seeing: [
        "Crowds of pedestrians crossing",
        "A cyclist weaving through the crowd",
        "Yellow taxis and delivery trucks",
        "Storefronts and café awnings",
        "Tall glass office buildings",
      ],
      ignoring: [
        "Individual faces, outfits, or bags",
        "The names of specific shops",
        "Reading signs or billboards",
        "The make or model of the taxis",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground",
          sentence:
            "In the foreground, a large group of pedestrians is crossing the street in multiple directions, many of them carrying bags or looking at their phones. A cyclist is weaving carefully through the crowd.",
          why: "Zone 1 — the dominant action (the crowd) plus one supporting detail (the cyclist). Present continuous keeps it lively, and I describe the crowd as a group, not person by person.",
        },
        {
          zone: "Middle (left)",
          sentence:
            "To the left, yellow taxis and delivery trucks are lined up, creating congestion on the road.",
          why: "Zone 2 — one spatial anchor ('to the left') and the traffic, the other half of a busy intersection. Two things, then move on.",
        },
        {
          zone: "Sides",
          sentence:
            "On either side of the street, colourful storefronts and café awnings are visible.",
          why: "A quick sweep of the edges for context — named collectively, not shop by shop.",
        },
        {
          zone: "Background",
          sentence:
            "In the background, towering glass office buildings rise above the scene, reflecting the midday light.",
          why: "Zone 3 — the furthest, tallest element closes the spatial scan and cues the conclusion.",
        },
      ],
      setting:
        '"This image shows a vibrant, bustling city intersection, taken at midday. The scene is full of energy and movement, and the overall atmosphere feels fast-paced and dynamic."',
      details:
        '"In the foreground, a large group of pedestrians is crossing the street in multiple directions, many of them carrying bags or looking at their phones. A cyclist is weaving carefully through the crowd. To the left, yellow taxis and delivery trucks are lined up, creating congestion on the road. On either side of the street, colourful storefronts and café awnings are visible. In the background, towering glass office buildings rise above the scene, reflecting the midday light."',
      impression:
        '"Overall, this is a vivid snapshot of urban life. The scene perfectly captures the hustle and bustle of a busy city centre, and despite the frenetic energy, there is something exciting and alive about it."',
    },
  },
  {
    id: "sc-livid",
    icon: "⚡",
    iconClass: "bg-rose2 text-white",
    title: "Livid / Tense / Intense",
    subtitle: "protests, arguments, sports competitions, storms, accidents",
    vocabHeading: "text-rose2",
    openingBox: "bg-rose2-light",
    openingLabel: "text-rose2-dark",
    atmosphere: [
      {
        word: "Charged atmosphere",
        meaning: "an environment full of tension or strong emotion",
      },
      {
        word: "Ominous",
        meaning: "giving the impression something bad is about to happen",
      },
      {
        word: "High-stakes",
        meaning: "involving serious risks or important outcomes",
      },
    ],
    mood: [
      {
        word: "Intense",
        meaning: "having or showing strong feelings or great activity",
      },
      {
        word: "Agitated",
        meaning: "troubled or nervous; moving in a disturbed manner",
      },
      {
        word: "Gripping",
        meaning: "so exciting or dramatic that it holds your attention",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "An intense moment during a football match in a large, packed stadium."],
        ["What's the overall mood?", "Charged, tense, and highly competitive."],
        ["One striking detail?", "Two players are battling fiercely for the ball, their expressions focused and determined."],
      ],
      combined:
        '"This image captures an intense moment in a football match taking place in a large, packed stadium. The overall atmosphere looks charged and highly competitive."',
      tip: '"charged atmosphere" or "significant moment" signals you have read the emotional tone.',
    },
    closing: {
      questions: [
        ["React emotionally:", "You can almost feel the pressure and adrenaline through the image."],
        ["Make an observation:", "It's a gripping, high-stakes moment that conveys the raw intensity of competitive sport."],
        ["Connect to a larger idea:", "It perfectly captures why football captivates so many people around the world."],
      ],
      combined:
        '"Overall, this is a gripping, high-stakes moment that conveys the raw intensity of competitive sport. You can almost feel the pressure and adrenaline through the image, and it perfectly captures why football captivates so many people around the world."',
      tip: '"raw emotion" and "lasting impression" show sophisticated engagement with the scene.',
    },
    example: {
      imageDesc:
        "Two soccer players competing fiercely for the ball in a packed stadium.",
      sceneReflects:
        "It reflects a decisive, high-pressure instant in competitive sport — raw physical effort watched by a huge crowd. The point of the scene is tension, rivalry, and adrenaline.",
      seeing: [
        "Two players contesting the ball",
        "Their fierce expressions and body language",
        "Contrasting team kits",
        "A packed stadium of spectators",
        "Floodlights and dramatic lighting",
      ],
      ignoring: [
        "The score or which teams are playing",
        "Individual fans in the crowd",
        "Advertising boards around the pitch",
        "The exact colours of each kit",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground (the subject)",
          sentence:
            "In the foreground, two players are competing aggressively for the ball. One is lunging forward with great determination, while the other is bracing to hold his position — both their expressions are fierce and focused.",
          why: "Zone 1 is the emotional core, so it earns the most detail: the action plus their expressions, because that is what conveys the tense mood.",
        },
        {
          zone: "Foreground detail",
          sentence: "They are wearing contrasting team kits.",
          why: "One extra identifying detail, then I stop — I don't name teams or colours I can't be sure of.",
        },
        {
          zone: "Background",
          sentence:
            "In the background, the stadium is filled with thousands of spectators, many of whom appear to be on their feet. The stands are a blur of colour, suggesting the crowd is in full voice.",
          why: "Zone 2 — the crowd is described as a mass ('a blur of colour'), not person by person. Breadth over depth.",
        },
        {
          zone: "Lighting wrap",
          sentence:
            "The floodlights overhead create sharp, dramatic lighting across the pitch.",
          why: "A single atmosphere sentence reinforces the drama and signals the wrap-up at ~45s.",
        },
      ],
      setting:
        '"This image captures an intense moment in a football match taking place in a large, packed stadium. The overall atmosphere looks charged and highly competitive."',
      details:
        '"In the foreground, two players are competing aggressively for the ball. One is lunging forward with great determination, while the other is bracing to hold his position — both their expressions are fierce and focused. They are wearing contrasting team kits. In the background, the stadium is filled with thousands of spectators, many of whom appear to be on their feet. The stands are a blur of colour, suggesting the crowd is in full voice. The floodlights overhead create sharp, dramatic lighting across the pitch."',
      impression:
        '"Overall, this is a gripping, high-stakes moment that conveys the raw intensity of competitive sport. You can almost feel the pressure and adrenaline through the image, and it perfectly captures why football captivates so many people around the world."',
    },
  },
  {
    id: "sc-festive",
    icon: "🎉",
    iconClass: "bg-emerald2 text-white",
    title: "Joyful / Festive",
    subtitle: "celebrations, festivals, weddings, street parades, parties",
    vocabHeading: "text-emerald2",
    openingBox: "bg-emerald2-light",
    openingLabel: "text-emerald2-dark",
    atmosphere: [
      {
        word: "Festive",
        meaning: "relating to a festival or celebration; joyful",
      },
      {
        word: "Revelry",
        meaning: "lively and noisy celebrations",
      },
      {
        word: "Colourful",
        meaning: "having many bright, vivid colours; lively and interesting",
      },
    ],
    mood: [
      {
        word: "Exuberant",
        meaning: "filled with lively energy and excitement",
      },
      {
        word: "Jubilant",
        meaning: "feeling or expressing great happiness",
      },
      {
        word: "Radiant",
        meaning: "sending out light; clearly very happy",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "A lively street carnival taking place during the day."],
        ["What's the overall mood?", "Exuberant and festive — full of joy and excitement."],
        ["One striking detail?", "Colour, music, and movement are everywhere, with confetti falling over the dancers."],
      ],
      combined:
        '"This image shows a vibrant, joyful street carnival taking place during the day. The atmosphere is exuberant and festive, with colour, music, and movement everywhere."',
      tip: '"special occasion" or "communal celebration" instantly frames the festive mood.',
    },
    closing: {
      questions: [
        ["React emotionally:", "The image radiates pure joy and happiness."],
        ["Make an observation:", "It perfectly captures the spirit of a cultural carnival."],
        ["Connect to a larger idea:", "It's the kind of event that unites communities — I would love to experience it first-hand."],
      ],
      combined:
        '"Overall, this image radiates pure joy and communal celebration. It perfectly captures the spirit of a cultural carnival — the kind of event that unites communities and fills people with pride and happiness. I would love to experience it first-hand."',
      tip: '"community spirit" and "uplifting" are high-band words for festive scenes.',
    },
    example: {
      imageDesc:
        "A street carnival — dancers in elaborate costumes, confetti, cheering crowd, food stalls.",
      sceneReflects:
        "It reflects a communal celebration in full swing — culture, music, and colour spilling into the street. The point of the scene is shared joy and spectacle.",
      seeing: [
        "Costumed dancers performing",
        "Confetti falling over the street",
        "A jubilant crowd cheering and filming",
        "Food stalls and vendors",
        "More performers and floats approaching",
      ],
      ignoring: [
        "The detail of each individual costume",
        "Specific people in the crowd",
        "What the food stalls are selling",
        "Which festival or culture it is",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground",
          sentence:
            "In the foreground, dancers are wearing elaborate, brightly-coloured costumes adorned with feathers and sequins, and they are performing with great energy and flair. Confetti is falling all around them.",
          why: "Zone 1 — the performers are the focus, so costume + action + confetti in two sentences, then I move on rather than describing one costume fully.",
        },
        {
          zone: "Middle",
          sentence:
            "The crowd lining the street is jubilant — many people are cheering, clapping, and taking photos. To the right, a row of food stalls is visible, with vendors serving food and drinks to spectators.",
          why: "Zone 2 — the crowd as a group plus one spatial anchor ('to the right') for the stalls. Two elements, no individuals.",
        },
        {
          zone: "Background",
          sentence:
            "In the background, more performers and floats are approaching, adding to the spectacle.",
          why: "Zone 3 — the furthest element hints the event continues, closing the scan.",
        },
        {
          zone: "Colour wrap",
          sentence:
            "The colours are vivid and joyful — deep reds, electric blues, and bright golds dominate the scene.",
          why: "One colour sentence ties the mood together and cues the conclusion.",
        },
      ],
      setting:
        '"This image shows a vibrant, joyful street carnival taking place during the day. The atmosphere is exuberant and festive, with colour, music, and movement everywhere."',
      details:
        '"In the foreground, dancers are wearing elaborate, brightly-coloured costumes adorned with feathers and sequins, and they are performing with great energy and flair. Confetti is falling all around them. The crowd lining the street is jubilant — many people are cheering, clapping, and taking photos. To the right, a row of food stalls is visible, with vendors serving food and drinks to spectators. In the background, more performers and floats are approaching, adding to the spectacle. The colours are vivid and joyful — deep reds, electric blues, and bright golds dominate the scene."',
      impression:
        '"Overall, this image radiates pure joy and communal celebration. It perfectly captures the spirit of a cultural carnival — the kind of event that unites communities and fills people with pride and happiness. I would love to experience it first-hand."',
    },
  },
  {
    id: "sc-cosy",
    icon: "☕",
    iconClass: "bg-violet2 text-white",
    title: "Cosy / Intimate",
    subtitle: "cafés, living rooms, libraries, small gatherings, offices",
    vocabHeading: "text-violet2",
    openingBox: "bg-violet2-light",
    openingLabel: "text-violet2-dark",
    atmosphere: [
      {
        word: "Ambient",
        meaning:
          "relating to the surrounding environment; soft background quality",
      },
      {
        word: "Muted tones",
        meaning: "soft, gentle colours that are not too bright",
      },
      {
        word: "Homely",
        meaning: "simple but comfortable; creating a sense of home",
      },
    ],
    mood: [
      {
        word: "Intimate",
        meaning: "having a warm, cosy quality; suggesting close friendship",
      },
      {
        word: "Inviting",
        meaning: "making you want to enter or take part; attractive",
      },
      {
        word: "Snug",
        meaning: "comfortable, warm, and sheltered",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "A cosy bookshop café interior, taken indoors."],
        ["What's the overall mood?", "Warm, inviting, and intimate."],
        ["One striking detail?", "The lighting is warm and amber-toned throughout the space."],
      ],
      combined:
        '"This image shows a beautifully cosy bookshop café, taken indoors. The lighting is warm and amber-toned, giving the entire space an inviting and intimate feel."',
      tip: '"warm and ambient lighting" is the perfect detail-starter for indoor cosy scenes.',
    },
    closing: {
      questions: [
        ["React emotionally:", "It feels like a charming, comforting retreat from the outside world."],
        ["Make an observation:", "The books, warm lighting, and smell of coffee make it perfect for slowing down."],
        ["Connect to a larger idea:", "It's exactly the kind of place I would love to spend a quiet, rainy afternoon."],
      ],
      combined:
        '"Overall, this space looks like a charming retreat from the outside world. The combination of books, warm lighting, and the smell of coffee would make it the perfect place to slow down and enjoy a quiet afternoon — exactly the kind of place I would love to spend a rainy day."',
      tip: '"slow down" and "quiet moments" contrast well with Bustling — they signal scene-awareness.',
    },
    example: {
      imageDesc:
        "A small bookshop café — wooden shelves of books, warm pendant lights, customers reading, barista at the counter.",
      sceneReflects:
        "It reflects a quiet, personal refuge — a place designed for slowing down. The point of the scene is warmth, comfort, and gentle focus.",
      seeing: [
        "Wooden tables with lamps and coffee",
        "Customers reading and working",
        "Floor-to-ceiling bookshelves",
        "Warm amber pendant lighting",
        "A barista at the counter",
      ],
      ignoring: [
        "The titles of the books",
        "What each customer is reading or typing",
        "The café's brand or menu items",
        "The precise style of the furniture",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground",
          sentence:
            "In the foreground, a couple of wooden tables are arranged with small lamps and cups of coffee on them. Customers are sitting quietly — one person is engrossed in a thick novel, while another is working on a laptop.",
          why: "Zone 1 — the nearest tables plus what two people are doing, which is enough to show the calm mood without describing every customer.",
        },
        {
          zone: "Sides / middle",
          sentence:
            "The walls on both sides are lined with floor-to-ceiling wooden bookshelves, tastefully cluttered with books of all sizes. Hanging pendant lights cast a soft, amber glow across the room.",
          why: "Zone 2 — the defining feature (books) and the lighting. I describe the shelves as a whole, not the titles.",
        },
        {
          zone: "Background",
          sentence:
            "In the background, a barista is preparing drinks behind a compact counter, and a chalkboard menu is visible on the wall above.",
          why: "Zone 3 — the furthest point (the counter) completes the depth and signals the wrap-up at ~45s.",
        },
      ],
      setting:
        '"This image shows a beautifully cosy bookshop café, taken indoors. The lighting is warm and amber-toned, giving the entire space an inviting and intimate feel."',
      details:
        '"In the foreground, a couple of wooden tables are arranged with small lamps and cups of coffee on them. Customers are sitting quietly — one person is engrossed in a thick novel, while another is working on a laptop. The walls on both sides are lined with floor-to-ceiling wooden bookshelves, tastefully cluttered with books of all sizes. Hanging pendant lights cast a soft, amber glow across the room. In the background, a barista is preparing drinks behind a compact counter, and a chalkboard menu is visible on the wall above."',
      impression:
        '"Overall, this space looks like a charming retreat from the outside world. The combination of books, warm lighting, and the smell of coffee would make it the perfect place to slow down and enjoy a quiet afternoon — exactly the kind of place I would love to spend a rainy day."',
    },
  },
  {
    id: "sc-awe",
    icon: "🏔️",
    iconClass: "bg-ink text-gold",
    title: "Awe-Inspiring / Dramatic",
    subtitle: "mountain ranges, dramatic skies, grand architecture, waterfalls",
    vocabHeading: "text-ink",
    openingBox: "bg-fog border border-mist",
    openingLabel: "text-slate",
    atmosphere: [
      {
        word: "Vast",
        meaning: "of very great extent or quantity; immense",
      },
      {
        word: "Panoramic",
        meaning: "with a wide view that covers a large area",
      },
      {
        word: "Ethereal",
        meaning: "extremely delicate and light; heavenly",
      },
    ],
    mood: [
      {
        word: "Majestic",
        meaning: "impressively beautiful, elaborate, or dignified",
      },
      {
        word: "Breathtaking",
        meaning: "astonishing or awe-inspiring in quality or beauty",
      },
      {
        word: "Imposing",
        meaning: "grand and impressive; commanding respect",
      },
    ],
    opening: {
      questions: [
        ["Where and when?", "A vast canyon landscape, captured at sunset."],
        ["What's the overall mood?", "Dramatic and grand, with a powerful sense of natural beauty."],
        ["One striking detail?", "Layered red rock walls glow beneath a sky of orange, violet, and gold."],
      ],
      combined:
        '"This image captures a breathtaking canyon landscape at sunset. The scene is vast and dramatic, immediately conveying a powerful sense of natural grandeur and raw beauty."',
      tip: 'use "scale" — it signals that you recognise the grandeur before diving into details.',
    },
    closing: {
      questions: [
        ["React emotionally:", "It's a truly awe-inspiring scene that leaves you speechless."],
        ["Make an observation:", "It makes you acutely aware of the immense age and power of nature."],
        ["Connect to a larger idea:", "The sheer scale, combined with the ethereal sunset light, makes you feel small yet fortunate to witness it."],
      ],
      combined:
        '"Overall, this is a truly awe-inspiring scene that makes you acutely aware of the immense age and power of nature. The sheer scale of the canyon, combined with the ethereal sunset light, creates an image that I think would leave anyone speechless."',
      tip: '"awe-inspiring" and "natural magnificence" are high-band phrases that work perfectly here.',
    },
    example: {
      imageDesc:
        "A dramatic canyon at sunset — layered red rock walls, a winding river below, vast sky with deep orange and purple clouds.",
      sceneReflects:
        "It reflects the overwhelming scale and age of the natural world — something far bigger than any person. The point of the scene is grandeur, stillness, and perspective.",
      seeing: [
        "Layered red and orange canyon walls",
        "Textured, dramatic rock formations",
        "A winding river far below",
        "A spectacular sunset sky",
        "Bands of orange, violet, and gold",
      ],
      ignoring: [
        "Individual rocks or ridges",
        "Technical geology terms",
        "Any small vegetation on the walls",
        "The precise time of day",
      ],
      bodyBreakdown: [
        {
          zone: "Foreground",
          sentence:
            "In the foreground, the rugged canyon walls are layered in deep shades of red, orange, and burnt sienna — the result of millions of years of erosion. The rock formations are textured and dramatic, with sharp ridges and smooth curves carved by the elements.",
          why: "Zone 1 — the nearest, biggest feature (the walls) with colour and texture. I describe them as a whole rather than fixating on one rock.",
        },
        {
          zone: "Middle",
          sentence:
            "Far below in the valley, a narrow river is winding its way through the canyon floor, looking almost like a ribbon of silver from this height.",
          why: "Zone 2 — one vivid element (the river) with a simile that conveys the scale, then I move up.",
        },
        {
          zone: "Background (sky)",
          sentence:
            "Above, the sky is spectacular — sweeping bands of deep orange, violet, and gold are spread across the horizon as the sun disappears.",
          why: "Zone 3 — the sky is the furthest layer; naming the sunset colours reinforces the dramatic mood.",
        },
        {
          zone: "Synthesis wrap",
          sentence:
            "The colours in the sky and on the rocks complement each other beautifully.",
          why: "A one-line synthesis linking the zones together, cueing the conclusion at ~45s.",
        },
      ],
      setting:
        '"This image captures a breathtaking canyon landscape at sunset. The scene is vast and dramatic, immediately conveying a powerful sense of natural grandeur and raw beauty."',
      details:
        '"In the foreground, the rugged canyon walls are layered in deep shades of red, orange, and burnt sienna — the result of millions of years of erosion. The rock formations are textured and dramatic, with sharp ridges and smooth curves carved by the elements. Far below in the valley, a narrow river is winding its way through the canyon floor, looking almost like a ribbon of silver from this height. Above, the sky is spectacular — sweeping bands of deep orange, violet, and gold are spread across the horizon as the sun disappears. The colours in the sky and on the rocks complement each other beautifully."',
      impression:
        '"Overall, this is a truly awe-inspiring scene that makes you acutely aware of the immense age and power of nature. The sheer scale of the canyon, combined with the ethereal sunset light, creates an image that I think would leave anyone speechless."',
    },
  },
];

// ─── MY TEMPLATE PANE ───
// The three core parts (Setting / Details / Impression). Each part has bullet
// points, an optional "techniques" callout, and a set of template/scenario
// blocks rendered inside a fog panel.
export const TEMPLATE_PARTS = [
  {
    id: "struct-1",
    n: "1",
    circle: "bg-sapphire",
    title: "Setting",
    meta: "~10 seconds",
    intro:
      "Establish the overall scene quickly — location, time, mood, and general impression. This orients the listener.",
    bullets: [
      [
        "Where and when?",
        '"This is an outdoor market during the day" or "a cozy café interior in the evening."',
      ],
      [
        "What's the overall mood?",
        '"It looks busy and lively" or "very peaceful and serene."',
      ],
      [
        "One striking detail.",
        'A splash of color, weather, or atmosphere. "The sky is clear and bright."',
      ],
    ],
    panelLabel: "My template (used in every sample below)",
    panelItems: [
      '"This image shows a [scene], taken during [the day / the evening]. The atmosphere looks [mood], and [one striking detail stands out]."',
    ],
  },
  {
    id: "struct-2",
    n: "2",
    circle: "bg-emerald2",
    title: "Details",
    meta: "~35 seconds · the core of your description",
    intro:
      "The heart of your response. Scan systematically (foreground → background, or left → right). Describe people, objects, colors, and actions.",
    techniques: [
      'Use present continuous tense: "is walking," "are playing," "are selling"',
      'Organize spatially: "In the foreground," "In the middle," "In the background"',
      'Be specific: Not just "a person" but "a young man wearing a blue shirt is sitting"',
      'Connect details with transitions: "Meanwhile," "Additionally," "Next to that," "Beside the..."',
    ],
    panelLabel: "My template (used in every sample below)",
    panelItems: [
      '"In the foreground, [the nearest objects and people, and what they are doing]. In the middle, [what is happening, plus the main colours]. In the background, [what is further back]."',
    ],
  },
  {
    id: "struct-3",
    n: "3",
    circle: "bg-amber2",
    title: "Impression / Conclusion",
    meta: "~15 seconds",
    intro:
      "Wrap up with your personal take or interpretation. What does this scene make you think or feel? Show opinion and confidence.",
    bullets: [
      [
        "React emotionally:",
        '"It looks peaceful and calming" or "The scene seems vibrant and energetic."',
      ],
      [
        "Make an observation:",
        '"Overall, it captures a typical day in this community" or "This reflects the local culture well."',
      ],
      [
        "Connect to larger idea:",
        '"I would enjoy visiting a place like this" or "It reminds me of similar scenes I\'ve experienced."',
      ],
      [
        "Be specific, not generic:",
        'Instead of "It\'s nice," say "I appreciate the bright colors and the sense of community."',
      ],
    ],
    panelLabel: "My template (used in every sample below)",
    panelItems: [
      '"Overall, [what the scene captures]. It looks like [your interpretation], and I would [personal reaction]."',
    ],
  },
];

export const SPATIAL_TOOLKIT = [
  {
    title: "Position & Location:",
    items: [
      "In the foreground / In the background",
      "In the center / On the left / On the right",
      "In the top left corner / In the bottom right",
      "In front of / Behind / Beside / Next to",
      "Surrounding / Along / Across",
    ],
  },
  {
    title: "Action & Movement:",
    items: [
      "Is walking / Are playing / Is sitting",
      "Are gathered / Are standing / Are relaxing",
      "Is carrying / Are holding / Is wearing",
      "Is enjoying / Are interacting / Is watching",
    ],
  },
  {
    title: "Color & Texture:",
    items: [
      "Vibrant / Muted / Bright / Dull",
      "Colorful / Monochrome / Golden / Earthy",
      "Soft / Rough / Smooth / Textured",
    ],
  },
  {
    title: "Transitions & Connections:",
    items: [
      "Meanwhile / In addition to / Additionally",
      "To the left of that / Beyond / Further back",
      "Scattered throughout / Dispersed across",
      "Interestingly / Notably / It's worth mentioning",
    ],
  },
];

// Fixed template signposts highlighted inside each sample answer.
export const TEMPLATE_PHRASES = [
  "This image shows a",
  "taken during",
  "The atmosphere looks",
  "In the foreground,",
  "In the middle,",
  "In the background,",
  "Overall,",
  "It looks like",
  "I would",
  ", and",
];

export const SAMPLES = [
  {
    scenario: "Scenario 1 · Bustling outdoor market",
    scenarioColor: "text-gold",
    imagePrompt:
      '"A vibrant outdoor street market during the day, colourful fruit and vegetable stalls overflowing with fresh produce, vendors in traditional clothing arranging goods, customers browsing and carrying shopping bags, tall buildings in the background, bright natural sunlight, busy and energetic atmosphere, photorealistic, wide-angle shot."',
    setting:
      '"This image shows a vibrant outdoor market scene, taken during the day. The atmosphere looks bustling and lively, and the colours immediately stand out."',
    details:
      '"In the foreground, there are colourful fruit and vegetable stalls overflowing with fresh produce, and the vendors are wearing traditional clothing as they arrange their items. In the middle, customers are browsing and selecting goods, and some are carrying shopping bags, with vibrant blues, reds, yellows, and greens everywhere. In the background, more stalls are visible, and there are tall buildings rising above the crowd."',
    impression:
      '"Overall, the scene captures the energy and vibrancy of a bustling marketplace. It looks like a place full of life and cultural richness, and I would really enjoy visiting somewhere like this."',
  },
  {
    scenario: "Scenario 2 · Peaceful beach sunset",
    scenarioColor: "text-sapphire",
    imagePrompt:
      '"A serene beach at sunset, golden sand in the foreground with a few people walking along the shore, calm blue ocean reflecting warm orange and pink sunset colours, palm trees and small beach huts in the background, scattered clouds in a glowing sky, peaceful and relaxing mood, photorealistic, soft warm lighting."',
    setting:
      '"This image shows a quiet, serene beach at sunset, taken during the evening. The atmosphere looks warm and peaceful, and the sky is glowing in shades of orange and pink."',
    details:
      '"In the foreground, there is golden sand where a few people are walking slowly along the shore. In the middle, the water is a calm blue colour, and it reflects the warm light of the setting sun, while some palm trees sway gently to the left. In the background, I can see small beach huts and a few scattered clouds in the sky, and everything looks soft and still."',
    impression:
      '"Overall, this is a very peaceful, serene moment. The combination of the sunset colours and the relaxed atmosphere would make it an ideal place to unwind after a long day, and I would love to spend an evening here."',
  },
  {
    scenario: "Scenario 3 · Cozy café interior",
    scenarioColor: "text-emerald2",
    imagePrompt:
      '"A cozy café interior with warm lighting, several small wooden tables where customers are drinking coffee, reading books, and working on laptops, decorative paintings on the walls, baristas preparing drinks behind a counter, large windows letting in natural light, calm and inviting atmosphere, photorealistic, soft warm tones."',
    setting:
      '"This image shows a cozy café interior, taken during the day. The atmosphere looks warm and welcoming, and the lighting is soft."',
    details:
      '"In the foreground, there are several small tables where customers are sitting and enjoying beverages or food, with chairs in different colours and styles. In the middle, more seating areas are visible to the left and right, with some people reading books and others working on laptops, and the walls are decorated with paintings and warm lighting fixtures. In the background, staff members are preparing drinks behind the counter, and natural light is coming through the large windows."',
    impression:
      '"Overall, the café looks like a cozy retreat where people can relax and socialise. It looks like a pleasant place to spend an afternoon, and I would love to settle in here with a good book."',
  },
  {
    scenario: "Scenario 4 · Mountain landscape",
    scenarioColor: "text-amber2",
    imagePrompt:
      '"A scenic mountain landscape, green pine trees and rocks in the foreground, a wide valley with a winding river in the mid-ground, tall snow-capped peaks in the background, clear blue sky with a few white clouds, crisp natural daylight, vast and peaceful atmosphere, photorealistic, wide panoramic shot."',
    setting:
      '"This image shows a breathtaking mountain landscape, taken during the day. The atmosphere looks vast, fresh, and very peaceful."',
    details:
      '"In the foreground, there are tall green pine trees and some large rocks scattered across the ground. In the middle, a wide valley stretches out, and I can see a winding river running through it. In the background, there are tall, snow-capped peaks rising into a clear blue sky with a few white clouds, and the colours range from deep greens to soft greys and bright whites, which gives the scene a real sense of scale."',
    impression:
      '"Overall, the landscape looks calm and majestic. It reminds me of peaceful hiking trips, and I would love to escape here from the noise of the city."',
  },
  {
    scenario: "Scenario 5 · Street festival",
    scenarioColor: "text-rose2",
    imagePrompt:
      '"A lively street festival or cultural celebration, colourful decorations and banners hanging across the street, large crowds of people celebrating, performers in traditional costumes, food stalls along the sides, bright colours and festive lights, joyful and energetic atmosphere, photorealistic, daytime, wide street view."',
    setting:
      '"This image shows a lively street festival or cultural celebration, taken during the day. The atmosphere looks joyful and energetic, and the whole street is full of colour."',
    details:
      '"In the foreground, large crowds of people are celebrating, and many of them are smiling and taking photos, with colourful decorations and banners hanging across the street. In the middle, performers in traditional costumes are dancing, while food stalls line both sides of the road. In the background, I can see festive lights and even more people gathered together, and the bright colours really stand out against the busy scene."',
    impression:
      '"Overall, the scene captures the excitement and community spirit of a cultural festival. It looks like the kind of event where people of all ages come together, and I would love to experience it in person."',
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "In 30 seconds, scan the image quickly.",
    body: "Don't overthink. Quickly note: foreground objects, key colors, any people/activity, overall mood. Then speak.",
  },
  {
    category: "prep",
    color: "text-sapphire",
    title: "Plan a path: foreground → background.",
    body: "Mentally trace how you'll describe the image left-to-right or near-to-far. This prevents jumping around.",
  },
  {
    category: "delivery",
    color: "text-emerald2",
    title: "Speak at a natural pace — don't rush.",
    body: "You have 60 seconds. If you finish early, add more details or repeat observations. Silence at the end is worse than a bit of repetition.",
  },
  {
    category: "delivery",
    color: "text-amber2",
    title: "Use pauses strategically.",
    body: 'Pause between ideas: "In the foreground, I see... [pause] ...and in the background..." This creates structure and sounds more fluent than rushing.',
  },
  {
    category: "language",
    color: "text-rose2",
    title: "Use present continuous for actions.",
    body: 'Not "A woman walks." Say "A woman is walking." This is automatic in high-scoring answers for scene descriptions.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: 'Replace "I see" with spatial language.',
    body: 'Don\'t say "I see trees, I see people, I see water." Instead: "In the foreground, there are trees. In the background, people are..." Much more fluent.',
  },
  {
    category: "mistakes",
    color: "text-gold",
    title: "Don't describe colors alone.",
    body: '"There are red and blue" is vague. Better: "I can see red umbrellas and blue chairs" — connect colors to objects.',
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: "Avoid listing without connection.",
    body: 'Bad: "There\'s a person. There\'s a building. There\'s a car." Good: "In the foreground, a person is standing next to a car. Behind them, a building is visible."',
  },
  {
    category: "mistakes",
    color: "text-emerald2",
    title: 'Don\'t apologize or say "I think maybe..."',
    body: 'Be confident: "There are children playing" is better than "There might be some kids, I think, possibly playing." Confidence scores higher.',
  },
];

export const KEY_INSIGHT =
  "A 9–10 speaker describes the scene with natural pacing and good vocabulary. They use some spatial language, their descriptions are organized (even if not perfectly), and their grammar is mostly accurate. They are not perfect, and that's fine.";
