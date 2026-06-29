// @ts-nocheck
/* eslint-disable */

/* ─────────────────────────────────────────────────────────────────────────
   Speech helper — shared by Phonetics buttons and (via window) by the
   not-yet-migrated tabs whose innerHTML still uses onclick="phSpeak(...)".
   ───────────────────────────────────────────────────────────────────────── */
export function phSpeak(text, rate = 0.85) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "en-US";
  utt.rate = rate;
  utt.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred =
    voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.includes("Samantha") ||
          v.name.includes("Google US") ||
          v.name.includes("Daniel") ||
          v.name.includes("Karen")),
    ) || voices.find((v) => v.lang.startsWith("en"));
  if (preferred) utt.voice = preferred;

  window.speechSynthesis.speak(utt);
}
