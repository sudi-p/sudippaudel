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
  QUESTION_TYPES,
  CATEGORY_SUMMARY,
  COMPLETE_EXAMPLES,
  TIPS,
  TIP_FILTERS,
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
  wrapStyle,
  triggerHover = "hover:bg-fog/50",
  bodyClassName = "space-y-4",
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={wrapClassName} style={wrapStyle}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left ${triggerHover} transition-colors`}
      >
        {header}
        <Chevron open={open} />
      </button>
      <div
        className={`accordion-body border-t border-mist px-6 py-5 ${bodyClassName} ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function CelpipSpeakingTask2Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("all");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 2 Study Guide";
  }, []);

  const task2Words = useMemo(() => VOCAB.filter((v) => v.task === "2"), []);
  const vocabTypes = useMemo(
    () => ["all", ...new Set(task2Words.map((v) => v.type))],
    [task2Words],
  );
  const filteredVocab =
    vocabFilter === "all"
      ? task2Words
      : task2Words.filter((v) => v.type === vocabFilter);

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
            Speaking · Task 2 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Tell a <span className="hero-line italic">personal</span> story
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Everything you need to score 9+ on Task 2 — structure, vocab,
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
              90<span className="text-lg">s</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Prep time
            </div>
            <div className="font-display text-3xl text-ink">
              90<span className="text-lg">s</span>
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
              You will be asked to describe a personal experience or memorable
              event. You have <strong>90 seconds to prepare</strong> and{" "}
              <strong>90 seconds to speak</strong>. There is no writing — only
              speaking about something from your own life.
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to organize a narrative, use
              varied vocabulary and grammar naturally, include vivid sensory
              details, and deliver smoothly without sounding memorized.
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

          {/* Scoring bands */}
          <p className="text-sm text-slate pt-2">
            How examiners score Task 2 on a 12-point scale. The bands below show
            typical language for each score tier.
          </p>

          <div className="space-y-3">
            {SCORE_BANDS.map((band) => (
              <div
                key={band.title}
                className="bg-white rounded-2xl border border-mist p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">{band.title}</p>
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
              A 9–10 speaker tells a coherent story with natural pacing and good
              vocabulary. They are <strong>not</strong> perfect; they may use
              simple sentences alongside complex ones, and that's fine. What
              matters: do the story and grammar feel intentional, or accidental?
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: QUESTION TYPES
          ══════════════════════════════════════════ */}
        <div
          id="pane-qtypes"
          className={`pane ${activeTab === "qtypes" ? "active" : ""} space-y-4`}
        >
          <p className="text-sm text-slate">
            All Task 2 prompts fall into 6 question categories. Each demands a
            slightly different angle, emotional register, and vocabulary set.
            Master all six and no prompt will catch you off guard.
          </p>

          {QUESTION_TYPES.map((qt) => (
            <Accordion
              key={qt.n}
              bodyClassName="space-y-5"
              header={
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full ${qt.badge} text-white text-xs font-semibold flex items-center justify-center shrink-0`}
                  >
                    {qt.n}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-ink">
                      {qt.title}
                    </span>
                    <span className={`ml-2 text-xs ${qt.accent} font-medium`}>
                      {qt.hint}
                    </span>
                  </div>
                </div>
              }
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  {qt.prompts.map((p, i) => (
                    <p key={i}>"{p}"</p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {qt.vocab.map((v) => (
                    <div key={v.word} className="bg-fog rounded-lg p-3">
                      <p className="text-sm font-semibold text-ink">{v.word}</p>
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
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Perfect Response Example
                </p>
                <div className="bg-ink rounded-xl p-5 text-fog space-y-3">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest">
                    Score 10 Model Response
                  </p>
                  <p className="text-sm leading-relaxed italic">"{qt.model}"</p>
                </div>
              </div>
            </Accordion>
          ))}

          {/* Summary card */}
          <div className="bg-fog rounded-2xl p-5 mt-2">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              Quick Reference — All 6 Categories
            </p>
            <div className="grid md:grid-cols-3 gap-2">
              {CATEGORY_SUMMARY.map((c) => (
                <div
                  key={c.num}
                  className="bg-white rounded-lg px-3 py-2 flex items-center gap-2"
                >
                  <span className={`text-sm font-bold ${c.color}`}>
                    {c.num}.
                  </span>
                  <span className="text-xs text-ink font-medium">
                    {c.label}
                  </span>
                </div>
              ))}
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
            A 3-part structure to internalize — not a word-for-word script.
          </p>

          {/* Part 1: Opening */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Opening
                  </span>
                  <span className="text-xs text-slate ml-2">~20 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Anchor the listener immediately — who, where, when, and why it
              matters to you.
            </p>
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Name the event.</strong> Be specific. "A camping trip"
                  is vague. "A solo camping trip in Banff" is vivid.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Say roughly when.</strong> "A few years ago," "during
                  university," "last summer" — doesn't need to be exact.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Give a quick reason it stuck with you.</strong> One
                  sentence that hooks the listener.
                </li>
              </ul>
              <div className="bg-fog rounded-xl p-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  My template (the recurring story arc)
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "<span className="font-semibold not-italic text-violet2">[A few years ago / Last year]</span>,
                  I decided to [event]. I'd never [done this] before,{" "}
                  <span className="font-semibold not-italic text-violet2">and honestly, I was</span>{" "}
                  [emotion]."
                </p>
              </div>
          </Accordion>

          {/* Part 2: Body */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">Body</span>
                  <span className="text-xs text-slate ml-2">
                    ~50 seconds · the heart of your story
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Make the listener feel like they were there. This is where your
              score is won or lost.
            </p>
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Zoom into one key moment,</strong> not the whole
                  timeline. One well-told scene beats five vaguely mentioned
                  ones.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Include a sensory detail.</strong> What did you see,
                  hear, smell, or feel? This is the single strongest fluency
                  signal.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Show an emotional shift.</strong> How you felt before
                  vs. after (nervous → calm, doubtful → proud) creates narrative
                  arc and shows grammar naturally.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Say what was unique or challenging.</strong> One
                  sentence on what made this moment stand out.
                </li>
              </ul>
              <div className="bg-fog rounded-xl p-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  My template (the recurring story arc)
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "[Set the scene]. <span className="font-semibold not-italic text-violet2">I remember</span>{" "}
                  [one strong sensory detail].{" "}
                  <span className="font-semibold not-italic text-violet2">But then</span>{" "}
                  [the turning point], and{" "}
                  <span className="font-semibold not-italic text-violet2">that was the moment everything shifted</span>,
                  because [realization]."
                </p>
              </div>
          </Accordion>

          {/* Part 3: Closing */}
          <Accordion
            wrapStyle={{ marginBottom: "2rem" }}
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Closing
                  </span>
                  <span className="text-xs text-slate ml-2">~20 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Land the story cleanly with a personal takeaway. Don't trail off —
              finish strong.
            </p>
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Reflect on what you learned.</strong> How did the
                  experience change or teach you? One genuine sentence is
                  enough.
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>
                  <strong>Optional: say whether you'd repeat it.</strong> A
                  simple "I'd do it again in a heartbeat" or "I wouldn't change
                  it" closes naturally.
                </li>
              </ul>
              <div className="bg-fog rounded-xl p-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  My template (the recurring story arc)
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "That <span className="font-semibold not-italic text-violet2">[trip/day/night]
                  taught me</span> [lesson],{" "}
                  <span className="font-semibold not-italic text-violet2">and I wouldn't trade that experience for anything</span>."
                </p>
              </div>
          </Accordion>

          {/* Complete Scenario Examples */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Complete Personal Experience Examples
                </span>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each example follows the same arc: opening → body → closing. The{" "}
              <mark className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink">
                highlighted
              </mark>{" "}
              words are the reusable template — keep them and swap in your own
              story.
            </p>
            {COMPLETE_EXAMPLES.map((ex) => (
              <div key={ex.title} className={`border-l-3 ${ex.border} pl-4`}>
                <p className="text-sm font-semibold text-ink mb-3">{ex.title}</p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Opening:</strong> "
                  {renderTemplate(ex.opening, TEMPLATE_PHRASES)}"
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Body:</strong> "
                  {renderTemplate(ex.body, TEMPLATE_PHRASES)}"
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "
                  {renderTemplate(ex.closing, TEMPLATE_PHRASES)}"
                </p>
              </div>
            ))}
          </Accordion>

          {/* Storytelling & Personal Experience Language Toolkit */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Storytelling & Personal Experience Language Toolkit
                </span>
              </div>
            }
          >
              <div>
                <p className="text-sm font-semibold text-ink mb-3 text-sapphire">
                  Past Tense Structures (Essential Grammar for Narrative)
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Simple Past (main action)
                    </p>
                    <p className="text-sm text-ink italic">
                      "I went on a road trip..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "The moment I saw it, I knew..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Past Continuous (background action)
                    </p>
                    <p className="text-sm text-ink italic">
                      "I was walking through the market when..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "My hands were shaking as I..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Past Perfect (earlier action)
                    </p>
                    <p className="text-sm text-ink italic">
                      "I had been nervous before, but..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "I'd never traveled alone until that moment..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Used to / Would (past habits)
                    </p>
                    <p className="text-sm text-ink italic">
                      "I used to be afraid of heights..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "Every summer we would visit..."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink mb-3 text-emerald2">
                  Emotional Expression Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Fear / Anxiety
                    </p>
                    <p className="text-sm text-ink italic">
                      "I was terrified... petrified... my heart was racing..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Excitement / Joy
                    </p>
                    <p className="text-sm text-ink italic">
                      "I was thrilled... my hands trembled with excitement... I
                      felt alive..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Sadness / Disappointment
                    </p>
                    <p className="text-sm text-ink italic">
                      "I felt devastated... crushed... my heart sank..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Pride / Confidence
                    </p>
                    <p className="text-sm text-ink italic">
                      "I felt proud... accomplished... capable... confident..."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink mb-3 text-amber2">
                  Sensory Detail Phrases (Show, Don't Tell)
                </p>
                <div className="bg-fog rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate mb-3">
                    Use specific sensory language instead of vague adjectives:
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-slate">
                        ❌ Weak:
                      </p>
                      <p className="text-sm text-ink italic">
                        "It was nice and quiet."
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate">
                        ✓ Strong:
                      </p>
                      <p className="text-sm text-ink italic">
                        "The air smelled like pine and rain. I could hear the
                        creek flowing softly in the distance."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <p className="text-xs font-semibold text-slate">
                      Examples:
                    </p>
                    <p className="text-sm text-ink italic">
                      "The crowd noise was physically overwhelming..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "I could taste the saltiness of the sea spray..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "The warm sand beneath my feet..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "My stomach twisted as I opened the letter..."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink mb-3 text-rose2">
                  Time Transitions & Narrative Flow
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Starting the story
                    </p>
                    <p className="text-sm text-ink italic">
                      "A few years back... One night... There's one moment..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Showing progression
                    </p>
                    <p className="text-sm text-ink italic">
                      "As the day went on... The moment I... Suddenly..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Emphasizing a key moment
                    </p>
                    <p className="text-sm text-ink italic">
                      "But then... And that's when... The turning point was..."
                    </p>
                  </div>
                  <div className="bg-fog rounded-lg p-3">
                    <p className="text-xs font-semibold text-slate mb-1">
                      Concluding
                    </p>
                    <p className="text-sm text-ink italic">
                      "Looking back... From that moment on... Now, whenever..."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink mb-3 text-violet2">
                  Reflection & Conclusion Phrases (Show Depth)
                </p>
                <div className="bg-fog rounded-lg p-4 space-y-2">
                  <p className="text-sm text-ink italic">
                    "...and that's when I realized I was capable of..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...it taught me that..."{" "}
                  </p>
                  <p className="text-sm text-ink italic">
                    "...I came out of that experience more..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...it completely changed my perspective on..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...now whenever I face a challenge, I think back to..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...I'd do it again in a heartbeat because..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...it showed me that I'm capable of more than I thought..."
                  </p>
                </div>
              </div>
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
                <span className="inline-block mt-3 text-xs font-medium text-emerald2 bg-emerald2-light px-2 py-1 rounded">
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
          CELPIP Prep — Speaking Task 2 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Build your fluency one story at a time. Practice with real scenarios,
          internalize the structure, and let your natural voice shine through.
        </p>
      </footer>
    </>
  );
}
