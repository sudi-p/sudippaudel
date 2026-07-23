// @ts-nocheck
/* eslint-disable */
"use client";

import React, { useState, useEffect, useRef } from "react";
import TaskNav from "../TaskNav";
import { Hero } from "../components/Hero";
import { Accordion } from "../components/Accordion";

const ROLES = {
  // Task 3
  opener: {
    name: "Opening frame",
    job: "Place + time + atmosphere in one or two sentences. Rotate the wording — a recycled frame is flagged every time.",
    bar: "bg-sapphire",
    ring: "ring-sapphire",
    chip: "bg-sapphire-light text-sapphire-dark",
  },
  center: {
    name: "Centre / foreground",
    job: "Busiest zone, described in full. Person + visual detail + present-continuous action + a state verb for feeling.",
    bar: "bg-emerald2",
    ring: "ring-emerald2",
    chip: "bg-emerald2-light text-emerald2-dark",
  },
  left: {
    name: "Left",
    job: "Second stop on the camera route. One or two details, then move on and never come back.",
    bar: "bg-violet2",
    ring: "ring-violet2",
    chip: "bg-violet2-light text-violet2-dark",
  },
  right: {
    name: "Right",
    job: "Third stop. Vary the transition wording so the route doesn't sound mechanical.",
    bar: "bg-amber2",
    ring: "ring-amber2",
    chip: "bg-amber2-light text-amber2-dark",
  },
  background: {
    name: "Background",
    job: "Furthest zone. Sets context and depth — objects are fine here, people are a bonus.",
    bar: "bg-slate",
    ring: "ring-slate",
    chip: "bg-mist text-steel",
  },
  // Task 4
  recap: {
    name: "Recap + planted loose end",
    job: "Under two sentences. Anchors one person and quietly plants the thing your close will pay off.",
    bar: "bg-slate",
    ring: "ring-slate",
    chip: "bg-mist text-steel",
  },
  prediction: {
    name: "Prediction",
    job: "Subject + future form + action + because/since + the visible clue. Each one hands off to the next.",
    bar: "bg-emerald2",
    ring: "ring-emerald2",
    chip: "bg-emerald2-light text-emerald2-dark",
  },
  // Both
  close: {
    name: "The close",
    job: "Task 3: a real summary of mood or main activity. Task 4: a reaction, low certainty, stopping before anything resolves.",
    bar: "bg-gold",
    ring: "ring-gold",
    chip: "bg-gold-light text-gold-dark",
  },
};

const TASK_INFO = {
  t3: {
    label: "Task 3",
    sub: "Describe a scene",
    brief:
      "Describe it to someone who cannot see it. Present continuous, one camera route, 10–12 sentences.",
    chipsLabel: "Action + Feeling pairs",
    steps: [
      [
        "Set the frame",
        "Place, time, atmosphere. Change the wording every time.",
      ],
      [
        "Pick one route",
        "Centre → left → right → background. Never double back.",
      ],
      ["Individualise people", "Clothing, age or role. Three people minimum."],
      [
        "Action, then feeling",
        "Present continuous, then looks / seems / appears.",
      ],
      [
        "Close on the mood",
        "Never drop this sentence. A missing close costs Organization outright.",
      ],
    ],
    banned:
      'Banned: "can be seen" · "a bunch of" · "a lot of" · "doing something" · "guy" · "having the best time" · going back to a zone you already left.',
  },
  t4: {
    label: "Task 4",
    sub: "Predict the next scene",
    brief:
      "Same image, different job. Predict the next 2–5 minutes only. 6–8 sentences.",
    chipsLabel: "Distinct future forms",
    steps: [
      [
        "Find the loose end",
        "Something started but not finished. Ignore the main action.",
      ],
      [
        "Pick an unused subject",
        "Someone or something that hasn't been your subject yet.",
      ],
      [
        "Predict a reaction",
        "Not an action. A reaction implies everything before it.",
      ],
      [
        "Drop the certainty",
        "may · could · could well · there's a fair chance",
      ],
      [
        "Stop unresolved",
        "Nothing empties. Nothing goes silent. Nobody goes home.",
      ],
    ],
    banned:
      "Banned in the close: the end of the day · an empty scene · silence · everyone going home · any sentence that would fit a different picture.",
  },
};

