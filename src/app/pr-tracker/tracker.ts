// @ts-nocheck
/* eslint-disable */
// Renders the PR timeline tracker into the shell from page.tsx. Started from a
// client effect and torn down on unmount. Data lives in ./data.json.

import data from "./data.json";

// Milestones in the order they normally happen.
const MILESTONES = [
  ["ita_date", "ITA"],
  ["aor_date", "AOR"],
  ["bil_date", "BIL"],
  ["biometrics_date", "Bio"],
  ["medical_date", "Medical"],
  ["fd_date", "FD"],
  ["ppr_date", "PPR"],
  ["p1_date", "P1"],
  ["p2_date", "P2"],
  ["ecopr_date", "eCOPR"],
  ["pr_card_date", "PR card"],
];
const LABEL = Object.fromEntries(MILESTONES);

// Time between two milestones. `table: true` also shows it as a column per person.
const SPANS = [
  { from: "ita_date", to: "aor_date" },
  { from: "aor_date", to: "bil_date", table: true },
  { from: "aor_date", to: "medical_date" },
  { from: "bil_date", to: "fd_date", table: true },
  { from: "aor_date", to: "fd_date", table: true },
  { from: "fd_date", to: "p1_date", table: true },
  { from: "p1_date", to: "p2_date" },
  { from: "aor_date", to: "p1_date", table: true },
  { from: "aor_date", to: "ppr_date" },
  { from: "aor_date", to: "ecopr_date", table: true },
].map((s) => ({ ...s, key: `${s.from}>${s.to}`, label: `${LABEL[s.from]} → ${LABEL[s.to]}` }));

const COLUMNS = [
  { key: "username", label: "User" },
  { key: "program", label: "Program" },
  { key: "inland_outland", label: "In/Out" },
  { key: "stage", label: "Stage" },
  { key: "waiting", label: "Days since AOR", span: true },
  ...SPANS.filter((s) => s.table).map((s) => ({ key: s.key, label: s.label, span: true })),
  ...MILESTONES.map(([key, label]) => ({ key, label, date: true })),
  { key: "eligibility", label: "Eligibility" },
  { key: "background_check", label: "Background" },
  { key: "pvo_svo", label: "PVO/SVO" },
  { key: "updated_at", label: "Entry updated", date: true },
];

const DAY = 86400000;
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const fullDate = (d) => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d);
// Only exact dates count. Month-only dates like "2026-07" are shown but not used in maths.
const days = (a, b) => (fullDate(a) && fullDate(b) ? Math.round((new Date(b) - new Date(a)) / DAY) : null);
const prettyDate = (d) =>
  fullDate(d) ? new Date(d + "T00:00:00").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : d;

function summarize(values) {
  const v = values.filter((x) => x != null && x >= 0).sort((a, b) => a - b);
  if (!v.length) return null;
  const m = Math.floor(v.length / 2);
  const median = v.length % 2 ? v[m] : Math.round((v[m - 1] + v[m]) / 2);
  const avg = Math.round(v.reduce((s, x) => s + x, 0) / v.length);
  return { median, avg, min: v[0], max: v[v.length - 1], n: v.length };
}

// One row per username. If the file has duplicates, merge them so that
// later non-null values win and nulls never erase known data.
function dedupe(list) {
  const byUser = new Map();
  list.forEach((p) => {
    const key = (p.username || "").toLowerCase();
    const merged = { ...(byUser.get(key) || {}) };
    for (const [k, v] of Object.entries(p)) if (v != null && v !== "") merged[k] = v;
    byUser.set(key, merged);
  });
  return [...byUser.values()];
}

