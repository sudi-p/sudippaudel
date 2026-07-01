// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import {
  VOICE_RULES,
  ACTIVE_EXAMPLES,
  PASSIVE_EXAMPLES,
  VOICE_TRAPS,
} from "./data";

const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const SUB_TABS = [
  { id: "vc-overview", label: "Overview" },
  { id: "vc-active", label: "Active Voice" },
  { id: "vc-passive", label: "Passive Voice" },
  { id: "vc-convert", label: "Conversion" },
  { id: "vc-traps", label: "Common Traps" },
];

const SECTION_LABEL =
  "text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3.5";

/* ═══════════════════════════ OVERVIEW PANEL ═══════════════════════════ */

const TENSE_ROWS = VOICE_RULES.find((r) => r.id === "passive-tenses").tenseTable;
const WHEN_ROWS = VOICE_RULES.find((r) => r.id === "when-to-use").whenTable;

function OverviewPanel() {
  return (
    <>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-3.5 mb-7">
        <div className="rounded-[14px] border px-5 py-[1.1rem] bg-green-50 border-green-300">
          <div className="text-[10px] font-bold tracking-wider uppercase mb-1.5 text-green-600">
            Active Voice
          </div>
          <div className="text-base font-bold text-gray-900 mb-1.5">
            Subject does the action
          </div>
          <div className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md inline-block mb-2 bg-green-100 text-green-800">
            Subject + Verb + Object
          </div>
          <div className="text-[13px] text-gray-500 leading-relaxed">
            Direct, clear, and natural. The subject is the doer. Preferred in
            speaking tasks, advice, opinions, and personal narratives.
          </div>
          <div className="text-xs mt-2.5 px-2.5 py-[7px] rounded-md leading-relaxed bg-green-100 text-green-800">
            Best for: Speaking Tasks 1–8, Writing Task 2 (thesis &amp; opinions)
          </div>
        </div>
        <div className="rounded-[14px] border px-5 py-[1.1rem] bg-amber-50 border-amber-200">
          <div className="text-[10px] font-bold tracking-wider uppercase mb-1.5 text-amber-800">
            Passive Voice
          </div>
          <div className="text-base font-bold text-gray-900 mb-1.5">
            Subject receives the action
          </div>
          <div className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md inline-block mb-2 bg-amber-100 text-amber-800">
            Subject + be + Past Participle (+ by agent)
          </div>
          <div className="text-[13px] text-gray-500 leading-relaxed">
            Formal, objective, impersonal. The doer is unknown, unimportant, or
            deliberately hidden. Common in formal writing and academic essays.
          </div>
          <div className="text-xs mt-2.5 px-2.5 py-[7px] rounded-md leading-relaxed bg-amber-100 text-amber-800">
            Best for: Writing Task 1 (formal emails), Writing Task 2 (body
            paragraphs &amp; evidence)
          </div>
        </div>
      </div>

      <div className={SECTION_LABEL}>Passive voice across all tenses</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] mb-6">
          <thead>
            <tr>
              {["Tense", "Active", "Passive"].map((h) => (
                <th
                  key={h}
                  className="bg-gray-100 text-gray-700 font-semibold px-3 py-2 text-left border border-gray-200 text-xs"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TENSE_ROWS.map((row, i) => (
              <tr key={i} className="even:[&>td]:bg-gray-50">
                <td className="px-3 py-2 border border-gray-200 align-top">
                  <span className="text-[10px] font-bold px-1.5 py-[2px] rounded bg-blue-100 text-blue-800 mr-1.5">
                    {row.tense}
                  </span>
                </td>
                <td className="px-3 py-2 border border-gray-200 align-top text-green-800 font-medium">
                  {row.active}
                </td>
                <td className="px-3 py-2 border border-gray-200 align-top text-amber-800 font-medium">
                  {row.passive}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={SECTION_LABEL}>When to use each voice</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] mb-6">
          <thead>
            <tr>
              {["Situation", "Voice", "Example"].map((h) => (
                <th
                  key={h}
                  className="bg-gray-100 text-gray-700 font-semibold px-3 py-2 text-left border border-gray-200 text-xs"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WHEN_ROWS.map((row, i) => (
              <tr key={i} className="even:[&>td]:bg-gray-50">
                <td className="px-3 py-2 border border-gray-200 align-top leading-snug">
                  {row.situation}
                </td>
                <td className="px-3 py-2 border border-gray-200 align-top">
                  <span
                    className={`text-[10px] font-bold px-[7px] py-[2px] rounded whitespace-nowrap ${
                      row.voice === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {row.voice}
                  </span>
                </td>
                <td className="px-3 py-2 border border-gray-200 align-top italic text-gray-500">
                  {row.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ═══════════════════ ACTIVE / PASSIVE EXAMPLE PANELS ═══════════════════ */

function ExamplesPanel({ intro, leftBorder, examples, badgeCls }) {
  return (
    <>
      <Html
        as="p"
        className="text-[13px] text-gray-500 leading-relaxed mb-5 px-3 py-2 [&_strong]:text-gray-900"
        style={{ borderLeft: `3px solid ${leftBorder}` }}
        html={intro}
      />
      <div className="flex flex-col gap-2.5">
        {examples.map((ex, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 overflow-hidden bg-white"
          >
            <div className="flex items-start gap-2 px-3 py-2 border-b border-gray-100 flex-wrap">
              <span
                className={`text-[10px] font-bold px-2 py-[2px] rounded whitespace-nowrap shrink-0 mt-px ${badgeCls}`}
              >
                {ex.task}
              </span>
              <span className="text-xs text-gray-400 leading-snug">
                {ex.scenario}
              </span>
            </div>
            <Html
              as="div"
              className="text-sm text-gray-900 leading-relaxed px-3 py-2.5 border-b border-gray-100 font-medium [&_em]:not-italic"
              style={{ borderLeft: `3px solid ${leftBorder}` }}
              html={ex.sentence}
            />
            <div className="text-xs text-gray-500 leading-relaxed px-3 py-2">
              💡 {ex.why}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ═══════════════════════════ CONVERSION PANEL ═══════════════════════════ */

const CONVERSIONS = [
  { active: "The landlord <em>has ignored</em> my repair request for three weeks.", passive: "My repair request <em>has been ignored</em> by the landlord for three weeks.", note: "Present perfect passive. The passive version is more suitable for a formal complaint email — it puts the neglected request (not the landlord) in the spotlight." },
  { active: "The city council <em>will review</em> all proposals before the end of the month.", passive: "All proposals <em>will be reviewed</em> by the city council before the end of the month.", note: "Future passive. The passive is preferred in formal announcements and essays when the process matters more than who performs it." },
  { active: "I <em>submitted</em> my application two weeks ago.", passive: "My application <em>was submitted</em> two weeks ago.", note: 'Past simple passive. The passive drops "by me" — natural when the focus is on what was done, not who did it. Common in formal writing.' },
  { active: "Employees <em>are reporting</em> the issue to management.", passive: "The issue <em>is being reported</em> to management by employees.", note: "Present continuous passive. The passive shifts focus to the issue — useful in a news description (Speaking Task 3) where the event is more important than the people involved." },
  { active: "The government <em>should fund</em> more affordable housing projects.", passive: "More affordable housing projects <em>should be funded</em> by the government.", note: 'Modal passive (should). The passive version sounds more formal and is common in Writing Task 2 recommendations — "should be funded" feels like a policy statement.' },
  { active: "Nobody <em>had informed</em> the tenants about the planned maintenance.", passive: "The tenants <em>had not been informed</em> about the planned maintenance.", note: "Past perfect passive. The passive is stronger for a complaint — it focuses on what the tenants experienced (not being told), making the oversight feel more significant." },
  { active: "Researchers <em>have proven</em> that regular exercise reduces stress.", passive: "It <em>has been proven</em> that regular exercise reduces stress.", note: 'Impersonal "it" passive. Extremely common in Writing Task 2 — "It has been proven / shown / argued that…" adds authority to a claim without requiring a named source.' },
  { active: "We <em>must resolve</em> this issue before the lease renewal date.", passive: "This issue <em>must be resolved</em> before the lease renewal date.", note: 'Modal passive (must). The passive version removes "we" and sounds more like an official condition — appropriate for formal emails where you want to state a requirement impersonally.' },
];

const CONVERT_TEXT = "text-[13px] text-gray-700 leading-relaxed [&_em]:not-italic [&_em]:font-semibold";

function ConvertPanel() {
  return (
    <>
      <Html
        as="p"
        className="text-[13px] text-gray-500 leading-relaxed mb-5 [&_strong]:text-gray-900"
        html={`Study how the same idea shifts between active and passive. Pay attention to how the <strong>subject changes</strong> and the <strong>verb form changes</strong> in each conversion.`}
      />
      {CONVERSIONS.map((pair, i) => (
        <div
          key={i}
          className="bg-gray-50 border border-gray-200 rounded-[14px] p-5 mb-6"
        >
          <div className="grid [grid-template-columns:1fr_auto_1fr] gap-2.5 items-center mb-2.5 max-[600px]:grid-cols-1">
            <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wide mb-1.5 text-green-800">
                Active
              </div>
              <Html as="div" className={CONVERT_TEXT} html={pair.active} />
            </div>
            <div className="text-[18px] text-gray-400 text-center shrink-0 max-[600px]:rotate-90">
              ⇄
            </div>
            <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wide mb-1.5 text-amber-800">
                Passive
              </div>
              <Html as="div" className={CONVERT_TEXT} html={pair.passive} />
            </div>
          </div>
          <div className="text-[11.5px] text-gray-500 leading-relaxed px-2.5 py-1.5 bg-amber-50 border border-amber-200 rounded-md">
            {pair.note}
          </div>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ TRAPS PANEL ═══════════════════════════ */

function TrapsPanel() {
  const [open, setOpen] = useState({});
  return (
    <>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
        Tap each card to see why the passive version is wrong and what to use
        instead.
      </p>
      <div className="flex flex-col gap-2.5">
        {VOICE_TRAPS.map((t, i) => (
          <div
            key={i}
            onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
            className="bg-white border border-gray-200 rounded-xl px-5 py-4 cursor-pointer"
          >
            <div className="text-sm text-red-600 line-through mb-1.5">
              {t.wrong}
            </div>
            <div className="text-sm text-green-600 font-medium mb-1.5">
              {t.right}
            </div>
            {open[i] ? (
              <Html
                as="div"
                className="text-xs text-gray-500 leading-relaxed mt-1.5 pt-1.5 border-t border-gray-100"
                html={t.why}
              />
            ) : (
              <div className="text-xs text-gray-400 mt-1">tap to see why →</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

function PanelFor({ id }) {
  switch (id) {
    case "vc-overview":
      return <OverviewPanel />;
    case "vc-active":
      return (
        <ExamplesPanel
          intro={`Active voice puts the <strong>subject in control</strong> — it is direct, confident, and natural. Use it for opinions, advice, stories, comparisons, and scene descriptions.`}
          leftBorder="#86efac"
          examples={ACTIVE_EXAMPLES}
          badgeCls="bg-green-100 text-green-800"
        />
      );
    case "vc-passive":
      return (
        <ExamplesPanel
          intro={`Passive voice puts the <strong>action or result in focus</strong> — it is formal, objective, and impersonal. Use it in complaints, formal emails, process descriptions, and essays where the doer is unknown or unimportant.`}
          leftBorder="#fde68a"
          examples={PASSIVE_EXAMPLES}
          badgeCls="bg-amber-100 text-amber-800"
        />
      );
    case "vc-convert":
      return <ConvertPanel />;
    case "vc-traps":
      return <TrapsPanel />;
    default:
      return null;
  }
}

export default function VoiceTab() {
  const [active, setActive] = useState("vc-overview");
  return (
    <>
      <div className="flex gap-0 border-b border-gray-200 mb-7 overflow-x-auto">
        {SUB_TABS.map((t) => (
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
      <PanelFor id={active} />
    </>
  );
}
