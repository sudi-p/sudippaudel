// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import {
  VERB_TYPES,
  TENSES,
  MODALS,
  PHRASAL,
  IRREGULAR,
  FILL_SENTENCES,
  QUIZ_QS,
} from "./data";

const Html = ({ html, className, as: Tag = "span" }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

/* ─────────────────────────── sub-tab shell ─────────────────────────── */

const SUB_TABS = [
  { id: "vb-types", label: "Types" },
  { id: "vb-tenses", label: "Tenses" },
  { id: "vb-forms", label: "Forms" },
  { id: "vb-modal", label: "Modals" },
  { id: "vb-phrasal", label: "Phrasal" },
  { id: "vb-irregular", label: "Irregular" },
  { id: "vb-fillin", label: "Fill-in" },
  { id: "vb-quiz", label: "Quiz" },
];

/* ═══════════════════════════ TYPES PANEL ═══════════════════════════ */

const CATS = {
  function: { color: "#185FA5", bg: "#E6F1FB", label: "Function" },
  object: { color: "#3B6D11", bg: "#EAF3DE", label: "Object need" },
  state: { color: "#854F0B", bg: "#FAEEDA", label: "State/action" },
  special: { color: "#A32D2D", bg: "#FCEBEB", label: "Special role" },
};
const SPOT_COLORS = ["#185FA5", "#3B6D11", "#854F0B", "#A32D2D"];
const SPOT_BGS = ["#E6F1FB", "#EAF3DE", "#FAEEDA", "#FCEBEB"];

function getType(id) {
  return VERB_TYPES.find((t) => t.id === id);
}

function TypesPanel() {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => setSelected((s) => (s === id ? null : id));

  return (
    <>
      <Html
        as="p"
        className="text-[13px] text-gray-500 leading-relaxed mb-4 px-3.5 py-2.5 border-l-[3px] border-gray-300 [&_strong]:text-gray-900"
        html={`These types are <strong>not mutually exclusive</strong> — a single verb can belong to multiple types at once. Click any card to explore its relationships.`}
      />

      <div className="flex gap-3 flex-wrap mb-5">
        {Object.values(CATS).map((c, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: c.color }}
            />
            {c.label}
          </div>
        ))}
      </div>

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] gap-2.5 mb-5">
        {VERB_TYPES.map((t) => {
          const cat = CATS[t.cat];
          let opacity = 1;
          let bg = "#fff";
          let border = "1.5px solid #e5e7eb";
          if (selected) {
            if (selected === t.id) {
              border = `2px solid ${cat.color}`;
            } else if (
              getType(selected)?.overlaps.some((o) => o.with === t.id) ||
              t.overlaps.some((o) => o.with === selected)
            ) {
              bg = "#f9fafb";
            } else {
              opacity = 0.35;
            }
          }
          return (
            <div
              key={t.id}
              onClick={() => toggle(t.id)}
              className="rounded-xl p-[12px_14px] cursor-pointer transition-opacity"
              style={{ background: bg, border, opacity }}
            >
              <div className="flex items-center mb-[5px]">
                <span
                  className="w-2 h-2 rounded-full inline-block mr-1.5 shrink-0"
                  style={{ background: cat.color }}
                />
                <span className="text-sm font-medium text-gray-900">
                  {t.name}
                </span>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed mb-2">
                {t.def}
              </div>
              {t.examples.map((e, i) => (
                <Html
                  key={i}
                  as="div"
                  className="text-[11.5px] text-gray-500 italic bg-gray-50 rounded-[5px] px-2 py-[3px] mb-[3px] leading-snug"
                  html={e}
                />
              ))}
              {t.overlaps.length > 0 && (
                <div
                  className="text-[10px] font-medium px-[7px] py-[2px] rounded mt-1.5 inline-block"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {t.overlaps.length} overlap{t.overlaps.length > 1 ? "s" : ""}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selected &&
        (() => {
          const t = getType(selected);
          const cat = CATS[t.cat];
          return (
            <div className="border-[0.5px] border-gray-200 rounded-xl p-5 bg-white mb-4">
              <div className="text-[18px] font-medium text-gray-900 mb-1 flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ background: cat.color }}
                />
                {t.name}
                <span className="text-xs font-normal text-gray-500 ml-1">
                  ({cat.label})
                </span>
              </div>
              <div className="text-[13px] text-gray-500 leading-relaxed mb-4">
                {t.def}
              </div>

              {t.overlaps.length > 0 && (
                <>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-gray-500 mb-2">
                    Overlaps with
                  </div>
                  <div className="flex flex-col gap-2">
                    {t.overlaps.map((o, i) => {
                      const oType = getType(o.with);
                      const oCat = oType ? CATS[oType.cat] : null;
                      return (
                        <div key={i} className="bg-gray-50 rounded-lg p-[10px_12px]">
                          <div className="mb-[3px]">
                            <span
                              className="text-[11px] px-[7px] py-[2px] rounded font-medium"
                              style={{ background: oCat?.bg, color: oCat?.color }}
                            >
                              {oType?.name || o.with}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed mb-[5px]">
                            {o.desc}
                          </div>
                          <div className="text-xs italic text-gray-500 bg-white rounded-[5px] px-[9px] py-1 border-[0.5px] border-gray-200">
                            {o.sentence}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {t.exclusive && (
                <>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-gray-500 mt-4 mb-2">
                    What makes it distinct
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 leading-relaxed">
                    {t.exclusive}
                  </div>
                </>
              )}

              {t.spotlightVerb && (
                <div className="mt-4">
                  <Html
                    as="div"
                    className="text-[11px] font-medium uppercase tracking-wider text-gray-500 mb-1.5 [&_strong]:text-gray-900"
                    html={`Verb spotlight — "<strong>${t.spotlightVerb}</strong>"`}
                  />
                  <div className="text-xs text-gray-500 mb-1.5">
                    This single verb can wear multiple hats:
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {t.spotlightTags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-[2px] rounded"
                        style={{
                          background: SPOT_BGS[i % 4],
                          color: SPOT_COLORS[i % 4],
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="text-xs text-gray-400 text-right mt-2.5 cursor-pointer"
                onClick={() => toggle(t.id)}
              >
                ↑ click to collapse
              </div>
            </div>
          );
        })()}
    </>
  );
}

/* ═══════════════════════════ TENSES PANEL ═══════════════════════════ */

const GROUP_COLORS = {
  "Simple tenses": { badge: "#dbeafe", badgeText: "#1e40af", border: "#bfdbfe", header: "#eff6ff" },
  "Continuous tenses": { badge: "#dcfce7", badgeText: "#166534", border: "#86efac", header: "#f0fdf4" },
  "Perfect tenses": { badge: "#fef3c7", badgeText: "#92400e", border: "#fde68a", header: "#fffbeb" },
  "Perfect continuous": { badge: "#ede9fe", badgeText: "#5b21b6", border: "#c4b5fd", header: "#faf5ff" },
};

function TensesPanel() {
  const groups = {};
  TENSES.forEach((t) => {
    (groups[t.group] = groups[t.group] || []).push(t);
  });

  return (
    <>
      {Object.entries(groups).map(([groupName, tenses]) => {
        const c =
          GROUP_COLORS[groupName] || {
            badge: "#f3f4f6",
            badgeText: "#374151",
            border: "#e5e7eb",
            header: "#f9fafb",
          };
        return (
          <div key={groupName} className="mb-9">
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b-2 border-gray-100">
              <span
                className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
                style={{ background: c.badge, color: c.badgeText }}
              >
                {groupName}
              </span>
              <span className="text-xs text-gray-400">
                {tenses.length} tense{tenses.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-3.5 max-[600px]:grid-cols-1">
              {tenses.map((t, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border overflow-hidden bg-white flex flex-col"
                  style={{ borderColor: c.border }}
                >
                  <div className="px-4 pt-[0.85rem] pb-3" style={{ background: c.header }}>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="text-[15px] font-bold text-gray-900 leading-tight">
                        {t.name}
                      </div>
                      <span
                        className="text-[11px] font-mono font-semibold px-[9px] py-[3px] rounded-md whitespace-nowrap shrink-0 mt-0.5"
                        style={{ background: c.badge, color: c.badgeText }}
                      >
                        {t.form}
                      </span>
                    </div>
                    <div className="text-[12.5px] text-gray-700 leading-relaxed">
                      {t.use}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-4 pt-[5px]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap">
                      Signals
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {t.signal.split(",").map((s, j) => (
                        <span
                          key={j}
                          className="text-[11px] bg-gray-100 text-gray-700 rounded px-1.5 py-[1px]"
                        >
                          {s.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 mt-[0.65rem]" />
                  <div className="px-4 pt-[0.65rem] pb-[0.85rem] flex flex-col gap-1.5">
                    {t.examples.map((ex, j) =>
                      typeof ex === "string" ? (
                        <div
                          key={j}
                          className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden"
                        >
                          <Html
                            as="div"
                            className="text-[12.5px] text-gray-700 leading-relaxed px-[9px] py-2 [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold"
                            html={ex}
                          />
                        </div>
                      ) : (
                        <div
                          key={j}
                          className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden"
                        >
                          <div className="flex items-center gap-1.5 px-[9px] py-[5px] border-b border-gray-100 flex-wrap">
                            <span
                              className="text-[10px] font-bold px-[7px] py-[2px] rounded whitespace-nowrap"
                              style={{ background: c.badge, color: c.badgeText }}
                            >
                              {ex.task}
                            </span>
                            <span className="text-[11px] text-gray-400 leading-snug">
                              {ex.scenario}
                            </span>
                          </div>
                          <Html
                            as="div"
                            className="text-[12.5px] text-gray-700 leading-relaxed px-[9px] py-1.5 [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold"
                            html={ex.sentence}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ═══════════════════════════ FORMS PANEL ═══════════════════════════ */

const FORM_LABEL = {
  v1: "bg-blue-100 text-blue-800",
  v2: "bg-amber-100 text-amber-800",
  v3: "bg-green-100 text-green-800",
  ving: "bg-violet-100 text-violet-800",
  vs: "bg-sky-100 text-sky-700",
  v5: "bg-pink-100 text-pink-800",
};

const FORMS = [
  { k: "v1", label: "V1", title: "Base form (infinitive)", body: 'The raw form of the verb, often with "to". Used after modals, auxiliaries, and certain verbs.', pills: ["to <em>run</em>", "I want <em>to eat</em>.", "She can <em>swim</em>."], headers: ["Word", "V1 (base)"], rows: [["run", "run"], ["eat", "eat"], ["write", "write"], ["speak", "speak"], ["go", "go"], ["make", "make"], ["take", "take"], ["give", "give"], ["think", "think"], ["know", "know"]] },
  { k: "v2", label: "V2", title: "Past simple", body: "Regular verbs add -ed. If ending in -e, add -d only. Consonant + y → -ied. Irregular verbs must be memorized.", pills: ["walk → walk<em>ed</em>", "love → lov<em>ed</em>", "go → <em>went</em>"], headers: ["Word", "V2 (past simple)", "Type"], rows: [["walk", "walked", "regular"], ["love", "loved", "regular (-e)"], ["study", "studied", "regular (-ied)"], ["go", "went", "irregular"], ["eat", "ate", "irregular"], ["write", "wrote", "irregular"], ["speak", "spoke", "irregular"], ["take", "took", "irregular"], ["begin", "began", "irregular"], ["plan", "planned", "regular (double)"]] },
  { k: "v3", label: "V3", title: "Past participle", body: 'Used with "have" for perfect tenses and "be" for passive voice. Regular verbs: same as V2. Irregular: must be learned separately.', pills: ["walked (V2 = V3)", "She has <em>eaten</em>.", "It was <em>broken</em>."], headers: ["Word", "V2", "V3 (past participle)"], rows: [["walk", "walked", "walked"], ["go", "went", "gone"], ["eat", "ate", "eaten"], ["write", "wrote", "written"], ["speak", "spoke", "spoken"], ["take", "took", "taken"], ["begin", "began", "begun"], ["break", "broke", "broken"], ["give", "gave", "given"], ["know", "knew", "known"]] },
  { k: "ving", label: "V4", title: "Present participle (-ing)", body: "Used for continuous tenses and as gerunds. Double the consonant after a short stressed vowel.", pills: ["run → runn<em>ing</em>", "write → writ<em>ing</em>", "play → play<em>ing</em>"], headers: ["Word", "V-ing", "Rule"], rows: [["run", "running", "double consonant"], ["write", "writing", "drop silent -e"], ["play", "playing", "add -ing"], ["sit", "sitting", "double consonant"], ["make", "making", "drop silent -e"], ["read", "reading", "add -ing"], ["swim", "swimming", "double consonant"], ["come", "coming", "drop silent -e"], ["study", "studying", "add -ing"], ["begin", "beginning", "double consonant"]] },
  { k: "vs", label: "V5", title: "Present simple (3rd person -s)", body: "Add -s or -es for he/she/it. Verbs ending in -ch, -sh, -x, -o, -ss get -es.", pills: ["run → run<em>s</em>", "teach → teach<em>es</em>", "go → go<em>es</em>"], headers: ["Word", "V1-s (he/she/it)"], rows: [["run", "runs"], ["teach", "teaches"], ["go", "goes"], ["watch", "watches"], ["play", "plays"], ["fix", "fixes"], ["study", "studies"], ["do", "does"], ["have", "has"], ["miss", "misses"]] },
  { k: "ving", label: "V-ing", title: "Gerund (verb as noun)", body: "The -ing form used as a noun — as a subject, object, or after prepositions. Same spelling as the present participle.", pills: ["<em>Swimming</em> is healthy.", "I enjoy <em>reading</em>.", "before <em>leaving</em>"], headers: ["Verb", "Gerund", "Used as"], rows: [["swim", "swimming", "subject"], ["read", "reading", "object"], ["run", "running", "subject"], ["write", "writing", "object"], ["leave", "leaving", "after preposition"], ["travel", "travelling", "subject"], ["cook", "cooking", "object"], ["speak", "speaking", "subject"], ["learn", "learning", "object"], ["work", "working", "after preposition"]] },
  { k: "v3", label: "V3", title: "Active vs. Passive voice", body: "Active: subject does the action. Passive: subject receives the action — formed with <em>be + V3</em>.", pills: ["Active: The dog bit him.", "Passive: He <em>was bitten</em>."], headers: ["Verb", "V2", "V3 (passive)"], rows: [["write", "wrote", "was written"], ["send", "sent", "was sent"], ["build", "built", "was built"], ["make", "made", "was made"], ["see", "saw", "was seen"], ["find", "found", "was found"], ["choose", "chose", "was chosen"], ["give", "gave", "was given"], ["teach", "taught", "was taught"], ["tell", "told", "was told"]] },
  { k: "v1", label: "V1", title: "Verb + infinitive vs. gerund", body: "Some verbs take infinitive (to V1), some take gerund (V-ing). Some change meaning with each.", pills: ["want/need + to V", "enjoy/avoid + V-ing", "stop to smoke ≠ stop smoking"], headers: ["Verb", "Followed by", "Example"], rows: [["want", "to V1", "want to leave"], ["enjoy", "V-ing", "enjoy reading"], ["decide", "to V1", "decide to stay"], ["avoid", "V-ing", "avoid making mistakes"], ["need", "to V1", "need to study"], ["finish", "V-ing", "finish writing"], ["plan", "to V1", "plan to travel"], ["consider", "V-ing", "consider moving"], ["stop*", "both", "stop to eat / stop eating"], ["remember*", "both", "remember to call / remember calling"]] },
];

const MASTER_ROWS = [
  ["be", "be", "was / were", "been", "being", "is"], ["have", "have", "had", "had", "having", "has"], ["do", "do", "did", "done", "doing", "does"], ["go", "go", "went", "gone", "going", "goes"], ["make", "make", "made", "made", "making", "makes"], ["take", "take", "took", "taken", "taking", "takes"], ["get", "get", "got", "got / gotten", "getting", "gets"], ["give", "give", "gave", "given", "giving", "gives"], ["know", "know", "knew", "known", "knowing", "knows"], ["think", "think", "thought", "thought", "thinking", "thinks"], ["see", "see", "saw", "seen", "seeing", "sees"], ["come", "come", "came", "come", "coming", "comes"], ["say", "say", "said", "said", "saying", "says"], ["write", "write", "wrote", "written", "writing", "writes"], ["speak", "speak", "spoke", "spoken", "speaking", "speaks"], ["read", "read", "read", "read", "reading", "reads"], ["run", "run", "ran", "run", "running", "runs"], ["eat", "eat", "ate", "eaten", "eating", "eats"], ["find", "find", "found", "found", "finding", "finds"], ["tell", "tell", "told", "told", "telling", "tells"], ["buy", "buy", "bought", "bought", "buying", "buys"], ["send", "send", "sent", "sent", "sending", "sends"], ["bring", "bring", "brought", "brought", "bringing", "brings"], ["build", "build", "built", "built", "building", "builds"], ["break", "break", "broke", "broken", "breaking", "breaks"], ["begin", "begin", "began", "begun", "beginning", "begins"], ["choose", "choose", "chose", "chosen", "choosing", "chooses"], ["teach", "teach", "taught", "taught", "teaching", "teaches"], ["learn", "learn", "learned", "learned", "learning", "learns"], ["walk", "walk", "walked", "walked", "walking", "walks"], ["show", "show", "showed", "shown", "showing", "shows"], ["keep", "keep", "kept", "kept", "keeping", "keeps"], ["leave", "leave", "left", "left", "leaving", "leaves"], ["meet", "meet", "met", "met", "meeting", "meets"], ["feel", "feel", "felt", "felt", "feeling", "feels"], ["pay", "pay", "paid", "paid", "paying", "pays"], ["sit", "sit", "sat", "sat", "sitting", "sits"], ["stand", "stand", "stood", "stood", "standing", "stands"], ["lose", "lose", "lost", "lost", "losing", "loses"], ["win", "win", "won", "won", "winning", "wins"], ["fall", "fall", "fell", "fallen", "falling", "falls"], ["hold", "hold", "held", "held", "holding", "holds"], ["cut", "cut", "cut", "cut", "cutting", "cuts"], ["put", "put", "put", "put", "putting", "puts"], ["set", "set", "set", "set", "setting", "sets"], ["hit", "hit", "hit", "hit", "hitting", "hits"], ["forget", "forget", "forgot", "forgotten", "forgetting", "forgets"], ["grow", "grow", "grew", "grown", "growing", "grows"], ["throw", "throw", "threw", "thrown", "throwing", "throws"], ["drive", "drive", "drove", "driven", "driving", "drives"],
];

const MASTER_BADGES = [
  { k: "v1", label: "V1" }, { k: "vs", label: "V2" }, { k: "v3", label: "V3" }, { k: "ving", label: "V4" }, { k: "v5", label: "V5" },
];

function FormsPanel() {
  return (
    <>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-3 max-[600px]:grid-cols-1">
        {FORMS.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl px-5 py-4"
          >
            <div className="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-[9px] py-[2px] rounded-md tracking-wide ${FORM_LABEL[f.k]}`}
              >
                {f.label}
              </span>
              {f.title}
            </div>
            <div className="text-[13px] text-gray-500 leading-relaxed">
              <Html className="[&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold" html={f.body} />
              <div className="flex gap-2 flex-wrap mt-2">
                {f.pills.map((p, j) => (
                  <Html
                    key={j}
                    className="text-xs bg-gray-50 border border-gray-200 rounded-md px-2.5 py-[3px] text-gray-700 [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold"
                    html={p}
                  />
                ))}
              </div>
              <table className="w-full border-collapse text-[12.5px] mt-2.5 rounded-lg overflow-hidden border border-gray-200">
                <thead>
                  <tr>
                    {f.headers.map((h, j) => (
                      <th
                        key={j}
                        className="bg-gray-100 text-gray-700 font-semibold px-2.5 py-[7px] text-left border-b border-gray-200"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.rows.map((r, j) => (
                    <tr key={j}>
                      {r.map((cell, k) => (
                        <td
                          key={k}
                          className={`px-2.5 py-1.5 border-b border-gray-100 ${
                            k === 0
                              ? "text-gray-700"
                              : "text-blue-600 font-medium italic"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Master reference table */}
      <div className="mt-8 border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-5 pt-4 pb-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between flex-wrap gap-2.5">
          <div className="text-sm font-bold text-gray-900">
            Master Verb Forms Reference
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { k: "v1", t: "V1 Base" },
              { k: "vs", t: "V2 Past Simple" },
              { k: "v3", t: "V3 Past Participle" },
              { k: "ving", t: "V4 Present Participle" },
              { k: "v5", t: "V5 3rd Person -s" },
            ].map((l, i) => (
              <span
                key={i}
                className={`text-[11px] font-semibold px-2.5 py-[2px] rounded-full ${FORM_LABEL[l.k]}`}
              >
                {l.t}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13px] min-w-[620px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-[9px] text-left border-b-2 border-gray-200 text-gray-700 font-semibold whitespace-nowrap">
                  Word
                </th>
                {MASTER_BADGES.map((b, i) => (
                  <th
                    key={i}
                    className="px-3 py-[9px] text-left border-b-2 border-gray-200 text-gray-700 font-semibold whitespace-nowrap"
                  >
                    <span
                      className={`text-[10px] font-bold px-1.5 py-[1px] rounded mr-1 align-middle ${FORM_LABEL[b.k]}`}
                    >
                      {b.label}
                    </span>
                    {b.label === "V1" ? "Base" : b.label === "V2" ? "Past Simple" : b.label === "V3" ? "Past Participle" : b.label === "V4" ? "Present Participle" : "3rd Person -s"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MASTER_ROWS.map((r, i) => (
                <tr key={i}>
                  <td className="px-3 py-[7px] border-b border-gray-100 font-bold text-gray-900">
                    {r[0]}
                  </td>
                  {r.slice(1).map((cell, j) => (
                    <td
                      key={j}
                      className="px-3 py-[7px] border-b border-gray-100 text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Html
        as="div"
        className="mt-4 px-3.5 py-2.5 bg-amber-50 border border-amber-200 rounded-lg text-[13px] text-amber-800 leading-relaxed [&_strong]:font-bold [&_em]:not-italic [&_em]:font-semibold"
        html={`<strong>Quick reference:</strong> V1 = base form · V2 = past simple · V3 = past participle · V-ing = present participle / gerund. Regular verbs: V2 = V3 = V1 + <em>-ed</em>. Irregular verbs: V2 and V3 must be memorized.`}
      />
    </>
  );
}

/* ═══════════════════════════ MODALS PANEL ═══════════════════════════ */

const MODAL_META = {
  can: { ability: true, permission: true, possibility: true, obligation: false, future: false, polite: false, past: "could", certainty: 40, certLabel: "possible", certColor: "#60a5fa" },
  could: { ability: true, permission: true, possibility: true, obligation: false, future: false, polite: true, past: "—", certainty: 25, certLabel: "weak possibility", certColor: "#93c5fd" },
  may: { ability: false, permission: true, possibility: true, obligation: false, future: false, polite: true, past: "might", certainty: 50, certLabel: "50/50", certColor: "#fbbf24" },
  might: { ability: false, permission: false, possibility: true, obligation: false, future: false, polite: false, past: "—", certainty: 20, certLabel: "unlikely", certColor: "#d1d5db" },
  must: { ability: false, permission: false, possibility: false, obligation: true, future: false, polite: false, past: "had to", certainty: 95, certLabel: "near certain", certColor: "#f87171" },
  should: { ability: false, permission: false, possibility: false, obligation: true, future: false, polite: false, past: "should have", certainty: 70, certLabel: "expected", certColor: "#fb923c" },
  will: { ability: false, permission: false, possibility: false, obligation: false, future: true, polite: false, past: "would", certainty: 90, certLabel: "very likely", certColor: "#ef4444" },
  would: { ability: false, permission: false, possibility: false, obligation: false, future: true, polite: true, past: "—", certainty: 55, certLabel: "conditional", certColor: "#a78bfa" },
  shall: { ability: false, permission: false, possibility: false, obligation: false, future: true, polite: true, past: "—", certainty: 85, certLabel: "formal future", certColor: "#c4b5fd" },
  "ought to": { ability: false, permission: false, possibility: false, obligation: true, future: false, polite: false, past: "ought to have", certainty: 65, certLabel: "moral duty", certColor: "#fdba74" },
};

const MEANING_COLORS = {
  "Ability (present)": { bg: "#dbeafe", c: "#1e40af" }, "Past ability": { bg: "#dbeafe", c: "#1e40af" }, "Permission (informal)": { bg: "#dcfce7", c: "#166534" }, "Formal permission": { bg: "#dcfce7", c: "#166534" }, Possibility: { bg: "#fef3c7", c: "#92400e" }, "Weak possibility (< 50%)": { bg: "#fef3c7", c: "#92400e" }, "Strong obligation": { bg: "#fee2e2", c: "#991b1b" }, "Logical deduction (certainty)": { bg: "#fee2e2", c: "#991b1b" }, "Advice / recommendation": { bg: "#ffedd5", c: "#9a3412" }, "Mild obligation": { bg: "#ffedd5", c: "#9a3412" }, Expectation: { bg: "#ffedd5", c: "#9a3412" }, "Future fact / prediction": { bg: "#ede9fe", c: "#5b21b6" }, Promise: { bg: "#ede9fe", c: "#5b21b6" }, "Spontaneous decision": { bg: "#ede9fe", c: "#5b21b6" }, Conditional: { bg: "#fce7f3", c: "#9d174d" }, "Polite request": { bg: "#fce7f3", c: "#9d174d" }, "Polite suggestion": { bg: "#fce7f3", c: "#9d174d" }, "Past habit": { bg: "#f3f4f6", c: "#374151" }, Wish: { bg: "#f3f4f6", c: "#374151" }, "Formal future (I/we)": { bg: "#ede9fe", c: "#5b21b6" }, Offer: { bg: "#dcfce7", c: "#166534" }, Suggestion: { bg: "#fce7f3", c: "#9d174d" }, "Moral duty / advice": { bg: "#ffedd5", c: "#9a3412" },
};

const SPECTRUM = [
  { label: "Ability", color: { bg: "#dbeafe", c: "#1e40af" }, modals: ["can", "could"] },
  { label: "Permission", color: { bg: "#dcfce7", c: "#166534" }, modals: ["can", "may", "could"] },
  { label: "Possibility", color: { bg: "#fef3c7", c: "#92400e" }, modals: ["may", "might", "could", "can"] },
  { label: "Obligation", color: { bg: "#fee2e2", c: "#991b1b" }, modals: ["must", "should", "ought to"] },
  { label: "Future", color: { bg: "#ede9fe", c: "#5b21b6" }, modals: ["will", "shall", "would"] },
  { label: "Polite / Formal", color: { bg: "#fce7f3", c: "#9d174d" }, modals: ["would", "could", "may", "shall"] },
];

const CERT_ORDER = ["must", "will", "shall", "should", "ought to", "would", "may", "can", "could", "might"];

const Dot = ({ yes }) => {
  if (yes === "partial")
    return <span title="sometimes" className="w-[9px] h-[9px] rounded-full inline-block bg-amber-500" />;
  return yes ? (
    <span title="yes" className="w-[9px] h-[9px] rounded-full inline-block bg-green-600" />
  ) : (
    <span title="no" className="w-[9px] h-[9px] rounded-full inline-block bg-gray-200" />
  );
};

function ModalsPanel() {
  const [selected, setSelected] = useState("can");
  const data = MODALS.find((m) => m.modal === selected);

  return (
    <div className="flex flex-col gap-8">
      {/* spectrum selector */}
      <div className="bg-white border border-gray-200 rounded-[14px] px-6 py-5">
        <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">
          Select a modal to explore
        </div>
        <div className="flex flex-col gap-3.5">
          {SPECTRUM.map((g, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-[11px] font-semibold text-gray-500 w-[90px] shrink-0 text-right max-[600px]:w-[70px] max-[600px]:text-[10px]">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.modals.map((m, j) => (
                  <button
                    key={j}
                    type="button"
                    onClick={() => setSelected(m)}
                    style={{ background: g.color.bg, color: g.color.c }}
                    className={`text-xs font-bold px-3.5 py-1 rounded-full cursor-pointer border-2 transition-all hover:-translate-y-px ${
                      selected === m
                        ? "border-gray-900 shadow-md -translate-y-px"
                        : "border-transparent"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* detail card */}
      {data && (
        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
          <div className="px-6 pt-[1.1rem] pb-4 flex items-start justify-between gap-3 flex-wrap">
            <div>
              <div className="text-[32px] font-extrabold text-gray-900 leading-none max-[600px]:text-2xl">
                {data.modal}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                {data.meanings.map((m, i) => {
                  const c = MEANING_COLORS[m] || { bg: "#f3f4f6", c: "#374151" };
                  return (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-[3px] rounded-full"
                      style={{ background: c.bg, color: c.c }}
                    >
                      {m}
                    </span>
                  );
                })}
              </div>
              <Html
                as="div"
                className="text-xs text-gray-500 [&_strong]:text-red-600"
                html={`<strong>Negative:</strong> ${data.negative}`}
              />
            </div>
          </div>
          <div className="px-6 pb-5">
            <div className="text-[12.5px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed mb-4">
              {data.note}
            </div>
            <div className="flex flex-col gap-1.5">
              {data.examples.map((e, i) => (
                <div
                  key={i}
                  className="text-[13px] text-gray-700 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 leading-relaxed"
                >
                  <div className="flex gap-1.5 items-center mb-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-[2px] rounded-[10px] bg-blue-100 text-blue-800 tracking-wide">
                      {e.task}
                    </span>
                    <span className="text-[11px] text-gray-400 italic">
                      {e.scenario}
                    </span>
                  </div>
                  <div className="text-[13px] text-gray-700 leading-relaxed">
                    "{e.sentence}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* certainty spectrum */}
      <div className="bg-white border border-gray-200 rounded-[14px] px-6 py-5">
        <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-[1.1rem]">
          Possibility &amp; Certainty Spectrum
        </div>
        {CERT_ORDER.map((m, i) => {
          const meta = MODAL_META[m];
          return (
            <div key={i} className="flex items-center gap-3 mb-[0.6rem]">
              <div className="text-xs font-bold text-gray-900 w-[72px] shrink-0">
                {m}
              </div>
              <div className="flex-1 h-2.5 bg-gray-100 rounded-[10px] overflow-hidden">
                <div
                  className="h-full rounded-[10px] transition-all"
                  style={{ width: `${meta.certainty}%`, background: meta.certColor }}
                />
              </div>
              <div className="text-[11px] text-gray-400 w-9 text-right shrink-0">
                {meta.certainty}%
              </div>
              <div className="text-[11px] text-gray-400 w-[120px] shrink-0 italic max-[600px]:hidden">
                {meta.certLabel}
              </div>
            </div>
          );
        })}
      </div>

      {/* feature matrix */}
      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="text-xs font-bold tracking-wider uppercase text-gray-400 px-5 pt-4 pb-3 border-b border-gray-100">
          Modal Features at a Glance
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs min-w-[560px]">
            <thead>
              <tr>
                {["Modal", "Ability", "Permission", "Possibility", "Obligation", "Future", "Polite", "Past form"].map((h, i) => (
                  <th
                    key={i}
                    className={`bg-gray-50 px-3 py-2 text-left border-b border-gray-200 font-semibold whitespace-nowrap ${
                      i === 0 ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MODALS.map((d, i) => {
                const m = MODAL_META[d.modal];
                return (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-3 py-[7px] border-b border-gray-50 font-bold text-gray-900 text-[13px]">
                      {d.modal}
                    </td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.ability} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.permission} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.possibility} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.obligation} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.future} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50"><Dot yes={m.polite} /></td>
                    <td className="px-3 py-[7px] border-b border-gray-50 text-[11px] text-gray-500">
                      {m.past}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ PHRASAL PANEL ═══════════════════════════ */

function PhrasalPanel() {
  const [open, setOpen] = useState({});
  return (
    <>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        Phrasal verbs = verb + particle (preposition or adverb). The meaning is
        often completely different from the individual words. Click any card to
        see usage.
      </p>
      {PHRASAL.map((p, i) => (
        <div
          key={i}
          onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
          className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3 cursor-pointer"
        >
          <div className="text-sm font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
            <span className="inline-block text-[11px] font-semibold px-[9px] py-[2px] rounded-md bg-pink-100 text-pink-800">
              {p.verb}
            </span>
            <span className="text-[13px] font-normal text-gray-500">
              {p.meaning}
            </span>
            <span className="ml-auto text-[11px] text-gray-400">
              {p.separable ? "separable" : "inseparable"}
            </span>
          </div>
          {open[i] ? (
            <div className="flex gap-2 flex-wrap mt-2">
              {p.examples.map((e, j) => (
                <Html
                  key={j}
                  className="text-xs bg-gray-50 border border-gray-200 rounded-md px-2.5 py-[3px] text-gray-700 [&_em]:text-blue-600 [&_em]:not-italic [&_em]:font-semibold"
                  html={e}
                />
              ))}
            </div>
          ) : (
            <div className="text-xs text-gray-400 mt-1">tap for examples →</div>
          )}
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════ IRREGULAR PANEL ═══════════════════════════ */

function IrregularPanel() {
  const patterns = ["all", ...new Set(IRREGULAR.map((r) => r.pattern))];
  const [filter, setFilter] = useState("all");
  const rows =
    filter === "all" ? IRREGULAR : IRREGULAR.filter((r) => r.pattern === filter);

  return (
    <>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        Irregular verbs don't follow the -ed rule. Filter by pattern to learn
        them in groups.
      </p>
      <div className="flex gap-2 flex-wrap mb-3">
        {patterns.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setFilter(p)}
            className={`px-3 py-[5px] border rounded-md text-xs font-medium cursor-pointer ${
              filter === p
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {p === "all" ? "All" : p}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              {["Base", "Past simple(V2)", "Past participle(V3)", "Pattern"].map((h, i) => (
                <th
                  key={i}
                  className="bg-gray-100 text-gray-700 font-semibold px-3 py-[7px] text-left border border-gray-200"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-[7px] border border-gray-200 text-gray-700">
                  <strong>{r.base}</strong>
                </td>
                <td className="px-3 py-[7px] border border-gray-200 text-gray-700">
                  {r.past}
                </td>
                <td className="px-3 py-[7px] border border-gray-200 text-gray-700">
                  {r.pp}
                </td>
                <td className="px-3 py-[7px] border border-gray-200 text-gray-700">
                  <span className="text-[11px] bg-gray-100 rounded px-1.5 py-[2px] text-gray-700">
                    {r.pattern}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ═══════════════════════════ FILL-IN PANEL ═══════════════════════════ */

const NAV_BTN =
  "px-3.5 py-1.5 border border-gray-300 rounded-lg bg-white text-[13px] cursor-pointer text-gray-700 disabled:opacity-35 disabled:cursor-default";

function FillPanel() {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState(null);
  const s = FILL_SENTENCES[i];
  const move = (d) => {
    setI((x) => Math.max(0, Math.min(FILL_SENTENCES.length - 1, x + d)));
    setChosen(null);
  };
  const isRight = chosen === s.answer;

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <button className={NAV_BTN} onClick={() => move(-1)} disabled={i === 0}>
          ← prev
        </button>
        <span className="text-[13px] text-gray-500">
          {i + 1} of {FILL_SENTENCES.length}
        </span>
        <button
          className={NAV_BTN}
          onClick={() => move(1)}
          disabled={i === FILL_SENTENCES.length - 1}
        >
          next →
        </button>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 mb-3">
        <div className="text-[18px] text-gray-900 [line-height:2.2] mb-3.5">
          {s.before}{" "}
          <span
            className="inline-block min-w-[80px] border-b-2 border-gray-400 text-center px-1 text-[18px]"
            style={chosen && isRight ? { color: "#16a34a" } : { color: "#6b7280" }}
          >
            {chosen && isRight ? s.answer : "___"}
          </span>{" "}
          {s.after}
        </div>
        <div className="flex gap-2 flex-wrap">
          {s.options.map((opt) => {
            let cls = "bg-white border-gray-300 text-gray-700";
            if (chosen) {
              if (opt === s.answer) cls = "bg-green-100 border-green-600 text-green-800";
              else if (opt === chosen) cls = "bg-red-100 border-red-600 text-red-800";
            }
            return (
              <button
                key={opt}
                type="button"
                disabled={!!chosen}
                onClick={() => setChosen(opt)}
                className={`px-4 py-1.5 border rounded-lg text-sm font-medium ${cls} ${
                  !chosen ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {chosen && (
          <div
            className={`text-[13px] mt-2.5 font-medium ${
              isRight ? "text-green-600" : "text-red-600"
            }`}
          >
            {isRight ? "✓ Correct!" : "✗ Not quite."}
          </div>
        )}
      </div>
      {chosen && (
        <Html
          as="div"
          className="text-[13px] text-gray-500 leading-relaxed px-3.5 py-2.5 bg-gray-50 rounded-lg mt-2 [&_strong]:text-gray-700"
          html={s.explain}
        />
      )}
    </>
  );
}

/* ═══════════════════════════ QUIZ PANEL ═══════════════════════════ */

function QuizPanel() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);

  const answer = (idx) => {
    if (chosen !== null) return;
    const q = QUIZ_QS[i];
    setChosen(idx);
    if (idx === q.ans) setScore((s) => s + 1);
    setTimeout(() => {
      setI((x) => x + 1);
      setChosen(null);
    }, 1900);
  };
  const restart = () => {
    setI(0);
    setScore(0);
    setChosen(null);
  };

  const done = i >= QUIZ_QS.length;
  const pct = done ? 100 : (i / QUIZ_QS.length) * 100;

  return (
    <>
      <div className="h-[3px] bg-gray-200 rounded-sm mb-5">
        <div
          className="h-[3px] bg-blue-600 rounded-sm transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      {done ? (
        <div className="text-center px-4 py-10">
          <div className="text-5xl font-bold text-gray-900">
            {score}/{QUIZ_QS.length}
          </div>
          <div className="text-[15px] text-gray-500 mt-1.5">
            {score === QUIZ_QS.length
              ? "Perfect score! 🎉"
              : score >= 9
                ? "Excellent work!"
                : score >= 7
                  ? "Good effort — review the tenses!"
                  : "Keep practising — you'll get there!"}
          </div>
          <button className={`${NAV_BTN} mt-6`} onClick={restart}>
            Try again
          </button>
        </div>
      ) : (
        (() => {
          const q = QUIZ_QS[i];
          return (
            <>
              <div className="text-base font-semibold text-gray-900 mb-3.5">
                {i + 1}. {q.q}
              </div>
              <div className="flex flex-col gap-2">
                {q.opts.map((o, idx) => {
                  let cls = "bg-white border-gray-300 text-gray-700";
                  if (chosen !== null) {
                    if (idx === q.ans) cls = "bg-green-100 border-green-600 text-green-800";
                    else if (idx === chosen) cls = "bg-red-100 border-red-600 text-red-800";
                  }
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={chosen !== null}
                      onClick={() => answer(idx)}
                      className={`px-3.5 py-2.5 border rounded-lg text-sm text-left ${cls} ${
                        chosen === null
                          ? "cursor-pointer hover:bg-gray-50"
                          : "cursor-default"
                      }`}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>
              {chosen !== null && (
                <Html
                  as="div"
                  className="text-[13px] text-gray-500 mt-2.5 px-3 py-2.5 bg-gray-50 rounded-lg leading-relaxed [&_strong]:text-gray-700"
                  html={q.exp}
                />
              )}
            </>
          );
        })()
      )}
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

const PANELS = {
  "vb-types": TypesPanel,
  "vb-tenses": TensesPanel,
  "vb-forms": FormsPanel,
  "vb-modal": ModalsPanel,
  "vb-phrasal": PhrasalPanel,
  "vb-irregular": IrregularPanel,
  "vb-fillin": FillPanel,
  "vb-quiz": QuizPanel,
};

export default function VerbsTab() {
  const [active, setActive] = useState("vb-types");
  const Panel = PANELS[active];
  return (
    <>
      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer border-b-2 bg-none whitespace-nowrap transition-colors ${
              active === t.id
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-900"
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
