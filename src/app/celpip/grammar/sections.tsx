// @ts-nocheck
/* eslint-disable */
"use client";

import {
  GROUPS,
  CONJ_GROUPS,
  VOWEL_SOUNDS,
  CONSONANT_SOUNDS,
  STRESS_RULES,
  CONNECTED_SPEECH,
} from "./data";

/* ─────────────────────────────────────────────────────────────────────────
   Speech helper — shared by Phonetics buttons and (via window) by the
   not-yet-migrated tabs whose innerHTML still uses onclick="phSpeak(...)".
   ───────────────────────────────────────────────────────────────────────── */
export function phSpeak(text, rate = 0.85) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "en-US";
  utt.rate = rate;
  utt.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred =
    voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.includes("Samantha") ||
          v.name.includes("Google US") ||
          v.name.includes("Daniel") ||
          v.name.includes("Karen")),
    ) || voices.find((v) => v.lang.startsWith("en"));
  if (preferred) utt.voice = preferred;

  window.speechSynthesis.speak(utt);
}

/* ─── small shared building blocks ─────────────────────────────────────── */

function SectionHeader({ emoji, label, badgeStyle, count }) {
  return (
    <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b-2 border-gray-100">
      <span className="text-[1.3rem]">{emoji}</span>
      <span
        className="text-[11px] font-bold px-2.5 py-[3px] rounded-full tracking-wide uppercase"
        style={badgeStyle}
      >
        {label}
      </span>
      {count != null && (
        <span className="text-xs text-gray-400">{count}</span>
      )}
    </div>
  );
}

function Intro({ children }) {
  return (
    <div className="text-[13px] text-gray-500 leading-relaxed mb-4 px-3.5 py-2.5 bg-gray-50 rounded-lg border-l-[3px] border-gray-200">
      {children}
    </div>
  );
}

const CARD_GRID =
  "grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] max-[600px]:grid-cols-1";

/* ─── reusable GROUP section (Nouns & Pronouns + Conjunctions) ─────────── */

