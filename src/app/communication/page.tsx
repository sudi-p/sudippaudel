"use client";

import { useState } from "react";
import { CATEGORIES } from "./data";

type Category = (typeof CATEGORIES)[number];

const SECTIONS: { key: "vocab" | "intensity" | "mistakes"; label: string }[] = [
  { key: "vocab", label: "Vocabulary" },
  { key: "intensity", label: "Intensity" },
  { key: "mistakes", label: "Mistakes & Fixes" },
];

function CategorySection({ cat, n }: { cat: Category; n: number }) {
  const [activeTab, setActiveTab] =
    useState<(typeof SECTIONS)[number]["key"]>("vocab");

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-mist bg-white">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-mist px-5 py-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-[13px] font-bold text-fog">
          {n}
        </span>
        <span className="text-base font-extrabold leading-tight text-ink md:text-lg">
          {cat.title}
        </span>
        <div className="ml-auto hidden flex-wrap justify-end gap-1.5 sm:flex">
          {cat.celpipTasks.map((t) => (
            <span
              key={t}
              className="rounded-full bg-fog px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* body — tabbed sections */}
      <div className="space-y-5 px-6 py-5">
        <div className="rounded-xl bg-fog px-4 py-3 text-sm leading-relaxed text-steel">
          {cat.intro}
        </div>

        {/* sub-tabs */}
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full border px-4 py-1.5 text-[12.5px] font-semibold transition ${
                  active
                    ? "border-ink bg-ink text-fog"
                    : "border-mist text-slate hover:border-slate/40 hover:text-ink"
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
    </div>
  );
}

function VocabPanel({ cat }: { cat: Category }) {
  const levelColor = (level: string) =>
    cat.intensityLevels.find((lv) => lv.level === level)?.color ?? "#64748b";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
      {cat.vocab.map((v) => (
        <div
          key={v.word}
          className="card-hover rounded-xl border border-mist bg-fog px-4 py-3.5"
        >
          <div className="mb-1.5 flex items-start justify-between gap-2">
            <span className="text-sm font-bold text-ink">{v.word}</span>
            <span
              className="mt-0.5 shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              style={{
                background: `${levelColor(v.intensity)}1a`,
                color: levelColor(v.intensity),
              }}
            >
              {v.intensity}
            </span>
          </div>
          <div className="mb-2.5 text-[12.5px] italic leading-relaxed text-steel">
            &ldquo;{v.example}&rdquo;
          </div>
          <div className="rounded-lg bg-mist/70 px-2.5 py-1.5 text-[11.5px] leading-normal text-slate">
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
          className="flex items-center gap-3 rounded-xl border border-mist bg-fog px-4 py-3"
        >
          <span
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
            style={{
              background: `${lv.color}1a`,
              color: lv.color,
            }}
          >
            {lv.level}
          </span>
          <div className="text-[13px] italic leading-relaxed text-steel">
            &ldquo;{lv.example}&rdquo;
          </div>
        </div>
      ))}
    </div>
  );
}

function MistakesPanel({ cat }: { cat: Category }) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {cat.mistakes.map((m) => (
        <div
          key={m.title}
          className="overflow-hidden rounded-xl border border-mist bg-white"
        >
          <div className="border-b border-mist bg-fog/60 px-4 py-2.5 text-[13px] font-bold text-ink">
            {m.title}
          </div>
          <div className="flex flex-col gap-2 px-4 py-3.5">
            <div className="flex gap-2 rounded-lg bg-rose2-light/50 px-3 py-2 text-[13px] leading-relaxed text-rose2-dark">
              <span className="font-bold">✗</span>
              <span>{m.wrong}</span>
            </div>
            <div className="flex gap-2 rounded-lg bg-emerald2-light/50 px-3 py-2 text-[13px] leading-relaxed text-emerald2-dark">
              <span className="font-bold">✓</span>
              <span>{m.right}</span>
            </div>
            <div className="px-1 text-xs italic leading-relaxed text-slate">
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
  const progress = total ? (correctCount / total) * 100 : 0;

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
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate">
        Read each scenario and type the expressions you would use. The order
        doesn&rsquo;t matter — any correct phrase in any box counts. Stuck? Use{" "}
        <span className="font-semibold text-ink">Reveal all</span> to check
        yourself.
      </p>

      {/* card */}
      <div
        className="overflow-hidden rounded-2xl border bg-white shadow-[0_8px_30px_rgba(15,15,15,0.06)]"
        style={{ borderColor: card.border }}
      >
        {/* card header */}
        <div
          className="flex items-center gap-4 px-6 py-5"
          style={{ background: `${card.bg}55` }}
        >
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-2xl"
            style={{ background: `${card.bg}cc` }}
          >
            {card.emoji}
          </span>
          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-wider"
              style={{ color: card.color }}
            >
              Scenario {index + 1} of {QUIZ_CARDS.length}
            </div>
            <div className="text-base font-extrabold leading-tight text-ink md:text-lg">
              {card.question}
            </div>
          </div>
          <div className="ml-auto shrink-0 text-right">
            <div
              className="text-2xl font-extrabold leading-none"
              style={{ color: card.color }}
            >
              {correctCount}/{total}
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate">
              correct
            </div>
          </div>
        </div>

        {/* progress bar */}
        <div className="h-1.5 w-full bg-mist">
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%`, background: card.color }}
          />
        </div>

        {/* card body */}
        <div className="p-6">
          {isRevealed ? (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {card.answers.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold text-ink"
                  style={{ borderColor: card.border, background: `${card.bg}40` }}
                >
                  <span style={{ color: card.color }}>✓</span>
                  {a}
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
                          ? "border-emerald2 bg-emerald2-light/60 text-emerald2-dark"
                          : "border-mist bg-fog/40 text-ink placeholder:text-slate/60 focus:border-slate/40"
                      }`}
                      style={
                        ok
                          ? undefined
                          : { ["--tw-ring-color" as string]: `${card.color}33` }
                      }
                    />
                    {ok && (
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-emerald2">
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
        <div className="flex flex-wrap items-center gap-2 border-t border-mist bg-fog/50 px-6 py-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-full border border-mist bg-white px-4 py-2 text-[13px] font-semibold text-steel transition hover:border-slate/40 hover:text-ink"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-full border border-mist bg-white px-4 py-2 text-[13px] font-semibold text-steel transition hover:border-slate/40 hover:text-ink"
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
                className="rounded-full border border-mist bg-white px-4 py-2 text-[13px] font-semibold text-steel transition hover:border-slate/40 hover:text-ink"
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
  { key: "learn", label: "Information" },
  { key: "quiz", label: "Quiz" },
];

export default function InterPersonalPage() {
  const [mainTab, setMainTab] = useState<MainTab>("learn");

  return (
    <>
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-16">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          Communication Toolkit
        </div>
        <h1 className="mb-3 font-display text-5xl leading-tight text-ink md:text-6xl">
          <span className="hero-line">Talking to People</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate">
          Master interpersonal communication for every CELPIP task.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        {/* top-level tabs */}
        <div className="mb-8 inline-flex gap-1 rounded-full border border-mist bg-white p-1">
          {MAIN_TABS.map((tab) => {
            const active = mainTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setMainTab(tab.key)}
                className={`rounded-full px-6 py-2 text-[13px] font-bold transition ${
                  active
                    ? "bg-ink text-fog"
                    : "text-slate hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {mainTab === "learn" &&
          CATEGORIES.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} n={i + 1} />
          ))}

        {mainTab === "quiz" && <QuizPanel />}
      </main>
    </>
  );
}
