// @ts-nocheck
/* eslint-disable */

// The page hero: eyebrow, headline, blurb, and the 4 quick-stat cards.
// `title` / `description` accept JSX so each task keeps its highlighted word.
// `stats` is an array of { label, value } where value may be a node.
export function Hero({ eyebrow, title, description, stats }) {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
      <div className="animate-fade-up">
        <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
          {title}
        </h1>
        <p className="text-lg text-slate max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 animate-fade-up"
        style={{ animationDelay: ".1s" }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-mist p-4 text-center card-hover"
          >
            <div className="text-xs text-slate uppercase tracking-wider mb-1">
              {s.label}
            </div>
            <div className="font-display text-3xl text-ink">{s.value}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
