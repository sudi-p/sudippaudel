// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";
import { UPGRADE_BANK } from "./data";

/* ─────────────────────────────────────────────────────────────────────────
   The Reference panel is a large block of static instructional HTML. It has
   no interactivity, so it is returned from render via dangerouslySetInnerHTML
   (one data-driven part — the Vocabulary Upgrade Bank — is interpolated from
   UPGRADE_BANK). The three quizzes below are real React-state components; the
   original CSS class names are reused for visual fidelity.
   ───────────────────────────────────────────────────────────────────────── */

const ADJ_STYLE = `      .adj-tab-bar {
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
`;

const UPGRADE_HTML = UPGRADE_BANK.map(
  (w) =>
    `<div class="adj-upgrade-pair"><span class="adj-upgrade-basic">${w.basic}</span><span class="adj-upgrade-arrow">→</span><span class="adj-upgrade-better">${w.upgrades.join(
      " / ",
    )}</span></div>`,
).join("");

const REF_HTML = `
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
` + UPGRADE_HTML + `      </div>
      </div><!-- /adj-ref -->
`;

function ReferencePanel() {
  return <div dangerouslySetInnerHTML={{ __html: REF_HTML }} />;
}

/* ═══════════════════════════ FLIP-CARD QUIZ ═══════════════════════════ */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function FlashcardsPanel() {
  const [deck, setDeck] = useState(() => shuffle(UPGRADE_BANK));
  const [idx, setIdx] = useState(0);
  const [known, setKnown] = useState(0);
  const [again, setAgain] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const total = deck.length;
  const done = idx >= total;

  const flip = () => {
    if (!flipped) setFlipped(true);
  };
  const answer = (gotIt) => {
    if (gotIt) setKnown((k) => k + 1);
    else {
      setAgain((a) => a + 1);
      setDeck((d) => [...d, d[idx]]);
    }
    setIdx((i) => i + 1);
    setFlipped(false);
  };
  const restart = () => {
    setDeck(shuffle(UPGRADE_BANK));
    setIdx(0);
    setKnown(0);
    setAgain(0);
    setFlipped(false);
  };
  const restartWrong = () => {
    const wrong = deck.slice(UPGRADE_BANK.length);
    setDeck(shuffle(wrong.length ? wrong : UPGRADE_BANK));
    setIdx(0);
    setKnown(0);
    setAgain(0);
    setFlipped(false);
  };

  if (done) {
    const pct = Math.round((known / total) * 100);
    const sub =
      pct === 100
        ? "Perfect — you know them all! 🏆"
        : pct >= 70
          ? "Great work! Review the missed ones."
          : "Keep practising — you'll get there!";
    return (
      <div className="fq-complete">
        <div className="fq-complete-icon">🎉</div>
        <div className="fq-complete-title">Round complete!</div>
        <div className="fq-complete-sub">{sub}</div>
        <div className="fq-stat-row">
          <div className="fq-stat">
            <div className="fq-stat-num">{known}</div>
            <div className="fq-stat-label">Got it</div>
          </div>
          <div className="fq-stat">
            <div className="fq-stat-num">{again}</div>
            <div className="fq-stat-label">Study again</div>
          </div>
          <div className="fq-stat">
            <div className="fq-stat-num">{pct}%</div>
            <div className="fq-stat-label">Score</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
          {again > 0 && (
            <button className="fq-btn fq-btn-primary" onClick={restartWrong}>
              ↺ Retry missed
            </button>
          )}
          <button className="fq-btn fq-btn-secondary" onClick={restart}>
            ↺ Full restart
          </button>
        </div>
      </div>
    );
  }

  const card = deck[idx];
  return (
    <>
      <div className="fq-header">
        <div className="fq-progress-wrap">
          <div className="fq-progress-label">
            Card {idx + 1} of {total}
          </div>
          <div className="fq-progress-bg">
            <div
              className="fq-progress-fill"
              style={{ width: `${Math.round((idx / total) * 100)}%` }}
            />
          </div>
        </div>
        <button className="fq-btn fq-btn-secondary" onClick={restart}>
          ↺ Restart
        </button>
      </div>

      <div className="fq-score-row">
        <div className="fq-badge fq-badge-seen">👁 Seen: {idx}</div>
        <div className="fq-badge fq-badge-known">✓ Got it: {known}</div>
        <div className="fq-badge fq-badge-again">↺ Again: {again}</div>
      </div>

      <div className="fq-scene" onClick={flip}>
        <div className={`fq-card-inner${flipped ? " fq-flipped" : ""}`}>
          <div className="fq-face fq-front">
            <div className="fq-front-hint">Basic word — upgrade it</div>
            <div className="fq-front-word">{card.basic}</div>
            <div className="fq-front-tap">tap to reveal upgrades</div>
          </div>
          <div className="fq-face fq-back">
            <div className="fq-back-label">✨ Upgraded alternatives</div>
            <div className="fq-chips">
              {card.upgrades.map((u, i) => (
                <span key={i} className="fq-chip">
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="fq-result-row" style={{ display: "flex" }}>
          <button className="fq-btn fq-btn-again" onClick={() => answer(false)}>
            ↺ Study again
          </button>
          <button className="fq-btn fq-btn-known" onClick={() => answer(true)}>
            ✓ Got it!
          </button>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════ FILL-IN-THE-BLANKS ═══════════════════════════ */

function computeMarks(upgrades, values) {
  const lower = upgrades.map((u) => u.toLowerCase());
  const used = new Set();
  let allCorrect = true;
  const marks = values.map((v) => {
    const nv = (v || "").trim().toLowerCase();
    const m = lower.findIndex((u, i) => u === nv && !used.has(i));
    if (nv && m !== -1) {
      used.add(m);
      return "correct";
    }
    if (nv) {
      allCorrect = false;
      return "wrong";
    }
    allCorrect = false;
    return "";
  });
  const correctCount = marks.filter((m) => m === "correct").length;
  return { marks, allCorrect, correctCount };
}

function freshCards() {
  return UPGRADE_BANK.map((it) => ({
    vals: it.upgrades.map(() => ""),
    marks: [],
    status: null, // null | 'correct' | 'revealed' | 'wrong'
    feedback: null, // { cls, text }
  }));
}

function FillPanel() {
  const N = UPGRADE_BANK.length;
  const [idx, setIdx] = useState(0);
  const [cards, setCards] = useState(freshCards);
  const [sc, setSc] = useState({ correct: 0, wrong: 0, revealed: 0 });

  const item = UPGRADE_BANK[idx];
  const card = cards[idx];

  const update = (i, patch) =>
    setCards((cs) => cs.map((c, j) => (j === i ? { ...c, ...patch } : c)));

  const editable = card.status !== "correct" && card.status !== "revealed";

  const onInput = (wi, v) => {
    if (!editable) return;
    update(idx, { vals: card.vals.map((x, j) => (j === wi ? v : x)) });
  };

  const check = () => {
    const values = card.vals.map((v) => v.trim());
    if (values.every((v) => v === "")) {
      update(idx, {
        feedback: { cls: "afb-fb-wrong", text: "Please enter at least one answer." },
      });
      return;
    }
    const { marks, allCorrect, correctCount } = computeMarks(item.upgrades, values);
    const firstAttempt = card.status === null;
    if (firstAttempt) {
      setSc((s) => ({
        ...s,
        correct: s.correct + (allCorrect ? 1 : 0),
        wrong: s.wrong + (allCorrect ? 0 : 1),
      }));
    }
    if (allCorrect) {
      update(idx, {
        status: "correct",
        vals: item.upgrades.slice(),
        marks: item.upgrades.map(() => "correct"),
        feedback: { cls: "afb-fb-correct", text: "✓ All correct! Well done." },
      });
    } else {
      update(idx, {
        status: "wrong",
        marks,
        feedback: {
          cls: "afb-fb-partial",
          text:
            correctCount > 0
              ? `${correctCount} of ${item.upgrades.length} correct — keep trying!`
              : "✗ None correct — try again or reveal the answer.",
        },
      });
    }
  };

  const reveal = () => {
    if (card.status === "correct") return;
    if (card.status === null) setSc((s) => ({ ...s, revealed: s.revealed + 1 }));
    update(idx, {
      status: "revealed",
      vals: item.upgrades.slice(),
      marks: item.upgrades.map(() => "revealed"),
      feedback: { cls: "afb-fb-revealed", text: "👁 Answer revealed." },
    });
  };

  const reset = () => {
    const prev = card.status;
    if (prev === "correct") setSc((s) => ({ ...s, correct: s.correct - 1 }));
    else if (prev === "revealed") setSc((s) => ({ ...s, revealed: s.revealed - 1 }));
    else if (prev === "wrong") setSc((s) => ({ ...s, wrong: s.wrong - 1 }));
    update(idx, {
      vals: item.upgrades.map(() => ""),
      marks: [],
      status: null,
      feedback: null,
    });
  };

  const nav = (dir) => {
    const next = idx + dir;
    if (next < 0 || next >= N) return;
    setIdx(next);
  };

  const cardCls =
    "afb-card" +
    (card.status === "correct"
      ? " afb-correct"
      : card.status === "revealed"
        ? " afb-revealed"
        : card.status === "wrong"
          ? " afb-wrong"
          : "");

  return (
    <>
      <div className="afb-meta">
        <span className="afb-counter">
          {idx + 1} / {N}
        </span>
        <div className="afb-progress-bg">
          <div
            className="afb-progress-fill"
            style={{ width: `${Math.round(((idx + 1) / N) * 100)}%` }}
          />
        </div>
      </div>

      <div className="afb-score-strip">
        <span className="afb-score-badge afb-score-correct">✓ Correct: {sc.correct}</span>
        <span className="afb-score-badge afb-score-wrong">✗ Wrong: {sc.wrong}</span>
        <span className="afb-score-badge afb-score-skipped">👁 Revealed: {sc.revealed}</span>
      </div>

      <div className={cardCls}>
        <div className="afb-prompt">Upgrade this basic word</div>
        <div className="afb-basic-word">
          <span className="afb-basic-chip">{item.basic}</span>
        </div>
        <div className="afb-inputs-label">
          Enter {item.upgrades.length} upgraded alternative
          {item.upgrades.length > 1 ? "s" : ""}
        </div>
        <div className="afb-inputs">
          {item.upgrades.map((_, wi) => {
            const mk = card.marks[wi];
            const cls =
              "afb-input" +
              (mk === "correct"
                ? " afb-input-correct"
                : mk === "wrong"
                  ? " afb-input-wrong"
                  : mk === "revealed"
                    ? " afb-input-revealed"
                    : "");
            return (
              <div className="afb-input-wrap" key={wi}>
                <span className="afb-input-num">{wi + 1}</span>
                <input
                  className={cls}
                  type="text"
                  placeholder={`word ${wi + 1}`}
                  autoComplete="off"
                  spellCheck={false}
                  disabled={!editable}
                  value={card.vals[wi] || ""}
                  onChange={(e) => onInput(wi, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") check();
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className={`afb-feedback ${card.feedback ? card.feedback.cls : ""}`}>
          {card.feedback ? card.feedback.text : ""}
        </div>

        <div className="afb-actions">
          <button className="afb-btn afb-btn-check" onClick={check}>
            ✓ Check Answer
          </button>
          <button className="afb-btn afb-btn-reveal" onClick={reveal}>
            👁 Reveal Answer
          </button>
          <button className="afb-btn afb-btn-reset" onClick={reset}>
            ↺ Reset
          </button>
        </div>

        <div className="afb-nav">
          <button className="afb-btn-nav" onClick={() => nav(-1)} disabled={idx === 0}>
            ← Prev
          </button>
          <button className="afb-btn-nav" onClick={() => nav(1)} disabled={idx === N - 1}>
            Next →
          </button>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════ INTENSIFIERS QUIZ ═══════════════════════════ */

const AINT_GROUPS = [
  { key: "downtoners", icon: "🔉", label: "Downtoners", sub: "weakest end", headBg: "#e0f2fe", headColor: "#0369a1", head: "🔉 Downtoners — weakest end of the scale", pointer: "12%", color: "#0369a1", scaleText: "🔉 Downtoners — weakest end", items: [{ num: "1 — weakest", answer: "barely" }, { num: "2", answer: "slightly" }, { num: "3", answer: "a little" }, { num: "4", answer: "somewhat" }] },
  { key: "midrange", icon: "🎚️", label: "Mid-range", sub: "moderately strong", headBg: "#ede9fe", headColor: "#4f46e5", head: "🎚️ Mid-range — moderately strong", pointer: "37%", color: "#4f46e5", scaleText: "🎚️ Mid-range — moderately strong", items: [{ num: "5", answer: "fairly" }, { num: "6", answer: "rather" }, { num: "7", answer: "quite" }, { num: "8", answer: "pretty" }] },
  { key: "amplifiers", icon: "🔊", label: "Amplifiers", sub: "strong", headBg: "#e0e7ff", headColor: "#3730a3", head: "🔊 Amplifiers — strong", pointer: "63%", color: "#3730a3", scaleText: "🔊 Amplifiers — strong", items: [{ num: "9", answer: "very" }, { num: "10", answer: "really" }, { num: "11", answer: "highly" }, { num: "12", answer: "extremely" }] },
  { key: "maximizers", icon: "🔝", label: "Maximizers", sub: "strongest / absolute", headBg: "#ddd6fe", headColor: "#4c1d95", head: "🔝 Maximizers — strongest / absolute", pointer: "88%", color: "#4c1d95", scaleText: "🔝 Maximizers — strongest / absolute", items: [{ num: "13", answer: "incredibly" }, { num: "14", answer: "remarkably" }, { num: "15", answer: "absolutely" }, { num: "16", answer: "utterly" }, { num: "17 — strongest", answer: "completely" }] },
];

// flat answers + per-group global index ranges
const AINT_ANSWERS = [];
const AINT_RANGES = [];
AINT_GROUPS.forEach((g) => {
  const start = AINT_ANSWERS.length;
  g.items.forEach((it) => AINT_ANSWERS.push(it.answer));
  AINT_RANGES.push({ start, indices: g.items.map((_, i) => start + i) });
});
const AINT_TOTAL = AINT_ANSWERS.length;

function IntensifiersPanel() {
  const [selected, setSelected] = useState(null);
  const [values, setValues] = useState(() => Array(AINT_TOTAL).fill(""));
  const [marks, setMarks] = useState(() => Array(AINT_TOTAL).fill(""));
  const [feedback, setFeedback] = useState(() => Array(AINT_GROUPS.length).fill(null));
  const [sc, setSc] = useState({ correct: 0, wrong: 0 });

  const disabled = (i) => marks[i] === "correct" || marks[i] === "revealed";

  const selectRange = (key) => setSelected((s) => (s === key ? null : key));

  const checkGroup = (gi) => {
    const indices = AINT_RANGES[gi].indices;
    const nm = [...marks];
    let addC = 0,
      addW = 0,
      groupCorrect = 0;
    indices.forEach((i) => {
      if (marks[i] === "correct" || marks[i] === "revealed") {
        if (marks[i] === "correct") groupCorrect++;
        return;
      }
      const typed = (values[i] || "").trim().toLowerCase();
      const ans = AINT_ANSWERS[i].toLowerCase();
      if (typed === ans) {
        if (marks[i] !== "correct") addC++;
        nm[i] = "correct";
        groupCorrect++;
      } else if (typed !== "") {
        if (marks[i] !== "wrong") addW++;
        nm[i] = "wrong";
      } else {
        nm[i] = "wrong";
      }
    });
    setMarks(nm);
    setSc((s) => ({ correct: s.correct + addC, wrong: s.wrong + addW }));
    const total = indices.length;
    let fb;
    if (groupCorrect === total) fb = { cls: "aint-fb-ok", text: `✓ All ${total} correct!` };
    else if (groupCorrect > 0)
      fb = { cls: "aint-fb-partial", text: `${groupCorrect} / ${total} correct — keep trying!` };
    else fb = { cls: "aint-fb-err", text: "✗ None correct yet." };
    setFeedback((f) => f.map((x, j) => (j === gi ? fb : x)));
  };

  const revealOne = (i) => {
    if (disabled(i)) return;
    setValues((v) => v.map((x, j) => (j === i ? AINT_ANSWERS[i] : x)));
    setMarks((m) => m.map((x, j) => (j === i ? "revealed" : x)));
  };

  const revealAll = () => {
    setValues((v) => v.map((x, i) => (disabled(i) ? x : AINT_ANSWERS[i])));
    setMarks((m) => m.map((x, i) => (disabled(i) ? x : "revealed")));
    setFeedback(AINT_GROUPS.map(() => ({ cls: "aint-fb-partial", text: "👁 Answers revealed." })));
  };

  const resetAll = () => {
    setValues(Array(AINT_TOTAL).fill(""));
    setMarks(Array(AINT_TOTAL).fill(""));
    setFeedback(Array(AINT_GROUPS.length).fill(null));
    setSc({ correct: 0, wrong: 0 });
  };

  const onInput = (i, val) => {
    if (disabled(i)) return;
    setValues((v) => v.map((x, j) => (j === i ? val : x)));
  };

  const sel = AINT_GROUPS.find((g) => g.key === selected);

  return (
    <>
      <div className="aint-header">
        <div className="aint-title">🎚️ Intensifiers — Fill in the Blanks</div>
      </div>
      <p className="aint-desc">
        Select a range below to reveal its questions. The pointer on the scale shows where that
        range sits. Type each intensifier into its position, then hit <strong>Check</strong> to
        score yourself.
      </p>

      <div className="aint-score-strip">
        <span className="aint-score-badge aint-sc-correct">✓ Correct: {sc.correct}</span>
        <span className="aint-score-badge aint-sc-wrong">✗ Wrong: {sc.wrong}</span>
        <span className="aint-score-badge aint-sc-total">Total: {AINT_TOTAL}</span>
      </div>
      <div className="aint-actions">
        <button className="aint-btn aint-btn-reveal-all" onClick={revealAll}>
          👁 Reveal All
        </button>
        <button className="aint-btn aint-btn-reset-all" onClick={resetAll}>
          ↺ Reset
        </button>
      </div>

      <div className="aint-range-selector">
        {AINT_GROUPS.map((g) => (
          <button
            key={g.key}
            className={`aint-range-btn${selected === g.key ? " aint-range-active" : ""}`}
            data-range={g.key}
            onClick={() => selectRange(g.key)}
          >
            <span className="aint-range-icon">{g.icon}</span>
            <span className="aint-range-label">{g.label}</span>
            <span className="aint-range-sub">{g.sub}</span>
          </button>
        ))}
      </div>

      <div className="aint-scale-wrap">
        <div className="aint-scale-bar">
          <div
            className="aint-scale-pointer"
            style={{
              left: sel ? sel.pointer : "12.5%",
              display: sel ? "" : "none",
              borderTopColor: sel ? sel.color : undefined,
            }}
          />
        </div>
        <div className="aint-scale-labels">
          <span>⬇ Weakest</span>
          <span>Neutral / Base adjective</span>
          <span>Strongest ⬆</span>
        </div>
        <div className="aint-scale-active-label" style={{ color: sel ? sel.color : undefined }}>
          {sel ? sel.scaleText : ""}
        </div>
      </div>

      {!sel && (
        <div className="aint-select-hint">
          <span className="aint-select-hint-icon">☝️</span>
          <span>Select any one of the four ranges above to reveal its questions</span>
        </div>
      )}

      {AINT_GROUPS.map((g, gi) => {
        if (selected !== g.key) return null;
        const indices = AINT_RANGES[gi].indices;
        const fb = feedback[gi];
        return (
          <div className="aint-group" key={g.key}>
            <div className="aint-group-head" style={{ background: g.headBg, color: g.headColor }}>
              {g.head}
            </div>
            <div className="aint-group-body">
              <div className="aint-items">
                {g.items.map((it, k) => {
                  const i = indices[k];
                  const cls =
                    "aint-input" +
                    (marks[i] === "correct"
                      ? " aint-correct"
                      : marks[i] === "wrong"
                        ? " aint-wrong"
                        : marks[i] === "revealed"
                          ? " aint-revealed"
                          : "");
                  return (
                    <div className="aint-item" key={i}>
                      <span className="aint-item-num">{it.num}</span>
                      <input
                        className={cls}
                        type="text"
                        placeholder="?"
                        autoComplete="off"
                        spellCheck={false}
                        disabled={disabled(i)}
                        value={values[i]}
                        onChange={(e) => onInput(i, e.target.value)}
                      />
                      <button
                        className="aint-reveal-btn"
                        disabled={disabled(i)}
                        onClick={() => revealOne(i)}
                      >
                        👁 reveal
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="aint-check-row">
                <button className="aint-btn aint-btn-check" onClick={() => checkGroup(gi)}>
                  ✓ Check
                </button>
                <span className={`aint-feedback ${fb ? fb.cls : ""}`}>{fb ? fb.text : ""}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ═══════════════════════════ shell ═══════════════════════════ */

const TABS = [
  { id: "adj-ref", label: "📖 Reference" },
  { id: "adj-quiz", label: "🃏 Flip Card Quiz" },
  { id: "adj-fill", label: "✏️ Fill in the Blanks" },
  { id: "adj-int", label: "🎚️ Intensifiers Quiz" },
];

export default function AdjectivesTab() {
  const [active, setActive] = useState("adj-ref");
  return (
    <>
      <style>{ADJ_STYLE}</style>
      <div className="adj-tab-bar">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`adj-tab-btn${active === t.id ? " adj-tab-active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {active === "adj-ref" && <ReferencePanel />}
      {active === "adj-quiz" && <FlashcardsPanel />}
      {active === "adj-fill" && <FillPanel />}
      {active === "adj-int" && <IntensifiersPanel />}
    </>
  );
}
