"use client";

import { useEffect, useRef } from "react";
import "./tracker.css";
import { startTracker } from "./tracker";

/**
 * PR Timeline Tracker. Express Entry timelines taken from the
 * r/canadaexpressentry megathread and stored in ./data.json (see ./CLAUDE.md).
 * tracker.ts renders the stats and table into this static shell.
 */
export default function PrTrackerPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    document.title = "PR Timeline Tracker | Sudip Paudel";
    return startTracker(rootRef.current);
  }, []);

  return (
    <div className="prt-root" ref={rootRef}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lora:wght@600&display=swap"
      />
      <div className="prt-page">
        <header>
          <h1>PR Timeline Tracker</h1>
          <p className="muted" data-el="thread-info"></p>
        </header>

        <section className="stats" data-el="stats"></section>

        <section className="mine">
          <form className="unlock" data-el="unlock-form">
            <button type="button" data-el="unlock-toggle">🔒 My timeline</button>
            <span data-el="unlock-fields" hidden>
              <input data-el="unlock-pw" type="password" placeholder="Password" autoComplete="current-password" />
              <button type="submit">Unlock</button>
            </span>
            <span className="unlock-msg" data-el="unlock-msg"></span>
          </form>
          <div data-el="mine" hidden></div>
        </section>

        <section className="filters">
          <input data-el="search" type="search" placeholder="Search username, country, notes…" />
          <select data-el="f-stream">
            <option value="">All programs</option>
          </select>
          <select data-el="f-inout">
            <option value="">Inland + Outland</option>
            <option>Inland</option>
            <option>Outland</option>
          </select>
          <select data-el="f-stage">
            <option value="">Any stage</option>
          </select>
          <span className="muted" data-el="count"></span>
        </section>

        <div className="table-wrap">
          <table>
            <thead>
              <tr data-el="head"></tr>
            </thead>
            <tbody data-el="rows"></tbody>
          </table>
        </div>

        <p className="empty" data-el="empty" hidden></p>
      </div>
    </div>
  );
}
