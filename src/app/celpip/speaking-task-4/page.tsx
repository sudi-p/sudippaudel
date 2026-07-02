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
  SCENARIO_TYPES,
  SCENARIO_CHEATSHEET,
  OPENING_EXAMPLES,
  PREDICTION_EXAMPLES,
  CLOSING_TEMPLATES,
  PREDICTION_TOOLKIT,
  SAMPLE_ANSWERS,
  TEMPLATE_PHRASES,
  TIPS,
  TIP_FILTERS,
} from "./data";


function ScenarioResponse({ accent, label, recap, predictions, reasoning }) {
  return (
    <div className="bg-fog rounded-xl p-5 space-y-3">
      <p
        className={`text-xs font-semibold ${accent} uppercase tracking-widest`}
      >
        ★ Perfect 60-second response — {label}
      </p>
      <div className="text-sm text-ink italic leading-relaxed space-y-2">
        <p>
          <span className="not-italic font-semibold text-sapphire">Recap:</span>{" "}
          "{renderTemplate(recap, TEMPLATE_PHRASES)}"
        </p>
        <p>
          <span className="not-italic font-semibold text-emerald2">
            Predictions:
          </span>{" "}
          "{renderTemplate(predictions, TEMPLATE_PHRASES)}"
        </p>
        <p>
          <span className="not-italic font-semibold text-amber2">
            Reasoning:
          </span>{" "}
          "{renderTemplate(reasoning, TEMPLATE_PHRASES)}"
        </p>
      </div>
    </div>
  );
}

