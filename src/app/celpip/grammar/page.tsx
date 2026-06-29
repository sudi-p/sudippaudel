// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect } from "react";
import {
  SOUND_WORDS,
  VERB_TYPES,
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
  VOWEL_SOUNDS,
  CONSONANT_SOUNDS,
  STRESS_RULES,
  CONNECTED_SPEECH,
  VOICE_RULES,
  ACTIVE_EXAMPLES,
  PASSIVE_EXAMPLES,
  VOICE_TRAPS,
  ADV_CELPIP_TASKS,
  ADV_NATIVE_PATTERNS,
  ADV_MISTAKES,
  ADV_TYPES,
  ADV_VS_ADJ,
  UPGRADE_BANK,
} from "./data";
import AdsenseAd from "@/components/AdComponent";
import {
  phSpeak,
  NounsPronounsSection,
  ConjunctionsSection,
  PhoneticsSection,
} from "./sections";
import AdverbsTab from "./AdverbsTab";
import VerbsTab from "./VerbsTab";
import ArticlesTab from "./ArticlesTab";
import VoiceTab from "./VoiceTab";

export default function CelpipVocabPage() {
  useEffect(() => {
    document.title = "CELPIP Vocabulary Bank";

    // ─── Word List Rendering ───────────────────────────────────────────

    // preload voices so they're ready when user clicks
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // phSpeak now lives in ./sections; expose it on window so the
    // not-yet-migrated tabs whose innerHTML uses onclick="phSpeak(...)" work.
    window.phSpeak = phSpeak;

    // ── ADJECTIVES ────────────────────────────────────────────────────────────
    function renderAdjectives() {
      const content = document.getElementById("adjectives-content");
      if (!content) return;

      content.innerHTML = `
      <style>
      .adj-tab-bar {
    display: flex; gap: 8px; margin-bottom: 1.75rem;
    border-bottom: 2px solid #e2e8f0; padding-bottom: 0;
  }
  .adj-tab-btn {
    padding: 8px 22px; font-size: 13.5px; font-weight: 700;
    border: none; background: none; cursor: pointer; color: #64748b;
    border-bottom: 3px solid transparent; margin-bottom: -2px;
    border-radius: 6px 6px 0 0; transition: color .15s, border-color .15s;
  }
  .adj-tab-btn:hover { color: #4f46e5; }
  .adj-tab-btn.adj-tab-active { color: #4f46e5; border-bottom-color: #4f46e5; }
  .adj-tab-panel { display: none; }
  .adj-tab-panel.adj-tab-panel-active { display: block; }

  /* ── flip card quiz ── */
  .fq-header {
    display: flex; flex-wrap: wrap; align-items: center;
    justify-content: space-between; gap: 12px; margin-bottom: 1.5rem;
  }
  .fq-meta { font-size: 13px; color: #64748b; font-weight: 600; }
  .fq-btn {
    padding: 9px 22px; border: none; border-radius: 10px; font-size: 13px;
    font-weight: 700; cursor: pointer; transition: background .15s, transform .1s;
  }
  .fq-btn:active { transform: scale(.97); }
  .fq-btn-primary   { background: #4f46e5; color: #fff; }
  .fq-btn-primary:hover { background: #3730a3; }
  .fq-btn-secondary { background: #f1f5f9; color: #334155; }
  .fq-btn-secondary:hover { background: #e2e8f0; }

  /* progress bar */
  .fq-progress-wrap { display:flex; flex-direction:column; gap:4px; flex:1; min-width:180px; }
  .fq-progress-label { font-size:12px; font-weight:600; color:#64748b; }
  .fq-progress-bg { height:7px; background:#e2e8f0; border-radius:99px; overflow:hidden; }
  .fq-progress-fill { height:100%; background:#4f46e5; border-radius:99px; transition:width .35s; }

  /* score badges */
  .fq-score-row { display:flex; gap:12px; margin-bottom:1.5rem; flex-wrap:wrap; }
  .fq-badge { display:flex; align-items:center; gap:6px; padding:5px 14px; border-radius:20px; font-size:13px; font-weight:700; }
  .fq-badge-seen  { background:#ede9fe; color:#4f46e5; }
  .fq-badge-known { background:#f0fdf4; color:#16a34a; }
  .fq-badge-again { background:#fef2f2; color:#dc2626; }

  /* scene / card */
  .fq-scene {
    width:100%; max-width:480px; height:230px;
    perspective:1000px; margin:0 auto 1.25rem; cursor:pointer;
    user-select:none;
  }
  .fq-card-inner {
    width:100%; height:100%; position:relative;
    transform-style:preserve-3d;
    transition:transform .5s cubic-bezier(.4,0,.2,1);
    border-radius:20px;
  }
  .fq-card-inner.fq-flipped { transform:rotateY(180deg); }
  .fq-face {
    position:absolute; inset:0; backface-visibility:hidden;
    -webkit-backface-visibility:hidden; border-radius:20px;
    display:flex; flex-direction:column; align-items:center;
    justify-content:center; padding:2rem; text-align:center;
    box-shadow:0 8px 32px rgba(99,102,241,.13);
  }
  .fq-front {
    background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);
    color:#fff;
  }
  .fq-back { background:#fff; border:2px solid #e2e8f0; transform:rotateY(180deg); }

  .fq-front-hint { font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; opacity:.6; margin-bottom:.5rem; }
  .fq-front-word { font-size:2.8rem; font-weight:900; letter-spacing:-.02em; line-height:1; }
  .fq-front-tap  { font-size:11px; opacity:.5; margin-top:.85rem; }

  .fq-back-label { font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8; margin-bottom:.85rem; }
  .fq-chips { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
  .fq-chip {
    background:#ede9fe; color:#4f46e5; font-size:14px; font-weight:700;
    padding:5px 18px; border-radius:20px; border:1.5px solid #c4b5fd;
  }

  /* result buttons */
  .fq-result-row { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:1.75rem; }
  .fq-btn-known { background:#f0fdf4; color:#16a34a; border:1.5px solid #bbf7d0; }
  .fq-btn-known:hover { background:#dcfce7; }
  .fq-btn-again { background:#fef2f2; color:#dc2626; border:1.5px solid #fecaca; }
  .fq-btn-again:hover { background:#fee2e2; }

  /* completion screen */
  .fq-complete {
    text-align:center; padding:3rem 1rem;
    background:#fff; border:1px solid #e2e8f0; border-radius:20px;
  }
  .fq-complete-icon  { font-size:3.5rem; margin-bottom:.75rem; }
  .fq-complete-title { font-size:1.5rem; font-weight:900; color:#1e293b; margin-bottom:.5rem; }
  .fq-complete-sub   { font-size:14px; color:#64748b; margin-bottom:1.5rem; }
  .fq-stat-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:1.75rem; }
  .fq-stat {
    background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px;
    padding:12px 24px; text-align:center;
  }
  .fq-stat-num   { font-size:1.8rem; font-weight:900; color:#4f46e5; }
  .fq-stat-label { font-size:11px; color:#64748b; font-weight:600; margin-top:2px; }

  @media(max-width:600px){
    .fq-scene { height:200px; }
    .fq-front-word { font-size:2rem; }
  }
        /* ── shared layout ── */
        .adj-section { margin-bottom: 3.5rem; }
        .adj-section-title {
          font-size: 1.25rem; font-weight: 800; color: #1e293b;
          border-left: 4px solid #6366f1; padding-left: 12px;
          margin-bottom: 1.25rem;
        }
        .adj-intro {
          font-size: 14px; color: #475569; line-height: 1.75;
          max-width: 720px; margin-bottom: 1.5rem;
        }

        /* ── type cards grid ── */
        .adj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .adj-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 14px;
          padding: 1.25rem 1.5rem; transition: box-shadow .15s;
        }
        .adj-card:hover { box-shadow: 0 4px 18px rgba(99,102,241,.12); }
        .adj-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: .6rem; }
        .adj-card-icon { font-size: 1.6rem; }
        .adj-card-title { font-size: .95rem; font-weight: 700; color: #1e293b; }
        .adj-card-tag {
          display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: .04em;
          text-transform: uppercase; padding: 2px 8px; border-radius: 20px;
          background: #ede9fe; color: #4f46e5; margin-left: auto;
        }
        .adj-card-desc { font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: .75rem; }
        .adj-examples { display: flex; flex-direction: column; gap: 5px; }
        .adj-ex {
          font-size: 13px; color: #1e293b; background: #f8fafc;
          border-left: 3px solid #a5b4fc; padding: 5px 10px; border-radius: 0 6px 6px 0;
        }
        .adj-ex em { color: #4f46e5; font-style: normal; font-weight: 600; }

        /* ── order of adjectives ── */
        .adj-order-row {
          display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
          background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;
          padding: 1rem 1.25rem; margin-bottom: 1rem;
        }
        .adj-order-badge {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          background: #fff; border: 1px solid #c7d2fe; border-radius: 8px;
          padding: 6px 12px; min-width: 80px;
        }
        .adj-order-num { font-size: 10px; font-weight: 700; color: #818cf8; }
        .adj-order-label { font-size: 12px; font-weight: 600; color: #1e293b; }
        .adj-order-ex { font-size: 10px; color: #64748b; margin-top: 1px; }
        .adj-order-arrow { font-size: 1.1rem; color: #c7d2fe; }

        /* ── comparison table ── */
        .adj-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .adj-table th {
          background: #4f46e5; color: #fff; padding: 9px 14px;
          text-align: left; font-size: 12px; font-weight: 700; letter-spacing: .04em;
        }
        .adj-table th:first-child { border-radius: 10px 0 0 0; }
        .adj-table th:last-child  { border-radius: 0 10px 0 0; }
        .adj-table td { padding: 8px 14px; border-bottom: 1px solid #f1f5f9; color: #334155; }
        .adj-table tr:last-child td { border-bottom: none; }
        .adj-table tr:nth-child(even) td { background: #f8fafc; }
        .adj-table em { color: #4f46e5; font-style: normal; font-weight: 600; }

        /* ── native speaker tips ── */
        .adj-tip-list { display: flex; flex-direction: column; gap: .85rem; }
        .adj-tip {
          display: flex; gap: 12px; align-items: flex-start;
          background: #fefce8; border: 1px solid #fde68a; border-radius: 12px;
          padding: 1rem 1.25rem;
        }
        .adj-tip-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 1px; }
        .adj-tip-body { font-size: 13.5px; color: #374151; line-height: 1.65; }
        .adj-tip-body strong { color: #92400e; }

        /* ── CELPIP task bands ── */
        .adj-task-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
        .adj-task-card {
          border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden;
        }
        .adj-task-head {
          background: #4f46e5; color: #fff; padding: 10px 16px;
          font-size: 12px; font-weight: 700; letter-spacing: .04em;
          display: flex; justify-content: space-between; align-items: center;
        }
        .adj-task-clb {
          background: #818cf8; border-radius: 20px;
          font-size: 10px; padding: 2px 9px; font-weight: 700;
        }
        .adj-task-body { padding: 1rem 1.25rem; }
        .adj-task-scenario { font-size: 12px; color: #64748b; margin-bottom: .6rem; font-style: italic; }
        .adj-task-weak { font-size: 13px; color: #dc2626; margin-bottom: .4rem; }
        .adj-task-strong { font-size: 13px; color: #16a34a; }
        .adj-task-weak::before { content: "✗ "; font-weight: 700; }
        .adj-task-strong::before { content: "✓ "; font-weight: 700; }

        /* ── mistakes & fixes ── */
        .adj-mistake-list { display: flex; flex-direction: column; gap: 1rem; }
        .adj-mistake {
          border: 1px solid #fecaca; border-radius: 12px; overflow: hidden;
        }
        .adj-mistake-head {
          background: #fef2f2; padding: 8px 14px;
          font-size: 13px; font-weight: 700; color: #991b1b;
          display: flex; align-items: center; gap: 8px;
        }
        .adj-mistake-body { padding: 10px 14px; background: #fff; }
        .adj-mistake-wrong { font-size: 13px; color: #dc2626; margin-bottom: 5px; }
        .adj-mistake-right { font-size: 13px; color: #16a34a; margin-bottom: 5px; }
        .adj-mistake-why  { font-size: 12px; color: #64748b; font-style: italic; }
        .adj-mistake-wrong::before { content: "✗ "; font-weight: 700; }
        .adj-mistake-right::before { content: "✓ "; font-weight: 700; }

        /* ── upgrade bank ── */
        .adj-upgrade-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: .75rem; }
        .adj-upgrade-pair {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #e2e8f0; border-radius: 10px;
          padding: 8px 14px; font-size: 13px;
        }
        .adj-upgrade-basic { color: #dc2626; font-weight: 600; text-decoration: line-through; }
        .adj-upgrade-arrow { color: #94a3b8; }
        .adj-upgrade-better { color: #16a34a; font-weight: 700; }

        @media (max-width: 600px) {
          .adj-grid, .adj-task-grid, .adj-upgrade-grid { grid-template-columns: 1fr; }
          .adj-order-row { flex-direction: column; align-items: flex-start; }
          .adj-order-arrow { transform: rotate(90deg); }
        }
      </style>

      <!-- ── TAB BAR ── -->
<div class="adj-tab-bar">
  <button class="adj-tab-btn adj-tab-active" onclick="adjShowTab('adj-ref')">📖 Reference</button>
  <button class="adj-tab-btn" onclick="adjShowTab('adj-quiz')">🃏 Flip Card Quiz</button>
  <button class="adj-tab-btn" onclick="adjShowTab('adj-fill')">✏️ Fill in the Blanks</button>
      <button class="adj-tab-btn" onclick="adjShowTab('adj-int')">🎚️ Intensifiers Quiz</button>
  </div>

<!-- ── PANEL 1: reference (wrap ALL your existing sections in this div) ── -->
<div id="adj-ref" class="adj-tab-panel adj-tab-panel-active">

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 1 — WHAT IS AN ADJECTIVE?
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">What is an Adjective?</div>
        <p class="adj-intro">
          An adjective <strong>describes or modifies a noun or pronoun</strong> — it tells us more about a person,
          place, thing, or idea. Adjectives answer questions like <em>What kind? Which one? How many? How much?</em>
          In CELPIP, adjectives are one of the fastest ways to raise your <strong>Vocabulary</strong> and
          <strong>Lexical Range</strong> scores because they show the examiner you can be precise and varied.
        </p>
        <div class="adj-grid">
          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">📍</span>
              <span class="adj-card-title">Attributive Position</span>
            </div>
            <div class="adj-card-desc">Placed <strong>before</strong> the noun it modifies. Most common position in English.</div>
            <div class="adj-examples">
              <div class="adj-ex">It was a <em>breathtaking</em> view.</div>
              <div class="adj-ex">She gave a <em>detailed</em> explanation.</div>
              <div class="adj-ex">He made a <em>costly</em> mistake.</div>
            </div>
          </div>
          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🔗</span>
              <span class="adj-card-title">Predicative Position</span>
            </div>
            <div class="adj-card-desc">Comes <strong>after</strong> a linking verb (be, seem, look, feel, become, appear).</div>
            <div class="adj-examples">
              <div class="adj-ex">The park is <em>enormous</em>.</div>
              <div class="adj-ex">She seemed <em>exhausted</em> after the shift.</div>
              <div class="adj-ex">The result became <em>inevitable</em>.</div>
            </div>
          </div>
          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🪆</span>
              <span class="adj-card-title">Post-positive (after noun)</span>
            </div>
            <div class="adj-card-desc">Used in fixed phrases and formal writing — sounds polished and native-like.</div>
            <div class="adj-examples">
              <div class="adj-ex">Something <em>remarkable</em> happened.</div>
              <div class="adj-ex">Anyone <em>interested</em> may apply.</div>
              <div class="adj-ex">The people <em>involved</em> were notified.</div>
            </div>
          </div>
        </div>
      </div>

       <!-- ══════════════════════════════════════════════════════════════
           SECTION 1b — ADJECTIVE vs ADVERB
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Adjective vs Adverb — What's the Difference?</div>
        <p class="adj-intro">
          These two word classes are the most commonly confused in CELPIP. The rule is simple:
          an <strong>adjective</strong> modifies a <strong>noun or pronoun</strong>;
          an <strong>adverb</strong> modifies a <strong>verb, adjective, or another adverb</strong>.
          Mixing them up directly lowers your Grammar and Vocabulary band scores.
        </p>

        <!-- side-by-side comparison -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem;">
          <div style="background:#ede9fe;border:1px solid #c4b5fd;border-radius:12px;padding:1.1rem 1.25rem;">
            <div style="font-size:.8rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#4f46e5;margin-bottom:.5rem;">🟣 Adjective</div>
            <div style="font-size:13px;color:#1e293b;margin-bottom:.5rem;line-height:1.6;">Modifies a <strong>noun or pronoun</strong>.<br>Answers: <em>What kind? Which? How many?</em></div>
            <div class="adj-ex" style="margin-bottom:5px;">She is a <em>careful</em> driver. <span style="color:#94a3b8;font-size:11px;">(describes the noun "driver")</span></div>
            <div class="adj-ex" style="margin-bottom:5px;">The report was <em>thorough</em>. <span style="color:#94a3b8;font-size:11px;">(after linking verb "was")</span></div>
            <div class="adj-ex">He felt <em>confident</em> before the test. <span style="color:#94a3b8;font-size:11px;">(after "felt")</span></div>
          </div>
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:1.1rem 1.25rem;">
            <div style="font-size:.8rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#16a34a;margin-bottom:.5rem;">🟢 Adverb</div>
            <div style="font-size:13px;color:#1e293b;margin-bottom:.5rem;line-height:1.6;">Modifies a <strong>verb, adjective, or adverb</strong>.<br>Answers: <em>How? When? Where? To what extent?</em></div>
            <div class="adj-ex" style="margin-bottom:5px;">She drives <em>carefully</em>. <span style="color:#94a3b8;font-size:11px;">(modifies the verb "drives")</span></div>
            <div class="adj-ex" style="margin-bottom:5px;">The report was <em>thoroughly</em> reviewed. <span style="color:#94a3b8;font-size:11px;">(modifies verb "reviewed")</span></div>
            <div class="adj-ex">He spoke <em>confidently</em> during the test. <span style="color:#94a3b8;font-size:11px;">(modifies "spoke")</span></div>
          </div>
        </div>

        <!-- quick test -->
        <div style="background:#fefce8;border:1px solid #fde68a;border-radius:12px;padding:1rem 1.25rem;margin-bottom:1.25rem;">
          <div style="font-size:13px;font-weight:700;color:#92400e;margin-bottom:.5rem;">💡 Quick Test — which word does it modify?</div>
          <div style="font-size:13px;color:#374151;line-height:1.8;">
            Ask: <em>"Is the word I'm modifying a noun/pronoun?"</em> → use an <strong>adjective</strong>.<br>
            Ask: <em>"Is the word I'm modifying a verb, adjective, or adverb?"</em> → use an <strong>adverb</strong>.
          </div>
        </div>

        <!-- comparison table -->
        <table class="adj-table">
          <thead>
            <tr><th>❌ Common Error</th><th>✅ Correct Form</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>"She sings <em>beautiful</em>."</td>
              <td>"She sings <em>beautifully</em>."</td>
              <td><em>beautifully</em> modifies the verb <em>sings</em> → needs adverb</td>
            </tr>
            <tr>
              <td>"He is a <em>hardly</em> worker."</td>
              <td>"He is a <em>hard</em> worker."</td>
              <td><em>hard</em> modifies the noun <em>worker</em> → needs adjective</td>
            </tr>
            <tr>
              <td>"The food smells <em>wonderfully</em>."</td>
              <td>"The food smells <em>wonderful</em>."</td>
              <td><em>smell</em> is a linking verb here → use adjective after it</td>
            </tr>
            <tr>
              <td>"She did <em>good</em> in the exam."</td>
              <td>"She did <em>well</em> in the exam."</td>
              <td><em>well</em> is the adverb form of <em>good</em>; modifies verb <em>did</em></td>
            </tr>
            <tr>
              <td>"It was a <em>surprisingly</em> result."</td>
              <td>"It was a <em>surprising</em> result."</td>
              <td><em>surprising</em> modifies the noun <em>result</em> → needs adjective</td>
            </tr>
          </tbody>
        </table>

        <!-- linking verb trap -->
        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:1rem 1.25rem;margin-top:1rem;">
          <div style="font-size:13px;font-weight:700;color:#991b1b;margin-bottom:.4rem;">⚠️ The Linking Verb Trap — the #1 CELPIP adjective/adverb mistake</div>
          <div style="font-size:13px;color:#374151;line-height:1.75;">
            After linking verbs (<em>be, seem, look, feel, taste, smell, sound, become, appear, remain, stay</em>),
            always use an <strong>adjective</strong> — not an adverb. The adjective describes the <em>subject</em>, not the verb.<br><br>
            ❌ <span style="color:#dc2626;font-weight:600;">"The soup tastes <em>wonderfully</em>."</span><br>
            ✅ <span style="color:#16a34a;font-weight:600;">"The soup tastes <em>wonderful</em>."</span> — <em>wonderful</em> describes the soup, not how it tastes.<br><br>
            ❌ <span style="color:#dc2626;font-weight:600;">"She looks <em>tiredly</em> after the shift."</span><br>
            ✅ <span style="color:#16a34a;font-weight:600;">"She looks <em>tired</em> after the shift."</span> — <em>tired</em> describes her appearance.
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 2 — ALL TYPES OF ADJECTIVES
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">All Types of Adjectives</div>
        <p class="adj-intro">English adjectives fall into distinct categories. Understanding each type lets you choose the right word and combine adjectives naturally — a key marker of fluency assessed in CELPIP.</p>
        <div class="adj-grid">

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🎨</span>
              <span class="adj-card-title">Descriptive (Quality)</span>
              <span class="adj-card-tag">Most common</span>
            </div>
            <div class="adj-card-desc">Describe a quality, characteristic, or state of the noun. The largest and most important category for CELPIP.</div>
            <div class="adj-examples">
              <div class="adj-ex">a <em>vibrant</em> community / a <em>cramped</em> apartment</div>
              <div class="adj-ex">a <em>reliable</em> colleague / a <em>tedious</em> commute</div>
              <div class="adj-ex">a <em>serene</em> lake / a <em>bustling</em> downtown</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🔢</span>
              <span class="adj-card-title">Quantitative</span>
            </div>
            <div class="adj-card-desc">Tell us <em>how much</em> or <em>how many</em>. Use these when discussing data or preferences in Task 7 opinions.</div>
            <div class="adj-examples">
              <div class="adj-ex"><em>Several</em> studies confirm this.</div>
              <div class="adj-ex"><em>Numerous</em> residents complained.</div>
              <div class="adj-ex">There is <em>sufficient</em> evidence.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">👉</span>
              <span class="adj-card-title">Demonstrative</span>
            </div>
            <div class="adj-card-desc">Point to specific nouns: <strong>this, that, these, those</strong>. Use to anchor your argument in Task 5 & 7.</div>
            <div class="adj-examples">
              <div class="adj-ex"><em>This</em> option is far more practical.</div>
              <div class="adj-ex"><em>Those</em> concerns are valid.</div>
              <div class="adj-ex"><em>These</em> changes will benefit everyone.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">❓</span>
              <span class="adj-card-title">Interrogative</span>
            </div>
            <div class="adj-card-desc"><strong>Which, what, whose</strong> when used before a noun. Useful in Task 1 (giving advice) to frame choices.</div>
            <div class="adj-examples">
              <div class="adj-ex"><em>Which</em> route do you prefer?</div>
              <div class="adj-ex"><em>What</em> approach would work best?</div>
              <div class="adj-ex"><em>Whose</em> responsibility is it?</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🏴</span>
              <span class="adj-card-title">Possessive</span>
            </div>
            <div class="adj-card-desc"><strong>My, your, his, her, its, our, their</strong> before a noun. Common in Task 2 personal experience narratives.</div>
            <div class="adj-examples">
              <div class="adj-ex">I shared <em>my</em> concerns openly.</div>
              <div class="adj-ex"><em>Her</em> determination was inspiring.</div>
              <div class="adj-ex">We doubled <em>our</em> efforts immediately.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">📊</span>
              <span class="adj-card-title">Comparative</span>
              <span class="adj-card-tag">Task 5 key</span>
            </div>
            <div class="adj-card-desc">Compare two things. Add <strong>-er</strong> (short adjectives) or <strong>more / less</strong> (long adjectives) + <em>than</em>.</div>
            <div class="adj-examples">
              <div class="adj-ex">Option A is <em>more cost-effective than</em> Option B.</div>
              <div class="adj-ex">Public transit is <em>faster than</em> driving downtown.</div>
              <div class="adj-ex">The second plan is <em>less risky than</em> the first.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🏆</span>
              <span class="adj-card-title">Superlative</span>
              <span class="adj-card-tag">Task 5 key</span>
            </div>
            <div class="adj-card-desc">Rank one above/below all others. Add <strong>-est</strong> or <strong>the most / least</strong> before the adjective.</div>
            <div class="adj-examples">
              <div class="adj-ex">This is <em>the most efficient</em> solution available.</div>
              <div class="adj-ex">It was <em>the worst</em> commute I had experienced.</div>
              <div class="adj-ex">She is <em>the least experienced</em> member of the team.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🌍</span>
              <span class="adj-card-title">Proper</span>
            </div>
            <div class="adj-card-desc">Derived from proper nouns — always capitalized. Show cultural awareness in CELPIP Writing.</div>
            <div class="adj-examples">
              <div class="adj-ex">a <em>Canadian</em> perspective</div>
              <div class="adj-ex"><em>Victorian</em> architecture</div>
              <div class="adj-ex">an <em>Indigenous</em> tradition</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">✅</span>
              <span class="adj-card-title">Indefinite</span>
            </div>
            <div class="adj-card-desc"><strong>Some, any, few, many, each, every, either, neither</strong> — give a non-specific quantity or selection.</div>
            <div class="adj-examples">
              <div class="adj-ex"><em>Every</em> candidate must meet this standard.</div>
              <div class="adj-ex"><em>Few</em> options remain at this stage.</div>
              <div class="adj-ex"><em>Each</em> point should be supported.</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🔗</span>
              <span class="adj-card-title">Participial</span>
            </div>
            <div class="adj-card-desc">Formed from verbs (-ing or -ed endings). A strong marker of advanced grammar for CELPIP examiners.</div>
            <div class="adj-examples">
              <div class="adj-ex">a <em>compelling</em> argument / a <em>convincing</em> case</div>
              <div class="adj-ex">a <em>well-organized</em> response</div>
              <div class="adj-ex">an <em>overwhelming</em> majority agreed</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🔄</span>
              <span class="adj-card-title">Compound</span>
            </div>
            <div class="adj-card-desc">Two or more words hyphenated to form one modifier. Instantly sounds native and sophisticated.</div>
            <div class="adj-examples">
              <div class="adj-ex">a <em>well-known</em> landmark</div>
              <div class="adj-ex">a <em>thought-provoking</em> idea</div>
              <div class="adj-ex">a <em>long-term</em> solution</div>
            </div>
          </div>

          <div class="adj-card">
            <div class="adj-card-header">
              <span class="adj-card-icon">🎭</span>
              <span class="adj-card-title">Emotion / Opinion</span>
              <span class="adj-card-tag">Task 7 key</span>
            </div>
            <div class="adj-card-desc">Express feelings or evaluations. Essential in Task 7 (Expressing Opinions) and Task 2 (Personal Experience).</div>
            <div class="adj-examples">
              <div class="adj-ex">I found the experience <em>deeply rewarding</em>.</div>
              <div class="adj-ex">The decision was <em>controversial yet necessary</em>.</div>
              <div class="adj-ex">It was an <em>unforgettable</em> moment.</div>
            </div>
          </div>

        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 3 — ORDER OF ADJECTIVES
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Order of Adjectives (OSASCOMP)</div>
        <p class="adj-intro">
          When stacking multiple adjectives, native speakers follow an instinctive order. Violating this order doesn't
          make you grammatically wrong, but it sounds unnatural and lowers your <strong>Listenability</strong> score.
          The mnemonic is <strong>OSASCOMP</strong>.
        </p>
        <div class="adj-order-row">
          <div class="adj-order-badge"><span class="adj-order-num">1</span><span class="adj-order-label">Opinion</span><span class="adj-order-ex">lovely, awful</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">2</span><span class="adj-order-label">Size</span><span class="adj-order-ex">tiny, massive</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">3</span><span class="adj-order-label">Age</span><span class="adj-order-ex">ancient, modern</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">4</span><span class="adj-order-label">Shape</span><span class="adj-order-ex">round, narrow</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">5</span><span class="adj-order-label">Colour</span><span class="adj-order-ex">golden, pale</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">6</span><span class="adj-order-label">Origin</span><span class="adj-order-ex">Canadian, local</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">7</span><span class="adj-order-label">Material</span><span class="adj-order-ex">wooden, glass</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge"><span class="adj-order-num">8</span><span class="adj-order-label">Purpose</span><span class="adj-order-ex">sleeping (bag)</span></div>
          <span class="adj-order-arrow">→</span>
          <div class="adj-order-badge" style="border-color:#6366f1;background:#ede9fe"><span class="adj-order-num" style="color:#4f46e5">→</span><span class="adj-order-label" style="color:#4f46e5">NOUN</span></div>
        </div>
        <table class="adj-table" style="margin-top:.5rem">
          <thead><tr><th>❌ Unnatural</th><th>✅ Native order</th><th>Why</th></tr></thead>
          <tbody>
            <tr><td>a <em>wooden old small cabin</em></td><td>a <em>lovely small old wooden cabin</em></td><td>Opinion → Size → Age → Material</td></tr>
            <tr><td>a <em>Canadian reliable modern car</em></td><td>a <em>reliable modern Canadian car</em></td><td>Opinion → Age → Origin</td></tr>
            <tr><td>a <em>red big beautiful scarf</em></td><td>a <em>beautiful big red scarf</em></td><td>Opinion → Size → Colour</td></tr>
            <tr><td><em>round gorgeous tiny earrings</em></td><td><em>gorgeous tiny round earrings</em></td><td>Opinion → Size → Shape</td></tr>
          </tbody>
        </table>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 4 — COMPARATIVE & SUPERLATIVE (FULL RULES)
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Comparative &amp; Superlative — Complete Rules</div>
        <p class="adj-intro">CELPIP Task 5 (Comparing &amp; Persuading) is scored heavily on how accurately and confidently you compare two options. Master these forms.</p>
        <table class="adj-table">
          <thead><tr><th>Adjective type</th><th>Comparative</th><th>Superlative</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>1 syllable</td><td>+ <em>-er</em></td><td>+ <em>-est</em></td><td>fast → <em>faster</em> → <em>fastest</em></td></tr>
            <tr><td>1 syllable ending CVC</td><td>double final consonant + <em>-er</em></td><td>double + <em>-est</em></td><td>big → <em>bigger</em> → <em>biggest</em></td></tr>
            <tr><td>2 syllables ending in <em>-y</em></td><td>change y→i + <em>-er</em></td><td>change y→i + <em>-est</em></td><td>busy → <em>busier</em> → <em>busiest</em></td></tr>
            <tr><td>2+ syllables</td><td><em>more</em> + adj</td><td><em>the most</em> + adj</td><td>efficient → <em>more efficient</em> → <em>the most efficient</em></td></tr>
            <tr><td>Lower degree</td><td><em>less</em> + adj</td><td><em>the least</em> + adj</td><td>practical → <em>less practical</em> → <em>the least practical</em></td></tr>
            <tr><td>Irregular: good</td><td><em>better</em></td><td><em>best</em></td><td>This plan is <em>better</em>; it's the <em>best</em> option.</td></tr>
            <tr><td>Irregular: bad</td><td><em>worse</em></td><td><em>worst</em></td><td>Traffic was <em>worse</em>; Monday is the <em>worst</em>.</td></tr>
            <tr><td>Irregular: far</td><td><em>farther(physical) / further(non-physical like discuss this further)</em></td><td><em>farthest / furthest</em></td><td>I walked <em>farther</em>; this goes <em>further</em> than expected.</td></tr>
            <tr><td>Irregular: little</td><td><em>less</em></td><td><em>least</em></td><td>We have <em>less</em> time; this causes the <em>least</em> disruption.</td></tr>
          </tbody>
        </table>
        <div style="margin-top:1rem;padding:1rem 1.25rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;font-size:13px;color:#166534;line-height:1.7;">
          <strong>💡 Booster tip:</strong> Strengthen comparatives with <em>much, far, considerably, significantly</em> before <em>more/less/better</em> — e.g. <em>"Option A is considerably more affordable than Option B"</em>. Soften with <em>a little, slightly, somewhat</em> — e.g. <em>"driving is slightly more convenient."</em> Both moves sound native and impress examiners.
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 9 — INTENSIFIERS
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Intensifiers — Make Your Adjectives More Powerful</div>
        <p class="adj-intro">
          An <strong>intensifier</strong> is a word placed before an adjective (or adverb) to
          <em>strengthen or weaken</em> its meaning. Native speakers rely on intensifiers constantly
          to add nuance and emotion. In CELPIP, using varied intensifiers instead of repeating
          <em>"very"</em> is one of the fastest ways to improve your <strong>Vocabulary</strong>
          and <strong>Listenability</strong> scores.
        </p>

        <style>
          /* ── intensifier-specific styles ── */
          .int-type-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
          .int-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
          .int-card-head {
            padding: 10px 16px; font-size: 12px; font-weight: 800;
            letter-spacing: .05em; text-transform: uppercase;
            display: flex; align-items: center; gap: 8px;
          }
          .int-card-body { padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 7px; }
          .int-word-row { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
          .int-word {
            font-size: 13.5px; font-weight: 700; min-width: 120px;
            color: #1e293b; flex-shrink: 0;
          }
          .int-ex { font-size: 13px; color: #475569; font-style: italic; }
          .int-ex em { font-style: normal; font-weight: 600; color: #4f46e5; }

          /* head colour themes */
          .int-head-amplifier  { background: #4f46e5; color: #fff; }
          .int-head-downtoner  { background: #0891b2; color: #fff; }
          .int-head-maximizer  { background: #7c3aed; color: #fff; }
          .int-head-approximator{ background: #0f766e; color: #fff; }
          .int-head-booster    { background: #b45309; color: #fff; }
          .int-head-diminisher { background: #475569; color: #fff; }

          /* gradability scale */
          .int-scale-wrap { margin-bottom: 1.5rem; }
          .int-scale-bar {
            height: 10px; border-radius: 99px;
            background: linear-gradient(to right, #bae6fd, #6366f1, #7c3aed, #4f46e5);
            position: relative; margin: .5rem 0 .25rem;
          }
          .int-scale-labels { display: flex; justify-content: space-between; font-size: 11px; color: #64748b; font-weight: 600; }
          .int-scale-words {
            display: flex; flex-wrap: wrap; gap: 6px; margin-top: .75rem;
          }
          .int-scale-badge {
            font-size: 12px; font-weight: 600; padding: 3px 12px;
            border-radius: 20px; border: 1px solid;
          }

          /* gradable vs non-gradable */
          .int-grad-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
          .int-grad-box { border-radius: 12px; padding: 1rem 1.25rem; }
          .int-grad-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; margin-bottom: .6rem; }
          .int-grad-row { font-size: 13px; margin-bottom: 5px; color: #374151; line-height: 1.6; }
          .int-grad-row em { color: #4f46e5; font-style: normal; font-weight: 600; }

          /* natural use tips */
          .int-tip-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: .85rem; margin-bottom: 1.5rem; }
          .int-tip-box {
            display: flex; gap: 12px; align-items: flex-start;
            background: #fefce8; border: 1px solid #fde68a; border-radius: 12px;
            padding: 1rem 1.25rem;
          }
          .int-tip-icon { font-size: 1.4rem; flex-shrink: 0; }
          .int-tip-body { font-size: 13px; color: #374151; line-height: 1.65; }
          .int-tip-body strong { color: #92400e; }

          /* collocation table */
          .int-col-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 1.5rem; }
          .int-col-table th {
            background: #4f46e5; color: #fff; padding: 9px 14px;
            text-align: left; font-size: 12px; font-weight: 700;
          }
          .int-col-table th:first-child { border-radius: 10px 0 0 0; }
          .int-col-table th:last-child  { border-radius: 0 10px 0 0; }
          .int-col-table td { padding: 8px 14px; border-bottom: 1px solid #f1f5f9; color: #334155; vertical-align: top; }
          .int-col-table tr:last-child td { border-bottom: none; }
          .int-col-table tr:nth-child(even) td { background: #f8fafc; }
          .int-col-table em { color: #4f46e5; font-style: normal; font-weight: 600; }

          /* mistake pairs */
          .int-mistake-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: .85rem; }
          .int-mistake-box { border: 1px solid #fecaca; border-radius: 12px; overflow: hidden; }
          .int-mistake-head { background: #fef2f2; padding: 7px 12px; font-size: 12px; font-weight: 700; color: #991b1b; }
          .int-mistake-body { padding: 10px 12px; background: #fff; display: flex; flex-direction: column; gap: 4px; }
          .int-m-wrong { font-size: 13px; color: #dc2626; }
          .int-m-right { font-size: 13px; color: #16a34a; }
          .int-m-why   { font-size: 11.5px; color: #64748b; font-style: italic; margin-top: 2px; }
          .int-m-wrong::before { content: "✗ "; font-weight: 700; }
          .int-m-right::before { content: "✓ "; font-weight: 700; }

          @media (max-width: 600px) {
            .int-type-grid, .int-grad-grid, .int-tip-grid, .int-mistake-grid { grid-template-columns: 1fr; }
          }
        </style>

        <!-- ── INTENSITY SCALE ─────────────────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">The Intensity Scale</div>
        <div class="int-scale-wrap">
          <div class="int-scale-bar"></div>
          <div class="int-scale-labels">
            <span>⬇ Weakest</span>
            <span>Neutral / Base adjective</span>
            <span>Strongest ⬆</span>
          </div>
          <div class="int-scale-words">
            <span class="int-scale-badge" style="background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8;">barely</span>
            <span class="int-scale-badge" style="background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8;">slightly</span>
            <span class="int-scale-badge" style="background:#f0f9ff;border-color:#bae6fd;color:#0369a1;">a little</span>
            <span class="int-scale-badge" style="background:#f0f9ff;border-color:#bae6fd;color:#0369a1;">somewhat</span>
            <span class="int-scale-badge" style="background:#f5f3ff;border-color:#ddd6fe;color:#4f46e5;">fairly</span>
            <span class="int-scale-badge" style="background:#f5f3ff;border-color:#ddd6fe;color:#4f46e5;">rather</span>
            <span class="int-scale-badge" style="background:#ede9fe;border-color:#c4b5fd;color:#4f46e5;">quite</span>
            <span class="int-scale-badge" style="background:#ede9fe;border-color:#c4b5fd;color:#4f46e5;">pretty</span>
            <span class="int-scale-badge" style="background:#e0e7ff;border-color:#a5b4fc;color:#3730a3;">very</span>
            <span class="int-scale-badge" style="background:#e0e7ff;border-color:#a5b4fc;color:#3730a3;">really</span>
            <span class="int-scale-badge" style="background:#ddd6fe;border-color:#8b5cf6;color:#3730a3;">highly</span>
            <span class="int-scale-badge" style="background:#ddd6fe;border-color:#8b5cf6;color:#3730a3;">extremely</span>
            <span class="int-scale-badge" style="background:#c4b5fd;border-color:#7c3aed;color:#fff;">incredibly</span>
            <span class="int-scale-badge" style="background:#c4b5fd;border-color:#7c3aed;color:#fff;">remarkably</span>
            <span class="int-scale-badge" style="background:#7c3aed;border-color:#6d28d9;color:#fff;">absolutely</span>
            <span class="int-scale-badge" style="background:#4f46e5;border-color:#3730a3;color:#fff;">utterly</span>
            <span class="int-scale-badge" style="background:#3730a3;border-color:#312e81;color:#fff;">completely</span>
          </div>
        </div>

        <!-- ── 6 TYPES OF INTENSIFIERS ─────────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">6 Types of Intensifiers</div>
        <div class="int-type-grid">

          <div class="int-card">
            <div class="int-card-head int-head-amplifier">🔊 Amplifiers — increase intensity</div>
            <div class="int-card-body">
              <div class="int-word-row"><span class="int-word">very</span><span class="int-ex">The exam was <em>very</em> challenging.</span></div>
              <div class="int-word-row"><span class="int-word">extremely</span><span class="int-ex">It was <em>extremely</em> cold that morning.</span></div>
              <div class="int-word-row"><span class="int-word">highly</span><span class="int-ex">She is <em>highly</em> motivated.</span></div>
              <div class="int-word-row"><span class="int-word">deeply</span><span class="int-ex">I was <em>deeply</em> moved by the story.</span></div>
              <div class="int-word-row"><span class="int-word">remarkably</span><span class="int-ex">The results were <em>remarkably</em> consistent.</span></div>
              <div class="int-word-row"><span class="int-word">incredibly</span><span class="int-ex">The view was <em>incredibly</em> breathtaking.</span></div>
              <div class="int-word-row"><span class="int-word">exceptionally</span><span class="int-ex">She was <em>exceptionally</em> well-prepared.</span></div>
            </div>
          </div>

          <div class="int-card">
            <div class="int-card-head int-head-maximizer">🔝 Maximizers — signal the absolute limit</div>
            <div class="int-card-body">
              <div style="font-size:12px;color:#6b7280;padding:0 0 6px;font-style:italic;">Used with extreme (non-gradable) adjectives only. Never with "very."</div>
              <div class="int-word-row"><span class="int-word">absolutely</span><span class="int-ex">It was <em>absolutely</em> perfect.</span></div>
              <div class="int-word-row"><span class="int-word">completely</span><span class="int-ex">I was <em>completely</em> exhausted.</span></div>
              <div class="int-word-row"><span class="int-word">utterly</span><span class="int-ex">The plan was <em>utterly</em> flawed.</span></div>
              <div class="int-word-row"><span class="int-word">totally</span><span class="int-ex">She was <em>totally</em> unprepared.</span></div>
              <div class="int-word-row"><span class="int-word">purely</span><span class="int-ex">It was <em>purely</em> coincidental.</span></div>
              <div class="int-word-row"><span class="int-word">entirely</span><span class="int-ex">That is <em>entirely</em> unacceptable.</span></div>
            </div>
          </div>

          <div class="int-card">
            <div class="int-card-head int-head-downtoner">🔉 Downtoners — reduce intensity</div>
            <div class="int-card-body">
              <div class="int-word-row"><span class="int-word">slightly</span><span class="int-ex">The result was <em>slightly</em> disappointing.</span></div>
              <div class="int-word-row"><span class="int-word">somewhat</span><span class="int-ex">I was <em>somewhat</em> surprised.</span></div>
              <div class="int-word-row"><span class="int-word">a little</span><span class="int-ex">It was <em>a little</em> overwhelming at first.</span></div>
              <div class="int-word-row"><span class="int-word">barely</span><span class="int-ex">The room was <em>barely</em> adequate.</span></div>
              <div class="int-word-row"><span class="int-word">hardly</span><span class="int-ex">It was <em>hardly</em> noticeable.</span></div>
              <div class="int-word-row"><span class="int-word">mildly</span><span class="int-ex">She seemed <em>mildly</em> concerned.</span></div>
            </div>
          </div>

          <div class="int-card">
            <div class="int-card-head int-head-approximator">〰️ Approximators — express nearness to a degree</div>
            <div class="int-card-body">
              <div class="int-word-row"><span class="int-word">almost</span><span class="int-ex">It was <em>almost</em> impossible to focus.</span></div>
              <div class="int-word-row"><span class="int-word">nearly</span><span class="int-ex">The task was <em>nearly</em> complete.</span></div>
              <div class="int-word-row"><span class="int-word">practically</span><span class="int-ex">It was <em>practically</em> invisible.</span></div>
              <div class="int-word-row"><span class="int-word">virtually</span><span class="int-ex">The area was <em>virtually</em> deserted.</span></div>
              <div class="int-word-row"><span class="int-word">essentially</span><span class="int-ex">The two plans are <em>essentially</em> identical.</span></div>
            </div>
          </div>

          <div class="int-card">
            <div class="int-card-head int-head-booster">⚡ Boosters — formal / academic amplifiers</div>
            <div class="int-card-body">
              <div style="font-size:12px;color:#6b7280;padding:0 0 6px;font-style:italic;">Use these in CELPIP Writing Task 2 to sound formal and precise.</div>
              <div class="int-word-row"><span class="int-word">significantly</span><span class="int-ex">Costs have become <em>significantly</em> higher.</span></div>
              <div class="int-word-row"><span class="int-word">considerably</span><span class="int-ex">Option A is <em>considerably</em> more efficient.</span></div>
              <div class="int-word-row"><span class="int-word">substantially</span><span class="int-ex">Risks are <em>substantially</em> reduced.</span></div>
              <div class="int-word-row"><span class="int-word">notably</span><span class="int-ex">The outcome was <em>notably</em> different.</span></div>
              <div class="int-word-row"><span class="int-word">overwhelmingly</span><span class="int-ex">The response was <em>overwhelmingly</em> positive.</span></div>
              <div class="int-word-row"><span class="int-word">undeniably</span><span class="int-ex">This is <em>undeniably</em> the better approach.</span></div>
            </div>
          </div>

          <div class="int-card">
            <div class="int-card-head int-head-diminisher">🌫️ Diminishers — polite / hedged weakeners</div>
            <div class="int-card-body">
              <div style="font-size:12px;color:#6b7280;padding:0 0 6px;font-style:italic;">Use in Task 6 (difficult situation) to sound diplomatic, not aggressive.</div>
              <div class="int-word-row"><span class="int-word">fairly</span><span class="int-ex">The response was <em>fairly</em> reasonable.</span></div>
              <div class="int-word-row"><span class="int-word">rather</span><span class="int-ex">I found it <em>rather</em> inconvenient.</span></div>
              <div class="int-word-row"><span class="int-word">quite</span><span class="int-ex">The delay was <em>quite</em> unexpected.</span></div>
              <div class="int-word-row"><span class="int-word">pretty</span><span class="int-ex">That was <em>pretty</em> difficult to handle.</span></div>
              <div class="int-word-row"><span class="int-word">moderately</span><span class="int-ex">I was <em>moderately</em> satisfied with the result.</span></div>
            </div>
          </div>

        </div>

        <!-- ── GRADABLE vs NON-GRADABLE ───────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">Gradable vs Non-Gradable Adjectives — Which Intensifier Fits?</div>
        <p class="adj-intro" style="margin-bottom:.85rem;">
          This is the rule native speakers follow instinctively. Using the wrong intensifier with the
          wrong adjective type is one of the most noticeable fluency errors on CELPIP.
        </p>
        <div class="int-grad-grid">
          <div class="int-grad-box" style="background:#ede9fe;border:1px solid #c4b5fd;">
            <div class="int-grad-title" style="color:#4f46e5;">🎚️ Gradable adjectives</div>
            <div style="font-size:12px;color:#4f46e5;margin-bottom:.6rem;">Use: very, extremely, fairly, quite, rather, slightly, somewhat, incredibly…</div>
            <div class="int-grad-row"><em>very tired</em> / <em>extremely busy</em></div>
            <div class="int-grad-row"><em>fairly cold</em> / <em>quite expensive</em></div>
            <div class="int-grad-row"><em>slightly nervous</em> / <em>rather unusual</em></div>
            <div class="int-grad-row"><em>incredibly fast</em> / <em>remarkably calm</em></div>
          </div>
          <div class="int-grad-box" style="background:#fdf4ff;border:1px solid #e9d5ff;">
            <div class="int-grad-title" style="color:#7c3aed;">🔝 Non-gradable (extreme) adjectives</div>
            <div style="font-size:12px;color:#7c3aed;margin-bottom:.6rem;">Use: absolutely, completely, utterly, totally, entirely, purely — NEVER "very"</div>
            <div class="int-grad-row"><em>absolutely furious</em> ✅ / <em style="color:#dc2626">very furious</em> ❌</div>
            <div class="int-grad-row"><em>completely exhausted</em> ✅ / <em style="color:#dc2626">very exhausted</em> ❌</div>
            <div class="int-grad-row"><em>utterly devastated</em> ✅ / <em style="color:#dc2626">very devastated</em> ❌</div>
            <div class="int-grad-row"><em>totally frozen</em> ✅ / <em style="color:#dc2626">very frozen</em> ❌</div>
          </div>
        </div>

        <!-- ── NATURAL COLLOCATIONS ────────────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">Natural Intensifier + Adjective Collocations</div>
        <p class="adj-intro" style="margin-bottom:.85rem;">
          Native speakers don't just pick <em>any</em> intensifier — certain intensifiers
          collocate strongly with specific adjectives. Using these pairs signals true fluency.
        </p>
        <table class="int-col-table">
          <thead>
            <tr><th>Intensifier</th><th>Collocates naturally with…</th><th>Avoid pairing with…</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>deeply</strong></td>
              <td><em>concerned, moved, troubled, rooted, committed, disappointed, grateful</em></td>
              <td>deeply tall, deeply cold <span style="color:#dc2626">(physical adjectives)</span></td>
            </tr>
            <tr>
              <td><strong>highly</strong></td>
              <td><em>skilled, motivated, recommended, competitive, effective, regarded, trained</em></td>
              <td>highly hot, highly tired <span style="color:#dc2626">(emotion/sensation adjectives)</span></td>
            </tr>
            <tr>
              <td><strong>bitterly</strong></td>
              <td><em>cold, disappointed, divided, resentful, ironic, contested</em></td>
              <td>bitterly happy, bitterly large</td>
            </tr>
            <tr>
              <td><strong>perfectly</strong></td>
              <td><em>clear, normal, reasonable, capable, valid, understandable, acceptable</em></td>
              <td>perfectly angry, perfectly difficult</td>
            </tr>
            <tr>
              <td><strong>terribly</strong></td>
              <td><em>sorry, wrong, important, difficult, upset, worried, embarrassed</em></td>
              <td>terribly tall, terribly fast</td>
            </tr>
            <tr>
              <td><strong>strongly</strong></td>
              <td><em>opposed, committed, influenced, built, worded, suggested, held</em></td>
              <td>strongly tired, strongly cold</td>
            </tr>
            <tr>
              <td><strong>considerably</strong></td>
              <td><em>more/less + adj, larger, smaller, faster, older, cheaper, better</em></td>
              <td>considerably furious, considerably afraid</td>
            </tr>
            <tr>
              <td><strong>genuinely</strong></td>
              <td><em>surprised, concerned, impressed, happy, confused, thankful, interested</em></td>
              <td>genuinely enormous, genuinely freezing</td>
            </tr>
          </tbody>
        </table>

        <!-- ── HOW TO USE NATURALLY ───────────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">How to Use Intensifiers Naturally — 6 Rules</div>
        <div class="int-tip-grid">
          <div class="int-tip-box">
            <span class="int-tip-icon">🔁</span>
            <div class="int-tip-body">
              <strong>Never repeat "very" twice in a row.</strong> Rotate through the scale.
              ❌ "It was very, very good." → ✅ "It was remarkably good" or
              "It was exceptionally well done."
            </div>
          </div>
          <div class="int-tip-box">
            <span class="int-tip-icon">🎯</span>
            <div class="int-tip-body">
              <strong>Match intensifier strength to context.</strong> In Task 6 (complaints),
              use downtoners to sound polite: <em>"I was rather disappointed"</em> not
              <em>"I was absolutely furious"</em> — even if you are.
            </div>
          </div>
          <div class="int-tip-box">
            <span class="int-tip-icon">📝</span>
            <div class="int-tip-body">
              <strong>In Writing Task 2, prefer formal boosters.</strong>
              Replace <em>"very different"</em> with <em>"considerably different"</em>
              or <em>"notably distinct."</em> Informal intensifiers like <em>"pretty"</em>
              or <em>"really"</em> lower your register score in essays.
            </div>
          </div>
          <div class="int-tip-box">
            <span class="int-tip-icon">🎙️</span>
            <div class="int-tip-body">
              <strong>In Speaking, stress the intensifier — not the adjective.</strong>
              Native speakers say <em>"abSOlutely perfect"</em> and <em>"inCREDibly helpful."</em>
              This stress pattern signals fluency to the examiner.
            </div>
          </div>
          <div class="int-tip-box">
            <span class="int-tip-icon">🧊</span>
            <div class="int-tip-body">
              <strong>Never use "very" before an extreme adjective.</strong>
              ❌ "very starving / very freezing / very furious" →
              ✅ "absolutely starving / utterly freezing / completely furious."
              This is the single most common intensifier error on CELPIP.
            </div>
          </div>
          <div class="int-tip-box">
            <span class="int-tip-icon">🤝</span>
            <div class="int-tip-body">
              <strong>Learn collocations as chunks.</strong> Don't build intensifier + adjective
              pairs from scratch — memorise natural chunks:
              <em>deeply committed, highly skilled, bitterly cold, perfectly reasonable,
              strongly opposed, terribly sorry.</em>
            </div>
          </div>
        </div>

        <!-- ── COMMON MISTAKES ────────────────────────────────────── -->
        <div class="adj-section-title" style="font-size:1rem;margin-bottom:.75rem;">Common Intensifier Mistakes</div>
        <div class="int-mistake-grid">
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ "very" with a non-gradable adjective</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"The soup was very boiling."</div>
              <div class="int-m-right">"The soup was absolutely boiling."</div>
              <div class="int-m-why">Boiling is extreme — it has no degrees. Use a maximizer.</div>
            </div>
          </div>
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ Formal intensifier in casual speech</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"The pizza was substantially delicious."</div>
              <div class="int-m-right">"The pizza was incredibly delicious."</div>
              <div class="int-m-why">"Substantially" is for formal comparisons, not everyday compliments.</div>
            </div>
          </div>
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ Casual intensifier in formal writing</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"The policy is pretty controversial."</div>
              <div class="int-m-right">"The policy is considerably controversial."</div>
              <div class="int-m-why">"Pretty" is too informal for CELPIP Writing Task 2 essays.</div>
            </div>
          </div>
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ Wrong collocation</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"She was deeply tall." / "He was highly angry."</div>
              <div class="int-m-right">"She was remarkably tall." / "He was deeply angry."</div>
              <div class="int-m-why">Intensifiers collocate selectively — learn them as fixed pairs.</div>
            </div>
          </div>
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ Repeating the same intensifier</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"It was very busy, very loud, and very tiring."</div>
              <div class="int-m-right">"It was incredibly busy, remarkably loud, and utterly tiring."</div>
              <div class="int-m-why">Repetition signals a limited vocabulary range — the examiner notices.</div>
            </div>
          </div>
          <div class="int-mistake-box">
            <div class="int-mistake-head">⚠️ "absolutely" with a gradable adjective</div>
            <div class="int-mistake-body">
              <div class="int-m-wrong">"It was absolutely cold outside."</div>
              <div class="int-m-right">"It was extremely cold" / "absolutely freezing."</div>
              <div class="int-m-why">"Cold" is gradable — save "absolutely" for the extreme form "freezing."</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 5 — HOW NATIVE SPEAKERS USE ADJECTIVES
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">How Native Speakers Use Adjectives</div>
        <p class="adj-intro">Native speakers don't just choose more complex adjectives — they use them in specific patterns that feel natural. Replicating these patterns will dramatically improve your Listenability and Vocabulary scores.</p>
        <div class="adj-tip-list">
          <div class="adj-tip">
            <span class="adj-tip-icon">🔁</span>
            <div class="adj-tip-body"><strong>They pair adjectives with strong nouns</strong> instead of using weak adjective + weak noun. Native: <em>"a gruelling commute"</em> not <em>"a very long and tiring trip."</em> The adjective does the heavy lifting.</div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">📐</span>
            <div class="adj-tip-body"><strong>They rarely stack more than 2–3 adjectives</strong> before a noun. Instead they use a second sentence or clause: <em>"The park is enormous. Its winding pathways are beautifully maintained."</em></div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">🎚️</span>
            <div class="adj-tip-body"><strong>They use gradable adjectives with intensifiers</strong>: <em>absolutely, remarkably, surprisingly, incredibly</em> + adj. These replace repetitive <em>"very, very"</em>. <br>❌ <em>"very very good"</em> → ✅ <em>"remarkably effective."</em></div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">🧊</span>
            <div class="adj-tip-body"><strong>They use non-gradable (extreme) adjectives WITHOUT "very"</strong>. You don't say <em>"very enormous"</em> or <em>"very furious."</em> Use <em>absolutely, completely, utterly</em> instead: <em>"absolutely enormous," "utterly exhausted."</em></div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">🤝</span>
            <div class="adj-tip-body"><strong>They use collocated adjective + noun pairs</strong> naturally. These are fixed combinations: <em>heavy traffic, golden opportunity, vivid memory, tight deadline, pressing issue, valid concern, heated debate.</em> Using these signals true fluency.</div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">🔀</span>
            <div class="adj-tip-body"><strong>They shift adjectives to predicative for variety</strong>: instead of repeating <em>"the crowded city"</em>, they say <em>"The city was incredibly crowded."</em> Mixing attributive and predicative forms shows syntactic flexibility — a key CELPIP marker.</div>
          </div>
          <div class="adj-tip">
            <span class="adj-tip-icon">💬</span>
            <div class="adj-tip-body"><strong>They use -ed vs -ing adjectives correctly</strong>: <em>-ing</em> describes the cause; <em>-ed</em> describes how a person feels. <em>"The meeting was exhausting"</em> (it caused fatigue) vs <em>"I was exhausted"</em> (I felt it). Mixing these up is a common CELPIP error.</div>
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 6 — CELPIP TASK-BY-TASK ADJECTIVE USE
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Adjectives Across All 8 CELPIP Speaking Tasks</div>
        <p class="adj-intro">Each CELPIP Speaking task rewards different adjective types. Here is how to deploy them strategically per task.</p>
        <div class="adj-task-grid">

          <div class="adj-task-card">
            <div class="adj-task-head">Task 1 — Giving Advice <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Your friend is nervous before a job interview."</div>
              <div class="adj-task-weak">"It is good to prepare. Be calm."</div>
              <div class="adj-task-strong">"Thorough preparation will make you feel considerably more <em>confident</em> and <em>well-equipped</em> to handle even the most <em>challenging</em> questions."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 2 — Personal Experience <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Describe a time you overcame a challenge."</div>
              <div class="adj-task-weak">"It was a hard time. I was sad."</div>
              <div class="adj-task-strong">"It was an <em>overwhelming</em> period — I felt <em>emotionally drained</em> but <em>determined</em> to push through."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 3 — Describing a Scene <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Describe what you see in the picture."</div>
              <div class="adj-task-weak">"There is a big park with green trees and some people."</div>
              <div class="adj-task-strong">"The park appears <em>sprawling</em> and <em>well-maintained</em>, with <em>lush</em> foliage and <em>scattered</em> groups of <em>relaxed</em>-looking people."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 4 — Making Predictions <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "What do you think will happen next?"</div>
              <div class="adj-task-weak">"I think it will be busy and people will be tired."</div>
              <div class="adj-task-strong">"The situation is likely to become <em>increasingly hectic</em>, leaving the residents <em>frustrated</em> and <em>desperate</em> for a <em>sustainable</em> solution."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 5 — Comparing &amp; Persuading <span class="adj-task-clb">CLB 8–10</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Bus vs driving — which would you recommend?"</div>
              <div class="adj-task-weak">"The bus is better. Driving is more expensive."</div>
              <div class="adj-task-strong">"Taking the bus is <em>considerably more economical</em> and <em>far less stressful</em> than driving, especially during <em>peak</em> hours when traffic is <em>notoriously unpredictable</em>."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 6 — Difficult Situation <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "You received the wrong order — explain to the company."</div>
              <div class="adj-task-weak">"The item was wrong. I am not happy."</div>
              <div class="adj-task-strong">"I am <em>deeply disappointed</em> as the item I received was completely <em>different</em> from what was described — the quality was <em>unacceptable</em> and the packaging was <em>damaged</em>."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 7 — Expressing Opinions <span class="adj-task-clb">CLB 8–10</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Should students wear uniforms?"</div>
              <div class="adj-task-weak">"Yes, it is a good idea because it is fair."</div>
              <div class="adj-task-strong">"Uniforms are an <em>equitable</em> and <em>practical</em> solution — they eliminate <em>socioeconomic</em> disparities and create a more <em>focused</em>, <em>inclusive</em> learning environment."</div>
            </div>
          </div>

          <div class="adj-task-card">
            <div class="adj-task-head">Task 8 — Unusual Situation <span class="adj-task-clb">CLB 7–9</span></div>
            <div class="adj-task-body">
              <div class="adj-task-scenario">e.g. "Describe a strange object you can see."</div>
              <div class="adj-task-weak">"It is a round thing. It looks old and broken."</div>
              <div class="adj-task-strong">"It appears to be a <em>circular</em>, <em>rusted</em> object — <em>roughly</em> the size of a dinner plate — with an <em>intricate</em> pattern etched across its <em>uneven</em>, <em>weathered</em> surface."</div>
            </div>
          </div>

        </div>

        <div style="margin-top:1.25rem;padding:1rem 1.25rem;background:#ede9fe;border:1px solid #c4b5fd;border-radius:12px;font-size:13px;color:#3730a3;line-height:1.7;">
          <strong>📝 Writing Tasks:</strong>
          In <strong>Task 1 (Email)</strong>, use formal adjectives like <em>urgent, inconvenient, grateful, appropriate, reasonable</em>.
          In <strong>Task 2 (Survey/Essay)</strong>, use evaluative adjectives like <em>beneficial, detrimental, sustainable, controversial, prevalent, significant</em>
          — and always vary them with synonyms to boost your Lexical Range score.
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 7 — COMMON MISTAKES & HOW TO FIX THEM
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Common Mistakes &amp; How to Fix Them</div>
        <p class="adj-intro">These are the most penalised adjective errors on CELPIP. Fixing them is one of the highest-ROI improvements you can make before test day.</p>
        <div class="adj-mistake-list">

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Using "very" with extreme (non-gradable) adjectives</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"The traffic was very enormous." / "I was very exhausted."</div>
              <div class="adj-mistake-right">"The traffic was absolutely enormous." / "I was utterly exhausted."</div>
              <div class="adj-mistake-why">Extreme adjectives already contain the idea of "very" — adding it sounds unnatural and weakens your vocabulary score.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Confusing -ed and -ing participial adjectives</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"The movie was bored." / "I was interesting in the topic."</div>
              <div class="adj-mistake-right">"The movie was boring." / "I was interested in the topic."</div>
              <div class="adj-mistake-why">-ING = the thing causes the feeling (boring movie). -ED = the person has the feeling (bored person). This is one of the most common errors examiners see.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Wrong order of stacked adjectives</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"a wooden old large brown chair"</div>
              <div class="adj-mistake-right">"a large old brown wooden chair"</div>
              <div class="adj-mistake-why">Follow OSASCOMP: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Using "more" with short adjectives or "-er" with long ones</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"more fast" / "more cheap" / "importanter" / "usefuller"</div>
              <div class="adj-mistake-right">"faster" / "cheaper" / "more important" / "more useful"</div>
              <div class="adj-mistake-why">1-syllable adjectives take -er/-est; 3+ syllable adjectives always take more/most.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Overusing "good," "bad," "nice," "big," "small"</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"It was a good experience. The place was nice and big."</div>
              <div class="adj-mistake-right">"It was a rewarding experience. The venue was spacious and well-appointed."</div>
              <div class="adj-mistake-why">Basic adjectives signal CLB 4–5. Precise, varied adjectives signal CLB 8–10 and directly improve your Vocabulary band score.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Making adjectives agree in number (Spanish / French interference)</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"The parks are beautifuls." / "She is tallest than her sister."</div>
              <div class="adj-mistake-right">"The parks are beautiful." / "She is taller than her sister."</div>
              <div class="adj-mistake-why">English adjectives never change for plural. Always use "taller than," never "tallest than" for comparisons of two items.</div>
            </div>
          </div>

          <div class="adj-mistake">
            <div class="adj-mistake-head">⚠️ Dropping the article before a superlative</div>
            <div class="adj-mistake-body">
              <div class="adj-mistake-wrong">"It was most effective solution." / "She is best candidate."</div>
              <div class="adj-mistake-right">"It was the most effective solution." / "She is the best candidate."</div>
              <div class="adj-mistake-why">Superlatives almost always need "the" before them. Missing it is a grammar error that lowers your Task Fulfillment score.</div>
            </div>
          </div>

        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════
           SECTION 8 — VOCABULARY UPGRADE BANK
      ══════════════════════════════════════════════════════════════════ -->
      <div class="adj-section">
        <div class="adj-section-title">Vocabulary Upgrade Bank — Replace Basic with Precise</div>
        <p class="adj-intro">Swap these overused adjectives for CELPIP-level alternatives. Aim to use at least 5 upgraded adjectives in every Writing task and 4 in every 90-second Speaking task.</p>
        <div class="adj-upgrade-grid">
  ${UPGRADE_BANK.map(
    (w) => `
    <div class="adj-upgrade-pair">
      <span class="adj-upgrade-basic">${w.basic}</span>
      <span class="adj-upgrade-arrow">→</span>
      <span class="adj-upgrade-better">${w.upgrades.join(" / ")}</span>
    </div>
  `,
  ).join("")}
</div>
      </div>
      </div><!-- /adj-ref -->

<!-- ── PANEL 2: flip card quiz ── -->
<div id="adj-quiz" class="adj-tab-panel">

  <div class="fq-header">
    <div class="fq-progress-wrap">
      <div class="fq-progress-label" id="fq-prog-label">Card 1 of ${UPGRADE_BANK.length}</div>
      <div class="fq-progress-bg">
        <div class="fq-progress-fill" id="fq-prog-fill" style="width:0%"></div>
      </div>
    </div>
    <button class="fq-btn fq-btn-secondary" onclick="fqRestart()">↺ Restart</button>
  </div>

  <div class="fq-score-row">
    <div class="fq-badge fq-badge-seen">👁 Seen: <span id="fq-seen">0</span></div>
    <div class="fq-badge fq-badge-known">✓ Got it: <span id="fq-known">0</span></div>
    <div class="fq-badge fq-badge-again">↺ Again: <span id="fq-again">0</span></div>
  </div>

  <!-- card scene -->
  <div class="fq-scene" id="fq-scene" onclick="fqFlip()">
    <div class="fq-card-inner" id="fq-inner">
      <div class="fq-face fq-front">
        <div class="fq-front-hint">Basic word — upgrade it</div>
        <div class="fq-front-word" id="fq-front-word"></div>
        <div class="fq-front-tap">tap to reveal upgrades</div>
      </div>
      <div class="fq-face fq-back">
        <div class="fq-back-label">✨ Upgraded alternatives</div>
        <div class="fq-chips" id="fq-back-chips"></div>
      </div>
    </div>
  </div>

  <!-- result buttons (hidden until flipped) -->
  <div class="fq-result-row" id="fq-result-row" style="display:none">
    <button class="fq-btn fq-btn-again" onclick="fqAnswer(false)">↺ Study again</button>
    <button class="fq-btn fq-btn-known" onclick="fqAnswer(true)">✓ Got it!</button>
  </div>

  <!-- completion screen (hidden until done) -->
  <div class="fq-complete" id="fq-complete" style="display:none">
    <div class="fq-complete-icon">🎉</div>
    <div class="fq-complete-title">Round complete!</div>
    <div class="fq-complete-sub" id="fq-complete-sub"></div>
    <div class="fq-stat-row">
      <div class="fq-stat"><div class="fq-stat-num" id="fq-stat-known">0</div><div class="fq-stat-label">Got it</div></div>
      <div class="fq-stat"><div class="fq-stat-num" id="fq-stat-again">0</div><div class="fq-stat-label">Study again</div></div>
      <div class="fq-stat"><div class="fq-stat-num" id="fq-stat-pct">0%</div><div class="fq-stat-label">Score</div></div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
      <button class="fq-btn fq-btn-primary" onclick="fqRestartWrong()" id="fq-retry-btn">↺ Retry missed</button>
      <button class="fq-btn fq-btn-secondary" onclick="fqRestart()">↺ Full restart</button>
    </div>
  </div>

</div><!-- /adj-quiz -->
<!-- ── PANEL 3: fill in the blanks ── -->
<div id="adj-fill" class="adj-tab-panel">

  <style>
    .afb-card {
      background: #fff; border: 2px solid #e2e8f0; border-radius: 20px;
      padding: 2.25rem 2rem; max-width: 560px; margin: 0 auto 1.5rem;
      box-shadow: 0 8px 32px rgba(99,102,241,.10);
      transition: border-color .2s;
    }
    .afb-card.afb-correct { border-color: #16a34a; background: #f0fdf4; }
    .afb-card.afb-wrong   { border-color: #dc2626; background: #fef2f2; }
    .afb-card.afb-revealed { border-color: #8b5cf6; background: #faf5ff; }

    /* counter & progress */
    .afb-meta {
      display: flex; align-items: center; justify-content: space-between;
      max-width: 560px; margin: 0 auto 1rem; flex-wrap: wrap; gap: 8px;
    }
    .afb-counter { font-size: 13px; font-weight: 700; color: #64748b; }
    .afb-progress-bg { flex: 1; min-width: 120px; height: 7px; background: #e2e8f0; border-radius: 99px; overflow: hidden; }
    .afb-progress-fill { height: 100%; background: #4f46e5; border-radius: 99px; transition: width .35s; }

    /* prompt */
    .afb-prompt {
      font-size: 13px; color: #94a3b8; font-weight: 600;
      text-transform: uppercase; letter-spacing: .07em; margin-bottom: 1.25rem;
      text-align: center;
    }

    /* basic word display */
    .afb-basic-word {
      text-align: center; margin-bottom: 1.75rem;
    }
    .afb-basic-chip {
      display: inline-block;
      font-size: 2rem; font-weight: 900; letter-spacing: -.02em;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: #fff; padding: .35em .75em;
      border-radius: 14px; line-height: 1.2;
    }

    /* inputs area */
    .afb-inputs-label {
      font-size: 11px; font-weight: 700; color: #94a3b8;
      text-transform: uppercase; letter-spacing: .07em;
      text-align: center; margin-bottom: .75rem;
    }
    .afb-inputs { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 1.5rem; }
    .afb-input-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .afb-input-num { font-size: 10px; font-weight: 700; color: #a5b4fc; }
    .afb-input {
      font-size: 14px; font-weight: 600; color: #1e293b;
      border: 2px solid #e2e8f0; border-radius: 10px;
      padding: 8px 14px; outline: none; text-align: center;
      min-width: 130px; transition: border-color .15s, background .15s;
      background: #f8fafc;
    }
    .afb-input:focus { border-color: #818cf8; background: #fff; }
    .afb-input.afb-input-correct { border-color: #16a34a; background: #f0fdf4; color: #166534; }
    .afb-input.afb-input-wrong   { border-color: #dc2626; background: #fef2f2; color: #991b1b; }
    .afb-input.afb-input-revealed { border-color: #8b5cf6; background: #faf5ff; color: #6d28d9; font-style: italic; }
    .afb-input:disabled { cursor: default; }

    /* feedback message */
    .afb-feedback {
      text-align: center; font-size: 14px; font-weight: 700;
      min-height: 22px; margin-bottom: 1.25rem; transition: opacity .2s;
    }
    .afb-feedback.afb-fb-correct  { color: #16a34a; }
    .afb-feedback.afb-fb-wrong    { color: #dc2626; }
    .afb-feedback.afb-fb-partial  { color: #d97706; }
    .afb-feedback.afb-fb-revealed { color: #7c3aed; }

    /* action buttons */
    .afb-actions {
      display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
      margin-bottom: 1rem;
    }
    .afb-btn {
      padding: 9px 20px; border: none; border-radius: 10px;
      font-size: 13px; font-weight: 700; cursor: pointer;
      transition: background .15s, transform .1s;
    }
    .afb-btn:active { transform: scale(.96); }
    .afb-btn-check   { background: #4f46e5; color: #fff; }
    .afb-btn-check:hover   { background: #3730a3; }
    .afb-btn-reveal  { background: #f5f3ff; color: #6d28d9; border: 1.5px solid #ddd6fe; }
    .afb-btn-reveal:hover  { background: #ede9fe; }
    .afb-btn-reset   { background: #f1f5f9; color: #475569; border: 1.5px solid #e2e8f0; }
    .afb-btn-reset:hover   { background: #e2e8f0; }

    /* nav buttons */
    .afb-nav {
      display: flex; gap: 10px; justify-content: center; margin-top: .25rem;
    }
    .afb-btn-nav {
      padding: 9px 28px; border: 1.5px solid #e2e8f0; border-radius: 10px;
      font-size: 13px; font-weight: 700; cursor: pointer; background: #fff;
      color: #334155; transition: background .15s, border-color .15s;
    }
    .afb-btn-nav:hover:not(:disabled) { background: #f1f5f9; border-color: #a5b4fc; }
    .afb-btn-nav:disabled { opacity: .35; cursor: default; }

    /* score summary strip */
    .afb-score-strip {
      display: flex; gap: 10px; justify-content: center;
      flex-wrap: wrap; margin-bottom: 1.5rem;
    }
    .afb-score-badge {
      font-size: 13px; font-weight: 700; padding: 5px 16px;
      border-radius: 20px;
    }
    .afb-score-correct { background: #f0fdf4; color: #16a34a; }
    .afb-score-wrong   { background: #fef2f2; color: #dc2626; }
    .afb-score-skipped { background: #f5f3ff; color: #7c3aed; }

    @media (max-width: 600px) {
      .afb-card { padding: 1.5rem 1rem; }
      .afb-basic-chip { font-size: 1.5rem; }
      .afb-input { min-width: 100px; font-size: 13px; }
    }
  </style>

  <!-- meta bar -->
  <div class="afb-meta">
    <span class="afb-counter" id="afb-counter">1 / 20</span>
    <div class="afb-progress-bg">
      <div class="afb-progress-fill" id="afb-progress" style="width:0%"></div>
    </div>
  </div>

  <!-- score strip -->
  <div class="afb-score-strip">
    <span class="afb-score-badge afb-score-correct">✓ Correct: <span id="afb-sc-correct">0</span></span>
    <span class="afb-score-badge afb-score-wrong">✗ Wrong: <span id="afb-sc-wrong">0</span></span>
    <span class="afb-score-badge afb-score-skipped">👁 Revealed: <span id="afb-sc-revealed">0</span></span>
  </div>

  <!-- main card -->
  <div class="afb-card" id="afb-card">
    <div class="afb-prompt">Upgrade this basic word</div>

    <div class="afb-basic-word">
      <span class="afb-basic-chip" id="afb-basic-word"></span>
    </div>

    <div class="afb-inputs-label" id="afb-inputs-label"></div>
    <div class="afb-inputs" id="afb-inputs"></div>

    <div class="afb-feedback" id="afb-feedback"></div>

    <div class="afb-actions">
      <button class="afb-btn afb-btn-check"  onclick="afbCheck()">✓ Check Answer</button>
      <button class="afb-btn afb-btn-reveal" onclick="afbReveal()">👁 Reveal Answer</button>
      <button class="afb-btn afb-btn-reset"  onclick="afbReset()">↺ Reset</button>
    </div>

    <div class="afb-nav">
      <button class="afb-btn-nav" id="afb-prev" onclick="afbNav(-1)">← Prev</button>
      <button class="afb-btn-nav" id="afb-next" onclick="afbNav(1)">Next →</button>
    </div>
  </div>

</div><!-- /adj-fill -->
<!-- ── PANEL 4: intensifier fill-in-the-blanks ── -->
<div id="adj-int" class="adj-tab-panel">

  <style>
    /* ── intensifier quiz specific ── */
    .aint-header {
      display: flex; flex-wrap: wrap; align-items: center;
      justify-content: space-between; gap: 12px; margin-bottom: 1rem;
    }
    .aint-title { font-size: 1rem; font-weight: 800; color: #1e293b; }
    .aint-desc { font-size: 13px; color: #64748b; line-height: 1.6; max-width: 640px; margin-bottom: 1.5rem; }

    /* score strip */
    .aint-score-strip {
      display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 1.5rem;
    }
    .aint-score-badge {
      font-size: 13px; font-weight: 700; padding: 5px 16px;
      border-radius: 20px; display: flex; align-items: center; gap: 5px;
    }
    .aint-sc-correct { background: #f0fdf4; color: #16a34a; }
    .aint-sc-wrong   { background: #fef2f2; color: #dc2626; }
    .aint-sc-total   { background: #ede9fe; color: #4f46e5; }

    /* action buttons row */
    .aint-actions {
      display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1.5rem;
    }
    .aint-btn {
      padding: 9px 20px; border: none; border-radius: 10px;
      font-size: 13px; font-weight: 700; cursor: pointer;
      transition: background .15s, transform .1s;
    }
    .aint-btn:active { transform: scale(.96); }
    .aint-btn-reveal-all { background: #7c3aed; color: #fff; }
    .aint-btn-reveal-all:hover { background: #6d28d9; }
    .aint-btn-reset-all  { background: #f1f5f9; color: #475569; border: 1.5px solid #e2e8f0; }
    .aint-btn-reset-all:hover  { background: #e2e8f0; }

    /* ── range selector buttons ── */
    .aint-range-selector {
      display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 1.75rem;
    }
    .aint-range-btn {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 10px 18px; border-radius: 12px; border: 2px solid transparent;
      cursor: pointer; font-size: 12px; font-weight: 700; transition: all .18s;
      background: #f8fafc; color: #475569; min-width: 110px;
    }
    .aint-range-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,0,0,.1); }
    .aint-range-btn .aint-range-icon { font-size: 1.3rem; }
    .aint-range-btn .aint-range-label { font-size: 12px; font-weight: 800; }
    .aint-range-btn .aint-range-sub { font-size: 10px; font-weight: 500; opacity: .75; }

    .aint-range-btn[data-range="downtoners"]   { border-color: #bae6fd; }
    .aint-range-btn[data-range="downtoners"]:hover,
    .aint-range-btn[data-range="downtoners"].aint-range-active  { background: #e0f2fe; color: #0369a1; border-color: #0369a1; }

    .aint-range-btn[data-range="midrange"]   { border-color: #c4b5fd; }
    .aint-range-btn[data-range="midrange"]:hover,
    .aint-range-btn[data-range="midrange"].aint-range-active  { background: #ede9fe; color: #4f46e5; border-color: #4f46e5; }

    .aint-range-btn[data-range="amplifiers"]   { border-color: #a5b4fc; }
    .aint-range-btn[data-range="amplifiers"]:hover,
    .aint-range-btn[data-range="amplifiers"].aint-range-active  { background: #e0e7ff; color: #3730a3; border-color: #3730a3; }

    .aint-range-btn[data-range="maximizers"]   { border-color: #ddd6fe; }
    .aint-range-btn[data-range="maximizers"]:hover,
    .aint-range-btn[data-range="maximizers"].aint-range-active  { background: #ddd6fe; color: #4c1d95; border-color: #4c1d95; }

    /* the scale bar */
    .aint-scale-wrap { margin-bottom: 2rem; position: relative; }
    .aint-scale-bar {
      height: 10px; border-radius: 99px;
      background: linear-gradient(to right, #bae6fd, #6366f1, #7c3aed, #4f46e5);
      margin: .5rem 0 .5rem; position: relative;
    }
    /* pointer triangle on scale */
    .aint-scale-pointer {
      position: absolute; top: -6px;
      width: 0; height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 10px solid #1e293b;
      transform: translateX(-50%);
      transition: left .35s cubic-bezier(.4,0,.2,1);
    }
    .aint-scale-labels {
      display: flex; justify-content: space-between;
      font-size: 11px; color: #64748b; font-weight: 600;
      margin-bottom: 0.25rem;
    }
    /* active range highlight label */
    .aint-scale-active-label {
      text-align: center; font-size: 12px; font-weight: 700;
      min-height: 18px; margin-top: 4px; transition: color .2s;
    }

    /* group sections */
    .aint-group { margin-bottom: 2rem; }
    .aint-group-head {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 14px; border-radius: 10px 10px 0 0;
      font-size: 12px; font-weight: 800; letter-spacing: .05em;
      text-transform: uppercase;
    }
    .aint-group-body {
      border: 2px solid #e2e8f0; border-top: none;
      border-radius: 0 0 12px 12px;
      padding: 1.25rem;
    }
    .aint-items { display: flex; flex-wrap: wrap; gap: 12px; }

    /* each intensifier item */
    .aint-item {
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      min-width: 120px;
    }
    .aint-item-num {
      font-size: 10px; font-weight: 700; color: #a5b4fc;
      text-transform: uppercase; letter-spacing: .05em;
    }
    .aint-input {
      font-size: 13.5px; font-weight: 700; text-align: center;
      padding: 7px 14px; border-radius: 20px;
      border: 2px solid #e2e8f0; outline: none;
      width: 120px; background: #f8fafc; color: #1e293b;
      transition: border-color .15s, background .15s;
    }
    .aint-input:focus { border-color: #818cf8; background: #fff; }
    .aint-input.aint-correct { border-color: #16a34a; background: #f0fdf4; color: #166534; }
    .aint-input.aint-wrong   { border-color: #dc2626; background: #fef2f2; color: #991b1b; }
    .aint-input.aint-revealed {
      border-color: #8b5cf6; background: #faf5ff; color: #6d28d9;
      font-style: italic;
    }
    .aint-input:disabled { cursor: default; }

    /* reveal-individual button below each input */
    .aint-reveal-btn {
      font-size: 10px; font-weight: 700; color: #94a3b8;
      background: none; border: none; cursor: pointer; padding: 0;
      text-transform: uppercase; letter-spacing: .04em;
    }
    .aint-reveal-btn:hover { color: #7c3aed; }
    .aint-reveal-btn:disabled { opacity: .3; cursor: default; }

    /* check-all button and feedback */
    .aint-check-row {
      display: flex; flex-wrap: wrap; align-items: center; gap: 10px;
      margin-top: 1.25rem;
    }
    .aint-btn-check { background: #4f46e5; color: #fff; }
    .aint-btn-check:hover { background: #3730a3; }
    .aint-feedback {
      font-size: 13px; font-weight: 700; min-height: 18px;
    }
    .aint-fb-ok  { color: #16a34a; }
    .aint-fb-err { color: #dc2626; }
    .aint-fb-partial { color: #d97706; }

    /* placeholder hint */
    .aint-select-hint {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 10px; padding: 2.5rem 1rem; border: 2px dashed #e2e8f0; border-radius: 14px;
      color: #94a3b8; font-size: 14px; font-weight: 600; text-align: center;
      background: #f8fafc; margin-bottom: 1rem;
    }
    .aint-select-hint-icon { font-size: 2rem; }

    @media (max-width: 600px) {
      .aint-items { gap: 8px; }
      .aint-input { width: 100px; font-size: 12px; }
      .aint-range-selector { gap: 8px; }
      .aint-range-btn { min-width: 80px; padding: 8px 10px; }
    }
  </style>

  <div class="aint-header">
    <div class="aint-title">🎚️ Intensifiers — Fill in the Blanks</div>
  </div>
  <p class="aint-desc">
    Select a range below to reveal its questions. The pointer on the scale shows where that range sits.
    Type each intensifier into its position, then hit <strong>Check</strong> to score yourself.
  </p>

  <!-- score + action strip -->
  <div class="aint-score-strip">
    <span class="aint-score-badge aint-sc-correct">✓ Correct: <span id="aint-sc-correct">0</span></span>
    <span class="aint-score-badge aint-sc-wrong">✗ Wrong: <span id="aint-sc-wrong">0</span></span>
    <span class="aint-score-badge aint-sc-total">Total: <span id="aint-sc-total">17</span></span>
  </div>
  <div class="aint-actions">
    <button class="aint-btn aint-btn-reveal-all" onclick="aintRevealAll()">👁 Reveal All</button>
    <button class="aint-btn aint-btn-reset-all"  onclick="aintResetAll()">↺ Reset</button>
  </div>

  <!-- ── range selector buttons ── -->
  <div class="aint-range-selector">
    <button class="aint-range-btn" data-range="downtoners" onclick="aintSelectRange('downtoners', this)">
      <span class="aint-range-icon">🔉</span>
      <span class="aint-range-label">Downtoners</span>
      <span class="aint-range-sub">weakest end</span>
    </button>
    <button class="aint-range-btn" data-range="midrange" onclick="aintSelectRange('midrange', this)">
      <span class="aint-range-icon">🎚️</span>
      <span class="aint-range-label">Mid-range</span>
      <span class="aint-range-sub">moderately strong</span>
    </button>
    <button class="aint-range-btn" data-range="amplifiers" onclick="aintSelectRange('amplifiers', this)">
      <span class="aint-range-icon">🔊</span>
      <span class="aint-range-label">Amplifiers</span>
      <span class="aint-range-sub">strong</span>
    </button>
    <button class="aint-range-btn" data-range="maximizers" onclick="aintSelectRange('maximizers', this)">
      <span class="aint-range-icon">🔝</span>
      <span class="aint-range-label">Maximizers</span>
      <span class="aint-range-sub">strongest / absolute</span>
    </button>
  </div>

  <!-- gradient scale bar with pointer -->
  <div class="aint-scale-wrap">
    <div class="aint-scale-bar">
      <div class="aint-scale-pointer" id="aint-scale-pointer" style="left: 12.5%; display: none;"></div>
    </div>
    <div class="aint-scale-labels">
      <span>⬇ Weakest</span>
      <span>Neutral / Base adjective</span>
      <span>Strongest ⬆</span>
    </div>
    <div class="aint-scale-active-label" id="aint-scale-active-label"></div>
  </div>

  <!-- placeholder hint (shown when no range selected) -->
  <div class="aint-select-hint" id="aint-select-hint">
    <span class="aint-select-hint-icon">☝️</span>
    <span>Select any one of the four ranges above to reveal its questions</span>
  </div>

  <!-- GROUP 1: Downtoners -->
  <div class="aint-group" id="aint-group-downtoners" style="display:none;">
    <div class="aint-group-head" style="background:#e0f2fe;color:#0369a1;">
      🔉 Downtoners — weakest end of the scale
    </div>
    <div class="aint-group-body">
      <div class="aint-items">
        <div class="aint-item">
          <span class="aint-item-num">1 — weakest</span>
          <input class="aint-input" id="aint-0" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="barely" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(0)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">2</span>
          <input class="aint-input" id="aint-1" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="slightly" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(1)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">3</span>
          <input class="aint-input" id="aint-2" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="a little" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(2)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">4</span>
          <input class="aint-input" id="aint-3" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="somewhat" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(3)">👁 reveal</button>
        </div>
      </div>
      <div class="aint-check-row">
        <button class="aint-btn aint-btn-check" onclick="aintCheckGroup([0,1,2,3], this)">✓ Check</button>
        <span class="aint-feedback" id="aint-fb-0"></span>
      </div>
    </div>
  </div>

  <!-- GROUP 2: Mid-range -->
  <div class="aint-group" id="aint-group-midrange" style="display:none;">
    <div class="aint-group-head" style="background:#ede9fe;color:#4f46e5;">
      🎚️ Mid-range — moderately strong
    </div>
    <div class="aint-group-body">
      <div class="aint-items">
        <div class="aint-item">
          <span class="aint-item-num">5</span>
          <input class="aint-input" id="aint-4" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="fairly" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(4)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">6</span>
          <input class="aint-input" id="aint-5" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="rather" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(5)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">7</span>
          <input class="aint-input" id="aint-6" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="quite" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(6)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">8</span>
          <input class="aint-input" id="aint-7" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="pretty" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(7)">👁 reveal</button>
        </div>
      </div>
      <div class="aint-check-row">
        <button class="aint-btn aint-btn-check" onclick="aintCheckGroup([4,5,6,7], this)">✓ Check</button>
        <span class="aint-feedback" id="aint-fb-1"></span>
      </div>
    </div>
  </div>

  <!-- GROUP 3: Amplifiers -->
  <div class="aint-group" id="aint-group-amplifiers" style="display:none;">
    <div class="aint-group-head" style="background:#e0e7ff;color:#3730a3;">
      🔊 Amplifiers — strong
    </div>
    <div class="aint-group-body">
      <div class="aint-items">
        <div class="aint-item">
          <span class="aint-item-num">9</span>
          <input class="aint-input" id="aint-8" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="very" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(8)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">10</span>
          <input class="aint-input" id="aint-9" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="really" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(9)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">11</span>
          <input class="aint-input" id="aint-10" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="highly" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(10)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">12</span>
          <input class="aint-input" id="aint-11" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="extremely" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(11)">👁 reveal</button>
        </div>
      </div>
      <div class="aint-check-row">
        <button class="aint-btn aint-btn-check" onclick="aintCheckGroup([8,9,10,11], this)">✓ Check</button>
        <span class="aint-feedback" id="aint-fb-2"></span>
      </div>
    </div>
  </div>

  <!-- GROUP 4: Maximizers -->
  <div class="aint-group" id="aint-group-maximizers" style="display:none;">
    <div class="aint-group-head" style="background:#ddd6fe;color:#4c1d95;">
      🔝 Maximizers — strongest / absolute
    </div>
    <div class="aint-group-body">
      <div class="aint-items">
        <div class="aint-item">
          <span class="aint-item-num">13</span>
          <input class="aint-input" id="aint-12" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="incredibly" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(12)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">14</span>
          <input class="aint-input" id="aint-13" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="remarkably" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(13)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">15</span>
          <input class="aint-input" id="aint-14" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="absolutely" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(14)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">16</span>
          <input class="aint-input" id="aint-15" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="utterly" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(15)">👁 reveal</button>
        </div>
        <div class="aint-item">
          <span class="aint-item-num">17 — strongest</span>
          <input class="aint-input" id="aint-16" type="text" placeholder="?" autocomplete="off" spellcheck="false" data-answer="completely" />
          <button class="aint-reveal-btn" onclick="aintRevealOne(16)">👁 reveal</button>
        </div>
      </div>
      <div class="aint-check-row">
        <button class="aint-btn aint-btn-check" onclick="aintCheckGroup([12,13,14,15,16], this)">✓ Check</button>
        <span class="aint-feedback" id="aint-fb-3"></span>
      </div>
    </div>
  </div>

</div><!-- /adj-int -->

`;
    }
    // ── Adjective flip-card quiz ──────────────────────────────────────
    window.adjShowTab = function (id) {
      document
        .querySelectorAll(".adj-tab-panel")
        .forEach((p) => p.classList.remove("adj-tab-panel-active"));
      document
        .querySelectorAll(".adj-tab-btn")
        .forEach((b) => b.classList.remove("adj-tab-active"));
      document.getElementById(id).classList.add("adj-tab-panel-active");
      document.querySelectorAll(".adj-tab-btn").forEach((b) => {
        if (b.getAttribute("onclick") === `adjShowTab('${id}')`)
          b.classList.add("adj-tab-active");
      });
      // boot fill-in-the-blanks on first open
      if (id === "adj-fill" && typeof window._afbInit === "function") {
        window._afbInit();
        window._afbInit = null; // run once only
      }
      // boot intensifier quiz on first open
      if (id === "adj-int" && typeof window._aintInit === "function") {
        window._aintInit();
        window._aintInit = null;
      }
    };

    (function () {
      let deck = [],
        idx = 0,
        known = 0,
        again = 0,
        flipped = false;

      function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      function render() {
        const scene = document.getElementById("fq-scene");
        const complete = document.getElementById("fq-complete");
        const resultRow = document.getElementById("fq-result-row");
        if (!scene) return;

        if (idx >= deck.length) {
          scene.style.display = "none";
          resultRow.style.display = "none";
          complete.style.display = "block";
          const pct = Math.round((known / deck.length) * 100);
          document.getElementById("fq-stat-known").textContent = known;
          document.getElementById("fq-stat-again").textContent = again;
          document.getElementById("fq-stat-pct").textContent = pct + "%";
          document.getElementById("fq-complete-sub").textContent =
            pct === 100
              ? "Perfect — you know them all! 🏆"
              : pct >= 70
                ? "Great work! Review the missed ones."
                : "Keep practising — you'll get there!";
          const retryBtn = document.getElementById("fq-retry-btn");
          retryBtn.style.display = again > 0 ? "" : "none";
          return;
        }

        const card = deck[idx];
        flipped = false;

        document.getElementById("fq-inner").classList.remove("fq-flipped");
        document.getElementById("fq-front-word").textContent = card.basic;
        document.getElementById("fq-back-chips").innerHTML = card.upgrades
          .map((u) => `<span class="fq-chip">${u}</span>`)
          .join("");

        resultRow.style.display = "none";
        scene.style.display = "";
        complete.style.display = "none";

        // progress
        const total = deck.length;
        const pct = Math.round((idx / total) * 100);
        document.getElementById("fq-prog-label").textContent =
          `Card ${idx + 1} of ${total}`;
        document.getElementById("fq-prog-fill").style.width = pct + "%";
        document.getElementById("fq-seen").textContent = idx;
        document.getElementById("fq-known").textContent = known;
        document.getElementById("fq-again").textContent = again;
      }

      window.fqFlip = function () {
        if (flipped) return;
        flipped = true;
        document.getElementById("fq-inner").classList.add("fq-flipped");
        document.getElementById("fq-result-row").style.display = "flex";
      };

      window.fqAnswer = function (gotIt) {
        if (gotIt) {
          known++;
        } else {
          again++;
          deck.push(deck[idx]);
        } // push to end for review
        idx++;
        render();
      };

      window.fqRestart = function () {
        deck = shuffle(UPGRADE_BANK);
        idx = 0;
        known = 0;
        again = 0;
        render();
      };

      window.fqRestartWrong = function () {
        // collect the "again" entries that were pushed to the end
        const wrongCards = deck.slice(UPGRADE_BANK.length);
        deck = shuffle(wrongCards.length ? wrongCards : UPGRADE_BANK);
        idx = 0;
        known = 0;
        again = 0;
        render();
      };

      // auto-start when quiz tab is first opened
      const quizBtn = document.querySelector(
        ".adj-tab-btn[onclick=\"adjShowTab('adj-quiz')\"]",
      );
      if (quizBtn) {
        quizBtn.addEventListener("click", function onFirst() {
          if (deck.length === 0) window.fqRestart();
          quizBtn.removeEventListener("click", onFirst);
        });
      }
    })();

    // ── Fill in the Blanks quiz ───────────────────────────────────────
    window._afbInit = function () {
      let idx = 0;
      const states = new Array(UPGRADE_BANK.length).fill(null);
      let scCorrect = 0,
        scWrong = 0,
        scRevealed = 0;

      function getInputs() {
        return Array.from(document.querySelectorAll(".afb-input"));
      }

      function updateMeta() {
        const el = {
          counter: document.getElementById("afb-counter"),
          progress: document.getElementById("afb-progress"),
          correct: document.getElementById("afb-sc-correct"),
          wrong: document.getElementById("afb-sc-wrong"),
          revealed: document.getElementById("afb-sc-revealed"),
        };
        if (!el.counter) return;
        el.counter.textContent = `${idx + 1} / ${UPGRADE_BANK.length}`;
        el.progress.style.width = `${Math.round(((idx + 1) / UPGRADE_BANK.length) * 100)}%`;
        el.correct.textContent = scCorrect;
        el.wrong.textContent = scWrong;
        el.revealed.textContent = scRevealed;
      }

      function applyCorrectUI(upgrades) {
        const card = document.getElementById("afb-card");
        const fb = document.getElementById("afb-feedback");
        if (!card) return;
        card.className = "afb-card afb-correct";
        fb.className = "afb-feedback afb-fb-correct";
        fb.textContent = "✓ All correct! Well done.";
        upgrades.forEach((u, wi) => {
          const inp = document.getElementById(`afb-inp-${wi}`);
          if (!inp) return;
          inp.value = u;
          inp.classList.remove("afb-input-wrong");
          inp.classList.add("afb-input-correct");
          inp.disabled = true;
        });
      }

      function applyRevealedUI(upgrades) {
        const card = document.getElementById("afb-card");
        const fb = document.getElementById("afb-feedback");
        if (!card) return;
        card.className = "afb-card afb-revealed";
        fb.className = "afb-feedback afb-fb-revealed";
        fb.textContent = "👁 Answer revealed.";
        upgrades.forEach((u, wi) => {
          const inp = document.getElementById(`afb-inp-${wi}`);
          if (!inp) return;
          inp.value = u;
          inp.classList.add("afb-input-revealed");
          inp.disabled = true;
        });
      }

      function setCard(i) {
        idx = i;
        const item = UPGRADE_BANK[idx];
        const state = states[idx];

        // ── basic word ──
        const wordEl = document.getElementById("afb-basic-word");
        if (wordEl) wordEl.textContent = item.basic;

        // ── inputs label ──
        const labelEl = document.getElementById("afb-inputs-label");
        if (labelEl)
          labelEl.textContent = `Enter ${item.upgrades.length} upgraded alternative${item.upgrades.length > 1 ? "s" : ""}`;

        // ── build inputs ──
        const container = document.getElementById("afb-inputs");
        if (container) {
          container.innerHTML = item.upgrades
            .map(
              (_, wi) => `
        <div class="afb-input-wrap">
          <span class="afb-input-num">${wi + 1}</span>
          <input
            class="afb-input"
            id="afb-inp-${wi}"
            type="text"
            placeholder="word ${wi + 1}"
            autocomplete="off"
            spellcheck="false"
          />
        </div>
      `,
            )
            .join("");

          // attach Enter key listener after building
          container.querySelectorAll(".afb-input").forEach((inp) => {
            inp.addEventListener("keydown", (e) => {
              if (e.key === "Enter") window.afbCheck();
            });
          });
        }

        // ── reset card appearance ──
        const card = document.getElementById("afb-card");
        const fb = document.getElementById("afb-feedback");
        if (card) card.className = "afb-card";
        if (fb) {
          fb.className = "afb-feedback";
          fb.textContent = "";
        }

        // ── restore previous state ──
        if (state === "correct") {
          applyCorrectUI(item.upgrades);
        } else if (state === "revealed") {
          applyRevealedUI(item.upgrades);
        } else if (state && state.values) {
          // partial / wrong — restore typed values and colouring
          const upgradesLower = item.upgrades.map((u) => u.toLowerCase());
          const usedIdx = new Set();
          state.values.forEach((v, wi) => {
            const inp = document.getElementById(`afb-inp-${wi}`);
            if (!inp) return;
            inp.value = v;
            const normV = v.trim().toLowerCase();
            const mIdx = upgradesLower.findIndex(
              (u, i) => u === normV && !usedIdx.has(i),
            );
            if (normV && mIdx !== -1) {
              usedIdx.add(mIdx);
              inp.classList.add("afb-input-correct");
            } else if (normV) {
              inp.classList.add("afb-input-wrong");
            }
          });
          const allRight = state.values.every((v) =>
            item.upgrades
              .map((u) => u.toLowerCase())
              .includes(v.trim().toLowerCase()),
          );
          if (fb) {
            if (allRight) {
              fb.className = "afb-feedback afb-fb-correct";
              fb.textContent = "✓ All correct! Well done.";
              if (card) card.classList.add("afb-correct");
            } else {
              const correctCount = state.values.filter((v) =>
                item.upgrades
                  .map((u) => u.toLowerCase())
                  .includes(v.trim().toLowerCase()),
              ).length;
              fb.className = "afb-feedback afb-fb-partial";
              fb.textContent = `${correctCount} of ${item.upgrades.length} correct — keep trying!`;
              if (card) card.classList.add("afb-wrong");
            }
          }
        }

        // ── nav buttons ──
        const prevBtn = document.getElementById("afb-prev");
        const nextBtn = document.getElementById("afb-next");
        if (prevBtn) prevBtn.disabled = idx === 0;
        if (nextBtn) nextBtn.disabled = idx === UPGRADE_BANK.length - 1;

        updateMeta();

        // focus first empty input
        if (!state) {
          const first = document.getElementById("afb-inp-0");
          if (first) setTimeout(() => first.focus(), 60);
        }
      }

      /* ── public action handlers ── */
      window.afbCheck = function () {
        const item = UPGRADE_BANK[idx];
        const inputs = getInputs();
        const values = inputs.map((i) => i.value.trim());

        if (values.every((v) => v === "")) {
          const fb = document.getElementById("afb-feedback");
          if (fb) {
            fb.className = "afb-feedback afb-fb-wrong";
            fb.textContent = "Please enter at least one answer.";
          }
          return;
        }

        const upgradesLower = item.upgrades.map((u) => u.toLowerCase());
        const usedIdx = new Set();
        let allCorrect = true;

        inputs.forEach((inp, wi) => {
          const v = values[wi].toLowerCase();
          const mIdx = upgradesLower.findIndex(
            (u, i) => u === v && !usedIdx.has(i),
          );
          inp.classList.remove(
            "afb-input-correct",
            "afb-input-wrong",
            "afb-input-revealed",
          );
          if (v !== "" && mIdx !== -1) {
            usedIdx.add(mIdx);
            inp.classList.add("afb-input-correct");
          } else {
            if (v !== "") inp.classList.add("afb-input-wrong");
            allCorrect = false;
          }
        });

        // only count score on first attempt
        if (!states[idx]) {
          if (allCorrect) scCorrect++;
          else scWrong++;
        }

        if (allCorrect) {
          states[idx] = "correct";
          applyCorrectUI(item.upgrades);
        } else {
          states[idx] = { values };
          const correctCount = values.filter((v) =>
            upgradesLower.includes(v.trim().toLowerCase()),
          ).length;
          const card = document.getElementById("afb-card");
          const fb = document.getElementById("afb-feedback");
          if (card) {
            card.className = "afb-card afb-wrong";
          }
          if (fb) {
            fb.className = "afb-feedback afb-fb-partial";
            fb.textContent =
              correctCount > 0
                ? `${correctCount} of ${item.upgrades.length} correct — keep trying!`
                : "✗ None correct — try again or reveal the answer.";
          }
        }
        updateMeta();
      };

      window.afbReveal = function () {
        const item = UPGRADE_BANK[idx];
        if (states[idx] === "correct") return;
        if (!states[idx]) scRevealed++;
        states[idx] = "revealed";
        applyRevealedUI(item.upgrades);
        updateMeta();
      };

      window.afbReset = function () {
        const prev = states[idx];
        if (prev === "correct") scCorrect--;
        else if (prev === "revealed") scRevealed--;
        else if (prev && prev.values) scWrong--;
        states[idx] = null;
        setCard(idx);
      };

      window.afbNav = function (dir) {
        const next = idx + dir;
        if (next < 0 || next >= UPGRADE_BANK.length) return;
        setCard(next);
      };

      // boot immediately — DOM is already ready since renderAdjectives() just ran
      setCard(0);
    };

    // ── Intensifier Fill-in-the-Blanks quiz ──────────────────────────
    window._aintInit = function () {
      const TOTAL = 17;
      let scCorrect = 0,
        scWrong = 0;
      const revealed = new Set(); // indices that have been revealed

      function getInput(i) {
        return document.getElementById("aint-" + i);
      }

      function updateScore() {
        const c = document.getElementById("aint-sc-correct");
        const w = document.getElementById("aint-sc-wrong");
        if (c) c.textContent = scCorrect;
        if (w) w.textContent = scWrong;
      }

      function markInput(inp, state) {
        // state: 'correct' | 'wrong' | 'revealed'
        inp.classList.remove("aint-correct", "aint-wrong", "aint-revealed");
        if (state) inp.classList.add("aint-" + state);
        inp.disabled = state === "correct" || state === "revealed";
        const revBtn = inp.parentElement.querySelector(".aint-reveal-btn");
        if (revBtn)
          revBtn.disabled = state === "correct" || state === "revealed";
      }

      window.aintRevealOne = function (i) {
        const inp = getInput(i);
        if (!inp || inp.disabled) return;
        // if it was blank / un-scored, don't penalise — just reveal
        if (!inp.classList.contains("aint-correct")) {
          if (!revealed.has(i)) {
            revealed.add(i);
            // if user had typed something wrong, it already counted as wrong
          }
          inp.value = inp.dataset.answer;
          markInput(inp, "revealed");
          updateScore();
        }
      };

      window.aintCheckGroup = function (indices, btn) {
        const fbId = btn.parentElement.querySelector(".aint-feedback");
        let groupCorrect = 0;
        indices.forEach(function (i) {
          const inp = getInput(i);
          if (!inp || inp.disabled) {
            if (inp && inp.classList.contains("aint-correct")) groupCorrect++;
            return;
          }
          const typed = inp.value.trim().toLowerCase();
          const answer = inp.dataset.answer.toLowerCase();
          if (typed === answer) {
            if (!inp.classList.contains("aint-correct")) {
              scCorrect++;
            }
            markInput(inp, "correct");
            groupCorrect++;
          } else if (typed !== "") {
            if (!inp.classList.contains("aint-wrong")) {
              scWrong++;
            }
            markInput(inp, "wrong");
          } else {
            // empty — show as wrong border only if already attempted
            inp.classList.add("aint-wrong");
          }
        });
        updateScore();
        // group feedback
        const total = indices.length;
        if (fbId) {
          if (groupCorrect === total) {
            fbId.className = "aint-feedback aint-fb-ok";
            fbId.textContent = "✓ All " + total + " correct!";
          } else if (groupCorrect > 0) {
            fbId.className = "aint-feedback aint-fb-partial";
            fbId.textContent =
              groupCorrect + " / " + total + " correct — keep trying!";
          } else {
            fbId.className = "aint-feedback aint-fb-err";
            fbId.textContent = "✗ None correct yet.";
          }
        }
      };

      window.aintSelectRange = function (range, btn) {
        // toggle off if already active
        const wasActive = btn.classList.contains("aint-range-active");

        // deactivate all range buttons
        document
          .querySelectorAll(".aint-range-btn")
          .forEach((b) => b.classList.remove("aint-range-active"));

        // hide all groups and hint
        const allGroups = [
          "downtoners",
          "midrange",
          "amplifiers",
          "maximizers",
        ];
        allGroups.forEach((r) => {
          const el = document.getElementById("aint-group-" + r);
          if (el) el.style.display = "none";
        });

        const pointer = document.getElementById("aint-scale-pointer");
        const label = document.getElementById("aint-scale-active-label");
        const hint = document.getElementById("aint-select-hint");

        if (wasActive) {
          // clicking the same button again → deselect
          pointer.style.display = "none";
          label.textContent = "";
          label.style.color = "";
          if (hint) hint.style.display = "";
          return;
        }

        // activate selected
        btn.classList.add("aint-range-active");
        if (hint) hint.style.display = "none";

        const config = {
          downtoners: {
            left: "12%",
            color: "#0369a1",
            text: "🔉 Downtoners — weakest end",
          },
          midrange: {
            left: "37%",
            color: "#4f46e5",
            text: "🎚️ Mid-range — moderately strong",
          },
          amplifiers: {
            left: "63%",
            color: "#3730a3",
            text: "🔊 Amplifiers — strong",
          },
          maximizers: {
            left: "88%",
            color: "#4c1d95",
            text: "🔝 Maximizers — strongest / absolute",
          },
        };

        const cfg = config[range];
        const group = document.getElementById("aint-group-" + range);
        if (group) group.style.display = "";

        pointer.style.display = "";
        pointer.style.left = cfg.left;
        pointer.style.borderTopColor = cfg.color;
        label.textContent = cfg.text;
        label.style.color = cfg.color;
      };

      window.aintRevealAll = function () {
        for (let i = 0; i < TOTAL; i++) {
          const inp = getInput(i);
          if (!inp || inp.disabled) continue;
          inp.value = inp.dataset.answer;
          markInput(inp, "revealed");
          revealed.add(i);
        }
        updateScore();
        // update all group feedbacks
        [
          { fb: "aint-fb-0", count: 4 },
          { fb: "aint-fb-1", count: 4 },
          { fb: "aint-fb-2", count: 4 },
          { fb: "aint-fb-3", count: 5 },
        ].forEach(function (g) {
          const el = document.getElementById(g.fb);
          if (el) {
            el.className = "aint-feedback aint-fb-partial";
            el.textContent = "👁 Answers revealed.";
          }
        });
      };

      window.aintResetAll = function () {
        scCorrect = 0;
        scWrong = 0;
        revealed.clear();
        for (let i = 0; i < TOTAL; i++) {
          const inp = getInput(i);
          if (!inp) continue;
          inp.value = "";
          inp.className = "aint-input";
          inp.disabled = false;
          const revBtn = inp.parentElement.querySelector(".aint-reveal-btn");
          if (revBtn) revBtn.disabled = false;
        }
        ["aint-fb-0", "aint-fb-1", "aint-fb-2", "aint-fb-3"].forEach(
          function (id) {
            const el = document.getElementById(id);
            if (el) {
              el.className = "aint-feedback";
              el.textContent = "";
            }
          },
        );
        updateScore();
      };
    };

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

    function renderPrepositions() {
      const content = document.getElementById("prepositions-content");

      // ── CELPIP Task data ─────────────────────────────────────────────────
      const CELPIP_PREP_TASKS = [
        {
          type: "writing",
          task: "Writing Task 1 — Email",
          badge: "✉️ Writing Task 1",
          badgeBg: "#dbeafe",
          badgeColor: "#1e40af",
          scenario:
            "Your neighbour has been making loud noise late at night. Write an email to your building manager to report the problem and request action.",
          sampleResponse: `Dear Mr. Thompson,\n\nI am writing to bring a noise concern <strong>to</strong> your attention. I live <strong>in</strong> unit 4B, <strong>on</strong> the third floor, and <strong>for</strong> the past two weeks my neighbour <strong>in</strong> unit 4C has been playing loud music late <strong>at</strong> night, often continuing well past midnight.\n\nThe noise begins <strong>around</strong> 10 p.m. and can be heard clearly <strong>through</strong> the walls. I have spoken <strong>to</strong> the neighbour directly, but the situation has not improved. I am concerned <strong>about</strong> the impact this is having <strong>on</strong> my sleep and my ability to work <strong>in</strong> the mornings.\n\nI would appreciate it if you could look <strong>into</strong> this matter and remind all residents <strong>of</strong> the quiet-hours policy. I look forward <strong>to</strong> hearing from you.\n\nSincerely,\nAlex Kim`,
          highlights: [
            {
              prep: "to",
              use: "direction / indirect object — bring something to someone's attention",
            },
            {
              prep: "in",
              use: "location — living in a unit, hearing through a wall",
            },
            { prep: "on", use: "floor level — on the third floor" },
            { prep: "for", use: "duration — for the past two weeks" },
            { prep: "at", use: "specific time — at night" },
            { prep: "around", use: "approximate time — around 10 p.m." },
            {
              prep: "through",
              use: "movement / medium — heard through the walls",
            },
            {
              prep: "about",
              use: "topic of concern — concerned about the impact",
            },
            { prep: "into", use: "investigation — look into a matter" },
            { prep: "of", use: "possession — policy of the building" },
          ],
        },
        {
          type: "writing",
          task: "Writing Task 2 — Survey Response",
          badge: "📝 Writing Task 2",
          badgeBg: "#dcfce7",
          badgeColor: "#166534",
          scenario:
            "Your city is asking residents whether a large park should be converted into a shopping mall. Write your opinion in response to a community survey.",
          sampleResponse: `I am strongly opposed <strong>to</strong> converting the park <strong>into</strong> a commercial mall. Green spaces play a vital role <strong>in</strong> the mental and physical health <strong>of</strong> city residents, particularly those who live <strong>in</strong> high-density apartment buildings <strong>with</strong> no access <strong>to</strong> private yards.\n\nThe park is used <strong>by</strong> hundreds of families every weekend. Children rely <strong>on</strong> it <strong>for</strong> outdoor play, and seniors gather there <strong>for</strong> morning walks and socializing. Removing this space would place a disproportionate burden <strong>on</strong> those residents who depend <strong>on</strong> it most.\n\nInstead <strong>of</strong> replacing the park, the city should invest <strong>in</strong> improving its facilities. <strong>In</strong> conclusion, I urge decision-makers to reconsider <strong>in</strong> favour <strong>of</strong> the community's long-term wellbeing.`,
          highlights: [
            {
              prep: "to",
              use: "opposition — opposed to something; access to yards",
            },
            {
              prep: "into",
              use: "transformation — converting something into something else",
            },
            {
              prep: "in",
              use: "location / domain — in the city, in conclusion, in high-density areas",
            },
            {
              prep: "of",
              use: "belonging — health of residents, role of spaces",
            },
            {
              prep: "with",
              use: "accompaniment / characteristic — buildings with no yard",
            },
            {
              prep: "by",
              use: "agent (passive) — used by hundreds of families",
            },
            { prep: "on", use: "reliance — rely on, burden on" },
            {
              prep: "for",
              use: "purpose — for outdoor play, for morning walks",
            },
            {
              prep: "instead of",
              use: "contrast/alternative — instead of replacing",
            },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 3 — Describing a Scene",
          badge: "🗣️ Speaking Task 3",
          badgeBg: "#fef3c7",
          badgeColor: "#92400e",
          scenario:
            "You are shown an image of a busy farmer's market in a town square. Describe what you see in detail.",
          sampleResponse: `<em>In</em> this picture, I can see a lively farmer's market taking place <em>in</em> the centre of a town square. There are several colourful stalls arranged <em>in</em> rows, and vendors are standing <em>behind</em> their tables, selling fresh produce. <em>On</em> the left side of the image, a woman is looking <em>at</em> a basket of tomatoes and speaking <em>with</em> the vendor. <em>In</em> the background, there are tall buildings <em>on</em> both sides of the street. A group of children is running <em>between</em> the stalls, and a man <em>in</em> a red jacket is walking <em>toward</em> the entrance <em>with</em> a reusable shopping bag <em>in</em> his hand. The overall atmosphere appears cheerful, and the market looks well-attended <em>by</em> people <em>of</em> all ages.`,
          highlights: [
            {
              prep: "in",
              use: "location — in the picture, in the centre, in the background, in his hand",
            },
            {
              prep: "on",
              use: "side / surface — on the left side, on both sides",
            },
            { prep: "behind", use: "position — standing behind the tables" },
            { prep: "at", use: "direction of gaze — looking at something" },
            {
              prep: "with",
              use: "accompaniment — speaking with the vendor, with a bag",
            },
            { prep: "between", use: "spatial — running between the stalls" },
            {
              prep: "toward",
              use: "direction of movement — walking toward the entrance",
            },
            { prep: "by", use: "agent (passive) — attended by people" },
            { prep: "of", use: "specification — people of all ages" },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 5 — Giving Advice",
          badge: "💬 Speaking Task 5",
          badgeBg: "#ede9fe",
          badgeColor: "#5b21b6",
          scenario:
            "Your friend is thinking about moving to a new city for work. They are nervous about the change. Give them advice.",
          sampleResponse: `I totally understand your concern <em>about</em> moving. It's completely normal to feel nervous <em>about</em> such a big change. First, I'd suggest doing some research <em>on</em> the city before you go. Look <em>into</em> the cost <em>of</em> living, the neighbourhoods close <em>to</em> your workplace, and what the public transit system is like.\n\nOnce you're there, try to get <em>out</em> and explore. Join a club or a group based <em>on</em> your interests — this is one <em>of</em> the best ways to meet people. Don't rely <em>on</em> technology alone to stay connected <em>with</em> friends back home. <em>In</em> the beginning it can feel overwhelming, but <em>within</em> a few months you'll start to feel <em>at</em> home. I went <em>through</em> the same experience, and it turned <em>into</em> one <em>of</em> the best decisions <em>of</em> my life.`,
          highlights: [
            {
              prep: "about",
              use: "subject of concern or emotion — concern about moving, nervous about change",
            },
            {
              prep: "on",
              use: "topic — research on the city, based on interests",
            },
            {
              prep: "into",
              use: "investigation — look into the cost; transformation — turned into",
            },
            {
              prep: "of",
              use: "belonging / specification — cost of living, one of the best",
            },
            {
              prep: "to",
              use: "proximity / direction — close to your workplace, connected to friends",
            },
            { prep: "out", use: "phrasal verb — get out and explore" },
            { prep: "on", use: "dependence — rely on technology" },
            { prep: "with", use: "connection — stay connected with friends" },
            { prep: "in", use: "time phrase — in the beginning" },
            { prep: "within", use: "time frame — within a few months" },
            { prep: "at", use: "state — feel at home" },
            {
              prep: "through",
              use: "experience — went through the same experience",
            },
          ],
        },
        {
          type: "speaking",
          task: "Speaking Task 7 — Expressing an Opinion",
          badge: "🎤 Speaking Task 7",
          badgeBg: "#fce7f3",
          badgeColor: "#be185d",
          scenario:
            "Some people believe that children should not be allowed to use smartphones until they are teenagers. Do you agree or disagree?",
          sampleResponse: `I agree <em>with</em> the idea that children should be limited <em>in</em> their smartphone use, but I don't think a total ban <em>until</em> the teenage years is realistic. The key issue is not access <em>to</em> the device itself, but rather what children are exposed <em>to</em> <em>on</em> those devices. Parents need to be <em>in</em> control <em>of</em> screen time <em>from</em> an early age. Instead <em>of</em> banning smartphones outright, families should focus <em>on</em> building healthy habits <em>around</em> technology. <em>For</em> example, no phones <em>during</em> meals or <em>before</em> bedtime. Children who are taught to use technology responsibly <em>from</em> a young age are better prepared <em>for</em> the digital world they will grow up <em>in</em>.`,
          highlights: [
            { prep: "with", use: "agreement — agree with an idea" },
            {
              prep: "in",
              use: "scope/control — limited in their use, in control",
            },
            { prep: "until", use: "time limit — until the teenage years" },
            {
              prep: "to",
              use: "direction / access — access to the device, exposed to content",
            },
            {
              prep: "on",
              use: "medium — on those devices; topic — focus on habits",
            },
            { prep: "of", use: "possession — control of screen time" },
            {
              prep: "from",
              use: "starting point — from an early age, from a young age",
            },
            { prep: "instead of", use: "alternative — instead of banning" },
            {
              prep: "around",
              use: "habits around something — habits around technology",
            },
            {
              prep: "for",
              use: "example marker and purpose — for example, prepared for the world",
            },
            { prep: "during", use: "time — during meals" },
            { prep: "before", use: "time order — before bedtime" },
          ],
        },
      ];

      const CELPIP_PREP_GROUPS_INLINE = [
        {
          emoji: "🕐",
          category: "Time Prepositions",
          bg: "#dbeafe",
          color: "#1e40af",
          border: "#bfdbfe",
          intro:
            "Use these to express when something happens. Correct time prepositions are essential in CELPIP Writing emails and Speaking opinion tasks.",
          items: [
            {
              prep: "at",
              rule: "Exact times and fixed expressions.",
              examples: [
                "The meeting is <strong>at</strong> 9 a.m.",
                "I work best <strong>at</strong> night.",
                "She arrived <strong>at</strong> noon.",
              ],
            },
            {
              prep: "on",
              rule: "Days and specific dates.",
              examples: [
                "The test is <strong>on</strong> Monday.",
                "We moved <strong>on</strong> July 15th.",
                "Classes resume <strong>on</strong> the first day of term.",
              ],
            },
            {
              prep: "in",
              rule: "Months, years, seasons, longer periods.",
              examples: [
                "She graduated <strong>in</strong> 2022.",
                "Temperatures drop <strong>in</strong> winter.",
                "I applied <strong>in</strong> September.",
              ],
            },
            {
              prep: "for",
              rule: "Duration — how long something lasts.",
              examples: [
                "I have lived here <strong>for</strong> three years.",
                "The noise continued <strong>for</strong> hours.",
                "She studied <strong>for</strong> the exam all week.",
              ],
            },
            {
              prep: "since",
              rule: "Starting point up to now (used with perfect tenses).",
              examples: [
                "I've worked there <strong>since</strong> 2019.",
                "The road has been closed <strong>since</strong> Monday.",
                "He hasn't called <strong>since</strong> last week.",
              ],
            },
            {
              prep: "by",
              rule: "Deadline — no later than.",
              examples: [
                "Please submit the form <strong>by</strong> Friday.",
                "The report must be done <strong>by</strong> noon.",
                "I need an answer <strong>by</strong> tomorrow.",
              ],
            },
            {
              prep: "until / till",
              rule: "Continuing up to a point in time.",
              examples: [
                "The office is open <strong>until</strong> 6 p.m.",
                "I waited <strong>until</strong> he arrived.",
                "Classes run <strong>till</strong> mid-December.",
              ],
            },
            {
              prep: "during",
              rule: "Within a period or event.",
              examples: [
                "Noise is not allowed <strong>during</strong> quiet hours.",
                "I took notes <strong>during</strong> the meeting.",
                "She visited family <strong>during</strong> the holidays.",
              ],
            },
            {
              prep: "within",
              rule: "Inside a time frame.",
              examples: [
                "Please reply <strong>within</strong> two business days.",
                "I'll finish <strong>within</strong> an hour.",
                "Improvements were seen <strong>within</strong> weeks.",
              ],
            },
            {
              prep: "before / after",
              rule: "Order of events.",
              examples: [
                "Please read the instructions <strong>before</strong> you begin.",
                "I'll call you <strong>after</strong> the interview.",
                "Submit your form <strong>before</strong> the deadline.",
              ],
            },
          ],
        },
        {
          emoji: "📍",
          category: "Place & Position Prepositions",
          bg: "#dcfce7",
          color: "#166534",
          border: "#86efac",
          intro:
            "Essential for Speaking Task 3 (describing a scene) and any writing where you describe a setting, layout, or location.",
          items: [
            {
              prep: "at",
              rule: "A specific point or location.",
              examples: [
                "She is <strong>at</strong> the bus stop.",
                "He works <strong>at</strong> City Hall.",
                "Meet me <strong>at</strong> the corner.",
              ],
            },
            {
              prep: "in",
              rule: "Inside an enclosed or defined area.",
              examples: [
                "The folder is <strong>in</strong> my bag.",
                "They live <strong>in</strong> a downtown apartment.",
                "There is a park <strong>in</strong> the neighbourhood.",
              ],
            },
            {
              prep: "on",
              rule: "A surface, floor, or street.",
              examples: [
                "The keys are <strong>on</strong> the table.",
                "She lives <strong>on</strong> the fourth floor.",
                "The store is <strong>on</strong> Main Street.",
              ],
            },
            {
              prep: "above / below",
              rule: "Higher or lower position without touching.",
              examples: [
                "The sign is <strong>above</strong> the entrance.",
                "The parking is <strong>below</strong> the building.",
                "Temperatures dropped <strong>below</strong> freezing.",
              ],
            },
            {
              prep: "beside / next to",
              rule: "Immediately adjacent.",
              examples: [
                "He sat <strong>beside</strong> me.",
                "The pharmacy is <strong>next to</strong> the clinic.",
                "There is a bench <strong>beside</strong> the fountain.",
              ],
            },
            {
              prep: "between",
              rule: "In the middle of two things.",
              examples: [
                "The park is <strong>between</strong> the school and the library.",
                "She sat <strong>between</strong> her parents.",
                "There is a door <strong>between</strong> the two offices.",
              ],
            },
            {
              prep: "behind / in front of",
              rule: "Position relative to the facing side.",
              examples: [
                "The child is hiding <strong>behind</strong> the tree.",
                "A vendor is standing <strong>in front of</strong> the stall.",
                "The car stopped <strong>in front of</strong> our house.",
              ],
            },
            {
              prep: "near / close to",
              rule: "Not far away.",
              examples: [
                "There is a school <strong>near</strong> my home.",
                "She lives <strong>close to</strong> the subway.",
                "The hostel is <strong>near</strong> the city centre.",
              ],
            },
            {
              prep: "across from / opposite",
              rule: "Directly facing something.",
              examples: [
                "The bank is <strong>across from</strong> the post office.",
                "He sat <strong>opposite</strong> me.",
                "There is a café <strong>across from</strong> the park.",
              ],
            },
          ],
        },
        {
          emoji: "➡️",
          category: "Direction & Movement Prepositions",
          bg: "#fef3c7",
          color: "#92400e",
          border: "#fde68a",
          intro:
            "Use these to describe motion — helpful in Speaking Task 3 when describing what people are doing in a scene.",
          items: [
            {
              prep: "to",
              rule: "Movement toward a destination.",
              examples: [
                "She walked <strong>to</strong> the store.",
                "I commute <strong>to</strong> work by subway.",
                "He is heading <strong>to</strong> the airport.",
              ],
            },
            {
              prep: "toward(s)",
              rule: "In the direction of (may not arrive).",
              examples: [
                "He was walking <strong>toward</strong> the exit.",
                "She looked <strong>toward</strong> the window.",
                "The crowd moved <strong>toward</strong> the stage.",
              ],
            },
            {
              prep: "into",
              rule: "Movement entering an enclosed space.",
              examples: [
                "She walked <strong>into</strong> the room.",
                "He poured water <strong>into</strong> the glass.",
                "The bus turned <strong>into</strong> the lot.",
              ],
            },
            {
              prep: "out of",
              rule: "Movement exiting from inside.",
              examples: [
                "She walked <strong>out of</strong> the building.",
                "He took the documents <strong>out of</strong> the folder.",
                "The family moved <strong>out of</strong> the city.",
              ],
            },
            {
              prep: "through",
              rule: "Moving from one side to the other.",
              examples: [
                "She walked <strong>through</strong> the park.",
                "Sound travels <strong>through</strong> walls.",
                "We drove <strong>through</strong> the tunnel.",
              ],
            },
            {
              prep: "past",
              rule: "Moving beyond a point.",
              examples: [
                "We walked <strong>past</strong> the coffee shop.",
                "The bus goes <strong>past</strong> my house.",
                "She ran <strong>past</strong> the finish line.",
              ],
            },
            {
              prep: "along",
              rule: "Moving beside or following a line.",
              examples: [
                "They jogged <strong>along</strong> the river trail.",
                "Trees are planted <strong>along</strong> the road.",
                "She walked <strong>along</strong> the beach.",
              ],
            },
            {
              prep: "across",
              rule: "From one side to the other.",
              examples: [
                "She swam <strong>across</strong> the lake.",
                "We drove <strong>across</strong> the bridge.",
                "He walked <strong>across</strong> the street.",
              ],
            },
          ],
        },
        {
          emoji: "🔗",
          category: "Prepositional Phrases in Formal Writing",
          bg: "#ede9fe",
          color: "#5b21b6",
          border: "#c4b5fd",
          intro:
            "These multi-word prepositions are common in CELPIP Writing Task 1 emails and Task 2 opinion pieces. Mastering them makes your writing sound professional.",
          items: [
            {
              prep: "in addition to",
              rule: "Add another point without saying 'also'.",
              examples: [
                "<strong>In addition to</strong> the noise, the smell has become a problem.",
                "<strong>In addition to</strong> her qualifications, she has great experience.",
                "The plan saves money <strong>in addition to</strong> reducing emissions.",
              ],
            },
            {
              prep: "as a result of",
              rule: "Show cause and effect formally.",
              examples: [
                "<strong>As a result of</strong> the construction, traffic has worsened.",
                "She missed the deadline <strong>as a result of</strong> illness.",
                "<strong>As a result of</strong> the policy, costs were reduced.",
              ],
            },
            {
              prep: "in terms of",
              rule: "Specify the area you're discussing.",
              examples: [
                "<strong>In terms of</strong> cost, the second option is better.",
                "The city has improved <strong>in terms of</strong> public transit.",
                "I need guidance <strong>in terms of</strong> next steps.",
              ],
            },
            {
              prep: "with regard to",
              rule: "Introduce a topic formally (common in emails).",
              examples: [
                "<strong>With regard to</strong> your complaint, we have investigated the matter.",
                "I am writing <strong>with regard to</strong> the recent changes.",
                "<strong>With regard to</strong> your question, please see the attached file.",
              ],
            },
            {
              prep: "on behalf of",
              rule: "Acting for someone else.",
              examples: [
                "I am writing <strong>on behalf of</strong> our team.",
                "She attended the meeting <strong>on behalf of</strong> the director.",
                "He signed the form <strong>on behalf of</strong> his client.",
              ],
            },
            {
              prep: "in favour of",
              rule: "Show support or preference.",
              examples: [
                "Residents voted <strong>in favour of</strong> the new park.",
                "I am <strong>in favour of</strong> extending library hours.",
                "The board decided <strong>in favour of</strong> the proposal.",
              ],
            },
            {
              prep: "due to / owing to",
              rule: "Give a formal reason.",
              examples: [
                "The delay was <strong>due to</strong> heavy snowfall.",
                "<strong>Owing to</strong> budget constraints, the project was cancelled.",
                "Services are limited <strong>due to</strong> ongoing construction.",
              ],
            },
            {
              prep: "instead of",
              rule: "Offer an alternative.",
              examples: [
                "<strong>Instead of</strong> building a mall, invest in the park.",
                "She took the bus <strong>instead of</strong> driving.",
                "<strong>Instead of</strong> complaining, he found a solution.",
              ],
            },
          ],
        },
        {
          emoji: "⚠️",
          category: "Common Traps",
          bg: "#fee2e2",
          color: "#991b1b",
          border: "#fca5a5",
          items: [
            {
              prep: "❌ interested on → ✅ interested in",
              rule: "Always use 'in' after interested.",
              examples: [
                "I am interested <strong>in</strong> improving my English.",
                "She is interested <strong>in</strong> the position.",
              ],
            },
            {
              prep: "❌ depend of → ✅ depend on",
              rule: "'Depend' always pairs with 'on'.",
              examples: [
                "The outcome depends <strong>on</strong> your effort.",
                "You can depend <strong>on</strong> me.",
              ],
            },
            {
              prep: "❌ arrive to → ✅ arrive at / in",
              rule: "Use 'at' for specific places; 'in' for cities/countries.",
              examples: [
                "I arrived <strong>at</strong> the airport at 6 a.m.",
                "She arrived <strong>in</strong> Canada last year.",
              ],
            },
            {
              prep: "❌ discuss about → ✅ discuss (no preposition)",
              rule: "'Discuss' is a transitive verb — it takes a direct object, not 'about'.",
              examples: [
                "We discussed <strong>the issue</strong>. (not: discussed about the issue)",
                "Let's discuss <strong>the plan</strong> tomorrow.",
              ],
            },
            {
              prep: "❌ married with → ✅ married to",
              rule: "Use 'to' after 'married'.",
              examples: [
                "She is married <strong>to</strong> a doctor.",
                "They have been married <strong>to</strong> each other for 10 years.",
              ],
            },
            {
              prep: "❌ listen music → ✅ listen to music",
              rule: "'Listen' always needs 'to'.",
              examples: [
                "I listen <strong>to</strong> podcasts on my commute.",
                "He was listening <strong>to</strong> the radio.",
              ],
            },
            {
              prep: "❌ in the weekend → ✅ on the weekend",
              rule: "Use 'on' for days and weekends.",
              examples: [
                "We play hockey <strong>on</strong> the weekend.",
                "The market opens <strong>on</strong> Saturdays.",
              ],
            },
            {
              prep: "❌ good in → ✅ good at",
              rule: "Use 'at' after 'good' to describe a skill.",
              examples: [
                "She is good <strong>at</strong> public speaking.",
                "He is not very good <strong>at</strong> math.",
              ],
            },
          ],
        },
      ];

      content.innerHTML = `
    <style>
      /* ── Tab bar ── */
      .prep-tab-row { display: flex; gap: 0; border-bottom: 2px solid #e5e7eb; margin-bottom: 1.75rem; overflow-x: auto; scrollbar-width: none; }
      .prep-tab-row::-webkit-scrollbar { display: none; }
      .prep-tab { padding: 10px 18px; font-size: 13px; font-weight: 500; color: #6b7280; cursor: pointer; border: none; background: none; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: color 0.15s; white-space: nowrap; }
      .prep-tab.prep-tab-active { color: #111827; border-bottom-color: #111827; }
      .prep-tab:hover:not(.prep-tab-active) { color: #374151; }
      .prep-panel { display: none; }
      .prep-panel.prep-panel-active { display: block; }

      /* ── Reference section styles ── */
      .prep-section { margin-bottom: 2.5rem; }
      .prep-section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
      .prep-section-badge { font-size: 11px; font-weight: 700; padding: 3px 11px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
      .prep-section-intro { font-size: 13px; color: #6b7280; line-height: 1.65; margin-bottom: 1rem; padding: 10px 14px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #e5e7eb; }
      .prep-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; }
      .prep-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.9rem 1rem; }
      .prep-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem; }
      .prep-word { font-size: 15px; font-weight: 700; color: #111827; }
      .prep-rule { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .prep-examples { display: flex; flex-direction: column; gap: 3px; }
      .prep-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #f9fafb; border-radius: 6px; padding: 3px 8px; border: 1px solid #f3f4f6; }

      /* ── Traps ── */
      .prep-trap-card { background: #fff; border: 1px solid #fbcfe8; border-radius: 12px; padding: 0.9rem 1rem; margin-bottom: 0.75rem; }
      .prep-trap-label { font-size: 13px; font-weight: 700; color: #be185d; margin-bottom: 0.4rem; }
      .prep-trap-rule { font-size: 12.5px; color: #374151; line-height: 1.55; margin-bottom: 0.5rem; }
      .prep-trap-exs { display: flex; flex-direction: column; gap: 3px; }
      .prep-trap-ex { font-size: 12px; color: #6b7280; font-style: italic; background: #fff5f7; border-radius: 6px; padding: 3px 8px; border: 1px solid #fce7f3; }

      /* ── CELPIP Tasks ── */
      .ct-task-block { margin-bottom: 2.5rem; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; background: #fff; }
      .ct-task-header { display: flex; align-items: center; gap: 10px; padding: 1rem 1.25rem; border-bottom: 1px solid #e5e7eb; background: #f9fafb; }
      .ct-task-badge { font-size: 11.5px; font-weight: 700; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.04em; }
      .ct-task-type { font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; margin-left: auto; }
      .ct-scenario-box { padding: 0.85rem 1.25rem; background: #fffbeb; border-bottom: 1px solid #fde68a; }
      .ct-scenario-label { font-size: 10.5px; font-weight: 700; color: #92400e; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
      .ct-scenario-text { font-size: 13px; color: #374151; line-height: 1.6; }
      .ct-response-box { padding: 1rem 1.25rem; border-bottom: 1px solid #e5e7eb; }
      .ct-response-label { font-size: 10.5px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
      .ct-response-label span { font-size: 13px; }
      .ct-response-text { font-size: 13.5px; color: #111827; line-height: 2; white-space: pre-line; }
      .ct-response-text strong, .ct-response-text em { color: #2563eb; font-style: normal; font-weight: 700; background: #eff6ff; border-radius: 3px; padding: 0 3px; }
      .ct-highlights { padding: 1rem 1.25rem; }
      .ct-highlights-label { font-size: 10.5px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
      .ct-highlights-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 6px; }
      .ct-hl-item { display: flex; gap: 8px; align-items: flex-start; background: #f9fafb; border-radius: 8px; padding: 6px 10px; border: 1px solid #f3f4f6; }
      .ct-hl-prep { font-size: 13px; font-weight: 700; color: #2563eb; min-width: 52px; flex-shrink: 0; }
      .ct-hl-use { font-size: 12px; color: #6b7280; line-height: 1.5; }

      .ct-type-filter { display: flex; gap: 8px; margin-bottom: 1.5rem; flex-wrap: wrap; }
      .ct-filter-btn { padding: 6px 16px; border-radius: 20px; border: 1px solid #d1d5db; background: #fff; font-size: 12.5px; font-weight: 500; color: #6b7280; cursor: pointer; transition: all 0.15s; }
      .ct-filter-btn.ct-filter-active { background: #111827; border-color: #111827; color: #fff; }

      /* ── Quiz styles ── */
      .pq-scoreboard { display: flex; align-items: center; justify-content: space-between; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 0.75rem 1.25rem; margin-bottom: 1.25rem; }
      .pq-score-live { font-size: 15px; font-weight: 700; color: #111827; }
      .pq-counter { font-size: 12px; color: #9ca3af; }
      .pq-bar-wrap { height: 5px; background: #e5e7eb; border-radius: 3px; margin-bottom: 1.5rem; }
      .pq-bar-fill { height: 5px; background: #2563eb; border-radius: 3px; transition: width 0.35s; }
      .pq-question { font-size: 17px; font-weight: 600; color: #111827; line-height: 1.55; margin-bottom: 1.25rem; }
      .pq-options { display: flex; flex-direction: column; gap: 9px; margin-bottom: 1.25rem; }
      .pq-opt { padding: 11px 16px; border: 1.5px solid #d1d5db; border-radius: 10px; background: #fff; font-size: 14px; font-weight: 500; color: #374151; cursor: pointer; text-align: left; transition: background 0.1s, border-color 0.1s; }
      .pq-opt:hover:not(:disabled) { background: #f9fafb; border-color: #9ca3af; }
      .pq-opt.pq-correct { background: #dcfce7; border-color: #16a34a; color: #166534; font-weight: 600; }
      .pq-opt.pq-wrong { background: #fee2e2; border-color: #dc2626; color: #991b1b; font-weight: 600; }
      .pq-feedback { border-radius: 10px; padding: 10px 14px; font-size: 13px; line-height: 1.6; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 5px; }
      .pq-fb-ok { background: #f0fdf4; border: 1px solid #86efac; color: #166534; }
      .pq-fb-err { background: #fff1f2; border: 1px solid #fca5a5; color: #991b1b; }
      .pq-fb-icon { font-weight: 700; font-size: 15px; }
      .pq-fb-msg { font-weight: 500; }
      .pq-fb-exp { font-size: 12.5px; color: #374151; line-height: 1.6; padding-top: 4px; border-top: 1px solid rgba(0,0,0,0.07); margin-top: 4px; }
      .pq-next-btn { display: inline-block; padding: 10px 28px; background: #111827; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
      .pq-next-btn:hover { opacity: 0.85; }
      .pq-results { text-align: center; padding: 2rem 1rem; }
      .pq-res-circle { width: 130px; height: 130px; border-radius: 50%; border: 4px solid; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 1.25rem; }
      .pq-res-num { font-size: 36px; font-weight: 800; line-height: 1; }
      .pq-res-denom { font-size: 12px; color: #6b7280; }
      .pq-res-pct { font-size: 15px; font-weight: 700; margin-top: 2px; }
      .pq-res-msg { font-size: 14px; color: #374151; line-height: 1.6; max-width: 380px; margin: 0 auto 1.5rem; }
      .pq-restart-btn { padding: 10px 32px; background: #111827; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; }
      .pq-restart-btn:hover { opacity: 0.85; }

      @media (max-width: 600px) { .prep-grid { grid-template-columns: 1fr; } .ct-highlights-grid { grid-template-columns: 1fr; } }
    </style>

    <!-- ── Tab bar ── -->
    <div class="prep-tab-row">
      <button class="prep-tab prep-tab-active" onclick="prepShowTab('prep-reference')">📚 Preposition Reference</button>
      <button class="prep-tab" onclick="prepShowTab('prep-tasks')">🎯 CELPIP Task Samples</button>
      <button class="prep-tab" onclick="prepShowTab('prep-quiz')">✏️ Quiz</button>
    </div>

    <!-- ══ PANEL 1: Reference ══ -->
    <div id="prep-reference" class="prep-panel prep-panel-active">
      ${CELPIP_PREP_GROUPS_INLINE.map((group) => {
        const isTraps = group.category === "Common Traps";
        return `
          <div class="prep-section">
            <div class="prep-section-header">
              <span style="font-size:1.3rem">${group.emoji}</span>
              <span class="prep-section-badge" style="background:${group.bg};color:${group.color}">${group.category}</span>
              ${!isTraps ? `<span style="font-size:12px;color:#9ca3af">${group.items.length} prepositions</span>` : ""}
            </div>
            ${group.intro ? `<div class="prep-section-intro">${group.intro}</div>` : ""}
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
    </div>

    <!-- ══ PANEL 2: CELPIP Tasks ══ -->
    <div id="prep-tasks" class="prep-panel">
      <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:1.25rem;">
        Each sample below shows a realistic CELPIP scenario. Prepositions in the response are <span style="color:#2563eb;font-weight:700;background:#eff6ff;border-radius:3px;padding:0 3px;">highlighted in blue</span>. A breakdown below each sample explains why each preposition was chosen.
      </p>

      <!-- Filter buttons -->
      <div class="ct-type-filter">
        <button class="ct-filter-btn ct-filter-active" onclick="prepFilter('all', this)">All Tasks</button>
        <button class="ct-filter-btn" onclick="prepFilter('writing', this)">✉️ Writing Tasks</button>
        <button class="ct-filter-btn" onclick="prepFilter('speaking', this)">🗣️ Speaking Tasks</button>
      </div>

      <div id="ct-task-list">
        ${CELPIP_PREP_TASKS.map(
          (task) => `
          <div class="ct-task-block" data-type="${task.type}">
            <div class="ct-task-header">
              <span class="ct-task-badge" style="background:${task.badgeBg};color:${task.badgeColor}">${task.badge}</span>
              <span class="ct-task-type">${task.type.toUpperCase()}</span>
            </div>
            <div class="ct-scenario-box">
              <div class="ct-scenario-label">📋 Scenario</div>
              <div class="ct-scenario-text">${task.scenario}</div>
            </div>
            <div class="ct-response-box">
              <div class="ct-response-label"><span>✍️</span> Sample Response — prepositions highlighted</div>
              <div class="ct-response-text">${task.sampleResponse}</div>
            </div>
            <div class="ct-highlights">
              <div class="ct-highlights-label">🔍 Preposition Breakdown</div>
              <div class="ct-highlights-grid">
                ${task.highlights
                  .map(
                    (h) => `
                  <div class="ct-hl-item">
                    <div class="ct-hl-prep">${h.prep}</div>
                    <div class="ct-hl-use">${h.use}</div>
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
    </div>

    <!-- ══ PANEL 3: Quiz ══ -->
    <div id="prep-quiz" class="prep-panel">
      <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:1.25rem;">
        55 questions covering time, place, direction, formal phrases, and common CELPIP traps. Your running score updates after every answer.
      </p>
      <div id="pq-body">
        <div class="pq-scoreboard">
          <span id="pq-score-live" class="pq-score-live">Score: 0 / 0</span>
          <span id="pq-counter" class="pq-counter">Question 1 of 55</span>
        </div>
        <div class="pq-bar-wrap"><div id="pq-bar-fill" class="pq-bar-fill" style="width:0%"></div></div>
        <div id="pq-question" class="pq-question"></div>
        <div id="pq-options" class="pq-options"></div>
        <div id="pq-feedback" class="pq-feedback" style="display:none"></div>
        <button id="pq-next" class="pq-next-btn" onclick="pqNext()" style="display:none">Next →</button>
      </div>
      <div id="pq-results" style="display:none"></div>
    </div>
  `;

      // ── Tab switcher ─────────────────────────────────────────────────────
      window.prepShowTab = function (id) {
        document
          .querySelectorAll(".prep-panel")
          .forEach((p) => p.classList.remove("prep-panel-active"));
        document
          .querySelectorAll(".prep-tab")
          .forEach((t) => t.classList.remove("prep-tab-active"));
        document.getElementById(id).classList.add("prep-panel-active");
        const idx = ["prep-reference", "prep-tasks", "prep-quiz"].indexOf(id);
        document
          .querySelectorAll(".prep-tab")
          [idx].classList.add("prep-tab-active");
        if (id === "prep-quiz" && !window._prepQuizInit) initPrepQuiz();
      };

      // ── Filter Writing / Speaking tasks ──────────────────────────────────
      window.prepFilter = function (type, btn) {
        document
          .querySelectorAll(".ct-filter-btn")
          .forEach((b) => b.classList.remove("ct-filter-active"));
        btn.classList.add("ct-filter-active");
        document.querySelectorAll(".ct-task-block").forEach((block) => {
          block.style.display =
            type === "all" || block.dataset.type === type ? "block" : "none";
        });
      };

      // ── Quiz data ─────────────────────────────────────────────────────────
      const PREP_QUIZ_QUESTIONS = [
        // Time
        {
          q: "The meeting is __ 9 a.m.",
          options: ["in", "on", "at", "for"],
          ans: 2,
          exp: "Use <strong>at</strong> for exact clock times.",
        },
        {
          q: "She has worked here __ 2019.",
          options: ["for", "since", "during", "in"],
          ans: 1,
          exp: "<strong>Since</strong> marks the starting point of an ongoing action (used with perfect tenses).",
        },
        {
          q: "I lived in Toronto __ three years.",
          options: ["since", "during", "for", "until"],
          ans: 2,
          exp: "<strong>For</strong> shows duration — how long something lasted.",
        },
        {
          q: "Please submit the report __ Friday.",
          options: ["until", "by", "on", "at"],
          ans: 1,
          exp: "<strong>By</strong> means no later than a deadline.",
        },
        {
          q: "The library is open __ 8 p.m.",
          options: ["by", "at", "until", "since"],
          ans: 2,
          exp: "<strong>Until</strong> means up to and including that time.",
        },
        {
          q: "She was born __ January.",
          options: ["on", "at", "in", "by"],
          ans: 2,
          exp: "<strong>In</strong> is used with months, years, and seasons.",
        },
        {
          q: "No talking is allowed __ the exam.",
          options: ["for", "during", "while", "at"],
          ans: 1,
          exp: "<strong>During</strong> is used with a noun to describe something happening within that period.",
        },
        {
          q: "The parcel will arrive __ two days.",
          options: ["in", "within", "for", "by"],
          ans: 1,
          exp: "<strong>Within</strong> means before the end of that time frame.",
        },
        {
          q: "He called me __ midnight.",
          options: ["in", "on", "at", "by"],
          ans: 2,
          exp: "<strong>At</strong> is used with specific times including midnight and noon.",
        },
        {
          q: "Please call me __ you arrive.",
          options: ["since", "after", "during", "for"],
          ans: 1,
          exp: "<strong>After</strong> indicates something happens later in sequence.",
        },
        // Place
        {
          q: "She lives __ a small apartment.",
          options: ["at", "on", "in", "by"],
          ans: 2,
          exp: "<strong>In</strong> is used for enclosed spaces and areas.",
        },
        {
          q: "The keys are __ the table.",
          options: ["in", "at", "on", "above"],
          ans: 2,
          exp: "<strong>On</strong> is used for surfaces.",
        },
        {
          q: "He works __ the hospital.",
          options: ["in", "at", "on", "into"],
          ans: 1,
          exp: "<strong>At</strong> is used for specific locations and institutions.",
        },
        {
          q: "The café is __ the corner of King and Bay.",
          options: ["on", "at", "in", "by"],
          ans: 1,
          exp: "<strong>At</strong> is used for a specific point or corner.",
        },
        {
          q: "She lives __ the third floor.",
          options: ["in", "at", "on", "by"],
          ans: 2,
          exp: "<strong>On</strong> is used with floor levels.",
        },
        {
          q: "The park is __ the school and the library.",
          options: ["among", "between", "beside", "across"],
          ans: 1,
          exp: "<strong>Between</strong> is used when referring to two defined points.",
        },
        {
          q: "He stood __ the door, waiting.",
          options: ["in front of", "above", "among", "through"],
          ans: 0,
          exp: "<strong>In front of</strong> means facing or before the entrance side.",
        },
        {
          q: "There is a pharmacy __ to the clinic.",
          options: ["next", "close", "beside", "near"],
          ans: 0,
          exp: "<strong>Next to</strong> means immediately adjacent.",
        },
        {
          q: "The sign is __ the entrance.",
          options: ["over", "above", "on", "across"],
          ans: 1,
          exp: "<strong>Above</strong> means at a higher level, without necessarily touching.",
        },
        {
          q: "She sat __ her parents.",
          options: ["among", "between", "beside", "in front of"],
          ans: 1,
          exp: "<strong>Between</strong> is used when one thing is in the middle of two specific others.",
        },
        // Direction
        {
          q: "She walked __ the room without knocking.",
          options: ["to", "in", "into", "toward"],
          ans: 2,
          exp: "<strong>Into</strong> shows movement entering an enclosed space.",
        },
        {
          q: "We drove __ the tunnel.",
          options: ["across", "past", "through", "along"],
          ans: 2,
          exp: "<strong>Through</strong> means moving from one side of something to the other.",
        },
        {
          q: "He ran __ the finish line.",
          options: ["past", "through", "across", "along"],
          ans: 0,
          exp: "<strong>Past</strong> means moving beyond a point.",
        },
        {
          q: "They jogged __ the river trail.",
          options: ["across", "past", "through", "along"],
          ans: 3,
          exp: "<strong>Along</strong> means moving beside or following a path.",
        },
        {
          q: "She walked __ the street to reach the store.",
          options: ["along", "across", "through", "past"],
          ans: 1,
          exp: "<strong>Across</strong> means from one side to the other.",
        },
        {
          q: "He was walking __ the exit when I called him.",
          options: ["to", "into", "toward", "through"],
          ans: 2,
          exp: "<strong>Toward</strong> means in the direction of, without necessarily arriving.",
        },
        {
          q: "The family moved __ the city last year.",
          options: ["out", "out of", "from", "away"],
          ans: 1,
          exp: "<strong>Out of</strong> means exiting from inside a place.",
        },
        {
          q: "She commutes __ work by subway every day.",
          options: ["at", "to", "into", "toward"],
          ans: 1,
          exp: "<strong>To</strong> shows movement toward a destination.",
        },
        // Formal phrases
        {
          q: "__ the noise, there was also a bad smell.",
          options: ["Instead of", "Due to", "In addition to", "As a result of"],
          ans: 2,
          exp: "<strong>In addition to</strong> adds an extra point without using 'also'.",
        },
        {
          q: "The delay was __ heavy snowfall.",
          options: ["because", "due to", "in terms of", "owing"],
          ans: 1,
          exp: "<strong>Due to</strong> gives a formal reason; it must be followed by a noun/noun phrase.",
        },
        {
          q: "I am writing __ your complaint.",
          options: ["with regard to", "in terms of", "instead of", "due to"],
          ans: 0,
          exp: "<strong>With regard to</strong> is a formal phrase used to introduce the subject of a letter or email.",
        },
        {
          q: "She attended the meeting __ the director.",
          options: ["instead of", "on behalf of", "in favour of", "due to"],
          ans: 1,
          exp: "<strong>On behalf of</strong> means representing or acting for someone else.",
        },
        {
          q: "Residents voted __ the new park.",
          options: [
            "in favour of",
            "instead of",
            "in addition to",
            "as a result of",
          ],
          ans: 0,
          exp: "<strong>In favour of</strong> means in support of something.",
        },
        {
          q: "__ replacing the park, the city should improve it.",
          options: ["Due to", "In terms of", "Instead of", "In addition to"],
          ans: 2,
          exp: "<strong>Instead of</strong> presents an alternative action.",
        },
        {
          q: "The project was cancelled __ budget constraints.",
          options: ["due to", "in terms of", "with regard to", "instead of"],
          ans: 0,
          exp: "<strong>Due to</strong> / <strong>owing to</strong> introduce the formal cause.",
        },
        // Common traps
        {
          q: "She is very interested __ learning English.",
          options: ["on", "in", "about", "for"],
          ans: 1,
          exp: "Always use <strong>interested in</strong> — 'interested on' is incorrect.",
        },
        {
          q: "The result depends __ how much you study.",
          options: ["of", "from", "on", "at"],
          ans: 2,
          exp: "<strong>Depend on</strong> is the correct collocation.",
        },
        {
          q: "I arrived __ the airport at 6 a.m.",
          options: ["to", "in", "at", "on"],
          ans: 2,
          exp: "Use <strong>arrive at</strong> for specific places (airport, station, school).",
        },
        {
          q: "She arrived __ Canada in November.",
          options: ["at", "to", "in", "on"],
          ans: 2,
          exp: "Use <strong>arrive in</strong> for cities and countries.",
        },
        {
          q: "Let's discuss __ the proposal tomorrow.",
          options: ["about", "on", "— (no preposition)", "for"],
          ans: 2,
          exp: "<strong>Discuss</strong> is transitive — no preposition needed: 'discuss the proposal'.",
        },
        {
          q: "He is married __ a doctor.",
          options: ["with", "to", "and", "by"],
          ans: 1,
          exp: "Always use <strong>married to</strong>, not 'married with'.",
        },
        {
          q: "I love listening __ music on my commute.",
          options: ["— (no prep)", "at", "to", "for"],
          ans: 2,
          exp: "<strong>Listen to</strong> always requires 'to'.",
        },
        {
          q: "We usually play hockey __ the weekend.",
          options: ["in", "at", "during", "on"],
          ans: 3,
          exp: "Use <strong>on</strong> for days and weekends.",
        },
        {
          q: "She is very good __ public speaking.",
          options: ["in", "at", "on", "for"],
          ans: 1,
          exp: "Use <strong>good at</strong> to describe a skill or ability.",
        },
        {
          q: "I am not satisfied __ the results.",
          options: ["from", "by", "with", "about"],
          ans: 2,
          exp: "<strong>Satisfied with</strong> is the correct collocation.",
        },
        // CELPIP context
        {
          q: "I am writing to bring this issue __ your attention.",
          options: ["in", "to", "at", "for"],
          ans: 1,
          exp: "The fixed phrase is <strong>bring something to someone's attention</strong>.",
        },
        {
          q: "The noise can be heard __ the walls.",
          options: ["across", "along", "through", "past"],
          ans: 2,
          exp: "<strong>Through</strong> describes sound passing from one side of a barrier to the other.",
        },
        {
          q: "I am concerned __ the impact on my sleep.",
          options: ["for", "of", "about", "with"],
          ans: 2,
          exp: "<strong>Concerned about</strong> is the standard collocation for expressing worry.",
        },
        {
          q: "The park is used __ hundreds of families every weekend.",
          options: ["from", "with", "to", "by"],
          ans: 3,
          exp: "<strong>By</strong> introduces the agent in passive constructions.",
        },
        {
          q: "Children rely __ the park for outdoor play.",
          options: ["at", "in", "on", "upon"],
          ans: 2,
          exp: "<strong>Rely on</strong> is the correct collocation.",
        },
        {
          q: "__ conclusion, I urge the city to reconsider.",
          options: ["At", "In", "On", "By"],
          ans: 1,
          exp: "<strong>In conclusion</strong> is the standard linking phrase to end a formal response.",
        },
        {
          q: "I look forward __ hearing from you.",
          options: ["to", "for", "at", "about"],
          ans: 0,
          exp: "<strong>Look forward to</strong> — 'to' is a preposition here, so it's followed by a gerund.",
        },
        {
          q: "__ the beginning, the new city felt overwhelming.",
          options: ["At", "On", "In", "By"],
          ans: 2,
          exp: "<strong>In the beginning</strong> is the correct fixed phrase.",
        },
        {
          q: "I went __ the same experience when I first moved.",
          options: ["across", "over", "through", "past"],
          ans: 2,
          exp: "<strong>Go through</strong> means to experience something difficult.",
        },
        {
          q: "Within a few months, you will feel __ home.",
          options: ["in", "at", "like", "on"],
          ans: 1,
          exp: "<strong>Feel at home</strong> is the fixed expression meaning to feel comfortable.",
        },
      ];

      // ── Quiz logic ─────────────────────────────────────────────────────────
      function initPrepQuiz() {
        window._prepQuizInit = true;
        let pqIndex = 0;
        let pqScore = 0;
        let pqAnswered = false;
        const total = PREP_QUIZ_QUESTIONS.length;

        function pqRender() {
          if (pqIndex >= total) {
            pqShowResults();
            return;
          }
          const q = PREP_QUIZ_QUESTIONS[pqIndex];
          pqAnswered = false;
          const pct = Math.round((pqIndex / total) * 100);
          document.getElementById("pq-bar-fill").style.width = pct + "%";
          document.getElementById("pq-counter").textContent =
            `Question ${pqIndex + 1} of ${total}`;
          document.getElementById("pq-score-live").textContent =
            `Score: ${pqScore} / ${pqIndex}`;
          document.getElementById("pq-question").textContent = q.q;
          document.getElementById("pq-feedback").style.display = "none";
          document.getElementById("pq-next").style.display = "none";
          const optsEl = document.getElementById("pq-options");
          optsEl.innerHTML = q.options
            .map(
              (opt, i) => `
            <button class="pq-opt" onclick="pqAnswer(${i}, this)">${opt}</button>
          `,
            )
            .join("");
        }

        window.pqAnswer = function (chosen, btn) {
          if (pqAnswered) return;
          pqAnswered = true;
          const q = PREP_QUIZ_QUESTIONS[pqIndex];
          const correct = chosen === q.ans;
          if (correct) pqScore++;
          document.querySelectorAll(".pq-opt").forEach((b, i) => {
            b.disabled = true;
            if (i === q.ans) b.classList.add("pq-correct");
          });
          if (!correct) btn.classList.add("pq-wrong");
          const fb = document.getElementById("pq-feedback");
          fb.style.display = "block";
          fb.innerHTML = `<span class="pq-fb-icon">${correct ? "✓" : "✗"}</span><span class="pq-fb-msg">${correct ? "Correct!" : `Incorrect — the answer is <strong>${q.options[q.ans]}</strong>.`}</span><div class="pq-fb-exp">${q.exp}</div>`;
          fb.className = "pq-feedback " + (correct ? "pq-fb-ok" : "pq-fb-err");
          document.getElementById("pq-score-live").textContent =
            `Score: ${pqScore} / ${pqIndex + 1}`;
          document.getElementById("pq-next").style.display = "inline-block";
        };

        window.pqNext = function () {
          pqIndex++;
          pqRender();
        };

        window.pqRestart = function () {
          pqIndex = 0;
          pqScore = 0;
          pqAnswered = false;
          document.getElementById("pq-results").style.display = "none";
          document.getElementById("pq-body").style.display = "block";
          pqRender();
        };

        function pqShowResults() {
          document.getElementById("pq-body").style.display = "none";
          const pct = Math.round((pqScore / total) * 100);
          let msg = "",
            color = "";
          if (pct === 100) {
            msg = "Perfect score! You have mastered prepositions. 🎉";
            color = "#166534";
          } else if (pct >= 80) {
            msg =
              "Excellent work! Review the ones you missed and you'll be ready for CELPIP. 🌟";
            color = "#1e40af";
          } else if (pct >= 60) {
            msg = "Good effort! Focus on common traps and formal phrases. 📚";
            color = "#92400e";
          } else {
            msg =
              "Keep practicing! Go through the Reference and Task Sample tabs, then try again. 💪";
            color = "#991b1b";
          }
          const res = document.getElementById("pq-results");
          res.style.display = "block";
          res.innerHTML = `
            <div class="pq-res-circle" style="border-color:${color}">
              <div class="pq-res-num" style="color:${color}">${pqScore}</div>
              <div class="pq-res-denom">out of ${total}</div>
              <div class="pq-res-pct" style="color:${color}">${pct}%</div>
            </div>
            <p class="pq-res-msg" style="color:${color}">${msg}</p>
            <button class="pq-restart-btn" onclick="pqRestart()">↺ Try Again</button>
          `;
        }

        pqRender();
      }
    }

    // ─── Event Listeners ────────────────────────────────────────────────
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
    renderSentenceStructure();
    renderAdjectives();
    renderPrepositions();
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
      <div className="flex">
        <AdsenseAd />

        <main className="max-w-6xl mx-auto px-6 pb-24">
          <div className="mb-8">
            <div className="my-4 border-t border-mist" />

            {/* Grammar group */}
            <div>
              <div className="flex flex-wrap gap-2">
                <button
                  className="tab-btn active px-4 py-2 text-sm font-medium rounded-lg bg-ink text-fog transition-all"
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
                  data-tab="verbs"
                >
                  Verbs
                </button>
                <button
                  className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                  data-tab="adjectives"
                >
                  Adjectives
                </button>
                <button
                  className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                  data-tab="adverbs"
                >
                  Adverbs
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
                  data-tab="positional-relations"
                >
                  Positional Relations
                </button>
                <button
                  className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                  data-tab="phonetics"
                >
                  Phonetics
                </button>
                <button
                  className="tab-btn px-4 py-2 text-sm font-medium rounded-lg bg-fog text-slate hover:bg-mist hover:text-ink transition-all"
                  data-tab="voice"
                >
                  Active &amp; Passive
                </button>
              </div>
            </div>
          </div>

          {/* Active & Passive Voice Tab */}
          <div id="voice" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master{" "}
                <span className="font-semibold text-emerald2-dark">active</span>{" "}
                and{" "}
                <span className="font-semibold text-amber2-dark">passive</span>{" "}
                voice — when to use each, how to convert between them, and
                CELPIP-specific examples for writing and speaking tasks.
              </p>
            </div>
            <VoiceTab />
          </div>

          {/* Phonetics Tab */}
          <div id="phonetics" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master English{" "}
                <span className="font-semibold text-sapphire-dark">
                  pronunciation
                </span>{" "}
                — learn how vowels, consonants, and stress patterns work so you
                can speak clearly and understand native speakers in every CELPIP
                task.
              </p>
            </div>
            <PhoneticsSection />
          </div>

          {/* Adverbs Tab */}
          <div id="adverbs" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master English{" "}
                <span className="font-semibold text-sapphire-dark">
                  adverbs
                </span>{" "}
                — the words that modify verbs, adjectives, and other adverbs.
                Learn every type, how native speakers use them, and how to boost
                your CELPIP Writing and Speaking score.
              </p>
            </div>
            <AdverbsTab />
          </div>

          {/* Idioms Tab */}
          <div id="idioms" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master common English{" "}
                <span className="font-semibold text-sapphire-dark">idioms</span>{" "}
                — fixed expressions whose meanings cannot be guessed from the
                individual words. Understanding idioms will help you sound
                natural and interpret authentic English in the CELPIP listening
                and reading sections.
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
                <span className="font-semibold text-sapphire-dark">
                  pronouns
                </span>{" "}
                — the words that name people, places, things, and ideas, and the
                words that replace them. Master their types, forms, and common
                traps.
              </p>
            </div>
            <NounsPronounsSection />
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
            <ConjunctionsSection />
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

          {/* Articles Tab */}
          <div id="articles" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master{" "}
                <span className="font-semibold text-sapphire-dark">a</span>,{" "}
                <span className="font-semibold text-emerald2-dark">an</span>,
                and <span className="font-semibold text-amber2-dark">the</span>{" "}
                — every rule, every trap, with interactive practice and a quiz.
              </p>
            </div>
            <ArticlesTab />
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
                modals, phrasal verbs, irregular verbs, and interactive
                practice.
              </p>
            </div>
            <VerbsTab />
          </div>

          {/* Adjectives Tab */}
          <div id="adjectives" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Master English{" "}
                <span className="font-semibold text-sapphire-dark">
                  adjectives
                </span>{" "}
                — the words that describe, qualify, and bring nouns to life.
                Learn every type, how native speakers use them, and how to boost
                your CELPIP Speaking and Writing scores with precise, vivid
                description.
              </p>
            </div>
            <div id="adjectives-content"></div>
          </div>

          <div id="positional-relations" className="tab-content hidden">
            <div className="mb-8">
              <p className="text-slate max-w-2xl leading-relaxed">
                Learn how English{" "}
                <span className="font-semibold text-sapphire-dark">
                  positional prepositions
                </span>{" "}
                describe where things are in space — above, below, inside,
                beside, and more. Each diagram shows the relationship with
                directional cues so you can see exactly how it works.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ── ABOVE ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">above</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="a-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* ceiling */}
                  <rect
                    x="0"
                    y="8"
                    width="200"
                    height="8"
                    rx="2"
                    fill="#e2e8f0"
                  />
                  <text
                    x="100"
                    y="7"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    ceiling
                  </text>
                  {/* gap label */}
                  <text
                    x="155"
                    y="62"
                    textAnchor="start"
                    fontSize="9"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    gap
                  </text>
                  <line
                    x1="150"
                    y1="20"
                    x2="150"
                    y2="42"
                    stroke="#94a3b8"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="143"
                    y1="20"
                    x2="157"
                    y2="20"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <line
                    x1="143"
                    y1="42"
                    x2="157"
                    y2="42"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  {/* yellow circle = lamp */}
                  <circle
                    cx="100"
                    cy="42"
                    r="16"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="46"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    lamp
                  </text>
                  {/* gravity arrow */}
                  <line
                    x1="178"
                    y1="100"
                    x2="178"
                    y2="130"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#a-arr)"
                  />
                  <text
                    x="179"
                    y="117"
                    textAnchor="start"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    gravity
                  </text>
                  {/* blue box = table */}
                  <rect
                    x="30"
                    y="110"
                    width="110"
                    height="36"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="85"
                    y="132"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    table
                  </text>
                  {/* vertical dashed = not touching */}
                  <line
                    x1="100"
                    y1="60"
                    x2="100"
                    y2="108"
                    stroke="#6366f1"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                  />
                  <text
                    x="104"
                    y="88"
                    textAnchor="start"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    not touching
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="150"
                    x2="200"
                    y2="150"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="158"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    floor
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Higher than something, with a gap — not touching it.
                </p>
                <p className="text-xs text-slate italic">
                  "The lamp is <strong>above</strong> the table."
                </p>
              </div>

              {/* ── OVER ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">over</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="ov-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* blue box = table */}
                  <rect
                    x="30"
                    y="90"
                    width="140"
                    height="38"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="113"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    table
                  </text>
                  {/* umbrella/cover shape — yellow covering object */}
                  <rect
                    x="20"
                    y="52"
                    width="160"
                    height="36"
                    rx="4"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="74"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    umbrella / cover
                  </text>
                  {/* coverage arrows fanning out from edges */}
                  <line
                    x1="20"
                    y1="70"
                    x2="5"
                    y2="70"
                    stroke="#d97706"
                    strokeWidth="1.2"
                    markerEnd="url(#ov-arr)"
                  />
                  <line
                    x1="180"
                    y1="70"
                    x2="195"
                    y2="70"
                    stroke="#d97706"
                    strokeWidth="1.2"
                    markerEnd="url(#ov-arr)"
                  />
                  <text
                    x="100"
                    y="44"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    covers entire surface
                  </text>
                  <line
                    x1="40"
                    y1="47"
                    x2="20"
                    y2="52"
                    stroke="#d97706"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="160"
                    y1="47"
                    x2="180"
                    y2="52"
                    stroke="#d97706"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  {/* may-touch indicator */}
                  <text
                    x="100"
                    y="96"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    may touch ↕
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="150"
                    x2="200"
                    y2="150"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="158"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    floor
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Directly covering something from above — may or may not touch.
                </p>
                <p className="text-xs text-slate italic">
                  "She held an umbrella <strong>over</strong> her head."
                </p>
              </div>

              {/* ── BELOW / UNDER ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">below / under</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="bu-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* blue box = table on legs */}
                  <rect
                    x="25"
                    y="28"
                    width="150"
                    height="28"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="47"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    table (surface)
                  </text>
                  {/* table legs */}
                  <line
                    x1="40"
                    y1="56"
                    x2="40"
                    y2="100"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="160"
                    y1="56"
                    x2="160"
                    y2="100"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  {/* "under" circle touching the surface bottom */}
                  <circle
                    cx="70"
                    cy="72"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="70"
                    y="76"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    under
                  </text>
                  <line
                    x1="70"
                    y1="56"
                    x2="70"
                    y2="57"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="71"
                    y="62"
                    textAnchor="start"
                    fontSize="7"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    touching
                  </text>
                  {/* "below" circle floating lower */}
                  <circle
                    cx="140"
                    cy="88"
                    r="14"
                    fill="#bbf7d0"
                    stroke="#059669"
                    strokeWidth="1.5"
                  />
                  <text
                    x="140"
                    y="92"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#065f46"
                    fontFamily="sans-serif"
                  >
                    below
                  </text>
                  <line
                    x1="140"
                    y1="56"
                    x2="140"
                    y2="72"
                    stroke="#059669"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="141"
                    y="68"
                    textAnchor="start"
                    fontSize="7"
                    fill="#059669"
                    fontFamily="sans-serif"
                  >
                    gap
                  </text>
                  {/* gravity arrow */}
                  <line
                    x1="8"
                    y1="60"
                    x2="8"
                    y2="95"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#bu-arr)"
                  />
                  <text
                    x="11"
                    y="80"
                    textAnchor="start"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                    transform="rotate(-90 11 80)"
                  >
                    gravity
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="108"
                    x2="200"
                    y2="108"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="116"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    floor
                  </text>
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    under = touching surface
                  </text>
                  <text
                    x="100"
                    y="143"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#059669"
                    fontFamily="sans-serif"
                  >
                    below = lower level, gap
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  <strong>Under</strong> = directly beneath, touching or very
                  close. <strong>Below</strong> = lower level, gap present.
                </p>
                <p className="text-xs text-slate italic">
                  "The cat hid <strong>under</strong> the bed." · "It's five
                  degrees <strong>below</strong> zero."
                </p>
              </div>

              {/* ── NEXT TO / BESIDE ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">
                  next to / beside
                </h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="nt-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* blue box */}
                  <rect
                    x="18"
                    y="50"
                    width="64"
                    height="64"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="50"
                    y="86"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  {/* front-face indicator on box */}
                  <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    ▶ front
                  </text>
                  {/* yellow circle */}
                  <circle
                    cx="148"
                    cy="82"
                    r="26"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="148"
                    y="86"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    circle
                  </text>
                  {/* lateral axis arrow (horizontal) */}
                  <line
                    x1="84"
                    y1="82"
                    x2="120"
                    y2="82"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#nt-arr)"
                  />
                  <text
                    x="102"
                    y="78"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    side
                  </text>
                  {/* bracket showing shared level */}
                  <line
                    x1="18"
                    y1="120"
                    x2="174"
                    y2="120"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="18"
                    y1="116"
                    x2="18"
                    y2="124"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="174"
                    y1="116"
                    x2="174"
                    y2="124"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="96"
                    y="132"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    same lateral level
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-sm text-slate">
                  At the side of — not in front of, not behind — at the same
                  level.
                </p>
                <p className="text-xs text-slate italic">
                  "She sat <strong>next to</strong> him." · "The park is{" "}
                  <strong>beside</strong> the school."
                </p>
              </div>

              {/* ── BETWEEN ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">between</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="bw-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* box A */}
                  <rect
                    x="4"
                    y="44"
                    width="52"
                    height="52"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="30"
                    y="74"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    A
                  </text>
                  {/* box B */}
                  <rect
                    x="144"
                    y="44"
                    width="52"
                    height="52"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="170"
                    y="74"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    B
                  </text>
                  {/* yellow circle in between */}
                  <circle
                    cx="100"
                    cy="70"
                    r="20"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="74"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    circle
                  </text>
                  {/* arrows from A and B pointing toward circle — defining the space */}
                  <line
                    x1="58"
                    y1="70"
                    x2="78"
                    y2="70"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                    markerEnd="url(#bw-arr)"
                  />
                  <line
                    x1="142"
                    y1="70"
                    x2="122"
                    y2="70"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                    markerEnd="url(#bw-arr)"
                  />
                  {/* space label */}
                  <text
                    x="100"
                    y="106"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    space defined by both A and B
                  </text>
                  {/* distance ticks */}
                  <line
                    x1="58"
                    y1="90"
                    x2="78"
                    y2="90"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="58"
                    y1="86"
                    x2="58"
                    y2="94"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="78"
                    y1="86"
                    x2="78"
                    y2="94"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="68"
                    y="100"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d
                  </text>
                  <line
                    x1="122"
                    y1="90"
                    x2="142"
                    y2="90"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="122"
                    y1="86"
                    x2="122"
                    y2="94"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="142"
                    y1="86"
                    x2="142"
                    y2="94"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="132"
                    y="100"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d
                  </text>
                  <text
                    x="100"
                    y="116"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    equal distance (typical)
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-sm text-slate">
                  In the space separating exactly two things — the position is
                  defined by both.
                </p>
                <p className="text-xs text-slate italic">
                  "The park is <strong>between</strong> the school and the
                  library."
                </p>
              </div>

              {/* ── AMONG ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">among</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  {/* group boundary */}
                  <ellipse
                    cx="100"
                    cy="78"
                    rx="86"
                    ry="62"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    strokeDasharray="4,3"
                  />
                  <text
                    x="100"
                    y="16"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    group (3 or more)
                  </text>
                  <line
                    x1="100"
                    y1="19"
                    x2="100"
                    y2="24"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  {/* surrounding boxes */}
                  <rect
                    x="14"
                    y="22"
                    width="36"
                    height="28"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                  />
                  <text
                    x="32"
                    y="40"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  <rect
                    x="150"
                    y="22"
                    width="36"
                    height="28"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                  />
                  <text
                    x="168"
                    y="40"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  <rect
                    x="14"
                    y="96"
                    width="36"
                    height="28"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                  />
                  <text
                    x="32"
                    y="114"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  <rect
                    x="150"
                    y="96"
                    width="36"
                    height="28"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                  />
                  <text
                    x="168"
                    y="114"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  <rect
                    x="82"
                    y="16"
                    width="36"
                    height="24"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                  />
                  <text
                    x="100"
                    y="32"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  {/* yellow circle in center = the subject */}
                  <circle
                    cx="100"
                    cy="84"
                    r="22"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="82"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    subject
                  </text>
                  <text
                    x="100"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    surrounded
                  </text>
                  {/* note */}
                  <text
                    x="100"
                    y="152"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    use "among" for groups of 3+
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Surrounded by a group of three or more — not just two things.
                </p>
                <p className="text-xs text-slate italic">
                  "She felt comfortable <strong>among</strong> friends."
                </p>
              </div>

              {/* ── IN FRONT OF ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">in front of</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="if-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* 3-D box illusion: back face */}
                  <rect
                    x="46"
                    y="18"
                    width="80"
                    height="64"
                    rx="3"
                    fill="#c7d2fe"
                    stroke="#818cf8"
                    strokeWidth="1"
                  />
                  {/* depth lines */}
                  <line
                    x1="46"
                    y1="18"
                    x2="28"
                    y2="36"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="126"
                    y1="18"
                    x2="108"
                    y2="36"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="46"
                    y1="82"
                    x2="28"
                    y2="100"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="126"
                    y1="82"
                    x2="108"
                    y2="100"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  {/* top face */}
                  <polygon
                    points="28,36 108,36 126,18 46,18"
                    fill="#ddd6fe"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  {/* front face */}
                  <rect
                    x="28"
                    y="36"
                    width="80"
                    height="64"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="68"
                    y="62"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  {/* "front" facing arrow */}
                  <line
                    x1="68"
                    y1="100"
                    x2="68"
                    y2="118"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    markerEnd="url(#if-arr)"
                  />
                  <text
                    x="75"
                    y="112"
                    textAnchor="start"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    front face
                  </text>
                  {/* yellow circle — in front */}
                  <circle
                    cx="68"
                    cy="136"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="68"
                    y="140"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    circle
                  </text>
                  {/* "facing" label */}
                  <text
                    x="140"
                    y="138"
                    textAnchor="start"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    faces front
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="154"
                    x2="200"
                    y2="154"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-sm text-slate">
                  Positioned facing the front side of something — the side that
                  "faces" you.
                </p>
                <p className="text-xs text-slate italic">
                  "He stood <strong>in front of</strong> the door."
                </p>
              </div>

              {/* ── BEHIND ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">behind</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="bh-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* 3-D box: back face */}
                  <rect
                    x="46"
                    y="36"
                    width="80"
                    height="64"
                    rx="3"
                    fill="#c7d2fe"
                    stroke="#818cf8"
                    strokeWidth="1"
                  />
                  {/* depth lines */}
                  <line
                    x1="46"
                    y1="36"
                    x2="28"
                    y2="54"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="126"
                    y1="36"
                    x2="108"
                    y2="54"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="46"
                    y1="100"
                    x2="28"
                    y2="118"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="126"
                    y1="100"
                    x2="108"
                    y2="118"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  {/* top face */}
                  <polygon
                    points="28,54 108,54 126,36 46,36"
                    fill="#ddd6fe"
                    stroke="#818cf8"
                    strokeWidth="0.8"
                  />
                  {/* front face */}
                  <rect
                    x="28"
                    y="54"
                    width="80"
                    height="64"
                    rx="3"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="68"
                    y="90"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    box
                  </text>
                  {/* front-facing arrow pointing toward viewer */}
                  <line
                    x1="68"
                    y1="118"
                    x2="68"
                    y2="130"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    markerEnd="url(#bh-arr)"
                  />
                  <text
                    x="75"
                    y="126"
                    textAnchor="start"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    front → viewer
                  </text>
                  {/* yellow circle behind (on back face) */}
                  <circle
                    cx="86"
                    cy="22"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="86"
                    y="26"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    circle
                  </text>
                  {/* back label */}
                  <line
                    x1="86"
                    y1="36"
                    x2="86"
                    y2="34"
                    stroke="#d97706"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="130"
                    y="22"
                    textAnchor="start"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    back
                  </text>
                  <line
                    x1="102"
                    y1="22"
                    x2="128"
                    y2="22"
                    stroke="#d97706"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  {/* viewer label at bottom */}
                  <text
                    x="68"
                    y="148"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    viewer (front)
                  </text>
                  <line
                    x1="0"
                    y1="142"
                    x2="200"
                    y2="142"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-sm text-slate">
                  At the back of something — the opposite side from the front.
                </p>
                <p className="text-xs text-slate italic">
                  "The garden is <strong>behind</strong> the house."
                </p>
              </div>

              {/* ── INSIDE / IN ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">inside / in</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="in-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* outer container box */}
                  <rect
                    x="14"
                    y="18"
                    width="172"
                    height="120"
                    rx="8"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.8"
                  />
                  <text
                    x="100"
                    y="30"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    container / box
                  </text>
                  {/* boundary label */}
                  <text
                    x="14"
                    y="14"
                    textAnchor="start"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    boundary
                  </text>
                  <line
                    x1="42"
                    y1="14"
                    x2="70"
                    y2="18"
                    stroke="#6366f1"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  {/* yellow circle inside */}
                  <circle
                    cx="100"
                    cy="88"
                    r="28"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="84"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    object
                  </text>
                  <text
                    x="100"
                    y="96"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    enclosed
                  </text>
                  {/* arrows pointing inward from edges */}
                  <line
                    x1="24"
                    y1="88"
                    x2="68"
                    y2="88"
                    stroke="#6366f1"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="176"
                    y1="88"
                    x2="132"
                    y2="88"
                    stroke="#6366f1"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                  />
                  <text
                    x="100"
                    y="148"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    fully enclosed within boundary
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Contained within the walls or limits of something — enclosed.
                </p>
                <p className="text-xs text-slate italic">
                  "The key is <strong>in</strong> the drawer." · "She is{" "}
                  <strong>inside</strong> the house."
                </p>
              </div>

              {/* ── OUTSIDE ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">outside</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="os-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* container box */}
                  <rect
                    x="54"
                    y="28"
                    width="112"
                    height="90"
                    rx="8"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.8"
                  />
                  <text
                    x="110"
                    y="78"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    container
                  </text>
                  {/* boundary label */}
                  <line
                    x1="54"
                    y1="28"
                    x2="54"
                    y2="118"
                    stroke="#6366f1"
                    strokeWidth="1.8"
                  />
                  <text
                    x="50"
                    y="24"
                    textAnchor="end"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    boundary
                  </text>
                  {/* yellow circle outside, left */}
                  <circle
                    cx="26"
                    cy="72"
                    r="18"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="26"
                    y="70"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    circle
                  </text>
                  <text
                    x="26"
                    y="80"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    outside
                  </text>
                  {/* arrow showing it cannot enter */}
                  <line
                    x1="44"
                    y1="72"
                    x2="52"
                    y2="72"
                    stroke="#d97706"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="52"
                    y1="66"
                    x2="52"
                    y2="78"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="28"
                    y="120"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    beyond boundary
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-sm text-slate">
                  Beyond the boundary — not inside, not touching the interior.
                </p>
                <p className="text-xs text-slate italic">
                  "Wait <strong>outside</strong> the room." · "It's cold{" "}
                  <strong>outside</strong>."
                </p>
              </div>

              {/* ── ON ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">on</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="on-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* blue box = shelf */}
                  <rect
                    x="14"
                    y="86"
                    width="172"
                    height="28"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="104"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    shelf / surface
                  </text>
                  {/* yellow circle resting ON the shelf */}
                  <circle
                    cx="100"
                    cy="68"
                    r="18"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="72"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    object
                  </text>
                  {/* contact point tick */}
                  <line
                    x1="90"
                    y1="86"
                    x2="110"
                    y2="86"
                    stroke="#d97706"
                    strokeWidth="2"
                  />
                  <text
                    x="130"
                    y="84"
                    textAnchor="start"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    contact
                  </text>
                  {/* gravity arrow */}
                  <line
                    x1="160"
                    y1="42"
                    x2="160"
                    y2="82"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#on-arr)"
                  />
                  <text
                    x="163"
                    y="66"
                    textAnchor="start"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    gravity
                  </text>
                  {/* support arrow (surface pushing up) */}
                  <line
                    x1="140"
                    y1="84"
                    x2="140"
                    y2="52"
                    stroke="#6366f1"
                    strokeWidth="1.2"
                    markerEnd="url(#on-arr)"
                  />
                  <text
                    x="115"
                    y="66"
                    textAnchor="end"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    support
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    touching + supported by surface
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Touching and supported by a surface — contact is required.
                </p>
                <p className="text-xs text-slate italic">
                  "The book is <strong>on</strong> the shelf." · "Sit{" "}
                  <strong>on</strong> the chair."
                </p>
              </div>

              {/* ── INTO ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">into</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="it-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* container box (destination) */}
                  <rect
                    x="84"
                    y="20"
                    width="102"
                    height="110"
                    rx="8"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.8"
                  />
                  <text
                    x="135"
                    y="80"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    room
                  </text>
                  {/* entry point on left wall */}
                  <rect
                    x="78"
                    y="58"
                    width="12"
                    height="32"
                    rx="2"
                    fill="white"
                    stroke="#6366f1"
                    strokeWidth="1"
                  />
                  <text
                    x="84"
                    y="52"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    door
                  </text>
                  {/* movement path: outside → entry → inside */}
                  <line
                    x1="14"
                    y1="74"
                    x2="75"
                    y2="74"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#it-arr)"
                  />
                  {/* position 1: outside */}
                  <circle
                    cx="14"
                    cy="74"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <text
                    x="14"
                    y="78"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    start
                  </text>
                  {/* position 2: entering (at door) */}
                  <circle
                    cx="84"
                    cy="74"
                    r="8"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.75"
                  />
                  {/* position 3: inside */}
                  <circle
                    cx="130"
                    cy="74"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="130"
                    y="78"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    inside
                  </text>
                  {/* labels: direction + result */}
                  <text
                    x="44"
                    y="64"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    direction
                  </text>
                  <text
                    x="130"
                    y="106"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    result: inside
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="140"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    movement + entry (direction verb)
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Movement toward <em>and entering</em> something — direction
                  plus result.
                </p>
                <p className="text-xs text-slate italic">
                  "She walked <strong>into</strong> the room." · "Pour milk{" "}
                  <strong>into</strong> the glass."
                </p>
              </div>

              {/* ── ONTO ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">onto</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="oto-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* stage / surface */}
                  <rect
                    x="50"
                    y="100"
                    width="140"
                    height="30"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="120"
                    y="119"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    stage / surface
                  </text>
                  {/* trajectory arc: from left at ground level up and landing on surface */}
                  <path
                    d="M16 110 Q28 40 90 98"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1.8"
                    strokeDasharray="4,2"
                    markerEnd="url(#oto-arr)"
                  />
                  {/* start position: yellow circle */}
                  <circle
                    cx="16"
                    cy="110"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <text
                    x="16"
                    y="128"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    start
                  </text>
                  {/* end position: on surface */}
                  <circle
                    cx="102"
                    cy="90"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="102"
                    y="94"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    lands
                  </text>
                  {/* landing contact marker */}
                  <line
                    x1="92"
                    y1="100"
                    x2="114"
                    y2="100"
                    stroke="#d97706"
                    strokeWidth="2"
                  />
                  <text
                    x="140"
                    y="96"
                    textAnchor="start"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    contact
                  </text>
                  {/* arc label */}
                  <text
                    x="30"
                    y="62"
                    textAnchor="start"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    trajectory
                  </text>
                  {/* result label */}
                  <text
                    x="102"
                    y="152"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    result: resting on surface
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Movement to <em>and landing on</em> a surface — direction plus
                  contact.
                </p>
                <p className="text-xs text-slate italic">
                  "He jumped <strong>onto</strong> the stage." · "The cat
                  climbed <strong>onto</strong> the roof."
                </p>
              </div>

              {/* ── TOWARD / TOWARDS ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">
                  toward / towards
                </h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="tw-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* destination box */}
                  <rect
                    x="140"
                    y="46"
                    width="52"
                    height="52"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="166"
                    y="76"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    dest.
                  </text>
                  {/* yellow circle (subject) */}
                  <circle
                    cx="22"
                    cy="72"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="22"
                    y="76"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    ○
                  </text>
                  {/* movement arrow — stops before reaching destination */}
                  <line
                    x1="36"
                    y1="72"
                    x2="132"
                    y2="72"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#tw-arr)"
                  />
                  {/* distance markers along the path */}
                  <line
                    x1="60"
                    y1="68"
                    x2="60"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="90"
                    y1="68"
                    x2="90"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="120"
                    y1="68"
                    x2="120"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="44"
                    y="86"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    far
                  </text>
                  <text
                    x="90"
                    y="86"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    closer
                  </text>
                  <text
                    x="128"
                    y="86"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    near
                  </text>
                  {/* "may not arrive" label */}
                  <text
                    x="100"
                    y="108"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    may not actually arrive
                  </text>
                  <line
                    x1="134"
                    y1="72"
                    x2="138"
                    y2="72"
                    stroke="#d97706"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    direction only — arrival not guaranteed
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Moving in the direction of something — arrival is not
                  guaranteed.
                </p>
                <p className="text-xs text-slate italic">
                  "She walked <strong>toward</strong> the exit." · "He leaned{" "}
                  <strong>towards</strong> her."
                </p>
              </div>

              {/* ── AWAY FROM ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">away from</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="af-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* origin box */}
                  <rect
                    x="14"
                    y="44"
                    width="52"
                    height="52"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="40"
                    y="74"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    origin
                  </text>
                  {/* movement arrow going right (away) */}
                  <line
                    x1="68"
                    y1="70"
                    x2="176"
                    y2="70"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#af-arr)"
                  />
                  {/* yellow circle at the end = subject moving away */}
                  <circle
                    cx="184"
                    cy="70"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="184"
                    y="74"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    ○
                  </text>
                  {/* increasing distance markers */}
                  <line
                    x1="90"
                    y1="64"
                    x2="90"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="120"
                    y1="64"
                    x2="120"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="152"
                    y1="64"
                    x2="152"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="78"
                    y="88"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d1
                  </text>
                  <text
                    x="108"
                    y="88"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d2
                  </text>
                  <text
                    x="140"
                    y="88"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d3
                  </text>
                  <text
                    x="78"
                    y="98"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    ↑
                  </text>
                  <text
                    x="108"
                    y="98"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    ↑
                  </text>
                  <text
                    x="140"
                    y="98"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    ↑
                  </text>
                  <text
                    x="110"
                    y="110"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    increasing distance
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    distance grows as you move
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Moving in a direction that increases distance from the origin.
                </p>
                <p className="text-xs text-slate italic">
                  "Move <strong>away from</strong> the fire." · "She looked{" "}
                  <strong>away from</strong> the screen."
                </p>
              </div>

              {/* ── UP ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">up</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="up-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* vertical axis line */}
                  <line
                    x1="100"
                    y1="136"
                    x2="100"
                    y2="8"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  {/* ground baseline */}
                  <line
                    x1="20"
                    y1="136"
                    x2="180"
                    y2="136"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="148"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    ground / reference point
                  </text>
                  {/* gravity arrow (pointing DOWN, opposite) */}
                  <line
                    x1="60"
                    y1="50"
                    x2="60"
                    y2="130"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#up-arr)"
                  />
                  <text
                    x="42"
                    y="90"
                    textAnchor="end"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    gravity
                  </text>
                  {/* movement arrow (UP) */}
                  <line
                    x1="140"
                    y1="130"
                    x2="140"
                    y2="22"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#up-arr)"
                  />
                  <text
                    x="158"
                    y="76"
                    textAnchor="start"
                    fontSize="9"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    UP
                  </text>
                  {/* circle moving up — three ghost positions */}
                  <circle
                    cx="100"
                    cy="116"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <circle
                    cx="100"
                    cy="80"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <circle
                    cx="100"
                    cy="38"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  {/* height markers */}
                  <line
                    x1="75"
                    y1="116"
                    x2="88"
                    y2="116"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="75"
                    y1="80"
                    x2="88"
                    y2="80"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="75"
                    y1="38"
                    x2="88"
                    y2="38"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="72"
                    y="120"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h1
                  </text>
                  <text
                    x="72"
                    y="84"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h2
                  </text>
                  <text
                    x="72"
                    y="42"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h3
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  In or toward a higher position — opposite to the direction of
                  gravity.
                </p>
                <p className="text-xs text-slate italic">
                  "She looked <strong>up</strong> at the stars." · "Prices went{" "}
                  <strong>up</strong>."
                </p>
              </div>

              {/* ── DOWN ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">down</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="dn-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* vertical axis line */}
                  <line
                    x1="100"
                    y1="136"
                    x2="100"
                    y2="8"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  {/* ground baseline */}
                  <line
                    x1="20"
                    y1="136"
                    x2="180"
                    y2="136"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="148"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    ground / reference point
                  </text>
                  {/* gravity arrow (pointing DOWN — same direction) */}
                  <line
                    x1="60"
                    y1="22"
                    x2="60"
                    y2="128"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    markerEnd="url(#dn-arr)"
                  />
                  <text
                    x="44"
                    y="78"
                    textAnchor="end"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    gravity
                  </text>
                  {/* movement arrow (DOWN) */}
                  <line
                    x1="140"
                    y1="22"
                    x2="140"
                    y2="128"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#dn-arr)"
                  />
                  <text
                    x="158"
                    y="78"
                    textAnchor="start"
                    fontSize="9"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    DOWN
                  </text>
                  {/* alignment note */}
                  <text
                    x="100"
                    y="14"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    same direction as gravity
                  </text>
                  {/* circle moving down — ghost positions */}
                  <circle
                    cx="100"
                    cy="38"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <circle
                    cx="100"
                    cy="80"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <circle
                    cx="100"
                    cy="118"
                    r="12"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  {/* height markers */}
                  <line
                    x1="75"
                    y1="38"
                    x2="88"
                    y2="38"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="75"
                    y1="80"
                    x2="88"
                    y2="80"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="75"
                    y1="118"
                    x2="88"
                    y2="118"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="72"
                    y="42"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h3
                  </text>
                  <text
                    x="72"
                    y="84"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h2
                  </text>
                  <text
                    x="72"
                    y="122"
                    textAnchor="end"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    h1
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  In or toward a lower position — the same direction as gravity.
                </p>
                <p className="text-xs text-slate italic">
                  "The ball rolled <strong>down</strong> the hill." · "Prices
                  went <strong>down</strong>."
                </p>
              </div>

              {/* ── THROUGH ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">through</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="th-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                    <clipPath id="th-clip">
                      <rect x="62" y="20" width="76" height="120" />
                    </clipPath>
                  </defs>
                  {/* tunnel walls (outer) */}
                  <rect
                    x="62"
                    y="20"
                    width="76"
                    height="120"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  {/* tunnel opening (inner cutout) */}
                  <rect
                    x="82"
                    y="20"
                    width="36"
                    height="120"
                    rx="0"
                    fill="white"
                  />
                  {/* entry label */}
                  <text
                    x="100"
                    y="16"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    entry
                  </text>
                  <line
                    x1="100"
                    y1="18"
                    x2="100"
                    y2="22"
                    stroke="#4338ca"
                    strokeWidth="0.8"
                  />
                  {/* exit label */}
                  <text
                    x="100"
                    y="153"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    exit
                  </text>
                  <line
                    x1="100"
                    y1="140"
                    x2="100"
                    y2="148"
                    stroke="#4338ca"
                    strokeWidth="0.8"
                  />
                  {/* tunnel label */}
                  <text
                    x="52"
                    y="82"
                    textAnchor="end"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    wall
                  </text>
                  <text
                    x="148"
                    y="82"
                    textAnchor="start"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    wall
                  </text>
                  {/* movement arrow through the tunnel */}
                  <line
                    x1="100"
                    y1="28"
                    x2="100"
                    y2="136"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#th-arr)"
                  />
                  {/* circle positions: before, inside, after */}
                  <circle
                    cx="100"
                    cy="38"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <circle
                    cx="100"
                    cy="80"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="100"
                    cy="126"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  {/* in/out labels */}
                  <text
                    x="118"
                    y="38"
                    textAnchor="start"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    enters
                  </text>
                  <text
                    x="118"
                    y="82"
                    textAnchor="start"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    inside
                  </text>
                  <text
                    x="118"
                    y="126"
                    textAnchor="start"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    exits
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Entering at one side and exiting the other — a complete
                  passage.
                </p>
                <p className="text-xs text-slate italic">
                  "The train went <strong>through</strong> the tunnel." · "Light
                  shines <strong>through</strong> the window."
                </p>
              </div>

              {/* ── ACROSS ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">across</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="ac-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* river (blue band) with flow direction */}
                  <rect
                    x="48"
                    y="20"
                    width="104"
                    height="90"
                    rx="4"
                    fill="#bfdbfe"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  {/* river current direction (multiple small arrows pointing down = river flows south) */}
                  <line
                    x1="80"
                    y1="30"
                    x2="80"
                    y2="80"
                    stroke="#93c5fd"
                    strokeWidth="1"
                    markerEnd="url(#ac-arr)"
                  />
                  <line
                    x1="100"
                    y1="35"
                    x2="100"
                    y2="85"
                    stroke="#93c5fd"
                    strokeWidth="1"
                    markerEnd="url(#ac-arr)"
                  />
                  <line
                    x1="120"
                    y1="30"
                    x2="120"
                    y2="80"
                    stroke="#93c5fd"
                    strokeWidth="1"
                    markerEnd="url(#ac-arr)"
                  />
                  <text
                    x="100"
                    y="102"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#1d4ed8"
                    fontFamily="sans-serif"
                  >
                    river current ↓
                  </text>
                  {/* left bank label */}
                  <text
                    x="24"
                    y="68"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    bank A
                  </text>
                  <line
                    x1="36"
                    y1="65"
                    x2="46"
                    y2="65"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  {/* right bank label */}
                  <text
                    x="176"
                    y="68"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    bank B
                  </text>
                  <line
                    x1="154"
                    y1="65"
                    x2="164"
                    y2="65"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  {/* crossing arrow (perpendicular to river flow) */}
                  <line
                    x1="20"
                    y1="54"
                    x2="174"
                    y2="54"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#ac-arr)"
                  />
                  {/* start circle */}
                  <circle
                    cx="14"
                    cy="54"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  {/* width indicator */}
                  <line
                    x1="48"
                    y1="118"
                    x2="152"
                    y2="118"
                    stroke="#3b82f6"
                    strokeWidth="1"
                  />
                  <line
                    x1="48"
                    y1="114"
                    x2="48"
                    y2="122"
                    stroke="#3b82f6"
                    strokeWidth="1"
                  />
                  <line
                    x1="152"
                    y1="114"
                    x2="152"
                    y2="122"
                    stroke="#3b82f6"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="132"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#1d4ed8"
                    fontFamily="sans-serif"
                  >
                    full width of river
                  </text>
                  <text
                    x="100"
                    y="144"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    crossing direction ↔
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  From one side to the other — perpendicular to the length of
                  the surface. Note the river has its own flow direction.
                </p>
                <p className="text-xs text-slate italic">
                  "She swam <strong>across</strong> the river." · "He walked{" "}
                  <strong>across</strong> the street."
                </p>
              </div>

              {/* ── ALONG ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">along</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="al-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* road / path band */}
                  <rect
                    x="10"
                    y="64"
                    width="180"
                    height="32"
                    rx="4"
                    fill="#bfdbfe"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  {/* centre line (road markings) */}
                  <line
                    x1="10"
                    y1="80"
                    x2="190"
                    y2="80"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="10,8"
                  />
                  {/* road direction arrow */}
                  <line
                    x1="30"
                    y1="60"
                    x2="170"
                    y2="60"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    markerEnd="url(#al-arr)"
                  />
                  <text
                    x="100"
                    y="56"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#1d4ed8"
                    fontFamily="sans-serif"
                  >
                    road direction
                  </text>
                  {/* path label */}
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#1d4ed8"
                    fontFamily="sans-serif"
                  >
                    road / river / path
                  </text>
                  {/* movement arrow (same direction as road) */}
                  <line
                    x1="14"
                    y1="44"
                    x2="180"
                    y2="44"
                    stroke="#d97706"
                    strokeWidth="2"
                    markerEnd="url(#al-arr)"
                  />
                  <text
                    x="100"
                    y="40"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    movement (same direction)
                  </text>
                  {/* circle moving along */}
                  <circle
                    cx="50"
                    cy="44"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                  <circle
                    cx="100"
                    cy="44"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <circle
                    cx="160"
                    cy="44"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  {/* parallel indicator */}
                  <text
                    x="100"
                    y="128"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    parallel to the path's length
                  </text>
                  <text
                    x="100"
                    y="140"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    compare: across = perpendicular
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Moving parallel to the length of something — in the same
                  direction the path runs.
                </p>
                <p className="text-xs text-slate italic">
                  "We walked <strong>along</strong> the river." · "Drive{" "}
                  <strong>along</strong> the coast."
                </p>
              </div>

              {/* ── AROUND ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">around</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="ar-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* centre object = blue box (fountain) */}
                  <rect
                    x="72"
                    y="52"
                    width="56"
                    height="56"
                    rx="6"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="80"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    fountain
                  </text>
                  <text
                    x="100"
                    y="92"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    (centre)
                  </text>
                  {/* circular orbit path (dashed) */}
                  <circle
                    cx="100"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1.2"
                    strokeDasharray="5,3"
                  />
                  {/* rotation direction arrow — arc segment at top */}
                  <path
                    d="M 72 34 A 50 50 0 0 1 128 34"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1.8"
                    markerEnd="url(#ar-arr)"
                  />
                  <text
                    x="100"
                    y="26"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    clockwise
                  </text>
                  {/* yellow circle = subject on orbit */}
                  <circle
                    cx="100"
                    cy="28"
                    r="10"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="100"
                    y="32"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    ○
                  </text>
                  {/* 90° marker */}
                  <line
                    x1="100"
                    y1="80"
                    x2="150"
                    y2="80"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="100"
                    y1="80"
                    x2="100"
                    y2="28"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="152"
                    y="76"
                    textAnchor="start"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    radius
                  </text>
                  {/* 360 label */}
                  <text
                    x="100"
                    y="148"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    360° encirclement of centre object
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Moving in a circular path encircling something — can be static
                  (surrounding) or dynamic (orbiting).
                </p>
                <p className="text-xs text-slate italic">
                  "The kids ran <strong>around</strong> the fountain." ·
                  "Planets orbit <strong>around</strong> the sun."
                </p>
              </div>

              {/* ── OPPOSITE ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">opposite</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="op-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* box A — with front face arrow pointing right */}
                  <rect
                    x="8"
                    y="44"
                    width="64"
                    height="52"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="40"
                    y="68"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    A
                  </text>
                  <text
                    x="40"
                    y="84"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    front →
                  </text>
                  {/* box B — with front face arrow pointing left */}
                  <rect
                    x="128"
                    y="44"
                    width="64"
                    height="52"
                    rx="4"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="160"
                    y="68"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    B
                  </text>
                  <text
                    x="160"
                    y="84"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    ← front
                  </text>
                  {/* facing arrows between them */}
                  <line
                    x1="74"
                    y1="70"
                    x2="94"
                    y2="70"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    markerEnd="url(#op-arr)"
                  />
                  <line
                    x1="126"
                    y1="70"
                    x2="106"
                    y2="70"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    markerEnd="url(#op-arr)"
                  />
                  {/* "facing each other" label */}
                  <text
                    x="100"
                    y="62"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    facing
                  </text>
                  {/* axis line */}
                  <line
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="140"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="3,2"
                  />
                  <text
                    x="100"
                    y="16"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    axis
                  </text>
                  {/* distance line */}
                  <line
                    x1="8"
                    y1="110"
                    x2="192"
                    y2="110"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="8"
                    y1="106"
                    x2="8"
                    y2="114"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="192"
                    y1="106"
                    x2="192"
                    y2="114"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <text
                    x="100"
                    y="122"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    fronts face each other across a gap
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  Facing each other across a space — their front sides point
                  toward each other.
                </p>
                <p className="text-xs text-slate italic">
                  "The bank is <strong>opposite</strong> the post office."
                </p>
              </div>

              {/* ── NEAR / CLOSE TO ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">
                  near / close to
                </h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="nr-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* reference box */}
                  <rect
                    x="110"
                    y="40"
                    width="76"
                    height="60"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="148"
                    y="74"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    reference
                  </text>
                  {/* "near" zone (light ring) */}
                  <circle
                    cx="148"
                    cy="70"
                    r="52"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1"
                    strokeDasharray="4,3"
                    opacity="0.5"
                  />
                  <text
                    x="90"
                    y="20"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    "near" zone
                  </text>
                  <line
                    x1="106"
                    y1="22"
                    x2="112"
                    y2="28"
                    stroke="#d97706"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                  />
                  {/* "far" zone (larger ring) */}
                  <circle
                    cx="148"
                    cy="70"
                    r="72"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                    strokeDasharray="2,4"
                    opacity="0.3"
                  />
                  <text
                    x="10"
                    y="50"
                    textAnchor="start"
                    fontSize="8"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    far
                  </text>
                  {/* yellow circle in near zone */}
                  <circle
                    cx="66"
                    cy="70"
                    r="18"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="66"
                    y="74"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    near
                  </text>
                  {/* distance line */}
                  <line
                    x1="84"
                    y1="70"
                    x2="108"
                    y2="70"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <line
                    x1="84"
                    y1="66"
                    x2="84"
                    y2="74"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <line
                    x1="108"
                    y1="66"
                    x2="108"
                    y2="74"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x="96"
                    y="84"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    small gap
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    short distance — no exact rule
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  A short distance from something — within a subjectively
                  "close" zone.
                </p>
                <p className="text-xs text-slate italic">
                  "The hotel is <strong>near</strong> the airport." · "Sit{" "}
                  <strong>close to</strong> the door."
                </p>
              </div>

              {/* ── FAR FROM ── */}
              <div className="bg-white rounded-xl border border-mist p-5 flex flex-col gap-3">
                <h3 className="font-display text-lg text-ink">far from</h3>
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-36"
                >
                  <defs>
                    <marker
                      id="fr-arr"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="M2 1L8 5L2 9"
                        fill="none"
                        stroke="context-stroke"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </marker>
                  </defs>
                  {/* reference box (right) */}
                  <rect
                    x="142"
                    y="50"
                    width="50"
                    height="44"
                    rx="4"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />
                  <text
                    x="167"
                    y="76"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#4338ca"
                    fontFamily="sans-serif"
                  >
                    ref.
                  </text>
                  {/* yellow circle (far left) */}
                  <circle
                    cx="18"
                    cy="72"
                    r="14"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="18"
                    y="76"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#92400e"
                    fontFamily="sans-serif"
                  >
                    ○
                  </text>
                  {/* long distance line with tick marks */}
                  <line
                    x1="32"
                    y1="72"
                    x2="140"
                    y2="72"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <line
                    x1="32"
                    y1="68"
                    x2="32"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <line
                    x1="62"
                    y1="68"
                    x2="62"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="92"
                    y1="68"
                    x2="92"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="122"
                    y1="68"
                    x2="122"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="140"
                    y1="68"
                    x2="140"
                    y2="76"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x="18"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    0
                  </text>
                  <text
                    x="62"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d1
                  </text>
                  <text
                    x="92"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d2
                  </text>
                  <text
                    x="122"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d3
                  </text>
                  <text
                    x="140"
                    y="92"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="sans-serif"
                  >
                    d4
                  </text>
                  {/* large distance label */}
                  <text
                    x="86"
                    y="108"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#64748b"
                    fontFamily="sans-serif"
                  >
                    large distance
                  </text>
                  {/* contrast: near vs far */}
                  <text
                    x="100"
                    y="124"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6366f1"
                    fontFamily="sans-serif"
                  >
                    opposite of near / close to
                  </text>
                  {/* ground */}
                  <line
                    x1="0"
                    y1="148"
                    x2="200"
                    y2="148"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="140"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#d97706"
                    fontFamily="sans-serif"
                  >
                    subjective — depends on context
                  </text>
                </svg>
                <p className="text-sm text-slate">
                  A long distance from something — the opposite of "near".
                </p>
                <p className="text-xs text-slate italic">
                  "The village is <strong>far from</strong> the city." · "He is{" "}
                  <strong>far from</strong> home."
                </p>
              </div>
            </div>
          </div>
        </main>
        <AdsenseAd />
      </div>

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
