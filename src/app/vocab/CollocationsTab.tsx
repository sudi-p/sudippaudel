// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import { COLLOCATIONS } from "./data";
import SubTabs from "./components/SubTabs";
import FillBlankQuiz from "./components/FillBlankQuiz";
import { BLANK, shuffle } from "./components/quizUtils";

const SUB_TABS = [
  { id: "ref", label: "📖 Reference" },
  { id: "quiz", label: "✍️ Quiz" },
];

// Flatten every collocation into one pool, tagged with its category.
const ALL = COLLOCATIONS.flatMap((g) =>
  g.items.map((item) => ({ ...item, category: g.category })),
);

/* ─────────────────────────── Reference ─────────────────────────── */

function ReferencePanel() {
  return (
    <>
      {COLLOCATIONS.map((group) => (
        <section key={group.category} className="mb-10">
          <h2 className="font-display text-3xl text-ink mb-1 flex items-center gap-3">
            <span>{group.emoji}</span>
            {group.category}
          </h2>
          <div className="w-12 h-0.5 bg-gold rounded-full mb-5" />
          <div className="grid gap-4 md:grid-cols-2">
            {group.items.map((item) => (
              <div
                key={item.collocation}
                className="bg-white rounded-xl border border-mist p-5 card-hover"
              >
                <div className="font-semibold text-lg text-ink mb-2">
                  {item.collocation}
                </div>
                <p className="text-xs text-slate italic flex gap-2">
                  <span className="text-gold not-italic">›</span>
                  <span>"{item.example}"</span>
                </p>
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
  const pool = shuffle(ALL).slice(0, 55);
  const selected = pool.slice(0, Math.min(count, pool.length));

  return selected.map((item) => {
    const sentence = item.question || item.example + " [" + BLANK + "]";

    const sameCategory = pool.filter(
      (o) => o.collocation !== item.collocation && o.category === item.category,
    );
    const otherPool = pool.filter(
      (o) => o.collocation !== item.collocation && o.category !== item.category,
    );
    const distractors = [...shuffle(sameCategory), ...shuffle(otherPool)].slice(0, 3);

    const options = shuffle([item, ...distractors]).map((o) => ({
      key: o.collocation,
      label: o.collocation,
    }));

    return {
      sentence,
      options,
      correctKey: item.collocation,
      answerLabel: item.collocation,
      filledAnswer: item.answer,
      feedbackSub: `The sentence uses: "${item.answer}"`,
      tags: (
        <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5">
          {item.category}
        </span>
      ),
    };
  });
}

/* ─────────────────────────── Shell ─────────────────────────── */

export default function CollocationsTab() {
  const [active, setActive] = useState("ref");

  return (
    <section>
      <SubTabs tabs={SUB_TABS} active={active} onChange={setActive} accent="amber" />
      <div className={active === "ref" ? "" : "hidden"}>
        <ReferencePanel />
      </div>
      <div className={active === "quiz" ? "" : "hidden"}>
        <FillBlankQuiz
          accent="amber"
          setupTitle="✍️ Collocation Fill-in-the-Blank Quiz"
          setupSub="Each question shows a real CELPIP-style sentence with a missing collocation. Pick the correct word combination from 4 options — wrong answers use plausible but incorrect alternatives."
          countOptions={[
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "35", value: 35 },
            { label: "All 55", value: 55 },
          ]}
          buildQuestions={buildQuestions}
          subject="collocation range"
        />
      </div>
    </section>
  );
}
