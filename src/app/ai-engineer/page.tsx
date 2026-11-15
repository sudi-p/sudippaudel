"use client";

import { useEffect, useRef } from "react";
import "./notebook.css";
import { startNotebook } from "./notebook";

/**
 * AI Engineering Notebook — ported from "AI Engineering Notebook.html".
 * The notebook is hash-routed: notebook.ts renders each tab into #view and
 * #tabs, so React only owns the static shell and starts/stops the script.
 */
export default function AiEngineerPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const stop = startNotebook(rootRef.current);
    return stop;
  }, []);

  return (
    <div className="nb-root" ref={rootRef}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <div className="app">
        <aside className="rail">
          <div className="brand">
            <b>AI Engineering Notebook</b>
            <span>Concepts first, with Palmer.AI as the worked example.</span>
          </div>
          <ul className="tabs" id="tabs"></ul>
          <div className="rail-foot">
            <button className="theme-btn" id="themeBtn" type="button">
              Theme: system
            </button>
            <span>
              Palmer examples were read from the repo on 2 Nov 2026, last
              checked against main at commit da373de5.
            </span>
          </div>
        </aside>

        <main className="view" id="view"></main>
      </div>
    </div>
  );
}
