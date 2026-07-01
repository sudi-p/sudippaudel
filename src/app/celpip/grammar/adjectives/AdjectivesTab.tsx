// @ts-nocheck
/* eslint-disable */
"use client";

import { Fragment, useEffect, useState } from "react";
import { UPGRADE_BANK } from "./data";

/* inline-HTML helper for content strings that carry <strong>/<em>/<span> */
const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

/* ───────────────────────── shared presentation ───────────────────────── */

const CARD_GRID =
  "grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-[600px]:grid-cols-1";
const EX_CLS =
  "text-[13px] text-gray-900 bg-gray-50 border-l-[3px] border-indigo-300 px-2.5 py-[5px] rounded-r-md [&_em]:text-indigo-600 [&_em]:not-italic [&_em]:font-semibold";

const Ex = ({ html }) => <Html as="div" html={html} className={EX_CLS} />;

const Section = ({ title, intro, children }) => (
  <div className="mb-14">
    <div className="text-[1.25rem] font-extrabold text-gray-900 border-l-4 border-indigo-500 pl-3 mb-5">
      {title}
    </div>
    {intro && (
      <Html
        as="p"
        html={intro}
        className="text-sm text-slate-600 leading-[1.75] max-w-[720px] mb-6 [&_strong]:text-gray-900"
      />
    )}
    {children}
  </div>
);

const TypeCard = ({ icon, title, tag, desc, examples }) => (
  <div className="bg-white border border-gray-200 rounded-[14px] px-6 py-5 transition-shadow hover:shadow-[0_4px_18px_rgba(99,102,241,0.12)]">
    <div className="flex items-center gap-2.5 mb-2.5">
      <span className="text-[1.6rem]">{icon}</span>
      <span className="text-[0.95rem] font-bold text-gray-900">{title}</span>
      {tag && (
        <span className="inline-block text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-violet-100 text-indigo-600 ml-auto">
          {tag}
        </span>
      )}
    </div>
    <Html
      as="div"
      html={desc}
      className="text-[13px] text-slate-600 leading-relaxed mb-3 [&_strong]:text-gray-900"
    />
    <div className="flex flex-col gap-[5px]">
      {examples.map((e, i) => (
        <Ex key={i} html={e} />
      ))}
    </div>
  </div>
);

