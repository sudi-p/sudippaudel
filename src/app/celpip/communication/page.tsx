// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";
import { CATEGORIES } from "./data";

export default function InterPersonalPage() {
  useEffect(() => {
    // ─── Interpersonal Communication ────────────────────────────────────
    function renderInterPersonal() {
      const content = document.getElementById("interpersonal-content");
      if (!content) return;

      content.innerHTML = `
<style>
  .ipc-section { margin-bottom: 3rem; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; }
  .ipc-section-header { display: flex; align-items: center; gap: 12px; padding: 1rem 1.25rem; cursor: pointer; user-select: none; }
  .ipc-section-header:hover { filter: brightness(0.96); }
  .ipc-emoji { font-size: 1.6rem; }
  .ipc-title { font-size: 1rem; font-weight: 800; }
  .ipc-tasks { display: flex; gap: 6px; flex-wrap: wrap; margin-left: auto; }
  .ipc-task-badge { font-size: 10px; font-weight: 700; padding: 2px 9px; border-radius: 20px; background: rgba(0,0,0,.08); }
  .ipc-chevron { font-size: 1rem; margin-left: 6px; transition: transform .2s; }
  .ipc-chevron.open { transform: rotate(180deg); }
  .ipc-body { display: none; padding: 1.25rem; background: #fff; }
  .ipc-body.open { display: block; }

  .ipc-intro { font-size: 13.5px; color: #374151; line-height: 1.7; margin-bottom: 1.5rem; padding: 10px 14px; background: #f9fafb; border-left: 3px solid #e5e7eb; border-radius: 0 8px 8px 0; }

  /* sub-tabs */
  .ipc-tab-row { display: flex; gap: 0; border-bottom: 2px solid #f3f4f6; margin-bottom: 1.25rem; overflow-x: auto; }
  .ipc-tab { padding: 9px 16px; font-size: 12.5px; font-weight: 600; color: #6b7280; border: none; background: none; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap; }
  .ipc-tab.ipc-tab-active { color: #111827; border-bottom-color: #111827; }
  .ipc-panel { display: none; }
  .ipc-panel.ipc-panel-active { display: block; }

  /* vocab grid */
  .ipc-vocab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: .75rem; margin-bottom: .5rem; }
  .ipc-vocab-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: .9rem 1rem; }
  .ipc-vocab-word { font-size: 14px; font-weight: 700; color: #111827; margin-bottom: .3rem; }
  .ipc-vocab-ex { font-size: 12.5px; color: #374151; font-style: italic; margin-bottom: .45rem; line-height: 1.55; }
  .ipc-vocab-note { font-size: 11.5px; color: #6b7280; line-height: 1.5; background: #f9fafb; border-radius: 6px; padding: 3px 8px; }

  /* intensity */
  .ipc-intensity-list { display: flex; flex-direction: column; gap: .65rem; }
  .ipc-intensity-row { display: flex; align-items: flex-start; gap: 10px; padding: .8rem 1rem; border-radius: 10px; border: 1px solid #e5e7eb; }
  .ipc-intensity-badge { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; }
  .ipc-intensity-ex { font-size: 13px; color: #374151; font-style: italic; line-height: 1.6; }

  /* mistakes */
  .ipc-mistake { border: 1px solid #fca5a5; border-radius: 12px; overflow: hidden; margin-bottom: .85rem; }
  .ipc-mistake-head { background: #fef2f2; padding: 8px 14px; font-size: 13px; font-weight: 700; color: #991b1b; }
  .ipc-mistake-body { padding: 10px 14px; background: #fff; display: flex; flex-direction: column; gap: 5px; }
  .ipc-wrong { font-size: 13px; color: #dc2626; }
  .ipc-right  { font-size: 13px; color: #16a34a; }
  .ipc-why   { font-size: 12px; color: #6b7280; font-style: italic; line-height: 1.55; margin-top: 2px; }
  .ipc-wrong::before { content: "✗ "; font-weight: 700; }
  .ipc-right::before { content: "✓ "; font-weight: 700; }

  @media(max-width:600px) { .ipc-vocab-grid { grid-template-columns: 1fr; } .ipc-tasks { display: none; } }
</style>

${CATEGORIES.map(
  (cat) => `
  <div class="ipc-section" id="ipc-${cat.id}">
    <div class="ipc-section-header" style="background:${cat.bg}1a; border-bottom: 1px solid ${cat.border}80;"
         onclick="ipcToggle('${cat.id}')">
      <span class="ipc-emoji">${cat.emoji}</span>
      <span class="ipc-title" style="color:${cat.color}">${cat.title}</span>
      <div class="ipc-tasks">
        ${cat.celpipTasks.map((t) => `<span class="ipc-task-badge">${t}</span>`).join("")}
      </div>
      <span class="ipc-chevron" id="ipc-chev-${cat.id}">▼</span>
    </div>
    <div class="ipc-body" id="ipc-body-${cat.id}">
      <div class="ipc-intro">${cat.intro}</div>
      <div class="ipc-tab-row">
        <button class="ipc-tab ipc-tab-active" onclick="ipcTab('${cat.id}','vocab',this)">📚 Vocabulary</button>
        <button class="ipc-tab" onclick="ipcTab('${cat.id}','intensity',this)">📈 Intensity Levels</button>
        <button class="ipc-tab" onclick="ipcTab('${cat.id}','mistakes',this)">⚠️ Mistakes & Fixes</button>
      </div>

      <!-- vocab panel -->
      <div id="ipc-panel-vocab-${cat.id}" class="ipc-panel ipc-panel-active">
        <div class="ipc-vocab-grid">
          ${cat.vocab
            .map(
              (v) => `
            <div class="ipc-vocab-card" style="border-left:4px solid ${cat.color}">
              <div class="ipc-vocab-word">${v.word}</div>
              <div class="ipc-vocab-ex">"${v.example}"</div>
              <div class="ipc-vocab-note">💡 ${v.note}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      <!-- intensity panel -->
      <div id="ipc-panel-intensity-${cat.id}" class="ipc-panel">
        <div class="ipc-intensity-list">
          ${cat.intensityLevels
            .map(
              (lv) => `
            <div class="ipc-intensity-row" style="background:${lv.bg}; border-color:${cat.border}">
              <span class="ipc-intensity-badge" style="background:${lv.bg};color:${lv.color};border:1px solid ${lv.color}40">${lv.level}</span>
              <div class="ipc-intensity-ex">"${lv.example}"</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      <!-- mistakes panel -->
      <div id="ipc-panel-mistakes-${cat.id}" class="ipc-panel">
        ${cat.mistakes
          .map(
            (m) => `
          <div class="ipc-mistake">
            <div class="ipc-mistake-head">⚠️ ${m.title}</div>
            <div class="ipc-mistake-body">
              <div class="ipc-wrong">${m.wrong}</div>
              <div class="ipc-right">${m.right}</div>
              <div class="ipc-why">${m.why}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </div>
`,
).join("")}
      `;

      window.ipcToggle = function (id) {
        const body = document.getElementById("ipc-body-" + id);
        const chev = document.getElementById("ipc-chev-" + id);
        const open = body.classList.toggle("open");
        chev.classList.toggle("open", open);
      };

      window.ipcTab = function (catId, panel, btn) {
        ["vocab", "intensity", "mistakes"].forEach((p) => {
          const el = document.getElementById("ipc-panel-" + p + "-" + catId);
          if (el) el.classList.remove("ipc-panel-active");
        });
        const target = document.getElementById(
          "ipc-panel-" + panel + "-" + catId,
        );
        if (target) target.classList.add("ipc-panel-active");
        const body = document.getElementById("ipc-body-" + catId);
        if (body)
          body
            .querySelectorAll(".ipc-tab")
            .forEach((t) => t.classList.remove("ipc-tab-active"));
        btn.classList.add("ipc-tab-active");
      };
    }
    renderInterPersonal();
  }, []);

  return (
    <>
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
          Talking to People
        </h1>
        <p className="text-lg text-slate max-w-xl leading-relaxed">
          Master interpersonal communication for every CELPIP task.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div id="interpersonal-content"></div>
      </main>
    </>
  );
}
