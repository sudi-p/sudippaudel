// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "My Template" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
  { id: "scenarios", label: "Scenario Types" },
];

export const SCORE_CRITERIA = [
  {
    label: "Logic",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: "Predictions are reasonable and well-supported by evidence or reasoning.",
  },
  {
    label: "Vocabulary",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "Use of conditional, predictive, and speculative language (will, might, could, likely).",
  },
  {
    label: "Fluency",
    badge: "bg-amber2-light text-amber2-dark",
    text: "Smooth delivery without excessive hesitation or filler words.",
  },
  {
    label: "Accuracy",
    badge: "bg-rose2-light text-rose2-dark",
    text: "Proper use of future tense, conditionals, and grammatically correct sentences.",
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Setup (10s)",
    desc: "Acknowledge the scenario briefly. Show you understood it.",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Predictions (35s)",
    desc: "Present 2–3 specific, logical predictions. Use conditional language.",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Reasoning (15s)",
    desc: "Explain why these predictions make sense. Link to real-world factors.",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Logic:
        "Predictions are insightful, well-reasoned, and clearly supported. Connects to real-world factors naturally.",
      Vocabulary:
        'Uses sophisticated conditional and predictive structures. Range is impressive ("will likely," "might well," "I\'d argue that").',
      Fluency:
        "Speaks naturally with clear organization. Minimal hesitation; pacing is conversational.",
      Accuracy:
        "Grammar is nearly always correct. Future tense and conditionals are used precisely.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Logic:
        "Predictions are logical and generally well-supported. Reasoning is clear.",
      Vocabulary:
        "Uses conditional and predictive language consistently. Some variety in phrasing but may repeat structures.",
      Fluency:
        "Mostly fluent with occasional pauses. Some hesitation but overall organized and natural.",
      Accuracy:
        "Grammar is mostly accurate. Minor errors in conditionals or tense don't disrupt meaning.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Logic:
        "Predictions are basic but sometimes vague. Reasoning may be weak or incomplete.",
      Vocabulary:
        "Limited range of conditional language. Repetitive. May not use conditional structures correctly.",
      Fluency:
        "Noticeable pauses and hesitations. Some filler sounds. May lose track of thought.",
      Accuracy:
        "Several grammatical errors. Tense errors are common. Meaning is usually clear but sometimes unclear.",
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Logic:
        "Predictions are unclear, illogical, or barely present. Little or no reasoning provided.",
      Vocabulary:
        "Very limited. Little to no use of conditional or predictive language.",
      Fluency:
        "Frequent hesitations or long silences. Choppy delivery. Difficult to follow.",
      Accuracy:
        "Many grammatical errors. Meaning is sometimes unclear. Tense control is weak.",
    },
  },
];

