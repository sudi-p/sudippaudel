// @ts-nocheck
/* eslint-disable */

// "What examiners score you on" card — the four scoring criteria.
export function ScoreCriteria({ items }) {
  return (
    <div className="bg-white rounded-2xl border border-mist p-6">
      <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-4">
        What examiners score you on
      </p>
      <div className="space-y-3">
        {items.map((c) => (
          <div key={c.label} className="flex items-start gap-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-md ${c.badge} shrink-0 mt-0.5`}
            >
              {c.label}
            </span>
            <p className="text-sm leading-relaxed text-ink">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// The dark "N-second blueprint" card. `title` varies per task.
export function Blueprint({ title, steps }) {
  return (
    <div className="bg-ink rounded-2xl p-6 text-fog">
      <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
        {title}
      </p>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.n} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full ${step.circle} border flex items-center justify-center shrink-0`}
            >
              <span className={`font-display ${step.accent} text-sm`}>
                {step.n}
              </span>
            </div>
            <div>
              <p className={`text-xs font-semibold ${step.accent}`}>
                {step.title}
              </p>
              <p className="text-xs text-fog/80">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
