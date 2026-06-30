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
  SAMPLE_ANSWERS,
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

export default function CelpipSpeakingTask5Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 5 Study Guide";
  }, []);

  const task5Words = useMemo(() => VOCAB.filter((v) => v.task === "5"), []);
  const vocabTypes = useMemo(
    () => ["All", ...new Set(task5Words.map((v) => v.type))],
    [task5Words],
  );
  const filteredVocab =
    vocabFilter === "All"
      ? task5Words
      : task5Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 5 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Compare &amp; <span className="hero-line italic">persuade</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            You're shown two options with pictures and details. Choose one, then
            persuade a specific person why your pick is the better choice.
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
              You are shown{" "}
              <strong>two options as pictures with written details</strong>{" "}
              (prices, features), and you must <strong>choose one</strong> and
              then <strong>persuade a specific person</strong> — a friend, family
              member, or colleague — that your choice is the better one. For
              example:{" "}
              <em className="text-steel">
                "Your family is buying a birthday gift. Choose between a tablet
                ($300) and a smartwatch ($100), and persuade your friend John why
                your choice is better."
              </em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              It runs in <strong>two parts</strong>: first you get{" "}
              <strong>60 seconds to compare the options and choose</strong> (no
              speaking), then <strong>60 seconds to prepare</strong> and{" "}
              <strong>60 seconds to speak</strong>. The examiner is testing
              whether you can compare the options with comparative language and
              specific numbers, and persuade the person warmly and convincingly.
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
              How examiners score Task 5 on a 12-point scale. Strong comparison
              and a clear, persuasive choice matter most.
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
                The "right" option doesn't matter —{" "}
                <strong>how well you compare and persuade does</strong>. Pick one
                clearly, lead with price, use the actual numbers from the
                pictures, gently dismiss the other choice, and finish by asking
                the person to agree. Confident comparison beats perfect grammar.
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
            A 3-part framework for persuading a person to pick your option —
            greet them, compare price-first, and ask for their agreement.
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
                    Opening &amp; Soft Rejection
                  </span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Greet the person by name, acknowledge the option they were leaning
              toward, then pivot to the one you've chosen. This "soft rejection"
              sounds collaborative, not pushy.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "Hi [name], I saw you were leaning toward [their option]. I
                understand why, but I actually think [your option] is the better
                choice for us."
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
                "Hi John, I saw you suggested the tablet for his birthday. I get
                why — it has a big screen — but I really think the smartwatch is
                the better choice."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Address the person
                directly by name
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Acknowledge their
                option before pivoting ("I understand why, but...")
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>State your choice
                clearly — no fence-sitting
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
                    Compare 2–3 Points
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~40 seconds · the core of your response
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>The heart of your response.</strong> Compare your choice
              against theirs on 2–3 points. <strong>Lead with price</strong>,
              then value/usefulness, then one specific detail — always using the
              actual numbers from the pictures.
            </p>
            <div className="bg-sapphire-light rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-sapphire-dark mb-2">
                Comparison order that works:
              </p>
              <ul className="space-y-1 text-xs text-sapphire-dark">
                <li>
                  • <strong>Price first:</strong> "Mine costs $100, which is much
                  cheaper than the $300 option."
                </li>
                <li>
                  • <strong>Value:</strong> why your option's feature matters for
                  this person/situation
                </li>
                <li>
                  • <strong>One detail:</strong> a final concrete advantage to
                  seal it
                </li>
              </ul>
            </div>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "First, regarding price, [your option] costs [X], which is much
                cheaper than [their option] at [Y]. Also, it [key benefit], which
                is more useful because [reason]. Finally, [one specific detail]."
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
                "First, the smartwatch only costs a hundred dollars — that's much
                cheaper than the tablet at three hundred, so we'd save money for
                the party. Also, it has fitness tracking, which is more useful
                since he loves running. Finally, it's water-resistant, so it'll
                last far longer than the tablet."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Always start with
                price and use the exact numbers shown
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Use comparatives:
                "cheaper," "more durable," "much more useful"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Compare directly
                against their option, not in isolation
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
                    Conclusion &amp; Ask for Agreement
                  </span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Restate your choice, sum up the strongest reason, and finish by
              gently asking the person to agree with you.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "So for these reasons, I really think we should go with [your
                option]. Let me know if you agree!"
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
                "So for those reasons, I really think the smartwatch is the
                smarter pick — it's cheaper and more practical. Let me know if you
                agree, and we can order it today!"
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Restate your choice —
                stay committed to the end
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Sum up your strongest
                reason in a few words
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Close by asking for
                agreement ("Let me know if you agree")
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
                    full persuasions · Opening → Compare → Ask for agreement
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Task 5 always shows{" "}
              <strong>two options as pictures with details</strong>. For each
              scenario below, an{" "}
              <strong>image prompt is included for both options</strong> so you
              can generate the pair, choose one, and practise persuading the
              person. The{" "}
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
                <p className="text-xs text-slate">
                  <strong>Options:</strong> {sample.options}{" "}
                  <strong>Chosen:</strong> {sample.chosen}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[sample.optionA, sample.optionB].map((opt) => (
                    <div
                      key={opt.label}
                      className="bg-white rounded-lg border border-mist p-4"
                    >
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                        {opt.label}
                      </p>
                      <p className="text-sm text-ink italic leading-relaxed">
                        "{opt.prompt}"
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Opening:
                      </span>{" "}
                      "{renderTemplate(sample.opening, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Compare:
                      </span>{" "}
                      "{renderTemplate(sample.compare, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Conclusion:
                      </span>{" "}
                      "{renderTemplate(sample.conclusion, TEMPLATE_PHRASES)}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Accordion>

          {/* Comparison & Persuasion Language Toolkit */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Comparison & Persuasion Language Toolkit
                </span>
              </div>
            }
          >
            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-sapphire">
                Comparison Language (Critical for Task 5)
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    More/Less + Adjective
                  </p>
                  <p className="text-sm text-ink italic">
                    "This is more cost-effective than..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's less time-consuming than..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Option A is more environmentally friendly..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    -er/-est Comparative Forms
                  </p>
                  <p className="text-sm text-ink italic">
                    "This option is cheaper than that one."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's faster, easier, and cleaner."
                  </p>
                  <p className="text-sm text-ink italic">
                    "The cheapest choice would be..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Much / Significantly / Far
                  </p>
                  <p className="text-sm text-ink italic">
                    "This is MUCH cheaper than..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's FAR more reliable..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "The difference is SIGNIFICANTLY greater..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    ❌ AVOID "More Cheaper"
                  </p>
                  <p className="text-sm text-ink italic">
                    ✗ "This is more cheaper"
                  </p>
                  <p className="text-sm text-ink italic">
                    ✓ "This is cheaper" or "much cheaper"
                  </p>
                  <p className="text-sm text-ink italic">
                    ✓ "This is more cost-effective"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-emerald2">
                Reasoning Structures (Build Strong Arguments)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Value-for-money (Strongest Angle)
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's $200 cheaper and does everything we need, so we get
                    better value for our money."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Causal (Cause &amp; Effect)
                  </p>
                  <p className="text-sm text-ink italic">
                    "Because it's water-resistant, it'll last longer, which means
                    we won't have to replace it soon."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Fit-for-the-person (Why It Suits Them)
                  </p>
                  <p className="text-sm text-ink italic">
                    "Since he loves running, the fitness tracking is far more
                    useful for him than a bigger screen."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Numbers from the Pictures (Most Persuasive)
                  </p>
                  <p className="text-sm text-ink italic">
                    "Mine is $100 versus $300 — that's a 67% saving we can put
                    toward the party."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-amber2">
                Soft Rejection (Acknowledge Their Choice First)
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Acknowledge Their Option
                  </p>
                  <p className="text-sm text-ink italic">
                    "I saw you were leaning toward [their option]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I understand why you chose it, but..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "That's a good idea, however, to be honest..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Pivot to Yours
                  </p>
                  <p className="text-sm text-ink italic">
                    "...I actually think [my option] is better."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...looking at the bigger picture, mine wins."
                  </p>
                  <p className="text-sm text-ink italic">
                    "...the benefits far outweigh the drawbacks."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-rose2">
                Transition Phrases & Signposting
              </p>
              <div className="bg-fog rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate mb-2">
                      Starting Points
                    </p>
                    <p className="text-sm text-ink italic">
                      "First, regarding [topic]..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "Second, in terms of [topic]..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "Additionally, [new reason]..."
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate mb-2">
                      Introducing Examples
                    </p>
                    <p className="text-sm text-ink italic">
                      "For example, [specific case]..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "To illustrate, [concrete example]..."
                    </p>
                    <p className="text-sm text-ink italic">
                      "Research shows that [statistic]..."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3 text-violet2">
                Closing &amp; Asking for Agreement
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  "So for these reasons, I really think we should go with
                  [option]."
                </p>
                <p className="text-sm text-ink italic">"Let me know if you agree!"</p>
                <p className="text-sm text-ink italic">
                  "I hope you can see why [option] is the better pick."
                </p>
                <p className="text-sm text-ink italic">
                  "What do you say — shall we go with [option]?"
                </p>
                <p className="text-sm text-ink italic">
                  "I'm confident [option] is the smarter choice for us."
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
                <p className="text-xs text-violet2 italic">"{word.example}"</p>
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
          CELPIP Prep — Speaking Task 5 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Comparing and persuading is about one clear choice, well argued to a
          real person. Lead with price, use the numbers from the pictures,
          compare with confident comparatives, and finish by asking them to
          agree.
        </p>
      </footer>
    </>
  );
}
