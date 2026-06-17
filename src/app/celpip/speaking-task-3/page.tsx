// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask3Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 3 Study Guide";

        // Vocab bank rendering for Task 3
        function initializeVocabBank() {
          const vocabFilters = document.getElementById('vocab-filters');
          const vocabContent = document.getElementById('vocab-content');

          if (!vocabFilters) return;

          // Get unique types for task 3
          const task3Words = window.VOCAB.filter(v => v.task === '3');
          const types = ['all', ...new Set(task3Words.map(v => v.type))];

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
          let filtered = window.VOCAB.filter(v => v.task === '3');

          if (filterType !== 'all') {
            filtered = filtered.filter(v => v.type === filterType);
          }

          vocabContent.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2"><strong>Meaning:</strong> ${word.meaning}</p>
              <p class="text-xs text-slate italic"><strong>Example:</strong> "${word.example}"</p>
              <span class="inline-block mt-3 text-xs font-medium text-amber2 bg-amber2-light px-2 py-1 rounded">${word.type}</span>
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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 3 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Describe a <span className="hero-line italic">scene</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Everything you need to score 9+ on Task 3 — structure, vocab, scoring rubric, practice scenarios, and delivery tips.
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
              <p className="text-base leading-relaxed text-ink">You will be shown a photograph and asked to describe what you see in detail. You have <strong>30 seconds to prepare</strong> and <strong>60 seconds to speak</strong>. There is no question — just an instruction like <em>"Describe the image in as much detail as possible."</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to organize ideas spatially, use descriptive vocabulary, apply spatial language, and speak fluently without long pauses.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Range and precision of words used to describe what you see. Adjectives and spatial language are critical.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Logical flow from one detail to the next — not jumping around. A clear spatial path (foreground → background).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Smooth delivery with minimal hesitation or filler sounds. Natural rhythm without rushing.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Accuracy</span>
                  <p className="text-sm leading-relaxed text-ink">Grammar, tense consistency (present continuous for actions), and sentence variety.</p>
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
                    <p className="text-xs font-semibold text-gold">Setting (10s)</p>
                    <p className="text-xs text-fog/80">What's the overall scene? Indoor/outdoor, time of day, mood or atmosphere?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Details (35s)</p>
                    <p className="text-xs text-fog/80">Scan the image: foreground → middle → background. What people, objects, colors, actions?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Impression (15s)</p>
                    <p className="text-xs text-fog/80">What do you think or feel about the scene? Is it peaceful, chaotic, beautiful, ordinary?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring — folded in from the old Scoring tab */}
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">How you are scored</p>
              <p className="text-sm text-slate">How examiners score Task 3 on a 12-point scale. The bands below show typical language for each score tier.</p>

              <div className="space-y-3 mt-4">
                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                    <span className="font-display text-xl text-emerald2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Precise descriptive language. Uses spatial language ("foreground," "nestled") naturally. Adjectives are varied and appropriate ("vibrant" vs. "bright").</p>
                    <p><strong>Coherence:</strong> Description follows a logical path (e.g., foreground → background). Transitions are smooth and natural.</p>
                    <p><strong>Fluency:</strong> Speaks smoothly with very few pauses. Rhythm is natural, not rushed or halting.</p>
                    <p><strong>Accuracy:</strong> Present continuous tense for actions is consistent. Grammar is accurate; sentences are varied.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                    <span className="font-display text-xl text-amber2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Good range of descriptive words. Spatial language is used but may not always be flawless. Some repetition of adjectives.</p>
                    <p><strong>Coherence:</strong> Description is organized but transitions may be basic ("and then," "also"). Generally easy to follow.</p>
                    <p><strong>Fluency:</strong> Mostly fluent with occasional pauses to think. Some hesitation but not excessive.</p>
                    <p><strong>Accuracy:</strong> Present continuous is mostly correct. Some minor grammatical errors that don't disrupt meaning.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                    <span className="font-display text-xl text-rose2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Basic descriptive words. May struggle with spatial language. Heavy repetition ("there is," "I see").</p>
                    <p><strong>Coherence:</strong> Description may jump around or lack clear organization. Difficult to follow the spatial layout.</p>
                    <p><strong>Fluency:</strong> Noticeable pauses and hesitations. May lose track mid-description.</p>
                    <p><strong>Accuracy:</strong> Errors in present continuous or other tenses. Some sentences are unclear.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                    <span className="font-display text-xl text-slate">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Very limited range. Little to no spatial language. Heavy repetition or inaccuracy.</p>
                    <p><strong>Coherence:</strong> Description is disjointed or very brief. No clear logical flow.</p>
                    <p><strong>Fluency:</strong> Frequent hesitations, filler words, or long silences. Choppy delivery.</p>
                    <p><strong>Accuracy:</strong> Frequent grammatical errors. Meaning is sometimes unclear.</p>
                  </div>
                </div>
              </div>

              <div className="bg-fog rounded-2xl p-6 mt-6">
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
                <p className="text-sm text-ink">A 9–10 speaker describes the scene with natural pacing and good vocabulary. They use some spatial language, their descriptions are organized (even if not perfectly), and their grammar is mostly accurate. They are <strong>not</strong> perfect, and that's fine.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A proven 3-part structure + scenario-specific templates. Use these as mental scaffolding, not scripts.</p>

            {/* Part 1: Setting */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Setting</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Establish the overall scene quickly — location, time, mood, and general impression. This orients the listener.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Where and when?</strong> "This is an outdoor market during the day" or "a cozy café interior in the evening."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>What's the overall mood?</strong> "It looks busy and lively" or "very peaceful and serene."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>One striking detail.</strong> A splash of color, weather, or atmosphere. "The sky is clear and bright."</li>
                </ul>
                <div className="bg-fog rounded-xl p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Opening templates</p>
                    <div className="space-y-2 text-sm text-ink">
                      <p className="italic leading-relaxed">"This is a vibrant outdoor market scene, taken during the day. The atmosphere looks bustling and lively."</p>
                      <p className="italic leading-relaxed">"The image shows a quiet, serene beach at sunset. The colors are very warm and peaceful."</p>
                      <p className="italic leading-relaxed">"I can see a busy city street with tall buildings. It looks like the middle of the afternoon, and there's a lot of activity."</p>
                      <p className="italic leading-relaxed">"This photograph captures a cozy café interior. The lighting is warm, and it appears to be a relaxing space."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Details */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Details</span>
                    <span className="text-xs text-slate ml-2">~35 seconds · the core of your description</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>The heart of your response.</strong> Scan systematically (foreground → background, or left → right). Describe people, objects, colors, and actions.</p>
                <div className="bg-sapphire-light rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-sapphire-dark mb-2">Key techniques:</p>
                  <ul className="space-y-1 text-xs text-sapphire-dark">
                    <li>• Use <strong>present continuous tense</strong>: "is walking," "are playing," "are selling"</li>
                    <li>• Organize spatially: "In the foreground," "In the middle," "In the background"</li>
                    <li>• Be <strong>specific</strong>: Not just "a person" but "a young man wearing a blue shirt is sitting"</li>
                    <li>• Connect details with transitions: "Meanwhile," "Additionally," "Next to that," "Beside the..."</li>
                  </ul>
                </div>
                <div className="bg-fog rounded-xl p-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 1: Market or Bazaar</p>
                    <p className="text-sm text-ink italic leading-relaxed">"In the foreground, there are colorful fruit and vegetable stalls overflowing with fresh produce. Vendors are wearing traditional clothing and are actively arranging items. In the middle section, customers are browsing and selecting goods, with some carrying bags. I can see vibrant blues, reds, yellows, and greens. In the background, more stalls are visible, and there are tall buildings. The overall atmosphere is energetic and crowded."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 2: Beach Scene</p>
                    <p className="text-sm text-ink italic leading-relaxed">"The foreground shows golden sand where several children are building sandcastles, and their parents are watching nearby. The water in the middle is a beautiful blue color, and a few swimmers are enjoying the ocean. To the left, colorful beach umbrellas are providing shade for sunbathing adults. In the background, I can see palm trees and some beach bars or huts. The sky is mostly clear with a few white clouds."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 3: Park or Playground</p>
                    <p className="text-sm text-ink italic leading-relaxed">"In the foreground, children are playing on various playground equipment — some are climbing, others are sliding. A few parents are sitting on benches nearby, supervising. To the left, teenagers are playing frisbee on an open grass area. In the background, there are tall green trees providing shade. Adults and children are walking along paths throughout the park. Colorful clothing contrasts against the green grass and trees."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Scenario 4: Café or Restaurant Interior</p>
                    <p className="text-sm text-ink italic leading-relaxed">"The foreground shows several small tables with customers sitting and enjoying beverages or food. I can see chairs in different colors and styles. To the left and right, more seating areas are visible with people reading books or working on laptops. The walls are decorated with paintings and warm lighting fixtures. Behind the counter, staff members are preparing drinks. The overall atmosphere is calm and inviting, with natural light coming through large windows."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 3: Impression */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber2 text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Impression / Conclusion</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Wrap up with your personal take or interpretation. What does this scene make you think or feel? Show opinion and confidence.</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>React emotionally:</strong> "It looks peaceful and calming" or "The scene seems vibrant and energetic."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Make an observation:</strong> "Overall, it captures a typical day in this community" or "This reflects the local culture well."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Connect to larger idea:</strong> "I would enjoy visiting a place like this" or "It reminds me of similar scenes I've experienced."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span><strong>Be specific, not generic:</strong> Instead of "It's nice," say "I appreciate the bright colors and the sense of community."</li>
                </ul>
                <div className="bg-fog rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider">Closing templates</p>
                  <div className="space-y-2 text-sm text-ink italic">
                    <p>"Overall, the scene captures the energy and vibrancy of a bustling marketplace. It looks like a place full of life and cultural richness."</p>
                    <p>"This is a very peaceful, serene moment. The combination of the sunset colors and the relaxed atmosphere would make it an ideal place to unwind."</p>
                    <p>"The park appears to be a welcoming community space where people of all ages gather. It seems like the kind of place where many families would enjoy spending their free time."</p>
                    <p>"The café looks like a cozy retreat where people can relax and socialize. I think it would be a pleasant place to spend an afternoon."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus: Useful Spatial Phrases */}
            <div className="bg-violet2-light rounded-2xl border border-violet2 overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-violet2/5 transition-colors" data-target="struct-spatial">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Spatial Language Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-spatial" className="accordion-body border-t border-violet2/30 px-6 py-5 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink">
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Position & Location:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• In the foreground / In the background</li>
                      <li>• In the center / On the left / On the right</li>
                      <li>• In the top left corner / In the bottom right</li>
                      <li>• In front of / Behind / Beside / Next to</li>
                      <li>• Surrounding / Along / Across</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Action & Movement:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Is walking / Are playing / Is sitting</li>
                      <li>• Are gathered / Are standing / Are relaxing</li>
                      <li>• Is carrying / Are holding / Is wearing</li>
                      <li>• Is enjoying / Are interacting / Is watching</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Color & Texture:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Vibrant / Muted / Bright / Dull</li>
                      <li>• Colorful / Monochrome / Golden / Earthy</li>
                      <li>• Soft / Rough / Smooth / Textured</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-violet2-dark mb-2">Transitions & Connections:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Meanwhile / In addition to / Additionally</li>
                      <li>• To the left of that / Beyond / Further back</li>
                      <li>• Scattered throughout / Dispersed across</li>
                      <li>• Interestingly / Notably / It's worth mentioning</li>
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
                    <span className="text-xs text-slate ml-2">full 60-second responses · Setting → Details → Impression</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-samples" className="accordion-body border-t border-mist px-6 py-5 space-y-5">
                <p className="text-sm text-slate">Each sample combines the three parts above into a complete answer. Since Task 3 always shows a photograph, an <strong>image prompt</strong> is included so you can generate the scene and practise describing it aloud.</p>

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
                      <p><span className="not-italic font-semibold text-sapphire">Setting:</span> "This is a vibrant outdoor market scene, taken during the day. The atmosphere looks bustling and lively, and the colours immediately stand out."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Details:</span> "In the foreground, there are colourful fruit and vegetable stalls overflowing with fresh produce. The vendors are wearing traditional clothing and are actively arranging their items. In the middle section, customers are browsing and selecting goods, and some are carrying shopping bags. I can see vibrant blues, reds, yellows, and greens everywhere. In the background, more stalls are visible, and there are tall buildings rising above the crowd."</p>
                      <p><span className="not-italic font-semibold text-amber2">Impression:</span> "Overall, the scene captures the energy and vibrancy of a bustling marketplace. It looks like a place full of life and cultural richness, and I would really enjoy visiting somewhere like this."</p>
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
                      <p><span className="not-italic font-semibold text-sapphire">Setting:</span> "The image shows a quiet, serene beach at sunset. The colours are very warm and peaceful, with the sky glowing in shades of orange and pink."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Details:</span> "The foreground shows golden sand where a few people are walking slowly along the shore. The water in the middle is a calm blue colour, and it reflects the warm light of the setting sun. To the left, there are some palm trees swaying gently, and in the background I can see small beach huts and a few scattered clouds in the sky. Everything looks soft and still."</p>
                      <p><span className="not-italic font-semibold text-amber2">Impression:</span> "This is a very peaceful, serene moment. The combination of the sunset colours and the relaxed atmosphere would make it an ideal place to unwind after a long day."</p>
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
                      <p><span className="not-italic font-semibold text-sapphire">Setting:</span> "This photograph captures a cozy café interior. The lighting is warm, and it appears to be a relaxing, welcoming space."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Details:</span> "The foreground shows several small tables where customers are sitting and enjoying beverages or food. I can see chairs in different colours and styles. To the left and right, more seating areas are visible, with some people reading books and others working on laptops. The walls are decorated with paintings and warm lighting fixtures. Behind the counter, staff members are preparing drinks, and natural light is coming through the large windows."</p>
                      <p><span className="not-italic font-semibold text-amber2">Impression:</span> "Overall, the café looks like a cozy retreat where people can relax and socialise. I think it would be a pleasant place to spend an afternoon with a good book."</p>
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
                      <p><span className="not-italic font-semibold text-sapphire">Setting:</span> "This image shows a breathtaking mountain landscape, taken during the day. The scene feels vast, fresh, and very peaceful."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Details:</span> "In the foreground, there are tall green pine trees and some large rocks scattered across the ground. In the middle, a wide valley stretches out, and I can see a winding river running through it. In the background, there are tall, snow-capped peaks rising into a clear blue sky with a few white clouds. The colours range from deep greens to soft greys and bright whites, which gives the scene a real sense of scale."</p>
                      <p><span className="not-italic font-semibold text-amber2">Impression:</span> "Overall, the landscape looks calm and majestic. It reminds me of peaceful hiking trips, and it would be a wonderful place to escape from the noise of the city."</p>
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
                      <p><span className="not-italic font-semibold text-sapphire">Setting:</span> "This image shows a lively street festival or cultural celebration. The atmosphere looks joyful and energetic, and the whole street is full of colour."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Details:</span> "In the foreground, large crowds of people are celebrating, and many of them are smiling and taking photos. To the left and right, colourful decorations and banners are hanging across the street. In the middle, performers in traditional costumes are dancing, while food stalls line both sides of the road. In the background, I can see festive lights and even more people gathered together. The bright colours really stand out against the busy scene."</p>
                      <p><span className="not-italic font-semibold text-amber2">Impression:</span> "Overall, the scene captures the excitement and community spirit of a cultural festival. It looks like the kind of event where people of all ages come together to celebrate, and I would love to experience it in person."</p>
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
              <button className="filter-btn filter-inactive px-4 py-1.5 rounded-full border text-xs font-medium" data-category="mistakes">Mistakes</button>
            </div>

            <div className="space-y-3">
              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">In 30 seconds, scan the image quickly.</p>
                <p className="text-xs text-slate">Don't overthink. Quickly note: foreground objects, key colors, any people/activity, overall mood. Then speak.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Plan a path: foreground → background.</p>
                <p className="text-xs text-slate">Mentally trace how you'll describe the image left-to-right or near-to-far. This prevents jumping around.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Speak at a natural pace — don't rush.</p>
                <p className="text-xs text-slate">You have 60 seconds. If you finish early, add more details or repeat observations. Silence at the end is worse than a bit of repetition.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Use pauses strategically.</p>
                <p className="text-xs text-slate">Pause between ideas: "In the foreground, I see... [pause] ...and in the background..." This creates structure and sounds more fluent than rushing.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use present continuous for actions.</p>
                <p className="text-xs text-slate">Not "A woman walks." Say "A woman is walking." This is automatic in high-scoring answers for scene descriptions.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Replace "I see" with spatial language.</p>
                <p className="text-xs text-slate">Don't say "I see trees, I see people, I see water." Instead: "In the foreground, there are trees. In the background, people are..." Much more fluent.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't describe colors alone.</p>
                <p className="text-xs text-slate">"There are red and blue" is vague. Better: "I can see red umbrellas and blue chairs" — connect colors to objects.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Avoid listing without connection.</p>
                <p className="text-xs text-slate">Bad: "There's a person. There's a building. There's a car." Good: "In the foreground, a person is standing next to a car. Behind them, a building is visible."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't apologize or say "I think maybe..."</p>
                <p className="text-xs text-slate">Be confident: "There are children playing" is better than "There might be some kids, I think, possibly playing." Confidence scores higher.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 3 Study Guide</p>
          <p className="text-xs text-slate/60">Master the art of scene description. Practice with diverse images, organize your thoughts spatially, and let your vocabulary shine through.</p>
        </footer>

  
  

    </>
  );
}
