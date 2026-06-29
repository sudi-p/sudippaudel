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
  SCENARIOS,
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

// Renders an array of segments: string | { h } (highlight) | { br } | { em }
const Segs = ({ parts, hClass = "text-violet2" }) =>
  parts.map((p, i) => {
    if (typeof p === "string") return <span key={i}>{p}</span>;
    if (p.br) return <br key={i} />;
    if (p.h) return <span key={i} className={hClass}>{p.h}</span>;
    if (p.em) return <em key={i}>{p.em}</em>;
    return null;
  });

// A multi-line answer paragraph (handles "\n" → <br/> for sign-offs)
const AnswerPara = ({ text }) => {
  const lines = text.split("\n");
  return (
    <p>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
};

export default function CelpipWritingTask1Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");
  const [formality, setFormality] = useState("formal");

  useEffect(() => {
    document.title = "CELPIP Writing — Task 1 Study Guide";
  }, []);

  const taskWords = useMemo(() => VOCAB.filter((v) => v.task === "W1"), []);
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
            Writing · Task 1 of 2
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Write a professional <span className="hero-line italic">email</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Everything you need to score 9+ on Task 1 — structure, vocab, scoring
            rubric, practice scenarios, and delivery tips.
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
            <div className="font-display text-3xl text-ink">27 minutes</div>
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
              You are asked to write a professional email (180–199 words) in
              response to a business scenario. You have <strong>27 minutes</strong>{" "}
              to plan, write, and revise.
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing your ability to communicate professionally,
              organize information clearly, use appropriate tone and register, and
              demonstrate grammar and vocabulary control in a practical business
              context.
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
              The 4-part structure
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

          {/* ─── Scoring bands ─── */}
          <div>
            <p className="text-sm text-slate mb-3">
              How examiners score Task 1 on a 12-point scale. The bands below show
              typical email characteristics at each level.
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
                A 10–12 email is well-organized, professional in tone, and nearly
                error-free. It hits the word count and addresses all requirements
                within 27 minutes. It is <strong>not</strong> perfect, and that's
                fine — what matters is that it demonstrates professional
                communication with clear purpose and good control of language.
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
            <strong>Key to high scores:</strong> Clear structure + Professional
            tone + Varied vocabulary + Complex sentences. Hit 180–199 words and
            address all prompt requirements.
          </p>

          {/* Part 1: Greeting */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">Greeting</span>
                  <span className="text-xs text-slate ml-2">
                    1–2 lines · professional salutation
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      Dear Mr./Ms. [Last Name], &middot; Dear Sir or Madam, &middot; To Whom It May Concern,
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Dear [First Name], &middot; Hello [Name],
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Hi [Name], &middot; Hey [Name],
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              Start with a professional, appropriate salutation. Formality depends
              on the recipient and context.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>With a known name:</strong> "Dear Ms. Chen," or "Dear Mr.
                Johnson," (use last name unless very casual relationship)
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Without a name (formal):</strong> "Dear Sir or Madam," or
                "To Whom It May Concern,"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>After greeting:</strong> Use comma (North American) or
                colon (British), then press Enter for a new line.
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Examples
              </p>
              <div className="space-y-1 text-sm text-ink">
                <p>Dear Mr. Johnson,</p>
                <p>Dear Sir or Madam,</p>
              </div>
            </div>
          </Accordion>

          {/* Part 2: Opening (Purpose) */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Opening (State Purpose)
                  </span>
                  <span className="text-xs text-slate ml-2">
                    1 sentence · why you are writing
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      I am writing to [request / inquire about / complain about] [topic]. [One sentence of context.]
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      I hope you are doing well. I am writing to [ask about / let you know about] [topic].
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      How are you? I&apos;m writing to [tell you about / invite you to] [topic].
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              <strong>Use one clear sentence to state your purpose.</strong> Pick
              the row below that matches your prompt and fill in the blank — that
              single sentence is your whole opening.
            </p>
            <div className="bg-sapphire-light rounded-xl p-4 mb-3 overflow-x-auto">
              <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-3">
                ✅ Purpose → Opening sentence (ready to use)
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-sapphire-dark">
                    <th className="border border-sapphire/30 px-3 py-2 font-semibold w-2/5">
                      Purpose
                    </th>
                    <th className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Opening sentence
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Complaint
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to express my dissatisfaction regarding [issue].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Suggestion / Recommendation
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to suggest an improvement regarding [topic].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Request (Action / Help)
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to request your assistance with [specific issue].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Request (Information)
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to inquire about [specific information or service].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Apology
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to sincerely apologize for [situation].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Appreciation
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing to express my appreciation for [event/service].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      Response / Follow-up
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am writing in response to [your previous email / advertisement regarding ...].
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sapphire/30 px-3 py-2 font-semibold">
                      General opener (any purpose)
                    </td>
                    <td className="border border-sapphire/30 px-3 py-2 italic">
                      I am contacting you regarding... / The purpose of this email is to... (slightly formal)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>One sentence only:</strong> Don't delay or pad — state why
                you're writing, then move straight to the details paragraph.
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example
              </p>
              <div className="text-sm text-ink italic">
                <p>
                  "I am writing to express my dissatisfaction regarding a laptop I
                  recently purchased from your online store."
                </p>
              </div>
            </div>
          </Accordion>

          {/* Part 3: Paragraph 1 — Answer point 1 (the facts) */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Paragraph 1 — Explain the Details
                  </span>
                  <span className="text-xs text-slate ml-2">
                    answer point 1 · facts only, no emotions yet
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      The main reason is that [detail with specifics — dates, numbers]. Furthermore, [detail 2].
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      [Explain the situation with details.] In addition, [second point].
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      So here&apos;s what happened — [the details]. Also, [second point].
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              <strong>
                Answer the first point of the prompt with specific, factual
                details.
              </strong>{" "}
              Keep this paragraph neutral — save how you <em>feel</em> for the next
              paragraph.
            </p>
            <div className="bg-amber2-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-amber2-dark mb-2">
                Linking phrases for details:
              </p>
              <ul className="space-y-1 text-xs text-amber2-dark">
                <li>• "The situation is..." / "The main reason is..."</li>
                <li>• "Specifically, ..." / "To be more specific, ..."</li>
                <li>• "In addition, ..." / "Furthermore, ..." / "Moreover, ..."</li>
                <li>• "As a result, ..." / "Consequently, ..."</li>
                <li>• "For example, ..." / "For instance, ..."</li>
              </ul>
            </div>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Include specific details:</strong> Dates, order numbers,
                product names, times, amounts
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Use varied sentence structures:</strong> Mix simple,
                compound, and complex sentences
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Stay factual:</strong> Describe <em>what happened</em>, not
                how you feel about it — that comes in Paragraph 2
              </li>
            </ul>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example (facts only)
              </p>
              <div className="text-sm text-ink italic">
                <p>
                  "The laptop I purchased on March 10th (Order #AB123456) arrived
                  with a cracked screen, and the box contained no protective
                  cushioning. When I attempted to start the device, the screen
                  failed to display any image, and it shut down after a few
                  seconds."
                </p>
              </div>
            </div>
          </Accordion>

          {/* Part 4: Paragraph 2 — Answer point 2 (feelings + softeners) */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-violet2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Paragraph 2 — How You Feel, Politely
                  </span>
                  <span className="text-xs text-slate ml-2">
                    answer point 2 · emotions · softeners
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      I must admit I was quite disappointed to find [fact]. / I was very pleased with [fact].
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      I have to say I was a little disappointed that [fact]. / I was really happy with [fact].
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Honestly, I was pretty disappointed that [fact]. / I was so happy with [fact]!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              <strong>Answer the second point and express how you feel</strong> —
              pleased, grateful, disappointed, or frustrated. The skill is
              conveying emotion <em>professionally</em>, especially in a complaint.
            </p>

            {/* Emotion vocabulary table */}
            <div className="bg-violet2-light rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">
                Emotion → professional expression
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-violet2-dark">
                    <th className="border border-violet2/30 px-3 py-2 font-semibold w-2/5">
                      Emotion
                    </th>
                    <th className="border border-violet2/30 px-3 py-2 font-semibold">
                      Professional expression
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Pleased / Happy
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I was delighted to... / I was very pleased with...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Grateful
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I am sincerely grateful for... / I truly appreciate...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Impressed
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I was thoroughly impressed by... / I was struck by...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Concerned
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I am rather concerned that... / It is worrying that...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Disappointed
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I was quite disappointed to find... / Regrettably, ...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Frustrated
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I found it frustrating that... / It was frustrating to discover...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-violet2/30 px-3 py-2 font-semibold">
                      Dissatisfied
                    </td>
                    <td className="border border-violet2/30 px-3 py-2 italic">
                      I am not entirely satisfied with... / I am dissatisfied with...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate">
              <strong>Complain without sounding rude.</strong> Use a{" "}
              <em>softener</em> to reduce directness so the reader stays
              cooperative — soften the emotion, not the facts. State the feeling,
              attach it to the fact, and stay courteous: "I must admit I was
              disappointed to find the screen cracked."
            </p>

            {/* Universal Tone Softeners table */}
            <div className="bg-ink rounded-xl p-4 text-fog overflow-x-auto">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                🎯 Universal Tone Softeners (reusable across tasks)
              </p>
              <p className="text-xs text-fog/70 mb-3">
                Whether to use them depends on the situation. To sound firm in a
                strong complaint, fewer or no softeners may be more suitable.
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-gold">
                    <th className="border border-fog/20 px-3 py-2 font-semibold w-2/5">
                      Softener type
                    </th>
                    <th className="border border-fog/20 px-3 py-2 font-semibold">
                      High-utility expressions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-fog">
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Hedging starters (reduce directness)
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      I would like to... / I would like to take a moment to...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Indirect requests
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      I would appreciate it if you could... / I was wondering if you could...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Soft opinion / attitude
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      I must admit that... / I believe that...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Possibility / flexibility signals
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      It would be helpful if... / It might be beneficial to...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Polite framing add-ons
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      If possible, ... / At your convenience, ...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Respectful tone markers
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      I kindly request that... / I would be grateful if...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-fog/20 px-3 py-2 font-semibold">
                      Acknowledging reader (softens impact)
                    </td>
                    <td className="border border-fog/20 px-3 py-2">
                      I understand that... / I appreciate that...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example (frustrated, but polite)
              </p>
              <div className="text-sm text-ink italic">
                <p>
                  "I must admit that I was quite disappointed by this experience,
                  particularly given the cost of the device. I understand that
                  occasional defects can occur, but I had expected a noticeably
                  higher standard of quality control."
                </p>
              </div>
            </div>
          </Accordion>

          {/* Part 5: Paragraph 3 — Answer point 3 (resolution + closing) */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-rose2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  5
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Paragraph 3 — Resolution / Your Request
                  </span>
                  <span className="text-xs text-slate ml-2">
                    answer point 3 · what you want to happen next
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      I would appreciate it if you could [request] at your earliest convenience.
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Could you please [request] when you get a chance?
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Let me know if you can [request]!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              <strong>
                Answer the third point: say what you want to happen next
              </strong>{" "}
              — a refund, a repair, information, or a decision. Keep the request
              softened so it stays courteous. (Your closing sentence and sign-off
              come in the next section.)
            </p>

            {/* Use-case → request phrase table */}
            <div className="bg-rose2-light rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-rose2-dark uppercase tracking-wider mb-3">
                Use case → request / next-step phrase
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-rose2-dark">
                    <th className="border border-rose2/30 px-3 py-2 font-semibold w-2/5">
                      Use case
                    </th>
                    <th className="border border-rose2/30 px-3 py-2 font-semibold">
                      Phrase to use
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Refund / replacement
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      I would appreciate a full refund or a replacement at your earliest convenience.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Repair / action
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      I would be grateful if you could arrange for a technician to attend to this.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Information
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      Could you please provide further details regarding...?
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Suggestion / resolution
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      It would be helpful if you could consider...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Setting a deadline (polite)
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      I would appreciate a response by [date], if possible.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-rose2/30 px-3 py-2 font-semibold">
                      Offering flexibility
                    </td>
                    <td className="border border-rose2/30 px-3 py-2 italic">
                      Please let me know a time that is convenient for you.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate">
              <strong>Tip:</strong> Soften the request with the softeners from
              Paragraph 2 — "I would appreciate it if you could..." lands far
              better than "You must...".
            </p>

            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Example (the request)
              </p>
              <div className="text-sm text-ink italic">
                <p>
                  "I would appreciate a full refund or a replacement device, sent
                  with proper packaging, at your earliest convenience."
                </p>
              </div>
            </div>
          </Accordion>

          {/* Part 6: Closing Sentence & Sign-off */}
          <Accordion
            header={
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-ink text-xs font-semibold flex items-center justify-center shrink-0">
                  6
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Closing Sentence &amp; Sign-off
                  </span>
                  <span className="text-xs text-slate ml-2">
                    end politely · match the tone · then your name
                  </span>
                </div>
              </div>
            }
          >
            {/* Template for this part, by email type */}
            <div className="bg-fog rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-3">
                📋 This part — by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="border border-mist px-3 py-2 font-semibold text-sapphire-dark bg-sapphire-light align-top w-1/3">
                      Formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-emerald2-dark bg-emerald2-light align-top w-1/3">
                      Semi-formal
                    </th>
                    <th className="border border-mist px-3 py-2 font-semibold text-amber2-dark bg-amber2-light align-top w-1/3">
                      Informal
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr className="align-top">
                    <td className="border border-mist px-3 py-2 italic">
                      Thank you for your prompt attention to this matter. I look forward to your response. &mdash; Sincerely, / Yours faithfully,
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Thank you so much for your help — I really appreciate it. &mdash; Best regards, / Kind regards,
                    </td>
                    <td className="border border-mist px-3 py-2 italic">
                      Can&apos;t wait to hear back from you! &mdash; Cheers, / Take care,
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate">
              <strong>
                Finish with one courteous closing sentence, then a sign-off and
                your full name on the next line.
              </strong>{" "}
              Match both to the email's tone — a formal complaint and a note to a
              friend close very differently.
            </p>

            {/* Closing sentence + sign-off by tone */}
            <div className="bg-gold-light rounded-xl p-4 overflow-x-auto">
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-3">
                Closing sentence &amp; sign-off → by email type
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-gold-dark">
                    <th className="border border-gold/40 px-3 py-2 font-semibold">
                      Email type
                    </th>
                    <th className="border border-gold/40 px-3 py-2 font-semibold">
                      Closing sentence
                    </th>
                    <th className="border border-gold/40 px-3 py-2 font-semibold">
                      Sign-off
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <tr>
                    <td className="border border-gold/40 px-3 py-2 font-semibold align-top">
                      Formal
                      <br />
                      <span className="text-xs font-normal text-slate">
                        strangers, officials, companies, complaints
                      </span>
                    </td>
                    <td className="border border-gold/40 px-3 py-2 italic">
                      "Thank you for your prompt attention to this matter; I look forward to your response."
                    </td>
                    <td className="border border-gold/40 px-3 py-2">
                      Yours faithfully, / Sincerely,
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gold/40 px-3 py-2 font-semibold align-top">
                      Semi-formal
                      <br />
                      <span className="text-xs font-normal text-slate">
                        a manager, coworker, or landlord you know
                      </span>
                    </td>
                    <td className="border border-gold/40 px-3 py-2 italic">
                      "Thank you so much for your help — I really appreciate it. Please let me know if you need anything further from me."
                    </td>
                    <td className="border border-gold/40 px-3 py-2">
                      Best regards, / Kind regards,
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gold/40 px-3 py-2 font-semibold align-top">
                      Informal
                      <br />
                      <span className="text-xs font-normal text-slate">
                        a friend, family member, or close colleague
                      </span>
                    </td>
                    <td className="border border-gold/40 px-3 py-2 italic">
                      "Let me know if you can make it — can't wait to catch up properly!"
                    </td>
                    <td className="border border-gold/40 px-3 py-2">
                      Cheers, / Take care, / Talk soon,
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>One sentence is enough:</strong> Thank the reader and/or
                signal the next step — don't add new information here.
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Sign-off then name:</strong> Put the sign-off on its own
                line, with your full name on the line directly below.
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>
                <strong>Stay consistent:</strong> Don't pair a formal sign-off
                ("Yours faithfully,") with a casual closing line, or vice versa.
              </li>
            </ul>

            <div className="bg-fog rounded-xl p-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Example — Formal
                </p>
                <div className="text-sm text-ink italic">
                  <p>
                    "Thank you for your prompt attention to this matter; I look
                    forward to your response.
                  </p>
                  <p className="mt-1">
                    Sincerely,
                    <br />
                    Jennifer Martinez"
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Example — Semi-formal
                </p>
                <div className="text-sm text-ink italic">
                  <p>
                    "Thank you so much for considering my request — I really
                    appreciate your understanding. Please let me know if you need
                    anything further from me.
                  </p>
                  <p className="mt-1">
                    Best regards,
                    <br />
                    Priya Sharma"
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Example — Informal
                </p>
                <div className="text-sm text-ink italic">
                  <p>
                    "Let me know if you can make it, and feel free to bring someone
                    along — can't wait to catch up!
                  </p>
                  <p className="mt-1">
                    Cheers,
                    <br />
                    Leo"
                  </p>
                </div>
              </div>
            </div>
          </Accordion>

          {/* Bonus: Email Writing Language & Phrases Toolkit */}
          <Accordion
            wrapClassName="bg-sapphire-light rounded-2xl border border-sapphire overflow-hidden"
            triggerClassName="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sapphire/5 transition-colors"
            bodyBorderClass="border-t border-sapphire/30"
            bodyClassName="space-y-3"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Professional Email Language & Phrases Toolkit
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Opening Phrases (State Purpose):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• I am writing to...</li>
                  <li>• I am contacting you regarding...</li>
                  <li>• I would like to inquire about...</li>
                  <li>• I would like to request...</li>
                  <li>• I am writing in response to...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Polite Request Phrases:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• I would appreciate...</li>
                  <li>• I would greatly appreciate...</li>
                  <li>• Could you please...?</li>
                  <li>• I kindly request...</li>
                  <li>• I would be grateful if...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Body Transitions & Linking:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Specifically, / To be specific,</li>
                  <li>• Furthermore, / Additionally,</li>
                  <li>• In addition to that, / Moreover,</li>
                  <li>• As a result, / Consequently,</li>
                  <li>• The main reason is... / The reason for my concern is...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Explaining Details:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• For example, / For instance,</li>
                  <li>• This shows that... / This demonstrates...</li>
                  <li>• I have attached... / Please see enclosed...</li>
                  <li>• The situation is... / The issue involves...</li>
                  <li>• I believe this requires... / This needs...</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Closing/Call to Action:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Thank you in advance for...</li>
                  <li>• I look forward to...</li>
                  <li>• Please advise on... / Please let me know...</li>
                  <li>• I would appreciate your prompt attention to...</li>
                  <li>• I hope to hear from you soon.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sapphire-dark mb-2">
                  Avoid (Too Casual/Weak):
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• "Hi" / "Hey" / "Thanks a lot"</li>
                  <li>• Contractions: "don't," "isn't," "can't"</li>
                  <li>• "ASAP" / "BTW" / "FYI"</li>
                  <li>• "Really," "Very," "Definitely"</li>
                  <li>• "Just," "Like," "Stuff," "Thing"</li>
                </ul>
              </div>
            </div>
          </Accordion>

          {/* Bonus: Complete Email Scenarios */}
          <Accordion
            wrapClassName="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden"
            triggerClassName="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors"
            bodyBorderClass="border-t border-violet2/30"
            bodyClassName="space-y-5"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  6 Worked Examples — Question → Thinking → Template → Answer
                </span>
              </div>
            }
          >
            <p className="text-sm text-violet2-dark">
              Each example shows the full journey: the <strong>Question</strong>,
              the <strong>Thought process</strong> (how the reader, purpose, and
              three points drive the plan), the <strong>Template</strong> skeleton
              built from the sections above, and the finished{" "}
              <strong>Answer</strong> — written in real paragraphs, not one block.
            </p>

            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-violet2/30 p-4 space-y-4"
              >
                <p className="text-sm font-semibold text-violet2-dark">
                  {s.title}{" "}
                  <span className="text-xs font-normal text-slate">· {s.meta}</span>
                </p>

                <div>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-violet2 text-white mb-2">
                    Question
                  </span>
                  <p className="text-sm text-ink">{s.questionLead}</p>
                  <ul className="mt-1 text-sm text-ink list-disc pl-5 space-y-0.5">
                    {s.questionPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-sapphire text-white mb-2">
                    Thought process
                  </span>
                  <ul className="space-y-1 text-sm text-ink">
                    {s.thoughtProcess.map((tp, i) => (
                      <li key={i}>
                        <strong>{tp.label}</strong> <Segs parts={tp.body} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-amber2 text-white mb-2">
                    Template
                  </span>
                  <div className="bg-fog rounded-lg p-3 text-[13px] font-mono text-ink leading-relaxed space-y-1">
                    {s.template.map((line, i) => (
                      <p key={i}>
                        <Segs parts={line} />
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mb-2">
                    Answer
                  </span>
                  <div className="bg-violet2-light rounded-lg p-3 text-sm text-ink italic leading-relaxed space-y-2">
                    {s.answer.map((para, i) => (
                      <AnswerPara key={i} text={para} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Accordion>

          {/* Folded in from the old "Email Types" tab: full sample emails by formality */}
          <Accordion
            bodyClassName="space-y-5"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Full Sample Emails — by type (Formal &middot; Semi-formal &middot; Informal)
                </span>
              </div>
            }
          >
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                Read the prompt — who is the reader?
              </p>
              <p className="text-sm leading-relaxed text-ink">
                CELPIP Task 1 always names a recipient.{" "}
                <strong>Match your tone to that reader.</strong> Writing too
                formally to a friend, or too casually to a manager, costs you
                points on tone and register. Use the toggle below to see the right
                template for each situation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="bg-sapphire-light rounded-xl p-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-1">
                    Formal
                  </p>
                  <p className="text-xs text-sapphire-dark/80">
                    Strangers, officials, companies, complaints. No contractions.
                  </p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-3">
                  <p className="text-xs font-semibold text-emerald2-dark mb-1">
                    Semi-formal
                  </p>
                  <p className="text-xs text-emerald2-dark/80">
                    Managers, coworkers, landlords you know. Polite but warmer.
                  </p>
                </div>
                <div className="bg-amber2-light rounded-xl p-3">
                  <p className="text-xs font-semibold text-amber2-dark mb-1">
                    Informal
                  </p>
                  <p className="text-xs text-amber2-dark/80">
                    Friends, family, close colleagues. Relaxed, contractions OK.
                  </p>
                </div>
              </div>
            </div>

            {/* Toggle */}
            <div className="flex flex-wrap gap-2" id="formality-toggle">
              {[
                { id: "formal", label: "Formal" },
                { id: "semiformal", label: "Semi-formal" },
                { id: "informal", label: "Informal" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormality(f.id)}
                  className={`formality-btn ${
                    formality === f.id ? "filter-active" : "filter-inactive"
                  } px-5 py-2 rounded-full border text-sm font-medium transition-all`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* FORMAL */}
            <div className={`formality-card ${formality === "formal" ? "" : "hidden"}`}>
              <div className="bg-white rounded-2xl border border-mist overflow-hidden">
                <div className="bg-sapphire px-6 py-4">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
                    Formal Email
                  </p>
                  <p className="text-sm text-white">
                    For people you don't know, officials, businesses, or
                    complaints. No contractions, full polite forms.
                  </p>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Fill-in template
                    </p>
                    <div className="bg-fog rounded-xl p-4 text-sm text-ink leading-relaxed space-y-2 font-mono text-[13px]">
                      <p>
                        Dear{" "}
                        <span className="text-sapphire">
                          [Mr./Ms. Last Name OR Sir or Madam]
                        </span>
                        ,
                      </p>
                      <p>
                        I am writing to{" "}
                        <span className="text-sapphire">
                          [state purpose — request / inquire about / complain about]
                        </span>
                        .{" "}
                        <span className="text-sapphire">
                          [One sentence of context.]
                        </span>
                      </p>
                      <p>
                        The main reason is that{" "}
                        <span className="text-sapphire">
                          [explain detail 1 with specifics — dates, numbers]
                        </span>
                        . Furthermore,{" "}
                        <span className="text-sapphire">[detail 2]</span>.{" "}
                        <span className="text-sapphire">
                          [Detail 3 / consequence.]
                        </span>
                      </p>
                      <p>
                        I would appreciate it if you could{" "}
                        <span className="text-sapphire">
                          [your specific request / next step]
                        </span>
                        . Thank you for your prompt attention to this matter. I
                        look forward to your response.
                      </p>
                      <p>
                        Sincerely,
                        <br />
                        <span className="text-sapphire">[Your Full Name]</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Worked example (complaint)
                    </p>
                    <div className="bg-sapphire-light rounded-xl p-4 text-sm text-ink leading-relaxed italic">
                      <p>Dear Mr. Holloway,</p>
                      <p className="mt-2">
                        I am writing to formally complain about the faulty
                        dishwasher delivered to my home on June 2nd (Order
                        #DW40219). I purchased the appliance from your store
                        expecting reliable performance.
                      </p>
                      <p className="mt-2">
                        The main reason for my complaint is that the unit failed to
                        operate on its first use, displaying an error code and
                        leaking water onto the floor. Furthermore, the installation
                        technician left without confirming it was working. As a
                        result, my kitchen sustained minor water damage.
                      </p>
                      <p className="mt-2">
                        I would appreciate it if you could arrange a full
                        replacement and inspection at your earliest convenience.
                        Thank you for your prompt attention to this matter. I look
                        forward to your response.
                      </p>
                      <p className="mt-2">
                        Sincerely,
                        <br />
                        Daniel Pierce
                      </p>
                    </div>
                  </div>
                  <div className="bg-fog rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Phrases that fit
                    </p>
                    <p className="text-xs text-slate">
                      <strong>Greeting:</strong> Dear Mr./Ms. [Name], · Dear Sir or
                      Madam, · To Whom It May Concern,
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Open:</strong> I am writing to… · I am writing in
                      response to… · I wish to bring to your attention…
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Close:</strong> I would appreciate it if… · I look
                      forward to your response. · Yours faithfully, · Sincerely,
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEMI-FORMAL */}
            <div className={`formality-card ${formality === "semiformal" ? "" : "hidden"}`}>
              <div className="bg-white rounded-2xl border border-mist overflow-hidden">
                <div className="bg-emerald2 px-6 py-4">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
                    Semi-formal Email
                  </p>
                  <p className="text-sm text-white">
                    For a manager, coworker, or landlord you already know. Polite
                    and professional, but warmer and more personal.
                  </p>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Fill-in template
                    </p>
                    <div className="bg-fog rounded-xl p-4 text-sm text-ink leading-relaxed space-y-2 font-mono text-[13px]">
                      <p>
                        Dear{" "}
                        <span className="text-emerald2">
                          [First Name OR Mr./Ms. Last Name]
                        </span>
                        ,
                      </p>
                      <p>
                        I hope you are doing well. I am writing to{" "}
                        <span className="text-emerald2">
                          [state purpose — ask about / let you know / request]
                        </span>
                        .{" "}
                        <span className="text-emerald2">
                          [One sentence of friendly context.]
                        </span>
                      </p>
                      <p>
                        <span className="text-emerald2">
                          [Explain the situation with details.]
                        </span>{" "}
                        In addition,{" "}
                        <span className="text-emerald2">[second point]</span>.{" "}
                        <span className="text-emerald2">
                          [Reassurance or extra info.]
                        </span>
                      </p>
                      <p>
                        Could you please{" "}
                        <span className="text-emerald2">[your request]</span>? Thank
                        you so much for your help — I really appreciate it. Please
                        let me know if you need anything from me.
                      </p>
                      <p>
                        Best regards,
                        <br />
                        <span className="text-emerald2">[Your Name]</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Worked example (time off request)
                    </p>
                    <div className="bg-emerald2-light rounded-xl p-4 text-sm text-ink leading-relaxed italic">
                      <p>Dear Ms. Carter,</p>
                      <p className="mt-2">
                        I hope you are doing well. I am writing to request a week of
                        leave from Monday, June 15th to Friday, June 19th due to a
                        family matter that requires my attention.
                      </p>
                      <p className="mt-2">
                        I have already reviewed my current projects, and everything
                        is on track to be completed before I leave. In addition, I
                        have spoken with Raj, who has kindly agreed to cover any
                        urgent client requests while I am away. I will also be
                        reachable by email for anything truly time-sensitive.
                      </p>
                      <p className="mt-2">
                        Could you please let me know if these dates work for the
                        team? Thank you so much for considering my request — I
                        really appreciate your understanding. Please let me know if
                        you need anything further from me.
                      </p>
                      <p className="mt-2">
                        Best regards,
                        <br />
                        Priya Sharma
                      </p>
                    </div>
                  </div>
                  <div className="bg-fog rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Phrases that fit
                    </p>
                    <p className="text-xs text-slate">
                      <strong>Greeting:</strong> Dear [First Name], · Hello [Name],
                      · Dear Mr./Ms. [Name],
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Open:</strong> I hope you are doing well. · I wanted
                      to reach out about… · I am writing to…
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Close:</strong> Could you please… · Thank you so much
                      for your help. · Best regards, · Kind regards,
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* INFORMAL */}
            <div className={`formality-card ${formality === "informal" ? "" : "hidden"}`}>
              <div className="bg-white rounded-2xl border border-mist overflow-hidden">
                <div className="bg-amber2 px-6 py-4">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
                    Informal Email
                  </p>
                  <p className="text-sm text-white">
                    For a friend, family member, or close colleague. Relaxed and
                    friendly — contractions and casual phrases are fine. Still
                    organized.
                  </p>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Fill-in template
                    </p>
                    <div className="bg-fog rounded-xl p-4 text-sm text-ink leading-relaxed space-y-2 font-mono text-[13px]">
                      <p>
                        Hi <span className="text-amber2">[First Name]</span>,
                      </p>
                      <p>
                        How are you?{" "}
                        <span className="text-amber2">
                          [Friendly opener — Hope you're doing great! / It's been a while!]
                        </span>{" "}
                        I'm writing to{" "}
                        <span className="text-amber2">
                          [reason — tell you about / ask you / invite you]
                        </span>
                        .
                      </p>
                      <p>
                        <span className="text-amber2">
                          [Give the details casually.]
                        </span>{" "}
                        Also, <span className="text-amber2">[second point]</span>.{" "}
                        <span className="text-amber2">
                          [Add a personal touch or feeling.]
                        </span>
                      </p>
                      <p>
                        Let me know{" "}
                        <span className="text-amber2">
                          [what you need / if you can make it]
                        </span>
                        ! Can't wait to hear back from you.{" "}
                        <span className="text-amber2">
                          [Take care! / Talk soon!]
                        </span>
                      </p>
                      <p>
                        Cheers,
                        <br />
                        <span className="text-amber2">[Your Name]</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Worked example (invitation)
                    </p>
                    <div className="bg-amber2-light rounded-xl p-4 text-sm text-ink leading-relaxed italic">
                      <p>Hi Marcus,</p>
                      <p className="mt-2">
                        How have you been? It feels like ages since we last caught
                        up! I'm writing because I'm throwing a small barbecue at my
                        place on Saturday, June 20th, and I'd love for you to come.
                      </p>
                      <p className="mt-2">
                        It's nothing fancy — just a few friends, some good food, and
                        hopefully decent weather for once. I'm planning to fire up
                        the grill around 4 p.m., so feel free to drop by whenever
                        works for you. Also, my neighbour is bringing his guitar, so
                        it should be a fun, relaxed evening.
                      </p>
                      <p className="mt-2">
                        Let me know if you can make it, and bring someone along if
                        you'd like! Can't wait to catch up properly. Take care and
                        talk soon.
                      </p>
                      <p className="mt-2">
                        Cheers,
                        <br />
                        Leo
                      </p>
                    </div>
                  </div>
                  <div className="bg-fog rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                      Phrases that fit
                    </p>
                    <p className="text-xs text-slate">
                      <strong>Greeting:</strong> Hi [Name], · Hey [Name], · Hello [Name],
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Open:</strong> How are you? · Hope you're doing well! ·
                      It's been a while! · I'm writing because…
                    </p>
                    <p className="text-xs text-slate mt-1">
                      <strong>Close:</strong> Let me know! · Can't wait to hear back.
                      · Take care, · Talk soon, · Cheers,
                    </p>
                    <p className="text-xs text-amber2-dark mt-2">
                      <strong>Note:</strong> Even informal emails should still be
                      organized and address the prompt — don't use slang or
                      text-speak ("u", "thx", "lol").
                    </p>
                  </div>
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
                <p className="text-sm font-semibold text-ink mb-1">{word.word}</p>
                <p className="text-xs text-slate mb-2">{word.meaning}</p>
                <p className="text-xs text-sapphire italic">"{word.example}"</p>
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
          CELPIP Prep — Writing Task 1 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Master professional email writing. Practice with realistic scenarios,
          follow the structure, and let your professional tone shine through.
        </p>
      </footer>
    </>
  );
}
