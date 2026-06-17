// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask1Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 1 Study Guide";

        // Vocab bank rendering for Task 1
        function initializeVocabBank() {
          const vocabFilters = document.getElementById('vocab-filters');
          const vocabContent = document.getElementById('vocab-content');

          if (!vocabFilters) return;

          // Get unique types for task 1
          const task1Words = window.VOCAB.filter(v => v.task === '1');
          const types = ['all', ...new Set(task1Words.map(v => v.type))];

          // Create filter buttons
          types.forEach(type => {
            const btn = document.createElement('button');
            btn.className = `vocab-filter-btn ${type === 'all' ? 'filter-active' : 'filter-inactive'} px-4 py-1.5 rounded-full border text-xs font-medium`;
            btn.textContent = type === 'all' ? 'All Words' : type;
            btn.dataset.vocabType = type;

            btn.addEventListener('click', () => {
              vocabFilters.querySelectorAll('.vocab-filter-btn').forEach(b => {
                b.classList.remove('filter-active');
                b.classList.add('filter-inactive');
              });
              btn.classList.add('filter-active');
              btn.classList.remove('filter-inactive');
              renderVocabWords(type);
            });

            vocabFilters.appendChild(btn);
          });

          // Initial render
          renderVocabWords('all');
        }

        function renderVocabWords(filterType) {
          const vocabContent = document.getElementById('vocab-content');
          let filtered = window.VOCAB.filter(v => v.task === '1');

          if (filterType !== 'all') {
            filtered = filtered.filter(v => v.type === filterType);
          }

          vocabContent.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2"><strong>Meaning:</strong> ${word.meaning}</p>
              <p class="text-xs text-slate italic"><strong>Example:</strong> "${word.example}"</p>
              <span class="inline-block mt-3 text-xs font-medium text-sapphire bg-sapphire-light px-2 py-1 rounded">${word.type}</span>
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

        // Tips filtering (Pro Tips section only)
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

        document.getElementById('navbar-burger')?.addEventListener('click', function() {
          document.getElementById('navbar-menu')?.classList.toggle('hidden');
        });

        // Initialize vocab bank on page load
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initializeVocabBank);
        } else {
          initializeVocabBank();
        }
  
  }, []);

  return (
    <>


  

        {/* ─── HERO ─── */}
        <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="animate-fade-up">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 1 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Give <span className="hero-line italic">advice</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Respond to a situation by providing thoughtful advice. Show empathy, clear reasoning, and practical suggestions.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up" style={{animationDelay: '.1s'}}>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Speaking time</div>
              <div className="font-display text-3xl text-ink">90<span className="text-lg">s</span></div>
            </div>
            <div className="bg-white rounded-2xl border border-mist p-4 text-center card-hover">
              <div className="text-xs text-slate uppercase tracking-wider mb-1">Prep time</div>
              <div className="font-display text-3xl text-ink">30<span className="text-lg">s</span></div>
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
            <button data-tab="tips"     className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Pro Tips</button>
          </div>

          {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
          <div id="pane-overview" className="pane active space-y-5">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">What the task involves</p>
              <p className="text-base leading-relaxed text-ink">You will be given a situation where someone needs advice. You have <strong>30 seconds to prepare</strong> and <strong>90 seconds to speak</strong>. Provide thoughtful, practical advice that addresses the person's concern.</p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to listen carefully to a problem, offer coherent suggestions, support your advice with reasoning, and communicate empathy and understanding.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Smooth delivery with natural pacing. Confidence when giving advice shows you understand the situation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Ideas flow logically. Your advice is clear and well-structured with reasons and examples.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Words that express suggestions, reasoning, and empathy. Show range beyond basic vocabulary.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Varied sentence structures, conditional forms, and accurate grammar throughout.</p>
                </div>
              </div>
            </div>

            <div className="bg-ink rounded-2xl p-6 text-fog">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">The 90-second blueprint</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Acknowledge (15s)</p>
                    <p className="text-xs text-fog/80">Show you understand the problem and empathize</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Advise (60s)</p>
                    <p className="text-xs text-fog/80">Give 2–3 concrete pieces of advice with reasoning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Conclude (15s)</p>
                    <p className="text-xs text-fog/80">Summarize your advice and offer encouragement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Scoring (moved into Overview) ─── */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-1">How examiners score Task 1</p>
              <p className="text-sm text-slate mb-4">Empathy, clarity, and practical advice are most important.</p>

              <div className="space-y-3">
                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                    <span className="font-display text-xl text-emerald2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Fluency:</strong> Natural, confident delivery. No hesitation when giving advice.</p>
                    <p><strong>Coherence:</strong> Advice is well-organized and logically connected. Ideas flow smoothly.</p>
                    <p><strong>Vocabulary:</strong> Sophisticated words for suggestions, reasoning, and empathy. Varied choices.</p>
                    <p><strong>Grammar:</strong> Complex sentences used confidently. Minimal errors that don't affect understanding.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                    <span className="font-display text-xl text-amber2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Fluency:</strong> Mostly smooth with minor hesitations. Generally confident delivery.</p>
                    <p><strong>Coherence:</strong> Advice is clear and organized. Most transitions work well.</p>
                    <p><strong>Vocabulary:</strong> Good range of relevant words. Some repetition acceptable.</p>
                    <p><strong>Grammar:</strong> Minor errors don't significantly impact meaning. Generally accurate structures.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                    <span className="font-display text-xl text-rose2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Fluency:</strong> Noticeable pauses and hesitations. Some stumbling when explaining.</p>
                    <p><strong>Coherence:</strong> Advice present but may lack clear organization or support.</p>
                    <p><strong>Vocabulary:</strong> Limited range. Basic words repeated. Some incorrect word choices.</p>
                    <p><strong>Grammar:</strong> Several errors. Some affect clarity. Simple sentence structures dominate.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                    <span className="font-display text-xl text-slate">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Fluency:</strong> Frequent hesitation and pausing. Choppy delivery.</p>
                    <p><strong>Coherence:</strong> Advice is unclear or poorly organized. Difficult to follow.</p>
                    <p><strong>Vocabulary:</strong> Very limited. Mostly basic words only.</p>
                    <p><strong>Grammar:</strong> Frequent errors that obscure meaning. Very simple structures only.</p>
                  </div>
                </div>
              </div>

              <div className="bg-fog rounded-2xl p-6 mt-6">
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
                <p className="text-sm text-ink">A high-scoring advice response shows <strong>genuine empathy, clear structure, and practical suggestions with reasoning</strong>. You don't need to be perfect — you need to sound helpful and thoughtful. Examiners want to hear someone who understands the problem and cares about helping.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate"><strong>Key to high scores:</strong> Empathy + Specific Advice + Reason + Consequence. Use modals (should, could, ought to) and conditionals (If I were you...) for grammatical variety.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Acknowledge & Show Empathy</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Show genuine understanding of their problem. Examiners listen for empathy first — it sets the tone for your advice.</p>
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Opening templates</p>
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li className="italic">"I understand that [problem]. That must be [emotion/impact]. If I were you, I would..."</li>
                    <li className="italic">"I know you're going through a difficult time with [issue]. I can see why [reason matters]. Here's what I'd suggest..."</li>
                    <li className="italic">"That sounds really challenging, and I can understand your concern. In my experience, [related insight] helps. So I'd suggest..."</li>
                  </ul>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Restate the problem</strong> briefly to show listening</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Name the emotion</strong> they're likely feeling (stressed, uncertain, worried, excited)</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Validate their concern</strong> — "That's a real challenge" or "I see why that matters"</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Give 3 Pieces of Advice (Reason + Consequence)</span>
                    <span className="text-xs text-slate ml-2">~60 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>The heart of your response.</strong> Give 3 specific pieces of advice. For each: State it → Explain why → Show the benefit/consequence.</p>
                <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-2">Grammar for variety (mix these):</p>
                  <ul className="space-y-1 text-xs text-sapphire-dark">
                    <li>• "If I were you, I would..." (Conditional — most empathetic)</li>
                    <li>• "You should / could / ought to..." (Modal for strong suggestions)</li>
                    <li>• "Another thing you might do is..." (Possibility)</li>
                    <li>• "I'd strongly recommend..." (Personal opinion)</li>
                    <li>• "Try [action] because [reason]..." (Direct practical advice)</li>
                  </ul>
                </div>
                <p className="text-xs text-slate italic">See the <strong>Sample Responses</strong> section below for five full worked examples using this structure.</p>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Conclude with Encouragement</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">End strong. Summarize briefly and express genuine confidence in their ability to handle this. Positivity matters.</p>
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Conclusion templates</p>
                  <ul className="space-y-1.5 text-sm text-ink italic">
                    <li>"To summarize, I think [main advice] are your best options. You'll definitely feel [positive result]. I'm confident you can do this."</li>
                    <li>"Those are my suggestions. I know it seems like a lot, but you have the ability to handle this. You've got this!"</li>
                    <li>"I really believe that if you try these approaches, you'll see improvements. You're capable of handling this change."</li>
                  </ul>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Briefly recap</strong> 1–2 main pieces of advice (not all three)</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Show belief in them</strong> — "I'm confident," "You can handle this," "You're capable"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>End on encouragement,</strong> not doubt — avoid "maybe you'll try" or "if you're lucky"</li>
                </ul>
              </div>
            </div>

            {/* Bonus: Advice Language Toolkit */}
            <div className="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors" data-target="struct-advice-language">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Advice Language & Transition Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-advice-language" className="accordion-body border-t border-violet2/30 px-6 py-5 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Giving Suggestions (Mix these):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• If I were you, I would...</li>
                      <li>• You should / could / ought to...</li>
                      <li>• I'd strongly suggest / recommend...</li>
                      <li>• Another thing you might consider...</li>
                      <li>• I think you would benefit from...</li>
                      <li>• Have you thought about...?</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Transitions & Sequencing:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• First / First of all</li>
                      <li>• Second / Additionally / Also</li>
                      <li>• Third / Finally / One more thing</li>
                      <li>• Another approach would be...</li>
                      <li>• In addition to that...</li>
                      <li>• What I mean is...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Reason & Consequence (CRITICAL):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Because / Since / As</li>
                      <li>• So / Therefore / That's why</li>
                      <li>• Which would [benefit]</li>
                      <li>• This will help you [result]</li>
                      <li>• As a result / Consequently</li>
                      <li>• You'll find that / It will make...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Empathetic Language:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• I understand / I can see why</li>
                      <li>• That must be [challenging/stressful]</li>
                      <li>• I know how [emotion] feels</li>
                      <li>• In my experience / From what I've seen</li>
                      <li>• That's a valid concern</li>
                      <li>• I'm confident you can...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Confidence & Closure:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• I'm sure you'll succeed</li>
                      <li>• You've got this / You can do it</li>
                      <li>• I believe in you</li>
                      <li>• To summarize...</li>
                      <li>• These approaches will help you...</li>
                      <li>• You'll definitely feel better when...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Responses */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-samples">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-rose2 text-white text-xs font-semibold flex items-center justify-center shrink-0">★</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Sample Responses</span>
                    <span className="text-xs text-slate ml-2">5 worked examples</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-samples" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Each response follows the same blueprint: <strong>acknowledge → three pieces of advice with reasons → encouraging conclusion.</strong> Notice how each idea is its own beat, not one long sentence.</p>

                {/* Sample 1 */}
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Scenario 1: Career Change (Friend Nervous About Starting Over)</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I understand you're worried about changing careers, and that's totally natural. Here's my advice:"</p>
                  <p className="text-sm text-ink italic leading-relaxed">First, if I were you, I would update your resume to highlight transferable skills, because employers value what you've already learned.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Second, you should start networking in your new field — attend industry events or join online communities — so you can learn about opportunities before you apply.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Third, I'd suggest taking an online course to build specific skills for your new career, which will boost your confidence and make you more competitive.</p>
                  <p className="text-sm text-ink italic leading-relaxed">These steps will show employers you're serious about the change and well-prepared."</p>
                </div>

                {/* Sample 2 */}
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Scenario 2: Time Management at Work</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I know work feels overwhelming right now, and I can see why it's stressful. If I were you, here's what I'd do:"</p>
                  <p className="text-sm text-ink italic leading-relaxed">First, you should create a priority list each morning so you know which tasks matter most — this prevents wasting energy on less important things.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Second, I'd recommend blocking time for focused work without interruptions, maybe turning off email for an hour — you'll finish tasks faster because you won't be constantly distracted.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Third, try talking to your manager about which tasks you can delegate or postpone; they might not realize you're overloaded.</p>
                  <p className="text-sm text-ink italic leading-relaxed">These changes will help you feel much more in control of your day."</p>
                </div>

                {/* Sample 3 */}
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Scenario 3: Building Friendships (Feeling Lonely)</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I understand feeling lonely, especially when you're trying to build a social circle. Here's my advice:"</p>
                  <p className="text-sm text-ink italic leading-relaxed">First, if I were you, I'd join one activity or club that interests you — sports, book club, volunteer group — because you'll meet people with shared interests and friendship flows naturally.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Second, you should attend regularly and make an effort to talk to the same people, not just show up once — consistency helps bonds develop.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Third, I'd suggest hosting a small gathering or suggesting coffee with someone you met; most people appreciate when someone takes the initiative.</p>
                  <p className="text-sm text-ink italic leading-relaxed">These steps give you real opportunities to connect with people."</p>
                </div>

                {/* Sample 4 */}
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Scenario 4: Starting a New Hobby</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I'm excited about you starting a new hobby! Here's my advice:"</p>
                  <p className="text-sm text-ink italic leading-relaxed">First, you should research beginner resources — YouTube tutorials, books, community classes — because you'll avoid expensive mistakes and learn the basics safely.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Second, if I were you, I'd start with one affordable beginner kit or tool rather than buying everything at once — it lets you try it without a big investment.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Third, you ought to find others doing the same hobby, maybe online communities or local groups, because learning with others keeps you motivated and they can answer your questions.</p>
                  <p className="text-sm text-ink italic leading-relaxed">This approach will help you build confidence without feeling overwhelmed or wasting money."</p>
                </div>

                {/* Sample 5 */}
                <div className="bg-fog rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Scenario 5: Improving English Skills</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I know improving English takes effort, and I'm glad you're committed to it. Here's what I'd suggest:"</p>
                  <p className="text-sm text-ink italic leading-relaxed">First, if I were you, I'd set a specific daily practice routine — even 30 minutes is better than random studying — because consistency is what builds real progress.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Second, you should mix listening, speaking, reading, and writing instead of just one skill, because all parts of language connect.</p>
                  <p className="text-sm text-ink italic leading-relaxed">Third, I'd recommend finding a conversation partner online or locally who speaks English regularly, which helps you practice naturally and builds confidence faster than studying alone.</p>
                  <p className="text-sm text-ink italic leading-relaxed">These strategies will help you reach your goals."</p>
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
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="prep">Prep</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="delivery">Delivery</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="language">Language</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="mistakes">Mistakes</button>
            </div>

            <div className="space-y-3">
              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Use prep time to identify the main problem and brainstorm 2–3 solutions.</p>
                <p className="text-xs text-slate">Jot down quick notes: problem, emotion, three pieces of advice with reasons.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Start with empathy — it makes your advice more meaningful.</p>
                <p className="text-xs text-slate">Beginning with "I understand..." or "That sounds really difficult..." sets a positive tone.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use "I would" to personalize advice; avoid sounding preachy.</p>
                <p className="text-xs text-slate">"I would try..." sounds more humble than "You should definitely..."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Support every suggestion with at least one reason.</p>
                <p className="text-xs text-slate">Don't just list ideas. Explain WHY each would help.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't sound judgmental about their situation.</p>
                <p className="text-xs text-slate">Show understanding, not criticism. "That must be hard" scores better than "That was a bad choice."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't give vague advice.</p>
                <p className="text-xs text-slate">"Just be positive" is weak. "Try setting daily goals, which will help you stay motivated" is strong.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">End with encouragement and confidence in them.</p>
                <p className="text-xs text-slate">"I'm sure you'll handle this well" or "You've got this" shows belief in their ability.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">You have 90 seconds — don't rush to fill silence.</p>
                <p className="text-xs text-slate">Thoughtful pauses are fine. It's better to give great advice slowly than ramble quickly.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 1 Study Guide</p>
          <p className="text-xs text-slate/60">Great advice combines empathy, clear thinking, and practical suggestions. Show you understand the person's situation, offer concrete solutions with reasoning, and end with encouragement. That is what examiners want to hear.</p>
        </footer>

  
  

    </>
  );
}
