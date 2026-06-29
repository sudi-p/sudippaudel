// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import { SOUND_WORDS, SENTENCES, TRAPS, QUIZ } from "./data";

const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const SUB_TABS = [
  { id: "art-rules", label: "Rules" },
  { id: "art-sound", label: "Sound rule" },
  { id: "art-practice", label: "Fill-in" },
  { id: "art-traps", label: "Common traps" },
  { id: "art-quiz", label: "Quiz" },
];

const NAV_BTN =
  "px-3.5 py-1.5 border border-gray-300 rounded-lg bg-white text-[13px] cursor-pointer text-gray-700 disabled:opacity-35 disabled:cursor-default";

const EM = "[&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold";

/* ═══════════════════════════ RULES PANEL ═══════════════════════════ */

const BADGE = {
  a: "bg-blue-100 text-blue-800",
  an: "bg-green-100 text-green-800",
  the: "bg-amber-100 text-amber-800",
  zero: "bg-violet-100 text-violet-800",
};

const RULES = [
  { badge: "a", label: "a", title: "First mention — any one of its kind", body: `Use <strong>a</strong> when you introduce something for the first time, or when it doesn't matter <em>which</em> one — just any single one.`, pills: ["I saw <em>a</em> dog.", "She has <em>a</em> job offer.", "Can I borrow <em>a</em> pen?"] },
  { badge: "an", label: "an", title: `Same as "a" — but before a vowel sound`, body: `Use <strong>an</strong> when the very next sound is a vowel. It's about the <em>sound</em>, not the spelling.`, pills: ["<em>an</em> apple", "<em>an</em> hour (silent h)", `<em>an</em> MBA (says "em")`, `<em>a</em> university (says "you")`, "<em>a</em> European"] },
  { badge: "the", label: "the", title: "Already known — the specific one", body: `Use <strong>the</strong> when both speaker and listener know exactly which one is meant — because it was mentioned before, there's only one, or context makes it obvious.`, pills: ["I saw a dog. <em>The</em> dog barked.", "<em>The</em> sun rises in the east.", "Close <em>the</em> door.", "<em>The</em> president spoke today."] },
  { badge: "the", label: "the", title: "Superlatives & unique roles", body: `Use <strong>the</strong> with superlatives (best, worst, tallest) and with ordinals (first, second, last). Also with one-of-a-kind things in context.`, pills: ["<em>The</em> best option", "<em>The</em> first time", "<em>The</em> last train", "<em>The</em> only solution"] },
  { badge: "the", label: "the", title: `Geographic names that use "the"`, body: `Rivers, oceans, seas, mountain ranges, deserts, and country names with "united/republic/states/islands" take <strong>the</strong>.`, pills: ["<em>The</em> Amazon", "<em>The</em> Pacific Ocean", "<em>The</em> Alps", "<em>The</em> Sahara", "<em>The</em> United States", "<em>The</em> Philippines"] },
];

const ZERO_CELLS = [
  { title: "Plural generalizations", ex: `Talking about a whole category in general — not specific members.<br><em>Dogs are loyal. Books are expensive.</em>` },
  { title: "Uncountable nouns (general)", ex: `Water, advice, information, furniture, money, knowledge — when used generally.<br><em>I need advice. She likes music.</em>` },
  { title: "Meals", ex: `breakfast, lunch, dinner, supper — when talking about the meal in general.<br><em>What's for dinner? I skipped lunch.</em><br><small>Exception: <em>a big breakfast</em> (described meal)</small>` },
  { title: "Sports & games", ex: `Never use an article before sport names.<br><em>She plays tennis. He loves chess. We watch soccer.</em>` },
  { title: "Languages", ex: `No article before a language name alone.<br><em>She speaks French. He is learning Mandarin.</em><br><small>Exception: <em>the French language</em> (with "language")</small>` },
  { title: "Academic subjects", ex: `No article before school subjects.<br><em>She studies biology. He majors in economics.</em>` },
  { title: "Most proper nouns", ex: `People's names, most countries, cities, continents, individual mountains, lakes.<br><em>Canada, Paris, Asia, Lake Ontario, Mount Fuji.</em>` },
  { title: "Institutions (primary purpose)", ex: `school, university, hospital, church, prison, bed, work, home — when used for their core purpose.<br><em>She's in hospital. He's at work. I go to school.</em>` },
  { title: "Abstract nouns (general truth)", ex: `When stating a general truth or universal concept.<br><em>Love is powerful. Honesty matters. Freedom is precious.</em>` },
  { title: "Transport & communication (by + noun)", ex: `No article after "by" for modes of transport or communication.<br><em>by car, by bus, by train, by phone, by email.</em>` },
  { title: "Days, months, seasons (general)", ex: `No article for general references to days, months, and seasons.<br><em>I love winter. She was born in March. See you on Monday.</em><br><small>Exception: <em>the Monday before last</em> (specific)</small>` },
  { title: "Streets, roads, squares, parks (named)", ex: `Most named streets and parks drop the article.<br><em>She lives on King Street. We walked through Central Park.</em><br><small>Exception: <em>the High Street</em> (British English)</small>` },
];

