// @ts-nocheck
/* eslint-disable */
"use client";

export default function PositionalRelationsTab() {
  return (
    <>
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
    </>
  );
}
