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
      <div class="vb-nav-row">
        <button class="vb-nav-btn" id="vb-tense-prev" onclick="vbMoveTense(-1)" disabled>← prev</button>
        <span style="font-size:13px;color:#6b7280;" id="vb-tense-counter"></span>
        <button class="vb-nav-btn" id="vb-tense-next" onclick="vbMoveTense(1)">next →</button>
      </div>
      <div class="vb-slide-box" id="vb-tense-slide"></div>
      <div id="vb-tense-timeline" style="margin-top:0.75rem;"></div>
    </div>

    <!-- FORMS PANEL -->
    <div id="vb-forms" class="vb-panel">
      <div class="vb-grid">
        <div class="vb-card">
          <div class="vb-card-title">Base form (infinitive)</div>
          <div class="vb-card-body">The raw form of the verb, often with "to". Used after modals, auxiliaries, and certain verbs.
            <div class="vb-ex-row"><span class="vb-ex-pill">to <em>run</em></span><span class="vb-ex-pill">I want <em>to eat</em>.</span><span class="vb-ex-pill">She can <em>swim</em>.</span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Present simple (3rd person -s)</div>
          <div class="vb-card-body">Add -s or -es for he/she/it. Verbs ending in -ch, -sh, -x, -o, -ss get -es.
            <div class="vb-ex-row"><span class="vb-ex-pill">run → run<em>s</em></span><span class="vb-ex-pill">teach → teach<em>es</em></span><span class="vb-ex-pill">go → go<em>es</em></span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Present participle (-ing)</div>
          <div class="vb-card-body">Used for continuous tenses and as gerunds. Double the consonant after a short vowel.
            <div class="vb-ex-row"><span class="vb-ex-pill">run → runn<em>ing</em></span><span class="vb-ex-pill">write → writ<em>ing</em> (drop e)</span><span class="vb-ex-pill">play → play<em>ing</em></span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Past simple</div>
          <div class="vb-card-body">Regular verbs: add -ed. If ending in -e, just add -d. Consonant + y → -ied.
            <div class="vb-ex-row"><span class="vb-ex-pill">walk → walk<em>ed</em></span><span class="vb-ex-pill">love → lov<em>ed</em></span><span class="vb-ex-pill">study → stud<em>ied</em></span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Past participle</div>
          <div class="vb-card-body">Used with "have" (perfect tenses) and "be" (passive). Regular = same as past simple.
            <div class="vb-ex-row"><span class="vb-ex-pill">walked → walk<em>ed</em></span><span class="vb-ex-pill">broken (irregular)</span><span class="vb-ex-pill">She has <em>eaten</em>.</span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Gerund (verb as noun)</div>
          <div class="vb-card-body">The -ing form used as a noun — as a subject, object, or after prepositions.
            <div class="vb-ex-row"><span class="vb-ex-pill"><em>Swimming</em> is healthy.</span><span class="vb-ex-pill">I enjoy <em>reading</em>.</span><span class="vb-ex-pill">before <em>leaving</em></span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Active vs. Passive voice</div>
          <div class="vb-card-body">Active: subject does the action. Passive: subject receives the action (be + past participle).
            <div class="vb-ex-row"><span class="vb-ex-pill">Active: The dog bit him.</span><span class="vb-ex-pill">Passive: He <em>was bitten</em> by the dog.</span></div>
          </div>
        </div>
        <div class="vb-card">
          <div class="vb-card-title">Verb + infinitive vs. Verb + gerund</div>
          <div class="vb-card-body">Some verbs are followed by infinitives, some by gerunds. Some change meaning with each.
            <div class="vb-ex-row"><span class="vb-ex-pill">want/need/decide + to V</span><span class="vb-ex-pill">enjoy/avoid/finish + V-ing</span><span class="vb-ex-pill">stop smoking ≠ stop to smoke</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL PANEL -->
    <!-- MODAL PANEL -->
