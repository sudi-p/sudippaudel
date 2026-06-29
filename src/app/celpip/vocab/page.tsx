// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import WordListTab from "./WordListTab";
import EmotionsTab from "./EmotionsTab";
import CollocationsTab from "./CollocationsTab";
import IdiomsTab from "./IdiomsTab";

const TABS = [
  {
    id: "word-list",
    label: "Word List",
    Component: WordListTab,
    intro: null,
  },
  {
    id: "emotions",
    label: "Emotions",
    Component: EmotionsTab,
    intro: (
      <p className="text-slate max-w-2xl leading-relaxed">
        Build a precise emotional vocabulary. Each emotion is shown from{" "}
        <span className="font-semibold text-emerald2-dark">mild</span> to{" "}
        <span className="font-semibold text-rose2-dark">strong</span> intensity.
      </p>
    ),
  },
  {
    id: "collocations",
    label: "Collocations",
    Component: CollocationsTab,
    intro: (
      <p className="text-slate max-w-2xl leading-relaxed">
        Natural-sounding word combinations used by fluent English speakers.
      </p>
    ),
  },
  {
    id: "idioms",
    label: "Idioms",
    Component: IdiomsTab,
    intro: (
      <p className="text-slate max-w-2xl leading-relaxed">
        Master common English{" "}
        <span className="font-semibold text-sapphire-dark">idioms</span> — fixed
        expressions whose meanings cannot be guessed from individual words.
      </p>
    ),
  },
];

export default function VocabularyPage() {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <>
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
          Build Your English
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
          Vocabulary <span className="hero-line italic">Bank</span>
        </h1>
        <p className="text-lg text-slate max-w-xl leading-relaxed">
          Master words, emotions, collocations, and idioms for every CELPIP task.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Top-level tab buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  active === tab.id
                    ? "bg-ink text-fog"
                    : "bg-fog text-slate hover:bg-mist hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels — all mounted, hidden unless active, so each tab's
            sub-tab and quiz state is preserved when switching. */}
        {TABS.map(({ id, intro, Component }) => (
          <div key={id} className={active === id ? "" : "hidden"}>
            {intro && <div className="mb-8">{intro}</div>}
            <Component />
          </div>
        ))}

        <footer className="border-t border-mist bg-fog py-8 px-6 text-center mt-16">
          <p className="text-xs text-slate">
            CELPIP Vocabulary Bank · Master essential words for test success.
          </p>
        </footer>
      </main>
    </>
  );
}
