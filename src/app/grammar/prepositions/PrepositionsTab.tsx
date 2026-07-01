// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";

const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

/* ───────────────────────── inline data ───────────────────────── */

      const CELPIP_PREP_TASKS = [
        {
          type: "writing",
          task: "Writing Task 1 — Email",
          badge: "✉️ Writing Task 1",
          badgeBg: "#dbeafe",
          badgeColor: "#1e40af",
          scenario:
            "Your neighbour has been making loud noise late at night. Write an email to your building manager to report the problem and request action.",
          sampleResponse: `Dear Mr. Thompson,\n\nI am writing to bring a noise concern <strong>to</strong> your attention. I live <strong>in</strong> unit 4B, <strong>on</strong> the third floor, and <strong>for</strong> the past two weeks my neighbour <strong>in</strong> unit 4C has been playing loud music late <strong>at</strong> night, often continuing well past midnight.\n\nThe noise begins <strong>around</strong> 10 p.m. and can be heard clearly <strong>through</strong> the walls. I have spoken <strong>to</strong> the neighbour directly, but the situation has not improved. I am concerned <strong>about</strong> the impact this is having <strong>on</strong> my sleep and my ability to work <strong>in</strong> the mornings.\n\nI would appreciate it if you could look <strong>into</strong> this matter and remind all residents <strong>of</strong> the quiet-hours policy. I look forward <strong>to</strong> hearing from you.\n\nSincerely,\nAlex Kim`,
          highlights: [
            {
              prep: "to",
              use: "direction / indirect object — bring something to someone's attention",
            },
            {
              prep: "in",
              use: "location — living in a unit, hearing through a wall",
            },
            { prep: "on", use: "floor level — on the third floor" },
            { prep: "for", use: "duration — for the past two weeks" },
            { prep: "at", use: "specific time — at night" },
            { prep: "around", use: "approximate time — around 10 p.m." },
            {
              prep: "through",
              use: "movement / medium — heard through the walls",
            },
            {
              prep: "about",
              use: "topic of concern — concerned about the impact",
            },
            { prep: "into", use: "investigation — look into a matter" },
            { prep: "of", use: "possession — policy of the building" },
          ],
        },
        {
          type: "writing",
          task: "Writing Task 2 — Survey Response",
          badge: "📝 Writing Task 2",
          badgeBg: "#dcfce7",
          badgeColor: "#166534",
          scenario:
            "Your city is asking residents whether a large park should be converted into a shopping mall. Write your opinion in response to a community survey.",
          sampleResponse: `I am strongly opposed <strong>to</strong> converting the park <strong>into</strong> a commercial mall. Green spaces play a vital role <strong>in</strong> the mental and physical health <strong>of</strong> city residents, particularly those who live <strong>in</strong> high-density apartment buildings <strong>with</strong> no access <strong>to</strong> private yards.\n\nThe park is used <strong>by</strong> hundreds of families every weekend. Children rely <strong>on</strong> it <strong>for</strong> outdoor play, and seniors gather there <strong>for</strong> morning walks and socializing. Removing this space would place a disproportionate burden <strong>on</strong> those residents who depend <strong>on</strong> it most.\n\nInstead <strong>of</strong> replacing the park, the city should invest <strong>in</strong> improving its facilities. <strong>In</strong> conclusion, I urge decision-makers to reconsider <strong>in</strong> favour <strong>of</strong> the community's long-term wellbeing.`,
          highlights: [
            {
              prep: "to",
              use: "opposition — opposed to something; access to yards",
            },
            {
              prep: "into",
              use: "transformation — converting something into something else",
            },
            {
              prep: "in",
              use: "location / domain — in the city, in conclusion, in high-density areas",
            },
            {
              prep: "of",
              use: "belonging — health of residents, role of spaces",
            },
            {
              prep: "with",
              use: "accompaniment / characteristic — buildings with no yard",
            },
            {
              prep: "by",
              use: "agent (passive) — used by hundreds of families",
            },
            { prep: "on", use: "reliance — rely on, burden on" },
            {
              prep: "for",
              use: "purpose — for outdoor play, for morning walks",
            },
            {
              prep: "instead of",
              use: "contrast/alternative — instead of replacing",
            },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 3 — Describing a Scene",
          badge: "🗣️ Speaking Task 3",
          badgeBg: "#fef3c7",
          badgeColor: "#92400e",
          scenario:
            "You are shown an image of a busy farmer's market in a town square. Describe what you see in detail.",
          sampleResponse: `<em>In</em> this picture, I can see a lively farmer's market taking place <em>in</em> the centre of a town square. There are several colourful stalls arranged <em>in</em> rows, and vendors are standing <em>behind</em> their tables, selling fresh produce. <em>On</em> the left side of the image, a woman is looking <em>at</em> a basket of tomatoes and speaking <em>with</em> the vendor. <em>In</em> the background, there are tall buildings <em>on</em> both sides of the street. A group of children is running <em>between</em> the stalls, and a man <em>in</em> a red jacket is walking <em>toward</em> the entrance <em>with</em> a reusable shopping bag <em>in</em> his hand. The overall atmosphere appears cheerful, and the market looks well-attended <em>by</em> people <em>of</em> all ages.`,
          highlights: [
            {
              prep: "in",
              use: "location — in the picture, in the centre, in the background, in his hand",
            },
            {
              prep: "on",
              use: "side / surface — on the left side, on both sides",
            },
            { prep: "behind", use: "position — standing behind the tables" },
            { prep: "at", use: "direction of gaze — looking at something" },
            {
              prep: "with",
              use: "accompaniment — speaking with the vendor, with a bag",
            },
            { prep: "between", use: "spatial — running between the stalls" },
            {
              prep: "toward",
              use: "direction of movement — walking toward the entrance",
            },
            { prep: "by", use: "agent (passive) — attended by people" },
            { prep: "of", use: "specification — people of all ages" },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 5 — Giving Advice",
          badge: "💬 Speaking Task 5",
          badgeBg: "#ede9fe",
          badgeColor: "#5b21b6",
          scenario:
            "Your friend is thinking about moving to a new city for work. They are nervous about the change. Give them advice.",
          sampleResponse: `I totally understand your concern <em>about</em> moving. It's completely normal to feel nervous <em>about</em> such a big change. First, I'd suggest doing some research <em>on</em> the city before you go. Look <em>into</em> the cost <em>of</em> living, the neighbourhoods close <em>to</em> your workplace, and what the public transit system is like.\n\nOnce you're there, try to get <em>out</em> and explore. Join a club or a group based <em>on</em> your interests — this is one <em>of</em> the best ways to meet people. Don't rely <em>on</em> technology alone to stay connected <em>with</em> friends back home. <em>In</em> the beginning it can feel overwhelming, but <em>within</em> a few months you'll start to feel <em>at</em> home. I went <em>through</em> the same experience, and it turned <em>into</em> one <em>of</em> the best decisions <em>of</em> my life.`,
          highlights: [
            {
              prep: "about",
              use: "subject of concern or emotion — concern about moving, nervous about change",
            },
            {
              prep: "on",
              use: "topic — research on the city, based on interests",
            },
            {
              prep: "into",
              use: "investigation — look into the cost; transformation — turned into",
            },
            {
              prep: "of",
              use: "belonging / specification — cost of living, one of the best",
            },
            {
              prep: "to",
              use: "proximity / direction — close to your workplace, connected to friends",
            },
            { prep: "out", use: "phrasal verb — get out and explore" },
            { prep: "on", use: "dependence — rely on technology" },
            { prep: "with", use: "connection — stay connected with friends" },
            { prep: "in", use: "time phrase — in the beginning" },
            { prep: "within", use: "time frame — within a few months" },
            { prep: "at", use: "state — feel at home" },
            {
              prep: "through",
              use: "experience — went through the same experience",
            },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 7 — Expressing an Opinion",
          badge: "🎤 Speaking Task 7",
          badgeBg: "#fce7f3",
          badgeColor: "#be185d",
          scenario:
            "Some people believe that children should not be allowed to use smartphones until they are teenagers. Do you agree or disagree?",
          sampleResponse: `I agree <em>with</em> the idea that children should be limited <em>in</em> their smartphone use, but I don't think a total ban <em>until</em> the teenage years is realistic. The key issue is not access <em>to</em> the device itself, but rather what children are exposed <em>to</em> <em>on</em> those devices. Parents need to be <em>in</em> control <em>of</em> screen time <em>from</em> an early age. Instead <em>of</em> banning smartphones outright, families should focus <em>on</em> building healthy habits <em>around</em> technology. <em>For</em> example, no phones <em>during</em> meals or <em>before</em> bedtime. Children who are taught to use technology responsibly <em>from</em> a young age are better prepared <em>for</em> the digital world they will grow up <em>in</em>.`,
          highlights: [
            { prep: "with", use: "agreement — agree with an idea" },
            {
              prep: "in",
              use: "scope/control — limited in their use, in control",
            },
            { prep: "until", use: "time limit — until the teenage years" },
            {
              prep: "to",
              use: "direction / access — access to the device, exposed to content",
            },
            {
              prep: "on",
              use: "medium — on those devices; topic — focus on habits",
            },
            { prep: "of", use: "possession — control of screen time" },
            {
              prep: "from",
              use: "starting point — from an early age, from a young age",
            },
            { prep: "instead of", use: "alternative — instead of banning" },
            {
              prep: "around",
              use: "habits around something — habits around technology",
            },
            {
              prep: "for",
              use: "example marker and purpose — for example, prepared for the world",
            },
            { prep: "during", use: "time — during meals" },
            { prep: "before", use: "time order — before bedtime" },
          ],
        },
      ];

      const CELPIP_PREP_GROUPS_INLINE = [
        {
          emoji: "🕐",
          category: "Time Prepositions",
          bg: "#dbeafe",
          color: "#1e40af",
          border: "#bfdbfe",
          intro:
            "Use these to express when something happens. Correct time prepositions are essential in CELPIP Writing emails and Speaking opinion tasks.",
          items: [
            {
              prep: "at",
              rule: "Exact times and fixed expressions.",
              examples: [
                "The meeting is <strong>at</strong> 9 a.m.",
                "I work best <strong>at</strong> night.",
                "She arrived <strong>at</strong> noon.",
              ],
            },
            {
              prep: "on",
              rule: "Days and specific dates.",
              examples: [
                "The test is <strong>on</strong> Monday.",
                "We moved <strong>on</strong> July 15th.",
                "Classes resume <strong>on</strong> the first day of term.",
              ],
            },
            {
              prep: "in",
              rule: "Months, years, seasons, longer periods.",
              examples: [
                "She graduated <strong>in</strong> 2022.",
                "Temperatures drop <strong>in</strong> winter.",
                "I applied <strong>in</strong> September.",
              ],
            },
            {
              prep: "for",
              rule: "Duration — how long something lasts.",
              examples: [
                "I have lived here <strong>for</strong> three years.",
                "The noise continued <strong>for</strong> hours.",
                "She studied <strong>for</strong> the exam all week.",
              ],
            },
            {
              prep: "since",
              rule: "Starting point up to now (used with perfect tenses).",
              examples: [
                "I've worked there <strong>since</strong> 2019.",
                "The road has been closed <strong>since</strong> Monday.",
                "He hasn't called <strong>since</strong> last week.",
              ],
            },
            {
              prep: "by",
              rule: "Deadline — no later than.",
              examples: [
                "Please submit the form <strong>by</strong> Friday.",
                "The report must be done <strong>by</strong> noon.",
                "I need an answer <strong>by</strong> tomorrow.",
              ],
            },
            {
              prep: "until / till",
              rule: "Continuing up to a point in time.",
              examples: [
                "The office is open <strong>until</strong> 6 p.m.",
                "I waited <strong>until</strong> he arrived.",
                "Classes run <strong>till</strong> mid-December.",
              ],
            },
            {
              prep: "during",
              rule: "Within a period or event.",
              examples: [
                "Noise is not allowed <strong>during</strong> quiet hours.",
                "I took notes <strong>during</strong> the meeting.",
                "She visited family <strong>during</strong> the holidays.",
              ],
            },
            {
              prep: "within",
              rule: "Inside a time frame.",
              examples: [
                "Please reply <strong>within</strong> two business days.",
                "I'll finish <strong>within</strong> an hour.",
                "Improvements were seen <strong>within</strong> weeks.",
              ],
            },
            {
              prep: "before / after",
              rule: "Order of events.",
              examples: [
                "Please read the instructions <strong>before</strong> you begin.",
                "I'll call you <strong>after</strong> the interview.",
                "Submit your form <strong>before</strong> the deadline.",
              ],
            },
          ],
        },
        {
          emoji: "📍",
          category: "Place & Position Prepositions",
          bg: "#dcfce7",
          color: "#166534",
          border: "#86efac",
          intro:
            "Essential for Speaking Task 3 (describing a scene) and any writing where you describe a setting, layout, or location.",
          items: [
            {
              prep: "at",
              rule: "A specific point or location.",
              examples: [
                "She is <strong>at</strong> the bus stop.",
                "He works <strong>at</strong> City Hall.",
                "Meet me <strong>at</strong> the corner.",
              ],
            },
            {
              prep: "in",
              rule: "Inside an enclosed or defined area.",
              examples: [
                "The folder is <strong>in</strong> my bag.",
                "They live <strong>in</strong> a downtown apartment.",
                "There is a park <strong>in</strong> the neighbourhood.",
              ],
            },
            {
              prep: "on",
              rule: "A surface, floor, or street.",
              examples: [
                "The keys are <strong>on</strong> the table.",
                "She lives <strong>on</strong> the fourth floor.",
                "The store is <strong>on</strong> Main Street.",
              ],
            },
            {
              prep: "above / below",
              rule: "Higher or lower position without touching.",
              examples: [
                "The sign is <strong>above</strong> the entrance.",
                "The parking is <strong>below</strong> the building.",
                "Temperatures dropped <strong>below</strong> freezing.",
              ],
            },
            {
              prep: "beside / next to",
              rule: "Immediately adjacent.",
              examples: [
                "He sat <strong>beside</strong> me.",
                "The pharmacy is <strong>next to</strong> the clinic.",
                "There is a bench <strong>beside</strong> the fountain.",
              ],
            },
            {
              prep: "between",
              rule: "In the middle of two things.",
              examples: [
                "The park is <strong>between</strong> the school and the library.",
                "She sat <strong>between</strong> her parents.",
                "There is a door <strong>between</strong> the two offices.",
              ],
            },
            {
              prep: "behind / in front of",
              rule: "Position relative to the facing side.",
              examples: [
                "The child is hiding <strong>behind</strong> the tree.",
                "A vendor is standing <strong>in front of</strong> the stall.",
                "The car stopped <strong>in front of</strong> our house.",
              ],
            },
            {
              prep: "near / close to",
              rule: "Not far away.",
              examples: [
                "There is a school <strong>near</strong> my home.",
                "She lives <strong>close to</strong> the subway.",
                "The hostel is <strong>near</strong> the city centre.",
              ],
            },
            {
              prep: "across from / opposite",
              rule: "Directly facing something.",
              examples: [
                "The bank is <strong>across from</strong> the post office.",
                "He sat <strong>opposite</strong> me.",
                "There is a café <strong>across from</strong> the park.",
              ],
            },
          ],
        },
        {
          emoji: "➡️",
          category: "Direction & Movement Prepositions",
          bg: "#fef3c7",
          color: "#92400e",
          border: "#fde68a",
          intro:
            "Use these to describe motion — helpful in Speaking Task 3 when describing what people are doing in a scene.",
          items: [
            {
              prep: "to",
              rule: "Movement toward a destination.",
              examples: [
                "She walked <strong>to</strong> the store.",
                "I commute <strong>to</strong> work by subway.",
                "He is heading <strong>to</strong> the airport.",
              ],
            },
            {
              prep: "toward(s)",
              rule: "In the direction of (may not arrive).",
              examples: [
                "He was walking <strong>toward</strong> the exit.",
                "She looked <strong>toward</strong> the window.",
                "The crowd moved <strong>toward</strong> the stage.",
              ],
            },
            {
              prep: "into",
              rule: "Movement entering an enclosed space.",
              examples: [
                "She walked <strong>into</strong> the room.",
                "He poured water <strong>into</strong> the glass.",
                "The bus turned <strong>into</strong> the lot.",
              ],
            },
            {
              prep: "out of",
              rule: "Movement exiting from inside.",
              examples: [
                "She walked <strong>out of</strong> the building.",
                "He took the documents <strong>out of</strong> the folder.",
                "The family moved <strong>out of</strong> the city.",
              ],
            },
            {
              prep: "through",
              rule: "Moving from one side to the other.",
              examples: [
                "She walked <strong>through</strong> the park.",
                "Sound travels <strong>through</strong> walls.",
                "We drove <strong>through</strong> the tunnel.",
              ],
            },
            {
              prep: "past",
              rule: "Moving beyond a point.",
              examples: [
                "We walked <strong>past</strong> the coffee shop.",
                "The bus goes <strong>past</strong> my house.",
                "She ran <strong>past</strong> the finish line.",
              ],
            },
            {
              prep: "along",
              rule: "Moving beside or following a line.",
              examples: [
                "They jogged <strong>along</strong> the river trail.",
                "Trees are planted <strong>along</strong> the road.",
                "She walked <strong>along</strong> the beach.",
              ],
            },
            {
              prep: "across",
              rule: "From one side to the other.",
              examples: [
                "She swam <strong>across</strong> the lake.",
                "We drove <strong>across</strong> the bridge.",
                "He walked <strong>across</strong> the street.",
              ],
            },
          ],
        },
        {
          emoji: "🔗",
          category: "Prepositional Phrases in Formal Writing",
          bg: "#ede9fe",
          color: "#5b21b6",
          border: "#c4b5fd",
          intro:
            "These multi-word prepositions are common in CELPIP Writing Task 1 emails and Task 2 opinion pieces. Mastering them makes your writing sound professional.",
          items: [
            {
              prep: "in addition to",
              rule: "Add another point without saying 'also'.",
              examples: [
                "<strong>In addition to</strong> the noise, the smell has become a problem.",
                "<strong>In addition to</strong> her qualifications, she has great experience.",
                "The plan saves money <strong>in addition to</strong> reducing emissions.",
              ],
            },
            {
              prep: "as a result of",
              rule: "Show cause and effect formally.",
              examples: [
                "<strong>As a result of</strong> the construction, traffic has worsened.",
                "She missed the deadline <strong>as a result of</strong> illness.",
                "<strong>As a result of</strong> the policy, costs were reduced.",
              ],
            },
            {
              prep: "in terms of",
              rule: "Specify the area you're discussing.",
              examples: [
                "<strong>In terms of</strong> cost, the second option is better.",
                "The city has improved <strong>in terms of</strong> public transit.",
                "I need guidance <strong>in terms of</strong> next steps.",
              ],
            },
            {
              prep: "with regard to",
              rule: "Introduce a topic formally (common in emails).",
              examples: [
                "<strong>With regard to</strong> your complaint, we have investigated the matter.",
                "I am writing <strong>with regard to</strong> the recent changes.",
                "<strong>With regard to</strong> your question, please see the attached file.",
              ],
            },
            {
              prep: "on behalf of",
              rule: "Acting for someone else.",
              examples: [
                "I am writing <strong>on behalf of</strong> our team.",
                "She attended the meeting <strong>on behalf of</strong> the director.",
                "He signed the form <strong>on behalf of</strong> his client.",
              ],
            },
            {
              prep: "in favour of",
              rule: "Show support or preference.",
              examples: [
                "Residents voted <strong>in favour of</strong> the new park.",
                "I am <strong>in favour of</strong> extending library hours.",
                "The board decided <strong>in favour of</strong> the proposal.",
              ],
            },
            {
              prep: "due to / owing to",
              rule: "Give a formal reason.",
              examples: [
                "The delay was <strong>due to</strong> heavy snowfall.",
                "<strong>Owing to</strong> budget constraints, the project was cancelled.",
                "Services are limited <strong>due to</strong> ongoing construction.",
              ],
            },
            {
              prep: "instead of",
              rule: "Offer an alternative.",
              examples: [
                "<strong>Instead of</strong> building a mall, invest in the park.",
                "She took the bus <strong>instead of</strong> driving.",
                "<strong>Instead of</strong> complaining, he found a solution.",
              ],
            },
          ],
        },
        {
          emoji: "⚠️",
          category: "Common Traps",
          bg: "#fee2e2",
          color: "#991b1b",
          border: "#fca5a5",
          items: [
            {
              prep: "❌ interested on → ✅ interested in",
              rule: "Always use 'in' after interested.",
              examples: [
                "I am interested <strong>in</strong> improving my English.",
                "She is interested <strong>in</strong> the position.",
              ],
            },
            {
              prep: "❌ depend of → ✅ depend on",
              rule: "'Depend' always pairs with 'on'.",
              examples: [
                "The outcome depends <strong>on</strong> your effort.",
                "You can depend <strong>on</strong> me.",
              ],
            },
            {
              prep: "❌ arrive to → ✅ arrive at / in",
              rule: "Use 'at' for specific places; 'in' for cities/countries.",
              examples: [
                "I arrived <strong>at</strong> the airport at 6 a.m.",
                "She arrived <strong>in</strong> Canada last year.",
              ],
            },
            {
              prep: "❌ discuss about → ✅ discuss (no preposition)",
              rule: "'Discuss' is a transitive verb — it takes a direct object, not 'about'.",
              examples: [
                "We discussed <strong>the issue</strong>. (not: discussed about the issue)",
                "Let's discuss <strong>the plan</strong> tomorrow.",
              ],
            },
            {
              prep: "❌ married with → ✅ married to",
              rule: "Use 'to' after 'married'.",
              examples: [
                "She is married <strong>to</strong> a doctor.",
                "They have been married <strong>to</strong> each other for 10 years.",
              ],
            },
            {
              prep: "❌ listen music → ✅ listen to music",
              rule: "'Listen' always needs 'to'.",
              examples: [
                "I listen <strong>to</strong> podcasts on my commute.",
                "He was listening <strong>to</strong> the radio.",
              ],
            },
            {
              prep: "❌ in the weekend → ✅ on the weekend",
              rule: "Use 'on' for days and weekends.",
              examples: [
                "We play hockey <strong>on</strong> the weekend.",
                "The market opens <strong>on</strong> Saturdays.",
              ],
            },
            {
              prep: "❌ good in → ✅ good at",
              rule: "Use 'at' after 'good' to describe a skill.",
              examples: [
                "She is good <strong>at</strong> public speaking.",
                "He is not very good <strong>at</strong> math.",
              ],
            },
          ],
        },
      ];

      const PREP_QUIZ_QUESTIONS = [
        // Time
        {
          q: "The meeting is __ 9 a.m.",
          options: ["in", "on", "at", "for"],
          ans: 2,
          exp: "Use <strong>at</strong> for exact clock times.",
        },
        {
          q: "She has worked here __ 2019.",
          options: ["for", "since", "during", "in"],
          ans: 1,
          exp: "<strong>Since</strong> marks the starting point of an ongoing action (used with perfect tenses).",
        },
        {
          q: "I lived in Toronto __ three years.",
          options: ["since", "during", "for", "until"],
          ans: 2,
          exp: "<strong>For</strong> shows duration — how long something lasted.",
        },
        {
          q: "Please submit the report __ Friday.",
          options: ["until", "by", "on", "at"],
          ans: 1,
          exp: "<strong>By</strong> means no later than a deadline.",
        },
        {
          q: "The library is open __ 8 p.m.",
          options: ["by", "at", "until", "since"],
          ans: 2,
          exp: "<strong>Until</strong> means up to and including that time.",
        },
        {
          q: "She was born __ January.",
          options: ["on", "at", "in", "by"],
          ans: 2,
          exp: "<strong>In</strong> is used with months, years, and seasons.",
        },
        {
          q: "No talking is allowed __ the exam.",
          options: ["for", "during", "while", "at"],
          ans: 1,
          exp: "<strong>During</strong> is used with a noun to describe something happening within that period.",
        },
        {
          q: "The parcel will arrive __ two days.",
          options: ["in", "within", "for", "by"],
          ans: 1,
          exp: "<strong>Within</strong> means before the end of that time frame.",
        },
        {
          q: "He called me __ midnight.",
          options: ["in", "on", "at", "by"],
          ans: 2,
          exp: "<strong>At</strong> is used with specific times including midnight and noon.",
        },
        {
          q: "Please call me __ you arrive.",
          options: ["since", "after", "during", "for"],
          ans: 1,
          exp: "<strong>After</strong> indicates something happens later in sequence.",
        },
        // Place
        {
          q: "She lives __ a small apartment.",
          options: ["at", "on", "in", "by"],
          ans: 2,
          exp: "<strong>In</strong> is used for enclosed spaces and areas.",
        },
        {
          q: "The keys are __ the table.",
          options: ["in", "at", "on", "above"],
          ans: 2,
          exp: "<strong>On</strong> is used for surfaces.",
        },
        {
          q: "He works __ the hospital.",
          options: ["in", "at", "on", "into"],
          ans: 1,
          exp: "<strong>At</strong> is used for specific locations and institutions.",
        },
        {
          q: "The café is __ the corner of King and Bay.",
          options: ["on", "at", "in", "by"],
          ans: 1,
          exp: "<strong>At</strong> is used for a specific point or corner.",
        },
        {
          q: "She lives __ the third floor.",
          options: ["in", "at", "on", "by"],
          ans: 2,
          exp: "<strong>On</strong> is used with floor levels.",
        },
        {
          q: "The park is __ the school and the library.",
          options: ["among", "between", "beside", "across"],
          ans: 1,
          exp: "<strong>Between</strong> is used when referring to two defined points.",
        },
        {
          q: "He stood __ the door, waiting.",
          options: ["in front of", "above", "among", "through"],
          ans: 0,
          exp: "<strong>In front of</strong> means facing or before the entrance side.",
        },
        {
          q: "There is a pharmacy __ to the clinic.",
          options: ["next", "close", "beside", "near"],
          ans: 0,
          exp: "<strong>Next to</strong> means immediately adjacent.",
        },
        {
          q: "The sign is __ the entrance.",
          options: ["over", "above", "on", "across"],
          ans: 1,
          exp: "<strong>Above</strong> means at a higher level, without necessarily touching.",
        },
        {
          q: "She sat __ her parents.",
          options: ["among", "between", "beside", "in front of"],
          ans: 1,
          exp: "<strong>Between</strong> is used when one thing is in the middle of two specific others.",
        },
        // Direction
        {
          q: "She walked __ the room without knocking.",
          options: ["to", "in", "into", "toward"],
          ans: 2,
          exp: "<strong>Into</strong> shows movement entering an enclosed space.",
        },
        {
          q: "We drove __ the tunnel.",
          options: ["across", "past", "through", "along"],
          ans: 2,
          exp: "<strong>Through</strong> means moving from one side of something to the other.",
        },
        {
          q: "He ran __ the finish line.",
          options: ["past", "through", "across", "along"],
          ans: 0,
          exp: "<strong>Past</strong> means moving beyond a point.",
        },
        {
          q: "They jogged __ the river trail.",
          options: ["across", "past", "through", "along"],
          ans: 3,
          exp: "<strong>Along</strong> means moving beside or following a path.",
        },
        {
          q: "She walked __ the street to reach the store.",
          options: ["along", "across", "through", "past"],
          ans: 1,
          exp: "<strong>Across</strong> means from one side to the other.",
        },
        {
          q: "He was walking __ the exit when I called him.",
          options: ["to", "into", "toward", "through"],
          ans: 2,
          exp: "<strong>Toward</strong> means in the direction of, without necessarily arriving.",
        },
        {
          q: "The family moved __ the city last year.",
          options: ["out", "out of", "from", "away"],
          ans: 1,
          exp: "<strong>Out of</strong> means exiting from inside a place.",
        },
        {
          q: "She commutes __ work by subway every day.",
          options: ["at", "to", "into", "toward"],
          ans: 1,
          exp: "<strong>To</strong> shows movement toward a destination.",
        },
        // Formal phrases
        {
          q: "__ the noise, there was also a bad smell.",
          options: ["Instead of", "Due to", "In addition to", "As a result of"],
          ans: 2,
          exp: "<strong>In addition to</strong> adds an extra point without using 'also'.",
        },
        {
          q: "The delay was __ heavy snowfall.",
          options: ["because", "due to", "in terms of", "owing"],
          ans: 1,
          exp: "<strong>Due to</strong> gives a formal reason; it must be followed by a noun/noun phrase.",
        },
        {
          q: "I am writing __ your complaint.",
          options: ["with regard to", "in terms of", "instead of", "due to"],
          ans: 0,
          exp: "<strong>With regard to</strong> is a formal phrase used to introduce the subject of a letter or email.",
        },
        {
          q: "She attended the meeting __ the director.",
          options: ["instead of", "on behalf of", "in favour of", "due to"],
          ans: 1,
          exp: "<strong>On behalf of</strong> means representing or acting for someone else.",
        },
        {
          q: "Residents voted __ the new park.",
          options: [
            "in favour of",
            "instead of",
            "in addition to",
            "as a result of",
          ],
          ans: 0,
          exp: "<strong>In favour of</strong> means in support of something.",
        },
        {
          q: "__ replacing the park, the city should improve it.",
          options: ["Due to", "In terms of", "Instead of", "In addition to"],
          ans: 2,
          exp: "<strong>Instead of</strong> presents an alternative action.",
        },
        {
          q: "The project was cancelled __ budget constraints.",
          options: ["due to", "in terms of", "with regard to", "instead of"],
          ans: 0,
          exp: "<strong>Due to</strong> / <strong>owing to</strong> introduce the formal cause.",
        },
        // Common traps
        {
          q: "She is very interested __ learning English.",
          options: ["on", "in", "about", "for"],
          ans: 1,
          exp: "Always use <strong>interested in</strong> — 'interested on' is incorrect.",
        },
        {
          q: "The result depends __ how much you study.",
          options: ["of", "from", "on", "at"],
          ans: 2,
          exp: "<strong>Depend on</strong> is the correct collocation.",
        },
        {
          q: "I arrived __ the airport at 6 a.m.",
          options: ["to", "in", "at", "on"],
          ans: 2,
          exp: "Use <strong>arrive at</strong> for specific places (airport, station, school).",
        },
        {
          q: "She arrived __ Canada in November.",
          options: ["at", "to", "in", "on"],
          ans: 2,
          exp: "Use <strong>arrive in</strong> for cities and countries.",
        },
        {
          q: "Let's discuss __ the proposal tomorrow.",
          options: ["about", "on", "— (no preposition)", "for"],
          ans: 2,
          exp: "<strong>Discuss</strong> is transitive — no preposition needed: 'discuss the proposal'.",
        },
        {
          q: "He is married __ a doctor.",
          options: ["with", "to", "and", "by"],
          ans: 1,
          exp: "Always use <strong>married to</strong>, not 'married with'.",
        },
        {
          q: "I love listening __ music on my commute.",
          options: ["— (no prep)", "at", "to", "for"],
          ans: 2,
          exp: "<strong>Listen to</strong> always requires 'to'.",
        },
        {
          q: "We usually play hockey __ the weekend.",
          options: ["in", "at", "during", "on"],
          ans: 3,
          exp: "Use <strong>on</strong> for days and weekends.",
        },
        {
          q: "She is very good __ public speaking.",
          options: ["in", "at", "on", "for"],
          ans: 1,
          exp: "Use <strong>good at</strong> to describe a skill or ability.",
        },
        {
          q: "I am not satisfied __ the results.",
          options: ["from", "by", "with", "about"],
          ans: 2,
          exp: "<strong>Satisfied with</strong> is the correct collocation.",
        },
        // CELPIP context
        {
          q: "I am writing to bring this issue __ your attention.",
          options: ["in", "to", "at", "for"],
          ans: 1,
          exp: "The fixed phrase is <strong>bring something to someone's attention</strong>.",
        },
        {
          q: "The noise can be heard __ the walls.",
          options: ["across", "along", "through", "past"],
          ans: 2,
          exp: "<strong>Through</strong> describes sound passing from one side of a barrier to the other.",
        },
        {
          q: "I am concerned __ the impact on my sleep.",
          options: ["for", "of", "about", "with"],
          ans: 2,
          exp: "<strong>Concerned about</strong> is the standard collocation for expressing worry.",
        },
        {
          q: "The park is used __ hundreds of families every weekend.",
          options: ["from", "with", "to", "by"],
          ans: 3,
          exp: "<strong>By</strong> introduces the agent in passive constructions.",
        },
        {
          q: "Children rely __ the park for outdoor play.",
          options: ["at", "in", "on", "upon"],
          ans: 2,
          exp: "<strong>Rely on</strong> is the correct collocation.",
        },
        {
          q: "__ conclusion, I urge the city to reconsider.",
          options: ["At", "In", "On", "By"],
          ans: 1,
          exp: "<strong>In conclusion</strong> is the standard linking phrase to end a formal response.",
        },
        {
          q: "I look forward __ hearing from you.",
          options: ["to", "for", "at", "about"],
          ans: 0,
          exp: "<strong>Look forward to</strong> — 'to' is a preposition here, so it's followed by a gerund.",
        },
        {
          q: "__ the beginning, the new city felt overwhelming.",
          options: ["At", "On", "In", "By"],
          ans: 2,
          exp: "<strong>In the beginning</strong> is the correct fixed phrase.",
        },
        {
          q: "I went __ the same experience when I first moved.",
          options: ["across", "over", "through", "past"],
          ans: 2,
          exp: "<strong>Go through</strong> means to experience something difficult.",
        },
        {
          q: "Within a few months, you will feel __ home.",
          options: ["in", "at", "like", "on"],
          ans: 1,
          exp: "<strong>Feel at home</strong> is the fixed expression meaning to feel comfortable.",
        },
      ];

/* ═══════════════════════════ REFERENCE PANEL ═══════════════════════════ */

function ReferencePanel() {
  return (
    <>
      {CELPIP_PREP_GROUPS_INLINE.map((group, gi) => {
        const isTraps = group.category === "Common Traps";
        return (
          <div key={gi} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b-2 border-gray-100">
              <span className="text-[1.3rem]">{group.emoji}</span>
              <span
                className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
                style={{ background: group.bg, color: group.color }}
              >
                {group.category}
              </span>
              {!isTraps && (
                <span className="text-xs text-gray-400">
                  {group.items.length} prepositions
                </span>
              )}
            </div>
            {group.intro && (
              <div className="text-[13px] text-gray-500 leading-relaxed mb-4 px-3.5 py-2.5 bg-gray-50 rounded-lg border-l-[3px] border-gray-200">
                {group.intro}
              </div>
            )}
            {isTraps ? (
              group.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-pink-200 rounded-xl px-4 py-[0.9rem] mb-3"
                >
                  <div className="text-[13px] font-bold text-pink-700 mb-1.5">
                    {item.prep}
                  </div>
                  <div className="text-[12.5px] text-gray-700 leading-relaxed mb-2">
                    {item.rule}
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    {item.examples.map((e, j) => (
                      <Html
                        key={j}
                        as="div"
                        className="text-xs text-gray-500 italic bg-pink-50 rounded-md px-2 py-[3px] border border-pink-100"
                        html={e}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] max-[600px]:grid-cols-1">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-xl px-4 py-[0.9rem]"
                    style={{ borderColor: group.border }}
                  >
                    <div className="flex items-center justify-between mb-[0.45rem]">
                      <span className="text-[15px] font-bold text-gray-900">
                        {item.prep}
                      </span>
                    </div>
                    <div className="text-[12.5px] text-gray-700 leading-relaxed mb-2">
                      {item.rule}
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      {item.examples.map((e, j) => (
                        <Html
                          key={j}
                          as="div"
                          className="text-xs text-gray-500 italic bg-gray-50 rounded-md px-2 py-[3px] border border-gray-100"
                          html={e}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ═══════════════════════════ TASKS PANEL ═══════════════════════════ */

const TASK_FILTERS = [
  { type: "all", label: "All Tasks" },
  { type: "writing", label: "✉️ Writing Tasks" },
  { type: "speaking", label: "🗣️ Speaking Tasks" },
];

const RESP_EM =
  "[&_strong]:text-blue-600 [&_strong]:not-italic [&_strong]:font-bold [&_strong]:bg-blue-50 [&_strong]:rounded-[3px] [&_strong]:px-[3px] [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-bold [&_em]:bg-blue-50 [&_em]:rounded-[3px] [&_em]:px-[3px]";

function TasksPanel() {
  const [filter, setFilter] = useState("all");
  const tasks = CELPIP_PREP_TASKS.filter(
    (t) => filter === "all" || t.type === filter,
  );

  return (
    <>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
        Each sample below shows a realistic CELPIP scenario. Prepositions in the
        response are{" "}
        <span className="text-blue-600 font-bold bg-blue-50 rounded-[3px] px-[3px]">
          highlighted in blue
        </span>
        . A breakdown below each sample explains why each preposition was chosen.
      </p>

      <div className="flex gap-2 mb-6 flex-wrap">
        {TASK_FILTERS.map((f) => (
          <button
            key={f.type}
            type="button"
            onClick={() => setFilter(f.type)}
            className={`px-4 py-1.5 rounded-full border text-[12.5px] font-medium cursor-pointer transition-all ${
              filter === f.type
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-white border-gray-300 text-gray-500"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {tasks.map((task, i) => (
        <div
          key={i}
          className="mb-10 rounded-2xl border border-gray-200 overflow-hidden bg-white"
        >
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-200 bg-gray-50">
            <span
              className="text-[11.5px] font-bold px-3 py-1 rounded-full tracking-wide"
              style={{ background: task.badgeBg, color: task.badgeColor }}
            >
              {task.badge}
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold ml-auto">
              {task.type.toUpperCase()}
            </span>
          </div>
          <div className="px-5 py-[0.85rem] bg-amber-50 border-b border-amber-200">
            <div className="text-[10.5px] font-bold text-amber-800 uppercase tracking-wider mb-1">
              📋 Scenario
            </div>
            <div className="text-[13px] text-gray-700 leading-relaxed">
              {task.scenario}
            </div>
          </div>
          <div className="px-5 py-4 border-b border-gray-200">
            <div className="text-[10.5px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="text-[13px]">✍️</span> Sample Response —
              prepositions highlighted
            </div>
            <Html
              as="div"
              className={`text-[13.5px] text-gray-900 [line-height:2] whitespace-pre-line ${RESP_EM}`}
              html={task.sampleResponse}
            />
          </div>
          <div className="px-5 py-4">
            <div className="text-[10.5px] font-bold text-gray-700 uppercase tracking-wider mb-2.5">
              🔍 Preposition Breakdown
            </div>
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-1.5 max-[600px]:grid-cols-1">
              {task.highlights.map((h, j) => (
                <div
                  key={j}
                  className="flex gap-2 items-start bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-100"
                >
                  <div className="text-[13px] font-bold text-blue-600 min-w-[52px] shrink-0">
                    {h.prep}
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">{h.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ QUIZ PANEL ═══════════════════════════ */

function QuizPanel() {
  const total = PREP_QUIZ_QUESTIONS.length;
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);

  const answer = (i) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === PREP_QUIZ_QUESTIONS[idx].ans) setScore((s) => s + 1);
  };
  const next = () => {
    setIdx((x) => x + 1);
    setChosen(null);
  };
  const restart = () => {
    setIdx(0);
    setScore(0);
    setChosen(null);
  };

  if (idx >= total) {
    const pct = Math.round((score / total) * 100);
    let msg = "",
      color = "";
    if (pct === 100) {
      msg = "Perfect score! You have mastered prepositions. 🎉";
      color = "#166534";
    } else if (pct >= 80) {
      msg =
        "Excellent work! Review the ones you missed and you'll be ready for CELPIP. 🌟";
      color = "#1e40af";
    } else if (pct >= 60) {
      msg = "Good effort! Focus on common traps and formal phrases. 📚";
      color = "#92400e";
    } else {
      msg =
        "Keep practicing! Go through the Reference and Task Sample tabs, then try again. 💪";
      color = "#991b1b";
    }
    return (
      <div className="text-center py-8 px-4">
        <div
          className="w-[130px] h-[130px] rounded-full border-4 flex flex-col items-center justify-center mx-auto mb-5"
          style={{ borderColor: color }}
        >
          <div className="text-4xl font-extrabold leading-none" style={{ color }}>
            {score}
          </div>
          <div className="text-xs text-gray-500">out of {total}</div>
          <div className="text-[15px] font-bold mt-0.5" style={{ color }}>
            {pct}%
          </div>
        </div>
        <p className="text-sm leading-relaxed max-w-[380px] mx-auto mb-6" style={{ color }}>
          {msg}
        </p>
        <button
          type="button"
          onClick={restart}
          className="px-8 py-2.5 bg-gray-900 text-white rounded-[10px] text-sm font-semibold cursor-pointer hover:opacity-85"
        >
          ↺ Try Again
        </button>
      </div>
    );
  }

  const q = PREP_QUIZ_QUESTIONS[idx];
  const correct = chosen !== null && chosen === q.ans;
  const answeredCount = idx + (chosen !== null ? 1 : 0);

  return (
    <>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
        55 questions covering time, place, direction, formal phrases, and common
        CELPIP traps. Your running score updates after every answer.
      </p>
      <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 mb-5">
        <span className="text-[15px] font-bold text-gray-900">
          Score: {score} / {answeredCount}
        </span>
        <span className="text-xs text-gray-400">
          Question {idx + 1} of {total}
        </span>
      </div>
      <div className="h-[5px] bg-gray-200 rounded-sm mb-6">
        <div
          className="h-[5px] bg-blue-600 rounded-sm transition-all"
          style={{ width: `${Math.round((idx / total) * 100)}%` }}
        />
      </div>
      <div className="text-[17px] font-semibold text-gray-900 leading-snug mb-5">
        {q.q}
      </div>
      <div className="flex flex-col gap-2.5 mb-5">
        {q.options.map((opt, i) => {
          let cls = "bg-white border-gray-300 text-gray-700";
          if (chosen !== null) {
            if (i === q.ans) cls = "bg-green-100 border-green-600 text-green-800 font-semibold";
            else if (i === chosen) cls = "bg-red-100 border-red-600 text-red-800 font-semibold";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={chosen !== null}
              onClick={() => answer(i)}
              className={`px-4 py-[11px] border-[1.5px] rounded-[10px] text-sm font-medium text-left ${cls} ${
                chosen === null
                  ? "cursor-pointer hover:bg-gray-50 hover:border-gray-400"
                  : "cursor-default"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {chosen !== null && (
        <>
          <div
            className={`rounded-[10px] px-3.5 py-2.5 text-[13px] leading-relaxed mb-4 flex flex-col gap-1.5 ${
              correct
                ? "bg-green-50 border border-green-300 text-green-800"
                : "bg-rose-50 border border-red-300 text-red-800"
            }`}
          >
            <span className="font-bold text-[15px]">{correct ? "✓" : "✗"}</span>
            <Html
              className="font-medium [&_strong]:font-bold"
              html={
                correct
                  ? "Correct!"
                  : `Incorrect — the answer is <strong>${q.options[q.ans]}</strong>.`
              }
            />
            <Html
              className="text-[12.5px] text-gray-700 leading-relaxed pt-1 border-t border-black/[0.07] mt-1"
              html={q.exp}
            />
          </div>
          <button
            type="button"
            onClick={next}
            className="px-7 py-2.5 bg-gray-900 text-white rounded-[10px] text-sm font-semibold cursor-pointer hover:opacity-85"
          >
            Next →
          </button>
        </>
      )}
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

const SUB_TABS = [
  { id: "prep-reference", label: "📚 Preposition Reference" },
  { id: "prep-tasks", label: "🎯 CELPIP Task Samples" },
  { id: "prep-quiz", label: "✏️ Quiz" },
];

export default function PrepositionsTab() {
  const [active, setActive] = useState("prep-reference");
  return (
    <>
      <div className="flex gap-0 border-b-2 border-gray-200 mb-7 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-[18px] py-2.5 text-[13px] font-medium cursor-pointer border-b-2 -mb-0.5 bg-none whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {active === "prep-reference" && <ReferencePanel />}
      {active === "prep-tasks" && <TasksPanel />}
      {active === "prep-quiz" && <QuizPanel />}
    </>
  );
}
