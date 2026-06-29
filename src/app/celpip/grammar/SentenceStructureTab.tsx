// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import {
  PARTS_OF_SPEECH,
  SENTENCE_TYPES,
  CLAUSE_TYPES,
  COMPLEX_SENTENCES,
} from "./data";

const Html = ({ html, className, style, as: Tag = "span" }) => (
  <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />
);

const SECTION_TITLE =
  "text-[11px] font-bold tracking-[0.08em] text-gray-400 uppercase mb-5 mt-1";
const GRID =
  "grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] max-[600px]:grid-cols-1";

/* ═══════════════════════════ INFORMATION PANEL ═══════════════════════════ */

const ANATOMY = [
  { t: "The students", bg: "#dbeafe", c: "#1e40af" },
  { t: "have", bg: "#dcfce7", c: "#166534" },
  { t: "submitted", bg: "#dcfce7", c: "#166534" },
  { t: "their", bg: "#ede9fe", c: "#5b21b6" },
  { t: "final", bg: "#fef3c7", c: "#92400e" },
  { t: "assignments", bg: "#f9fafb", c: "#374151", border: true },
  { t: "before", bg: "#fce7f3", c: "#be185d" },
  { t: "the deadline.", bg: "#f9fafb", c: "#374151", border: true },
];

const LEGEND = [
  { l: "Subject", bg: "#dbeafe", bd: "#bfdbfe" },
  { l: "Verb", bg: "#dcfce7", bd: "#86efac" },
  { l: "Determiner", bg: "#ede9fe", bd: "#c4b5fd" },
  { l: "Adjective", bg: "#fef3c7", bd: "#fde68a" },
  { l: "Noun", bg: "#f9fafb", bd: "#e5e7eb" },
  { l: "Preposition", bg: "#fce7f3", bd: "#fbcfe8" },
];

const CLAUSE_INTRO = [
  { icon: "📝", heading: "What is a clause?", text: `A group of words that contains both a <strong>subject</strong> and a <strong>verb</strong>.` },
  { icon: "💡", heading: "Complete thought?", text: `A clause may or may not be a complete thought on its own — that's what separates independent from dependent clauses.` },
  { icon: "🧱", heading: "Building blocks", text: `Every sentence is made up of <strong>one or more clauses</strong> — they are the core unit of English sentences.` },
];

const STRONG_GRAY = "[&_strong]:text-gray-700";

