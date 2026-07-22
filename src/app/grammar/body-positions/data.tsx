// @ts-nocheck
/* eslint-disable */

// ─────────────────────────────────────────────────────────────
//  Body positions — SVG figures + Task 3 example sentences.
//  Every figure is a simple stick person drawn in a 100×120 box so
//  the whole set reads as one consistent visual system. Side-profile
//  poses face right; posture/arm poses use a front view so the arms
//  are legible.
// ─────────────────────────────────────────────────────────────

const G = "#cbd5e1"; // ground line
const B = "#1e293b"; // body
const A = "#2563eb"; // accent limb (the feature that names the pose)
const P = "#6366f1"; // prop stroke (chair / wall / rail)
const PF = "#e0e7ff"; // prop fill

const body = {
  fill: "none",
  stroke: B,
  strokeWidth: 5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const accent = {
  fill: "none",
  stroke: A,
  strokeWidth: 5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const prop = {
  fill: "none",
  stroke: P,
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Ground = ({ y = 108 }) => (
  <line x1="6" y1={y} x2="94" y2={y} stroke={G} strokeWidth="3" strokeLinecap="round" />
);

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-32"
    role="img"
    aria-hidden="true"
  >
    {children}
  </svg>
);

// A small downward "action" arrow used by the -down verbs.
const DownArrow = ({ x = 44, y = 6 }) => (
  <g stroke={A} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1={x} y1={y} x2={x} y2={y + 14} />
    <polyline points={`${x - 4},${y + 9} ${x},${y + 14} ${x + 4},${y + 9}`} />
  </g>
);

// A simple chair drawn in profile, facing right.
const Chair = () => (
  <g {...prop}>
    <line x1="38" y1="70" x2="72" y2="70" />
    <line x1="38" y1="70" x2="38" y2="42" />
    <line x1="40" y1="70" x2="40" y2="106" />
    <line x1="70" y1="70" x2="70" y2="106" />
  </g>
);

// ── ICONS ────────────────────────────────────────────────────

const iStand = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="50" y1="24" x2="50" y2="64" />
      <line x1="50" y1="32" x2="35" y2="58" />
      <line x1="50" y1="32" x2="65" y2="58" />
      <line x1="50" y1="64" x2="42" y2="104" />
      <line x1="50" y1="64" x2="58" y2="104" />
    </g>
    <circle cx="50" cy="16" r="8" fill={B} />
  </Svg>
);

const iSit = (
  <Svg>
    <Ground />
    <Chair />
    <g {...body}>
      <line x1="44" y1="36" x2="44" y2="68" />
      <line x1="44" y1="68" x2="66" y2="68" />
      <line x1="66" y1="68" x2="66" y2="104" />
      <line x1="66" y1="104" x2="78" y2="104" />
      <line x1="44" y1="46" x2="60" y2="66" />
    </g>
    <circle cx="44" cy="28" r="8" fill={B} />
  </Svg>
);

const iSitDown = (
  <Svg>
    <Ground />
    <DownArrow x="44" y="4" />
    <Chair />
    <g {...body}>
      <line x1="44" y1="36" x2="44" y2="68" />
      <line x1="44" y1="68" x2="66" y2="68" />
      <line x1="66" y1="68" x2="66" y2="104" />
      <line x1="66" y1="104" x2="78" y2="104" />
      <line x1="44" y1="46" x2="60" y2="66" />
    </g>
    <circle cx="44" cy="28" r="8" fill={B} />
  </Svg>
);

const iSlouch = (
  <Svg>
    <Ground />
    <Chair />
    <g {...body}>
      <path d="M46 41 C 38 49, 45 61, 51 68" />
      <line x1="51" y1="68" x2="69" y2="68" />
      <line x1="69" y1="68" x2="69" y2="104" />
      <line x1="69" y1="104" x2="81" y2="104" />
      <line x1="47" y1="49" x2="59" y2="70" />
    </g>
    <circle cx="46" cy="35" r="8" fill={B} />
  </Svg>
);

const iSitUpStraight = (
  <Svg>
    <Ground />
    <Chair />
    <g {...accent}>
      <line x1="28" y1="64" x2="28" y2="42" strokeWidth="3" />
      <polyline points="24,48 28,42 32,48" strokeWidth="3" />
    </g>
    <g {...body}>
      <line x1="44" y1="34" x2="44" y2="68" />
      <line x1="44" y1="68" x2="66" y2="68" />
      <line x1="66" y1="68" x2="66" y2="104" />
      <line x1="66" y1="104" x2="78" y2="104" />
      <line x1="44" y1="44" x2="60" y2="66" />
    </g>
    <circle cx="44" cy="26" r="8" fill={B} />
  </Svg>
);

const iSitBack = (
  <Svg>
    <Ground />
    <g {...prop}>
      <line x1="34" y1="66" x2="26" y2="38" />
      <line x1="34" y1="66" x2="74" y2="66" />
      <line x1="36" y1="66" x2="36" y2="106" />
      <line x1="72" y1="66" x2="72" y2="106" />
    </g>
    <g {...body}>
      <line x1="44" y1="66" x2="34" y2="42" />
      <line x1="44" y1="66" x2="68" y2="62" />
      <line x1="68" y1="62" x2="76" y2="98" />
      <line x1="76" y1="98" x2="86" y2="98" />
      <line x1="37" y1="48" x2="52" y2="64" />
    </g>
    <circle cx="31" cy="34" r="8" fill={B} />
  </Svg>
);

const iLeanForward = (
  <Svg>
    <Ground />
    <Chair />
    <g {...body}>
      <line x1="44" y1="66" x2="58" y2="42" />
      <line x1="44" y1="66" x2="66" y2="66" />
      <line x1="66" y1="66" x2="66" y2="104" />
      <line x1="66" y1="104" x2="78" y2="104" />
      <line x1="56" y1="46" x2="64" y2="64" />
    </g>
    <circle cx="60" cy="36" r="8" fill={B} />
  </Svg>
);

const iRecline = (
  <Svg>
    <Ground />
    <line x1="24" y1="66" x2="90" y2="96" stroke={P} strokeWidth="6" strokeLinecap="round" opacity="0.5" />
    <g {...body}>
      <line x1="36" y1="58" x2="66" y2="80" />
      <line x1="66" y1="80" x2="88" y2="88" />
      <line x1="42" y1="62" x2="58" y2="74" />
    </g>
    <circle cx="30" cy="52" r="8" fill={B} />
  </Svg>
);

const iCrouch = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="48" y1="52" x2="48" y2="74" />
      <line x1="48" y1="74" x2="64" y2="70" />
      <line x1="64" y1="70" x2="62" y2="104" />
      <line x1="62" y1="104" x2="72" y2="104" />
      <line x1="48" y1="58" x2="62" y2="74" />
    </g>
    <circle cx="48" cy="44" r="8" fill={B} />
  </Svg>
);

