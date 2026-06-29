// @ts-nocheck
/* eslint-disable */
"use client";

import SectionHeader from "./SectionHeader";
import Intro from "./Intro";

const CARD_GRID =
  "grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] max-[600px]:grid-cols-1";

/* reusable GROUP section (Nouns & Pronouns + Conjunctions) */
export default function GroupSection({ group, countNoun }) {
  const isTraps = group.category === "Common Traps";
  return (
    <div className="mb-10">
      <SectionHeader
        emoji={group.emoji}
        label={group.category}
        badgeStyle={{ background: group.bg, color: group.color }}
        count={isTraps ? null : `${group.items.length} ${countNoun}`}
      />
      {group.intro && <Intro>{group.intro}</Intro>}

      {isTraps ? (
        group.items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-pink-200 rounded-xl px-4 py-[0.9rem] mb-3"
          >
            <div className="text-[13px] font-bold text-pink-700 mb-1.5">
              {item.word}
            </div>
            <div className="text-[12.5px] text-gray-700 leading-relaxed mb-2">
              {item.meaning}
            </div>
            <div className="flex flex-col gap-[3px]">
              {item.examples.map((e, j) => (
                <div
                  key={j}
                  className="text-xs text-gray-500 italic bg-pink-50 rounded-md px-2 py-[3px] border border-pink-100"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={CARD_GRID}>
          {group.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl px-4 py-[0.9rem]"
              style={{ borderColor: group.border }}
            >
              <div className="text-sm font-bold text-gray-900 mb-1.5">
                {item.word}
              </div>
              <div className="text-[12.5px] text-gray-700 leading-relaxed mb-2">
                {item.meaning}
              </div>
              <div className="flex flex-col gap-[3px] mb-2">
                {item.examples.map((e, j) => (
                  <div
                    key={j}
                    className="text-xs text-gray-500 italic bg-gray-50 rounded-md px-2 py-[3px] border border-gray-100"
                  >
                    {e}
                  </div>
                ))}
              </div>
              {item.tip && (
                <div className="text-[11.5px] text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1 leading-relaxed">
                  💡 {item.tip}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {group.comments && group.comments.length > 0 && (
        <div className="mt-4 bg-sky-50 border border-sky-200 rounded-[10px] px-4 py-[0.85rem]">
          <div className="flex items-center gap-[7px] mb-2.5">
            <span className="text-sm">💬</span>
            <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-sky-700">
              Notes
            </span>
          </div>
          <ul className="flex flex-col gap-1.5 m-0 p-0 list-none">
            {group.comments.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-[5px]" />
                <span className="text-[13px] text-sky-900 leading-relaxed">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
