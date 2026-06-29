// @ts-nocheck
/* eslint-disable */
"use client";

import { useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import SubTabs from "./components/SubTabs";
import FillBlankQuiz from "./components/FillBlankQuiz";
import { shuffle, blankOut } from "./components/quizUtils";

const SUB_TABS = [
  { id: "list", label: "📖 Word List" },
  { id: "quiz", label: "✏️ Fill-in-the-Blank Quiz" },
];

const TASK_LABELS = {
  all: "All Tasks",
  0: "General",
  1: "Task 1",
  2: "Task 2",
  3: "Task 3",
  4: "Task 4",
  5: "Task 5",
  6: "Task 6",
  7: "Task 7",
  8: "Task 8",
  9: "Writing Task 1",
  10: "Writing Task 2",
  W1: "Writing Task 1",
  W2: "Writing Task 2",
};

// Task filter chips, ordered: "all" first, then numerics, then the rest.
const TASKS = [
  "all",
  ...[...new Set(VOCAB.map((v) => String(v.task)))].sort((a, b) => {
    const na = Number(a);
    const nb = Number(b);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    if (!isNaN(na)) return -1;
    if (!isNaN(nb)) return 1;
    return a.localeCompare(b);
  }),
];

/* ─────────────────────────── Word list ─────────────────────────── */

function WordListPanel() {
  const [task, setTask] = useState("all");

  const grouped = useMemo(() => {
    const filtered = VOCAB.filter(
      (v) => task === "all" || String(v.task) === task,
    );
    const byType = {};
    filtered.forEach((v) => {
      (byType[v.type] ||= []).push(v);
    });
    return byType;
  }, [task]);

  const typeKeys = Object.keys(grouped).sort();

  return (
    <>
      <div className="mb-8">
        <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-3">
          Filter by task
        </p>
        <div className="flex flex-wrap gap-2">
          {TASKS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTask(t)}
              className={`px-3.5 py-1.5 rounded-full border-2 text-[13px] font-semibold transition-all ${
                task === t
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {TASK_LABELS[t] || `Task ${t}`}
            </button>
          ))}
        </div>
      </div>

      {typeKeys.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-slate">
            No words found for the selected filters.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {typeKeys.map((typeKey) => (
            <div key={typeKey}>
              <h3 className="font-display text-lg text-ink mb-4">{typeKey}</h3>
              <div className="space-y-3">
                {grouped[typeKey].map((v, i) => (
                  <div
                    key={v.word + i}
                    className="bg-white rounded-xl border border-mist p-4 card-hover"
                  >
                    <div className="font-semibold text-ink mb-2">{v.word}</div>
                    <p className="text-sm text-slate mb-2">{v.meaning}</p>
                    <p className="text-xs text-slate italic">"{v.example}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────────────────────── Quiz ─────────────────────────── */

function buildQuestions(count) {
  const pool = shuffle(VOCAB);
  const selected = count === 0 ? pool : pool.slice(0, count);

  return selected.map((item) => {
    const sentence = blankOut(item.example, item.word);

    const sameType = pool.filter((o) => o.word !== item.word && o.type === item.type);
    const otherType = pool.filter((o) => o.word !== item.word && o.type !== item.type);
    const distractors = [...shuffle(sameType), ...shuffle(otherType)].slice(0, 3);

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
      label: "Complete the sentence — choose the missing word",
      tags: (
        <>
          <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 rounded-full px-2.5 py-0.5">
            {TASK_LABELS[String(item.task)] || `Task ${item.task}`}
          </span>
          {item.type && (
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-2.5 py-0.5">
              {item.type}
            </span>
          )}
        </>
      ),
    };
  });
}

/* ─────────────────────────── Shell ─────────────────────────── */

export default function WordListTab() {
  const [active, setActive] = useState("list");

  return (
    <section>
      <SubTabs tabs={SUB_TABS} active={active} onChange={setActive} accent="ink" />
      <div className={active === "list" ? "" : "hidden"}>
        <WordListPanel />
      </div>
      <div className={active === "quiz" ? "" : "hidden"}>
        <FillBlankQuiz
          accent="ink"
          setupTitle="✏️ Word List Fill-in-the-Blank Quiz"
          setupSub="Each question shows a real CELPIP-style example sentence with the target word blanked out. Four options show possible words — pick the one that fits the context."
          countOptions={[
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "30", value: 30 },
            { label: "All", value: 0 },
          ]}
          buildQuestions={buildQuestions}
          subject="vocabulary range"
        />
      </div>
    </section>
  );
}
