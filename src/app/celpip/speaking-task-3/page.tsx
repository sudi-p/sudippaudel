// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import { renderTemplate } from "../templateHighlight";
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

const Chevron = ({ open }) => (
  <svg
    className={`chevron w-4 h-4 text-slate ${open ? "rotated" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

function Accordion({
  header,
  children,
  wrapClassName = "bg-white rounded-2xl border border-mist overflow-hidden",
  triggerHover = "hover:bg-fog/50",
  bodyBorder = "border-mist",
  bodyClassName = "space-y-4",
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={wrapClassName}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left ${triggerHover} transition-colors`}
      >
        {header}
        <Chevron open={open} />
      </button>
      <div
        className={`accordion-body border-t ${bodyBorder} px-6 py-5 ${bodyClassName} ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

const VocabCard = ({ word }) => (
  <div className="bg-fog rounded-xl p-3">
    <p className="text-sm font-semibold text-ink">{word.word}</p>
    <p className="text-xs text-slate mt-0.5">
      <strong>Meaning:</strong> {word.meaning}
    </p>
    <p className="text-xs text-slate italic mt-0.5">
      <strong>Example:</strong> "{word.example}"
    </p>
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
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 3 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Describe a <span className="hero-line italic">scene</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Everything you need to score 9+ on Task 3 — structure, vocab,
            scoring rubric, practice scenarios, and delivery tips.
          </p>
        </div>

        {/* Quick stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up"
          style={{ animationDelay: ".1s" }}
        >
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Speaking time
            </div>
            <div className="font-display text-3xl text-ink">
              60<span className="text-lg">s</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Prep time
            </div>
            <div className="font-display text-3xl text-ink">
              30<span className="text-lg">s</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Score scale
            </div>
            <div className="font-display text-3xl text-ink">1–12</div>
          </div>
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Target band
            </div>
            <div className="font-display text-3xl text-ink">8–10</div>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* TAB BAR */}
        <div
          className="flex flex-wrap gap-2 mb-8 animate-fade-up"
          style={{ animationDelay: ".15s" }}
          id="tab-bar"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${
                activeTab === tab.id ? "tab-active" : "tab-inactive"
              } px-5 py-2 rounded-full border text-sm font-medium transition-all`}
            >
              {tab.label}
            </button>
          ))}
        </div>

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

          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">
              What examiners score you on
            </p>
            <div className="space-y-3">
              {SCORE_CRITERIA.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-md ${c.badge} shrink-0 mt-0.5`}
                  >
                    {c.label}
                  </span>
                  <p className="text-sm leading-relaxed text-ink">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink rounded-2xl p-6 text-fog">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              The 60-second blueprint
            </p>
            <div className="space-y-3">
              {BLUEPRINT.map((step) => (
                <div key={step.n} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full ${step.circle} border flex items-center justify-center shrink-0`}
                  >
                    <span className={`font-display ${step.accent} text-sm`}>
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${step.accent}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-fog/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring — folded in from the old Scoring tab */}
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              How you are scored
            </p>
            <p className="text-sm text-slate">
              How examiners score Task 3 on a 12-point scale. The bands below
              show typical language for each score tier.
            </p>

            <div className="space-y-3 mt-4">
              {SCORE_BANDS.map((band) => (
                <div
                  key={band.title}
                  className="bg-white rounded-2xl border border-mist p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">
                      {band.title}
                    </p>
                    <span className={`font-display text-xl ${band.dot}`}>●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    {Object.entries(band.lines).map(([label, text]) => (
                      <p key={label}>
                        <strong>{label}:</strong> {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                Key insight
              </p>
              <p className="text-sm text-ink">{KEY_INSIGHT}</p>
            </div>
          </div>
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
              <p
                className={`text-xs font-semibold ${sc.vocabHeading} uppercase tracking-wider mb-1`}
              >
                Key Vocabulary
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sc.vocab.map((word) => (
                  <VocabCard key={word.word} word={word} />
                ))}
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
            </Accordion>
          ))}
        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div
          id="pane-structure"
          className={`pane ${activeTab === "structure" ? "active" : ""} space-y-4`}
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
        <div
          id="pane-vocab"
          className={`pane ${activeTab === "vocab" ? "active" : ""} space-y-4`}
        >
          <div className="flex flex-wrap gap-2">
            {vocabTypes.map((type) => (
              <button
                key={type}
                onClick={() => setVocabFilter(type)}
                className={`vocab-filter-btn ${
                  vocabFilter === type ? "filter-active" : "filter-inactive"
                } px-4 py-1.5 rounded-full border text-xs font-medium`}
              >
                {type === "all" ? "All Words" : type}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filteredVocab.map((word) => (
              <div
                key={word.word}
                className="bg-white rounded-xl border border-mist p-4"
              >
                <p className="text-sm font-semibold text-ink mb-1">
                  {word.word}
                </p>
                <p className="text-xs text-slate mb-2">
                  <strong>Meaning:</strong> {word.meaning}
                </p>
                <p className="text-xs text-slate italic">
                  <strong>Example:</strong> "{word.example}"
                </p>
                <span className="inline-block mt-3 text-xs font-medium text-amber2 bg-amber2-light px-2 py-1 rounded">
                  {word.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: PRO TIPS
          ══════════════════════════════════════════ */}
        <div
          id="pane-tips"
          className={`pane ${activeTab === "tips" ? "active" : ""} space-y-4`}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {TIP_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setTipFilter(filter.id)}
                className={`filter-btn ${
                  tipFilter === filter.id ? "filter-active" : "filter-inactive"
                } px-4 py-1.5 rounded-full border text-xs font-medium`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredTips.map((tip) => (
              <div
                key={tip.title}
                className="tip-card bg-white rounded-xl border border-mist p-4"
              >
                <p
                  className={`text-xs font-semibold ${tip.color} uppercase tracking-widest mb-2`}
                >
                  {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
                </p>
                <p className="text-sm font-semibold text-ink mb-2">
                  {tip.title}
                </p>
                <p className="text-xs text-slate">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
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