const iKneel = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="48" y1="48" x2="48" y2="76" />
      <line x1="48" y1="76" x2="48" y2="104" />
      <line x1="48" y1="104" x2="28" y2="104" />
      <line x1="48" y1="56" x2="61" y2="78" />
    </g>
    <circle cx="48" cy="40" r="8" fill={B} />
  </Svg>
);

const iSquat = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="50" y1="48" x2="50" y2="68" />
      <line x1="50" y1="68" x2="37" y2="76" />
      <line x1="50" y1="68" x2="63" y2="76" />
      <line x1="37" y1="76" x2="37" y2="104" />
      <line x1="63" y1="76" x2="63" y2="104" />
      <line x1="50" y1="54" x2="39" y2="70" />
      <line x1="50" y1="54" x2="61" y2="70" />
    </g>
    <circle cx="50" cy="40" r="8" fill={B} />
  </Svg>
);

const iBendOver = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="46" y1="66" x2="44" y2="104" />
      <line x1="50" y1="66" x2="54" y2="104" />
      <line x1="48" y1="66" x2="74" y2="56" />
      <line x1="70" y1="58" x2="72" y2="80" />
    </g>
    <circle cx="80" cy="52" r="8" fill={B} />
  </Svg>
);

const iStoopDown = (
  <Svg>
    <Ground />
    <DownArrow x="82" y="6" />
    <g {...body}>
      <line x1="46" y1="64" x2="42" y2="88" />
      <line x1="42" y1="88" x2="44" y2="104" />
      <line x1="46" y1="64" x2="70" y2="58" />
      <line x1="66" y1="60" x2="70" y2="88" />
    </g>
    <circle cx="76" cy="54" r="8" fill={B} />
  </Svg>
);

