// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import { renderTemplate } from "../templateHighlight";
import TaskNav from "../TaskNav";
import { Accordion } from "../components/Accordion";
import { TabBar } from "../components/TabBar";
import { ScoreCriteria, Blueprint } from "../components/OverviewCards";
import { TipsPane } from "../components/TipsPane";
import { VocabPane } from "../components/VocabPane";
import { Hero } from "../components/Hero";
import {
  TABS,
  SCORE_CRITERIA,
  BLUEPRINT,
  SCORE_BANDS,
  SCENARIOS,
  TEMPLATE_PARTS,
  SPATIAL_TOOLKIT,
  SAMPLES,
  TEMPLATE_PHRASES,
  TIP_FILTERS,
  TIPS,
  KEY_INSIGHT,
} from "./data";


const VocabCard = ({ word }) => (
  <div className="bg-fog rounded-xl p-3">
    <p className="text-sm font-semibold text-ink">{word.word}</p>
    <p className="text-xs text-slate mt-0.5">
      <strong>Meaning:</strong> {word.meaning}
    </p>
    {word.example && (
      <p className="text-xs text-slate italic mt-0.5">
        <strong>Example:</strong> "{word.example}"
      </p>
    )}
  </div>
);

// Setting → Details → Impression — the three labelled beats reused by every
// scenario's "Perfect Response Example" and by every sample answer.
const Triad = ({ setting, details, impression, highlight = false }) => {
  const show = (text) =>
    highlight ? renderTemplate(text, TEMPLATE_PHRASES) : text;
  return (
    <div className="text-sm text-ink italic leading-relaxed space-y-2">
      <p>
        <span className="not-italic font-semibold text-sapphire">Setting:</span>{" "}
        {show(setting)}
      </p>
      <p>
        <span className="not-italic font-semibold text-emerald2">Details:</span>{" "}
        {show(details)}
      </p>
      <p>
        <span className="not-italic font-semibold text-amber2">
          Impression:
        </span>{" "}
        {show(impression)}
      </p>
    </div>
  );
};

