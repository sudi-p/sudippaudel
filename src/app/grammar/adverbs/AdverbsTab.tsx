// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import {
  ADV_TYPES,
  ADV_NATIVE_PATTERNS,
  ADV_CELPIP_TASKS,
  ADV_MISTAKES,
  ADV_VS_ADJ,
} from "./data";

/* inline-HTML helper for the data strings that contain <strong>/<em> */
const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const SUB_TABS = [
  { id: "adv-types", label: "📖 Types & Rules" },
  { id: "adv-native", label: "🗣️ Native Patterns" },
  { id: "adv-tasks", label: "🎯 CELPIP Task Samples" },
  { id: "adv-mistakes", label: "⚠️ Mistakes & Fixes" },
  { id: "adv-vs-adj", label: "🆚 Adverb vs Adjective" },
];

const INTRO_LEAD = "text-[13px] text-gray-500 leading-relaxed mb-5";

function TypesPanel() {
  return (
    <>
      {ADV_TYPES.map((g, i) => (
        <div key={i} className="mb-10">
          <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b-2 border-gray-100">
            <span className="text-[1.3rem]">{g.emoji}</span>
            <span
              className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
              style={{ background: g.bg, color: g.color }}
            >
              {g.type}
            </span>
            <span className="text-[10px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase bg-gray-100 text-gray-700">
              {g.badge}
            </span>
          </div>
          <Html
            as="div"
            className="text-[13px] text-gray-700 leading-relaxed mb-3 px-3.5 py-2.5 bg-gray-50 rounded-lg border-l-[3px] border-gray-200"
            html={g.intro}
          />
          <div className="flex flex-col gap-1.5 mb-3.5 text-[12.5px] text-gray-700 leading-relaxed [&_strong]:text-gray-900">
            <Html as="div" html={`<strong>Formation:</strong> ${g.formation}`} />
            <Html
              as="div"
              html={`<strong>💡 Native speaker tip:</strong> ${g.nativeTip}`}
            />
            <Html as="div" html={`<strong>📝 Used in:</strong> ${g.celpipUse}`} />
          </div>
          <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] max-[600px]:grid-cols-1">
            {g.items.map((item, j) => (
              <div
                key={j}
                className="bg-white rounded-[11px] px-4 py-[0.85rem] border"
                style={{ borderColor: g.border }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[15px] font-bold text-gray-900">
                    {item.word}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-[2px] rounded-[10px] bg-gray-100 text-gray-500">
                    {item.task}
                  </span>
                </div>
                <Html
                  as="div"
                  className="text-[12.5px] text-gray-600 italic leading-relaxed"
                  html={item.example}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function NativePanel() {
  return (
    <>
      <p className={INTRO_LEAD}>
        These are the <strong>patterns native English speakers naturally use</strong>{" "}
        with adverbs. Practise slotting your own content into each structure to
        sound fluent and natural on CELPIP.
      </p>
      {ADV_NATIVE_PATTERNS.map((p, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-[11px] px-4 py-[0.85rem] mb-2.5"
        >
          <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
            {p.pattern}
          </div>
          <Html
            as="div"
            className="text-[13.5px] text-blue-800 italic mb-1"
            html={`"${p.example}"`}
          />
          <div className="text-xs text-gray-500 leading-relaxed">{p.note}</div>
        </div>
      ))}
    </>
  );
}

function TasksPanel() {
  return (
    <>
      <p className={INTRO_LEAD}>
        Each sample shows a real CELPIP scenario. Adverbs are{" "}
        <span className="text-blue-600 font-bold bg-blue-50 rounded-[3px] px-[3px]">
          highlighted in blue
        </span>
        . A tip below each explains the strategy.
      </p>
      {ADV_CELPIP_TASKS.map((t, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-[14px] overflow-hidden mb-8 bg-white"
        >
          <div className="flex items-center gap-2.5 px-5 py-[0.9rem] bg-gray-50 border-b border-gray-200">
            <span
              className="text-[11.5px] font-bold px-3 py-1 rounded-full"
              style={{ background: t.badgeBg, color: t.badgeColor }}
            >
              {t.badge}
            </span>
            <span className="text-[13px] font-semibold text-gray-900">
              {t.taskName}
            </span>
            <span className="text-[11px] text-gray-400 ml-auto">{t.taskNum}</span>
          </div>
          <div className="px-5 py-3 bg-amber-50 border-b border-amber-200">
            <div className="text-[10.5px] font-bold text-amber-800 uppercase tracking-wider mb-[3px]">
              📋 Scenario
            </div>
            <div className="text-[13px] text-gray-700 leading-relaxed">
              {t.scenario}
            </div>
          </div>
          <div className="px-5 py-4 border-b border-gray-200">
            <div className="text-[10.5px] font-bold text-gray-700 uppercase tracking-wider mb-2">
              ✍️ Sample Response — adverbs highlighted
            </div>
            <Html
              as="div"
              className="text-[13.5px] text-gray-900 [line-height:2.1] whitespace-pre-line [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-bold [&_em]:bg-blue-50 [&_em]:rounded-[3px] [&_em]:px-[3px]"
              html={t.sample}
            />
          </div>
          <div className="px-5 py-[0.9rem]">
            <div className="text-[10.5px] font-bold text-gray-700 uppercase tracking-wider mb-2">
              🔵 Adverbs used
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {t.adverbsUsed.map((a, j) => (
                <span
                  key={j}
                  className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-md px-2 py-[2px] border border-blue-200"
                >
                  {a}
                </span>
              ))}
            </div>
            <Html
              as="div"
              className="text-[12.5px] text-gray-700 bg-green-50 border border-green-200 rounded-lg px-3 py-[7px] leading-relaxed [&_strong]:text-green-800"
              html={`<strong>💡 Strategy:</strong> ${t.tip}`}
            />
          </div>
        </div>
      ))}
    </>
  );
}

function MistakesPanel() {
  return (
    <>
      <p className={INTRO_LEAD}>
        These are the most common adverb errors CELPIP test-takers make, and
        exactly how to fix them to improve your score.
      </p>
      {ADV_MISTAKES.map((m, i) => (
        <div
          key={i}
          className="bg-white border border-red-300 rounded-xl px-[1.1rem] py-[0.9rem] mb-3.5"
        >
          <div className="flex items-center gap-2 text-[13.5px] font-bold text-red-800 mb-2.5">
            {m.icon} {m.title}
          </div>
          <Html
            as="div"
            className="text-[12.5px] leading-relaxed mb-1.5 text-red-600 [&_em]:not-italic"
            html={`✗ "${m.wrong}"`}
          />
          <Html
            as="div"
            className="text-[12.5px] leading-relaxed mb-1.5 text-green-600 [&_em]:not-italic"
            html={`✓ "${m.right}"`}
          />
          <div className="text-xs text-gray-700 bg-neutral-50 rounded-md px-2.5 py-[5px] border border-gray-100 mt-1.5">
            {m.tip}
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold bg-green-100 text-green-800 rounded-[10px] px-2 py-[2px] mt-1.5">
              📈 {m.score}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

function VsAdjPanel() {
  return (
    <>
      <p className={INTRO_LEAD}>
        This is one of the most confused grammar pairs in English. Getting it
        right directly boosts your <strong>Readability</strong> and{" "}
        <strong>Vocabulary</strong> scores on CELPIP.
      </p>
      {ADV_VS_ADJ.map((section, i) => (
        <div key={i} className="mb-10">
          <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b-2 border-gray-100">
            <span className="text-[1.3rem]">{section.icon}</span>
            <span
              className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
              style={{ background: section.bg, color: section.color }}
            >
              {section.category}
            </span>
          </div>
          <Html
            as="div"
            className="text-[13px] text-gray-700 leading-relaxed mb-3 px-3.5 py-2.5 bg-gray-50 rounded-lg border-l-[3px] border-gray-200"
            html={section.explanation}
          />
          {section.pairs && (
            <div className="flex flex-col gap-2.5">
              {section.pairs.map((p, j) => (
                <div
                  key={j}
                  className="bg-white border border-gray-200 rounded-[11px] px-4 py-[0.85rem]"
                >
                  <div className="grid grid-cols-2 gap-2 mb-1.5">
                    <Html
                      as="div"
                      className="bg-yellow-100 rounded-[7px] px-2.5 py-1.5 text-[13px] text-gray-700"
                      html={p.adj}
                    />
                    <Html
                      as="div"
                      className="bg-blue-100 rounded-[7px] px-2.5 py-1.5 text-[13px] text-gray-700"
                      html={p.adv}
                    />
                  </div>
                  <div className="text-xs text-gray-500 italic px-0.5">
                    {p.note}
                  </div>
                </div>
              ))}
            </div>
          )}
          {section.misconceptions && (
            <div className="flex flex-col gap-3">
              {section.misconceptions.map((m, j) => (
                <div
                  key={j}
                  className="bg-white border border-red-300 rounded-xl px-[1.1rem] py-[0.9rem]"
                >
                  <div className="text-[13.5px] font-bold text-red-800 mb-2">
                    🚫 Myth: {m.myth}
                  </div>
                  <div className="text-[13px] text-green-800 font-semibold mb-2">
                    ✅ Truth: {m.truth}
                  </div>
                  <div className="text-[12.5px] text-red-600 mb-[3px]">
                    ✗ {m.wrong}
                  </div>
                  <div className="text-[12.5px] text-green-600">
                    ✓ {m.right}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

const PANELS = {
  "adv-types": TypesPanel,
  "adv-native": NativePanel,
  "adv-tasks": TasksPanel,
  "adv-mistakes": MistakesPanel,
  "adv-vs-adj": VsAdjPanel,
};

export default function AdverbsTab() {
  const [active, setActive] = useState("adv-types");
  const Panel = PANELS[active];
  return (
    <>
      <div className="flex gap-0 border-b-2 border-gray-200 mb-7 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-[18px] py-2.5 text-[13px] font-medium cursor-pointer border-none bg-none border-b-2 -mb-0.5 whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <Panel />
    </>
  );
}
