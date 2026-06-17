// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask6Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 6 Study Guide";

    function initializeVocabBank() {
      const filterContainer = document.getElementById("vocab-filters");
      const contentContainer = document.getElementById("vocab-content");

      if (!window.VOCAB) return;

      const taskVocab = window.VOCAB.filter((v) => v.task === "6");
      const types = ["All", ...new Set(taskVocab.map((v) => v.type))];

      filterContainer.innerHTML = types
        .map(
          (type) =>
            `<button class="vocab-filter-btn ${type === "All" ? "filter-active" : "filter-inactive"} px-4 py-1.5 rounded-full border text-xs font-medium" data-type="${type}">${type}</button>`,
        )
        .join("");

      renderVocabWords("All");

      const vocabFilterBtns =
        filterContainer.querySelectorAll(".vocab-filter-btn");
      vocabFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          vocabFilterBtns.forEach((b) => {
            b.classList.remove("filter-active");
            b.classList.add("filter-inactive");
          });
          btn.classList.add("filter-active");
          btn.classList.remove("filter-inactive");
          const type = btn.getAttribute("data-type");
          renderVocabWords(type);
        });
      });
    }

    function renderVocabWords(filterType) {
      const contentContainer = document.getElementById("vocab-content");

      if (!window.VOCAB) return;

      const taskVocab = window.VOCAB.filter((v) => v.task === "6");
      const filtered =
        filterType === "All"
          ? taskVocab
          : taskVocab.filter((v) => v.type === filterType);

      contentContainer.innerHTML = filtered
        .map(
          (word) => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-amber2 italic">"${word.example}"</p>
            </div>
          `,
        )
        .join("");
    }

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

    const navbarBurger = document.getElementById("navbar-burger");
    const navbarMenu = document.getElementById("navbar-menu");
    navbarBurger?.addEventListener("click", () => {
      navbarMenu?.classList.toggle("hidden");
    });

    const authBtns = document.querySelectorAll(
      "#nav-auth-btn, #nav-auth-btn-mobile",
    );
    authBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Sign in functionality would be integrated here");
      });
    });

    initializeVocabBank();
  }, []);

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
            Choose between two options, then speak directly to a person —
            deliver tough news politely, validate their feelings, and offer a
            solution.
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
          <button
            data-tab="overview"
            className="tab-btn tab-active  px-5 py-2 rounded-full border text-sm font-medium transition-all"
          >
            Overview
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
              This is a <strong>role-play</strong>, not an essay. The examiner
              is testing whether you can deliver bad news or resolve a conflict{" "}
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
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">
                  Tone
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Politeness and tact. You speak to a real person, so warmth,
                  empathy, and soft modals (would, could, might) are essential.
                  "More words = more polite."
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">
                  Task
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  You clearly choose one option, address the right person,
                  deliver the news, and propose a solution. Don't sit on the
                  fence.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">
                  Coherence
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  A logical flow: greeting → validate their view → deliver the
                  news → offer a solution → close. Easy to follow.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">
                  Grammar
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  Accurate conditionals and polite request structures. Varied,
                  complex sentences add sophistication.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ink rounded-2xl p-6 text-fog">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              The 60-second blueprint
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-sm">1</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold">
                    Greeting &amp; Situation (15s)
                  </p>
                  <p className="text-xs text-fog/80">
                    Greet the person warmly, signal it's important, and briefly
                    set up the situation
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-fog text-sm">2</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-fog">
                    Empathize &amp; Deliver (25s)
                  </p>
                  <p className="text-xs text-fog/80">
                    Validate their feelings, then gently deliver your decision
                    (the option you chose)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-sm">3</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold">
                    Solution &amp; Close (20s)
                  </p>
                  <p className="text-xs text-fog/80">
                    Offer a compromise or alternative, then close persuasively
                    and warmly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring — folded in from the old Scoring tab */}
          <div className="bg-white rounded-2xl border border-mist p-6">
            <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
              How you are scored
            </p>
            <p className="text-sm text-slate">
              How examiners score Task 6 on a 12-point scale. A polite tone and
              a clear, well-handled decision matter most.
            </p>

            <div className="space-y-3 mt-4">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">
                    Score 10–12 (Advanced)
                  </p>
                  <span className="font-display text-xl text-emerald2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p>
                    <strong>Tone:</strong> Consistently warm, tactful, and
                    indirect. Soft modals and empathy throughout; never blunt.
                  </p>
                  <p>
                    <strong>Task:</strong> Clearly chooses one option, addresses
                    the right person, delivers the news, and offers a strong
                    solution.
                  </p>
                  <p>
                    <strong>Coherence:</strong> Greeting → validation → news →
                    solution → close flows naturally and is easy to follow.
                  </p>
                  <p>
                    <strong>Grammar:</strong> Confident conditionals and polite
                    structures. Varied, complex sentences.
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
                    <strong>Tone:</strong> Generally polite with some soft
                    modals, though a few phrasings may sound a little direct.
                  </p>
                  <p>
                    <strong>Task:</strong> Chooses an option and offers a
                    solution, though one step (validation or compromise) may be
                    thin.
                  </p>
                  <p>
                    <strong>Coherence:</strong> Logical and mostly easy to
                    follow; transitions may be basic.
                  </p>
                  <p>
                    <strong>Grammar:</strong> Mostly accurate; minor errors in
                    conditionals don't impede meaning.
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
                    <strong>Tone:</strong> Often too direct or blunt. Few soft
                    modals; may sound like a command rather than a polite
                    request.
                  </p>
                  <p>
                    <strong>Task:</strong> The choice or the solution is
                    unclear, or the response doesn't sound like talking to a
                    real person.
                  </p>
                  <p>
                    <strong>Coherence:</strong> Some structure, but the flow
                    jumps around or skips steps.
                  </p>
                  <p>
                    <strong>Grammar:</strong> Errors in conditionals and tense;
                    meaning sometimes unclear.
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
                    <strong>Tone:</strong> Abrupt or impolite. No softening; may
                    sound rude or confusing.
                  </p>
                  <p>
                    <strong>Task:</strong> No clear option chosen, no real
                    solution, or doesn't address a person at all.
                  </p>
                  <p>
                    <strong>Coherence:</strong> Disjointed or very brief. Hard
                    to follow.
                  </p>
                  <p>
                    <strong>Grammar:</strong> Frequent errors. Meaning is often
                    unclear.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
                Key insight
              </p>
              <p className="text-sm text-ink">
                This task rewards{" "}
                <strong>tact, not problem-solving genius</strong>. You're
                talking to a real person and delivering news they won't love —
                so validate their feelings, soften everything with "would /
                could / might," choose one option clearly, and offer a fair
                compromise. Being polite and indirect scores higher than being
                efficient.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
        <div id="pane-structure" className="pane space-y-4">
          <p className="text-sm text-slate">
            A 3-part framework for the role-play — choose one option, then
            deliver the news politely and offer a solution. Remember:{" "}
            <strong>more words = more polite.</strong>
          </p>

          {/* Part 1 */}
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
                    Greeting &amp; Situation
                  </span>
                  <span className="text-xs text-slate ml-2">~15 seconds</span>
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
                Greet the person warmly by name, signal that you have something
                important and a little delicate to discuss, and briefly set up
                the situation.
              </p>
              <div className="bg-fog rounded-xl p-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Template
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "Hi [name], hope you're doing well. Listen, I have something a
                  bit delicate to talk to you about regarding [situation] — do
                  you have a minute?"
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
                  "Hi Sam, hope you're doing well. Listen, I wanted to talk to
                  you about your plan to stay at my place for the summer —
                  there's something a bit delicate I need to share, so do you
                  have a moment?"
                </p>
              </div>
              <ul className="space-y-1.5 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>Address the
                  person by name and greet them warmly
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>Signal
                  seriousness gently ("something a bit delicate")
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>Set up the
                  situation in one sentence — don't over-explain yet
                </li>
              </ul>
            </div>
          </div>

          {/* Part 2 */}
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
                  <span className="text-sm font-semibold text-ink">
                    Empathize &amp; Deliver the News
                  </span>
                  <span className="text-xs text-slate ml-2">
                    ~25 seconds · the core of your response
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
                <strong>The heart of your response.</strong> First validate
                their feelings and show you understand their side. Then gently
                deliver your decision — the option you chose — softened with
                modals and an apology.
              </p>
              <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold text-sapphire-dark mb-2">
                  Politeness patterns:
                </p>
                <ul className="space-y-1 text-xs text-sapphire-dark">
                  <li>
                    • Validate first: "I know you were really hoping to..., and
                    I completely understand why..."
                  </li>
                  <li>
                    • Soften the news: "Unfortunately," "I'm afraid," "I really
                    wish I could, but..."
                  </li>
                  <li>
                    • Use soft modals: <strong>would, could, might</strong> —
                    never "you must" or "you have to"
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
                  "I know you were really excited to stay with me for two
                  months, and I completely understand it would help you save
                  money while you job-hunt. However, I'm afraid my lease doesn't
                  allow guests to stay longer than three days, and my roommate
                  and I could risk eviction."
                </p>
              </div>
              <ul className="space-y-1.5 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>Always validate
                  their feelings before the bad news
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>State clearly
                  which option you chose — don't be vague
                </li>
                <li className="flex gap-2">
                  <span className="text-gold shrink-0">✦</span>Give a brief,
                  genuine reason for your decision
                </li>
              </ul>
            </div>
          </div>

          {/* Part 3 */}
          <div
            className="bg-white rounded-2xl border border-mist overflow-hidden"
            style={{ marginBottom: "2rem" }}
          >
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-3"
            >
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
                Offer a concrete compromise or alternative so you're not just
                saying "no." Then close gently, seeking agreement without
                inviting an argument.
              </p>
              <div className="bg-fog rounded-xl p-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  Template
                </p>
                <p className="text-sm text-ink italic leading-relaxed">
                  "I think the best way forward would be to [solution]. I'd be
                  happy to [your offer]. I really hope you can see where I'm
                  coming from, and [warm sign-off]."
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
                  "I think the best approach would be to find you an affordable
                  place nearby, and I'd be happy to help cover your first week.
                  That way you'll have somewhere comfortable without putting our
                  lease at risk. I really hope you understand — I can't wait to
                  see you soon!"
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
                  <span className="text-gold shrink-0">✦</span>Avoid "What do
                  you think?" — it invites a counter-argument
                </li>
              </ul>
            </div>
          </div>

          {/* Sample Answers — two-option role-plays, each with an image prompt */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-examples"
            >
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
              className="accordion-body border-t border-mist px-6 py-5 space-y-5"
            >
              <p className="text-sm text-slate">
                Each scenario gives you <strong>two options</strong> — pick one
                (usually the harder, more responsible choice) and speak directly
                to the person. Task 6 is text-only on the real test, but an{" "}
                <strong>image prompt</strong> is included so you can picture the
                situation while you practise.
              </p>

              {/* Sample 1: Cousin's stay */}
              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">
                  Scenario 1 · Cousin's extended stay
                </p>
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> Your cousin wants to stay at your
                  apartment for two months while job-hunting, but your lease
                  bans long-term guests. <strong>Option A:</strong> ask your
                  roommate to make an exception ·{" "}
                  <strong>Option B (chosen):</strong> tell your cousin she can't
                  stay, and help her find another place.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer (speaking to your cousin, Sam)
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "Hi Sam, hope you're doing well! Listen, I wanted to talk
                      to you about your plan to stay with me this summer —
                      there's something a bit delicate I need to share."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "I know you were really excited about it, and I completely
                      understand it would help you save money while you look for
                      a job. However, I'm afraid my lease doesn't allow guests
                      to stay longer than three days, and my roommate and I
                      could actually risk eviction if we broke that rule."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "So I think the best approach would be to find you an
                      affordable hostel or sublet nearby, and I'd be more than
                      happy to help cover your first week. That way you'd have a
                      comfortable place without putting us at risk. I really
                      hope you understand — I can't wait to see you soon!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample 2: Noisy roommate */}
              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest">
                  Scenario 2 · A noisy roommate
                </p>
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> Your roommate plays loud music
                  late at night and you have important exams this week.{" "}
                  <strong>Option A (chosen):</strong> talk to your roommate
                  directly · <strong>Option B:</strong> complain to the
                  landlord.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer (speaking to your roommate, Alex)
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "Hey Alex, do you have a quick minute? There's something
                      small I wanted to gently bring up, and I hope it's okay to
                      chat about it."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "First off, I love that you're into your music, and I'd
                      never want to stop you enjoying it. The thing is, I've got
                      really important exams this week, and the music late at
                      night has been making it hard for me to sleep and focus."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "I was wondering if we could maybe agree to keep things a
                      bit quieter after, say, ten on weeknights — or you could
                      use headphones during exam season? I'd really appreciate
                      it, and of course I'll do the same for you when you've got
                      deadlines. Thanks so much for understanding!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample 3: Coworker leaving early */}
              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest">
                  Scenario 3 · A coworker leaving early
                </p>
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> A coworker often leaves early and
                  asks you to cover their work, which is becoming too much.{" "}
                  <strong>Option A (chosen):</strong> talk to the coworker first
                  · <strong>Option B:</strong> report it to your manager.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer (speaking to your coworker, Jordan)
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "Hi Jordan, could I grab you for a moment? There's
                      something I've been meaning to raise with you, and I'd
                      rather talk to you about it directly than let it build
                      up."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "I completely understand you've had a lot going on lately,
                      and I've been glad to help out when I can. The thing is,
                      covering your tasks on top of my own has started to get a
                      bit overwhelming, and I'm worried it might affect the
                      quality of both our work."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "I was thinking maybe we could split the workload more
                      evenly, or you could let me know in advance on the days
                      you need to leave early so we can plan around it together.
                      I'd really like for us to find something that works for
                      both of us. Thanks so much for hearing me out!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample 4: Broken borrowed item */}
              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest">
                  Scenario 4 · A damaged borrowed camera
                </p>
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> You borrowed your friend's camera
                  for a trip and accidentally cracked the lens.{" "}
                  <strong>Option A (chosen):</strong> tell your friend honestly
                  and offer to fix it · <strong>Option B:</strong> quietly get
                  it repaired and say nothing.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer (speaking to your friend, Maya)
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "Hi Maya, hope you're well. Listen, I have something a
                      little awkward to tell you about the camera you kindly
                      lent me, and I wanted to be upfront about it."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "I know how much that camera means to you, and I'm
                      genuinely sorry — while I was on the trip, it slipped and
                      the lens got cracked. I feel terrible about it, and I take
                      full responsibility."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "I'd really like to make it right, so I'd be happy to pay
                      for a professional repair, or replace the lens entirely if
                      that's easier for you. Just let me know what you'd prefer.
                      Again, I'm so sorry, and thank you for being
                      understanding."
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample 5: Cancelling a trip */}
              <div className="bg-fog rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest">
                  Scenario 5 · Cancelling a planned trip
                </p>
                <p className="text-sm text-slate">
                  <strong>Situation:</strong> You planned a weekend trip with a
                  friend, but a work emergency means you have to cancel.{" "}
                  <strong>Option A (chosen):</strong> call your friend and
                  explain · <strong>Option B:</strong> ask the travel agency to
                  reschedule and decide later.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                    Sample answer (speaking to your friend, Chris)
                  </p>
                  <div className="text-sm text-ink italic leading-relaxed space-y-2">
                    <p>
                      <span className="not-italic font-semibold text-sapphire">
                        Greeting:
                      </span>{" "}
                      "Hey Chris, do you have a sec? I really hate to bring this
                      up, because I know how much we've both been looking
                      forward to this weekend."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-emerald2">
                        Empathize &amp; deliver:
                      </span>{" "}
                      "I completely understand if you're disappointed — I am
                      too. Unfortunately, an urgent issue has come up at work
                      that I just can't get out of, so I'm afraid I won't be
                      able to make our trip this weekend."
                    </p>
                    <p>
                      <span className="not-italic font-semibold text-amber2">
                        Solution &amp; close:
                      </span>{" "}
                      "I'd love to reschedule for the following weekend if that
                      works for you, and I'm happy to sort out changing the
                      bookings and cover any rebooking fees. I really appreciate
                      your patience — let's lock in a new date soon. Thanks so
                      much for understanding!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polite Conflict Language Toolkit */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <button
              className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors"
              data-target="struct-toolkit"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">
                  Polite Conflict Language Toolkit
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
                  <p className="text-sm text-ink italic">
                    "Would it help if I...?"
                  </p>
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
                Pick one option in the first few seconds.
              </p>
              <p className="text-xs text-slate">
                You have 60 seconds to prepare. Choose one of the two options
                quickly (usually the harder, more responsible one) and spend the
                rest planning how to say it kindly.
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
                Decide who you're speaking to.
              </p>
              <p className="text-xs text-slate">
                Each option usually means addressing a different person. Picture
                them by name and imagine you're really on the phone — it makes
                your tone far more natural.
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
                Validate their feelings before the bad news.
              </p>
              <p className="text-xs text-slate">
                "I know how much you were looking forward to this..." softens
                whatever comes next. Empathy first, decision second.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="language"
            >
              <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">
                Language
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                More words = more polite.
              </p>
              <p className="text-xs text-slate">
                Soften everything with "would," "could," "might," "I was
                wondering if..." Indirect phrasing sounds more respectful and
                scores higher on tone.
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
                Always offer a solution, not just a refusal.
              </p>
              <p className="text-xs text-slate">
                Saying "no" isn't enough. Propose a compromise — "I'd be happy
                to help you find..." — so you leave the relationship intact.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="mistakes"
            >
              <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">
                Mistakes
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Don't sit on the fence.
              </p>
              <p className="text-xs text-slate">
                You must clearly commit to ONE option. Trying to do both, or
                staying vague, is one of the biggest score-killers on this task.
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
                Don't be blunt or commanding.
              </p>
              <p className="text-xs text-slate">
                Avoid "You must," "You have to," or "No, that won't work." These
                sound rude. Frame everything as a gentle request or suggestion.
              </p>
            </div>

            <div
              className="tip-card bg-white rounded-xl border border-mist p-4"
              data-category="delivery"
            >
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                Delivery
              </p>
              <p className="text-sm font-semibold text-ink mb-2">
                Close warmly — don't ask "What do you think?"
              </p>
              <p className="text-xs text-slate">
                End by seeking agreement ("I hope you understand") and a
                friendly sign-off. Asking their opinion invites a
                counter-argument you won't have time to handle.
              </p>
            </div>
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
          the news gently, and offer a solution. Examiners reward tact and
          warmth — more words mean more polite.
        </p>
      </footer>
    </>
  );
}