const iAllFours = (
  <Svg>
    <Ground y="104" />
    <g {...body}>
      <line x1="40" y1="62" x2="72" y2="62" />
      <line x1="68" y1="62" x2="68" y2="102" />
      <line x1="44" y1="62" x2="44" y2="102" />
    </g>
    <circle cx="80" cy="60" r="8" fill={B} />
  </Svg>
);

const iHandsKnees = (
  <Svg>
    <Ground y="104" />
    <g {...body}>
      <line x1="40" y1="62" x2="72" y2="62" />
      <line x1="68" y1="62" x2="68" y2="102" />
      <line x1="44" y1="62" x2="44" y2="94" />
      <line x1="44" y1="94" x2="30" y2="102" />
    </g>
    <circle cx="80" cy="60" r="8" fill={B} />
  </Svg>
);

const iCrossLegged = (
  <Svg>
    <Ground y="100" />
    <g {...body}>
      <line x1="50" y1="52" x2="50" y2="80" />
      <line x1="50" y1="80" x2="34" y2="96" />
      <line x1="50" y1="80" x2="66" y2="96" />
      <line x1="34" y1="96" x2="60" y2="96" />
      <line x1="66" y1="96" x2="40" y2="96" />
      <line x1="50" y1="60" x2="37" y2="82" />
      <line x1="50" y1="60" x2="63" y2="82" />
    </g>
    <circle cx="50" cy="44" r="8" fill={B} />
  </Svg>
);

const iLeanOn = (
  <Svg>
    <Ground />
    <rect x="82" y="18" width="6" height="90" fill={PF} stroke={P} strokeWidth="2" />
    <g {...body}>
      <line x1="50" y1="104" x2="58" y2="66" />
      <line x1="54" y1="104" x2="58" y2="66" />
      <line x1="58" y1="66" x2="72" y2="38" />
      <line x1="72" y1="38" x2="76" y2="60" />
    </g>
    <circle cx="74" cy="30" r="8" fill={B} />
  </Svg>
);

const iLeanOver = (
  <Svg>
    <Ground />
    <g {...prop}>
      <line x1="26" y1="72" x2="84" y2="72" />
      <line x1="34" y1="72" x2="34" y2="104" />
      <line x1="78" y1="72" x2="78" y2="104" />
    </g>
    <g {...body}>
      <line x1="44" y1="104" x2="44" y2="72" />
      <line x1="49" y1="104" x2="49" y2="72" />
      <line x1="46" y1="72" x2="70" y2="60" />
      <line x1="66" y1="62" x2="74" y2="82" />
    </g>
    <circle cx="76" cy="56" r="8" fill={B} />
  </Svg>
);

const iBow = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="44" y1="66" x2="43" y2="104" />
      <line x1="47" y1="66" x2="48" y2="104" />
      <line x1="45" y1="66" x2="68" y2="48" />
      <line x1="63" y1="52" x2="52" y2="62" />
    </g>
    <circle cx="74" cy="44" r="8" fill={B} />
  </Svg>
);

const iCurtsy = (
  <Svg>
    <Ground />
    <polygon points="50,68 36,102 64,102" fill={PF} stroke={P} strokeWidth="2" />
    <g {...body}>
      <line x1="50" y1="48" x2="50" y2="70" />
      <line x1="50" y1="70" x2="42" y2="104" />
      <line x1="50" y1="70" x2="63" y2="100" />
      <line x1="50" y1="54" x2="35" y2="72" />
      <line x1="50" y1="54" x2="65" y2="72" />
    </g>
    <circle cx="50" cy="40" r="8" fill={B} />
  </Svg>
);

