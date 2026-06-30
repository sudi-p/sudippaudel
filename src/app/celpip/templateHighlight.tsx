// @ts-nocheck
/* eslint-disable */
import React from "react";

// Highlights the reusable "template" phrases inside a sample answer so learners
// can see the fixed skeleton vs. the scenario-specific words they fill in.
// `phrases` is a per-task list of the fixed template fragments.
export function renderTemplate(text, phrases) {
  if (!text || !phrases || phrases.length === 0) return text;

  const escaped = phrases
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");

  const lookup = new Set(phrases.map((p) => p.toLowerCase()));
  const parts = text.split(re);

  return parts.map((part, i) =>
    part && lookup.has(part.toLowerCase()) ? (
      <mark
        key={i}
        className="tmpl-hl rounded bg-gold/20 px-0.5 font-semibold text-ink"
      >
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}
