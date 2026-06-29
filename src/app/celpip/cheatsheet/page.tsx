// @ts-nocheck
/* eslint-disable */
"use client";

import { GOLDEN_RULES, SPEAKING, WRITING, THEME } from "./data";

function TaskCard({ task, kind }) {
  const t = THEME[task.theme] || THEME.sapphire;
  return (
    <div className="bg-white rounded-2xl border border-mist p-6 card-hover group break-inside-avoid">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-1">
            {kind} Task {task.n}
          </p>
          <h3
            className={`font-display text-2xl text-ink transition-colors ${t.hover}`}
          >
            {task.name}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${t.badge}`}>
            {task.prep || task.time}
          </span>
          <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${t.badge}`}>
            {task.speak || task.words}
          </span>
        </div>
      </div>

      <ol className="space-y-2.5 mb-4">
        {task.parts.map((p, i) => (
          <li key={i} className="flex gap-3">
            <span
              className={`w-6 h-6 mt-0.5 rounded-full ${t.num} text-white text-xs font-semibold flex items-center justify-center shrink-0`}
            >
              {i + 1}
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">
                {p.label}{" "}
                <span className="text-slate font-normal">· {p.meta}</span>
              </p>
              <p className="text-sm text-slate italic leading-relaxed">
                {p.frame}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="bg-fog rounded-xl px-4 py-3 border-l-4 border-gold">
        <p className="text-[11px] font-semibold text-gold-dark uppercase tracking-wider mb-0.5">
          Power move
        </p>
        <p className="text-sm text-ink leading-relaxed">{task.powerMove}</p>
      </div>
    </div>
  );
}

export default function CheatsheetPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="animate-fade-up flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
              The Final 2 Hours
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
              Exam-Day <span className="hero-line italic">Cheatsheet</span>
            </h1>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              One template per task — memorize the frames, swap in the topic.
              Skim this the morning of your test, not the theory.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-mist bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-fog transition-colors print:hidden"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1zm0-12V5a1 1 0 011-1h4a1 1 0 011 1v4H8z"
              />
            </svg>
            Print / Save PDF
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Golden rules strip */}
        <section className="mb-14 bg-ink rounded-2xl p-6 md:p-8 break-inside-avoid">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Read this first — 5 golden rules
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
            {GOLDEN_RULES.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm text-fog leading-relaxed">
                <span className="text-gold shrink-0">✦</span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Speaking */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Speaking · 8 tasks
            </p>
            <h2 className="font-display text-3xl text-ink">
              Speaking Templates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPEAKING.map((task) => (
              <TaskCard key={task.n} task={task} kind="Speaking" />
            ))}
          </div>
        </section>

        {/* Writing */}
        <section>
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Writing · 2 tasks
            </p>
            <h2 className="font-display text-3xl text-ink">Writing Templates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WRITING.map((task) => (
              <TaskCard key={task.n} task={task} kind="Writing" />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-mist bg-fog py-8 px-6 text-center print:hidden">
        <p className="text-xs text-slate">
          CELPIP Cheatsheet · Frames condensed from the full task study guides.
        </p>
      </footer>
    </>
  );
}
