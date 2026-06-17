// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask4Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 4 Study Guide";

        // Vocab bank rendering for Task 4
        function initializeVocabBank() {
          const vocabFilters = document.getElementById('vocab-filters');
          const vocabContent = document.getElementById('vocab-content');

          if (!vocabFilters) return;

          // Get unique types for task 4
          const task4Words = window.VOCAB.filter(v => v.task === '4');
          const types = ['all', ...new Set(task4Words.map(v => v.type))];

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
          let filtered = window.VOCAB.filter(v => v.task === '4');

          if (filterType !== 'all') {
            filtered = filtered.filter(v => v.type === filterType);
          }

          vocabContent.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2"><strong>Meaning:</strong> ${word.meaning}</p>
              <p class="text-xs text-slate italic"><strong>Example:</strong> "${word.example}"</p>
              <span class="inline-block mt-3 text-xs font-medium text-rose2 bg-rose2-light px-2 py-1 rounded">${word.type}</span>
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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 4 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Make <span className="hero-line italic">predictions</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Everything you need to score 9+ on Task 4 — structure, vocab, scoring rubric, practice scenarios, and delivery tips.
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
              <p className="text-base leading-relaxed text-ink">You are given a hypothetical scenario and asked to predict what will happen next or how someone will respond. The question might be: <em>"What do you think will happen if this situation continues?"</em> or <em>"Predict how this industry will change in 5 years."</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is assessing your ability to think logically, use conditional language, support predictions with reasoning, and speak with confidence and fluency.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Logic</span>
                  <p className="text-sm leading-relaxed text-ink">Predictions are reasonable and well-supported by evidence or reasoning.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Use of conditional, predictive, and speculative language (will, might, could, likely).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Smooth delivery without excessive hesitation or filler words.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Accuracy</span>
                  <p className="text-sm leading-relaxed text-ink">Proper use of future tense, conditionals, and grammatically correct sentences.</p>
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
                    <p className="text-xs font-semibold text-gold">Setup (10s)</p>
                    <p className="text-xs text-fog/80">Acknowledge the scenario briefly. Show you understood it.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Predictions (35s)</p>
                    <p className="text-xs text-fog/80">Present 2–3 specific, logical predictions. Use conditional language.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Reasoning (15s)</p>
                    <p className="text-xs text-fog/80">Explain why these predictions make sense. Link to real-world factors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring — folded in from the old Scoring tab */}
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">How you are scored</p>
              <p className="text-sm text-slate">How examiners score Task 4 on a 12-point scale. The bands below show typical language for each score tier.</p>

              <div className="space-y-3 mt-4">
                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                    <span className="font-display text-xl text-emerald2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Logic:</strong> Predictions are insightful, well-reasoned, and clearly supported. Connects to real-world factors naturally.</p>
                    <p><strong>Vocabulary:</strong> Uses sophisticated conditional and predictive structures. Range is impressive ("will likely," "might well," "I'd argue that").</p>
                    <p><strong>Fluency:</strong> Speaks naturally with clear organization. Minimal hesitation; pacing is conversational.</p>
                    <p><strong>Accuracy:</strong> Grammar is nearly always correct. Future tense and conditionals are used precisely.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                    <span className="font-display text-xl text-amber2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Logic:</strong> Predictions are logical and generally well-supported. Reasoning is clear.</p>
                    <p><strong>Vocabulary:</strong> Uses conditional and predictive language consistently. Some variety in phrasing but may repeat structures.</p>
                    <p><strong>Fluency:</strong> Mostly fluent with occasional pauses. Some hesitation but overall organized and natural.</p>
                    <p><strong>Accuracy:</strong> Grammar is mostly accurate. Minor errors in conditionals or tense don't disrupt meaning.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                    <span className="font-display text-xl text-rose2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Logic:</strong> Predictions are basic but sometimes vague. Reasoning may be weak or incomplete.</p>
                    <p><strong>Vocabulary:</strong> Limited range of conditional language. Repetitive. May not use conditional structures correctly.</p>
                    <p><strong>Fluency:</strong> Noticeable pauses and hesitations. Some filler sounds. May lose track of thought.</p>
                    <p><strong>Accuracy:</strong> Several grammatical errors. Tense errors are common. Meaning is usually clear but sometimes unclear.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                    <span className="font-display text-xl text-slate">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Logic:</strong> Predictions are unclear, illogical, or barely present. Little or no reasoning provided.</p>
                    <p><strong>Vocabulary:</strong> Very limited. Little to no use of conditional or predictive language.</p>
                    <p><strong>Fluency:</strong> Frequent hesitations or long silences. Choppy delivery. Difficult to follow.</p>
                    <p><strong>Accuracy:</strong> Many grammatical errors. Meaning is sometimes unclear. Tense control is weak.</p>
                  </div>
                </div>
              </div>

              <div className="bg-fog rounded-2xl p-6 mt-6">
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
                <p className="text-sm text-ink">A 9–10 speaker makes logical predictions with natural conditional language. They support predictions with reasons and speak confidently. They are <strong>not</strong> perfect; they may use simple structures alongside complex ones, and that's fine. What matters: do the predictions and reasoning feel intentional and credible?</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate"><strong>Key insight:</strong> Task 4 builds on Task 3. You describe what's happening NOW, then predict what will happen in the next 2–5 minutes. Use "the" instead of "a" since you've already introduced people/objects.</p>

            {/* Part 1: Brief Recap */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Brief Recap (Current State)</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Quickly summarize what's currently happening in the image. This transitions from Task 3 into predictions.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Use "The" not "A".</strong> You've already introduced these people/objects in Task 3. "The children are playing" not "A group of children..."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Present continuous.</strong> "The sun is setting," "People are relaxing," "They are enjoying..."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Keep it to 1 sentence.</strong> Then move directly to predictions.</li>
                </ul>
                <div className="bg-fog rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Opening examples (linking from Task 3)</p>
                  <div className="space-y-2 text-sm text-ink">
                    <p className="italic">"Currently, the market is bustling with activity, vendors are selling, and customers are browsing."</p>
                    <p className="italic">"The beach is beautiful right now — the sun is low on the horizon, and families are enjoying the water."</p>
                    <p className="italic">"The park is busy with children playing, parents watching, and several groups picnicking on the grass."</p>
                    <p className="italic">"The café is cozy and calm, with people reading or working on laptops while staff are preparing drinks."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Predictions */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Predictions (What Will Happen Next)</span>
                    <span className="text-xs text-slate ml-2">~35 seconds · the core of your response</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>The heart of your response.</strong> Make 2–3 logical predictions about what will happen in the next few minutes. Vary your future forms and use reasoning.</p>
                <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-2">Critical grammar patterns:</p>
                  <ul className="space-y-1 text-xs text-sapphire-dark">
                    <li>• <strong>Future Simple:</strong> "The children will leave the park when it gets dark."</li>
                    <li>• <strong>Future Continuous:</strong> "The vendors will be cleaning up their stalls later."</li>
                    <li>• <strong>Going to (plans):</strong> "People are going to start heading home soon."</li>
                    <li>• <strong>Might/Could (possibilities):</strong> "The weather might change, so visitors might pack up."</li>
                    <li>• <strong>"In the next few minutes," "Soon," "After that," "Meanwhile"</strong> — use time phrases!</li>
                  </ul>
                </div>
                <div className="bg-fog rounded-xl p-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 1: Busy Market Scene</p>
                    <p className="text-sm text-ink italic leading-relaxed">"Currently, the market is bustling with customers and vendors. Looking ahead, I predict that in the next 30 minutes, the crowd will become even larger because it's the evening shopping rush. The vendors will probably lower some prices to encourage final purchases before closing. Meanwhile, some visitors might start heading home with their shopping bags. By the end of the evening, the market will likely become quieter as vendors begin to close their stalls."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 2: Beach at Sunset</p>
                    <p className="text-sm text-ink italic leading-relaxed">"The beach is peaceful now with families enjoying the sunset. I believe that as the sun sets lower, the temperature will drop significantly, and people will probably start gathering their belongings. The swimmers are going to come out of the water soon because it will get too dark to swim safely. Some families might light small fires or turn on lights for picnicking. Eventually, the beach will become much quieter as most visitors leave for the evening."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 3: Park with Children Playing</p>
                    <p className="text-sm text-ink italic leading-relaxed">"The park is busy with children playing and parents supervising. In the next hour, I expect the activity level will change because it will get closer to dinner time. The younger children might get tired and start asking their parents to go home. Meanwhile, teenagers might continue playing sports as long as there's light. Eventually, as evening approaches, the park will become much less crowded, and parents will be taking their children home."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 4: Cozy Café Interior</p>
                    <p className="text-sm text-ink italic leading-relaxed">"The café is quiet right now with customers enjoying beverages and work. I anticipate that later in the evening, the atmosphere will change. More people might arrive after finishing work, so the café could become busier than it is now. The staff will probably be preparing for the evening rush and getting more coffee ready. Some of the current visitors are going to leave to make room for new customers. Eventually, the café's activity level will shift from relaxed to more bustling."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 3: Conclusion & Reasoning */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Conclusion & Reasoning</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Wrap up by restating or deepening your reasoning. Show why these predictions are logical.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Reference a real-world factor.</strong> Time of day, weather, human nature, or seasonal patterns. "Because it's evening, people will naturally start heading home."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Use conditional recap.</strong> "Overall, the scene will likely look very different in an hour because..." </li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Finish with confidence.</strong> "That's why I predict..." or "In conclusion, it's clear that..." — not wishy-washy language.</li>
                </ul>
                <div className="bg-fog rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Closing templates</p>
                  <div className="space-y-2 text-sm text-ink italic">
                    <p>"Overall, the scene will look quite different in an hour because it's getting dark and people naturally go home earlier in the evening."</p>
                    <p>"The pace of change depends on the weather, but based on typical patterns, the location will become quieter as time passes."</p>
                    <p>"In conclusion, I predict the activity will shift from busy and active to calm and empty as evening turns to night."</p>
                    <p>"That's why I believe the most significant change will be the departure of visitors as they choose to spend time at home instead."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus: Prediction Language Toolkit */}
            <div className="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors" data-target="struct-prediction-language">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Prediction Language & Transition Phrases</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-prediction-language" className="accordion-body border-t border-violet2/30 px-6 py-5 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Certainty (Confident Predictions):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Will definitely / will certainly</li>
                      <li>• It's clear that / It's obvious that</li>
                      <li>• I'm confident that / I'm sure that</li>
                      <li>• Without a doubt / No question that</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Probability (Likely Predictions):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Will probably / Will likely</li>
                      <li>• It's probable that / It's likely that</li>
                      <li>• Most probably / In all likelihood</li>
                      <li>• I'd say / I'd expect / I anticipate</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Possibility (Less Certain):</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Might / Could / May</li>
                      <li>• It's possible that / It's possible that</li>
                      <li>• There's a chance that / There's a possibility</li>
                      <li>• I imagine / I suppose / I'd guess</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Time & Sequencing:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• In the next few minutes / Soon</li>
                      <li>• After that / Following this / Next</li>
                      <li>• Meanwhile / At the same time</li>
                      <li>• Eventually / By the end / Later</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Reasoning Connectors:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Because / Since / As</li>
                      <li>• Due to / On account of</li>
                      <li>• So / Therefore / That's why</li>
                      <li>• Given that / Considering that</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Alternative/Contrast:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• However / But / Yet</li>
                      <li>• On the other hand / Alternatively</li>
                      <li>• Unless / If not / Except if</li>
                      <li>• Depending on / It depends whether</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Answers — full 60-second responses built from the templates above */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-samples">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">★</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Sample Answers</span>
                    <span className="text-xs text-slate ml-2">full 60-second responses · Recap → Predictions → Reasoning</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-samples" className="accordion-body border-t border-mist px-6 py-5 space-y-5">
                <p className="text-sm text-slate">Each sample combines the three parts above into a complete answer. Task 4 builds on a Task 3 image, so an <strong>image prompt</strong> is included so you can generate the scene, describe the current state, and then predict what happens next.</p>

                {/* Sample 1: Market */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest">Scenario 1 · Bustling outdoor market</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A vibrant outdoor street market during the day, colourful fruit and vegetable stalls overflowing with fresh produce, vendors in traditional clothing arranging goods, customers browsing and carrying shopping bags, tall buildings in the background, bright natural sunlight, busy and energetic atmosphere, photorealistic, wide-angle shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Recap:</span> "Currently, the market is bustling with activity — the vendors are arranging their produce, and the customers are browsing the colourful stalls."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Predictions:</span> "Looking ahead, I predict that in the next 30 minutes the crowd will become even larger because it's the evening shopping rush. The vendors will probably lower some prices to encourage final purchases before closing. Meanwhile, some visitors might start heading home with their full shopping bags. By the end of the evening, the market will likely become much quieter as the vendors begin to pack up their stalls."</p>
                      <p><span className="not-italic font-semibold text-amber2">Reasoning:</span> "Overall, the scene will look quite different in an hour, mainly because markets naturally wind down once it gets dark and people return home for dinner."</p>
                    </div>
                  </div>
                </div>

                {/* Sample 2: Beach sunset */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-sapphire uppercase tracking-widest">Scenario 2 · Peaceful beach sunset</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A serene beach at sunset, golden sand in the foreground with a few people walking along the shore, calm blue ocean reflecting warm orange and pink sunset colours, palm trees and small beach huts in the background, scattered clouds in a glowing sky, peaceful and relaxing mood, photorealistic, soft warm lighting."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Recap:</span> "The beach is beautiful and peaceful right now — the sun is low on the horizon, and a few families are still enjoying the shore."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Predictions:</span> "I believe that as the sun sets lower, the temperature will drop noticeably, and people will probably start gathering their belongings. The swimmers are going to come out of the water soon because it will get too dark to swim safely. Some families might turn on lights or build small fires to keep enjoying the evening. Eventually, the beach will become much quieter as most visitors leave for home."</p>
                      <p><span className="not-italic font-semibold text-amber2">Reasoning:</span> "In conclusion, I predict the atmosphere will shift from relaxed and active to calm and almost empty, simply because nightfall makes the beach colder and harder to enjoy."</p>
                    </div>
                  </div>
                </div>

                {/* Sample 3: Café interior */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest">Scenario 3 · Cozy café interior</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A cozy café interior with warm lighting, several small wooden tables where customers are drinking coffee, reading books, and working on laptops, decorative paintings on the walls, baristas preparing drinks behind a counter, large windows letting in natural light, calm and inviting atmosphere, photorealistic, soft warm tones."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Recap:</span> "The café is cozy and calm right now, with customers reading or working on laptops while the staff are preparing drinks."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Predictions:</span> "I anticipate that later in the evening, the atmosphere will change. More people might arrive after finishing work, so the café could become busier than it is now. The staff will probably be getting more coffee ready in preparation for the rush. Some of the current customers are going to leave to make room for new ones. Eventually, the quiet, relaxed mood will shift into something more lively and social."</p>
                      <p><span className="not-italic font-semibold text-amber2">Reasoning:</span> "That's why I believe the café's energy will rise as the day goes on, because cafés tend to fill up once the workday ends and people look for a place to unwind."</p>
                    </div>
                  </div>
                </div>

                {/* Sample 4: Mountain landscape */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-amber2 uppercase tracking-widest">Scenario 4 · Mountain landscape</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A scenic mountain landscape, green pine trees and rocks in the foreground, a wide valley with a winding river in the mid-ground, tall snow-capped peaks in the background, clear blue sky with a few white clouds, crisp natural daylight, vast and peaceful atmosphere, photorealistic, wide panoramic shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Recap:</span> "Right now, the mountain landscape looks calm and clear — the sky is bright, and a few hikers are making their way along the trail in the foreground."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Predictions:</span> "Looking ahead, I expect the weather in the mountains will change quickly, as it often does at high altitude. Clouds will likely roll in over the peaks, and the temperature is going to drop in the late afternoon. The hikers will probably start descending soon to reach safety before dark. Meanwhile, the light will fade, and the snow-capped peaks might be hidden behind mist."</p>
                      <p><span className="not-italic font-semibold text-amber2">Reasoning:</span> "Overall, the scene will likely become colder and less visible within a few hours, because mountain weather is unpredictable and daylight disappears fast in the valleys."</p>
                    </div>
                  </div>
                </div>

                {/* Sample 5: Street festival */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-rose2 uppercase tracking-widest">Scenario 5 · Street festival</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A lively street festival or cultural celebration, colourful decorations and banners hanging across the street, large crowds of people celebrating, performers in traditional costumes, food stalls along the sides, bright colours and festive lights, joyful and energetic atmosphere, photorealistic, daytime, wide street view."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Recap:</span> "At the moment, the street festival is full of energy — large crowds are celebrating, performers are dancing, and the food stalls are doing brisk business."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Predictions:</span> "I predict that as the day turns into evening, the festival will become even more crowded because more people will arrive after work. The festive lights will be switched on, and the atmosphere is going to feel more dramatic and exciting. The performers will probably move on to bigger shows, while the food stalls might start selling out of popular items. Later in the night, however, families with young children will likely begin heading home."</p>
                      <p><span className="not-italic font-semibold text-amber2">Reasoning:</span> "In conclusion, the celebration will likely peak in the evening and then gradually wind down, because festivals naturally build toward a night-time climax before the crowds disperse."</p>
                    </div>
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
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="prep">Prep</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="delivery">Delivery</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="language">Language</button>
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="logic">Logic</button>
            </div>

            <div className="space-y-3">
              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">In 30 seconds, identify 2–3 predictions + one reason each.</p>
                <p className="text-xs text-slate">Jot down bullet points, not sentences. This keeps you focused and prevents rambling.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Practice with real scenarios before the test.</p>
                <p className="text-xs text-slate">Predicting real-world outcomes (inflation trends, tech changes) trains your brain to think logically on the fly.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Speak with confidence, even if unsure.</p>
                <p className="text-xs text-slate">Use confident language: "I predict," "It will," "This would" — not "maybe," "I think maybe," or "probably maybe."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Pause between predictions to organize thoughts.</p>
                <p className="text-xs text-slate">Strategic pauses are better than rushing. "First, X will happen. [pause] Second, Y might happen." This sounds more fluent.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Always explain your reasoning.</p>
                <p className="text-xs text-slate">Don't just say what will happen. "Prices will rise because demand will increase" beats "prices will rise." Why matters.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Vary your conditional language.</p>
                <p className="text-xs text-slate">Don't say "will probably" five times. Use: "will likely," "might," "could," "I imagine," "I'd argue," "it's probable that."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="logic">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Logic</p>
                <p className="text-sm font-semibold text-ink mb-2">Connect to real-world factors.</p>
                <p className="text-xs text-slate">Reference economics, psychology, government policy, or social trends. "The job market will improve because companies are hiring again" sounds smarter than pure speculation.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="logic">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Logic</p>
                <p className="text-sm font-semibold text-ink mb-2">Acknowledge uncertainty where it's realistic.</p>
                <p className="text-xs text-slate">"This depends on..." or "assuming that..." shows sophisticated thinking. You don't need to sound 100% certain on everything.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="logic">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Logic</p>
                <p className="text-sm font-semibold text-ink mb-2">Make predictions plausible, not fantastical.</p>
                <p className="text-xs text-slate">Examiners reward logical thinking. Wild predictions ("prices will go to $1000") signal weak reasoning.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 4 Study Guide</p>
          <p className="text-xs text-slate/60">Master the art of logical prediction. Practice with real scenarios, support your thinking with reasoning, and let your confidence shine through.</p>
        </footer>

  
  

    </>
  );
}
