// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";

// preload voices so they're ready when the Phonetics speaker buttons fire
export default function VoicePreloader() {
  useEffect(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  return null;
}
