// @ts-nocheck
/* eslint-disable */
"use client";

export default function SectionHeader({ emoji, label, badgeStyle, count }) {
  return (
    <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b-2 border-gray-100">
      <span className="text-[1.3rem]">{emoji}</span>
      <span
        className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
        style={badgeStyle}
      >
        {label}
      </span>
      {count != null && <span className="text-xs text-gray-400">{count}</span>}
    </div>
  );
}
