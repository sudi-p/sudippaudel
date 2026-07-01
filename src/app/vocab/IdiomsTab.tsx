// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import { IDIOM_GROUPS } from "./data";
import SubTabs from "./components/SubTabs";
import FillBlankQuiz from "./components/FillBlankQuiz";
import { shuffle, blankOut } from "./components/quizUtils";

const SUB_TABS = [
  { id: "ref", label: "📖 Reference" },
  { id: "quiz", label: "🧠 Quiz" },
];

// Flatten every idiom into one pool, tagged with its group meta.
const ALL = IDIOM_GROUPS.flatMap((g) =>
  g.items.map((item) => ({ ...item, category: g.category })),
);

/* ─────────────────────────── Reference ─────────────────────────── */

function ReferencePanel() {
  return (
    <>
      {IDIOM_GROUPS.map((group) => (
        <div key={group.category} className="mb-10">
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b-2 border-gray-100">
            <span className="text-[1.3rem]">{group.emoji}</span>
            <span
              className="text-[11px] font-bold px-3 py-[3px] rounded-full uppercase tracking-wide"
              style={{ background: group.bg, color: group.color }}
            >
              {group.category}
            </span>
            <span className="text-xs text-gray-400">{group.items.length} idioms</span>
          </div>
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] max-[600px]:grid-cols-1">
            {group.items.map((item) => (
              <div
                key={item.idiom}
                className="bg-white border rounded-xl px-4 py-3.5 flex flex-col gap-1.5"
                style={{ borderColor: group.border }}
              >
                <div className="text-sm font-bold text-gray-900">{item.idiom}</div>
                <div className="text-[12.5px] text-gray-700 leading-relaxed">
                  {item.meaning}
                </div>
                <div className="text-xs text-gray-500 italic bg-gray-50 rounded-md px-2.5 py-1 border border-gray-100 mt-0.5">
                  "{item.example}"
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────── Quiz ─────────────────────────── */

function buildQuestions(count) {
  const pool = shuffle(ALL).slice(0, 55);
  const selected = pool.slice(0, Math.min(count, pool.length));

  return selected.map((item) => {
    const sentence = blankOut(item.example, item.idiom, 2);

    const distractors = shuffle(pool.filter((o) => o.idiom !== item.idiom)).slice(0, 3);
    const options = shuffle([item, ...distractors]).map((o) => ({
      key: o.idiom,
      label: o.idiom,
    }));

    return {
      sentence,
      options,
      correctKey: item.idiom,
      answerLabel: item.idiom,
      feedbackSub: `Meaning: ${item.meaning}`,
    };
  });
}

/* ─────────────────────────── Shell ─────────────────────────── */

export default function IdiomsTab() {
  const [active, setActive] = useState("ref");

  return (
    <section>
      <SubTabs tabs={SUB_TABS} active={active} onChange={setActive} accent="blue" />
      <div className={active === "ref" ? "" : "hidden"}>
        <ReferencePanel />
      </div>
      <div className={active === "quiz" ? "" : "hidden"}>
        <FillBlankQuiz
          accent="blue"
          setupTitle="🧠 Idiom Fill-in-the-Blank Quiz"
          setupSub="Each question shows a sentence with a missing idiom. Choose the correct one from 4 options — including similar-sounding or confusing alternatives."
          countOptions={[
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "35", value: 35 },
            { label: "All 55", value: 55 },
          ]}
          buildQuestions={buildQuestions}
          subject="grasp of English idioms"
        />
      </div>
    </section>
  );
}
