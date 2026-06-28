// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask2Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 2 Study Guide";

    // Vocab bank rendering for Task 2
    function initializeVocabBank() {
      const vocabFilters = document.getElementById("vocab-filters");
      const vocabContent = document.getElementById("vocab-content");

      if (!vocabFilters) return;

      // Get unique types for task 2
      const task2Words = window.VOCAB.filter((v) => v.task === "2");
      const types = ["all", ...new Set(task2Words.map((v) => v.type))];

      // Create filter buttons
      types.forEach((type) => {
        const btn = document.createElement("button");
        btn.className = `vocab-filter-btn ${type === "all" ? "filter-active" : "filter-inactive"} px-4 py-1.5 rounded-full border text-xs font-medium`;
        btn.textContent = type === "all" ? "All Words" : type;
        btn.dataset.vocabType = type;

        btn.addEventListener("click", () => {
          vocabFilters.querySelectorAll(".vocab-filter-btn").forEach((b) => {
            b.classList.remove("filter-active");
            b.classList.add("filter-inactive");
          });
          btn.classList.add("filter-active");
          btn.classList.remove("filter-inactive");
          renderVocabWords(type);
        });

        vocabFilters.appendChild(btn);
      });

      // Initial render
      renderVocabWords("all");
    }

    function renderVocabWords(filterType) {
      const vocabContent = document.getElementById("vocab-content");
      let filtered = window.VOCAB.filter((v) => v.task === "2");

      if (filterType !== "all") {
        filtered = filtered.filter((v) => v.type === filterType);
      }

      vocabContent.innerHTML = filtered
        .map(
          (word) => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2"><strong>Meaning:</strong> ${word.meaning}</p>
              <p class="text-xs text-slate italic"><strong>Example:</strong> "${word.example}"</p>
              <span class="inline-block mt-3 text-xs font-medium text-emerald2 bg-emerald2-light px-2 py-1 rounded">${word.type}</span>
            </div>
          `,
        )
        .join("");
    }

    // Tab and pane management
    const tabBtns = document.querySelectorAll(".tab-btn");
    const panes = document.querySelectorAll(".pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabName = btn.getAttribute("data-tab");
        tabBtns.forEach((b) => {
          b.classList.remove("tab-active");
          b.classList.add("tab-inactive");
        });
        btn.classList.add("tab-active");
        btn.classList.remove("tab-inactive");
        panes.forEach((pane) => pane.classList.remove("active"));
        document.getElementById(`pane-${tabName}`).classList.add("active");
      });
    });

    // Accordion functionality
    const accordionTriggers = document.querySelectorAll(".accordion-trigger");
    accordionTriggers.forEach((trigger) => {
      if (trigger.dataset.accordionBound) return;
      trigger.dataset.accordionBound = "1";
      trigger.addEventListener("click", () => {
        const targetId = trigger.getAttribute("data-target");
        const body = document.getElementById(targetId);
        const chevron = trigger.querySelector(".chevron");
        body.classList.toggle("open");
        chevron.classList.toggle("rotated");
      });
    });

    // Tips filtering (Pro Tips section only)
    const tipPane = document.getElementById("pane-tips");
    if (tipPane) {
      const tipFilterBtns = tipPane.querySelectorAll(".filter-btn");
      const tipCards = tipPane.querySelectorAll(".tip-card");

      tipFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.getAttribute("data-category");
          tipFilterBtns.forEach((b) => {
            b.classList.remove("filter-active");
            b.classList.add("filter-inactive");
          });
          btn.classList.add("filter-active");
          btn.classList.remove("filter-inactive");

          tipCards.forEach((card) => {
            if (
              category === "all" ||
              card.getAttribute("data-category") === category
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    }

    // Mobile menu toggle
    const navbarBurger = document.getElementById("navbar-burger");
    const navbarMenu = document.getElementById("navbar-menu");
    navbarBurger?.addEventListener("click", () => {
      navbarMenu?.classList.toggle("hidden");
    });

    // Auth button placeholders (would integrate with actual auth system)
    const authBtns = document.querySelectorAll(
      "#nav-auth-btn, #nav-auth-btn-mobile",
    );
    authBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Sign in functionality would be integrated here");
      });
    });

    // Initialize vocab bank on page load
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeVocabBank);
    } else {
      initializeVocabBank();
    }
  }, []);

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
          <button
            data-tab="overview"
            className="tab-btn tab-active  px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            Overview
          </button>
          <button
            data-tab="qtypes"
            className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            Question Types
          </button>
          <button
            data-tab="structure"
            className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            My Template
          </button>
          <button
            data-tab="vocab"
            className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            Vocab Bank
          </button>
          <button
            data-tab="tips"
            className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            Pro Tips
          </button>
        </div>

        {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
        <div id="pane-overview" className="pane active space-y-5">
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
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">
                  Fluency
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Smooth, natural delivery with minimal hesitation. Filler words
                  like "um" or "uh" signal low fluency.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">
                  Grammar
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Accurate sentence structure and tense control. Complex
                  sentences show range; simple errors cost points.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">
                  Vocabulary
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Word choice that fits the topic and shows range. Repetition
                  (saying the same word over and over) is a red flag.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">
                  Coherence
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Your story has a clear beginning, middle, and end. Ideas
                  connect logically; transitions are smooth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ink rounded-2xl p-6 text-fog">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              The 90-second blueprint
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-sm">1</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold">
                    Opening (20s)
                  </p>
                  <p className="text-xs text-fog/80">
                    Name the event, when it happened, why it mattered
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-fog text-sm">2</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-fog">Body (50s)</p>
                  <p className="text-xs text-fog/80">
                    Describe one key moment with sensory details; show emotion
                    shift
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-sm">3</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold">
                    Closing (20s)
                  </p>
                  <p className="text-xs text-fog/80">
                    Reflect on what you learned or how it changed you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring bands */}
          <p className="text-sm text-slate pt-2">
            How examiners score Task 2 on a 12-point scale. The bands below show
            typical language for each score tier.
          </p>

          <div className="space-y-3">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-ink">
                  Score 10–12 (Advanced)
                </p>
                <span className="font-display text-xl text-emerald2">●</span>
              </div>
              <div className="space-y-2 text-sm text-slate">
                <p>
                  <strong>Fluency:</strong> Speaks naturally with very few
                  pauses or filler words. Rhythm is conversational.
                </p>
                <p>
                  <strong>Grammar:</strong> Consistent use of complex sentences
                  with minimal errors. Tense control is secure.
                </p>
                <p>
                  <strong>Vocabulary:</strong> Precise word choice; shows range
                  and avoids repetition. Phrasal verbs or advanced collocations
                  appear naturally.
                </p>
                <p>
                  <strong>Coherence:</strong> Story flows seamlessly.
                  Transitions feel organic, not forced. Clear cause-and-effect.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-ink">
                  Score 7–9 (Upper-Intermediate)
                </p>
                <span className="font-display text-xl text-amber2">●</span>
              </div>
              <div className="space-y-2 text-sm text-slate">
                <p>
                  <strong>Fluency:</strong> Mostly fluent with occasional pauses
                  to think. Some filler words but not excessive.
                </p>
                <p>
                  <strong>Grammar:</strong> Mostly accurate; some complex
                  sentences mixed with simple ones. Minor errors don't disrupt
                  meaning.
                </p>
                <p>
                  <strong>Vocabulary:</strong> Good range; some attempt at less
                  common words. Occasional repetition of key terms.
                </p>
                <p>
                  <strong>Coherence:</strong> Story is organized and easy to
                  follow. Transitions are present but sometimes basic ("and
                  then," "so").
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-ink">
                  Score 4–6 (Intermediate)
                </p>
                <span className="font-display text-xl text-rose2">●</span>
              </div>
              <div className="space-y-2 text-sm text-slate">
                <p>
                  <strong>Fluency:</strong> Noticeable pauses; some filler
                  words. May lose thread of thought mid-sentence.
                </p>
                <p>
                  <strong>Grammar:</strong> Mix of simple and complex
                  structures; some errors in tense or agreement. Meaning is
                  usually clear.
                </p>
                <p>
                  <strong>Vocabulary:</strong> Basic vocabulary; frequent
                  repetition. Limited range; mostly high-frequency words.
                </p>
                <p>
                  <strong>Coherence:</strong> Story is present but may jump
                  around. Transitions are weak or missing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-ink">
                  Score 1–3 (Below Intermediate)
                </p>
                <span className="font-display text-xl text-slate">●</span>
              </div>
              <div className="space-y-2 text-sm text-slate">
                <p>
                  <strong>Fluency:</strong> Frequent hesitation; heavy reliance
                  on filler words or silence. Choppy delivery.
                </p>
                <p>
                  <strong>Grammar:</strong> Frequent errors in basic structures
                  (subject-verb, tense). Meaning is sometimes unclear.
                </p>
                <p>
                  <strong>Vocabulary:</strong> Very limited; heavy repetition.
                  Mostly basic, everyday words only.
                </p>
                <p>
                  <strong>Coherence:</strong> Story is disjointed or incomplete.
                  Difficult to follow the narrative thread.
                </p>
              </div>
            </div>
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
        <div id="pane-qtypes" className="pane space-y-4">
          <p className="text-sm text-slate">
            All Task 2 prompts fall into 6 question categories. Each demands a
            slightly different angle, emotional register, and vocabulary set.
            Master all six and no prompt will catch you off guard.
          </p>

          {/* ── CATEGORY 1: ACHIEVEMENT / PROUD MOMENT ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-1"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Achievement / Proud Moment
                  </span>
                  <span className="ml-2 text-xs text-emerald2 font-medium">
                    e.g. "Describe something you are proud of"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-1"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>"Describe a personal accomplishment you are proud of."</p>
                  <p>"Talk about a goal you worked hard to achieve."</p>
                  <p>"Describe a time you overcame a significant challenge."</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "persevere",
                      meaning: "to continue despite difficulty",
                      example:
                        "I had to persevere through months of setbacks before I succeeded.",
                    },
                    {
                      word: "milestone",
                      meaning: "an important achievement or turning point",
                      example:
                        "Finishing my first marathon was a major milestone in my life.",
                    },
                    {
                      word: "tenacity",
                      meaning: "determination and persistence",
                      example:
                        "It was pure tenacity that got me through the final exam period.",
                    },
                    {
                      word: "gratifying",
                      meaning: "giving pleasure or satisfaction",
                      example:
                        "Hearing the audience applaud was deeply gratifying.",
                    },
                    {
                      word: "accomplished",
                      meaning:
                        "successfully completed; also used as an adjective for skilled",
                      example:
                        "I finally felt accomplished after years of hard work.",
                    },
                    {
                      word: "setback",
                      meaning: "a reversal or check in progress",
                      example:
                        "Every setback taught me something valuable about resilience.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "A few years ago, I decided to run my first half-marathon —
                    something I'd told myself I'd do since my twenties but kept
                    putting off. I wasn't a runner at all; I could barely jog
                    for ten minutes straight when I started training. The
                    milestone I remember most is the final stretch of the race.
                    My legs were burning, and I could hear my own breathing
                    louder than the crowd. But then I rounded the last corner
                    and saw the finish line, and something just clicked — I
                    pushed through. Crossing that line, I felt a wave of
                    accomplishment I hadn't expected. It was the most gratifying
                    moment I'd had in years. That race taught me that I can
                    persevere through discomfort if the goal matters to me. Now,
                    whenever a work challenge feels overwhelming, I think back
                    to those last two hundred meters."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CATEGORY 2: CHALLENGE / DIFFICULT EXPERIENCE ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-2"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-rose2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Challenge / Difficult Experience
                  </span>
                  <span className="ml-2 text-xs text-rose2 font-medium">
                    e.g. "Describe a time you faced a difficulty"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-2"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>
                    "Describe a difficult situation you faced and how you dealt
                    with it."
                  </p>
                  <p>"Talk about a time things did not go as planned."</p>
                  <p>
                    "Describe a time you made a mistake and what you learned
                    from it."
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "overwhelming",
                      meaning: "very intense, hard to cope with",
                      example:
                        "The pressure of deadlines felt completely overwhelming at first.",
                    },
                    {
                      word: "resilience",
                      meaning: "ability to recover quickly from difficulties",
                      example:
                        "That year tested my resilience in ways I didn't expect.",
                    },
                    {
                      word: "cope with",
                      meaning: "to deal with something difficult",
                      example:
                        "I had to find new strategies to cope with the situation.",
                    },
                    {
                      word: "pivotal",
                      meaning: "of crucial importance; a turning point",
                      example:
                        "That failure turned out to be a pivotal moment in my career.",
                    },
                    {
                      word: "in hindsight",
                      meaning:
                        "looking back on a past event with new understanding",
                      example:
                        "In hindsight, I wish I had asked for help sooner.",
                    },
                    {
                      word: "come to terms with",
                      meaning: "to accept a difficult reality",
                      example:
                        "It took months to come to terms with the decision I had made.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "During my final year of university, I failed an important
                    exam that I had been counting on to boost my average. I
                    remember walking out of that exam hall and feeling the
                    weight of every hour I hadn't studied. It was genuinely
                    overwhelming — I sat in a coffee shop for an hour just
                    staring at the ceiling. But after that, I made a decision to
                    cope with the setback head-on. I met with my professor,
                    figured out where my understanding had broken down, and
                    restructured how I studied entirely. I retook the paper two
                    months later and passed with distinction. In hindsight, that
                    failure was a pivotal turning point — it forced me to build
                    real study habits instead of relying on last-minute
                    cramming. I came to terms with the fact that I'd been
                    overconfident, and honestly, that lesson has been more
                    valuable than most things I learned in university."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CATEGORY 3: MEMORABLE PLACE / TRAVEL ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Memorable Place / Travel
                  </span>
                  <span className="ml-2 text-xs text-sapphire font-medium">
                    e.g. "Describe a place that was meaningful to you"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-3"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>
                    "Describe a place you visited that left a strong impression
                    on you."
                  </p>
                  <p>"Talk about a trip that was particularly meaningful."</p>
                  <p>
                    "Describe a place from your childhood that you remember
                    fondly."
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "serene",
                      meaning: "calm, peaceful, and untroubled",
                      example:
                        "The valley at dawn was completely serene — not a sound except the river.",
                    },
                    {
                      word: "awe-inspiring",
                      meaning: "filling someone with wonder",
                      example:
                        "Standing at the edge of the canyon was truly awe-inspiring.",
                    },
                    {
                      word: "remote",
                      meaning: "far from civilization; isolated",
                      example:
                        "The village was so remote that there was no cell signal for miles.",
                    },
                    {
                      word: "bustling",
                      meaning: "full of activity and energy",
                      example:
                        "The market was bustling with vendors and locals by midmorning.",
                    },
                    {
                      word: "nostalgia",
                      meaning: "a sentimental longing for the past",
                      example:
                        "Visiting my hometown filled me with nostalgia for simpler times.",
                    },
                    {
                      word: "immersed in",
                      meaning: "deeply absorbed or surrounded by",
                      example:
                        "I felt completely immersed in the local culture within days.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "A few years ago I visited a small coastal village in
                    Portugal — a place I almost didn't go to because it was so
                    remote that it wasn't on any of the usual tourist lists. The
                    moment I arrived, I understood why people kept it quiet. The
                    village was perched on cliffs above the Atlantic, and in the
                    early morning everything was completely serene — just the
                    sound of waves and the smell of salt in the air. I remember
                    sitting outside a tiny café with an espresso, watching
                    fishing boats come in, and feeling fully immersed in a pace
                    of life I'd forgotten existed. There was no agenda, no
                    Wi-Fi, nothing urgent. That morning filled me with a kind of
                    nostalgia for slowness — for what life felt like before
                    everything became so connected. I came home craving more of
                    that stillness, and since then I've made a point of taking
                    at least one trip a year to somewhere deliberately off the
                    beaten path."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CATEGORY 4: IMPORTANT PERSON / RELATIONSHIP ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-violet2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Important Person / Relationship
                  </span>
                  <span className="ml-2 text-xs text-violet2 font-medium">
                    e.g. "Describe someone who influenced you"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-4"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>
                    "Describe a person who has had a significant influence on
                    your life."
                  </p>
                  <p>"Talk about someone you admire and explain why."</p>
                  <p>
                    "Describe a time when someone helped you through a difficult
                    period."
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "mentor",
                      meaning: "an experienced person who advises and guides",
                      example:
                        "My professor became an unexpected mentor during my final year.",
                    },
                    {
                      word: "instill",
                      meaning:
                        "to gradually introduce a quality or value into someone",
                      example:
                        "She instilled in me a deep respect for honest work.",
                    },
                    {
                      word: "selfless",
                      meaning: "putting others' needs before one's own",
                      example:
                        "His selfless dedication to the community was inspiring.",
                    },
                    {
                      word: "profound impact",
                      meaning: "a deep and significant effect",
                      example:
                        "Her advice had a profound impact on how I approach problems.",
                    },
                    {
                      word: "look up to",
                      meaning: "to admire and respect someone",
                      example:
                        "I've always looked up to my older sister for her courage.",
                    },
                    {
                      word: "invaluable",
                      meaning: "extremely useful; beyond price",
                      example:
                        "Her guidance was invaluable when I was starting my career.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "The person who has had the most profound impact on how I
                    work is my first manager at my job out of university. I was
                    twenty-three and genuinely overconfident, and she could see
                    that immediately. What I remember most is a specific meeting
                    — I'd presented an idea I was really proud of, and she
                    waited until everyone else left the room, then quietly said,
                    'That was good. Now tell me what you'd do if it fails.' I
                    didn't have an answer. She became an invaluable mentor from
                    that point on — not because she was warm and encouraging,
                    but because she was honest in a way that was genuinely rare.
                    She instilled in me the habit of thinking two steps ahead
                    and owning my mistakes before they became someone else's
                    problem. I've looked up to her ever since. Even now, when
                    I'm making a big decision, I ask myself what she would ask
                    me — and nine times out of ten, it's a harder question than
                    the one I was already thinking about."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CATEGORY 5: LIFE-CHANGING DECISION / EVENT ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  5
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Life-Changing Decision / Event
                  </span>
                  <span className="ml-2 text-xs text-amber2 font-medium">
                    e.g. "Describe a decision that changed your life"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-5"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>
                    "Describe an important decision you made and how it affected
                    your life."
                  </p>
                  <p>"Talk about a turning point in your life."</p>
                  <p>"Describe an unexpected event that changed your plans."</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "turning point",
                      meaning: "a time when a decisive change occurs",
                      example:
                        "Moving to Canada was the turning point that shaped my entire career.",
                    },
                    {
                      word: "leap of faith",
                      meaning: "an act of trusting without proof",
                      example:
                        "Quitting my stable job was a genuine leap of faith.",
                    },
                    {
                      word: "weigh the options",
                      meaning: "to carefully consider the choices available",
                      example:
                        "I spent weeks trying to weigh the options before I committed.",
                    },
                    {
                      word: "irreversible",
                      meaning: "not able to be undone",
                      example:
                        "I knew the decision was largely irreversible, which made it harder.",
                    },
                    {
                      word: "shaped who I am",
                      meaning: "strongly influenced one's identity",
                      example:
                        "That experience shaped who I am in ways I'm still discovering.",
                    },
                    {
                      word: "take the plunge",
                      meaning: "to decide to do something difficult or risky",
                      example:
                        "Eventually I just had to take the plunge and commit.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "About four years ago, I made a decision that I was
                    genuinely terrified about — I left a stable, well-paying job
                    to move to a different city and start fresh in a field I'd
                    never formally worked in. It felt irreversible and,
                    honestly, reckless. I remember spending weeks trying to
                    weigh the options, going back and forth in my head every
                    night. But there was a moment — I was sitting at my desk at
                    the old job, staring at a spreadsheet I didn't care about at
                    all, and I thought: if I'm this bored at twenty-seven, what
                    does forty-five look like? That was the turning point. I
                    took the plunge. The first six months were harder than I
                    expected — I had to rebuild credibility from scratch and
                    earn trust I'd had for years at my old place. But I was
                    engaged in a way I hadn't been in years. That decision
                    shaped who I am now more than anything else I've done as an
                    adult. I'd do it again without question."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CATEGORY 6: CELEBRATION / SPECIAL EVENT ── */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="qt-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  6
                </span>
                <div>
                  <span className="text-sm font-semibold text-ink">
                    Celebration / Special Event
                  </span>
                  <span className="ml-2 text-xs text-gold font-medium">
                    e.g. "Describe a memorable celebration"
                  </span>
                </div>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="qt-6"
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Typical Prompts
                </p>
                <div className="bg-fog rounded-lg p-3 space-y-1 text-sm text-ink italic">
                  <p>
                    "Describe a memorable celebration or special event from your
                    past."
                  </p>
                  <p>
                    "Talk about a family tradition or event that is meaningful
                    to you."
                  </p>
                  <p>
                    "Describe a moment when you celebrated with people you care
                    about."
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                  Key Vocabulary
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    {
                      word: "cherish",
                      meaning: "to hold something dear; to treasure it",
                      example:
                        "I still cherish the photographs from that evening.",
                    },
                    {
                      word: "festive atmosphere",
                      meaning: "a joyful, celebratory mood or setting",
                      example: "The whole room had a warm, festive atmosphere.",
                    },
                    {
                      word: "momentous",
                      meaning: "of great importance or significance",
                      example:
                        "It was a momentous occasion for our entire family.",
                    },
                    {
                      word: "overcome with emotion",
                      meaning:
                        "to feel a strong emotion suddenly and intensely",
                      example:
                        "When they called my name, I was overcome with emotion.",
                    },
                    {
                      word: "mark the occasion",
                      meaning:
                        "to do something special to celebrate or remember an event",
                      example:
                        "We went out for dinner to mark the occasion properly.",
                    },
                    {
                      word: "reminisce",
                      meaning: "to think or talk about past experiences fondly",
                      example:
                        "We spent the whole evening reminiscing about old times.",
                    },
                  ].map((v) => (
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
                  <p className="text-sm leading-relaxed italic">
                    "One of the most momentous evenings I can remember is my
                    parents' twenty-fifth wedding anniversary. My siblings and I
                    had planned the whole thing in secret — a dinner at a
                    restaurant near the water, with family flying in from three
                    different cities. The moment that stands out most is when my
                    parents walked in and saw everyone there. My mother put her
                    hand over her mouth. She was completely overcome with
                    emotion, and honestly so was I — I hadn't realized until
                    that moment how rarely we were all together. The room had
                    this warm, festive atmosphere — fairy lights, old
                    photographs on the tables, music playing from their wedding
                    year. We stayed for four hours, just reminiscing, laughing
                    at old stories I'd never heard. I still cherish that night.
                    It reminded me that the most meaningful things in life are
                    almost never the big planned milestones — they're the
                    evenings where everyone you love is in the same room."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary card */}
          <div className="bg-fog rounded-2xl p-5 mt-2">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              Quick Reference — All 6 Categories
            </p>
            <div className="grid md:grid-cols-3 gap-2">
              {[
                { num: "1", label: "Achievement", color: "text-emerald2" },
                { num: "2", label: "Challenge", color: "text-rose2" },
                { num: "3", label: "Memorable Place", color: "text-sapphire" },
                { num: "4", label: "Important Person", color: "text-violet2" },
                {
                  num: "5",
                  label: "Life-Changing Decision",
                  color: "text-amber2",
                },
                { num: "6", label: "Celebration / Event", color: "text-gold" },
              ].map((c) => (
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
        <div id="pane-structure" className="pane space-y-4">
          <p className="text-sm text-slate">
            A 3-part structure to internalize — not a word-for-word script.
          </p>

          {/* Part 1: Opening */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-1"
            >
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
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="struct-1"
              className="accordion-body border-t border-mist px-6 py-5 space-y-4"
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
                  Example openings
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "A few years back, I did something I'd been putting off for
                  years — I went on a solo road trip up the coast."
                </p>
                <p className="text-sm text-ink italic leading-relaxed mt-2">
                  "There's one weekend from university I still think about — the
                  time I almost dropped out, but decided to stay."
                </p>
              </div>
            </div>
          </div>

          {/* Part 2: Body */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-2"
            >
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
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="struct-2"
              className="accordion-body border-t border-mist px-6 py-5 space-y-4"
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
                  Sensory detail examples
                </p>
                <div className="space-y-1 text-sm text-ink italic">
                  <p>"The air smelled like pine and rain."</p>
                  <p>"The crowd noise was physically overwhelming."</p>
                  <p>"My hands were shaking as I reached the summit."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Closing */}
          <div
            className="bg-white rounded-2xl border border-mist overflow-hidden"
            style={{ marginBottom: "2rem" }}
          >
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-3"
            >
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
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="struct-3"
              className="accordion-body border-t border-mist px-6 py-5 space-y-4"
            >
              <p className="text-sm text-slate">
                Land the story cleanly with a personal takeaway. Don't trail off
                — finish strong.
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
                  Example closings
                </p>
                <div className="space-y-1 text-sm text-ink italic">
                  <p>
                    "Looking back, that trip showed me I'm more capable than I
                    thought."
                  </p>
                  <p>
                    "It wasn't easy, but I came out more confident — and I'd do
                    it again."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Scenario Examples */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-examples"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Complete Personal Experience Examples
                </span>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="struct-examples"
              className="accordion-body border-t border-mist px-6 py-5 space-y-6"
            >
              <div className="border-l-3 border-sapphire pl-4">
                <p className="text-sm font-semibold text-ink mb-3">
                  Example 1: Overcoming Fear
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Opening:</strong> "A few years ago, I decided to take
                  a solo backpacking trip through Southeast Asia for three
                  months. I'd never traveled alone before, and honestly, I was
                  terrified."
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Body:</strong> "The first week was in Thailand. I
                  remember walking through Bangkok's night market at dusk — the
                  smell of grilled seafood was everywhere, and the crowd noise
                  was physically overwhelming. My hands were shaking as I tried
                  to navigate the streets with just a map. But then this street
                  vendor noticed I was lost and helped me find my hostel. After
                  that moment, something shifted. I realized people were
                  genuinely kind, and I could handle being uncomfortable."
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "That trip taught me I'm braver than
                  I thought. I came home knowing I could handle anything, and
                  I've since traveled to ten more countries. I wouldn't trade
                  that experience for anything."
                </p>
              </div>

              <div className="border-l-3 border-emerald2 pl-4">
                <p className="text-sm font-semibold text-ink mb-3">
                  Example 2: Learning a Skill
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Opening:</strong> "Last year, I decided to learn
                  guitar even though I had no musical background whatsoever. My
                  brother had left his old guitar at my place, and one day I
                  just picked it up."
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Body:</strong> "The first month was frustrating. My
                  fingers would hurt after just ten minutes of practice, and the
                  strings buzzed when I played chords. I wanted to give up. But
                  then one afternoon, I sat down and played 'Wonderwall' all the
                  way through for the first time. I remember my heart racing and
                  my hands trembling with excitement. That moment changed
                  everything because it showed me that persistence actually
                  works."
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "Now I play three times a week, and
                  I'm learning more complex songs. It's taught me that you don't
                  need talent to start — you just need patience. If I could go
                  back, I'd tell my younger self to stick with it."
                </p>
              </div>

              <div className="border-l-3 border-amber2 pl-4">
                <p className="text-sm font-semibold text-ink mb-3">
                  Example 3: A Memorable Celebration
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Opening:</strong> "One night that still stands out is
                  my grandmother's 80th birthday party. The whole extended
                  family came from different cities — we hadn't all been
                  together in five years."
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Body:</strong> "We had dinner at her favorite
                  restaurant by the riverside. The moment I'll never forget is
                  when the waiter brought out the cake — it was shaped like a
                  lotus flower, her favorite flower. My grandmother's eyes
                  actually teared up. The room went silent for a moment, and
                  then everyone started clapping and singing. I could smell
                  jasmine flowers on the table and taste the sweetness of the
                  cake when we cut it together. But what hit me most was seeing
                  her surrounded by people who loved her, laughing and telling
                  old stories."
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "That night made me realize how
                  precious those moments are. I'm so grateful I was there, and
                  now I make sure to visit her every month."
                </p>
              </div>

              <div className="border-l-3 border-rose2 pl-4">
                <p className="text-sm font-semibold text-ink mb-3">
                  Example 4: An Unexpected Decision
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Opening:</strong> "During my second year of
                  university, I had a scholarship to study engineering. But
                  halfway through the semester, I realized I hated it. So I made
                  a big decision — I switched to studying environmental science
                  instead."
                </p>
                <p className="text-sm text-slate italic mb-2">
                  <strong>Body:</strong> "The day I told my parents, I was so
                  anxious. I could feel my stomach twisting as I made the call.
                  But to my surprise, my father said, 'If you're not happy,
                  change it. Life is too short to spend it doing something you
                  don't believe in.' That moment lifted this huge weight off my
                  shoulders. I'd been so worried about disappointing him that I
                  hadn't even considered what I actually wanted. The switch was
                  tough — I had to retake some classes — but suddenly, going to
                  class didn't feel like a burden anymore."
                </p>
                <p className="text-sm text-slate italic">
                  <strong>Closing:</strong> "That decision was scary at the
                  time, but it was exactly right. Now I work for an
                  environmental NGO, and I couldn't imagine a different path. It
                  taught me to listen to my gut."
                </p>
              </div>
            </div>
          </div>

          {/* Storytelling & Personal Experience Language Toolkit */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-toolkit"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Storytelling & Personal Experience Language Toolkit
                </span>
              </div>
              <svg
                className="chevron w-4 h-4 text-slate"
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
            </button>
            <div
              id="struct-toolkit"
              className="accordion-body border-t border-mist px-6 py-5 space-y-6"
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
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: VOCAB BANK
          ══════════════════════════════════════════ */}
        <div id="pane-vocab" className="pane space-y-4">
          <div id="vocab-filters" className="flex flex-wrap gap-2"></div>
          <div id="vocab-content" className="space-y-4"></div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: PRO TIPS
          ══════════════════════════════════════════ */}
        <div id="pane-tips" className="pane space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className="filter-btn filter-active px-4 py-1.5 rounded-full border text-xs font-medium"
              data-category="all"
            >
              All
            </button>
            <button
              className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium"
              data-category="prep"
            >
              Prep
            </button>
            <button
              className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium"
              data-category="delivery"
            >
              Delivery
            </button>
            <button
              className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium"
              data-category="language"
            >
              Language
            </button>
            <button
              className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium"
              data-category="mistakes"
            >
              Mistakes
            </button>
          </div>

          <div className="space-y-3">
            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="prep"
            >
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                Prep
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Don't memorize — outline instead.
              </p>
              <p className="text-xs text-slate">
                During prep, scribble 3–4 key words for each part (opening
                event, key moment detail, closing reflection). Then speak from
                those cues, not from memory. Examiners can tell.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="prep"
            >
              <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">
                Prep
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Pick a story you know well.
              </p>
              <p className="text-xs text-slate">
                If you're thinking hard about whether something happened or
                when, your fluency suffers. Choose an experience you've already
                told friends about multiple times.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="delivery"
            >
              <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">
                Delivery
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Speak as if you're telling a friend, not an examiner.
              </p>
              <p className="text-xs text-slate">
                Overly formal language signals nervousness. Talk naturally. "I
                was like..." or "So anyway..." are fine — better than stilted
                phrasing.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="delivery"
            >
              <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">
                Delivery
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Pause &gt; filler words.
              </p>
              <p className="text-xs text-slate">
                A 2-second silence while you think is better than "um" or "uh."
                Examiners know you're gathering thoughts. Filler suggests you're
                losing control.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="language"
            >
              <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">
                Language
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                One strong sensory detail beats five vague ones.
              </p>
              <p className="text-xs text-slate">
                "The air smelled like pine and rain" is worth more than "it was
                nice and quiet and peaceful." Specific → fluent.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="language"
            >
              <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">
                Language
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Show, don't tell.
              </p>
              <p className="text-xs text-slate">
                Instead of "I was really nervous," say "My heart was pounding as
                I stepped forward." Specific language shows grammar range.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="mistakes"
            >
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                Mistakes
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Don't stop or correct yourself.
              </p>
              <p className="text-xs text-slate">
                If you misspeak or notice a grammar error, keep going. Stopping
                to say "wait, I meant..." signals anxiety. Examiners understand
                imperfection.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="mistakes"
            >
              <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">
                Mistakes
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Avoid "I want to talk about..." opening.
              </p>
              <p className="text-xs text-slate">
                Jump straight into the story: "A few years back, I..." This
                signals confidence and uses time efficiently.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="mistakes"
            >
              <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">
                Mistakes
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Don't finish early and go silent.
              </p>
              <p className="text-xs text-slate">
                If you run out of ideas, add one more detail to a key moment or
                expand your reflection. 90 seconds should feel natural, not
                rushed or cut short.
              </p>
            </div>
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
