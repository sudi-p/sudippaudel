// @ts-nocheck
/* eslint-disable */
"use client";

import { useMemo, useState } from "react";
import { EMOTIONS, INTENSITY_STYLES } from "./data";
import SubTabs from "./components/SubTabs";
import FillBlankQuiz from "./components/FillBlankQuiz";
import { shuffle, blankOut } from "./components/quizUtils";

const SUB_TABS = [
  { id: "ref", label: "📖 Reference" },
  { id: "quiz", label: "💬 Quiz" },
  { id: "fill", label: "✏️ Fill in the Blanks" },
];

// Flatten every emotion word into one pool, tagged with its group.
const ALL_WORDS = EMOTIONS.flatMap((g) =>
  g.words.map((w) => ({ ...w, emotion: g.emotion, emoji: g.emoji })),
);

/* ─────────────────────────── Reference ─────────────────────────── */

function ReferencePanel() {
  return (
    <>
      {EMOTIONS.map((group) => (
        <section key={group.emotion} className="mb-12">
          <h2 className="font-display text-3xl text-ink mb-1 flex items-center gap-3">
            <span>{group.emoji}</span>
            {group.emotion}
          </h2>
          <div className="w-12 h-0.5 bg-gold rounded-full mb-5" />
          <div className="grid gap-4 md:grid-cols-2">
            {group.words.map((w) => (
              <div
                key={w.word}
                className="bg-white rounded-xl border border-mist p-5 card-hover"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-semibold text-lg text-ink">{w.word}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${INTENSITY_STYLES[w.intensity]}`}
                  >
                    {w.intensity}
                  </span>
                </div>
                <p className="text-sm text-slate mb-3">{w.meaning}</p>
                <ul className="space-y-1.5">
                  {w.examples.map((ex, i) => (
                    <li key={i} className="text-xs text-slate italic flex gap-2">
                      <span className="text-gold not-italic">›</span>
                      <span>"{ex}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

/* ─────────────────────────── Quiz ─────────────────────────── */

function buildQuestions(count) {
  const pool = shuffle(ALL_WORDS).slice(0, 55);
  const selected = pool.slice(0, Math.min(count, pool.length));

  return selected.map((item) => {
    const example = item.examples[Math.floor(Math.random() * item.examples.length)];
    const sentence = blankOut(example, item.word);

    const sameEmotion = pool.filter(
      (o) => o.word !== item.word && o.emotion === item.emotion,
    );
    const sameIntensity = pool.filter(
      (o) =>
        o.word !== item.word &&
        o.emotion !== item.emotion &&
        o.intensity === item.intensity,
    );
    const rest = pool.filter(
      (o) =>
        o.word !== item.word &&
        o.emotion !== item.emotion &&
        o.intensity !== item.intensity,
    );
    const distractors = [
      ...shuffle(sameEmotion),
      ...shuffle(sameIntensity),
      ...shuffle(rest),
    ].slice(0, 3);

    const options = shuffle([item, ...distractors]).map((o) => ({
      key: o.word,
      label: o.word,
    }));

    return {
      sentence,
      options,
      correctKey: item.word,
      answerLabel: item.word,
      feedbackSub: `Meaning: ${item.meaning}`,
      label: "Choose the correct emotion word",
      tags: (
        <>
          <span className="text-[11px] font-semibold text-violet-500 bg-violet-50 border border-violet-200 rounded-full px-2.5 py-0.5">
            {item.emoji} {item.emotion}
          </span>
          <span
            className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${INTENSITY_STYLES[item.intensity]}`}
          >
            {item.intensity}
          </span>
        </>
      ),
    };
  });
}

/* ─────────────────────── Fill in the Blanks ─────────────────────── */

function EmotionFillBlanks() {
  // value/result keyed by `${groupIndex}-${wordIndex}`
  const [values, setValues] = useState({});
  const [results, setResults] = useState({}); // key -> "correct" | "wrong"
  const [msgs, setMsgs] = useState({}); // groupIndex -> string

  const check = (gi, group) => {
    const next = { ...results };
    let correct = 0;
    group.words.forEach((w, wi) => {
      const key = `${gi}-${wi}`;
      const val = (values[key] || "").trim().toLowerCase();
      if (val === w.word.toLowerCase()) {
        next[key] = "correct";
        correct++;
      } else {
        next[key] = "wrong";
      }
    });
    setResults(next);
    setMsgs((m) => ({ ...m, [gi]: `${correct} / ${group.words.length} correct` }));
  };

  const reset = (gi, group) => {
    const nextVals = { ...values };
    const nextRes = { ...results };
    group.words.forEach((_, wi) => {
      delete nextVals[`${gi}-${wi}`];
      delete nextRes[`${gi}-${wi}`];
    });
    setValues(nextVals);
    setResults(nextRes);
    setMsgs((m) => ({ ...m, [gi]: "" }));
  };

  return (
    <>
      {EMOTIONS.map((group, gi) => (
        <div key={group.emotion} className="mb-12">
          <div className="font-display font-black uppercase tracking-tight text-ink leading-none mb-1.5 text-[clamp(2.5rem,8vw,4.5rem)]">
            <span className="text-[2.5rem] mr-2 align-middle">{group.emoji}</span>
            {group.emotion}
          </div>
          <div className="w-12 h-1 bg-violet-500 rounded-full mb-7" />
          <div className="flex flex-col gap-4">
            {group.words.map((w, wi) => {
              const key = `${gi}-${wi}`;
              const state = results[key];
              const typed = (values[key] || "").trim().toLowerCase();
              const match =
                state === "wrong" && typed
                  ? ALL_WORDS.find((x) => x.word.toLowerCase() === typed)
                  : null;
              return (
                <div
                  key={key}
                  className="flex items-baseline gap-3 bg-gray-50 border border-gray-200 rounded-[10px] px-3.5 py-2.5 text-[15px] text-gray-700 flex-wrap"
                >
                  <input
                    value={values[key] || ""}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [key]: e.target.value }))
                    }
                    placeholder="?"
                    autoComplete="off"
                    spellCheck={false}
                    className={`inline-block min-w-[120px] text-[15px] font-semibold text-center px-1.5 py-1 bg-transparent border-0 border-b-[3px] outline-none transition-colors max-[600px]:min-w-[80px] ${
                      state === "correct"
                        ? "border-green-600 text-green-800 bg-green-50 rounded-t-md"
                        : state === "wrong"
                          ? "border-red-600 text-red-800 bg-red-50 rounded-t-md"
                          : "border-violet-500 text-ink focus:border-violet-700"
                    }`}
                  />
                  <span className="flex-1 min-w-[180px] leading-relaxed">
                    {w.meaning}
                  </span>
                  {state === "wrong" && typed && (
                    <div className="flex flex-wrap items-center gap-1.5 mt-1.5 w-full pt-1.5 border-t border-dashed border-red-300">
                      {match ? (
                        <>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-violet-50 text-violet-800 border border-violet-200">
                            {match.emoji} {match.emotion}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-800 border border-red-300">
                            {match.intensity}
                          </span>
                          <span className="text-[12.5px] text-gray-500 italic leading-snug">
                            {match.meaning}
                          </span>
                        </>
                      ) : (
                        <span className="text-[12.5px] text-gray-400 italic">
                          Meaning not available
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2.5 mt-6 flex-wrap">
            <button
              type="button"
              onClick={() => check(gi, group)}
              className="bg-violet-500 hover:bg-violet-600 text-white border-none rounded-[10px] px-7 py-2.5 text-sm font-semibold cursor-pointer transition-colors"
            >
              Check Answers
            </button>
            <button
              type="button"
              onClick={() => reset(gi, group)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-none rounded-[10px] px-5 py-2.5 text-sm font-semibold cursor-pointer transition-colors"
            >
              Reset
            </button>
          </div>
          {msgs[gi] && (
            <div
              className={`text-[13px] font-semibold mt-3 ${
                msgs[gi].startsWith(`${group.words.length} /`)
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {msgs[gi]}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────── Shell ─────────────────────────── */

export default function EmotionsTab() {
  const [active, setActive] = useState("ref");

  return (
    <section>
      <SubTabs tabs={SUB_TABS} active={active} onChange={setActive} accent="violet" />
      <div className={active === "ref" ? "" : "hidden"}>
        <ReferencePanel />
      </div>
      <div className={active === "quiz" ? "" : "hidden"}>
        <FillBlankQuiz
          accent="violet"
          setupTitle="💬 Emotion Vocabulary Quiz"
          setupSub="Each question shows a CELPIP-style sentence describing a feeling, with the emotion word blanked out. Choose the most precise word from 4 options — wrong answers come from the same emotion family or intensity level."
          countOptions={[
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "35", value: 35 },
            { label: "All 55", value: 55 },
          ]}
          buildQuestions={buildQuestions}
          subject="emotional vocabulary"
        />
      </div>
      <div className={active === "fill" ? "" : "hidden"}>
        <EmotionFillBlanks />
      </div>
    </section>
  );
}