function GroupSection({ group, countNoun }) {
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

export function NounsPronounsSection() {
  return (
    <>
      {GROUPS.map((group, i) => (
        <GroupSection key={i} group={group} countNoun="entries" />
      ))}
    </>
  );
}

export function ConjunctionsSection() {
  return (
    <>
      {CONJ_GROUPS.map((group, i) => (
        <GroupSection key={i} group={group} countNoun="conjunctions" />
      ))}
    </>
  );
}

/* ─── Phonetics ────────────────────────────────────────────────────────── */

function SpeakButton({ text, rate = 0.85, className = "", title }) {
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

function WordChip({ word }) {
  return (
    <span className="inline-flex items-center gap-[3px] text-[11.5px] text-blue-600 font-semibold bg-blue-50 px-2 py-[2px] rounded-[5px] italic">
      {word}
      <SpeakButton text={word} title={`Hear '${word}'`} />
    </span>
  );
}

function SoundCard({ s, children }) {
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

const TRAP_CLS =
  "text-[11.5px] text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1 leading-relaxed";

export function PhoneticsSection() {
  return (
    <>
      {/* ① Vowel Sounds */}
      <div className="mb-10">
        <SectionHeader
          emoji="🗣️"
          label="Vowel Sounds"
          badgeStyle={{ background: "#dbeafe", color: "#1e40af" }}
          count={`${VOWEL_SOUNDS.length} sounds`}
        />
        <Intro>
          English has around 20 vowel sounds but only 5 vowel letters — the same
          letter can represent many sounds. Learning the IPA symbol for each
          sound helps you look up pronunciation in any dictionary.
        </Intro>
        <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] max-[600px]:grid-cols-1">
          {VOWEL_SOUNDS.map((v, i) => (
            <SoundCard key={i} s={v}>
              <div className="text-[12.5px] text-gray-700 leading-relaxed px-2 py-[5px] bg-gray-50 rounded-md border-l-[3px] border-gray-200">
                👄 {v.mouth}
              </div>
              <div className="flex flex-wrap gap-1">
                {v.words.map((w, j) => (
                  <WordChip key={j} word={w} />
                ))}
              </div>
              {v.minimal.length > 0 && (
                <div className="text-[11px] text-gray-500">
                  <strong className="text-gray-700">Minimal pairs:</strong>{" "}
                  {v.minimal.join(" · ")}
                </div>
              )}
              {v.trap && <div className={TRAP_CLS}>⚠️ {v.trap}</div>}
            </SoundCard>
          ))}
        </div>
      </div>

      {/* ② Consonant Sounds */}
      <div className="mb-10">
        <SectionHeader
          emoji="🔤"
          label="Consonant Sounds"
          badgeStyle={{ background: "#dcfce7", color: "#166534" }}
          count={`${CONSONANT_SOUNDS.length} sounds`}
        />
        <Intro>
          English consonants come in voiced/voiceless pairs — same mouth
          position, but one uses the voice (feel your throat) and one is just
          air. Many spelling patterns are silent or irregular.
        </Intro>
        <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] max-[600px]:grid-cols-1">
          {CONSONANT_SOUNDS.map((c, i) => (
            <SoundCard key={i} s={c}>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold px-2 py-[2px] rounded-[10px] bg-gray-100 text-gray-700">
                  {c.type}
                </span>
                <span
                  className="text-[10px] font-bold px-2 py-[2px] rounded-[10px]"
                  style={
                    c.voiced
                      ? { background: "#dcfce7", color: "#166534" }
                      : { background: "#fee2e2", color: "#991b1b" }
                  }
                >
                  {c.voiced ? "Voiced" : "Voiceless"}
                </span>
                {c.pair && (
                  <span className="text-[11px] text-gray-400">
                    pair: <strong className="text-gray-500">/{c.pair}/</strong>
                  </span>
                )}
              </div>
              <div className="text-[12.5px] text-gray-700 leading-relaxed px-2 py-[5px] bg-gray-50 rounded-md border-l-[3px] border-gray-200">
                👄 {c.mouth}
              </div>
              <div className="flex flex-wrap gap-1">
                {c.words.map((w, j) => (
                  <WordChip key={j} word={w} />
                ))}
              </div>
              {c.tip && <div className={TRAP_CLS}>💡 {c.tip}</div>}
            </SoundCard>
          ))}
        </div>
      </div>

      {/* ③ Word Stress */}
      <div className="mb-10">
        <SectionHeader
          emoji="🎯"
          label="Word Stress"
          badgeStyle={{ background: "#fef3c7", color: "#92400e" }}
        />
        <Intro>
          Every English word with more than one syllable has one syllable that
          is louder, longer, and higher in pitch. Stressing the wrong syllable
          can make a word unrecognizable — even if every sound is correct.
        </Intro>
        {STRESS_RULES.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl px-4 py-[0.9rem] mb-3"
          >
            <div className="text-[13px] font-bold text-gray-900 mb-[3px]">
              {s.rule}
            </div>
            <div className="text-xs font-semibold text-blue-800 bg-blue-100 px-2.5 py-[2px] rounded-md inline-block mb-2">
              {s.pattern}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {s.examples.map((e, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1 text-[13px] italic text-gray-700 bg-gray-50 rounded-md px-2 py-[3px] border border-gray-100"
                >
                  {e.word}
                  {e.note && (
                    <span className="text-[11px] text-gray-400">
                      ({e.note})
                    </span>
                  )}
                  <SpeakButton
                    text={e.word.replace(/[A-Z]+/g, (x) => x.toLowerCase())}
                    title="Hear pronunciation"
                  />
                </span>
              ))}
            </div>
            {s.tip && <div className={TRAP_CLS}>💡 {s.tip}</div>}
          </div>
        ))}
      </div>

      {/* ④ Connected Speech */}
      <div className="mb-10">
        <SectionHeader
          emoji="🌊"
          label="Connected Speech"
          badgeStyle={{ background: "#ede9fe", color: "#5b21b6" }}
        />
        <Intro>
          Native speakers don't say each word separately — sounds blend,
          disappear, and change in natural speech. Understanding these patterns
          helps you hear and sound more natural.
        </Intro>
        {CONNECTED_SPEECH.map((cs, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl px-[1.1rem] py-4 mb-3"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[1.2rem]">{cs.emoji}</span>
              <span className="text-sm font-bold text-gray-900">
                {cs.feature}
              </span>
            </div>
            <div className="text-[12.5px] text-gray-700 leading-relaxed mb-2.5">
              {cs.description}
            </div>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-left px-2 py-[5px] text-gray-400 font-semibold border-b border-gray-100">
                    Phrase
                  </th>
                  <th className="text-left px-2 py-[5px] text-gray-400 font-semibold border-b border-gray-100">
                    How it sounds
                  </th>
                  <th className="text-left px-2 py-[5px] text-gray-400 font-semibold border-b border-gray-100">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {cs.examples.map((e, j) => (
                  <tr key={j}>
                    <td className="px-2 py-[5px] border-b border-gray-50 text-gray-700">
                      {e.phrase}
                      <SpeakButton text={e.phrase} title="Hear natural speech" />
                    </td>
                    <td className="px-2 py-[5px] border-b border-gray-50 text-blue-600 font-semibold font-mono">
                      {e.linked}
                    </td>
                    <td className="px-2 py-[5px] border-b border-gray-50 text-gray-400 italic">
                      {e.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
