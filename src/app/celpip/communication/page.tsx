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

export default function InterPersonalPage() {
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
        {CATEGORIES.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </main>
    </>
  );
}
