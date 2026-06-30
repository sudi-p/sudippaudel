// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import { renderTemplate } from "../templateHighlight";
import {
  TABS,
  TIPS,
  TIP_FILTERS,
  SCORE_CRITERIA,
  BLUEPRINT,
  SCORE_BANDS,
  ADVICE_TOOLKIT,
  SAMPLES,
  TEMPLATE_PHRASES,
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
        className={`accordion-body border-t ${bodyBorder} px-6 py-5 space-y-4 ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function CelpipSpeakingTask1Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("all");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 1 Study Guide";
  }, []);

  const task1Words = useMemo(() => VOCAB.filter((v) => v.task === "1"), []);
  const vocabTypes = useMemo(
    () => ["all", ...new Set(task1Words.map((v) => v.type))],
    [task1Words],
  );
  const filteredVocab =
    vocabFilter === "all"
      ? task1Words
      : task1Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all"
      ? TIPS
      : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 1 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Give <span className="hero-line italic">advice</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Respond to a situation by providing thoughtful advice. Show empathy,
            clear reasoning, and practical suggestions.
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
              90<span className="text-lg">s</span>
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
              You will be given a situation where someone needs advice. You have{" "}
              <strong>30 seconds to prepare</strong> and{" "}
              <strong>90 seconds to speak</strong>. Provide thoughtful,
              practical advice that addresses the person's concern.
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to listen carefully to a
              problem, offer coherent suggestions, support your advice with
              reasoning, and communicate empathy and understanding.
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
              The 90-second blueprint
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

          {/* ─── Scoring (moved into Overview) ─── */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-1">
              How examiners score Task 1
            </p>
            <p className="text-sm text-slate mb-4">
              Empathy, clarity, and practical advice are most important.
            </p>

            <div className="space-y-3">
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
              <p className="text-sm text-ink">
                A high-scoring advice response shows{" "}
                <strong>
                  genuine empathy, clear structure, and practical suggestions
                  with reasoning
                </strong>
                . You don't need to be perfect — you need to sound helpful and
                thoughtful. Examiners want to hear someone who understands the
                problem and cares about helping.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div
          id="pane-structure"
          className={`pane ${activeTab === "structure" ? "active" : ""} space-y-4`}
        >
          <p className="text-sm text-slate">
            <strong>Key to high scores:</strong> Empathy + Specific Advice +
            Reason + Consequence. Use modals (should, could, ought to) and
            conditionals (If I were you...) for grammatical variety.
          </p>

          {/* Part 1 */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Acknowledge & Show Empathy
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Show genuine understanding of their problem. Examiners listen for
              empathy first — it sets the tone for your advice.
            </p>
            <div className="bg-fog rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                Opening templates
              </p>
              <ul className="space-y-1.5 text-sm text-ink">
                <li className="italic">
                  "I understand that [problem]. That must be [emotion/impact].
                  If I were you, I would..."
                </li>
                <li className="italic">
                  "I know you're going through a difficult time with [issue]. I
                  can see why [reason matters]. Here's what I'd suggest..."
                </li>
                <li className="italic">
                  "That sounds really challenging, and I can understand your
                  concern. In my experience, [related insight] helps. So I'd
                  suggest..."
                </li>
              </ul>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Restate the problem</strong> briefly to show listening
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Name the emotion</strong> they're likely feeling
                (stressed, uncertain, worried, excited)
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Validate their concern</strong> — "That's a real
                challenge" or "I see why that matters"
              </li>
            </ul>
          </Accordion>

          {/* Part 2 */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Give 3 Pieces of Advice (Reason + Consequence)
                  </span>
                  <span className="text-xs text-slate ml-2">~60 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>The heart of your response.</strong> Give 3 specific
              pieces of advice. For each: State it → Explain why → Show the
              benefit/consequence.
            </p>
            <div className="bg-sapphire-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-sapphire-dark mb-2">
                Grammar for variety (mix these):
              </p>
              <ul className="space-y-1 text-xs text-sapphire-dark">
                <li>
                  • "If I were you, I would..." (Conditional — most empathetic)
                </li>
                <li>
                  • "You should / could / ought to..." (Modal for strong
                  suggestions)
                </li>
                <li>• "Another thing you might do is..." (Possibility)</li>
                <li>• "I'd strongly recommend..." (Personal opinion)</li>
                <li>
                  • "Try [action] because [reason]..." (Direct practical advice)
                </li>
              </ul>
            </div>
            <p className="text-xs text-slate italic">
              See the <strong>Sample Responses</strong> section below for five
              full worked examples using this structure.
            </p>
          </Accordion>

          {/* Part 3 */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Conclude with Encouragement
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              End strong. Summarize briefly and express genuine confidence in
              their ability to handle this. Positivity matters.
            </p>
            <div className="bg-fog rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Conclusion templates
              </p>
              <ul className="space-y-1.5 text-sm text-ink italic">
                <li>
                  "To summarize, I think [main advice] are your best options.
                  You'll definitely feel [positive result]. I'm confident you
                  can do this."
                </li>
                <li>
                  "Those are my suggestions. I know it seems like a lot, but you
                  have the ability to handle this. You've got this!"
                </li>
                <li>
                  "I really believe that if you try these approaches, you'll see
                  improvements. You're capable of handling this change."
                </li>
              </ul>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Briefly recap</strong> 1–2 main pieces of advice (not all
                three)
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Show belief in them</strong> — "I'm confident," "You can
                handle this," "You're capable"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>End on encouragement,</strong> not doubt — avoid "maybe
                you'll try" or "if you're lucky"
              </li>
            </ul>
          </Accordion>

          {/* Bonus: Advice Language Toolkit */}
          <Accordion
            wrapClassName="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden"
            triggerHover="hover:bg-violet2/5"
            bodyBorder="border-violet2/30"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Advice Language & Transition Toolkit
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
              {ADVICE_TOOLKIT.map((col) => (
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

          {/* Sample Responses */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-rose2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  ★
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Sample Responses
                  </span>
                  <span className="text-xs text-slate ml-2">
                    5 worked examples
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each response follows the same blueprint:{" "}
              <strong>
                acknowledge → three pieces of advice with reasons → encouraging
                conclusion.
              </strong>{" "}
              Notice how each idea is its own beat, not one long sentence. The{" "}
              <mark className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink">
                highlighted
              </mark>{" "}
              words are the reusable template — keep them and swap in your own
              details.
            </p>

            {SAMPLES.map((sample) => (
              <div
                key={sample.scenario}
                className="bg-fog rounded-xl p-4 space-y-2"
              >
                <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                  {sample.scenario}
                </p>
                {sample.lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm text-ink italic leading-relaxed"
                  >
                    {renderTemplate(line, TEMPLATE_PHRASES)}
                  </p>
                ))}
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
                <span className="inline-block mt-3 text-xs font-medium text-sapphire bg-sapphire-light px-2 py-1 rounded">
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
          CELPIP Prep — Speaking Task 1 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Great advice combines empathy, clear thinking, and practical
          suggestions. Show you understand the person's situation, offer
          concrete solutions with reasoning, and end with encouragement. That is
          what examiners want to hear.
        </p>
      </footer>
    </>
  );
}
