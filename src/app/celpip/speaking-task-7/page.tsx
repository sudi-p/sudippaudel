// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipSpeakingTask7Page() {
  useEffect(() => {
    document.title = "CELPIP Speaking — Task 7 Study Guide";

        function initializeVocabBank() {
          const filterContainer = document.getElementById('vocab-filters');
          const contentContainer = document.getElementById('vocab-content');

          if (!window.VOCAB) return;

          const taskVocab = window.VOCAB.filter(v => v.task === '7');
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

          const taskVocab = window.VOCAB.filter(v => v.task === '7');
          const filtered = filterType === 'All' ? taskVocab : taskVocab.filter(v => v.type === filterType);

          contentContainer.innerHTML = filtered.map(word => `
            <div class="bg-white rounded-xl border border-mist p-4">
              <p class="text-sm font-semibold text-ink mb-1">${word.word}</p>
              <p class="text-xs text-slate mb-2">${word.meaning}</p>
              <p class="text-xs text-rose2 italic">"${word.example}"</p>
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
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">Speaking · Task 7 of 8</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Express your <span className="hero-line italic">opinions</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              State your views clearly and support them with relevant examples and thoughtful reasoning.
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
              <p className="text-base leading-relaxed text-ink">You are asked to state and explain your opinion on a topic. For example: <em className="text-steel">"Should young people travel before starting their careers?"</em></p>
              <p className="text-base leading-relaxed text-ink mt-3">The examiner is testing your ability to express a clear viewpoint, support it with reasons and examples, speak confidently, and use persuasive language naturally.</p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">What examiners score you on</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-sapphire-light text-sapphire-dark shrink-0 mt-0.5">Fluency</span>
                  <p className="text-sm leading-relaxed text-ink">Smooth, confident delivery. Speaking naturally about your views shows comfort with the topic.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald2-light text-emerald2-dark shrink-0 mt-0.5">Coherence</span>
                  <p className="text-sm leading-relaxed text-ink">Opinion is clear, reasons are logical, and examples support your view. Easy to follow.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-amber2-light text-amber2-dark shrink-0 mt-0.5">Vocabulary</span>
                  <p className="text-sm leading-relaxed text-ink">Words that express opinion, reasoning, and persuasion. Avoid repetition; show range.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-rose2-light text-rose2-dark shrink-0 mt-0.5">Grammar</span>
                  <p className="text-sm leading-relaxed text-ink">Complex sentences and varied tenses. Conditional structures add sophistication.</p>
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
                    <p className="text-xs font-semibold text-gold">Statement (10s)</p>
                    <p className="text-xs text-fog/80">Clearly state your opinion on the topic</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fog/20 border border-fog/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-fog text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fog">Support (40s)</p>
                    <p className="text-xs text-fog/80">Give 2–3 reasons with specific examples</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold">Closing (10s)</p>
                    <p className="text-xs text-fog/80">Restate your position and summarize why</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: STRUCTURE / TEMPLATE
          ══════════════════════════════════════════ */}
          <div id="pane-structure" className="pane space-y-4">
            <p className="text-sm text-slate">A 3-part framework for expressing opinions clearly — speak with conviction and support your views.</p>

            {/* Part 1 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sapphire text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Statement</span>
                    <span className="text-xs text-slate ml-2">~10 seconds</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-1" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Open with a clear statement of your opinion. Don't be wishy-washy or ambiguous.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"I believe [your opinion]. In my view, [reason]. This is because [why it matters]."</p>
                </div>
                <div className="bg-sapphire-light rounded-xl p-4 border-l-4 border-sapphire" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-sapphire-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-sapphire-dark italic leading-relaxed">"I believe young people should travel before starting their careers. In my view, travel builds character and confidence. This is because exposure to different cultures teaches resilience."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Start with "I believe," "In my opinion," or "I think"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Be definitive — avoid "maybe" or "perhaps"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Give one preview reason to orient the listener</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald2 text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="text-sm font-semibold text-ink">Supporting Reasons</span>
                    <span className="text-xs text-slate ml-2">~40 seconds · 2–3 reasons</span>
                  </div>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-2" className="accordion-body border-t border-mist px-6 py-5 space-y-4">
                <p className="text-sm text-slate">Develop 2–3 reasons with specific examples. This is where you prove your opinion is thoughtful.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"First, [reason 1]. For example, [specific example]. Second, [reason 2], which demonstrates [why it's important]."</p>
                </div>
                <div className="bg-emerald2-light rounded-xl p-4 border-l-4 border-emerald2" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-emerald2-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-emerald2-dark italic leading-relaxed">"First, travel teaches problem-solving skills. For example, navigating a foreign city on a budget forces you to be resourceful. Second, cultural immersion builds empathy, which is invaluable in any career."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use transitions: "First," "Second," "Additionally"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Include concrete examples, not abstract ideas</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Show why each reason matters — don't just list them</li>
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
                <p className="text-sm text-slate">Restate your opinion and briefly summarize why it's valid. Leave a strong final impression.</p>
                <div className="bg-fog rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">Template</p>
                  <p className="text-sm text-ink italic leading-relaxed">"In conclusion, I firmly believe [restate opinion]. The evidence clearly shows that [summary of key reason]."</p>
                </div>
                <div className="bg-gold-light rounded-xl p-4 border-l-4 border-gold" style={{borderRadius: '0 12px 12px 0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Example</p>
                  <p className="text-sm text-gold-dark italic leading-relaxed">"In conclusion, I firmly believe young people benefit greatly from traveling. The evidence clearly shows that travel builds both practical skills and personal confidence."</p>
                </div>
                <ul className="space-y-1.5 text-sm text-ink">
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Use closing phrases: "In conclusion," "To summarize"</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Restate your opinion firmly — not tentatively</li>
                  <li className="flex gap-2"><span className="text-gold shrink-0">✦</span>Keep it brief — 2 sentences maximum</li>
                </ul>
              </div>
            </div>

            {/* Complete Opinion Examples */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-examples">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Complete Opinion Examples</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-examples" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div className="border-l-3 border-sapphire pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 1: Young People Traveling Before Careers</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Statement:</strong> "I firmly believe young people should travel before starting their careers because it builds essential life skills and personal confidence."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Support:</strong> "First, travel teaches practical problem-solving skills. For example, navigating an unfamiliar city, managing a budget, and handling unexpected situations forces you to think creatively and independently. Second, cultural immersion builds empathy and global perspective, which makes you a better employee and colleague. For instance, someone who has lived in different countries understands diverse viewpoints and can work effectively with international teams. Third, travel boosts confidence in ways education alone cannot. When you overcome challenges in a foreign country, you return home knowing you can handle difficult situations confidently."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, I firmly believe travel before a career is invaluable. The evidence clearly shows that travel builds practical skills, emotional maturity, and confidence — all essential for long-term success."</p>
                </div>

                <div className="border-l-3 border-emerald2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 2: Remote Work vs. Office Work</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Statement:</strong> "I strongly believe remote work is more productive than working in an office because it reduces distractions and increases flexibility."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Support:</strong> "First, remote workers face fewer interruptions. In offices, you're constantly interrupted by colleagues, meetings, and office noise — this fragments your focus. When working from home, you control your environment and can dedicate uninterrupted time to focused work. Research actually shows remote workers complete tasks 30% faster. Second, flexibility improves work-life balance, which increases motivation. For example, you can attend your child's school event without asking for time off, reducing stress and burnout. Third, commuting time is eliminated, giving workers two extra hours daily. People can use this time for exercise, family, or better work preparation — all of which improve productivity."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, remote work is demonstrably more productive. The evidence clearly shows fewer distractions, better flexibility, and time savings — all leading to superior performance."</p>
                </div>

                <div className="border-l-3 border-amber2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 3: Technology in Schools</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Statement:</strong> "I believe technology should be encouraged in schools because it prepares students for the modern workforce and enhances learning."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Support:</strong> "First, technology prepares students for reality. Every modern job requires digital skills — coding, data analysis, digital communication. Schools that limit technology leave students unprepared. For example, companies now expect basic proficiency in cloud tools, spreadsheets, and online collaboration platforms. Second, technology makes learning more engaging and interactive. Educational apps allow students to learn at their own pace, receive instant feedback, and visualize complex concepts. A student struggling with mathematics benefits from interactive simulations more than from a textbook. Third, technology promotes digital citizenship and critical thinking. Students learn to evaluate online information, recognize misinformation, and use technology responsibly — skills essential in today's world."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, technology in schools is not just beneficial — it's essential. The evidence clearly shows it prepares students for modern careers and enhances learning outcomes."</p>
                </div>

                <div className="border-l-3 border-rose2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 4: Social Media's Impact on Society</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Statement:</strong> "I believe social media has more negative effects than positive ones because it harms mental health and spreads misinformation."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Support:</strong> "First, social media damages mental health, particularly in young people. Studies show constant comparison with others' curated lives increases anxiety and depression. For example, teenagers spending three hours daily on social media report significantly higher rates of depression. Second, misinformation spreads rapidly on social platforms without fact-checking. During elections or health crises, false information reaches millions before corrections arrive. This has real consequences — vaccine hesitancy and election misinformation have caused measurable harm. Third, social media is designed to be addictive, reducing face-to-face interaction. While it promises connection, people are actually more isolated and lonely despite having thousands of 'friends' online."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, I firmly believe social media's harms outweigh its benefits. The evidence clearly shows negative impacts on mental health, truth, and genuine human connection."</p>
                </div>

                <div className="border-l-3 border-violet2 pl-4">
                  <p className="text-sm font-semibold text-ink mb-3">Example 5: Career vs. Family Time Priority</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Statement:</strong> "I believe people should prioritize family time over career success because meaningful relationships and well-being are more valuable than material success."</p>
                  <p className="text-sm text-slate italic mb-2"><strong>Support:</strong> "First, family relationships provide the deepest life satisfaction. Studies on happiness consistently show that strong relationships matter more than income above a certain threshold. A high-powered job with no time for family creates wealth but not happiness — you're too busy to enjoy it. Second, children need parental presence to develop healthily. Kids with involved parents show better emotional regulation, academic performance, and self-esteem. No amount of money compensates for an absent parent. Third, career success is temporary and fragile. Companies downsize, industries change, and retirement comes eventually. But family bonds remain throughout life. Your children will remember time with you long after your job title is forgotten."</p>
                  <p className="text-sm text-slate italic"><strong>Closing:</strong> "In conclusion, I firmly believe family time should take priority. The evidence clearly shows that relationships and well-being matter more to long-term happiness than career advancement alone."</p>
                </div>
              </div>
            </div>

            {/* Opinion Expression Language Toolkit */}
            <div className="bg-white rounded-2xl border border-mist overflow-hidden">
              <button className="accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left hover:bg-fog/50 transition-colors" data-target="struct-toolkit">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">Opinion Expression Language Toolkit</span>
                </div>
                <svg className="chevron w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="struct-toolkit" className="accordion-body border-t border-mist px-6 py-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-sapphire">Strong Opinion-Stating Phrases (Task 7 Requires Assertiveness)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Direct & Confident</p>
                      <p className="text-sm text-ink italic">"I firmly believe that..."</p>
                      <p className="text-sm text-ink italic">"I am convinced that..."</p>
                      <p className="text-sm text-ink italic">"I strongly believe that..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">❌ AVOID (Too Weak)</p>
                      <p className="text-sm text-ink italic">✗ "I think maybe..."</p>
                      <p className="text-sm text-ink italic">✗ "I guess I believe..."</p>
                      <p className="text-sm text-ink italic">✗ "Kind of, I think..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">From My Perspective</p>
                      <p className="text-sm text-ink italic">"In my view..."</p>
                      <p className="text-sm text-ink italic">"From my perspective..."</p>
                      <p className="text-sm text-ink italic">"In my opinion..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">With Evidence</p>
                      <p className="text-sm text-ink italic">"The evidence clearly shows..."</p>
                      <p className="text-sm text-ink italic">"It is clear that..."</p>
                      <p className="text-sm text-ink italic">"Research demonstrates that..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-emerald2">Providing Evidence & Examples (Critical for Task 7)</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Introducing Examples</p>
                      <p className="text-sm text-ink italic">"For example, [specific case]..."</p>
                      <p className="text-sm text-ink italic">"For instance, [concrete situation]..."</p>
                      <p className="text-sm text-ink italic">"To illustrate, [specific example]..."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Supporting Your Claim</p>
                      <p className="text-sm text-ink italic">"This demonstrates that..."</p>
                      <p className="text-sm text-ink italic">"This shows that..."</p>
                      <p className="text-sm text-ink italic">"This proves that..."</p>
                      <p className="text-sm text-ink italic">"This is because..." (explaining the why)</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">With Statistics/Facts</p>
                      <p className="text-sm text-ink italic">"Research shows that..."</p>
                      <p className="text-sm text-ink italic">"Studies indicate that..."</p>
                      <p className="text-sm text-ink italic">"Data suggests that..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-amber2">Transition Words & Signposting (Organize Your Ideas)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Starting New Reasons</p>
                      <p className="text-sm text-ink italic">"First, [reason 1]..."</p>
                      <p className="text-sm text-ink italic">"Second, [reason 2]..."</p>
                      <p className="text-sm text-ink italic">"Additionally, [reason 3]..."</p>
                      <p className="text-sm text-ink italic">"Moreover, [additional point]..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Adding Emphasis</p>
                      <p className="text-sm text-ink italic">"Most importantly, [key reason]..."</p>
                      <p className="text-sm text-ink italic">"Perhaps more significantly, [reason]..."</p>
                      <p className="text-sm text-ink italic">"Clearly, [obvious point]..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Cause & Effect</p>
                      <p className="text-sm text-ink italic">"Since [cause], [effect]..."</p>
                      <p className="text-sm text-ink italic">"Because [reason], [consequence]..."</p>
                      <p className="text-sm text-ink italic">"As a result, [outcome]..."</p>
                    </div>
                    <div className="bg-fog rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate mb-1">Acknowledging Other Views</p>
                      <p className="text-sm text-ink italic">"Even though [counter-argument]..."</p>
                      <p className="text-sm text-ink italic">"While some argue that..."</p>
                      <p className="text-sm text-ink italic">"It's true that [opposite view]..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-rose2">Closing & Reinforcement Phrases</p>
                  <div className="bg-fog rounded-lg p-4 space-y-2">
                    <p className="text-sm text-ink italic">"In conclusion, I firmly believe that..."</p>
                    <p className="text-sm text-ink italic">"To summarize, the evidence clearly shows that..."</p>
                    <p className="text-sm text-ink italic">"Based on these reasons, it is evident that..."</p>
                    <p className="text-sm text-ink italic">"Therefore, I maintain that..."</p>
                    <p className="text-sm text-ink italic">"For all these reasons, I am convinced that..."</p>
                    <p className="text-sm text-ink italic">"The conclusion is clear: [restate opinion]..."</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-ink mb-3 text-violet2">Reasoning Structures for Stronger Arguments</p>
                  <div className="bg-fog rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Claim → Evidence → Reasoning</p>
                      <p className="text-sm text-ink italic"><strong>❌ Weak:</strong> "Travel is important."</p>
                      <p className="text-sm text-ink italic"><strong>✓ Strong:</strong> "Travel teaches problem-solving. When navigating unfamiliar cities, you learn to adapt quickly. This resilience becomes invaluable in any career."</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate mb-1">Multiple Support Levels</p>
                      <p className="text-sm text-ink italic">"Remote work is better (claim) because it reduces distractions (reason). In offices, constant interruptions fragment focus (evidence). Studies show remote workers are 30% more productive (data). This efficiency means better work-life balance and higher quality output (reasoning)."</p>
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
               PANE: PRACTICE
          ══════════════════════════════════════════ */}
          <div id="pane-practice" className="pane space-y-4">
            <p className="text-sm text-slate">Five opinion-based questions. Pick one and defend your position for 60 seconds.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Scenario 1</p>
                <p className="text-sm font-semibold text-ink mb-3">Should young people travel before starting their careers?</p>
                <p className="text-sm text-slate leading-relaxed">Focus on: personal development, career benefits, or financial considerations. Choose a clear stance.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Scenario 2</p>
                <p className="text-sm font-semibold text-ink mb-3">Is working from home more productive than working in an office?</p>
                <p className="text-sm text-slate leading-relaxed">Address: distractions, collaboration, flexibility. Give examples from real situations.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Scenario 3</p>
                <p className="text-sm font-semibold text-ink mb-3">Should technology be limited in schools?</p>
                <p className="text-sm text-slate leading-relaxed">Consider: learning outcomes, distraction, skill development. Be specific with reasons.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Scenario 4</p>
                <p className="text-sm font-semibold text-ink mb-3">Is social media more harmful or beneficial to society?</p>
                <p className="text-sm text-slate leading-relaxed">Think about: connection, mental health, information spread. Support your viewpoint with examples.</p>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Scenario 5</p>
                <p className="text-sm font-semibold text-ink mb-3">Should people prioritize career success or family time?</p>
                <p className="text-sm text-slate leading-relaxed">Address: values, long-term happiness, life balance. Show you've thought deeply about the trade-offs.</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
               PANE: SCORING
          ══════════════════════════════════════════ */}
          <div id="pane-scoring" className="pane space-y-4">
            <p className="text-sm text-slate">How examiners score Task 7. Clarity of opinion and quality of support matter most.</p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 10–12 (Advanced)</p>
                  <span className="font-display text-xl text-emerald2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Natural, confident delivery. No hesitation. Sounds like genuine expression.</p>
                  <p><strong>Coherence:</strong> Opinion is crystal clear. Reasons flow logically. Examples are compelling.</p>
                  <p><strong>Vocabulary:</strong> Sophisticated opinion and reasoning words. Shows range and precision.</p>
                  <p><strong>Grammar:</strong> Confident control of complex structures. Varied sentence types throughout.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 7–9 (Upper-Intermediate)</p>
                  <span className="font-display text-xl text-amber2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Mostly fluent with minimal pauses. Delivery is generally confident.</p>
                  <p><strong>Coherence:</strong> Opinion is clear with 2 supporting reasons. Mostly logical progression.</p>
                  <p><strong>Vocabulary:</strong> Good range of opinion words. Some repetition is acceptable.</p>
                  <p><strong>Grammar:</strong> Mostly accurate; some errors in complex structures don't impede understanding.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 4–6 (Intermediate)</p>
                  <span className="font-display text-xl text-rose2">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Noticeable pauses. Some hesitation when expressing ideas.</p>
                  <p><strong>Coherence:</strong> Opinion is present but may lack clear support. Organization is somewhat unclear.</p>
                  <p><strong>Vocabulary:</strong> Basic opinion words; frequent repetition. Limited range.</p>
                  <p><strong>Grammar:</strong> Mix of simple and complex sentences; errors don't always obscure meaning.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mist p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-ink">Score 1–3 (Below Intermediate)</p>
                  <span className="font-display text-xl text-slate">●</span>
                </div>
                <div className="space-y-2 text-sm text-slate">
                  <p><strong>Fluency:</strong> Frequent hesitation or filler words. Choppy delivery.</p>
                  <p><strong>Coherence:</strong> Opinion may be unclear or not well-supported. Disjointed explanation.</p>
                  <p><strong>Vocabulary:</strong> Very limited; mostly basic words only.</p>
                  <p><strong>Grammar:</strong> Frequent errors in basic structures; meaning often obscured.</p>
                </div>
              </div>
            </div>

            <div className="bg-fog rounded-2xl p-6 mt-6">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">Key insight</p>
              <p className="text-sm text-ink">A high score requires a <strong>clear opinion with 2–3 well-supported reasons</strong>. The opinion itself doesn't matter — your ability to defend it does. Examiners reward candidates who speak with conviction and back up their views with concrete examples.</p>
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
                <p className="text-sm font-semibold text-ink mb-2">Pick your opinion immediately, then jot down 2–3 reasons.</p>
                <p className="text-xs text-slate">Don't waste prep time deliberating. Decide your stance quickly, then write down reasons and one example for each.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Speak with confidence and conviction.</p>
                <p className="text-xs text-slate">Even if you're uncertain, commit to your view. Hesitation and weak language signal doubt and lower your score.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-emerald2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Use opinion-stating phrases naturally.</p>
                <p className="text-xs text-slate">"I believe," "In my view," "I strongly think" — use these without apologizing or hedging. They signal confidence.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="language">
                <p className="text-xs font-semibold text-amber2 uppercase tracking-widest mb-2">Language</p>
                <p className="text-sm font-semibold text-ink mb-2">Back up every claim with an example.</p>
                <p className="text-xs text-slate">"This teaches problem-solving" is weak. "This teaches problem-solving — for example, navigating unknown cities builds resourcefulness" is strong.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-rose2 uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't say "I don't have a strong opinion on this."</p>
                <p className="text-xs text-slate">The task asks you to express an opinion. Even if you're neutral, pick a side and defend it. Sitting on the fence scores poorly.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="mistakes">
                <p className="text-xs font-semibold text-sapphire uppercase tracking-widest mb-2">Mistakes</p>
                <p className="text-sm font-semibold text-ink mb-2">Don't qualify your opinion excessively.</p>
                <p className="text-xs text-slate">Avoid "maybe," "sort of," "kind of," "I guess." These weaken your argument. Be direct: "I believe X because Y."</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="delivery">
                <p className="text-xs font-semibold text-violet2 uppercase tracking-widest mb-2">Delivery</p>
                <p className="text-sm font-semibold text-ink mb-2">Use varied sentence lengths for emphasis.</p>
                <p className="text-xs text-slate">Mix long, complex sentences with short, punchy ones. "Travel builds skills. Specifically, it teaches resilience." Variety keeps listeners engaged.</p>
              </div>

              <div className="tip-card bg-white rounded-xl border border-mist p-4" data-category="prep">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Prep</p>
                <p className="text-sm font-semibold text-ink mb-2">Choose a position you can actually defend.</p>
                <p className="text-xs text-slate">Even if you disagree with your own opinion, it's easier to speak convincingly about a position you understand. Pick wisely.</p>
              </div>
            </div>
          </div>

        </main>

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-mist mt-12">
          <p className="text-xs text-slate mb-4">CELPIP Prep — Speaking Task 7 Study Guide</p>
          <p className="text-xs text-slate/60">Opinions are most powerful when backed by evidence. Speak with conviction, support your views with examples, and let your authentic perspective shine through.</p>
        </footer>

  
  

    </>
  );
}
