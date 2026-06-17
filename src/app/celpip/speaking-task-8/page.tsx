// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask8Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 8 Study Guide";

        function initializeVocabBank() {
          const filterContainer = document.getElementById('vocab-filters');
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === '8');
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

          const taskVocab = window.VOCAB.filter(v => v.task === '8');
          const filtered = filterType === 'All' ? taskVocab : taskVocab.filter(v => v.type === filterType);

          contentContainer.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-emerald2 italic">"${word.example}"</p>
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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 8 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Describe an unusual <span className="hero-line italic">situation</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              You're shown a strange or unexpected image. Describe it vividly to someone who can't see it — then ask them a specific question.
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
              <p className="text-base leading-relaxed text-ink">You are shown an <strong>image of an unusual or unexpected situation, object, or scene</strong>, and asked to call a friend or family member to describe it — because they cannot see it. The prompt always ends with a specific request. For example: <em className="text-steel">"You are in a furniture store and you see an unusual bed you'd like to buy, but you can't take a photo. Telephone a family member, describe the bed in detail, and ask whether you should buy it."</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing how clearly and vividly you can <strong>paint a picture with words</strong>: a strong overview, organized spatial detail, precise vocabulary, and a natural closing question. You have <strong>30 seconds to prepare</strong> and <strong>60 seconds to speak</strong>.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Precise, vivid descriptive language — strong adjectives, collocations, and spatial phrases instead of "big" and "nice."</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Logical spatial organization: overview first, then detail by detail (left → right, foreground → background) so the listener can picture it.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Smooth, confident delivery with minimal hesitation. You sound like you're genuinely describing something to a real person.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Accurate structures — present continuous for actions, prepositions of place, and a clear question at the end.</p>
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
                    <p className="text-xs font-semibold text-gold">Setup &amp; Overview (15s)</p>
                    <p className="text-xs text-fog/80">Greet the person, say why you're calling, and give a one-line overview of what you're looking at</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Detailed Description (35s)</p>
                    <p className="text-xs text-fog/80">Walk through the image spatially; describe colours, shapes, actions, and what makes it unusual</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Closing Question (10s)</p>
                    <p className="text-xs text-fog/80">Ask the specific question from the prompt and end the call naturally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring — folded in from the old Scoring tab */}
            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">How you are scored</p>
              <p className="text-sm text-slate">How examiners score Task 8 on a 12-point scale. Vivid description and clear spatial organization are the key indicators of a high score.</p>

              <div className="space-y-3 mt-4">
                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                    <span className="font-display text-xl text-emerald2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Precise, sophisticated descriptive language. Strong adjectives and collocations ("a sleek, contoured frame") instead of basic words.</p>
                    <p><strong>Coherence:</strong> Overview followed by a clear spatial tour. The listener can easily picture the scene.</p>
                    <p><strong>Fluency:</strong> Natural, confident delivery with very few pauses. Sounds like a real phone call.</p>
                    <p><strong>Grammar:</strong> Accurate present continuous, prepositions of place, and a well-formed closing question.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                    <span className="font-display text-xl text-amber2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Good descriptive range with some strong adjectives, though a few basic words ("big," "nice") slip in.</p>
                    <p><strong>Coherence:</strong> Generally organized; spatial language is used but transitions may be basic.</p>
                    <p><strong>Fluency:</strong> Mostly smooth with occasional pauses to think. Still easy to follow.</p>
                    <p><strong>Grammar:</strong> Mostly accurate; minor errors don't disrupt the description.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                    <span className="font-display text-xl text-rose2">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Basic, repetitive words ("there is," "I see"). Little vivid or precise description.</p>
                    <p><strong>Coherence:</strong> Description jumps around; hard for the listener to picture the layout.</p>
                    <p><strong>Fluency:</strong> Noticeable pauses and hesitations. May lose track mid-description.</p>
                    <p><strong>Grammar:</strong> Errors in tense or prepositions; the closing question may be missing or unclear.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-mist p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                    <span className="font-display text-xl text-slate">●</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate">
                    <p><strong>Vocabulary:</strong> Very limited range. Almost no descriptive detail.</p>
                    <p><strong>Coherence:</strong> Description is disjointed or very brief. No clear organization.</p>
                    <p><strong>Fluency:</strong> Frequent hesitations, fillers, or long silences. Choppy delivery.</p>
                    <p><strong>Grammar:</strong> Frequent errors. Meaning is often unclear; no closing question.</p>
                  </div>
                </div>
              </div>

              <div className="bg-fog rounded-2xl p-6 mt-6">
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
                <p className="text-sm text-ink">The listener <strong>can't see the image</strong> — so your job is to make them picture it. Lead with an overview, move through the scene in a logical order, use vivid words, point out what's unusual, and finish with the question from the prompt. That's what scores high.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A 3-part framework for describing an unusual image to someone who can't see it — overview, vivid detail, then the question from the prompt.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Setup &amp; Overview</span>
                    <span className="text-xs text-slate ml-2">~15 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Greet the person, explain why you're calling, and give a single-sentence overview so they know what to picture before you dive into detail.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"Hi [name], I'm calling because I'm looking at [the unusual thing] right now, and it's the strangest thing I've ever seen. Let me describe it — it's basically [one-line overview of what it is and its size/shape]."</p>
                </div>
                <div className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-sapphire-dark italic leading-relaxed">"Hi Mom, I'm calling from the furniture store because I've found the most unusual bed and I can't take a photo. It's a single bed, but the whole frame and mattress are curved into the shape of a person lying on their side."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Address the listener directly ("Hi Mom," "Hey George")</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Give the overview first — what is it, roughly how big, what shape</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Signal that it's unusual ("the strangest thing," "you won't believe this")</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Detailed Description</span>
                    <span className="text-xs text-slate ml-2">~35 seconds · the core of your response</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate"><strong>The heart of your response.</strong> Walk through the image in a logical order so the listener can build the picture in their mind. Move from the most prominent feature to the smaller details, and point out what makes it unusual.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"On the left/in the centre, there's [main feature]. Next to it / behind it, you can see [detail]. What makes it really unusual is [the odd part]. It's [colour/material/texture], and it looks like [comparison]."</p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-emerald2-dark italic leading-relaxed">"The frame is made of pale wood with a soft grey mattress on top. Instead of being flat, it dips and curves so your body slots into it perfectly — there's even a hollow for your head and a raised section for your knees. What makes it really unusual is that you can only sleep on your left side; there's no way to lie on your back."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use spatial language: "on the left," "in the centre," "towards the back"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Describe colour, material, size, and shape with precise adjectives</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use present continuous for any actions: "the players are wearing..."</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Highlight the unusual part and, if you can, guess why it exists</li>
                </ul>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden" style={{marginBottom: '2rem'}}>
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Closing Question</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-3" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Finish by asking the <strong>specific question stated in the prompt</strong> — whether you should buy it, whether they'd want to try it, what they think it is. Then close the call naturally.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"So, what do you think — [the question from the prompt]? Let me know soon because [reason / time pressure]. Talk to you in a bit!"</p>
                </div>
                <div className="bg-gold-light rounded-xl p-4 border-l-4 border-gold" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-gold-dark italic leading-relaxed">"So, do you think I should actually buy it? It's a bit pricey, and I know it's strange, but it looks incredibly comfortable. Let me know quickly because the store closes in 20 minutes. Thanks, talk soon!"</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Ask the exact question the prompt requires — don't forget this</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Add a quick reason or time pressure to make it sound real</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>End naturally — a short sign-off, not an abrupt stop</li>
                </ul>
              </div>
            </div>

            {/* Sample Answers — full responses built from the templates above, each with an image prompt */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-examples">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-white text-xs font-semibold flex items-center justify-center shrink-0">★</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Sample Answers</span>
                    <span className="text-xs text-slate ml-2">full 60-second responses · Setup → Description → Question</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-examples" className="accordion-body border-t border-mist px-6 py-5 space-y-5">
                <p className="text-sm text-slate">Task 8 always shows an <strong>unusual image</strong>. For each scenario below, an <strong>image prompt</strong> is included so you can generate the picture, then practise describing it to someone who can't see it and ask the closing question.</p>

                {/* Sample 1: Curved sleeping bed */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest">Scenario 1 · An unusual bed in a furniture store</p>
                  <p className="text-xs text-slate"><strong>Prompt:</strong> You're in a furniture store and see a bed you'd like to buy, but you can't take a photo. Call a family member, describe the bed, and ask whether you should buy it.</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"An unusual single bed in a modern furniture store, the pale wooden frame and soft grey mattress contoured into the shape of a person lying on their side, with a hollow for the head and a raised section for the knees, only allowing left-side sleeping, bright showroom lighting, photorealistic, product display shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Setup:</span> "Hi Mom, I'm calling from the furniture store because I've found the strangest bed and I can't take a photo. It's a single bed, but the whole thing is curved into the shape of a person lying on their side."</p>
                      <p><span className="not-italic font-semibold text-emerald2">Description:</span> "The frame is made of pale wood with a soft grey mattress on top. Instead of being flat, it dips and curves so your body slots right into it — there's even a hollow for your head and a raised part for your knees. What makes it really unusual is that you can only sleep on your left side; there's no way to lie on your back. It actually looks incredibly comfortable, almost like a cocoon."</p>
                      <p><span className="not-italic font-semibold text-amber2">Question:</span> "So, do you think I should buy it? It's a little pricey and definitely odd, but I love it. Let me know quickly because the store closes in 20 minutes. Thanks, talk soon!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 2: Chess boxing */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-sapphire uppercase tracking-widest">Scenario 2 · A strange sport at a sports centre</p>
                  <p className="text-xs text-slate"><strong>Prompt:</strong> You see two people playing an unusual sport at a sports centre. Call a friend, describe what the sport is and what each player is doing, and ask if they'd like to try it.</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"Two athletes inside a boxing ring wearing boxing gloves and shorts, but seated at a small table in the centre playing a game of chess while wearing noise-cancelling headphones, a referee standing beside them, a crowd watching in an indoor arena, bright spotlights, photorealistic, wide shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Setup:</span> "Hey George, you won't believe what I'm watching at the sports centre. There are two people in a boxing ring, but instead of fighting, they're playing chess!"</p>
                      <p><span className="not-italic font-semibold text-emerald2">Description:</span> "Both players are wearing boxing gloves and shorts, and they're sitting at a small table right in the centre of the ring. They've got big headphones on, probably to block out the crowd. One of them is leaning forward, carefully moving a chess piece, while the other is waiting with his gloves resting on the table. There's a referee standing beside them and a whole audience watching. Apparently it's a real sport where you switch between boxing rounds and chess rounds."</p>
                      <p><span className="not-italic font-semibold text-amber2">Question:</span> "It looks fascinating — would you be interested in trying it with me sometime? I think it would be a fun challenge. Let me know what you think!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 3: Upside-down house */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest">Scenario 3 · A bizarre building on the street</p>
                  <p className="text-xs text-slate"><strong>Prompt:</strong> You're walking through town and see an unusual building. Call a friend, describe it in detail, and ask if they want to visit it with you this weekend.</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A completely upside-down house built as a tourist attraction, the roof on the ground and the foundation pointing at the sky, an upside-down car parked on the inverted driveway, bright blue sky, people taking photos in front of it, daytime, photorealistic, wide street view."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Setup:</span> "Hi Priya, I'm walking through town and I'm standing in front of the most bizarre building — it's a whole house built completely upside down!"</p>
                      <p><span className="not-italic font-semibold text-emerald2">Description:</span> "The roof is sitting flat on the ground, and the foundation is pointing straight up at the sky. Even the windows and the front door are upside down. On the driveway, there's a car parked upside down too, as if it crashed from above. It's painted in bright colours, and there's a crowd of people in front taking photos. Apparently you can go inside, where the furniture is also mounted on the ceiling."</p>
                      <p><span className="not-italic font-semibold text-amber2">Question:</span> "It's such a fun attraction — do you want to come and visit it with me this weekend? I think it'd make for some hilarious photos. Let me know!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 4: Giant rubber duck */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-amber2 uppercase tracking-widest">Scenario 4 · An unusual sight at the harbour</p>
                  <p className="text-xs text-slate"><strong>Prompt:</strong> You're at the waterfront and see something unexpected floating in the harbour. Call a family member, describe what you see, and ask if they've heard anything about it.</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"A giant inflatable yellow rubber duck, several storeys tall, floating in a city harbour next to the waterfront, dwarfing the boats around it, crowds of people gathered on the pier taking photos, blue sky with light clouds, daytime, photorealistic, wide-angle shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Setup:</span> "Hi Dad, I'm down at the harbour and there's a giant rubber duck floating in the water — and I mean enormous, several storeys tall!"</p>
                      <p><span className="not-italic font-semibold text-emerald2">Description:</span> "It's a bright yellow inflatable duck, the kind you'd see in a bathtub, except it completely dwarfs the boats around it. It's bobbing gently in the middle of the harbour, right next to the pier. There's a huge crowd gathered along the waterfront, and almost everyone is taking photos. It looks cheerful and a little surreal against the city skyline behind it. I think it might be some kind of public art installation."</p>
                      <p><span className="not-italic font-semibold text-amber2">Question:</span> "Have you heard anything about it on the news? I'm curious how long it'll be here. Call me back when you can!"</p>
                    </div>
                  </div>
                </div>

                {/* Sample 5: Vending machine */}
                <div className="bg-fog rounded-xl p-5 space-y-4">
                  <p className="text-xs font-semibold text-rose2 uppercase tracking-widest">Scenario 5 · A strange vending machine</p>
                  <p className="text-xs text-slate"><strong>Prompt:</strong> You spot an unusual vending machine in a mall. Call a friend, describe what it sells and how it looks, and ask if they think you should try it.</p>
                  <div className="bg-white rounded-lg border border-mist p-4">
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">🖼️ Image generation prompt</p>
                    <p className="text-sm text-ink italic leading-relaxed">"An unusual vending machine in a shopping mall that dispenses live potted plants instead of snacks, glass front showing rows of small green succulents and flowers in pots, glowing interior lights, a digital touchscreen on the front, modern mall corridor in the background, photorealistic, eye-level shot."</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Sample answer</p>
                    <div className="text-sm text-ink italic leading-relaxed space-y-2">
                      <p><span className="not-italic font-semibold text-sapphire">Setup:</span> "Hey Sam, I'm at the mall and I've just found the weirdest vending machine — it doesn't sell snacks, it sells live plants!"</p>
                      <p><span className="not-italic font-semibold text-emerald2">Description:</span> "It's about the size of a normal drinks machine, with a big glass front. Inside, there are rows and rows of little potted plants — mostly succulents and small flowers — all lit up with soft glowing lights. On the front there's a digital touchscreen where you pick the plant you want, pay, and it drops down gently like a chocolate bar would. It looks really modern and the plants seem perfectly healthy. I've honestly never seen anything like it."</p>
                      <p><span className="not-italic font-semibold text-amber2">Question:</span> "Do you think I should try it and grab one for my desk? Let me know — I'm tempted to buy a little cactus right now!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Language Toolkit */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-toolkit">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Description Language Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-toolkit" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-sapphire">Opening &amp; Overview (Setting the Scene)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Opening Lines</p>
                      <p className="text-sm text-ink italic">"Hi [name], you won't believe what I'm looking at..."</p>
                      <p className="text-sm text-ink italic">"I'm calling because I've just seen the strangest thing..."</p>
                      <p className="text-sm text-ink italic">"Let me describe it since you can't see it..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Giving the Overview</p>
                      <p className="text-sm text-ink italic">"Basically, it's a [thing] about the size of [comparison]."</p>
                      <p className="text-sm text-ink italic">"At first glance it looks like [X], but..."</p>
                      <p className="text-sm text-ink italic">"The whole thing is roughly [shape/size]."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-emerald2">Spatial Language (Guiding the Listener)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Position &amp; Location</p>
                      <p className="text-sm text-ink italic">"On the left / on the right / in the centre..."</p>
                      <p className="text-sm text-ink italic">"In the foreground / towards the back..."</p>
                      <p className="text-sm text-ink italic">"At the top / along the bottom / in the corner..."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Connecting Details</p>
                      <p className="text-sm text-ink italic">"Next to it / beside that / right above..."</p>
                      <p className="text-sm text-ink italic">"Behind it / in front of / surrounding it..."</p>
                      <p className="text-sm text-ink italic">"Attached to / sitting on top of..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-amber2">Describing Shape, Size, Material & Colour</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Shape & Size</p>
                      <p className="text-sm text-ink italic">"It's curved / contoured / cylindrical..."</p>
                      <p className="text-sm text-ink italic">"Roughly [X] metres tall / wide..."</p>
                      <p className="text-sm text-ink italic">"About the size of a [comparison]..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Material & Texture</p>
                      <p className="text-sm text-ink italic">"Made of pale wood / brushed metal / glass..."</p>
                      <p className="text-sm text-ink italic">"It has a smooth / glossy / matte finish..."</p>
                      <p className="text-sm text-ink italic">"The surface looks soft / sleek / textured..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Colour</p>
                      <p className="text-sm text-ink italic">"A vibrant / muted / deep shade of..."</p>
                      <p className="text-sm text-ink italic">"Bright yellow / pale grey / dark green..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Comparisons</p>
                      <p className="text-sm text-ink italic">"It looks like a giant [X]..."</p>
                      <p className="text-sm text-ink italic">"It reminds me of [familiar object]..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-rose2">Upgrade Basic Adjectives (Level 9 Words)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink"><strong>Big</strong> → sizable, massive, enormous, colossal</p>
                    <p className="text-sm text-ink"><strong>Pretty / nice</strong> → stunning, striking, exquisite, eye-catching</p>
                    <p className="text-sm text-ink"><strong>Interesting</strong> → fascinating, intriguing, captivating, peculiar</p>
                    <p className="text-sm text-ink"><strong>Strange</strong> → bizarre, unusual, quirky, one-of-a-kind</p>
                    <p className="text-sm text-ink"><strong>Good</strong> → superb, impressive, remarkable, well-made</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-violet2">Pointing Out What's Unusual & Speculating</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink italic">"What makes it really unusual is..."</p>
                    <p className="text-sm text-ink italic">"The strangest part is that..."</p>
                    <p className="text-sm text-ink italic">"I've never seen anything quite like it..."</p>
                    <p className="text-sm text-ink italic">"I think it might be for [purpose]..."</p>
                    <p className="text-sm text-ink italic">"My guess is that it's used to..."</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-gold">Closing Question (Don't Forget This!)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <p className="text-xs font-semibold text-slate mb-2">Always end with the exact request from the prompt</p>
                    <p className="text-sm text-ink italic">"So, what do you think — should I buy it?"</p>
                    <p className="text-sm text-ink italic">"Would you be interested in trying it sometime?"</p>
                    <p className="text-sm text-ink italic">"Have you ever heard of anything like this?"</p>
                    <p className="text-xs font-semibold text-slate mt-3">Key Principle:</p>
                    <p className="text-sm text-ink italic">The listener can't see the image, so describe it in a logical order and use vivid words — but never forget to ask the specific question the prompt requires. Missing the question costs you marks.</p>
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
                <p className="text-sm font-semibold text-ink mb-2">In 30 seconds, lock in an overview + the order you'll describe things.</p>
                <p className="text-xs text-slate">Decide your one-line overview and a path through the image (left → right, or biggest feature → smallest). Note the closing question so you don't forget it.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Talk like it's a real phone call.</p>
                <p className="text-xs text-slate">Greet the person, sound a little excited about how unusual it is, and speak naturally. The task is framed as calling a friend or family member — so make it sound conversational.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Lead with an overview before the details.</p>
                <p className="text-xs text-slate">"Basically, it's a bed shaped like a sleeping person" gives the listener a frame. Then fill in the details so they can build the picture in their mind.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use spatial language and present continuous.</p>
                <p className="text-xs text-slate">"On the left, a man is moving a chess piece; behind him, a referee is standing." Prepositions of place plus present continuous make the scene vivid and easy to follow.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Swap "baby English" for precise adjectives.</p>
                <p className="text-xs text-slate">Replace "big," "nice," and "strange" with "enormous," "striking," and "bizarre." Precise, vivid vocabulary is what pushes you into the 9+ band.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't forget the closing question.</p>
                <p className="text-xs text-slate">Every prompt ends with a specific request — should I buy it, would you try it, have you seen this. Skipping it is one of the biggest score-killers on this task.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't just list objects randomly.</p>
                <p className="text-xs text-slate">"There's a duck. There's a boat. There are people." is hard to picture. Connect details spatially: "In the middle of the harbour, a giant duck is floating, dwarfing the boats around it."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Point out — and guess at — what's unusual.</p>
                <p className="text-xs text-slate">Name the odd part clearly ("what makes it strange is...") and offer a quick guess at why it exists. This shows engagement and fills your 60 seconds naturally.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 8 Study Guide</p>
          <p className="text-xs text-slate/60">Describe the unusual image so vividly that the listener can picture it without seeing it. Lead with an overview, move through the scene in a logical order, use precise vocabulary, and always finish with the question from the prompt.</p>
        </footer>

  
  

    </>
  );
}
