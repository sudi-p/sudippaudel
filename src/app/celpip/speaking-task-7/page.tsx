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
  COMPLETE_EXAMPLES,
  TEMPLATE_PHRASES,
  TIPS,
  TIP_FILTERS,
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
  bodyClassName = "space-y-4",
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={wrapClassName} style={wrapStyle}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
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

export default function CelpipSpeakingTask7Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 7 Study Guide";
  }, []);

  const task7Words = useMemo(() => VOCAB.filter((v) => v.task === "7"), []);
  const vocabTypes = useMemo(
    () => ["All", ...new Set(task7Words.map((v) => v.type))],
    [task7Words],
  );
  const filteredVocab =
    vocabFilter === "All"
      ? task7Words
      : task7Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 7 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Express your <span className="hero-line italic">opinions</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            State your views clearly and support them with relevant examples and
            thoughtful reasoning.
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
              You are asked to state and explain your opinion on a topic. For
              example:{" "}
              <em className="text-steel">
                "Should young people travel before starting their careers?"
              </em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to express a clear viewpoint,
              support it with reasons and examples, speak confidently, and use
              persuasive language naturally.
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
              How examiners score Task 7 on a 12-point scale. Clarity of opinion
              and quality of support matter most.
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
              <p className="text-sm text-ink">
                A high score requires a{" "}
                <strong>clear opinion with 2–3 well-supported reasons</strong>.
                The opinion itself doesn't matter — your ability to defend it
                does. Examiners reward candidates who speak with conviction and
                back up their views with concrete examples.
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
            A 3-part framework for expressing opinions clearly — speak with
            conviction and support your views.
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
                    Statement
                  </span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Open with a clear statement of your opinion. Don't be wishy-washy or
              ambiguous.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "I believe [your opinion]. In my view, [reason]. This is because
                [why it matters]."
              </p>
            </div>
            <div
              className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire"
              style={{
                borderRadius: "0 12px 12px 0",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            >
              <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">
                Example
              </p>
              <p className="text-sm text-sapphire-dark italic leading-relaxed">
                "I believe young people should travel before starting their
                careers. In my view, travel builds character and confidence. This
                is because exposure to different cultures teaches resilience."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Start with "I
                believe," "In my opinion," or "I think"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Be definitive — avoid
                "maybe" or "perhaps"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Give one preview
                reason to orient the listener
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
                    Supporting Reasons
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~40 seconds · 2–3 reasons
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Develop 2–3 reasons with specific examples. This is where you prove
              your opinion is thoughtful.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "First, [reason 1]. For example, [specific example]. Second,
                [reason 2], which demonstrates [why it's important]."
              </p>
            </div>
            <div
              className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2"
              style={{
                borderRadius: "0 12px 12px 0",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            >
              <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">
                Example
              </p>
              <p className="text-sm text-emerald2-dark italic leading-relaxed">
                "First, travel teaches problem-solving skills. For example,
                navigating a foreign city on a budget forces you to be
                resourceful. Second, cultural immersion builds empathy, which is
                invaluable in any career."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Use transitions:
                "First," "Second," "Additionally"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Include concrete
                examples, not abstract ideas
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Show why each reason
                matters — don't just list them
              </li>
            </ul>
          </Accordion>

          {/* Part 3 */}
          <Accordion
            wrapStyle={{ marginBottom: "2rem" }}
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">Closing</span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Restate your opinion and briefly summarize why it's valid. Leave a
              strong final impression.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "In conclusion, I firmly believe [restate opinion]. The evidence
                clearly shows that [summary of key reason]."
              </p>
            </div>
            <div
              className="bg-gold-light rounded-xl p-4 border-l-4 border-gold"
              style={{
                borderRadius: "0 12px 12px 0",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            >
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">
                Example
              </p>
              <p className="text-sm text-gold-dark italic leading-relaxed">
                "In conclusion, I firmly believe young people benefit greatly from
                traveling. The evidence clearly shows that travel builds both
                practical skills and personal confidence."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Use closing phrases:
                "In conclusion," "To summarize"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Restate your opinion
                firmly — not tentatively
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Keep it brief — 2
                sentences maximum
              </li>
            </ul>
          </Accordion>

          {/* Complete Opinion Examples */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Complete Opinion Examples
                </span>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each example follows the same frame: position → supporting reasons
              → conclusion. The{" "}
              <mark className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink">
                highlighted
              </mark>{" "}
              words are the reusable template — keep them and swap in your own
              argument.
            </p>
            {COMPLETE_EXAMPLES.map((ex) => (
              <div key={ex.title} className={`border-l-3 ${ex.border} pl-4`}>
                <p className="text-sm font-semibold text-ink mb-3">{ex.title}</p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Statement:</strong> "
                  {renderTemplate(ex.statement, TEMPLATE_PHRASES)}"
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Support:</strong> "
                  {renderTemplate(ex.support, TEMPLATE_PHRASES)}"
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "
                  {renderTemplate(ex.closing, TEMPLATE_PHRASES)}"
                </p>
              </div>
            ))}
          </Accordion>

          {/* Opinion Expression Language Toolkit */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Opinion Expression Language Toolkit
                </span>
              </div>
            }
          >
            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-sapphire">
                Strong Opinion-Stating Phrases (Task 7 Requires Assertiveness)
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Direct & Confident
                  </p>
                  <p className="text-sm text-ink italic">
                    "I firmly believe that..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I am convinced that..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I strongly believe that..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    ❌ AVOID (Too Weak)
                  </p>
                  <p className="text-sm text-ink italic">✗ "I think maybe..."</p>
                  <p className="text-sm text-ink italic">
                    ✗ "I guess I believe..."
                  </p>
                  <p className="text-sm text-ink italic">✗ "Kind of, I think..."</p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    From My Perspective
                  </p>
                  <p className="text-sm text-ink italic">"In my view..."</p>
                  <p className="text-sm text-ink italic">
                    "From my perspective..."
                  </p>
                  <p className="text-sm text-ink italic">"In my opinion..."</p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    With Evidence
                  </p>
                  <p className="text-sm text-ink italic">
                    "The evidence clearly shows..."
                  </p>
                  <p className="text-sm text-ink italic">"It is clear that..."</p>
                  <p className="text-sm text-ink italic">
                    "Research demonstrates that..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-emerald2">
                Providing Evidence & Examples (Critical for Task 7)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Introducing Examples
                  </p>
                  <p className="text-sm text-ink italic">
                    "For example, [specific case]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "For instance, [concrete situation]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "To illustrate, [specific example]..."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Supporting Your Claim
                  </p>
                  <p className="text-sm text-ink italic">
                    "This demonstrates that..."
                  </p>
                  <p className="text-sm text-ink italic">"This shows that..."</p>
                  <p className="text-sm text-ink italic">"This proves that..."</p>
                  <p className="text-sm text-ink italic">
                    "This is because..." (explaining the why)
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    With Statistics/Facts
                  </p>
                  <p className="text-sm text-ink italic">
                    "Research shows that..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Studies indicate that..."
                  </p>
                  <p className="text-sm text-ink italic">"Data suggests that..."</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-amber2">
                Transition Words & Signposting (Organize Your Ideas)
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Starting New Reasons
                  </p>
                  <p className="text-sm text-ink italic">"First, [reason 1]..."</p>
                  <p className="text-sm text-ink italic">"Second, [reason 2]..."</p>
                  <p className="text-sm text-ink italic">
                    "Additionally, [reason 3]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Moreover, [additional point]..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Adding Emphasis
                  </p>
                  <p className="text-sm text-ink italic">
                    "Most importantly, [key reason]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Perhaps more significantly, [reason]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Clearly, [obvious point]..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Cause & Effect
                  </p>
                  <p className="text-sm text-ink italic">
                    "Since [cause], [effect]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Because [reason], [consequence]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "As a result, [outcome]..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Acknowledging Other Views
                  </p>
                  <p className="text-sm text-ink italic">
                    "Even though [counter-argument]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "While some argue that..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's true that [opposite view]..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-rose2">
                Closing & Reinforcement Phrases
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  "In conclusion, I firmly believe that..."
                </p>
                <p className="text-sm text-ink italic">
                  "To summarize, the evidence clearly shows that..."
                </p>
                <p className="text-sm text-ink italic">
                  "Based on these reasons, it is evident that..."
                </p>
                <p className="text-sm text-ink italic">
                  "Therefore, I maintain that..."
                </p>
                <p className="text-sm text-ink italic">
                  "For all these reasons, I am convinced that..."
                </p>
                <p className="text-sm text-ink italic">
                  "The conclusion is clear: [restate opinion]..."
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-violet2">
                Reasoning Structures for Stronger Arguments
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Claim → Evidence → Reasoning
                  </p>
                  <p className="text-sm text-ink italic">
                    <strong>❌ Weak:</strong> "Travel is important."
                  </p>
                  <p className="text-sm text-ink italic">
                    <strong>✓ Strong:</strong> "Travel teaches problem-solving.
                    When navigating unfamiliar cities, you learn to adapt quickly.
                    This resilience becomes invaluable in any career."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Multiple Support Levels
                  </p>
                  <p className="text-sm text-ink italic">
                    "Remote work is better (claim) because it reduces distractions
                    (reason). In offices, constant interruptions fragment focus
                    (evidence). Studies show remote workers are 30% more
                    productive (data). This efficiency means better work-life
                    balance and higher quality output (reasoning)."
                  </p>
                </div>
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
                {type}
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
                <p className="text-xs text-slate mb-2">{word.meaning}</p>
                <p className="text-xs text-rose2 italic">"{word.example}"</p>
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
          CELPIP Prep — Speaking Task 7 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Opinions are most powerful when backed by evidence. Speak with
          conviction, support your views with examples, and let your authentic
          perspective shine through.
        </p>
      </footer>
    </>
  );
}
