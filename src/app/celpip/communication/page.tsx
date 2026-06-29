"use client";

import { useState } from "react";
import { CATEGORIES } from "./data";

type TabKey = "vocab" | "intensity" | "mistakes";

const TABS: { key: TabKey; label: string }[] = [
  { key: "vocab", label: "📚 Vocabulary" },
  { key: "intensity", label: "📈 Intensity Levels" },
  { key: "mistakes", label: "⚠️ Mistakes & Fixes" },
];

type Category = (typeof CATEGORIES)[number];

function CategorySection({ cat }: { cat: Category }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("vocab");

  return (
    <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200">
      {/* header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full select-none items-center gap-3 px-5 py-4 text-left transition hover:brightness-95"
        style={{
          background: `${cat.bg}1a`,
          borderBottom: `1px solid ${cat.border}80`,
        }}
        aria-expanded={open}
      >
        <span className="text-2xl">{cat.emoji}</span>
        <span className="text-base font-extrabold" style={{ color: cat.color }}>
          {cat.title}
        </span>
        <div className="ml-auto hidden flex-wrap gap-1.5 sm:flex">
          {cat.celpipTasks.map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/10 px-2.5 py-0.5 text-[10px] font-bold"
            >
              {t}
            </span>
          ))}
        </div>
        <span
          className="ml-1.5 text-base transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        >
          ▼
        </span>
      </button>

      {/* body */}
      {open && (
        <div className="bg-white p-5">
          <div className="mb-6 rounded-r-lg border-l-[3px] border-gray-200 bg-gray-50 px-3.5 py-2.5 text-[13.5px] leading-relaxed text-gray-700">
            {cat.intro}
          </div>

          {/* sub-tabs */}
          <div className="mb-5 flex overflow-x-auto border-b-2 border-gray-100">
            {TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`-mb-0.5 whitespace-nowrap border-b-2 px-4 py-2.5 text-[12.5px] font-semibold transition ${
                    active
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === "vocab" && <VocabPanel cat={cat} />}
          {activeTab === "intensity" && <IntensityPanel cat={cat} />}
          {activeTab === "mistakes" && <MistakesPanel cat={cat} />}
        </div>
      )}
    </div>
  );
}

function VocabPanel({ cat }: { cat: Category }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
      {cat.vocab.map((v) => (
        <div
          key={v.word}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3.5"
          style={{ borderLeft: `4px solid ${cat.color}` }}
        >
          <div className="mb-1 text-sm font-bold text-gray-900">{v.word}</div>
          <div className="mb-2 text-[12.5px] italic leading-relaxed text-gray-700">
            &ldquo;{v.example}&rdquo;
          </div>
          <div className="rounded-md bg-gray-50 px-2 py-1 text-[11.5px] leading-normal text-gray-500">
            💡 {v.note}
          </div>
        </div>
      ))}
    </div>
  );
}

function IntensityPanel({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col gap-2.5">
      {cat.intensityLevels.map((lv) => (
        <div
          key={lv.level}
          className="flex items-start gap-2.5 rounded-[10px] border px-4 py-3"
          style={{ background: lv.bg, borderColor: cat.border }}
        >
          <span
            className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold"
            style={{
              background: lv.bg,
              color: lv.color,
              border: `1px solid ${lv.color}40`,
            }}
          >
            {lv.level}
          </span>
          <div className="text-[13px] italic leading-relaxed text-gray-700">
            &ldquo;{lv.example}&rdquo;
          </div>
        </div>
      ))}
    </div>
  );
}

function MistakesPanel({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col gap-3.5">
      {cat.mistakes.map((m) => (
        <div
          key={m.title}
          className="overflow-hidden rounded-xl border border-red-300"
        >
          <div className="bg-red-50 px-3.5 py-2 text-[13px] font-bold text-red-800">
            ⚠️ {m.title}
          </div>
          <div className="flex flex-col gap-1.5 bg-white px-3.5 py-2.5">
            <div className="text-[13px] text-red-600">
              <span className="font-bold">✗ </span>
              {m.wrong}
            </div>
            <div className="text-[13px] text-green-600">
              <span className="font-bold">✓ </span>
              {m.right}
            </div>
            <div className="mt-0.5 text-xs italic leading-normal text-gray-500">
              {m.why}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- Quiz ----------------------------- */

const QUIZ_CARDS = CATEGORIES.map((cat) => ({
  id: cat.id,
  emoji: cat.emoji,
  title: cat.title,
  color: cat.color,
  bg: cat.bg,
  border: cat.border,
  question: `What would you say when you are ${cat.title.toLowerCase()}?`,
  answers: cat.vocab.map((v) => v.word),
}));

// Lenient, order-independent normalization for answer matching.
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function QuizPanel() {
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState<Record<number, string[]>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const card = QUIZ_CARDS[index];
  const blank = () => card.answers.map(() => "");
  const values = inputs[index] ?? blank();
  const isRevealed = !!revealed[index];

  const answerNorms = card.answers.map(norm);
  const correctFlags = values.map((val, i) => {
    const n = norm(val);
    if (!n || !answerNorms.includes(n)) return false;
    // count only the first input that holds this value (no double counting)
    return values.findIndex((v) => norm(v) === n) === i;
  });
  const correctCount = correctFlags.filter(Boolean).length;
  const total = card.answers.length;

  const setValue = (i: number, v: string) => {
    setInputs((prev) => {
      const arr = [...(prev[index] ?? card.answers.map(() => ""))];
      arr[i] = v;
      return { ...prev, [index]: arr };
    });
  };

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + QUIZ_CARDS.length) % QUIZ_CARDS.length);

  return (
    <div>
      <p className="mb-5 text-[13.5px] leading-relaxed text-gray-600">
        Read each scenario and type the expressions you would use. The order
        doesn&rsquo;t matter — any correct phrase in any box counts. Stuck? Use{" "}
        <span className="font-semibold">Reveal all</span> to check yourself.
      </p>

      {/* card */}
      <div
        className="overflow-hidden rounded-2xl border bg-white"
        style={{ borderColor: card.border }}
      >
        {/* card header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ background: `${card.bg}66`, borderBottom: `1px solid ${card.border}` }}
        >
          <span className="text-2xl">{card.emoji}</span>
          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-wide"
              style={{ color: card.color }}
            >
              Scenario {index + 1} of {QUIZ_CARDS.length}
            </div>
            <div className="text-base font-extrabold text-gray-900">
              {card.question}
            </div>
          </div>
          <div className="ml-auto shrink-0 text-right">
            <div
              className="text-lg font-extrabold"
              style={{ color: card.color }}
            >
              {correctCount}/{total}
            </div>
            <div className="text-[10px] font-semibold uppercase text-gray-400">
              correct
            </div>
          </div>
        </div>

        {/* card body */}
        <div className="p-5">
          {isRevealed ? (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {card.answers.map((a) => (
                <div
                  key={a}
                  className="rounded-xl border px-4 py-3 text-sm font-semibold text-gray-900"
                  style={{ borderColor: card.border, background: `${card.bg}40` }}
                >
                  ✓ {a}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {values.map((val, i) => {
                const ok = correctFlags[i];
                return (
                  <div key={i} className="relative">
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setValue(i, e.target.value)}
                      placeholder={`Expression ${i + 1}`}
                      className={`w-full rounded-xl border px-4 py-3 pr-10 text-sm outline-none transition focus:ring-2 ${
                        ok
                          ? "border-green-400 bg-green-50 text-green-800"
                          : "border-gray-200 bg-white text-gray-900 focus:border-gray-400"
                      }`}
                      style={ok ? undefined : { ["--tw-ring-color" as string]: `${card.color}33` }}
                    />
                    {ok && (
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                        ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* card footer / controls */}
        <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 bg-gray-50 px-5 py-3.5">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[13px] font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[13px] font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Next →
          </button>

          <div className="ml-auto flex gap-2">
            {isRevealed ? (
              <button
                type="button"
                onClick={() =>
                  setRevealed((prev) => ({ ...prev, [index]: false }))
                }
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[13px] font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                🙈 Hide answers
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setRevealed((prev) => ({ ...prev, [index]: true }))
                }
                className="rounded-full px-4 py-2 text-[13px] font-semibold text-white transition hover:brightness-110"
                style={{ background: card.color }}
              >
                👁 Reveal all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Page ----------------------------- */

type MainTab = "learn" | "quiz";

const MAIN_TABS: { key: MainTab; label: string }[] = [
  { key: "learn", label: "📖 Information" },
  { key: "quiz", label: "📝 Quiz" },
];

export default function InterPersonalPage() {
  const [mainTab, setMainTab] = useState<MainTab>("learn");

  return (
    <>
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
          Talking to People
        </h1>
        <p className="text-lg text-slate max-w-xl leading-relaxed">
          Master interpersonal communication for every CELPIP task.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* top-level tabs */}
        <div className="mb-8 flex w-fit gap-1.5 rounded-full border border-gray-200 bg-gray-50 p-1.5">
          {MAIN_TABS.map((tab) => {
            const active = mainTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setMainTab(tab.key)}
                className={`rounded-full px-5 py-2 text-[13px] font-bold transition ${
                  active
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {mainTab === "learn" &&
          CATEGORIES.map((cat) => <CategorySection key={cat.id} cat={cat} />)}

        {mainTab === "quiz" && <QuizPanel />}
      </main>
    </>
  );
}