export default function CelpipSpeakingTask4Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("all");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 4 Study Guide";
  }, []);

  const task4Words = useMemo(() => VOCAB.filter((v) => v.task === "4"), []);
  const vocabTypes = useMemo(
    () => ["all", ...new Set(task4Words.map((v) => v.type))],
    [task4Words],
  );
  const filteredVocab =
    vocabFilter === "all"
      ? task4Words
      : task4Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      <TaskNav />
      {/* ─── HERO ─── */}
      <Hero
        eyebrow={<>Speaking · Task 4 of 8</>}
        title={<>Make <span className="hero-line italic">predictions</span></>}
        description={<>Everything you need to score 9+ on Task 4 — structure, vocab,
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
              You are given a hypothetical scenario and asked to predict what
              will happen next or how someone will respond. The question might
              be:{" "}
              <em>
                "What do you think will happen if this situation continues?"
              </em>{" "}
              or <em>"Predict how this industry will change in 5 years."</em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is assessing your ability to think logically, use
              conditional language, support predictions with reasoning, and
              speak with confidence and fluency.
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
              Why scenario type matters
            </p>
            <p className="text-sm leading-relaxed text-ink">
              Every Task 4 image fits into one of five broad{" "}
              <strong>mood/setting categories</strong>. Recognising the category
              in your 30-second prep time lets you instantly pull the right
              vocabulary, the right emotional tone for your opening sentence, and
              a ready-made closing that sounds natural — not rehearsed.
            </p>
          </div>

          {SCENARIO_TYPES.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl border border-mist overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-mist flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full ${s.badge} text-white text-sm font-bold flex items-center justify-center shrink-0`}
                >
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{s.title}</p>
                  <p className="text-xs text-slate">{s.examples}</p>
                </div>
              </div>
              <div className="px-6 py-5 space-y-5">
                {/* Vocab */}
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                    Key vocabulary
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {s.vocab.map((v) => (
                      <div key={v.word} className="bg-fog rounded-xl p-4">
                        <p className="text-sm font-semibold text-ink mb-1">
                          {v.word}
                        </p>
                        <p className="text-xs text-slate mb-1">
                          <strong>Meaning:</strong> {v.meaning}
                        </p>
                        <p className="text-xs text-slate italic">
                          <strong>Example:</strong> "{v.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opening & Closing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-sapphire-light rounded-xl p-4">
                    <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">
                      ✦ Opening (first paragraph)
                    </p>
                    <p className="text-xs text-sapphire-dark leading-relaxed">
                      {s.opening.hint}
                    </p>
                    <p className="text-xs text-sapphire-dark italic mt-2">
                      "{s.opening.example}"
                    </p>
                  </div>
                  <div className="bg-amber2-light rounded-xl p-4">
                    <p className="text-xs font-semibold text-amber2-dark uppercase tracking-wider mb-2">
                      ✦ Closing (last paragraph)
                    </p>
                    <p className="text-xs text-amber2-dark leading-relaxed">
                      {s.closing.hint}
                    </p>
                    <p className="text-xs text-amber2-dark italic mt-2">
                      "{s.closing.example}"
                    </p>
                  </div>
                </div>

                {/* Perfect response */}
                <ScenarioResponse
                  accent={s.accent}
                  label={s.responseLabel}
                  recap={s.recap}
                  predictions={s.predictions}
                  reasoning={s.reasoning}
                />
              </div>
            </div>
          ))}

          {/* Quick-reference cheat sheet */}
          <div className="bg-ink rounded-2xl p-6 text-fog">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Quick-reference: match the scene → pick your category
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {SCENARIO_CHEATSHEET.map((r) => (
                <div key={r.cat} className="bg-white/5 rounded-xl p-3">
                  <p className={`font-semibold mb-1 ${r.color}`}>{r.cat}</p>
                  <p className="text-fog/70">{r.cues}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div
          id="pane-template"
          className={`pane ${activeTab === "overview" ? "active" : ""} space-y-4 mt-5`}
        >
          <p className="text-sm text-slate">
            <strong>Key insight:</strong> Task 4 builds on Task 3. You describe
            what's happening NOW, then predict what will happen in the next 2–5
            minutes. Use "the" instead of "a" since you've already introduced
            people/objects.
          </p>

          {/* Part 1: Brief Recap */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Brief Recap (Current State)
                  </span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Quickly summarize what's currently happening in the image. This
              transitions from Task 3 into predictions.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Use "The" not "A".</strong> You've already introduced
                these people/objects in Task 3. "The children are playing" not "A
                group of children..."
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Present continuous.</strong> "The sun is setting," "People
                are relaxing," "They are enjoying..."
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Keep it to 1 sentence.</strong> Then move directly to
                predictions.
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                My template (used in every sample below)
              </p>
              <div className="space-y-2 text-sm text-ink">
                {OPENING_EXAMPLES.map((ex, i) => (
                  <p key={i} className="italic">
                    "{ex}"
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Part 2: Predictions */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Predictions (What Will Happen Next)
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~35 seconds · the core of your response
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>The heart of your response.</strong> Make 2–3 logical
              predictions about what will happen in the next few minutes. Vary
              your future forms and use reasoning.
            </p>
            <div className="bg-sapphire-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-sapphire-dark mb-2">
                Critical grammar patterns:
              </p>
              <ul className="space-y-1 text-xs text-sapphire-dark">
                <li>
                  • <strong>Future Simple:</strong> "The children will leave the
                  park when it gets dark."
                </li>
                <li>
                  • <strong>Future Continuous:</strong> "The vendors will be
                  cleaning up their stalls later."
                </li>
                <li>
                  • <strong>Going to (plans):</strong> "People are going to start
                  heading home soon."
                </li>
                <li>
                  • <strong>Might/Could (possibilities):</strong> "The weather
                  might change, so visitors might pack up."
                </li>
                <li>
                  •{" "}
                  <strong>
                    "In the next few minutes," "Soon," "After that," "Meanwhile"
                  </strong>{" "}
                  — use time phrases!
                </li>
              </ul>
            </div>
            <div className="bg-fog rounded-xl p-4 space-y-4">
              {PREDICTION_EXAMPLES.map((ex) => (
                <div key={ex.title}>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    {ex.title}
                  </p>
                  <p className="text-sm text-ink italic leading-relaxed">
                    "{ex.text}"
                  </p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Part 3: Conclusion & Reasoning */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Conclusion & Reasoning
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Wrap up by restating or deepening your reasoning. Show why these
              predictions are logical.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Reference a real-world factor.</strong> Time of day,
                weather, human nature, or seasonal patterns. "Because it's
                evening, people will naturally start heading home."
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Use conditional recap.</strong> "Overall, the scene will
                likely look very different in an hour because..."{" "}
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Finish with confidence.</strong> "That's why I
                predict..." or "In conclusion, it's clear that..." — not
                wishy-washy language.
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                My template (used in every sample below)
              </p>
              <div className="space-y-2 text-sm text-ink italic">
                {CLOSING_TEMPLATES.map((t, i) => (
                  <p key={i}>"{t}"</p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Bonus: Prediction Language Toolkit */}
          <Accordion
            wrapClassName="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden"
            triggerHover="hover:bg-violet2/5"
            bodyBorder="border-violet2/30"
            bodyClassName="space-y-3"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Prediction Language & Transition Phrases
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
              {PREDICTION_TOOLKIT.map((col) => (
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
          {/* Sample Answers */}
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
                    full 60-second responses · Recap → Predictions → Reasoning
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each sample combines the three parts above into a complete answer.
              Task 4 builds on a Task 3 image, so an{" "}
              <strong>image prompt</strong> is included so you can generate the
              scene, describe the current state, and then predict what happens
              next. The{" "}
              <mark className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink">
                highlighted
              </mark>{" "}
              words are the reusable template — keep them and swap in your own
              details.
            </p>

            {SAMPLE_ANSWERS.map((sample) => (
              <div
                key={sample.scenario}
                className="bg-fog rounded-xl p-5 space-y-4"
              >
                <p
                  className={`text-xs font-semibold ${sample.accent} uppercase tracking-widest`}
                >
                  {sample.scenario}
                </p>
                <div className="bg-white rounded-lg border border-mist p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    🖼️ Image generation prompt
                  </p>
                  <p className="text-sm text-ink italic leading-relaxed">
                    "{sample.imagePrompt}"
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Recap:
                      </span>{" "}
                      "{renderTemplate(sample.recap, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Predictions:
                      </span>{" "}
                      "{renderTemplate(sample.predictions, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Reasoning:
                      </span>{" "}
                      "{renderTemplate(sample.reasoning, TEMPLATE_PHRASES)}"
                    </p>
                  </div>
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
          CELPIP Prep — Speaking Task 4 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Master the art of logical prediction. Practice with real scenarios,
          support your thinking with reasoning, and let your confidence shine
          through.
        </p>
      </footer>
    </>
  );
}
