// @ts-nocheck
/* eslint-disable */

// Task-1-style timing row: a right-aligned gutter showing how long to spend on
// the beat (duration) and the running clock, next to the beat's text. Used by
// every speaking task's sample answers so the timing UI is identical throughout.
export function TimedLine({ spend, clock, label, labelClass, children }) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 w-14 pt-0.5 text-right leading-tight">
        <span className="block text-[11px] font-semibold text-slate tabular-nums">
          {spend}
        </span>
        {clock ? (
          <span className="block text-[10px] text-slate/60 tabular-nums">
            {clock}
          </span>
        ) : null}
      </span>
      <p className="text-sm text-ink italic leading-relaxed border-l border-mist pl-3">
        {label ? (
          <span className={`not-italic font-semibold ${labelClass || ""}`}>
            {label}:{" "}
          </span>
        ) : null}
        {children}
      </p>
    </div>
  );
}