const iLie = (
  <Svg>
    <Ground y="104" />
    <g {...body}>
      <line x1="32" y1="96" x2="74" y2="96" />
      <line x1="74" y1="96" x2="86" y2="88" />
      <line x1="42" y1="96" x2="54" y2="86" />
    </g>
    <circle cx="26" cy="96" r="8" fill={B} />
  </Svg>
);

const iLieDown = (
  <Svg>
    <Ground y="104" />
    <DownArrow x="52" y="8" />
    <g {...body}>
      <line x1="32" y1="96" x2="74" y2="96" />
      <line x1="74" y1="96" x2="86" y2="88" />
      <line x1="42" y1="96" x2="54" y2="86" />
    </g>
    <circle cx="26" cy="96" r="8" fill={B} />
  </Svg>
);

const iHandsPockets = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="50" y1="24" x2="50" y2="64" />
      <line x1="50" y1="64" x2="42" y2="104" />
      <line x1="50" y1="64" x2="58" y2="104" />
    </g>
    <g {...accent}>
      <path d="M50 33 L44 51 L48 64" />
      <path d="M50 33 L56 51 L52 64" />
    </g>
    <circle cx="50" cy="16" r="8" fill={B} />
  </Svg>
);

const iArmsFolded = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="50" y1="24" x2="50" y2="64" />
      <line x1="50" y1="64" x2="42" y2="104" />
      <line x1="50" y1="64" x2="58" y2="104" />
    </g>
    <g {...accent}>
      <line x1="50" y1="33" x2="38" y2="48" />
      <line x1="50" y1="33" x2="62" y2="48" />
      <line x1="38" y1="48" x2="61" y2="44" />
      <line x1="62" y1="50" x2="39" y2="46" />
    </g>
    <circle cx="50" cy="16" r="8" fill={B} />
  </Svg>
);

const iArmsCrossed = iArmsFolded;

const iHandsHips = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="50" y1="24" x2="50" y2="64" />
      <line x1="50" y1="64" x2="42" y2="104" />
      <line x1="50" y1="64" x2="58" y2="104" />
    </g>
    <g {...accent}>
      <path d="M50 34 L33 46 L45 60" />
      <path d="M50 34 L67 46 L55 60" />
    </g>
    <circle cx="50" cy="16" r="8" fill={B} />
  </Svg>
);

const iHandsBehind = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="52" y1="24" x2="52" y2="64" />
      <line x1="52" y1="64" x2="47" y2="104" />
      <line x1="52" y1="64" x2="57" y2="104" />
    </g>
    <g {...accent}>
      <path d="M52 32 L40 44 L44 56" />
    </g>
    <circle cx="55" cy="16" r="8" fill={B} />
  </Svg>
);

const iHandstand = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="44" y1="104" x2="50" y2="84" />
      <line x1="56" y1="104" x2="50" y2="84" />
      <line x1="50" y1="84" x2="50" y2="44" />
      <line x1="50" y1="44" x2="42" y2="16" />
      <line x1="50" y1="44" x2="58" y2="16" />
    </g>
    <circle cx="50" cy="96" r="7" fill={B} />
  </Svg>
);

const iHeadstand = (
  <Svg>
    <Ground />
    <g {...body}>
      <line x1="38" y1="104" x2="50" y2="90" />
      <line x1="62" y1="104" x2="50" y2="90" />
      <line x1="50" y1="90" x2="50" y2="48" />
      <line x1="50" y1="48" x2="43" y2="18" />
      <line x1="50" y1="48" x2="57" y2="18" />
    </g>
    <circle cx="50" cy="98" r="8" fill={B} />
  </Svg>
);

// ── DATA ─────────────────────────────────────────────────────
// group order controls the "Learn" layout. quiz:false marks a
// synonym that shares its figure with another entry, so the quiz
// never asks a question with two equally-correct answers.

export const GROUPS = [
  { id: "standing", label: "Standing & Posture" },
  { id: "sitting", label: "Sitting" },
  { id: "bending", label: "Bending & Low Positions" },
  { id: "lying", label: "Lying" },
  { id: "inverted", label: "Inverted" },
];

