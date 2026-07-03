// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";

const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

/* ───────────────────────── inline data ───────────────────────── */

      const PREP_COLLOCATIONS = [
        {
          prep: "on",
          emoji: "🎯",
          bg: "#dbeafe",
          color: "#1e40af",
          border: "#bfdbfe",
          intro:
            "Verbs of attention, dependence, and expenditure that pair with 'on' — extremely common in CELPIP opinion and advice tasks.",
          items: [
            {
              phrase: "focus on",
              meaning: "concentrate your attention or effort on something",
              examples: [
                "In my essay, I will <strong>focus on</strong> the benefits of public transit.",
                "Students should <strong>focus on</strong> improving their weak areas.",
                "The company decided to <strong>focus on</strong> customer service.",
                "Let's <strong>focus on</strong> finding a practical solution.",
                "This year I want to <strong>focus on</strong> my health and fitness.",
                "During the meeting, we will <strong>focus on</strong> next quarter's goals.",
                "Try to <strong>focus on</strong> the positives rather than the problems.",
                "The government should <strong>focus on</strong> creating more jobs.",
                "I need to <strong>focus on</strong> one task at a time.",
                "The report <strong>focuses on</strong> the causes of traffic congestion.",
              ],
            },
            {
              phrase: "depend on",
              meaning: "be determined by; need for support",
              examples: [
                "The success of the project <strong>depends on</strong> teamwork.",
                "Many families <strong>depend on</strong> public transportation.",
                "Whether we go out <strong>depends on</strong> the weather.",
                "You can <strong>depend on</strong> me to finish the report.",
                "The amount you pay <strong>depends on</strong> how much you use.",
                "Small children <strong>depend on</strong> their parents for everything.",
                "Our plans <strong>depend on</strong> whether the budget is approved.",
                "Farmers <strong>depend on</strong> good weather for a strong harvest.",
                "It <strong>depends on</strong> how much time we have.",
                "The whole community <strong>depends on</strong> local volunteers.",
              ],
            },
            {
              phrase: "rely on",
              meaning: "trust or count on someone or something",
              examples: [
                "Small businesses <strong>rely on</strong> loyal customers.",
                "Elderly residents <strong>rely on</strong> community services.",
                "We <strong>rely on</strong> technology to stay connected.",
                "I <strong>rely on</strong> my colleagues for feedback.",
                "Commuters <strong>rely on</strong> the subway to get to work.",
                "You should never <strong>rely on</strong> a single source of income.",
                "The team <strong>relies on</strong> clear communication.",
                "Many students <strong>rely on</strong> scholarships to pay tuition.",
                "He <strong>relies on</strong> his savings during slow months.",
                "I <strong>rely on</strong> my calendar to stay organized.",
              ],
            },
            {
              phrase: "spend (money/time) on",
              meaning: "use money or time for a particular purpose",
              examples: [
                "I <strong>spend</strong> too much money <strong>on</strong> groceries.",
                "She <strong>spends</strong> her weekends <strong>on</strong> volunteer work.",
                "The city <strong>spent</strong> millions <strong>on</strong> new parks.",
                "Don't <strong>spend</strong> too much time <strong>on</strong> one question.",
                "We <strong>spend</strong> a lot <strong>on</strong> transportation each month.",
                "Try not to <strong>spend</strong> hours <strong>on</strong> social media.",
                "They <strong>spent</strong> their savings <strong>on</strong> a new home.",
                "I like to <strong>spend</strong> my free time <strong>on</strong> outdoor activities.",
                "The company <strong>spends</strong> heavily <strong>on</strong> staff training.",
                "He <strong>spends</strong> most of his budget <strong>on</strong> rent.",
              ],
            },
            {
              phrase: "concentrate on",
              meaning: "direct all of your attention to something",
              examples: [
                "It's hard to <strong>concentrate on</strong> studying with background noise.",
                "During the exam, <strong>concentrate on</strong> the task at hand.",
                "He needs to <strong>concentrate on</strong> his career right now.",
                "Let's <strong>concentrate on</strong> what really matters.",
                "I can't <strong>concentrate on</strong> work when I'm tired.",
                "Athletes must <strong>concentrate on</strong> their technique.",
                "Please <strong>concentrate on</strong> the road while driving.",
                "She <strong>concentrated on</strong> finishing the project on time.",
                "<strong>Concentrate on</strong> your breathing to stay calm.",
                "We should <strong>concentrate on</strong> solving the main problem first.",
              ],
            },
            {
              phrase: "insist on",
              meaning: "demand something firmly",
              examples: [
                "My manager <strong>insists on</strong> punctuality.",
                "She <strong>insisted on</strong> paying for dinner.",
                "The customer <strong>insisted on</strong> a full refund.",
                "I <strong>insist on</strong> doing things properly.",
                "He <strong>insists on</strong> checking every detail himself.",
                "The teacher <strong>insists on</strong> neat handwriting.",
                "They <strong>insisted on</strong> seeing the manager.",
                "My parents <strong>insist on</strong> a family dinner every Sunday.",
                "The client <strong>insisted on</strong> meeting in person.",
                "She <strong>insists on</strong> high standards from her team.",
              ],
            },
            {
              phrase: "comment on",
              meaning: "give an opinion or remark about something",
              examples: [
                "The teacher <strong>commented on</strong> my progress.",
                "I'd rather not <strong>comment on</strong> the rumours.",
                "Reviewers <strong>commented on</strong> the poor service.",
                "Could you <strong>comment on</strong> the proposal?",
                "Several people <strong>commented on</strong> how clean the park was.",
                "The manager declined to <strong>comment on</strong> the decision.",
                "Guests <strong>commented on</strong> the excellent food.",
                "She <strong>commented on</strong> the improvement in his work.",
                "Critics <strong>commented on</strong> the film's stunning visuals.",
                "Feel free to <strong>comment on</strong> the draft.",
              ],
            },
            {
              phrase: "base (something) on",
              meaning: "use something as a foundation",
              examples: [
                "The decision was <strong>based on</strong> customer feedback.",
                "The movie is <strong>based on</strong> a true story.",
                "I'll <strong>base</strong> my argument <strong>on</strong> recent data.",
                "Their conclusion was <strong>based on</strong> solid research.",
                "Promotions are <strong>based on</strong> performance.",
                "The design is <strong>based on</strong> customer needs.",
                "His theory is <strong>based on</strong> years of observation.",
                "The price is <strong>based on</strong> the size of the order.",
                "We <strong>base</strong> our decisions <strong>on</strong> reliable evidence.",
                "The rating is <strong>based on</strong> real user reviews.",
              ],
            },
          ],
        },
        {
          prep: "in",
          emoji: "📥",
          bg: "#dcfce7",
          color: "#166534",
          border: "#86efac",
          intro:
            "Verbs of involvement, investment, and outcome that take 'in' — useful when discussing goals, work, and society.",
          items: [
            {
              phrase: "invest in",
              meaning: "put money or effort into something for future benefit",
              examples: [
                "Many people <strong>invest in</strong> stocks for retirement.",
                "The government should <strong>invest in</strong> education.",
                "It's wise to <strong>invest in</strong> your own skills.",
                "The company <strong>invested in</strong> new technology.",
                "We should <strong>invest in</strong> renewable energy.",
                "She <strong>invested in</strong> a small business downtown.",
                "<strong>Investing in</strong> good tools saves money later.",
                "The city plans to <strong>invest in</strong> public transit.",
                "He <strong>invested in</strong> property when prices were low.",
                "It's important to <strong>invest in</strong> employee training.",
              ],
            },
            {
              phrase: "participate in",
              meaning: "take part in an activity or event",
              examples: [
                "All employees are encouraged to <strong>participate in</strong> the survey.",
                "She <strong>participates in</strong> community events.",
                "I'd love to <strong>participate in</strong> the volunteer program.",
                "Students <strong>participate in</strong> group discussions.",
                "Thousands <strong>participated in</strong> the charity run.",
                "He rarely <strong>participates in</strong> class activities.",
                "Everyone is welcome to <strong>participate in</strong> the workshop.",
                "Local residents <strong>participated in</strong> the clean-up drive.",
                "I <strong>participate in</strong> a book club every month.",
                "Many companies <strong>participate in</strong> the job fair.",
              ],
            },
            {
              phrase: "succeed in",
              meaning: "achieve a goal you were working toward",
              examples: [
                "She <strong>succeeded in</strong> passing the exam.",
                "To <strong>succeed in</strong> business, you need patience.",
                "They finally <strong>succeeded in</strong> reducing costs.",
                "He <strong>succeeded in</strong> convincing the board.",
                "We <strong>succeeded in</strong> meeting the deadline.",
                "Few people <strong>succeed in</strong> changing careers so late.",
                "She <strong>succeeded in</strong> building a loyal customer base.",
                "They <strong>succeeded in</strong> raising enough funds.",
                "I hope to <strong>succeed in</strong> my new role.",
                "The team <strong>succeeded in</strong> launching the product on time.",
              ],
            },
            {
              phrase: "specialize in",
              meaning: "focus on a particular area of work or study",
              examples: [
                "The clinic <strong>specializes in</strong> children's health.",
                "She <strong>specializes in</strong> corporate law.",
                "Our team <strong>specializes in</strong> customer support.",
                "I want to <strong>specialize in</strong> data analysis.",
                "This shop <strong>specializes in</strong> handmade furniture.",
                "He <strong>specializes in</strong> repairing vintage cars.",
                "The agency <strong>specializes in</strong> digital marketing.",
                "Our restaurant <strong>specializes in</strong> local cuisine.",
                "She <strong>specializes in</strong> teaching young learners.",
                "The company <strong>specializes in</strong> eco-friendly products.",
              ],
            },
            {
              phrase: "result in",
              meaning: "cause a particular outcome",
              examples: [
                "Poor planning can <strong>result in</strong> delays.",
                "The new policy <strong>resulted in</strong> higher sales.",
                "Skipping meals may <strong>result in</strong> fatigue.",
                "The negotiations <strong>resulted in</strong> an agreement.",
                "Heavy rain <strong>resulted in</strong> flooding downtown.",
                "The mistake <strong>resulted in</strong> a large loss.",
                "Better training <strong>resulted in</strong> fewer errors.",
                "The merger <strong>resulted in</strong> many job cuts.",
                "Careless driving can <strong>result in</strong> accidents.",
                "The campaign <strong>resulted in</strong> greater awareness.",
              ],
            },
            {
              phrase: "believe in",
              meaning: "have confidence in the value of something",
              examples: [
                "I <strong>believe in</strong> treating everyone fairly.",
                "She <strong>believes in</strong> hard work.",
                "We <strong>believe in</strong> supporting local businesses.",
                "You have to <strong>believe in</strong> yourself.",
                "He <strong>believes in</strong> giving people a second chance.",
                "I firmly <strong>believe in</strong> the power of education.",
                "They <strong>believe in</strong> protecting the environment.",
                "Our company <strong>believes in</strong> honest service.",
                "She <strong>believes in</strong> living a simple life.",
                "I <strong>believe in</strong> setting clear goals.",
              ],
            },
            {
              phrase: "engage in",
              meaning: "take part in an activity",
              examples: [
                "Children should <strong>engage in</strong> outdoor play.",
                "The two sides <strong>engaged in</strong> a long discussion.",
                "He likes to <strong>engage in</strong> meaningful conversations.",
                "Employees <strong>engage in</strong> ongoing training.",
                "Students are encouraged to <strong>engage in</strong> debate.",
                "She <strong>engages in</strong> regular exercise.",
                "The company <strong>engages in</strong> charitable work.",
                "We should <strong>engage in</strong> more physical activity.",
                "They <strong>engaged in</strong> a heated argument.",
                "Volunteers <strong>engage in</strong> community projects.",
              ],
            },
          ],
        },
        {
          prep: "to",
          emoji: "➡️",
          bg: "#fef3c7",
          color: "#92400e",
          border: "#fde68a",
          intro:
            "Verbs and adjectives of direction, reaction, and commitment that take 'to' — vital for emails and opinion responses.",
          items: [
            {
              phrase: "allocate (resources) to",
              meaning: "assign money, time, or resources for a purpose",
              examples: [
                "The city <strong>allocated</strong> a large budget <strong>to</strong> development activities.",
                "We should <strong>allocate</strong> more funds <strong>to</strong> healthcare.",
                "The manager <strong>allocated</strong> extra time <strong>to</strong> training.",
                "Resources were <strong>allocated to</strong> the most urgent projects.",
                "The school <strong>allocated</strong> new computers <strong>to</strong> each classroom.",
                "A portion of the profit is <strong>allocated to</strong> research.",
                "They <strong>allocated</strong> a room <strong>to</strong> the new team.",
                "More staff were <strong>allocated to</strong> customer support.",
                "The council <strong>allocated</strong> money <strong>to</strong> road repairs.",
                "We need to <strong>allocate</strong> time <strong>to</strong> careful planning.",
              ],
            },
            {
              phrase: "contribute to",
              meaning: "help cause or add to something",
              examples: [
                "Regular exercise <strong>contributes to</strong> good health.",
                "Everyone <strong>contributed to</strong> the fundraiser.",
                "Pollution <strong>contributes to</strong> climate change.",
                "Her ideas <strong>contributed to</strong> the project's success.",
                "Poor diet <strong>contributes to</strong> many illnesses.",
                "Volunteers <strong>contribute to</strong> the local community.",
                "Stress can <strong>contribute to</strong> poor sleep.",
                "Each team member <strong>contributed to</strong> the win.",
                "Reading <strong>contributes to</strong> a wider vocabulary.",
                "Heavy traffic <strong>contributes to</strong> air pollution.",
              ],
            },
            {
              phrase: "lead to",
              meaning: "result in or cause something",
              examples: [
                "Hard work often <strong>leads to</strong> success.",
                "Poor communication can <strong>lead to</strong> misunderstandings.",
                "The investment <strong>led to</strong> significant growth.",
                "Stress may <strong>lead to</strong> health problems.",
                "Small savings can <strong>lead to</strong> big rewards.",
                "Bad habits can <strong>lead to</strong> serious issues.",
                "The discovery <strong>led to</strong> new treatments.",
                "Skipping practice <strong>leads to</strong> poor results.",
                "Kindness can <strong>lead to</strong> lasting friendships.",
                "The decision <strong>led to</strong> major changes.",
              ],
            },
            {
              phrase: "adapt to",
              meaning: "adjust to a new situation",
              examples: [
                "It took time to <strong>adapt to</strong> the new city.",
                "Companies must <strong>adapt to</strong> changing markets.",
                "Children quickly <strong>adapt to</strong> new schools.",
                "We need to <strong>adapt to</strong> remote work.",
                "Immigrants often have to <strong>adapt to</strong> a new culture.",
                "Businesses must <strong>adapt to</strong> new technology.",
                "It's not easy to <strong>adapt to</strong> a different climate.",
                "She <strong>adapted to</strong> her new role quickly.",
                "We must <strong>adapt to</strong> changing customer expectations.",
                "Plants <strong>adapt to</strong> their environment.",
              ],
            },
            {
              phrase: "object to",
              meaning: "disagree with or oppose something",
              examples: [
                "Many residents <strong>objected to</strong> the new highway.",
                "I <strong>object to</strong> the proposed changes.",
                "She <strong>objected to</strong> working overtime without pay.",
                "Some parents <strong>objected to</strong> the new policy.",
                "Neighbours <strong>objected to</strong> the late-night noise.",
                "He <strong>objected to</strong> the unfair treatment.",
                "Several members <strong>objected to</strong> the plan.",
                "I strongly <strong>object to</strong> that suggestion.",
                "Workers <strong>objected to</strong> the longer hours.",
                "They <strong>objected to</strong> the increase in fees.",
              ],
            },
            {
              phrase: "respond to",
              meaning: "reply or react to something",
              examples: [
                "Please <strong>respond to</strong> the email by Friday.",
                "The company was slow to <strong>respond to</strong> complaints.",
                "How did they <strong>respond to</strong> the news?",
                "We must <strong>respond to</strong> customer needs.",
                "The staff <strong>responded to</strong> the emergency quickly.",
                "She didn't <strong>respond to</strong> my message.",
                "The city <strong>responded to</strong> residents' concerns.",
                "He <strong>responded to</strong> the criticism calmly.",
                "Please <strong>respond to</strong> the invitation soon.",
                "The team <strong>responded to</strong> the challenge well.",
              ],
            },
            {
              phrase: "commit to",
              meaning: "dedicate yourself fully to something",
              examples: [
                "I'm ready to <strong>commit to</strong> this project.",
                "The company <strong>committed to</strong> reducing waste.",
                "She <strong>committed to</strong> learning English.",
                "We should <strong>commit to</strong> regular exercise.",
                "He <strong>committed to</strong> finishing the course.",
                "The government <strong>committed to</strong> lowering emissions.",
                "I can't <strong>commit to</strong> a long-term plan yet.",
                "They <strong>committed to</strong> improving customer service.",
                "She <strong>committed to</strong> volunteering every weekend.",
                "We are <strong>committed to</strong> fair treatment for everyone.",
              ],
            },
            {
              phrase: "look forward to",
              meaning: "anticipate something with pleasure",
              examples: [
                "I <strong>look forward to</strong> hearing from you.",
                "We <strong>look forward to</strong> working with you.",
                "She <strong>looks forward to</strong> the weekend.",
                "They <strong>look forward to</strong> the annual conference.",
                "I <strong>look forward to</strong> meeting you in person.",
                "He <strong>looks forward to</strong> his morning coffee.",
                "We <strong>look forward to</strong> your reply.",
                "The children <strong>look forward to</strong> summer vacation.",
                "I <strong>look forward to</strong> seeing the final results.",
                "She <strong>looks forward to</strong> starting her new job.",
              ],
            },
            {
              phrase: "be similar to",
              meaning: "resemble or be like something",
              examples: [
                "This job is <strong>similar to</strong> my previous one.",
                "Her writing style is <strong>similar to</strong> mine.",
                "The new model is <strong>similar to</strong> the old one.",
                "Their culture is <strong>similar to</strong> ours in many ways.",
                "This recipe is <strong>similar to</strong> my grandmother's.",
                "The two cities are <strong>similar to</strong> each other.",
                "His opinion is <strong>similar to</strong> mine.",
                "The new phone is <strong>similar to</strong> last year's model.",
                "Her voice is <strong>similar to</strong> her sister's.",
                "The climate here is <strong>similar to</strong> my hometown's.",
              ],
            },
          ],
        },
        {
          prep: "for",
          emoji: "🎁",
          bg: "#ede9fe",
          color: "#5b21b6",
          border: "#c4b5fd",
          intro:
            "Verbs and adjectives of purpose, cause, and responsibility that pair with 'for'.",
          items: [
            {
              phrase: "apply for",
              meaning: "make a formal request for something",
              examples: [
                "I plan to <strong>apply for</strong> the manager position.",
                "She <strong>applied for</strong> a scholarship.",
                "You can <strong>apply for</strong> a refund online.",
                "Many people <strong>applied for</strong> the job.",
                "He <strong>applied for</strong> a student loan.",
                "We <strong>applied for</strong> a permit to build.",
                "I'm going to <strong>apply for</strong> a new passport.",
                "She <strong>applied for</strong> several positions at once.",
                "You should <strong>apply for</strong> the grant early.",
                "Thousands <strong>applied for</strong> the internship.",
              ],
            },
            {
              phrase: "prepare for",
              meaning: "get ready for something",
              examples: [
                "I'm <strong>preparing for</strong> the CELPIP exam.",
                "We need to <strong>prepare for</strong> the meeting.",
                "Students should <strong>prepare for</strong> interviews.",
                "The city is <strong>preparing for</strong> winter.",
                "They <strong>prepared for</strong> the storm in advance.",
                "She carefully <strong>prepared for</strong> her presentation.",
                "We should <strong>prepare for</strong> possible delays.",
                "He is <strong>preparing for</strong> a career change.",
                "The team <strong>prepared for</strong> the big game.",
                "Always <strong>prepare for</strong> unexpected questions.",
              ],
            },
            {
              phrase: "account for",
              meaning: "explain something or make up a portion of it",
              examples: [
                "You must <strong>account for</strong> every expense.",
                "Online sales <strong>account for</strong> half of our revenue.",
                "How do you <strong>account for</strong> the delay?",
                "These factors <strong>account for</strong> the price increase.",
                "Salaries <strong>account for</strong> most of the budget.",
                "Tourism <strong>accounts for</strong> a large share of income.",
                "Can you <strong>account for</strong> the missing funds?",
                "Weather <strong>accounts for</strong> many of the delays.",
                "This region <strong>accounts for</strong> most of our sales.",
                "The manager had to <strong>account for</strong> the shortage.",
              ],
            },
            {
              phrase: "apologize for",
              meaning: "say you are sorry for something",
              examples: [
                "I <strong>apologize for</strong> the inconvenience.",
                "She <strong>apologized for</strong> being late.",
                "The company <strong>apologized for</strong> the error.",
                "He <strong>apologized for</strong> the misunderstanding.",
                "I must <strong>apologize for</strong> the delay in replying.",
                "They <strong>apologized for</strong> the poor service.",
                "She <strong>apologized for</strong> missing the meeting.",
                "We <strong>apologize for</strong> any confusion.",
                "He <strong>apologized for</strong> his rude remark.",
                "The airline <strong>apologized for</strong> the cancellation.",
              ],
            },
            {
              phrase: "search for",
              meaning: "look carefully for something",
              examples: [
                "I've been <strong>searching for</strong> a new apartment.",
                "They <strong>searched for</strong> the missing documents.",
                "She is <strong>searching for</strong> a better opportunity.",
                "We <strong>searched for</strong> the cheapest option.",
                "He <strong>searched for</strong> his keys everywhere.",
                "Volunteers <strong>searched for</strong> the lost dog.",
                "I'm <strong>searching for</strong> a reliable babysitter.",
                "They <strong>searched for</strong> answers online.",
                "She spent hours <strong>searching for</strong> the perfect gift.",
                "We are <strong>searching for</strong> qualified candidates.",
              ],
            },
            {
              phrase: "be responsible for",
              meaning: "be in charge of, or be the cause of, something",
              examples: [
                "She is <strong>responsible for</strong> the marketing team.",
                "Who is <strong>responsible for</strong> this project?",
                "Drivers are <strong>responsible for</strong> their passengers' safety.",
                "I'm <strong>responsible for</strong> training new staff.",
                "He is <strong>responsible for</strong> the daily schedule.",
                "Parents are <strong>responsible for</strong> their children.",
                "The manager is <strong>responsible for</strong> the budget.",
                "Each employee is <strong>responsible for</strong> their own work.",
                "She is <strong>responsible for</strong> handling complaints.",
                "Everyone is <strong>responsible for</strong> keeping the office clean.",
              ],
            },
            {
              phrase: "compensate for",
              meaning: "make up for something lost or lacking",
              examples: [
                "Extra pay can <strong>compensate for</strong> long hours.",
                "Nothing can <strong>compensate for</strong> lost time.",
                "The company <strong>compensated</strong> customers <strong>for</strong> the delay.",
                "Good service <strong>compensates for</strong> higher prices.",
                "Hard work can <strong>compensate for</strong> a lack of experience.",
                "The bonus <strong>compensated for</strong> the extra effort.",
                "Nothing <strong>compensates for</strong> a good night's sleep.",
                "The discount <strong>compensated for</strong> the earlier mistake.",
                "She works hard to <strong>compensate for</strong> lost time.",
                "Better features <strong>compensate for</strong> the higher cost.",
              ],
            },
            {
              phrase: "blame (someone) for",
              meaning: "hold someone responsible for something bad",
              examples: [
                "Don't <strong>blame</strong> others <strong>for</strong> your mistakes.",
                "They <strong>blamed</strong> the manager <strong>for</strong> the loss.",
                "She was <strong>blamed for</strong> the delay.",
                "You can't <strong>blame</strong> him <strong>for</strong> trying.",
                "He <strong>blamed</strong> the weather <strong>for</strong> the poor turnout.",
                "Don't <strong>blame</strong> yourself <strong>for</strong> what happened.",
                "The media <strong>blamed</strong> the company <strong>for</strong> the scandal.",
                "They <strong>blamed</strong> each other <strong>for</strong> the failure.",
                "I don't <strong>blame</strong> you <strong>for</strong> being upset.",
                "She was unfairly <strong>blamed for</strong> the error.",
              ],
            },
          ],
        },
        {
          prep: "of",
          emoji: "🧩",
          bg: "#fce7f3",
          color: "#be185d",
          border: "#fbcfe8",
          intro:
            "Verbs and adjectives of composition, awareness, and judgement that take 'of'.",
          items: [
            {
              phrase: "consist of",
              meaning: "be made up of",
              examples: [
                "The team <strong>consists of</strong> five members.",
                "The course <strong>consists of</strong> ten lessons.",
                "A healthy diet <strong>consists of</strong> fruits and vegetables.",
                "The report <strong>consists of</strong> three sections.",
                "The committee <strong>consists of</strong> local volunteers.",
                "The exam <strong>consists of</strong> two parts.",
                "Their diet <strong>consists</strong> mainly <strong>of</strong> rice and vegetables.",
                "The package <strong>consists of</strong> several items.",
                "The panel <strong>consists of</strong> industry experts.",
                "The building <strong>consists of</strong> twelve floors.",
              ],
            },
            {
              phrase: "approve of",
              meaning: "have a favourable opinion of something",
              examples: [
                "My parents <strong>approve of</strong> my decision.",
                "Not everyone <strong>approves of</strong> the new rules.",
                "The committee <strong>approved of</strong> the plan.",
                "I don't <strong>approve of</strong> wasting food.",
                "She doesn't <strong>approve of</strong> his behaviour.",
                "Most residents <strong>approve of</strong> the changes.",
                "My boss <strong>approved of</strong> the new schedule.",
                "They didn't <strong>approve of</strong> the idea at first.",
                "I <strong>approve of</strong> the way she handled it.",
                "Few people <strong>approve of</strong> higher taxes.",
              ],
            },
            {
              phrase: "remind (someone) of",
              meaning: "cause someone to remember something",
              examples: [
                "This song <strong>reminds</strong> me <strong>of</strong> my childhood.",
                "Please <strong>remind</strong> me <strong>of</strong> the deadline.",
                "She <strong>reminds</strong> me <strong>of</strong> my sister.",
                "The photo <strong>reminded</strong> him <strong>of</strong> home.",
                "This place <strong>reminds</strong> me <strong>of</strong> my hometown.",
                "Can you <strong>remind</strong> me <strong>of</strong> the address?",
                "His voice <strong>reminds</strong> me <strong>of</strong> my father.",
                "The smell <strong>reminds</strong> me <strong>of</strong> my grandmother's kitchen.",
                "Let me <strong>remind</strong> you <strong>of</strong> the rules.",
                "That story <strong>reminds</strong> me <strong>of</strong> an old movie.",
              ],
            },
            {
              phrase: "take advantage of",
              meaning: "make good use of an opportunity",
              examples: [
                "You should <strong>take advantage of</strong> the free training.",
                "We <strong>took advantage of</strong> the sunny weather.",
                "Don't let others <strong>take advantage of</strong> you.",
                "Travellers <strong>take advantage of</strong> off-season discounts.",
                "She <strong>took advantage of</strong> the job opportunity.",
                "<strong>Take advantage of</strong> the free trial while it lasts.",
                "We <strong>took advantage of</strong> the long weekend to travel.",
                "Students should <strong>take advantage of</strong> the library.",
                "He <strong>took advantage of</strong> the low interest rates.",
                "<strong>Take advantage of</strong> every chance to learn.",
              ],
            },
            {
              phrase: "be aware of",
              meaning: "know about or notice something",
              examples: [
                "Are you <strong>aware of</strong> the new policy?",
                "Drivers should be <strong>aware of</strong> pedestrians.",
                "I wasn't <strong>aware of</strong> the deadline.",
                "We must be <strong>aware of</strong> the risks.",
                "Please be <strong>aware of</strong> your surroundings.",
                "She is <strong>aware of</strong> the challenges ahead.",
                "Customers should be <strong>aware of</strong> the return policy.",
                "Be <strong>aware of</strong> hidden fees when signing up.",
                "He was not <strong>aware of</strong> the recent changes.",
                "Everyone should be <strong>aware of</strong> the fire exits.",
              ],
            },
            {
              phrase: "be capable of",
              meaning: "have the ability to do something",
              examples: [
                "She is <strong>capable of</strong> handling pressure.",
                "The machine is <strong>capable of</strong> printing in colour.",
                "I believe you are <strong>capable of</strong> great things.",
                "He is <strong>capable of</strong> leading the team.",
                "This car is <strong>capable of</strong> high speeds.",
                "She is more than <strong>capable of</strong> doing the job.",
                "The system is <strong>capable of</strong> storing huge amounts of data.",
                "They are <strong>capable of</strong> much better work.",
                "I know you're <strong>capable of</strong> passing the test.",
                "The new software is <strong>capable of</strong> many tasks.",
              ],
            },
            {
              phrase: "accuse (someone) of",
              meaning: "say that someone has done something wrong",
              examples: [
                "They <strong>accused</strong> him <strong>of</strong> cheating.",
                "She was <strong>accused of</strong> stealing.",
                "Don't <strong>accuse</strong> people <strong>of</strong> lying without proof.",
                "The article <strong>accused</strong> the company <strong>of</strong> fraud.",
                "He was <strong>accused of</strong> breaking the rules.",
                "They <strong>accused</strong> the driver <strong>of</strong> speeding.",
                "She <strong>accused</strong> him <strong>of</strong> being dishonest.",
                "The report <strong>accused</strong> officials <strong>of</strong> corruption.",
                "Don't <strong>accuse</strong> me <strong>of</strong> something I didn't do.",
                "He was wrongly <strong>accused of</strong> the crime.",
              ],
            },
          ],
        },
        {
          prep: "with",
          emoji: "🤝",
          bg: "#cffafe",
          color: "#155e75",
          border: "#a5f3fc",
          intro:
            "Verbs and adjectives of handling, agreement, and familiarity that pair with 'with'.",
          items: [
            {
              phrase: "deal with",
              meaning: "handle or manage a situation",
              examples: [
                "Managers must <strong>deal with</strong> difficult situations.",
                "How do you <strong>deal with</strong> stress?",
                "We need to <strong>deal with</strong> this problem quickly.",
                "Customer service <strong>deals with</strong> complaints daily.",
                "She knows how to <strong>deal with</strong> angry customers.",
                "It's hard to <strong>deal with</strong> so much pressure.",
                "The government must <strong>deal with</strong> rising costs.",
                "I'll <strong>deal with</strong> this issue tomorrow.",
                "He <strong>deals with</strong> clients from all over the world.",
                "We must <strong>deal with</strong> the situation calmly.",
              ],
            },
            {
              phrase: "cope with",
              meaning: "manage a difficult situation successfully",
              examples: [
                "It's hard to <strong>cope with</strong> so much pressure.",
                "She learned to <strong>cope with</strong> the loss.",
                "New employees must <strong>cope with</strong> a heavy workload.",
                "How do you <strong>cope with</strong> change?",
                "He struggled to <strong>cope with</strong> the stress.",
                "Some people <strong>cope with</strong> problems by talking about them.",
                "It's difficult to <strong>cope with</strong> a busy schedule.",
                "She <strong>copes with</strong> pressure by staying organized.",
                "The city struggled to <strong>cope with</strong> the flood.",
                "Many students find it hard to <strong>cope with</strong> exams.",
              ],
            },
            {
              phrase: "agree with",
              meaning: "share the same opinion as someone",
              examples: [
                "I <strong>agree with</strong> your point of view.",
                "Not everyone <strong>agrees with</strong> the decision.",
                "Do you <strong>agree with</strong> the new rules?",
                "She <strong>agreed with</strong> my suggestion.",
                "Most experts <strong>agree with</strong> this approach.",
                "I don't <strong>agree with</strong> that statement.",
                "He <strong>agreed with</strong> the proposal completely.",
                "Few people <strong>agreed with</strong> the plan.",
                "I couldn't <strong>agree with</strong> you more.",
                "The team <strong>agreed with</strong> the manager's idea.",
              ],
            },
            {
              phrase: "comply with",
              meaning: "obey or follow rules and regulations",
              examples: [
                "All staff must <strong>comply with</strong> safety regulations.",
                "The company <strong>complied with</strong> the new law.",
                "Please <strong>comply with</strong> the guidelines.",
                "Failure to <strong>comply with</strong> the rules has consequences.",
                "Drivers must <strong>comply with</strong> speed limits.",
                "The factory <strong>complied with</strong> environmental standards.",
                "Everyone is expected to <strong>comply with</strong> the dress code.",
                "They refused to <strong>comply with</strong> the request.",
                "We must <strong>comply with</strong> local laws.",
                "Businesses have to <strong>comply with</strong> health rules.",
              ],
            },
            {
              phrase: "be satisfied with",
              meaning: "be pleased with something",
              examples: [
                "I'm very <strong>satisfied with</strong> the service.",
                "Customers were <strong>satisfied with</strong> the product.",
                "She wasn't <strong>satisfied with</strong> the results.",
                "Are you <strong>satisfied with</strong> your progress?",
                "The manager was <strong>satisfied with</strong> our work.",
                "He is never <strong>satisfied with</strong> second place.",
                "We are <strong>satisfied with</strong> the outcome.",
                "Most guests were <strong>satisfied with</strong> their stay.",
                "I'm not fully <strong>satisfied with</strong> the design.",
                "They seemed <strong>satisfied with</strong> the explanation.",
              ],
            },
            {
              phrase: "be familiar with",
              meaning: "know something well",
              examples: [
                "I'm <strong>familiar with</strong> this software.",
                "Are you <strong>familiar with</strong> the area?",
                "She is <strong>familiar with</strong> the procedure.",
                "New staff should become <strong>familiar with</strong> the rules.",
                "He is <strong>familiar with</strong> the local customs.",
                "I'm not <strong>familiar with</strong> that brand.",
                "Are you <strong>familiar with</strong> how it works?",
                "She is <strong>familiar with</strong> several languages.",
                "Most drivers are <strong>familiar with</strong> these roads.",
                "You should be <strong>familiar with</strong> the safety rules.",
              ],
            },
          ],
        },
        {
          prep: "about",
          emoji: "💭",
          bg: "#ffedd5",
          color: "#9a3412",
          border: "#fed7aa",
          intro:
            "Verbs and adjectives expressing feelings and concerns that take 'about'.",
          items: [
            {
              phrase: "worry about",
              meaning: "feel anxious about something",
              examples: [
                "Don't <strong>worry about</strong> the small details.",
                "Parents often <strong>worry about</strong> their children.",
                "I <strong>worry about</strong> meeting the deadline.",
                "There's no need to <strong>worry about</strong> the cost.",
                "She <strong>worries about</strong> her exams too much.",
                "Try not to <strong>worry about</strong> things you can't control.",
                "He <strong>worries about</strong> the future.",
                "We <strong>worry about</strong> the rising cost of living.",
                "Don't <strong>worry about</strong> being perfect.",
                "Many people <strong>worry about</strong> job security.",
              ],
            },
            {
              phrase: "complain about",
              meaning: "express dissatisfaction with something",
              examples: [
                "Residents <strong>complained about</strong> the noise.",
                "He always <strong>complains about</strong> the weather.",
                "Customers <strong>complained about</strong> the long wait.",
                "She <strong>complained about</strong> the poor service.",
                "Employees <strong>complained about</strong> the new schedule.",
                "Passengers <strong>complained about</strong> the delay.",
                "They <strong>complained about</strong> the high prices.",
                "He <strong>complained about</strong> the cold food.",
                "Neighbours <strong>complained about</strong> the construction.",
                "Guests <strong>complained about</strong> the slow internet.",
              ],
            },
          ],
        },
        {
          prep: "from",
          emoji: "📤",
          bg: "#fee2e2",
          color: "#991b1b",
          border: "#fca5a5",
          intro:
            "Verbs of gaining, experiencing, and recovering that pair with 'from'.",
          items: [
            {
              phrase: "benefit from",
              meaning: "gain an advantage from something",
              examples: [
                "Students <strong>benefit from</strong> small class sizes.",
                "The community <strong>benefited from</strong> the new library.",
                "You'll <strong>benefit from</strong> regular practice.",
                "Businesses <strong>benefit from</strong> good reviews.",
                "Everyone <strong>benefits from</strong> a healthy lifestyle.",
                "Workers <strong>benefit from</strong> flexible hours.",
                "The city <strong>benefited from</strong> increased tourism.",
                "Children <strong>benefit from</strong> reading every day.",
                "We all <strong>benefit from</strong> clean public spaces.",
                "Companies <strong>benefit from</strong> happy employees.",
              ],
            },
            {
              phrase: "suffer from",
              meaning: "experience something bad, especially an illness",
              examples: [
                "Many people <strong>suffer from</strong> stress at work.",
                "She <strong>suffers from</strong> seasonal allergies.",
                "The region <strong>suffers from</strong> water shortages.",
                "He <strong>suffered from</strong> a lack of sleep.",
                "The city <strong>suffers from</strong> heavy traffic.",
                "Many workers <strong>suffer from</strong> burnout.",
                "He <strong>suffers from</strong> frequent headaches.",
                "The area <strong>suffers from</strong> poor internet service.",
                "Some students <strong>suffer from</strong> exam anxiety.",
                "The economy <strong>suffers from</strong> high inflation.",
              ],
            },
            {
              phrase: "recover from",
              meaning: "return to normal after a difficulty or illness",
              examples: [
                "It took weeks to <strong>recover from</strong> the flu.",
                "The economy is <strong>recovering from</strong> the recession.",
                "She quickly <strong>recovered from</strong> the surgery.",
                "It's hard to <strong>recover from</strong> such a setback.",
                "He is slowly <strong>recovering from</strong> his injury.",
                "The business <strong>recovered from</strong> a difficult year.",
                "It took time to <strong>recover from</strong> the loss.",
                "The team <strong>recovered from</strong> a poor start.",
                "She <strong>recovered from</strong> her illness within days.",
                "The region is <strong>recovering from</strong> the storm.",
              ],
            },
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
        // Collocations — verbs + prepositions
        {
          q: "To boost the economy, the government should invest __ education.",
          options: ["in", "on", "to", "for"],
          ans: 0,
          exp: "<strong>Invest in</strong> means to put money or effort into something for future benefit.",
        },
        {
          q: "In my essay, I will focus __ the benefits of remote work.",
          options: ["at", "on", "in", "to"],
          ans: 1,
          exp: "<strong>Focus on</strong> means to direct your attention or effort to something.",
        },
        {
          q: "The city allocated a large budget __ development activities.",
          options: ["for", "to", "on", "in"],
          ans: 1,
          exp: "<strong>Allocate ... to</strong> means to assign money or resources for a purpose.",
        },
        {
          q: "The success of any team depends __ good communication.",
          options: ["of", "on", "in", "at"],
          ans: 1,
          exp: "<strong>Depend on</strong> is the correct collocation — never 'depend of'.",
        },
        {
          q: "Many seniors rely __ community services for daily support.",
          options: ["in", "on", "at", "to"],
          ans: 1,
          exp: "<strong>Rely on</strong> means to trust or need something for support.",
        },
        {
          q: "I spend most of my weekend money __ groceries and transport.",
          options: ["for", "in", "on", "to"],
          ans: 2,
          exp: "<strong>Spend money on</strong> is the fixed collocation.",
        },
        {
          q: "It's difficult to concentrate __ studying in a noisy room.",
          options: ["at", "in", "on", "to"],
          ans: 2,
          exp: "<strong>Concentrate on</strong> means to give all your attention to something.",
        },
        {
          q: "The manager insisted __ finishing the report before the weekend.",
          options: ["in", "on", "at", "for"],
          ans: 1,
          exp: "<strong>Insist on</strong> means to demand something firmly.",
        },
        {
          q: "The final decision was based __ customer feedback.",
          options: ["on", "in", "of", "at"],
          ans: 0,
          exp: "<strong>Base something on</strong> means to use it as a foundation.",
        },
        {
          q: "Volunteering allows me to participate __ community events.",
          options: ["on", "in", "at", "to"],
          ans: 1,
          exp: "<strong>Participate in</strong> means to take part in an activity.",
        },
        {
          q: "With enough practice, I'm confident I will succeed __ passing the exam.",
          options: ["on", "at", "in", "for"],
          ans: 2,
          exp: "<strong>Succeed in</strong> is used before a noun or gerund.",
        },
        {
          q: "Our clinic specializes __ children's healthcare.",
          options: ["on", "at", "in", "to"],
          ans: 2,
          exp: "<strong>Specialize in</strong> means to focus on a particular area.",
        },
        {
          q: "Poor planning often results __ costly delays.",
          options: ["to", "in", "on", "at"],
          ans: 1,
          exp: "<strong>Result in</strong> means to cause a particular outcome.",
        },
        {
          q: "I strongly believe __ treating everyone with respect.",
          options: ["on", "at", "in", "to"],
          ans: 2,
          exp: "<strong>Believe in</strong> means to have confidence in the value of something.",
        },
        {
          q: "Regular exercise contributes __ better mental health.",
          options: ["for", "to", "in", "on"],
          ans: 1,
          exp: "<strong>Contribute to</strong> means to help cause or add to something.",
        },
        {
          q: "Too much screen time can lead __ poor sleep.",
          options: ["in", "to", "for", "on"],
          ans: 1,
          exp: "<strong>Lead to</strong> means to result in or cause something.",
        },
        {
          q: "Newcomers often need time to adapt __ a different culture.",
          options: ["with", "to", "in", "for"],
          ans: 1,
          exp: "<strong>Adapt to</strong> means to adjust to a new situation.",
        },
        {
          q: "Many residents objected __ the proposed highway.",
          options: ["against", "to", "on", "for"],
          ans: 1,
          exp: "<strong>Object to</strong> means to disagree with or oppose something.",
        },
        {
          q: "Please respond __ my email by the end of the day.",
          options: ["on", "for", "to", "at"],
          ans: 2,
          exp: "<strong>Respond to</strong> means to reply or react to something.",
        },
        {
          q: "I look forward __ hearing from you soon.",
          options: ["for", "to", "at", "on"],
          ans: 1,
          exp: "<strong>Look forward to</strong> — 'to' is a preposition here, so it's followed by a gerund.",
        },
        {
          q: "Our company is committed __ reducing its carbon footprint.",
          options: ["to", "on", "for", "in"],
          ans: 0,
          exp: "<strong>Commit to</strong> means to dedicate yourself fully to something.",
        },
        {
          q: "My new job is quite similar __ my previous one.",
          options: ["with", "to", "as", "like"],
          ans: 1,
          exp: "<strong>Similar to</strong> is the correct collocation — not 'similar with'.",
        },
        {
          q: "I'm planning to apply __ the marketing manager position.",
          options: ["to", "for", "on", "at"],
          ans: 1,
          exp: "<strong>Apply for</strong> is used when requesting a job, grant, or refund.",
        },
        {
          q: "Students should prepare __ interviews well in advance.",
          options: ["to", "for", "on", "at"],
          ans: 1,
          exp: "<strong>Prepare for</strong> means to get ready for something.",
        },
        {
          q: "As the team lead, she is responsible __ training new staff.",
          options: ["of", "for", "to", "on"],
          ans: 1,
          exp: "<strong>Responsible for</strong> means being in charge of, or the cause of, something.",
        },
        {
          q: "Online sales now account __ half of our revenue.",
          options: ["of", "for", "to", "on"],
          ans: 1,
          exp: "<strong>Account for</strong> can mean to make up a portion of something.",
        },
        {
          q: "I would like to apologize __ the inconvenience caused.",
          options: ["of", "for", "to", "about"],
          ans: 1,
          exp: "<strong>Apologize for</strong> the thing you did wrong (apologize to a person).",
        },
        {
          q: "Extra vacation days can compensate __ the long working hours.",
          options: ["of", "for", "to", "with"],
          ans: 1,
          exp: "<strong>Compensate for</strong> means to make up for something.",
        },
        {
          q: "It's unfair to blame others __ your own mistakes.",
          options: ["of", "on", "for", "about"],
          ans: 2,
          exp: "<strong>Blame someone for</strong> means to hold them responsible for something bad.",
        },
        {
          q: "Good managers know how to deal __ difficult situations.",
          options: ["with", "to", "on", "for"],
          ans: 0,
          exp: "<strong>Deal with</strong> means to handle or manage something.",
        },
        {
          q: "New employees must learn to cope __ a heavy workload.",
          options: ["to", "with", "on", "for"],
          ans: 1,
          exp: "<strong>Cope with</strong> means to manage a difficult situation.",
        },
        {
          q: "I completely agree __ your point of view.",
          options: ["to", "on", "with", "about"],
          ans: 2,
          exp: "<strong>Agree with</strong> a person or opinion is the standard collocation.",
        },
        {
          q: "All staff must comply __ the safety regulations.",
          options: ["to", "with", "on", "for"],
          ans: 1,
          exp: "<strong>Comply with</strong> means to obey or follow rules.",
        },
        {
          q: "Overall, I am very satisfied __ the level of service.",
          options: ["with", "of", "for", "about"],
          ans: 0,
          exp: "<strong>Satisfied with</strong> means pleased with something.",
        },
        {
          q: "Are you familiar __ this software?",
          options: ["to", "with", "of", "about"],
          ans: 1,
          exp: "<strong>Familiar with</strong> means to know something well.",
        },
        {
          q: "Small class sizes mean students benefit __ more personal attention.",
          options: ["of", "from", "for", "with"],
          ans: 1,
          exp: "<strong>Benefit from</strong> means to gain an advantage from something.",
        },
        {
          q: "A surprising number of employees suffer __ work-related stress.",
          options: ["of", "from", "with", "for"],
          ans: 1,
          exp: "<strong>Suffer from</strong> is used for illnesses and ongoing problems.",
        },
        {
          q: "It can take weeks to recover __ a serious illness.",
          options: ["of", "from", "off", "with"],
          ans: 1,
          exp: "<strong>Recover from</strong> means to return to normal after difficulty.",
        },
        {
          q: "Drivers should always be aware __ pedestrians.",
          options: ["about", "of", "for", "on"],
          ans: 1,
          exp: "<strong>Aware of</strong> means to know about or notice something.",
        },
        {
          q: "I'm sure she is capable __ handling the pressure.",
          options: ["of", "to", "for", "in"],
          ans: 0,
          exp: "<strong>Capable of</strong> means having the ability to do something.",
        },
        {
          q: "The committee consists __ five members from different departments.",
          options: ["in", "of", "from", "with"],
          ans: 1,
          exp: "<strong>Consist of</strong> means to be made up of.",
        },
        {
          q: "There's no need to worry __ the small details.",
          options: ["for", "about", "on", "of"],
          ans: 1,
          exp: "<strong>Worry about</strong> means to feel anxious about something.",
        },
        {
          q: "Several residents complained __ the constant noise.",
          options: ["about", "for", "on", "of"],
          ans: 0,
          exp: "<strong>Complain about</strong> means to express dissatisfaction.",
        },
        // Adjective + preposition and CELPIP formal phrases
        {
          q: "I have always been interested __ learning new languages.",
          options: ["on", "in", "about", "for"],
          ans: 1,
          exp: "Always use <strong>interested in</strong> — 'interested on' is incorrect.",
        },
        {
          q: "I am deeply concerned __ the impact on our community.",
          options: ["for", "of", "about", "with"],
          ans: 2,
          exp: "<strong>Concerned about</strong> is the standard way to express worry.",
        },
        {
          q: "She is very good __ public speaking.",
          options: ["in", "at", "on", "for"],
          ans: 1,
          exp: "Use <strong>good at</strong> to describe a skill or ability.",
        },
        {
          q: "I am writing __ regard to your recent complaint.",
          options: ["with", "in", "on", "for"],
          ans: 0,
          exp: "<strong>With regard to</strong> is a formal phrase used to introduce a topic in an email.",
        },
        {
          q: "__ conclusion, I strongly urge the council to reconsider.",
          options: ["At", "On", "In", "By"],
          ans: 2,
          exp: "<strong>In conclusion</strong> is the standard phrase to end a formal response.",
        },
        {
          q: "The event was cancelled __ the heavy snowfall.",
          options: ["because", "due to", "owing", "thanks"],
          ans: 1,
          exp: "<strong>Due to</strong> gives a formal reason and is followed by a noun phrase.",
        },
        {
          q: "I am writing __ behalf of our entire team.",
          options: ["in", "on", "for", "with"],
          ans: 1,
          exp: "<strong>On behalf of</strong> means representing or acting for others.",
        },
        // More collocations and formal phrases
        {
          q: "He is committed __ improving his English skills.",
          options: ["with", "to", "for", "in"],
          ans: 1,
          exp: "<strong>Commit to</strong> means to dedicate yourself to something.",
        },
        {
          q: "She has a real passion __ helping others.",
          options: ["in", "for", "at", "of"],
          ans: 1,
          exp: "Use <strong>passion for</strong> to show strong enthusiasm about something.",
        },
        {
          q: "The council voted __ the new community centre.",
          options: ["in favour of", "instead of", "in addition to", "as a result of"],
          ans: 0,
          exp: "<strong>In favour of</strong> means in support of something.",
        },
        {
          q: "__ your recent email, I have attached the required form.",
          options: ["With regard to", "In terms of", "Instead of", "Due to"],
          ans: 0,
          exp: "<strong>With regard to</strong> is a formal way to introduce the topic of a message.",
        },
        {
          q: "She attended the ceremony __ the entire team.",
          options: ["in behalf of", "on behalf of", "for behalf of", "by behalf of"],
          ans: 1,
          exp: "<strong>On behalf of</strong> means representing or acting for others.",
        },
        {
          q: "__ cost, the second proposal is far more efficient.",
          options: ["In terms of", "Due to", "Instead of", "In favour of"],
          ans: 0,
          exp: "<strong>In terms of</strong> specifies the particular area you are discussing.",
        },
        {
          q: "__ driving to work, he now takes the train.",
          options: ["Instead of", "Due to", "In terms of", "In addition to"],
          ans: 0,
          exp: "<strong>Instead of</strong> presents an alternative action.",
        },
        {
          q: "The long delay occurred __ a technical fault.",
          options: ["as a result of", "in favour of", "in terms of", "on behalf of"],
          ans: 0,
          exp: "<strong>As a result of</strong> introduces a cause formally.",
        },
        {
          q: "I am very interested __ learning a new language.",
          options: ["on", "in", "about", "for"],
          ans: 1,
          exp: "Always use <strong>interested in</strong> — 'interested on' is incorrect.",
        },
        {
          q: "She is really good __ solving difficult problems.",
          options: ["in", "at", "on", "for"],
          ans: 1,
          exp: "Use <strong>good at</strong> to describe a skill or ability.",
        },
        {
          q: "The children were excited __ the school trip.",
          options: ["for", "about", "with", "of"],
          ans: 1,
          exp: "<strong>Excited about</strong> is the standard collocation.",
        },
        {
          q: "He is married __ a teacher from Vancouver.",
          options: ["with", "to", "and", "by"],
          ans: 1,
          exp: "Always use <strong>married to</strong>, not 'married with'.",
        },
        {
          q: "We are very proud __ our team's achievements.",
          options: ["with", "of", "for", "about"],
          ans: 1,
          exp: "<strong>Proud of</strong> is the correct collocation.",
        },
        {
          q: "This year's plan was based __ careful research.",
          options: ["in", "on", "of", "at"],
          ans: 1,
          exp: "<strong>Base something on</strong> means to use it as a foundation.",
        },
        {
          q: "Many residents are concerned __ rising crime.",
          options: ["for", "of", "about", "with"],
          ans: 2,
          exp: "<strong>Concerned about</strong> is the standard way to express worry.",
        },
        {
          q: "The flight was postponed __ the heavy fog.",
          options: ["owing to", "because", "thanks", "as"],
          ans: 0,
          exp: "<strong>Owing to</strong> gives a formal reason and is followed by a noun phrase.",
        },
        {
          q: "I look forward __ working with your team.",
          options: ["for", "to", "at", "on"],
          ans: 1,
          exp: "<strong>Look forward to</strong> — 'to' is a preposition here, so it takes a gerund.",
        },
        {
          q: "She apologized __ arriving so late.",
          options: ["of", "for", "to", "about"],
          ans: 1,
          exp: "<strong>Apologize for</strong> the action (apologize to a person).",
        },
        {
          q: "All employees must comply __ the new guidelines.",
          options: ["to", "with", "on", "for"],
          ans: 1,
          exp: "<strong>Comply with</strong> means to obey or follow rules.",
        },
        {
          q: "He is responsible __ managing the entire budget.",
          options: ["of", "for", "to", "on"],
          ans: 1,
          exp: "<strong>Responsible for</strong> means being in charge of something.",
        },
        {
          q: "The company invested heavily __ new technology.",
          options: ["on", "in", "to", "for"],
          ans: 1,
          exp: "<strong>Invest in</strong> means to put money or effort into something.",
        },
        {
          q: "Please respond __ this message as soon as possible.",
          options: ["on", "for", "to", "at"],
          ans: 2,
          exp: "<strong>Respond to</strong> means to reply or react to something.",
        },
        {
          q: "He suffers __ frequent back pain.",
          options: ["of", "from", "with", "for"],
          ans: 1,
          exp: "<strong>Suffer from</strong> is used for illnesses and ongoing problems.",
        },
        {
          q: "The town benefited greatly __ the new hospital.",
          options: ["of", "from", "for", "with"],
          ans: 1,
          exp: "<strong>Benefit from</strong> means to gain an advantage from something.",
        },
        {
          q: "It took months to recover __ the injury.",
          options: ["of", "from", "off", "with"],
          ans: 1,
          exp: "<strong>Recover from</strong> means to return to normal after difficulty.",
        },
        {
          q: "A large budget was allocated __ public education.",
          options: ["for", "to", "on", "in"],
          ans: 1,
          exp: "<strong>Allocate ... to</strong> means to assign resources for a purpose.",
        },
        {
          q: "A poor diet can lead __ serious health problems.",
          options: ["in", "to", "for", "on"],
          ans: 1,
          exp: "<strong>Lead to</strong> means to cause or result in something.",
        },
        {
          q: "Several residents objected __ the proposed changes.",
          options: ["against", "to", "on", "for"],
          ans: 1,
          exp: "<strong>Object to</strong> means to disagree with or oppose something.",
        },
        {
          q: "I completely agree __ your suggestion.",
          options: ["to", "on", "with", "about"],
          ans: 2,
          exp: "<strong>Agree with</strong> a person or opinion is the standard collocation.",
        },
        {
          q: "Are you aware __ the risks involved?",
          options: ["about", "of", "for", "on"],
          ans: 1,
          exp: "<strong>Aware of</strong> means to know about or notice something.",
        },
        {
          q: "The committee consists __ ten members.",
          options: ["in", "of", "from", "with"],
          ans: 1,
          exp: "<strong>Consist of</strong> means to be made up of.",
        },
        {
          q: "He was accused __ ignoring the safety rules.",
          options: ["for", "of", "with", "about"],
          ans: 1,
          exp: "<strong>Accuse someone of</strong> means to say they did something wrong.",
        },
        {
          q: "My new laptop is very similar __ yours.",
          options: ["with", "to", "as", "like"],
          ans: 1,
          exp: "<strong>Similar to</strong> is the correct collocation — not 'similar with'.",
        },
        {
          q: "The city must adapt __ a growing population.",
          options: ["with", "to", "in", "for"],
          ans: 1,
          exp: "<strong>Adapt to</strong> means to adjust to a new situation.",
        },
        {
          q: "I would like to apply __ the scholarship.",
          options: ["to", "for", "on", "at"],
          ans: 1,
          exp: "<strong>Apply for</strong> is used when requesting a job, grant, or refund.",
        },
        {
          q: "Regular exercise contributes __ a healthy lifestyle.",
          options: ["for", "to", "in", "on"],
          ans: 1,
          exp: "<strong>Contribute to</strong> means to help cause or add to something.",
        },
        {
          q: "Don't blame yourself __ the mistake.",
          options: ["of", "on", "for", "about"],
          ans: 2,
          exp: "<strong>Blame someone for</strong> means to hold them responsible for something.",
        },
        {
          q: "Smart students take advantage __ every opportunity.",
          options: ["on", "of", "for", "with"],
          ans: 1,
          exp: "<strong>Take advantage of</strong> means to make good use of something.",
        },
        {
          q: "We rely __ renewable energy sources.",
          options: ["in", "on", "at", "to"],
          ans: 1,
          exp: "<strong>Rely on</strong> means to trust or need something for support.",
        },
        {
          q: "The manager insisted __ a detailed written report.",
          options: ["in", "on", "at", "for"],
          ans: 1,
          exp: "<strong>Insist on</strong> means to demand something firmly.",
        },
        {
          q: "Customers complained __ the rising prices.",
          options: ["about", "for", "on", "of"],
          ans: 0,
          exp: "<strong>Complain about</strong> means to express dissatisfaction.",
        },
        {
          q: "Students should prepare __ the final exam early.",
          options: ["to", "for", "on", "at"],
          ans: 1,
          exp: "<strong>Prepare for</strong> means to get ready for something.",
        },
        {
          q: "The professor commented __ my essay.",
          options: ["at", "on", "in", "to"],
          ans: 1,
          exp: "<strong>Comment on</strong> means to give an opinion about something.",
        },
        {
          q: "How do you cope __ such a heavy workload?",
          options: ["to", "with", "on", "for"],
          ans: 1,
          exp: "<strong>Cope with</strong> means to manage a difficult situation.",
        },
        {
          q: "He is fully capable __ handling the project alone.",
          options: ["of", "to", "for", "in"],
          ans: 0,
          exp: "<strong>Capable of</strong> means having the ability to do something.",
        },
        {
          q: "We are very satisfied __ the final result.",
          options: ["with", "of", "for", "about"],
          ans: 0,
          exp: "<strong>Satisfied with</strong> means pleased with something.",
        },
        {
          q: "The government should invest __ public health.",
          options: ["on", "in", "to", "for"],
          ans: 1,
          exp: "<strong>Invest in</strong> means to put money or effort into something.",
        },
        {
          q: "Please deal __ this complaint immediately.",
          options: ["to", "with", "on", "for"],
          ans: 1,
          exp: "<strong>Deal with</strong> means to handle or manage something.",
        },
        {
          q: "Their farm specializes __ organic vegetables.",
          options: ["on", "at", "in", "to"],
          ans: 2,
          exp: "<strong>Specialize in</strong> means to focus on a particular area.",
        },
        {
          q: "She participates __ several community clubs.",
          options: ["on", "in", "at", "to"],
          ans: 1,
          exp: "<strong>Participate in</strong> means to take part in an activity.",
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

/* ═══════════════════════════ COLLOCATIONS PANEL ═══════════════════════════ */

const COLLOC_EM =
  "[&_strong]:text-blue-600 [&_strong]:font-bold [&_strong]:bg-blue-50 [&_strong]:rounded-[3px] [&_strong]:px-[3px]";

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function CollocationsPanel() {
  // Shuffle groups and their items, and pick a random 4 of each collocation's
  // 10 examples — computed once per mount, so the order and the shown examples
  // differ every time the tab is opened or the page is refreshed.
  const [groups] = useState(() =>
    shuffle(PREP_COLLOCATIONS).map((g) => ({
      ...g,
      items: shuffle(g.items).map((it) => ({
        ...it,
        examples: shuffle(it.examples).slice(0, 4),
      })),
    })),
  );

  const totalCount = PREP_COLLOCATIONS.reduce(
    (n, g) => n + g.items.length,
    0,
  );

  return (
    <>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
        {totalCount} high-value preposition collocations for CELPIP Speaking and
        Writing, grouped by their preposition. Each one has 10 example
        sentences, and a different random set of 4 is shown each time you open
        this tab — with the collocation{" "}
        <span className="text-blue-600 font-bold bg-blue-50 rounded-[3px] px-[3px]">
          highlighted in blue
        </span>
        . Refresh the page to practise with fresh examples.
      </p>

      {groups.map((group) => (
        <div key={group.prep} className="mb-10">
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b-2 border-gray-100">
            <span className="text-[1.3rem]">{group.emoji}</span>
            <span
              className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
              style={{ background: group.bg, color: group.color }}
            >
              + {group.prep}
            </span>
            <span className="text-xs text-gray-400">
              {group.items.length} collocations
            </span>
          </div>
          {group.intro && (
            <div className="text-[13px] text-gray-500 leading-relaxed mb-4 px-3.5 py-2.5 bg-gray-50 rounded-lg border-l-[3px] border-gray-200">
              {group.intro}
            </div>
          )}
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-[600px]:grid-cols-1">
            {group.items.map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl px-4 py-[0.9rem]"
                style={{ borderColor: group.border }}
              >
                <div className="text-[15px] font-bold text-gray-900 mb-[0.3rem]">
                  {item.phrase}
                </div>
                <div className="text-[12.5px] text-gray-500 leading-relaxed mb-2.5">
                  {item.meaning}
                </div>
                <div className="flex flex-col gap-[3px]">
                  {item.examples.map((e, j) => (
                    <Html
                      key={j}
                      as="div"
                      className={`text-xs text-gray-600 bg-gray-50 rounded-md px-2 py-[4px] border border-gray-100 leading-relaxed ${COLLOC_EM}`}
                      html={e}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ QUIZ PANEL ═══════════════════════════ */

function QuizPanel() {
  // Shuffle the questions once per mount, and again on restart, so they
  // appear in a different order each time.
  const [questions, setQuestions] = useState(() => shuffle(PREP_QUIZ_QUESTIONS));
  const total = questions.length;
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);

  const answer = (i) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === questions[idx].ans) setScore((s) => s + 1);
  };
  const next = () => {
    setIdx((x) => x + 1);
    setChosen(null);
  };
  const restart = () => {
    setQuestions(shuffle(PREP_QUIZ_QUESTIONS));
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
        "Keep practicing! Go through the Reference and Collocations tabs, then try again. 💪";
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

  const q = questions[idx];
  const correct = chosen !== null && chosen === q.ans;
  const answeredCount = idx + (chosen !== null ? 1 : 0);

  return (
    <>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
        100 questions on the preposition collocations most useful for CELPIP
        Speaking and Writing tasks, shown in a random order each time. Your
        running score updates after every answer.
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
  { id: "prep-collocations", label: "🔗 50 Collocations" },
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
      {active === "prep-collocations" && <CollocationsPanel />}
      {active === "prep-quiz" && <QuizPanel />}
    </>
  );
}