const SCENES = [
  {
    scene: "Family picnic in a park",
    visible:
      "A woman unpacking a cooler, a man spreading a blanket under a tree, two children throwing a frisbee.",
    t3: {
      chips: ["looks focused", "seems pleased", "appears absorbed"],
      sentences: [
        [
          "I'm looking at a photograph of a family picnic in a public park, taken on what appears to be a warm summer afternoon. The atmosphere is relaxed and unhurried.",
          "opener",
        ],
        [
          "In the middle of the frame, a man in a light blue shirt is kneeling on the grass, spreading out a checked blanket. He looks focused on getting the corners flat.",
          "center",
        ],
        [
          "To his left, a woman in a striped top is crouching over a cool box and lifting the lid. She seems pleased with how the day is going.",
          "left",
        ],
        [
          "Over on the right, two children are throwing a frisbee between them. The younger one, a girl in a yellow t-shirt, is stretching up to catch it and appears completely absorbed in the game.",
          "right",
        ],
        [
          "Behind them, a wide stretch of grass runs towards a line of tall trees, and a few other groups are sitting in the shade further back.",
          "background",
        ],
        [
          "Overall, this is a warm, easy family scene, and everyone in it seems content to be outdoors together.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Centre → left → right → background. No zone is revisited.",
        ],
        [
          "People individualised",
          "Three: the man in the light blue shirt, the woman in the striped top, the girl in the yellow t-shirt.",
        ],
        [
          "Action + Feeling",
          'Every person gets a present-continuous verb, then a state verb: "is spreading… He looks focused."',
        ],
        [
          "Closing summary",
          "Names the mood and gathers everyone at once, rather than trailing off after the background.",
        ],
        [
          "Trap avoided",
          '"A man can be seen spreading a blanket" would sink this. The man is the active subject throughout.',
        ],
      ],
    },
    t4: {
      chips: [
        "expect … to",
        "is going to",
        "is likely to",
        "won't",
        "may well",
        "could",
      ],
      sentences: [
        [
          "In the next few minutes, I expect this picnic to get properly underway.",
          "opener",
        ],
        [
          "At the moment a woman in a striped shirt is unpacking a cooler while a man spreads a blanket under the tree, and two children are throwing a frisbee nearby.",
          "recap",
        ],
        [
          "The first thing that will happen is that the man is going to finish smoothing out that blanket, because he's already holding two corners of it.",
          "prediction",
        ],
        [
          "Once it's down, the woman is likely to start setting the food out on it, since she has just lifted the lid of the cooler.",
          "prediction",
        ],
        [
          "The children probably won't come over straight away, though — the frisbee is still in the air, so they may well get another few throws in first.",
          "prediction",
        ],
        [
          "And I'd say the moment the smell of that food reaches them, the boy nearest the tree could abandon the game entirely and leave his sister standing there holding the frisbee.",
          "close",
        ],
      ],
      build: [
        [
          "Loose end",
          "The frisbee game running in parallel with the food being laid out.",
        ],
        ["New subject", 'The boy — until now he was only ever "the children".'],
        [
          "Reaction",
          "He abandons the game because of what the woman did two sentences earlier.",
        ],
        ["Certainty", "could"],
        ["Left unresolved", "His sister is left standing there mid-throw."],
      ],
    },
  },
  {
    scene: "Outdoor farmers market",
    visible:
      "Stalls of vegetables, a vendor weighing tomatoes, a shopper with a canvas bag, clouds gathering.",
    t3: {
      chips: ["seems patient", "appears to be counting", "looks sceptical"],
      sentences: [
        [
          "The picture shows an outdoor farmers market, probably on a weekend morning in late summer. It feels busy but not rushed.",
          "opener",
        ],
        [
          "In the foreground, a vendor in a green apron is weighing tomatoes on a small metal scale. He looks middle-aged and seems patient with his customer.",
          "center",
        ],
        [
          "Just to his left, a woman with a canvas bag over her shoulder is reaching into her purse. She appears to be counting out coins.",
          "left",
        ],
        [
          "On the right-hand side, an elderly man is inspecting a crate of apples, turning one over in his hand. He looks careful, almost sceptical.",
          "right",
        ],
        [
          "Further back, rows of stalls stretch down the street under white canopies, and the sky above them is starting to turn grey.",
          "background",
        ],
        [
          "Taken together, it's an ordinary market morning, although the clouds overhead give the whole scene a slight sense of hurry.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Foreground → left → right → background, in one sweep.",
        ],
        [
          "People individualised",
          "Three, each with a role and a visual detail: the vendor in the green apron, the woman with the canvas bag, the elderly man.",
        ],
        [
          "Action + Feeling",
          '"is inspecting a crate of apples… He looks careful, almost sceptical." The second half is where the marks are.',
        ],
        [
          "Closing summary",
          "Uses the weather to tie the mood together instead of restating what's already been said.",
        ],
        [
          "Trap avoided",
          'Article discipline: "a small metal scale", "a canvas bag", "the sky". First mention takes a/an, known objects take the.',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "will",
        "'ll",
        "is likely to",
        "if … does",
        "could",
      ],
      sentences: [
        [
          "In the next two or three minutes, I think the weather is going to start dictating what happens here.",
          "opener",
        ],
        [
          "Right now a vendor in a green apron is weighing tomatoes for a shopper carrying a canvas bag, and the stalls behind them are still fully stocked.",
          "recap",
        ],
        [
          "The most obvious thing is that he will hand over those tomatoes and take her money, since the scale has already settled.",
          "prediction",
        ],
        [
          "After that, though, I'd say he's going to look up at those clouds, because they've clearly thickened over the far end of the market.",
          "prediction",
        ],
        [
          "My guess is that he'll start pulling his canopy across before he serves anyone else, and the shopper is likely to shorten her round rather than risk getting caught out.",
          "prediction",
        ],
        [
          "If the rain does arrive, the stallholders further down could find themselves covering produce while customers are still standing at their tables.",
          "close",
        ],
      ],
      build: [
        [
          "Loose end",
          "The gathering clouds — nobody in the image has reacted to them yet.",
        ],
        [
          "New subject",
          "The stallholders further down, never mentioned before.",
        ],
        [
          "Reaction",
          "They scramble because of the weather the earlier predictions set up.",
        ],
        ["Certainty", "could find themselves"],
        ["Left unresolved", "Customers are still standing there mid-purchase."],
      ],
    },
  },
  {
    scene: "Airport check-in counter",
    visible:
      "A queue with suitcases, an agent at a terminal, a man checking his phone, a departures board.",
    t3: {
      chips: ["looks calm", "seems distracted", "appears anxious"],
      sentences: [
        [
          "This image captures the check-in area of an airport terminal, most likely early in the morning. The mood is orderly but a little tense.",
          "opener",
        ],
        [
          "At the counter in the middle, an airline agent in a navy uniform is typing at her terminal. She looks calm and professional.",
          "center",
        ],
        [
          "In front of her, a man in a dark coat is standing with a large suitcase at his feet, scrolling through his phone. He seems distracted.",
          "left",
        ],
        [
          "To the right, a queue of about a dozen passengers is waiting behind a rope barrier. A young woman near the front is checking her watch and appears anxious.",
          "right",
        ],
        [
          "Behind the counters, a departures board is displaying flight times, and a member of ground staff is wheeling a trolley past it.",
          "background",
        ],
        [
          "The whole picture gives the impression of an ordinary weekday departure, with everyone quietly focused on getting through the queue.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Counter → the passenger in front of it → the queue on the right → the board behind. Depth increases the whole way.",
        ],
        [
          "People individualised",
          'Four, including one pulled out of the crowd: "a young woman near the front".',
        ],
        [
          "Action + Feeling",
          "The crowd gets one named individual so it isn't left as a mass. That single move fixes the biggest Content gap.",
        ],
        [
          "Closing summary",
          "Reads the collective mood rather than adding another object.",
        ],
        [
          "Trap avoided",
          '"About a dozen passengers" instead of "a lot of people". Estimate precisely rather than reaching for a vague quantifier.',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "will",
        "expect … will",
        "almost certainly will",
        "there's a fair chance",
        "may",
      ],
      sentences: [
        [
          "Over the next couple of minutes, this queue is going to move forward.",
          "opener",
        ],
        [
          "At the counter, an agent is working at her terminal while a man in a navy coat stands in front of her checking his phone, with a large suitcase at his feet.",
          "recap",
        ],
        [
          "I expect she will ask him for his passport shortly, since she's just turned back to her screen.",
          "prediction",
        ],
        [
          "He's going to put that phone away fairly quickly then, because he can't hand anything over while he's holding it.",
          "prediction",
        ],
        [
          "Once she has his details, he will almost certainly lift the suitcase onto the scale, and given how full it looks, there's a fair chance it comes in overweight.",
          "prediction",
        ],
        [
          "If that happens, he may have to open it right there and shift a few things into his carry-on, which would leave the passengers behind him waiting rather longer than they expected.",
          "close",
        ],
      ],
      build: [
        ["Loose end", "The suitcase — visibly overpacked and not yet weighed."],
        ["New subject", "The passengers in the queue behind him."],
        ["Reaction", "They wait, caused by his repacking."],
        ["Certainty", "there's a fair chance → may"],
        ["Left unresolved", "The queue is still stuck when you stop talking."],
      ],
    },
  },
  {
    scene: "Office team meeting",
    visible:
      "Four people at a table, a laptop connected to a screen, a woman presenting, sticky notes on a whiteboard.",
    t3: {
      chips: ["looks confident", "appears thoughtful", "seem engaged"],
      sentences: [
        [
          "Here's a photograph of a small team meeting inside an office, taken at some point during the working day. The room feels focused and businesslike.",
          "opener",
        ],
        [
          "At the front of the room, a woman in a grey blazer is standing beside a screen and gesturing towards it. She looks confident and seems to be mid-explanation.",
          "center",
        ],
        [
          "Seated at the left of the table, a man in a checked shirt is writing in a notebook. He appears thoughtful, as though he's waiting for a chance to speak.",
          "left",
        ],
        [
          "Opposite him, two colleagues are sharing a laptop, and one of them is pointing at something on the screen. They both seem engaged.",
          "right",
        ],
        [
          "Behind the presenter, a whiteboard is covered with coloured sticky notes, and a large window looks out onto the buildings across the street.",
          "background",
        ],
        [
          "All in all, it's a routine working meeting, and the people in it appear genuinely involved in what's being discussed.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Front of the room → left of the table → opposite side → wall behind.",
        ],
        [
          "People individualised",
          "Four, all by role and clothing: the woman in the grey blazer, the man in the checked shirt, two colleagues sharing a laptop.",
        ],
        [
          "Action + Feeling",
          '"is writing in a notebook. He appears thoughtful…" The inference about why he\'s thoughtful adds depth without inventing anything.',
        ],
        [
          "Closing summary",
          "Judges the meeting as a whole. Short, and clearly a closing sentence.",
        ],
        [
          "Trap avoided",
          'Register: "a man in a checked shirt", never "a guy". Use man, colleague, presenter, worker.',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "'ll",
        "is likely to",
        "may not",
        "usually means",
        "I'd say",
      ],
      sentences: [
        [
          "In the next few minutes, I think this presentation is going to be interrupted.",
          "opener",
        ],
        [
          "A woman is standing at the front mid-sentence, four colleagues are seated around the table, and there's a cluster of sticky notes on the whiteboard behind her.",
          "recap",
        ],
        [
          "She's going to click through to her next slide fairly soon, because she has already glanced back at the screen.",
          "prediction",
        ],
        [
          "The man taking notes is the one to watch, though — he has stopped writing, which usually means he's waiting for a gap to speak.",
          "prediction",
        ],
        [
          "I'd say he'll raise a question about those sticky notes, since they're clearly from an earlier session that hasn't been resolved.",
          "prediction",
        ],
        [
          "That's likely to pull the whole group over to the whiteboard, and once they're standing there, the laptop and the slides may not get touched again for the rest of the meeting.",
          "close",
        ],
      ],
      build: [
        ["Loose end", "The sticky notes, sitting there unaddressed."],
        [
          "New subject",
          "The laptop and slides — an object works as well as a person.",
        ],
        [
          "Reaction",
          "They get abandoned as a consequence of the group standing up.",
        ],
        ["Certainty", "may not"],
        ["Left unresolved", "The presentation never finishes."],
      ],
    },
  },
  {
    scene: "Family kitchen, birthday preparation",
    visible:
      "A cake on the counter, a girl holding candles, an adult carrying plates, balloons half-inflated.",
    t3: {
      chips: [
        "seems to be enjoying herself",
        "appears to be struggling",
        "looks determined",
      ],
      sentences: [
        [
          "This depicts a family kitchen in the middle of birthday preparations, probably in the late afternoon. The atmosphere is cheerful and slightly chaotic.",
          "opener",
        ],
        [
          "On the counter in the centre, a round chocolate cake is sitting on a white plate, and a girl of about seven is leaning over it, pressing candles into the icing. She looks determined to get them straight.",
          "center",
        ],
        [
          "To her left, a woman in an apron is carrying a stack of plates towards the table. She seems to be enjoying herself despite the rush.",
          "left",
        ],
        [
          "On the right side of the room, a man is standing by the door with a half-inflated balloon in his hands. He appears to be struggling with the knot.",
          "right",
        ],
        [
          "Behind them, streamers are hanging across the far wall, and a pile of wrapped presents is stacked on a chair in the corner.",
          "background",
        ],
        [
          "It's a warm domestic scene, and the small mess around the room suggests the family has been preparing for this most of the afternoon.",
          "close",
        ],
      ],
      build: [
        ["Camera route", "Counter → left → right → back wall."],
        [
          "People individualised",
          "Three, with age and clothing: a girl of about seven, a woman in an apron, a man by the door.",
        ],
        [
          "Action + Feeling",
          '"is pressing candles into the icing. She looks determined to get them straight." The feeling is inferred from the action, not asserted.',
        ],
        [
          "Closing summary",
          "Draws an inference — they've been at this a while — instead of asserting that everyone is happy.",
        ],
        [
          "Trap avoided",
          'No "they\'re having the best time". Empty emotional filler reads as padding; an observed expression does not.',
        ],
      ],
    },
    t4: {
      chips: [
        "expect … to",
        "is going to",
        "will probably",
        "could easily",
        "is likely to",
        "may still be",
      ],
      sentences: [
        [
          "Within the next minute or two, I expect this kitchen to get a lot busier.",
          "opener",
        ],
        [
          "A cake is sitting on the counter, a young girl is holding a handful of candles, and an adult is carrying plates across to the table while a few balloons hang half-inflated by the door.",
          "recap",
        ],
        [
          "The girl is going to press those candles into the icing almost immediately, because she's already leaning over the cake with them.",
          "prediction",
        ],
        [
          "Her mother will probably steady it for her, since it's right on the edge of the counter and could easily slide.",
          "prediction",
        ],
        [
          "After that, someone is likely to go looking for matches, as I can't see any anywhere near the cake.",
          "prediction",
        ],
        [
          "And once the lights go down for the singing, her father may still be standing by the door with that last balloon in his hand, trying to tie it before anyone notices.",
          "close",
        ],
      ],
      build: [
        ["Loose end", "The half-inflated balloons, planted in the recap."],
        ["New subject", 'The father — previously just "an adult".'],
        ["Reaction", "He's caught out by the singing starting."],
        ["Certainty", "may still be"],
        ["Left unresolved", "The balloon never gets tied."],
      ],
    },
  },
  {
    scene: "Children's playground",
    visible:
      "A boy at the top of a slide, a parent on a bench, a toddler near the swings, a dropped scooter.",
    t3: {
      chips: ["looks excited", "seems alert", "appears unaware"],
      sentences: [
        [
          "In this picture I can see a children's playground in a residential neighbourhood, on what looks like a bright spring morning. The mood is lively and full of movement.",
          "opener",
        ],
        [
          "In the middle, a boy of around six is crouched at the top of a metal slide, gripping the rail and getting ready to push off. He looks excited.",
          "center",
        ],
        [
          "On a bench to the left, a woman in a denim jacket is watching him closely. She seems alert rather than relaxed.",
          "left",
        ],
        [
          "Over on the right, a toddler in a red coat is wandering away from the swings towards the bottom of the slide, holding a small stuffed rabbit. She appears unaware of the boy above her.",
          "right",
        ],
        [
          "Behind the equipment, a low fence separates the playground from a path where a cyclist is riding past, and a scooter is lying abandoned near the gate.",
          "background",
        ],
        [
          "Overall it's an ordinary morning at the park, though the toddler's position gives the scene a slight edge of tension.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Slide → bench on the left → swings on the right → fence behind.",
        ],
        [
          "People individualised",
          "Three, with age, clothing and an object: a boy of around six, a woman in a denim jacket, a toddler in a red coat.",
        ],
        [
          "Action + Feeling",
          'All three get one. "She appears unaware of the boy above her" also does spatial work at the same time.',
        ],
        [
          "Closing summary",
          'Acknowledges the tension the description built rather than flattening it into "everyone is happy".',
        ],
        [
          "Trap avoided",
          'Agreement: "a toddler … is wandering", "a woman … is watching". Singular subject, singular verb, even with a long phrase in between.',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "will almost certainly",
        "may have to",
        "is likely to",
        "any second now",
        "whether … is another matter",
      ],
      sentences: [
        [
          "Over the next thirty seconds or so, I think this playground is going to need some adult intervention.",
          "opener",
        ],
        [
          "A boy is crouched at the top of the slide getting ready to push off, a parent is watching from a bench, and a toddler has wandered away from the swings towards the bottom of the slide.",
          "recap",
        ],
        [
          "The boy is going to let go any second now, because he's already lifted his hands off the rail.",
          "prediction",
        ],
        [
          "The problem is that the toddler is directly in his path, so the parent on the bench will almost certainly stand up and move across.",
          "prediction",
        ],
        [
          "Whether she gets there in time is another matter — she's a good few steps away, and she may have to call out instead.",
          "prediction",
        ],
        [
          "Either way, that scooter someone has dropped by the gate is likely to stay exactly where it is, because nobody there is paying it the slightest attention.",
          "close",
        ],
      ],
      build: [
        [
          "Loose end",
          "The dropped scooter — the one object nobody is dealing with.",
        ],
        ["New subject", "The scooter itself."],
        [
          "Reaction",
          "It stays put because everyone's attention is on the slide.",
        ],
        ["Certainty", "is likely to"],
        ["Left unresolved", "The near-miss is still unfolding."],
      ],
      note: "This close releases tension instead of adding to it. Ending on a small still object after a fast sequence gives the answer shape without ending the scene.",
    },
  },
  {
    scene: "Bus stop as rain begins",
    visible:
      "Three people under a shelter, a woman opening an umbrella, a bus approaching, wet pavement.",
    t3: {
      chips: ["looks irritated", "seems impatient", "appears bothered"],
      sentences: [
        [
          "The photo shows a city bus stop during a light rain shower, apparently in the early evening. Everything looks damp and slightly grey.",
          "opener",
        ],
        [
          "Under the shelter in the centre, a woman in a long coat is holding a black umbrella that she has just opened. She looks mildly irritated by the weather.",
          "center",
        ],
        [
          "Beside her on the left, an older man with his hood up is leaning out to look down the road. He seems impatient.",
          "left",
        ],
        [
          "To the right, two teenagers are sharing a pair of headphones and laughing about something. Neither of them appears bothered by the rain at all.",
          "right",
        ],
        [
          "Further down the street, a bus is approaching with its indicator flashing, and the wet pavement is reflecting the shop lights along the road.",
          "background",
        ],
        [
          "It's a very familiar urban moment: a few strangers waiting together, all of them ready to move the second the bus pulls in.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Shelter → left → right → down the street. The bus arrives last, which sets up the depth.",
        ],
        [
          "People individualised",
          "Four, contrasted deliberately: two irritated adults against two indifferent teenagers.",
        ],
        [
          "Action + Feeling",
          'The contrast between "seems impatient" and "appears bothered" carries the mood without any filler adjectives.',
        ],
        [
          "Closing summary",
          "Names what kind of moment it is. A category, not a repetition.",
        ],
        [
          "Trap avoided",
          'No "having the best time" or "having fun". Every feeling here is tied to something visible — a hood, a lean, a laugh.',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "will",
        "is likely to",
        "could easily",
        "may end up",
        "within a few seconds",
      ],
      sentences: [
        [
          "In the next minute, this bus is going to arrive and everything will happen at once.",
          "opener",
        ],
        [
          "Three people are sheltering at the stop, one woman has just got her umbrella open, and the pavement is already wet from the rain that's started.",
          "recap",
        ],
        [
          "The bus is indicating, so it will pull in within a few seconds.",
          "prediction",
        ],
        [
          "That woman is going to fold her umbrella straight back down again, because there's no point carrying it open onto a bus.",
          "prediction",
        ],
        [
          "The man standing at the edge of the shelter is likely to move first, since he's closest to the kerb, and given how much water has collected there he could easily step into a puddle on his way.",
          "prediction",
        ],
        [
          "And the two behind him may end up shaking rain off their coats in the aisle while the driver waits for them to find their seats.",
          "close",
        ],
      ],
      build: [
        [
          "Loose end",
          "Wet coats — nothing in the image has dealt with the rain yet.",
        ],
        ["New subject", "The driver, who hasn't appeared until now."],
        ["Reaction", "He waits, caused by everyone boarding slowly."],
        ["Certainty", "may end up"],
        ["Left unresolved", "The bus hasn't pulled away."],
      ],
    },
  },
  {
    scene: "Beach on a summer afternoon",
    visible:
      "A family under a striped umbrella, two teenagers near the water, a dog chasing a ball, a lifeguard chair.",
    t3: {
      chips: ["looks at ease", "seem delighted", "appears watchful"],
      sentences: [
        [
          "This is a snapshot of a sandy beach on a hot summer afternoon. The whole scene feels bright, noisy and relaxed.",
          "opener",
        ],
        [
          "In the foreground, a family is sitting under a striped umbrella. A woman in a wide-brimmed hat is handing a drink to a young boy, and she looks completely at ease.",
          "center",
        ],
        [
          "To the left, two teenagers are standing ankle-deep at the water's edge, splashing each other. They seem delighted with themselves.",
          "left",
        ],
        [
          "Racing across the sand on the right, a golden retriever is chasing a tennis ball with its ears flying back.",
          "right",
        ],
        [
          "Further out, several swimmers are bobbing in the waves, and a lifeguard is sitting in a raised white chair. He appears watchful rather than relaxed.",
          "background",
        ],
        [
          "Taken as a whole, it's a classic seaside afternoon, with everyone in the frame making the most of the good weather.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Foreground → left → right → out to sea. Distance from the camera increases at every step.",
        ],
        [
          "People individualised",
          "Four plus the dog: the woman in the wide-brimmed hat, the young boy, the teenagers, the lifeguard.",
        ],
        [
          "Action + Feeling",
          'The lifeguard\'s "watchful rather than relaxed" gives the background a person rather than only objects.',
        ],
        ["Closing summary", "One sentence, mood-level, covering everyone."],
        [
          "Trap avoided",
          "No backtracking. Once the description leaves the umbrella it never returns — going back to the family at the end would cost Organization directly.",
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "will almost certainly",
        "are likely to",
        "may start",
        "could well end up",
        "once … will",
      ],
      sentences: [
        [
          "Over the next couple of minutes, I think this dog is going to cause a bit of chaos.",
          "opener",
        ],
        [
          "A family is sitting under a striped umbrella, two teenagers are standing at the water's edge, and a dog is running towards them chasing a ball.",
          "recap",
        ],
        [
          "He's going to reach the shallows first, because he's already at full speed.",
          "prediction",
        ],
        [
          "Once he has the ball, he will almost certainly run straight back to the teenagers, and since they're standing in his path they're likely to get soaked when he shakes himself off.",
          "prediction",
        ],
        [
          "The mother under the umbrella may start pulling her towels further up the sand at that point, because she can see exactly where he's heading.",
          "prediction",
        ],
        [
          "And the lifeguard, who has been watching the swimmers rather than the dog this whole time, could well end up being the only person there who stays dry.",
          "close",
        ],
      ],
      build: [
        ["Loose end", "The lifeguard — present in the image but uninvolved."],
        ["New subject", "The lifeguard."],
        ["Reaction", "He stays dry because he wasn't watching."],
        ["Certainty", "could well end up"],
        ["Left unresolved", "The soaking hasn't actually happened yet."],
      ],
    },
  },
  {
    scene: "Library group study session",
    visible:
      "Four students around a table, open laptops, a librarian passing with books, one student yawning.",
    t3: {
      chips: ["looks exhausted", "seems absorbed", "appears unhurried"],
      sentences: [
        [
          "The image is of a group study area inside a public library, most likely on a weekday afternoon. It's quiet and studious, though not completely silent.",
          "opener",
        ],
        [
          "Around a long wooden table in the centre, four university students are working together with their laptops open, and papers and coffee cups are spread out between them.",
          "center",
        ],
        [
          "The student on the left, a young man in a grey hoodie, is stifling a yawn and rubbing his eyes. He looks exhausted.",
          "left",
        ],
        [
          "Across from him, a woman with her hair tied back is highlighting a passage in a textbook and seems completely absorbed in it.",
          "right",
        ],
        [
          "Behind them, a librarian is walking slowly along a shelf with an armful of returned books. She appears unhurried, and tall windows are letting in a good deal of daylight.",
          "background",
        ],
        [
          "The overall impression is of a calm, hard-working afternoon, with the students clearly some way into a long study session.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Table in the centre → left seat → opposite seat → the shelves behind.",
        ],
        [
          "People individualised",
          "Three named individuals pulled out of a group of four, plus the librarian.",
        ],
        [
          "Action + Feeling",
          '"is stifling a yawn and rubbing his eyes. He looks exhausted." Two observed actions justify the feeling.',
        ],
        [
          "Closing summary",
          "Infers how long they've been there — a reasonable inference, which the rubric explicitly rewards.",
        ],
        [
          "Trap avoided",
          "The opening frame is different from every other scene here. Reusing one frame across responses gets flagged as a template.",
        ],
      ],
    },
    t4: {
      chips: [
        "expect … to",
        "is going to",
        "'ll",
        "are likely to",
        "may also",
        "my guess is",
      ],
      sentences: [
        [
          "In the next few minutes, I expect this group to lose one of its members.",
          "opener",
        ],
        [
          "Four students are working around a table with their laptops open, a librarian is walking past with an armful of books, and one of the students has just yawned.",
          "recap",
        ],
        [
          "He's going to push his chair back before long, because he's clearly struggling to concentrate.",
          "prediction",
        ],
        [
          "My guess is that he'll head out for coffee, since that's the usual solution at this stage of an afternoon.",
          "prediction",
        ],
        [
          "Once he's gone, the other three are likely to spread their papers across his side of the table, as there's very little room where they're sitting.",
          "prediction",
        ],
        [
          "They may also drop their voices a little, because the librarian is still moving along the shelf right behind them, and nobody wants to be the group that gets asked to keep it down.",
          "close",
        ],
      ],
      build: [
        ["Loose end", "The librarian in the background."],
        [
          "New subject",
          "The librarian, indirectly — she causes the behaviour without acting.",
        ],
        ["Reaction", "The group goes quieter."],
        ["Certainty", "may also"],
        ["Left unresolved", "The student hasn't come back yet."],
      ],
      note: 'This is how to do "the scene becomes quieter" legally. The mood shifts, but for a stated reason, and the scene keeps running.',
    },
  },
  {
    scene: "Backyard barbecue",
    visible:
      "A man at a grill with tongs, guests with drinks, a half-set table, smoke rising.",
    t3: {
      chips: ["looks pleased", "seems amused", "appear carefree"],
      sentences: [
        [
          "I'm looking at a backyard barbecue taking place on a summer evening. The atmosphere is sociable and easy-going.",
          "opener",
        ],
        [
          "In the centre of the garden, a man in a striped apron is standing over a charcoal grill, turning pieces of chicken with a pair of tongs. Smoke is rising around him and he looks pleased with how it's going.",
          "center",
        ],
        [
          "To his left, three guests are standing in a loose circle with drinks in their hands, and one woman in a yellow dress is laughing at something the others have said. She seems thoroughly amused.",
          "left",
        ],
        [
          "On the right, a long table is only half laid, with a stack of plates sitting at one end and a bowl of salad in the middle.",
          "right",
        ],
        [
          "Behind the table, string lights are hanging between two trees, and two children are running across the lawn near the fence. They appear carefree.",
          "background",
        ],
        [
          "It's a comfortable, informal gathering, and judging by the smoke coming off the grill, the food is nearly ready to be served.",
          "close",
        ],
      ],
      build: [
        [
          "Camera route",
          "Grill → guests on the left → table on the right → lawn behind.",
        ],
        [
          "People individualised",
          "Four: the man in the striped apron, the woman in the yellow dress, and the two children.",
        ],
        [
          "Action + Feeling",
          "The right-hand zone is objects only, which is fine — the other three zones carry people, so the balance still works.",
        ],
        [
          "Closing summary",
          "Ends on an inference drawn from a visible detail, which is stronger than restating the mood alone.",
        ],
        [
          "Trap avoided",
          'No repetition loops. Each sentence commits once — no "a table, a long table" or "is standing, is turning, is standing".',
        ],
      ],
    },
    t4: {
      chips: [
        "is going to",
        "'ll probably",
        "are likely to",
        "may well",
        "could end up",
        "judging by",
      ],
      sentences: [
        [
          "Over the next two or three minutes, I think the food is finally going to be ready here.",
          "opener",
        ],
        [
          "A man in an apron is standing at the grill with a pair of tongs, several guests are chatting with drinks in their hands, and there's a table off to the side that's only half set.",
          "recap",
        ],
        [
          "Judging by the amount of smoke coming off that grill, he's going to start moving things onto the platter almost straight away.",
          "prediction",
        ],
        [
          "He'll probably call out to everyone once it's done, because that's quicker than going round each person individually.",
          "prediction",
        ],
        [
          "The guests are likely to drift over as soon as they hear him, since they've clearly been waiting a while.",
          "prediction",
        ],
        [
          "And whoever was setting that table may well abandon it halfway through, which means people could end up eating with the plates still stacked at one end.",
          "close",
        ],
      ],
      build: [
        [
          "Loose end",
          "The half-set table, stated in the recap so the payoff feels planted.",
        ],
        [
          "New subject",
          "Whoever was setting the table — an unnamed person is fine.",
        ],
        ["Reaction", "They abandon it because the food arrived."],
        ["Certainty", "may well → could end up"],
        ["Left unresolved", "The table never gets finished."],
      ],
    },
  },
];

function Timer() {
  const [phase, setPhase] = useState("idle");
  const [left, setLeft] = useState(30);
  const ref = useRef(null);

  useEffect(() => {
    if (phase === "idle" || phase === "done") return;
    ref.current = setInterval(() => {
      setLeft((t) => {
        if (t > 1) return t - 1;
        clearInterval(ref.current);
        if (phase === "prep") {
          setPhase("speak");
          return 60;
        }
        setPhase("done");
        return 0;
      });
    }, 1000);
    return () => clearInterval(ref.current);
  }, [phase]);

  const reset = () => {
    clearInterval(ref.current);
    setPhase("idle");
    setLeft(30);
  };

  const total = phase === "speak" ? 60 : 30;
  const pct = phase === "idle" ? 0 : ((total - left) / total) * 100;

  return (
    <div className="rounded-2xl bg-fog border border-mist p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-slate">
          {phase === "idle" && "30 s prep, then 60 s"}
          {phase === "prep" && "Prepare"}
          {phase === "speak" && "Speak now"}
          {phase === "done" && "Time"}
        </span>
        <span
          className={`font-mono text-2xl tabular-nums ${
            phase === "speak" ? "text-amber2" : "text-ink"
          }`}
        >
          {String(Math.floor(left / 60)).padStart(2, "0")}:
          {String(left % 60).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-mist">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${
            phase === "speak" ? "bg-amber2" : "bg-sapphire"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <button
        onClick={phase === "idle" ? () => setPhase("prep") : reset}
        className={`mt-3 w-full rounded-lg py-2 text-sm font-semibold transition-colors ${
          phase === "idle"
            ? "bg-gold text-white hover:bg-gold-dark"
            : "bg-white border border-mist text-ink hover:bg-fog"
        }`}
      >
        {phase === "idle" ? "Start drill" : "Reset"}
      </button>
    </div>
  );
}

export default function CelpipTrainer() {
  const [i, setI] = useState(0);
  const [task, setTask] = useState("t3");
  const [mode, setMode] = useState("study");
  const [active, setActive] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [showBuild, setShowBuild] = useState(false);

  const s = SCENES[i];
  const t = s[task];
  const info = TASK_INFO[task];

  const reset = () => {
    setActive(null);
    setRevealed(false);
    setShowBuild(false);
  };
  const go = (d) => {
    setI((p) => (p + d + SCENES.length) % SCENES.length);
    reset();
  };

  return (
    <>
      <TaskNav />
      <Hero
        eyebrow={<>Speaking · Tasks 3 &amp; 4 of 8</>}
        title={
          <>
            One image, <span className="hero-line italic">two answers</span>
          </>
        }
        description={
          <>
            Tasks 3 and 4 use the same picture. Task 3 describes what is there;
            Task 4 predicts the next two to five minutes. Drill both across ten
            scenes.
          </>
        }
        stats={[
          {
            label: "Prep time",
            value: (
              <>
                30<span className="text-lg">s</span>
              </>
            ),
          },
          {
            label: "Speaking time",
            value: (
              <>
                60<span className="text-lg">s</span>
              </>
            ),
          },
          { label: "Scenes", value: <>{SCENES.length}</> },
          { label: "Target band", value: <>8–10</> },
        ]}
      />

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Task toggle */}
        <div className="flex gap-2">
          {["t3", "t4"].map((k) => (
            <button
              key={k}
              onClick={() => {
                setTask(k);
                reset();
              }}
              className={`flex-1 rounded-2xl border px-4 py-3 text-left transition-colors ${
                task === k
                  ? "bg-ink text-fog border-ink"
                  : "bg-white text-slate border-mist hover:text-ink hover:border-slate"
              }`}
            >
              <span className="block text-sm font-semibold">
                {TASK_INFO[k].label}
              </span>
              <span className="block text-[11px] opacity-70">
                {TASK_INFO[k].sub}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate">{info.brief}</p>

        {/* Method */}
        <div className="mt-4">
          <Accordion
            defaultOpen={false}
            header={
              <span className="text-sm font-semibold text-ink">
                {info.label} in five steps
              </span>
            }
          >
            <ol className="space-y-2">
              {info.steps.map(([h, d], n) => (
                <li key={h} className="flex gap-3 text-sm">
                  <span className="mt-0.5 font-mono text-xs text-gold-dark">
                    {n + 1}
                  </span>
                  <span>
                    <span className="font-medium text-ink">{h}. </span>
                    <span className="text-slate">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Accordion>
        </div>

        {/* Mode */}
        <div className="mt-4 flex gap-2">
          {["study", "drill"].map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setRevealed(false);
              }}
              className={`flex-1 rounded-lg border py-2 text-sm font-medium capitalize transition-colors ${
                mode === m
                  ? "bg-mist text-ink border-mist"
                  : "bg-white text-slate border-mist hover:text-ink"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Scene card */}
        <div className="mt-4 rounded-2xl bg-white border border-mist p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-semibold text-ink">{s.scene}</h2>
            <span className="shrink-0 font-mono text-xs text-slate">
              {String(i + 1).padStart(2, "0")}/{SCENES.length}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate">{s.visible}</p>

          {mode === "drill" && !revealed ? (
            <div className="mt-4 space-y-3">
              <Timer />
              <button
                onClick={() => setRevealed(true)}
                className="w-full rounded-xl border border-dashed border-mist py-3 text-sm text-slate hover:border-gold hover:text-gold-dark transition-colors"
              >
                Show the model answer
              </button>
            </div>
          ) : (
            <>
              {task === "t3" && (
                <div className="mt-4 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate">
                  {["Centre", "Left", "Right", "Back"].map((z, n) => (
                    <React.Fragment key={z}>
                      {n > 0 && <span className="text-slate/60">→</span>}
                      <span className="rounded bg-fog border border-mist px-1.5 py-0.5">
                        {z}
                      </span>
                    </React.Fragment>
                  ))}
                  <span className="ml-auto normal-case text-slate/70">
                    one direction only
                  </span>
                </div>
              )}

              <div className="mt-3 space-y-2">
                {t.sentences.map(([text, role], n) => {
                  const r = ROLES[role];
                  const on = active === n;
                  return (
                    <button
                      key={n}
                      onClick={() => setActive(on ? null : n)}
                      className={`flex w-full gap-3 rounded-xl p-2.5 text-left transition-colors ${
                        on ? `bg-fog ring-1 ${r.ring}` : "hover:bg-fog"
                      }`}
                    >
                      <span
                        className={`mt-0.5 w-1 shrink-0 self-stretch rounded-full ${r.bar}`}
                      />
                      <span className="text-sm leading-relaxed text-ink">
                        {text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {active !== null && (
                <div className="mt-3 rounded-xl bg-fog border border-mist p-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      ROLES[t.sentences[active][1]].chip
                    }`}
                  >
                    {ROLES[t.sentences[active][1]].name}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate">
                    {ROLES[t.sentences[active][1]].job}
                  </p>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-mist bg-fog px-2 py-0.5 font-mono text-[10px] text-slate"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-1.5 text-[10px] uppercase tracking-wider text-slate">
                {info.chipsLabel}
              </p>

              <button
                onClick={() => setShowBuild((v) => !v)}
                className="mt-4 w-full rounded-xl bg-gold-light py-2.5 text-sm font-semibold text-gold-dark border border-gold/30 hover:bg-gold/20 transition-colors"
              >
                {showBuild
                  ? "Hide"
                  : task === "t3"
                    ? "How this description was built"
                    : "How this close was built"}
              </button>

              {showBuild && (
                <dl className="mt-3 space-y-2.5 rounded-xl bg-fog border border-mist p-4">
                  {t.build.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] uppercase tracking-widest text-gold-dark">
                        {k}
                      </dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-ink">
                        {v}
                      </dd>
                    </div>
                  ))}
                  {t.note && (
                    <p className="border-t border-mist pt-2.5 text-xs italic leading-relaxed text-slate">
                      {t.note}
                    </p>
                  )}
                </dl>
              )}
            </>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => go(-1)}
            className="flex-1 rounded-xl bg-white border border-mist py-3 text-sm font-medium text-ink hover:bg-fog transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => go(1)}
            className="flex-1 rounded-xl bg-ink py-3 text-sm font-semibold text-fog hover:bg-steel transition-colors"
          >
            Next scene
          </button>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-slate">
          {info.banned}
        </p>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
        <p className="text-xs text-slate mb-4">
          CELPIP Prep — Speaking Tasks 3 &amp; 4 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          One picture, two jobs. Describe the scene with a clean camera route,
          then predict the next few minutes with a planted loose end and a
          low-certainty close.
        </p>
      </footer>
    </>
  );
}
