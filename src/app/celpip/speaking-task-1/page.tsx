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
  TIPS,
  TIP_FILTERS,
  SCORE_CRITERIA,
  BLUEPRINT,
  SCORE_BANDS,
  ADVICE_TOOLKIT,
  SAMPLES,
  TEMPLATE_PHRASES,
} from "./data";

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
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      <TaskNav />
      {/* ─── HERO ─── */}
      <Hero
        eyebrow={<>Speaking · Task 1 of 8</>}
        title={<>Give <span className="hero-line italic">advice</span></>}
        description={<>Respond to a situation by providing thoughtful advice. Show empathy,
            clear reasoning, and practical suggestions.</>}
        stats={[
          { label: "Speaking time", value: <>90<span className="text-lg">s</span></> },
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

<ScoreCriteria items={SCORE_CRITERIA} />

<Blueprint title="The 90-second blueprint" steps={BLUEPRINT} />

        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div
          id="pane-template"
          className={`pane ${activeTab === "overview" ? "active" : ""} space-y-4 mt-5`}
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
                My template (used in every sample below)
              </p>
              <p className="text-sm text-ink italic">
                "Hi [Name],{" "}
                <span className="font-semibold not-italic text-violet2">
                  I understand
                </span>{" "}
                [the problem],{" "}
                <span className="font-semibold not-italic text-violet2">
                  and that must
                </span>{" "}
                [be/feel + emotion].{" "}
                <span className="font-semibold not-italic text-violet2">
                  I went through something similar a few years ago, so I'd like
                  to share a few suggestions.
                </span>
                "
              </p>
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
            <div className="bg-fog rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                My template (used in every sample below)
              </p>
              <p className="text-sm text-ink italic">
                <span className="font-semibold not-italic text-violet2">
                  First, if I were you, I would
                </span>{" "}
                [advice], because [reason].
              </p>
              <p className="text-sm text-ink italic">
                <span className="font-semibold not-italic text-violet2">
                  Second, you might want to
                </span>{" "}
                [advice], so [reason].
              </p>
              <p className="text-sm text-ink italic">
                <span className="font-semibold not-italic text-violet2">
                  Third, I'd recommend
                </span>{" "}
                [advice], which will [benefit].
              </p>
            </div>
            <p className="text-xs text-slate italic">
              See the <strong>Sample Responses</strong> section below for five
              full worked examples using this exact template.
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
                My template (used in every sample below)
              </p>
              <p className="text-sm text-ink italic">
                "
                <span className="font-semibold not-italic text-violet2">
                  These steps will
                </span>{" "}
                [benefit/result],{" "}
                <span className="font-semibold not-italic text-violet2">
                  and I'm confident you can do this
                </span>
                ."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Briefly recap</strong> 1–2 main pieces of advice (not
                all three)
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

        </div>

        <div
          id="pane-samples"
          className={`pane ${activeTab === "structure" ? "active" : ""} space-y-4`}
        >
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

        <div
          id="pane-template-2"
          className={`pane ${activeTab === "overview" ? "active" : ""} space-y-4 mt-5`}
        >
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
