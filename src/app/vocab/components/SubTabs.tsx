// @ts-nocheck
/* eslint-disable */
"use client";

/** Accent border colour for the active sub-tab. */
const ACTIVE_BORDER = {
  violet: "border-violet-500",
  amber: "border-amber-600",
  blue: "border-blue-600",
  ink: "border-gray-900",
};

export default function SubTabs({ tabs, active, onChange, accent = "ink" }) {
  return (
    <div className="flex border-b-2 border-gray-100 mb-7 overflow-x-auto">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={`px-[22px] py-2.5 text-sm font-medium cursor-pointer border-b-[3px] -mb-0.5 bg-none whitespace-nowrap transition-colors ${
            active === t.id
              ? `text-gray-900 font-semibold ${ACTIVE_BORDER[accent]}`
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
