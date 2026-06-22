// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";
import {
  EMOTIONS,
  COLLOCATIONS,
  INTENSITY_STYLES,
  SOUND_WORDS,
  SENTENCES,
  TRAPS,
  QUIZ,
  QUIZ_QS,
  PARTS_OF_SPEECH,
  SENTENCE_TYPES,
  CLAUSE_TYPES,
  MODALS,
  PHRASAL,
  IRREGULAR,
  FILL_SENTENCES,
  TENSES,
  PREP_GROUPS,
  CONJ_GROUPS,
  GROUPS,
  IDIOM_GROUPS,
  COMPLEX_SENTENCES,
} from "./data";

export default function CelpipVocabPage() {
  useEffect(() => {
    document.title = "CELPIP Vocabulary Bank";

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
    let quizState = {
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: 0,
      quizVocab: [],
      selectedTask: "all",
      currentQuestion: null,
    };

    // ─── Word List Rendering ───────────────────────────────────────────
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

    // ─── Quiz Logic ────────────────────────────────────────────────────
    function getRandomOptions(correctEntry, count = 4) {
      const otherOptions = window.VOCAB.filter(
        (v) => v.word !== correctEntry.word,
      );
      const shuffled = otherOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, count - 1);
      return [correctEntry, ...shuffled].sort(() => Math.random() - 0.5);
    }

    function generateRandomQuestionType() {
      return Math.random() < 0.5 ? "word-to-meaning" : "meaning-to-word";
    }

    function renderQuestion() {
      const vocab = quizState.quizVocab[quizState.currentQuestionIndex];
      const questionType = generateRandomQuestionType();
      quizState.currentQuestion = { vocab, type: questionType };

      const questionText = document.getElementById("question-text");
      const optionsContainer = document.getElementById("options-container");

      if (questionType === "word-to-meaning") {
        questionText.textContent = `What does "${vocab.word}" mean?`;
        const options = getRandomOptions(vocab);
        quizState.currentQuestion.correctAnswer = vocab.word;
        optionsContainer.innerHTML = options
          .map(
            (opt) => `
              <button class="option-btn w-full px-4 py-3 rounded-lg border border-mist bg-white text-slate hover:bg-fog transition-colors text-left" data-answer="${opt.word}">
                ${opt.meaning}
              </button>
            `,
          )
          .join("");
      } else {
        questionText.textContent = `Which word means "${vocab.meaning}"?`;
        const options = getRandomOptions(vocab);
        quizState.currentQuestion.correctAnswer = vocab.word;
        optionsContainer.innerHTML = options
          .map(
            (opt) => `
              <button class="option-btn w-full px-4 py-3 rounded-lg border border-mist bg-white text-slate hover:bg-fog transition-colors text-left" data-answer="${opt.word}">
                ${opt.word}
              </button>
            `,
          )
          .join("");
      }

      document.getElementById("question-number").textContent =
        `Question ${quizState.currentQuestionIndex + 1} of ${quizState.totalQuestions}`;
      document.getElementById("score-display").textContent =
        `Score: ${quizState.score}`;

      const progressPercent =
        ((quizState.currentQuestionIndex + 1) / quizState.totalQuestions) * 100;
      document.getElementById("progress-fill").style.width =
        progressPercent + "%";

      document.querySelectorAll(".option-btn").forEach((btn) => {
        btn.addEventListener("click", handleAnswer);
      });
    }

    function handleAnswer(e) {
      const selectedAnswer = e.target.dataset.answer;
      const isCorrect =
        selectedAnswer === quizState.currentQuestion.correctAnswer;

      if (isCorrect) {
        quizState.score++;
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("incorrect");
        document.querySelectorAll(".option-btn").forEach((btn) => {
          if (btn.dataset.answer === quizState.currentQuestion.correctAnswer) {
            btn.classList.add("correct");
          }
        });
      }

      document
        .querySelectorAll(".option-btn")
        .forEach((btn) => (btn.disabled = true));

      const feedback = document.getElementById("feedback");
      feedback.textContent = isCorrect ? "✓ Correct!" : "✗ Incorrect";
      feedback.classList.remove("hidden", "bg-mist", "text-slate");
      feedback.classList.add(
        isCorrect
          ? "bg-emerald2-light text-emerald2-dark"
          : "bg-rose2-light text-rose2-dark",
      );

      document.getElementById("next-btn").classList.remove("hidden");
    }

    function goToNextQuestion() {
      quizState.currentQuestionIndex++;

      if (quizState.currentQuestionIndex < quizState.totalQuestions) {
        document.getElementById("feedback").classList.add("hidden");
        document.getElementById("next-btn").classList.add("hidden");
        renderQuestion();
      } else {
        showQuizResults();
      }
    }

    function showQuizResults() {
      document
        .getElementById("quiz-question-container")
        .classList.add("hidden");
      document.getElementById("quiz-results").classList.remove("hidden");

      const percentage = Math.round(
        (quizState.score / quizState.totalQuestions) * 100,
      );
      document.getElementById("final-score").textContent = quizState.score;
      document.getElementById("total-questions").textContent =
        quizState.totalQuestions;

      let message = "";
      if (percentage === 100) message = "Perfect! You're a vocab master! 🎉";
      else if (percentage >= 80)
        message = "Great job! Keep practicing to improve! 🌟";
      else if (percentage >= 60)
        message = "Good effort! Review the words you missed. 📚";
      else message = "Keep studying! You'll improve with practice. 💪";

      document.getElementById("result-message").textContent = message;
    }

    function startQuiz() {
      const selectedTask = quizState.selectedTask;
      quizState.quizVocab =
        selectedTask === "all"
          ? window.VOCAB
          : window.VOCAB.filter((v) => String(v.task) === selectedTask);

      if (quizState.quizVocab.length === 0) {
        alert("No words available for the selected task.");
        return;
      }

      quizState.currentQuestionIndex = 0;
      quizState.score = 0;
      quizState.totalQuestions = quizState.quizVocab.length;

      document.getElementById("quiz-setup").classList.add("hidden");
      document
        .getElementById("quiz-question-container")
        .classList.remove("hidden");
      document.getElementById("quiz-results").classList.add("hidden");

      renderQuestion();
    }

    function renderNounsPronouns() {
      const content = document.getElementById("nouns-pronouns-content");

      content.innerHTML = `
    <style>
      .np-section { margin-bottom: 2.5rem; }
      .np-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 0.6rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .np-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .np-intro { font-size: 13px; color: #6b7280; line-height: 1.6; margin-bottom: 1rem; padding: 10px 14px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #e5e7eb; }
      .np-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 0.75rem; }
      .np-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; }
      .np-card-word { font-size: 14px; font-weight: 700; color: #111827; margin-bottom: 0.35rem; }
      .np-card-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .np-card-examples { display: flex; flex-direction: column; gap: 3px; margin-bottom: 0.5rem; }
      .np-card-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 3px 8px; border: 1px solid #f3f4f6; }
      .np-card-tip { font-size: 11.5px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 4px 9px; line-height: 1.5; }
      .np-trap-card { background: #fff; border: 1px solid #fbcfe8; border-radius: 12px; padding: 0.9rem 1rem; margin-bottom: 0.75rem; }
      .np-trap-word { font-size: 13px; font-weight: 700; color: #be185d; margin-bottom: 0.35rem; }
      .np-trap-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .np-trap-exs { display: flex; flex-direction: column; gap: 3px; }
      .np-trap-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #fff5f7; border-radius: 6px; padding: 3px 8px; border: 1px solid #fce7f3; }
      @media (max-width: 600px) { .np-grid { grid-template-columns: 1fr; } }
    </style>

    ${GROUPS.map((group) => {
      const isTraps = group.category === "Common Traps";
      return `
        <div class="np-section">
          <div class="np-section-header">
            <span style="font-size:1.3rem">${group.emoji}</span>
            <span class="np-section-badge" style="background:${group.bg};color:${group.color}">${group.category}</span>
            ${!isTraps ? `<span style="font-size:12px;color:#9ca3af">${group.items.length} entries</span>` : ""}
          </div>
          ${group.intro ? `<div class="np-intro">${group.intro}</div>` : ""}
          ${
            isTraps
              ? group.items
                  .map(
                    (item) => `
                <div class="np-trap-card">
                  <div class="np-trap-word">${item.word}</div>
                  <div class="np-trap-meaning">${item.meaning}</div>
                  <div class="np-trap-exs">
                    ${item.examples.map((e) => `<div class="np-trap-ex">${e}</div>`).join("")}
                  </div>
                </div>
              `,
                  )
                  .join("")
              : `<div class="np-grid">
                ${group.items
                  .map(
                    (item) => `
                  <div class="np-card" style="border-color:${group.border}">
                    <div class="np-card-word">${item.word}</div>
                    <div class="np-card-meaning">${item.meaning}</div>
                    <div class="np-card-examples">
                      ${item.examples.map((e) => `<div class="np-card-ex">${e}</div>`).join("")}
                    </div>
                    ${item.tip ? `<div class="np-card-tip">💡 ${item.tip}</div>` : ""}
                  </div>
                `,
                  )
                  .join("")}
              </div>`
          }
        </div>
      `;
    }).join("")}
  `;
    }

    function renderCollocations() {
      const content = document.getElementById("collocations-content");
      content.innerHTML = COLLOCATIONS.map(
        (group) => `
    <section>
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
      ).join("");
    }

    function renderSentenceStructure() {
      const content = document.getElementById("sentence-structure-content");

      content.innerHTML = `
    <style>
      /* ── existing ss-* styles (keep all of them unchanged) ── */
      .ss-section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: #9ca3af; text-transform: uppercase; margin-bottom: 1.25rem; margin-top: 0.25rem; }
      .ss-divider { height: 1px; background: #f3f4f6; margin: 2.5rem 0; }
      .ss-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
      .ss-pos-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.1rem 1.25rem; }
      .ss-pos-header { display: flex; align-items: center; gap: 10px; margin-bottom: 0.6rem; }
      .ss-pos-badge { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.03em; }
      .ss-pos-emoji { font-size: 1.2rem; }
      .ss-pos-def { font-size: 13px; color: #374151; line-height: 1.55; margin-bottom: 0.65rem; }
      .ss-pos-tips { margin-bottom: 0.65rem; }
      .ss-pos-tip { font-size: 12px; color: #6b7280; display: flex; gap: 6px; line-height: 1.5; margin-bottom: 3px; }
      .ss-pos-tip::before { content: "›"; color: #d1d5db; flex-shrink: 0; }
      .ss-pos-examples { display: flex; flex-direction: column; gap: 4px; }
      .ss-pos-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 4px 9px; }
      .ss-pos-ex u { text-decoration-color: #9ca3af; }
      .ss-type-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.25rem; }
      .ss-type-header { display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem; }
      .ss-type-name { font-size: 15px; font-weight: 700; color: #111827; }
      .ss-type-formula { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; background: #f3f4f6; border-radius: 6px; padding: 3px 10px; color: #374151; margin-bottom: 0.65rem; font-family: monospace; }
      .ss-type-def { font-size: 13px; color: #374151; line-height: 1.55; margin-bottom: 0.75rem; }
      .ss-type-examples { display: flex; flex-direction: column; gap: 5px; margin-bottom: 0.75rem; }
      .ss-type-ex { font-size: 12px; color: #6b7280; font-style: italic; display: flex; gap: 7px; }
      .ss-type-ex::before { content: "›"; color: #d1d5db; flex-shrink: 0; font-style: normal; }
      .ss-tip-bar { font-size: 12px; color: #1e40af; background: #eff6ff; border-radius: 7px; padding: 6px 10px; border-left: 3px solid #93c5fd; }
      .ss-tip-bar strong { font-weight: 600; }
      .ss-clause-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.1rem 1.25rem; margin-bottom: 0.75rem; display: flex; gap: 14px; align-items: flex-start; }
      .ss-clause-badge { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; flex-shrink: 0; margin-top: 2px; }
      .ss-clause-body { flex: 1; }
      .ss-clause-name { font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 4px; }
      .ss-clause-def { font-size: 13px; color: #374151; line-height: 1.55; margin-bottom: 8px; }
      .ss-clause-exs { display: flex; flex-wrap: wrap; gap: 6px; }
      .ss-clause-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 3px 9px; border: 1px solid #f3f4f6; }
      .ss-clause-ex-block { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
      .ss-clause-ex-block:last-child { margin-bottom: 0; }
      .ss-clause-ex-explanation { font-size: 11.5px; color: #6b7280; line-height: 1.55; padding: 3px 10px 3px 14px; border-left: 2px solid #e5e7eb; margin-left: 4px; }
      .ss-clause-intro { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.1rem 1.25rem; margin-bottom: 1.25rem; }
      .ss-clause-intro-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.9rem; }
      .ss-clause-intro-item { display: flex; align-items: flex-start; gap: 10px; }
      .ss-clause-intro-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }
      .ss-clause-intro-heading { font-size: 12px; font-weight: 700; color: #111827; margin-bottom: 3px; }
      .ss-clause-intro-text { font-size: 12.5px; color: #6b7280; line-height: 1.55; }
      .ss-clause-intro-text strong { color: #374151; }
      .ss-anatomy-box { background: #f9fafb; border-radius: 14px; padding: 1.5rem; margin-bottom: 1rem; }
      .ss-anatomy-sentence { font-size: 22px; color: #111827; line-height: 2.4; letter-spacing: 0.01em; flex-wrap: wrap; display: flex; gap: 6px; align-items: baseline; margin-bottom: 1rem; }
      .ss-anatomy-word { padding: 2px 10px; border-radius: 6px; font-weight: 600; cursor: default; }
      .ss-anatomy-legend { display: flex; flex-wrap: wrap; gap: 10px; }
      .ss-anatomy-leg { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #6b7280; }
      .ss-anatomy-leg-dot { width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0; }
      @media (max-width: 600px) { .ss-grid { grid-template-columns: 1fr; } .ss-anatomy-sentence { font-size: 16px; } }

      /* ── inner tab styles ── */
      .ss-inner-tabs { display: flex; gap: 0; border-bottom: 1px solid #e5e7eb; margin-bottom: 1.75rem; }
      .ss-inner-tab { padding: 9px 18px; font-size: 13px; font-weight: 500; color: #6b7280; cursor: pointer; border: none; background: none; border-bottom: 2px solid transparent; transition: color 0.15s; }
      .ss-inner-tab.ss-tab-active { color: #111827; border-bottom-color: #111827; }
      .ss-inner-tab:hover:not(.ss-tab-active) { color: #111827; }
      .ss-inner-panel { display: none; }
      .ss-inner-panel.ss-panel-active { display: block; }

      /* ── complex sentences styles ── */
      .cs-intro-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.75rem; margin-bottom: 2rem; }
      .cs-intro-card { border-radius: 12px; padding: 1.1rem 1.25rem; border: 1px solid; }
      .cs-intro-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 6px; }
      .cs-intro-name { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 5px; }
      .cs-intro-formula { font-size: 12px; font-family: monospace; background: rgba(0,0,0,0.05); border-radius: 5px; padding: 3px 8px; display: inline-block; margin-bottom: 8px; color: #374151; }
      .cs-intro-desc { font-size: 12.5px; color: #6b7280; line-height: 1.6; }
      .cs-intro-connectors { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 5px; }
      .cs-connector-pill { font-size: 11px; background: rgba(0,0,0,0.06); border-radius: 4px; padding: 2px 7px; color: #374151; font-weight: 500; }

      .cs-group { margin-bottom: 2.5rem; }
      .cs-group-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.6rem; border-bottom: 2px solid #f3f4f6; }
      .cs-group-badge { font-size: 11px; font-weight: 700; padding: 3px 12px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .cs-group-count { font-size: 12px; color: #9ca3af; }

      .cs-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.25rem; margin-bottom: 0.85rem; }
      .cs-card:last-child { margin-bottom: 0; }
      .cs-card-scenario { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #9ca3af; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
      .cs-card-scenario span { font-size: 1rem; }
      .cs-steps { display: flex; flex-direction: column; gap: 10px; margin-bottom: 12px; }
      .cs-step { display: flex; gap: 12px; align-items: flex-start; }
      .cs-step-num { width: 22px; height: 22px; border-radius: 50%; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
      .cs-step-body { flex: 1; }
      .cs-step-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 3px; }
      .cs-step-sentence { font-size: 14px; color: #111827; font-weight: 500; line-height: 1.5; margin-bottom: 4px; }
      .cs-step-thought { font-size: 12px; color: #6b7280; line-height: 1.55; font-style: italic; }
      .cs-final-box { border-radius: 9px; padding: 10px 14px; margin-top: 4px; }
      .cs-final-label { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 5px; }
      .cs-final-sentence { font-size: 15px; font-weight: 600; color: #111827; line-height: 1.6; }
      .cs-final-connector { font-weight: 700; }
      .cs-tip { font-size: 12px; color: #1e40af; background: #eff6ff; border-radius: 7px; padding: 7px 11px; border-left: 3px solid #93c5fd; margin-top: 10px; line-height: 1.55; }
    </style>

    <!-- ── Inner tab bar ── -->
    <div class="ss-inner-tabs">
      <button class="ss-inner-tab ss-tab-active" onclick="ssShowTab('ss-info')">Information</button>
      <button class="ss-inner-tab" onclick="ssShowTab('ss-complex')">Complex Sentences</button>
    </div>

    <!-- ── INFORMATION PANEL (existing content) ── -->
    <div id="ss-info" class="ss-inner-panel ss-panel-active">

      <!-- Anatomy -->
      <div class="ss-anatomy-box" style="margin-bottom:2rem;">
        <div class="ss-section-title" style="margin-top:0">Anatomy of a Sentence</div>
        <div class="ss-anatomy-sentence">
          <span class="ss-anatomy-word" style="background:#dbeafe;color:#1e40af;">The students</span>
          <span class="ss-anatomy-word" style="background:#dcfce7;color:#166534;">have</span>
          <span class="ss-anatomy-word" style="background:#dcfce7;color:#166534;">submitted</span>
          <span class="ss-anatomy-word" style="background:#ede9fe;color:#5b21b6;">their</span>
          <span class="ss-anatomy-word" style="background:#fef3c7;color:#92400e;">final</span>
          <span class="ss-anatomy-word" style="background:#f9fafb;color:#374151;border:1px solid #e5e7eb;">assignments</span>
          <span class="ss-anatomy-word" style="background:#fce7f3;color:#be185d;">before</span>
          <span class="ss-anatomy-word" style="background:#f9fafb;color:#374151;border:1px solid #e5e7eb;">the deadline.</span>
        </div>
        <div class="ss-anatomy-legend">
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#dbeafe;border:1px solid #bfdbfe"></div>Subject</div>
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#dcfce7;border:1px solid #86efac"></div>Verb</div>
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#ede9fe;border:1px solid #c4b5fd"></div>Determiner</div>
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#fef3c7;border:1px solid #fde68a"></div>Adjective</div>
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#f9fafb;border:1px solid #e5e7eb"></div>Noun</div>
          <div class="ss-anatomy-leg"><div class="ss-anatomy-leg-dot" style="background:#fce7f3;border:1px solid #fbcfe8"></div>Preposition</div>
        </div>
      </div>

      <!-- Parts of Speech -->
      <div class="ss-section-title">Parts of Speech</div>
      <div class="ss-grid" style="margin-bottom:0">
        ${PARTS_OF_SPEECH.map(
          (p) => `
          <div class="ss-pos-card">
            <div class="ss-pos-header">
              <span class="ss-pos-emoji">${p.emoji}</span>
              <span class="ss-pos-badge" style="background:${p.bg};color:${p.color}">${p.tag}</span>
            </div>
            <div class="ss-pos-def">${p.definition}</div>
            <div class="ss-pos-tips">${p.tips.map((t) => `<div class="ss-pos-tip">${t}</div>`).join("")}</div>
            <div class="ss-pos-examples">${p.examples.map((e) => `<div class="ss-pos-ex">${e}</div>`).join("")}</div>
          </div>
        `,
        ).join("")}
      </div>

      <div class="ss-divider"></div>

      <!-- Sentence Types -->
      <div class="ss-section-title">Sentence Types — By Structure & Purpose</div>
      <div class="ss-grid">
        ${SENTENCE_TYPES.map(
          (s) => `
          <div class="ss-type-card">
            <div class="ss-type-header">
              <span style="font-size:1.3rem">${s.emoji}</span>
              <span class="ss-type-name">${s.name}</span>
            </div>
            <div class="ss-type-formula">${s.formula}</div>
            <div class="ss-type-def">${s.definition}</div>
            <div class="ss-type-examples">${s.examples.map((e) => `<div class="ss-type-ex">${e}</div>`).join("")}</div>
            <div class="ss-tip-bar"><strong>CELPIP tip:</strong> ${s.celpipTip}</div>
          </div>
        `,
        ).join("")}
      </div>

      <div class="ss-divider"></div>

      <!-- Clause Types -->
      <div class="ss-section-title">Clause Types</div>
      <div class="ss-clause-intro">
        <div class="ss-clause-intro-grid">
          <div class="ss-clause-intro-item">
            <span class="ss-clause-intro-icon">📝</span>
            <div>
              <div class="ss-clause-intro-heading">What is a clause?</div>
              <div class="ss-clause-intro-text">A group of words that contains both a <strong>subject</strong> and a <strong>verb</strong>.</div>
            </div>
          </div>
          <div class="ss-clause-intro-item">
            <span class="ss-clause-intro-icon">💡</span>
            <div>
              <div class="ss-clause-intro-heading">Complete thought?</div>
              <div class="ss-clause-intro-text">A clause may or may not be a complete thought on its own — that's what separates independent from dependent clauses.</div>
            </div>
          </div>
          <div class="ss-clause-intro-item">
            <span class="ss-clause-intro-icon">🧱</span>
            <div>
              <div class="ss-clause-intro-heading">Building blocks</div>
              <div class="ss-clause-intro-text">Every sentence is made up of <strong>one or more clauses</strong> — they are the core unit of English sentences.</div>
            </div>
          </div>
        </div>
      </div>
      ${CLAUSE_TYPES.map(
        (c) => `
        <div class="ss-clause-card">
          <span class="ss-clause-badge" style="background:${c.badgeBg};color:${c.badgeColor}">${c.badge}</span>
          <div class="ss-clause-body">
            <div class="ss-clause-name">${c.name}</div>
            <div class="ss-clause-def">${c.definition}</div>
            <div class="ss-clause-exs">
              ${c.examples
                .map(
                  (e) => `
                <div class="ss-clause-ex-block">
                  <span class="ss-clause-ex">${e.text}</span>
                  ${e.explanation ? `<span class="ss-clause-ex-explanation">→ ${e.explanation}</span>` : ""}
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      `,
      ).join("")}
    </div>

    <!-- ── COMPLEX SENTENCES PANEL ── -->
    <div id="ss-complex" class="ss-inner-panel">

      <!-- Intro cards -->
      <div class="cs-intro-grid">
        <div class="cs-intro-card" style="background:#eff6ff;border-color:#bfdbfe;">
          <div class="cs-intro-label" style="color:#2563eb;">Type 1</div>
          <div class="cs-intro-name">Compound Sentence</div>
          <div class="cs-intro-formula">IC + CC + IC</div>
          <div class="cs-intro-desc">Two independent clauses joined by a <strong>coordinating conjunction</strong>. Each clause could stand alone as a sentence.</div>
          <div class="cs-intro-connectors">
            ${["for", "and", "nor", "but", "or", "yet", "so"].map((w) => `<span class="cs-connector-pill">${w}</span>`).join("")}
          </div>
        </div>
        <div class="cs-intro-card" style="background:#f0fdf4;border-color:#86efac;">
          <div class="cs-intro-label" style="color:#16a34a;">Type 2</div>
          <div class="cs-intro-name">Complex Sentence</div>
          <div class="cs-intro-formula">IC + SC + DC &nbsp;or&nbsp; DC + , + IC</div>
          <div class="cs-intro-desc">One independent clause + one dependent clause joined by a <strong>subordinating conjunction</strong>. Only the independent clause can stand alone.</div>
          <div class="cs-intro-connectors">
            ${["because", "although", "when", "if", "since", "while", "unless", "after", "before", "even though"].map((w) => `<span class="cs-connector-pill">${w}</span>`).join("")}
          </div>
        </div>
        <div class="cs-intro-card" style="background:#fdf4ff;border-color:#e9d5ff;">
          <div class="cs-intro-label" style="color:#7c3aed;">Type 3</div>
          <div class="cs-intro-name">Compound-Complex</div>
          <div class="cs-intro-formula">IC + CC + IC + SC + DC</div>
          <div class="cs-intro-desc">At least <strong>two independent clauses</strong> AND at least <strong>one dependent clause</strong> — combining both compound and complex patterns.</div>
          <div class="cs-intro-connectors">
            ${["but", "and", "so", "because", "although", "when", "if", "since"].map((w) => `<span class="cs-connector-pill">${w}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- Key: IC = Independent Clause, DC = Dependent Clause, CC = Coordinating Conj, SC = Subordinating Conj -->
      <div style="font-size:12px;color:#9ca3af;margin-bottom:1.75rem;display:flex;gap:16px;flex-wrap:wrap;">
        <span><strong style="color:#374151;">IC</strong> = Independent Clause</span>
        <span><strong style="color:#374151;">DC</strong> = Dependent Clause</span>
        <span><strong style="color:#374151;">CC</strong> = Coordinating Conjunction</span>
        <span><strong style="color:#374151;">SC</strong> = Subordinating Conjunction</span>
      </div>

      <!-- Sentence groups rendered from COMPLEX_SENTENCES -->
      <div id="cs-groups-container"></div>
    </div>
  `;

      // ── Tab switcher ────────────────────────────────────────────────────
      window.ssShowTab = function (id) {
        document
          .querySelectorAll(".ss-inner-panel")
          .forEach((p) => p.classList.remove("ss-panel-active"));
        document
          .querySelectorAll(".ss-inner-tab")
          .forEach((t) => t.classList.remove("ss-tab-active"));
        document.getElementById(id).classList.add("ss-panel-active");
        const idx = ["ss-info", "ss-complex"].indexOf(id);
        document
          .querySelectorAll(".ss-inner-tab")
          [idx].classList.add("ss-tab-active");
        if (id === "ss-complex" && !window._csInit) renderComplexSentences();
      };

      // ── Render Complex Sentences from data ─────────────────────────────
      function renderComplexSentences() {
        window._csInit = true;
        const container = document.getElementById("cs-groups-container");

        const TYPE_META = {
          compound: {
            label: "Compound Sentences",
            bg: "#dbeafe",
            color: "#1e40af",
            border: "#bfdbfe",
            stepColors: ["#dbeafe", "#dbeafe", "#eff6ff"],
            stepTextColors: ["#1e40af", "#1e40af", "#1e40af"],
            finalBg: "#eff6ff",
            finalBorder: "#bfdbfe",
            finalLabel: "#2563eb",
          },
          complex: {
            label: "Complex Sentences",
            bg: "#dcfce7",
            color: "#166534",
            border: "#86efac",
            stepColors: ["#dcfce7", "#dcfce7", "#f0fdf4"],
            stepTextColors: ["#166534", "#166534", "#166534"],
            finalBg: "#f0fdf4",
            finalBorder: "#86efac",
            finalLabel: "#16a34a",
          },
          "compound-complex": {
            label: "Compound-Complex Sentences",
            bg: "#ede9fe",
            color: "#5b21b6",
            border: "#c4b5fd",
            stepColors: ["#ede9fe", "#ede9fe", "#fdf4ff"],
            stepTextColors: ["#5b21b6", "#5b21b6", "#5b21b6"],
            finalBg: "#fdf4ff",
            finalBorder: "#e9d5ff",
            finalLabel: "#7c3aed",
          },
        };

        // Group by type
        const grouped = {};
        COMPLEX_SENTENCES.forEach((s) => {
          if (!grouped[s.type]) grouped[s.type] = [];
          grouped[s.type].push(s);
        });

        const typeOrder = ["compound", "complex", "compound-complex"];
        container.innerHTML = typeOrder
          .map((type) => {
            if (!grouped[type]) return "";
            const meta = TYPE_META[type];
            const sentences = grouped[type];
            return `
        <div class="cs-group">
          <div class="cs-group-header">
            <span class="cs-group-badge" style="background:${meta.bg};color:${meta.color};border:1px solid ${meta.border}">${meta.label}</span>
            <span class="cs-group-count">${sentences.length} examples</span>
          </div>
          ${sentences
            .map(
              (s, i) => `
            <div class="cs-card">
              <div class="cs-card-scenario"><span>${s.emoji}</span> Scenario: ${s.scenario}</div>
              <div class="cs-steps">
                ${s.steps
                  .map(
                    (step, si) => `
                  <div class="cs-step">
                    <div class="cs-step-num" style="background:${meta.stepColors[si]};color:${meta.stepTextColors[si]}">${si + 1}</div>
                    <div class="cs-step-body">
                      <div class="cs-step-label" style="color:${meta.color}">${step.label}</div>
                      <div class="cs-step-sentence">${step.sentence}</div>
                      <div class="cs-step-thought">💭 ${step.thought}</div>
                    </div>
                  </div>
                `,
                  )
                  .join("")}
              </div>
              <div class="cs-final-box" style="background:${meta.finalBg};border:1px solid ${meta.finalBorder}">
                <div class="cs-final-label" style="color:${meta.finalLabel}">✦ Final ${type === "compound" ? "Compound" : type === "complex" ? "Complex" : "Compound-Complex"} Sentence</div>
                <div class="cs-final-sentence">${s.final}</div>
              </div>
              ${s.tip ? `<div class="cs-tip"><strong>Tip:</strong> ${s.tip}</div>` : ""}
            </div>
          `,
            )
            .join("")}
        </div>
      `;
          })
          .join("");
      }
    }

    function renderArticles() {
      const content = document.getElementById("articles-content");

      content.innerHTML = `
      <section class="p-2">
    <style>
      .art-tab-row { display: flex; gap: 0; border-bottom: 1px solid #e5e7eb; margin-bottom: 1.5rem; }
      .art-tab { padding: 10px 18px; font-size: 13px; font-weight: 500; color: #6b7280; cursor: pointer; border-bottom: 2px solid transparent; background: none; border-top: none; border-left: none; border-right: none; transition: color 0.15s; }
      .art-tab.art-active { color: #111827; border-bottom-color: #111827; }
      .art-tab:hover:not(.art-active) { color: #111827; }
      .art-panel { display: none; }
      .art-panel.art-active { display: block; }
      .art-rule-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 0.75rem; }
      .art-rule-title { font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
      .art-rule-body { font-size: 13px; color: #6b7280; line-height: 1.6; }
      .art-badge { display: inline-block; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 6px; }
      .art-badge-a { background: #dbeafe; color: #1e40af; }
      .art-badge-an { background: #dcfce7; color: #166534; }
      .art-badge-the { background: #fef3c7; color: #92400e; }
      .art-badge-zero { background: #ede9fe; color: #5b21b6; }
      .art-ex-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
      .art-ex-pill { font-size: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 3px 10px; color: #374151; }
      .art-sound-display { background: #f9fafb; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; min-height: 80px; }
      .art-sound-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
      .art-sound-pill { font-size: 13px; padding: 6px 14px; border-radius: 8px; border: 1px solid #e5e7eb; background: #f9fafb; color: #6b7280; cursor: pointer; transition: all 0.1s; }
      .art-sound-pill.art-selected { background: #fff; border-color: #d1d5db; color: #111827; font-weight: 500; }
      .art-nav-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
      .art-nav-btn { padding: 6px 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 13px; cursor: pointer; color: #374151; }
      .art-nav-btn:disabled { opacity: 0.35; cursor: default; }
      .art-sb-box { background: #f9fafb; border-radius: 12px; padding: 1.25rem; margin-bottom: 0.75rem; }
      .art-sb-sentence { font-size: 18px; color: #111827; line-height: 2; margin-bottom: 12px; }
      .art-blank { display: inline-block; min-width: 52px; border-bottom: 2px solid #9ca3af; color: #6b7280; text-align: center; padding: 0 4px; font-size: 18px; }
      .art-opt-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .art-opt { padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 14px; font-weight: 500; cursor: pointer; color: #374151; transition: background 0.1s; }
      .art-opt:hover:not(:disabled) { background: #f9fafb; }
      .art-opt.art-correct { background: #dcfce7; border-color: #16a34a; color: #166534; }
      .art-opt.art-wrong { background: #fee2e2; border-color: #dc2626; color: #991b1b; }
      .art-feedback { font-size: 13px; margin-top: 10px; min-height: 20px; color: #6b7280; }
      .art-feedback.art-ok { color: #16a34a; font-weight: 500; }
      .art-feedback.art-err { color: #dc2626; font-weight: 500; }
      .art-explain-box { font-size: 13px; color: #6b7280; line-height: 1.6; padding: 10px 14px; background: #f9fafb; border-radius: 8px; margin-top: 8px; }
      .art-trap-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 0.75rem; cursor: pointer; }
      .art-trap-wrong { font-size: 14px; color: #dc2626; text-decoration: line-through; margin-bottom: 4px; }
      .art-trap-right { font-size: 14px; color: #16a34a; margin-bottom: 6px; font-weight: 500; }
      .art-trap-why { font-size: 12px; color: #6b7280; line-height: 1.6; margin-top: 6px; }
      .art-trap-hint { font-size: 12px; color: #9ca3af; margin-top: 4px; }
      .art-quiz-progress { height: 3px; background: #e5e7eb; border-radius: 2px; margin-bottom: 1.25rem; }
      .art-quiz-fill { height: 3px; background: #2563eb; border-radius: 2px; transition: width 0.3s; }
      .art-quiz-q { font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 14px; }
      .art-quiz-opts { display: flex; flex-direction: column; gap: 8px; }
      .art-quiz-opt { padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 14px; cursor: pointer; color: #374151; text-align: left; transition: background 0.1s; }
      .art-quiz-opt:hover:not(:disabled) { background: #f9fafb; }
      .art-quiz-opt.art-correct { background: #dcfce7; border-color: #16a34a; color: #166534; }
      .art-quiz-opt.art-wrong { background: #fee2e2; border-color: #dc2626; color: #991b1b; }
      .art-quiz-exp { font-size: 13px; color: #6b7280; margin-top: 10px; padding: 10px 12px; background: #f9fafb; border-radius: 8px; display: none; line-height: 1.6; }
      .art-score-box { text-align: center; padding: 2.5rem 1rem; }
      .art-score-num { font-size: 48px; font-weight: 700; color: #111827; }
      .art-score-label { font-size: 15px; color: #6b7280; margin-top: 6px; }
      .art-tip-box { margin-top: 1rem; padding: 10px 14px; background: #f9fafb; border-radius: 8px; font-size: 13px; color: #6b7280; line-height: 1.6; }
      
       /* ── Position header styles ── */
      .art-pos-header { margin-bottom: 2rem; }
      .art-pos-title { font-size: 15px; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
      .art-pos-desc { font-size: 13px; color: #6b7280; line-height: 1.7; margin-bottom: 1.25rem; }
      .art-pos-tabs { display: flex; gap: 8px; margin-bottom: 1rem; flex-wrap: wrap; }
      .art-pos-tab { padding: 6px 14px; border: 1px solid #d1d5db; border-radius: 20px; font-size: 12px; font-weight: 500; cursor: pointer; background: #fff; color: #6b7280; transition: all 0.15s; }
      .art-pos-tab.art-pos-active { background: #111827; color: #fff; border-color: #111827; }
      .art-pos-example { background: #f9fafb; border-radius: 12px; padding: 1.25rem; border: 1px solid #e5e7eb; }
      .art-pos-sentence { font-size: 17px; color: #111827; line-height: 2.2; margin-bottom: 10px; }
      .art-pos-word { display: inline-block; padding: 1px 6px; border-radius: 4px; font-weight: 600; margin: 0 1px; }
      .art-pos-word.art { background: #dbeafe; color: #1e40af; }
      .art-pos-word.adj { background: #fef3c7; color: #92400e; }
      .art-pos-word.adv { background: #ede9fe; color: #5b21b6; }
      .art-pos-word.noun { background: #dcfce7; color: #166534; }
      .art-pos-legend { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 10px; }
      .art-pos-leg-item { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #6b7280; }
      .art-pos-leg-dot { width: 10px; height: 10px; border-radius: 3px; }
      .art-pos-rule { font-size: 13px; color: #374151; line-height: 1.6; }
      .art-pos-rule strong { color: #111827; }

      /* ── Zero article grid ── */
      .art-zero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
      .art-zero-cell { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 12px; }
      .art-zero-cell-title { font-size: 12px; font-weight: 600; color: #5b21b6; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.04em; }
      .art-zero-cell-ex { font-size: 12px; color: #6b7280; line-height: 1.7; }
      @media (max-width: 600px) { .art-zero-grid { grid-template-columns: 1fr; } }

    </style>

     <!-- ══════════════════════════════════════════════════════ -->
    <!-- POSITION HEADER — shown above all tabs                -->
    <!-- ══════════════════════════════════════════════════════ -->
    <div class="art-pos-header">
      <div class="art-pos-title">Where does the article go in a sentence?</div>
      <div class="art-pos-desc">
        Articles (a, an, the) tell us how specific a noun is. Articles always attach to a <strong>noun phrase</strong> — but the noun doesn't have to come right after.
        An adjective or even an adverb can sit between the article and the noun.
        Click each pattern to see a colour-coded example.
      </div>
      
      <div class="art-pos-tabs" id="art-pos-tabs"></div>
      <div class="art-pos-example" id="art-pos-example">
        <div class="art-pos-legend">
          <div class="art-pos-leg-item"><div class="art-pos-leg-dot" style="background:#bfdbfe"></div>article</div>
          <div class="art-pos-leg-item"><div class="art-pos-leg-dot" style="background:#fde68a"></div>adjective</div>
          <div class="art-pos-leg-item"><div class="art-pos-leg-dot" style="background:#ddd6fe"></div>adverb</div>
          <div class="art-pos-leg-item"><div class="art-pos-leg-dot" style="background:#bbf7d0"></div>noun</div>
        </div>
        <div class="art-pos-sentence" id="art-pos-sentence"></div>
        <div class="art-pos-rule" id="art-pos-rule"></div>
      </div>
    </div>

    <div class="art-tab-row">
      <button class="art-tab art-active" onclick="artShowPanel('art-rules')">Rules</button>
      <button class="art-tab" onclick="artShowPanel('art-sound')">Sound rule</button>
      <button class="art-tab" onclick="artShowPanel('art-practice')">Fill-in</button>
      <button class="art-tab" onclick="artShowPanel('art-traps')">Common traps</button>
      <button class="art-tab" onclick="artShowPanel('art-quiz')">Quiz</button>
    </div>

    <!-- RULES PANEL -->
    <div id="art-rules" class="art-panel art-active">
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-a">a</span> First mention — any one of its kind</div>
        <div class="art-rule-body">Use <strong>a</strong> when you introduce something for the first time, or when it doesn't matter <em>which</em> one — just any single one.
          <div class="art-ex-row">
            <span class="art-ex-pill">I saw <em>a</em> dog.</span>
            <span class="art-ex-pill">She has <em>a</em> job offer.</span>
            <span class="art-ex-pill">Can I borrow <em>a</em> pen?</span>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-an">an</span> Same as "a" — but before a vowel sound</div>
        <div class="art-rule-body">Use <strong>an</strong> when the very next sound is a vowel. It's about the <em>sound</em>, not the spelling.
          <div class="art-ex-row">
            <span class="art-ex-pill"><em>an</em> apple</span>
            <span class="art-ex-pill"><em>an</em> hour (silent h)</span>
            <span class="art-ex-pill"><em>an</em> MBA (says "em")</span>
            <span class="art-ex-pill"><em>a</em> university (says "you")</span>
            <span class="art-ex-pill"><em>a</em> European</span>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-the">the</span> Already known — the specific one</div>
        <div class="art-rule-body">Use <strong>the</strong> when both speaker and listener know exactly which one is meant — because it was mentioned before, there's only one, or context makes it obvious.
          <div class="art-ex-row">
            <span class="art-ex-pill">I saw a dog. <em>The</em> dog barked.</span>
            <span class="art-ex-pill"><em>The</em> sun rises in the east.</span>
            <span class="art-ex-pill">Close <em>the</em> door.</span>
            <span class="art-ex-pill"><em>The</em> president spoke today.</span>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-the">the</span> Superlatives &amp; unique roles</div>
        <div class="art-rule-body">Use <strong>the</strong> with superlatives (best, worst, tallest) and with ordinals (first, second, last). Also with one-of-a-kind things in context.
          <div class="art-ex-row">
            <span class="art-ex-pill"><em>The</em> best option</span>
            <span class="art-ex-pill"><em>The</em> first time</span>
            <span class="art-ex-pill"><em>The</em> last train</span>
            <span class="art-ex-pill"><em>The</em> only solution</span>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-the">the</span> Geographic names that use "the"</div>
        <div class="art-rule-body">Rivers, oceans, seas, mountain ranges, deserts, and country names with "united/republic/states/islands" take <strong>the</strong>.
          <div class="art-ex-row">
            <span class="art-ex-pill"><em>The</em> Amazon</span>
            <span class="art-ex-pill"><em>The</em> Pacific Ocean</span>
            <span class="art-ex-pill"><em>The</em> Alps</span>
            <span class="art-ex-pill"><em>The</em> Sahara</span>
            <span class="art-ex-pill"><em>The</em> United States</span>
            <span class="art-ex-pill"><em>The</em> Philippines</span>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-zero">∅</span> Zero article — when NO article is used</div>
        <div class="art-rule-body">
          English drops the article in many predictable situations. Here is every major case:
          <div class="art-zero-grid">
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Plural generalizations</div>
              <div class="art-zero-cell-ex">Talking about a whole category in general — not specific members.<br><em>Dogs are loyal. Books are expensive.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Uncountable nouns (general)</div>
              <div class="art-zero-cell-ex">Water, advice, information, furniture, money, knowledge — when used generally.<br><em>I need advice. She likes music.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Meals</div>
              <div class="art-zero-cell-ex">breakfast, lunch, dinner, supper — when talking about the meal in general.<br><em>What's for dinner? I skipped lunch.</em><br><small>Exception: <em>a big breakfast</em> (described meal)</small></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Sports &amp; games</div>
              <div class="art-zero-cell-ex">Never use an article before sport names.<br><em>She plays tennis. He loves chess. We watch soccer.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Languages</div>
              <div class="art-zero-cell-ex">No article before a language name alone.<br><em>She speaks French. He is learning Mandarin.</em><br><small>Exception: <em>the French language</em> (with "language")</small></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Academic subjects</div>
              <div class="art-zero-cell-ex">No article before school subjects.<br><em>She studies biology. He majors in economics.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Most proper nouns</div>
              <div class="art-zero-cell-ex">People's names, most countries, cities, continents, individual mountains, lakes.<br><em>Canada, Paris, Asia, Lake Ontario, Mount Fuji.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Institutions (primary purpose)</div>
              <div class="art-zero-cell-ex">school, university, hospital, church, prison, bed, work, home — when used for their core purpose.<br><em>She's in hospital. He's at work. I go to school.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Abstract nouns (general truth)</div>
              <div class="art-zero-cell-ex">When stating a general truth or universal concept.<br><em>Love is powerful. Honesty matters. Freedom is precious.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Transport &amp; communication (by + noun)</div>
              <div class="art-zero-cell-ex">No article after "by" for modes of transport or communication.<br><em>by car, by bus, by train, by phone, by email.</em></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Days, months, seasons (general)</div>
              <div class="art-zero-cell-ex">No article for general references to days, months, and seasons.<br><em>I love winter. She was born in March. See you on Monday.</em><br><small>Exception: <em>the Monday before last</em> (specific)</small></div>
            </div>
            <div class="art-zero-cell">
              <div class="art-zero-cell-title">Streets, roads, squares, parks (named)</div>
              <div class="art-zero-cell-ex">Most named streets and parks drop the article.<br><em>She lives on King Street. We walked through Central Park.</em><br><small>Exception: <em>the High Street</em> (British English)</small></div>
            </div>
          </div>
        </div>
      </div>
      <div class="art-rule-card">
        <div class="art-rule-title"><span class="art-badge art-badge-zero">∅</span> Institutions — purpose vs. place</div>
        <div class="art-rule-body">When you use an institution for its primary purpose, drop the article. When you treat it as a physical place, use <strong>a/the</strong>.
          <div class="art-ex-row">
            <span class="art-ex-pill">She's in <em>hospital</em>. (as a patient)</span>
            <span class="art-ex-pill">He visited <em>the</em> hospital. (as a visitor)</span>
            <span class="art-ex-pill">I go to <em>school</em>. (to study)</span>
            <span class="art-ex-pill">I drove past <em>the</em> school. (the building)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SOUND PANEL -->
    <div id="art-sound" class="art-panel">
      <p style="font-size:14px;color:#6b7280;margin-bottom:1rem;line-height:1.6;">The <strong>a / an</strong> rule is about the <em>sound</em> of the next word, not its first letter. Click each word to see the rule.</p>
      <div class="art-sound-display">
        <div id="art-sound-phrase" style="font-size:22px;color:#111827;margin-bottom:8px;font-weight:600;"></div>
        <div id="art-sound-why" style="font-size:13px;color:#6b7280;line-height:1.6;"></div>
      </div>
      <div class="art-sound-pills" id="art-sound-pills"></div>
      <div class="art-tip-box"><strong style="color:#374151;">Tip:</strong> When unsure, say the phrase aloud. If the next word begins with a vowel sound, your mouth naturally prefers "an".</div>
    </div>

    <!-- FILL-IN PANEL -->
    <div id="art-practice" class="art-panel">
      <div class="art-nav-row">
        <button class="art-nav-btn" id="art-prev-btn" onclick="artMoveSentence(-1)" disabled>← prev</button>
        <span style="font-size:13px;color:#6b7280;" id="art-sent-counter"></span>
        <button class="art-nav-btn" id="art-next-btn" onclick="artMoveSentence(1)">next →</button>
      </div>
      <div class="art-sb-box">
        <div class="art-sb-sentence" id="art-sb-sentence"></div>
        <div class="art-opt-row" id="art-sb-opts"></div>
        <div class="art-feedback" id="art-sb-feedback"></div>
      </div>
      <div class="art-explain-box" id="art-sb-explain" style="display:none;"></div>
    </div>

    <!-- TRAPS PANEL -->
    <div id="art-traps" class="art-panel">
      <p style="font-size:14px;color:#6b7280;margin-bottom:1rem;line-height:1.6;">These are the mistakes even advanced learners make. Tap each card to reveal why it's wrong.</p>
      <div id="art-traps-list"></div>
    </div>

    <!-- QUIZ PANEL -->
    <div id="art-quiz" class="art-panel">
      <div class="art-quiz-progress"><div class="art-quiz-fill" id="art-quiz-fill" style="width:0%"></div></div>
      <div id="art-quiz-area"></div>
    </div>
    </section>
  `;

      // ── Panel switching ────────────────────────────────────────────────────
      window.artShowPanel = function (id) {
        document
          .querySelectorAll(".art-panel")
          .forEach((p) => p.classList.remove("art-active"));
        document
          .querySelectorAll(".art-tab")
          .forEach((t) => t.classList.remove("art-active"));
        document.getElementById(id).classList.add("art-active");
        const idx = [
          "art-rules",
          "art-sound",
          "art-practice",
          "art-traps",
          "art-quiz",
        ].indexOf(id);
        document.querySelectorAll(".art-tab")[idx].classList.add("art-active");
        if (id === "art-sound" && !window._artSoundInit) initArtSound();
        if (id === "art-practice" && !window._artPracticeInit)
          initArtPractice();
        if (id === "art-traps" && !window._artTrapsInit) initArtTraps();
        if (id === "art-quiz" && !window._artQuizInit) initArtQuiz();
      };

      // ── Sound panel ────────────────────────────────────────────────────────
      function initArtSound() {
        window._artSoundInit = true;
        const pills = document.getElementById("art-sound-pills");
        SOUND_WORDS.forEach((w, i) => {
          const btn = document.createElement("button");
          btn.className = "art-sound-pill" + (i === 0 ? " art-selected" : "");
          btn.innerHTML = `<strong>${w.art}</strong> ${w.word}`;
          btn.onclick = () => {
            document
              .querySelectorAll(".art-sound-pill")
              .forEach((p, j) => p.classList.toggle("art-selected", j === i));
            document.getElementById("art-sound-phrase").innerHTML =
              `<span style="color:#2563eb">${w.art}</span> ${w.word}`;
            document.getElementById("art-sound-why").innerHTML = w.why;
          };
          pills.appendChild(btn);
        });
        const first = SOUND_WORDS[0];
        document.getElementById("art-sound-phrase").innerHTML =
          `<span style="color:#2563eb">${first.art}</span> ${first.word}`;
        document.getElementById("art-sound-why").innerHTML = first.why;
      }

      // ── Fill-in panel ──────────────────────────────────────────────────────
      let artSI = 0,
        artAnswered = false;
      function initArtPractice() {
        window._artPracticeInit = true;
        artRenderSentence();
      }
      function artRenderSentence() {
        artAnswered = false;
        const s = SENTENCES[artSI];
        document.getElementById("art-sent-counter").textContent =
          `${artSI + 1} of ${SENTENCES.length}`;
        document.getElementById("art-prev-btn").disabled = artSI === 0;
        document.getElementById("art-next-btn").disabled =
          artSI === SENTENCES.length - 1;
        document.getElementById("art-sb-feedback").textContent = "";
        document.getElementById("art-sb-feedback").className = "art-feedback";
        document.getElementById("art-sb-explain").style.display = "none";

        const blankHTML = `<span class="art-blank" id="art-blank">___</span>`;
        const sentence =
          (s.before ? s.before + " " : "") + blankHTML + " " + s.after;
        document.getElementById("art-sb-sentence").innerHTML = sentence;

        const optsEl = document.getElementById("art-sb-opts");
        optsEl.innerHTML = "";
        s.options.forEach((opt) => {
          const btn = document.createElement("button");
          btn.className = "art-opt";
          btn.textContent = opt;
          btn.onclick = () => artCheckAnswer(opt, btn);
          optsEl.appendChild(btn);
        });
      }
      function artCheckAnswer(chosen, btn) {
        if (artAnswered) return;
        artAnswered = true;
        const s = SENTENCES[artSI];
        const isRight = chosen.toLowerCase() === s.answer.toLowerCase();
        document.querySelectorAll(".art-opt").forEach((b) => {
          b.disabled = true;
        });
        if (isRight) {
          btn.classList.add("art-correct");
          document.getElementById("art-sb-feedback").textContent = "✓ Correct!";
          document.getElementById("art-sb-feedback").className =
            "art-feedback art-ok";
          document.getElementById("art-blank").textContent =
            s.answer === "∅" ? "∅" : s.answer;
          document.getElementById("art-blank").style.color = "#16a34a";
        } else {
          btn.classList.add("art-wrong");
          document.getElementById("art-sb-feedback").textContent =
            "✗ Not quite.";
          document.getElementById("art-sb-feedback").className =
            "art-feedback art-err";
          document.querySelectorAll(".art-opt").forEach((b) => {
            if (b.textContent.toLowerCase() === s.answer.toLowerCase())
              b.classList.add("art-correct");
          });
        }
        const ex = document.getElementById("art-sb-explain");
        ex.innerHTML = s.explain;
        ex.style.display = "block";
      }
      window.artMoveSentence = function (dir) {
        artSI = Math.max(0, Math.min(SENTENCES.length - 1, artSI + dir));
        artRenderSentence();
      };

      // ── Traps panel ────────────────────────────────────────────────────────
      function initArtTraps() {
        window._artTrapsInit = true;
        const list = document.getElementById("art-traps-list");
        TRAPS.forEach((t, i) => {
          const card = document.createElement("div");
          card.className = "art-trap-card";
          card.innerHTML = `
        <div class="art-trap-wrong">${t.wrong}</div>
        <div class="art-trap-right">${t.right}</div>
        <div class="art-trap-why" id="art-trap-why-${i}" style="display:none">${t.why}</div>
        <div class="art-trap-hint" id="art-trap-hint-${i}">tap to see why →</div>
      `;
          card.onclick = () => {
            const why = document.getElementById(`art-trap-why-${i}`);
            const hint = document.getElementById(`art-trap-hint-${i}`);
            const visible = why.style.display !== "none";
            why.style.display = visible ? "none" : "block";
            hint.style.display = visible ? "block" : "none";
          };
          list.appendChild(card);
        });
      }

      // ── Quiz panel ─────────────────────────────────────────────────────────
      let artQI = 0,
        artScore = 0,
        artQAnswered = false;
      function initArtQuiz() {
        window._artQuizInit = true;
        artQI = 0;
        artScore = 0;
        artRenderQuiz();
      }
      function artRenderQuiz() {
        artQAnswered = false;
        document.getElementById("art-quiz-fill").style.width =
          (artQI / QUIZ.length) * 100 + "%";
        if (artQI >= QUIZ.length) {
          document.getElementById("art-quiz-area").innerHTML = `
        <div class="art-score-box">
          <div class="art-score-num">${artScore}/${QUIZ.length}</div>
          <div class="art-score-label">${artScore === QUIZ.length ? "Perfect! 🎉" : artScore >= 9 ? "Great work!" : artScore >= 6 ? "Good effort — keep practising!" : "Keep studying — you'll get there!"}</div>
          <br>
          <button class="art-nav-btn" style="margin-top:1rem" onclick="artRestartQuiz()">Try again</button>
        </div>`;
          document.getElementById("art-quiz-fill").style.width = "100%";
          return;
        }
        const q = QUIZ[artQI];
        let html = `<div class="art-quiz-q">${artQI + 1}. ${q.q}</div><div class="art-quiz-opts">`;
        q.opts.forEach((o, i) => {
          html += `<button class="art-quiz-opt" onclick="artAnswerQuiz(${i}, this)">${o}</button>`;
        });
        html += `</div><div class="art-quiz-exp" id="art-quiz-exp">${q.exp}</div>`;
        document.getElementById("art-quiz-area").innerHTML = html;
      }
      window.artAnswerQuiz = function (chosen, btn) {
        if (artQAnswered) return;
        artQAnswered = true;
        const q = QUIZ[artQI];
        document.querySelectorAll(".art-quiz-opt").forEach((b, i) => {
          b.disabled = true;
          if (i === q.ans) b.classList.add("art-correct");
        });
        if (chosen === q.ans) {
          artScore++;
        } else {
          btn.classList.add("art-wrong");
        }
        document.getElementById("art-quiz-exp").style.display = "block";
        setTimeout(() => {
          artQI++;
          artRenderQuiz();
        }, 1800);
      };
      window.artRestartQuiz = function () {
        artQI = 0;
        artScore = 0;
        window._artQuizInit = false;
        initArtQuiz();
      };
    }

    function renderPrepositions() {
      const content = document.getElementById("prepositions-content");

      const GROUP_STYLE = {
        card: `background:#fff;border-radius:12px;padding:0.85rem 1rem;border:1px solid #e5e7eb;`,
      };

      content.innerHTML = `
    <style>
      .prep-section { margin-bottom: 2.5rem; }
      .prep-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .prep-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .prep-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; }
      .prep-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; }
      .prep-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem; }
      .prep-word { font-size: 15px; font-weight: 700; color: #111827; }
      .prep-rule { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .prep-examples { display: flex; flex-direction: column; gap: 3px; }
      .prep-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 3px 8px; border: 1px solid #f3f4f6; }
      .prep-trap-card { background: #fff; border: 1px solid #fbcfe8; border-radius: 12px; padding: 0.9rem 1rem; margin-bottom: 0.75rem; }
      .prep-trap-label { font-size: 13px; font-weight: 700; color: #be185d; margin-bottom: 0.4rem; }
      .prep-trap-rule { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .prep-trap-exs { display: flex; flex-direction: column; gap: 3px; }
      .prep-trap-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #fff5f7; border-radius: 6px; padding: 3px 8px; border: 1px solid #fce7f3; }
      @media (max-width: 600px) { .prep-grid { grid-template-columns: 1fr; } }
    </style>

    ${PREP_GROUPS.map((group) => {
      const isTraps = group.category === "Common Traps";
      return `
        <div class="prep-section">
          <div class="prep-section-header">
            <span style="font-size:1.3rem">${group.emoji}</span>
            <span class="prep-section-badge" style="background:${group.bg};color:${group.color}">${group.category}</span>
            ${!isTraps ? `<span style="font-size:12px;color:#9ca3af">${group.items.length} prepositions</span>` : ""}
          </div>
          ${
            isTraps
              ? group.items
                  .map(
                    (item) => `
                <div class="prep-trap-card">
                  <div class="prep-trap-label">${item.prep}</div>
                  <div class="prep-trap-rule">${item.rule}</div>
                  <div class="prep-trap-exs">
                    ${item.examples.map((e) => `<div class="prep-trap-ex">${e}</div>`).join("")}
                  </div>
                </div>
              `,
                  )
                  .join("")
              : `<div class="prep-grid">
                ${group.items
                  .map(
                    (item) => `
                  <div class="prep-card" style="border-color:${group.border}">
                    <div class="prep-card-top">
                      <span class="prep-word">${item.prep}</span>
                    </div>
                    <div class="prep-rule">${item.rule}</div>
                    <div class="prep-examples">
                      ${item.examples.map((e) => `<div class="prep-ex">${e}</div>`).join("")}
                    </div>
                  </div>
                `,
                  )
                  .join("")}
              </div>`
          }
        </div>
      `;
    }).join("")}
  `;
    }

    function renderConjunctions() {
      const content = document.getElementById("conjunctions-content");
      content.innerHTML = `
    <style>
      .conj-section { margin-bottom: 2.5rem; }
      .conj-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 0.6rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .conj-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .conj-intro { font-size: 13px; color: #6b7280; line-height: 1.6; margin-bottom: 1rem; padding: 10px 14px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #e5e7eb; }
      .conj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.75rem; }
      .conj-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; }
      .conj-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 0.4rem; }
      .conj-word { font-size: 15px; font-weight: 700; color: #111827; }
      .conj-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .conj-examples { display: flex; flex-direction: column; gap: 3px; margin-bottom: 0.5rem; }
      .conj-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 3px 8px; border: 1px solid #f3f4f6; }
      .conj-tip { font-size: 11.5px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 4px 9px; line-height: 1.5; }
      .conj-trap-card { background: #fff; border: 1px solid #fbcfe8; border-radius: 12px; padding: 0.9rem 1rem; margin-bottom: 0.75rem; }
      .conj-trap-word { font-size: 13px; font-weight: 700; color: #be185d; margin-bottom: 0.35rem; }
      .conj-trap-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .conj-trap-exs { display: flex; flex-direction: column; gap: 3px; }
      .conj-trap-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #fff5f7; border-radius: 6px; padding: 3px 8px; border: 1px solid #fce7f3; }
      .conj-comments { margin-top: 1rem; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 0.85rem 1rem; }
.conj-comments-header { display: flex; align-items: center; gap: 7px; margin-bottom: 0.6rem; }
.conj-comments-icon { font-size: 14px; }
.conj-comments-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #0369a1; }
.conj-comments-list { display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; list-style: none; }
.conj-comment-item { display: flex; align-items: flex-start; gap: 8px; }
.conj-comment-dot { width: 6px; height: 6px; border-radius: 50%; background: #38bdf8; flex-shrink: 0; margin-top: 5px; }
.conj-comment-text { font-size: 13px; color: #0c4a6e; line-height: 1.6; }
      @media (max-width: 600px) { .conj-grid { grid-template-columns: 1fr; } }
    </style>

    ${CONJ_GROUPS.map((group) => {
      const isTraps = group.category === "Common Traps";
      return `
        <div class="conj-section">
          <div class="conj-section-header">
            <span style="font-size:1.3rem">${group.emoji}</span>
            <span class="conj-section-badge" style="background:${group.bg};color:${group.color}">${group.category}</span>
            ${!isTraps ? `<span style="font-size:12px;color:#9ca3af">${group.items.length} conjunctions</span>` : ""}
          </div>
          ${group.intro ? `<div class="conj-intro">${group.intro}</div>` : ""}
          
          ${
            isTraps
              ? group.items
                  .map(
                    (item) => `
                <div class="conj-trap-card">
                  <div class="conj-trap-word">${item.word}</div>
                  <div class="conj-trap-meaning">${item.meaning}</div>
                  <div class="conj-trap-exs">
                    ${item.examples.map((e) => `<div class="conj-trap-ex">${e}</div>`).join("")}
                  </div>
                </div>
              `,
                  )
                  .join("")
              : `<div class="conj-grid">
                ${group.items
                  .map(
                    (item) => `
                  <div class="conj-card" style="border-color:${group.border}">
                    <div class="conj-card-top">
                      <span class="conj-word">${item.word}</span>
                    </div>
                    <div class="conj-meaning">${item.meaning}</div>
                    <div class="conj-examples">
                      ${item.examples.map((e) => `<div class="conj-ex">${e}</div>`).join("")}
                    </div>
                    ${item.tip ? `<div class="conj-tip">💡 ${item.tip}</div>` : ""}
                  </div>
                `,
                  )
                  .join("")}
              </div>`
          }
          ${
            group.comments && group.comments.length
              ? `
  <div class="conj-comments">
    <div class="conj-comments-header">
      <span class="conj-comments-icon">💬</span>
      <span class="conj-comments-label">Notes</span>
    </div>
    <ul class="conj-comments-list">
      ${group.comments
        .map(
          (c) => `
        <li class="conj-comment-item">
          <span class="conj-comment-dot"></span>
          <span class="conj-comment-text">${c}</span>
        </li>
      `,
        )
        .join("")}
    </ul>
  </div>
`
              : ""
          }
        </div>
      `;
    }).join("")}
  `;
    }

    function renderIdioms() {
      const content = document.getElementById("idioms-content");

      content.innerHTML = `
    <style>
      .idiom-section { margin-bottom: 2.5rem; }
      .idiom-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .idiom-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .idiom-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 0.75rem; }
      .idiom-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; display: flex; flex-direction: column; gap: 0.4rem; }
      .idiom-phrase { font-size: 14px; font-weight: 700; color: #111827; }
      .idiom-meaning { font-size: 12.5px; color: #374151; line-height: 1.55; }
      .idiom-example { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 4px 9px; border: 1px solid #f3f4f6; margin-top: 2px; }
      @media (max-width: 600px) { .idiom-grid { grid-template-columns: 1fr; } }
    </style>

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
  `;
    }

    function renderVerbs() {
      const content = document.getElementById("verbs-content");

      content.innerHTML = `
    <style>
      .vb-tab-row { display: flex; gap: 0; border-bottom: 1px solid #e5e7eb; margin-bottom: 1.5rem; overflow-x: auto; }
      .vb-tab { padding: 10px 16px; font-size: 13px; font-weight: 500; color: #6b7280; cursor: pointer; border-bottom: 2px solid transparent; background: none; border-top: none; border-left: none; border-right: none; transition: color 0.15s; white-space: nowrap; }
      .vb-tab.vb-active { color: #111827; border-bottom-color: #111827; }
      .vb-tab:hover:not(.vb-active) { color: #111827; }
      .vb-panel { display: none; }
      .vb-panel.vb-active { display: block; }

      .vb-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 0.75rem; }
      .vb-card-title { font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
      .vb-card-body { font-size: 13px; color: #6b7280; line-height: 1.7; }
      .vb-badge { display: inline-block; font-size: 11px; font-weight: 600; padding: 2px 9px; border-radius: 6px; }
      .vb-badge-action   { background: #dbeafe; color: #1e40af; }
      .vb-badge-linking  { background: #dcfce7; color: #166534; }
      .vb-badge-aux      { background: #fef3c7; color: #92400e; }
      .vb-badge-modal    { background: #ede9fe; color: #5b21b6; }
      .vb-badge-trans    { background: #fee2e2; color: #991b1b; }
      .vb-badge-intrans  { background: #e0f2fe; color: #0369a1; }
      .vb-badge-phrase   { background: #fce7f3; color: #9d174d; }
      .vb-badge-irreg    { background: #f3f4f6; color: #374151; }

      .vb-ex-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
      .vb-ex-pill { font-size: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 3px 10px; color: #374151; }

      .vb-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem; }

      .vb-nav-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
      .vb-nav-btn { padding: 6px 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 13px; cursor: pointer; color: #374151; }
      .vb-nav-btn:disabled { opacity: 0.35; cursor: default; }

      .vb-slide-box { background: #f9fafb; border-radius: 12px; padding: 1.25rem; margin-bottom: 0.75rem; min-height: 160px; }
      .vb-slide-label { font-size: 11px; font-weight: 600; letter-spacing: 0.05em; color: #9ca3af; text-transform: uppercase; margin-bottom: 6px; }
      .vb-slide-title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 8px; }
      .vb-slide-desc { font-size: 13px; color: #6b7280; line-height: 1.7; margin-bottom: 10px; }
      .vb-slide-examples { display: flex; flex-direction: column; gap: 5px; }
      .vb-slide-ex { font-size: 13px; color: #374151; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 5px 10px; }
      .vb-slide-ex em { color: #2563eb; font-style: normal; font-weight: 600; }

      .vb-tense-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 10px; }
      .vb-tense-table th { background: #f3f4f6; color: #374151; font-weight: 600; padding: 8px 12px; text-align: left; border: 1px solid #e5e7eb; }
      .vb-tense-table td { padding: 8px 12px; border: 1px solid #e5e7eb; color: #374151; vertical-align: top; }
      .vb-tense-table tr:nth-child(even) td { background: #f9fafb; }
      .vb-tense-key { display: inline-block; font-size: 11px; background: #dbeafe; color: #1e40af; border-radius: 4px; padding: 1px 6px; font-weight: 600; margin-bottom: 3px; }

      .vb-irreg-table { width: 100%; border-collapse: collapse; font-size: 13px; }
      .vb-irreg-table th { background: #f3f4f6; color: #374151; font-weight: 600; padding: 7px 12px; text-align: left; border: 1px solid #e5e7eb; }
      .vb-irreg-table td { padding: 7px 12px; border: 1px solid #e5e7eb; color: #374151; }
      .vb-irreg-table tr:hover td { background: #f9fafb; }
      .vb-irreg-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
      .vb-irreg-filter-btn { padding: 5px 12px; border: 1px solid #d1d5db; border-radius: 6px; background: #fff; font-size: 12px; cursor: pointer; color: #374151; font-weight: 500; }
      .vb-irreg-filter-btn.vb-filter-active { background: #111827; color: #fff; border-color: #111827; }

      .vb-quiz-progress { height: 3px; background: #e5e7eb; border-radius: 2px; margin-bottom: 1.25rem; }
      .vb-quiz-fill { height: 3px; background: #2563eb; border-radius: 2px; transition: width 0.3s; }
      .vb-quiz-q { font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 14px; }
      .vb-quiz-opts { display: flex; flex-direction: column; gap: 8px; }
      .vb-quiz-opt { padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 14px; cursor: pointer; color: #374151; text-align: left; }
      .vb-quiz-opt:hover:not(:disabled) { background: #f9fafb; }
      .vb-quiz-opt.vb-correct { background: #dcfce7; border-color: #16a34a; color: #166534; }
      .vb-quiz-opt.vb-wrong   { background: #fee2e2; border-color: #dc2626; color: #991b1b; }
      .vb-quiz-exp { font-size: 13px; color: #6b7280; margin-top: 10px; padding: 10px 12px; background: #f9fafb; border-radius: 8px; display: none; line-height: 1.6; }
      .vb-score-box { text-align: center; padding: 2.5rem 1rem; }
      .vb-score-num { font-size: 48px; font-weight: 700; color: #111827; }
      .vb-score-label { font-size: 15px; color: #6b7280; margin-top: 6px; }

      .vb-fill-box { background: #f9fafb; border-radius: 12px; padding: 1.25rem; margin-bottom: 0.75rem; }
      .vb-fill-sentence { font-size: 18px; color: #111827; line-height: 2.2; margin-bottom: 14px; }
      .vb-fill-blank { display: inline-block; min-width: 80px; border-bottom: 2px solid #9ca3af; color: #6b7280; text-align: center; padding: 0 4px; font-size: 18px; }
      .vb-fill-opts { display: flex; gap: 8px; flex-wrap: wrap; }
      .vb-fill-opt { padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 14px; font-weight: 500; cursor: pointer; color: #374151; }
      .vb-fill-opt:hover:not(:disabled) { background: #f9fafb; }
      .vb-fill-opt.vb-correct { background: #dcfce7; border-color: #16a34a; color: #166534; }
      .vb-fill-opt.vb-wrong   { background: #fee2e2; border-color: #dc2626; color: #991b1b; }
      .vb-fill-feedback { font-size: 13px; margin-top: 10px; min-height: 18px; }
      .vb-fill-feedback.vb-ok  { color: #16a34a; font-weight: 500; }
      .vb-fill-feedback.vb-err { color: #dc2626; font-weight: 500; }
      .vb-fill-explain { font-size: 13px; color: #6b7280; line-height: 1.6; padding: 10px 14px; background: #f9fafb; border-radius: 8px; margin-top: 8px; }

      .vb-tip { margin-top: 1rem; padding: 10px 14px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; font-size: 13px; color: #92400e; line-height: 1.6; }
      .vb-modal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem; }
.vb-modal-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.25rem; }
.vb-modal-word { font-size: 22px; font-weight: 700; color: #2563eb; margin-bottom: 6px; }
.vb-modal-meanings { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 10px; }
.vb-modal-examples { display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px; }
.vb-modal-ex { font-size: 12px; color: #374151; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 5px 10px; line-height: 1.5; }
.vb-modal-neg { font-size: 12px; color: #6b7280; margin-bottom: 6px; }
.vb-modal-neg strong { color: #374151; }
.vb-modal-note { font-size: 12px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 6px 10px; line-height: 1.5; }
      </style>

    <div class="vb-tab-row">
      <button class="vb-tab vb-active" onclick="vbShowPanel('vb-types')">Types</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-tenses')">Tenses</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-forms')">Forms</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-modal')">Modals</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-phrasal')">Phrasal</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-irregular')">Irregular</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-fillin')">Fill-in</button>
      <button class="vb-tab" onclick="vbShowPanel('vb-quiz')">Quiz</button>
    </div>

    <!-- TYPES PANEL -->
    <div id="vb-types" class="vb-panel vb-active">
      <div class="vb-grid">
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-action">Action</span> Action verbs</div>
          <div class="vb-card-body">Express a physical or mental action. The most common type.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">run, eat, think</span>
              <span class="vb-ex-pill">write, decide, jump</span>
              <span class="vb-ex-pill">She <em>runs</em> every day.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-linking">Linking</span> Linking verbs</div>
          <div class="vb-card-body">Connect the subject to a description. They do not show action.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">be, seem, appear</span>
              <span class="vb-ex-pill">feel, look, become</span>
              <span class="vb-ex-pill">She <em>seems</em> tired.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-aux">Auxiliary</span> Auxiliary (helping) verbs</div>
          <div class="vb-card-body">Help the main verb express tense, voice, or mood. Always paired with another verb.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">be, have, do</span>
              <span class="vb-ex-pill">She <em>is running</em>.</span>
              <span class="vb-ex-pill">He <em>has eaten</em>.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-modal">Modal</span> Modal verbs</div>
          <div class="vb-card-body">Express ability, possibility, permission, obligation. Never change form.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">can, could, may</span>
              <span class="vb-ex-pill">must, should, will</span>
              <span class="vb-ex-pill">You <em>should</em> rest.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-trans">Transitive</span> Transitive verbs</div>
          <div class="vb-card-body">Require a direct object — the action passes to something/someone.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">She <em>bought</em> a car.</span>
              <span class="vb-ex-pill">He <em>kicked</em> the ball.</span>
              <span class="vb-ex-pill">I <em>love</em> music.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-intrans">Intransitive</span> Intransitive verbs</div>
          <div class="vb-card-body">Do NOT need a direct object. The action stays with the subject.
            <div class="vb-ex-row">
              <span class="vb-ex-pill">She <em>arrived</em>.</span>
              <span class="vb-ex-pill">The baby <em>slept</em>.</span>
              <span class="vb-ex-pill">He <em>laughed</em>.</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-phrase">Stative</span> Stative verbs</div>
          <div class="vb-card-body">Express a state, not an action. <strong>Not normally used in continuous tenses.</strong>
            <div class="vb-ex-row">
              <span class="vb-ex-pill">know, believe, own</span>
              <span class="vb-ex-pill">love, hate, want</span>
              <span class="vb-ex-pill">✗ I am knowing → ✓ I know</span>
            </div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title"><span class="vb-badge vb-badge-irreg">Causative</span> Causative verbs</div>
          <div class="vb-card-body">Show that someone causes something to happen (by themselves or via someone else).
            <div class="vb-ex-row">
              <span class="vb-ex-pill">make, let, have, get</span>
              <span class="vb-ex-pill">She <em>made</em> him apologize.</span>
              <span class="vb-ex-pill">I <em>got</em> my car fixed.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="vb-tip"><strong>Key insight:</strong> Many verbs can be both transitive and intransitive depending on context. "She <em>runs</em> the company" (transitive) vs. "She <em>runs</em> every morning" (intransitive).</div>
    </div>

    <!-- TENSES PANEL -->
<div id="vb-tenses" class="vb-panel">
  <div id="vb-tenses-all"></div>
</div>

    <!-- FORMS PANEL -->
<div id="vb-forms" class="vb-panel">
  <style>
    .vb-form-label { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; padding: 2px 9px; border-radius: 6px; letter-spacing: 0.04em; }
    .vb-form-v1 { background: #dbeafe; color: #1e40af; }
    .vb-form-v2 { background: #fef3c7; color: #92400e; }
    .vb-form-v3 { background: #dcfce7; color: #166534; }
    .vb-form-ving { background: #ede9fe; color: #5b21b6; }
    .vb-form-vs { background: #e0f2fe; color: #0369a1; }
    .vb-form-other { background: #f3f4f6; color: #374151; }
    .vb-form-table { width: 100%; border-collapse: collapse; font-size: 12.5px; margin-top: 10px; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; }
    .vb-form-table th { background: #f3f4f6; color: #374151; font-weight: 600; padding: 7px 10px; text-align: left; border-bottom: 1px solid #e5e7eb; }
    .vb-form-table td { padding: 6px 10px; border-bottom: 1px solid #f3f4f6; color: #374151; }
    .vb-form-table tr:last-child td { border-bottom: none; }
    .vb-form-table tr:hover td { background: #f9fafb; }
    .vb-form-table td:not(:first-child) { color: #2563eb; font-weight: 500; font-style: italic; }
    .vb-form-table .vb-ft-label { font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px; display: inline-block; }
    .vb-master-table-wrap { margin-top: 2rem; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; }
.vb-master-table-header { padding: 1rem 1.25rem 0.75rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.vb-master-table-title { font-size: 14px; font-weight: 700; color: #111827; }
.vb-master-table-legend { display: flex; flex-wrap: wrap; gap: 6px; }
.vb-ml { font-size: 11px; font-weight: 600; padding: 2px 9px; border-radius: 20px; }
.vb-master-table-scroll { overflow-x: auto; }
.vb-master-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 620px; }
.vb-master-table thead tr { background: #f3f4f6; }
.vb-master-table th { padding: 9px 12px; text-align: left; border-bottom: 2px solid #e5e7eb; color: #374151; font-weight: 600; white-space: nowrap; }
.vb-master-table td { padding: 7px 12px; border-bottom: 1px solid #f3f4f6; color: #374151; }
.vb-master-table tbody tr:last-child td { border-bottom: none; }
.vb-master-table tbody tr:hover td { background: #f9fafb; }
.vb-mt-word { font-weight: 700; color: #111827; }
.vb-th-badge { font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-right: 4px; vertical-align: middle; }
.vb-form-v5 { background: #fce7f3; color: #9d174d; }
@media (max-width: 600px) { .vb-master-table-header { flex-direction: column; align-items: flex-start; } }
  </style>

  <div class="vb-grid">

    <!-- Base Form -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-v1">V1</span>
        Base form (infinitive)
      </div>
      <div class="vb-card-body">The raw form of the verb, often with "to". Used after modals, auxiliaries, and certain verbs.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">to <em>run</em></span>
          <span class="vb-ex-pill">I want <em>to eat</em>.</span>
          <span class="vb-ex-pill">She can <em>swim</em>.</span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Word</th><th>V1 (base)</th></tr></thead>
          <tbody>
            <tr><td>run</td><td>run</td></tr>
            <tr><td>eat</td><td>eat</td></tr>
            <tr><td>write</td><td>write</td></tr>
            <tr><td>speak</td><td>speak</td></tr>
            <tr><td>go</td><td>go</td></tr>
            <tr><td>make</td><td>make</td></tr>
            <tr><td>take</td><td>take</td></tr>
            <tr><td>give</td><td>give</td></tr>
            <tr><td>think</td><td>think</td></tr>
            <tr><td>know</td><td>know</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Present Simple 3rd person -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-vs">V5</span>
        Present simple (3rd person -s)
      </div>
      <div class="vb-card-body">Add -s or -es for he/she/it. Verbs ending in -ch, -sh, -x, -o, -ss get -es.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">run → run<em>s</em></span>
          <span class="vb-ex-pill">teach → teach<em>es</em></span>
          <span class="vb-ex-pill">go → go<em>es</em></span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Word</th><th>V1-s (he/she/it)</th></tr></thead>
          <tbody>
            <tr><td>run</td><td>runs</td></tr>
            <tr><td>teach</td><td>teaches</td></tr>
            <tr><td>go</td><td>goes</td></tr>
            <tr><td>watch</td><td>watches</td></tr>
            <tr><td>play</td><td>plays</td></tr>
            <tr><td>fix</td><td>fixes</td></tr>
            <tr><td>study</td><td>studies</td></tr>
            <tr><td>do</td><td>does</td></tr>
            <tr><td>have</td><td>has</td></tr>
            <tr><td>miss</td><td>misses</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Present Participle -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-ving">V4</span>
        Present participle (-ing)
      </div>
      <div class="vb-card-body">Used for continuous tenses and as gerunds. Double the consonant after a short stressed vowel.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">run → runn<em>ing</em></span>
          <span class="vb-ex-pill">write → writ<em>ing</em></span>
          <span class="vb-ex-pill">play → play<em>ing</em></span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Word</th><th>V-ing</th><th>Rule</th></tr></thead>
          <tbody>
            <tr><td>run</td><td>running</td><td>double consonant</td></tr>
            <tr><td>write</td><td>writing</td><td>drop silent -e</td></tr>
            <tr><td>play</td><td>playing</td><td>add -ing</td></tr>
            <tr><td>sit</td><td>sitting</td><td>double consonant</td></tr>
            <tr><td>make</td><td>making</td><td>drop silent -e</td></tr>
            <tr><td>read</td><td>reading</td><td>add -ing</td></tr>
            <tr><td>swim</td><td>swimming</td><td>double consonant</td></tr>
            <tr><td>come</td><td>coming</td><td>drop silent -e</td></tr>
            <tr><td>study</td><td>studying</td><td>add -ing</td></tr>
            <tr><td>begin</td><td>beginning</td><td>double consonant</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Past Simple -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-v2">V2</span>
        Past simple
      </div>
      <div class="vb-card-body">Regular verbs add -ed. If ending in -e, add -d only. Consonant + y → -ied. Irregular verbs must be memorized.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">walk → walk<em>ed</em></span>
          <span class="vb-ex-pill">love → lov<em>ed</em></span>
          <span class="vb-ex-pill">go → <em>went</em></span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Word</th><th>V2 (past simple)</th><th>Type</th></tr></thead>
          <tbody>
            <tr><td>walk</td><td>walked</td><td>regular</td></tr>
            <tr><td>love</td><td>loved</td><td>regular (-e)</td></tr>
            <tr><td>study</td><td>studied</td><td>regular (-ied)</td></tr>
            <tr><td>go</td><td>went</td><td>irregular</td></tr>
            <tr><td>eat</td><td>ate</td><td>irregular</td></tr>
            <tr><td>write</td><td>wrote</td><td>irregular</td></tr>
            <tr><td>speak</td><td>spoke</td><td>irregular</td></tr>
            <tr><td>take</td><td>took</td><td>irregular</td></tr>
            <tr><td>begin</td><td>began</td><td>irregular</td></tr>
            <tr><td>plan</td><td>planned</td><td>regular (double)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Past Participle -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-v3">V3</span>
        Past participle
      </div>
      <div class="vb-card-body">Used with "have" for perfect tenses and "be" for passive voice. Regular verbs: same as V2. Irregular: must be learned separately.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">walked (V2 = V3)</span>
          <span class="vb-ex-pill">She has <em>eaten</em>.</span>
          <span class="vb-ex-pill">It was <em>broken</em>.</span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Word</th><th>V2</th><th>V3 (past participle)</th></tr></thead>
          <tbody>
            <tr><td>walk</td><td>walked</td><td>walked</td></tr>
            <tr><td>go</td><td>went</td><td>gone</td></tr>
            <tr><td>eat</td><td>ate</td><td>eaten</td></tr>
            <tr><td>write</td><td>wrote</td><td>written</td></tr>
            <tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
            <tr><td>take</td><td>took</td><td>taken</td></tr>
            <tr><td>begin</td><td>began</td><td>begun</td></tr>
            <tr><td>break</td><td>broke</td><td>broken</td></tr>
            <tr><td>give</td><td>gave</td><td>given</td></tr>
            <tr><td>know</td><td>knew</td><td>known</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Gerund -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-ving">V-ing</span>
        Gerund (verb as noun)
      </div>
      <div class="vb-card-body">The -ing form used as a noun — as a subject, object, or after prepositions. Same spelling as the present participle.
        <div class="vb-ex-row">
          <span class="vb-ex-pill"><em>Swimming</em> is healthy.</span>
          <span class="vb-ex-pill">I enjoy <em>reading</em>.</span>
          <span class="vb-ex-pill">before <em>leaving</em></span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Verb</th><th>Gerund</th><th>Used as</th></tr></thead>
          <tbody>
            <tr><td>swim</td><td>swimming</td><td>subject</td></tr>
            <tr><td>read</td><td>reading</td><td>object</td></tr>
            <tr><td>run</td><td>running</td><td>subject</td></tr>
            <tr><td>write</td><td>writing</td><td>object</td></tr>
            <tr><td>leave</td><td>leaving</td><td>after preposition</td></tr>
            <tr><td>travel</td><td>travelling</td><td>subject</td></tr>
            <tr><td>cook</td><td>cooking</td><td>object</td></tr>
            <tr><td>speak</td><td>speaking</td><td>subject</td></tr>
            <tr><td>learn</td><td>learning</td><td>object</td></tr>
            <tr><td>work</td><td>working</td><td>after preposition</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Active vs Passive -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-v3">V3</span>
        Active vs. Passive voice
      </div>
      <div class="vb-card-body">Active: subject does the action. Passive: subject receives the action — formed with <em>be + V3</em>.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">Active: The dog bit him.</span>
          <span class="vb-ex-pill">Passive: He <em>was bitten</em>.</span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Verb</th><th>V2</th><th>V3 (passive)</th></tr></thead>
          <tbody>
            <tr><td>write</td><td>wrote</td><td>was written</td></tr>
            <tr><td>send</td><td>sent</td><td>was sent</td></tr>
            <tr><td>build</td><td>built</td><td>was built</td></tr>
            <tr><td>make</td><td>made</td><td>was made</td></tr>
            <tr><td>see</td><td>saw</td><td>was seen</td></tr>
            <tr><td>find</td><td>found</td><td>was found</td></tr>
            <tr><td>choose</td><td>chose</td><td>was chosen</td></tr>
            <tr><td>give</td><td>gave</td><td>was given</td></tr>
            <tr><td>teach</td><td>taught</td><td>was taught</td></tr>
            <tr><td>tell</td><td>told</td><td>was told</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Verb + infinitive vs gerund -->
    <div class="vb-card">
      <div class="vb-card-title">
        <span class="vb-form-label vb-form-v1">V1</span>
        Verb + infinitive vs. gerund
      </div>
      <div class="vb-card-body">Some verbs take infinitive (to V1), some take gerund (V-ing). Some change meaning with each.
        <div class="vb-ex-row">
          <span class="vb-ex-pill">want/need + to V</span>
          <span class="vb-ex-pill">enjoy/avoid + V-ing</span>
          <span class="vb-ex-pill">stop to smoke ≠ stop smoking</span>
        </div>
        <table class="vb-form-table">
          <thead><tr><th>Verb</th><th>Followed by</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>want</td><td>to V1</td><td>want to leave</td></tr>
            <tr><td>enjoy</td><td>V-ing</td><td>enjoy reading</td></tr>
            <tr><td>decide</td><td>to V1</td><td>decide to stay</td></tr>
            <tr><td>avoid</td><td>V-ing</td><td>avoid making mistakes</td></tr>
            <tr><td>need</td><td>to V1</td><td>need to study</td></tr>
            <tr><td>finish</td><td>V-ing</td><td>finish writing</td></tr>
            <tr><td>plan</td><td>to V1</td><td>plan to travel</td></tr>
            <tr><td>consider</td><td>V-ing</td><td>consider moving</td></tr>
            <tr><td>stop*</td><td>both</td><td>stop to eat / stop eating</td></tr>
            <tr><td>remember*</td><td>both</td><td>remember to call / remember calling</td></tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
  <!-- V1–V5 Master Reference Table -->
<div class="vb-master-table-wrap">
  <div class="vb-master-table-header">
    <div class="vb-master-table-title">Master Verb Forms Reference</div>
    <div class="vb-master-table-legend">
      <span class="vb-ml vb-form-v1">V1 Base</span>
      <span class="vb-ml vb-form-vs">V2 Past Simple</span>
      <span class="vb-ml vb-form-v3">V3 Past Participle</span>
      <span class="vb-ml vb-form-ving">V4 Present Participle</span>
      <span class="vb-ml vb-form-v5">V5 3rd Person -s</span>
    </div>
  </div>
  <div class="vb-master-table-scroll">
    <table class="vb-master-table">
      <thead>
        <tr>
          <th>Word</th>
          <th><span class="vb-th-badge vb-form-v1">V1</span> Base</th>
          <th><span class="vb-th-badge vb-form-vs">V2</span> Past Simple</th>
          <th><span class="vb-th-badge vb-form-v3">V3</span> Past Participle</th>
          <th><span class="vb-th-badge vb-form-ving">V4</span> Present Participle</th>
          <th><span class="vb-th-badge vb-form-v5">V5</span> 3rd Person -s</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="vb-mt-word">be</td><td>be</td><td>was / were</td><td>been</td><td>being</td><td>is</td></tr>
        <tr><td class="vb-mt-word">have</td><td>have</td><td>had</td><td>had</td><td>having</td><td>has</td></tr>
        <tr><td class="vb-mt-word">do</td><td>do</td><td>did</td><td>done</td><td>doing</td><td>does</td></tr>
        <tr><td class="vb-mt-word">go</td><td>go</td><td>went</td><td>gone</td><td>going</td><td>goes</td></tr>
        <tr><td class="vb-mt-word">make</td><td>make</td><td>made</td><td>made</td><td>making</td><td>makes</td></tr>
        <tr><td class="vb-mt-word">take</td><td>take</td><td>took</td><td>taken</td><td>taking</td><td>takes</td></tr>
        <tr><td class="vb-mt-word">get</td><td>get</td><td>got</td><td>got / gotten</td><td>getting</td><td>gets</td></tr>
        <tr><td class="vb-mt-word">give</td><td>give</td><td>gave</td><td>given</td><td>giving</td><td>gives</td></tr>
        <tr><td class="vb-mt-word">know</td><td>know</td><td>knew</td><td>known</td><td>knowing</td><td>knows</td></tr>
        <tr><td class="vb-mt-word">think</td><td>think</td><td>thought</td><td>thought</td><td>thinking</td><td>thinks</td></tr>
        <tr><td class="vb-mt-word">see</td><td>see</td><td>saw</td><td>seen</td><td>seeing</td><td>sees</td></tr>
        <tr><td class="vb-mt-word">come</td><td>come</td><td>came</td><td>come</td><td>coming</td><td>comes</td></tr>
        <tr><td class="vb-mt-word">say</td><td>say</td><td>said</td><td>said</td><td>saying</td><td>says</td></tr>
        <tr><td class="vb-mt-word">write</td><td>write</td><td>wrote</td><td>written</td><td>writing</td><td>writes</td></tr>
        <tr><td class="vb-mt-word">speak</td><td>speak</td><td>spoke</td><td>spoken</td><td>speaking</td><td>speaks</td></tr>
        <tr><td class="vb-mt-word">read</td><td>read</td><td>read</td><td>read</td><td>reading</td><td>reads</td></tr>
        <tr><td class="vb-mt-word">run</td><td>run</td><td>ran</td><td>run</td><td>running</td><td>runs</td></tr>
        <tr><td class="vb-mt-word">eat</td><td>eat</td><td>ate</td><td>eaten</td><td>eating</td><td>eats</td></tr>
        <tr><td class="vb-mt-word">find</td><td>find</td><td>found</td><td>found</td><td>finding</td><td>finds</td></tr>
        <tr><td class="vb-mt-word">tell</td><td>tell</td><td>told</td><td>told</td><td>telling</td><td>tells</td></tr>
        <tr><td class="vb-mt-word">buy</td><td>buy</td><td>bought</td><td>bought</td><td>buying</td><td>buys</td></tr>
        <tr><td class="vb-mt-word">send</td><td>send</td><td>sent</td><td>sent</td><td>sending</td><td>sends</td></tr>
        <tr><td class="vb-mt-word">bring</td><td>bring</td><td>brought</td><td>brought</td><td>bringing</td><td>brings</td></tr>
        <tr><td class="vb-mt-word">build</td><td>build</td><td>built</td><td>built</td><td>building</td><td>builds</td></tr>
        <tr><td class="vb-mt-word">break</td><td>break</td><td>broke</td><td>broken</td><td>breaking</td><td>breaks</td></tr>
        <tr><td class="vb-mt-word">begin</td><td>begin</td><td>began</td><td>begun</td><td>beginning</td><td>begins</td></tr>
        <tr><td class="vb-mt-word">choose</td><td>choose</td><td>chose</td><td>chosen</td><td>choosing</td><td>chooses</td></tr>
        <tr><td class="vb-mt-word">teach</td><td>teach</td><td>taught</td><td>taught</td><td>teaching</td><td>teaches</td></tr>
        <tr><td class="vb-mt-word">learn</td><td>learn</td><td>learned</td><td>learned</td><td>learning</td><td>learns</td></tr>
        <tr><td class="vb-mt-word">walk</td><td>walk</td><td>walked</td><td>walked</td><td>walking</td><td>walks</td></tr>
        <tr><td class="vb-mt-word">show</td><td>show</td><td>showed</td><td>shown</td><td>showing</td><td>shows</td></tr>
        <tr><td class="vb-mt-word">keep</td><td>keep</td><td>kept</td><td>kept</td><td>keeping</td><td>keeps</td></tr>
        <tr><td class="vb-mt-word">leave</td><td>leave</td><td>left</td><td>left</td><td>leaving</td><td>leaves</td></tr>
        <tr><td class="vb-mt-word">meet</td><td>meet</td><td>met</td><td>met</td><td>meeting</td><td>meets</td></tr>
        <tr><td class="vb-mt-word">feel</td><td>feel</td><td>felt</td><td>felt</td><td>feeling</td><td>feels</td></tr>
        <tr><td class="vb-mt-word">pay</td><td>pay</td><td>paid</td><td>paid</td><td>paying</td><td>pays</td></tr>
        <tr><td class="vb-mt-word">sit</td><td>sit</td><td>sat</td><td>sat</td><td>sitting</td><td>sits</td></tr>
        <tr><td class="vb-mt-word">stand</td><td>stand</td><td>stood</td><td>stood</td><td>standing</td><td>stands</td></tr>
        <tr><td class="vb-mt-word">lose</td><td>lose</td><td>lost</td><td>lost</td><td>losing</td><td>loses</td></tr>
        <tr><td class="vb-mt-word">win</td><td>win</td><td>won</td><td>won</td><td>winning</td><td>wins</td></tr>
        <tr><td class="vb-mt-word">fall</td><td>fall</td><td>fell</td><td>fallen</td><td>falling</td><td>falls</td></tr>
        <tr><td class="vb-mt-word">hold</td><td>hold</td><td>held</td><td>held</td><td>holding</td><td>holds</td></tr>
        <tr><td class="vb-mt-word">cut</td><td>cut</td><td>cut</td><td>cut</td><td>cutting</td><td>cuts</td></tr>
        <tr><td class="vb-mt-word">put</td><td>put</td><td>put</td><td>put</td><td>putting</td><td>puts</td></tr>
        <tr><td class="vb-mt-word">set</td><td>set</td><td>set</td><td>set</td><td>setting</td><td>sets</td></tr>
        <tr><td class="vb-mt-word">hit</td><td>hit</td><td>hit</td><td>hit</td><td>hitting</td><td>hits</td></tr>
        <tr><td class="vb-mt-word">forget</td><td>forget</td><td>forgot</td><td>forgotten</td><td>forgetting</td><td>forgets</td></tr>
        <tr><td class="vb-mt-word">grow</td><td>grow</td><td>grew</td><td>grown</td><td>growing</td><td>grows</td></tr>
        <tr><td class="vb-mt-word">throw</td><td>throw</td><td>threw</td><td>thrown</td><td>throwing</td><td>throws</td></tr>
        <tr><td class="vb-mt-word">drive</td><td>drive</td><td>drove</td><td>driven</td><td>driving</td><td>drives</td></tr>
      </tbody>
    </table>
  </div>
</div>
  <div class="vb-tip"><strong>Quick reference:</strong> V1 = base form · V2 = past simple · V3 = past participle · V-ing = present participle / gerund. Regular verbs: V2 = V3 = V1 + <em>-ed</em>. Irregular verbs: V2 and V3 must be memorized.</div>
</div>

    
    <!-- MODAL PANEL -->
<!-- MODAL PANEL -->
<div id="vb-modal" class="vb-panel">
  <style>
    /* ── Modal Map ── */
    .mod-wrap { display: flex; flex-direction: column; gap: 2rem; }

    /* Spectrum bar */
    .mod-spectrum { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.25rem 1.5rem; }
    .mod-spectrum-title { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af; margin-bottom: 1rem; }
    .mod-spectrum-row { display: flex; flex-direction: column; gap: 0.85rem; }
    .mod-spectrum-group { display: flex; align-items: center; gap: 12px; }
    .mod-spectrum-label { font-size: 11px; font-weight: 600; color: #6b7280; width: 90px; flex-shrink: 0; text-align: right; }
    .mod-spectrum-pills { display: flex; flex-wrap: wrap; gap: 6px; }
    .mod-spectrum-pill { font-size: 12px; font-weight: 700; padding: 4px 14px; border-radius: 20px; cursor: pointer; border: 2px solid transparent; transition: all 0.15s; }
    .mod-spectrum-pill:hover { transform: translateY(-1px); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .mod-spectrum-pill.mod-selected { border-color: #111827; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transform: translateY(-1px); }

    /* Meaning tags row */
    .mod-meaning-row { display: flex; flex-wrap: wrap; gap: 6px; margin: 0.5rem 0 0.75rem; }
    .mod-meaning-tag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }

    /* Detail card */
    .mod-detail { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; }
    .mod-detail-head { padding: 1.1rem 1.5rem 1rem; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .mod-detail-word { font-size: 32px; font-weight: 800; color: #111827; line-height: 1; }
    .mod-detail-neg { font-size: 12px; color: #6b7280; margin-top: 6px; }
    .mod-detail-neg strong { color: #dc2626; }
    .mod-detail-body { padding: 0 1.5rem 1.25rem; }
    .mod-detail-note { font-size: 12.5px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 8px 12px; line-height: 1.6; margin-bottom: 1rem; }
    .mod-detail-exs { display: flex; flex-direction: column; gap: 6px; }
    .mod-detail-ex { font-size: 13px; color: #374151; background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 8px; padding: 7px 12px; line-height: 1.55; }
    .mod-detail-ex em { color: #2563eb; font-style: normal; font-weight: 700; }

    /* Matrix table */
    .mod-matrix-wrap { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; }
    .mod-matrix-title { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af; padding: 1rem 1.25rem 0.75rem; border-bottom: 1px solid #f3f4f6; }
    .mod-matrix-scroll { overflow-x: auto; }
    .mod-matrix { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 560px; }
    .mod-matrix th { background: #f9fafb; padding: 8px 12px; text-align: left; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600; white-space: nowrap; }
    .mod-matrix th:first-child { color: #111827; }
    .mod-matrix td { padding: 7px 12px; border-bottom: 1px solid #f9fafb; vertical-align: middle; }
    .mod-matrix tbody tr:last-child td { border-bottom: none; }
    .mod-matrix tbody tr:hover td { background: #f9fafb; }
    .mod-matrix td:first-child { font-weight: 700; color: #111827; font-size: 13px; }
    .mod-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
    .mod-dot-yes { background: #16a34a; }
    .mod-dot-no  { background: #e5e7eb; }
    .mod-dot-partial { background: #f59e0b; }

    /* Certainty meter */
    .mod-cert-wrap { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1.25rem 1.5rem; }
    .mod-cert-title { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af; margin-bottom: 1.1rem; }
    .mod-cert-row { display: flex; align-items: center; gap: 12px; margin-bottom: 0.6rem; }
    .mod-cert-label { font-size: 12px; font-weight: 700; color: #111827; width: 72px; flex-shrink: 0; }
    .mod-cert-bar-wrap { flex: 1; height: 10px; background: #f3f4f6; border-radius: 10px; overflow: hidden; }
    .mod-cert-bar { height: 100%; border-radius: 10px; transition: width 0.4s; }
    .mod-cert-pct { font-size: 11px; color: #9ca3af; width: 36px; text-align: right; flex-shrink: 0; }
    .mod-cert-caption { font-size: 11px; color: #9ca3af; width: 120px; flex-shrink: 0; font-style: italic; }

    @media (max-width: 600px) {
      .mod-spectrum-label { width: 70px; font-size: 10px; }
      .mod-detail-word { font-size: 24px; }
      .mod-cert-caption { display: none; }
    }
  </style>

  <div class="mod-wrap">

    <!-- ① Spectrum selector -->
    <div class="mod-spectrum">
      <div class="mod-spectrum-title">Select a modal to explore</div>
      <div class="mod-spectrum-row">
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Ability</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#dbeafe;color:#1e40af" data-modal="can">can</button>
            <button class="mod-spectrum-pill" style="background:#dbeafe;color:#1e40af" data-modal="could">could</button>
          </div>
        </div>
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Permission</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#dcfce7;color:#166534" data-modal="can">can</button>
            <button class="mod-spectrum-pill" style="background:#dcfce7;color:#166534" data-modal="may">may</button>
            <button class="mod-spectrum-pill" style="background:#dcfce7;color:#166534" data-modal="could">could</button>
          </div>
        </div>
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Possibility</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#fef3c7;color:#92400e" data-modal="may">may</button>
            <button class="mod-spectrum-pill" style="background:#fef3c7;color:#92400e" data-modal="might">might</button>
            <button class="mod-spectrum-pill" style="background:#fef3c7;color:#92400e" data-modal="could">could</button>
            <button class="mod-spectrum-pill" style="background:#fef3c7;color:#92400e" data-modal="can">can</button>
          </div>
        </div>
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Obligation</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#fee2e2;color:#991b1b" data-modal="must">must</button>
            <button class="mod-spectrum-pill" style="background:#fee2e2;color:#991b1b" data-modal="should">should</button>
            <button class="mod-spectrum-pill" style="background:#fee2e2;color:#991b1b" data-modal="ought to">ought to</button>
          </div>
        </div>
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Future</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#ede9fe;color:#5b21b6" data-modal="will">will</button>
            <button class="mod-spectrum-pill" style="background:#ede9fe;color:#5b21b6" data-modal="shall">shall</button>
            <button class="mod-spectrum-pill" style="background:#ede9fe;color:#5b21b6" data-modal="would">would</button>
          </div>
        </div>
        <div class="mod-spectrum-group">
          <div class="mod-spectrum-label">Polite / Formal</div>
          <div class="mod-spectrum-pills">
            <button class="mod-spectrum-pill" style="background:#fce7f3;color:#9d174d" data-modal="would">would</button>
            <button class="mod-spectrum-pill" style="background:#fce7f3;color:#9d174d" data-modal="could">could</button>
            <button class="mod-spectrum-pill" style="background:#fce7f3;color:#9d174d" data-modal="may">may</button>
            <button class="mod-spectrum-pill" style="background:#fce7f3;color:#9d174d" data-modal="shall">shall</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ② Detail card (rendered by JS) -->
    <div class="mod-detail" id="mod-detail-card">
      <div class="mod-detail-head">
        <div>
          <div class="mod-detail-word" id="mod-dw">can</div>
          <div class="mod-meaning-row" id="mod-dm"></div>
          <div class="mod-detail-neg" id="mod-dn"></div>
        </div>
      </div>
      <div class="mod-detail-body">
        <div class="mod-detail-note" id="mod-note"></div>
        <div class="mod-detail-exs" id="mod-exs"></div>
      </div>
    </div>

    <!-- ③ Certainty spectrum -->
    <div class="mod-cert-wrap">
      <div class="mod-cert-title">Possibility & Certainty Spectrum</div>
      <div id="mod-cert-bars"></div>
    </div>

    <!-- ④ Feature matrix -->
    <div class="mod-matrix-wrap">
      <div class="mod-matrix-title">Modal Features at a Glance</div>
      <div class="mod-matrix-scroll">
        <table class="mod-matrix">
          <thead>
            <tr>
              <th>Modal</th>
              <th>Ability</th>
              <th>Permission</th>
              <th>Possibility</th>
              <th>Obligation</th>
              <th>Future</th>
              <th>Polite</th>
              <th>Past form</th>
            </tr>
          </thead>
          <tbody id="mod-matrix-body"></tbody>
        </table>
      </div>
    </div>

  </div>
</div>

    <!-- PHRASAL PANEL -->
    <div id="vb-phrasal" class="vb-panel">
      <p style="font-size:14px;color:#6b7280;margin-bottom:1rem;line-height:1.6;">Phrasal verbs = verb + particle (preposition or adverb). The meaning is often completely different from the individual words. Click any card to see usage.</p>
      <div id="vb-phrasal-list"></div>
    </div>

    <!-- IRREGULAR PANEL -->
    <div id="vb-irregular" class="vb-panel">
      <p style="font-size:14px;color:#6b7280;margin-bottom:1rem;line-height:1.6;">Irregular verbs don't follow the -ed rule. Filter by pattern to learn them in groups.</p>
      <div class="vb-irreg-filter" id="vb-irreg-filters"></div>
      <div style="overflow-x:auto;">
        <table class="vb-irreg-table">
          <thead><tr><th>Base</th><th>Past simple(V2)</th><th>Past participle(V3)</th><th>Pattern</th></tr></thead>
          <tbody id="vb-irreg-body"></tbody>
        </table>
      </div>
    </div>

    <!-- FILL-IN PANEL -->
    <div id="vb-fillin" class="vb-panel">
      <div class="vb-nav-row">
        <button class="vb-nav-btn" id="vb-fill-prev" onclick="vbMoveFill(-1)" disabled>← prev</button>
        <span style="font-size:13px;color:#6b7280;" id="vb-fill-counter"></span>
        <button class="vb-nav-btn" id="vb-fill-next" onclick="vbMoveFill(1)">next →</button>
      </div>
      <div class="vb-fill-box">
        <div class="vb-fill-sentence" id="vb-fill-sentence"></div>
        <div class="vb-fill-opts" id="vb-fill-opts"></div>
        <div class="vb-fill-feedback" id="vb-fill-feedback"></div>
      </div>
      <div class="vb-fill-explain" id="vb-fill-explain" style="display:none;"></div>
    </div>

    <!-- QUIZ PANEL -->
    <div id="vb-quiz" class="vb-panel">
      <div class="vb-quiz-progress"><div class="vb-quiz-fill" id="vb-quiz-fill" style="width:0%"></div></div>
      <div id="vb-quiz-area"></div>
    </div>
  `;
      // ── Modals interactive UI ──────────────────────────────────────────────
      const MODAL_META = {
        can: {
          ability: true,
          permission: true,
          possibility: true,
          obligation: false,
          future: false,
          polite: false,
          past: "could",
          certainty: 40,
          certLabel: "possible",
          certColor: "#60a5fa",
        },
        could: {
          ability: true,
          permission: true,
          possibility: true,
          obligation: false,
          future: false,
          polite: true,
          past: "—",
          certainty: 25,
          certLabel: "weak possibility",
          certColor: "#93c5fd",
        },
        may: {
          ability: false,
          permission: true,
          possibility: true,
          obligation: false,
          future: false,
          polite: true,
          past: "might",
          certainty: 50,
          certLabel: "50/50",
          certColor: "#fbbf24",
        },
        might: {
          ability: false,
          permission: false,
          possibility: true,
          obligation: false,
          future: false,
          polite: false,
          past: "—",
          certainty: 20,
          certLabel: "unlikely",
          certColor: "#d1d5db",
        },
        must: {
          ability: false,
          permission: false,
          possibility: false,
          obligation: true,
          future: false,
          polite: false,
          past: "had to",
          certainty: 95,
          certLabel: "near certain",
          certColor: "#f87171",
        },
        should: {
          ability: false,
          permission: false,
          possibility: false,
          obligation: true,
          future: false,
          polite: false,
          past: "should have",
          certainty: 70,
          certLabel: "expected",
          certColor: "#fb923c",
        },
        will: {
          ability: false,
          permission: false,
          possibility: false,
          obligation: false,
          future: true,
          polite: false,
          past: "would",
          certainty: 90,
          certLabel: "very likely",
          certColor: "#ef4444",
        },
        would: {
          ability: false,
          permission: false,
          possibility: false,
          obligation: false,
          future: true,
          polite: true,
          past: "—",
          certainty: 55,
          certLabel: "conditional",
          certColor: "#a78bfa",
        },
        shall: {
          ability: false,
          permission: false,
          possibility: false,
          obligation: false,
          future: true,
          polite: true,
          past: "—",
          certainty: 85,
          certLabel: "formal future",
          certColor: "#c4b5fd",
        },
        "ought to": {
          ability: false,
          permission: false,
          possibility: false,
          obligation: true,
          future: false,
          polite: false,
          past: "ought to have",
          certainty: 65,
          certLabel: "moral duty",
          certColor: "#fdba74",
        },
      };

      const MEANING_COLORS = {
        "Ability (present)": { bg: "#dbeafe", c: "#1e40af" },
        "Past ability": { bg: "#dbeafe", c: "#1e40af" },
        "Permission (informal)": { bg: "#dcfce7", c: "#166534" },
        "Formal permission": { bg: "#dcfce7", c: "#166534" },
        Possibility: { bg: "#fef3c7", c: "#92400e" },
        "Weak possibility (< 50%)": { bg: "#fef3c7", c: "#92400e" },
        "Strong obligation": { bg: "#fee2e2", c: "#991b1b" },
        "Logical deduction (certainty)": { bg: "#fee2e2", c: "#991b1b" },
        "Advice / recommendation": { bg: "#ffedd5", c: "#9a3412" },
        "Mild obligation": { bg: "#ffedd5", c: "#9a3412" },
        Expectation: { bg: "#ffedd5", c: "#9a3412" },
        "Future fact / prediction": { bg: "#ede9fe", c: "#5b21b6" },
        Promise: { bg: "#ede9fe", c: "#5b21b6" },
        "Spontaneous decision": { bg: "#ede9fe", c: "#5b21b6" },
        Conditional: { bg: "#fce7f3", c: "#9d174d" },
        "Polite request": { bg: "#fce7f3", c: "#9d174d" },
        "Polite suggestion": { bg: "#fce7f3", c: "#9d174d" },
        "Past habit": { bg: "#f3f4f6", c: "#374151" },
        Wish: { bg: "#f3f4f6", c: "#374151" },
        "Formal future (I/we)": { bg: "#ede9fe", c: "#5b21b6" },
        Offer: { bg: "#dcfce7", c: "#166534" },
        Suggestion: { bg: "#fce7f3", c: "#9d174d" },
        "Moral duty / advice": { bg: "#ffedd5", c: "#9a3412" },
      };

      function dot(yes) {
        if (yes === "partial")
          return `<span class="mod-dot mod-dot-partial" title="sometimes"></span>`;
        return yes
          ? `<span class="mod-dot mod-dot-yes" title="yes"></span>`
          : `<span class="mod-dot mod-dot-no"  title="no"></span>`;
      }

      function modRender(modalWord) {
        const data = MODALS.find((m) => m.modal === modalWord);
        if (!data) return;
        const meta = MODAL_META[modalWord];

        document.getElementById("mod-dw").textContent = data.modal;
        document.getElementById("mod-dn").innerHTML =
          `<strong>Negative:</strong> ${data.negative}`;
        document.getElementById("mod-note").textContent = data.note;

        document.getElementById("mod-dm").innerHTML = data.meanings
          .map((m) => {
            const c = MEANING_COLORS[m] || { bg: "#f3f4f6", c: "#374151" };
            return `<span class="mod-meaning-tag" style="background:${c.bg};color:${c.c}">${m}</span>`;
          })
          .join("");

        document.getElementById("mod-exs").innerHTML = data.examples
          .map((e) => `<div class="mod-detail-ex">${e}</div>`)
          .join("");

        // highlight selected pill
        document.querySelectorAll(".mod-spectrum-pill").forEach((p) => {
          p.classList.toggle("mod-selected", p.dataset.modal === modalWord);
        });
      }

      function modBuildCertBars() {
        const ORDER = [
          "must",
          "will",
          "shall",
          "should",
          "ought to",
          "would",
          "may",
          "can",
          "could",
          "might",
        ];
        const bars = document.getElementById("mod-cert-bars");
        bars.innerHTML = ORDER.map((m) => {
          const meta = MODAL_META[m];
          return `
      <div class="mod-cert-row">
        <div class="mod-cert-label">${m}</div>
        <div class="mod-cert-bar-wrap">
          <div class="mod-cert-bar" style="width:${meta.certainty}%;background:${meta.certColor}"></div>
        </div>
        <div class="mod-cert-pct">${meta.certainty}%</div>
        <div class="mod-cert-caption">${meta.certLabel}</div>
      </div>
    `;
        }).join("");
      }

      function modBuildMatrix() {
        const body = document.getElementById("mod-matrix-body");
        body.innerHTML = MODALS.map((d) => {
          const m = MODAL_META[d.modal];
          return `
      <tr>
        <td>${d.modal}</td>
        <td>${dot(m.ability)}</td>
        <td>${dot(m.permission)}</td>
        <td>${dot(m.possibility)}</td>
        <td>${dot(m.obligation)}</td>
        <td>${dot(m.future)}</td>
        <td>${dot(m.polite)}</td>
        <td style="font-size:11px;color:#6b7280">${m.past}</td>
      </tr>
    `;
        }).join("");
      }

      // wire up pill clicks
      document.querySelectorAll(".mod-spectrum-pill").forEach((pill) => {
        pill.addEventListener("click", () => modRender(pill.dataset.modal));
      });

      // initialise
      modRender("can");
      modBuildCertBars();
      modBuildMatrix();

      // ── Panel switching ────────────────────────────────────────────────────
      window.vbShowPanel = function (id) {
        document
          .querySelectorAll(".vb-panel")
          .forEach((p) => p.classList.remove("vb-active"));
        document
          .querySelectorAll(".vb-tab")
          .forEach((t) => t.classList.remove("vb-active"));
        document.getElementById(id).classList.add("vb-active");
        const ids = [
          "vb-types",
          "vb-tenses",
          "vb-forms",
          "vb-modal",
          "vb-phrasal",
          "vb-irregular",
          "vb-fillin",
          "vb-quiz",
        ];
        const idx = ids.indexOf(id);
        document.querySelectorAll(".vb-tab")[idx].classList.add("vb-active");
        if (id === "vb-tenses" && !window._vbTenseInit) initVbTenses();
        if (id === "vb-modal" && !window._vbModalInit) initVbModal();
        if (id === "vb-phrasal" && !window._vbPhrasalInit) initVbPhrusal();
        if (id === "vb-irregular" && !window._vbIrregInit) initVbIrreg();
        if (id === "vb-fillin" && !window._vbFillInit) initVbFill();
        if (id === "vb-quiz" && !window._vbQuizInit) initVbQuiz();
      };

      // ── Tenses panel ───────────────────────────────────────────────────────
      function initVbTenses() {
        window._vbTenseInit = true;

        const GROUP_COLORS = {
          "Simple tenses": {
            badge: "#dbeafe",
            badgeText: "#1e40af",
            border: "#bfdbfe",
            header: "#eff6ff",
          },
          "Continuous tenses": {
            badge: "#dcfce7",
            badgeText: "#166534",
            border: "#86efac",
            header: "#f0fdf4",
          },
          "Perfect tenses": {
            badge: "#fef3c7",
            badgeText: "#92400e",
            border: "#fde68a",
            header: "#fffbeb",
          },
          "Perfect continuous": {
            badge: "#ede9fe",
            badgeText: "#5b21b6",
            border: "#c4b5fd",
            header: "#faf5ff",
          },
        };

        // Group tenses
        const groups = {};
        TENSES.forEach((t) => {
          if (!groups[t.group]) groups[t.group] = [];
          groups[t.group].push(t);
        });

        const container = document.getElementById("vb-tenses-all");
        container.innerHTML = `
    <style>
      .vbt-group { margin-bottom: 2rem; }
      .vbt-group-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .vbt-group-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .vbt-group-count { font-size: 12px; color: #9ca3af; }
      .vbt-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 0.85rem; }
      .vbt-card { border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; background: #fff; }
      .vbt-card-head { padding: 0.75rem 1rem 0.6rem; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
      .vbt-card-name { font-size: 14px; font-weight: 700; color: #111827; line-height: 1.3; }
      .vbt-card-form { font-size: 11px; font-family: monospace; font-weight: 600; padding: 2px 8px; border-radius: 6px; white-space: nowrap; flex-shrink: 0; }
      .vbt-card-body { padding: 0 1rem 0.85rem; }
      .vbt-card-use { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .vbt-card-signal { font-size: 11px; color: #9ca3af; margin-bottom: 0.6rem; }
      .vbt-card-signal strong { color: #6b7280; }
      .vbt-card-exs { display: flex; flex-direction: column; gap: 4px; }
      .vbt-card-ex { font-size: 12px; color: #374151; background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 6px; padding: 4px 9px; line-height: 1.5; }
      .vbt-card-ex em { color: #2563eb; font-style: normal; font-weight: 600; }
      @media (max-width: 600px) { .vbt-grid { grid-template-columns: 1fr; } }
    </style>
    ${Object.entries(groups)
      .map(([groupName, tenses]) => {
        const c = GROUP_COLORS[groupName] || {
          badge: "#f3f4f6",
          badgeText: "#374151",
          border: "#e5e7eb",
          header: "#f9fafb",
        };
        return `
        <div class="vbt-group">
          <div class="vbt-group-header">
            <span class="vbt-group-badge" style="background:${c.badge};color:${c.badgeText}">${groupName}</span>
            <span class="vbt-group-count">${tenses.length} tense${tenses.length > 1 ? "s" : ""}</span>
          </div>
          <div class="vbt-grid">
            ${tenses
              .map(
                (t) => `
              <div class="vbt-card" style="border-color:${c.border}">
                <div class="vbt-card-head" style="background:${c.header}">
                  <div class="vbt-card-name">${t.name}</div>
                  <span class="vbt-card-form" style="background:${c.badge};color:${c.badgeText}">${t.form}</span>
                </div>
                <div class="vbt-card-body">
                  <div class="vbt-card-use">${t.use}</div>
                  <div class="vbt-card-signal"><strong>Signal words:</strong> ${t.signal}</div>
                  <div class="vbt-card-exs">
                    ${t.examples.map((e) => `<div class="vbt-card-ex">${e}</div>`).join("")}
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
      })
      .join("")}
  `;
      }

      // ── Modal panel ────────────────────────────────────────────────────────
      function initVbModal() {
        if (window._vbModalInit) return;
        window._vbModalInit = true;

        document.querySelectorAll(".mod-spectrum-pill").forEach((pill) => {
          pill.addEventListener("click", () => modRender(pill.dataset.modal));
        });

        modRender("can");
        modBuildCertBars();
        modBuildMatrix();
      }
      // ── Phrasal panel ──────────────────────────────────────────────────────
      function initVbPhrusal() {
        window._vbPhrasalInit = true;
        const list = document.getElementById("vb-phrasal-list");
        PHRASAL.forEach((p, i) => {
          const card = document.createElement("div");
          card.className = "vb-card";
          card.style.cursor = "pointer";
          card.innerHTML = `
        <div class="vb-card-title">
          <span class="vb-badge vb-badge-phrase">${p.verb}</span>
          <span style="font-size:13px;font-weight:400;color:#6b7280;">${p.meaning}</span>
          <span style="margin-left:auto;font-size:11px;color:#9ca3af;">${p.separable ? "separable" : "inseparable"}</span>
        </div>
        <div id="vb-phrasal-ex-${i}" style="display:none">
          <div class="vb-ex-row">
            ${p.examples.map((e) => `<span class="vb-ex-pill">${e}</span>`).join("")}
          </div>
        </div>
        <div class="vb-trap-hint" id="vb-phrasal-hint-${i}" style="font-size:12px;color:#9ca3af;margin-top:4px;">tap for examples →</div>
      `;
          card.onclick = () => {
            const ex = document.getElementById(`vb-phrasal-ex-${i}`);
            const hint = document.getElementById(`vb-phrasal-hint-${i}`);
            const shown = ex.style.display !== "none";
            ex.style.display = shown ? "none" : "block";
            hint.style.display = shown ? "block" : "none";
          };
          list.appendChild(card);
        });
      }

      // ── Irregular panel ────────────────────────────────────────────────────
      function initVbIrreg() {
        window._vbIrregInit = true;
        const patterns = ["all", ...new Set(IRREGULAR.map((r) => r.pattern))];
        const filters = document.getElementById("vb-irreg-filters");
        patterns.forEach((p) => {
          const btn = document.createElement("button");
          btn.className =
            "vb-irreg-filter-btn" + (p === "all" ? " vb-filter-active" : "");
          btn.textContent = p === "all" ? "All" : p;
          btn.onclick = () => {
            document
              .querySelectorAll(".vb-irreg-filter-btn")
              .forEach((b) => b.classList.remove("vb-filter-active"));
            btn.classList.add("vb-filter-active");
            vbRenderIrreg(p);
          };
          filters.appendChild(btn);
        });
        vbRenderIrreg("all");
      }
      function vbRenderIrreg(filter) {
        const rows =
          filter === "all"
            ? IRREGULAR
            : IRREGULAR.filter((r) => r.pattern === filter);
        document.getElementById("vb-irreg-body").innerHTML = rows
          .map(
            (r) => `
      <tr>
        <td><strong>${r.base}</strong></td>
        <td>${r.past}</td>
        <td>${r.pp}</td>
        <td><span style="font-size:11px;background:#f3f4f6;border-radius:4px;padding:2px 6px;color:#374151;">${r.pattern}</span></td>
      </tr>
    `,
          )
          .join("");
      }

      // ── Fill-in panel ──────────────────────────────────────────────────────
      let vbFI = 0,
        vbFAnswered = false;
      function initVbFill() {
        window._vbFillInit = true;
        vbRenderFill();
      }
      function vbRenderFill() {
        vbFAnswered = false;
        const s = FILL_SENTENCES[vbFI];
        document.getElementById("vb-fill-counter").textContent =
          `${vbFI + 1} of ${FILL_SENTENCES.length}`;
        document.getElementById("vb-fill-prev").disabled = vbFI === 0;
        document.getElementById("vb-fill-next").disabled =
          vbFI === FILL_SENTENCES.length - 1;
        document.getElementById("vb-fill-feedback").textContent = "";
        document.getElementById("vb-fill-feedback").className =
          "vb-fill-feedback";
        document.getElementById("vb-fill-explain").style.display = "none";
        document.getElementById("vb-fill-sentence").innerHTML =
          `${s.before} <span class="vb-fill-blank" id="vb-fill-blank">___</span> ${s.after}`;
        const opts = document.getElementById("vb-fill-opts");
        opts.innerHTML = "";
        s.options.forEach((opt) => {
          const btn = document.createElement("button");
          btn.className = "vb-fill-opt";
          btn.textContent = opt;
          btn.onclick = () => vbCheckFill(opt, btn);
          opts.appendChild(btn);
        });
      }
      function vbCheckFill(chosen, btn) {
        if (vbFAnswered) return;
        vbFAnswered = true;
        const s = FILL_SENTENCES[vbFI];
        const isRight = chosen === s.answer;
        document.querySelectorAll(".vb-fill-opt").forEach((b) => {
          b.disabled = true;
          if (b.textContent === s.answer) b.classList.add("vb-correct");
        });
        if (isRight) {
          btn.classList.add("vb-correct");
          document.getElementById("vb-fill-feedback").textContent =
            "✓ Correct!";
          document.getElementById("vb-fill-feedback").className =
            "vb-fill-feedback vb-ok";
          document.getElementById("vb-fill-blank").textContent = s.answer;
          document.getElementById("vb-fill-blank").style.color = "#16a34a";
        } else {
          btn.classList.add("vb-wrong");
          document.getElementById("vb-fill-feedback").textContent =
            "✗ Not quite.";
          document.getElementById("vb-fill-feedback").className =
            "vb-fill-feedback vb-err";
        }
        const ex = document.getElementById("vb-fill-explain");
        ex.innerHTML = s.explain;
        ex.style.display = "block";
      }
      window.vbMoveFill = function (dir) {
        vbFI = Math.max(0, Math.min(FILL_SENTENCES.length - 1, vbFI + dir));
        vbRenderFill();
      };

      // ── Quiz panel ─────────────────────────────────────────────────────────
      let vbQI = 0,
        vbQScore = 0,
        vbQAnswered = false;
      function initVbQuiz() {
        window._vbQuizInit = true;
        vbQI = 0;
        vbQScore = 0;
        vbRenderQuiz();
      }
      function vbRenderQuiz() {
        vbQAnswered = false;
        document.getElementById("vb-quiz-fill").style.width =
          (vbQI / QUIZ_QS.length) * 100 + "%";
        if (vbQI >= QUIZ_QS.length) {
          document.getElementById("vb-quiz-area").innerHTML = `
        <div class="vb-score-box">
          <div class="vb-score-num">${vbQScore}/${QUIZ_QS.length}</div>
          <div class="vb-score-label">${vbQScore === QUIZ_QS.length ? "Perfect score! 🎉" : vbQScore >= 9 ? "Excellent work!" : vbQScore >= 7 ? "Good effort — review the tenses!" : "Keep practising — you'll get there!"}</div>
          <button class="vb-nav-btn" style="margin-top:1.5rem;" onclick="vbRestartQuiz()">Try again</button>
        </div>`;
          document.getElementById("vb-quiz-fill").style.width = "100%";
          return;
        }
        const q = QUIZ_QS[vbQI];
        let html = `<div class="vb-quiz-q">${vbQI + 1}. ${q.q}</div><div class="vb-quiz-opts">`;
        q.opts.forEach((o, i) => {
          html += `<button class="vb-quiz-opt" onclick="vbAnswerQuiz(${i}, this)">${o}</button>`;
        });
        html += `</div><div class="vb-quiz-exp" id="vb-quiz-exp">${q.exp}</div>`;
        document.getElementById("vb-quiz-area").innerHTML = html;
      }
      window.vbAnswerQuiz = function (chosen, btn) {
        if (vbQAnswered) return;
        vbQAnswered = true;
        const q = QUIZ_QS[vbQI];
        document.querySelectorAll(".vb-quiz-opt").forEach((b, i) => {
          b.disabled = true;
          if (i === q.ans) b.classList.add("vb-correct");
        });
        if (chosen === q.ans) {
          vbQScore++;
        } else {
          btn.classList.add("vb-wrong");
        }
        document.getElementById("vb-quiz-exp").style.display = "block";
        setTimeout(() => {
          vbQI++;
          vbRenderQuiz();
        }, 1900);
      };
      window.vbRestartQuiz = function () {
        vbQI = 0;
        vbQScore = 0;
        window._vbQuizInit = false;
        initVbQuiz();
      };
    }

    function renderEmotions() {
      const content = document.getElementById("emotions-content");
      content.innerHTML = EMOTIONS.map(
        (group) => `
            <section>
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
      ).join("");
    }

    // ─── Event Listeners ────────────────────────────────────────────────
    // Tab switching
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
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

    // Initialize
    renderWordList();
    renderEmotions();
    renderSentenceStructure();
    renderArticles();
    renderNounsPronouns();
    renderCollocations();
    renderVerbs();
    renderPrepositions();
    renderConjunctions();
    renderIdioms();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Build Your English
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
            Grammar &amp; Vocabulary{" "}
            <span className="hero-line italic">Bank</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Master words, grammar rules, and sentence structures for every
            CELPIP task. Review concepts or test yourself with interactive
            practice.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Tab buttons */}
        <div className="mb-8">
          {/* Vocabulary group */}
          <div className="mb-1">
            <p className="text-xs font-semibold tracking-widest text-slate uppercase mb-2 px-1">
              Vocabulary
            </p>
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

          <div className="my-4 border-t border-mist" />

          {/* Grammar group */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate uppercase mb-2 px-1">
              Grammar
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="sentence-structure"
              >
                Sentence Structure
              </button>
              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="nouns-pronouns"
              >
                Nouns & Pronouns
              </button>
              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="articles"
              >
                Articles
              </button>
              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="conjunctions"
              >
                Conjunctions
              </button>
              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="prepositions"
              >
                Prepositions
              </button>

              <button
                className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                data-tab="verbs"
              >
                Verbs
              </button>
            </div>
          </div>
        </div>

        {/* Word List Tab */}
        <div id="word-list" className="tab-content hidden">
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

        {/* Idioms Tab */}
        <div id="idioms" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Master common English{" "}
              <span className="font-semibold text-sapphire-dark">idioms</span> —
              fixed expressions whose meanings cannot be guessed from the
              individual words. Understanding idioms will help you sound natural
              and interpret authentic English in the CELPIP listening and
              reading sections.
            </p>
          </div>
          <div id="idioms-content"></div>
        </div>

        {/* Nouns & Pronouns Tab */}
        <div id="nouns-pronouns" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Understand English{" "}
              <span className="font-semibold text-sapphire-dark">nouns</span>{" "}
              and{" "}
              <span className="font-semibold text-sapphire-dark">pronouns</span>{" "}
              — the words that name people, places, things, and ideas, and the
              words that replace them. Master their types, forms, and common
              traps.
            </p>
          </div>
          <div id="nouns-pronouns-content"></div>
        </div>

        {/* Conjunctions Tab */}
        <div id="conjunctions" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Master English{" "}
              <span className="font-semibold text-sapphire-dark">
                conjunctions
              </span>{" "}
              — the linking words that connect ideas, clauses, and sentences.
              Learn coordinating, subordinating, and correlative types with
              examples and common traps.
            </p>
          </div>
          <div id="conjunctions-content"></div>
        </div>

        {/* Emotions Tab */}
        <div id="emotions" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Build a precise emotional vocabulary. Each emotion is shown from
              <span className="font-semibold text-emerald2-dark">mild</span> to
              <span className="font-semibold text-rose2-dark">strong</span>{" "}
              intensity, so you can choose the exact word for how you feel.
            </p>
          </div>

          <div id="emotions-content" className="space-y-12"></div>
        </div>

        {/* Sentence Structure Tab */}
        <div id="sentence-structure" className="tab-content">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Understand how English sentences are built — from individual{" "}
              <span className="font-semibold text-sapphire-dark">
                word roles
              </span>{" "}
              to complete{" "}
              <span className="font-semibold text-emerald2-dark">
                sentence types
              </span>
              . Master these structures to write and speak with precision on
              CELPIP.
            </p>
          </div>
          <div id="sentence-structure-content"></div>
        </div>

        {/* Collocations Tab */}
        <div id="collocations" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Natural-sounding word combinations used by fluent English
              speakers. Mastering collocations helps you sound more{" "}
              <span className="font-semibold text-sapphire-dark">natural</span>{" "}
              and less{" "}
              <span className="font-semibold text-rose2-dark">translated</span>{" "}
              in your CELPIP responses.
            </p>
          </div>
          <div id="collocations-content" className="space-y-12"></div>
        </div>

        {/* Articles Tab */}
        <div id="articles" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Master <span className="font-semibold text-sapphire-dark">a</span>
              , <span className="font-semibold text-emerald2-dark">an</span>,
              and <span className="font-semibold text-amber2-dark">the</span> —
              every rule, every trap, with interactive practice and a quiz.
            </p>
          </div>
          <div id="articles-content" className="space-y-12"></div>
        </div>

        {/* Prepositions Tab */}
        <div id="prepositions" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Master English{" "}
              <span className="font-semibold text-sapphire-dark">
                prepositions
              </span>{" "}
              — the small words that show relationships of place, time,
              direction, and more. Learn the rules, common combinations, and
              traps to avoid.
            </p>
          </div>
          <div id="prepositions-content"></div>
        </div>

        {/* Verbs Tab */}
        <div id="verbs" className="tab-content hidden">
          <div className="mb-8">
            <p className="text-slate max-w-2xl leading-relaxed">
              Everything about English verbs — types, all 12 tenses, forms,
              modals, phrasal verbs, irregular verbs, and interactive practice.
            </p>
          </div>
          <div id="verbs-content"></div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Grammar & Vocabulary Bank · Master grammar and essential words
          for test success.
        </p>
      </footer>
    </>
  );
}