function RuleCard({ badge, label, title, body, pills }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3">
      <div className="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
        <span
          className={`inline-block text-[11px] font-semibold px-2 py-[2px] rounded-md ${BADGE[badge]}`}
        >
          {label}
        </span>
        {title}
      </div>
      <div className={`text-[13px] text-gray-500 leading-relaxed ${EM} [&_strong]:font-bold`}>
        <Html html={body} />
        {pills && (
          <div className="flex gap-2 flex-wrap mt-2">
            {pills.map((p, i) => (
              <Html
                key={i}
                className={`text-xs bg-gray-50 border border-gray-200 rounded-md px-2.5 py-[3px] text-gray-700 ${EM}`}
                html={p}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RulesPanel() {
  return (
    <>
      {RULES.map((r, i) => (
        <RuleCard key={i} {...r} />
      ))}

      {/* Zero-article grid card */}
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3">
        <div className="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
          <span className={`inline-block text-[11px] font-semibold px-2 py-[2px] rounded-md ${BADGE.zero}`}>
            ∅
          </span>
          Zero article — when NO article is used
        </div>
        <div className="text-[13px] text-gray-500 leading-relaxed">
          English drops the article in many predictable situations. Here is
          every major case:
          <div className="grid grid-cols-2 gap-2.5 mt-2.5 max-[600px]:grid-cols-1">
            {ZERO_CELLS.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5"
              >
                <div className="text-xs font-semibold text-violet-800 mb-1.5 uppercase tracking-wide">
                  {c.title}
                </div>
                <Html
                  as="div"
                  className={`text-xs text-gray-500 [line-height:1.7] ${EM} [&_small]:text-[10px]`}
                  html={c.ex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <RuleCard
        badge="zero"
        label="∅"
        title="Institutions — purpose vs. place"
        body={`When you use an institution for its primary purpose, drop the article. When you treat it as a physical place, use <strong>a/the</strong>.`}
        pills={[
          "She's in <em>hospital</em>. (as a patient)",
          "He visited <em>the</em> hospital. (as a visitor)",
          "I go to <em>school</em>. (to study)",
          "I drove past <em>the</em> school. (the building)",
        ]}
      />
    </>
  );
}

/* ═══════════════════════════ SOUND PANEL ═══════════════════════════ */

function SoundPanel() {
  const [sel, setSel] = useState(0);
  const w = SOUND_WORDS[sel];
  return (
    <>
      <Html
        as="p"
        className={`text-sm text-gray-500 mb-4 leading-relaxed ${EM} [&_strong]:font-bold`}
        html={`The <strong>a / an</strong> rule is about the <em>sound</em> of the next word, not its first letter. Click each word to see the rule.`}
      />
      <div className="bg-gray-50 rounded-xl p-5 mb-4 min-h-[80px]">
        <div className="text-[22px] text-gray-900 mb-2 font-semibold">
          <span className="text-blue-600">{w.art}</span> {w.word}
        </div>
        <Html as="div" className="text-[13px] text-gray-500 leading-relaxed" html={w.why} />
      </div>
      <div className="flex gap-2 flex-wrap mb-4">
        {SOUND_WORDS.map((sw, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSel(i)}
            className={`text-[13px] px-3.5 py-1.5 rounded-lg border cursor-pointer transition-all ${
              sel === i
                ? "bg-white border-gray-300 text-gray-900 font-medium"
                : "bg-gray-50 border-gray-200 text-gray-500"
            }`}
          >
            <strong>{sw.art}</strong> {sw.word}
          </button>
        ))}
      </div>
      <div className="px-3.5 py-2.5 bg-gray-50 rounded-lg text-[13px] text-gray-500 leading-relaxed">
        <strong className="text-gray-700">Tip:</strong> When unsure, say the
        phrase aloud. If the next word begins with a vowel sound, your mouth
        naturally prefers "an".
      </div>
    </>
  );
}

/* ═══════════════════════════ FILL-IN PANEL ═══════════════════════════ */

function FillPanel() {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState(null);
  const s = SENTENCES[i];
  const move = (d) => {
    setI((x) => Math.max(0, Math.min(SENTENCES.length - 1, x + d)));
    setChosen(null);
  };
  const isRight =
    chosen != null && chosen.toLowerCase() === s.answer.toLowerCase();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <button className={NAV_BTN} onClick={() => move(-1)} disabled={i === 0}>
          ← prev
        </button>
        <span className="text-[13px] text-gray-500">
          {i + 1} of {SENTENCES.length}
        </span>
        <button
          className={NAV_BTN}
          onClick={() => move(1)}
          disabled={i === SENTENCES.length - 1}
        >
          next →
        </button>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 mb-3">
        <div className="text-[18px] text-gray-900 [line-height:2] mb-3">
          {s.before ? s.before + " " : ""}
          <span
            className="inline-block min-w-[52px] border-b-2 border-gray-400 text-center px-1 text-[18px]"
            style={isRight ? { color: "#16a34a" } : { color: "#6b7280" }}
          >
            {isRight ? s.answer : "___"}
          </span>{" "}
          {s.after}
        </div>
        <div className="flex gap-2 flex-wrap">
          {s.options.map((opt) => {
            let cls = "bg-white border-gray-300 text-gray-700";
            if (chosen != null) {
              const correct = opt.toLowerCase() === s.answer.toLowerCase();
              if (correct) cls = "bg-green-100 border-green-600 text-green-800";
              else if (opt === chosen) cls = "bg-red-100 border-red-600 text-red-800";
            }
            return (
              <button
                key={opt}
                type="button"
                disabled={chosen != null}
                onClick={() => setChosen(opt)}
                className={`px-4 py-1.5 border rounded-lg text-sm font-medium ${cls} ${
                  chosen == null ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {chosen != null && (
          <div
            className={`text-[13px] mt-2.5 font-medium ${
              isRight ? "text-green-600" : "text-red-600"
            }`}
          >
            {isRight ? "✓ Correct!" : "✗ Not quite."}
          </div>
        )}
      </div>
      {chosen != null && (
        <Html
          as="div"
          className="text-[13px] text-gray-500 leading-relaxed px-3.5 py-2.5 bg-gray-50 rounded-lg mt-2"
          html={s.explain}
        />
      )}
    </>
  );
}

/* ═══════════════════════════ TRAPS PANEL ═══════════════════════════ */

function TrapsPanel() {
  const [open, setOpen] = useState({});
  return (
    <>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        These are the mistakes even advanced learners make. Tap each card to
        reveal why it's wrong.
      </p>
      {TRAPS.map((t, i) => (
        <div
          key={i}
          onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
          className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3 cursor-pointer"
        >
          <div className="text-sm text-red-600 line-through mb-1">{t.wrong}</div>
          <div className="text-sm text-green-600 mb-1.5 font-medium">{t.right}</div>
          {open[i] ? (
            <Html as="div" className="text-xs text-gray-500 leading-relaxed mt-1.5" html={t.why} />
          ) : (
            <div className="text-xs text-gray-400 mt-1">tap to see why →</div>
          )}
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ QUIZ PANEL ═══════════════════════════ */

function QuizPanel() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);

  const answer = (idx) => {
    if (chosen !== null) return;
    const q = QUIZ[i];
    setChosen(idx);
    if (idx === q.ans) setScore((s) => s + 1);
    setTimeout(() => {
      setI((x) => x + 1);
      setChosen(null);
    }, 1800);
  };
  const restart = () => {
    setI(0);
    setScore(0);
    setChosen(null);
  };

  const done = i >= QUIZ.length;
  const pct = done ? 100 : (i / QUIZ.length) * 100;

  return (
    <>
      <div className="h-[3px] bg-gray-200 rounded-sm mb-5">
        <div className="h-[3px] bg-blue-600 rounded-sm transition-all" style={{ width: `${pct}%` }} />
      </div>
      {done ? (
        <div className="text-center px-4 py-10">
          <div className="text-5xl font-bold text-gray-900">
            {score}/{QUIZ.length}
          </div>
          <div className="text-[15px] text-gray-500 mt-1.5">
            {score === QUIZ.length
              ? "Perfect! 🎉"
              : score >= 9
                ? "Great work!"
                : score >= 6
                  ? "Good effort — keep practising!"
                  : "Keep studying — you'll get there!"}
          </div>
          <button className={`${NAV_BTN} mt-4`} onClick={restart}>
            Try again
          </button>
        </div>
      ) : (
        (() => {
          const q = QUIZ[i];
          return (
            <>
              <div className="text-base font-semibold text-gray-900 mb-3.5">
                {i + 1}. {q.q}
              </div>
              <div className="flex flex-col gap-2">
                {q.opts.map((o, idx) => {
                  let cls = "bg-white border-gray-300 text-gray-700";
                  if (chosen !== null) {
                    if (idx === q.ans) cls = "bg-green-100 border-green-600 text-green-800";
                    else if (idx === chosen) cls = "bg-red-100 border-red-600 text-red-800";
                  }
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={chosen !== null}
                      onClick={() => answer(idx)}
                      className={`px-3.5 py-2.5 border rounded-lg text-sm text-left ${cls} ${
                        chosen === null ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
                      }`}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>
              {chosen !== null && (
                <Html
                  as="div"
                  className="text-[13px] text-gray-500 mt-2.5 px-3 py-2.5 bg-gray-50 rounded-lg leading-relaxed"
                  html={q.exp}
                />
              )}
            </>
          );
        })()
      )}
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

const PANELS = {
  "art-rules": RulesPanel,
  "art-sound": SoundPanel,
  "art-practice": FillPanel,
  "art-traps": TrapsPanel,
  "art-quiz": QuizPanel,
};

function PositionHeader() {
  return (
    <div className="mb-8">
      <div className="text-[15px] font-semibold text-gray-900 mb-2">
        Where does the article go in a sentence?
      </div>
      <div className="text-[13px] text-gray-500 [line-height:1.7] mb-5">
        Articles (a, an, the) tell us how specific a noun is. Articles always
        attach to a <strong>noun phrase</strong> — but the noun doesn't have to
        come right after. An adjective or even an adverb can sit between the
        article and the noun. Click each pattern to see a colour-coded example.
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <div className="flex gap-3 flex-wrap mb-2.5">
          {[
            { c: "#bfdbfe", l: "article" },
            { c: "#fde68a", l: "adjective" },
            { c: "#ddd6fe", l: "adverb" },
            { c: "#bbf7d0", l: "noun" },
          ].map((x, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-2.5 h-2.5 rounded" style={{ background: x.c }} />
              {x.l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArticlesTab() {
  const [active, setActive] = useState("art-rules");
  const Panel = PANELS[active];
  return (
    <section className="p-2">
      <PositionHeader />
      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-[18px] py-2.5 text-[13px] font-medium cursor-pointer border-b-2 bg-none whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <Panel />
    </section>
  );
}
