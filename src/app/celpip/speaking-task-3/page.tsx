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
import { TimedLine } from "../components/TimedLine";
import {
  TABS,
  SCORE_CRITERIA,
  BLUEPRINT,
  BODY_METHOD,
  SCORE_BANDS,
  SCENARIOS,
  TEMPLATE_PARTS,
  SPATIAL_TOOLKIT,
  SAMPLES,
  MOOD_CHALLENGE,
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
    <div className="space-y-2">
      <TimedLine
        spend="~10s"
        clock="0:00–0:10"
        label="Setting"
        labelClass="text-sapphire"
      >
        {show(setting)}
      </TimedLine>
      <TimedLine
        spend="~35s"
        clock="0:10–0:45"
        label="Details"
        labelClass="text-emerald2"
      >
        {show(details)}
      </TimedLine>
      <TimedLine
        spend="~15s"
        clock="0:45–1:00"
        label="Impression"
        labelClass="text-amber2"
      >
        {show(impression)}
      </TimedLine>
    </div>
  );
};

// Atmosphere & Mood self-test. The front shows the image (or its prompt when no
// image exists yet); clicking flips the card in 3D to reveal the answer chips.
const FlipCard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className="relative w-full cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full h-80 sm:h-96 transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — the picture (or prompt) to interpret */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden border border-mist bg-fog"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {item.imageLink ? (
            <img
              src={item.imageLink}
              alt={item.scenario}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full p-4 flex flex-col">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                🖼️ Image prompt
              </p>
              <p className="text-sm text-ink italic leading-relaxed overflow-auto">
                "{item.imagePrompt}"
              </p>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 bg-ink/70 text-white text-xs font-medium py-2 px-3 flex items-center justify-between gap-2">
            <span className="opacity-80 shrink-0">Tap to reveal ↺</span>
          </div>
        </div>

        {/* BACK — the atmosphere & mood answer */}
        <div
          className="absolute inset-0 rounded-xl border border-mist bg-white p-4 flex flex-col justify-center gap-3"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-widest ${item.scenarioColor}`}
          >
            {item.scenarioType}
          </p>
          <div>
            <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
              Atmosphere
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.atmosphere.map((w) => (
                <span
                  key={w}
                  className="text-xs bg-sapphire-light text-sapphire-dark rounded-full px-2.5 py-1"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
              Mood
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.mood.map((w) => (
                <span
                  key={w}
                  className="text-xs bg-amber2-light text-amber2-dark rounded-full px-2.5 py-1"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
          <span className="text-xs text-slate/70 mt-1">Tap to flip back ↺</span>
        </div>
      </div>
    </div>
  );
};

export default function CelpipSpeakingTask3Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("all");
  const [tipFilter, setTipFilter] = useState("all");

  // Mood Challenge — one card at a time, navigated with prev/next.
  const challengeTotal = MOOD_CHALLENGE.length;
  const [challengeOrder, setChallengeOrder] = useState(() =>
    MOOD_CHALLENGE.map((_, i) => i),
  );
  const [challengePos, setChallengePos] = useState(0);

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 3 Study Guide";
  }, []);

  // Reshuffle the deck on every page load. Done client-side (not in the
  // useState initializer) so the server and first client render agree —
  // otherwise React would flag a hydration mismatch.
  useEffect(() => {
    const order = MOOD_CHALLENGE.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    setChallengeOrder(order);
    setChallengePos(0);
  }, []);

  const goPrevChallenge = () =>
    setChallengePos((p) => (p - 1 + challengeTotal) % challengeTotal);
  const goNextChallenge = () =>
    setChallengePos((p) => (p + 1) % challengeTotal);
  const currentChallenge = MOOD_CHALLENGE[challengeOrder[challengePos]];

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
        title={
          <>
            Describe a <span className="hero-line italic">scene</span>
          </>
        }
        description={
          <>
            Everything you need to score 9+ on Task 3 — structure, vocab,
            scoring rubric, practice scenarios, and delivery tips.
          </>
        }
        stats={[
          {
            label: "Speaking time",
            value: (
              <>
                60<span className="text-lg">s</span>
              </>
            ),
          },
          {
            label: "Prep time",
            value: (
              <>
                30<span className="text-lg">s</span>
              </>
            ),
          },
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

          {/* The detail trap — the #1 reason test-takers never reach the conclusion */}
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-rose2-dark uppercase tracking-widest mb-3">
              ⚠ The #1 trap — too much detail, no conclusion
            </p>
            <p className="text-base leading-relaxed text-ink">
              {BODY_METHOD.problem}
            </p>
            <div className="bg-fog rounded-xl p-4 mt-4">
              <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-3">
                {BODY_METHOD.fixLabel}
              </p>
              <ol className="space-y-3">
                {BODY_METHOD.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink">
                      <strong>{step.title}.</strong> {step.desc}
                    </span>
                  </li>
                ))}
              </ol>
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

              <p className="text-xs text-slate italic -mb-1">
                Worked from this image: {sc.example.imageDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className={`${sc.openingBox} rounded-xl p-4`}>
                  <p
                    className={`text-xs font-semibold ${sc.openingLabel} uppercase tracking-wider mb-3`}
                  >
                    ✦ Opening (Setting — 10 s)
                  </p>
                  <ul className="space-y-2 text-sm text-ink mb-3">
                    {sc.opening.questions.map(([q, a]) => (
                      <li key={q} className="flex gap-2">
                        <span className={`${sc.openingLabel} shrink-0`}>✦</span>
                        <span>
                          <strong>{q}</strong>{" "}
                          <span className="italic">{a}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">
                      Combined into one line
                    </p>
                    <p className="text-sm text-ink italic leading-relaxed">
                      {sc.opening.combined}
                    </p>
                  </div>
                  <p className="text-xs text-slate mt-2">
                    Tip: {sc.opening.tip}
                  </p>
                </div>
                <div className="bg-amber2-light rounded-xl p-4">
                  <p className="text-xs font-semibold text-amber2-dark uppercase tracking-wider mb-3">
                    ✦ Closing (Impression — 15 s)
                  </p>
                  <ul className="space-y-2 text-sm text-ink mb-3">
                    {sc.closing.questions.map(([q, a]) => (
                      <li key={q} className="flex gap-2">
                        <span className="text-amber2-dark shrink-0">✦</span>
                        <span>
                          <strong>{q}</strong>{" "}
                          <span className="italic">{a}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">
                      Combined into one line
                    </p>
                    <p className="text-sm text-ink italic leading-relaxed">
                      {sc.closing.combined}
                    </p>
                  </div>
                  <p className="text-xs text-slate mt-2">
                    Tip: {sc.closing.tip}
                  </p>
                </div>
              </div>

              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">
                  ★ Perfect Response Example
                </p>

                {/* The scene + what it reflects */}
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1">
                    The image
                  </p>
                  <p className="text-sm text-ink italic">
                    {sc.example.imageDesc}
                  </p>
                  <p className="text-sm text-ink mt-2 leading-relaxed">
                    <strong>What it reflects:</strong>{" "}
                    {sc.example.sceneReflects}
                  </p>
                </div>

                {/* Prep — what to describe vs. ignore on purpose */}
                <div className="bg-white rounded-lg border border-mist p-4">
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-1">
                    Preparing the body (in your 30-second prep)
                  </p>
                  <p className="text-[11px] text-slate mb-3">
                    Decide what earns a mention and what to skip — you can't
                    cover it all in 60 seconds.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] font-semibold text-emerald2-dark uppercase tracking-wider mb-1.5">
                        ✓ What I'll describe
                      </p>
                      <ul className="space-y-1 text-xs text-ink">
                        {sc.example.seeing.map((s) => (
                          <li key={s} className="flex gap-1.5">
                            <span className="text-emerald2 shrink-0">+</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-rose2-dark uppercase tracking-wider mb-1.5">
                        ✕ What I'll ignore (on purpose)
                      </p>
                      <ul className="space-y-1 text-xs text-slate">
                        {sc.example.ignoring.map((s) => (
                          <li key={s} className="flex gap-1.5">
                            <span className="text-rose2 shrink-0">−</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Body build — every sentence explained by the framework */}
                <div className="bg-white rounded-lg border border-mist p-4">
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-1">
                    Building the body — every line explained
                  </p>
                  <p className="text-[11px] text-slate mb-3">
                    Each sentence maps to a zone in the "pan, don't zoom"
                    framework — never zooming into one spot.
                  </p>
                  <div className="space-y-3">
                    {sc.example.bodyBreakdown.map((row, i) => (
                      <div
                        key={i}
                        className="border-l-2 border-sapphire/40 pl-3"
                      >
                        <span className="inline-block text-[10px] font-semibold text-sapphire-dark bg-sapphire-light rounded px-1.5 py-0.5 mb-1 uppercase tracking-wider">
                          {row.zone}
                        </span>
                        <p className="text-sm text-ink italic leading-relaxed">
                          {row.sentence}
                        </p>
                        <p className="text-xs text-slate mt-1 leading-relaxed">
                          <strong className="text-sapphire-dark not-italic">
                            Why:
                          </strong>{" "}
                          {row.why}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The full answer, combined */}
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                    ▶ The full 60-second answer
                  </p>
                  <Triad
                    setting={sc.example.setting}
                    details={sc.example.details}
                    impression={sc.example.impression}
                  />
                </div>
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
                {sample.imageLink && (
                  <img
                    src={sample.imageLink}
                    alt={sample.scenario}
                    loading="lazy"
                    className="w-full rounded-lg border border-mist object-cover"
                  />
                )}
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
               PANE: MOOD CHALLENGE
          ══════════════════════════════════════════ */}
        <div
          id="pane-challenge"
          className={`pane ${activeTab === "challenge" ? "active" : ""} space-y-6`}
        >
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              Test your eye for atmosphere & mood
            </p>
            <p className="text-sm leading-relaxed text-ink">
              Study each picture and jot down the <strong>atmosphere</strong>{" "}
              (the overall feel of the setting) and the <strong>mood</strong>{" "}
              (the emotion it evokes) you would use to describe it. When you're
              ready, <strong>tap the card</strong> to flip it and reveal strong
              vocabulary choices. Your answers aren't graded — this is just to
              train instant recognition during your 30-second prep.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate uppercase tracking-wider">
                Card {challengePos + 1} of {challengeTotal}
              </span>
              <span className="text-xs text-slate/70">
                Shuffled each refresh
              </span>
            </div>

            {/* key forces a fresh card (flip reset + cleared inputs) on navigation */}
            <div
              key={challengeOrder[challengePos]}
              className="bg-fog rounded-xl p-5 space-y-3"
            >
              <FlipCard item={currentChallenge} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-1.5">
                    Atmosphere
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. tranquil, bustling…"
                    className="w-full text-sm rounded-lg border border-mist bg-white px-3 py-2 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-sapphire/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber2-dark uppercase tracking-wider mb-1.5">
                    Mood
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. serene, energetic…"
                    className="w-full text-sm rounded-lg border border-mist bg-white px-3 py-2 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-amber2/40"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mt-4">
              <button
                type="button"
                onClick={goPrevChallenge}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink bg-white border border-mist rounded-lg px-4 py-2 hover:bg-fog transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                ← Previous
              </button>
              <div className="flex items-center gap-1.5">
                {MOOD_CHALLENGE.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === challengePos ? "w-5 bg-gold" : "w-1.5 bg-mist"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNextChallenge}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink bg-white border border-mist rounded-lg px-4 py-2 hover:bg-fog transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: VOCAB BANK
          ══════════════════════════════════════════ */}
        <VocabPane
          words={filteredVocab}
          types={vocabTypes}
          filter={vocabFilter}
          onFilter={setVocabFilter}
          active={activeTab}
          variant="labeled"
        />

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