export const SCENARIO_TYPES = [
  {
    n: "1",
    badge: "bg-rose2",
    accent: "text-rose2",
    title: "Busy / Bustling",
    examples:
      "e.g. busy market, crowded street, rush-hour transit, airport terminal, shopping mall",
    vocab: [
      {
        word: "bustling",
        meaning: "full of energetic activity",
        example:
          "The market is bustling with shoppers hunting for bargains.",
      },
      {
        word: "congested",
        meaning: "overcrowded, difficult to move through",
        example:
          "The street is congested with vehicles and pedestrians.",
      },
      {
        word: "hectic",
        meaning: "very busy and slightly chaotic",
        example:
          "The airport terminal looks hectic during the holiday rush.",
      },
      {
        word: "throng",
        meaning: "a densely packed crowd",
        example: "A throng of shoppers is moving through the main aisle.",
      },
      {
        word: "vendor",
        meaning: "a seller of goods, often at a stall",
        example: "The vendors are calling out to attract more customers.",
      },
      {
        word: "disperse",
        meaning: "to spread out or move away in different directions",
        example: "The crowd will likely disperse once the market closes.",
      },
      {
        word: "surge",
        meaning: "a sudden strong increase (of people or activity)",
        example: "A surge of commuters will pour through the gates at 5 p.m.",
      },
      {
        word: "wind down",
        meaning: "to gradually reduce in activity",
        example: "By evening, the market will start to wind down.",
      },
    ],
    opening: {
      hint: "Anchor the current energy level. Use present continuous + a sensory detail. Signal there is even more activity coming.",
      example:
        "Right now, the market is absolutely bustling — vendors are calling out to passing shoppers and every stall is packed with customers.",
    },
    closing: {
      hint: 'Reference a natural wind-down trigger (closing time, darkness, fatigue). Use "overall" or "in conclusion" to signal the wrap-up.',
      example:
        "Overall, the scene will look quite different in an hour — the crowd will have dispersed and the vendors will be packing up, because busy places always wind down once the day's peak is over.",
    },
    responseLabel: "Busy Market",
    recap:
      "Right now, the market is absolutely bustling — vendors are calling out to passing shoppers, and every stall is packed with customers hunting for bargains.",
    predictions:
      "Looking ahead, I predict the crowd will surge even larger in the next twenty minutes because it is the peak evening shopping hour. The vendors will probably start lowering their prices to move the last of their stock before closing time. Meanwhile, some early shoppers who have already filled their bags will begin to disperse toward the exit. The busiest stalls — fruit and street food — will likely sell out first, which might cause some frustration among latecomers.",
    reasoning:
      "Overall, the scene will look quite different in an hour. The hectic energy will fade as the vendors pack up and the throng of shoppers moves on, because busy markets always wind down once daylight disappears and people head home for dinner.",
  },
  {
    n: "2",
    badge: "bg-sapphire",
    accent: "text-sapphire",
    title: "Serene / Peaceful",
    examples:
      "e.g. beach at sunset, quiet park, lakeside, countryside, library reading room",
    vocab: [
      {
        word: "serene",
        meaning: "calm and untroubled",
        example:
          "The beach has a serene quality as the sun dips below the horizon.",
      },
      {
        word: "tranquil",
        meaning: "free from disturbance; peaceful",
        example:
          "The tranquil park will become noisier once school lets out.",
      },
      {
        word: "linger",
        meaning: "to stay somewhere longer than expected",
        example:
          "Some visitors will linger on the shore to watch the stars appear.",
      },
      {
        word: "dwindle",
        meaning: "to gradually become smaller in number",
        example: "The crowd will dwindle as evening temperatures drop.",
      },
      {
        word: "unwind",
        meaning: "to relax after stress",
        example: "People are clearly here to unwind after a long day.",
      },
      {
        word: "placid",
        meaning: "not easily upset; calm (of water or atmosphere)",
        example: "The placid lake will reflect the last light of dusk.",
      },
      {
        word: "retreat",
        meaning: "to go back or withdraw to a quieter place",
        example: "Families will retreat to their homes once it gets dark.",
      },
      {
        word: "hushed",
        meaning: "very quiet; almost silent",
        example:
          "The atmosphere will become hushed once the final visitors leave.",
      },
    ],
    opening: {
      hint: "Set the calm mood with one sensory detail. Signal that this peaceful state is about to shift (cooler air, fading light, end of the day).",
      example:
        "The beach is serene right now — the sun is low on the horizon and a few families are quietly enjoying the golden light on the water.",
    },
    closing: {
      hint: "Predict that the tranquility deepens (or ends). Reference nightfall, temperature, or human routine as the natural cause.",
      example:
        "In conclusion, the scene will become even more hushed as night falls — the last visitors will retreat home and the only sounds will be the waves, because peaceful places become truly still once the day is done.",
    },
    responseLabel: "Peaceful Beach Sunset",
    recap:
      "The beach is serene right now — the sun is low on the horizon and a few families are quietly enjoying the golden light reflecting off the calm water.",
    predictions:
      "I predict that as the sun sets lower, the temperature will drop noticeably and most visitors will start gathering their belongings. The children who are still swimming will probably come out of the water soon because it will become too dark to swim safely. Some couples might linger a little longer to watch the stars appear, while families with younger children will retreat home first. Eventually, the beach will feel almost completely deserted and perfectly hushed.",
    reasoning:
      "In conclusion, the serene mood will deepen into total stillness as nightfall arrives — the crowd will dwindle and the placid water will reflect only moonlight, because peaceful places like this naturally empty once daylight fades.",
  },
  {
    n: "3",
    badge: "bg-amber2",
    accent: "text-amber2",
    title: "Livid / Tense / Conflict",
    examples:
      "e.g. argument in office, protest or demonstration, road-rage scene, heated team meeting, overcrowded waiting room",
    vocab: [
      {
        word: "livid",
        meaning: "furiously angry",
        example:
          "The manager looks livid as she reviews the incorrect report.",
      },
      {
        word: "escalate",
        meaning: "to increase in intensity or seriousness",
        example:
          "The argument will likely escalate if no one intervenes soon.",
      },
      {
        word: "tension",
        meaning: "a feeling of anxiety or hostility between people",
        example:
          "The tension in the room is palpable — nobody is making eye contact.",
      },
      {
        word: "intervene",
        meaning: "to step in to prevent a conflict from worsening",
        example: "A supervisor will probably intervene to calm the situation.",
      },
      {
        word: "mediate",
        meaning: "to help two sides reach an agreement",
        example:
          "HR will be called in to mediate between the two employees.",
      },
      {
        word: "defuse",
        meaning: "to reduce the danger or tension in a situation",
        example:
          "A calm bystander might step forward to defuse the argument.",
      },
      {
        word: "confrontational",
        meaning: "tending to deal with problems aggressively",
        example:
          "The confrontational tone will likely push others to take sides.",
      },
      {
        word: "resolve",
        meaning: "to find a solution to a problem or conflict",
        example:
          "Both parties will need to compromise to resolve this dispute.",
      },
    ],
    opening: {
      hint: "Name the conflict clearly and note body language cues (crossed arms, raised voices, averted eyes). This shows you interpreted the image well.",
      example:
        "Right now, the situation in the office looks tense — two colleagues are clearly in a heated disagreement and the rest of the team is watching nervously.",
    },
    closing: {
      hint: "Predict resolution or escalation and give a human-behaviour reason. Avoid extremes — a measured, realistic prediction scores higher.",
      example:
        "Overall, I believe the tension will gradually defuse once a senior colleague steps in, because most workplace conflicts resolve when a neutral third party helps both sides feel heard.",
    },
    responseLabel: "Tense Office Argument",
    recap:
      "Right now, the atmosphere in the office is extremely tense — two colleagues are in a heated confrontation and their body language suggests the argument is getting worse, not better.",
    predictions:
      "I predict that in the next few minutes, the tension will escalate further before it improves. Other team members will likely feel uncomfortable and try to distance themselves from the confrontation. A senior manager or HR representative will probably intervene to mediate, asking both parties to take a break and discuss the issue privately. Once separated, the two colleagues will likely calm down and begin to see the other's perspective more clearly.",
    reasoning:
      "Overall, I believe the situation will be resolved within the hour — most workplace conflicts defuse once a neutral party steps in, because people are generally more reasonable when they are no longer in a confrontational, public setting.",
  },
  {
    n: "4",
    badge: "bg-emerald2",
    accent: "text-emerald2",
    title: "Festive / Celebratory",
    examples:
      "e.g. street festival, birthday party, sports victory, concert, graduation ceremony",
    vocab: [
      {
        word: "exuberant",
        meaning: "full of energy, excitement, and cheerfulness",
        example: "The crowd is exuberant as the band takes the stage.",
      },
      {
        word: "revelry",
        meaning: "lively and noisy celebrations",
        example:
          "The revelry on the street will likely continue well into the night.",
      },
      {
        word: "culminate",
        meaning: "to reach the highest or most exciting point",
        example:
          "The parade will culminate in a spectacular fireworks display.",
      },
      {
        word: "vibrant",
        meaning: "full of energy and enthusiasm",
        example:
          "The festival has a vibrant atmosphere with music and colour everywhere.",
      },
      {
        word: "merriment",
        meaning: "cheerful and lively enjoyment",
        example: "The merriment in the hall will grow as more guests arrive.",
      },
      {
        word: "taper off",
        meaning: "to gradually decrease in energy or number",
        example:
          "The celebrations will taper off once families with children head home.",
      },
      {
        word: "spectators",
        meaning: "people who watch an event without participating",
        example:
          "Spectators lining the route will cheer as the floats pass by.",
      },
      {
        word: "atmosphere",
        meaning: "the overall mood or feeling of a place",
        example:
          "The atmosphere will become electric once the headliner performs.",
      },
    ],
    opening: {
      hint: "Match the energy of the scene — use lively, positive language. Name what is happening right now and hint that the best is yet to come.",
      example:
        "At this moment, the street festival is in full swing — the atmosphere is vibrant, performers are dancing, and the crowd is absolutely exuberant.",
    },
    closing: {
      hint: "Predict a natural peak and then a gradual tapering. Reference time of day or crowd size as the cause — this shows logical thinking.",
      example:
        "In conclusion, the revelry will peak around sunset and then gradually taper off as families head home, because celebrations always follow this natural arc from energy to exhaustion.",
    },
    responseLabel: "Street Festival",
    recap:
      "At this moment, the street festival is in full swing — the atmosphere is vibrant, performers are dancing in traditional costumes, and the crowd is completely exuberant.",
    predictions:
      "I predict that as the evening progresses, the festival will become even more crowded because people arriving after work will join the merriment. The festive lights will be switched on once it gets darker, which will make the atmosphere feel even more electric. Food vendors will likely start running low on popular items, and some stalls will probably sell out entirely. Later in the night, families with young children will begin to leave, but the revelry among younger adults will likely continue.",
    reasoning:
      "In conclusion, the celebration will culminate in a spectacular evening performance before gradually tapering off, because festivals naturally build toward a night-time peak and then wind down as the crowd disperses and energy fades.",
  },
  {
    n: "5",
    badge: "bg-violet2",
    accent: "text-violet2",
    title: "Professional / Workplace",
    examples:
      "e.g. office meeting, job interview, construction site, hospital, classroom, cozy café (work setting)",
    vocab: [
      {
        word: "productivity",
        meaning: "the efficiency with which work is done",
        example:
          "Productivity in the office will drop once the lunch hour approaches.",
      },
      {
        word: "deadline",
        meaning: "a time by which work must be completed",
        example:
          "The team looks stressed, suggesting a deadline is approaching.",
      },
      {
        word: "collaborate",
        meaning: "to work jointly with others on a shared task",
        example:
          "The two departments will likely collaborate to finish the project.",
      },
      {
        word: "wrap up",
        meaning: "to bring something to a close or conclusion",
        example:
          "The manager will wrap up the meeting with a summary of action points.",
      },
      {
        word: "adjourn",
        meaning: "to formally suspend or end a meeting",
        example:
          "The board will adjourn once all agenda items have been covered.",
      },
      {
        word: "resume",
        meaning: "to begin again after a pause",
        example: "Workers will resume their tasks once the break is over.",
      },
      {
        word: "delegate",
        meaning: "to assign tasks to someone else",
        example:
          "The supervisor will delegate the remaining work to junior staff.",
      },
      {
        word: "proficient",
        meaning: "competent and skilled in a particular area",
        example:
          "The proficient staff will handle the increased workload without difficulty.",
      },
    ],
    opening: {
      hint: "Identify the work activity and the mood (focused, stressed, collaborative). Use professional vocabulary to show register awareness.",
      example:
        "Currently, the team appears to be in an important meeting — everyone looks focused and the atmosphere is professional, suggesting that a key deadline or decision is near.",
    },
    closing: {
      hint: "Connect your predictions to a logical workplace outcome (meeting ends, work resumes, team disperses). Show you understand professional routines.",
      example:
        "Overall, the meeting will likely wrap up within the hour, with the team delegating tasks and returning to their individual work — because productive teams move quickly from discussion to action.",
    },
    responseLabel: "Office Meeting",
    recap:
      "Right now, the team is in an important meeting — everyone appears focused and engaged, and the atmosphere suggests a significant deadline or decision is being discussed.",
    predictions:
      "I predict that in the next fifteen minutes, the manager will wrap up the discussion and begin assigning specific action items to team members. Some colleagues will probably step out to make calls or send urgent emails based on what was decided. The more junior staff will likely return to their desks to resume their individual tasks, while senior members might stay behind to continue the conversation. Productivity in the office will likely increase right after the meeting, because people tend to feel motivated once they have clear direction.",
    reasoning:
      "Overall, the meeting will adjourn within the hour and the team will shift from collaborative planning back to individual work — because proficient teams know how to move quickly from discussion to action once the key decisions have been made.",
  },
  {
    n: "6",
    badge: "bg-gold",
    accent: "text-gold",
    title: "Cosy / Intimate",
    examples:
      "e.g. café interior, living room, home kitchen, library reading nook, small bookshop, quiet office",
    vocab: [
      {
        word: "cosy",
        meaning: "giving a feeling of comfort, warmth, and relaxation",
        example:
          "The café has a cosy atmosphere that makes customers want to stay longer.",
      },
      {
        word: "intimate",
        meaning: "having a warm, friendly, private quality",
        example:
          "The intimate setting of the living room encourages open conversation.",
      },
      {
        word: "ambient",
        meaning: "relating to the surrounding atmosphere or environment",
        example:
          "The ambient lighting in the café creates a calm, welcoming mood.",
      },
      {
        word: "murmur",
        meaning: "a soft, low, continuous sound of voices or activity",
        example:
          "The quiet murmur of conversation will fade as closing time approaches.",
      },
      {
        word: "browse",
        meaning: "to look through something in a relaxed, unhurried way",
        example:
          "Customers will continue to browse the shelves long after the rush hour.",
      },
      {
        word: "engrossed",
        meaning: "deeply absorbed in something",
        example:
          "The readers are engrossed in their books and unlikely to leave soon.",
      },
      {
        word: "trickle in",
        meaning: "to arrive slowly and in small numbers",
        example:
          "More regulars will trickle in once the afternoon lull passes.",
      },
      {
        word: "settle in",
        meaning: "to make oneself comfortable in a place",
        example:
          "The couple have settled in for the evening with their drinks and books.",
      },
    ],
    opening: {
      hint: "Establish the warmth and quietness of the space. Name the small, specific details that create the cosy feeling — lighting, sounds, what individuals are doing. Keep the tone gentle and unhurried.",
      example:
        "Right now, the café is cosy and unhurried — warm ambient lighting falls across small wooden tables where customers are quietly reading or working on laptops, and the soft murmur of conversation fills the room.",
    },
    closing: {
      hint: "Predict a gentle shift — more customers trickling in, or the space gradually emptying as closing time nears. Avoid dramatic language; the tone should stay soft and natural throughout.",
      example:
        "Overall, the intimate atmosphere will be maintained as long as the space stays quiet — but once the after-work crowd begins to trickle in, the cosy calm will slowly give way to a livelier, more social energy.",
    },
    responseLabel: "Cosy Café Interior",
    recap:
      "Right now, the café is cosy and unhurried — warm ambient lighting falls across small wooden tables where customers are quietly reading or working on laptops, and the soft murmur of conversation fills the room.",
    predictions:
      "I predict that as the afternoon progresses, more customers will trickle in after finishing work, so the café will gradually shift from quiet and intimate to noticeably busier. The baristas will probably step up the pace behind the counter to keep up with new orders. Some of the current customers who have been engrossed in their work for hours will likely pack up and leave to make room. Meanwhile, small groups of friends might settle in for the evening, turning the space from a solo work environment into a more social one.",
    reasoning:
      "Overall, the cosy, intimate atmosphere will gradually give way to something livelier as the evening crowd arrives — because cafés like this one naturally serve different purposes at different times of day, shifting from a quiet workspace in the afternoon to a relaxed social venue by evening.",
  },
];

