// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";
import { POSITIONS, GROUPS } from "./data";

const SUB_TABS = [
  { id: "learn", label: "Learn the Positions" },
  { id: "quiz", label: "Test Yourself" },
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/* ═══════════════════════════ LEARN ═══════════════════════════ */

function LearnPanel() {
  return (
    <>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          These verbs describe how a person is holding their body — exactly the
          detail that lifts a{" "}
          <span className="font-semibold text-sapphire-dark">
            Speaking Task 3
          </span>{" "}
          scene description above the ordinary. Each figure shows the pose, and
          the italic line is a ready-made sentence you can adapt when you
          describe the people in your image.
        </p>
      </div>

      {GROUPS.map((group) => {
        const items = POSITIONS.filter((p) => p.group === group.id);
        return (
          <section key={group.id} className="mb-10">
            <h2 className="font-display text-xl text-ink mb-1">{group.label}</h2>
            <div className="h-px bg-mist mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-2"
                >
                  <h3 className="font-display text-lg text-ink leading-tight">
                    {p.name}
                  </h3>
                  <div className="bg-fog rounded-lg py-2">{p.icon}</div>
                  <p className="text-sm text-slate">{p.meaning}</p>
                  <p className="text-xs text-slate italic leading-relaxed border-t border-mist pt-2 mt-auto">
                    "{p.sentence}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

/* ═══════════════════════════ QUIZ ═══════════════════════════ */

// Only distinct poses go in the quiz — synonyms (quiz:false) share a
// figure with another entry, so asking about them would be ambiguous.
const QUIZ_POOL = POSITIONS.filter((p) => p.quiz !== false);

// Lenient self-check: strip filler words, then treat it as a match if the
// answer and the typed guess contain one another. This forgives "-ing"
// endings ("kneeling" ≈ "kneel"), articles, and the "stand with your …"
// prefix, while still catching a genuinely wrong word.
const FILLER = new Set([
  "the", "a", "an", "your", "my", "his", "her", "their",
  "with", "of", "to", "down",
]);
const words = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !FILLER.has(w));
const norm = (s) => words(s).join(" ").trim();

// A word "covers" another if they're equal or one is a prefix of the other
// (so "bending" covers "bend", "sit" covers "sitting").
const covers = (x, y) =>
  x === y ||
  (x.length >= 3 && y.startsWith(x)) ||
  (y.length >= 3 && x.startsWith(y));
const allCovered = (need, have) =>
  need.length > 0 && need.every((n) => have.some((h) => covers(n, h)));

const isMatch = (guess, item) => {
  const g = norm(guess);
  if (!g) return false;
  const gw = words(guess);
  const accepted = [item.name, ...(item.accepts || [])];
  return accepted.some((a) => {
    const n = norm(a);
    if (n === g || n.includes(g) || g.includes(n)) return true;
    const aw = words(a);
    return allCovered(aw, gw) || allCovered(gw, aw);
  });
};

function QuizPanel() {
  const total = QUIZ_POOL.length;
  // Seed a stable first render so server and client agree, then reshuffle
  // on mount (client-only) to avoid a hydration mismatch.
  const [order, setOrder] = useState(() => QUIZ_POOL);
  const [idx, setIdx] = useState(0);
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const restart = () => {
    setOrder(shuffle(QUIZ_POOL));
    setIdx(0);
    setGuess("");
    setRevealed(false);
    setScore(0);
    setDone(false);
  };

  useEffect(() => {
    restart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = order[idx];
  const correct = revealed && isMatch(guess, current);

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    if (isMatch(guess, current)) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setGuess("");
      setRevealed(false);
    }
  };

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="max-w-md mx-auto text-center bg-white rounded-2xl border border-mist p-8">
        <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-3">
          Quiz complete
        </p>
        <p className="font-display text-5xl text-ink mb-1">
          {score}
          <span className="text-2xl text-slate">/{total}</span>
        </p>
        <p className="text-sm text-slate mb-6">
          {pct >= 80
            ? "Excellent — you know these poses cold."
            : pct >= 50
              ? "Good start — review the ones you missed and try again."
              : "Keep practising — flip back to Learn, then retry."}
        </p>
        <button
          type="button"
          onClick={restart}
          className="inline-flex items-center gap-2 text-sm font-semibold text-fog bg-ink rounded-lg px-5 py-2.5 hover:bg-ink/90 transition-colors"
        >
          ↻ Try again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <p className="text-slate leading-relaxed">
          Look at the figure and type the body position it shows, then reveal
          the answer to check yourself.
        </p>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate uppercase tracking-wider">
          Figure {idx + 1} of {total}
        </span>
        <span className="text-xs font-semibold text-sapphire-dark">
          Score: {score}
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-mist p-5">
        <div className="bg-fog rounded-xl py-4 mb-4 max-w-[220px] mx-auto">
          {current.icon}
        </div>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") (revealed ? next() : reveal());
          }}
          readOnly={revealed}
          placeholder="Type the position…"
          className={`w-full text-sm rounded-lg border px-3 py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 ${
            revealed
              ? correct
                ? "border-emerald2 bg-emerald2-light/40 focus:ring-emerald2/30"
                : "border-rose2 bg-rose2-light/40 focus:ring-rose2/30"
              : "border-mist bg-white focus:ring-sapphire/40"
          }`}
        />

        {!revealed ? (
          <button
            type="button"
            onClick={reveal}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-fog bg-ink rounded-lg px-4 py-2.5 hover:bg-ink/90 transition-colors"
          >
            Reveal answer
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-fog p-3">
              <p className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">
                {correct ? "✓ Correct — the answer is" : "Answer"}
              </p>
              <p className="text-sm font-semibold text-ink">{current.name}</p>
              <p className="text-sm text-slate mt-1">{current.meaning}</p>
              <p className="text-xs text-slate italic mt-2 border-t border-mist pt-2">
                "{current.sentence}"
              </p>
            </div>
            <button
              type="button"
              onClick={next}
              className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-fog bg-ink rounded-lg px-4 py-2.5 hover:bg-ink/90 transition-colors"
            >
              {idx + 1 >= total ? "Finish" : "Next figure →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════ SHELL ═══════════════════════════ */

export default function BodyPositionsTab() {
  const [active, setActive] = useState("learn");
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
      {active === "learn" ? <LearnPanel /> : <QuizPanel />}
    </>
  );
}