function InfoPanel() {
  return (
    <>
      {/* Anatomy */}
      <div className="bg-gray-50 rounded-[14px] p-6 mb-8">
        <div className={`${SECTION_TITLE} mt-0`}>Anatomy of a Sentence</div>
        <div className="text-[22px] text-gray-900 [line-height:2.4] flex flex-wrap gap-1.5 items-baseline mb-4 max-[600px]:text-base">
          {ANATOMY.map((w, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-md font-semibold"
              style={{
                background: w.bg,
                color: w.c,
                border: w.border ? "1px solid #e5e7eb" : undefined,
              }}
            >
              {w.t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {LEGEND.map((x, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
              <div
                className="w-[11px] h-[11px] rounded-[3px] shrink-0"
                style={{ background: x.bg, border: `1px solid ${x.bd}` }}
              />
              {x.l}
            </div>
          ))}
        </div>
      </div>

      {/* Parts of Speech */}
      <div className={SECTION_TITLE}>Parts of Speech</div>
      <div className={GRID}>
        {PARTS_OF_SPEECH.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-[14px] px-5 py-[1.1rem]">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[1.2rem]">{p.emoji}</span>
              <span
                className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-[0.03em]"
                style={{ background: p.bg, color: p.color }}
              >
                {p.tag}
              </span>
            </div>
            <div className="text-[13px] text-gray-700 leading-relaxed mb-2.5">
              {p.definition}
            </div>
            <div className="mb-2.5">
              {p.tips.map((t, j) => (
                <div key={j} className="text-xs text-gray-500 flex gap-1.5 leading-snug mb-[3px]">
                  <span className="text-gray-300 shrink-0">›</span>
                  <Html html={t} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {p.examples.map((e, j) => (
                <Html
                  key={j}
                  as="div"
                  className="text-xs text-gray-500 italic bg-gray-50 rounded-md px-2 py-1 [&_u]:decoration-gray-400"
                  html={e}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-10" />

      {/* Sentence Types */}
      <div className={SECTION_TITLE}>Sentence Types — By Structure &amp; Purpose</div>
      <div className={GRID}>
        {SENTENCE_TYPES.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-[14px] p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[1.3rem]">{s.emoji}</span>
              <span className="text-[15px] font-bold text-gray-900">{s.name}</span>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.04em] bg-gray-100 rounded-md px-2.5 py-[3px] text-gray-700 mb-2.5 font-mono inline-block">
              {s.formula}
            </div>
            <div className="text-[13px] text-gray-700 leading-relaxed mb-3">
              {s.definition}
            </div>
            <div className="flex flex-col gap-1.5 mb-3">
              {s.examples.map((e, j) => (
                <div key={j} className="text-xs text-gray-500 italic flex gap-2">
                  <span className="text-gray-300 shrink-0 not-italic">›</span>
                  <Html html={e} />
                </div>
              ))}
            </div>
            <Html
              as="div"
              className={`text-xs text-blue-800 bg-blue-50 rounded-[7px] px-2.5 py-1.5 border-l-[3px] border-blue-300 [&_strong]:font-semibold`}
              html={`<strong>CELPIP tip:</strong> ${s.celpipTip}`}
            />
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-10" />

      {/* Clause Types */}
      <div className={SECTION_TITLE}>Clause Types</div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-[1.1rem] mb-5">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-3.5">
          {CLAUSE_INTRO.map((c, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="text-[1.2rem] shrink-0 mt-px">{c.icon}</span>
              <div>
                <div className="text-xs font-bold text-gray-900 mb-[3px]">
                  {c.heading}
                </div>
                <Html
                  as="div"
                  className={`text-[12.5px] text-gray-500 leading-snug ${STRONG_GRAY}`}
                  html={c.text}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {CLAUSE_TYPES.map((c, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-[14px] px-5 py-[1.1rem] mb-3 flex gap-3.5 items-start"
        >
          <span
            className="text-[11px] font-bold px-2.5 py-[3px] rounded-full shrink-0 mt-0.5"
            style={{ background: c.badgeBg, color: c.badgeColor }}
          >
            {c.badge}
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900 mb-1">{c.name}</div>
            <div className="text-[13px] text-gray-700 leading-relaxed mb-2">
              {c.definition}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {c.examples.map((e, j) => (
                <div key={j} className="flex flex-col gap-0.5 mb-1.5">
                  <Html
                    className="text-xs text-gray-500 italic bg-gray-50 rounded-md px-2 py-[3px] border border-gray-100"
                    html={e.text}
                  />
                  {e.explanation && (
                    <span className="text-[11.5px] text-gray-500 leading-snug pl-3.5 pr-2.5 py-[3px] border-l-2 border-gray-200 ml-1">
                      → {e.explanation}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ COMPLEX SENTENCES PANEL ═══════════════════════════ */

const CS_INTRO = [
  { label: "Type 1", labelColor: "#2563eb", name: "Compound Sentence", formula: "IC + CC + IC", desc: `Two independent clauses joined by a <strong>coordinating conjunction</strong>. Each clause could stand alone as a sentence.`, bg: "#eff6ff", border: "#bfdbfe", connectors: ["for", "and", "nor", "but", "or", "yet", "so"] },
  { label: "Type 2", labelColor: "#16a34a", name: "Complex Sentence", formula: "IC + SC + DC  or  DC + , + IC", desc: `One independent clause + one dependent clause joined by a <strong>subordinating conjunction</strong>. Only the independent clause can stand alone.`, bg: "#f0fdf4", border: "#86efac", connectors: ["because", "although", "when", "if", "since", "while", "unless", "after", "before", "even though"] },
  { label: "Type 3", labelColor: "#7c3aed", name: "Compound-Complex", formula: "IC + CC + IC + SC + DC", desc: `At least <strong>two independent clauses</strong> AND at least <strong>one dependent clause</strong> — combining both compound and complex patterns.`, bg: "#fdf4ff", border: "#e9d5ff", connectors: ["but", "and", "so", "because", "although", "when", "if", "since"] },
];

const TYPE_META = {
  compound: { label: "Compound Sentences", bg: "#dbeafe", color: "#1e40af", border: "#bfdbfe", stepColors: ["#dbeafe", "#dbeafe", "#eff6ff"], stepTextColors: ["#1e40af", "#1e40af", "#1e40af"], finalBg: "#eff6ff", finalBorder: "#bfdbfe", finalLabel: "#2563eb", finalName: "Compound" },
  complex: { label: "Complex Sentences", bg: "#dcfce7", color: "#166534", border: "#86efac", stepColors: ["#dcfce7", "#dcfce7", "#f0fdf4"], stepTextColors: ["#166534", "#166534", "#166534"], finalBg: "#f0fdf4", finalBorder: "#86efac", finalLabel: "#16a34a", finalName: "Complex" },
  "compound-complex": { label: "Compound-Complex Sentences", bg: "#ede9fe", color: "#5b21b6", border: "#c4b5fd", stepColors: ["#ede9fe", "#ede9fe", "#fdf4ff"], stepTextColors: ["#5b21b6", "#5b21b6", "#5b21b6"], finalBg: "#fdf4ff", finalBorder: "#e9d5ff", finalLabel: "#7c3aed", finalName: "Compound-Complex" },
};
const TYPE_ORDER = ["compound", "complex", "compound-complex"];

function ComplexPanel() {
  const grouped = {};
  COMPLEX_SENTENCES.forEach((s) => {
    (grouped[s.type] = grouped[s.type] || []).push(s);
  });

  return (
    <>
      {/* Intro cards */}
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-3 mb-8">
        {CS_INTRO.map((c, i) => (
          <div
            key={i}
            className="rounded-xl px-5 py-[1.1rem] border"
            style={{ background: c.bg, borderColor: c.border }}
          >
            <div className="text-[11px] font-bold tracking-[0.06em] uppercase mb-1.5" style={{ color: c.labelColor }}>
              {c.label}
            </div>
            <div className="text-base font-bold text-gray-900 mb-1">{c.name}</div>
            <div className="text-xs font-mono bg-black/5 rounded px-2 py-[3px] inline-block mb-2 text-gray-700">
              {c.formula}
            </div>
            <Html as="div" className={`text-[12.5px] text-gray-500 leading-relaxed ${STRONG_GRAY}`} html={c.desc} />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {c.connectors.map((w, j) => (
                <span key={j} className="text-[11px] bg-black/[0.06] rounded px-[7px] py-[2px] text-gray-700 font-medium">
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key */}
      <div className="text-xs text-gray-400 mb-7 flex gap-4 flex-wrap [&_strong]:text-gray-700">
        <span><strong>IC</strong> = Independent Clause</span>
        <span><strong>DC</strong> = Dependent Clause</span>
        <span><strong>CC</strong> = Coordinating Conjunction</span>
        <span><strong>SC</strong> = Subordinating Conjunction</span>
      </div>

      {/* Groups */}
      {TYPE_ORDER.filter((t) => grouped[t]).map((type) => {
        const meta = TYPE_META[type];
        const sentences = grouped[type];
        return (
          <div key={type} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b-2 border-gray-100">
              <span
                className="text-[11px] font-bold px-3 py-[3px] rounded-full tracking-wide uppercase border"
                style={{ background: meta.bg, color: meta.color, borderColor: meta.border }}
              >
                {meta.label}
              </span>
              <span className="text-xs text-gray-400">{sentences.length} examples</span>
            </div>
            {sentences.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-[14px] p-5 mb-3.5 last:mb-0">
                <div className="text-[11px] font-bold tracking-wide uppercase text-gray-400 mb-2 flex items-center gap-1.5">
                  <span className="text-base">{s.emoji}</span> Scenario: {s.scenario}
                </div>
                <div className="flex flex-col gap-2.5 mb-3">
                  {s.steps.map((step, si) => (
                    <div key={si} className="flex gap-3 items-start">
                      <div
                        className="w-[22px] h-[22px] rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 mt-px"
                        style={{ background: meta.stepColors[si], color: meta.stepTextColors[si] }}
                      >
                        {si + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.04em] mb-[3px]" style={{ color: meta.color }}>
                          {step.label}
                        </div>
                        <div className="text-sm text-gray-900 font-medium leading-snug mb-1">
                          {step.sentence}
                        </div>
                        <div className="text-xs text-gray-500 leading-snug italic">
                          💭 {step.thought}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-[9px] px-3.5 py-2.5 mt-1 border" style={{ background: meta.finalBg, borderColor: meta.finalBorder }}>
                  <div className="text-[11px] font-bold tracking-[0.04em] uppercase mb-1.5" style={{ color: meta.finalLabel }}>
                    ✦ Final {meta.finalName} Sentence
                  </div>
                  <div className="text-[15px] font-semibold text-gray-900 leading-relaxed">
                    {s.final}
                  </div>
                </div>
                {s.tip && (
                  <Html
                    as="div"
                    className="text-xs text-blue-800 bg-blue-50 rounded-[7px] px-2.5 py-[7px] border-l-[3px] border-blue-300 mt-2.5 leading-snug [&_strong]:font-semibold"
                    html={`<strong>Tip:</strong> ${s.tip}`}
                  />
                )}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

const TABS = [
  { id: "ss-info", label: "Information" },
  { id: "ss-complex", label: "Complex Sentences" },
];

export default function SentenceStructureTab() {
  const [active, setActive] = useState("ss-info");
  return (
    <>
      <div className="flex gap-0 border-b border-gray-200 mb-7">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-[18px] py-2.5 text-[13px] font-medium cursor-pointer border-b-2 bg-none whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {active === "ss-info" ? <InfoPanel /> : <ComplexPanel />}
    </>
  );
}