export const POSITIONS = [
  // ── Standing & posture ──
  {
    id: "stand",
    name: "Stand",
    group: "standing",
    meaning: "Be upright on your feet.",
    sentence:
      "In the foreground, a tall man is standing near the entrance, waiting for someone.",
    icon: iStand,
  },
  {
    id: "hands-pockets",
    name: "Stand with your hands in your pockets",
    group: "standing",
    meaning: "Standing with both hands tucked inside your trouser pockets — casual or relaxed.",
    sentence:
      "A teenager is standing with his hands in his pockets, looking a little bored.",
    icon: iHandsPockets,
  },
  {
    id: "arms-folded",
    name: "Stand with your arms folded",
    group: "standing",
    accepts: ["arms crossed", "stand with your arms crossed"],
    meaning: "Standing with your forearms crossed over your chest.",
    sentence:
      "The manager is standing with her arms folded, watching the workers closely.",
    icon: iArmsFolded,
  },
  {
    id: "arms-crossed",
    name: "Stand with your arms crossed",
    group: "standing",
    quiz: false,
    meaning: 'Same posture as "arms folded" — forearms crossed over the chest.',
    sentence:
      "A security guard is standing with his arms crossed by the front door.",
    icon: iArmsCrossed,
  },
  {
    id: "hands-hips",
    name: "Stand with your hands on your hips",
    group: "standing",
    meaning: "Standing with your hands on your hips and elbows out — often confident or impatient.",
    sentence:
      "A coach is standing with his hands on his hips, watching the game intently.",
    icon: iHandsHips,
  },
  {
    id: "hands-behind",
    name: "Stand with your hands behind your back",
    group: "standing",
    meaning: "Standing with your hands clasped behind your lower back — formal or observing.",
    sentence:
      "An officer is standing with his hands behind his back, observing the crowd.",
    icon: iHandsBehind,
  },
  {
    id: "lean-on",
    name: "Lean on",
    group: "standing",
    meaning: "Rest your body against a wall or surface for support.",
    sentence:
      "A young man is leaning on the wall, casually checking his phone.",
    icon: iLeanOn,
  },
  {
    id: "bow",
    name: "Bow",
    group: "standing",
    meaning: "Bend the upper body forward from the waist as a greeting or in thanks.",
    sentence:
      "On the stage, a performer is bowing to the cheering audience.",
    icon: iBow,
  },
  {
    id: "curtsy",
    name: "Curtsy",
    group: "standing",
    meaning: "A formal greeting: bend the knees with one foot behind, often holding a skirt.",
    sentence:
      "A little girl is curtsying politely as she greets the guests.",
    icon: iCurtsy,
  },

  // ── Sitting ──
  {
    id: "sit",
    name: "Sit",
    group: "sitting",
    accepts: ["sit down"],
    meaning: "Rest with your weight on your bottom, upper body upright.",
    sentence:
      "In the middle of the picture, a woman is sitting on a wooden bench, reading a book.",
    icon: iSit,
  },
  {
    id: "sit-down",
    name: "Sit down",
    group: "sitting",
    quiz: false,
    meaning: "The action of lowering yourself into a seated position.",
    sentence:
      "A man is sitting down at a café table, getting ready to order.",
    icon: iSitDown,
  },
  {
    id: "slouch",
    name: "Slouch",
    group: "sitting",
    meaning: "Sit with a rounded, drooping back and shoulders — lazy or tired-looking.",
    sentence:
      "A bored teenager is slouching on the sofa, staring at his phone.",
    icon: iSlouch,
  },
  {
    id: "sit-up-straight",
    name: "Sit up straight",
    group: "sitting",
    meaning: "Sit with your back straight and shoulders back — attentive posture.",
    sentence:
      "The students are sitting up straight at their desks, paying close attention.",
    icon: iSitUpStraight,
  },
  {
    id: "sit-back",
    name: "Sit back",
    group: "sitting",
    meaning: "Lean back into your chair to relax.",
    sentence:
      "A relaxed man is sitting back in his armchair with his legs stretched out.",
    icon: iSitBack,
  },
  {
    id: "lean-forward",
    name: "Lean forward",
    group: "sitting",
    meaning: "Tilt your upper body toward something — curious or engaged.",
    sentence:
      "A curious child is leaning forward to get a better look at the animals.",
    icon: iLeanForward,
  },
  {
    id: "recline",
    name: "Recline",
    group: "sitting",
    meaning: "Lie back at a relaxed angle, as in a deck chair.",
    sentence:
      "A tourist is reclining on a beach chair, soaking up the afternoon sun.",
    icon: iRecline,
  },
  {
    id: "cross-legged",
    name: "Cross-legged",
    group: "sitting",
    meaning: "Sit on the floor with your legs folded and crossed at the shins.",
    sentence:
      "A group of children are sitting cross-legged on the floor for story time.",
    icon: iCrossLegged,
  },

  // ── Bending & low ──
  {
    id: "lean-over",
    name: "Lean over",
    group: "bending",
    meaning: "Bend your upper body forward over something, such as a railing.",
    sentence:
      "A woman is leaning over the balcony railing to wave at her friends below.",
    icon: iLeanOver,
  },
  {
    id: "bend-over",
    name: "Bend over",
    group: "bending",
    meaning: "Bend forward from the waist with the legs mostly straight.",
    sentence:
      "A worker is bending over to pick up a heavy box from the floor.",
    icon: iBendOver,
  },
  {
    id: "stoop-down",
    name: "Stoop down",
    group: "bending",
    meaning: "Bend forward and downward, often with a curved back, to reach something low.",
    sentence:
      "An elderly woman is stooping down to pet a small dog on the path.",
    icon: iStoopDown,
  },
  {
    id: "crouch",
    name: "Crouch",
    group: "bending",
    meaning: "Lower your body close to the ground with your knees bent, staying on your feet.",
    sentence:
      "A photographer is crouching low to capture the perfect shot.",
    icon: iCrouch,
  },
  {
    id: "kneel",
    name: "Kneel",
    group: "bending",
    meaning: "Rest on one or both knees on the ground.",
    sentence:
      "A gardener is kneeling on the grass, planting flowers in the soil.",
    icon: iKneel,
  },
  {
    id: "squat",
    name: "Squat",
    group: "bending",
    meaning: "Lower into a deep knee bend with your feet flat and bottom near your heels.",
    sentence:
      "A weightlifter is squatting down to lift the heavy barbell.",
    icon: iSquat,
  },
  {
    id: "all-fours",
    name: "On all fours",
    group: "bending",
    accepts: ["on your hands and knees", "hands and knees"],
    meaning: "Supporting yourself on both hands and both knees.",
    sentence:
      "A toddler is crawling on all fours across the living-room floor.",
    icon: iAllFours,
  },
  {
    id: "hands-knees",
    name: "On your hands and knees",
    group: "bending",
    quiz: false,
    meaning: 'The same position as "on all fours" — hands and knees on the ground.',
    sentence:
      "The cleaner is on her hands and knees, scrubbing the tiled floor.",
    icon: iHandsKnees,
  },

  // ── Lying ──
  {
    id: "lie",
    name: "Lie",
    group: "lying",
    quiz: false,
    meaning: "Rest your body flat in a horizontal position.",
    sentence:
      "A dog is lying on the rug in front of the fireplace.",
    icon: iLie,
  },
  {
    id: "lie-down",
    name: "Lie down",
    group: "lying",
    accepts: ["lie", "lie down", "lying down"],
    meaning: "The action of moving into a flat, horizontal position.",
    sentence:
      "A man is lying down on the grass to watch the clouds drift by.",
    icon: iLieDown,
  },

  // ── Inverted ──
  {
    id: "handstand",
    name: "Handstand",
    group: "inverted",
    meaning: "Balance upside down on your hands with your legs in the air.",
    sentence:
      "A gymnast is doing a handstand on the balance beam.",
    icon: iHandstand,
  },
  {
    id: "headstand",
    name: "Headstand",
    group: "inverted",
    meaning: "Balance upside down on your head, supported by your forearms.",
    sentence:
      "A yoga instructor is doing a headstand in the middle of the studio.",
    icon: iHeadstand,
  },
];