const Table = ({ head, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-[13px]">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th
              key={i}
              className="bg-indigo-600 text-white px-3.5 py-2.5 text-left text-xs font-bold tracking-wide first:rounded-tl-[10px] last:rounded-tr-[10px]"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="even:[&>td]:bg-gray-50">
            {r.map((c, j) => (
              <Html
                key={j}
                as="td"
                html={c}
                className="px-3.5 py-2 border-b border-gray-100 text-slate-700 align-top [&_em]:text-indigo-600 [&_em]:not-italic [&_em]:font-semibold"
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Tip = ({ icon, body }) => (
  <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
    <span className="text-[1.4rem] shrink-0 mt-px">{icon}</span>
    <Html
      as="div"
      html={body}
      className="text-[13.5px] text-gray-700 leading-relaxed [&_strong]:text-amber-800"
    />
  </div>
);

const TaskCard = ({ head, clb, scenario, weak, strong }) => (
  <div className="border border-gray-200 rounded-[14px] overflow-hidden">
    <div className="bg-indigo-600 text-white px-4 py-2.5 text-xs font-bold tracking-wide flex justify-between items-center gap-2">
      <span>{head}</span>
      <span className="bg-indigo-400 rounded-full text-[10px] px-2.5 py-0.5 font-bold whitespace-nowrap">
        {clb}
      </span>
    </div>
    <div className="px-5 py-4">
      <div className="text-xs text-slate-500 mb-2.5 italic">{scenario}</div>
      <div className="text-[13px] text-red-600 mb-1.5">✗ {weak}</div>
      <Html
        as="div"
        html={`✓ ${strong}`}
        className="text-[13px] text-green-600 [&_em]:text-indigo-600 [&_em]:not-italic [&_em]:font-semibold"
      />
    </div>
  </div>
);

const MistakeCard = ({ head, wrong, right, why }) => (
  <div className="border border-red-200 rounded-xl overflow-hidden">
    <div className="bg-red-50 px-3.5 py-2 text-[13px] font-bold text-red-800 flex items-center gap-2">
      {head}
    </div>
    <div className="px-3.5 py-2.5 bg-white">
      <div className="text-[13px] text-red-600 mb-[5px]">✗ {wrong}</div>
      <div className="text-[13px] text-green-600 mb-[5px]">✓ {right}</div>
      <div className="text-xs text-slate-500 italic">{why}</div>
    </div>
  </div>
);

const Callout = ({ className, html }) => (
  <Html
    as="div"
    html={html}
    className={`rounded-xl px-5 py-4 text-[13px] leading-[1.7] [&_strong]:font-bold ${className}`}
  />
);

/* ───────────────────────── reference data ───────────────────────── */

const POSITIONS = [
  {
    icon: "📍",
    title: "Attributive Position",
    desc: "Placed <strong>before</strong> the noun it modifies. Most common position in English.",
    examples: [
      "It was a <em>breathtaking</em> view.",
      "She gave a <em>detailed</em> explanation.",
      "He made a <em>costly</em> mistake.",
    ],
  },
  {
    icon: "🔗",
    title: "Predicative Position",
    desc: "Comes <strong>after</strong> a linking verb (be, seem, look, feel, become, appear).",
    examples: [
      "The park is <em>enormous</em>.",
      "She seemed <em>exhausted</em> after the shift.",
      "The result became <em>inevitable</em>.",
    ],
  },
  {
    icon: "🪆",
    title: "Post-positive (after noun)",
    desc: "Used in fixed phrases and formal writing — sounds polished and native-like.",
    examples: [
      "Something <em>remarkable</em> happened.",
      "Anyone <em>interested</em> may apply.",
      "The people <em>involved</em> were notified.",
    ],
  },
];

const ADJ_TYPES = [
  { icon: "🎨", title: "Descriptive (Quality)", tag: "Most common", desc: "Describe a quality, characteristic, or state of the noun. The largest and most important category for CELPIP.", examples: ["a <em>vibrant</em> community / a <em>cramped</em> apartment", "a <em>reliable</em> colleague / a <em>tedious</em> commute", "a <em>serene</em> lake / a <em>bustling</em> downtown"] },
  { icon: "🔢", title: "Quantitative", desc: "Tell us <em>how much</em> or <em>how many</em>. Use these when discussing data or preferences in Task 7 opinions.", examples: ["<em>Several</em> studies confirm this.", "<em>Numerous</em> residents complained.", "There is <em>sufficient</em> evidence."] },
  { icon: "👉", title: "Demonstrative", desc: "Point to specific nouns: <strong>this, that, these, those</strong>. Use to anchor your argument in Task 5 & 7.", examples: ["<em>This</em> option is far more practical.", "<em>Those</em> concerns are valid.", "<em>These</em> changes will benefit everyone."] },
  { icon: "❓", title: "Interrogative", desc: "<strong>Which, what, whose</strong> when used before a noun. Useful in Task 1 (giving advice) to frame choices.", examples: ["<em>Which</em> route do you prefer?", "<em>What</em> approach would work best?", "<em>Whose</em> responsibility is it?"] },
  { icon: "🏴", title: "Possessive", desc: "<strong>My, your, his, her, its, our, their</strong> before a noun. Common in Task 2 personal experience narratives.", examples: ["I shared <em>my</em> concerns openly.", "<em>Her</em> determination was inspiring.", "We doubled <em>our</em> efforts immediately."] },
  { icon: "📊", title: "Comparative", tag: "Task 5 key", desc: "Compare two things. Add <strong>-er</strong> (short adjectives) or <strong>more / less</strong> (long adjectives) + <em>than</em>.", examples: ["Option A is <em>more cost-effective than</em> Option B.", "Public transit is <em>faster than</em> driving downtown.", "The second plan is <em>less risky than</em> the first."] },
  { icon: "🏆", title: "Superlative", tag: "Task 5 key", desc: "Rank one above/below all others. Add <strong>-est</strong> or <strong>the most / least</strong> before the adjective.", examples: ["This is <em>the most efficient</em> solution available.", "It was <em>the worst</em> commute I had experienced.", "She is <em>the least experienced</em> member of the team."] },
  { icon: "🌍", title: "Proper", desc: "Derived from proper nouns — always capitalized. Show cultural awareness in CELPIP Writing.", examples: ["a <em>Canadian</em> perspective", "<em>Victorian</em> architecture", "an <em>Indigenous</em> tradition"] },
  { icon: "✅", title: "Indefinite", desc: "<strong>Some, any, few, many, each, every, either, neither</strong> — give a non-specific quantity or selection.", examples: ["<em>Every</em> candidate must meet this standard.", "<em>Few</em> options remain at this stage.", "<em>Each</em> point should be supported."] },
  { icon: "🔗", title: "Participial", desc: "Formed from verbs (-ing or -ed endings). A strong marker of advanced grammar for CELPIP examiners.", examples: ["a <em>compelling</em> argument / a <em>convincing</em> case", "a <em>well-organized</em> response", "an <em>overwhelming</em> majority agreed"] },
  { icon: "🔄", title: "Compound", desc: "Two or more words hyphenated to form one modifier. Instantly sounds native and sophisticated.", examples: ["a <em>well-known</em> landmark", "a <em>thought-provoking</em> idea", "a <em>long-term</em> solution"] },
  { icon: "🎭", title: "Emotion / Opinion", tag: "Task 7 key", desc: "Express feelings or evaluations. Essential in Task 7 (Expressing Opinions) and Task 2 (Personal Experience).", examples: ["I found the experience <em>deeply rewarding</em>.", "The decision was <em>controversial yet necessary</em>.", "It was an <em>unforgettable</em> moment."] },
];

const ADJ_VS_ADV_EX = {
  adj: [
    'She is a <em>careful</em> driver. <span style="color:#94a3b8;font-size:11px;">(describes the noun "driver")</span>',
    'The report was <em>thorough</em>. <span style="color:#94a3b8;font-size:11px;">(after linking verb "was")</span>',
    'He felt <em>confident</em> before the test. <span style="color:#94a3b8;font-size:11px;">(after "felt")</span>',
  ],
  adv: [
    'She drives <em>carefully</em>. <span style="color:#94a3b8;font-size:11px;">(modifies the verb "drives")</span>',
    'The report was <em>thoroughly</em> reviewed. <span style="color:#94a3b8;font-size:11px;">(modifies verb "reviewed")</span>',
    'He spoke <em>confidently</em> during the test. <span style="color:#94a3b8;font-size:11px;">(modifies "spoke")</span>',
  ],
};

const ADJ_VS_ADV_TABLE = [
  ['"She sings <em>beautiful</em>."', '"She sings <em>beautifully</em>."', "<em>beautifully</em> modifies the verb <em>sings</em> → needs adverb"],
  ['"He is a <em>hardly</em> worker."', '"He is a <em>hard</em> worker."', "<em>hard</em> modifies the noun <em>worker</em> → needs adjective"],
  ['"The food smells <em>wonderfully</em>."', '"The food smells <em>wonderful</em>."', "<em>smell</em> is a linking verb here → use adjective after it"],
  ['"She did <em>good</em> in the exam."', '"She did <em>well</em> in the exam."', "<em>well</em> is the adverb form of <em>good</em>; modifies verb <em>did</em>"],
  ['"It was a <em>surprisingly</em> result."', '"It was a <em>surprising</em> result."', "<em>surprising</em> modifies the noun <em>result</em> → needs adjective"],
];

const OSASCOMP = [
  { n: "1", label: "Opinion", ex: "lovely, awful" },
  { n: "2", label: "Size", ex: "tiny, massive" },
  { n: "3", label: "Age", ex: "ancient, modern" },
  { n: "4", label: "Shape", ex: "round, narrow" },
  { n: "5", label: "Colour", ex: "golden, pale" },
  { n: "6", label: "Origin", ex: "Canadian, local" },
  { n: "7", label: "Material", ex: "wooden, glass" },
  { n: "8", label: "Purpose", ex: "sleeping (bag)" },
];

const ADJ_ORDER_TABLE = [
  ["a <em>wooden old small cabin</em>", "a <em>lovely small old wooden cabin</em>", "Opinion → Size → Age → Material"],
  ["a <em>Canadian reliable modern car</em>", "a <em>reliable modern Canadian car</em>", "Opinion → Age → Origin"],
  ["a <em>red big beautiful scarf</em>", "a <em>beautiful big red scarf</em>", "Opinion → Size → Colour"],
  ["<em>round gorgeous tiny earrings</em>", "<em>gorgeous tiny round earrings</em>", "Opinion → Size → Shape"],
];

const COMPARATIVE_TABLE = [
  ["1 syllable", "+ <em>-er</em>", "+ <em>-est</em>", "fast → <em>faster</em> → <em>fastest</em>"],
  ["1 syllable ending CVC", "double final consonant + <em>-er</em>", "double + <em>-est</em>", "big → <em>bigger</em> → <em>biggest</em>"],
  ["2 syllables ending in <em>-y</em>", "change y→i + <em>-er</em>", "change y→i + <em>-est</em>", "busy → <em>busier</em> → <em>busiest</em>"],
  ["2+ syllables", "<em>more</em> + adj", "<em>the most</em> + adj", "efficient → <em>more efficient</em> → <em>the most efficient</em>"],
  ["Lower degree", "<em>less</em> + adj", "<em>the least</em> + adj", "practical → <em>less practical</em> → <em>the least practical</em>"],
  ["Irregular: good", "<em>better</em>", "<em>best</em>", "This plan is <em>better</em>; it's the <em>best</em> option."],
  ["Irregular: bad", "<em>worse</em>", "<em>worst</em>", "Traffic was <em>worse</em>; Monday is the <em>worst</em>."],
  ["Irregular: far", "<em>farther(physical) / further(non-physical like discuss this further)</em>", "<em>farthest / furthest</em>", "I walked <em>farther</em>; this goes <em>further</em> than expected."],
  ["Irregular: little", "<em>less</em>", "<em>least</em>", "We have <em>less</em> time; this causes the <em>least</em> disruption."],
];

const NATIVE_TIPS = [
  { icon: "🔁", body: '<strong>They pair adjectives with strong nouns</strong> instead of using weak adjective + weak noun. Native: <em>"a gruelling commute"</em> not <em>"a very long and tiring trip."</em> The adjective does the heavy lifting.' },
  { icon: "📐", body: '<strong>They rarely stack more than 2–3 adjectives</strong> before a noun. Instead they use a second sentence or clause: <em>"The park is enormous. Its winding pathways are beautifully maintained."</em>' },
  { icon: "🎚️", body: '<strong>They use gradable adjectives with intensifiers</strong>: <em>absolutely, remarkably, surprisingly, incredibly</em> + adj. These replace repetitive <em>"very, very"</em>. <br>❌ <em>"very very good"</em> → ✅ <em>"remarkably effective."</em>' },
  { icon: "🧊", body: '<strong>They use non-gradable (extreme) adjectives WITHOUT "very"</strong>. You don\'t say <em>"very enormous"</em> or <em>"very furious."</em> Use <em>absolutely, completely, utterly</em> instead: <em>"absolutely enormous," "utterly exhausted."</em>' },
  { icon: "🤝", body: '<strong>They use collocated adjective + noun pairs</strong> naturally. These are fixed combinations: <em>heavy traffic, golden opportunity, vivid memory, tight deadline, pressing issue, valid concern, heated debate.</em> Using these signals true fluency.' },
  { icon: "🔀", body: '<strong>They shift adjectives to predicative for variety</strong>: instead of repeating <em>"the crowded city"</em>, they say <em>"The city was incredibly crowded."</em> Mixing attributive and predicative forms shows syntactic flexibility — a key CELPIP marker.' },
  { icon: "💬", body: '<strong>They use -ed vs -ing adjectives correctly</strong>: <em>-ing</em> describes the cause; <em>-ed</em> describes how a person feels. <em>"The meeting was exhausting"</em> (it caused fatigue) vs <em>"I was exhausted"</em> (I felt it). Mixing these up is a common CELPIP error.' },
];

const CELPIP_TASKS = [
  { head: "Task 1 — Giving Advice", clb: "CLB 7–9", scenario: 'e.g. "Your friend is nervous before a job interview."', weak: "It is good to prepare. Be calm.", strong: "Thorough preparation will make you feel considerably more <em>confident</em> and <em>well-equipped</em> to handle even the most <em>challenging</em> questions." },
  { head: "Task 2 — Personal Experience", clb: "CLB 7–9", scenario: 'e.g. "Describe a time you overcame a challenge."', weak: "It was a hard time. I was sad.", strong: "It was an <em>overwhelming</em> period — I felt <em>emotionally drained</em> but <em>determined</em> to push through." },
  { head: "Task 3 — Describing a Scene", clb: "CLB 7–9", scenario: 'e.g. "Describe what you see in the picture."', weak: "There is a big park with green trees and some people.", strong: "The park appears <em>sprawling</em> and <em>well-maintained</em>, with <em>lush</em> foliage and <em>scattered</em> groups of <em>relaxed</em>-looking people." },
  { head: "Task 4 — Making Predictions", clb: "CLB 7–9", scenario: 'e.g. "What do you think will happen next?"', weak: "I think it will be busy and people will be tired.", strong: "The situation is likely to become <em>increasingly hectic</em>, leaving the residents <em>frustrated</em> and <em>desperate</em> for a <em>sustainable</em> solution." },
  { head: "Task 5 — Comparing & Persuading", clb: "CLB 8–10", scenario: 'e.g. "Bus vs driving — which would you recommend?"', weak: "The bus is better. Driving is more expensive.", strong: "Taking the bus is <em>considerably more economical</em> and <em>far less stressful</em> than driving, especially during <em>peak</em> hours when traffic is <em>notoriously unpredictable</em>." },
  { head: "Task 6 — Difficult Situation", clb: "CLB 7–9", scenario: 'e.g. "You received the wrong order — explain to the company."', weak: "The item was wrong. I am not happy.", strong: "I am <em>deeply disappointed</em> as the item I received was completely <em>different</em> from what was described — the quality was <em>unacceptable</em> and the packaging was <em>damaged</em>." },
  { head: "Task 7 — Expressing Opinions", clb: "CLB 8–10", scenario: 'e.g. "Should students wear uniforms?"', weak: "Yes, it is a good idea because it is fair.", strong: "Uniforms are an <em>equitable</em> and <em>practical</em> solution — they eliminate <em>socioeconomic</em> disparities and create a more <em>focused</em>, <em>inclusive</em> learning environment." },
  { head: "Task 8 — Unusual Situation", clb: "CLB 7–9", scenario: 'e.g. "Describe a strange object you can see."', weak: "It is a round thing. It looks old and broken.", strong: "It appears to be a <em>circular</em>, <em>rusted</em> object — <em>roughly</em> the size of a dinner plate — with an <em>intricate</em> pattern etched across its <em>uneven</em>, <em>weathered</em> surface." },
];

const MISTAKES = [
  { head: '⚠️ Using "very" with extreme (non-gradable) adjectives', wrong: '"The traffic was very enormous." / "I was very exhausted."', right: '"The traffic was absolutely enormous." / "I was utterly exhausted."', why: 'Extreme adjectives already contain the idea of "very" — adding it sounds unnatural and weakens your vocabulary score.' },
  { head: "⚠️ Confusing -ed and -ing participial adjectives", wrong: '"The movie was bored." / "I was interesting in the topic."', right: '"The movie was boring." / "I was interested in the topic."', why: "-ING = the thing causes the feeling (boring movie). -ED = the person has the feeling (bored person). This is one of the most common errors examiners see." },
  { head: "⚠️ Wrong order of stacked adjectives", wrong: '"a wooden old large brown chair"', right: '"a large old brown wooden chair"', why: "Follow OSASCOMP: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose." },
  { head: '⚠️ Using "more" with short adjectives or "-er" with long ones', wrong: '"more fast" / "more cheap" / "importanter" / "usefuller"', right: '"faster" / "cheaper" / "more important" / "more useful"', why: "1-syllable adjectives take -er/-est; 3+ syllable adjectives always take more/most." },
  { head: '⚠️ Overusing "good," "bad," "nice," "big," "small"', wrong: '"It was a good experience. The place was nice and big."', right: '"It was a rewarding experience. The venue was spacious and well-appointed."', why: "Basic adjectives signal CLB 4–5. Precise, varied adjectives signal CLB 8–10 and directly improve your Vocabulary band score." },
  { head: "⚠️ Making adjectives agree in number (Spanish / French interference)", wrong: '"The parks are beautifuls." / "She is tallest than her sister."', right: '"The parks are beautiful." / "She is taller than her sister."', why: 'English adjectives never change for plural. Always use "taller than," never "tallest than" for comparisons of two items.' },
  { head: "⚠️ Dropping the article before a superlative", wrong: '"It was most effective solution." / "She is best candidate."', right: '"It was the most effective solution." / "She is the best candidate."', why: 'Superlatives almost always need "the" before them. Missing it is a grammar error that lowers your Task Fulfillment score.' },
];

/* ───────────────────────────── reference panel ───────────────────────────── */

function ReferencePanel() {
  return (
    <div>
      <Section
        title="What is an Adjective?"
        intro="An adjective <strong>describes or modifies a noun or pronoun</strong> — it tells us more about a person, place, thing, or idea. Adjectives answer questions like <em>What kind? Which one? How many? How much?</em> In CELPIP, adjectives are one of the fastest ways to raise your <strong>Vocabulary</strong> and <strong>Lexical Range</strong> scores because they show the examiner you can be precise and varied."
      >
        <div className={CARD_GRID}>
          {POSITIONS.map((p, i) => (
            <TypeCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section
        title="Adjective vs Adverb — What's the Difference?"
        intro="These two word classes are the most commonly confused in CELPIP. The rule is simple: an <strong>adjective</strong> modifies a <strong>noun or pronoun</strong>; an <strong>adverb</strong> modifies a <strong>verb, adjective, or another adverb</strong>. Mixing them up directly lowers your Grammar and Vocabulary band scores."
      >
        <div className="grid grid-cols-2 gap-4 mb-5 max-[600px]:grid-cols-1">
          <div className="bg-violet-100 border border-violet-300 rounded-xl px-5 py-[1.1rem]">
            <div className="text-[0.8rem] font-extrabold tracking-wide uppercase text-indigo-600 mb-2">
              🟣 Adjective
            </div>
            <Html
              as="div"
              html="Modifies a <strong>noun or pronoun</strong>.<br>Answers: <em>What kind? Which? How many?</em>"
              className="text-[13px] text-gray-900 mb-2 leading-relaxed"
            />
            <div className="flex flex-col gap-[5px]">
              {ADJ_VS_ADV_EX.adj.map((e, i) => (
                <Ex key={i} html={e} />
              ))}
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-[1.1rem]">
            <div className="text-[0.8rem] font-extrabold tracking-wide uppercase text-green-600 mb-2">
              🟢 Adverb
            </div>
            <Html
              as="div"
              html="Modifies a <strong>verb, adjective, or adverb</strong>.<br>Answers: <em>How? When? Where? To what extent?</em>"
              className="text-[13px] text-gray-900 mb-2 leading-relaxed"
            />
            <div className="flex flex-col gap-[5px]">
              {ADJ_VS_ADV_EX.adv.map((e, i) => (
                <Ex key={i} html={e} />
              ))}
            </div>
          </div>
        </div>

        <Callout
          className="bg-amber-50 border border-amber-200 mb-5"
          html={'<div style="font-weight:700;color:#92400e;margin-bottom:.5rem;">💡 Quick Test — which word does it modify?</div><div style="color:#374151;line-height:1.8;">Ask: <em>"Is the word I\'m modifying a noun/pronoun?"</em> → use an <strong>adjective</strong>.<br>Ask: <em>"Is the word I\'m modifying a verb, adjective, or adverb?"</em> → use an <strong>adverb</strong>.</div>'}
        />

        <Table head={["❌ Common Error", "✅ Correct Form", "Why"]} rows={ADJ_VS_ADV_TABLE} />

        <Callout
          className="bg-red-50 border border-red-200 mt-4"
          html='<div style="font-weight:700;color:#991b1b;margin-bottom:.4rem;">⚠️ The Linking Verb Trap — the #1 CELPIP adjective/adverb mistake</div><div style="color:#374151;line-height:1.75;">After linking verbs (<em>be, seem, look, feel, taste, smell, sound, become, appear, remain, stay</em>), always use an <strong>adjective</strong> — not an adverb. The adjective describes the <em>subject</em>, not the verb.<br><br>❌ <span style="color:#dc2626;font-weight:600;">"The soup tastes <em>wonderfully</em>."</span><br>✅ <span style="color:#16a34a;font-weight:600;">"The soup tastes <em>wonderful</em>."</span> — <em>wonderful</em> describes the soup, not how it tastes.<br><br>❌ <span style="color:#dc2626;font-weight:600;">"She looks <em>tiredly</em> after the shift."</span><br>✅ <span style="color:#16a34a;font-weight:600;">"She looks <em>tired</em> after the shift."</span> — <em>tired</em> describes her appearance.</div>'
        />
      </Section>

      <Section
        title="All Types of Adjectives"
        intro="English adjectives fall into distinct categories. Understanding each type lets you choose the right word and combine adjectives naturally — a key marker of fluency assessed in CELPIP."
      >
        <div className={CARD_GRID}>
          {ADJ_TYPES.map((t, i) => (
            <TypeCard key={i} {...t} />
          ))}
        </div>
      </Section>

      <Section
        title="Order of Adjectives (OSASCOMP)"
        intro="When stacking multiple adjectives, native speakers follow an instinctive order. Violating this order doesn't make you grammatically wrong, but it sounds unnatural and lowers your <strong>Listenability</strong> score. The mnemonic is <strong>OSASCOMP</strong>."
      >
        <div className="flex flex-wrap gap-1.5 items-center bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-4 max-[600px]:flex-col max-[600px]:items-start">
          {OSASCOMP.map((o, i) => (
            <Fragment key={i}>
              <div className="flex flex-col items-center gap-0.5 bg-white border border-indigo-200 rounded-lg px-3 py-1.5 min-w-[80px]">
                <span className="text-[10px] font-bold text-indigo-400">{o.n}</span>
                <span className="text-xs font-semibold text-gray-900">{o.label}</span>
                <span className="text-[10px] text-slate-500 mt-px">{o.ex}</span>
              </div>
              <span className="text-[1.1rem] text-indigo-200 max-[600px]:rotate-90">→</span>
            </Fragment>
          ))}
          <div className="flex flex-col items-center gap-0.5 bg-violet-100 border border-indigo-500 rounded-lg px-3 py-1.5 min-w-[80px]">
            <span className="text-[10px] font-bold text-indigo-600">→</span>
            <span className="text-xs font-semibold text-indigo-600">NOUN</span>
          </div>
        </div>
        <div className="mt-2">
          <Table head={["❌ Unnatural", "✅ Native order", "Why"]} rows={ADJ_ORDER_TABLE} />
        </div>
      </Section>

      <Section
        title="Comparative & Superlative — Complete Rules"
        intro="CELPIP Task 5 (Comparing & Persuading) is scored heavily on how accurately and confidently you compare two options. Master these forms."
      >
        <Table
          head={["Adjective type", "Comparative", "Superlative", "Example"]}
          rows={COMPARATIVE_TABLE}
        />
        <Callout
          className="bg-green-50 border border-green-200 text-green-800 mt-4"
          html='<strong>💡 Booster tip:</strong> Strengthen comparatives with <em>much, far, considerably, significantly</em> before <em>more/less/better</em> — e.g. <em>"Option A is considerably more affordable than Option B"</em>. Soften with <em>a little, slightly, somewhat</em> — e.g. <em>"driving is slightly more convenient."</em> Both moves sound native and impress examiners.'
        />
      </Section>

      <Section
        title="How Native Speakers Use Adjectives"
        intro="Native speakers don't just choose more complex adjectives — they use them in specific patterns that feel natural. Replicating these patterns will dramatically improve your Listenability and Vocabulary scores."
      >
        <div className="flex flex-col gap-[0.85rem]">
          {NATIVE_TIPS.map((t, i) => (
            <Tip key={i} {...t} />
          ))}
        </div>
      </Section>

      <Section
        title="Adjectives Across All 8 CELPIP Speaking Tasks"
        intro="Each CELPIP Speaking task rewards different adjective types. Here is how to deploy them strategically per task."
      >
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] max-[600px]:grid-cols-1">
          {CELPIP_TASKS.map((t, i) => (
            <TaskCard key={i} {...t} />
          ))}
        </div>
        <Callout
          className="bg-violet-100 border border-violet-300 text-indigo-800 mt-5"
          html='<strong>📝 Writing Tasks:</strong> In <strong>Task 1 (Email)</strong>, use formal adjectives like <em>urgent, inconvenient, grateful, appropriate, reasonable</em>. In <strong>Task 2 (Survey/Essay)</strong>, use evaluative adjectives like <em>beneficial, detrimental, sustainable, controversial, prevalent, significant</em> — and always vary them with synonyms to boost your Lexical Range score.'
        />
      </Section>

      <Section
        title="Common Mistakes & How to Fix Them"
        intro="These are the most penalised adjective errors on CELPIP. Fixing them is one of the highest-ROI improvements you can make before test day."
      >
        <div className="flex flex-col gap-4">
          {MISTAKES.map((m, i) => (
            <MistakeCard key={i} {...m} />
          ))}
        </div>
      </Section>

      <Section
        title="Vocabulary Upgrade Bank — Replace Basic with Precise"
        intro="Swap these overused adjectives for CELPIP-level alternatives. Aim to use at least 5 upgraded adjectives in every Writing task and 4 in every 90-second Speaking task."
      >
        <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] max-[600px]:grid-cols-1">
          {UPGRADE_BANK.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-[10px] px-3.5 py-2 text-[13px]"
            >
              <span className="text-red-600 font-semibold line-through">{w.basic}</span>
              <span className="text-slate-400">→</span>
              <span className="text-green-600 font-bold">{w.upgrades.join(" / ")}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ───────────────────────────── shared quiz styles ───────────────────────────── */

const QBTN =
  "px-[22px] py-[9px] rounded-[10px] text-[13px] font-bold cursor-pointer transition active:scale-[0.97]";
const ABTN =
  "px-5 py-[9px] rounded-[10px] text-[13px] font-bold cursor-pointer transition active:scale-[0.96]";
const PROGRESS_BG = "h-[7px] bg-gray-200 rounded-full overflow-hidden";
const PROGRESS_FILL = "h-full bg-indigo-600 rounded-full transition-[width] duration-300";

const inputStateCls = (mk) =>
  mk === "correct"
    ? "border-green-600 bg-green-50 text-green-800"
    : mk === "wrong"
      ? "border-red-600 bg-red-50 text-red-800"
      : mk === "revealed"
        ? "border-violet-500 bg-violet-50 text-violet-700 italic"
        : "";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ───────────────────────────── flip-card quiz ───────────────────────────── */

function FlashcardsPanel() {
  // Start unshuffled so SSR and first client paint match (no hydration
  // mismatch), then shuffle on the client after mount.
  const [deck, setDeck] = useState(UPGRADE_BANK);
  const [idx, setIdx] = useState(0);
  const [known, setKnown] = useState(0);
  const [again, setAgain] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setDeck(shuffle(UPGRADE_BANK));
  }, []);

  const total = deck.length;
  const done = idx >= total;

  const answer = (gotIt) => {
    if (gotIt) setKnown((k) => k + 1);
    else {
      setAgain((a) => a + 1);
      setDeck((d) => [...d, d[idx]]);
    }
    setIdx((i) => i + 1);
    setFlipped(false);
  };
  const restart = () => {
    setDeck(shuffle(UPGRADE_BANK));
    setIdx(0);
    setKnown(0);
    setAgain(0);
    setFlipped(false);
  };
  const restartWrong = () => {
    const wrong = deck.slice(UPGRADE_BANK.length);
    setDeck(shuffle(wrong.length ? wrong : UPGRADE_BANK));
    setIdx(0);
    setKnown(0);
    setAgain(0);
    setFlipped(false);
  };

  if (done) {
    const pct = Math.round((known / total) * 100);
    const sub =
      pct === 100
        ? "Perfect — you know them all! 🏆"
        : pct >= 70
          ? "Great work! Review the missed ones."
          : "Keep practising — you'll get there!";
    return (
      <div className="text-center py-12 px-4 bg-white border border-gray-200 rounded-[20px]">
        <div className="text-[3.5rem] mb-3">🎉</div>
        <div className="text-2xl font-extrabold text-gray-900 mb-2">Round complete!</div>
        <div className="text-sm text-slate-500 mb-6">{sub}</div>
        <div className="flex gap-3 justify-center flex-wrap mb-7">
          {[
            { num: known, label: "Got it" },
            { num: again, label: "Study again" },
            { num: `${pct}%`, label: "Score" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-3 text-center">
              <div className="text-[1.8rem] font-extrabold text-indigo-600">{s.num}</div>
              <div className="text-[11px] text-slate-500 font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2.5 justify-center flex-wrap">
          {again > 0 && (
            <button className={`${QBTN} bg-indigo-600 text-white hover:bg-indigo-800`} onClick={restartWrong}>
              ↺ Retry missed
            </button>
          )}
          <button className={`${QBTN} bg-gray-100 text-slate-700 hover:bg-gray-200`} onClick={restart}>
            ↺ Full restart
          </button>
        </div>
      </div>
    );
  }

  const card = deck[idx];
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
          <div className="text-xs font-semibold text-slate-500">
            Card {idx + 1} of {total}
          </div>
          <div className={PROGRESS_BG}>
            <div className={PROGRESS_FILL} style={{ width: `${Math.round((idx / total) * 100)}%` }} />
          </div>
        </div>
        <button className={`${QBTN} bg-gray-100 text-slate-700 hover:bg-gray-200`} onClick={restart}>
          ↺ Restart
        </button>
      </div>

      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-1.5 px-3.5 py-[5px] rounded-full text-[13px] font-bold bg-violet-100 text-indigo-600">
          👁 Seen: {idx}
        </div>
        <div className="flex items-center gap-1.5 px-3.5 py-[5px] rounded-full text-[13px] font-bold bg-green-50 text-green-600">
          ✓ Got it: {known}
        </div>
        <div className="flex items-center gap-1.5 px-3.5 py-[5px] rounded-full text-[13px] font-bold bg-red-50 text-red-600">
          ↺ Again: {again}
        </div>
      </div>

      <div
        className="w-full max-w-[480px] h-[230px] [perspective:1000px] mx-auto mb-5 cursor-pointer select-none max-[600px]:h-[200px]"
        onClick={() => !flipped && setFlipped(true)}
      >
        <div
          className={`w-full h-full relative [transform-style:preserve-3d] transition-transform duration-500 rounded-[20px] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-[20px] flex flex-col items-center justify-center p-8 text-center shadow-[0_8px_32px_rgba(99,102,241,0.13)] bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] text-white">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-60 mb-2">
              Basic word — upgrade it
            </div>
            <div className="text-[2.8rem] font-black tracking-tight leading-none max-[600px]:text-[2rem]">
              {card.basic}
            </div>
            <div className="text-[11px] opacity-50 mt-3.5">tap to reveal upgrades</div>
          </div>
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-[20px] flex flex-col items-center justify-center p-8 text-center shadow-[0_8px_32px_rgba(99,102,241,0.13)] bg-white border-2 border-gray-200 [transform:rotateY(180deg)]">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-400 mb-3.5">
              ✨ Upgraded alternatives
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {card.upgrades.map((u, i) => (
                <span
                  key={i}
                  className="bg-violet-100 text-indigo-600 text-sm font-bold px-[18px] py-[5px] rounded-full border-[1.5px] border-violet-300"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="flex gap-2.5 justify-center flex-wrap mb-7">
          <button
            className={`${QBTN} bg-red-50 text-red-600 border-[1.5px] border-red-200 hover:bg-red-100`}
            onClick={() => answer(false)}
          >
            ↺ Study again
          </button>
          <button
            className={`${QBTN} bg-green-50 text-green-600 border-[1.5px] border-green-200 hover:bg-green-100`}
            onClick={() => answer(true)}
          >
            ✓ Got it!
          </button>
        </div>
      )}
    </>
  );
}

/* ───────────────────────────── fill-in-the-blanks ───────────────────────────── */

function computeMarks(upgrades, values) {
  const lower = upgrades.map((u) => u.toLowerCase());
  const used = new Set();
  let allCorrect = true;
  const marks = values.map((v) => {
    const nv = (v || "").trim().toLowerCase();
    const m = lower.findIndex((u, i) => u === nv && !used.has(i));
    if (nv && m !== -1) {
      used.add(m);
      return "correct";
    }
    if (nv) {
      allCorrect = false;
      return "wrong";
    }
    allCorrect = false;
    return "";
  });
  const correctCount = marks.filter((m) => m === "correct").length;
  return { marks, allCorrect, correctCount };
}

const freshCards = () =>
  UPGRADE_BANK.map((it) => ({
    vals: it.upgrades.map(() => ""),
    marks: [],
    status: null,
    feedback: null,
  }));

function FillPanel() {
  const N = UPGRADE_BANK.length;
  const [idx, setIdx] = useState(0);
  const [cards, setCards] = useState(freshCards);
  const [sc, setSc] = useState({ correct: 0, wrong: 0, revealed: 0 });

  const item = UPGRADE_BANK[idx];
  const card = cards[idx];
  const editable = card.status !== "correct" && card.status !== "revealed";

  const update = (i, patch) =>
    setCards((cs) => cs.map((c, j) => (j === i ? { ...c, ...patch } : c)));

  const onInput = (wi, v) => {
    if (!editable) return;
    update(idx, { vals: card.vals.map((x, j) => (j === wi ? v : x)) });
  };

  const check = () => {
    const values = card.vals.map((v) => v.trim());
    if (values.every((v) => v === "")) {
      update(idx, { feedback: { cls: "text-red-600", text: "Please enter at least one answer." } });
      return;
    }
    const { marks, allCorrect, correctCount } = computeMarks(item.upgrades, values);
    if (card.status === null) {
      setSc((s) => ({
        ...s,
        correct: s.correct + (allCorrect ? 1 : 0),
        wrong: s.wrong + (allCorrect ? 0 : 1),
      }));
    }
    if (allCorrect) {
      update(idx, {
        status: "correct",
        vals: item.upgrades.slice(),
        marks: item.upgrades.map(() => "correct"),
        feedback: { cls: "text-green-600", text: "✓ All correct! Well done." },
      });
    } else {
      update(idx, {
        status: "wrong",
        marks,
        feedback: {
          cls: "text-amber-600",
          text:
            correctCount > 0
              ? `${correctCount} of ${item.upgrades.length} correct — keep trying!`
              : "✗ None correct — try again or reveal the answer.",
        },
      });
    }
  };

  const reveal = () => {
    if (card.status === "correct") return;
    if (card.status === null) setSc((s) => ({ ...s, revealed: s.revealed + 1 }));
    update(idx, {
      status: "revealed",
      vals: item.upgrades.slice(),
      marks: item.upgrades.map(() => "revealed"),
      feedback: { cls: "text-violet-600", text: "👁 Answer revealed." },
    });
  };

  const reset = () => {
    const prev = card.status;
    if (prev === "correct") setSc((s) => ({ ...s, correct: s.correct - 1 }));
    else if (prev === "revealed") setSc((s) => ({ ...s, revealed: s.revealed - 1 }));
    else if (prev === "wrong") setSc((s) => ({ ...s, wrong: s.wrong - 1 }));
    update(idx, { vals: item.upgrades.map(() => ""), marks: [], status: null, feedback: null });
  };

  const nav = (dir) => {
    const next = idx + dir;
    if (next >= 0 && next < N) setIdx(next);
  };

  const cardStateCls =
    card.status === "correct"
      ? "border-green-600 bg-green-50"
      : card.status === "revealed"
        ? "border-violet-500 bg-violet-50"
        : card.status === "wrong"
          ? "border-red-600 bg-red-50"
          : "border-gray-200 bg-white";

  return (
    <>
      <div className="flex items-center justify-between max-w-[560px] mx-auto mb-4 flex-wrap gap-2">
        <span className="text-[13px] font-bold text-slate-500">
          {idx + 1} / {N}
        </span>
        <div className={`flex-1 min-w-[120px] ${PROGRESS_BG}`}>
          <div className={PROGRESS_FILL} style={{ width: `${Math.round(((idx + 1) / N) * 100)}%` }} />
        </div>
      </div>

      <div className="flex gap-2.5 justify-center flex-wrap mb-6 text-[13px] font-bold">
        <span className="px-4 py-[5px] rounded-full bg-green-50 text-green-600">✓ Correct: {sc.correct}</span>
        <span className="px-4 py-[5px] rounded-full bg-red-50 text-red-600">✗ Wrong: {sc.wrong}</span>
        <span className="px-4 py-[5px] rounded-full bg-violet-50 text-violet-700">👁 Revealed: {sc.revealed}</span>
      </div>

      <div
        className={`border-2 rounded-[20px] px-8 py-9 max-w-[560px] mx-auto mb-6 shadow-[0_8px_32px_rgba(99,102,241,0.10)] transition-colors max-[600px]:px-4 max-[600px]:py-6 ${cardStateCls}`}
      >
        <div className="text-[13px] text-slate-400 font-semibold uppercase tracking-[0.07em] mb-5 text-center">
          Upgrade this basic word
        </div>
        <div className="text-center mb-7">
          <span className="inline-block text-[2rem] font-black tracking-tight bg-[linear-gradient(135deg,#4f46e5,#7c3aed)] text-white px-[0.75em] py-[0.35em] rounded-[14px] leading-[1.2] max-[600px]:text-[1.5rem]">
            {item.basic}
          </span>
        </div>
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.07em] text-center mb-3">
          Enter {item.upgrades.length} upgraded alternative{item.upgrades.length > 1 ? "s" : ""}
        </div>
        <div className="flex flex-wrap gap-2.5 justify-center mb-6">
          {item.upgrades.map((_, wi) => (
            <div className="flex flex-col items-center gap-1" key={wi}>
              <span className="text-[10px] font-bold text-indigo-300">{wi + 1}</span>
              <input
                className={`text-sm font-semibold text-gray-900 border-2 rounded-[10px] px-3.5 py-2 outline-none text-center min-w-[130px] transition bg-gray-50 focus:border-indigo-400 focus:bg-white disabled:cursor-default max-[600px]:min-w-[100px] max-[600px]:text-[13px] ${
                  inputStateCls(card.marks[wi]) || "border-gray-200"
                }`}
                type="text"
                placeholder={`word ${wi + 1}`}
                autoComplete="off"
                spellCheck={false}
                disabled={!editable}
                value={card.vals[wi] || ""}
                onChange={(e) => onInput(wi, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && check()}
              />
            </div>
          ))}
        </div>

        <div className={`text-center text-sm font-bold min-h-[22px] mb-5 ${card.feedback ? card.feedback.cls : ""}`}>
          {card.feedback ? card.feedback.text : ""}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button className={`${ABTN} bg-indigo-600 text-white hover:bg-indigo-800`} onClick={check}>
            ✓ Check Answer
          </button>
          <button
            className={`${ABTN} bg-violet-50 text-violet-700 border-[1.5px] border-violet-200 hover:bg-violet-100`}
            onClick={reveal}
          >
            👁 Reveal Answer
          </button>
          <button
            className={`${ABTN} bg-gray-100 text-slate-600 border-[1.5px] border-gray-200 hover:bg-gray-200`}
            onClick={reset}
          >
            ↺ Reset
          </button>
        </div>

        <div className="flex gap-2.5 justify-center mt-1">
          <button
            className="px-7 py-[9px] border-[1.5px] border-gray-200 rounded-[10px] text-[13px] font-bold cursor-pointer bg-white text-slate-700 transition hover:bg-gray-100 hover:border-indigo-300 disabled:opacity-[0.35] disabled:cursor-default"
            onClick={() => nav(-1)}
            disabled={idx === 0}
          >
            ← Prev
          </button>
          <button
            className="px-7 py-[9px] border-[1.5px] border-gray-200 rounded-[10px] text-[13px] font-bold cursor-pointer bg-white text-slate-700 transition hover:bg-gray-100 hover:border-indigo-300 disabled:opacity-[0.35] disabled:cursor-default"
            onClick={() => nav(1)}
            disabled={idx === N - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </>
  );
}

/* ───────────────────────────── shell ───────────────────────────── */

const TABS = [
  { id: "adj-ref", label: "📖 Reference", Panel: ReferencePanel },
  { id: "adj-quiz", label: "🃏 Flip Card Quiz", Panel: FlashcardsPanel },
  { id: "adj-fill", label: "✏️ Fill in the Blanks", Panel: FillPanel },
];

export default function AdjectivesTab() {
  const [active, setActive] = useState("adj-ref");
  const Panel = TABS.find((t) => t.id === active).Panel;
  return (
    <>
      <div className="flex gap-0 border-b-2 border-gray-200 mb-7 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-[18px] py-2.5 text-[13px] font-medium cursor-pointer border-b-2 -mb-0.5 whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <Panel />
    </>
  );
}
