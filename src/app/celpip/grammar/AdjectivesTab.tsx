// @ts-nocheck
/* eslint-disable */
"use client";

import { Fragment, useState } from "react";
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

const SubTitle = ({ children }) => (
  <div className="text-base font-extrabold text-gray-900 border-l-4 border-indigo-500 pl-3 mb-3 mt-2">
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

const INT_SCALE = [
  { word: "barely", bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  { word: "slightly", bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  { word: "a little", bg: "#f0f9ff", border: "#bae6fd", color: "#0369a1" },
  { word: "somewhat", bg: "#f0f9ff", border: "#bae6fd", color: "#0369a1" },
  { word: "fairly", bg: "#f5f3ff", border: "#ddd6fe", color: "#4f46e5" },
  { word: "rather", bg: "#f5f3ff", border: "#ddd6fe", color: "#4f46e5" },
  { word: "quite", bg: "#ede9fe", border: "#c4b5fd", color: "#4f46e5" },
  { word: "pretty", bg: "#ede9fe", border: "#c4b5fd", color: "#4f46e5" },
  { word: "very", bg: "#e0e7ff", border: "#a5b4fc", color: "#3730a3" },
  { word: "really", bg: "#e0e7ff", border: "#a5b4fc", color: "#3730a3" },
  { word: "highly", bg: "#ddd6fe", border: "#8b5cf6", color: "#3730a3" },
  { word: "extremely", bg: "#ddd6fe", border: "#8b5cf6", color: "#3730a3" },
  { word: "incredibly", bg: "#c4b5fd", border: "#7c3aed", color: "#fff" },
  { word: "remarkably", bg: "#c4b5fd", border: "#7c3aed", color: "#fff" },
  { word: "absolutely", bg: "#7c3aed", border: "#6d28d9", color: "#fff" },
  { word: "utterly", bg: "#4f46e5", border: "#3730a3", color: "#fff" },
  { word: "completely", bg: "#3730a3", border: "#312e81", color: "#fff" },
];

const INT_TYPES = [
  { head: "🔊 Amplifiers — increase intensity", headClass: "bg-indigo-600 text-white", words: [["very", "The exam was <em>very</em> challenging."], ["extremely", "It was <em>extremely</em> cold that morning."], ["highly", "She is <em>highly</em> motivated."], ["deeply", "I was <em>deeply</em> moved by the story."], ["remarkably", "The results were <em>remarkably</em> consistent."], ["incredibly", "The view was <em>incredibly</em> breathtaking."], ["exceptionally", "She was <em>exceptionally</em> well-prepared."]] },
  { head: "🔝 Maximizers — signal the absolute limit", headClass: "bg-violet-600 text-white", note: 'Used with extreme (non-gradable) adjectives only. Never with "very."', words: [["absolutely", "It was <em>absolutely</em> perfect."], ["completely", "I was <em>completely</em> exhausted."], ["utterly", "The plan was <em>utterly</em> flawed."], ["totally", "She was <em>totally</em> unprepared."], ["purely", "It was <em>purely</em> coincidental."], ["entirely", "That is <em>entirely</em> unacceptable."]] },
  { head: "🔉 Downtoners — reduce intensity", headClass: "bg-cyan-600 text-white", words: [["slightly", "The result was <em>slightly</em> disappointing."], ["somewhat", "I was <em>somewhat</em> surprised."], ["a little", "It was <em>a little</em> overwhelming at first."], ["barely", "The room was <em>barely</em> adequate."], ["hardly", "It was <em>hardly</em> noticeable."], ["mildly", "She seemed <em>mildly</em> concerned."]] },
  { head: "〰️ Approximators — express nearness to a degree", headClass: "bg-teal-700 text-white", words: [["almost", "It was <em>almost</em> impossible to focus."], ["nearly", "The task was <em>nearly</em> complete."], ["practically", "It was <em>practically</em> invisible."], ["virtually", "The area was <em>virtually</em> deserted."], ["essentially", "The two plans are <em>essentially</em> identical."]] },
  { head: "⚡ Boosters — formal / academic amplifiers", headClass: "bg-amber-700 text-white", note: "Use these in CELPIP Writing Task 2 to sound formal and precise.", words: [["significantly", "Costs have become <em>significantly</em> higher."], ["considerably", "Option A is <em>considerably</em> more efficient."], ["substantially", "Risks are <em>substantially</em> reduced."], ["notably", "The outcome was <em>notably</em> different."], ["overwhelmingly", "The response was <em>overwhelmingly</em> positive."], ["undeniably", "This is <em>undeniably</em> the better approach."]] },
  { head: "🌫️ Diminishers — polite / hedged weakeners", headClass: "bg-slate-600 text-white", note: "Use in Task 6 (difficult situation) to sound diplomatic, not aggressive.", words: [["fairly", "The response was <em>fairly</em> reasonable."], ["rather", "I found it <em>rather</em> inconvenient."], ["quite", "The delay was <em>quite</em> unexpected."], ["pretty", "That was <em>pretty</em> difficult to handle."], ["moderately", "I was <em>moderately</em> satisfied with the result."]] },
];

const GRAD_BOXES = [
  {
    boxClass: "bg-violet-100 border border-violet-300",
    titleColor: "text-indigo-600",
    title: "🎚️ Gradable adjectives",
    sub: "Use: very, extremely, fairly, quite, rather, slightly, somewhat, incredibly…",
    rows: ["<em>very tired</em> / <em>extremely busy</em>", "<em>fairly cold</em> / <em>quite expensive</em>", "<em>slightly nervous</em> / <em>rather unusual</em>", "<em>incredibly fast</em> / <em>remarkably calm</em>"],
  },
  {
    boxClass: "bg-fuchsia-50 border border-purple-200",
    titleColor: "text-violet-700",
    title: "🔝 Non-gradable (extreme) adjectives",
    sub: 'Use: absolutely, completely, utterly, totally, entirely, purely — NEVER "very"',
    rows: ['<em>absolutely furious</em> ✅ / <em style="color:#dc2626">very furious</em> ❌', '<em>completely exhausted</em> ✅ / <em style="color:#dc2626">very exhausted</em> ❌', '<em>utterly devastated</em> ✅ / <em style="color:#dc2626">very devastated</em> ❌', '<em>totally frozen</em> ✅ / <em style="color:#dc2626">very frozen</em> ❌'],
  },
];

const INT_COLLOCATIONS = [
  ["<strong>deeply</strong>", "<em>concerned, moved, troubled, rooted, committed, disappointed, grateful</em>", 'deeply tall, deeply cold <span style="color:#dc2626">(physical adjectives)</span>'],
  ["<strong>highly</strong>", "<em>skilled, motivated, recommended, competitive, effective, regarded, trained</em>", 'highly hot, highly tired <span style="color:#dc2626">(emotion/sensation adjectives)</span>'],
  ["<strong>bitterly</strong>", "<em>cold, disappointed, divided, resentful, ironic, contested</em>", "bitterly happy, bitterly large"],
  ["<strong>perfectly</strong>", "<em>clear, normal, reasonable, capable, valid, understandable, acceptable</em>", "perfectly angry, perfectly difficult"],
  ["<strong>terribly</strong>", "<em>sorry, wrong, important, difficult, upset, worried, embarrassed</em>", "terribly tall, terribly fast"],
  ["<strong>strongly</strong>", "<em>opposed, committed, influenced, built, worded, suggested, held</em>", "strongly tired, strongly cold"],
  ["<strong>considerably</strong>", "<em>more/less + adj, larger, smaller, faster, older, cheaper, better</em>", "considerably furious, considerably afraid"],
  ["<strong>genuinely</strong>", "<em>surprised, concerned, impressed, happy, confused, thankful, interested</em>", "genuinely enormous, genuinely freezing"],
];

const INT_TIPS = [
  { icon: "🔁", body: '<strong>Never repeat "very" twice in a row.</strong> Rotate through the scale. ❌ "It was very, very good." → ✅ "It was remarkably good" or "It was exceptionally well done."' },
  { icon: "🎯", body: '<strong>Match intensifier strength to context.</strong> In Task 6 (complaints), use downtoners to sound polite: <em>"I was rather disappointed"</em> not <em>"I was absolutely furious"</em> — even if you are.' },
  { icon: "📝", body: '<strong>In Writing Task 2, prefer formal boosters.</strong> Replace <em>"very different"</em> with <em>"considerably different"</em> or <em>"notably distinct."</em> Informal intensifiers like <em>"pretty"</em> or <em>"really"</em> lower your register score in essays.' },
  { icon: "🎙️", body: '<strong>In Speaking, stress the intensifier — not the adjective.</strong> Native speakers say <em>"abSOlutely perfect"</em> and <em>"inCREDibly helpful."</em> This stress pattern signals fluency to the examiner.' },
  { icon: "🧊", body: '<strong>Never use "very" before an extreme adjective.</strong> ❌ "very starving / very freezing / very furious" → ✅ "absolutely starving / utterly freezing / completely furious." This is the single most common intensifier error on CELPIP.' },
  { icon: "🤝", body: '<strong>Learn collocations as chunks.</strong> Don\'t build intensifier + adjective pairs from scratch — memorise natural chunks: <em>deeply committed, highly skilled, bitterly cold, perfectly reasonable, strongly opposed, terribly sorry.</em>' },
];

const INT_MISTAKES = [
  { head: '⚠️ "very" with a non-gradable adjective', wrong: '"The soup was very boiling."', right: '"The soup was absolutely boiling."', why: "Boiling is extreme — it has no degrees. Use a maximizer." },
  { head: "⚠️ Formal intensifier in casual speech", wrong: '"The pizza was substantially delicious."', right: '"The pizza was incredibly delicious."', why: '"Substantially" is for formal comparisons, not everyday compliments.' },
  { head: "⚠️ Casual intensifier in formal writing", wrong: '"The policy is pretty controversial."', right: '"The policy is considerably controversial."', why: '"Pretty" is too informal for CELPIP Writing Task 2 essays.' },
  { head: "⚠️ Wrong collocation", wrong: '"She was deeply tall." / "He was highly angry."', right: '"She was remarkably tall." / "He was deeply angry."', why: "Intensifiers collocate selectively — learn them as fixed pairs." },
  { head: "⚠️ Repeating the same intensifier", wrong: '"It was very busy, very loud, and very tiring."', right: '"It was incredibly busy, remarkably loud, and utterly tiring."', why: "Repetition signals a limited vocabulary range — the examiner notices." },
  { head: '⚠️ "absolutely" with a gradable adjective', wrong: '"It was absolutely cold outside."', right: '"It was extremely cold" / "absolutely freezing."', why: '"Cold" is gradable — save "absolutely" for the extreme form "freezing."' },
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
        title="Intensifiers — Make Your Adjectives More Powerful"
        intro='An <strong>intensifier</strong> is a word placed before an adjective (or adverb) to <em>strengthen or weaken</em> its meaning. Native speakers rely on intensifiers constantly to add nuance and emotion. In CELPIP, using varied intensifiers instead of repeating <em>"very"</em> is one of the fastest ways to improve your <strong>Vocabulary</strong> and <strong>Listenability</strong> scores.'
      >
        <SubTitle>The Intensity Scale</SubTitle>
        <div className="mb-6">
          <div className="h-2.5 rounded-full bg-[linear-gradient(to_right,#bae6fd,#6366f1,#7c3aed,#4f46e5)] my-2" />
          <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
            <span>⬇ Weakest</span>
            <span>Neutral / Base adjective</span>
            <span>Strongest ⬆</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {INT_SCALE.map((b, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-3 py-[3px] rounded-full border"
                style={{ background: b.bg, borderColor: b.border, color: b.color }}
              >
                {b.word}
              </span>
            ))}
          </div>
        </div>

        <SubTitle>6 Types of Intensifiers</SubTitle>
        <div className={`${CARD_GRID} mb-6`}>
          {INT_TYPES.map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
              <div className={`px-4 py-2.5 text-xs font-extrabold tracking-wide uppercase ${c.headClass}`}>
                {c.head}
              </div>
              <div className="px-5 py-4 flex flex-col gap-[7px]">
                {c.note && <div className="text-xs text-gray-500 pb-1.5 italic">{c.note}</div>}
                {c.words.map(([word, ex], j) => (
                  <div key={j} className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-[13.5px] font-bold min-w-[120px] text-gray-900 shrink-0">
                      {word}
                    </span>
                    <Html
                      html={ex}
                      className="text-[13px] text-slate-600 italic [&_em]:not-italic [&_em]:font-semibold [&_em]:text-indigo-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SubTitle>Gradable vs Non-Gradable Adjectives — Which Intensifier Fits?</SubTitle>
        <p className="text-[13px] text-slate-600 leading-relaxed mb-3.5 max-w-[720px]">
          This is the rule native speakers follow instinctively. Using the wrong intensifier with
          the wrong adjective type is one of the most noticeable fluency errors on CELPIP.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6 max-[600px]:grid-cols-1">
          {GRAD_BOXES.map((box, i) => (
            <div key={i} className={`rounded-xl px-5 py-4 ${box.boxClass}`}>
              <div className={`text-xs font-extrabold uppercase tracking-wide mb-2.5 ${box.titleColor}`}>
                {box.title}
              </div>
              <div className={`text-xs mb-2.5 ${box.titleColor}`}>{box.sub}</div>
              {box.rows.map((r, j) => (
                <Html
                  key={j}
                  as="div"
                  html={r}
                  className="text-[13px] mb-[5px] text-gray-700 leading-relaxed [&_em]:not-italic [&_em]:font-semibold [&_em]:text-indigo-600"
                />
              ))}
            </div>
          ))}
        </div>

        <SubTitle>Natural Intensifier + Adjective Collocations</SubTitle>
        <p className="text-[13px] text-slate-600 leading-relaxed mb-3.5 max-w-[720px]">
          Native speakers don't just pick <em>any</em> intensifier — certain intensifiers collocate
          strongly with specific adjectives. Using these pairs signals true fluency.
        </p>
        <div className="mb-6">
          <Table
            head={["Intensifier", "Collocates naturally with…", "Avoid pairing with…"]}
            rows={INT_COLLOCATIONS}
          />
        </div>

        <SubTitle>How to Use Intensifiers Naturally — 6 Rules</SubTitle>
        <div className="grid gap-[0.85rem] [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] max-[600px]:grid-cols-1 mb-6">
          {INT_TIPS.map((t, i) => (
            <Tip key={i} {...t} />
          ))}
        </div>

        <SubTitle>Common Intensifier Mistakes</SubTitle>
        <div className="grid gap-[0.85rem] [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] max-[600px]:grid-cols-1">
          {INT_MISTAKES.map((m, i) => (
            <MistakeCard key={i} {...m} />
          ))}
        </div>
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
  const [deck, setDeck] = useState(() => shuffle(UPGRADE_BANK));
  const [idx, setIdx] = useState(0);
  const [known, setKnown] = useState(0);
  const [again, setAgain] = useState(0);
  const [flipped, setFlipped] = useState(false);

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

/* ───────────────────────────── intensifiers quiz ───────────────────────────── */

const AINT_GROUPS = [
  { key: "downtoners", icon: "🔉", label: "Downtoners", sub: "weakest end", headBg: "#e0f2fe", headColor: "#0369a1", head: "🔉 Downtoners — weakest end of the scale", pointer: "12%", color: "#0369a1", scaleText: "🔉 Downtoners — weakest end", btnIn: "border-sky-200", btnAc: "bg-sky-100 text-sky-800 border-sky-700", items: [{ num: "1 — weakest", answer: "barely" }, { num: "2", answer: "slightly" }, { num: "3", answer: "a little" }, { num: "4", answer: "somewhat" }] },
  { key: "midrange", icon: "🎚️", label: "Mid-range", sub: "moderately strong", headBg: "#ede9fe", headColor: "#4f46e5", head: "🎚️ Mid-range — moderately strong", pointer: "37%", color: "#4f46e5", scaleText: "🎚️ Mid-range — moderately strong", btnIn: "border-violet-300", btnAc: "bg-violet-100 text-indigo-600 border-indigo-600", items: [{ num: "5", answer: "fairly" }, { num: "6", answer: "rather" }, { num: "7", answer: "quite" }, { num: "8", answer: "pretty" }] },
  { key: "amplifiers", icon: "🔊", label: "Amplifiers", sub: "strong", headBg: "#e0e7ff", headColor: "#3730a3", head: "🔊 Amplifiers — strong", pointer: "63%", color: "#3730a3", scaleText: "🔊 Amplifiers — strong", btnIn: "border-indigo-300", btnAc: "bg-indigo-100 text-indigo-800 border-indigo-800", items: [{ num: "9", answer: "very" }, { num: "10", answer: "really" }, { num: "11", answer: "highly" }, { num: "12", answer: "extremely" }] },
  { key: "maximizers", icon: "🔝", label: "Maximizers", sub: "strongest / absolute", headBg: "#ddd6fe", headColor: "#4c1d95", head: "🔝 Maximizers — strongest / absolute", pointer: "88%", color: "#4c1d95", scaleText: "🔝 Maximizers — strongest / absolute", btnIn: "border-violet-200", btnAc: "bg-violet-200 text-violet-900 border-violet-900", items: [{ num: "13", answer: "incredibly" }, { num: "14", answer: "remarkably" }, { num: "15", answer: "absolutely" }, { num: "16", answer: "utterly" }, { num: "17 — strongest", answer: "completely" }] },
];

const AINT_ANSWERS = [];
const AINT_RANGES = [];
AINT_GROUPS.forEach((g) => {
  const start = AINT_ANSWERS.length;
  g.items.forEach((it) => AINT_ANSWERS.push(it.answer));
  AINT_RANGES.push({ start, indices: g.items.map((_, i) => start + i) });
});
const AINT_TOTAL = AINT_ANSWERS.length;

function IntensifiersPanel() {
  const [selected, setSelected] = useState(null);
  const [values, setValues] = useState(() => Array(AINT_TOTAL).fill(""));
  const [marks, setMarks] = useState(() => Array(AINT_TOTAL).fill(""));
  const [feedback, setFeedback] = useState(() => Array(AINT_GROUPS.length).fill(null));
  const [sc, setSc] = useState({ correct: 0, wrong: 0 });

  const disabled = (i) => marks[i] === "correct" || marks[i] === "revealed";

  const checkGroup = (gi) => {
    const indices = AINT_RANGES[gi].indices;
    const nm = [...marks];
    let addC = 0,
      addW = 0,
      groupCorrect = 0;
    indices.forEach((i) => {
      if (marks[i] === "correct" || marks[i] === "revealed") {
        if (marks[i] === "correct") groupCorrect++;
        return;
      }
      const typed = (values[i] || "").trim().toLowerCase();
      if (typed === AINT_ANSWERS[i].toLowerCase()) {
        addC++;
        nm[i] = "correct";
        groupCorrect++;
      } else if (typed !== "") {
        addW++;
        nm[i] = "wrong";
      } else {
        nm[i] = "wrong";
      }
    });
    setMarks(nm);
    setSc((s) => ({ correct: s.correct + addC, wrong: s.wrong + addW }));
    const total = indices.length;
    let fb;
    if (groupCorrect === total) fb = { cls: "text-green-600", text: `✓ All ${total} correct!` };
    else if (groupCorrect > 0)
      fb = { cls: "text-amber-600", text: `${groupCorrect} / ${total} correct — keep trying!` };
    else fb = { cls: "text-red-600", text: "✗ None correct yet." };
    setFeedback((f) => f.map((x, j) => (j === gi ? fb : x)));
  };

  const revealOne = (i) => {
    if (disabled(i)) return;
    setValues((v) => v.map((x, j) => (j === i ? AINT_ANSWERS[i] : x)));
    setMarks((m) => m.map((x, j) => (j === i ? "revealed" : x)));
  };

  const revealAll = () => {
    setValues((v) => v.map((x, i) => (disabled(i) ? x : AINT_ANSWERS[i])));
    setMarks((m) => m.map((x, i) => (disabled(i) ? x : "revealed")));
    setFeedback(AINT_GROUPS.map(() => ({ cls: "text-amber-600", text: "👁 Answers revealed." })));
  };

  const resetAll = () => {
    setValues(Array(AINT_TOTAL).fill(""));
    setMarks(Array(AINT_TOTAL).fill(""));
    setFeedback(Array(AINT_GROUPS.length).fill(null));
    setSc({ correct: 0, wrong: 0 });
  };

  const onInput = (i, val) => {
    if (disabled(i)) return;
    setValues((v) => v.map((x, j) => (j === i ? val : x)));
  };

  const sel = AINT_GROUPS.find((g) => g.key === selected);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="text-base font-extrabold text-gray-900">🎚️ Intensifiers — Fill in the Blanks</div>
      </div>
      <p className="text-[13px] text-slate-500 leading-relaxed max-w-[640px] mb-6">
        Select a range below to reveal its questions. The pointer on the scale shows where that range
        sits. Type each intensifier into its position, then hit <strong>Check</strong> to score
        yourself.
      </p>

      <div className="flex gap-2.5 flex-wrap mb-6 text-[13px] font-bold">
        <span className="px-4 py-[5px] rounded-full bg-green-50 text-green-600 flex items-center gap-1.5">✓ Correct: {sc.correct}</span>
        <span className="px-4 py-[5px] rounded-full bg-red-50 text-red-600 flex items-center gap-1.5">✗ Wrong: {sc.wrong}</span>
        <span className="px-4 py-[5px] rounded-full bg-violet-100 text-indigo-600 flex items-center gap-1.5">Total: {AINT_TOTAL}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button className={`${ABTN} bg-violet-600 text-white hover:bg-violet-700`} onClick={revealAll}>
          👁 Reveal All
        </button>
        <button
          className={`${ABTN} bg-gray-100 text-slate-600 border-[1.5px] border-gray-200 hover:bg-gray-200`}
          onClick={resetAll}
        >
          ↺ Reset
        </button>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-7">
        {AINT_GROUPS.map((g) => (
          <button
            key={g.key}
            onClick={() => setSelected((s) => (s === g.key ? null : g.key))}
            className={`flex flex-col items-center gap-1 px-[18px] py-2.5 rounded-xl border-2 cursor-pointer text-xs font-bold transition-all min-w-[110px] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] max-[600px]:min-w-[80px] max-[600px]:px-2.5 max-[600px]:py-2 ${
              selected === g.key ? g.btnAc : `bg-gray-50 text-slate-600 ${g.btnIn}`
            }`}
          >
            <span className="text-[1.3rem]">{g.icon}</span>
            <span className="text-xs font-extrabold">{g.label}</span>
            <span className="text-[10px] font-medium opacity-75">{g.sub}</span>
          </button>
        ))}
      </div>

      <div className="mb-8 relative">
        <div className="h-2.5 rounded-full bg-[linear-gradient(to_right,#bae6fd,#6366f1,#7c3aed,#4f46e5)] my-2 relative">
          {sel && (
            <div
              className="absolute -top-1.5 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] -translate-x-1/2 transition-[left] duration-300"
              style={{ left: sel.pointer, borderTopColor: sel.color }}
            />
          )}
        </div>
        <div className="flex justify-between text-[11px] text-slate-500 font-semibold mb-1">
          <span>⬇ Weakest</span>
          <span>Neutral / Base adjective</span>
          <span>Strongest ⬆</span>
        </div>
        <div className="text-center text-xs font-bold min-h-[18px] mt-1" style={{ color: sel ? sel.color : undefined }}>
          {sel ? sel.scaleText : ""}
        </div>
      </div>

      {!sel && (
        <div className="flex flex-col items-center justify-center gap-2.5 py-10 px-4 border-2 border-dashed border-gray-200 rounded-[14px] text-slate-400 text-sm font-semibold text-center bg-gray-50 mb-4">
          <span className="text-[2rem]">☝️</span>
          <span>Select any one of the four ranges above to reveal its questions</span>
        </div>
      )}

      {AINT_GROUPS.map((g, gi) => {
        if (selected !== g.key) return null;
        const indices = AINT_RANGES[gi].indices;
        const fb = feedback[gi];
        return (
          <div className="mb-8" key={g.key}>
            <div
              className="flex items-center gap-2 px-3.5 py-2 rounded-t-[10px] text-xs font-extrabold tracking-wide uppercase"
              style={{ background: g.headBg, color: g.headColor }}
            >
              {g.head}
            </div>
            <div className="border-2 border-gray-200 border-t-0 rounded-b-xl p-5">
              <div className="flex flex-wrap gap-3">
                {g.items.map((it, k) => {
                  const i = indices[k];
                  return (
                    <div className="flex flex-col items-center gap-1.5 min-w-[120px]" key={i}>
                      <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wide">
                        {it.num}
                      </span>
                      <input
                        className={`text-[13.5px] font-bold text-center px-3.5 py-[7px] rounded-full border-2 outline-none w-[120px] bg-gray-50 text-gray-900 transition focus:border-indigo-400 focus:bg-white disabled:cursor-default max-[600px]:w-[100px] max-[600px]:text-xs ${
                          inputStateCls(marks[i]) || "border-gray-200"
                        }`}
                        type="text"
                        placeholder="?"
                        autoComplete="off"
                        spellCheck={false}
                        disabled={disabled(i)}
                        value={values[i]}
                        onChange={(e) => onInput(i, e.target.value)}
                      />
                      <button
                        className="text-[10px] font-bold text-slate-400 cursor-pointer p-0 uppercase tracking-wide hover:text-violet-700 disabled:opacity-30 disabled:cursor-default"
                        disabled={disabled(i)}
                        onClick={() => revealOne(i)}
                      >
                        👁 reveal
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                <button
                  className={`${ABTN} bg-indigo-600 text-white hover:bg-indigo-800`}
                  onClick={() => checkGroup(gi)}
                >
                  ✓ Check
                </button>
                <span className={`text-[13px] font-bold min-h-[18px] ${fb ? fb.cls : ""}`}>
                  {fb ? fb.text : ""}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ───────────────────────────── shell ───────────────────────────── */

const TABS = [
  { id: "adj-ref", label: "📖 Reference", Panel: ReferencePanel },
  { id: "adj-quiz", label: "🃏 Flip Card Quiz", Panel: FlashcardsPanel },
  { id: "adj-fill", label: "✏️ Fill in the Blanks", Panel: FillPanel },
  { id: "adj-int", label: "🎚️ Intensifiers Quiz", Panel: IntensifiersPanel },
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
