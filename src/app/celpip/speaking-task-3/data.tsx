// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "My Template" },
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
      Coherence: "Description is disjointed or very brief. No clear logical flow.",
      Fluency:
        "Frequent hesitations, filler words, or long silences. Choppy delivery.",
      Accuracy:
        "Frequent grammatical errors. Meaning is sometimes unclear.",
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
    vocab: [
      {
        word: "Serene",
        meaning: "calm and peaceful, with no disturbance",
        example: "The lake looks completely serene in the early morning light.",
      },
      {
        word: "Tranquil",
        meaning: "free from anxiety or stress; very quiet",
        example: "The countryside scene has a tranquil, unhurried atmosphere.",
      },
      {
        word: "Idyllic",
        meaning: "extremely happy, peaceful, or picturesque",
        example: "It is an idyllic rural landscape with rolling green hills.",
      },
      {
        word: "Placid",
        meaning: "not easily upset; calm on the surface",
        example: "The placid water reflects the mountains perfectly.",
      },
      {
        word: "Lush",
        meaning: "rich, abundant green vegetation",
        example: "Lush grass and dense trees cover the hillside.",
      },
      {
        word: "Pristine",
        meaning: "in its original, unspoiled condition",
        example: "The beach looks pristine, with no litter in sight.",
      },
      {
        word: "Golden hour",
        meaning: "the soft, warm light just after sunrise or before sunset",
        example: "Everything is bathed in a golden-hour glow.",
      },
      {
        word: "Undisturbed",
        meaning: "not interfered with; completely still",
        example: "The surface of the pond appears completely undisturbed.",
      },
    ],
    opening: {
      text: '"This image shows a breathtakingly serene [beach / park / countryside], captured during [time of day]. The atmosphere is calm and tranquil, and the colours are soft and soothing."',
      tip: "name the location type + mood adjective + lighting in one sentence.",
    },
    closing: {
      text: '"Overall, the scene captures a rare moment of stillness and natural beauty. It looks like the kind of place where you could truly unwind and escape from the pressures of daily life."',
      tip: 'use "stillness," "escape," or "unwind" to match the mood.',
    },
    example: {
      imageDesc:
        "A misty lake at sunrise, pine trees on the banks, a wooden rowboat moored at a dock.",
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
    vocab: [
      {
        word: "Bustling",
        meaning: "full of energetic, noisy activity",
        example: "The street is bustling with shoppers and street vendors.",
      },
      {
        word: "Vibrant",
        meaning: "full of energy and enthusiasm",
        example: "The market has a vibrant, colourful atmosphere.",
      },
      {
        word: "Teeming with",
        meaning: "be full of people or activity",
        example: "The sidewalk is teeming with pedestrians and cyclists.",
      },
      {
        word: "Congested",
        meaning: "overcrowded, especially with traffic",
        example: "The road in the background looks congested with vehicles.",
      },
      {
        word: "Animated",
        meaning: "full of life, excitement, and activity",
        example: "The crowd looks animated and engaged.",
      },
      {
        word: "Frenetic",
        meaning: "fast and energetic in a slightly chaotic way",
        example: "The frenetic pace of the street is immediately noticeable.",
      },
      {
        word: "Towering",
        meaning: "extremely tall, dominating the skyline",
        example: "Towering skyscrapers rise above the busy street below.",
      },
      {
        word: "Hustle and bustle",
        meaning: "the noisy, busy activity of a crowded place",
        example: "The image perfectly captures the hustle and bustle of city life.",
      },
    ],
    opening: {
      text: '"This image shows a vibrant, bustling [city street / market / transit hub], taken during the day. The scene is full of energy and movement, and there is a clear sense of activity everywhere."',
      tip: 'use "movement" and "energy" — they signal the busy category immediately.',
    },
    closing: {
      text: '"Overall, the scene perfectly captures the hustle and bustle of urban life. It looks like a dynamic, fast-paced environment where people are always on the move, and I find the energy quite exciting."',
      tip: '"hustle and bustle" and "dynamic" are high-score phrases for this category.',
    },
    example: {
      imageDesc:
        "A busy downtown intersection at midday — pedestrians crossing, cyclists, taxis, storefronts, tall office buildings.",
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
    vocab: [
      {
        word: "Intense",
        meaning: "having or showing strong feelings or great activity",
        example: "The athletes' expressions are intense, showing total focus.",
      },
      {
        word: "Confrontational",
        meaning: "involving or causing conflict",
        example: "The body language between the two figures looks confrontational.",
      },
      {
        word: "Charged atmosphere",
        meaning: "an environment full of tension or strong emotion",
        example: "There is a charged atmosphere on the stadium floor.",
      },
      {
        word: "Agitated",
        meaning: "troubled or nervous; moving in a disturbed manner",
        example: "The crowd appears agitated, with several people gesturing loudly.",
      },
      {
        word: "Ominous",
        meaning: "giving the impression something bad is about to happen",
        example: "The dark clouds in the background look ominous.",
      },
      {
        word: "Gripping",
        meaning: "so exciting or dramatic that it holds your attention",
        example: "It looks like a gripping moment in the competition.",
      },
      {
        word: "Furious",
        meaning: "extremely angry; moving with great force",
        example: "The waves in the background are furious and powerful.",
      },
      {
        word: "High-stakes",
        meaning: "involving serious risks or important outcomes",
        example: "This appears to be a high-stakes, decisive moment.",
      },
    ],
    opening: {
      text: '"This image captures a tense and intense [moment / scene], and the overall atmosphere feels charged with emotion. It is immediately clear that something significant is happening."',
      tip: '"charged atmosphere" or "significant moment" signals you have read the emotional tone.',
    },
    closing: {
      text: '"Overall, this is clearly a high-stakes, gripping moment. The image conveys a great deal of tension and raw emotion, and I think it would leave a lasting impression on anyone who sees it."',
      tip: '"raw emotion" and "lasting impression" show sophisticated engagement with the scene.',
    },
    example: {
      imageDesc:
        "Two soccer players competing fiercely for the ball in a packed stadium.",
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
    vocab: [
      {
        word: "Exuberant",
        meaning: "filled with lively energy and excitement",
        example: "The crowd looks exuberant, cheering and dancing together.",
      },
      {
        word: "Jubilant",
        meaning: "feeling or expressing great happiness",
        example: "The participants are jubilant, throwing confetti in the air.",
      },
      {
        word: "Festive",
        meaning: "relating to a festival or celebration; joyful",
        example: "The whole area has a festive feel, with lights and decorations.",
      },
      {
        word: "Revelry",
        meaning: "lively and noisy celebrations",
        example: "The streets are full of revelry and laughter.",
      },
      {
        word: "Spirited",
        meaning: "full of energy, enthusiasm, and determination",
        example: "The dancers are giving a spirited, energetic performance.",
      },
      {
        word: "Communal",
        meaning: "shared by or belonging to a community",
        example: "It is a wonderful communal celebration.",
      },
      {
        word: "Radiant",
        meaning: "sending out light; clearly very happy",
        example: "The faces in the crowd are radiant with happiness.",
      },
      {
        word: "Colourful",
        meaning: "having many bright, vivid colours; lively and interesting",
        example: "Colourful banners and streamers are hanging across the street.",
      },
    ],
    opening: {
      text: '"This image shows a joyful, festive [celebration / street parade / festival], and the overall atmosphere is colourful, energetic, and full of happiness. People are clearly enjoying a special occasion."',
      tip: '"special occasion" or "communal celebration" instantly frames the festive mood.',
    },
    closing: {
      text: '"Overall, the scene radiates joy and community spirit. It is the kind of occasion that brings people together, and the happiness visible on every face makes this image genuinely uplifting to look at."',
      tip: '"community spirit" and "uplifting" are high-band words for festive scenes.',
    },
    example: {
      imageDesc:
        "A street carnival — dancers in elaborate costumes, confetti, cheering crowd, food stalls.",
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
    vocab: [
      {
        word: "Intimate",
        meaning: "having a warm, cosy quality; suggesting close friendship",
        example: "The small café has an intimate, welcoming atmosphere.",
      },
      {
        word: "Inviting",
        meaning: "making you want to enter or take part; attractive",
        example: "The warm lighting makes the room look very inviting.",
      },
      {
        word: "Snug",
        meaning: "comfortable, warm, and sheltered",
        example: "The reading corner looks snug and perfectly arranged.",
      },
      {
        word: "Muted tones",
        meaning: "soft, gentle colours that are not too bright",
        example: "Muted tones of beige and brown give the space a calming feel.",
      },
      {
        word: "Ambient",
        meaning: "relating to the surrounding environment; soft background quality",
        example: "The ambient lighting creates a relaxed, comfortable mood.",
      },
      {
        word: "Homely",
        meaning: "simple but comfortable; creating a sense of home",
        example: "The kitchen has a warm, homely quality.",
      },
      {
        word: "Engrossed",
        meaning: "having all one's attention absorbed in something",
        example: "Several customers are engrossed in their books or laptops.",
      },
      {
        word: "Tastefully cluttered",
        meaning: "full of items but in a charming, personal way",
        example: "The shelves are tastefully cluttered with books and plants.",
      },
    ],
    opening: {
      text: '"This image shows a cosy, intimate [café / living room / library] interior. The lighting is warm and ambient, and the overall atmosphere feels inviting and comfortable — a space designed to help people relax."',
      tip: '"warm and ambient lighting" is the perfect detail-starter for indoor cosy scenes.',
    },
    closing: {
      text: '"Overall, the space looks like the kind of place where people come to slow down, recharge, and enjoy quiet moments. I would find it very easy to spend a long, relaxing afternoon here."',
      tip: '"slow down" and "quiet moments" contrast well with Bustling — they signal scene-awareness.',
    },
    example: {
      imageDesc:
        "A small bookshop café — wooden shelves of books, warm pendant lights, customers reading, barista at the counter.",
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
    vocab: [
      {
        word: "Majestic",
        meaning: "impressively beautiful, elaborate, or dignified",
        example: "The snow-capped peaks look majestic against the clear sky.",
      },
      {
        word: "Breathtaking",
        meaning: "astonishing or awe-inspiring in quality or beauty",
        example: "The view from the cliff is absolutely breathtaking.",
      },
      {
        word: "Imposing",
        meaning: "grand and impressive; commanding respect",
        example: "The cathedral's imposing façade dominates the city square.",
      },
      {
        word: "Vast",
        meaning: "of very great extent or quantity; immense",
        example: "The vast open landscape stretches as far as the eye can see.",
      },
      {
        word: "Rugged",
        meaning: "having a strongly built, rough appearance",
        example: "The rugged mountain terrain looks wild and untamed.",
      },
      {
        word: "Cascading",
        meaning: "falling or flowing fast down a steep slope",
        example: "A cascading waterfall rushes down the rocky cliff face.",
      },
      {
        word: "Panoramic",
        meaning: "with a wide view that covers a large area",
        example: "The image appears to be taken from a panoramic viewpoint.",
      },
      {
        word: "Ethereal",
        meaning: "extremely delicate and light; heavenly",
        example: "The mist around the peaks gives the scene an ethereal quality.",
      },
    ],
    opening: {
      text: '"This image shows a breathtaking, dramatic [mountain / canyon / waterfall / skyline] scene. The scale is immediately impressive, and the overall atmosphere conveys a powerful sense of natural grandeur."',
      tip: 'use "scale" — it signals that you recognise the grandeur before diving into details.',
    },
    closing: {
      text: '"Overall, the scene is awe-inspiring in its scale and beauty. Standing in front of a view like this would make you feel very small, yet incredibly fortunate to witness such natural magnificence."',
      tip: '"awe-inspiring" and "natural magnificence" are high-band phrases that work perfectly here.',
    },
    example: {
      imageDesc:
        "A dramatic canyon at sunset — layered red rock walls, a winding river below, vast sky with deep orange and purple clouds.",
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
      ["Where and when?", '"This is an outdoor market during the day" or "a cozy café interior in the evening."'],
      ["What's the overall mood?", '"It looks busy and lively" or "very peaceful and serene."'],
      ["One striking detail.", 'A splash of color, weather, or atmosphere. "The sky is clear and bright."'],
    ],
    panelLabel: "Opening templates",
    panelItems: [
      '"This is a vibrant outdoor market scene, taken during the day. The atmosphere looks bustling and lively."',
      '"The image shows a quiet, serene beach at sunset. The colors are very warm and peaceful."',
      '"I can see a busy city street with tall buildings. It looks like the middle of the afternoon, and there\'s a lot of activity."',
      '"This photograph captures a cozy café interior. The lighting is warm, and it appears to be a relaxing space."',
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
    scenarioBlocks: [
      {
        label: "Scenario 1: Market or Bazaar",
        text: '"In the foreground, there are colorful fruit and vegetable stalls overflowing with fresh produce. Vendors are wearing traditional clothing and are actively arranging items. In the middle section, customers are browsing and selecting goods, with some carrying bags. I can see vibrant blues, reds, yellows, and greens. In the background, more stalls are visible, and there are tall buildings. The overall atmosphere is energetic and crowded."',
      },
      {
        label: "Scenario 2: Beach Scene",
        text: '"The foreground shows golden sand where several children are building sandcastles, and their parents are watching nearby. The water in the middle is a beautiful blue color, and a few swimmers are enjoying the ocean. To the left, colorful beach umbrellas are providing shade for sunbathing adults. In the background, I can see palm trees and some beach bars or huts. The sky is mostly clear with a few white clouds."',
      },
      {
        label: "Scenario 3: Park or Playground",
        text: '"In the foreground, children are playing on various playground equipment — some are climbing, others are sliding. A few parents are sitting on benches nearby, supervising. To the left, teenagers are playing frisbee on an open grass area. In the background, there are tall green trees providing shade. Adults and children are walking along paths throughout the park. Colorful clothing contrasts against the green grass and trees."',
      },
      {
        label: "Scenario 4: Café or Restaurant Interior",
        text: '"The foreground shows several small tables with customers sitting and enjoying beverages or food. I can see chairs in different colors and styles. To the left and right, more seating areas are visible with people reading books or working on laptops. The walls are decorated with paintings and warm lighting fixtures. Behind the counter, staff members are preparing drinks. The overall atmosphere is calm and inviting, with natural light coming through large windows."',
      },
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
      ["React emotionally:", '"It looks peaceful and calming" or "The scene seems vibrant and energetic."'],
      ["Make an observation:", '"Overall, it captures a typical day in this community" or "This reflects the local culture well."'],
      ["Connect to larger idea:", '"I would enjoy visiting a place like this" or "It reminds me of similar scenes I\'ve experienced."'],
      ["Be specific, not generic:", 'Instead of "It\'s nice," say "I appreciate the bright colors and the sense of community."'],
    ],
    panelLabel: "Closing templates",
    panelItems: [
      '"Overall, the scene captures the energy and vibrancy of a bustling marketplace. It looks like a place full of life and cultural richness."',
      '"This is a very peaceful, serene moment. The combination of the sunset colors and the relaxed atmosphere would make it an ideal place to unwind."',
      '"The park appears to be a welcoming community space where people of all ages gather. It seems like the kind of place where many families would enjoy spending their free time."',
      '"The café looks like a cozy retreat where people can relax and socialize. I think it would be a pleasant place to spend an afternoon."',
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
      '"This image shows a quiet, serene beach at sunset, taken in the evening. The atmosphere looks warm and peaceful, and the sky is glowing in shades of orange and pink."',
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