export default function CelpipSpeakingTask3Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("all");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 3 Study Guide";
  }, []);

  const task3Words = useMemo(() => VOCAB.filter((v) => v.task === "3"), []);
  const vocabTypes = useMemo(
    () => ["all", ...new Set(task3Words.map((v) => v.type))],
    [task3Words],
  );
  const filteredVocab =
    vocabFilter === "all"
      ? task3Words
      : task3Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      <TaskNav />
      {/* ─── HERO ─── */}
      <Hero
        eyebrow={<>Speaking · Task 3 of 8</>}
        title={<>Describe a <span className="hero-line italic">scene</span></>}
        description={<>Everything you need to score 9+ on Task 3 — structure, vocab,
            scoring rubric, practice scenarios, and delivery tips.</>}
        stats={[
          { label: "Speaking time", value: <>60<span className="text-lg">s</span></> },
          { label: "Prep time", value: <>30<span className="text-lg">s</span></> },
          { label: "Score scale", value: <>1–12</> },
          { label: "Target band", value: <>8–10</> },
        ]}
      />

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* TAB BAR */}
<TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />

        {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
        <div
          id="pane-overview"
          className={`pane ${activeTab === "overview" ? "active" : ""} space-y-5`}
        >
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              What the task involves
            </p>
            <p className="text-base leading-relaxed text-ink">
              You will be shown a photograph and asked to describe what you see
              in detail. You have <strong>30 seconds to prepare</strong> and{" "}
              <strong>60 seconds to speak</strong>. There is no question — just
              an instruction like{" "}
              <em>"Describe the image in as much detail as possible."</em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to organize ideas spatially,
              use descriptive vocabulary, apply spatial language, and speak
              fluently without long pauses.
            </p>
          </div>

<ScoreCriteria items={SCORE_CRITERIA} />

<Blueprint title="The 60-second blueprint" steps={BLUEPRINT} />

        </div>

        {/* ══════════════════════════════════════════
               PANE: SCENARIO TYPES
          ══════════════════════════════════════════ */}
        <div
          id="pane-scenarios"
          className={`pane ${activeTab === "scenarios" ? "active" : ""} space-y-6`}
        >
          {/* Intro */}
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              Why scenario types matter
            </p>
            <p className="text-sm leading-relaxed text-ink">
              Every Task 3 image belongs to a <strong>mood category</strong>.
              Recognising the category in your 30-second prep time lets you
              instantly recall the right vocabulary, opening line, and closing
              line — so you never blank out mid-response.
            </p>
            <p className="text-sm leading-relaxed text-ink mt-2">
              The six categories below cover virtually every image you will see
              on the real test.
            </p>
          </div>

          {SCENARIOS.map((sc) => (
            <Accordion
              key={sc.id}
              bodyClassName="space-y-5"
              header={
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full ${sc.iconClass} text-sm flex items-center justify-center shrink-0`}
                  >
                    {sc.icon}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-ink">
                      {sc.title}
                    </span>
                    <span className="text-xs text-slate ml-2">
                      {sc.subtitle}
                    </span>
                  </div>
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-xl p-4">
                  <p
                    className={`text-xs font-semibold ${sc.vocabHeading} uppercase tracking-wider mb-2`}
                  >
                    Atmosphere
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sc.atmosphere.map((word) => (
                      <span
                        key={word.word}
                        className="bg-white border border-mist rounded-full px-3 py-1 text-xs font-semibold text-ink"
                      >
                        {word.word}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-fog rounded-xl p-4">
                  <p
                    className={`text-xs font-semibold ${sc.vocabHeading} uppercase tracking-wider mb-2`}
                  >
                    Mood
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sc.mood.map((word) => (
                      <span
                        key={word.word}
                        className="bg-white border border-mist rounded-full px-3 py-1 text-xs font-semibold text-ink"
                      >
                        {word.word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className={`${sc.openingBox} rounded-xl p-4`}>
                  <p
                    className={`text-xs font-semibold ${sc.openingLabel} uppercase tracking-wider mb-2`}
                  >
                    ✦ Opening (Setting — 10 s)
                  </p>
                  <p className="text-sm text-ink italic leading-relaxed">
                    {sc.opening.text}
                  </p>
                  <p className="text-xs text-slate mt-2">Tip: {sc.opening.tip}</p>
                </div>
                <div className="bg-amber2-light rounded-xl p-4">
                  <p className="text-xs font-semibold text-amber2-dark uppercase tracking-wider mb-2">
                    ✦ Closing (Impression — 15 s)
                  </p>
                  <p className="text-sm text-ink italic leading-relaxed">
                    {sc.closing.text}
                  </p>
                  <p className="text-xs text-slate mt-2">Tip: {sc.closing.tip}</p>
                </div>
              </div>

              <div className="bg-fog rounded-xl p-5 space-y-3">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">
                  ★ Perfect Response Example
                </p>
                <p className="text-xs text-slate italic">
                  Image: {sc.example.imageDesc}
                </p>
                <Triad
                  setting={sc.example.setting}
                  details={sc.example.details}
                  impression={sc.example.impression}
                />
              </div>

              <div>
                <p
                  className={`text-xs font-semibold ${sc.vocabHeading} uppercase tracking-wider mb-1`}
                >
                  Key Vocabulary
                </p>
                <p className="text-xs text-slate mb-2">
                  Meanings of the atmosphere and mood words above.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...sc.atmosphere, ...sc.mood].map((word) => (
                    <VocabCard key={word.word} word={word} />
                  ))}
                </div>
              </div>
            </Accordion>
          ))}
        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div
          id="pane-template"
          className={`pane ${activeTab === "overview" ? "active" : ""} space-y-4 mt-5`}
        >
          <p className="text-sm text-slate">
            A proven 3-part structure + scenario-specific templates. Use these
            as mental scaffolding, not scripts.
          </p>

          {TEMPLATE_PARTS.map((part) => (
            <Accordion
              key={part.id}
              header={
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full ${part.circle} text-white text-xs font-semibold flex items-center justify-center shrink-0`}
                  >
                    {part.n}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-ink">
                      {part.title}
                    </span>
                    <span className="text-xs text-slate ml-2">{part.meta}</span>
                  </div>
                </div>
              }
            >
              <p className="text-sm text-slate">{part.intro}</p>

              {part.bullets && (
                <ul className="space-y-2 text-sm text-ink">
                  {part.bullets.map(([bold, rest]) => (
                    <li key={bold} className="flex gap-2">
                      <span className="text-gold shrink-0">✦</span>
                      <span>
                        <strong>{bold}</strong> {rest}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {part.techniques && (
                <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-2">
                    Key techniques:
                  </p>
                  <ul className="space-y-1 text-xs text-sapphire-dark">
                    {part.techniques.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {part.panelItems && (
                <div className="bg-fog rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    {part.panelLabel}
                  </p>
                  <div className="space-y-2 text-sm text-ink italic">
                    {part.panelItems.map((item, i) => (
                      <p key={i} className="leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {part.scenarioBlocks && (
                <div className="bg-fog rounded-xl p-4 space-y-4">
                  {part.scenarioBlocks.map((block) => (
                    <div key={block.label}>
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                        {block.label}
                      </p>
                      <p className="text-sm text-ink italic leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Accordion>
          ))}

          {/* Bonus: Useful Spatial Phrases */}
          <Accordion
            wrapClassName="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden"
            triggerHover="hover:bg-violet2/5"
            bodyBorder="border-violet2/30"
            bodyClassName="space-y-3"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Spatial Language Toolkit
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
              {SPATIAL_TOOLKIT.map((col) => (
                <div key={col.title}>
                  <p className="font-semibold text-violet2-dark mb-2">
                    {col.title}
                  </p>
                  <ul className="space-y-1 text-xs">
                    {col.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>

        </div>

        <div
          id="pane-samples"
          className={`pane ${activeTab === "structure" ? "active" : ""} space-y-4`}
        >
          {/* Sample Answers — full 60-second responses built from the templates above */}
          <Accordion
            bodyClassName="space-y-5"
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  ★
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Sample Answers
                  </span>
                  <span className="text-xs text-slate ml-2">
                    full 60-second responses · Setting → Details → Impression
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each sample combines the three parts above into a complete answer.
              Since Task 3 always shows a photograph, an{" "}
              <strong>image prompt</strong> is included so you can generate the
              scene and practise describing it aloud. The{" "}
              <mark className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink">
                highlighted
              </mark>{" "}
              words are the reusable template — keep them and swap in your own
              details.
            </p>

            {SAMPLES.map((sample) => (
              <div
                key={sample.scenario}
                className="bg-fog rounded-xl p-5 space-y-4"
              >
                <p
                  className={`text-xs font-semibold ${sample.scenarioColor} uppercase tracking-widest`}
                >
                  {sample.scenario}
                </p>
                <div className="bg-white rounded-lg border border-mist p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    🖼️ Image generation prompt
                  </p>
                  <p className="text-sm text-ink italic leading-relaxed">
                    {sample.imagePrompt}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer
                  </p>
                  <Triad
                    setting={sample.setting}
                    details={sample.details}
                    impression={sample.impression}
                    highlight
                  />
                </div>
              </div>
            ))}
          </Accordion>
        </div>

        {/* ══════════════════════════════════════════
               PANE: VOCAB BANK
          ══════════════════════════════════════════ */}
<VocabPane words={filteredVocab} types={vocabTypes} filter={vocabFilter} onFilter={setVocabFilter} active={activeTab} variant="labeled" />

        {/* ══════════════════════════════════════════
               PANE: PRO TIPS
          ══════════════════════════════════════════ */}
<TipsPane tips={filteredTips} active={activeTab} />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
        <p className="text-xs text-slate mb-4">
          CELPIP Prep — Speaking Task 3 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Master the art of scene description. Practice with diverse images,
          organize your thoughts spatially, and let your vocabulary shine
          through.
        </p>
      </footer>
    </>
  );
}
