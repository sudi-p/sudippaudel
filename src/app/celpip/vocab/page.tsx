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

    // ─── Setup filter buttons ───────────────────────────────────────────
    function setupFilterButtons() {
      const taskFilters = document.getElementById("task-filters");
      const quizFilterButtons = document.getElementById("quiz-filter-buttons");

      ["all", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].forEach(
        (task) => {
          const color = TASK_COLORS[task];

          // Word list filter
          const btn1 = document.createElement("button");
          btn1.className = `px-4 py-2 rounded-full border font-medium text-sm transition-all ${task === "all" ? "bg-ink text-fog border-ink" : "bg-white border-mist text-slate hover:bg-fog"}`;
          btn1.textContent = TASK_LABELS[task];
          btn1.dataset.filterValue = task;
          btn1.dataset.filterType = "task";
          btn1.addEventListener("click", () => {
            document
              .querySelectorAll('[data-filter-type="task"]')
              .forEach((b) => {
                b.classList.remove("bg-ink", "text-fog", "border-ink");
                b.classList.add(
                  "bg-white",
                  "border-mist",
                  "text-slate",
                  "hover:bg-fog",
                );
              });
            btn1.classList.remove(
              "bg-white",
              "border-mist",
              "text-slate",
              "hover:bg-fog",
            );
            btn1.classList.add("bg-ink", "text-fog", "border-ink");
            listFilters.task = task;
            renderWordList();
          });
          taskFilters.appendChild(btn1);

          // Quiz filter
          const btn2 = document.createElement("button");
          btn2.className = `px-4 py-2 rounded-full border font-medium text-sm transition-all quiz-filter-btn ${task === "all" ? "bg-ink text-fog border-ink" : "bg-white border-mist text-slate hover:bg-fog"}`;
          btn2.textContent = TASK_LABELS[task];
          btn2.dataset.quizTask = task;
          btn2.addEventListener("click", () => {
            document.querySelectorAll(".quiz-filter-btn").forEach((b) => {
              b.classList.remove("bg-ink", "text-fog", "border-ink");
              b.classList.add(
                "bg-white",
                "border-mist",
                "text-slate",
                "hover:bg-fog",
              );
            });
            btn2.classList.remove(
              "bg-white",
              "border-mist",
              "text-slate",
              "hover:bg-fog",
            );
            btn2.classList.add("bg-ink", "text-fog", "border-ink");
            quizState.selectedTask = task;
          });
          quizFilterButtons.appendChild(btn2);
        },
      );
    }

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
    </style>

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
        <div class="art-rule-title"><span class="art-badge art-badge-zero">∅</span> Zero article — no article at all</div>
        <div class="art-rule-body">Skip the article with: plural generalizations, uncountable nouns used generally, most proper names, sports, meals, languages, academic subjects, and abstract ideas.
          <div class="art-ex-row">
            <span class="art-ex-pill"><em>Dogs</em> are loyal.</span>
            <span class="art-ex-pill">I drink <em>coffee</em>.</span>
            <span class="art-ex-pill">She loves <em>music</em>.</span>
            <span class="art-ex-pill">We play <em>soccer</em>.</span>
            <span class="art-ex-pill">He studies <em>biology</em>.</span>
            <span class="art-ex-pill"><em>Canada</em> is large.</span>
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
          b.classList.remove("border-ink", "text-ink");
          b.classList.add("border-transparent", "text-slate");
        });
        document
          .querySelectorAll(".tab-content")
          .forEach((c) => c.classList.add("hidden"));

        btn.classList.remove("border-transparent", "text-slate");
        btn.classList.add("border-ink", "text-ink");
        document.getElementById(tab).classList.remove("hidden");
      });
    });

    document
      .getElementById("start-quiz-btn")
      .addEventListener("click", startQuiz);
    document
      .getElementById("next-btn")
      .addEventListener("click", goToNextQuestion);
    document
      .getElementById("restart-quiz-btn")
      .addEventListener("click", () => {
        document.getElementById("quiz-setup").classList.remove("hidden");
        document.getElementById("quiz-results").classList.add("hidden");
        document.querySelectorAll(".quiz-filter-btn").forEach((b) => {
          b.classList.remove("bg-ink", "text-fog", "border-ink");
          b.classList.add(
            "bg-white",
            "border-mist",
            "text-slate",
            "hover:bg-fog",
          );
        });
        document
          .querySelector('[data-quiz-task="all"]')
          .classList.remove(
            "bg-white",
            "border-mist",
            "text-slate",
            "hover:bg-fog",
          );
        document
          .querySelector('[data-quiz-task="all"]')
          .classList.add("bg-ink", "text-fog", "border-ink");
        quizState.selectedTask = "all";
      });

    // Initialize
    setupFilterButtons();
    renderWordList();
    renderEmotions();
    renderArticles();
    renderCollocations();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Build Your Vocabulary
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
            Vocabulary <span className="hero-line italic">Bank</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Learn essential vocabulary for each CELPIP task. Review word lists
            or test yourself with interactive quizzes.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-8 border-b border-mist">
          <button
            className="tab-btn active px-6 py-3 text-sm font-medium text-ink border-b-2 border-ink transition-all"
            data-tab="word-list"
          >
            Word List
          </button>
          <button
            className="tab-btn px-6 py-3 text-sm font-medium text-slate hover:text-ink border-b-2 border-transparent transition-all"
            data-tab="quiz"
          >
            Quiz
          </button>
          <button
            className="tab-btn px-6 py-3 text-sm font-medium text-slate hover:text-ink border-b-2 border-transparent transition-all"
            data-tab="emotions"
          >
            Emotions
          </button>
          <button
            className="tab-btn px-6 py-3 text-sm font-medium text-slate hover:text-ink border-b-2 border-transparent transition-all"
            data-tab="collocations"
          >
            Collocations
          </button>
          <button
            className="tab-btn px-6 py-3 text-sm font-medium text-slate hover:text-ink border-b-2 border-transparent transition-all"
            data-tab="articles"
          >
            Articles
          </button>
        </div>

        {/* Word List Tab */}
        <div id="word-list" className="tab-content">
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

        {/* Quiz Tab */}
        <div id="quiz" className="tab-content hidden">
          {/* Quiz Setup */}
          <div id="quiz-setup" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-mist p-8">
              <h2 className="font-display text-2xl text-ink mb-3">
                Start a Vocabulary Quiz
              </h2>
              <p className="text-slate mb-6">
                Choose which tasks to practice, then test your vocabulary
                knowledge:
              </p>

              <div className="mb-6">
                <p className="text-sm font-medium text-slate mb-3">
                  Select task:
                </p>
                <div
                  id="quiz-filter-buttons"
                  className="flex flex-wrap gap-2"
                ></div>
              </div>

              <div id="quiz-question-count" className="mb-6 text-center"></div>

              <button
                id="start-quiz-btn"
                className="w-full px-6 py-3 rounded-lg bg-ink text-fog font-semibold hover:bg-steel transition-colors"
              >
                Start Quiz
              </button>
            </div>
          </div>

          {/* Quiz Question */}
          <div
            id="quiz-question-container"
            className="hidden max-w-2xl mx-auto"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span
                  id="question-number"
                  className="text-sm font-medium text-slate"
                ></span>
                <span className="text-sm text-slate" id="score-display"></span>
              </div>
              <div className="w-full bg-mist rounded-full h-2 overflow-hidden">
                <div
                  id="progress-fill"
                  className="bg-sapphire h-full transition-all duration-300"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-mist p-8 mb-6">
              <p
                id="question-text"
                className="font-display text-xl text-ink mb-6"
              ></p>
              <div id="options-container" className="space-y-3"></div>
              <div
                id="feedback"
                className="hidden mt-6 p-4 rounded-lg text-center font-semibold"
              ></div>
            </div>

            <button
              id="next-btn"
              className="hidden w-full px-6 py-3 rounded-lg bg-ink text-fog font-semibold hover:bg-steel transition-colors"
            >
              Next Question
            </button>
          </div>

          {/* Quiz Results */}
          <div id="quiz-results" className="hidden max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-mist p-8 text-center">
              <h2 className="font-display text-3xl text-ink mb-4">
                Quiz Complete!
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span
                  className="font-display text-5xl text-sapphire"
                  id="final-score"
                ></span>
                <span className="text-2xl text-slate">
                  / <span id="total-questions"></span>
                </span>
              </div>
              <p id="result-message" className="text-lg text-slate mb-8"></p>
              <button
                id="restart-quiz-btn"
                className="w-full px-6 py-3 rounded-lg bg-ink text-fog font-semibold hover:bg-steel transition-colors"
              >
                Take Another Quiz
              </button>
            </div>
          </div>
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
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Vocabulary Bank · Master essential words for test success.
        </p>
      </footer>
    </>
  );
}
