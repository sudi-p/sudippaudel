// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "../vocabData";
import {
  TABS,
  SCORE_CRITERIA,
  BLUEPRINT,
  SCORE_BANDS,
  SAMPLE_ANSWERS,
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

export default function CelpipSpeakingTask6Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 6 Study Guide";
  }, []);

  const task6Words = useMemo(() => VOCAB.filter((v) => v.task === "6"), []);
  const vocabTypes = useMemo(
    () => ["All", ...new Set(task6Words.map((v) => v.type))],
    [task6Words],
  );
  const filteredVocab =
    vocabFilter === "All"
      ? task6Words
      : task6Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 6 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Deal with a <span className="hero-line italic">difficult</span>{" "}
            situation
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Choose between two options, then speak directly to a person — deliver
            tough news politely, validate their feelings, and offer a solution.
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
              60<span className="text-lg">s</span>
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
              You read a difficult scenario that gives you{" "}
              <strong>two options</strong>, and you must{" "}
              <strong>choose one</strong> and then{" "}
              <strong>speak directly to a specific person</strong> (a friend,
              family member, or colleague) to deal with it. For example:{" "}
              <em className="text-steel">
                "Your cousin wants to stay at your apartment for two months, but
                your lease doesn't allow long-term guests. You can either (a)
                talk to your roommate to make an exception, or (b) tell your
                cousin she can't stay. Choose one and respond."
              </em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              This is a <strong>role-play</strong>, not an essay. The examiner is
              testing whether you can deliver bad news or resolve a conflict{" "}
              <strong>politely and persuasively</strong> — validating the other
              person's feelings, using soft, indirect language, and offering a
              workable solution. You have <strong>60 seconds to prepare</strong>{" "}
              and <strong>60 seconds to speak</strong>.
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
              How examiners score Task 6 on a 12-point scale. A polite tone and a
              clear, well-handled decision matter most.
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
                This task rewards{" "}
                <strong>tact, not problem-solving genius</strong>. You're talking
                to a real person and delivering news they won't love — so
                validate their feelings, soften everything with "would / could /
                might," choose one option clearly, and offer a fair compromise.
                Being polite and indirect scores higher than being efficient.
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
            A 3-part framework for the role-play — choose one option, then deliver
            the news politely and offer a solution. Remember:{" "}
            <strong>more words = more polite.</strong>
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
                    Greeting &amp; Situation
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Greet the person warmly by name, signal that you have something
              important and a little delicate to discuss, and briefly set up the
              situation.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "Hi [name], hope you're doing well. Listen, I have something a bit
                delicate to talk to you about regarding [situation] — do you have
                a minute?"
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
                "Hi Sam, hope you're doing well. Listen, I wanted to talk to you
                about your plan to stay at my place for the summer — there's
                something a bit delicate I need to share, so do you have a
                moment?"
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Address the person by
                name and greet them warmly
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Signal seriousness
                gently ("something a bit delicate")
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Set up the situation
                in one sentence — don't over-explain yet
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
                    Empathize &amp; Deliver the News
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~25 seconds · the core of your response
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>The heart of your response.</strong> First validate their
              feelings and show you understand their side. Then gently deliver
              your decision — the option you chose — softened with modals and an
              apology.
            </p>
            <div className="bg-sapphire-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-sapphire-dark mb-2">
                Politeness patterns:
              </p>
              <ul className="space-y-1 text-xs text-sapphire-dark">
                <li>
                  • Validate first: "I know you were really hoping to..., and I
                  completely understand why..."
                </li>
                <li>
                  • Soften the news: "Unfortunately," "I'm afraid," "I really wish
                  I could, but..."
                </li>
                <li>
                  • Use soft modals: <strong>would, could, might</strong> — never
                  "you must" or "you have to"
                </li>
              </ul>
            </div>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "I know you were counting on [their hope], and I completely
                understand [why it matters to them]. However, I'm afraid that
                [your decision / the reality]."
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
                "I know you were really excited to stay with me for two months,
                and I completely understand it would help you save money while you
                job-hunt. However, I'm afraid my lease doesn't allow guests to
                stay longer than three days, and my roommate and I could risk
                eviction."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Always validate their
                feelings before the bad news
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>State clearly which
                option you chose — don't be vague
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Give a brief, genuine
                reason for your decision
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
                  <span className="text-sm font-semibold text-ink">
                    Solution &amp; Persuasive Close
                  </span>
                  <span className="text-xs text-slate ml-2">~20 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Offer a concrete compromise or alternative so you're not just saying
              "no." Then close gently, seeking agreement without inviting an
              argument.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "I think the best way forward would be to [solution]. I'd be happy
                to [your offer]. I really hope you can see where I'm coming from,
                and [warm sign-off]."
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
                "I think the best approach would be to find you an affordable place
                nearby, and I'd be happy to help cover your first week. That way
                you'll have somewhere comfortable without putting our lease at
                risk. I really hope you understand — I can't wait to see you
                soon!"
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Always offer a
                solution or compromise, not just a refusal
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Close by seeking
                agreement: "I hope you can see my perspective"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Avoid "What do you
                think?" — it invites a counter-argument
              </li>
            </ul>
          </Accordion>

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
                    full role-plays · Greeting → Empathize &amp; Deliver →
                    Solution &amp; Close
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Each scenario gives you <strong>two options</strong> — pick one
              (usually the harder, more responsible choice) and speak directly to
              the person. Task 6 is text-only on the real test, but an{" "}
              <strong>image prompt</strong> is included so you can picture the
              situation while you practise.
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
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> {sample.situation}{" "}
                  {sample.options.map((o, i) => (
                    <span key={o.label}>
                      <strong>
                        {o.label}
                        {o.chosen ? " (chosen)" : ""}:
                      </strong>{" "}
                      {o.text}
                      {i < sample.options.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer ({sample.speakingTo})
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "{sample.greeting}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "{sample.empathize}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "{sample.solution}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Accordion>

          {/* Polite Conflict Language Toolkit */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Polite Conflict Language Toolkit
                </span>
              </div>
            }
          >
            <div>
              <p className="text-sm font-semibold mb-3 text-sapphire">
                Opening &amp; Scene-Setting
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Warm Greeting
                  </p>
                  <p className="text-sm text-ink italic">
                    "Hi [name], hope you're doing well!"
                  </p>
                  <p className="text-sm text-ink italic">
                    "Hey [name], do you have a quick minute?"
                  </p>
                  <p className="text-sm text-ink italic">
                    "Thanks for taking my call..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Signalling Seriousness Gently
                  </p>
                  <p className="text-sm text-ink italic">
                    "I have something a bit delicate to discuss..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "There's something important I'd like to run by you..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I really hate to bring this up, but..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-emerald2">
                Validating Their Feelings (Empathy First)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Showing You Understand
                  </p>
                  <p className="text-sm text-ink italic">
                    "I know you were really hoping to..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I completely understand why this matters to you..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I can see where you're coming from..."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Acknowledging the Awkwardness
                  </p>
                  <p className="text-sm text-ink italic">
                    "I know this might be disappointing..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I'm in a bit of a tricky spot here..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "This isn't easy for me to say..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-amber2">
                Soft Modals &amp; Polite Disagreement
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Softening with Modals
                  </p>
                  <p className="text-sm text-ink italic">
                    "I was wondering if we could..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Would it be possible to...?"
                  </p>
                  <p className="text-sm text-ink italic">
                    "Maybe we might be able to..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Delivering the News Gently
                  </p>
                  <p className="text-sm text-ink italic">
                    "Unfortunately, I'm afraid that..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I really wish I could, but..."
                  </p>
                  <p className="text-sm text-ink italic">"The thing is..."</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-rose2">
                Offering a Solution or Compromise
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  "I think the best way forward would be to..."
                </p>
                <p className="text-sm text-ink italic">"Would it help if I...?"</p>
                <p className="text-sm text-ink italic">
                  "I'd be more than happy to..."
                </p>
                <p className="text-sm text-ink italic">
                  "How about we...instead?"
                </p>
                <p className="text-sm text-ink italic">
                  "As a compromise, I could..."
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-violet2">
                Persuasive Closing (Seek Agreement)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  "I really hope you can see where I'm coming from."
                </p>
                <p className="text-sm text-ink italic">
                  "I hope you can agree with me on this."
                </p>
                <p className="text-sm text-ink italic">
                  "Thanks so much for understanding."
                </p>
                <p className="text-sm text-ink italic">
                  "I really appreciate your patience — let's catch up soon!"
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-gold">
                Phrases to Avoid (Too Direct or Rude)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  ✗ "You must..." / "You have to..." → too commanding
                </p>
                <p className="text-sm text-ink italic">
                  ✗ "No, that won't work." → too blunt
                </p>
                <p className="text-sm text-ink italic">
                  ✗ "It's your problem, not mine." → unkind
                </p>
                <p className="text-sm text-ink italic">
                  ✗ "What do you think?" → invites an argument; close firmly
                  instead
                </p>
                <p className="text-xs font-semibold text-slate mt-2">
                  Remember: more words = more polite. Soften everything.
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
                <p className="text-xs text-amber2 italic">"{word.example}"</p>
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
          CELPIP Prep — Speaking Task 6 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Dealing with a difficult situation is a polite role-play: choose one
          option, speak directly to the person, validate their feelings, deliver
          the news gently, and offer a solution. Examiners reward tact and warmth
          — more words mean more polite.
        </p>
      </footer>
    </>
  );
}
