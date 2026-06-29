// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import {
  TABS,
  SCORE_CRITERIA,
  FOUR_PART,
  SCORE_BANDS,
  ESSAYS,
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
  triggerClassName = "accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors",
  bodyBorderClass = "border-t border-mist",
  bodyClassName = "space-y-4",
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={wrapClassName} style={wrapStyle}>
      <button type="button" onClick={() => setOpen((o) => !o)} className={triggerClassName}>
        {header}
        <Chevron open={open} />
      </button>
      <div
        className={`accordion-body ${bodyBorderClass} px-6 py-5 ${bodyClassName} ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function CelpipWritingTask2Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Writing — Task 2 Study Guide";
  }, []);

  const taskWords = useMemo(() => VOCAB.filter((v) => v.task === "W2"), []);
  const vocabTypes = useMemo(
    () => ["All", ...new Set(taskWords.map((v) => v.type))],
    [taskWords],
  );
  const filteredVocab =
    vocabFilter === "All"
      ? taskWords
      : taskWords.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Writing · Task 2 of 2
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Write a persuasive <span className="hero-line italic">essay</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Everything you need to score 9+ on Task 2 — structure, vocab, scoring
            rubric, practice prompts, and writing tips.
          </p>
        </div>

        {/* Quick stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up"
          style={{ animationDelay: ".1s" }}
        >
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Word count
            </div>
            <div className="font-display text-3xl text-ink">180–199</div>
          </div>
          <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              Time allowed
            </div>
            <div className="font-display text-3xl text-ink">26 minutes</div>
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
            <div className="font-display text-3xl text-ink">10–12</div>
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
              You are asked to write a persuasive essay (180–199 words) taking a
              clear position on a controversial topic. You have{" "}
              <strong>26 minutes</strong> to plan, write, and revise.
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to develop an argument, support
              claims with evidence, organize ideas logically, and demonstrate
              sophisticated grammar and vocabulary in an academic context.
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
              The 4-paragraph structure
            </p>
            <div className="space-y-3">
              {FOUR_PART.map((step) => (
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

          {/* Pre-Built Arguments Framework: Practical vs. Human */}
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-1">
              Framework of pre-built arguments
            </p>
            <p className="font-display text-2xl text-ink mb-1">
              Practical 🛠️ vs. Human 🙂
            </p>
            <p className="text-sm text-slate mb-5 leading-relaxed">
              Most Task 2 prompts pit efficiency against people. Memorize this
              two-sided framework so you always have ready-made arguments for
              either position.
            </p>

            {/* Column headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl bg-sapphire-light border border-sapphire/30 p-4">
                <p className="text-sm font-semibold text-sapphire-dark">
                  The Practical Side
                </p>
                <p className="text-xs text-sapphire-dark/80">
                  Efficiency, Modernity, Economy
                </p>
              </div>
              <div className="rounded-xl bg-emerald2-light border border-emerald2/30 p-4">
                <p className="text-sm font-semibold text-emerald2-dark">
                  The Human Side
                </p>
                <p className="text-xs text-emerald2-dark/80">
                  Well-being, Community, Tradition
                </p>
              </div>
            </div>

            {/* Core Value */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Core value
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink italic">
                    "Doing things better / faster"
                  </p>
                </div>
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink italic">"Taking care of people"</p>
                </div>
              </div>
            </div>

            {/* Common Arguments */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Common arguments
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-fog p-4">
                  <ul className="space-y-2 text-sm text-ink">
                    <li>
                      <span className="text-sapphire shrink-0">•</span>{" "}
                      <strong>Cost-Effectiveness:</strong> Saves money for the
                      company/taxpayers.
                    </li>
                    <li>
                      <span className="text-sapphire shrink-0">•</span>{" "}
                      <strong>Time-Saving:</strong> Modern systems reduce wait
                      times.
                    </li>
                    <li>
                      <span className="text-sapphire shrink-0">•</span>{" "}
                      <strong>Productivity:</strong> Leads to higher output or
                      better results.
                    </li>
                    <li>
                      <span className="text-sapphire shrink-0">•</span>{" "}
                      <strong>Innovation:</strong> Staying ahead of the curve and
                      being "future-ready."
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-fog p-4">
                  <ul className="space-y-2 text-sm text-ink">
                    <li>
                      <span className="text-emerald2 shrink-0">•</span>{" "}
                      <strong>Mental Health:</strong> Reduces stress and prevents
                      burnout.
                    </li>
                    <li>
                      <span className="text-emerald2 shrink-0">•</span>{" "}
                      <strong>Inclusivity:</strong> Ensures everyone (seniors,
                      kids, etc.) is included.
                    </li>
                    <li>
                      <span className="text-emerald2 shrink-0">•</span>{" "}
                      <strong>Work-Life Balance:</strong> Prioritizes family and
                      personal time.
                    </li>
                    <li>
                      <span className="text-emerald2 shrink-0">•</span>{" "}
                      <strong>Social Connection:</strong> Strengthens community or
                      team bonds.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example: Library */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example · Library
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink">
                    <strong>Upgrading to E-books:</strong> More titles, less
                    physical space, 24/7 access.
                  </p>
                </div>
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink">
                    <strong>Keeping Librarians:</strong> Personalized help, a safe
                    space for the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Example: Work */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example · Work
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink">
                    <strong>Higher Salary:</strong> Provides financial security and
                    motivation to work harder.
                  </p>
                </div>
                <div className="rounded-xl bg-fog p-4">
                  <p className="text-sm text-ink">
                    <strong>Extra Day Off:</strong> Better rest leads to long-term
                    loyalty and less turnover.
                  </p>
                </div>
              </div>
            </div>

            {/* Golden Keyword */}
            <div>
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                The "golden" keyword
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-sapphire-light border border-sapphire/30 p-4 text-center">
                  <p className="text-sm font-semibold text-sapphire-dark">
                    Sustainability / Scalability
                  </p>
                </div>
                <div className="rounded-xl bg-emerald2-light border border-emerald2/30 p-4 text-center">
                  <p className="text-sm font-semibold text-emerald2-dark">
                    Quality of Life / Equity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring */}
          <p className="text-sm text-slate">
            How examiners score Task 2 on a 12-point scale. The bands below show
            typical essay characteristics at each level.
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
              A 10–12 essay takes a clear position, develops it with two distinct
              arguments (the second reinforced by an "Admittedly...However"
              concession), and uses sophisticated language. It is well-organized and
              nearly error-free. It demonstrates persuasive writing with logical
              structure, good command of English, and efficient use of the
              26-minute time frame. It is <strong>not</strong> perfect, and that's
              fine — what matters is that you deliver quality ideas concisely.
            </p>
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
            <strong>Survey-Based Persuasive Essay:</strong> Choose ONE option (A or
            B), state your position clearly, and support with 2 strong reasons. Use
            the powerful "Admittedly...However..." strategy in your second point for
            advanced scoring.
          </p>

          {/* Supporting Argument Engine */}
          <div className="bg-ink rounded-2xl p-6 text-fog">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">
              Idea generator
            </p>
            <p className="font-display text-2xl text-fog mb-1">
              Supporting Argument Engine
            </p>
            <p className="text-sm text-fog/80 mb-5 leading-relaxed">
              Stuck for ideas? Build any body paragraph by answering three quick
              questions in order. Each answer becomes one sentence — together they
              form a complete, well-developed reason.
            </p>

            <div className="space-y-3">
              <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2 text-white shrink-0">
                    Stakeholders
                  </span>
                  <span className="text-sm font-semibold text-fog">
                    Who is affected?
                  </span>
                </div>
                <p className="text-xs text-fog/70">
                  Name the people who benefit — employees, customers, students, the
                  community, taxpayers.
                </p>
              </div>
              <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2 text-white shrink-0">
                    Possible Outcome
                  </span>
                  <span className="text-sm font-semibold text-fog">
                    What will happen?
                  </span>
                </div>
                <p className="text-xs text-fog/70">
                  State the positive result your choice creates — better
                  management, higher morale, lasting value.
                </p>
              </div>
              <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire text-white shrink-0">
                    Realistic Details
                  </span>
                  <span className="text-sm font-semibold text-fog">
                    What detail to add?
                  </span>
                </div>
                <p className="text-xs text-fog/70">
                  Add a concrete, real-world example that makes the outcome
                  believable and specific.
                </p>
              </div>
            </div>

            <div className="bg-fog rounded-xl p-4 mt-5">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example paragraph using all 3 perspectives
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "A cash bonus provides{" "}
                <span className="not-italic font-semibold text-rose2-dark">
                  employees
                </span>{" "}
                with the flexibility to manage their unique financial needs, leading
                to{" "}
                <span className="not-italic font-semibold text-emerald2-dark">
                  better financial management
                </span>
                . Unlike vacation days, which may go unused due to heavy workloads, a
                monetary payout offers{" "}
                <span className="not-italic font-semibold text-sapphire-dark">
                  immediate support for goals like debt reduction or building savings
                </span>
                . This ensures the reward holds high value for every staff member,
                regardless of their lifestyle."
              </p>
            </div>
          </div>

          {/* Part 1: Introduction */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Introduction
                  </span>
                  <span className="text-xs text-slate ml-2">2–3 sentences</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Hook the reader, provide context, and state your thesis clearly. Your
              thesis is your main argument.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Start with a hook:</strong> A question, statement, or
                statistic that grabs attention. "Should social media be regulated
                by governments?"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Provide background:</strong> 1–2 sentences explaining the
                issue and why it matters.
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>State your thesis:</strong> "I believe that social media
                platforms should be held legally accountable for user data
                privacy."
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example intro
              </p>
              <p className="text-sm text-ink">
                "In today's digital world, social media companies collect vast
                amounts of personal data. This raises serious concerns about
                privacy and data security. I believe that governments must
                implement stricter regulations to protect users' personal
                information."
              </p>
            </div>
          </Accordion>

          {/* Part 2: Body Paragraph 1 */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Body Paragraph 1 (First Reason)
                  </span>
                  <span className="text-xs text-slate ml-2">
                    3–4 sentences · reason + specific benefit + result
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>
                State your reason, explain the benefit, and show the extended
                result.
              </strong>{" "}
              Use a strong topic sentence that directly supports your choice.
            </p>
            <div className="bg-emerald2-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-emerald2-dark mb-2">
                Body paragraph formula:
              </p>
              <p className="text-xs text-emerald2-dark">
                • <strong>Reason:</strong> "First, [your choice] provides [specific
                benefit]."
              </p>
              <p className="text-xs text-emerald2-dark">
                • <strong>Specific example:</strong> Concrete detail showing
                what/how/why
              </p>
              <p className="text-xs text-emerald2-dark">
                • <strong>Extended result:</strong> "As a result..." / "This
                means..." / "Consequently..."
              </p>
            </div>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Be specific:</strong> Instead of "it's good," say "it
                improves X by addressing Y, which results in Z"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Use varied vocabulary:</strong> Avoid repeating words from
                the prompt
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Use transitions:</strong> "First," "A key advantage is,"
                "The primary benefit..."
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example body paragraph (survey response)
              </p>
              <p className="text-sm text-ink italic">
                "First, choosing Option A promotes professional development.
                Specifically, this approach equips employees with advanced skills
                that directly enhance their job performance. As a result, workers
                become more confident, productive, and better able to contribute to
                company success."
              </p>
            </div>
          </Accordion>

          {/* Part 3: Body Paragraph 2 (Second Reason + Admittedly...However) */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Body Paragraph 2 (Second Reason + Concession)
                  </span>
                  <span className="text-xs text-slate ml-2">
                    3–4 sentences · second reason with "Admittedly...However"
                    (advanced)
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>
                Give your second reason, then strengthen it with a concession.
              </strong>{" "}
              Acknowledge a valid point about the other option, then explain why
              YOUR choice is still superior. The "Admittedly...However" move is a
              HALLMARK of high-scoring essays.
            </p>
            <div className="bg-amber2-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-amber2-dark mb-2">
                Second reason + concession formula:
              </p>
              <p className="text-xs text-amber2-dark">
                • <strong>Second reason:</strong> "Additionally, [your choice] also
                [second benefit]."
              </p>
              <p className="text-xs text-amber2-dark">
                • <strong>Admittedly,</strong> [concede a good point about the other
                option]
              </p>
              <p className="text-xs text-amber2-dark">
                • <strong>However,</strong> [explain why your choice is still
                better] because [specific reason]
              </p>
            </div>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Be specific:</strong> Lead with a concrete second benefit
                before conceding
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Shows critical thinking:</strong> You acknowledge the other
                side's validity, then explain WHY your choice wins despite the
                tradeoff
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Sophisticated language:</strong> Demonstrates academic
                maturity and control
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example body paragraph (second reason + concession)
              </p>
              <p className="text-sm text-ink italic">
                "Additionally, Option A offers superior long-term value by
                addressing the core community need more effectively. Admittedly,
                Option B would reduce initial costs and simplify planning. However,
                while the upfront investment is higher, the lasting benefits far
                outweigh the temporary expense, making it the wiser choice for
                sustainable progress."
              </p>
            </div>
          </Accordion>

          {/* Part 4: Conclusion */}
          <Accordion
            wrapStyle={{ marginBottom: "2rem" }}
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-violet2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">Conclusion</span>
                  <span className="text-xs text-slate ml-2">2–3 sentences</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Restate your thesis, summarize key points, and leave the reader with
              a strong final thought.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Restate thesis (in new words):</strong> Don't repeat
                verbatim — rephrase your main argument.
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Briefly summarize:</strong> Mention your 3 main points in
                1–2 sentences.
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Final thought:</strong> End with impact. "In a world where
                privacy is increasingly threatened, legal action is not just
                necessary—it is urgent."
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example conclusion
              </p>
              <p className="text-sm text-ink">
                "In conclusion, strict government regulation of social media
                platforms is essential for protecting user privacy, preventing data
                breaches, and ensuring corporate accountability. The evidence
                clearly shows that self-regulation has failed. As technology
                continues to advance, legal frameworks must evolve to protect
                citizens' fundamental right to privacy."
              </p>
            </div>
          </Accordion>

          {/* Bonus: Complete Essay Examples */}
          <Accordion
            wrapClassName="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden"
            triggerClassName="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors"
            bodyBorderClass="border-t border-violet2/30"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  4 Worked Examples — Template → Idea Generator → Model Essay
                </span>
              </div>
            }
          >
            {ESSAYS.map((essay, idx) => (
              <div
                key={essay.title}
                className={
                  idx === 0
                    ? "border-t border-violet2/20 pt-5 first:border-0 first:pt-0"
                    : "border-t border-violet2/20 pt-5"
                }
              >
                <p className="font-display text-xl text-ink mb-4">{essay.title}</p>

                {/* Step 1: Template */}
                <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                  <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">
                    Step 1 · The template (your plan)
                  </p>
                  <div className="space-y-2 text-sm text-ink">
                    {essay.template.map((row, i) => (
                      <p key={i}>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded ${row.badgeClass} mr-2`}
                        >
                          {row.badge}
                        </span>
                        {row.text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Step 2: Idea generator */}
                <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                  <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">
                    Step 2 · Idea generator (build each reason)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {essay.ideas.map((idea, i) => (
                      <div key={i} className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">
                          {idea.title}
                        </p>
                        <p className="text-xs text-ink">
                          <span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">
                            Who
                          </span>
                          {idea.who}
                        </p>
                        <p className="text-xs text-ink">
                          <span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">
                            What
                          </span>
                          {idea.what}
                        </p>
                        <p className="text-xs text-ink">
                          <span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">
                            Detail
                          </span>
                          {idea.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Model essay */}
                <div className="bg-white rounded-xl border border-mist p-4">
                  <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-2">
                    Step 3 · Model essay (180–199 words)
                  </p>
                  <div className="space-y-2 text-sm text-ink italic leading-relaxed">
                    {essay.essay.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Accordion>

          {/* Bonus: Persuasive Language Toolkit */}
          <Accordion
            wrapClassName="bg-rose2-light rounded-2xl border border-rose2 overflow-hidden"
            triggerClassName="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-rose2/5 transition-colors"
            bodyBorderClass="border-t border-rose2/30"
            bodyClassName="space-y-3"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Persuasive Language & Transition Toolkit
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  Starting Body Paragraphs:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• First, [option] provides...</li>
                  <li>• A key advantage is...</li>
                  <li>• The primary benefit...</li>
                  <li>• Most importantly...</li>
                  <li>• Furthermore... / Additionally...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  Explaining Results (CRITICAL!):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• As a result... / Consequently...</li>
                  <li>• This means... / This leads to...</li>
                  <li>• Therefore... / Thus...</li>
                  <li>• The outcome is... / This benefits...</li>
                  <li>• Ultimately... / In the long term...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  The Powerful Concession (9+ scores):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Admittedly... / Certainly... / True,</li>
                  <li>• One could argue that...</li>
                  <li>• While [option B] does offer...</li>
                  <li>• However... / Yet... / Still...</li>
                  <li>• Despite this... / Nonetheless...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  Closing & Emphasis:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• In conclusion... / To summarize...</li>
                  <li>• Ultimately... / In the end...</li>
                  <li>• Therefore... / For these reasons...</li>
                  <li>• This clearly demonstrates...</li>
                  <li>• The evidence strongly supports...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  Persuasive Verbs (not "is/has"):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Ensures / Promotes / Fosters</li>
                  <li>• Enhance / Strengthen / Improve</li>
                  <li>• Demonstrates / Shows / Reveals</li>
                  <li>• Creates / Generates / Establishes</li>
                  <li>• Provides / Offers / Delivers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose2-dark mb-2">
                  Avoid (Too Weak/Casual):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• "I think" / "I believe" (once in thesis)</li>
                  <li>• "really" / "very" / "definitely"</li>
                  <li>• "a lot" / "lots of" (use specific terms)</li>
                  <li>• "nice" / "good" (too vague)</li>
                  <li>• Contractions: "don't," "isn't," "can't"</li>
                </ul>
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
                <p className="text-sm font-semibold text-ink mb-1">{word.word}</p>
                <p className="text-xs text-slate mb-2">{word.meaning}</p>
                <p className="text-xs text-emerald2 italic">"{word.example}"</p>
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
                  {tip.label}
                </p>
                <p className="text-sm font-semibold text-ink mb-2">{tip.title}</p>
                <p className="text-xs text-slate">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
        <p className="text-xs text-slate mb-4">
          CELPIP Prep — Writing Task 2 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Master persuasive essay writing. Plan your arguments, follow the
          structure, use sophisticated language, and let your position shine
          through.
        </p>
      </footer>
    </>
  );
}