export function startTracker(root: HTMLElement) {
  const $ = (name) => root.querySelector(`[data-el="${name}"]`);
  const TODAY = new Date().toISOString().slice(0, 10);
  let sort = { key: "aor_date", dir: 1 };

  function enrich(p) {
    const out = { ...p };
    out.program = [p.stream, p.category].filter(Boolean).join(" · ") || null;
    out.stage = "Unknown";
    for (let i = MILESTONES.length - 1; i >= 0; i--) {
      if (p[MILESTONES[i][0]]) { out.stage = MILESTONES[i][1]; break; }
    }
    SPANS.forEach((s) => (out[s.key] = days(p[s.from], p[s.to])));
    // Still waiting = no final step yet. Count days from AOR to today.
    out.waiting = p.ecopr_date || p.pr_card_date ? null : days(p.aor_date, TODAY);
    return out;
  }

  const t = data.thread || {};
  const people = dedupe(data.timelines || []).map(enrich);
  const lastProcessed =
    [t.last_processed, ...people.map((p) => p.updated_at)].filter(Boolean).sort().pop() || null;

  function fillSelect(name, first, values, sortValues = true) {
    const uniq = [...new Set(values.filter(Boolean))];
    if (sortValues) uniq.sort();
    $(name).innerHTML = `<option value="">${first}</option>` + uniq.map((v) => `<option>${esc(v)}</option>`).join("");
  }

  // Summary reflects the current filters, so you can compare e.g. CEC Inland vs FSW Outland.
  function renderStats(list) {
    const count = (label, n) => `<div class="stat"><b>${n}</b><span>${label}</span></div>`;
    const reached = (field) => list.filter((p) => p[field]).length;
    const counts = [
      lastProcessed &&
        `<div class="stat processed"><b>${esc(prettyDate(lastProcessed))}</b><span>last processed</span>` +
          `<small>${days(lastProcessed, TODAY) ?? 0}d ago</small></div>`,
      count("applicants", list.length),
      count("got BIL", reached("bil_date")),
      count("got FD", reached("fd_date")),
      count("got P1 / PPR", list.filter((p) => p.p1_date || p.ppr_date).length),
      count("got eCOPR", reached("ecopr_date")),
    ].filter(Boolean).join("");

    const spans = SPANS.map((s) => {
      const st = summarize(list.map((p) => p[s.key]));
      if (!st) return `<div class="stat span"><b>–</b><span>${s.label}</span><small>no data yet</small></div>`;
      return `<div class="stat span"><b>${st.median}d</b><span>${s.label} <em>median</em></span>` +
        `<small>avg ${st.avg}d · fastest ${st.min}d · slowest ${st.max}d · n=${st.n}</small></div>`;
    }).join("");

    const waitSt = summarize(list.map((p) => (p.fd_date ? null : p.waiting)));
    const waiting = waitSt
      ? `<div class="stat span wait"><b>${waitSt.median}d</b><span>still waiting for FD <em>median</em></span>` +
        `<small>longest ${waitSt.max}d · n=${waitSt.n}</small></div>`
      : "";

    $("stats").innerHTML =
      `<h2>Overview</h2><div class="grid">${counts}</div>` +
      `<h2>Processing times</h2><div class="grid">${spans}${waiting}</div>`;
  }

  function renderHead() {
    $("head").innerHTML = COLUMNS.map(
      (c) => `<th data-key="${c.key}" class="${c.span ? "span-col " : ""}${sort.key === c.key ? "sorted" : ""}" data-dir="${sort.dir > 0 ? "▲" : "▼"}">${c.label}</th>`
    ).join("");
  }

  function filtered() {
    const q = $("search").value.trim().toLowerCase();
    const stream = $("f-stream").value;
    const inout = $("f-inout").value.toLowerCase();
    const stage = $("f-stage").value;
    return people
      .filter((p) => !stream || p.program === stream)
      .filter((p) => !inout || (p.inland_outland || "").toLowerCase().startsWith(inout))
      .filter((p) => !stage || p.stage === stage)
      .filter((p) => !q || [p.username, p.program, p.country, p.pvo_svo, p.notes, p.raw_comment].join(" ").toLowerCase().includes(q))
      .sort((a, b) => {
        const x = a[sort.key], y = b[sort.key];
        if (x == null && y == null) return 0;
        if (x == null) return 1; // blanks always last
        if (y == null) return -1;
        return (typeof x === "number" ? x - y : String(x).localeCompare(String(y))) * sort.dir;
      });
  }

  function cell(p, c) {
    const v = p[c.key];
    if (c.key === "username") {
      const href = p.permalink || `https://www.reddit.com/user/${encodeURIComponent(v)}`;
      return `<td><a class="user" href="${esc(href)}" target="_blank" rel="noopener">u/${esc(v)}</a>` +
        (p.posted ? `<small class="posted">${esc(p.posted)}</small>` : "") + `</td>`;
    }
    if (c.key === "stage") return `<td><span class="badge ${v === "eCOPR" || v === "PR card" ? "final" : ""}">${esc(v)}</span></td>`;
    if (v == null || v === "") return `<td class="na">—</td>`;
    if (c.span) return `<td class="num${c.key === "waiting" ? " wait" : ""}">${v}d</td>`;
    if (c.date) return `<td class="date">${esc(v)}</td>`;
    return `<td>${esc(v)}</td>`;
  }

  // Step-by-step journey for the expanded row: AOR —31d→ BIL —81d→ FD …
  function journey(p) {
    const steps = MILESTONES.filter(([k]) => p[k]).map(([k, label]) => ({ label, date: p[k] }));
    if (!steps.length) return "";
    return `<div class="journey">` + steps.map((s, i) => {
      const gap = i ? days(steps[i - 1].date, s.date) : null;
      return (i ? `<span class="gap">${gap != null ? `${gap}d` : "?"}</span>` : "") +
        `<span class="step"><b>${s.label}</b>${esc(s.date)}</span>`;
    }).join("") + `</div>`;
  }

  function render() {
    const list = filtered();
    renderStats(list);
    $("count").textContent = `${list.length} of ${people.length}`;
    const extra = (p) => [
      p.adr && `ADR: ${p.adr}`, p.family && `Family: ${p.family}`, p.country && `Country: ${p.country}`, p.notes,
    ].filter(Boolean).map(esc).join(" · ");
    $("rows").innerHTML = list
      .map(
        (p, i) =>
          `<tr class="main" data-i="${i}">${COLUMNS.map((c) => cell(p, c)).join("")}</tr>` +
          `<tr class="detail" data-detail="${i}" hidden><td colspan="${COLUMNS.length}">` +
          journey(p) +
          (extra(p) ? `<p class="note">${extra(p)}</p>` : "") +
          (p.history?.length
            ? `<p class="note">Changes: ${p.history.map((h) =>
                `${esc(LABEL[h.field] || h.field)} ${esc(h.old)} → ${esc(h.new)} (${esc(h.changed_at)})`).join(" · ")}</p>`
            : "") +
          `<pre>${esc(p.raw_comment || "(original comment not saved)")}</pre></td></tr>`
      )
      .join("");
  }

  // ---- private "my timeline" section (data comes from the password-checked API) ----
  // Community medians over everyone, so I can see where I am against typical times.
  const allStats = Object.fromEntries(SPANS.map((s) => [s.key, summarize(people.map((p) => p[s.key]))]));
  // Estimates use only applicants like me: CEC, general (or no category given), Inland.
  const peers = people.filter(
    (p) =>
      p.stream === "CEC" &&
      (!p.category || p.category.toLowerCase() === "general") &&
      (p.inland_outland || "").toLowerCase().startsWith("inland")
  );
  const peerStats = Object.fromEntries(SPANS.map((s) => [s.key, summarize(peers.map((p) => p[s.key]))]));
  const addDays = (d, n) => new Date(new Date(d + "T00:00:00").getTime() + n * DAY).toISOString().slice(0, 10);
  const fmtDur = (n) => {
    if (n == null) return "–";
    const w = Math.floor(n / 7), r = n % 7;
    return `${n}d` + (n >= 7 ? ` <em>(${w}w${r ? ` ${r}d` : ""})</em>` : "");
  };

  function renderMine(me) {
    const steps = MILESTONES.filter(([k]) => fullDate(me[k])).map(([k, label]) => ({ k, label, date: me[k] }));
    if (!steps.length) return `<p class="muted">No dates saved yet.</p>`;
    const first = steps[0], last = steps[steps.length - 1];
    const tile = (big, label, small = "") =>
      `<div class="stat"><b>${big}</b><span>${label}</span>${small ? `<small>${small}</small>` : ""}</div>`;

    // Days since each milestone.
    const since = steps.map((s) => tile(fmtDur(days(s.date, TODAY)), `since ${s.label}`, esc(prettyDate(s.date)))).join("");

    // Gap between each consecutive milestone, compared with the community median when we track that span.
    const gaps = steps.slice(1).map((s, i) => {
      const prev = steps[i];
      const st = allStats[`${prev.k}>${s.k}`];
      return tile(fmtDur(days(prev.date, s.date)), `${prev.label} → ${s.label}`,
        st ? `community median ${st.median}d · n=${st.n}` : "");
    }).join("");

    // What's next: estimate dates from CEC general Inland medians, starting from my latest reached milestone.
    const next = ["fd_date", "p1_date", "ecopr_date"].filter((k) => !me[k]).map((k) => {
      const base = ["bil_date", "aor_date"].find((b) => fullDate(me[b]) && peerStats[`${b}>${k}`]);
      const st = base && peerStats[`${base}>${k}`];
      if (!st) return "";
      const eta = addDays(me[base], st.median);
      const left = days(TODAY, eta);
      return tile(esc(prettyDate(eta)), `estimated ${LABEL[k]}`,
        `${LABEL[base]} + median ${st.median}d (n=${st.n}) · ${left >= 0 ? `${left}d to go` : `${-left}d past median`}`);
    }).join("");

    return `<h2>My timeline</h2>` +
      `<div class="journey">` + steps.map((s, i) =>
        (i ? `<span class="gap">${days(steps[i - 1].date, s.date)}d</span>` : "") +
        `<span class="step"><b>${s.label}</b>${esc(s.date)}</span>`).join("") +
      `<span class="gap">${days(last.date, TODAY)}d</span><span class="step today"><b>Today</b>${TODAY}</span></div>` +
      `<div class="grid">` +
      tile(fmtDur(days(first.date, TODAY)), `total since ${first.label}`) +
      (first.k !== "aor_date" && fullDate(me.aor_date) ? tile(fmtDur(days(me.aor_date, TODAY)), "total since AOR") : "") +
      tile(esc(last.label), "latest step", `${days(last.date, TODAY)}d ago`) +
      `</div>` +
      `<h3>Time between steps</h3><div class="grid">${gaps}</div>` +
      `<h3>Time since each step</h3><div class="grid">${since}</div>` +
      `<h3>Rough estimates (CEC general · Inland medians, ${peers.length} applicants)</h3>` +
      (next ? `<div class="grid">${next}</div>` : `<p class="muted">Not enough CEC general Inland data yet.</p>`);
  }

  const onToggle = () => {
    const fields = $("unlock-fields");
    if (!$("mine").hidden) {
      // Lock again: hide and forget the data.
      $("mine").hidden = true;
      $("mine").innerHTML = "";
      $("unlock-toggle").textContent = "🔒 My timeline";
      return;
    }
    fields.hidden = !fields.hidden;
    if (!fields.hidden) $("unlock-pw").focus();
  };
  const onUnlock = async (e) => {
    e.preventDefault();
    const pw = $("unlock-pw").value;
    if (!pw) return;
    $("unlock-msg").textContent = "Checking…";
    try {
      const res = await fetch("/api/pr-tracker/me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `Error ${res.status}`);
      $("mine").innerHTML = renderMine(body.timeline || {});
      $("mine").hidden = false;
      $("unlock-fields").hidden = true;
      $("unlock-pw").value = "";
      $("unlock-msg").textContent = "";
      $("unlock-toggle").textContent = "🔓 Hide my timeline";
    } catch (err) {
      $("unlock-msg").textContent = err.message;
    }
  };

  // ---- initial render ----
  $("thread-info").innerHTML =
    (lastProcessed ? `<span class="updated">Data last processed: <b>${esc(prettyDate(lastProcessed))}</b></span> ` : "") +
    (t.url ? `<a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.title || "Reddit thread")}</a>` : "");

  if (!people.length) {
    $("empty").hidden = false;
    $("empty").textContent = "No timelines yet.";
  }

  fillSelect("f-stream", "All programs", people.map((p) => p.program));
  fillSelect("f-stage", "Any stage", MILESTONES.map((m) => m[1]).filter((s) => people.some((p) => p.stage === s)), false);
  renderHead();
  render();

  // ---- events ----
  const onHead = (e) => {
    const key = e.target.dataset.key;
    if (!key) return;
    sort = { key, dir: sort.key === key ? -sort.dir : 1 };
    renderHead();
    render();
  };
  const onRows = (e) => {
    if (e.target.closest("a")) return;
    const row = e.target.closest("tr.main");
    if (!row) return;
    const detail = root.querySelector(`[data-detail="${row.dataset.i}"]`);
    if (detail) detail.hidden = !detail.hidden;
  };
  const inputs = ["search", "f-stream", "f-inout", "f-stage"].map($);

  $("head").addEventListener("click", onHead);
  $("rows").addEventListener("click", onRows);
  inputs.forEach((el) => el.addEventListener("input", render));
  $("unlock-toggle").addEventListener("click", onToggle);
  $("unlock-form").addEventListener("submit", onUnlock);

  return function cleanup() {
    $("unlock-toggle")?.removeEventListener("click", onToggle);
    $("unlock-form")?.removeEventListener("submit", onUnlock);
    $("head")?.removeEventListener("click", onHead);
    $("rows")?.removeEventListener("click", onRows);
    inputs.forEach((el) => el?.removeEventListener("input", render));
  };
}
