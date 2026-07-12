// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useMemo, useState } from "react";

// Fisher–Yates shuffle (returns a new array).
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Strip leading/trailing punctuation but keep internal marks (nine-to-five, John's).
function normalize(w) {
  return w
    .replace(/^[^A-Za-z0-9]+/, "")
    .replace(/[^A-Za-z0-9]+$/, "")
    .toLowerCase();
}

// Walk the response word-by-word and tag the spans that belong to a flagged
// mistake. Repeated errors (e.g. "everyday" twice) are all tagged. Returns the
// original whitespace-preserving tokens plus a map: startTokenIdx -> match.
function buildMatches(response, mistakes) {
  const rawTokens = response.split(/(\s+)/);
  const words = [];
  rawTokens.forEach((t, i) => {
    if (t.trim() !== "") words.push({ tokenIdx: i, norm: normalize(t) });
  });

  const mistakeWords = mistakes.map((m) => ({
    m,
    ws: m.text.split(/\s+/).map(normalize),
  }));

  const matchByToken = {};
  let total = 0;
  for (let wi = 0; wi < words.length; wi++) {
    let best = null;
    for (const { m, ws } of mistakeWords) {
      if (wi + ws.length > words.length) continue;
      let ok = true;
      for (let k = 0; k < ws.length; k++) {
        if (words[wi + k].norm !== ws[k]) {
          ok = false;
          break;
        }
      }
      if (ok && (best === null || ws.length > best.ws.length)) best = { m, ws };
    }
    if (best) {
      const startTok = words[wi].tokenIdx;
      const endTok = words[wi + best.ws.length - 1].tokenIdx;
      matchByToken[startTok] = { mistake: best.m, startTok, endTok };
      total += 1;
      wi += best.ws.length - 1;
    }
  }
  return { rawTokens, matchByToken, total };
}

function ResponseCard({ item, index }) {
  const { response, mistakes, topic } = item;
  const { rawTokens, matchByToken, total } = useMemo(
    () => buildMatches(response, mistakes),
    [response, mistakes],
  );

  // ids of clicked elements (persist their revealed colour) + which popover is open
  const [revealed, setRevealed] = useState(() => new Set());
  const [openId, setOpenId] = useState(null);

  const foundCount = useMemo(() => {
    let n = 0;
    revealed.forEach((id) => {
      if (id.startsWith("m")) n += 1;
    });
    return n;
  }, [revealed]);

  function click(id) {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setOpenId((cur) => (cur === id ? null : id));
  }

  function revealAll() {
    const all = new Set(revealed);
    Object.keys(matchByToken).forEach((tok) => all.add("m" + tok));
    setRevealed(all);
    setOpenId(null);
  }

  function reset() {
    setRevealed(new Set());
    setOpenId(null);
  }

  // Build the render output
  const nodes = [];
  let i = 0;
  while (i < rawTokens.length) {
    const tok = rawTokens[i];
    if (tok === "") {
      i += 1;
      continue;
    }
    if (tok.trim() === "") {
      nodes.push(<span key={"s" + i}>{tok}</span>);
      i += 1;
      continue;
    }
    const match = matchByToken[i];
    if (match) {
      // gather the full phrase (words + internal whitespace) start..end token
      const phrase = rawTokens.slice(match.startTok, match.endTok + 1).join("");
      const id = "m" + i;
      const isRevealed = revealed.has(id);
      const isOpen = openId === id;
      nodes.push(
        <span key={id} className="relative inline-block">
          <span
            onClick={() => click(id)}
            className={`cursor-pointer rounded px-0.5 transition-colors ${
              isRevealed
                ? "bg-rose2-light text-rose2-dark font-semibold underline decoration-rose2 decoration-2 underline-offset-2"
                : "hover:bg-fog"
            }`}
          >
            {phrase}
          </span>
          {isOpen && (
            <span className="absolute left-0 top-full z-20 mt-1 block w-64 rounded-xl border border-rose2/30 bg-white p-3 text-left shadow-lg">
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-rose2-dark">
                {match.mistake.type}
              </span>
              <span className="block text-sm text-ink">
                <span className="text-rose2-dark line-through">
                  {match.mistake.text}
                </span>{" "}
                <span className="text-slate">→</span>{" "}
                <span className="font-semibold text-emerald2-dark">
                  {match.mistake.correct}
                </span>
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-slate">
                {match.mistake.reason}
              </span>
            </span>
          )}
        </span>,
      );
      i = match.endTok + 1;
      continue;
    }

    // ordinary word — clicking confirms it's clean
    const id = "w" + i;
    const isRevealed = revealed.has(id);
    const isOpen = openId === id;
    nodes.push(
      <span key={id} className="relative inline-block">
        <span
          onClick={() => click(id)}
          className={`cursor-pointer rounded px-0.5 transition-colors ${
            isRevealed
              ? "bg-emerald2-light text-emerald2-dark"
              : "hover:bg-fog"
          }`}
        >
          {tok}
        </span>
        {isOpen && (
          <span className="absolute left-0 top-full z-20 mt-1 block whitespace-nowrap rounded-lg border border-emerald2/30 bg-white px-2.5 py-1 text-xs font-medium text-emerald2-dark shadow-lg">
            ✓ No mistake
          </span>
        )}
      </span>,
    );
    i += 1;
  }

  return (
    <div className="bg-white rounded-2xl border border-mist p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-xs font-semibold text-slate uppercase tracking-widest">
            Response {index + 1}
          </p>
          <p className="text-sm font-semibold text-ink">{topic}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              foundCount === total
                ? "bg-emerald2-light text-emerald2-dark"
                : "bg-fog text-slate"
            }`}
          >
            {foundCount} / {total} found
          </span>
          <button
            onClick={revealAll}
            className="text-xs font-medium px-3 py-1 rounded-full border border-mist text-ink hover:bg-fog transition-colors"
          >
            Reveal all
          </button>
          <button
            onClick={reset}
            className="text-xs font-medium px-3 py-1 rounded-full border border-mist text-slate hover:bg-fog transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
      <p className="text-base leading-loose text-ink">{nodes}</p>
    </div>
  );
}

export function MistakeFinder({ responses, active, blurb }) {
  // Render the original order on the server, then shuffle once on the client
  // (avoids an SSR/hydration mismatch).
  const [ordered, setOrdered] = useState(responses);
  useEffect(() => {
    setOrdered(shuffle(responses));
  }, [responses]);

  return (
    <div
      id="pane-mistakes"
      className={`pane ${active === "mistakes" ? "active" : ""} space-y-4`}
    >
      <div className="bg-fog rounded-2xl p-5">
        <p className="font-display text-2xl text-ink mb-1">Find My Mistakes</p>
        <p className="text-sm text-slate leading-relaxed">
          {blurb ??
            "Each response below is a real answer with several errors."}{" "}
          Read it like a rater and{" "}
          <strong>click any word you think is wrong</strong>. Correct words turn{" "}
          <span className="text-emerald2-dark font-semibold">green</span> ("No
          mistake"); real errors turn{" "}
          <span className="text-rose2-dark font-semibold">red</span> and reveal
          the correction and the reason. Repeated errors are all counted.
        </p>
      </div>
      {ordered.map((item, i) => (
        <ResponseCard key={item.topic} item={item} index={i} />
      ))}
    </div>
  );
}
