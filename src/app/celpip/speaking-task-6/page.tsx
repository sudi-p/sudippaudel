// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask6Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 6 Study Guide";

        function initializeVocabBank() {
          const filterContainer = document.getElementById('vocab-filters');
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === '6');
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

          const taskVocab = window.VOCAB.filter(v => v.task === '6');
          const filtered = filterType === 'All' ? taskVocab : taskVocab.filter(v => v.type === filterType);

          contentContainer.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-amber2 italic">"${word.example}"</p>
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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 6 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Handle a <span className="hero-line italic">difficult</span> situation
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Master crisis communication — explain the problem, describe your response, and reflect on the outcome with poise.
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
              <p className="text-base leading-relaxed text-ink">You are presented with a challenging or problematic situation and asked how you would handle it. For example: <em className="text-steel">"Your coworker made an error that affects the team. What do you do?"</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to think on your feet, communicate clearly under pressure, show problem-solving skills, and demonstrate maturity and composure.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Natural delivery despite the challenging content. Composure under pressure signals high fluency.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Clear explanation of the problem, your actions, and the outcome. Logical progression through crisis.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Problem-solving language, emotional vocabulary, and professional communication phrases.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Complex structures and varied tenses. Conditional and past perfect tenses show sophistication.</p>
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
                    <p className="text-xs font-semibold text-gold">The Situation (10s)</p>
                    <p className="text-xs text-fog/80">Describe the problem clearly and briefly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Your Response (35s)</p>
                    <p className="text-xs text-fog/80">Explain the steps you would take to solve it</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Reflection (15s)</p>
                    <p className="text-xs text-fog/80">What you learned or how it would have been resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A 3-part framework for calmly addressing crises — show maturity and problem-solving skills.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">The Situation</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Briefly describe what happened without making excuses or blaming others.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"If [difficult situation happened], I would first acknowledge that [what went wrong]. The key issue is [core problem]."</p>
                </div>
                <div className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-sapphire-dark italic leading-relaxed">"If I made a mistake on a project that affected the deadline, I would first acknowledge the error. The key issue is that I need to communicate immediately and take responsibility."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Be direct about what went wrong</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Identify the core problem, not minor details</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Avoid making excuses; focus on facts</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Your Response</span>
                    <span className="text-xs text-slate ml-2">~35 seconds · 2–4 steps</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Outline 2–4 concrete steps you would take to address or mitigate the problem. This is where you show problem-solving.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"First, I would [action 1]. Then, I would [action 2] to [purpose]. Finally, I would [action 3] to ensure [outcome]."</p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-emerald2-dark italic leading-relaxed">"First, I would notify my manager immediately to inform them of the error. Then, I would gather the relevant data to understand the full impact. Finally, I would propose a solution or timeline to fix it."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Show initiative: what YOU would do, not delegate</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use action words: "would investigate," "would communicate," "would propose"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Demonstrate maturity: solve the problem, not blame others</li>
                </ul>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden" style={{marginBottom: '2rem'}}>
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Reflection</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Reflect on what you learned or the outcome. Show growth and forward-thinking.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"This situation would teach me that [lesson]. In the future, I would [preventive action]."</p>
                </div>
                <div className="bg-gold-light rounded-xl p-4 border-l-4 border-gold" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-gold-dark italic leading-relaxed">"This situation would teach me the importance of double-checking work before submission. In the future, I would build in a buffer time to review and catch errors early."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Show that you learned something meaningful</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Describe how you'd prevent it from happening again</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Keep it brief — 2–3 sentences maximum</li>
                </ul>
              </div>
            </div>

            {/* Complete Difficult Situation Examples */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-examples">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Complete Difficult Situation Examples</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-examples" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div className="border-l-3 border-sapphire pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 1: Work Error Affecting Team</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Situation:</strong> "If I made an error on a project that affected the team's deadline, I would first acknowledge the mistake immediately."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Response:</strong> "First, I would inform my manager and team as soon as I discovered the error, rather than waiting. Second, I would calculate exactly how much time was lost and assess the impact on the deadline. Third, I would propose a concrete solution — either working extra hours, or bringing in additional resources to recover the lost time. Finally, I would suggest specific steps to prevent this from happening again, like implementing a review checklist."</p>
                  <p className="text-sm text-slate italic"><strong>Reflection:</strong> "This situation taught me that honesty and quick communication minimize damage. In the future, I would build in buffer time before deadlines to catch errors before they affect others."</p>
                </div>

                <div className="border-l-3 border-emerald2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 2: Critical Feedback from Boss</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Situation:</strong> "If I received harsh criticism from my manager in front of colleagues, I would first try to stay calm and listen without getting defensive."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Response:</strong> "First, I would listen fully without interrupting, even if I disagreed with some points. Second, I would ask clarifying questions like 'Can you give me a specific example?' to understand exactly what I need to improve. Third, I would thank them for the feedback and ask if we could discuss this privately after the meeting to create an action plan. Fourth, I would follow up with a written summary showing what I understood and my plan to improve. This shows I take the feedback seriously and am committed to growth."</p>
                  <p className="text-sm text-slate italic"><strong>Reflection:</strong> "This taught me that criticism, while uncomfortable, is valuable for development. In the future, I would view tough feedback as an opportunity to improve rather than as a personal attack."</p>
                </div>

                <div className="border-l-3 border-amber2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 3: Friend Cancels Plans Last-Minute</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Situation:</strong> "If a close friend cancelled important plans just hours before, I would first understand that something serious probably happened."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Response:</strong> "First, I would ask them what was wrong and listen to their situation without immediately expressing frustration. Second, I would acknowledge their difficulty while also expressing my disappointment honestly but kindly. Third, I would suggest rescheduling and offer flexibility — maybe they could meet for just 30 minutes instead of the full evening, or we could try another day. Fourth, I would ask if they needed help with whatever was causing them to cancel, showing I care about them beyond just the plans."</p>
                  <p className="text-sm text-slate italic"><strong>Reflection:</strong> "This taught me that relationships are more important than one event, and sometimes people need understanding rather than judgment. In the future, I would be more flexible and prioritize maintaining the friendship over being upset about canceled plans."</p>
                </div>

                <div className="border-l-3 border-rose2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 4: Someone Takes Credit for Your Work</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Situation:</strong> "If I discovered that a colleague took credit for my work in front of the manager, I would feel upset, but I would handle it diplomatically."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Response:</strong> "First, I would not confront them aggressively in public. Second, I would request a private conversation with both my colleague and my manager. Third, I would calmly explain my role in the project, showing evidence like emails or documents I created. I would avoid blaming my colleague directly, but instead say something like, 'I think there may have been a misunderstanding about who did what.' Fourth, I would suggest a clear process going forward where everyone's contributions are documented in writing to prevent confusion in the future."</p>
                  <p className="text-sm text-slate italic"><strong>Reflection:</strong> "This taught me the importance of clear communication and documentation. In the future, I would proactively communicate my contributions and keep detailed records to prevent these misunderstandings."</p>
                </div>

                <div className="border-l-3 border-violet2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 5: Running Out of Money on a Trip</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Situation:</strong> "If I ran out of money midway through a trip with friends and couldn't afford to pay for shared expenses, I would address it immediately and honestly."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Response:</strong> "First, I would tell my friends right away rather than hiding the problem and letting them pay for me. Second, I would explain exactly what happened — maybe an unexpected charge or miscalculation. Third, I would propose a solution: I could cover specific expenses instead of splitting everything equally, or I could reimburse them as soon as I got home. Fourth, I would offer alternatives like suggesting cheaper activities for the rest of the trip, or finding a way to contribute my time instead of money. This shows I take responsibility and want to find a solution together, not burden them."</p>
                  <p className="text-sm text-slate italic"><strong>Reflection:</strong> "This situation taught me that honesty prevents bigger problems later, and real friends will understand. In the future, I would budget more carefully and have a backup plan for financial emergencies during travel."</p>
                </div>
              </div>
            </div>

            {/* Crisis Communication & Problem-Solving Language Toolkit */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-toolkit">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Crisis Communication & Problem-Solving Language Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-toolkit" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-sapphire">Acknowledging & Validating (Show Empathy)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Validating Feelings</p>
                      <p className="text-sm text-ink italic">"I understand you're upset..."</p>
                      <p className="text-sm text-ink italic">"I recognize why this would be frustrating..."</p>
                      <p className="text-sm text-ink italic">"Your concerns are valid..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Acknowledging the Problem</p>
                      <p className="text-sm text-ink italic">"I acknowledge that this is a problem..."</p>
                      <p className="text-sm text-ink italic">"You're right to be concerned..."</p>
                      <p className="text-sm text-ink italic">"I see the issue now..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-emerald2">Taking Responsibility (No Blame Language)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Owning the Problem</p>
                      <p className="text-sm text-ink italic">"I take full responsibility for..."</p>
                      <p className="text-sm text-ink italic">"I should have... but I didn't, and that was wrong."</p>
                      <p className="text-sm text-ink italic">"This was my mistake, and I will fix it."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">❌ AVOID Blame Language</p>
                      <p className="text-sm text-ink italic">✗ "It's not my fault" or "They made me do it"</p>
                      <p className="text-sm text-ink italic">✗ "You should have told me earlier"</p>
                      <p className="text-sm text-ink italic">✓ Focus on "I would..." or "I should have..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-amber2">Problem-Solving Action Words</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Taking Immediate Action</p>
                      <p className="text-sm text-ink italic">"I would address this immediately..."</p>
                      <p className="text-sm text-ink italic">"I would investigate the root cause..."</p>
                      <p className="text-sm text-ink italic">"I would gather all relevant information..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Communicating Clearly</p>
                      <p className="text-sm text-ink italic">"I would inform you right away..."</p>
                      <p className="text-sm text-ink italic">"I would discuss this privately..."</p>
                      <p className="text-sm text-ink italic">"I would explain my perspective..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Proposing Solutions</p>
                      <p className="text-sm text-ink italic">"I would suggest... as a way to fix this."</p>
                      <p className="text-sm text-ink italic">"I would propose a timeline for recovery..."</p>
                      <p className="text-sm text-ink italic">"I would offer [specific solution]..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Preventing Future Issues</p>
                      <p className="text-sm text-ink italic">"I would implement a system to prevent..."</p>
                      <p className="text-sm text-ink italic">"Going forward, I would..."</p>
                      <p className="text-sm text-ink italic">"In the future, I would be more careful to..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-rose2">Offering Solutions & Alternatives</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <p className="text-xs font-semibold text-slate mb-2">How to Present Solutions Respectfully</p>
                    <p className="text-sm text-ink italic">"I think we could solve this by... What do you think?"</p>
                    <p className="text-sm text-ink italic">"Would it help if I... ?"</p>
                    <p className="text-sm text-ink italic">"Let me suggest a few options: First... Second... Which would work best?"</p>
                    <p className="text-sm text-ink italic">"I could offer to... as a way to make this right."</p>
                    <p className="text-sm text-ink italic">"Would you be open to... as a solution?"</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-violet2">Conditional Structures (Essential for Task 6)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Present Conditional (Hypothetical Situation)</p>
                      <p className="text-sm text-ink italic">"If this happened, I would take these steps..."</p>
                      <p className="text-sm text-ink italic">"If I were in this situation, I would..."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Mixed Conditionals (Past + Present)</p>
                      <p className="text-sm text-ink italic">"If I had known earlier, I would handle it differently now."</p>
                      <p className="text-sm text-ink italic">"Had I realized this sooner, I would..."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Past Perfect (Reflection)</p>
                      <p className="text-sm text-ink italic">"I should have communicated earlier."</p>
                      <p className="text-sm text-ink italic">"I could have prevented this if I had..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-gold">Emotional Intelligence & Maturity Phrases</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink italic">"Rather than blame others, I would focus on what I can control..."</p>
                    <p className="text-sm text-ink italic">"I would listen to their perspective before making a decision..."</p>
                    <p className="text-sm text-ink italic">"I would approach this with respect and understanding..."</p>
                    <p className="text-sm text-ink italic">"Even though this is difficult, I would handle it professionally..."</p>
                    <p className="text-sm text-ink italic">"I would prioritize preserving the relationship while solving the problem..."</p>
                    <p className="text-sm text-ink italic">"This situation taught me the importance of..."</p>
                    <p className="text-sm text-ink italic">"I've learned that the best approach is to..."</p>
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
            <p className="text-sm text-slate">Five realistic difficult situations. Pick one and respond calmly for 60 seconds.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Scenario 1</p>
                <p className="text-sm font-semibold text-ink mb-3">You made a significant error at work that affected the team's deadline.</p>
                <p className="text-sm text-slate leading-relaxed">Focus on: taking responsibility, communicating immediately, proposing a fix, and what you'd do differently next time.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Scenario 2</p>
                <p className="text-sm font-semibold text-ink mb-3">A friend cancels important plans with you at the last minute.</p>
                <p className="text-sm text-slate leading-relaxed">Address: how you'd react maturely, how you'd communicate, and how you'd handle the situation going forward.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Scenario 3</p>
                <p className="text-sm font-semibold text-ink mb-3">You received critical feedback from your boss in front of your colleagues.</p>
                <p className="text-sm text-slate leading-relaxed">Think about: listening without getting defensive, asking for clarification, and demonstrating professionalism.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Scenario 4</p>
                <p className="text-sm font-semibold text-ink mb-3">You discovered that someone took credit for your work.</p>
                <p className="text-sm text-slate leading-relaxed">Consider: how you'd address it diplomatically, the steps you'd take, and preserving relationships.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Scenario 5</p>
                <p className="text-sm font-semibold text-ink mb-3">You ran out of money during a trip with friends.</p>
                <p className="text-sm text-slate leading-relaxed">Focus on: communicating honestly, problem-solving quickly, and maintaining relationships despite the awkward situation.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: SCORING
          ══════════════════════════════════════════ */}
          <div id="pane-scoring" className="pane space-y-4">
            <p className="text-sm text-slate">How examiners score Task 6. Composure and problem-solving are critical.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                  <span className="font-display text-xl text-emerald2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Natural and composed delivery despite challenging content. No hesitation or filler words.</p>
                  <p><strong>Coherence:</strong> Problem, response, and reflection are clearly structured. Logical progression throughout.</p>
                  <p><strong>Vocabulary:</strong> Sophisticated problem-solving language. Shows maturity and professional communication.</p>
                  <p><strong>Grammar:</strong> Confident use of complex structures, conditionals, and past perfect tenses.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                  <span className="font-display text-xl text-amber2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Generally fluent with minimal pauses. Handles the topic with reasonable composure.</p>
                  <p><strong>Coherence:</strong> Addresses the situation and describes steps taken. Mostly logical organization.</p>
                  <p><strong>Vocabulary:</strong> Good range of problem-solving words. Shows understanding of appropriate tone.</p>
                  <p><strong>Grammar:</strong> Mostly accurate; some errors in complex structures don't impede understanding.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                  <span className="font-display text-xl text-rose2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Noticeable pauses or hesitation. May struggle with the emotional aspect of the scenario.</p>
                  <p><strong>Coherence:</strong> Addresses the problem but may lack clear solution steps. Organization is somewhat unclear.</p>
                  <p><strong>Vocabulary:</strong> Basic words; limited range for expressing problem-solving ideas.</p>
                  <p><strong>Grammar:</strong> Mix of simple and complex sentences; errors don't always obscure meaning.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                  <span className="font-display text-xl text-slate">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Frequent hesitation or loss of composure. Difficulty with the challenging content.</p>
                  <p><strong>Coherence:</strong> May not clearly describe the problem or steps. Disjointed explanation.</p>
                  <p><strong>Vocabulary:</strong> Very limited; cannot adequately express problem-solving ideas.</p>
                  <p><strong>Grammar:</strong> Frequent errors in basic structures; meaning often obscured.</p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
              <p className="text-sm text-ink">A high score requires <strong>composure and concrete problem-solving steps</strong>. Don't dwell on the problem; focus on YOUR actions. Show maturity: take responsibility, communicate, and demonstrate growth. Examiners reward candidates who handle adversity with grace.</p>
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
                <p className="text-sm font-semibold text-ink mb-2">Jot down 3 concrete steps you would take.</p>
                <p className="text-xs text-slate">During prep, don't spend time panicking about the scenario. Instead, write down 3–4 specific actions you'd take to fix it.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Speak calmly and deliberately.</p>
                <p className="text-xs text-slate">Even if the scenario is stressful, your delivery should be controlled. Slow down. Take pauses. This signals composure.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use conditional structures: "would," "would have," "if."</p>
                <p className="text-xs text-slate">Conditional language shows you're thinking hypothetically and taking the scenario seriously.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Avoid blame; use "I would."</p>
                <p className="text-xs text-slate">"I would take responsibility" is better than "It wasn't my fault." Shows maturity.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't blame others or make excuses.</p>
                <p className="text-xs text-slate">Focus on what YOU would do, not why it's someone else's fault. This shows professionalism and maturity.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't say "I don't know what I would do."</p>
                <p className="text-xs text-slate">Even if you're unsure, propose something reasonable. Showing decision-making is better than admitting helplessness.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">End on a positive note.</p>
                <p className="text-xs text-slate">Finish with what you learned or how you'd prevent it. Ends on an optimistic, growth-minded tone.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Read the scenario carefully.</p>
                <p className="text-xs text-slate">Spend 10 seconds understanding exactly what's being asked. Re-read if needed. This prevents misunderstanding your approach.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 6 Study Guide</p>
          <p className="text-xs text-slate/60">Difficult situations test your composure and problem-solving skills. Show maturity: acknowledge the problem, take action, and demonstrate growth. Examiners listen for how you handle pressure, not whether you avoid it.</p>
        </footer>

  
  

    </>
  );
}
