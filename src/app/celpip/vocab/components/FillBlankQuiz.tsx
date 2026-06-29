// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import { BLANK, defaultResult } from "./quizUtils";

/**
 * Accent presets — static Tailwind class strings so the JIT compiler can see
 * them. Pick one with the `accent` prop.
 */
const ACCENTS = {
  violet: {
    setup: "bg-violet-50 border-violet-200",
    btn: "bg-violet-500 hover:bg-violet-600",
    countSel: "border-violet-500 bg-violet-50 text-violet-800",
    progress: "bg-violet-500",
    badge: "bg-violet-50 text-violet-800",
    blank: "border-violet-500 text-violet-500",
    optHover: "hover:border-violet-500 hover:bg-violet-50 hover:text-violet-800",
    score: "text-violet-500",
  },
  amber: {
    setup: "bg-amber-50 border-amber-200",
    btn: "bg-amber-600 hover:bg-amber-700",
    countSel: "border-amber-600 bg-amber-50 text-amber-800",
    progress: "bg-amber-600",
    badge: "bg-amber-50 text-amber-800",
    blank: "border-amber-600 text-amber-600",
    optHover: "hover:border-amber-600 hover:bg-amber-50 hover:text-amber-800",
    score: "text-amber-600",
  },
  blue: {
    setup: "bg-gray-50 border-gray-200",
    btn: "bg-blue-600 hover:bg-blue-700",
    countSel: "border-blue-600 bg-blue-50 text-blue-800",
    progress: "bg-blue-600",
    badge: "bg-blue-50 text-blue-800",
    blank: "border-blue-600 text-blue-600",
    optHover: "hover:border-blue-600 hover:bg-blue-50 hover:text-blue-800",
    score: "text-blue-600",
  },
  ink: {
    setup: "bg-gray-50 border-gray-200",
    btn: "bg-gray-900 hover:bg-gray-800",
    countSel: "border-gray-900 bg-gray-900 text-white",
    progress: "bg-gray-900",
    badge: "bg-gray-100 text-gray-900",
    blank: "border-gray-900 text-gray-900",
    optHover: "hover:border-gray-900 hover:bg-gray-50",
    score: "text-gray-900",
  },
};

/** Renders a sentence string, swapping the BLANK placeholder for a node. */
function Sentence({ text, node }) {
  const parts = text.split(BLANK);
  return (
    <div className="text-[17px] text-gray-900 leading-[1.7] font-medium max-[600px]:text-[15px]">
      {parts[0]}
      {parts.length > 1 && node}
      {parts.slice(1).join(BLANK)}
    </div>
  );
}

