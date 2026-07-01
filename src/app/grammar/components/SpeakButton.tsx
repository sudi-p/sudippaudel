// @ts-nocheck
/* eslint-disable */
"use client";

import { phSpeak } from "./phSpeak";

export default function SpeakButton({ text, rate = 0.85, className = "", title }) {
  return (
    <button
      type="button"
      onClick={() => phSpeak(text, rate)}
      title={title}
      className={`bg-none border-none cursor-pointer px-[5px] py-[3px] rounded-md leading-none text-gray-400 inline-flex items-center transition-all hover:bg-blue-50 hover:text-blue-600 active:scale-90 ${className}`}
    >
      🔊
    </button>
  );
}
