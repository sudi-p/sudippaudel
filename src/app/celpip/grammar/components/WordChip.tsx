// @ts-nocheck
/* eslint-disable */
"use client";

import SpeakButton from "./SpeakButton";

export default function WordChip({ word }) {
  return (
    <span className="inline-flex items-center gap-[3px] text-[11.5px] text-blue-600 font-semibold bg-blue-50 px-2 py-[2px] rounded-[5px] italic">
      {word}
      <SpeakButton text={word} title={`Hear '${word}'`} />
    </span>
  );
}