export default function FillBlankQuiz({
  accent = "ink",
  setupTitle,
  setupSub,
  countOptions, // [{ label, value }]
  buildQuestions, // (count) => Question[]
  subject = "vocabulary",
  getResult,
}) {
  const a = ACCENTS[accent];
  const [phase, setPhase] = useState("setup"); // setup | quiz | results
  const [count, setCount] = useState(countOptions[0].value);
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);

  const start = () => {
    const qs = buildQuestions(count);
    if (!qs.length) return;
    setQuestions(qs);
    setIdx(0);
    setScore(0);
    setChosen(null);
    setPhase("quiz");
  };

  const answer = (key) => {
    if (chosen !== null) return;
    setChosen(key);
    if (key === questions[idx].correctKey) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setChosen(null);
    } else {
      setPhase("results");
    }
  };

  /* ── Setup ── */
  if (phase === "setup") {
    return (
      <div className={`rounded-2xl border p-8 text-center ${a.setup}`}>
        <div className="text-[22px] font-bold text-gray-900 mb-2">{setupTitle}</div>
        <div className="text-sm text-gray-500 mb-6 leading-relaxed max-w-[480px] mx-auto">
          {setupSub}
        </div>
        <div className="text-[13px] text-gray-400 mb-3">How many questions?</div>
        <div className="flex gap-2.5 justify-center flex-wrap mb-6">
          {countOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setCount(opt.value)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all ${
                count === opt.value
                  ? a.countSel
                  : "border-gray-200 bg-white text-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={start}
          className={`text-white border-none rounded-[10px] px-9 py-3 text-[15px] font-semibold cursor-pointer transition-colors ${a.btn}`}
        >
          Start Quiz →
        </button>
      </div>
    );
  }

  /* ── Results ── */
  if (phase === "results") {
    const pct = Math.round((score / questions.length) * 100);
    const { emoji, msg } = (getResult || defaultResult)(pct, subject);
    return (
      <div className={`rounded-2xl border px-8 py-10 text-center ${a.setup}`}>
        <div className="text-5xl mb-3">{emoji}</div>
        <div className="text-[22px] font-bold text-gray-900 mb-1.5">Quiz Complete!</div>
        <div className={`text-[42px] font-extrabold mb-1.5 ${a.score}`}>
          {score} / {questions.length}
        </div>
        <div className="text-[15px] text-gray-500 mb-6">
          {pct}% — {msg}
        </div>
        <button
          type="button"
          onClick={() => setPhase("setup")}
          className={`text-white border-none rounded-[10px] px-8 py-3 text-sm font-semibold cursor-pointer transition-colors ${a.btn}`}
        >
          Try Again
        </button>
      </div>
    );
  }

  /* ── Question ── */
  const q = questions[idx];
  const total = questions.length;
  const answered = chosen !== null;
  const filledNode =
    answered && q.filledAnswer ? (
      <span className="text-green-600 font-bold border-b-[3px] border-green-600 px-0.5">
        {q.filledAnswer}
      </span>
    ) : (
      <span
        className={`inline-block min-w-[140px] border-b-[3px] font-bold text-center text-[17px] px-1.5 ${a.blank}`}
      >
        {BLANK}
      </span>
    );

  return (
    <div>
      {/* progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${a.progress}`}
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      {/* meta */}
      <div className="flex justify-between text-[13px] text-gray-400 mb-5">
        <span>
          Question {idx + 1} of {total}
        </span>
        <span className={`rounded-full px-3 py-0.5 font-bold text-[13px] ${a.badge}`}>
          Score: {score}
        </span>
      </div>

      {/* sentence box */}
      <div className="bg-white border border-gray-200 rounded-2xl px-7 py-6 mb-5">
        <div className="text-[11px] font-bold tracking-[0.07em] text-gray-400 uppercase mb-2.5">
          {q.label || "Complete the sentence"}
        </div>
        {q.tags && <div className="flex items-center gap-2 flex-wrap mb-2.5">{q.tags}</div>}
        <Sentence text={q.sentence} node={filledNode} />
      </div>

      {/* options */}
      <div className="grid grid-cols-2 gap-2.5 mb-4 max-[600px]:grid-cols-1">
        {q.options.map((opt) => {
          let cls = `bg-white border-gray-200 text-gray-700 ${a.optHover}`;
          if (answered) {
            if (opt.key === q.correctKey)
              cls = "border-green-600 bg-green-50 text-green-800";
            else if (opt.key === chosen)
              cls = "border-red-600 bg-red-50 text-red-800";
            else cls = "bg-white border-gray-200 text-gray-700";
          }
          return (
            <button
              key={opt.key}
              type="button"
              disabled={answered}
              onClick={() => answer(opt.key)}
              className={`px-3.5 py-2.5 rounded-[10px] border-2 text-[13.5px] font-semibold text-left leading-snug transition-all ${
                answered ? "cursor-default" : "cursor-pointer"
              } ${cls}`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* feedback */}
      {answered && (
        <div
          className={`rounded-[10px] px-4 py-2.5 text-sm font-semibold mb-4 border ${
            chosen === q.correctKey
              ? "bg-green-50 text-green-800 border-green-300"
              : "bg-red-50 text-red-800 border-red-300"
          }`}
        >
          <div>
            {chosen === q.correctKey
              ? `✓ Correct! "${q.answerLabel}"`
              : `✗ The answer is: "${q.answerLabel}"`}
          </div>
          {q.feedbackSub && (
            <div className="text-xs font-normal mt-1 text-gray-500">{q.feedbackSub}</div>
          )}
        </div>
      )}

      {/* next */}
      {answered && (
        <button
          type="button"
          onClick={next}
          className="bg-gray-900 hover:bg-gray-800 text-white border-none rounded-[10px] px-7 py-2.5 text-sm font-semibold cursor-pointer transition-colors"
        >
          {idx + 1 < total ? "Next Question →" : "See Results →"}
        </button>
      )}
    </div>
  );
}