export const SCENARIO_CHEATSHEET = [
  {
    cat: "Busy / Bustling",
    cues: "crowds, stalls, traffic, queues, vendors",
    color: "text-rose2",
  },
  {
    cat: "Serene / Peaceful",
    cues: "beach, park, sunset, quiet water, countryside",
    color: "text-sapphire",
  },
  {
    cat: "Livid / Tense",
    cues: "argument, protest, crossed arms, raised voices",
    color: "text-amber2",
  },
  {
    cat: "Festive / Celebratory",
    cues: "banners, music, costumes, cheering, decorations",
    color: "text-emerald2",
  },
  {
    cat: "Professional / Workplace",
    cues: "desks, meeting room, uniforms, laptops, whiteboards",
    color: "text-violet2",
  },
  {
    cat: "Cosy / Intimate",
    cues: "café, living room, library, warm lighting, books, small groups",
    color: "text-gold",
  },
];

export const OPENING_EXAMPLES = [
  "Currently, the market is bustling with activity, vendors are selling, and customers are browsing.",
  "The beach is beautiful right now — the sun is low on the horizon, and families are enjoying the water.",
  "The park is busy with children playing, parents watching, and several groups picnicking on the grass.",
  "The café is cozy and calm, with people reading or working on laptops while staff are preparing drinks.",
];

