// @ts-nocheck
/* eslint-disable */

// The "Pro Tips" tab pane — a list of tip cards (already filtered by caller).
export function TipsPane({ tips, active }) {
  return (
    <div
      id="pane-tips"
      className={`pane ${active === "tips" ? "active" : ""} space-y-4`}
    >
      <div className="space-y-3">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="tip-card bg-white rounded-xl border border-mist p-4"
          >
            <p
              className={`text-xs font-semibold ${tip.color} uppercase tracking-widest mb-2`}
            >
              {tip.label ??
                (tip.category
                  ? tip.category.charAt(0).toUpperCase() + tip.category.slice(1)
                  : "")}
            </p>
            <p className="text-sm font-semibold text-ink mb-2">{tip.title}</p>
            <p className="text-xs text-slate">{tip.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
