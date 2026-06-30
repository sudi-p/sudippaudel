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

export default function CelpipSpeakingTask8Page() {
  const [activeTab, setActiveTab] = useState("overview");
  const [vocabFilter, setVocabFilter] = useState("All");
  const [tipFilter, setTipFilter] = useState("all");

  useEffect(() => {
    document.title = "CELPIP Speaking — Task 8 Study Guide";
  }, []);

  const task8Words = useMemo(() => VOCAB.filter((v) => v.task === "8"), []);
  const vocabTypes = useMemo(
    () => ["All", ...new Set(task8Words.map((v) => v.type))],
    [task8Words],
  );
  const filteredVocab =
    vocabFilter === "All"
      ? task8Words
      : task8Words.filter((v) => v.type === vocabFilter);

  const filteredTips =
    tipFilter === "all" ? TIPS : TIPS.filter((t) => t.category === tipFilter);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Speaking · Task 8 of 8
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Describe an unusual{" "}
            <span className="hero-line italic">situation</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            You're shown a strange or unexpected image. Describe it vividly to
            someone who can't see it — then ask them a specific question.
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
              You are shown an{" "}
              <strong>
                image of an unusual or unexpected situation, object, or scene
              </strong>
              , and asked to call a friend or family member to describe it —
              because they cannot see it. The prompt always ends with a specific
              request. For example:{" "}
              <em className="text-steel">
                "You are in a furniture store and you see an unusual bed you'd
                like to buy, but you can't take a photo. Telephone a family
                member, describe the bed in detail, and ask whether you should
                buy it."
              </em>
            </p>
            <p className="text-base leading-relaxed text-ink mt-3">
              The examiner is testing how clearly and vividly you can{" "}
              <strong>paint a picture with words</strong>: a strong overview,
              organized spatial detail, precise vocabulary, and a natural closing
              question. You have <strong>30 seconds to prepare</strong> and{" "}
              <strong>60 seconds to speak</strong>.
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
              How examiners score Task 8 on a 12-point scale. Vivid description
              and clear spatial organization are the key indicators of a high
              score.
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
                The listener <strong>can't see the image</strong> — so your job
                is to make them picture it. Lead with an overview, move through
                the scene in a logical order, use vivid words, point out what's
                unusual, and finish with the question from the prompt. That's what
                scores high.
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
            A 3-part framework for describing an unusual image to someone who
            can't see it — overview, vivid detail, then the question from the
            prompt.
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
                    Setup &amp; Overview
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Greet the person, explain why you're calling, and give a
              single-sentence overview so they know what to picture before you
              dive into detail.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "Hi [name], I'm calling because I'm looking at [the unusual thing]
                right now, and it's the strangest thing I've ever seen. Let me
                describe it — it's basically [one-line overview of what it is and
                its size/shape]."
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
                "Hi Mom, I'm calling from the furniture store because I've found
                the most unusual bed and I can't take a photo. It's a single bed,
                but the whole frame and mattress are curved into the shape of a
                person lying on their side."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Address the listener
                directly ("Hi Mom," "Hey George")
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Give the overview
                first — what is it, roughly how big, what shape
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Signal that it's
                unusual ("the strangest thing," "you won't believe this")
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
                    Detailed Description
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~35 seconds · the core of your response
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              <strong>The heart of your response.</strong> Walk through the image
              in a logical order so the listener can build the picture in their
              mind. Move from the most prominent feature to the smaller details,
              and point out what makes it unusual.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "On the left/in the centre, there's [main feature]. Next to it /
                behind it, you can see [detail]. What makes it really unusual is
                [the odd part]. It's [colour/material/texture], and it looks like
                [comparison]."
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
                "The frame is made of pale wood with a soft grey mattress on top.
                Instead of being flat, it dips and curves so your body slots into
                it perfectly — there's even a hollow for your head and a raised
                section for your knees. What makes it really unusual is that you
                can only sleep on your left side; there's no way to lie on your
                back."
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Use spatial language:
                "on the left," "in the centre," "towards the back"
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Describe colour,
                material, size, and shape with precise adjectives
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Use present continuous
                for any actions: "the players are wearing..."
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Highlight the unusual
                part and, if you can, guess why it exists
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
                    Closing Question
                  </span>
                  <span className="text-xs text-slate ml-2">~10 seconds</span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Finish by asking the{" "}
              <strong>specific question stated in the prompt</strong> — whether
              you should buy it, whether they'd want to try it, what they think it
              is. Then close the call naturally.
            </p>
            <div className="bg-fog rounded-xl p-4">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                Template
              </p>
              <p className="text-sm text-ink italic leading-relaxed">
                "So, what do you think — [the question from the prompt]? Let me
                know soon because [reason / time pressure]. Talk to you in a bit!"
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
                "So, do you think I should actually buy it? It's a bit pricey, and
                I know it's strange, but it looks incredibly comfortable. Let me
                know quickly because the store closes in 20 minutes. Thanks, talk
                soon!"
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-ink">
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Ask the exact question
                the prompt requires — don't forget this
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>Add a quick reason or
                time pressure to make it sound real
              </li>
              <li className="flex gap-2">
                <span className="text-gold shrink-0">✦</span>End naturally — a
                short sign-off, not an abrupt stop
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
                    full 60-second responses · Setup → Description → Question
                  </span>
                </div>
              </div>
            }
          >
            <p className="text-sm text-slate">
              Task 8 always shows an <strong>unusual image</strong>. For each
              scenario below, an <strong>image prompt</strong> is included so you
              can generate the picture, then practise describing it to someone who
              can't see it and ask the closing question. The{" "}
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
                  <strong>Prompt:</strong> {sample.prompt}
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
                        Setup:
                      </span>{" "}
                      "{renderTemplate(sample.setup, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Description:
                      </span>{" "}
                      "{renderTemplate(sample.description, TEMPLATE_PHRASES)}"
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Question:
                      </span>{" "}
                      "{renderTemplate(sample.question, TEMPLATE_PHRASES)}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Accordion>

          {/* Description Language Toolkit */}
          <Accordion
            bodyClassName="space-y-6"
            header={
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Description Language Toolkit
                </span>
              </div>
            }
          >
            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-sapphire">
                Opening &amp; Overview (Setting the Scene)
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Opening Lines
                  </p>
                  <p className="text-sm text-ink italic">
                    "Hi [name], you won't believe what I'm looking at..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "I'm calling because I've just seen the strangest thing..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Let me describe it since you can't see it..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Giving the Overview
                  </p>
                  <p className="text-sm text-ink italic">
                    "Basically, it's a [thing] about the size of [comparison]."
                  </p>
                  <p className="text-sm text-ink italic">
                    "At first glance it looks like [X], but..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "The whole thing is roughly [shape/size]."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-emerald2">
                Spatial Language (Guiding the Listener)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Position &amp; Location
                  </p>
                  <p className="text-sm text-ink italic">
                    "On the left / on the right / in the centre..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "In the foreground / towards the back..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "At the top / along the bottom / in the corner..."
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate mb-1">
                    Connecting Details
                  </p>
                  <p className="text-sm text-ink italic">
                    "Next to it / beside that / right above..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Behind it / in front of / surrounding it..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Attached to / sitting on top of..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-amber2">
                Describing Shape, Size, Material & Colour
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Shape & Size
                  </p>
                  <p className="text-sm text-ink italic">
                    "It's curved / contoured / cylindrical..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Roughly [X] metres tall / wide..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "About the size of a [comparison]..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Material & Texture
                  </p>
                  <p className="text-sm text-ink italic">
                    "Made of pale wood / brushed metal / glass..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It has a smooth / glossy / matte finish..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "The surface looks soft / sleek / textured..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">Colour</p>
                  <p className="text-sm text-ink italic">
                    "A vibrant / muted / deep shade of..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "Bright yellow / pale grey / dark green..."
                  </p>
                </div>
                <div className="bg-fog rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate mb-1">
                    Comparisons
                  </p>
                  <p className="text-sm text-ink italic">
                    "It looks like a giant [X]..."
                  </p>
                  <p className="text-sm text-ink italic">
                    "It reminds me of [familiar object]..."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-rose2">
                Upgrade Basic Adjectives (Level 9 Words)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink">
                  <strong>Big</strong> → sizable, massive, enormous, colossal
                </p>
                <p className="text-sm text-ink">
                  <strong>Pretty / nice</strong> → stunning, striking, exquisite,
                  eye-catching
                </p>
                <p className="text-sm text-ink">
                  <strong>Interesting</strong> → fascinating, intriguing,
                  captivating, peculiar
                </p>
                <p className="text-sm text-ink">
                  <strong>Strange</strong> → bizarre, unusual, quirky,
                  one-of-a-kind
                </p>
                <p className="text-sm text-ink">
                  <strong>Good</strong> → superb, impressive, remarkable,
                  well-made
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-violet2">
                Pointing Out What's Unusual & Speculating
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-2">
                <p className="text-sm text-ink italic">
                  "What makes it really unusual is..."
                </p>
                <p className="text-sm text-ink italic">
                  "The strangest part is that..."
                </p>
                <p className="text-sm text-ink italic">
                  "I've never seen anything quite like it..."
                </p>
                <p className="text-sm text-ink italic">
                  "I think it might be for [purpose]..."
                </p>
                <p className="text-sm text-ink italic">
                  "My guess is that it's used to..."
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink mb-3 text-gold">
                Closing Question (Don't Forget This!)
              </p>
              <div className="bg-fog rounded-lg p-4 space-y-3">
                <p className="text-xs font-semibold text-slate mb-2">
                  Always end with the exact request from the prompt
                </p>
                <p className="text-sm text-ink italic">
                  "So, what do you think — should I buy it?"
                </p>
                <p className="text-sm text-ink italic">
                  "Would you be interested in trying it sometime?"
                </p>
                <p className="text-sm text-ink italic">
                  "Have you ever heard of anything like this?"
                </p>
                <p className="text-xs font-semibold text-slate mt-3">
                  Key Principle:
                </p>
                <p className="text-sm text-ink italic">
                  The listener can't see the image, so describe it in a logical
                  order and use vivid words — but never forget to ask the specific
                  question the prompt requires. Missing the question costs you
                  marks.
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
          CELPIP Prep — Speaking Task 8 Study Guide
        </p>
        <p className="text-xs text-slate/60">
          Describe the unusual image so vividly that the listener can picture it
          without seeing it. Lead with an overview, move through the scene in a
          logical order, use precise vocabulary, and always finish with the
          question from the prompt.
        </p>
      </footer>
    </>
  );
}
