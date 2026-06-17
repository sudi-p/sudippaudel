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
              You're shown two options with pictures and details. Choose one, then persuade a specific person why your pick is the better choice.
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
            <button data-tab="tips"     className="tab-btn tab-inactive px-5 py-2 rounded-full border text-sm font-medium transition-all">Pro Tips</button>
          </div>

          {/* ══════════════════════════════════════════
               PANE: OVERVIEW
          ══════════════════════════════════════════ */}
          <div id="pane-overview" className="pane active space-y-5">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">What the task involves</p>
              <p className="text-base leading-relaxed text-ink">You are shown <strong>two options as pictures with written details</strong> (prices, features), and you must <strong>choose one</strong> and then <strong>persuade a specific person</strong> — a friend, family member, or colleague — that your choice is the better one. For example: <em className="text-steel">"Your family is buying a birthday gift. Choose between a tablet ($300) and a smartwatch ($100), and persuade your friend John why your choice is better."</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">It runs in <strong>two parts</strong>: first you get <strong>60 seconds to compare the options and choose</strong> (no speaking), then <strong>60 seconds to prepare</strong> and <strong>60 seconds to speak</strong>. The examiner is testing whether you can compare the options with comparative language and specific numbers, and persuade the person warmly and convincingly.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Comparison</span>
                  <p className="text-sm leading-relaxed text-ink">Clear comparative language ("much cheaper," "more durable") and use of the specific details — especially prices and numbers — from the pictures.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Persuasion</span>
                  <p className="text-sm leading-relaxed text-ink">You clearly choose one option, address the person directly, gently dismiss their choice, and ask for their agreement. Don't sit on the fence.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">A logical flow: opening → 2–3 compared points → conclusion. Transitions make it easy to follow.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Accurate comparative structures (avoid "more cheaper") and varied, complex sentences.</p>
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
                    <p className="text-xs font-semibold text-gold">Opening &amp; Soft Rejection (10s)</p>
                    <p className="text-xs text-fog/80">Greet the person, acknowledge their option, and state which one you've chosen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Compare 2–3 Points (40s)</p>
                    <p className="text-xs text-fog/80">Price first, then value, then one detail — comparing your choice against theirs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Conclusion (10s)</p>
                    <p className="text-xs text-fog/80">Restate your choice and ask for their agreement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring — folded in from the old Scoring tab */}
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">How you are scored</p>
              <p className="text-sm text-slate">How examiners score Task 5 on a 12-point scale. Strong comparison and a clear, persuasive choice matter most.</p>

              <div className="space-y-3 mt-4">
                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                    <span className="font-display text-xl text-emerald2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Comparison:</strong> Rich comparative language and confident use of the specific prices/details from both options.</p>
                    <p><strong>Persuasion:</strong> Clearly chooses one option, addresses the person warmly, softly rejects their choice, and asks for agreement.</p>
                    <p><strong>Coherence:</strong> Opening → compared points → conclusion flows seamlessly.</p>
                    <p><strong>Grammar:</strong> Accurate comparatives and complex structures throughout.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                    <span className="font-display text-xl text-amber2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Comparison:</strong> Good comparative language with 2 clear points; uses some specific details.</p>
                    <p><strong>Persuasion:</strong> Chooses an option and persuades, though the soft rejection or the request for agreement may be thin.</p>
                    <p><strong>Coherence:</strong> Logical and mostly easy to follow; transitions may be basic.</p>
                    <p><strong>Grammar:</strong> Mostly accurate; minor comparative errors don't impede meaning.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                    <span className="font-display text-xl text-rose2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Comparison:</strong> Basic comparison; rarely uses the specific prices/details. Asserts rather than compares.</p>
                    <p><strong>Persuasion:</strong> The choice may be unclear, or it doesn't sound like persuading a real person.</p>
                    <p><strong>Coherence:</strong> Some structure, but the flow jumps around or one point dominates.</p>
                    <p><strong>Grammar:</strong> Comparative errors ("more cheaper"); meaning sometimes unclear.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                    <span className="font-display text-xl text-slate">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Comparison:</strong> Little or no real comparison; no use of the details provided.</p>
                    <p><strong>Persuasion:</strong> No clear choice, or doesn't address a person at all.</p>
                    <p><strong>Coherence:</strong> Disjointed or very brief. Hard to follow.</p>
                    <p><strong>Grammar:</strong> Frequent errors. Meaning is often unclear.</p>
                  </div>
                </div>
              </div>

              <div className="bg-fog rounded-2xl p-6 mt-6">
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
                <p className="text-sm text-ink">The "right" option doesn't matter — <strong>how well you compare and persuade does</strong>. Pick one clearly, lead with price, use the actual numbers from the pictures, gently dismiss the other choice, and finish by asking the person to agree. Confident comparison beats perfect grammar.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A 3-part framework for persuading a person to pick your option — greet them, compare price-first, and ask for their agreement.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Opening &amp; Soft Rejection</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Greet the person by name, acknowledge the option they were leaning toward, then pivot to the one you've chosen. This "soft rejection" sounds collaborative, not pushy.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"Hi [name], I saw you were leaning toward [their option]. I understand why, but I actually think [your option] is the better choice for us."</p>
                </div>
                <div className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-sapphire-dark italic leading-relaxed">"Hi John, I saw you suggested the tablet for his birthday. I get why — it has a big screen — but I really think the smartwatch is the better choice."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Address the person directly by name</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Acknowledge their option before pivoting ("I understand why, but...")</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>State your choice clearly — no fence-sitting</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Compare 2–3 Points</span>
                    <span className="text-xs text-slate ml-2">~40 seconds · the core of your response</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>The heart of your response.</strong> Compare your choice against theirs on 2–3 points. <strong>Lead with price</strong>, then value/usefulness, then one specific detail — always using the actual numbers from the pictures.</p>
                <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-2">Comparison order that works:</p>
                  <ul className="space-y-1 text-xs text-sapphire-dark">
                    <li>• <strong>Price first:</strong> "Mine costs $100, which is much cheaper than the $300 option."</li>
                    <li>• <strong>Value:</strong> why your option's feature matters for this person/situation</li>
                    <li>• <strong>One detail:</strong> a final concrete advantage to seal it</li>
                  </ul>
                </div>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"First, regarding price, [your option] costs [X], which is much cheaper than [their option] at [Y]. Also, it [key benefit], which is more useful because [reason]. Finally, [one specific detail]."</p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-emerald2-dark italic leading-relaxed">"First, the smartwatch only costs a hundred dollars — that's much cheaper than the tablet at three hundred, so we'd save money for the party. Also, it has fitness tracking, which is more useful since he loves running. Finally, it's water-resistant, so it'll last far longer than the tablet."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Always start with price and use the exact numbers shown</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use comparatives: "cheaper," "more durable," "much more useful"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Compare directly against their option, not in isolation</li>
                </ul>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden" style={{marginBottom: '2rem'}}>
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Conclusion &amp; Ask for Agreement</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Restate your choice, sum up the strongest reason, and finish by gently asking the person to agree with you.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"So for these reasons, I really think we should go with [your option]. Let me know if you agree!"</p>
                </div>
                <div className="bg-gold-light rounded-xl p-4 border-l-4 border-gold" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-gold-dark italic leading-relaxed">"So for those reasons, I really think the smartwatch is the smarter pick — it's cheaper and more practical. Let me know if you agree, and we can order it today!"</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Restate your choice — stay committed to the end</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Sum up your strongest reason in a few words</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Close by asking for agreement ("Let me know if you agree")</li>
                </ul>
              </div>
            </div>

            {/* Sample Answers — two-option persuasions, each with image prompts for both options */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-examples">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">★</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Sample Answers</span>
                    <span className="text-xs text-slate ml-2">full persuasions · Opening → Compare → Ask for agreement</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-examples" className="accordion-body border-t border-mist px-6 py-5 space-y-5">
                <p className="text-sm text-slate">Task 5 always shows <strong>two options as pictures with details</strong>. For each scenario below, an <strong>image prompt is included for both options</strong> so you can generate the pair, choose one, and practise persuading the person.</p>

                {/* Sample 1: Birthday gift */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest">Scenario 1 · A birthday gift (persuading your friend John)</p>
                  <p className="text-xs text-slate"><strong>Options:</strong> Tablet ($300) vs. Smartwatch ($100). <strong>Chosen:</strong> Smartwatch.</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option A — Tablet</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A modern black tablet with a large glossy screen displaying a movie, standing upright on a desk, price tag reading $300, clean studio product photography, white background, photorealistic."</p>
                    </div>
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option B — Smartwatch</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A sleek fitness smartwatch with a round screen showing a step-count and heart-rate display, silicone sport band, price tag reading $100, clean studio product photography, white background, photorealistic."</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Opening:</span> "Hi John! I saw you were leaning toward the tablet for his birthday. I totally get why — the big screen is nice — but I really think the smartwatch is the better pick."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Compare:</span> "First, on price, the smartwatch is only a hundred dollars, which is much cheaper than the tablet at three hundred — so we'd have plenty left for the party. Also, it has fitness and heart-rate tracking, which is far more useful for him since he loves running, whereas the tablet is mostly for watching movies. On top of that, it's water-resistant, so it'll last much longer than a fragile tablet screen."</p>
                      <p><span className="not-italic font-semibold text-amber2">Conclusion:</span> "So for those reasons, I really think we should go with the smartwatch — it's cheaper and more practical. Let me know if you agree and we can order it today!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 2: Family celebration venue */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-sapphire uppercase tracking-widest">Scenario 2 · A family celebration venue (persuading your sister)</p>
                  <p className="text-xs text-slate"><strong>Options:</strong> Downtown restaurant ($60/person) vs. Lakeside park pavilion ($150 total). <strong>Chosen:</strong> Park pavilion.</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option A — Restaurant</p>
                      <p className="text-sm text-ink italic leading-relaxed">"An elegant downtown restaurant interior with formal table settings, warm chandelier lighting, waiters in the background, a small sign reading $60 per person, photorealistic, wide interior shot."</p>
                    </div>
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option B — Park pavilion</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A bright lakeside park pavilion with picnic tables under a wooden shelter, green trees and a calm lake behind it, families gathering, a small sign reading $150 total rental, sunny day, photorealistic, wide shot."</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Opening:</span> "Hey Sara, I know you had your eye on the downtown restaurant for Mom's celebration. It does look lovely, but honestly I think the lakeside park pavilion would be the better choice for us."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Compare:</span> "First, the cost: the pavilion is just a hundred and fifty dollars for the whole group, whereas the restaurant is sixty dollars per person — for fifteen people that's nine hundred dollars, so the park is far cheaper. Also, the pavilion gives the kids space to run around by the lake, which is much more relaxing than a quiet restaurant. And we can bring Mom's favourite homemade food instead of being limited to a set menu."</p>
                      <p><span className="not-italic font-semibold text-amber2">Conclusion:</span> "So for those reasons, I really think the park pavilion is the smarter, more fun option. Let me know if you're on board and I'll book it!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 3: Office desk */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest">Scenario 3 · A new office desk (persuading your colleague)</p>
                  <p className="text-xs text-slate"><strong>Options:</strong> Large L-shaped desk ($450) vs. Compact standing desk ($250). <strong>Chosen:</strong> Standing desk.</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option A — L-shaped desk</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A large wooden L-shaped office desk with plenty of surface space in a modern office, a price tag reading $450, clean lighting, photorealistic, product shot."</p>
                    </div>
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option B — Standing desk</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A compact electric height-adjustable standing desk raised to standing position with a laptop on top, in a modern office, a price tag reading $250, clean lighting, photorealistic, product shot."</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Opening:</span> "Hi Priya, I noticed you preferred the big L-shaped desk for the office. I see the appeal of all that space, but I actually think the compact standing desk is the better choice for us."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Compare:</span> "First, on price, the standing desk is two hundred and fifty dollars, which is two hundred dollars cheaper than the L-shaped one — so we could buy two for the team. Second, it's adjustable, so it's much healthier for our backs since we sit all day, whereas the L-shaped desk keeps you seated. And because it's compact, it fits our small office far better and leaves room to move around."</p>
                      <p><span className="not-italic font-semibold text-amber2">Conclusion:</span> "So for those reasons, I really think we should go with the standing desk — it's cheaper, healthier, and space-friendly. Let me know if you agree!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 4: Family vacation */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-amber2 uppercase tracking-widest">Scenario 4 · A family vacation (persuading your partner)</p>
                  <p className="text-xs text-slate"><strong>Options:</strong> Beach resort package ($2,000) vs. Mountain cabin getaway ($1,200). <strong>Chosen:</strong> Mountain cabin.</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option A — Beach resort</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A luxury tropical beach resort with palm trees, a large pool beside white sand and turquoise sea, sun loungers, a small sign reading $2000 per week, bright sunny day, photorealistic, wide shot."</p>
                    </div>
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option B — Mountain cabin</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A cozy wooden mountain cabin surrounded by pine forest and snowy peaks, smoke rising from the chimney, a small sign reading $1200 per week, crisp daylight, photorealistic, wide shot."</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Opening:</span> "Hey love, I know you were dreaming about the beach resort. It does look amazing, but I really think the mountain cabin would be the better trip for us this year."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Compare:</span> "First, on cost, the cabin is twelve hundred dollars compared to two thousand for the resort — that's eight hundred dollars saved, which we could put toward next year's holiday. Second, the cabin is far more peaceful and private, which is more relaxing than a crowded resort pool. And the kids would love hiking and seeing the snow, which is something completely new for them."</p>
                      <p><span className="not-italic font-semibold text-amber2">Conclusion:</span> "So for those reasons, I really think the cabin is the smarter, cosier choice. Let me know if you're happy with it and I'll book the dates!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 5: Family car */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-rose2 uppercase tracking-widest">Scenario 5 · A new family car (persuading your spouse)</p>
                  <p className="text-xs text-slate"><strong>Options:</strong> Spacious SUV ($35,000) vs. Fuel-efficient hybrid sedan ($28,000). <strong>Chosen:</strong> Hybrid sedan.</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option A — SUV</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A large modern silver SUV parked in a dealership, spacious and tall, a price tag reading $35,000, clean showroom lighting, photorealistic, three-quarter front view."</p>
                    </div>
                    <div className="bg-white rounded-lg border border-mist p-4">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Option B — Hybrid sedan</p>
                      <p className="text-sm text-ink italic leading-relaxed">"A sleek modern blue hybrid sedan parked in a dealership, a small green hybrid badge, a price tag reading $28,000, clean showroom lighting, photorealistic, three-quarter front view."</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Opening:</span> "Hi honey, I know you were leaning toward the big SUV. I understand — it's roomy — but I genuinely think the hybrid sedan is the better choice for our family."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Compare:</span> "First, on price, the hybrid is twenty-eight thousand dollars, which is seven thousand cheaper than the thirty-five-thousand-dollar SUV. Second, it's far more fuel-efficient, so we'd save a lot on gas every month — much more practical for our daily commute. And it's easier to park in the city than a large SUV, which matters since we drive downtown a lot."</p>
                      <p><span className="not-italic font-semibold text-amber2">Conclusion:</span> "So for those reasons, I really think the hybrid sedan is the smarter buy — cheaper to own and easier to drive. Let me know if you agree and we can test-drive it this weekend!"</p>
                    </div>
                  </div>
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
                  <p className="text-sm font-semibold mb-3 text-emerald2">Reasoning Structures (Build Strong Arguments)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Value-for-money (Strongest Angle)</p>
                      <p className="text-sm text-ink italic">"It's $200 cheaper and does everything we need, so we get better value for our money."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Causal (Cause &amp; Effect)</p>
                      <p className="text-sm text-ink italic">"Because it's water-resistant, it'll last longer, which means we won't have to replace it soon."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Fit-for-the-person (Why It Suits Them)</p>
                      <p className="text-sm text-ink italic">"Since he loves running, the fitness tracking is far more useful for him than a bigger screen."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Numbers from the Pictures (Most Persuasive)</p>
                      <p className="text-sm text-ink italic">"Mine is $100 versus $300 — that's a 67% saving we can put toward the party."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3 text-amber2">Soft Rejection (Acknowledge Their Choice First)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Acknowledge Their Option</p>
                      <p className="text-sm text-ink italic">"I saw you were leaning toward [their option]..."</p>
                      <p className="text-sm text-ink italic">"I understand why you chose it, but..."</p>
                      <p className="text-sm text-ink italic">"That's a good idea, however, to be honest..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Pivot to Yours</p>
                      <p className="text-sm text-ink italic">"...I actually think [my option] is better."</p>
                      <p className="text-sm text-ink italic">"...looking at the bigger picture, mine wins."</p>
                      <p className="text-sm text-ink italic">"...the benefits far outweigh the drawbacks."</p>
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
                  <p className="text-sm font-semibold mb-3 text-violet2">Closing &amp; Asking for Agreement</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink italic">"So for these reasons, I really think we should go with [option]."</p>
                    <p className="text-sm text-ink italic">"Let me know if you agree!"</p>
                    <p className="text-sm text-ink italic">"I hope you can see why [option] is the better pick."</p>
                    <p className="text-sm text-ink italic">"What do you say — shall we go with [option]?"</p>
                    <p className="text-sm text-ink italic">"I'm confident [option] is the smarter choice for us."</p>
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
                <p className="text-sm font-semibold text-ink mb-2">Use the actual prices and details from the pictures.</p>
                <p className="text-xs text-slate">"It's cheaper" is weak. "It's $100 vs. $300, so $200 cheaper" is strong. The numbers shown in both options are your best evidence — quote them.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Talk to the person — greet them by name.</p>
                <p className="text-xs text-slate">This is a conversation, not a speech. Open with "Hi [name]," acknowledge their choice, and sound warm and confident throughout, as if you're really persuading them.</p>
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
          <p className="text-xs text-slate/60">Comparing and persuading is about one clear choice, well argued to a real person. Lead with price, use the numbers from the pictures, compare with confident comparatives, and finish by asking them to agree.</p>
        </footer>

  
  

    </>
  );
}
