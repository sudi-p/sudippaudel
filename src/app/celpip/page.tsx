// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function CelpipNotesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Comprehensive Study Materials
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            CELPIP Study <span className="hero-line italic">Notes</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Deep-dive study guides for each CELPIP speaking and writing task.
            Master structure, vocabulary, scoring rubrics, and practice
            scenarios.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Speaking Tasks Section */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Speaking Tasks
            </p>
            <h2 className="font-display text-3xl text-ink">
              All 8 Task Study Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Speaking Task 1 */}
            <a
              href="/celpip/speaking-task-1"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 1
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-sapphire transition-colors">
                    Giving Advice
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Learn how to give clear, practical advice with examples. Master
                conversational tone and persuasive techniques.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  30s prep
                </span>
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  90s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 2 */}
            <a
              href="/celpip/speaking-task-2"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 2
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-sapphire transition-colors">
                    Personal Experience
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Tell compelling personal stories with sensory details, emotional
                shifts, and clear narrative structure.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  90s prep
                </span>
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  90s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 3 */}
            <a
              href="/celpip/speaking-task-3"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 3
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-sapphire transition-colors">
                    Describe the Image
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Master image description with spatial language, vocabulary
                building, and coherence strategies.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  30s prep
                </span>
                <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                  60–90s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 4 */}
            <a
              href="/celpip/speaking-task-4"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 4
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-emerald2 transition-colors">
                    Make Predictions
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Learn how to make logical predictions, use speculative language,
                and support reasoning effectively.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
                  30s prep
                </span>
                <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
                  60s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 5 */}
            <a
              href="/celpip/speaking-task-5"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 5
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-emerald2 transition-colors">
                    Compare & Persuade
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Compare two options and persuade the listener with reasoned
                arguments and supporting evidence.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
                  60s prep
                </span>
                <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
                  60s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 6 */}
            <a
              href="/celpip/speaking-task-6"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 6
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-amber2 transition-colors">
                    Difficult Situation
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Handle challenging scenarios with poise, explaining your actions
                and demonstrating problem-solving skills.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  60s prep
                </span>
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  60s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 7 */}
            <a
              href="/celpip/speaking-task-7"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 7
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-amber2 transition-colors">
                    Express Opinions
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                State your opinions clearly and support them with relevant
                examples and thoughtful reasoning.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  30s prep
                </span>
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  60s speak
                </span>
              </div>
            </a>

            {/* Speaking Task 8 */}
            <a
              href="/celpip/speaking-task-8"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 8
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-rose2 transition-colors">
                    Unusual Situation
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                React naturally to unexpected scenarios with quick thinking and
                clear communication.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-rose2-light text-rose2-dark px-3 py-1 rounded-full">
                  30s prep
                </span>
                <span className="bg-rose2-light text-rose2-dark px-3 py-1 rounded-full">
                  60s speak
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Writing Tasks Section */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Writing Tasks
            </p>
            <h2 className="font-display text-3xl text-ink">
              Email Writing Study Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Writing Task 1 */}
            <a
              href="/celpip/writing-task-1"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 1
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-amber2 transition-colors">
                    Personal Email
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Master writing emails to friends, family, and colleagues with
                appropriate tone and structure.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  27 min allowed
                </span>
                <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
                  180–199 words
                </span>
              </div>
            </a>

            {/* Writing Task 2 */}
            <a
              href="/celpip/writing-task-2"
              className="bg-white rounded-2xl border border-mist p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                    Task 2
                  </p>
                  <h3 className="font-display text-2xl text-ink group-hover:text-rose2 transition-colors">
                    Survey Response
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Master responding to survey questions with clear opinions,
                supporting details, and examples.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="bg-rose2-light text-rose2-dark px-3 py-1 rounded-full">
                  26 min allowed
                </span>
                <span className="bg-rose2-light text-rose2-dark px-3 py-1 rounded-full">
                  180–199 words
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Listening Tasks Section */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Listening Skills
            </p>
            <h2 className="font-display text-3xl text-ink">
              Listening Comprehension Strategies
            </h2>
          </div>

          <a
            href="#"
            className="bg-white rounded-2xl border border-mist p-6 card-hover group block"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Listening Section
                </p>
                <h3 className="font-display text-2xl text-ink group-hover:text-sapphire transition-colors">
                  Master Listening Skills
                </h3>
              </div>
              <svg
                className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Learn essential listening techniques, note-taking strategies, and
              tips for understanding different accents and speaking speeds in
              CELPIP.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate">
              <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
                Comprehensive Guide
              </span>
            </div>
          </a>
        </section>

        {/* Reading Tasks Section */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Reading Skills
            </p>
            <h2 className="font-display text-3xl text-ink">
              Reading Comprehension Strategies
            </h2>
          </div>

          <a
            href="#"
            className="bg-white rounded-2xl border border-mist p-6 card-hover group block"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
                  Reading Section
                </p>
                <h3 className="font-display text-2xl text-ink group-hover:text-emerald2 transition-colors">
                  Master Reading Skills
                </h3>
              </div>
              <svg
                className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Develop efficient reading strategies, vocabulary expansion
              techniques, and time management tips for tackling various CELPIP
              reading questions.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate">
              <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
                Comprehensive Guide
              </span>
            </div>
          </a>
        </section>

        {/* How to Use Section */}
        <section>
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Getting Started
            </p>
            <h2 className="font-display text-3xl text-ink">
              How to Use These Notes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="w-10 h-10 rounded-lg bg-sapphire-light flex items-center justify-center mb-4">
                <span className="font-display text-sapphire text-lg">1</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">Read the Overview</h3>
              <p className="text-sm text-slate leading-relaxed">
                Start with the task overview to understand what examiners are
                looking for and the scoring criteria.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald2-light flex items-center justify-center mb-4">
                <span className="font-display text-emerald2 text-lg">2</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">
                Study the Template
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Learn the recommended structure and template phrases to organize
                your response effectively.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-6">
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center mb-4">
                <span className="font-display text-gold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">
                Practice with Scenarios
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Use the practice scenarios and sample answers to build
                confidence and refine your delivery.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Study Notes · Comprehensive guides for test success.
        </p>
      </footer>
    </>
  );
}