<div id="vb-modal" class="vb-panel">
  <div id="vb-modal-grid"></div>
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
          <thead><tr><th>Base</th><th>Past simple</th><th>Past participle</th><th>Pattern</th></tr></thead>
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

      // ── DATA ──────────────────────────────────────────────────────────────

      const TENSES = [
        {
          group: "Simple tenses",
          name: "Present simple",
          form: "V / V-s (he/she/it)",
          use: "Habits, facts, schedules, permanent situations.",
          signal: "always, usually, every day, never",
          examples: [
            "She <em>works</em> at a hospital.",
            "The train <em>leaves</em> at 8 am.",
            "Water <em>boils</em> at 100°C.",
          ],
        },
        {
          group: "Simple tenses",
          name: "Past simple",
          form: "V-ed (regular) / irregular form",
          use: "Completed actions at a specific time in the past.",
          signal: "yesterday, last year, in 2020, ago",
          examples: [
            "She <em>worked</em> all night.",
            "He <em>went</em> to Paris last summer.",
            "They <em>finished</em> the project on Friday.",
          ],
        },
        {
          group: "Simple tenses",
          name: "Future simple",
          form: "will + V",
          use: "Predictions, spontaneous decisions, promises.",
          signal: "tomorrow, next week, soon, I think",
          examples: [
            "It <em>will rain</em> tomorrow.",
            "I <em>will call</em> you back.",
            "She <em>will be</em> a great doctor.",
          ],
        },
        {
          group: "Continuous tenses",
          name: "Present continuous",
          form: "am/is/are + V-ing",
          use: "Actions happening right now or temporary situations.",
          signal: "now, at the moment, currently, today",
          examples: [
            "She <em>is studying</em> for her exam.",
            "They <em>are building</em> a new bridge.",
            "I <em>am leaving</em> tomorrow. (planned future)",
          ],
        },
        {
          group: "Continuous tenses",
          name: "Past continuous",
          form: "was/were + V-ing",
          use: "Action in progress at a specific past moment, or interrupted by another action.",
          signal: "while, when, at 5pm yesterday",
          examples: [
            "She <em>was sleeping</em> when I called.",
            "They <em>were arguing</em> all morning.",
            "I <em>was reading</em> when the lights went out.",
          ],
        },
        {
          group: "Continuous tenses",
          name: "Future continuous",
          form: "will be + V-ing",
          use: "Action in progress at a future moment.",
          signal: "at this time tomorrow, by noon",
          examples: [
            "This time next week, I <em>will be flying</em> to Tokyo.",
            "She <em>will be working</em> when you arrive.",
          ],
        },
        {
          group: "Perfect tenses",
          name: "Present perfect",
          form: "have/has + past participle",
          use: "Past action with present relevance; experience; actions that started in the past and continue.",
          signal: "just, already, yet, ever, never, since, for",
          examples: [
            "She <em>has lived</em> here for five years.",
            "I <em>have already eaten</em>.",
            "Have you ever <em>visited</em> Nepal?",
          ],
        },
        {
          group: "Perfect tenses",
          name: "Past perfect",
          form: "had + past participle",
          use: 'Action completed before another past action. The "further back" past.',
          signal: "before, after, already, by the time",
          examples: [
            "She <em>had left</em> before I arrived.",
            "By 2020, he <em>had published</em> three books.",
            "They <em>had never met</em> before the conference.",
          ],
        },
        {
          group: "Perfect tenses",
          name: "Future perfect",
          form: "will have + past participle",
          use: "Action that will be completed before a specific future time.",
          signal: "by next year, by the time, before",
          examples: [
            "By Friday, I <em>will have finished</em> the report.",
            "She <em>will have graduated</em> by next June.",
          ],
        },
        {
          group: "Perfect continuous",
          name: "Present perfect continuous",
          form: "have/has been + V-ing",
          use: "Action that started in the past, is still continuing, and shows duration.",
          signal: "for, since, how long",
          examples: [
            "She <em>has been working</em> here for three years.",
            "I <em>have been waiting</em> since noon.",
            "Why is he tired? — He <em>has been running</em>.",
          ],
        },
        {
          group: "Perfect continuous",
          name: "Past perfect continuous",
          form: "had been + V-ing",
          use: "Ongoing action that was in progress before another past action.",
          signal: "for, since, before, when",
          examples: [
            "She <em>had been studying</em> for hours before she slept.",
            "He was exhausted — he <em>had been working</em> all day.",
          ],
        },
        {
          group: "Perfect continuous",
          name: "Future perfect continuous",
          form: "will have been + V-ing",
          use: "Duration of an action up to a specific future point. (Formal/advanced)",
          signal: "by, for",
          examples: [
            "By July, she <em>will have been teaching</em> for ten years.",
            "I <em>will have been waiting</em> for an hour by the time you arrive.",
          ],
        },
      ];

      const MODALS = [
        {
          modal: "can",
          meanings: [
            "Ability (present)",
            "Permission (informal)",
            "Possibility",
          ],
          examples: [
            "She <em>can</em> speak three languages. (ability)",
            "You <em>can</em> leave early today. (permission)",
            "It <em>can</em> get very cold here in winter. (possibility)",
          ],
          negative: "can't / cannot",
          note: 'Use "could" for past ability: He could swim when he was five.',
        },
        {
          modal: "could",
          meanings: [
            "Past ability",
            "Polite request",
            "Weak possibility",
            "Suggestion",
          ],
          examples: [
            "She <em>could</em> run very fast as a child. (past ability)",
            "<em>Could</em> you please open the window? (polite request)",
            "It <em>could</em> rain tonight. (weak possibility)",
          ],
          negative: "couldn't",
          note: '"Could" is softer and more polite than "can" for requests.',
        },
        {
          modal: "may",
          meanings: ["Formal permission", "Possibility (50%)"],
          examples: [
            "You <em>may</em> use a dictionary during the exam. (permission)",
            "She <em>may</em> be late — I'm not sure. (possibility)",
            "It <em>may</em> snow this weekend.",
          ],
          negative: "may not",
          note: 'More formal than "can" for permission. "Might" is slightly less certain than "may".',
        },
        {
          modal: "might",
          meanings: ["Weak possibility (< 50%)", "Polite suggestion"],
          examples: [
            "He <em>might</em> come to the party — but I doubt it.",
            "You <em>might</em> want to reconsider that decision.",
            "She <em>might</em> have missed the bus.",
          ],
          negative: "might not",
          note: 'Use "might have + past participle" for speculation about the past.',
        },
        {
          modal: "must",
          meanings: ["Strong obligation", "Logical deduction (certainty)"],
          examples: [
            "You <em>must</em> wear a seatbelt. (obligation)",
            "She <em>must</em> be exhausted — she worked 14 hours. (deduction)",
            "I <em>must</em> call my parents today.",
          ],
          negative: "mustn't (prohibition) / don't have to (no obligation)",
          note: '"Mustn\'t" = forbidden. "Don\'t have to" = not necessary (very different!)',
        },
        {
          modal: "should",
          meanings: [
            "Advice / recommendation",
            "Expectation",
            "Mild obligation",
          ],
          examples: [
            "You <em>should</em> see a doctor about that cough. (advice)",
            "The package <em>should</em> arrive by Friday. (expectation)",
            "We <em>should</em> respect others.",
          ],
          negative: "shouldn't",
          note: 'Use "should have + past participle" for past regrets: You should have called earlier.',
        },
        {
          modal: "will",
          meanings: [
            "Future fact / prediction",
            "Promise",
            "Spontaneous decision",
          ],
          examples: [
            "I <em>will</em> finish this by tonight. (promise)",
            "It <em>will</em> be a sunny day tomorrow. (prediction)",
            "I'll get the door — stay seated. (spontaneous)",
          ],
          negative: "won't",
          note: '"Will" for predictions is based on what the speaker believes. Use "going to" for evidence-based future.',
        },
        {
          modal: "would",
          meanings: ["Conditional", "Polite request", "Past habit", "Wish"],
          examples: [
            "I <em>would</em> travel more if I had time. (conditional)",
            "<em>Would</em> you like some coffee? (polite offer)",
            "As a child, we <em>would</em> play outside all day. (past habit)",
          ],
          negative: "wouldn't",
          note: '"Would" is the most versatile modal — it appears in conditionals, polite speech, and narrative.',
        },
        {
          modal: "shall",
          meanings: ["Formal future (I/we)", "Offer", "Suggestion"],
          examples: [
            "<em>Shall</em> we begin? (suggestion)",
            "I <em>shall</em> return. (formal promise)",
            "<em>Shall</em> I open the window for you? (offer)",
          ],
          negative: "shan't (rare)",
          note: '"Shall" is formal and mostly British English. In everyday speech, "will" and "should" replace it.',
        },
        {
          modal: "ought to",
          meanings: ["Moral duty / advice", "Expectation"],
          examples: [
            "You <em>ought to</em> apologize to her.",
            "The results <em>ought to</em> be ready by now.",
            "We <em>ought to</em> help those in need.",
          ],
          negative: "ought not to",
          note: '"Ought to" is similar to "should" but slightly stronger in moral implication.',
        },
      ];

      const PHRASAL = [
        {
          verb: "give up",
          meaning: "stop doing something / quit",
          separable: true,
          examples: [
            "She gave <em>up</em> smoking last year.",
            "Don't give up on your dreams.",
          ],
        },
        {
          verb: "look after",
          meaning: "take care of",
          separable: false,
          examples: [
            "She looks after her elderly parents.",
            "Can you look after the kids tonight?",
          ],
        },
        {
          verb: "bring up",
          meaning: "raise a child / mention a topic",
          separable: true,
          examples: [
            "She was brought up in Toronto.",
            "He brought up an interesting point.",
          ],
        },
        {
          verb: "run out of",
          meaning: "have no more of something",
          separable: false,
          examples: [
            "We've run out of milk.",
            "I ran out of time during the exam.",
          ],
        },
        {
          verb: "put off",
          meaning: "postpone / delay",
          separable: true,
          examples: [
            "Don't put off your work until tomorrow.",
            "The meeting was put off until Friday.",
          ],
        },
        {
          verb: "get over",
          meaning: "recover from (illness or emotion)",
          separable: false,
          examples: [
            "It took her a month to get over the flu.",
            "He never got over the breakup.",
          ],
        },
        {
          verb: "come across",
          meaning: "find or meet by chance",
          separable: false,
          examples: [
            "I came across an old photo album.",
            "She comes across as very confident.",
          ],
        },
        {
          verb: "turn down",
          meaning: "reject / refuse an offer",
          separable: true,
          examples: [
            "He turned down the job offer.",
            "She turned the volume down.",
          ],
        },
        {
          verb: "look into",
          meaning: "investigate / examine",
          separable: false,
          examples: [
            "The police are looking into the matter.",
            "I'll look into it.",
          ],
        },
        {
          verb: "make up",
          meaning: "invent / reconcile after argument",
          separable: true,
          examples: [
            "She made up an excuse.",
            "They argued but quickly made up.",
          ],
        },
        {
          verb: "take on",
          meaning: "accept responsibility / hire",
          separable: true,
          examples: [
            "She took on a new project.",
            "The company took on 50 new staff.",
          ],
        },
        {
          verb: "set up",
          meaning: "establish / arrange",
          separable: true,
          examples: [
            "They set up a new business.",
            "Can you set up a meeting?",
          ],
        },
        {
          verb: "break down",
          meaning: "stop working / lose emotional control",
          separable: false,
          examples: [
            "The car broke down on the highway.",
            "She broke down in tears.",
          ],
        },
        {
          verb: "carry out",
          meaning: "perform / complete a task",
          separable: true,
          examples: [
            "The team carried out a detailed inspection.",
            "Carry out the plan.",
          ],
        },
        {
          verb: "go through",
          meaning: "experience something difficult / examine",
          separable: false,
          examples: [
            "She went through a tough divorce.",
            "Let's go through the report together.",
          ],
        },
      ];

      const IRREGULAR = [
        { base: "be", past: "was/were", pp: "been", pattern: "unique" },
        { base: "beat", past: "beat", pp: "beaten", pattern: "A-A-B" },
        { base: "begin", past: "began", pp: "begun", pattern: "vowel change" },
        { base: "bite", past: "bit", pp: "bitten", pattern: "A-B-B+en" },
        { base: "blow", past: "blew", pp: "blown", pattern: "ew/own" },
        { base: "break", past: "broke", pp: "broken", pattern: "A-B-B+en" },
        { base: "bring", past: "brought", pp: "brought", pattern: "A-B-B" },
        { base: "build", past: "built", pp: "built", pattern: "A-B-B" },
        { base: "buy", past: "bought", pp: "bought", pattern: "A-B-B" },
        { base: "catch", past: "caught", pp: "caught", pattern: "A-B-B" },
        { base: "choose", past: "chose", pp: "chosen", pattern: "A-B-B+en" },
        { base: "come", past: "came", pp: "come", pattern: "A-B-A" },
        { base: "cut", past: "cut", pp: "cut", pattern: "A-A-A" },
        { base: "do", past: "did", pp: "done", pattern: "unique" },
        { base: "drink", past: "drank", pp: "drunk", pattern: "vowel change" },
        { base: "drive", past: "drove", pp: "driven", pattern: "A-B-B+en" },
        { base: "eat", past: "ate", pp: "eaten", pattern: "A-B-B+en" },
        { base: "fall", past: "fell", pp: "fallen", pattern: "A-B-B+en" },
        { base: "feel", past: "felt", pp: "felt", pattern: "A-B-B" },
        { base: "fight", past: "fought", pp: "fought", pattern: "A-B-B" },
        { base: "find", past: "found", pp: "found", pattern: "A-B-B" },
        { base: "fly", past: "flew", pp: "flown", pattern: "ew/own" },
        {
          base: "forget",
          past: "forgot",
          pp: "forgotten",
          pattern: "A-B-B+en",
        },
        { base: "get", past: "got", pp: "got/gotten", pattern: "A-B-B" },
        { base: "give", past: "gave", pp: "given", pattern: "A-B-B+en" },
        { base: "go", past: "went", pp: "gone", pattern: "unique" },
        { base: "grow", past: "grew", pp: "grown", pattern: "ew/own" },
        { base: "have", past: "had", pp: "had", pattern: "A-B-B" },
        { base: "hear", past: "heard", pp: "heard", pattern: "A-B-B" },
        { base: "hide", past: "hid", pp: "hidden", pattern: "A-B-B+en" },
        { base: "hold", past: "held", pp: "held", pattern: "A-B-B" },
        { base: "keep", past: "kept", pp: "kept", pattern: "A-B-B" },
        { base: "know", past: "knew", pp: "known", pattern: "ew/own" },
        { base: "lead", past: "led", pp: "led", pattern: "A-B-B" },
        { base: "leave", past: "left", pp: "left", pattern: "A-B-B" },
        { base: "let", past: "let", pp: "let", pattern: "A-A-A" },
        { base: "lie", past: "lay", pp: "lain", pattern: "vowel change" },
        { base: "lose", past: "lost", pp: "lost", pattern: "A-B-B" },
        { base: "make", past: "made", pp: "made", pattern: "A-B-B" },
        { base: "meet", past: "met", pp: "met", pattern: "A-B-B" },
        { base: "pay", past: "paid", pp: "paid", pattern: "A-B-B" },
        { base: "put", past: "put", pp: "put", pattern: "A-A-A" },
        {
          base: "read",
          past: "read",
          pp: "read",
          pattern: "A-A-A (pronunciation changes)",
        },
        { base: "ride", past: "rode", pp: "ridden", pattern: "A-B-B+en" },
        { base: "ring", past: "rang", pp: "rung", pattern: "vowel change" },
        { base: "rise", past: "rose", pp: "risen", pattern: "vowel change" },
        { base: "run", past: "ran", pp: "run", pattern: "A-B-A" },
        { base: "say", past: "said", pp: "said", pattern: "A-B-B" },
        { base: "see", past: "saw", pp: "seen", pattern: "unique" },
        { base: "sell", past: "sold", pp: "sold", pattern: "A-B-B" },
        { base: "send", past: "sent", pp: "sent", pattern: "A-B-B" },
        { base: "set", past: "set", pp: "set", pattern: "A-A-A" },
        { base: "show", past: "showed", pp: "shown", pattern: "A-B-B+en" },
        { base: "sing", past: "sang", pp: "sung", pattern: "vowel change" },
        { base: "sit", past: "sat", pp: "sat", pattern: "A-B-B" },
        { base: "sleep", past: "slept", pp: "slept", pattern: "A-B-B" },
        { base: "speak", past: "spoke", pp: "spoken", pattern: "A-B-B+en" },
        { base: "spend", past: "spent", pp: "spent", pattern: "A-B-B" },
        { base: "stand", past: "stood", pp: "stood", pattern: "A-B-B" },
        { base: "steal", past: "stole", pp: "stolen", pattern: "A-B-B+en" },
        { base: "swim", past: "swam", pp: "swum", pattern: "vowel change" },
        { base: "take", past: "took", pp: "taken", pattern: "A-B-B+en" },
        { base: "teach", past: "taught", pp: "taught", pattern: "A-B-B" },
        { base: "tell", past: "told", pp: "told", pattern: "A-B-B" },
        { base: "think", past: "thought", pp: "thought", pattern: "A-B-B" },
        { base: "throw", past: "threw", pp: "thrown", pattern: "ew/own" },
        {
          base: "understand",
          past: "understood",
          pp: "understood",
          pattern: "A-B-B",
        },
        { base: "wake", past: "woke", pp: "woken", pattern: "A-B-B+en" },
        { base: "wear", past: "wore", pp: "worn", pattern: "A-B-B+en" },
        { base: "win", past: "won", pp: "won", pattern: "A-B-B" },
        { base: "write", past: "wrote", pp: "written", pattern: "A-B-B+en" },
      ];

      const FILL_SENTENCES = [
        {
          before: "She",
          after: "here for five years.",
          answer: "has lived",
          options: ["lives", "has lived", "lived", "is living"],
          explain:
            "Action that started in the past and continues → <strong>present perfect</strong>: has + past participle.",
        },
        {
          before: "When I arrived, he",
          after: "already left.",
          answer: "had already left",
          options: [
            "already left",
            "has already left",
            "had already left",
            "was leaving",
          ],
          explain:
            "Action completed before another past action → <strong>past perfect</strong>: had + past participle.",
        },
        {
          before: "I",
          after: "a strange noise while I was sleeping.",
          answer: "heard",
          options: ["hear", "heard", "have heard", "was hearing"],
          explain:
            "Completed action at a specific past time → <strong>past simple</strong>.",
        },
        {
          before: "The report",
          after: "by the team last week.",
          answer: "was written",
          options: ["wrote", "has written", "was written", "is written"],
          explain:
            "Passive voice: subject receives the action → <strong>be + past participle</strong>.",
        },
        {
          before: "By next month, she",
          after: "the project.",
          answer: "will have completed",
          options: [
            "will complete",
            "completes",
            "has completed",
            "will have completed",
          ],
          explain:
            "Action completed before a future point → <strong>future perfect</strong>: will have + past participle.",
        },
        {
          before: "You",
          after: "smoke in this building.",
          answer: "must not",
          options: ["should not", "must not", "do not have to", "cannot"],
          explain:
            '"Must not" = prohibition (forbidden). "Do not have to" would mean it is not necessary — very different.',
        },
        {
          before: "He",
          after: "when the accident happened.",
          answer: "was driving",
          options: ["drove", "has driven", "was driving", "drives"],
          explain:
            "Action in progress when interrupted → <strong>past continuous</strong>: was/were + V-ing.",
        },
        {
          before: "I enjoy",
          after: "on weekends.",
          answer: "hiking",
          options: ["to hike", "hike", "hiking", "hiked"],
          explain:
            '"Enjoy" is always followed by a <strong>gerund</strong> (V-ing), never an infinitive.',
        },
        {
          before: "If I",
          after: "more time, I would travel the world.",
          answer: "had",
          options: ["have", "had", "would have", "will have"],
          explain:
            "Second conditional (unreal present): <strong>if + past simple</strong>, would + base verb.",
        },
        {
          before: "The children",
          after: "in the garden all afternoon.",
          answer: "have been playing",
          options: [
            "played",
            "are playing",
            "have been playing",
            "were playing",
          ],
          explain:
            "Ongoing action from past to now with emphasis on duration → <strong>present perfect continuous</strong>.",
        },
        {
          before: "She",
          after: "Spanish for two years before she moved to Mexico.",
          answer: "had been studying",
          options: [
            "studied",
            "has been studying",
            "had been studying",
            "was studying",
          ],
          explain:
            "Ongoing action completed before another past event → <strong>past perfect continuous</strong>.",
        },
        {
          before: "You",
          after: "see a doctor — that cough sounds serious.",
          answer: "should",
          options: ["must", "should", "can", "will"],
          explain:
            '"Should" = advice/recommendation. "Must" would be very strong obligation here.',
        },
      ];

      const QUIZ_QS = [
        {
          q: '"I have been waiting for an hour." — What tense is this?',
          opts: [
            "Present perfect",
            "Past continuous",
            "Present perfect continuous",
            "Past perfect",
          ],
          ans: 2,
          exp: "<strong>have/has been + V-ing</strong> = present perfect continuous. Shows an action in progress from past to now with duration.",
        },
        {
          q: "Which sentence is correct?",
          opts: [
            "I am knowing the answer.",
            "I know the answer.",
            "I am knowing answer.",
            "I have been knowing the answer.",
          ],
          ans: 1,
          exp: '"Know" is a <strong>stative verb</strong> — it describes a state, not an action. Stative verbs are not used in continuous tenses.',
        },
        {
          q: 'Choose the correct modal: "You ___ take off your shoes — it\'s optional."',
          opts: ["must", "should", "don't have to", "mustn't"],
          ans: 2,
          exp: '"Don\'t have to" = not necessary / optional. "Mustn\'t" = forbidden. These are opposite in meaning!',
        },
        {
          q: '"She ___ to the party if she had known about it." What fits?',
          opts: ["would come", "would have come", "will come", "came"],
          ans: 1,
          exp: "Third conditional (unreal past): <strong>would have + past participle</strong>.",
        },
        {
          q: "Which verb is intransitive?",
          opts: [
            "She bought a car.",
            "He kicked the ball.",
            "The baby arrived.",
            "I love music.",
          ],
          ans: 2,
          exp: '"Arrived" takes no direct object — the action stays with the subject. It is <strong>intransitive</strong>.',
        },
        {
          q: '"By July, she ___ here for ten years." Which form fits?',
          opts: [
            "will work",
            "will have worked",
            "has worked",
            "will be working",
          ],
          ans: 1,
          exp: '"By July" + duration → <strong>future perfect</strong>: will have + past participle.',
        },
        {
          q: 'What follows "avoid"?',
          opts: ["to eat", "eat", "eating", "eaten"],
          ans: 2,
          exp: '"Avoid" is always followed by a <strong>gerund</strong> (V-ing): avoid eating, avoid making.',
        },
        {
          q: '"The window was broken by the wind." — What voice is this?',
          opts: ["Active", "Passive", "Causative", "Conditional"],
          ans: 1,
          exp: "<strong>Passive voice</strong>: be + past participle. The subject receives the action.",
        },
        {
          q: "Which is a linking verb?",
          opts: ["run", "eat", "seem", "build"],
          ans: 2,
          exp: '"Seem" is a <strong>linking verb</strong> — it connects the subject to a description: She seems tired.',
        },
        {
          q: '"She ___ when the phone rang." Choose the correct form.',
          opts: ["slept", "was sleeping", "has slept", "had slept"],
          ans: 1,
          exp: "Action in progress when interrupted → <strong>past continuous</strong>: was/were + V-ing.",
        },
        {
          q: 'Which sentence uses "should have" correctly?',
          opts: [
            "You should have called earlier.",
            "You should called earlier.",
            "You should have call earlier.",
            "You should calling earlier.",
          ],
          ans: 0,
          exp: '"Should have" expresses past regret: <strong>should + have + past participle</strong>.',
        },
        {
          q: '"Get" in "I got my hair cut" is a ___ verb.',
          opts: ["linking", "auxiliary", "causative", "modal"],
          ans: 2,
          exp: '"Get" here is a <strong>causative verb</strong> — someone else performs the action on your behalf.',
        },
      ];

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
      let vbTI = 0;
      function initVbTenses() {
        window._vbTenseInit = true;
        vbRenderTense();
      }
      function vbRenderTense() {
        const t = TENSES[vbTI];
        document.getElementById("vb-tense-counter").textContent =
          `${vbTI + 1} of ${TENSES.length}`;
        document.getElementById("vb-tense-prev").disabled = vbTI === 0;
        document.getElementById("vb-tense-next").disabled =
          vbTI === TENSES.length - 1;
        document.getElementById("vb-tense-slide").innerHTML = `
      <div class="vb-slide-label">${t.group}</div>
      <div class="vb-slide-title">${t.name}</div>
      <div style="margin-bottom:8px;">
        <span class="vb-tense-key">Form</span>
        <span style="font-size:13px;color:#374151;margin-left:6px;font-family:monospace;">${t.form}</span>
      </div>
      <div class="vb-slide-desc">${t.use}</div>
      <div style="font-size:12px;color:#9ca3af;margin-bottom:10px;"><strong style="color:#6b7280;">Signal words:</strong> ${t.signal}</div>
      <div class="vb-slide-examples">
        ${t.examples.map((e) => `<div class="vb-slide-ex">${e}</div>`).join("")}
      </div>
    `;
      }
      window.vbMoveTense = function (dir) {
        vbTI = Math.max(0, Math.min(TENSES.length - 1, vbTI + dir));
        vbRenderTense();
      };

      // ── Modal panel ────────────────────────────────────────────────────────
      function initVbModal() {
        window._vbModalInit = true;
        const grid = document.getElementById("vb-modal-grid");
        grid.className = "vb-modal-grid";
        grid.innerHTML = MODALS.map(
          (m) => `
    <div class="vb-modal-card">
      <div class="vb-modal-word">${m.modal}</div>
      <div class="vb-modal-meanings">
        ${m.meanings.map((mn) => `<span class="vb-badge vb-badge-modal">${mn}</span>`).join("")}
      </div>
      <div class="vb-modal-examples">
        ${m.examples.map((e) => `<div class="vb-modal-ex">${e}</div>`).join("")}
      </div>
      <div class="vb-modal-neg"><strong>Negative:</strong> ${m.negative}</div>
      <div class="vb-modal-note"><strong>Note:</strong> ${m.note}</div>
    </div>
  `,
        ).join("");
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
    renderVerbs();
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
          <button
            className="tab-btn px-6 py-3 text-sm font-medium text-slate hover:text-ink border-b-2 border-transparent transition-all"
            data-tab="verbs"
          >
            Verbs
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
          CELPIP Vocabulary Bank · Master essential words for test success.
        </p>
      </footer>
    </>
  );
}
