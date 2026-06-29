// @ts-nocheck
/* eslint-disable */
"use client";

import SpeakButton from "./SpeakButton";

export default function SoundCard({ s, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-[0.9rem] flex flex-col gap-[0.45rem]">
      <div className="flex items-center gap-2.5">
        <div className="text-[22px] font-extrabold text-gray-900 font-mono min-w-[36px]">
          /{s.ipa}/
        </div>
        <div className="flex-1">
          <div className="text-[13px] font-bold text-gray-700">{s.name}</div>
          <div className="text-[11px] text-gray-400 italic">
            Spelling: {s.spelling}
          </div>
        </div>
        <SpeakButton
          text={s.ipa}
          rate={0.6}
          className="text-[18px]"
          title="Hear this sound"
        />
      </div>
      {children}
    </div>
  );
}
