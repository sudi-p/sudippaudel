// @ts-nocheck
/* eslint-disable */

export const BLANK = "___________";

/** Fisher-Yates-ish shuffle (returns a new array). */
export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * Replace the first (case-insensitive) occurrence of `target` inside `text`
 * with the blank placeholder. Falls back to the first word of a multi-word
 * target, then to appending a bracketed blank.
 */
export function blankOut(text, target, firstWordsCount) {
  const raw = text || "";
  const rLow = raw.toLowerCase();
  const tLow = (target || "").toLowerCase();

  const i = rLow.indexOf(tLow);
  if (i !== -1) {
    return raw.slice(0, i) + BLANK + raw.slice(i + target.length);
  }

  const words = tLow.split(" ");
  const fragment = firstWordsCount
    ? words.slice(0, firstWordsCount).join(" ")
    : words[0];
  const i2 = rLow.indexOf(fragment);
  if (i2 !== -1) {
    return raw.slice(0, i2) + BLANK + raw.slice(i2 + fragment.length);
  }

  return raw + " [" + BLANK + "]";
}

/** Standard CELPIP-style results message by percentage. */
export function defaultResult(pct, subject = "vocabulary") {
  if (pct === 100) return { emoji: "🏆", msg: `Perfect! Your ${subject} is outstanding.` };
  if (pct >= 80) return { emoji: "🌟", msg: "Excellent! Strong range for CELPIP." };
  if (pct >= 60) return { emoji: "📚", msg: "Good effort! Review the ones you missed." };
  if (pct >= 40) return { emoji: "🔄", msg: "Keep going — practice really helps." };
  return { emoji: "💪", msg: "Study the reference section and try again." };
}