export const PREDICTION_EXAMPLES = [
  {
    title: "Scenario 1: Busy Market Scene",
    text: "Currently, the market is bustling with customers and vendors. Looking ahead, I predict that in the next 30 minutes, the crowd will become even larger because it's the evening shopping rush. The vendors will probably lower some prices to encourage final purchases before closing. Meanwhile, some visitors might start heading home with their shopping bags. By the end of the evening, the market will likely become quieter as vendors begin to close their stalls.",
  },
  {
    title: "Scenario 2: Beach at Sunset",
    text: "The beach is peaceful now with families enjoying the sunset. I believe that as the sun sets lower, the temperature will drop significantly, and people will probably start gathering their belongings. The swimmers are going to come out of the water soon because it will get too dark to swim safely. Some families might light small fires or turn on lights for picnicking. Eventually, the beach will become much quieter as most visitors leave for the evening.",
  },
  {
    title: "Scenario 3: Park with Children Playing",
    text: "The park is busy with children playing and parents supervising. In the next hour, I expect the activity level will change because it will get closer to dinner time. The younger children might get tired and start asking their parents to go home. Meanwhile, teenagers might continue playing sports as long as there's light. Eventually, as evening approaches, the park will become much less crowded, and parents will be taking their children home.",
  },
  {
    title: "Scenario 4: Cozy Café Interior",
    text: "The café is quiet right now with customers enjoying beverages and work. I anticipate that later in the evening, the atmosphere will change. More people might arrive after finishing work, so the café could become busier than it is now. The staff will probably be preparing for the evening rush and getting more coffee ready. Some of the current visitors are going to leave to make room for new customers. Eventually, the café's activity level will shift from relaxed to more bustling.",
  },
];

