// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipWritingTask2Page() {
  useEffect(() => {
    document.title = "CELPIP Writing — Task 2 Study Guide";

        function initializeVocabBank() {
          const filterContainer = document.getElementById('vocab-filters');
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === 'W2');
          const types = ['All', ...new Set(taskVocab.map(v => v.type))];

          filterContainer.innerHTML = types.map(type =>
            `<button class="vocab-filter-btn ${type === 'All' ? 'filter-active' : 'filter-inactive'} px-4 py-1.5 rounded-full border text-xs font-medium" data-type="${type}">${type}</button>`
          ).join('');

          renderVocabWords('All');

          const vocabFilterBtns = filterContainer.querySelectorAll('.vocab-filter-btn');
          vocabFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
              vocabFilterBtns.forEach(b => {
                b.classList.remove('filter-active');
                b.classList.add('filter-inactive');
              });
              btn.classList.add('filter-active');
              btn.classList.remove('filter-inactive');
              const type = btn.getAttribute('data-type');
              renderVocabWords(type);
            });
          });
        }

        function renderVocabWords(filterType) {
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === 'W2');
          const filtered = filterType === 'All' ? taskVocab : taskVocab.filter(v => v.type === filterType);

          contentContainer.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-emerald2 italic">"${word.example}"</p>
            </div>
          `).join('');
        }

        // Tab and pane management
        const tabBtns = document.querySelectorAll('.tab-btn');
        const panes = document.querySelectorAll('.pane');

        tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            tabBtns.forEach(b => {
              b.classList.remove('tab-active');
              b.classList.add('tab-inactive');
            });
            btn.classList.add('tab-active');
            btn.classList.remove('tab-inactive');
            panes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(`pane-${tabName}`).classList.add('active');
          });
        });

        // Accordion functionality
        const accordionTriggers = document.querySelectorAll('.accordion-trigger');
        accordionTriggers.forEach(trigger => {
          if (trigger.dataset.accordionBound) return;
          trigger.dataset.accordionBound = '1';
          trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            const body = document.getElementById(targetId);
            const chevron = trigger.querySelector('.chevron');
            body.classList.toggle('open');
            chevron.classList.toggle('rotated');
          });
        });

        // Tips filtering (scoped to tips pane only)
        const tipsPane = document.getElementById('pane-tips');
        if (tipsPane) {
          const tipFilterBtns = tipsPane.querySelectorAll('.filter-btn');
          const tipCards = tipsPane.querySelectorAll('.tip-card');

          tipFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
              const category = btn.getAttribute('data-category');
              tipFilterBtns.forEach(b => {
                b.classList.remove('filter-active');
                b.classList.add('filter-inactive');
              });
              btn.classList.add('filter-active');
              btn.classList.remove('filter-inactive');

              tipCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                  card.style.display = 'block';
                } else {
                  card.style.display = 'none';
                }
              });
            });
          });
        }

        // Mobile menu toggle
        const navbarBurger = document.getElementById('navbar-burger');
        const navbarMenu = document.getElementById('navbar-menu');
        navbarBurger?.addEventListener('click', () => {
          navbarMenu?.classList.toggle('hidden');
        });

        // Auth button placeholders (would integrate with actual auth system)
        const authBtns = document.querySelectorAll('#nav-auth-btn, #nav-auth-btn-mobile');
        authBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            alert('Sign in functionality would be integrated here');
          });
        });

        initializeVocabBank();
  
  }, []);

  return (
    <>


  

        {/* ─── HERO ─── */}
        <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="animate-fade-up">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Writing · Task 2 of 2</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Write a persuasive <span className="hero-line italic">essay</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Everything you need to score 9+ on Task 2 — structure, vocab, scoring rubric, practice prompts, and writing tips.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up" style={{animationDelay: '.1s'}}>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Word count</div>
              <div className="font-display text-3xl text-ink">180–199</div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Time allowed</div>
              <div className="font-display text-3xl text-ink">26 minutes</div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Score scale</div>
              <div className="font-display text-3xl text-ink">1–12</div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Target band</div>
              <div className="font-display text-3xl text-ink">10–12</div>
            </div>
          </div>
        </header>

        {/* ─── MAIN CONTENT ─── */}
        <main className="max-w-6xl mx-auto px-6 pb-24">

          {/* TAB BAR */}
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-up" style={{animationDelay: '.15s'}} id="tab-bar">
            <button data-tab="overview"  className="tab-btn tab-active  px-5 py-2 rounded-full border text-sm font-medium transition-all">Overview</button>
            <button data-tab="structure" className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">My Template</button>
            <button data-tab="vocab"     className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Vocab Bank</button>
            <button data-tab="tips"     className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Pro Tips</button>
          </div>

          {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
          <div id="pane-overview" className="pane active space-y-5">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">What the task involves</p>
              <p className="text-base leading-relaxed text-ink">You are asked to write a persuasive essay (180–199 words) taking a clear position on a controversial topic. You have <strong>26 minutes</strong> to plan, write, and revise.</p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to develop an argument, support claims with evidence, organize ideas logically, and demonstrate sophisticated grammar and vocabulary in an academic context.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Task Fulfillment</span>
                  <p className="text-sm leading-relaxed text-ink">Did you take a clear position? Is it 180-199 words? Did you support your argument with evidence?</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Is the essay organized logically? Do ideas flow from intro to conclusion with clear transitions?</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Academic register, varied word choice, and sophisticated transitions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Accurate sentence structure, varied syntax, and minimal errors.</p>
                </div>
              </div>
            </div>

            <div className="bg-ink rounded-2xl p-6 text-fog">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">The 4-paragraph structure</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Introduction (2–3 sentences)</p>
                    <p className="text-xs text-fog/80">Hook, context, and clear thesis statement taking a position</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2,3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Body Paragraphs (2 × 3–4 sentences)</p>
                    <p className="text-xs text-fog/80">Each supports the thesis with one main idea, evidence, and reasoning; the second adds an "Admittedly...However" concession</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">4</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Conclusion (2–3 sentences)</p>
                    <p className="text-xs text-fog/80">Restate thesis, summarize key points, end with a strong final thought</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-Built Arguments Framework: Practical vs. Human */}
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-1">Framework of pre-built arguments</p>
              <p className="font-display text-2xl text-ink mb-1">Practical 🛠️ vs. Human 🙂</p>
              <p className="text-sm text-slate mb-5 leading-relaxed">Most Task 2 prompts pit efficiency against people. Memorize this two-sided framework so you always have ready-made arguments for either position.</p>

              {/* Column headers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl bg-sapphire-light border border-sapphire/30 p-4">
                  <p className="text-sm font-semibold text-sapphire-dark">The Practical Side</p>
                  <p className="text-xs text-sapphire-dark/80">Efficiency, Modernity, Economy</p>
                </div>
                <div className="rounded-xl bg-emerald2-light border border-emerald2/30 p-4">
                  <p className="text-sm font-semibold text-emerald2-dark">The Human Side</p>
                  <p className="text-xs text-emerald2-dark/80">Well-being, Community, Tradition</p>
                </div>
              </div>

              {/* Core Value */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Core value</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink italic">"Doing things better / faster"</p></div>
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink italic">"Taking care of people"</p></div>
                </div>
              </div>

              {/* Common Arguments */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Common arguments</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-fog p-4">
                    <ul className="space-y-2 text-sm text-ink">
                      <li><span className="text-sapphire shrink-0">•</span> <strong>Cost-Effectiveness:</strong> Saves money for the company/taxpayers.</li>
                      <li><span className="text-sapphire shrink-0">•</span> <strong>Time-Saving:</strong> Modern systems reduce wait times.</li>
                      <li><span className="text-sapphire shrink-0">•</span> <strong>Productivity:</strong> Leads to higher output or better results.</li>
                      <li><span className="text-sapphire shrink-0">•</span> <strong>Innovation:</strong> Staying ahead of the curve and being "future-ready."</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-fog p-4">
                    <ul className="space-y-2 text-sm text-ink">
                      <li><span className="text-emerald2 shrink-0">•</span> <strong>Mental Health:</strong> Reduces stress and prevents burnout.</li>
                      <li><span className="text-emerald2 shrink-0">•</span> <strong>Inclusivity:</strong> Ensures everyone (seniors, kids, etc.) is included.</li>
                      <li><span className="text-emerald2 shrink-0">•</span> <strong>Work-Life Balance:</strong> Prioritizes family and personal time.</li>
                      <li><span className="text-emerald2 shrink-0">•</span> <strong>Social Connection:</strong> Strengthens community or team bonds.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example: Library */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example · Library</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink"><strong>Upgrading to E-books:</strong> More titles, less physical space, 24/7 access.</p></div>
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink"><strong>Keeping Librarians:</strong> Personalized help, a safe space for the community.</p></div>
                </div>
              </div>

              {/* Example: Work */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example · Work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink"><strong>Higher Salary:</strong> Provides financial security and motivation to work harder.</p></div>
                  <div className="rounded-xl bg-fog p-4"><p className="text-sm text-ink"><strong>Extra Day Off:</strong> Better rest leads to long-term loyalty and less turnover.</p></div>
                </div>
              </div>

              {/* Golden Keyword */}
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">The "golden" keyword</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-sapphire-light border border-sapphire/30 p-4 text-center"><p className="text-sm font-semibold text-sapphire-dark">Sustainability / Scalability</p></div>
                  <div className="rounded-xl bg-emerald2-light border border-emerald2/30 p-4 text-center"><p className="text-sm font-semibold text-emerald2-dark">Quality of Life / Equity</p></div>
                </div>
              </div>
            </div>

            {/* Scoring */}
            <p className="text-sm text-slate">How examiners score Task 2 on a 12-point scale. The bands below show typical essay characteristics at each level.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                  <span className="font-display text-xl text-emerald2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Task Fulfillment:</strong> Clear position taken. Word count 180–199. Well-developed argument with compelling evidence. Completed within time constraints.</p>
                  <p><strong>Coherence:</strong> Essay flows logically. Strong paragraph structure and transitions. Ideas build toward a conclusion.</p>
                  <p><strong>Vocabulary:</strong> Academic register throughout. Sophisticated transitions and persuasive language. Varied word choice.</p>
                  <p><strong>Grammar:</strong> Grammar and spelling are nearly perfect. Varied sentence structures demonstrate control.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                  <span className="font-display text-xl text-amber2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Task Fulfillment:</strong> Position is clear. Word count generally within range. Argument is supported but could be stronger.</p>
                  <p><strong>Coherence:</strong> Essay is organized and easy to follow. Most paragraphs have clear topic sentences. Some transitions present.</p>
                  <p><strong>Vocabulary:</strong> Generally academic tone. Some variety in word choice. Occasional repetition of key terms.</p>
                  <p><strong>Grammar:</strong> Grammar is mostly accurate. Minor errors present but don't disrupt meaning.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                  <span className="font-display text-xl text-rose2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Task Fulfillment:</strong> Position exists but may be unclear. Word count may be below range. Argument is basic and underdeveloped.</p>
                  <p><strong>Coherence:</strong> Essay structure exists but may lack clear organization. Transitions are basic or missing.</p>
                  <p><strong>Vocabulary:</strong> Some academic vocabulary but often basic. Limited variety. Repetitive word choice.</p>
                  <p><strong>Grammar:</strong> Several grammatical errors. Some spelling mistakes. Meaning is usually clear but sometimes unclear.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                  <span className="font-display text-xl text-slate">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Task Fulfillment:</strong> Position unclear or missing. Word count significantly below range. Minimal development of argument.</p>
                  <p><strong>Coherence:</strong> Organization is weak or absent. Difficult to follow. No clear paragraph structure.</p>
                  <p><strong>Vocabulary:</strong> Very basic vocabulary. Not academic in register. Heavy repetition.</p>
                  <p><strong>Grammar:</strong> Frequent and serious errors. Meaning is sometimes unclear.</p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
              <p className="text-sm text-ink">A 10–12 essay takes a clear position, develops it with two distinct arguments (the second reinforced by an "Admittedly...However" concession), and uses sophisticated language. It is well-organized and nearly error-free. It demonstrates persuasive writing with logical structure, good command of English, and efficient use of the 26-minute time frame. It is <strong>not</strong> perfect, and that's fine — what matters is that you deliver quality ideas concisely.</p>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate"><strong>Survey-Based Persuasive Essay:</strong> Choose ONE option (A or B), state your position clearly, and support with 2 strong reasons. Use the powerful "Admittedly...However..." strategy in your second point for advanced scoring.</p>

            {/* Supporting Argument Engine */}
            <div className="bg-ink rounded-2xl p-6 text-fog">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Idea generator</p>
              <p className="font-display text-2xl text-fog mb-1">Supporting Argument Engine</p>
              <p className="text-sm text-fog/80 mb-5 leading-relaxed">Stuck for ideas? Build any body paragraph by answering three quick questions in order. Each answer becomes one sentence — together they form a complete, well-developed reason.</p>

              <div className="space-y-3">
                <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2 text-white shrink-0">Stakeholders</span>
                    <span className="text-sm font-semibold text-fog">Who is affected?</span>
                  </div>
                  <p className="text-xs text-fog/70">Name the people who benefit — employees, customers, students, the community, taxpayers.</p>
                </div>
                <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2 text-white shrink-0">Possible Outcome</span>
                    <span className="text-sm font-semibold text-fog">What will happen?</span>
                  </div>
                  <p className="text-xs text-fog/70">State the positive result your choice creates — better management, higher morale, lasting value.</p>
                </div>
                <div className="bg-fog/10 rounded-xl p-4 border border-fog/15">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire text-white shrink-0">Realistic Details</span>
                    <span className="text-sm font-semibold text-fog">What detail to add?</span>
                  </div>
                  <p className="text-xs text-fog/70">Add a concrete, real-world example that makes the outcome believable and specific.</p>
                </div>
              </div>

              <div className="bg-fog rounded-xl p-4 mt-5">
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example paragraph using all 3 perspectives</p>
                <p className="text-sm text-ink italic leading-relaxed">"A cash bonus provides <span className="not-italic font-semibold text-rose2-dark">employees</span> with the flexibility to manage their unique financial needs, leading to <span className="not-italic font-semibold text-emerald2-dark">better financial management</span>. Unlike vacation days, which may go unused due to heavy workloads, a monetary payout offers <span className="not-italic font-semibold text-sapphire-dark">immediate support for goals like debt reduction or building savings</span>. This ensures the reward holds high value for every staff member, regardless of their lifestyle."</p>
              </div>
            </div>

            {/* Part 1: Introduction */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Introduction</span>
                    <span className="text-xs text-slate ml-2">2–3 sentences</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Hook the reader, provide context, and state your thesis clearly. Your thesis is your main argument.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Start with a hook:</strong> A question, statement, or statistic that grabs attention. "Should social media be regulated by governments?"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Provide background:</strong> 1–2 sentences explaining the issue and why it matters.</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>State your thesis:</strong> "I believe that social media platforms should be held legally accountable for user data privacy."</li>
                </ul>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example intro</p>
                  <p className="text-sm text-ink">"In today's digital world, social media companies collect vast amounts of personal data. This raises serious concerns about privacy and data security. I believe that governments must implement stricter regulations to protect users' personal information."</p>
                </div>
              </div>
            </div>

            {/* Part 2: Body Paragraph 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Body Paragraph 1 (First Reason)</span>
                    <span className="text-xs text-slate ml-2">3–4 sentences · reason + specific benefit + result</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>State your reason, explain the benefit, and show the extended result.</strong> Use a strong topic sentence that directly supports your choice.</p>
                <div className="bg-emerald2-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-emerald2-dark mb-2">Body paragraph formula:</p>
                  <p className="text-xs text-emerald2-dark">• <strong>Reason:</strong> "First, [your choice] provides [specific benefit]."</p>
                  <p className="text-xs text-emerald2-dark">• <strong>Specific example:</strong> Concrete detail showing what/how/why</p>
                  <p className="text-xs text-emerald2-dark">• <strong>Extended result:</strong> "As a result..." / "This means..." / "Consequently..."</p>
                </div>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Be specific:</strong> Instead of "it's good," say "it improves X by addressing Y, which results in Z"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Use varied vocabulary:</strong> Avoid repeating words from the prompt</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Use transitions:</strong> "First," "A key advantage is," "The primary benefit..."</li>
                </ul>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example body paragraph (survey response)</p>
                  <p className="text-sm text-ink italic">"First, choosing Option A promotes professional development. Specifically, this approach equips employees with advanced skills that directly enhance their job performance. As a result, workers become more confident, productive, and better able to contribute to company success."</p>
                </div>
              </div>
            </div>

            {/* Part 3: Body Paragraph 2 (Second Reason + Admittedly...However) */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Body Paragraph 2 (Second Reason + Concession)</span>
                    <span className="text-xs text-slate ml-2">3–4 sentences · second reason with "Admittedly...However" (advanced)</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>Give your second reason, then strengthen it with a concession.</strong> Acknowledge a valid point about the other option, then explain why YOUR choice is still superior. The "Admittedly...However" move is a HALLMARK of high-scoring essays.</p>
                <div className="bg-amber2-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-amber2-dark mb-2">Second reason + concession formula:</p>
                  <p className="text-xs text-amber2-dark">• <strong>Second reason:</strong> "Additionally, [your choice] also [second benefit]."</p>
                  <p className="text-xs text-amber2-dark">• <strong>Admittedly,</strong> [concede a good point about the other option]</p>
                  <p className="text-xs text-amber2-dark">• <strong>However,</strong> [explain why your choice is still better] because [specific reason]</p>
                </div>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Be specific:</strong> Lead with a concrete second benefit before conceding</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Shows critical thinking:</strong> You acknowledge the other side's validity, then explain WHY your choice wins despite the tradeoff</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Sophisticated language:</strong> Demonstrates academic maturity and control</li>
                </ul>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example body paragraph (second reason + concession)</p>
                  <p className="text-sm text-ink italic">"Additionally, Option A offers superior long-term value by addressing the core community need more effectively. Admittedly, Option B would reduce initial costs and simplify planning. However, while the upfront investment is higher, the lasting benefits far outweigh the temporary expense, making it the wiser choice for sustainable progress."</p>
                </div>
              </div>
            </div>

            {/* Part 4: Conclusion */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden" style={{marginBottom: '2rem'}}>
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-5">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-violet2 text-white text-xs font-semibold flex items-center justify-center shrink-0">4</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Conclusion</span>
                    <span className="text-xs text-slate ml-2">2–3 sentences</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-5" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Restate your thesis, summarize key points, and leave the reader with a strong final thought.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Restate thesis (in new words):</strong> Don't repeat verbatim — rephrase your main argument.</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Briefly summarize:</strong> Mention your 3 main points in 1–2 sentences.</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Final thought:</strong> End with impact. "In a world where privacy is increasingly threatened, legal action is not just necessary—it is urgent."</li>
                </ul>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Example conclusion</p>
                  <p className="text-sm text-ink">"In conclusion, strict government regulation of social media platforms is essential for protecting user privacy, preventing data breaches, and ensuring corporate accountability. The evidence clearly shows that self-regulation has failed. As technology continues to advance, legal frameworks must evolve to protect citizens' fundamental right to privacy."</p>
                </div>
              </div>
            </div>

            {/* Bonus: Complete Essay Examples */}
            <div className="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors" data-target="struct-essays">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">4 Worked Examples — Template → Idea Generator → Model Essay</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-essays" className="accordion-body border-t border-violet2/30 px-6 py-5 space-y-4">
                <div className="border-t border-violet2/20 pt-5 first:border-0 first:pt-0">
                  <p className="font-display text-xl text-ink mb-4">Essay 1 — Remote vs. Office Work</p>

                  {/* Step 1: Template */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 1 · The template (your plan)</p>
                    <div className="space-y-2 text-sm text-ink">
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-sapphire-light text-sapphire-dark mr-2">Intro</span>Position: remote work is the superior choice for companies and staff.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald2-light text-emerald2-dark mr-2">Reason 1</span>It significantly boosts productivity.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber2-light text-amber2-dark mr-2">Reason 2 + concession</span>It improves well-being — concede office collaboration, but modern tools replace it.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet2-light text-violet2-dark mr-2">Conclusion</span>Restate and urge companies to embrace the flexible model.</p>
                    </div>
                  </div>

                  {/* Step 2: Idea generator */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 2 · Idea generator (build each reason)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 1 — Productivity</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Employees &amp; companies</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Sharper focus and higher efficiency</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>No commute or distractions → faster, more accurate work and less turnover</p>
                      </div>
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 2 — Well-being</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Employees &amp; their families</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Better work-life balance, less burnout</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Autonomy builds loyalty; video tools replace office collaboration without commuting</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Model essay */}
                  <div className="bg-white rounded-xl border border-mist p-4">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-2">Step 3 · Model essay (180–199 words)</p>
                    <div className="space-y-2 text-sm text-ink italic leading-relaxed">
                      <p>Modern businesses increasingly debate whether employees should work remotely or in the office. In my view, remote work is the superior choice for both companies and their staff.</p>
                      <p>First, remote work significantly increases productivity by eliminating commute stress and office distractions. Employees working from home report sharper focus and noticeably better output quality. This uninterrupted environment allows staff to complete demanding tasks more quickly and accurately. As a result, companies benefit from reduced turnover and greater overall efficiency.</p>
                      <p>Additionally, remote work improves employee well-being by offering flexibility and a healthier work-life balance. Workers who enjoy greater autonomy also experience less burnout and tend to remain with their employers far longer. Admittedly, in-person offices provide valuable face-to-face collaboration and spontaneous teamwork. However, modern tools such as video conferencing and shared project boards replicate this benefit effectively, without the daily cost and lost time of commuting.</p>
                      <p>In conclusion, remote work enhances both productivity and personal well-being while remaining fully collaborative. Companies should therefore embrace this flexible model to secure long-term success and a satisfied, loyal workforce. Ultimately, prioritising people and performance together is simply good business.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-violet2/20 pt-5">
                  <p className="font-display text-xl text-ink mb-4">Essay 2 — University vs. Practical Training</p>

                  {/* Step 1: Template */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 1 · The template (your plan)</p>
                    <div className="space-y-2 text-sm text-ink">
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-sapphire-light text-sapphire-dark mr-2">Intro</span>Position: practical training is more valuable in today's job market.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald2-light text-emerald2-dark mr-2">Reason 1</span>It gives immediately applicable, job-ready skills.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber2-light text-amber2-dark mr-2">Reason 2 + concession</span>It is far more affordable — concede university's breadth, but it is costly with no job guarantee.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet2-light text-violet2-dark mr-2">Conclusion</span>Restate; it is the smarter choice for most students.</p>
                    </div>
                  </div>

                  {/* Step 2: Idea generator */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 2 · Idea generator (build each reason)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 1 — Job-ready skills</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Graduates &amp; employers</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Faster employment and earnings</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Contribute from day one → faster promotions and stronger long-term earnings</p>
                      </div>
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 2 — Affordability</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Students &amp; their families</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Less debt, greater financial security</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Far cheaper than tuition; degrees cost years of time and money with no guaranteed job</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Model essay */}
                  <div className="bg-white rounded-xl border border-mist p-4">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-2">Step 3 · Model essay (180–199 words)</p>
                    <div className="space-y-2 text-sm text-ink italic leading-relaxed">
                      <p>Students today often wonder whether a university degree or practical training offers the better route to success. I firmly believe that practical training programmes are more valuable in today's competitive job market.</p>
                      <p>First, practical training equips students with immediately applicable skills that employers actively demand. Because graduates can begin contributing on their very first day, they earn income and build professional experience far sooner than university graduates. This head start often translates into faster promotions and stronger long-term earnings.</p>
                      <p>Additionally, practical training costs significantly less than university tuition, sparing students from years of heavy debt. Admittedly, a university education provides broad theoretical knowledge and a wider range of career possibilities. However, this breadth frequently comes at an enormous cost in time and money, with no guarantee of employment, whereas specialised training leads directly to a job.</p>
                      <p>In conclusion, practical training offers superior value through immediate employability, affordability, and a clear path into the workforce. For most students seeking financial security and rapid advancement, it is undoubtedly the smarter choice. Ultimately, real-world readiness matters more to employers than a diploma alone.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-violet2/20 pt-5">
                  <p className="font-display text-xl text-ink mb-4">Essay 3 — Company Uniforms</p>

                  {/* Step 1: Template */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 1 · The template (your plan)</p>
                    <div className="space-y-2 text-sm text-ink">
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-sapphire-light text-sapphire-dark mr-2">Intro</span>Position: introducing company uniforms is a good idea.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald2-light text-emerald2-dark mr-2">Reason 1</span>They project professionalism and a cohesive image.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber2-light text-amber2-dark mr-2">Reason 2 + concession</span>They foster equality and team spirit — concede personal expression, but unity and convenience win.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet2-light text-violet2-dark mr-2">Conclusion</span>Restate; uniforms are a practical investment.</p>
                    </div>
                  </div>

                  {/* Step 2: Idea generator */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 2 · Idea generator (build each reason)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 1 — Professional image</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Clients/customers &amp; the company</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Stronger reputation and sales</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Clients instantly recognise staff and trust a coordinated, competent team</p>
                      </div>
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 2 — Equality &amp; team spirit</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Employees &amp; colleagues</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Inclusive, focused environment and higher morale</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>No fashion comparisons; also saves staff time and money every morning</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Model essay */}
                  <div className="bg-white rounded-xl border border-mist p-4">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-2">Step 3 · Model essay (180–199 words)</p>
                    <div className="space-y-2 text-sm text-ink italic leading-relaxed">
                      <p>Many organisations must decide whether their employees should wear uniforms or dress freely. I strongly support introducing company uniforms in the workplace.</p>
                      <p>First, uniforms project professionalism and create a cohesive company image. When clients arrive, they instantly recognise staff and perceive the organisation as organised and trustworthy. Customers naturally place greater trust in a team that looks coordinated and competent. This polished appearance strengthens client confidence and can directly improve a company's reputation and sales.</p>
                      <p>Additionally, uniforms foster equality and team spirit by removing fashion-based comparisons among colleagues. Employees are then judged on performance rather than clothing, which builds a more inclusive and focused environment. Admittedly, some workers value the chance to express their personality through fashion. However, the benefits of unity and daily convenience clearly outweigh individual wardrobe preferences, since uniforms also save staff time and money every morning.</p>
                      <p>In conclusion, company uniforms represent a practical investment in professionalism, equality, and employee convenience. Organisations that adopt them stand to gain a stronger image and a more united, productive team. Ultimately, the small loss of individual choice is a worthwhile trade for these lasting advantages.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-violet2/20 pt-5">
                  <p className="font-display text-xl text-ink mb-4">Essay 4 — Public Swimming Pool vs. Community Garden</p>

                  {/* Step 1: Template */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 1 · The template (your plan)</p>
                    <div className="space-y-2 text-sm text-ink">
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-sapphire-light text-sapphire-dark mr-2">Intro</span>Position: a community garden is the better investment than a pool.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald2-light text-emerald2-dark mr-2">Reason 1</span>It serves every resident year-round.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber2-light text-amber2-dark mr-2">Reason 2 + concession</span>It strengthens community bonds — concede a pool's exercise value, but pools are costly and seasonal.</p>
                      <p><span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet2-light text-violet2-dark mr-2">Conclusion</span>Restate; the garden is the wiser long-term choice.</p>
                    </div>
                  </div>

                  {/* Step 2: Idea generator */}
                  <div className="bg-white rounded-xl border border-mist p-4 mb-3">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-3">Step 2 · Idea generator (build each reason)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 1 — Inclusivity</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>All residents — elderly, children, non-swimmers</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Public money benefits the whole community</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Fresh produce and gentle activity year-round, not just for swimmers</p>
                      </div>
                      <div className="bg-fog rounded-lg p-3 space-y-1.5">
                        <p className="text-xs font-semibold text-ink mb-1">Reason 2 — Community bonds</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-rose2 text-white mr-2">Who</span>Diverse neighbours across the area</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-emerald2 text-white mr-2">What</span>Stronger social cohesion and food security</p>
                        <p className="text-xs text-ink"><span className="font-semibold px-2 py-0.5 rounded bg-sapphire text-white mr-2">Detail</span>Shared cultivation unites residents; the garden runs continuously, unlike a seasonal pool</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Model essay */}
                  <div className="bg-white rounded-xl border border-mist p-4">
                    <p className="text-xs font-semibold text-violet2-dark uppercase tracking-wider mb-2">Step 3 · Model essay (180–199 words)</p>
                    <div className="space-y-2 text-sm text-ink italic leading-relaxed">
                      <p>When a neighbourhood receives funding for a new facility, it must choose carefully. I believe a community garden is a better investment than a public swimming pool for our diverse area.</p>
                      <p>First, a garden serves every resident year-round, regardless of age or ability. Unlike a pool, it benefits the elderly, young children, and non-swimmers equally, providing fresh produce alongside gentle outdoor activity. This inclusivity ensures that public money improves the lives of the entire community rather than a select few.</p>
                      <p>Additionally, a community garden strengthens neighbourhood bonds by bringing diverse residents together around shared cultivation. These connections build the kind of social cohesion that a pool rarely creates. Admittedly, a swimming pool offers excellent exercise and recreation for swimmers. However, pools demand costly year-round maintenance and operate only seasonally, whereas a garden runs continuously and even improves local food security.</p>
                      <p>In conclusion, a community garden better serves our neighbourhood's varied needs, promotes sustainability, and builds lasting connections. For genuine, long-term community value, it is clearly the wiser choice. By choosing the garden, we invest in health, belonging, and a greener future for all.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus: Persuasive Language Toolkit */}
            <div className="bg-rose2-light rounded-2xl border border-rose2 overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-rose2/5 transition-colors" data-target="struct-persuasive">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Persuasive Language & Transition Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-persuasive" className="accordion-body border-t border-rose2/30 px-6 py-5 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">Starting Body Paragraphs:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• First, [option] provides...</li>
                      <li>• A key advantage is...</li>
                      <li>• The primary benefit...</li>
                      <li>• Most importantly...</li>
                      <li>• Furthermore... / Additionally...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">Explaining Results (CRITICAL!):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• As a result... / Consequently...</li>
                      <li>• This means... / This leads to...</li>
                      <li>• Therefore... / Thus...</li>
                      <li>• The outcome is... / This benefits...</li>
                      <li>• Ultimately... / In the long term...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">The Powerful Concession (9+ scores):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Admittedly... / Certainly... / True,</li>
                      <li>• One could argue that...</li>
                      <li>• While [option B] does offer...</li>
                      <li>• However... / Yet... / Still...</li>
                      <li>• Despite this... / Nonetheless...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">Closing & Emphasis:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• In conclusion... / To summarize...</li>
                      <li>• Ultimately... / In the end...</li>
                      <li>• Therefore... / For these reasons...</li>
                      <li>• This clearly demonstrates...</li>
                      <li>• The evidence strongly supports...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">Persuasive Verbs (not "is/has"):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Ensures / Promotes / Fosters</li>
                      <li>• Enhance / Strengthen / Improve</li>
                      <li>• Demonstrates / Shows / Reveals</li>
                      <li>• Creates / Generates / Establishes</li>
                      <li>• Provides / Offers / Delivers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-rose2-dark mb-2">Avoid (Too Weak/Casual):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• "I think" / "I believe" (once in thesis)</li>
                      <li>• "really" / "very" / "definitely"</li>
                      <li>• "a lot" / "lots of" (use specific terms)</li>
                      <li>• "nice" / "good" (too vague)</li>
                      <li>• Contractions: "don't," "isn't," "can't"</li>
                    </ul>
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
              <button className="filter-btn filter-active px-4 py-1.5 rounded-full border text-xs font-medium" data-category="all">All</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="planning">Planning</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="structure">Structure</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="language">Language</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="mistakes">Mistakes to Avoid</button>
            </div>

            <div className="space-y-3">
              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="planning">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Planning</p>
                <p className="text-sm font-semibold text-ink mb-2">Spend 5 minutes planning before you write.</p>
                <p className="text-xs text-slate">Write your thesis and outline your 2 main arguments. This prevents rambling and ensures a strong structure.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="planning">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Planning</p>
                <p className="text-sm font-semibold text-ink mb-2">Take a clear position from the start.</p>
                <p className="text-xs text-slate">Don't sit on the fence. "I believe X is better than Y" is stronger than "Both have advantages and disadvantages."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="structure">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Structure</p>
                <p className="text-sm font-semibold text-ink mb-2">Use the 4-paragraph format consistently.</p>
                <p className="text-xs text-slate">Introduction → 2 body paragraphs → Conclusion. This is expected and immediately shows organization.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="structure">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Structure</p>
                <p className="text-sm font-semibold text-ink mb-2">Start each body paragraph with a topic sentence.</p>
                <p className="text-xs text-slate">"First, X is important because..." — this tells the reader what to expect in that paragraph.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use transition phrases to connect ideas.</p>
                <p className="text-xs text-slate">"Furthermore," "In contrast," "As a result" make your essay flow better and show advanced writing.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Vary your sentence structure.</p>
                <p className="text-xs text-slate">Mix short sentences with longer, complex ones. This shows grammatical control and keeps the essay engaging.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Mistakes to Avoid</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't exceed the word count too much.</p>
                <p className="text-xs text-slate">180–199 is the target. If you write 250+ words, it signals poor time management and inability to concisely organize your thoughts within the 26-minute window.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes to Avoid</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't use "I think" or "In my opinion" constantly.</p>
                <p className="text-xs text-slate">You can use it in your thesis, but avoid repeating it. "It is clear that..." or "Evidence shows..." sound more academic.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Mistakes to Avoid</p>
                <p className="text-sm font-semibold text-ink mb-2">Proofread before submitting.</p>
                <p className="text-xs text-slate">You have no time limit — spend the last 5 minutes checking spelling, grammar, and punctuation. Typos are avoidable.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Writing Task 2 Study Guide</p>
          <p className="text-xs text-slate/60">Master persuasive essay writing. Plan your arguments, follow the structure, use sophisticated language, and let your position shine through.</p>
        </footer>

  
  

    </>
  );
}
