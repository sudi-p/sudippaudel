// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";

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

/* ───────────────────────── reference data ───────────────────────── */

const INT_SCALE = [
  { word: "slightly", bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  { word: "fairly", bg: "#f0f9ff", border: "#bae6fd", color: "#0369a1" },
  { word: "quite", bg: "#f5f3ff", border: "#ddd6fe", color: "#4f46e5" },
  { word: "very", bg: "#ede9fe", border: "#c4b5fd", color: "#4f46e5" },
  { word: "highly", bg: "#e0e7ff", border: "#a5b4fc", color: "#3730a3" },
  { word: "extremely", bg: "#ddd6fe", border: "#8b5cf6", color: "#3730a3" },
  { word: "incredibly", bg: "#c4b5fd", border: "#7c3aed", color: "#fff" },
  { word: "firmly", bg: "#7c3aed", border: "#6d28d9", color: "#fff" },
  { word: "completely", bg: "#4f46e5", border: "#3730a3", color: "#fff" },
  { word: "absolutely", bg: "#3730a3", border: "#312e81", color: "#fff" },
];

const INT_TYPES = [
  { head: "🔉 Downtoners — soften your point", headClass: "bg-cyan-600 text-white", note: "Great for Task 6 (difficult situation) — they keep a complaint polite, not aggressive.", words: [["slightly", "The apartment was <em>slightly</em> smaller than the listing showed."], ["fairly", "The neighbourhood is <em>fairly</em> quiet and safe."]] },
  { head: "🎚️ Moderate — a balanced, natural strength", headClass: "bg-violet-600 text-white", words: [["quite", "The training session was <em>quite</em> helpful."], ["very", "The staff were <em>very</em> friendly and professional."]] },
  { head: "🔊 Amplifiers — strengthen your point", headClass: "bg-indigo-600 text-white", note: 'All three work in speaking; "highly / extremely" also suit formal Writing Task 2.', words: [["highly", "I would <em>highly</em> recommend this restaurant."], ["extremely", "The deadline was <em>extremely</em> tight."], ["incredibly", "The view from the trail was <em>incredibly</em> beautiful."]] },
  { head: "💪 Conviction booster — state opinions with force", headClass: "bg-rose-600 text-white", note: "Modifies verbs of belief (believe, oppose, support). Perfect for opinion tasks.", words: [["firmly", "I <em>firmly</em> believe remote work benefits everyone."]] },
  { head: "🔝 Maximizers — the absolute limit", headClass: "bg-amber-700 text-white", note: 'Use only with extreme (non-gradable) adjectives. Never say "very" with these.', words: [["completely", "By the end of the shift I was <em>completely</em> exhausted."], ["absolutely", "The dinner they cooked was <em>absolutely</em> delicious."]] },
];

/* how the 10 intensifiers strengthen specific CELPIP tasks */
const TASK_USES = [
  { icon: "💡", head: "Speaking Task 1 — Giving Advice", how: "Make your recommendation land with authority.", ex: 'I would <em>highly</em> recommend booking early — it’s <em>quite</em> affordable that way.' },
  { icon: "🗣️", head: "Speaking Task 2 — Personal Experience", how: "Add emotion and vividness to your story.", ex: 'It was <em>incredibly</em> memorable, and by the end I was <em>absolutely</em> thrilled.' },
  { icon: "🔮", head: "Speaking Task 4 — Making Predictions", how: "Show conviction about what will happen.", ex: 'I <em>firmly</em> believe attendance will be <em>extremely</em> high this year.' },
  { icon: "🤝", head: "Speaking Task 6 — Difficult Situation", how: "Soften a complaint so you sound diplomatic, not aggressive.", ex: 'I was <em>slightly</em> concerned, and the wait was <em>quite</em> long. (not “absolutely furious”)' },
  { icon: "🖼️", head: "Speaking Task 8 — Unusual Scene", how: "Paint a vivid picture with strong description.", ex: 'The room looks <em>extremely</em> crowded and the decorations are <em>incredibly</em> colourful.' },
  { icon: "✉️", head: "Writing Task 1 — Email", how: "Match intensity to your reader and purpose.", ex: 'I would be <em>very</em> grateful for a refund; the delay was <em>quite</em> inconvenient.' },
  { icon: "📝", head: "Writing Task 2 — Survey / Opinion Essay", how: "State your position formally and forcefully.", ex: 'I <em>firmly</em> believe this option is <em>highly</em> effective and <em>extremely</em> beneficial.' },
];

const GRAD_BOXES = [
  {
    boxClass: "bg-violet-100 border border-violet-300",
    titleColor: "text-indigo-600",
    title: "🎚️ Gradable adjectives",
    sub: "Use: slightly, fairly, quite, very, highly, extremely, incredibly…",
    rows: ["<em>very friendly</em> / <em>extremely busy</em>", "<em>fairly quiet</em> / <em>quite expensive</em>", "<em>slightly late</em> / <em>highly recommended</em>", "<em>incredibly helpful</em> / <em>firmly convinced</em>"],
  },
  {
    boxClass: "bg-fuchsia-50 border border-purple-200",
    titleColor: "text-violet-700",
    title: "🔝 Non-gradable (extreme) adjectives",
    sub: 'Use: completely, absolutely (the maximizers) — NEVER "very"',
    rows: ['<em>completely exhausted</em> ✅ / <em style="color:#dc2626">very exhausted</em> ❌', '<em>absolutely delicious</em> ✅ / <em style="color:#dc2626">very delicious</em> ❌', '<em>absolutely freezing</em> ✅ / <em style="color:#dc2626">very freezing</em> ❌', '<em>completely certain</em> ✅ / <em style="color:#dc2626">very certain</em> ❌'],
  },
];

const INT_COLLOCATIONS = [
  ["<strong>slightly</strong>", "<em>late, different, smaller, higher, better, delayed</em>", 'slightly perfect, slightly exhausted <span style="color:#dc2626">(extreme adjectives)</span>'],
  ["<strong>fairly</strong>", "<em>common, easy, reliable, quiet, affordable, straightforward</em>", "fairly exhausted, fairly furious"],
  ["<strong>quite</strong>", "<em>helpful, expensive, popular, difficult, impressive, busy</em>", "quite perfect, quite freezing"],
  ["<strong>very</strong>", "<em>friendly, useful, important, busy, professional, clear</em>", 'very exhausted, very freezing <span style="color:#dc2626">(extreme adjectives)</span>'],
  ["<strong>highly</strong>", "<em>recommend, effective, skilled, likely, motivated, regarded</em>", 'highly cold, highly tired <span style="color:#dc2626">(sensation adjectives)</span>'],
  ["<strong>extremely</strong>", "<em>important, tight (deadline), rare, helpful, competitive, useful</em>", "extremely perfect, extremely unique"],
  ["<strong>incredibly</strong>", "<em>beautiful, generous, convenient, grateful, talented, kind</em>", "keeps its impact — don't overuse it"],
  ["<strong>firmly</strong>", "<em>believe, oppose, support, convinced, committed, established</em>", 'firmly cold, firmly delicious <span style="color:#dc2626">(everyday adjectives)</span>'],
  ["<strong>completely</strong>", "<em>exhausted, different, certain, unaware, satisfied, understandable</em>", 'completely good, completely important <span style="color:#dc2626">(gradable adjectives)</span>'],
  ["<strong>absolutely</strong>", "<em>exhausted, delicious, certain, freezing, perfect, essential</em>", 'absolutely good, absolutely nice <span style="color:#dc2626">(gradable adjectives)</span>'],
];

const INT_TIPS = [
  { icon: "🔁", body: '<strong>Never repeat "very" in a row.</strong> Rotate through the scale. ❌ "very good, very helpful, very nice" → ✅ "highly effective, extremely useful, incredibly kind." Range lifts your Vocabulary score.' },
  { icon: "🎯", body: '<strong>In Task 6, use downtoners to stay polite.</strong> Say <em>"I was slightly disappointed"</em> rather than <em>"I was absolutely furious"</em> — even if you are. Diplomacy scores higher than raw emotion.' },
  { icon: "💪", body: '<strong>Use "firmly" to state opinions.</strong> In Writing Task 2 and Speaking Tasks 2 & 4, <em>"I firmly believe…"</em> sounds far more confident than <em>"I think."</em> It modifies your verb of belief, not an adjective.' },
  { icon: "📝", body: '<strong>Watch register in Writing Task 2.</strong> Prefer <em>very, extremely, highly</em> in essays. Casual boosters like <em>"pretty"</em> or <em>"really"</em> lower your register — swap <em>"really good results"</em> for <em>"extremely positive results."</em>' },
  { icon: "🎙️", body: '<strong>In Speaking, stress the intensifier — not the adjective.</strong> Native speakers say <em>"abSOlutely delicious"</em> and <em>"inCREDibly helpful."</em> This stress pattern signals fluency to the examiner.' },
  { icon: "🧊", body: '<strong>Never use "very" before an extreme adjective.</strong> ❌ "very exhausted / very freezing / very delicious" → ✅ "absolutely exhausted / absolutely freezing / absolutely delicious." This is the most common intensifier error on CELPIP.' },
  { icon: "🤝", body: '<strong>Learn collocations as chunks.</strong> Memorise natural pairs instead of building them word by word: <em>highly recommend, absolutely exhausted, extremely important, firmly believe, fairly quiet.</em>' },
];

const INT_MISTAKES = [
  { head: '⚠️ "very" with an extreme adjective', wrong: '"I was very exhausted after work."', right: '"I was absolutely exhausted after work."', why: "Exhausted is extreme — it has no degrees. Use the maximizer absolutely." },
  { head: '⚠️ "absolutely" with a gradable adjective', wrong: '"It was absolutely cold outside."', right: '"It was extremely cold" / "absolutely freezing."', why: '"Cold" is gradable — save "absolutely" for the extreme form "freezing."' },
  { head: "⚠️ Wrong collocation with “highly”", wrong: '"I was highly tired." ', right: '"I was extremely tired." / "She is highly skilled."', why: '"Highly" pairs with skill and likelihood, not physical sensations.' },
  { head: "⚠️ Casual intensifier in formal writing", wrong: '"The survey results were really good."', right: '"The survey results were extremely positive."', why: '"Really" is too informal for a CELPIP Writing Task 2 essay.' },
  { head: "⚠️ Repeating the same intensifier", wrong: '"It was very busy, very loud, and very tiring."', right: '"It was extremely busy, incredibly loud, and completely exhausting."', why: "Repetition signals a limited vocabulary range — the examiner notices." },
  { head: "⚠️ Downtoner where you mean a compliment", wrong: '"The food was slightly delicious."', right: '"The food was absolutely delicious."', why: '"Slightly" weakens praise — it sounds like a hidden complaint.' },
];

/* ───────────────────────────── reference panel ───────────────────────────── */

function ReferencePanel() {
  return (
    <div>
      <Section
        title="Intensifiers — Make Your Adjectives More Powerful"
        intro='An <strong>intensifier</strong> is a word placed before an adjective, adverb, or verb to <em>strengthen or weaken</em> its meaning. This page focuses on the <strong>10 highest-value intensifiers for CELPIP</strong> — master these instead of overusing <em>"very,"</em> and you will lift your <strong>Vocabulary</strong> and <strong>Listenability</strong> scores in both Speaking and Writing.'
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

        <SubTitle>The 10 Intensifiers, Grouped by Strength</SubTitle>
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

        <SubTitle>Strengthening Specific CELPIP Tasks</SubTitle>
        <p className="text-[13px] text-slate-600 leading-relaxed mb-3.5 max-w-[720px]">
          The same intensifier does different work depending on the task. Here is how to deploy
          these 10 words to make each Speaking and Writing response stronger.
        </p>
        <div className={`${CARD_GRID} mb-6`}>
          {TASK_USES.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[14px] overflow-hidden flex flex-col">
              <div className="px-4 py-2.5 text-[13px] font-extrabold text-gray-900 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                <span className="text-base">{t.icon}</span>
                {t.head}
              </div>
              <div className="px-5 py-4 flex flex-col gap-2.5">
                <div className="text-[12.5px] text-slate-600 leading-relaxed">{t.how}</div>
                <Ex html={`“${t.ex}”`} />
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

        <SubTitle>How to Use Intensifiers Naturally</SubTitle>
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
    </div>
  );
}

/* ───────────────────────────── shared quiz styles ───────────────────────────── */

const ABTN =
  "px-5 py-[9px] rounded-[10px] text-[13px] font-bold cursor-pointer transition active:scale-[0.96]";

const inputStateCls = (mk) =>
  mk === "correct"
    ? "border-green-600 bg-green-50 text-green-800"
    : mk === "wrong"
      ? "border-red-600 bg-red-50 text-red-800"
      : mk === "revealed"
        ? "border-violet-500 bg-violet-50 text-violet-700 italic"
        : "";

/* ───────────────────────────── intensifiers quiz ───────────────────────────── */

const AINT_GROUPS = [
  { key: "downtoners", icon: "🔉", label: "Downtoners", sub: "weakest end", headBg: "#e0f2fe", headColor: "#0369a1", head: "🔉 Downtoners — weakest end of the scale", pointer: "12%", color: "#0369a1", scaleText: "🔉 Downtoners — weakest end", btnIn: "border-sky-200", btnAc: "bg-sky-100 text-sky-800 border-sky-700", items: [{ num: "1 — weakest", answer: "slightly" }, { num: "2", answer: "fairly" }] },
  { key: "midrange", icon: "🎚️", label: "Mid-range", sub: "moderately strong", headBg: "#ede9fe", headColor: "#4f46e5", head: "🎚️ Mid-range — moderately strong", pointer: "37%", color: "#4f46e5", scaleText: "🎚️ Mid-range — moderately strong", btnIn: "border-violet-300", btnAc: "bg-violet-100 text-indigo-600 border-indigo-600", items: [{ num: "3", answer: "quite" }, { num: "4", answer: "very" }] },
  { key: "amplifiers", icon: "🔊", label: "Amplifiers", sub: "strong", headBg: "#e0e7ff", headColor: "#3730a3", head: "🔊 Amplifiers — strong", pointer: "63%", color: "#3730a3", scaleText: "🔊 Amplifiers — strong", btnIn: "border-indigo-300", btnAc: "bg-indigo-100 text-indigo-800 border-indigo-800", items: [{ num: "5", answer: "highly" }, { num: "6", answer: "extremely" }, { num: "7", answer: "incredibly" }] },
  { key: "maximizers", icon: "🔝", label: "Strongest", sub: "boosters / absolute", headBg: "#ddd6fe", headColor: "#4c1d95", head: "🔝 Strongest — boosters & maximizers", pointer: "88%", color: "#4c1d95", scaleText: "🔝 Strongest — boosters & maximizers", btnIn: "border-violet-200", btnAc: "bg-violet-200 text-violet-900 border-violet-900", items: [{ num: "8", answer: "firmly" }, { num: "9", answer: "completely" }, { num: "10 — strongest", answer: "absolutely" }] },
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

    // Answer is accepted in any order as long as it belongs to this group.
    // Track a pool of the group's answers so each one can only be matched once.
    const pool = indices.map((i) => AINT_ANSWERS[i].toLowerCase());
    const consume = (typed) => {
      const at = pool.indexOf(typed);
      if (at === -1) return false;
      pool.splice(at, 1);
      return true;
    };

    // Reserve answers already locked in (correct/revealed) before matching the rest.
    indices.forEach((i) => {
      if (marks[i] === "correct" || marks[i] === "revealed") {
        consume((values[i] || "").trim().toLowerCase());
        if (marks[i] === "correct") groupCorrect++;
      }
    });

    indices.forEach((i) => {
      if (marks[i] === "correct" || marks[i] === "revealed") return;
      const typed = (values[i] || "").trim().toLowerCase();
      if (typed !== "" && consume(typed)) {
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
  { id: "int-info", label: "📖 Information", Panel: ReferencePanel },
  { id: "int-quiz", label: "🎚️ Quiz", Panel: IntensifiersPanel },
];

export default function IntensifiersTab() {
  const [active, setActive] = useState("int-info");
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