export const CLOSING_TEMPLATES = [
  "Overall, the scene will look quite different in an hour because it's getting dark and people naturally go home earlier in the evening.",
  "The pace of change depends on the weather, but based on typical patterns, the location will become quieter as time passes.",
  "In conclusion, I predict the activity will shift from busy and active to calm and empty as evening turns to night.",
  "That's why I believe the most significant change will be the departure of visitors as they choose to spend time at home instead.",
];

export const PREDICTION_TOOLKIT = [
  {
    title: "Certainty (Confident Predictions):",
    items: [
      "Will definitely / will certainly",
      "It's clear that / It's obvious that",
      "I'm confident that / I'm sure that",
      "Without a doubt / No question that",
    ],
  },
  {
    title: "Probability (Likely Predictions):",
    items: [
      "Will probably / Will likely",
      "It's probable that / It's likely that",
      "Most probably / In all likelihood",
      "I'd say / I'd expect / I anticipate",
    ],
  },
  {
    title: "Possibility (Less Certain):",
    items: [
      "Might / Could / May",
      "It's possible that / It's possible that",
      "There's a chance that / There's a possibility",
      "I imagine / I suppose / I'd guess",
    ],
  },
  {
    title: "Time & Sequencing:",
    items: [
      "In the next few minutes / Soon",
      "After that / Following this / Next",
      "Meanwhile / At the same time",
      "Eventually / By the end / Later",
    ],
  },
  {
    title: "Reasoning Connectors:",
    items: [
      "Because / Since / As",
      "Due to / On account of",
      "So / Therefore / That's why",
      "Given that / Considering that",
    ],
  },
  {
    title: "Alternative/Contrast:",
    items: [
      "However / But / Yet",
      "On the other hand / Alternatively",
      "Unless / If not / Except if",
      "Depending on / It depends whether",
    ],
  },
];

