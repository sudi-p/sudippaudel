// @ts-nocheck
/* eslint-disable */

import {
  GOLDEN_RULES,
  PARTS,
  GENERAL_STRATEGY,
  THEME,
} from "./data";

export default function ListeningTipsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Listening · Tips & Tricks
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Master the <span className="hero-line italic">Listening</span> Test
          </h1>
          <p className="text-lg text-slate max-w-2xl leading-relaxed">
            Part-by-part strategies for all six listening sections. The audio
            plays only once — these tricks help you catch what matters the first
            time.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-6 text-xs text-slate">
            <span className="bg-sapphire-light text-sapphire-dark px-3 py-1 rounded-full">
              ~47–55 minutes
            </span>
            <span className="bg-emerald2-light text-emerald2-dark px-3 py-1 rounded-full">
              38 questions
            </span>
            <span className="bg-amber2-light text-amber2-dark px-3 py-1 rounded-full">
              6 parts
            </span>
            <span className="bg-rose2-light text-rose2-dark px-3 py-1 rounded-full">
              Audio plays once
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Golden rules */}
        <section className="mb-16 bg-ink rounded-2xl p-6 md:p-8">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Read this first — listening golden rules
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
            {GOLDEN_RULES.map((r, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-fog leading-relaxed"
              >
                <span className="text-gold shrink-0">✦</span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Part-by-part */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Part by part
            </p>
            <h2 className="font-display text-3xl text-ink">
              Tricks for Each Listening Part
            </h2>
          </div>

          <div className="space-y-5">
            {PARTS.map((part) => {
              const t = THEME[part.theme] || THEME.sapphire;
              return (
                <div
                  key={part.n}
                  className="bg-white rounded-2xl border border-mist p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span
                      className={`w-11 h-11 rounded-xl ${t.num} text-white font-display text-xl flex items-center justify-center shrink-0`}
                    >
                      {part.n}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <h3 className="font-display text-2xl text-ink">
                          {part.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span
                          className={`text-[11px] px-2.5 py-0.5 rounded-full ${t.badge}`}
                        >
                          {part.questions}
                        </span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-fog text-slate border border-mist">
                          {part.format}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate leading-relaxed mb-5">
                    {part.summary}
                  </p>

                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${t.accent}`}
                  >
                    Tricks
                  </p>
                  <ul className="space-y-2.5">
                    {part.tricks.map((trick, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-ink leading-relaxed"
                      >
                        <span className={`shrink-0 ${t.accent}`}>✦</span>
                        {trick}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* General strategy */}
        <section>
          <div className="mb-8">
            <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
              Works on every part
            </p>
            <h2 className="font-display text-3xl text-ink">
              General Listening Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {GENERAL_STRATEGY.map((block, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-mist p-6"
              >
                <h3 className="font-semibold text-ink mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm text-slate leading-relaxed"
                    >
                      <span className="text-gold shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Listening · Part-by-part tips for first-listen comprehension.
        </p>
      </footer>
    </>
  );
}
