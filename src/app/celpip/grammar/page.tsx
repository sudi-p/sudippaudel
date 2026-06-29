// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import AdsenseAd from "@/components/AdComponent";
import NounsPronounsSection from "./NounsPronounsTab";
import ConjunctionsSection from "./ConjunctionsTab";
import PhoneticsSection from "./PhoneticsTab";
import AdverbsTab from "./AdverbsTab";
import VerbsTab from "./VerbsTab";
import ArticlesTab from "./ArticlesTab";
import VoiceTab from "./VoiceTab";
import PositionalRelationsTab from "./PositionalRelationsTab";
import SentenceStructureTab from "./SentenceStructureTab";
import PrepositionsTab from "./PrepositionsTab";
import AdjectivesTab from "./AdjectivesTab";

const INTRO = "text-slate max-w-2xl leading-relaxed";

const TABS = [
  {
    id: "sentence-structure",
    label: "Sentence Structure",
    Component: SentenceStructureTab,
    intro: (
      <p className={INTRO}>
        Understand how English sentences are built — from individual{" "}
        <span className="font-semibold text-sapphire-dark">word roles</span> to
        complete{" "}
        <span className="font-semibold text-emerald2-dark">sentence types</span>
        . Master these structures to write and speak with precision on CELPIP.
      </p>
    ),
  },
  {
    id: "nouns-pronouns",
    label: "Nouns & Pronouns",
    Component: NounsPronounsSection,
    intro: (
      <p className={INTRO}>
        Understand English{" "}
        <span className="font-semibold text-sapphire-dark">nouns</span> and{" "}
        <span className="font-semibold text-sapphire-dark">pronouns</span> — the
        words that name people, places, things, and ideas, and the words that
        replace them. Master their types, forms, and common traps.
      </p>
    ),
  },
  {
    id: "verbs",
    label: "Verbs",
    Component: VerbsTab,
    intro: (
      <p className={INTRO}>
        Everything about English verbs — types, all 12 tenses, forms, modals,
        phrasal verbs, irregular verbs, and interactive practice.
      </p>
    ),
  },
  {
    id: "adjectives",
    label: "Adjectives",
    Component: AdjectivesTab,
    intro: (
      <p className={INTRO}>
        Master English{" "}
        <span className="font-semibold text-sapphire-dark">adjectives</span> —
        the words that describe, qualify, and bring nouns to life. Learn every
        type, how native speakers use them, and how to boost your CELPIP
        Speaking and Writing scores with precise, vivid description.
      </p>
    ),
  },
  {
    id: "adverbs",
    label: "Adverbs",
    Component: AdverbsTab,
    intro: (
      <p className={INTRO}>
        Master English{" "}
        <span className="font-semibold text-sapphire-dark">adverbs</span> — the
        words that modify verbs, adjectives, and other adverbs. Learn every
        type, how native speakers use them, and how to boost your CELPIP Writing
        and Speaking score.
      </p>
    ),
  },
  {
    id: "articles",
    label: "Articles",
    Component: ArticlesTab,
    intro: (
      <p className={INTRO}>
        Master <span className="font-semibold text-sapphire-dark">a</span>,{" "}
        <span className="font-semibold text-emerald2-dark">an</span>, and{" "}
        <span className="font-semibold text-amber2-dark">the</span> — every
        rule, every trap, with interactive practice and a quiz.
      </p>
    ),
  },
  {
    id: "conjunctions",
    label: "Conjunctions",
    Component: ConjunctionsSection,
    intro: (
      <p className={INTRO}>
        Master English{" "}
        <span className="font-semibold text-sapphire-dark">conjunctions</span> —
        the linking words that connect ideas, clauses, and sentences. Learn
        coordinating, subordinating, and correlative types with examples and
        common traps.
      </p>
    ),
  },
  {
    id: "prepositions",
    label: "Prepositions",
    Component: PrepositionsTab,
    intro: (
      <p className={INTRO}>
        Master English{" "}
        <span className="font-semibold text-sapphire-dark">prepositions</span> —
        the small words that show relationships of place, time, direction, and
        more. Learn the rules, common combinations, and traps to avoid.
      </p>
    ),
  },
  {
    id: "positional-relations",
    label: "Positional Relations",
    Component: PositionalRelationsTab,
    intro: null,
  },
  {
    id: "phonetics",
    label: "Phonetics",
    Component: PhoneticsSection,
    intro: (
      <p className={INTRO}>
        Master English{" "}
        <span className="font-semibold text-sapphire-dark">pronunciation</span>{" "}
        — learn how vowels, consonants, and stress patterns work so you can
        speak clearly and understand native speakers in every CELPIP task.
      </p>
    ),
  },
  {
    id: "voice",
    label: "Active & Passive",
    Component: VoiceTab,
    intro: (
      <p className={INTRO}>
        Master{" "}
        <span className="font-semibold text-emerald2-dark">active</span> and{" "}
        <span className="font-semibold text-amber2-dark">passive</span> voice —
        when to use each, how to convert between them, and CELPIP-specific
        examples for writing and speaking tasks.
      </p>
    ),
  },
];

export default function CelpipVocabPage() {
  const [active, setActive] = useState(TABS[0].id);

  useEffect(() => {
    document.title = "CELPIP Vocabulary Bank";
    // preload voices so they're ready when the Phonetics speaker buttons fire
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Build Your English
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
            Grammar &amp; Vocabulary{" "}
            <span className="hero-line italic">Bank</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Master words, grammar rules, and sentence structures for every
            CELPIP task. Review concepts or test yourself with interactive
            practice.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex">
        <AdsenseAd />

        <main className="max-w-6xl mx-auto px-6 pb-24">
          <div className="mb-8">
            <div className="my-4 border-t border-mist" />

            {/* ─── Tab bar ─── */}
            <div className="flex flex-wrap gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
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

          {/* ─── Tab panels (all mounted; hidden unless active so sub-tab /
               quiz state is preserved when switching top-level tabs) ─── */}
          {TABS.map(({ id, intro, Component }) => (
            <div key={id} className={active === id ? "" : "hidden"}>
              {intro && <div className="mb-8">{intro}</div>}
              <Component />
            </div>
          ))}
        </main>
        <AdsenseAd />
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Grammar & Vocabulary Bank · Master grammar and essential words
          for test success.
        </p>
      </footer>
    </>
  );
}