export const SAMPLE_ANSWERS = [
  {
    accent: "text-gold",
    scenario: "Scenario 1 · Bustling outdoor market",
    imagePrompt:
      "A vibrant outdoor street market during the day, colourful fruit and vegetable stalls overflowing with fresh produce, vendors in traditional clothing arranging goods, customers browsing and carrying shopping bags, tall buildings in the background, bright natural sunlight, busy and energetic atmosphere, photorealistic, wide-angle shot.",
    recap:
      "Currently, the market is bustling with activity — the vendors are arranging their produce, and the customers are browsing the colourful stalls.",
    predictions:
      "Looking ahead, I predict that in the next 30 minutes the crowd will become even larger because it's the evening shopping rush. The vendors will probably lower some prices to encourage final purchases before closing. Meanwhile, some visitors might start heading home with their full shopping bags. By the end of the evening, the market will likely become much quieter as the vendors begin to pack up their stalls.",
    reasoning:
      "Overall, the scene will look quite different in an hour, mainly because markets naturally wind down once it gets dark and people return home for dinner.",
  },
  {
    accent: "text-sapphire",
    scenario: "Scenario 2 · Peaceful beach sunset",
    imagePrompt:
      "A serene beach at sunset, golden sand in the foreground with a few people walking along the shore, calm blue ocean reflecting warm orange and pink sunset colours, palm trees and small beach huts in the background, scattered clouds in a glowing sky, peaceful and relaxing mood, photorealistic, soft warm lighting.",
    recap:
      "The beach is beautiful and peaceful right now — the sun is low on the horizon, and a few families are still enjoying the shore.",
    predictions:
      "I believe that as the sun sets lower, the temperature will drop noticeably, and people will probably start gathering their belongings. The swimmers are going to come out of the water soon because it will get too dark to swim safely. Some families might turn on lights or build small fires to keep enjoying the evening. Eventually, the beach will become much quieter as most visitors leave for home.",
    reasoning:
      "In conclusion, I predict the atmosphere will shift from relaxed and active to calm and almost empty, simply because nightfall makes the beach colder and harder to enjoy.",
  },
  {
    accent: "text-emerald2",
    scenario: "Scenario 3 · Cozy café interior",
    imagePrompt:
      "A cozy café interior with warm lighting, several small wooden tables where customers are drinking coffee, reading books, and working on laptops, decorative paintings on the walls, baristas preparing drinks behind a counter, large windows letting in natural light, calm and inviting atmosphere, photorealistic, soft warm tones.",
    recap:
      "The café is cozy and calm right now, with customers reading or working on laptops while the staff are preparing drinks.",
    predictions:
      "I anticipate that later in the evening, the atmosphere will change. More people might arrive after finishing work, so the café could become busier than it is now. The staff will probably be getting more coffee ready in preparation for the rush. Some of the current customers are going to leave to make room for new ones. Eventually, the quiet, relaxed mood will shift into something more lively and social.",
    reasoning:
      "That's why I believe the café's energy will rise as the day goes on, because cafés tend to fill up once the workday ends and people look for a place to unwind.",
  },
  {
    accent: "text-amber2",
    scenario: "Scenario 4 · Mountain landscape",
    imagePrompt:
      "A scenic mountain landscape, green pine trees and rocks in the foreground, a wide valley with a winding river in the mid-ground, tall snow-capped peaks in the background, clear blue sky with a few white clouds, crisp natural daylight, vast and peaceful atmosphere, photorealistic, wide panoramic shot.",
    recap:
      "Right now, the mountain landscape looks calm and clear — the sky is bright, and a few hikers are making their way along the trail in the foreground.",
    predictions:
      "Looking ahead, I expect the weather in the mountains will change quickly, as it often does at high altitude. Clouds will likely roll in over the peaks, and the temperature is going to drop in the late afternoon. The hikers will probably start descending soon to reach safety before dark. Meanwhile, the light will fade, and the snow-capped peaks might be hidden behind mist.",
    reasoning:
      "Overall, the scene will likely become colder and less visible within a few hours, because mountain weather is unpredictable and daylight disappears fast in the valleys.",
  },
  {
    accent: "text-rose2",
    scenario: "Scenario 5 · Street festival",
    imagePrompt:
      "A lively street festival or cultural celebration, colourful decorations and banners hanging across the street, large crowds of people celebrating, performers in traditional costumes, food stalls along the sides, bright colours and festive lights, joyful and energetic atmosphere, photorealistic, daytime, wide street view.",
    recap:
      "At the moment, the street festival is full of energy — large crowds are celebrating, performers are dancing, and the food stalls are doing brisk business.",
    predictions:
      "I predict that as the day turns into evening, the festival will become even more crowded because more people will arrive after work. The festive lights will be switched on, and the atmosphere is going to feel more dramatic and exciting. The performers will probably move on to bigger shows, while the food stalls might start selling out of popular items. Later in the night, however, families with young children will likely begin heading home.",
    reasoning:
      "In conclusion, the celebration will likely peak in the evening and then gradually wind down, because festivals naturally build toward a night-time climax before the crowds disperse.",
  },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "In 30 seconds, identify 2–3 predictions + one reason each.",
    body: "Jot down bullet points, not sentences. This keeps you focused and prevents rambling.",
  },
  {
    category: "prep",
    color: "text-sapphire",
    title: "Practice with real scenarios before the test.",
    body: "Predicting real-world outcomes (inflation trends, tech changes) trains your brain to think logically on the fly.",
  },
  {
    category: "delivery",
    color: "text-emerald2",
    title: "Speak with confidence, even if unsure.",
    body: 'Use confident language: "I predict," "It will," "This would" — not "maybe," "I think maybe," or "probably maybe."',
  },
  {
    category: "delivery",
    color: "text-amber2",
    title: "Pause between predictions to organize thoughts.",
    body: 'Strategic pauses are better than rushing. "First, X will happen. [pause] Second, Y might happen." This sounds more fluent.',
  },
  {
    category: "language",
    color: "text-rose2",
    title: "Always explain your reasoning.",
    body: 'Don\'t just say what will happen. "Prices will rise because demand will increase" beats "prices will rise." Why matters.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: "Vary your conditional language.",
    body: 'Don\'t say "will probably" five times. Use: "will likely," "might," "could," "I imagine," "I\'d argue," "it\'s probable that."',
  },
  {
    category: "logic",
    color: "text-gold",
    title: "Connect to real-world factors.",
    body: 'Reference economics, psychology, government policy, or social trends. "The job market will improve because companies are hiring again" sounds smarter than pure speculation.',
  },
  {
    category: "logic",
    color: "text-sapphire",
    title: "Acknowledge uncertainty where it's realistic.",
    body: '"This depends on..." or "assuming that..." shows sophisticated thinking. You don\'t need to sound 100% certain on everything.',
  },
  {
    category: "logic",
    color: "text-emerald2",
    title: "Make predictions plausible, not fantastical.",
    body: 'Examiners reward logical thinking. Wild predictions ("prices will go to $1000") signal weak reasoning.',
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "logic", label: "Logic" },
];
