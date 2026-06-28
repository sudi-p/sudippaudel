// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";
import {
  EMOTIONS,
  INTENSITY_STYLES,
  COLLOCATIONS,
  COLLOCATIONS_QUIZ,
  IDIOM_GROUPS,
} from "./data";

export default function VocabularyPage() {
  useEffect(() => {
    const TASK_COLORS = {
      all: { bg: "bg-ink", text: "text-fog" },
      0: { bg: "bg-sapphire-light", text: "text-sapphire-dark" },
      1: { bg: "bg-sapphire-light", text: "text-sapphire-dark" },
      2: { bg: "bg-emerald2-light", text: "text-emerald2-dark" },
      3: { bg: "bg-amber2-light", text: "text-amber2-dark" },
      4: { bg: "bg-rose2-light", text: "text-rose2-dark" },
      5: { bg: "bg-violet2-light", text: "text-violet2-dark" },
      6: { bg: "bg-sapphire-light", text: "text-sapphire-dark" },
      7: { bg: "bg-emerald2-light", text: "text-emerald2-dark" },
      8: { bg: "bg-amber2-light", text: "text-amber2-dark" },
      9: { bg: "bg-violet2-light", text: "text-violet2-dark" },
      10: { bg: "bg-violet2-light", text: "text-violet2-dark" },
    };

    const TASK_LABELS = {
      all: "All Tasks",
      0: "General",
      1: "Task 1",
      2: "Task 2",
      3: "Task 3",
      4: "Task 4",
      5: "Task 5",
      6: "Task 6",
      7: "Task 7",
      8: "Task 8",
      9: "Writing Task 1",
      10: "Writing Task 2",
    };

    let listFilters = { task: "all" };

    function renderWordList() {
      const content = document.getElementById("vocab-content");
      const emptyState = document.getElementById("empty-state");

      let filtered = window.VOCAB.filter((v) => {
        const taskMatch =
          listFilters.task === "all" || String(v.task) === listFilters.task;
        return taskMatch;
      });

      if (filtered.length === 0) {
        content.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
      }

      emptyState.classList.add("hidden");

      const grouped = {};
      filtered.forEach((vocab) => {
        if (!grouped[vocab.type]) grouped[vocab.type] = [];
        grouped[vocab.type].push(vocab);
      });

      let html = "";
      Object.keys(grouped)
        .sort()
        .forEach((typeKey) => {
          const words = grouped[typeKey];
          html += `
              <div>
                <h3 class="font-display text-lg text-ink mb-4">${typeKey}</h3>
                <div class="space-y-3">
                  ${words
                    .map(
                      (v) => `
                    <div class="bg-white rounded-xl border border-mist p-4 card-hover">
                      <div class="font-semibold text-ink mb-2">${v.word}</div>
                      <p class="text-sm text-slate mb-2">${v.meaning}</p>
                      <p class="text-xs text-slate italic">"${v.example}"</p>
                    </div>
                  `,
                    )
                    .join("")}
                </div>
              </div>
            `;
        });

      content.innerHTML = html;
    }

    // ─── Word List Fill-in-the-Blank Quiz ─────────────────────────────
    function initWordListQuiz() {
      const root = document.getElementById("wlq-root");
      if (!root || root.dataset.init) return;
      root.dataset.init = "1";

      root.innerHTML = `
    <style>
      .wlq-setup { background:#f9fafb; border:1px solid #e5e7eb; border-radius:16px; padding:2rem; text-align:center; }
      .wlq-setup-title { font-size:22px; font-weight:700; color:#111827; margin-bottom:8px; }
      .wlq-setup-sub { font-size:14px; color:#6b7280; margin-bottom:1.5rem; line-height:1.6; max-width:480px; margin-left:auto; margin-right:auto; }
      .wlq-filter-label { font-size:11px; font-weight:700; letter-spacing:.07em; color:#9ca3af; text-transform:uppercase; margin-bottom:8px; }
      .wlq-task-row { display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-bottom:1.25rem; }
      .wlq-task-btn { padding:6px 14px; border-radius:20px; border:2px solid #e5e7eb; background:#fff; color:#374151; font-size:13px; font-weight:600; cursor:pointer; transition:all .15s; }
      .wlq-task-btn.selected { border-color:#111827; background:#111827; color:#fff; }
      .wlq-count-label { font-size:11px; font-weight:700; letter-spacing:.07em; color:#9ca3af; text-transform:uppercase; margin-bottom:8px; }
      .wlq-count-row { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem; }
      .wlq-count-btn { padding:7px 18px; border-radius:20px; border:2px solid #e5e7eb; background:#fff; color:#374151; font-size:13px; font-weight:600; cursor:pointer; transition:all .15s; }
      .wlq-count-btn.selected { border-color:#111827; background:#111827; color:#fff; }
      .wlq-start-btn { background:#111827; color:#fff; border:none; border-radius:10px; padding:12px 36px; font-size:15px; font-weight:600; cursor:pointer; }
      .wlq-start-btn:hover { background:#1f2937; }
    
      .wlq-q-wrap { display:none; }
      .wlq-q-wrap.active { display:block; }
      .wlq-prog-bar { height:6px; background:#e5e7eb; border-radius:99px; margin-bottom:1.25rem; overflow:hidden; }
      .wlq-prog-fill { height:100%; background:#111827; border-radius:99px; transition:width .3s ease; }
      .wlq-meta { display:flex; justify-content:space-between; font-size:13px; color:#9ca3af; margin-bottom:1.25rem; }
      .wlq-score-badge { background:#f3f4f6; color:#111827; border-radius:20px; padding:3px 12px; font-weight:700; font-size:13px; }
    
      .wlq-sentence-box { background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:1.5rem 1.75rem; margin-bottom:1.25rem; }
      .wlq-sent-label { font-size:11px; font-weight:700; letter-spacing:.07em; color:#9ca3af; text-transform:uppercase; margin-bottom:6px; }
      .wlq-task-tag { font-size:11px; font-weight:600; color:#374151; background:#f3f4f6; border-radius:20px; padding:2px 10px; display:inline-block; margin-bottom:10px; }
      .wlq-type-tag { font-size:11px; font-weight:600; color:#6b7280; background:#f9fafb; border:1px solid #e5e7eb; border-radius:20px; padding:2px 10px; display:inline-block; margin-bottom:10px; margin-left:6px; }
      .wlq-sentence-text { font-size:17px; color:#111827; line-height:1.8; font-weight:500; }
      .wlq-blank { display:inline-block; min-width:130px; border-bottom:3px solid #111827; color:#111827; font-weight:700; text-align:center; font-size:17px; padding:0 4px; }
      .wlq-hint { font-size:12px; color:#9ca3af; margin-top:10px; font-style:italic; }
    
      .wlq-opts { display:grid; grid-template-columns:1fr 1fr; gap:.65rem; margin-bottom:1rem; }
      .wlq-opt { padding:10px 14px; border-radius:10px; border:2px solid #e5e7eb; background:#fff; color:#374151; font-size:13px; font-weight:600; cursor:pointer; transition:all .15s; text-align:left; line-height:1.5; }
      .wlq-opt:hover:not(:disabled) { border-color:#111827; background:#f9fafb; }
      .wlq-opt.wlq-correct { border-color:#16a34a !important; background:#f0fdf4 !important; color:#166534 !important; }
      .wlq-opt.wlq-wrong { border-color:#dc2626 !important; background:#fef2f2 !important; color:#991b1b !important; }
      .wlq-opt:disabled { cursor:default; }
    
      .wlq-feedback { border-radius:10px; padding:10px 16px; font-size:14px; font-weight:600; margin-bottom:1rem; display:none; }
      .wlq-feedback.show { display:block; }
      .wlq-feedback.ok { background:#f0fdf4; color:#166534; border:1px solid #86efac; }
      .wlq-feedback.bad { background:#fef2f2; color:#991b1b; border:1px solid #fca5a5; }
      .wlq-feedback-sub { font-size:12px; font-weight:400; margin-top:4px; color:#6b7280; }
    
      .wlq-next-btn { background:#111827; color:#fff; border:none; border-radius:10px; padding:11px 28px; font-size:14px; font-weight:600; cursor:pointer; display:none; }
      .wlq-next-btn.show { display:inline-block; }
      .wlq-next-btn:hover { background:#1f2937; }
    
      .wlq-results { display:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:16px; padding:2.5rem 2rem; text-align:center; }
      .wlq-results.active { display:block; }
      .wlq-res-emoji { font-size:3rem; margin-bottom:.75rem; }
      .wlq-res-title { font-size:22px; font-weight:700; color:#111827; margin-bottom:6px; }
      .wlq-res-score { font-size:42px; font-weight:800; color:#111827; margin-bottom:6px; }
      .wlq-res-msg { font-size:15px; color:#6b7280; margin-bottom:1.5rem; }
      .wlq-restart-btn { background:#111827; color:#fff; border:none; border-radius:10px; padding:12px 32px; font-size:14px; font-weight:600; cursor:pointer; }
      .wlq-restart-btn:hover { background:#1f2937; }
    
      @media(max-width:600px){
        .wlq-opts { grid-template-columns:1fr; }
        .wlq-sentence-text,.wlq-blank { font-size:15px; }
        .wlq-task-row,.wlq-count-row { justify-content:flex-start; }
      }
    </style>
    
    <!-- Setup -->
    <div class="wlq-setup" id="wlq-setup">
      <div class="wlq-setup-title">✏️ Word List Fill-in-the-Blank Quiz</div>
      <div class="wlq-setup-sub">Each question shows a real CELPIP-style example sentence with the target word blanked out. Four options show meanings — pick the one that fits the context.</div>
    
    
    
      <div class="wlq-count-label">Number of questions</div>
      <div class="wlq-count-row" id="wlq-count-row">
        <button class="wlq-count-btn selected" data-n="10">10</button>
        <button class="wlq-count-btn" data-n="20">20</button>
        <button class="wlq-count-btn" data-n="30">30</button>
        <button class="wlq-count-btn" data-n="0">All</button>
      </div>
    
      <button class="wlq-start-btn" id="wlq-start-btn">Start Quiz →</button>
    </div>
    
    <!-- Question -->
    <div class="wlq-q-wrap" id="wlq-q-wrap">
      <div class="wlq-prog-bar"><div class="wlq-prog-fill" id="wlq-prog-fill" style="width:0%"></div></div>
      <div class="wlq-meta">
        <span id="wlq-q-num">Question 1 of 10</span>
        <span class="wlq-score-badge">Score: <span id="wlq-score">0</span></span>
      </div>
      <div class="wlq-sentence-box">
        <div class="wlq-sent-label">Complete the sentence — choose the meaning of the missing word</div>
        <div id="wlq-tags"></div>
        <div class="wlq-sentence-text" id="wlq-sentence"></div>
        <div class="wlq-hint" id="wlq-hint"></div>
      </div>
      <div class="wlq-opts" id="wlq-opts"></div>
      <div class="wlq-feedback" id="wlq-feedback">
        <div id="wlq-fb-main"></div>
        <div class="wlq-feedback-sub" id="wlq-fb-sub"></div>
      </div>
      <button class="wlq-next-btn" id="wlq-next-btn">Next →</button>
    </div>
    
    <!-- Results -->
    <div class="wlq-results" id="wlq-results">
      <div class="wlq-res-emoji" id="wlq-res-emoji">🎉</div>
      <div class="wlq-res-title">Quiz Complete!</div>
      <div class="wlq-res-score" id="wlq-res-score">0 / 0</div>
      <div class="wlq-res-msg" id="wlq-res-msg"></div>
      <button class="wlq-restart-btn" id="wlq-restart-btn">Try Again</button>
    </div>
    `;

      // ── state ──────────────────────────────────────────────────────────
      const st = { task: "all", count: 10, questions: [], idx: 0, score: 0 };

      // ── task filter buttons ────────────────────────────────────────────

      const allTasks = [
        "all",
        ...new Set(window.VOCAB.map((v) => String(v.task))),
      ].sort((a, b) => {
        if (a === "all") return -1;
        if (b === "all") return 1;
        return Number(a) - Number(b);
      });

      // ── count buttons ──────────────────────────────────────────────────
      root.querySelectorAll(".wlq-count-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          root
            .querySelectorAll(".wlq-count-btn")
            .forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          st.count = parseInt(btn.dataset.n);
        });
      });

      // ── build questions ────────────────────────────────────────────────
      function buildQuestions() {
        let pool =
          st.task === "all"
            ? [...window.VOCAB]
            : window.VOCAB.filter((v) => String(v.task) === st.task);

        if (pool.length === 0) return [];

        // shuffle
        pool = pool.sort(() => Math.random() - 0.5);
        const selected = st.count === 0 ? pool : pool.slice(0, st.count);

        return selected.map((item) => {
          // blank the word in the example sentence
          const raw = item.example || "";
          const wLow = item.word.toLowerCase();
          const rLow = raw.toLowerCase();
          const blank = "___________";
          let sentence;
          const i = rLow.indexOf(wLow);
          if (i !== -1) {
            sentence =
              raw.slice(0, i) + blank + raw.slice(i + item.word.length);
          } else {
            // try just the first word of a multi-word phrase
            const firstWord = wLow.split(" ")[0];
            const i2 = rLow.indexOf(firstWord);
            if (i2 !== -1) {
              sentence =
                raw.slice(0, i2) + blank + raw.slice(i2 + firstWord.length);
            } else {
              sentence = raw + " [" + blank + "]";
            }
          }

          // distractors: same type first (confusingly similar meanings), then random
          const sameType = pool.filter(
            (o) => o.word !== item.word && o.type === item.type,
          );
          const otherPool = pool.filter(
            (o) => o.word !== item.word && o.type !== item.type,
          );
          const distPool = [
            ...sameType.sort(() => Math.random() - 0.5),
            ...otherPool.sort(() => Math.random() - 0.5),
          ];
          const distractors = distPool.slice(0, 3);
          const options = [item, ...distractors].sort(
            () => Math.random() - 0.5,
          );

          return { item, sentence, options };
        });
      }

      // ── render question ────────────────────────────────────────────────
      function renderQ() {
        const q = st.questions[st.idx];
        const total = st.questions.length;

        root.querySelector("#wlq-prog-fill").style.width =
          ((st.idx + 1) / total) * 100 + "%";
        root.querySelector("#wlq-q-num").textContent =
          `Question ${st.idx + 1} of ${total}`;
        root.querySelector("#wlq-score").textContent = st.score;

        // tags
        const taskLabel =
          TASK_LABELS[String(q.item.task)] || `Task ${q.item.task}`;
        root.querySelector("#wlq-tags").innerHTML =
          `<span class="wlq-task-tag">${taskLabel}</span><span class="wlq-type-tag">${q.item.type || ""}</span>`;

        // sentence
        const sentHtml = q.sentence.replace(
          "___________",
          `<span class="wlq-blank">___________</span>`,
        );
        root.querySelector("#wlq-sentence").innerHTML = sentHtml;

        // options — show meanings as choices
        root.querySelector("#wlq-opts").innerHTML = q.options
          .map(
            (opt) =>
              `<button class="wlq-opt" data-word="${opt.word.replace(/"/g, "&quot;")}">
                  <div style="font-weight:700;margin-bottom:2px">${opt.word}</div>
                  </button>`,
          )
          .join("");

        // reset
        const fb = root.querySelector("#wlq-feedback");
        fb.className = "wlq-feedback";
        root.querySelector("#wlq-fb-main").textContent = "";
        root.querySelector("#wlq-fb-sub").textContent = "";
        root.querySelector("#wlq-next-btn").className = "wlq-next-btn";

        root.querySelectorAll(".wlq-opt").forEach((btn) => {
          btn.addEventListener("click", () => answerQ(btn, q));
        });
      }

      // ── answer ─────────────────────────────────────────────────────────
      function answerQ(btn, q) {
        const chosen = btn.dataset.word;
        const correct = q.item.word;
        const isRight = chosen === correct;
        if (isRight) st.score++;

        root.querySelectorAll(".wlq-opt").forEach((b) => {
          b.disabled = true;
          if (b.dataset.word === correct) b.classList.add("wlq-correct");
          else if (b === btn && !isRight) b.classList.add("wlq-wrong");
        });

        const fb = root.querySelector("#wlq-feedback");
        fb.className = "wlq-feedback show " + (isRight ? "ok" : "bad");
        root.querySelector("#wlq-fb-main").textContent = isRight
          ? `✓ Correct! The word is "${correct}".`
          : `✗ The word is "${correct}".`;
        root.querySelector("#wlq-fb-sub").textContent =
          `Meaning: ${q.item.meaning}`;

        root.querySelector("#wlq-score").textContent = st.score;
        root.querySelector("#wlq-next-btn").className = "wlq-next-btn show";
      }

      // ── next ───────────────────────────────────────────────────────────
      root.querySelector("#wlq-next-btn").addEventListener("click", () => {
        st.idx++;
        if (st.idx < st.questions.length) {
          renderQ();
        } else {
          showResults();
        }
      });

      // ── results ────────────────────────────────────────────────────────
      function showResults() {
        root.querySelector("#wlq-q-wrap").classList.remove("active");
        root.querySelector("#wlq-results").classList.add("active");
        const pct = Math.round((st.score / st.questions.length) * 100);
        root.querySelector("#wlq-res-score").textContent =
          `${st.score} / ${st.questions.length}`;
        let emoji = "💪",
          msg = "";
        if (pct === 100) {
          emoji = "🏆";
          msg = "Perfect! You're a vocabulary master!";
        } else if (pct >= 80) {
          emoji = "🌟";
          msg = "Excellent! Strong vocab range for CELPIP.";
        } else if (pct >= 60) {
          emoji = "📚";
          msg = "Good effort! Review the words you missed.";
        } else if (pct >= 40) {
          emoji = "🔄";
          msg = "Keep going — context-based practice really helps.";
        } else {
          emoji = "💪";
          msg = "Study the Word List tab and try again.";
        }
        root.querySelector("#wlq-res-emoji").textContent = emoji;
        root.querySelector("#wlq-res-msg").textContent = `${pct}% — ${msg}`;
      }

      // ── restart ────────────────────────────────────────────────────────
      root.querySelector("#wlq-restart-btn").addEventListener("click", () => {
        root.querySelector("#wlq-results").classList.remove("active");
        root.querySelector("#wlq-setup").style.display = "";
      });

      // ── start ──────────────────────────────────────────────────────────
      root.querySelector("#wlq-start-btn").addEventListener("click", () => {
        st.questions = buildQuestions();
        if (st.questions.length === 0) {
          alert(
            "No words found for the selected task. Try a different filter.",
          );
          return;
        }
        st.idx = 0;
        st.score = 0;
        root.querySelector("#wlq-setup").style.display = "none";
        root.querySelector("#wlq-results").classList.remove("active");
        root.querySelector("#wlq-q-wrap").classList.add("active");
        renderQ();
      });
    }

    function renderEmotions() {
      const content = document.getElementById("emotions-content");

      // Flatten all emotion words into one pool
      const ALL_EMOTION_WORDS = [];
      EMOTIONS.forEach((group) => {
        group.words.forEach((w) => {
          ALL_EMOTION_WORDS.push({
            ...w,
            emotion: group.emotion,
            emoji: group.emoji,
          });
        });
      });

      content.innerHTML = `
<style>
  /* ── Emotions tab bar ── */
  .em-tab-row { display: flex; gap: 0; border-bottom: 2px solid #f3f4f6; margin-bottom: 1.75rem; }
  .em-tab { padding: 10px 22px; font-size: 14px; font-weight: 500; color: #6b7280; cursor: pointer; border: none; background: none; border-bottom: 3px solid transparent; margin-bottom: -2px; transition: color 0.15s; }
  .em-tab.em-tab-active { color: #111827; border-bottom-color: #8b5cf6; font-weight: 600; }
  .em-tab:hover:not(.em-tab-active) { color: #374151; }
  .em-panel { display: none; }
  .em-panel.em-panel-active { display: block; }

  /* ── Quiz panel ── */
  .eq-setup { background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 16px; padding: 2rem; text-align: center; }
  .eq-setup-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 8px; }
  .eq-setup-sub { font-size: 14px; color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6; }
  .eq-count-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .eq-count-btn { padding: 8px 20px; border-radius: 20px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
  .eq-count-btn.selected { border-color: #8b5cf6; background: #f5f3ff; color: #5b21b6; }
  .eq-start-btn { background: #8b5cf6; color: #fff; border: none; border-radius: 10px; padding: 12px 36px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.15s; }
  .eq-start-btn:hover { background: #7c3aed; }

  .eq-question-wrap { display: none; }
  .eq-question-wrap.eq-active { display: block; }
  .eq-progress-bar { height: 6px; background: #e5e7eb; border-radius: 99px; margin-bottom: 1.25rem; overflow: hidden; }
  .eq-progress-fill { height: 100%; background: #8b5cf6; border-radius: 99px; transition: width 0.3s ease; }
  .eq-meta { display: flex; justify-content: space-between; font-size: 13px; color: #9ca3af; margin-bottom: 1.25rem; }
  .eq-score-badge { background: #f5f3ff; color: #5b21b6; border-radius: 20px; padding: 3px 12px; font-weight: 700; font-size: 13px; }

  .eq-sentence-box { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.5rem 1.75rem; margin-bottom: 1.25rem; }
  .eq-sentence-label { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; color: #9ca3af; text-transform: uppercase; margin-bottom: 8px; }
  .eq-meta-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
  .eq-emotion-tag { font-size: 11px; font-weight: 600; color: #8b5cf6; background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 20px; padding: 2px 10px; }
  .eq-intensity-tag { font-size: 11px; font-weight: 600; border-radius: 20px; padding: 2px 10px; }
  .eq-sentence-text { font-size: 17px; color: #111827; line-height: 1.7; font-weight: 500; }
  .eq-blank { display: inline-block; min-width: 140px; border-bottom: 3px solid #8b5cf6; color: #8b5cf6; font-weight: 700; text-align: center; font-size: 17px; padding: 0 6px; }

  .eq-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 1rem; }
  .eq-opt-btn { padding: 11px 14px; border-radius: 10px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: left; line-height: 1.4; }
  .eq-opt-btn:hover:not(:disabled) { border-color: #8b5cf6; background: #f5f3ff; color: #5b21b6; }
  .eq-opt-btn.eq-correct { border-color: #16a34a !important; background: #f0fdf4 !important; color: #166534 !important; }
  .eq-opt-btn.eq-wrong { border-color: #dc2626 !important; background: #fef2f2 !important; color: #991b1b !important; }
  .eq-opt-btn:disabled { cursor: default; }

  .eq-feedback { border-radius: 10px; padding: 10px 16px; font-size: 14px; font-weight: 600; margin-bottom: 1rem; display: none; }
  .eq-feedback.eq-show { display: block; }
  .eq-feedback.eq-correct-fb { background: #f0fdf4; color: #166534; border: 1px solid #86efac; }
  .eq-feedback.eq-wrong-fb { background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5; }
  .eq-feedback-tip { font-size: 12px; font-weight: 400; margin-top: 4px; color: #6b7280; }

  .eq-next-btn { background: #111827; color: #fff; border: none; border-radius: 10px; padding: 11px 30px; font-size: 14px; font-weight: 600; cursor: pointer; display: none; transition: background 0.15s; }
  .eq-next-btn.eq-show { display: inline-block; }
  .eq-next-btn:hover { background: #1f2937; }

  .eq-results { display: none; background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 16px; padding: 2.5rem 2rem; text-align: center; }
  .eq-results.eq-active { display: block; }
  .eq-results-emoji { font-size: 3rem; margin-bottom: 0.75rem; }
  .eq-results-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 6px; }
  .eq-results-score { font-size: 42px; font-weight: 800; color: #8b5cf6; margin-bottom: 6px; }
  .eq-results-msg { font-size: 15px; color: #6b7280; margin-bottom: 1.5rem; }
  .eq-restart-btn { background: #8b5cf6; color: #fff; border: none; border-radius: 10px; padding: 12px 32px; font-size: 14px; font-weight: 600; cursor: pointer; }
  .eq-restart-btn:hover { background: #7c3aed; }

  @media (max-width: 600px) {
    .eq-options-grid { grid-template-columns: 1fr; }
    .eq-sentence-text, .eq-blank { font-size: 15px; }
  }
</style>

<!-- ── Tab bar ── -->
<div class="em-tab-row">
  <button class="em-tab em-tab-active" onclick="emShowTab('em-ref')">📖 Reference</button>
  <button class="em-tab" onclick="emShowTab('em-quiz')">💬 Quiz (55 Questions)</button>
  <button class="em-tab" onclick="emShowTab('em-fill')">✏️ Fill in the Blanks</button>
</div>

<!-- ── REFERENCE PANEL ── -->
<div id="em-ref" class="em-panel em-panel-active">
  ${EMOTIONS.map(
    (group) => `
    <section style="margin-bottom:3rem">
      <h2 class="font-display text-3xl text-ink mb-1 flex items-center gap-3">
        <span>${group.emoji}</span>${group.emotion}
      </h2>
      <div class="w-12 h-0.5 bg-gold rounded-full mb-5"></div>
      <div class="grid gap-4 md:grid-cols-2">
        ${group.words
          .map(
            (w) => `
          <div class="bg-white rounded-xl border border-mist p-5 card-hover">
            <div class="flex items-center justify-between gap-3 mb-2">
              <span class="font-semibold text-lg text-ink">${w.word}</span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${INTENSITY_STYLES[w.intensity]}">${w.intensity}</span>
            </div>
            <p class="text-sm text-slate mb-3">${w.meaning}</p>
            <ul class="space-y-1.5">
              ${w.examples
                .map(
                  (ex) => `
                <li class="text-xs text-slate italic flex gap-2">
                  <span class="text-gold not-italic">›</span><span>"${ex}"</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        `,
          )
          .join("")}
      </div>
    </section>
  `,
  ).join("")}
</div>

<!-- ── QUIZ PANEL ── -->
<div id="em-quiz" class="em-panel">

  <!-- Setup screen -->
  <div class="eq-setup" id="eq-setup">
    <div class="eq-setup-title">💬 Emotion Vocabulary Quiz</div>
    <div class="eq-setup-sub">Each question shows a CELPIP-style sentence describing a feeling, with the emotion word blanked out. Choose the most precise word from 4 options — wrong answers are from the same emotion family or similar intensity level.</div>
    <div style="font-size:13px;color:#9ca3af;margin-bottom:1.25rem">How many questions?</div>
    <div class="eq-count-row">
      <button class="eq-count-btn selected" data-count="10" onclick="eqSelectCount(10)">10</button>
      <button class="eq-count-btn" data-count="20" onclick="eqSelectCount(20)">20</button>
      <button class="eq-count-btn" data-count="35" onclick="eqSelectCount(35)">35</button>
      <button class="eq-count-btn" data-count="55" onclick="eqSelectCount(55)">All 55</button>
    </div>
    <button class="eq-start-btn" onclick="eqStart()">Start Quiz →</button>
  </div>

  <!-- Question screen -->
  <div class="eq-question-wrap" id="eq-question-wrap">
    <div class="eq-progress-bar"><div class="eq-progress-fill" id="eq-progress-fill" style="width:0%"></div></div>
    <div class="eq-meta">
      <span id="eq-q-num">Question 1 of 10</span>
      <span class="eq-score-badge">Score: <span id="eq-score">0</span></span>
    </div>
    <div class="eq-sentence-box">
      <div class="eq-sentence-label">Choose the correct emotion word</div>
      <div class="eq-meta-row">
        <span class="eq-emotion-tag" id="eq-emotion-tag"></span>
        <span class="eq-intensity-tag" id="eq-intensity-tag"></span>
      </div>
      <div class="eq-sentence-text" id="eq-sentence"></div>
    </div>
    <div class="eq-options-grid" id="eq-options"></div>
    <div class="eq-feedback" id="eq-feedback">
      <div id="eq-feedback-main"></div>
      <div class="eq-feedback-tip" id="eq-feedback-tip"></div>
    </div>
    <button class="eq-next-btn" id="eq-next-btn" onclick="eqNext()">Next Question →</button>
  </div>

  <!-- Results screen -->
  <div class="eq-results" id="eq-results">
    <div class="eq-results-emoji" id="eq-results-emoji">🎉</div>
    <div class="eq-results-title">Quiz Complete!</div>
    <div class="eq-results-score" id="eq-results-score">0 / 0</div>
    <div class="eq-results-msg" id="eq-results-msg"></div>
    <button class="eq-restart-btn" onclick="eqRestart()">Try Again</button>
  </div>
</div>

<!-- ── FILL IN THE BLANKS PANEL ── -->
<div id="em-fill" class="em-panel">
  <style>
    .efb-emotion-block { margin-bottom: 3rem; }
    .efb-emotion-title {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #111827;
      line-height: 1;
      margin-bottom: 0.4rem;
      font-family: ui-sans-serif, system-ui, sans-serif;
    }
    .efb-emotion-emoji { font-size: 2.5rem; margin-right: 0.5rem; vertical-align: middle; }
    .efb-divider { width: 3rem; height: 4px; background: #8b5cf6; border-radius: 99px; margin-bottom: 1.75rem; }
    .efb-words-grid { display: flex; flex-direction: column; gap: 1rem; }
    .efb-word-row {
      display: flex;
      align-items: baseline;
      gap: 0.75rem;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 10px 14px;
      font-size: 15px;
      color: #374151;
      flex-wrap: wrap;
    }
    .efb-meaning { flex: 1; min-width: 180px; line-height: 1.6; }
    .efb-input {
      display: inline-block;
      min-width: 120px;
      font-size: 15px;
      font-weight: 600;
      color: #111827;
      border: none;
      border-bottom: 3px solid #8b5cf6;
      background: transparent;
      padding: 4px 6px;
      outline: none;
      text-align: center;
      transition: border-color 0.15s;
    }
    .efb-input:focus { border-bottom-color: #6d28d9; }
    .efb-input.efb-correct { border-bottom-color: #16a34a; color: #166534; background: #f0fdf4; border-radius: 6px 6px 0 0; }
    .efb-input.efb-wrong  { border-bottom-color: #dc2626; color: #991b1b; background: #fef2f2; border-radius: 6px 6px 0 0; }
    .efb-wrong-hint {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  width: 100%;
  padding-top: 6px;
  border-top: 1px dashed #fca5a5;
}
.efb-hint-tag {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 20px;
  white-space: nowrap;
}
.efb-hint-emotion {
  background: #f5f3ff;
  color: #5b21b6;
  border: 1px solid #ddd6fe;
}
.efb-hint-intensity {
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}
.efb-hint-meaning {
  font-size: 12.5px;
  color: #6b7280;
  font-style: italic;
  line-height: 1.5;
}
.efb-hint-na {
  color: #9ca3af;
}
    .efb-check-row { display: flex; gap: 10px; margin-top: 1.5rem; flex-wrap: wrap; }
    .efb-check-btn {
      background: #8b5cf6; color: #fff; border: none; border-radius: 10px;
      padding: 10px 28px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.15s;
    }
    .efb-check-btn:hover { background: #7c3aed; }
    .efb-reset-btn {
      background: #f3f4f6; color: #374151; border: none; border-radius: 10px;
      padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.15s;
    }
    .efb-reset-btn:hover { background: #e5e7eb; }
    .efb-result-msg { font-size: 13px; font-weight: 600; margin-top: 0.75rem; color: #6b7280; }
    @media (max-width: 600px) {
      .efb-emotion-title { font-size: 2.5rem; }
      .efb-input { min-width: 80px; font-size: 14px; }
    }
  </style>

  ${EMOTIONS.map(
    (group, gi) => `
    <div class="efb-emotion-block" id="efb-block-${gi}">
      <div class="efb-emotion-title">
        <span class="efb-emotion-emoji">${group.emoji}</span>${group.emotion}
      </div>
      <div class="efb-divider"></div>
      <div class="efb-words-grid">
        ${group.words
          .map(
            (w, wi) => `
          <div class="efb-word-row">
            <input
              class="efb-input"
              data-answer="${w.word.toLowerCase()}"
              data-gi="${gi}"
              data-wi="${wi}"
              placeholder="?"
              autocomplete="off"
              spellcheck="false"
            />
            <span class="efb-meaning">${w.meaning}</span>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="efb-check-row">
        <button class="efb-check-btn" onclick="efbCheck(${gi})">Check Answers</button>
        <button class="efb-reset-btn" onclick="efbReset(${gi})">Reset</button>
      </div>
      <div class="efb-result-msg" id="efb-msg-${gi}"></div>
    </div>
  `,
  ).join("")}
</div>
`;

      // ── Tab switcher ──────────────────────────────────────────────────────
      window.emShowTab = function (id) {
        document
          .querySelectorAll(".em-panel")
          .forEach((p) => p.classList.remove("em-panel-active"));
        document
          .querySelectorAll(".em-tab")
          .forEach((t) => t.classList.remove("em-tab-active"));
        document.getElementById(id).classList.add("em-panel-active");
        const idx = ["em-ref", "em-quiz", "em-fill"].indexOf(id);
        document
          .querySelectorAll(".em-tab")
          [idx].classList.add("em-tab-active");
      };

      // ── Quiz state ────────────────────────────────────────────────────────
      const eqState = {
        selectedCount: 10,
        questions: [],
        current: 0,
        score: 0,
      };

      window.eqSelectCount = function (n) {
        eqState.selectedCount = n;
        document.querySelectorAll(".eq-count-btn").forEach((b) => {
          b.classList.toggle("selected", parseInt(b.dataset.count) === n);
        });
      };

      // Intensity badge styles matching INTENSITY_STYLES
      const EQ_INTENSITY_STYLES = {
        mild: { bg: "#f0fdf4", color: "#166534", border: "#86efac" },
        moderate: { bg: "#fffbeb", color: "#92400e", border: "#fde68a" },
        strong: { bg: "#fef2f2", color: "#991b1b", border: "#fca5a5" },
      };

      function eqBuildQuestions(count) {
        const pool = [...ALL_EMOTION_WORDS]
          .sort(() => Math.random() - 0.5)
          .slice(0, 55);
        const selected = pool.slice(0, Math.min(count, pool.length));

        return selected.map((item) => {
          // Use one of the word's examples as the sentence, blank out the word
          const exampleRaw =
            item.examples[Math.floor(Math.random() * item.examples.length)] ||
            "";
          const wordLower = item.word.toLowerCase();
          const exLower = exampleRaw.toLowerCase();
          const blank = "___________";
          let sentence;

          const idx = exLower.indexOf(wordLower);
          if (idx !== -1) {
            sentence =
              exampleRaw.slice(0, idx) +
              blank +
              exampleRaw.slice(idx + item.word.length);
          } else {
            sentence = exampleRaw + " [" + blank + "]";
          }

          // Distractors: prioritise same emotion group (different intensity), then same intensity, then random
          const sameEmotion = pool.filter(
            (o) => o.word !== item.word && o.emotion === item.emotion,
          );
          const sameIntensity = pool.filter(
            (o) =>
              o.word !== item.word &&
              o.emotion !== item.emotion &&
              o.intensity === item.intensity,
          );
          const rest = pool.filter(
            (o) =>
              o.word !== item.word &&
              o.emotion !== item.emotion &&
              o.intensity !== item.intensity,
          );

          const distPool = [
            ...sameEmotion.sort(() => Math.random() - 0.5),
            ...sameIntensity.sort(() => Math.random() - 0.5),
            ...rest.sort(() => Math.random() - 0.5),
          ];
          const distractors = distPool.slice(0, 3);
          const options = [item, ...distractors].sort(
            () => Math.random() - 0.5,
          );

          return { item, sentence, options };
        });
      }

      window.eqStart = function () {
        eqState.questions = eqBuildQuestions(eqState.selectedCount);
        eqState.current = 0;
        eqState.score = 0;

        document.getElementById("eq-setup").style.display = "none";
        document.getElementById("eq-results").classList.remove("eq-active");
        document.getElementById("eq-question-wrap").classList.add("eq-active");

        eqRenderQuestion();
      };

      function eqRenderQuestion() {
        const q = eqState.questions[eqState.current];
        const total = eqState.questions.length;

        document.getElementById("eq-progress-fill").style.width =
          ((eqState.current + 1) / total) * 100 + "%";
        document.getElementById("eq-q-num").textContent =
          `Question ${eqState.current + 1} of ${total}`;
        document.getElementById("eq-score").textContent = eqState.score;

        // Emotion + intensity hint tags
        document.getElementById("eq-emotion-tag").textContent =
          `${q.item.emoji} ${q.item.emotion}`;
        const ist =
          EQ_INTENSITY_STYLES[q.item.intensity] || EQ_INTENSITY_STYLES.mild;
        const intensityEl = document.getElementById("eq-intensity-tag");
        intensityEl.textContent = q.item.intensity;
        intensityEl.style.background = ist.bg;
        intensityEl.style.color = ist.color;
        intensityEl.style.border = `1px solid ${ist.border}`;

        // Sentence with styled blank
        const sentenceHtml = q.sentence.replace(
          "___________",
          `<span class="eq-blank">___________</span>`,
        );
        document.getElementById("eq-sentence").innerHTML = sentenceHtml;

        // Options
        document.getElementById("eq-options").innerHTML = q.options
          .map(
            (opt) =>
              `<button class="eq-opt-btn" data-word="${opt.word.replace(/"/g, "&quot;")}" onclick="eqAnswer(this)">
            <div>${opt.word}</div>
            
          </button>`,
          )
          .join("");

        // Reset feedback
        const fb = document.getElementById("eq-feedback");
        fb.className = "eq-feedback";
        document.getElementById("eq-feedback-main").textContent = "";
        document.getElementById("eq-feedback-tip").textContent = "";
        document.getElementById("eq-next-btn").className = "eq-next-btn";
      }

      window.eqAnswer = function (btn) {
        const q = eqState.questions[eqState.current];
        const chosen = btn.dataset.word;
        const correct = q.item.word;
        const isRight = chosen === correct;

        if (isRight) eqState.score++;

        document.querySelectorAll(".eq-opt-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.word === correct) b.classList.add("eq-correct");
          else if (b === btn && !isRight) b.classList.add("eq-wrong");
        });

        const fb = document.getElementById("eq-feedback");
        fb.className =
          "eq-feedback eq-show " + (isRight ? "eq-correct-fb" : "eq-wrong-fb");
        document.getElementById("eq-feedback-main").textContent = isRight
          ? `✓ Correct! "${correct}"`
          : `✗ The answer is: "${correct}"`;
        document.getElementById("eq-feedback-tip").textContent =
          `Meaning: ${q.item.meaning}`;

        document.getElementById("eq-score").textContent = eqState.score;
        document.getElementById("eq-next-btn").className =
          "eq-next-btn eq-show";
      };

      window.eqNext = function () {
        eqState.current++;
        if (eqState.current < eqState.questions.length) {
          eqRenderQuestion();
        } else {
          eqShowResults();
        }
      };

      function eqShowResults() {
        document
          .getElementById("eq-question-wrap")
          .classList.remove("eq-active");
        const results = document.getElementById("eq-results");
        results.classList.add("eq-active");

        const pct = Math.round(
          (eqState.score / eqState.questions.length) * 100,
        );
        document.getElementById("eq-results-score").textContent =
          `${eqState.score} / ${eqState.questions.length}`;

        let emoji = "💪",
          msg = "";
        if (pct === 100) {
          emoji = "🏆";
          msg = "Perfect! Your emotional vocabulary is outstanding.";
        } else if (pct >= 80) {
          emoji = "🌟";
          msg = "Excellent! You can express nuanced feelings with precision.";
        } else if (pct >= 60) {
          emoji = "📚";
          msg = "Good effort! Review the mild/moderate/strong distinctions.";
        } else if (pct >= 40) {
          emoji = "🔄";
          msg = "Keep going — emotion nuance takes practice on CELPIP.";
        } else {
          emoji = "💪";
          msg = "Study the reference cards, focusing on intensity levels.";
        }

        document.getElementById("eq-results-emoji").textContent = emoji;
        document.getElementById("eq-results-msg").textContent =
          `${pct}% — ${msg}`;
      }

      window.eqRestart = function () {
        document.getElementById("eq-results").classList.remove("eq-active");
        document.getElementById("eq-setup").style.display = "";
      };

      // ── Fill-in-the-Blanks logic ──────────────────────────────────────────────
      window.efbCheck = function (gi) {
        const block = document.getElementById(`efb-block-${gi}`);
        const inputs = block.querySelectorAll(".efb-input");
        let correct = 0;

        inputs.forEach((inp) => {
          const userVal = inp.value.trim().toLowerCase();
          const answer = inp.dataset.answer;
          inp.classList.remove("efb-correct", "efb-wrong");

          // Remove any existing hint from a previous check
          const existingHint = inp
            .closest(".efb-word-row")
            .querySelector(".efb-wrong-hint");
          if (existingHint) existingHint.remove();

          if (userVal === answer) {
            inp.classList.add("efb-correct");
            correct++;
          } else {
            inp.classList.add("efb-wrong");

            // Look up what the user typed in ALL_EMOTION_WORDS
            let hintHTML = "";
            if (userVal) {
              const match = ALL_EMOTION_WORDS.find(
                (w) => w.word.toLowerCase() === userVal,
              );
              if (match) {
                hintHTML = `
            <div class="efb-wrong-hint">
              <span class="efb-hint-tag efb-hint-emotion">${match.emoji} ${match.emotion}</span>
              <span class="efb-hint-tag efb-hint-intensity">${match.intensity}</span>
              <span class="efb-hint-meaning">${match.meaning}</span>
            </div>`;
              } else {
                hintHTML = `
            <div class="efb-wrong-hint">
              <span class="efb-hint-meaning efb-hint-na">Meaning not available</span>
            </div>`;
              }
            }

            if (hintHTML) {
              inp
                .closest(".efb-word-row")
                .insertAdjacentHTML("beforeend", hintHTML);
            }
          }
        });

        const msg = document.getElementById(`efb-msg-${gi}`);
        msg.textContent = `${correct} / ${inputs.length} correct`;
        msg.style.color = correct === inputs.length ? "#16a34a" : "#dc2626";
      };

      window.efbReset = function (gi) {
        const block = document.getElementById(`efb-block-${gi}`);
        block.querySelectorAll(".efb-input").forEach((inp) => {
          inp.value = "";
          inp.classList.remove("efb-correct", "efb-wrong");
        });
        block.querySelectorAll(".efb-wrong-hint").forEach((el) => el.remove());
        const msg = document.getElementById(`efb-msg-${gi}`);
        msg.textContent = "";
      };
    }

    function renderCollocations() {
      const content = document.getElementById("collocations-content");

      // Flatten all collocations into one pool
      const ALL_COLLOCATIONS = [];
      COLLOCATIONS.forEach((group) => {
        group.items.forEach((item) => {
          ALL_COLLOCATIONS.push({ ...item, category: group.category });
        });
      });

      content.innerHTML = `
    <style>
      /* ── Collocation tab bar ── */
      .col-tab-row { display: flex; gap: 0; border-bottom: 2px solid #f3f4f6; margin-bottom: 1.75rem; }
      .col-tab { padding: 10px 22px; font-size: 14px; font-weight: 500; color: #6b7280; cursor: pointer; border: none; background: none; border-bottom: 3px solid transparent; margin-bottom: -2px; transition: color 0.15s; }
      .col-tab.col-tab-active { color: #111827; border-bottom-color: #d97706; font-weight: 600; }
      .col-tab:hover:not(.col-tab-active) { color: #374151; }
      .col-panel { display: none; }
      .col-panel.col-panel-active { display: block; }
    
      /* ── Quiz panel ── */
      .cq-setup { background: #fffbeb; border: 1px solid #fde68a; border-radius: 16px; padding: 2rem; text-align: center; }
      .cq-setup-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 8px; }
      .cq-setup-sub { font-size: 14px; color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6; }
      .cq-count-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
      .cq-count-btn { padding: 8px 20px; border-radius: 20px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
      .cq-count-btn.selected { border-color: #d97706; background: #fffbeb; color: #92400e; }
      .cq-start-btn { background: #d97706; color: #fff; border: none; border-radius: 10px; padding: 12px 36px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.15s; }
      .cq-start-btn:hover { background: #b45309; }
    
      .cq-question-wrap { display: none; }
      .cq-question-wrap.cq-active { display: block; }
      .cq-progress-bar { height: 6px; background: #e5e7eb; border-radius: 99px; margin-bottom: 1.25rem; overflow: hidden; }
      .cq-progress-fill { height: 100%; background: #d97706; border-radius: 99px; transition: width 0.3s ease; }
      .cq-meta { display: flex; justify-content: space-between; font-size: 13px; color: #9ca3af; margin-bottom: 1.25rem; }
      .cq-score-badge { background: #fffbeb; color: #92400e; border-radius: 20px; padding: 3px 12px; font-weight: 700; font-size: 13px; }
    
      .cq-sentence-box { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.5rem 1.75rem; margin-bottom: 1.25rem; }
      .cq-sentence-label { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; color: #9ca3af; text-transform: uppercase; margin-bottom: 10px; }
      .cq-category-tag { font-size: 11px; font-weight: 600; color: #d97706; background: #fffbeb; border: 1px solid #fde68a; border-radius: 20px; padding: 2px 10px; display: inline-block; margin-bottom: 10px; }
      .cq-sentence-text { font-size: 17px; color: #111827; line-height: 1.7; font-weight: 500; }
      .cq-blank { display: inline-block; min-width: 160px; border-bottom: 3px solid #d97706; color: #d97706; font-weight: 700; text-align: center; font-size: 17px; padding: 0 6px; }
    
      .cq-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 1rem; }
      .cq-opt-btn { padding: 11px 14px; border-radius: 10px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: left; line-height: 1.4; }
      .cq-opt-btn:hover:not(:disabled) { border-color: #d97706; background: #fffbeb; color: #92400e; }
      .cq-opt-btn.cq-correct { border-color: #16a34a !important; background: #f0fdf4 !important; color: #166534 !important; }
      .cq-opt-btn.cq-wrong { border-color: #dc2626 !important; background: #fef2f2 !important; color: #991b1b !important; }
      .cq-opt-btn:disabled { cursor: default; }
    
      .cq-feedback { border-radius: 10px; padding: 10px 16px; font-size: 14px; font-weight: 600; margin-bottom: 1rem; display: none; }
      .cq-feedback.cq-show { display: block; }
      .cq-feedback.cq-correct-fb { background: #f0fdf4; color: #166534; border: 1px solid #86efac; }
      .cq-feedback.cq-wrong-fb { background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5; }
      .cq-feedback-tip { font-size: 12px; font-weight: 400; margin-top: 4px; color: #6b7280; }
    
      .cq-next-btn { background: #111827; color: #fff; border: none; border-radius: 10px; padding: 11px 30px; font-size: 14px; font-weight: 600; cursor: pointer; display: none; transition: background 0.15s; }
      .cq-next-btn.cq-show { display: inline-block; }
      .cq-next-btn:hover { background: #1f2937; }
    
      .cq-results { display: none; background: #fffbeb; border: 1px solid #fde68a; border-radius: 16px; padding: 2.5rem 2rem; text-align: center; }
      .cq-results.cq-active { display: block; }
      .cq-results-emoji { font-size: 3rem; margin-bottom: 0.75rem; }
      .cq-results-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 6px; }
      .cq-results-score { font-size: 42px; font-weight: 800; color: #d97706; margin-bottom: 6px; }
      .cq-results-msg { font-size: 15px; color: #6b7280; margin-bottom: 1.5rem; }
      .cq-restart-btn { background: #d97706; color: #fff; border: none; border-radius: 10px; padding: 12px 32px; font-size: 14px; font-weight: 600; cursor: pointer; }
      .cq-restart-btn:hover { background: #b45309; }
    
      @media (max-width: 600px) {
        .cq-options-grid { grid-template-columns: 1fr; }
        .cq-sentence-text, .cq-blank { font-size: 15px; }
      }
    </style>
    
    <!-- ── Tab bar ── -->
    <div class="col-tab-row">
      <button class="col-tab col-tab-active" onclick="colShowTab('col-ref')">📖 Reference</button>
      <button class="col-tab" onclick="colShowTab('col-quiz')">✍️ Quiz (55 Questions)</button>
    </div>
    
    <!-- ── REFERENCE PANEL ── -->
    <div id="col-ref" class="col-panel col-panel-active">
      ${COLLOCATIONS.map(
        (group) => `
        <section style="margin-bottom:2.5rem">
          <h2 class="font-display text-3xl text-ink mb-1 flex items-center gap-3">
            <span>${group.emoji}</span>${group.category}
          </h2>
          <div class="w-12 h-0.5 bg-gold rounded-full mb-5"></div>
          <div class="grid gap-4 md:grid-cols-2">
            ${group.items
              .map(
                (item) => `
              <div class="bg-white rounded-xl border border-mist p-5 card-hover">
                <div class="font-semibold text-lg text-ink mb-2">${item.collocation}</div>
                <p class="text-xs text-slate italic flex gap-2">
                  <span class="text-gold not-italic">›</span>
                  <span>"${item.example}"</span>
                </p>
              </div>
            `,
              )
              .join("")}
          </div>
        </section>
      `,
      ).join("")}
    </div>
    
    <!-- ── QUIZ PANEL ── -->
    <div id="col-quiz" class="col-panel">
    
      <!-- Setup screen -->
      <div class="cq-setup" id="cq-setup">
        <div class="cq-setup-title">✍️ Collocation Fill-in-the-Blank Quiz</div>
        <div class="cq-setup-sub">Each question shows a real CELPIP-style sentence with a missing collocation. Pick the correct word combination from 4 options — wrong answers use plausible but incorrect alternatives.</div>
        <div style="font-size:13px;color:#9ca3af;margin-bottom:1.25rem">How many questions?</div>
        <div class="cq-count-row">
          <button class="cq-count-btn selected" data-count="10" onclick="cqSelectCount(10)">10</button>
          <button class="cq-count-btn" data-count="20" onclick="cqSelectCount(20)">20</button>
          <button class="cq-count-btn" data-count="35" onclick="cqSelectCount(35)">35</button>
          <button class="cq-count-btn" data-count="55" onclick="cqSelectCount(55)">All 55</button>
        </div>
        <button class="cq-start-btn" onclick="cqStart()">Start Quiz →</button>
      </div>
    
      <!-- Question screen -->
      <div class="cq-question-wrap" id="cq-question-wrap">
        <div class="cq-progress-bar"><div class="cq-progress-fill" id="cq-progress-fill" style="width:0%"></div></div>
        <div class="cq-meta">
          <span id="cq-q-num">Question 1 of 10</span>
          <span class="cq-score-badge">Score: <span id="cq-score">0</span></span>
        </div>
        <div class="cq-sentence-box">
          <div class="cq-sentence-label">Complete the sentence</div>
          <div id="cq-category-tag" class="cq-category-tag"></div>
          <div class="cq-sentence-text" id="cq-sentence"></div>
        </div>
        <div class="cq-options-grid" id="cq-options"></div>
        <div class="cq-feedback" id="cq-feedback">
          <div id="cq-feedback-main"></div>
          <div class="cq-feedback-tip" id="cq-feedback-tip"></div>
        </div>
        <button class="cq-next-btn" id="cq-next-btn" onclick="cqNext()">Next Question →</button>
      </div>
    
      <!-- Results screen -->
      <div class="cq-results" id="cq-results">
        <div class="cq-results-emoji" id="cq-results-emoji">🎉</div>
        <div class="cq-results-title">Quiz Complete!</div>
        <div class="cq-results-score" id="cq-results-score">0 / 0</div>
        <div class="cq-results-msg" id="cq-results-msg"></div>
        <button class="cq-restart-btn" onclick="cqRestart()">Try Again</button>
      </div>
    </div>
    `;

      // ── Tab switcher ──────────────────────────────────────────────────────
      window.colShowTab = function (id) {
        document
          .querySelectorAll(".col-panel")
          .forEach((p) => p.classList.remove("col-panel-active"));
        document
          .querySelectorAll(".col-tab")
          .forEach((t) => t.classList.remove("col-tab-active"));
        document.getElementById(id).classList.add("col-panel-active");
        const idx = ["col-ref", "col-quiz"].indexOf(id);
        document
          .querySelectorAll(".col-tab")
          [idx].classList.add("col-tab-active");
      };

      // ── Quiz state ────────────────────────────────────────────────────────
      const cqState = {
        selectedCount: 10,
        questions: [],
        current: 0,
        score: 0,
      };

      window.cqSelectCount = function (n) {
        cqState.selectedCount = n;
        document.querySelectorAll(".cq-count-btn").forEach((b) => {
          b.classList.toggle("selected", parseInt(b.dataset.count) === n);
        });
      };

      function cqBuildQuestions(count) {
        const pool = [...ALL_COLLOCATIONS]
          .sort(() => Math.random() - 0.5)
          .slice(0, 55);
        const selected = pool.slice(0, Math.min(count, pool.length));

        return selected.map((item) => {
          // Use the pre-written question with blank, fall back to example if missing
          const sentence = item.question || item.example + " [___________]";

          // Pick 3 distractors from the same category first, then fill from pool
          const sameCategory = pool.filter(
            (o) =>
              o.collocation !== item.collocation &&
              o.category === item.category,
          );
          const otherPool = pool.filter(
            (o) =>
              o.collocation !== item.collocation &&
              o.category !== item.category,
          );
          const distPool = [
            ...sameCategory.sort(() => Math.random() - 0.5),
            ...otherPool.sort(() => Math.random() - 0.5),
          ];
          const distractors = distPool.slice(0, 3);
          const options = [item, ...distractors].sort(
            () => Math.random() - 0.5,
          );

          return { item, sentence, options };
        });
      }

      window.cqStart = function () {
        cqState.questions = cqBuildQuestions(cqState.selectedCount);
        cqState.current = 0;
        cqState.score = 0;

        document.getElementById("cq-setup").style.display = "none";
        document.getElementById("cq-results").classList.remove("cq-active");
        document.getElementById("cq-question-wrap").classList.add("cq-active");

        cqRenderQuestion();
      };

      function cqRenderQuestion() {
        const q = cqState.questions[cqState.current];
        const total = cqState.questions.length;

        document.getElementById("cq-progress-fill").style.width =
          ((cqState.current + 1) / total) * 100 + "%";
        document.getElementById("cq-q-num").textContent =
          `Question ${cqState.current + 1} of ${total}`;
        document.getElementById("cq-score").textContent = cqState.score;
        document.getElementById("cq-category-tag").textContent =
          q.item.category;

        const sentenceHtml = q.sentence.replace(
          "___________",
          `<span class="cq-blank">___________</span>`,
        );
        document.getElementById("cq-sentence").innerHTML = sentenceHtml;

        document.getElementById("cq-options").innerHTML = q.options
          .map(
            (opt) =>
              `<button class="cq-opt-btn" data-col="${opt.collocation.replace(/"/g, "&quot;")}" onclick="cqAnswer(this)">${opt.collocation}</button>`,
          )
          .join("");

        const fb = document.getElementById("cq-feedback");
        fb.className = "cq-feedback";
        document.getElementById("cq-feedback-main").textContent = "";
        document.getElementById("cq-feedback-tip").textContent = "";
        document.getElementById("cq-next-btn").className = "cq-next-btn";
      }

      window.cqAnswer = function (btn) {
        const q = cqState.questions[cqState.current];
        const chosen = btn.dataset.col;
        const correct = q.item.collocation;
        const isRight = chosen === correct;

        if (isRight) cqState.score++;

        document.querySelectorAll(".cq-opt-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.col === correct) b.classList.add("cq-correct");
          else if (b === btn && !isRight) b.classList.add("cq-wrong");
        });

        // Fill the blank with the conjugated answer form
        const filledSentence = q.sentence.replace(
          "___________",
          `<span style="color:#16a34a;font-weight:700;border-bottom:3px solid #16a34a;padding:0 2px">${q.item.answer}</span>`,
        );
        document.getElementById("cq-sentence").innerHTML = filledSentence;

        const fb = document.getElementById("cq-feedback");
        fb.className =
          "cq-feedback cq-show " + (isRight ? "cq-correct-fb" : "cq-wrong-fb");
        document.getElementById("cq-feedback-main").textContent = isRight
          ? `✓ Correct! The collocation is "${correct}".`
          : `✗ The collocation is: "${correct}"`;
        document.getElementById("cq-feedback-tip").textContent =
          `The sentence uses: "${q.item.answer}"`;

        document.getElementById("cq-score").textContent = cqState.score;
        document.getElementById("cq-next-btn").className =
          "cq-next-btn cq-show";
      };

      window.cqNext = function () {
        cqState.current++;
        if (cqState.current < cqState.questions.length) {
          cqRenderQuestion();
        } else {
          cqShowResults();
        }
      };

      function cqShowResults() {
        document
          .getElementById("cq-question-wrap")
          .classList.remove("cq-active");
        const results = document.getElementById("cq-results");
        results.classList.add("cq-active");

        const pct = Math.round(
          (cqState.score / cqState.questions.length) * 100,
        );
        document.getElementById("cq-results-score").textContent =
          `${cqState.score} / ${cqState.questions.length}`;

        let emoji = "💪",
          msg = "";
        if (pct === 100) {
          emoji = "🏆";
          msg = "Perfect! You have mastered CELPIP collocations!";
        } else if (pct >= 80) {
          emoji = "🌟";
          msg = "Excellent! Your collocation range is strong — keep it up.";
        } else if (pct >= 60) {
          emoji = "📚";
          msg =
            "Good effort! Review the reference section for the ones you missed.";
        } else if (pct >= 40) {
          emoji = "🔄";
          msg = "Keep practising — collocations are key to sounding natural.";
        } else {
          emoji = "💪";
          msg = "Don't give up! Study the reference cards and try again.";
        }

        document.getElementById("cq-results-emoji").textContent = emoji;
        document.getElementById("cq-results-msg").textContent =
          `${pct}% — ${msg}`;
      }

      window.cqRestart = function () {
        document.getElementById("cq-results").classList.remove("cq-active");
        document.getElementById("cq-setup").style.display = "";
      };
    }
    function renderIdioms() {
      const content = document.getElementById("idioms-content");

      // Flatten all idioms from all groups into one array
      const ALL_IDIOMS = [];
      IDIOM_GROUPS.forEach((group) => {
        group.items.forEach((item) => {
          ALL_IDIOMS.push({
            ...item,
            groupBg: group.bg,
            groupColor: group.color,
            groupBorder: group.border,
          });
        });
      });

      content.innerHTML = `
    <style>
      /* ── Idiom tab bar ── */
      .idiom-tab-row { display: flex; gap: 0; border-bottom: 2px solid #f3f4f6; margin-bottom: 1.75rem; }
      .idiom-tab { padding: 10px 22px; font-size: 14px; font-weight: 500; color: #6b7280; cursor: pointer; border: none; background: none; border-bottom: 3px solid transparent; margin-bottom: -2px; transition: color 0.15s; }
      .idiom-tab.idiom-tab-active { color: #111827; border-bottom-color: #2563eb; font-weight: 600; }
      .idiom-tab:hover:not(.idiom-tab-active) { color: #374151; }
      .idiom-panel { display: none; }
      .idiom-panel.idiom-panel-active { display: block; }
    
      /* ── Reference panel ── */
      .idiom-section { margin-bottom: 2.5rem; }
      .idiom-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .idiom-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .idiom-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 0.75rem; }
      .idiom-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; display: flex; flex-direction: column; gap: 0.4rem; }
      .idiom-phrase { font-size: 14px; font-weight: 700; color: #111827; }
      .idiom-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; }
      .idiom-example { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 4px 9px; border: 1px solid #f3f4f6; margin-top: 2px; }
    
      /* ── Quiz panel ── */
      .iq-setup { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px; padding: 2rem; text-align: center; }
      .iq-setup-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 8px; }
      .iq-setup-sub { font-size: 14px; color: #6b7280; margin-bottom: 1.5rem; }
      .iq-count-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
      .iq-count-btn { padding: 8px 20px; border-radius: 20px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
      .iq-count-btn.selected { border-color: #2563eb; background: #eff6ff; color: #1e40af; }
      .iq-start-btn { background: #2563eb; color: #fff; border: none; border-radius: 10px; padding: 12px 36px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.15s; }
      .iq-start-btn:hover { background: #1d4ed8; }
    
      .iq-question-wrap { display: none; }
      .iq-question-wrap.iq-active { display: block; }
      .iq-progress-bar { height: 6px; background: #e5e7eb; border-radius: 99px; margin-bottom: 1.25rem; overflow: hidden; }
      .iq-progress-fill { height: 100%; background: #2563eb; border-radius: 99px; transition: width 0.3s ease; }
      .iq-meta { display: flex; justify-content: space-between; font-size: 13px; color: #9ca3af; margin-bottom: 1.25rem; }
      .iq-score-badge { background: #eff6ff; color: #1e40af; border-radius: 20px; padding: 3px 12px; font-weight: 700; font-size: 13px; }
    
      .iq-sentence-box { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.5rem 1.75rem; margin-bottom: 1.25rem; }
      .iq-sentence-label { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; color: #9ca3af; text-transform: uppercase; margin-bottom: 10px; }
      .iq-sentence-text { font-size: 17px; color: #111827; line-height: 1.7; font-weight: 500; }
      .iq-blank { display: inline-block; min-width: 140px; border-bottom: 3px solid #2563eb; color: #2563eb; font-weight: 700; text-align: center; font-size: 17px; padding: 0 6px; }
    
      .iq-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 1rem; }
      .iq-opt-btn { padding: 11px 14px; border-radius: 10px; border: 2px solid #e5e7eb; background: #fff; color: #374151; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: left; line-height: 1.4; }
      .iq-opt-btn:hover:not(:disabled) { border-color: #2563eb; background: #eff6ff; color: #1e40af; }
      .iq-opt-btn.iq-correct { border-color: #16a34a !important; background: #f0fdf4 !important; color: #166534 !important; }
      .iq-opt-btn.iq-wrong { border-color: #dc2626 !important; background: #fef2f2 !important; color: #991b1b !important; }
      .iq-opt-btn:disabled { cursor: default; }
    
      .iq-feedback { border-radius: 10px; padding: 10px 16px; font-size: 14px; font-weight: 600; margin-bottom: 1rem; display: none; }
      .iq-feedback.iq-show { display: block; }
      .iq-feedback.iq-correct-fb { background: #f0fdf4; color: #166534; border: 1px solid #86efac; }
      .iq-feedback.iq-wrong-fb { background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5; }
      .iq-feedback-meaning { font-size: 12px; font-weight: 400; margin-top: 4px; color: #6b7280; }
    
      .iq-next-btn { background: #111827; color: #fff; border: none; border-radius: 10px; padding: 11px 30px; font-size: 14px; font-weight: 600; cursor: pointer; display: none; transition: background 0.15s; }
      .iq-next-btn.iq-show { display: inline-block; }
      .iq-next-btn:hover { background: #1f2937; }
    
      .iq-results { display: none; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px; padding: 2.5rem 2rem; text-align: center; }
      .iq-results.iq-active { display: block; }
      .iq-results-emoji { font-size: 3rem; margin-bottom: 0.75rem; }
      .iq-results-title { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 6px; }
      .iq-results-score { font-size: 42px; font-weight: 800; color: #2563eb; margin-bottom: 6px; }
      .iq-results-msg { font-size: 15px; color: #6b7280; margin-bottom: 1.5rem; }
      .iq-restart-btn { background: #2563eb; color: #fff; border: none; border-radius: 10px; padding: 12px 32px; font-size: 14px; font-weight: 600; cursor: pointer; }
      .iq-restart-btn:hover { background: #1d4ed8; }
    
      @media (max-width: 600px) {
        .idiom-grid, .iq-options-grid { grid-template-columns: 1fr; }
        .iq-sentence-text, .iq-blank { font-size: 15px; }
      }
    </style>
    
    <!-- ── Tab bar ── -->
    <div class="idiom-tab-row">
      <button class="idiom-tab idiom-tab-active" onclick="idiomShowTab('idiom-ref')">📖 Reference</button>
      <button class="idiom-tab" onclick="idiomShowTab('idiom-quiz')">🧠 Quiz (55 Questions)</button>
    </div>
    
    <!-- ── REFERENCE PANEL ── -->
    <div id="idiom-ref" class="idiom-panel idiom-panel-active">
      ${IDIOM_GROUPS.map(
        (group) => `
        <div class="idiom-section">
          <div class="idiom-section-header">
            <span style="font-size:1.3rem">${group.emoji}</span>
            <span class="idiom-section-badge" style="background:${group.bg};color:${group.color}">${group.category}</span>
            <span style="font-size:12px;color:#9ca3af">${group.items.length} idioms</span>
          </div>
          <div class="idiom-grid">
            ${group.items
              .map(
                (item) => `
              <div class="idiom-card" style="border-color:${group.border}">
                <div class="idiom-phrase">${item.idiom}</div>
                <div class="idiom-meaning">${item.meaning}</div>
                <div class="idiom-example">"${item.example}"</div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
      ).join("")}
    </div>
    
    <!-- ── QUIZ PANEL ── -->
    <div id="idiom-quiz" class="idiom-panel">
    
      <!-- Setup screen -->
      <div class="iq-setup" id="iq-setup">
        <div class="iq-setup-title">🧠 Idiom Fill-in-the-Blank Quiz</div>
        <div class="iq-setup-sub">Each question shows a sentence with a missing idiom. Choose the correct one from 4 options — including similar-sounding or confusing alternatives.</div>
        <div style="font-size:13px;color:#9ca3af;margin-bottom:1.25rem">How many questions?</div>
        <div class="iq-count-row">
          <button class="iq-count-btn selected" data-count="10" onclick="iqSelectCount(10)">10</button>
          <button class="iq-count-btn" data-count="20" onclick="iqSelectCount(20)">20</button>
          <button class="iq-count-btn" data-count="35" onclick="iqSelectCount(35)">35</button>
          <button class="iq-count-btn" data-count="55" onclick="iqSelectCount(55)">All 55</button>
        </div>
        <button class="iq-start-btn" onclick="iqStart()">Start Quiz →</button>
      </div>
    
      <!-- Question screen -->
      <div class="iq-question-wrap" id="iq-question-wrap">
        <div class="iq-progress-bar"><div class="iq-progress-fill" id="iq-progress-fill" style="width:0%"></div></div>
        <div class="iq-meta">
          <span id="iq-q-num">Question 1 of 10</span>
          <span class="iq-score-badge">Score: <span id="iq-score">0</span></span>
        </div>
        <div class="iq-sentence-box">
          <div class="iq-sentence-label">Complete the sentence</div>
          <div class="iq-sentence-text" id="iq-sentence"></div>
        </div>
        <div class="iq-options-grid" id="iq-options"></div>
        <div class="iq-feedback" id="iq-feedback">
          <div id="iq-feedback-main"></div>
          <div class="iq-feedback-meaning" id="iq-feedback-meaning"></div>
        </div>
        <button class="iq-next-btn" id="iq-next-btn" onclick="iqNext()">Next Question →</button>
      </div>
    
      <!-- Results screen -->
      <div class="iq-results" id="iq-results">
        <div class="iq-results-emoji" id="iq-results-emoji">🎉</div>
        <div class="iq-results-title">Quiz Complete!</div>
        <div class="iq-results-score" id="iq-results-score">0 / 0</div>
        <div class="iq-results-msg" id="iq-results-msg"></div>
        <button class="iq-restart-btn" onclick="iqRestart()">Try Again</button>
      </div>
    </div>
    `;

      // ── Tab switcher ──────────────────────────────────────────────────────
      window.idiomShowTab = function (id) {
        document
          .querySelectorAll(".idiom-panel")
          .forEach((p) => p.classList.remove("idiom-panel-active"));
        document
          .querySelectorAll(".idiom-tab")
          .forEach((t) => t.classList.remove("idiom-tab-active"));
        document.getElementById(id).classList.add("idiom-panel-active");
        const idx = ["idiom-ref", "idiom-quiz"].indexOf(id);
        document
          .querySelectorAll(".idiom-tab")
          [idx].classList.add("idiom-tab-active");
      };

      // ── Quiz state ────────────────────────────────────────────────────────
      const iqState = {
        selectedCount: 10,
        questions: [],
        current: 0,
        score: 0,
      };

      window.iqSelectCount = function (n) {
        iqState.selectedCount = n;
        document.querySelectorAll(".iq-count-btn").forEach((b) => {
          b.classList.toggle("selected", parseInt(b.dataset.count) === n);
        });
      };

      // Build questions from ALL_IDIOMS
      function iqBuildQuestions(count) {
        const pool = [...ALL_IDIOMS]
          .sort(() => Math.random() - 0.5)
          .slice(0, 55);
        const selected = pool.slice(0, Math.min(count, pool.length));

        return selected.map((item) => {
          const blank = "___________";
          const sentenceRaw = item.example || "";
          const idiomLower = item.idiom.toLowerCase();
          const sentenceLower = sentenceRaw.toLowerCase();
          let sentence;
          const idx = sentenceLower.indexOf(idiomLower);
          if (idx !== -1) {
            sentence =
              sentenceRaw.slice(0, idx) +
              blank +
              sentenceRaw.slice(idx + item.idiom.length);
          } else {
            const firstWords = idiomLower.split(" ").slice(0, 2).join(" ");
            const idx2 = sentenceLower.indexOf(firstWords);
            if (idx2 !== -1) {
              sentence =
                sentenceRaw.slice(0, idx2) +
                blank +
                sentenceRaw.slice(idx2 + firstWords.length);
            } else {
              sentence = sentenceRaw + " [" + blank + "]";
            }
          }

          const others = pool.filter((o) => o.idiom !== item.idiom);
          const distractors = others
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
          const options = [item, ...distractors].sort(
            () => Math.random() - 0.5,
          );

          return { item, sentence, options };
        });
      }

      window.iqStart = function () {
        iqState.questions = iqBuildQuestions(iqState.selectedCount);
        iqState.current = 0;
        iqState.score = 0;

        document.getElementById("iq-setup").style.display = "none";
        document.getElementById("iq-results").classList.remove("iq-active");
        document.getElementById("iq-question-wrap").classList.add("iq-active");

        iqRenderQuestion();
      };

      function iqRenderQuestion() {
        const q = iqState.questions[iqState.current];
        const total = iqState.questions.length;

        document.getElementById("iq-progress-fill").style.width =
          ((iqState.current + 1) / total) * 100 + "%";
        document.getElementById("iq-q-num").textContent =
          `Question ${iqState.current + 1} of ${total}`;
        document.getElementById("iq-score").textContent = iqState.score;

        const sentenceHtml = q.sentence.replace(
          "___________",
          `<span class="iq-blank">___________</span>`,
        );
        document.getElementById("iq-sentence").innerHTML = sentenceHtml;

        document.getElementById("iq-options").innerHTML = q.options
          .map(
            (opt) =>
              `<button class="iq-opt-btn" data-idiom="${opt.idiom.replace(/"/g, "&quot;")}" onclick="iqAnswer(this)">${opt.idiom}</button>`,
          )
          .join("");

        const fb = document.getElementById("iq-feedback");
        fb.className = "iq-feedback";
        document.getElementById("iq-feedback-main").textContent = "";
        document.getElementById("iq-feedback-meaning").textContent = "";
        document.getElementById("iq-next-btn").className = "iq-next-btn";
      }

      window.iqAnswer = function (btn) {
        const q = iqState.questions[iqState.current];
        const chosen = btn.dataset.idiom;
        const correct = q.item.idiom;
        const isRight = chosen === correct;

        if (isRight) iqState.score++;

        document.querySelectorAll(".iq-opt-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.idiom === correct) b.classList.add("iq-correct");
          else if (b === btn && !isRight) b.classList.add("iq-wrong");
        });

        const fb = document.getElementById("iq-feedback");
        fb.className =
          "iq-feedback iq-show " + (isRight ? "iq-correct-fb" : "iq-wrong-fb");
        document.getElementById("iq-feedback-main").textContent = isRight
          ? `✓ Correct! "${correct}"`
          : `✗ The answer is: "${correct}"`;
        document.getElementById("iq-feedback-meaning").textContent =
          `Meaning: ${q.item.meaning}`;

        document.getElementById("iq-score").textContent = iqState.score;
        document.getElementById("iq-next-btn").className =
          "iq-next-btn iq-show";
      };

      window.iqNext = function () {
        iqState.current++;
        if (iqState.current < iqState.questions.length) {
          iqRenderQuestion();
        } else {
          iqShowResults();
        }
      };

      function iqShowResults() {
        document
          .getElementById("iq-question-wrap")
          .classList.remove("iq-active");
        const results = document.getElementById("iq-results");
        results.classList.add("iq-active");

        const pct = Math.round(
          (iqState.score / iqState.questions.length) * 100,
        );
        document.getElementById("iq-results-score").textContent =
          `${iqState.score} / ${iqState.questions.length}`;

        let emoji = "💪",
          msg = "";
        if (pct === 100) {
          emoji = "🏆";
          msg = "Perfect! You know every idiom. Outstanding!";
        } else if (pct >= 80) {
          emoji = "🌟";
          msg = "Excellent! You have a strong grasp of English idioms.";
        } else if (pct >= 60) {
          emoji = "📚";
          msg = "Good effort! Review the ones you missed and try again.";
        } else if (pct >= 40) {
          emoji = "🔄";
          msg = "Keep practising — idioms take time to memorise.";
        } else {
          emoji = "💪";
          msg = "Don't give up! Study the reference section and try again.";
        }

        document.getElementById("iq-results-emoji").textContent = emoji;
        document.getElementById("iq-results-msg").textContent =
          `${pct}% — ${msg}`;
      }

      window.iqRestart = function () {
        document.getElementById("iq-results").classList.remove("iq-active");
        document.getElementById("iq-setup").style.display = "";
      };
    }

    // ─── Event Listeners ────────────────────────────────────────────────
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        // init word-list fill-in-blank quiz lazily
        if (tab === "word-list") setTimeout(initWordListQuiz, 50);
        document.querySelectorAll(".tab-btn").forEach((b) => {
          b.classList.remove("bg-ink", "text-fog");
          b.classList.add("bg-fog", "text-slate");
        });
        document
          .querySelectorAll(".tab-content")
          .forEach((c) => c.classList.add("hidden"));
        btn.classList.remove("bg-fog", "text-slate");
        btn.classList.add("bg-ink", "text-fog");
        document.getElementById(tab).classList.remove("hidden");
      });
    });

    renderWordList();
    renderEmotions();
    renderCollocations();
    renderIdioms();
    setTimeout(initWordListQuiz, 50);
  }, []);

  return (
    <>
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
          Build Your English
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
          Vocabulary <span className="hero-line italic">Bank</span>
        </h1>
        <p className="text-lg text-slate max-w-xl leading-relaxed">
          Master words, emotions, collocations, and idioms for every CELPIP
          task.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Tab buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              className="tab-btn active px-4 py-2 text-sm font-medium rounded-lg bg-ink text-fog transition-all"
              data-tab="word-list"
            >
              Word List
            </button>
            <button
              className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
              data-tab="emotions"
            >
              Emotions
            </button>
            <button
              className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
              data-tab="collocations"
            >
              Collocations
            </button>
            <button
              className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
              data-tab="idioms"
            >
              Idioms
            </button>
          </div>
        </div>

        {/* Word List Tab */}
        <div id="word-list" className="tab-content">
          {/* ── inner tab bar ── */}
          <div
            id="wl-tab-bar"
            style={{
              display: "flex",
              gap: 0,
              borderBottom: "2px solid #f3f4f6",
              marginBottom: "1.75rem",
            }}
          >
            <button
              id="wl-tab-list"
              style={{
                padding: "10px 22px",
                fontSize: 14,
                fontWeight: 600,
                color: "#111827",
                cursor: "pointer",
                border: "none",
                background: "none",
                borderBottom: "3px solid #111827",
                marginBottom: -2,
              }}
              onClick={() => {
                document.getElementById("wl-panel-list").style.display =
                  "block";
                document.getElementById("wl-panel-quiz").style.display = "none";
                document.getElementById("wl-tab-list").style.borderBottomColor =
                  "#111827";
                document.getElementById("wl-tab-list").style.color = "#111827";
                document.getElementById("wl-tab-quiz").style.borderBottomColor =
                  "transparent";
                document.getElementById("wl-tab-quiz").style.color = "#6b7280";
              }}
            >
              📖 Word List
            </button>
            <button
              id="wl-tab-quiz"
              style={{
                padding: "10px 22px",
                fontSize: 14,
                fontWeight: 500,
                color: "#6b7280",
                cursor: "pointer",
                border: "none",
                background: "none",
                borderBottom: "3px solid transparent",
                marginBottom: -2,
              }}
              onClick={() => {
                document.getElementById("wl-panel-list").style.display = "none";
                document.getElementById("wl-panel-quiz").style.display =
                  "block";
                document.getElementById("wl-tab-quiz").style.borderBottomColor =
                  "#111827";
                document.getElementById("wl-tab-quiz").style.color = "#111827";
                document.getElementById("wl-tab-list").style.borderBottomColor =
                  "transparent";
                document.getElementById("wl-tab-list").style.color = "#6b7280";
              }}
            >
              ✏️ Fill-in-the-Blank Quiz
            </button>
          </div>

          {/* ── LIST PANEL ── */}
          <div id="wl-panel-list">
            <div className="mb-8">
              <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-3">
                Filter by task
              </p>
              <div id="task-filters" className="flex flex-wrap gap-2"></div>
            </div>
            <div id="vocab-content" className="space-y-8"></div>
            <div id="empty-state" className="hidden text-center py-16">
              <p className="text-lg text-slate">
                No words found for the selected filters.
              </p>
            </div>
          </div>

          {/* ── QUIZ PANEL ── */}
          <div id="wl-panel-quiz" style={{ display: "none" }}>
            <div id="wlq-root"></div>
          </div>
        </div>

        {/* Emotions Tab */}
        <div id="emotions" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Build a precise emotional vocabulary. Each emotion is shown from{" "}
              <span className="font-semibold text-emerald2-dark">mild</span> to{" "}
              <span className="font-semibold text-rose2-dark">strong</span>{" "}
              intensity.
            </p>
          </div>
          <div id="emotions-content" className="space-y-12"></div>
        </div>

        {/* Collocations Tab */}
        <div id="collocations" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Natural-sounding word combinations used by fluent English
              speakers.
            </p>
          </div>
          <div id="collocations-content" className="space-y-12"></div>
        </div>

        {/* Idioms Tab */}
        <div id="idioms" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Master common English{" "}
              <span className="font-semibold text-sapphire-dark">idioms</span> —
              fixed expressions whose meanings cannot be guessed from individual
              words.
            </p>
          </div>
          <div id="idioms-content"></div>
        </div>

        <footer className="border-t border-mist bg-fog py-8 px-6 text-center mt-16">
          <p className="text-xs text-slate">
            CELPIP Vocabulary Bank · Master essential words for test success.
          </p>
        </footer>
      </main>
    </>
  );
}
