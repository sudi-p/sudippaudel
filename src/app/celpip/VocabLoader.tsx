"use client";

import { VOCAB } from "./vocabData";

// Expose the vocabulary data on window so the per-page study scripts
// (which run inside useEffect) can read window.VOCAB. Module evaluation
// happens before any component effect runs, so the data is always ready.
if (typeof window !== "undefined") {
  (window as unknown as { VOCAB: typeof VOCAB }).VOCAB = VOCAB;
}

export default function VocabLoader() {
  return null;
}
