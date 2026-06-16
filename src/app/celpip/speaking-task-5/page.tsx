// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask5Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 5 Study Guide";

        function initializeVocabBank() {
          const filterContainer = document.getElementById('vocab-filters');
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === '5');
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

          const taskVocab = window.VOCAB.filter(v => v.task === '5');
          const filtered = filterType === 'All' ? taskVocab : taskVocab.filter(v => v.type === filterType);

          contentContainer.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-violet2 italic">"${word.example}"</p>
            </div>
          `).join('');
        }

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

        const accordionTriggers = document.querySelectorAll('.accordion-trigger');
        accordionTriggers.forEach(trigger => {
          trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            const body = document.getElementById(targetId);
            const chevron = trigger.querySelector('.chevron');
            body.classList.toggle('open');
            chevron.classList.toggle('rotated');
          });
        });

        const tipPane = document.getElementById('pane-tips');
        if (tipPane) {
          const tipFilterBtns = tipPane.querySelectorAll('.filter-btn');
          const tipCards = tipPane.querySelectorAll('.tip-card');

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

        const navbarBurger = document.getElementById('navbar-burger');
        const navbarMenu = document.getElementById('navbar-menu');
        navbarBurger?.addEventListener('click', () => {
          navbarMenu?.classList.toggle('hidden');
        });

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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 5 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Compare &amp; <span className="hero-line italic">persuade</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Master the art of persuasive argumentation — structure your comparison, build strong reasons, and convince the listener with confidence.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up" style={{animationDelay: '.1s'}}>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Speaking time</div>
              <div className="font-display text-3xl text-ink">60<span className="text-lg">s</span></div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Prep time</div>
              <div className="font-display text-3xl text-ink">60<span className="text-lg">s</span></div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Score scale</div>
              <div className="font-display text-3xl text-ink">1–12</div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Target band</div>
              <div className="font-display text-3xl text-ink">8–10</div>
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
            <button data-tab="practice" className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Practice</button>
            <button data-tab="scoring"  className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Scoring</button>
            <button data-tab="tips"     className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Pro Tips</button>
          </div>

          {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
          <div id="pane-overview" className="pane active space-y-5">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">What the task involves</p>
              <p className="text-base leading-relaxed text-ink">You are presented with two options and asked to compare them and persuade the listener which one is better. For example: <em className="text-steel">"Which is better for the environment — public transit or electric cars?"</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to construct logical arguments, use persuasive language, compare systematically, and defend your position with examples.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Natural pacing and minimal hesitation. Complex ideas delivered smoothly signal high fluency.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Argument flows logically: comparison → supporting points → conclusion. Clear structure is essential.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Persuasive language, comparison phrases, and topic-specific vocabulary show range.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Complex sentences, conditionals, and comparative structures demonstrate control.</p>
                </div>
              </div>
            </div>

            <div className="bg-ink rounded-2xl p-6 text-fog">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">The 60-second blueprint</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Introduction (10s)</p>
                    <p className="text-xs text-fog/80">State both options, then declare your position clearly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Body (40s)</p>
                    <p className="text-xs text-fog/80">2–3 strong reasons why your choice is better, with examples</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Closing (10s)</p>
                    <p className="text-xs text-fog/80">Restate your position and summarize why it's the better choice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A 3-part framework for building a strong persuasive argument — not a memorized speech.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Introduction</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Clearly state both options and declare which one you prefer immediately.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"When choosing between [option A] and [option B], I would choose [your choice] because [one key reason]."</p>
                </div>
                <div className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-sapphire-dark italic leading-relaxed">"When choosing between public transit and electric cars, I would choose public transit because of its environmental and economic benefits."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Name both options clearly</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>State your preference immediately — no fence-sitting</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Give one preview reason to hook them</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Supporting Points</span>
                    <span className="text-xs text-slate ml-2">~40 seconds · 2–3 reasons</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Develop 2–3 strong reasons. Each reason should have an example or detail to make it concrete.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"First, [reason 1]. For example, [specific example]. Second, [reason 2], which means [consequence]."</p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-emerald2-dark italic leading-relaxed">"First, public transit reduces per-person emissions significantly. For example, one bus removes 40 cars from the road. Second, it's more cost-effective, which means commuters save money."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use transitions: "First," "Second," "Additionally"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Support each point with a specific example or number</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Compare subtly: mention drawbacks of the other option</li>
                </ul>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden" style={{marginBottom: '2rem'}}>
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Closing</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Restate your position firmly and summarize why it's the stronger choice.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"In conclusion, [option] is the better choice because [strongest reason]. It is clear that [restate your position]."</p>
                </div>
                <div className="bg-gold-light rounded-xl p-4 border-l-4 border-gold" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-gold-dark italic leading-relaxed">"In conclusion, public transit is the better choice because of its environmental and economic benefits. It is clear that sustainability and affordability are the strongest factors."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Restate your preference — no fence-sitting at the end</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Summarize your strongest reason</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Keep it brief — 2–3 sentences maximum</li>
                </ul>
              </div>
            </div>

            {/* Complete Comparison & Persuasion Examples */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-examples">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Complete Comparison & Persuasion Examples</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-examples" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div className="border-l-3 border-sapphire pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 1: Work Location (Remote vs. Office)</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Introduction:</strong> "When choosing between working remotely and working in an office, I believe remote work is the better option because it improves productivity and reduces stress."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Body:</strong> "First, regarding cost, remote work eliminates commuting expenses. You save approximately one hundred dollars per month on transportation and meals. Second, it offers better work-life balance — you can spend more time with family, which improves mental health. Additionally, remote workers report fewer distractions and better focus, which actually increases productivity. Studies show remote employees complete tasks 30% faster than office workers."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, remote work is the better choice because it's more cost-effective and improves both productivity and well-being. For these reasons, I recommend choosing remote work."</p>
                </div>

                <div className="border-l-3 border-emerald2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 2: Learning Method (Books vs. Online Videos)</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Introduction:</strong> "Between learning from books and learning from online videos, I would choose books as the more effective method because they develop deeper understanding and critical thinking."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Body:</strong> "First, in terms of retention, reading requires active engagement with the material. You must process information mentally, which strengthens memory. Research shows people retain 65% of information from reading compared to only 35% from videos. Second, books provide structure and depth. Unlike videos which can be long and scattered, books are organized logically chapter by chapter. Additionally, reading improves vocabulary and writing skills, which videos simply don't develop. While videos are convenient, they can be passive — you can zone out easily."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, books are the more effective learning method because of superior retention, better organization, and skill development. I strongly believe books should be the primary learning tool."</p>
                </div>

                <div className="border-l-3 border-amber2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 3: Living Location (Big City vs. Small Town)</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Introduction:</strong> "When comparing living in a big city versus a small town, I would choose a big city because of superior career opportunities and cultural access."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Body:</strong> "First, regarding job opportunities, big cities have significantly more companies and industries. There are five times more job openings in cities compared to small towns. This means better career growth and higher wages — city dwellers earn 25% more on average. Second, cities provide cultural and social opportunities that small towns cannot match. You have access to theaters, museums, restaurants from different cuisines, and diverse communities. While small towns offer lower costs and quiet living, young professionals need career advancement and cultural engagement to thrive. Small towns lack both."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, big cities are the better choice for anyone pursuing a career because of abundant job opportunities and superior cultural access. For personal and professional growth, cities are essential."</p>
                </div>

                <div className="border-l-3 border-rose2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 4: Purchase Decision (New vs. Secondhand Products)</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Introduction:</strong> "Between buying new products and buying secondhand, I believe buying secondhand is the smarter choice because it saves money and helps the environment."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Body:</strong> "First, the cost difference is dramatic. A secondhand smartphone costs three hundred dollars while a new one costs a thousand dollars. That's a 70% saving. Second, buying secondhand reduces electronic waste. Approximately 50 million tons of e-waste are generated annually. Every secondhand product purchased keeps one item out of landfills. While some people worry about quality, most secondhand products from reputable sellers come with guarantees and function perfectly. Yes, new products offer warranties, but secondhand items are often barely used."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, buying secondhand is the better choice both financially and environmentally. It offers massive savings and positive environmental impact, which makes it the responsible choice."</p>
                </div>
              </div>
            </div>

            {/* Comparison & Persuasion Language Toolkit */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-toolkit">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Comparison & Persuasion Language Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-toolkit" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-sapphire">Comparison Language (Critical for Task 5)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">More/Less + Adjective</p>
                      <p className="text-sm text-ink italic">"This is more cost-effective than..."</p>
                      <p className="text-sm text-ink italic">"It's less time-consuming than..."</p>
                      <p className="text-sm text-ink italic">"Option A is more environmentally friendly..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">-er/-est Comparative Forms</p>
                      <p className="text-sm text-ink italic">"This option is cheaper than that one."</p>
                      <p className="text-sm text-ink italic">"It's faster, easier, and cleaner."</p>
                      <p className="text-sm text-ink italic">"The cheapest choice would be..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Much / Significantly / Far</p>
                      <p className="text-sm text-ink italic">"This is MUCH cheaper than..."</p>
                      <p className="text-sm text-ink italic">"It's FAR more reliable..."</p>
                      <p className="text-sm text-ink italic">"The difference is SIGNIFICANTLY greater..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">❌ AVOID "More Cheaper"</p>
                      <p className="text-sm text-ink italic">✗ "This is more cheaper"</p>
                      <p className="text-sm text-ink italic">✓ "This is cheaper" or "much cheaper"</p>
                      <p className="text-sm text-ink italic">✓ "This is more cost-effective"</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-emerald2">Reasoning Structures (Build Strong Arguments)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Inductive (Examples Support Claim)</p>
                      <p className="text-sm text-ink italic">"For example, a bus removes 40 cars from the road. Similarly, every public transit rider saves money. These examples show public transit is superior."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Causal (Cause & Effect)</p>
                      <p className="text-sm text-ink italic">"Because remote work eliminates commuting, it saves money. This leads to less stress, which improves productivity."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Analogical (Comparison to Similar Situation)</p>
                      <p className="text-sm text-ink italic">"Just like how professional athletes train systematically, students must study with books rather than passive videos."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Numbers & Statistics (Most Persuasive)</p>
                      <p className="text-sm text-ink italic">"Studies show people retain 65% of information from reading vs. 35% from videos. City dwellers earn 25% more on average."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-amber2">Acknowledging & Countering (Sophisticated Persuasion)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Acknowledge the Other Option</p>
                      <p className="text-sm text-ink italic">"While option A has convenience..."</p>
                      <p className="text-sm text-ink italic">"I understand why you prefer B, however..."</p>
                      <p className="text-sm text-ink italic">"Some might argue that... but..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Counter with Stronger Point</p>
                      <p className="text-sm text-ink italic">"...it doesn't compare to the cost savings."</p>
                      <p className="text-sm text-ink italic">"...the benefits far outweigh the drawbacks."</p>
                      <p className="text-sm text-ink italic">"...my option is superior because..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-rose2">Transition Phrases & Signposting</p>
                  <div className="bg-fog rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-slate mb-2">Starting Points</p>
                        <p className="text-sm text-ink italic">"First, regarding [topic]..."</p>
                        <p className="text-sm text-ink italic">"Second, in terms of [topic]..."</p>
                        <p className="text-sm text-ink italic">"Additionally, [new reason]..."</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate mb-2">Introducing Examples</p>
                        <p className="text-sm text-ink italic">"For example, [specific case]..."</p>
                        <p className="text-sm text-ink italic">"To illustrate, [concrete example]..."</p>
                        <p className="text-sm text-ink italic">"Research shows that [statistic]..."</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-violet2">Closing & Conviction Phrases</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink italic">"In conclusion, [option] is the better choice because..."</p>
                    <p className="text-sm text-ink italic">"It is clear that [option] is superior due to..."</p>
                    <p className="text-sm text-ink italic">"For these reasons, I strongly recommend [option]..."</p>
                    <p className="text-sm text-ink italic">"The evidence shows that [option] is the best choice because..."</p>
                    <p className="text-sm text-ink italic">"I am confident that [option] will [achieve desired outcome]..."</p>
                    <p className="text-sm text-ink italic">"Ultimately, the choice is clear — [option] offers [key benefit]..."</p>
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
               PANE: PRACTICE
          ══════════════════════════════════════════ */}
          <div id="pane-practice" className="pane space-y-4">
            <p className="text-sm text-slate">Five realistic scenarios. Pick one and defend your position for 60 seconds.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Scenario 1</p>
                <p className="text-sm font-semibold text-ink mb-3">Remote work vs. working in an office — which is better?</p>
                <p className="text-sm text-slate leading-relaxed">Consider: productivity, collaboration, work-life balance, cost. Build at least 2 strong reasons for your position.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Scenario 2</p>
                <p className="text-sm font-semibold text-ink mb-3">Learning by reading books vs. learning from online videos — which is more effective?</p>
                <p className="text-sm text-slate leading-relaxed">Focus on: retention, engagement, accessibility, pace. Use specific examples.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Scenario 3</p>
                <p className="text-sm font-semibold text-ink mb-3">Living in a big city vs. living in a small town — which offers a better lifestyle?</p>
                <p className="text-sm text-slate leading-relaxed">Consider: opportunities, cost of living, community, pace of life.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Scenario 4</p>
                <p className="text-sm font-semibold text-ink mb-3">Buying new products vs. buying secondhand — which is the better choice?</p>
                <p className="text-sm text-slate leading-relaxed">Address: cost, quality, environmental impact, reliability.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Scenario 5</p>
                <p className="text-sm font-semibold text-ink mb-3">Traveling solo vs. traveling with friends — which is more enjoyable?</p>
                <p className="text-sm text-slate leading-relaxed">Think about: freedom, cost sharing, social aspect, self-discovery.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: SCORING
          ══════════════════════════════════════════ */}
          <div id="pane-scoring" className="pane space-y-4">
            <p className="text-sm text-slate">How examiners score Task 5. Argument strength and clarity are critical.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                  <span className="font-display text-xl text-emerald2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Natural delivery with excellent control. Complex ideas expressed smoothly. No filler words.</p>
                  <p><strong>Coherence:</strong> Argument is logically structured, clear, and persuasive. Transitions are seamless.</p>
                  <p><strong>Vocabulary:</strong> Sophisticated persuasion and comparison language. Shows range and precision.</p>
                  <p><strong>Grammar:</strong> Consistent control of complex structures. Comparative forms and conditionals used accurately.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                  <span className="font-display text-xl text-amber2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Mostly fluent with occasional pauses. Generally smooth and natural.</p>
                  <p><strong>Coherence:</strong> Argument is clear with 2 supporting points. Mostly logical flow; transitions present.</p>
                  <p><strong>Vocabulary:</strong> Good range of persuasive and comparison words. Some repetition acceptable.</p>
                  <p><strong>Grammar:</strong> Mostly accurate; some errors in complex structures don't impede understanding.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                  <span className="font-display text-xl text-rose2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Noticeable pauses; some filler words. Choppy delivery at times.</p>
                  <p><strong>Coherence:</strong> Argument present but may lack clear structure. One strong point, others less developed.</p>
                  <p><strong>Vocabulary:</strong> Basic persuasion words; frequent repetition. Limited range.</p>
                  <p><strong>Grammar:</strong> Mix of simple and complex sentences; errors don't always obscure meaning.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                  <span className="font-display text-xl text-slate">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Frequent hesitation; heavy filler use. Difficult to follow.</p>
                  <p><strong>Coherence:</strong> Argument is unclear or disjointed. May not clearly state preference.</p>
                  <p><strong>Vocabulary:</strong> Very limited; mostly basic words. Cannot adequately express comparison.</p>
                  <p><strong>Grammar:</strong> Frequent errors in basic structures; meaning often obscured.</p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
              <p className="text-sm text-ink">A high score requires a <strong>defensible position with 2–3 solid reasons</strong>. The "right" choice doesn't matter — how well you argue it does. Confidence in your argument matters more than perfect grammar.</p>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: PRO TIPS
          ══════════════════════════════════════════ */}
          <div id="pane-tips" className="pane space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="filter-btn filter-active px-4 py-1.5 rounded-full border text-xs font-medium" data-category="all">All</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="prep">Prep</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="delivery">Delivery</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="language">Language</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="mistakes">Mistakes</button>
            </div>

            <div className="space-y-3">
              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Pick your position in the first 10 seconds.</p>
                <p className="text-xs text-slate">Don't spend time deciding which option is better. Choose immediately, then jot down 2–3 reasons with examples.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Write one specific example per reason.</p>
                <p className="text-xs text-slate">"It's cheaper" is weak. "It costs 50% less" is strong. Numbers and specifics make your argument concrete.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Speak as if you really believe your argument.</p>
                <p className="text-xs text-slate">Confidence is contagious. If you sound uncertain, the examiner doubts your reasoning. Commit to your position.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Use "first," "second" deliberately to structure your speech.</p>
                <p className="text-xs text-slate">Explicit structure shows organization and prevents rambling. It also makes it easier for the examiner to follow.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use comparison language — don't just assert.</p>
                <p className="text-xs text-slate">Instead of "Option B is good," say "Option B is more cost-effective because..." The comparison structure shows sophistication.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Acknowledge the other option, then counter it.</p>
                <p className="text-xs text-slate">"While option A has flexibility, option B is superior because..." Shows balanced, mature thinking.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Never say "I think both are equally good."</p>
                <p className="text-xs text-slate">Fence-sitting kills your score. The task specifically asks you to choose. Pick one and defend it.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't memorize the same argument twice.</p>
                <p className="text-xs text-slate">If you practice the same scenario repeatedly, the examiner can tell it's memorized. Use prep time to generate fresh examples.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 5 Study Guide</p>
          <p className="text-xs text-slate/60">Strong arguments are built, not inherited. Practice defending positions you believe in — and some you don't. Flexibility and confidence are what examiners listen for.</p>
        </footer>

  
  

    </>
  );
}
