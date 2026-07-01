export const PARTS_OF_SPEECH = [
  {
    tag: "Subject",
    color: "#1e40af",
    bg: "#dbeafe",
    emoji: "👤",
    definition: "Who or what the sentence is about. Usually a noun or pronoun.",
    tips: [
      "Every sentence needs a subject.",
      "It can be a single word or a phrase.",
      "Ask 'who?' or 'what?' before the verb to find it.",
    ],
    examples: [
      "<u>She</u> submitted the application on time.",
      "<u>The community centre</u> was renovated last year.",
      "<u>Working remotely</u> has become very common.",
    ],
  },
  {
    tag: "Verb",
    color: "#166534",
    bg: "#dcfce7",
    emoji: "⚡",
    definition:
      "The action or state in the sentence. Every sentence must have one.",
    tips: [
      "Verbs change form with tense.",
      "Linking verbs (is, are, was) connect the subject to a description.",
      "Auxiliary verbs (have, will, can) support the main verb.",
    ],
    examples: [
      "She <u>submitted</u> the form before the deadline.",
      "They <u>have been waiting</u> for a response for two weeks.",
      "The new policy <u>seems</u> reasonable.",
    ],
  },
  {
    tag: "Object",
    color: "#92400e",
    bg: "#fef3c7",
    emoji: "🎯",
    definition:
      "Receives the action of the verb. There are two types: direct and indirect.",
    tips: [
      "Direct object: what/whom the action affects.",
      "Indirect object: to/for whom the action is done.",
      "Not all verbs take objects (intransitive verbs).",
    ],
    examples: [
      "She emailed <u>the manager</u>. (direct)",
      "He sent <u>her</u> the updated schedule. (indirect)",
      "They completed <u>the application</u>.",
    ],
  },
  {
    tag: "Adjective",
    color: "#5b21b6",
    bg: "#ede9fe",
    emoji: "🎨",
    definition: "Describes or modifies a noun or pronoun, giving more detail.",
    tips: [
      "Usually placed before the noun it describes.",
      "Can follow linking verbs as a predicate adjective.",
      "Comparative: more affordable. Superlative: most affordable.",
    ],
    examples: [
      "A <u>detailed</u> response is expected.",
      "The instructions were <u>unclear</u>.",
      "She felt <u>confident</u> and <u>well-prepared</u>.",
    ],
  },
  {
    tag: "Adverb",
    color: "#0f766e",
    bg: "#ccfbf1",
    emoji: "⚙️",
    definition:
      "Modifies a verb, adjective, or another adverb — answers how, when, where, or to what degree.",
    tips: [
      "Many adverbs end in -ly.",
      "Can appear at the start, middle, or end of a sentence.",
      "Never modifies a noun (that is an adjective's job).",
    ],
    examples: [
      "She responded <u>promptly</u> to the complaint.",
      "<u>Recently</u>, the transit authority announced new routes.",
      "The task was <u>surprisingly</u> straightforward.",
    ],
  },
  {
    tag: "Conjunction",
    color: "#be185d",
    bg: "#fce7f3",
    emoji: "🔗",
    definition:
      "Joins words, phrases, or clauses together. Three main types: coordinating, subordinating, correlative.",
    tips: [
      "FANBOYS = For, And, Nor, But, Or, Yet, So (coordinating).",
      "Subordinating: because, although, when, if, since.",
      "Correlative: either...or, neither...nor, both...and.",
    ],
    examples: [
      "The commute was long, <u>but</u> the job was worth it.",
      "<u>Although</u> the rent increased, she decided to renew the lease.",
      "<u>Both</u> clarity <u>and</u> tone matter in professional emails.",
    ],
  },
  {
    tag: "Preposition",
    color: "#b45309",
    bg: "#fef9c3",
    emoji: "📍",
    definition:
      "Shows the relationship between a noun/pronoun and another word — usually location, time, or direction.",
    tips: [
      "Always followed by a noun or pronoun (its object).",
      "Common prepositions: in, on, at, by, for, with, about, under, through.",
      "Avoid ending formal sentences with a preposition.",
    ],
    examples: [
      "The form is <u>on</u> the front desk.",
      "Please submit your documents <u>by</u> Friday.",
      "She walked <u>through</u> the main entrance.",
    ],
  },
  {
    tag: "Pronoun",
    color: "#0369a1",
    bg: "#e0f2fe",
    emoji: "♻️",
    definition:
      "Replaces a noun to avoid repetition. Types: personal, possessive, reflexive, relative, demonstrative, indefinite.",
    tips: [
      "Must agree in number and gender with the noun it replaces.",
      "Reflexive: himself, herself, themselves.",
      "Relative: who, which, that (introduce clauses).",
    ],
    examples: [
      "<u>She</u> contacted <u>him</u> about the complaint.",
      "The decision is <u>theirs</u> to make.",
      "The supervisor <u>who</u> reviewed the file approved it.",
    ],
  },
  {
    tag: "Article",
    color: "#065f46",
    bg: "#d1fae5",
    emoji: "📰",
    definition:
      "Specifies whether a noun is definite (the) or indefinite (a, an). Acts as a type of determiner.",
    tips: [
      "'The' = specific, already known.",
      "'A/An' = any one of a kind, first mention.",
      "Use 'an' before vowel sounds, not vowel letters.",
    ],
    examples: [
      "She submitted <u>a</u> complaint.",
      "<u>The</u> complaint was reviewed within two days.",
      "It was <u>an</u> unexpected outcome.",
    ],
  },
  {
    tag: "Interjection",
    color: "#7c3aed",
    bg: "#f5f3ff",
    emoji: "😮",
    definition:
      "An exclamation that expresses emotion, often standing alone or set apart with a comma or exclamation mark.",
    tips: [
      "Usually grammatically independent from the rest of the sentence.",
      "Can be mild (Oh, well) or strong (Wow! Ouch!).",
      "Use sparingly in formal writing.",
    ],
    examples: [
      "<u>Wow!</u> That is an impressive improvement.",
      "<u>Oh</u>, I did not realize the office had moved.",
      "<u>Great!</u> I will send the confirmation right away.",
    ],
  },
  {
    tag: "Determiner",
    color: "#4338ca",
    bg: "#e0e7ff",
    emoji: "🔢",
    definition:
      "Introduces a noun and provides context such as quantity, possession, or specificity. Includes articles, demonstratives, quantifiers, and possessives.",
    tips: [
      "Demonstratives: this, that, these, those.",
      "Quantifiers: many, few, some, any, every, each.",
      "Possessives: my, your, his, her, its, our, their.",
    ],
    examples: [
      "<u>Many</u> applicants submitted their forms late.",
      "<u>Each</u> section of the test has a time limit.",
      "<u>Her</u> written response was well-organized.",
    ],
  },
  {
    tag: "Complement",
    color: "#6b7280",
    bg: "#f3f4f6",
    emoji: "🪞",
    definition:
      "Completes the meaning of the subject or object via a linking verb. Can be a noun, pronoun, or adjective.",
    tips: [
      "Subject complement follows linking verbs (be, seem, appear).",
      "Object complement describes or renames the object.",
      "Differs from an adverb — it describes a noun, not a verb.",
    ],
    examples: [
      "She became <u>the team lead</u> after six months. (subject complement)",
      "The board appointed him <u>director</u>. (object complement)",
      "The new scheduling system seems <u>efficient</u>.",
    ],
  },
];

export const SENTENCE_TYPES = [
  {
    name: "Simple Sentence",
    emoji: "1️⃣",
    color: "#1e40af",
    bg: "#dbeafe",
    formula: "Subject + Verb (+ Object)",
    definition:
      "Contains one independent clause with a subject and a predicate. Expresses one complete thought.",
    examples: [
      "She submitted the form.",
      "The landlord increased the rent.",
      "My colleague works at the downtown office.",
    ],
    celpipTip:
      "Use simple sentences for clear, direct statements in Writing Task 1.",
  },
  {
    name: "Compound Sentence",
    emoji: "2️⃣",
    color: "#166534",
    bg: "#dcfce7",
    formula: "Independent Clause + Coordinator + Independent Clause",
    definition:
      "Two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon.",
    examples: [
      "I wanted to attend the session, but I had a shift that evening.",
      "She updated her resume; she applied to three positions.",
      "He requested a transfer, yet his manager denied it.",
    ],
    celpipTip:
      "Shows logical relationships — great for Writing Task 2 argument paragraphs.",
  },
  {
    name: "Complex Sentence",
    emoji: "🔀",
    color: "#92400e",
    bg: "#fef3c7",
    formula:
      "Independent Clause + Subordinating Conjunction + Dependent Clause",
    definition:
      "One independent clause and one or more dependent (subordinate) clauses. Shows cause, contrast, time, or condition.",
    examples: [
      "Although the commute was long, she accepted the position.",
      "She left the meeting early because she had another appointment.",
      "If you practise speaking daily, your fluency will improve.",
    ],
    celpipTip:
      "Demonstrates range and sophistication — aim for this in Speaking Tasks 5 to 8.",
  },
  {
    name: "Compound-Complex Sentence",
    emoji: "🔗",
    color: "#5b21b6",
    bg: "#ede9fe",
    formula: "2+ Independent Clauses + 1+ Dependent Clause",
    definition:
      "Combines both compound and complex structures. Most elaborate type — requires careful punctuation.",
    examples: [
      "Although she was nervous, she delivered the presentation clearly, and the team responded positively.",
      "Because the transit line was delayed, many employees arrived late, but the meeting was rescheduled.",
    ],
    celpipTip:
      "Use sparingly for high-level writing — shows mastery of English structure.",
  },
  {
    name: "Declarative",
    emoji: "📣",
    color: "#0f766e",
    bg: "#ccfbf1",
    formula: "Subject + Verb + ...",
    definition:
      "Makes a statement or provides information. Ends with a period. Most common sentence type.",
    examples: [
      "The registration deadline is Friday at 5 pm.",
      "Canada has ten provinces and three territories.",
      "She completed the writing task in under 25 minutes.",
    ],
    celpipTip: "The backbone of all CELPIP writing and speaking tasks.",
  },
  {
    name: "Interrogative",
    emoji: "❓",
    color: "#be185d",
    bg: "#fce7f3",
    formula: "Auxiliary + Subject + Verb + ...?",
    definition:
      "Asks a question. Ends with a question mark. Often inverts subject-verb order.",
    examples: [
      "Have you received the confirmation email?",
      "Where is the nearest transit station?",
      "What time does the community centre close?",
    ],
    celpipTip: "Useful in Speaking Task 3 (giving directions or instructions).",
  },
  {
    name: "Imperative",
    emoji: "👉",
    color: "#b45309",
    bg: "#fef9c3",
    formula: "(You) + Base Verb + ...",
    definition:
      "Gives a command, instruction, or request. Subject 'you' is usually implied, not stated.",
    examples: [
      "Please submit your application by the deadline.",
      "Turn left at the intersection and continue for two blocks.",
      "Be specific and organized in your written response.",
    ],
    celpipTip:
      "Appears in instructions and advice — useful in Writing Task 1 (emails).",
  },
  {
    name: "Exclamatory",
    emoji: "❗",
    color: "#7c3aed",
    bg: "#f5f3ff",
    formula: "What/How + Noun/Adjective + Subject + Verb!",
    definition:
      "Expresses strong emotion or surprise. Ends with an exclamation mark. Avoid in formal writing.",
    examples: [
      "What a well-organized response!",
      "How quickly the time passed!",
      "That was an excellent suggestion!",
    ],
    celpipTip:
      "Avoid in formal tasks. Acceptable in informal letter-writing (Task 1).",
  },
];

// ── PHONETICS DATA ────────────────────────────────────────────────────

export const VOWEL_SOUNDS = [
  {
    ipa: "iː",
    name: "Long EE",
    spelling: "ee, ea, e, ie, ey",
    mouth: "Lips spread wide, tongue high and forward.",
    words: ["feet", "sea", "me", "believe", "key"],
    minimal: ["ship / sheep", "bit / beat", "fill / feel"],
    trap: "Don't cut it short — 'ship' and 'sheep' are different words.",
  },
  {
    ipa: "ɪ",
    name: "Short I",
    spelling: "i, y, ui, e",
    mouth: "Lips slightly spread, tongue high but relaxed.",
    words: ["sit", "gym", "build", "women"],
    minimal: ["sit / seat", "bit / beat", "fill / feel"],
    trap: "Common error: saying 'sheep' when you mean 'ship'.",
  },
  {
    ipa: "e",
    name: "Short E",
    spelling: "e, ea, a",
    mouth: "Mouth half open, lips slightly spread.",
    words: ["bed", "head", "any"],
    minimal: ["bed / bad", "pen / pan", "get / gut"],
    trap: "Don't confuse with /æ/ — 'bed' and 'bad' mean different things.",
  },
  {
    ipa: "æ",
    name: "Short A",
    spelling: "a",
    mouth: "Mouth open wide, tongue low and forward — say 'ah' then smile.",
    words: ["cat", "man", "happy", "apple"],
    minimal: ["cat / cut", "bad / bed", "pan / pen"],
    trap: "Canadian/American English — this sound is very open. Don't raise it to /e/.",
  },
  {
    ipa: "ɑː",
    name: "Long AH",
    spelling: "a, ar, o",
    mouth: "Jaw dropped, tongue low and back, mouth wide open.",
    words: ["father", "car", "hot", "palm"],
    minimal: ["cot / coat", "calm / come"],
    trap: "In Canadian English, 'cot' and 'caught' often sound the same (cot-caught merger).",
  },
  {
    ipa: "ɔː",
    name: "Long AW",
    spelling: "aw, au, or, oor, al",
    mouth: "Lips rounded, mouth half open, tongue back.",
    words: ["law", "cause", "more", "floor", "all"],
    minimal: ["caught / cot", "saw / so", "law / low"],
    trap: "Many Canadian speakers merge this with /ɑː/ — context helps distinguish.",
  },
  {
    ipa: "ʊ",
    name: "Short OO",
    spelling: "u, oo, ou",
    mouth: "Lips loosely rounded, tongue high and back but relaxed.",
    words: ["book", "put", "could", "wolf"],
    minimal: ["book / boot", "pull / pool", "full / fool"],
    trap: "Don't use the full long /uː/ — 'book' is short and relaxed.",
  },
  {
    ipa: "uː",
    name: "Long OO",
    spelling: "oo, u, ew, ue, ou",
    mouth: "Lips tightly rounded and pushed forward, tongue high and back.",
    words: ["food", "rule", "new", "blue", "soup"],
    minimal: ["fool / full", "pool / pull", "boot / book"],
    trap: "Hold the sound longer than /ʊ/ — it's a tense, sustained sound.",
  },
  {
    ipa: "ʌ",
    name: "Short U",
    spelling: "u, o, ou, oo",
    mouth: "Mouth half open, tongue in centre, lips neutral.",
    words: ["cup", "come", "young", "flood"],
    minimal: ["cup / cap", "cut / cat", "gun / gone"],
    trap: "This is the most common vowel sound in English — also found in unstressed syllables.",
  },
  {
    ipa: "ə",
    name: "Schwa",
    spelling: "any vowel (unstressed)",
    mouth: "Mouth relaxed, tongue central — the laziest vowel sound.",
    words: ["about", "sofa", "taken", "famous", "pencil"],
    minimal: ["above / a-bove (stress shift)", "photograph / photography"],
    trap: "The schwa ONLY appears in unstressed syllables. It's the most common sound in English.",
  },
  {
    ipa: "eɪ",
    name: "Long A",
    spelling: "a, ai, ay, ea, ey",
    mouth:
      "Start with /e/ then glide toward /ɪ/ — it's a diphthong (two sounds).",
    words: ["face", "rain", "day", "great", "they"],
    minimal: ["face / fuss", "late / let", "say / so"],
    trap: "It's a glide — don't hold it flat. The mouth moves from open to closed.",
  },
  {
    ipa: "oʊ",
    name: "Long O",
    spelling: "o, oa, ow, oe",
    mouth: "Start with /o/ then glide toward /ʊ/ — lips round and close.",
    words: ["go", "boat", "know", "toe"],
    minimal: ["go / goo", "coat / cut", "low / law"],
    trap: "In American/Canadian English this is a diphthong — don't say a flat 'oh'.",
  },
  {
    ipa: "aɪ",
    name: "Long I",
    spelling: "i, igh, y, ie, uy",
    mouth: "Start open /ɑ/ then glide up to /ɪ/ — wide movement.",
    words: ["time", "high", "my", "pie", "buy"],
    minimal: ["time / team", "ride / read", "mine / mean"],
    trap: "A clear diphthong — both parts must be audible or it sounds like /ɑː/.",
  },
  {
    ipa: "aʊ",
    name: "OW sound",
    spelling: "ou, ow",
    mouth: "Start open /ɑ/ then round lips toward /ʊ/.",
    words: ["out", "now", "house", "cow"],
    minimal: ["out / oat", "cow / coat", "found / fond"],
    trap: "In Canadian English this is noticeably different before voiceless consonants — 'about' vs 'out'.",
  },
  {
    ipa: "ɔɪ",
    name: "OY sound",
    spelling: "oi, oy",
    mouth: "Start rounded /ɔ/ then glide to /ɪ/.",
    words: ["boy", "coin", "joy", "noise"],
    minimal: ["coin / con", "boy / bay"],
    trap: "Don't flatten it — both parts of the diphthong should be clear.",
  },
];

export const CONSONANT_SOUNDS = [
  {
    ipa: "p",
    name: "P",
    type: "Stop",
    voiced: false,
    spelling: "p, pp",
    mouth: "Lips pressed together, then released with a puff of air.",
    words: ["pen", "apple", "cap"],
    pair: "b",
    tip: "At the start of a word, English /p/ has a strong puff of air (aspiration): 'pin' vs 'bin'.",
  },
  {
    ipa: "b",
    name: "B",
    type: "Stop",
    voiced: true,
    spelling: "b, bb",
    mouth:
      "Lips pressed together, released — but voice is on (feel throat vibrate).",
    words: ["bed", "abbey", "cab"],
    pair: "p",
    tip: "At the end of words, the final /b/ is often unreleased — lips close but don't pop.",
  },
  {
    ipa: "t",
    name: "T",
    type: "Stop",
    voiced: false,
    spelling: "t, tt, ed",
    mouth: "Tongue tip touches the ridge behind upper teeth, then releases.",
    words: ["top", "butter", "cat"],
    pair: "d",
    tip: "In North American English, /t/ between vowels often sounds like a quick /d/ (flap): 'butter' → 'budder'.",
  },
  {
    ipa: "d",
    name: "D",
    type: "Stop",
    voiced: true,
    spelling: "d, dd, ed",
    mouth: "Same position as /t/ but with voice.",
    words: ["dog", "ladder", "bad"],
    pair: "t",
    tip: "Past tense -ed is /d/ after voiced sounds: 'called', 'played', 'loved'.",
  },
  {
    ipa: "k",
    name: "K",
    type: "Stop",
    voiced: false,
    spelling: "k, c, ck, ch, qu",
    mouth: "Back of tongue touches soft palate, then releases.",
    words: ["cat", "king", "back", "school"],
    pair: "g",
    tip: "Silent 'k' before 'n': know, knock, knife.",
  },
  {
    ipa: "g",
    name: "G",
    type: "Stop",
    voiced: true,
    spelling: "g, gg, gh",
    mouth: "Same as /k/ but with voice.",
    words: ["go", "egg", "ghost"],
    pair: "k",
    tip: "'gh' is usually silent: through, though, night, right.",
  },
  {
    ipa: "f",
    name: "F",
    type: "Fricative",
    voiced: false,
    spelling: "f, ff, ph, gh",
    mouth: "Upper teeth lightly touch lower lip, air flows through.",
    words: ["fish", "off", "phone", "enough"],
    pair: "v",
    tip: "'ph' always makes /f/ in English: phone, photo, graph.",
  },
  {
    ipa: "v",
    name: "V",
    type: "Fricative",
    voiced: true,
    spelling: "v, f (of)",
    mouth: "Same as /f/ but with voice — feel the vibration on your lip.",
    words: ["very", "love", "of"],
    pair: "f",
    tip: "The word 'of' is pronounced /ʌv/ — the f is voiced.",
  },
  {
    ipa: "θ",
    name: "TH (voiceless)",
    type: "Fricative",
    voiced: false,
    spelling: "th",
    mouth: "Tongue tip lightly between or behind upper teeth, air flows out.",
    words: ["think", "bath", "three", "both"],
    pair: "ð",
    tip: "One of the hardest sounds for non-native speakers. Tongue must touch teeth — not /t/ or /s/.",
  },
  {
    ipa: "ð",
    name: "TH (voiced)",
    type: "Fricative",
    voiced: true,
    spelling: "th",
    mouth: "Same as /θ/ but with voice — feel vibration.",
    words: ["the", "this", "that", "mother", "breathe"],
    pair: "θ",
    tip: "Function words (the, this, that, they, them) use voiced /ð/. Content words often use voiceless /θ/.",
  },
  {
    ipa: "s",
    name: "S",
    type: "Fricative",
    voiced: false,
    spelling: "s, ss, c, sc",
    mouth: "Tongue near ridge behind teeth, air creates a hiss.",
    words: ["sit", "pass", "city", "scene"],
    pair: "z",
    tip: "Plural -s and possessive -s are /s/ after voiceless sounds: cats, books, cups.",
  },
  {
    ipa: "z",
    name: "Z",
    type: "Fricative",
    voiced: true,
    spelling: "z, zz, s, x",
    mouth: "Same as /s/ but with voice.",
    words: ["zoo", "jazz", "is", "exact"],
    pair: "s",
    tip: "Plural -s and possessive -s are /z/ after voiced sounds: dogs, cars, trees.",
  },
  {
    ipa: "ʃ",
    name: "SH",
    type: "Fricative",
    voiced: false,
    spelling: "sh, ti, ci, ch, si",
    mouth: "Lips slightly rounded, tongue raised — a wide hiss.",
    words: ["she", "nation", "special", "chef", "mission"],
    pair: "ʒ",
    tip: "Very common in English endings: -tion, -sion, -cial, -tial all use /ʃ/.",
  },
  {
    ipa: "ʒ",
    name: "ZH",
    type: "Fricative",
    voiced: true,
    spelling: "si, ge, s",
    mouth: "Same as /ʃ/ but with voice.",
    words: ["measure", "genre", "vision", "beige"],
    pair: "ʃ",
    tip: "Rare in English — mainly in borrowed French words and -sion/-sure endings.",
  },
  {
    ipa: "tʃ",
    name: "CH",
    type: "Affricate",
    voiced: false,
    spelling: "ch, tch, t",
    mouth: "Start with /t/ then release into /ʃ/ — a combined sound.",
    words: ["chair", "watch", "nature"],
    pair: "dʒ",
    tip: "Don't separate into t+sh — it's one flowing sound.",
  },
  {
    ipa: "dʒ",
    name: "J",
    type: "Affricate",
    voiced: true,
    spelling: "j, g, dge, d",
    mouth: "Start with /d/ then release into /ʒ/.",
    words: ["jump", "gem", "bridge", "soldier"],
    pair: "tʃ",
    tip: "'g' before e/i/y is usually /dʒ/: gym, gem, giraffe. But: get, give = /g/.",
  },
  {
    ipa: "m",
    name: "M",
    type: "Nasal",
    voiced: true,
    spelling: "m, mm, mb",
    mouth: "Lips closed, air flows through the nose.",
    words: ["man", "summer", "lamb"],
    pair: null,
    tip: "Silent 'mb' at the end of words: lamb, comb, bomb, thumb.",
  },
  {
    ipa: "n",
    name: "N",
    type: "Nasal",
    voiced: true,
    spelling: "n, nn, kn, gn",
    mouth: "Tongue tip on ridge behind upper teeth, air through nose.",
    words: ["no", "dinner", "know", "gnome"],
    pair: null,
    tip: "Silent 'kn' at the start: know, knife, knock, knee.",
  },
  {
    ipa: "ŋ",
    name: "NG",
    type: "Nasal",
    voiced: true,
    spelling: "ng, n (before k/g)",
    mouth: "Back of tongue on soft palate, air through nose — no /g/ release.",
    words: ["sing", "ring", "think", "bank"],
    pair: null,
    tip: "No /g/ sound after -ng in most words: sing = /sɪŋ/ not /sɪŋg/. But: finger, angry do have /g/.",
  },
  {
    ipa: "l",
    name: "L",
    type: "Lateral",
    voiced: true,
    spelling: "l, ll",
    mouth: "Tongue tip on ridge, air flows around the sides.",
    words: ["light", "ball", "milk"],
    pair: null,
    tip: "Clear /l/ at start of syllables. Dark /l/ (tongue pulled back) at end: feel, ball, milk.",
  },
  {
    ipa: "r",
    name: "R",
    type: "Approximant",
    voiced: true,
    spelling: "r, rr, wr",
    mouth: "Tongue curls back, never touches the roof — lips slightly rounded.",
    words: ["red", "carry", "write"],
    pair: null,
    tip: "North American /r/ is 'rhotic' — always pronounced, even after vowels: car, bird, her.",
  },
  {
    ipa: "j",
    name: "Y",
    type: "Approximant",
    voiced: true,
    spelling: "y, i, j (in some words)",
    mouth: "Tongue high and forward, glides quickly to the next sound.",
    words: ["yes", "you", "beyond", "few (=fyoo)"],
    pair: null,
    tip: "Many words starting with 'u' use /j/: use = /juːz/, union = /juːniən/.",
  },
  {
    ipa: "w",
    name: "W",
    type: "Approximant",
    voiced: true,
    spelling: "w, wh, u (after q)",
    mouth: "Lips tightly rounded then release into the next vowel.",
    words: ["wet", "when", "quick"],
    pair: null,
    tip: "Silent 'w' in: write, wrap, wrist, wrong — and in 'who', 'whole'.",
  },
  {
    ipa: "h",
    name: "H",
    type: "Fricative",
    voiced: false,
    spelling: "h, wh",
    mouth: "Mouth open in position of next vowel, air rushes out.",
    words: ["hat", "who", "ahead"],
    pair: null,
    tip: "Silent 'h' in: hour, honest, heir, honour — and in unstressed 'him/her/have' mid-sentence.",
  },
];

export const STRESS_RULES = [
  {
    rule: "Two-syllable nouns & adjectives",
    pattern: "Stress on the FIRST syllable",
    examples: [
      { word: "PREsent", note: "noun/adjective" },
      { word: "TAble", note: "" },
      { word: "HAPpy", note: "" },
      { word: "CLEver", note: "" },
    ],
    tip: "Most two-syllable nouns and adjectives follow this pattern.",
  },
  {
    rule: "Two-syllable verbs",
    pattern: "Stress on the SECOND syllable",
    examples: [
      { word: "preSENT", note: "verb" },
      { word: "reLAX", note: "" },
      { word: "deCIDE", note: "" },
      { word: "beGIN", note: "" },
    ],
    tip: "Noun/verb pairs shift stress: REcord (noun) → reCORD (verb). PERmit → perMIT.",
  },
  {
    rule: "Words ending in -ic, -ical",
    pattern: "Stress on syllable BEFORE the suffix",
    examples: [
      { word: "photoGRAPHic", note: "" },
      { word: "econOMic", note: "" },
      { word: "gramMAtical", note: "" },
    ],
    tip: "",
  },
  {
    rule: "Words ending in -tion, -sion",
    pattern: "Stress on syllable BEFORE the suffix",
    examples: [
      { word: "inforMAtion", note: "" },
      { word: "commuNIcation", note: "" },
      { word: "deCIsion", note: "" },
    ],
    tip: "The -tion ending is always pronounced /ʃən/ — never /tiːɒn/.",
  },
  {
    rule: "Words ending in -ity, -ety, -ity",
    pattern: "Stress on syllable BEFORE the suffix",
    examples: [
      { word: "posSIbility", note: "" },
      { word: "comMUnity", note: "" },
      { word: "anxiEty", note: "" },
    ],
    tip: "",
  },
  {
    rule: "Compound nouns",
    pattern: "Stress on the FIRST word",
    examples: [
      { word: "BLACKbird", note: "vs. black BIRD (any black bird)" },
      { word: "GREENhouse", note: "" },
      { word: "AIRport", note: "" },
    ],
    tip: "Compound nouns have one primary stress on the first element. Noun phrases stress the second.",
  },
  {
    rule: "Prefixes",
    pattern: "Usually NO stress on the prefix",
    examples: [
      { word: "unHAPpy", note: "" },
      { word: "rePEAT", note: "" },
      { word: "disCOVer", note: "" },
    ],
    tip: "Exceptions: some prefixes carry stress in nouns: EX-wife, CO-worker.",
  },
];

export const CONNECTED_SPEECH = [
  {
    feature: "Linking",
    emoji: "🔗",
    description:
      "When a word ends in a consonant and the next begins with a vowel, they link together as if one word.",
    examples: [
      {
        phrase: "pick it up",
        linked: "pi-ki-tup",
        note: "consonant + vowel linking",
      },
      { phrase: "turn off", linked: "tur-noff", note: "" },
      { phrase: "an apple", linked: "a-napple", note: "" },
    ],
  },
  {
    feature: "Elision",
    emoji: "✂️",
    description:
      "Sounds are dropped in fast speech, especially /t/ and /d/ between consonants.",
    examples: [
      { phrase: "last night", linked: "las' night", note: "/t/ dropped" },
      { phrase: "next day", linked: "nex' day", note: "/t/ dropped" },
      { phrase: "hold on", linked: "hol' on", note: "/d/ dropped" },
    ],
  },
  {
    feature: "Assimilation",
    emoji: "🔄",
    description: "A sound changes to become more like a neighbouring sound.",
    examples: [
      { phrase: "ten pins", linked: "tem pins", note: "/n/ → /m/ before /p/" },
      { phrase: "good boy", linked: "goob boy", note: "/d/ → /b/ before /b/" },
      {
        phrase: "that case",
        linked: "thak case",
        note: "/t/ → /k/ before /k/",
      },
    ],
  },
  {
    feature: "Weak Forms",
    emoji: "🔉",
    description:
      "Function words are reduced to the schwa /ə/ in unstressed positions in natural speech.",
    examples: [
      { phrase: "can", linked: "/kən/", note: "strong: /kæn/, weak: /kən/" },
      {
        phrase: "and",
        linked: "/ənd/ or /ən/",
        note: "bread and butter → /brɛd ən ˈbʌtər/",
      },
      {
        phrase: "for",
        linked: "/fər/",
        note: "waiting for you → /ˈweɪtɪŋ fər juː/",
      },
    ],
  },
];

export const CONJ_GROUPS = [
  {
    category: "Coordinating Conjunctions",
    emoji: "🔗",
    color: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
    intro:
      "Join two independent clauses, words, or phrases of equal grammatical rank. Remember: FANBOYS.",
    comments: [
      "When and/but/or/so joins two complete sentences, use a comma before it. When they join only words, phrases, or parts inside one clause, skip the comma.",
      "Use a comma before 'yet' when it means 'but' joining two independent clauses, but don't use a comma when 'yet' means 'still' inside a sentence, and use a comma after it only when it starts a sentence for emphasis.",
    ],
    items: [
      {
        word: "For",
        meaning: "Gives a reason (formal, like 'because').",
        examples: [
          "She declined the job offer, for the commute was too long.",
          "He chose to take night classes, for it was the only schedule that worked.",
        ],
        tip: "Rarely used in modern spoken English — prefer 'because'.",
      },
      {
        word: "And",
        meaning: "Adds one idea to another.",
        examples: [
          "She updated her résumé and applied to several positions.",
          "The neighbourhood has good schools, affordable housing, and easy transit access.",
        ],
        tip: "Don't use a comma with 'and' when joining only two items.",
      },
      {
        word: "Nor",
        meaning: "Presents an additional negative alternative.",
        examples: [
          "He did not respond to the survey, nor did he attend the community meeting.",
          "The landlord neither fixed the heating nor reduced the rent.",
        ],
        tip: "Invert the subject and verb after 'nor': nor did she, nor was he.",
      },
      {
        word: "But",
        meaning: "Shows contrast or exception.",
        examples: [
          "I wanted to attend the information session, but I had a shift that evening.",
          "The transit system is extensive but often unreliable during peak hours.",
        ],
        tip: "Use a comma before 'but' when joining two full clauses.",
      },
      {
        word: "Or",
        meaning: "Presents an alternative or choice.",
        examples: [
          "You can submit the form online or visit the service centre in person.",
          "Should we schedule the meeting on Monday or Wednesday?",
        ],
        tip: "Can imply a warning: Renew your licence on time, or you will face a fine.",
      },
      {
        word: "Yet",
        meaning: "Shows contrast, similar to 'but' (more formal).",
        examples: [
          "The city has invested in new bike lanes, yet many residents still feel unsafe cycling.",
          "The apartment was small, yet it was well-located and affordable.",
        ],
        tip: "More formal and emphatic than 'but'.",
      },
      {
        word: "So",
        meaning: "Shows result or consequence.",
        examples: [
          "The last bus had already left, so she called a rideshare.",
          "He completed all the required documents, so his application was processed quickly.",
        ],
        tip: "Always use a comma before 'so' when joining two clauses.",
      },
    ],
  },
  {
    category: "Subordinating Conjunctions",
    emoji: "🔀",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    comments: [
      "If a subordinate clause comes first → use a comma : Before you sleep, do your homework.",
      "If it comes second → usually no comma: Do your homework before you sleep.",
    ],
    intro:
      "Introduce a dependent (subordinate) clause and connect it to an independent clause. They show relationships like time, cause, condition, and contrast.",
    items: [
      {
        word: "because",
        meaning: "Gives the reason for something.",
        examples: [
          "She chose to live downtown because it reduced her daily commute significantly.",
          "He requested a transfer because the noise level in the open office was affecting his productivity.",
        ],
        tip: "Do not start a sentence with 'because' in formal writing unless the independent clause follows.",
      },
      {
        word: "although / though / even though",
        meaning: "Shows unexpected contrast.",
        examples: [
          "Although the cost of living has risen, many families are choosing to stay in the city.",
          "She submitted the application on time, even though she had very little notice.",
        ],
        tip: "'Even though' is stronger and more emphatic than 'although'.",
      },
      {
        word: "while",
        meaning: "Simultaneous actions OR contrast.",
        examples: [
          "She reviewed the lease agreement while her husband unpacked the boxes.",
          "While I understand the policy, I believe it places an unfair burden on new employees.",
        ],
        tip: "Context determines meaning — time or contrast.",
      },
      {
        word: "if",
        meaning: "States a condition.",
        examples: [
          "If the city expands the transit network, more residents will leave their cars at home.",
          "Please contact the front desk if you require any assistance during your stay.",
        ],
        tip: "Use simple present (not future) in the 'if' clause: If she arrives, not if she will arrive.",
      },
      {
        word: "unless",
        meaning: "Except if; only if not.",
        examples: [
          "Unless the landlord addresses the mould issue, the tenant plans to contact the housing authority.",
          "Do not sign the contract unless you have read all the terms carefully.",
        ],
        tip: "Never use 'unless' with a negative verb: unless you don't → incorrect.",
      },
      {
        word: "when",
        meaning: "At the time that something happens.",
        examples: [
          "Please send me the meeting agenda when it is ready.",
          "When she moved to Vancouver, she was surprised by how expensive rental housing was.",
        ],
        tip: "Like 'if', use present tense in the 'when' clause for future events.",
      },
      {
        word: "before / after",
        meaning: "Shows time sequence.",
        examples: [
          "Review the employee handbook before your first day at the office.",
          "She felt much more settled after she found a reliable childcare provider.",
        ],
        tip: "The subordinate clause can come first or second — use a comma if it comes first.",
      },
      {
        word: "since",
        meaning: "From the time that; or because (formal).",
        examples: [
          "Since you have raised this concern, I am happy to clarify the process.",
          "Traffic in this area has worsened since the new shopping centre opened.",
        ],
        tip: "Can be ambiguous — 'since we moved' (time) vs 'since you insist' (reason). Context matters.",
      },
      {
        word: "until / till",
        meaning: "Up to the point in time when.",
        examples: [
          "Please wait until the supervisor returns before processing the request.",
          "She worked till late to finish the community newsletter.",
        ],
        tip: "'Till' is informal but correct. 'Til' is non-standard — avoid it.",
      },
      {
        word: "as soon as",
        meaning: "Immediately when something happens.",
        examples: [
          "Please call the building manager as soon as you notice any water damage.",
          "She updated her emergency contact information as soon as she received the HR email.",
        ],
        tip: "Emphasizes immediacy. Use present tense in the dependent clause.",
      },
      {
        word: "so that / in order that",
        meaning: "States the purpose or goal.",
        examples: [
          "The city redesigned the intersection so that pedestrians could cross more safely.",
          "He arrived early in order that he could introduce himself before the panel interview began.",
        ],
        tip: "'So that' is far more common in everyday English.",
      },
      {
        word: "as long as / provided that",
        meaning: "States a condition that must be met.",
        examples: [
          "You may work from home as long as you are available during core business hours.",
          "Provided that all documents are submitted on time, the application will be reviewed within two weeks.",
        ],
        tip: "More formal alternatives to 'if'.",
      },
      {
        word: "whereas / while",
        meaning: "Contrast between two facts.",
        examples: [
          "Renting offers flexibility, whereas owning a home builds long-term equity.",
          "Urban centres have abundant transit options, while rural communities often rely entirely on personal vehicles.",
        ],
        tip: "'Whereas' is more formal. Both highlight a direct contrast. When whereas / while = contrast between two ideas → comma before it When while = time → no comma",
      },
    ],
  },
  {
    category: "Correlative Conjunctions",
    emoji: "⚖️",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
    intro:
      "Work in pairs to connect two equal grammatical elements. The key rule: both parts must be followed by the same grammatical structure (parallel structure).",
    items: [
      {
        word: "both … and",
        meaning: "Adds two items together (inclusive).",
        examples: [
          "The new policy benefits both full-time employees and part-time contractors.",
          "Both the written test and the speaking component must be completed on the same day.",
        ],
        tip: "Verb agrees with plural: Both the cat and the dog are hungry.",
      },
      {
        word: "either … or",
        meaning: "Presents two alternatives (one or the other).",
        examples: [
          "You can either submit your documents by email or drop them off at the front desk.",
          "Either the manager or the team lead will contact you within 24 hours.",
        ],
        tip: "Verb agrees with the nearest subject: Either the students or the teacher is responsible.",
      },
      {
        word: "neither … nor",
        meaning: "Negates both options.",
        examples: [
          "Neither the noise complaint nor the parking issue was resolved after the building meeting.",
          "She found the new scheduling system neither user-friendly nor clearly explained.",
        ],
        tip: "Never use 'not' with 'neither…nor' — it's already negative.",
      },
      {
        word: "not only … but also",
        meaning: "Emphasizes that two things are true.",
        examples: [
          "The community centre not only offers fitness classes but also provides free language workshops.",
          "Not only did she complete the report ahead of schedule, but she also included a detailed recommendation.",
        ],
        tip: "When 'not only' starts a sentence, invert the subject and verb: Not only did she win, but she also broke the record.",
      },
      {
        word: "whether … or",
        meaning: "Presents two possibilities, often in indirect questions.",
        examples: [
          "I am unsure whether to request a deferral or reschedule the appointment entirely.",
          "Whether you choose to appeal the decision or accept it, please inform us by Friday.",
        ],
        tip: "Do not confuse with 'if' — 'whether…or' always implies two options.",
      },
      {
        word: "as … as",
        meaning: "Compares two equal things.",
        examples: [
          "The written response should be as detailed as the speaking task allows.",
          "Her second attempt at the test was as strong as her first, if not stronger.",
        ],
        tip: "Use subject pronoun after the second 'as' in formal writing: as tall as I (not me).",
      },
      {
        word: "no sooner … than",
        meaning: "Shows that one action happened immediately after another.",
        examples: [
          "No sooner had she submitted the online form than she received a confirmation email.",
          "No sooner did the doors open than the crowd began filing into the community hall.",
        ],
        tip: "Always invert subject and verb after 'no sooner': No sooner had I, not No sooner I had.",
      },
      {
        word: "the more … the more",
        meaning: "Shows proportional relationship between two things.",
        examples: [
          "The more you engage with English outside the classroom, the more natural it will feel.",
          "The clearer your written response, the more effectively your message will come across.",
        ],
        tip: "Both clauses use comparative adjectives or adverbs.",
      },
    ],
  },
  {
    category: "Conjunctive Adverbs",
    emoji: "🔄",
    color: "#5b21b6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    comments: [
      "Therefore and Consequently are interchangeable, but 'therefore' is more common in everyday and academic English, while 'consequently' is slightly more formal and emphasizes the resulting effect.",
    ],
    intro:
      "Act like conjunctions but are actually adverbs. They connect two independent clauses and must be preceded by a semicolon (or period) and followed by a comma.",
    items: [
      {
        word: "however",
        meaning: "Shows contrast or contradiction.",
        examples: [
          "The apartment was within budget; however, it was located far from public transit.",
          "I appreciate your concern; however, the decision has already been finalized.",
        ],
        tip: "Do not use a comma alone before 'however' — use a semicolon: ✗ She tried, however she failed.",
      },
      {
        word: "therefore",
        meaning: "Shows a logical result or conclusion.",
        examples: [
          "The registration deadline has passed; therefore, late submissions will not be accepted.",
          "Remote work reduces commute times; therefore, many employees report higher job satisfaction.",
        ],
        tip: "Very common in formal and academic writing.",
      },
      {
        word: "furthermore / moreover",
        meaning: "Adds an additional, stronger point.",
        examples: [
          "The program offers practical training; furthermore, graduates receive job placement support.",
          "The neighbourhood has excellent schools; moreover, property values have remained stable.",
        ],
        tip: "'Moreover' is slightly more formal than 'furthermore'.",
      },
      {
        word: "nevertheless / nonetheless",
        meaning: "Shows that something is true despite what was just said.",
        examples: [
          "The test format was unfamiliar; nevertheless, she managed her time well and finished all sections.",
          "The feedback was discouraging; nonetheless, he revised the email and resubmitted it.",
        ],
        tip: "Stronger concession than 'however' — implies overcoming an obstacle.",
      },
      {
        word: "consequently",
        meaning: "Shows a direct result or effect.",
        examples: [
          "The city failed to maintain the cycling infrastructure; consequently, many commuters returned to driving.",
          "She did not check the schedule in advance; consequently, she missed the registration window.",
        ],
        tip: "More formal than 'so'. Common in academic and formal writing.",
      },
      {
        word: "meanwhile",
        meaning: "Shows two things happening at the same time.",
        examples: [
          "The manager reviewed the client file; meanwhile, the assistant prepared the meeting room.",
          "She drafted her written response for the test; meanwhile, her study partner practised speaking aloud.",
        ],
        tip: "Signals simultaneous actions — similar to 'at the same time'.",
      },
      {
        word: "otherwise",
        meaning: "Shows what would happen if the condition is not met.",
        examples: [
          "Please confirm your appointment by Thursday; otherwise, your time slot will be given to another applicant.",
          "Back up your work regularly; otherwise, you risk losing your progress if the system crashes.",
        ],
        tip: "Similar to 'or else' — implies a warning or consequence.",
      },
      {
        word: "indeed",
        meaning: "Confirms or emphasizes a point strongly.",
        examples: [
          "The CELPIP test reflects real-life Canadian situations; indeed, most tasks are set in everyday workplace or community contexts.",
          "Clear organization is important in written tasks; indeed, a well-structured response often scores higher than a longer but disorganized one.",
        ],
        tip: "Can also appear mid-sentence for emphasis without a semicolon.",
      },
    ],
  },
  {
    category: "Common Traps",
    emoji: "⚠️",
    color: "#be185d",
    bg: "#fce7f3",
    border: "#fbcfe8",
    items: [
      {
        word: "because vs. because of",
        meaning:
          "BECAUSE = conjunction (followed by a clause). BECAUSE OF = preposition (followed by a noun).",
        examples: [
          "✓ She declined the offer because the salary was too low.",
          "✓ She declined the offer because of the low salary.",
          "✗ She declined the offer because of the salary was too low.",
        ],
        tip: "",
      },
      {
        word: "although vs. despite / in spite of",
        meaning:
          "ALTHOUGH = conjunction (clause follows). DESPITE / IN SPITE OF = preposition (noun or gerund follows).",
        examples: [
          "✓ Although the commute was long, she accepted the position.",
          "✓ Despite the long commute, she accepted the position.",
          "✗ Despite the commute was long, she accepted the position.",
        ],
        tip: "",
      },
      {
        word: "so vs. so that",
        meaning:
          "SO = result (coordinating conjunction). SO THAT = purpose (subordinating).",
        examples: [
          "✓ The office was fully booked, so she worked from home. (result)",
          "✓ She arrived early so that she could review her notes before the interview. (purpose)",
          "✗ The office was fully booked, so that she worked from home.",
        ],
        tip: "",
      },
      {
        word: "while vs. whereas",
        meaning:
          "Both show contrast. WHILE can also show time (simultaneous actions). WHEREAS is contrast only.",
        examples: [
          "✓ While she completed the writing task, her timer was running. (time)",
          "✓ Urban areas have many transit options, whereas rural communities have very few. (contrast)",
          "✓ While I see the benefits of remote work, I think in-person collaboration is still valuable. (contrast)",
        ],
        tip: "",
      },
      {
        word: "comma splice with however",
        meaning:
          "HOWEVER is not a coordinating conjunction — you cannot join two clauses with just a comma.",
        examples: [
          "✗ The policy seems fair, however it may be difficult to enforce.",
          "✓ The policy seems fair; however, it may be difficult to enforce.",
          "✓ The policy seems fair. However, it may be difficult to enforce.",
        ],
        tip: "",
      },
      {
        word: "unless vs. if not",
        meaning:
          "UNLESS = only if not. Never use 'unless' with a negative verb.",
        examples: [
          "✓ Unless you submit all required documents, your application will not be processed.",
          "✗ Unless you don't submit all required documents, your application will not be processed.",
          "✓ If you don't submit all required documents, your application will not be processed.",
        ],
        tip: "",
      },
      {
        word: "neither…nor with verb agreement",
        meaning: "Verb agrees with the subject closest to the verb.",
        examples: [
          "✓ Neither the supervisor nor the employees were informed about the policy change.",
          "✓ Neither the employees nor the supervisor was informed about the policy change.",
          "✗ Neither the supervisor nor the employees was informed about the policy change.",
        ],
        tip: "",
      },
      {
        word: "not only…but also — word order",
        meaning:
          "When 'not only' starts a sentence, the subject and auxiliary verb must be inverted.",
        examples: [
          "✓ Not only did the new transit line reduce travel times, but it also improved air quality in the city.",
          "✗ Not only the new transit line reduced travel times, but it also improved air quality.",
        ],
        tip: "",
      },
    ],
  },
];

export const GROUPS = [
  {
    category: "Types of Nouns",
    emoji: "🏷️",
    color: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
    intro:
      "A noun names a person, place, thing, or idea. There are several types, each with different rules for capitalization, pluralization, and article use.",
    items: [
      {
        word: "Common Noun",
        meaning:
          "A general name for a person, place, or thing. Not capitalized.",
        examples: ["city, teacher, book, car, idea"],
        tip: "Use 'a/an' or 'the' with singular common nouns.",
      },
      {
        word: "Proper Noun",
        meaning:
          "The specific name of a person, place, or organization. Always capitalized.",
        examples: ["Toronto, Dr. Smith, Google, Canada"],
        tip: "Never use 'a/an' with proper nouns: ✗ a Canada → ✓ Canada.",
      },
      {
        word: "Concrete Noun",
        meaning:
          "Something you can perceive with your senses — see, touch, hear, smell, or taste.",
        examples: ["table, rain, music, coffee, dog"],
        tip: "Can be countable or uncountable depending on the noun.",
      },
      {
        word: "Abstract Noun",
        meaning:
          "An idea, quality, feeling, or concept that cannot be physically touched.",
        examples: ["freedom, happiness, courage, knowledge, time"],
        tip: "Often uncountable: ✗ a happiness → ✓ happiness or a sense of happiness.",
      },
      {
        word: "Countable Noun",
        meaning:
          "Can be counted individually. Has both singular and plural forms.",
        examples: [
          "one book / two books",
          "a chair / three chairs",
          "an idea / many ideas",
        ],
        tip: "Use a/an with singular: a dog. Use numbers or many/few with plural.",
      },
      {
        word: "Uncountable Noun",
        meaning:
          "Cannot be counted individually. Has no plural form. Treated as singular.",
        examples: ["water, information, advice, furniture, luggage"],
        tip: "Never use a/an or a number directly: ✗ an advice → ✓ a piece of advice.",
      },
      {
        word: "Collective Noun",
        meaning: "Refers to a group of people or things as a single unit.",
        examples: ["team, committee, family, staff, audience"],
        tip: "In North American English, collective nouns take singular verbs: The team is ready.",
      },
      {
        word: "Compound Noun",
        meaning: "Made of two or more words that together name one thing.",
        examples: ["toothbrush, post office, mother-in-law, bus stop"],
        tip: "Pluralize the main noun: mothers-in-law, not mother-in-laws.",
      },
      {
        word: "Possessive Noun",
        meaning: "Shows ownership or relationship using an apostrophe + s.",
        examples: [
          "the teacher's desk",
          "Canada's economy",
          "the students' results",
        ],
        tip: "Singular: add 's. Plural ending in s: add only '. Plural not ending in s: add 's (children's).",
      },
    ],
  },
  {
    category: "Noun Pluralization Rules",
    emoji: "🔢",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    intro:
      "Most nouns form their plural by adding -s, but many follow special rules. Knowing these prevents common spelling and grammar errors.",
    items: [
      {
        word: "Regular: add -s",
        meaning: "Most nouns simply add -s.",
        examples: ["book → books", "car → cars", "idea → ideas"],
        tip: "",
      },
      {
        word: "Add -es (s, sh, ch, x, z endings)",
        meaning: "Nouns ending in s, sh, ch, x, or z add -es.",
        examples: [
          "bus → buses",
          "dish → dishes",
          "watch → watches",
          "box → boxes",
        ],
        tip: "These endings make an extra syllable when spoken.",
      },
      {
        word: "Consonant + y → -ies",
        meaning: "Nouns ending in consonant + y drop the y and add -ies.",
        examples: ["city → cities", "baby → babies", "story → stories"],
        tip: "Vowel + y just adds -s: day → days, key → keys.",
      },
      {
        word: "Nouns ending in -f or -fe",
        meaning: "Many change f/fe to v and add -es.",
        examples: ["leaf → leaves", "wife → wives", "knife → knives"],
        tip: "Exceptions: roof → roofs, belief → beliefs, chef → chefs.",
      },
      {
        word: "Irregular Plurals",
        meaning: "These plurals must be memorized — they follow no pattern.",
        examples: [
          "man → men",
          "child → children",
          "mouse → mice",
          "foot → feet",
          "tooth → teeth",
          "person → people",
        ],
        tip: "Never add -s to these: ✗ mans, ✗ childs, ✗ mouses.",
      },
      {
        word: "Same Singular & Plural",
        meaning: "Some nouns do not change form in the plural.",
        examples: [
          "sheep → sheep",
          "deer → deer",
          "fish → fish",
          "species → species",
        ],
        tip: "The verb must agree with context: One sheep is here. Three sheep are there.",
      },
      {
        word: "Latin/Greek origin nouns",
        meaning:
          "Some academic/scientific nouns retain their original plural forms.",
        examples: [
          "criterion → criteria",
          "phenomenon → phenomena",
          "analysis → analyses",
          "datum → data",
        ],
        tip: "'Data' is plural — use 'The data show', not 'The data shows' in formal writing.",
      },
    ],
  },
  {
    category: "Personal Pronouns",
    emoji: "👤",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
    intro:
      "Replace nouns to avoid repetition. Change form based on their role in the sentence: subject, object, or possessive.",
    items: [
      {
        word: "Subject Pronouns",
        meaning: "Used as the subject of a verb — the one doing the action.",
        examples: [
          "I, you, he, she, it, we, they",
          "She called me.",
          "They finished early.",
          "He and I went together.",
        ],
        tip: "Use subject pronouns after linking verbs in formal writing: It is I (not me).",
      },
      {
        word: "Object Pronouns",
        meaning:
          "Used as the object of a verb or preposition — the one receiving the action.",
        examples: [
          "me, you, him, her, it, us, them",
          "She called me.",
          "Give it to him.",
          "Between you and me…",
        ],
        tip: "✗ Between you and I → ✓ Between you and me. Prepositions take object pronouns.",
      },
      {
        word: "Possessive Pronouns",
        meaning: "Show ownership. Stand alone — never followed by a noun.",
        examples: [
          "mine, yours, his, hers, its, ours, theirs",
          "That book is mine.",
          "The mistake was theirs.",
        ],
        tip: "Don't confuse with possessive adjectives (my, your, his) which must precede a noun.",
      },
      {
        word: "Possessive Adjectives",
        meaning: "Show ownership but must be followed by a noun.",
        examples: [
          "my, your, his, her, its, our, their",
          "my book",
          "their results",
          "its colour",
        ],
        tip: "✗ The book is my → ✓ The book is mine. Use possessive pronoun when standing alone.",
      },
      {
        word: "Reflexive Pronouns",
        meaning:
          "Refer back to the subject. Used when subject and object are the same person, or for emphasis.",
        examples: [
          "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
          "She hurt herself.",
          "I did it myself.",
        ],
        tip: "✗ He gave it to myself → ✓ He gave it to me. Don't use reflexive as a plain object.",
      },
    ],
  },
  {
    category: "Other Pronoun Types",
    emoji: "♻️",
    color: "#5b21b6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    intro:
      "Beyond personal pronouns, English uses several other pronoun categories to refer to things, quantities, and relationships.",
    items: [
      {
        word: "Demonstrative Pronouns",
        meaning:
          "Point to specific nouns. Change based on distance and number.",
        examples: [
          "this (near, singular)",
          "that (far, singular)",
          "these (near, plural)",
          "those (far, plural)",
          "This is great. Those were difficult.",
        ],
        tip: "When followed by a noun, they become demonstrative adjectives: this book, those results.",
      },
      {
        word: "Relative Pronouns",
        meaning:
          "Introduce relative clauses and connect them to the noun they modify.",
        examples: [
          "who (people, subject)",
          "whom (people, object)",
          "whose (possession)",
          "which (things)",
          "that (people or things)",
          "The woman who called is here.",
        ],
        tip: "Use 'who' for people, 'which' for things. 'That' can be used for both in informal English.",
      },
      {
        word: "Indefinite Pronouns",
        meaning:
          "Refer to non-specific people or things. Many are always singular.",
        examples: [
          "everyone, someone, anyone, no one",
          "everything, something, nothing",
          "each, either, neither, one",
          "Everyone is ready. Nothing was said.",
        ],
        tip: "Singular indefinite pronouns take singular verbs: Everyone is (not are) responsible.",
      },
      {
        word: "Interrogative Pronouns",
        meaning: "Used to ask questions.",
        examples: [
          "who, whom, whose, which, what",
          "Who called?",
          "Whom did you meet?",
          "Which is correct?",
        ],
        tip: "Who = subject. Whom = object. Whom did you see? (you saw whom → object).",
      },
      {
        word: "Reciprocal Pronouns",
        meaning: "Express a mutual relationship between two or more people.",
        examples: [
          "each other (two people)",
          "one another (three or more)",
          "They helped each other.",
          "The team supported one another.",
        ],
        tip: "In modern English, 'each other' and 'one another' are often used interchangeably.",
      },
    ],
  },
  {
    category: "Common Traps",
    emoji: "⚠️",
    color: "#be185d",
    bg: "#fce7f3",
    border: "#fbcfe8",
    items: [
      {
        word: "its vs. it's",
        meaning:
          "ITS = possessive adjective (belonging to it). IT'S = contraction of 'it is' or 'it has'.",
        examples: [
          "✓ The dog wagged its tail.",
          "✓ It's a beautiful day. (= It is)",
          "✗ The dog wagged it's tail.",
        ],
        tip: "",
      },
      {
        word: "their / there / they're",
        meaning:
          "THEIR = possessive. THERE = place or existence. THEY'RE = they are.",
        examples: [
          "✓ Their results were excellent.",
          "✓ There is a problem.",
          "✓ They're working on it.",
        ],
        tip: "",
      },
      {
        word: "who vs. whom",
        meaning:
          "WHO = subject (doing the action). WHOM = object (receiving the action).",
        examples: [
          "✓ Who called? (subject)",
          "✓ Whom did you call? (object — you called whom)",
          "✗ Who did you give it to? → ✓ To whom did you give it?",
        ],
        tip: "",
      },
      {
        word: "Reflexive pronoun misuse",
        meaning:
          "Reflexive pronouns (myself, himself) cannot replace plain subject or object pronouns.",
        examples: [
          "✗ Please contact myself if you have questions.",
          "✓ Please contact me if you have questions.",
          "✓ I did it myself. (emphasis — correct)",
        ],
        tip: "",
      },
      {
        word: "Uncountable noun with a/an",
        meaning: "Uncountable nouns cannot be preceded by a/an directly.",
        examples: [
          "✗ an advice",
          "✓ a piece of advice",
          "✗ a furniture → ✓ a piece of furniture",
        ],
        tip: "",
      },
      {
        word: "Collective noun verb agreement",
        meaning:
          "In North American English, collective nouns take singular verbs.",
        examples: [
          "✓ The committee has decided. (not have)",
          "✓ The team is ready. (not are)",
          "✓ The staff was informed.",
        ],
        tip: "",
      },
      {
        word: "Pronoun-antecedent agreement",
        meaning:
          "A pronoun must agree in number and gender with the noun it replaces.",
        examples: [
          "✗ Each student must submit their assignment by Friday. (informal but accepted)",
          "✓ Each student must submit his or her assignment.",
          "✓ All students must submit their assignments.",
        ],
        tip: "",
      },
    ],
  },
];

export const VERB_TYPES = [
  {
    id: "action",
    name: "Action verb",
    cat: "function",
    def: "Expresses a physical or mental action — the subject actively does something.",
    examples: [
      "She <em>runs</em> every morning.",
      "He <em>decided</em> to quit.",
    ],
    overlaps: [
      {
        with: "transitive",
        desc: "Most action verbs are also transitive — the action passes to an object.",
        sentence: "She <em>kicked</em> the ball.",
      },
      {
        with: "intransitive",
        desc: "Some action verbs need no object at all.",
        sentence: "The baby <em>cried</em>.",
      },
      {
        with: "auxiliary",
        desc: '"Do" is both an action verb and an auxiliary.',
        sentence: "I <em>do</em> yoga. / I <em>do not</em> know.",
      },
    ],
    exclusive:
      "Action vs stative is often the sharpest distinction — most pure stative verbs (know, believe, own) cannot be action verbs.",
    spotlightVerb: "run",
    spotlightTags: ["action", "intransitive"],
  },
  {
    id: "linking",
    name: "Linking verb",
    cat: "function",
    def: "Connects the subject to a description (adjective or noun). Does not show action — describes a state.",
    examples: ["She <em>seems</em> tired.", "He <em>became</em> a doctor."],
    overlaps: [
      {
        with: "stative",
        desc: "Linking verbs are almost always stative — they describe a state, not an action.",
        sentence: "The soup <em>smells</em> delicious.",
      },
      {
        with: "action",
        desc: 'Verbs like "smell", "taste", "look" can be linking OR action depending on meaning.',
        sentence:
          "She <em>looked</em> sad. (linking) / She <em>looked</em> at me. (action)",
      },
    ],
    exclusive:
      'Linking verbs cannot be transitive — they never take a direct object. "She seems a doctor" needs "to be" in between.',
    spotlightVerb: "smell",
    spotlightTags: [
      "linking (linking use)",
      "action (action use)",
      "stative (linking use)",
    ],
  },
  {
    id: "auxiliary",
    name: "Auxiliary verb",
    cat: "function",
    def: "Helps the main verb express tense, voice, mood, or aspect. Always paired with another verb.",
    examples: [
      "She <em>is running</em>.",
      "He <em>has eaten</em>.",
      "I <em>did not know</em>.",
    ],
    overlaps: [
      {
        with: "modal",
        desc: "All modal verbs ARE auxiliary verbs — a subset of the auxiliary category.",
        sentence: "<em>Can</em> you help? / She <em>will</em> arrive.",
      },
      {
        with: "action",
        desc: '"Have", "do", "be" can each function as a full action verb OR as an auxiliary.',
        sentence:
          "I <em>have</em> a car. (action) / I <em>have</em> eaten. (auxiliary)",
      },
    ],
    exclusive:
      "When functioning as auxiliaries, these verbs have no independent meaning — they only modify the main verb.",
    spotlightVerb: "have",
    spotlightTags: [
      'action ("I have a car")',
      'auxiliary ("I have eaten")',
      'causative ("I had it fixed")',
    ],
  },
  {
    id: "modal",
    name: "Modal verb",
    cat: "special",
    def: "A subset of auxiliary verbs that express ability, possibility, permission, or obligation. Never change form.",
    examples: [
      "You <em>should</em> rest.",
      "She <em>might</em> come.",
      "He <em>must</em> leave.",
    ],
    overlaps: [
      {
        with: "auxiliary",
        desc: "Every modal IS an auxiliary — modal is a specific type within the auxiliary family.",
        sentence: "<em>Must</em> = auxiliary that expresses obligation.",
      },
    ],
    exclusive:
      'Modals are unique: they never take -s, -ed, or -ing. You cannot say "she cans swim" or "he musted go."',
    spotlightVerb: "can",
    spotlightTags: ["modal", "auxiliary"],
  },
  {
    id: "transitive",
    name: "Transitive verb",
    cat: "object",
    def: "Requires a direct object — the action passes from subject to something or someone.",
    examples: ["She <em>bought</em> a car.", "He <em>loves</em> music."],
    overlaps: [
      {
        with: "action",
        desc: "Most transitive verbs are also action verbs — the subject actively does something to the object.",
        sentence: "She <em>kicked</em> the ball.",
      },
      {
        with: "stative",
        desc: "Some stative verbs are also transitive — the subject holds a state toward an object.",
        sentence: "I <em>own</em> a house. (stative + transitive)",
      },
      {
        with: "causative",
        desc: "Causative verbs are always transitive — they need both an object and an action done to it.",
        sentence: "She <em>had</em> her hair <em>cut</em>.",
      },
    ],
    exclusive: null,
    spotlightVerb: "love",
    spotlightTags: ["transitive", "stative"],
  },
  {
    id: "intransitive",
    name: "Intransitive verb",
    cat: "object",
    def: "Does NOT take a direct object. The action stays with the subject.",
    examples: ["The baby <em>slept</em>.", "She <em>arrived</em> early."],
    overlaps: [
      {
        with: "action",
        desc: "Intransitive verbs are usually action verbs — the subject does something, just to no object.",
        sentence: "He <em>laughed</em>.",
      },
      {
        with: "linking",
        desc: '"Appear", "seem", "become" are intransitive linking verbs — they describe, not act.',
        sentence: "She <em>appears</em> happy.",
      },
    ],
    exclusive:
      'The transitive/intransitive divide is the most fluid — many verbs work both ways. "She runs" (intransitive) vs "she runs a company" (transitive).',
    spotlightVerb: "run",
    spotlightTags: [
      "action",
      'intransitive ("She runs")',
      'transitive ("She runs a company")',
    ],
  },
  {
    id: "stative",
    name: "Stative verb",
    cat: "state",
    def: "Describes a state, not an action. Usually not used in continuous tenses.",
    examples: [
      "I <em>know</em> the answer.",
      "She <em>believes</em> him.",
      "He <em>owns</em> a car.",
    ],
    overlaps: [
      {
        with: "linking",
        desc: "Stative verbs and linking verbs heavily overlap — both describe states rather than actions.",
        sentence: "The cake <em>tastes</em> sweet. (stative + linking)",
      },
      {
        with: "transitive",
        desc: "Many stative verbs are transitive — they hold a state toward an object.",
        sentence: "I <em>love</em> her. / She <em>wants</em> more.",
      },
      {
        with: "action",
        desc: "Some verbs switch between stative and action meaning — changing the meaning entirely.",
        sentence:
          "I <em>think</em> it is wrong. (stative) / I <em>am thinking</em> about it. (action)",
      },
    ],
    exclusive:
      'The one firm rule: stative verbs cannot use continuous tenses for their stative meaning. "I am knowing" is always wrong. But the same verb in action meaning can: "I am thinking hard."',
    spotlightVerb: "think",
    spotlightTags: [
      'stative ("I think it\'s true")',
      'action ("I am thinking about it")',
    ],
  },
  {
    id: "causative",
    name: "Causative verb",
    cat: "special",
    def: "Shows that the subject causes or arranges for something to happen, often via someone else.",
    examples: [
      "She <em>made</em> him apologize.",
      "I <em>got</em> my hair cut.",
      "He <em>had</em> it repaired.",
    ],
    overlaps: [
      {
        with: "transitive",
        desc: "Causative verbs are always transitive — they must have both an object and a following action.",
        sentence: "She <em>made</em> him leave.",
      },
      {
        with: "auxiliary",
        desc: '"Have" and "get" are commonly both auxiliaries and causatives depending on context.',
        sentence:
          "I <em>had</em> the car fixed. (causative) / I <em>had</em> eaten. (auxiliary)",
      },
      {
        with: "action",
        desc: "Causative verbs are action verbs — the subject is actively causing or arranging something.",
        sentence: "She <em>let</em> the children play outside.",
      },
    ],
    exclusive:
      'The causative meaning depends on structure, not just the verb. "Have" alone is not causative — it must be followed by object + past participle (had it fixed) or object + base verb (had him wait).',
    spotlightVerb: "have",
    spotlightTags: [
      'action ("I have a car")',
      'auxiliary ("I have eaten")',
      'causative ("I had it fixed")',
    ],
  },
];

export const PREP_GROUPS = [
  {
    category: "Place & Position",
    emoji: "📍",
    color: "#1e40af",
    bg: "#dbeafe",
    border: "#bfdbfe",
    items: [
      {
        prep: "at",
        rule: "Exact point or specific location.",
        examples: [
          "at the front desk",
          "at the community centre",
          "at 10 Main St",
        ],
      },
      {
        prep: "in",
        rule: "Inside an enclosed space, city, country, or large area.",
        examples: ["in the waiting room", "in Canada", "in the office"],
      },
      {
        prep: "on",
        rule: "Surface contact — on top of something.",
        examples: [
          "on the second floor",
          "on the notice board",
          "on the counter",
        ],
      },
      {
        prep: "above",
        rule: "Higher than, but not touching.",
        examples: ["above the average score", "above the shelf"],
      },
      {
        prep: "below",
        rule: "Lower than something, not touching.",
        examples: ["below the required level", "below the sign"],
      },
      {
        prep: "beside / next to",
        rule: "Directly at the side of something.",
        examples: ["beside the reception desk", "next to the transit station"],
      },
      {
        prep: "between",
        rule: "In the middle of two things.",
        examples: [
          "between the two candidates",
          "between the library and the mall",
        ],
      },
      {
        prep: "among",
        rule: "Surrounded by or within a group of three or more.",
        examples: ["among the applicants", "among the top scorers"],
      },
      {
        prep: "behind",
        rule: "At the back of something.",
        examples: ["behind the main building", "behind the information booth"],
      },
      {
        prep: "in front of",
        rule: "Facing the front of something.",
        examples: ["in front of the panel", "in front of the service counter"],
      },
      {
        prep: "under / beneath",
        rule: "Directly below and possibly touching.",
        examples: ["under the bridge", "beneath the surface"],
      },
      {
        prep: "opposite",
        rule: "Facing something, on the other side.",
        examples: [
          "opposite the city hall",
          "sitting opposite the interviewer",
        ],
      },
    ],
  },
  {
    category: "Time",
    emoji: "⏰",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    items: [
      {
        prep: "at",
        rule: "Exact time, holidays (general), night.",
        examples: ["at 9 am", "at noon", "at night"],
      },
      {
        prep: "in",
        rule: "Months, years, seasons, centuries, parts of day.",
        examples: ["in March", "in 2020", "in the morning"],
      },
      {
        prep: "on",
        rule: "Days and specific dates.",
        examples: ["on Monday", "on June 5th", "on the day of the test"],
      },
      {
        prep: "for",
        rule: "Duration — how long something lasts.",
        examples: ["for three hours", "for two years", "for the entire shift"],
      },
      {
        prep: "since",
        rule: "From a specific point in time up to now.",
        examples: ["since 2018", "since Monday", "since she joined the team"],
      },
      {
        prep: "during",
        rule: "Within a period or event (not measurable duration).",
        examples: [
          "during the interview",
          "during the lunch break",
          "during the test",
        ],
      },
      {
        prep: "by",
        rule: "No later than a deadline.",
        examples: ["by Friday", "by 5 pm", "by the end of the week"],
      },
      {
        prep: "until / till",
        rule: "Up to a point in time (continuous up to then).",
        examples: [
          "until the results are released",
          "till the end of the shift",
          "until she arrives",
        ],
      },
      {
        prep: "before",
        rule: "Earlier than a time or event.",
        examples: ["before the deadline", "before the interview begins"],
      },
      {
        prep: "after",
        rule: "Later than a time or event.",
        examples: ["after the speaking task", "after the orientation session"],
      },
      {
        prep: "within",
        rule: "Inside a time period — not exceeding it.",
        examples: ["within an hour", "within two business days"],
      },
      {
        prep: "ago",
        rule: "Measured back from now. Always follows the time expression.",
        examples: ["two days ago", "a year ago", "five minutes ago"],
      },
    ],
  },
  {
    category: "Direction & Movement",
    emoji: "🧭",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fde68a",
    items: [
      {
        prep: "to",
        rule: "Movement toward a destination.",
        examples: [
          "go to the service centre",
          "travel to a new city",
          "walk to the bus stop",
        ],
      },
      {
        prep: "into",
        rule: "Movement from outside to inside.",
        examples: ["walk into the exam room", "move into a new apartment"],
      },
      {
        prep: "out of",
        rule: "Movement from inside to outside.",
        examples: ["get out of the car", "step out of the office"],
      },
      {
        prep: "onto",
        rule: "Movement to a surface.",
        examples: ["step onto the platform", "upload a file onto the system"],
      },
      {
        prep: "off",
        rule: "Away from a surface or vehicle.",
        examples: ["get off the bus", "log off the computer"],
      },
      {
        prep: "through",
        rule: "From one side to the other, inside a space.",
        examples: [
          "walk through the terminal",
          "go through the security check",
        ],
      },
      {
        prep: "across",
        rule: "From one side to the opposite side (surface).",
        examples: ["walk across the street", "communicate across departments"],
      },
      {
        prep: "along",
        rule: "Following the length or path of something.",
        examples: ["walk along the waterfront", "jog along the trail"],
      },
      {
        prep: "towards",
        rule: "In the direction of (not necessarily reaching).",
        examples: ["walk towards the exit", "work towards a promotion"],
      },
      {
        prep: "away from",
        rule: "Moving in the opposite direction from something.",
        examples: [
          "move away from the city centre",
          "step away from the situation",
        ],
      },
      {
        prep: "past",
        rule: "Going beyond something without stopping.",
        examples: [
          "drive past the community centre",
          "walk past the transit hub",
        ],
      },
      {
        prep: "around",
        rule: "In a circular path or on all sides.",
        examples: [
          "walk around the neighbourhood",
          "look around the new office",
        ],
      },
    ],
  },
  {
    category: "Cause, Reason & Purpose",
    emoji: "🎯",
    color: "#5b21b6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    items: [
      {
        prep: "because of",
        rule: "Gives the reason for something (noun/noun phrase follows).",
        examples: [
          "absent because of illness",
          "delayed because of heavy traffic",
        ],
      },
      {
        prep: "due to",
        rule: "Formal equivalent of 'because of'. Used after 'be'.",
        examples: [
          "cancelled due to low registration",
          "successful due to thorough preparation",
        ],
      },
      {
        prep: "for",
        rule: "Purpose or intended use.",
        examples: [
          "studying for the test",
          "applying for a position",
          "a form for new residents",
        ],
      },
      {
        prep: "out of",
        rule: "Motivation or emotional reason.",
        examples: [
          "acted out of concern for the team",
          "spoke out of frustration",
        ],
      },
      {
        prep: "with",
        rule: "Cause expressed as an accompanying state.",
        examples: [
          "trembling with nerves before the speaking task",
          "beaming with pride after the results",
        ],
      },
      {
        prep: "from",
        rule: "Origin of a condition or state.",
        examples: [
          "suffering from burnout",
          "recovering from a difficult shift",
        ],
      },
    ],
  },
  {
    category: "Manner & Means",
    emoji: "⚙️",
    color: "#0f766e",
    bg: "#ccfbf1",
    border: "#5eead4",
    items: [
      {
        prep: "by",
        rule: "Method, means of transport, or agent in passive voice.",
        examples: ["by email", "by transit", "reviewed by the supervisor"],
      },
      {
        prep: "with",
        rule: "Using a tool or instrument.",
        examples: [
          "respond with a formal tone",
          "written with care",
          "pay with a debit card",
        ],
      },
      {
        prep: "without",
        rule: "In the absence of something.",
        examples: [
          "submitted without the required documents",
          "working without clear instructions",
        ],
      },
      {
        prep: "in",
        rule: "Language, manner, or medium.",
        examples: [
          "in English",
          "in writing",
          "respond in a professional tone",
        ],
      },
      {
        prep: "like",
        rule: "Similar to; in the same way as.",
        examples: [
          "writes like a native speaker",
          "communicates like a professional",
        ],
      },
      {
        prep: "according to",
        rule: "Based on a source or rule.",
        examples: [
          "according to the employee handbook",
          "according to the building policy",
        ],
      },
    ],
  },
  {
    category: "Common Traps",
    emoji: "⚠️",
    color: "#be185d",
    bg: "#fce7f3",
    border: "#fbcfe8",
    items: [
      {
        prep: "at vs. in vs. on (place)",
        rule: "AT = point (at the bus stop). IN = enclosed space (in the office). ON = surface (on the desk).",
        examples: [
          "She is at the front desk",
          "She is in the meeting room",
          "Her folder is on the counter",
        ],
      },
      {
        prep: "at vs. in vs. on (time)",
        rule: "AT = clock time and night. IN = month/year/season. ON = day/date.",
        examples: ["at 3 pm", "in July", "on Tuesday"],
      },
      {
        prep: "for vs. since",
        rule: "FOR = duration (a length of time). SINCE = start point (a moment in time).",
        examples: ["for two hours", "since 2019", "NOT: since two hours"],
      },
      {
        prep: "by vs. until",
        rule: "BY = deadline (action completed no later than). UNTIL = continuous action up to a point.",
        examples: [
          "Submit the form by Friday",
          "The office is open until Friday",
          "NOT: Submit the form until Friday",
        ],
      },
      {
        prep: "in vs. into",
        rule: "IN = location (static). INTO = movement toward inside.",
        examples: [
          "She is in the exam room",
          "She walked into the exam room",
          "NOT: She walked in the exam room",
        ],
      },
      {
        prep: "between vs. among",
        rule: "BETWEEN = two things. AMONG = three or more.",
        examples: [
          "between the two test sections",
          "among the four writing tasks",
          "NOT: among the two options",
        ],
      },
      {
        prep: "during vs. for",
        rule: "DURING = within an event/period (not measurable). FOR = measurable length of time.",
        examples: [
          "during the orientation session",
          "for an hour",
          "NOT: during an hour",
        ],
      },
      {
        prep: "to vs. towards",
        rule: "TO = reaching a destination. TOWARDS = direction, may not arrive.",
        examples: [
          "She walked to the registration desk (arrived)",
          "She walked towards the registration desk (direction only)",
        ],
      },
    ],
  },
];

export const CLAUSE_TYPES = [
  {
    name: "Independent Clause",
    badge: "Main",
    badgeColor: "#1e40af",
    badgeBg: "#dbeafe",
    definition:
      "A clause that can stand alone as a complete sentence. Has a subject and a verb.",
    examples: [
      {
        text: "She finished the project.",
        explanation:
          "'She' is the subject and 'finished' is the verb. This is a complete thought on its own.",
      },
      {
        text: "The results were impressive.",
        explanation:
          "'The results' is the subject and 'were' is the linking verb. Stands alone as a full sentence.",
      },
    ],
  },
  {
    name: "Dependent (Subordinate) Clause",
    badge: "Sub",
    badgeColor: "#166534",
    badgeBg: "#dcfce7",
    definition:
      "Cannot stand alone. Must be attached to an independent clause. Begins with a subordinating conjunction or relative pronoun.",
    examples: [
      {
        text: "Because she worked hard…",
        explanation:
          "'Because' is the subordinating conjunction. 'She' is the subject, 'worked' is the verb. Incomplete on its own — needs a main clause.",
      },
      {
        text: "…who called yesterday.",
        explanation:
          "'Who' is the relative pronoun acting as the subject, 'called' is the verb. This fragment must attach to a noun it describes.",
      },
      {
        text: "Although the weather was bad…",
        explanation:
          "'Although' is the subordinating conjunction. 'The weather' is the subject, 'was' is the verb. Leaves the reader waiting for the main clause.",
      },
    ],
  },
  {
    name: "Relative Clause",
    badge: "Rel",
    badgeColor: "#92400e",
    badgeBg: "#fef3c7",
    definition:
      "A dependent clause that modifies a noun, introduced by who, whom, whose, which, or that.",
    examples: [
      {
        text: "The man who called is here.",
        explanation:
          "'who called' is the relative clause — 'who' is the subject, 'called' is the verb. It modifies the noun 'man'.",
      },
      {
        text: "The book that I recommended is nice.",
        explanation:
          "'that I recommended' is the relative clause — 'I' is the subject, 'recommended' is the verb, and 'that' is the relative pronoun acting as the object.",
      },
      {
        text: "The city where she grew up is very far.",
        explanation:
          "'where she grew up' is the relative clause — 'she' is the subject, 'grew up' is the verb, and 'where' refers to the city (place).",
      },
    ],
  },
  {
    name: "Noun Clause",
    badge: "Noun",
    badgeColor: "#5b21b6",
    badgeBg: "#ede9fe",
    definition:
      "A dependent clause that functions as a noun — can be a subject, object, or complement.",
    examples: [
      {
        text: "What she said surprised me.",
        explanation:
          "'What she said' is the noun clause acting as the subject of the sentence. 'She' is the subject inside the clause, 'said' is the verb.",
      },
      {
        text: "I know that he is honest.",
        explanation:
          "'that he is honest' is the noun clause acting as the object of 'know'. 'He' is the subject, 'is' is the verb inside the clause.",
      },
      {
        text: "The question is whether we should go.",
        explanation:
          "'whether we should go' is the noun clause acting as the subject complement. 'We' is the subject, 'should go' is the verb phrase inside the clause.",
      },
    ],
  },
  {
    name: "Adverbial Clause",
    badge: "Adv",
    badgeColor: "#0f766e",
    badgeBg: "#ccfbf1",
    definition:
      "A dependent clause that functions as an adverb — tells when, where, how, why, or under what condition.",
    examples: [
      {
        text: "When the meeting ends, we'll debrief.",
        explanation:
          "'When the meeting ends' is the adverbial clause telling when. 'The meeting' is the subject, 'ends' is the verb. The comma separates it from the main clause.",
      },
      {
        text: "She smiled because she was happy.",
        explanation:
          "'because she was happy' is the adverbial clause telling why. 'She' is the subject, 'was' is the verb. No comma needed when the adverbial clause comes after the main clause.",
      },
      {
        text: "If you need help, ask.",
        explanation:
          "'If you need help' is the adverbial clause telling under what condition. 'You' is the subject, 'need' is the verb. The main clause 'ask' is an imperative.",
      },
    ],
  },
];

//---------- Verbs ------------------------

// ── DATA ──────────────────────────────────────────────────────────────

export const TENSES = [
  // ── Simple tenses ──────────────────────────────────────────────────────────
  {
    group: "Simple tenses",
    name: "Present simple",
    form: "V / V-s (he/she/it)",
    use: "Habits, general facts, schedules, and permanent situations.",
    signal: "always, usually, every day, never, often, generally",
    examples: [
      {
        task: "Writing Task 2",
        scenario:
          "Stating a general fact in an opinion essay about public transit",
        sentence:
          "Public transit <em>reduces</em> traffic congestion and lowers carbon emissions in dense urban areas.",
      },
      {
        task: "Speaking Task 7",
        scenario: "Expressing a general opinion about remote work",
        sentence:
          "Many employees <em>prefer</em> working from home because it <em>saves</em> them hours of commuting every week.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining a recurring problem in a complaint email to a landlord",
        sentence:
          "The heating system <em>stops</em> working every time the temperature <em>drops</em> below minus ten degrees.",
      },
    ],
  },
  {
    group: "Simple tenses",
    name: "Past simple",
    form: "V-ed (regular) / irregular form",
    use: "Completed actions at a specific time in the past.",
    signal: "yesterday, last week, in 2022, ago, at that time",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Describing a personal experience — a time you overcame a challenge",
        sentence:
          "When I first <em>arrived</em> in Canada, I <em>struggled</em> to understand the local accent, but I <em>joined</em> a language group and gradually <em>improved</em>.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining the background of a complaint email about a cancelled class",
        sentence:
          "I <em>registered</em> for the eight-week fitness program last month and <em>paid</em> the full fee in advance.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Describing a difficult situation you once handled — noise complaint from a neighbour",
        sentence:
          "My neighbour <em>knocked</em> on my door late at night and <em>asked</em> me to lower the volume, so I <em>apologised</em> immediately.",
      },
    ],
  },
  {
    group: "Simple tenses",
    name: "Future simple",
    form: "will + V",
    use: "Predictions, spontaneous decisions, promises, and offers.",
    signal: "tomorrow, next week, soon, I think, I believe",
    examples: [
      {
        task: "Speaking Task 4",
        scenario:
          "Making a prediction about what will happen if a park is converted into a parking lot",
        sentence:
          "If the city removes the green space, residents <em>will lose</em> their only outdoor recreational area, and property values <em>will likely drop</em>.",
      },
      {
        task: "Writing Task 1",
        scenario: "Making a promise or commitment at the end of a formal email",
        sentence:
          "I <em>will ensure</em> that the issue is resolved before the end of the week and <em>will send</em> you a confirmation once it is done.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Predicting the outcome of a policy in an opinion essay about education funding",
        sentence:
          "Without additional investment in teacher training, student performance <em>will continue</em> to decline in underfunded schools.",
      },
    ],
  },

  // ── Continuous tenses ──────────────────────────────────────────────────────
  {
    group: "Continuous tenses",
    name: "Present continuous",
    form: "am / is / are + V-ing",
    use: "Actions happening right now, temporary situations, or planned future arrangements.",
    signal: "now, at the moment, currently, this week, these days",
    examples: [
      {
        task: "Speaking Task 3",
        scenario:
          "Describing a scene in an image showing a busy community market",
        sentence:
          "In the image, vendors <em>are selling</em> fresh produce and customers <em>are browsing</em> the stalls along the street.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining an ongoing problem in an email to a property manager",
        sentence:
          "The water <em>is leaking</em> from the bathroom ceiling, and the damage <em>is spreading</em> to the wall beside the window.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Describing an unusual situation — construction starting unexpectedly outside your window",
        sentence:
          "Workers <em>are drilling</em> into the pavement directly outside my apartment, and the noise <em>is making</em> it impossible to concentrate.",
      },
    ],
  },
  {
    group: "Continuous tenses",
    name: "Past continuous",
    form: "was / were + V-ing",
    use: "An action in progress at a specific past time, or one action interrupted by another.",
    signal: "while, when, at that moment, at 3 pm yesterday",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Narrating a personal story — the moment you received important news",
        sentence:
          "I <em>was preparing</em> for a job interview when my phone rang and I found out I had already been offered the position.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Explaining a difficult situation involving a misunderstanding with a coworker",
        sentence:
          "I <em>was presenting</em> my report in the meeting when my colleague interrupted and questioned my data in front of everyone.",
      },
      {
        task: "Writing Task 1",
        scenario: "Providing context in an email about a delivery issue",
        sentence:
          "I <em>was waiting</em> at home all afternoon for the delivery, but the courier marked the package as undeliverable without attempting to ring the doorbell.",
      },
    ],
  },
  {
    group: "Continuous tenses",
    name: "Future continuous",
    form: "will be + V-ing",
    use: "An action that will be in progress at a specific future moment.",
    signal: "at this time tomorrow, by noon, next Friday at 3 pm",
    examples: [
      {
        task: "Speaking Task 5",
        scenario:
          "Explaining why you cannot attend an event while giving advice to a friend about scheduling",
        sentence:
          "I <em>will be travelling</em> to Ottawa for a work conference next weekend, so I <em>will not be able</em> to help you move.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Mentioning a future schedule conflict in a polite email requesting a reschedule",
        sentence:
          "On the day of the proposed meeting, I <em>will be attending</em> a mandatory training session at a different location.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Predicting ongoing societal change in an essay about technology and employment",
        sentence:
          "Within a decade, machines <em>will be performing</em> many of the routine tasks that currently require human workers in manufacturing and logistics.",
      },
    ],
  },

  // ── Perfect tenses ─────────────────────────────────────────────────────────
  {
    group: "Perfect tenses",
    name: "Present perfect",
    form: "have / has + past participle",
    use: "A past action with present relevance, life experience, or an action that started in the past and continues now.",
    signal: "just, already, yet, ever, never, since, for, recently, so far",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Establishing urgency in a complaint email about an unresolved maintenance issue",
        sentence:
          "I <em>have submitted</em> three maintenance requests over the past month, but the broken heating system <em>has not been repaired</em> yet.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Supporting an opinion about remote work by citing recent changes",
        sentence:
          "Many companies <em>have already adopted</em> hybrid work models and <em>have reported</em> higher employee satisfaction as a result.",
      },
      {
        task: "Speaking Task 2",
        scenario:
          "Introducing a personal experience question about travel or living abroad",
        sentence:
          "I <em>have lived</em> in three different countries over the past eight years, and each experience <em>has shaped</em> the way I see the world.",
      },
    ],
  },
  {
    group: "Perfect tenses",
    name: "Past perfect",
    form: "had + past participle",
    use: 'An action that was completed before another past action. The "further back" past.',
    signal: "before, after, already, by the time, when, once",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Telling a story about missing an opportunity — arriving late to a job interview",
        sentence:
          "By the time I arrived at the office, the hiring manager <em>had already interviewed</em> the other candidates and <em>had filled</em> the position.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Explaining the timeline of events in a complaint email about a defective product",
        sentence:
          "I contacted your customer service team only after I <em>had tried</em> every troubleshooting step listed in the product manual.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Describing how you resolved a conflict after a misunderstanding had already occurred",
        sentence:
          "I apologised to my colleague once I realised that she <em>had not received</em> my earlier message and <em>had been waiting</em> for me unnecessarily.",
      },
    ],
  },
  {
    group: "Perfect tenses",
    name: "Future perfect",
    form: "will have + past participle",
    use: "An action that will be completed before a specific point in the future.",
    signal: "by next week, by the time, before, by then",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Making a commitment in a formal email about resolving a complaint",
        sentence:
          "I assure you that our team <em>will have addressed</em> the issue and sent a replacement unit before the end of the business week.",
      },
      {
        task: "Writing Task 2",
        scenario:
          "Projecting a future outcome in an essay about urban housing policy",
        sentence:
          "By 2035, the city <em>will have exhausted</em> its available land for new construction if current development rates continue unchecked.",
      },
      {
        task: "Speaking Task 4",
        scenario:
          "Predicting a positive outcome if a community garden proposal is approved",
        sentence:
          "If the project receives funding this spring, volunteers <em>will have planted</em> over five hundred trees in the neighbourhood by the end of summer.",
      },
    ],
  },

  // ── Perfect continuous ─────────────────────────────────────────────────────
  {
    group: "Perfect continuous",
    name: "Present perfect continuous",
    form: "have / has been + V-ing",
    use: "An action that started in the past, is still ongoing, and emphasises duration or visible result.",
    signal: "for, since, how long, lately, recently, all day",
    examples: [
      {
        task: "Writing Task 1",
        scenario:
          "Emphasising how long a problem has been ongoing in a complaint email about noise",
        sentence:
          "My neighbour <em>has been playing</em> loud music past midnight for the past three weeks, and my sleep <em>has been suffering</em> as a result.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Advising a friend who has been struggling with workload and burnout",
        sentence:
          "It sounds like you <em>have been taking</em> on too many responsibilities without enough support, and that kind of pressure adds up over time.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Expressing an opinion about transit delays supported by recent personal experience",
        sentence:
          "Commuters <em>have been experiencing</em> serious delays on the main subway line for months, which suggests the infrastructure urgently needs investment.",
      },
    ],
  },
  {
    group: "Perfect continuous",
    name: "Past perfect continuous",
    form: "had been + V-ing",
    use: "An ongoing action that was in progress before another past event — emphasises duration up to a past point.",
    signal: "for, since, before, when, by the time",
    examples: [
      {
        task: "Speaking Task 2",
        scenario:
          "Describing a personal experience — finally getting a job after a long search",
        sentence:
          "I <em>had been applying</em> for positions for nearly six months before I finally received an offer from a company that matched my skills.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Providing context in a formal complaint email about a service provider",
        sentence:
          "I <em>had been waiting</em> for a technician for over four hours when I received a message saying the appointment had been cancelled without notice.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Explaining the background of a tense situation before you intervened",
        sentence:
          "The two colleagues <em>had been disagreeing</em> over the project timeline for weeks before I stepped in and suggested a compromise.",
      },
    ],
  },
  {
    group: "Perfect continuous",
    name: "Future perfect continuous",
    form: "will have been + V-ing",
    use: "Emphasises the duration of an action up to a specific future point. Formal and advanced.",
    signal: "by, for, by the time",
    examples: [
      {
        task: "Writing Task 2",
        scenario:
          "Making a long-term argument about climate policy in an opinion essay",
        sentence:
          "By 2050, governments <em>will have been ignoring</em> climate warnings for nearly a century, and the consequences <em>will be</em> irreversible.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Expressing a strong opinion about the need for transit reform using duration",
        sentence:
          "By the time the new subway line opens, commuters <em>will have been tolerating</em> these delays for over a decade with no meaningful improvement.",
      },
      {
        task: "Writing Task 1",
        scenario:
          "Emphasising duration in a formal letter requesting recognition or resolution",
        sentence:
          "By the end of this month, I <em>will have been renting</em> this unit for five years and have never once missed a payment or violated any terms.",
      },
    ],
  },
];

export const MODALS = [
  {
    modal: "can",
    negative: "cannot / can't",
    note: "Use 'can' for present ability, informal permission, or general possibility. Very common in CELPIP speaking tasks.",
    meanings: ["Ability (present)", "Permission (informal)", "Possibility"],
    examples: [
      {
        task: "Speaking Task 5",
        scenario:
          "Describing your own qualifications during a phone call about a job posting.",
        sentence: "I can work flexible hours and I can start immediately.",
      },
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing to a neighbour to offer help with a community event.",
        sentence:
          "I can bring extra chairs and I can help set up the hall before the event starts.",
      },
      {
        task: "Speaking Task 6",
        scenario: "Advising a friend on how to deal with a noisy neighbour.",
        sentence:
          "You can speak to the building manager — they can usually resolve these issues quickly.",
      },
    ],
  },
  {
    modal: "could",
    negative: "could not / couldn't",
    note: "Use 'could' for past ability, polite requests, or weak possibility. More tentative than 'can' — preferred in formal CELPIP writing.",
    meanings: ["Past ability", "Polite request", "Weak possibility"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Writing a formal email to a landlord requesting a repair.",
        sentence:
          "Could you please arrange for the heating system to be inspected before the weekend?",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Giving advice to someone who is stressed about a deadline at work.",
        sentence:
          "You could try breaking the project into smaller tasks — that could make it feel much more manageable.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Discussing options with a friend who is considering moving to a new city.",
        sentence:
          "You could look into renting first — that way you could get a feel for the neighbourhood before committing.",
      },
    ],
  },
  {
    modal: "may",
    negative: "may not",
    note: "Use 'may' for formal permission or 50/50 possibility. More formal than 'can' or 'might' — excellent in CELPIP writing tasks.",
    meanings: ["Formal permission", "Possibility"],
    examples: [
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Discussing the potential downsides of remote work in an opinion essay.",
        sentence:
          "Working from home may reduce collaboration among team members, which may negatively affect company culture over time.",
      },
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing to a manager requesting time off for a family obligation.",
        sentence:
          "I may need to take Friday afternoon off, as I have a family appointment that may run longer than expected.",
      },
      {
        task: "Speaking Task 8",
        scenario: "Expressing uncertainty about a community planning decision.",
        sentence:
          "The new transit line may benefit commuters in the east end, but it may also increase noise levels for nearby residents.",
      },
    ],
  },
  {
    modal: "might",
    negative: "might not",
    note: "Use 'might' for low probability or hesitant suggestions. Weaker than 'may' — useful when expressing doubt or exploring unlikely options.",
    meanings: ["Weak possibility (< 50%)"],
    examples: [
      {
        task: "Speaking Task 6",
        scenario:
          "Helping a friend decide whether to accept a job offer in another city.",
        sentence:
          "It might be worth visiting the city first — you might feel differently once you've seen the neighbourhood in person.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Acknowledging the other side of the argument about mandatory community service.",
        sentence:
          "While some students might resist at first, they might ultimately find the experience rewarding and career-building.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Advising a coworker who is unsure about raising a concern with their manager.",
        sentence:
          "You might want to send an email first — your manager might appreciate having time to think it over before a meeting.",
      },
    ],
  },
  {
    modal: "must",
    negative: "must not / mustn't",
    note: "Use 'must' for strong obligation or logical certainty. 'Must not' expresses prohibition. Common in formal writing and deduction contexts.",
    meanings: ["Strong obligation", "Logical deduction (certainty)"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Writing to a tenant about building rules after a complaint.",
        sentence:
          "All residents must ensure that noise levels are kept to a minimum after 10 PM, as per the building agreement.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Arguing that governments should take action on climate change.",
        sentence:
          "Governments must implement stricter emission regulations — the consequences of inaction must not be underestimated.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Discussing a candidate's qualifications while comparing two job applicants.",
        sentence:
          "She has three degrees and ten years of experience — she must be the strongest candidate we've seen this year.",
      },
    ],
  },
  {
    modal: "should",
    negative: "should not / shouldn't",
    note: "Use 'should' for advice, recommendations, and expectations. One of the most useful modals in CELPIP — natural in both speaking and writing.",
    meanings: ["Advice / recommendation", "Mild obligation", "Expectation"],
    examples: [
      {
        task: "Speaking Task 6",
        scenario:
          "Recommending a course of action to a friend dealing with a difficult coworker.",
        sentence:
          "You should speak to your supervisor about this — you shouldn't have to handle it on your own.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario: "Arguing in favour of public transportation investment.",
        sentence:
          "City councils should prioritize expanding bus and subway networks, as this should reduce traffic congestion significantly.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Discussing what a community centre should offer to attract young families.",
        sentence:
          "The centre should offer affordable childcare programs — that should encourage more families to use the facility regularly.",
      },
    ],
  },
  {
    modal: "will",
    negative: "will not / won't",
    note: "Use 'will' for future facts, promises, and spontaneous decisions. Essential for Writing Task 1 emails and Speaking Tasks involving future plans.",
    meanings: ["Future fact / prediction", "Promise", "Spontaneous decision"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario: "Confirming attendance at a work event in a reply email.",
        sentence:
          "I will attend the orientation session on Thursday and I will bring the completed forms as requested.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Making a commitment during a discussion about covering for a colleague.",
        sentence:
          "Don't worry — I will handle the client calls while she is away and I will keep everyone updated.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario: "Making a prediction about the future of online education.",
        sentence:
          "As technology continues to advance, online learning will become the primary mode of education for millions of students worldwide.",
      },
    ],
  },
  {
    modal: "would",
    negative: "would not / wouldn't",
    note: "Use 'would' for polite requests, conditional situations, and past habits. One of the most versatile and formal-sounding modals in English.",
    meanings: ["Polite request", "Conditional", "Past habit", "Wish"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing a formal complaint email to a property management company.",
        sentence:
          "I would appreciate a prompt response to this matter, as the situation has been ongoing for several weeks.",
      },
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Discussing what would happen if public transit were made free.",
        sentence:
          "If public transit were made free, more commuters would choose it over driving, which would reduce emissions city-wide.",
      },
      {
        task: "Speaking Task 7",
        scenario:
          "Giving advice to a friend who is unhappy at their current job.",
        sentence:
          "If I were in your position, I would update my resume now — I wouldn't wait until things get worse.",
      },
    ],
  },
  {
    modal: "shall",
    negative: "shall not / shan't",
    note: "Use 'shall' for formal offers, suggestions with I/we, and legal or official language. Less common in everyday speech but useful in formal CELPIP writing.",
    meanings: ["Formal future (I/we)", "Offer", "Suggestion"],
    examples: [
      {
        task: "Writing Task 1 (Email)",
        scenario:
          "Writing a formal email to a committee chair offering to lead a session.",
        sentence:
          "I shall prepare a full presentation for the board and shall ensure all materials are distributed in advance.",
      },
      {
        task: "Speaking Task 5",
        scenario:
          "Offering to take responsibility during a team discussion about an upcoming project.",
        sentence:
          "Shall I take the lead on the research portion? I can have a draft ready by Thursday.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Formally proposing a solution during a community meeting discussion.",
        sentence:
          "Shall we consider allocating part of the budget to green spaces? That might address several of the concerns raised.",
      },
    ],
  },
  {
    modal: "ought to",
    negative: "ought not to",
    note: "Use 'ought to' as a more formal or moral alternative to 'should'. Slightly stronger — implies a duty or expectation based on reason or ethics.",
    meanings: ["Moral duty / advice"],
    examples: [
      {
        task: "Writing Task 2 (Opinion Essay)",
        scenario:
          "Arguing that employers have a responsibility to support employee mental health.",
        sentence:
          "Companies ought to provide mental health resources for their staff — employees ought not to feel that seeking help will affect their careers.",
      },
      {
        task: "Speaking Task 6",
        scenario:
          "Advising a friend who witnessed workplace misconduct about what to do.",
        sentence:
          "You really ought to report what you saw — staying silent ought not to be seen as the safer option here.",
      },
      {
        task: "Speaking Task 8",
        scenario:
          "Discussing responsibilities of local government regarding aging infrastructure.",
        sentence:
          "The city council ought to address these road conditions before winter — residents ought to be able to expect safe streets year-round.",
      },
    ],
  },
];

export const COMPLEX_SENTENCES = [
  // ── COMPOUND SENTENCES (10) ──────────────────────────────────────────
  {
    type: "compound",
    emoji: "📧",
    scenario:
      "CELPIP Writing Task 1 — Emailing a landlord about a broken heater in winter",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "The heating system stopped working on Monday evening.",
        thought:
          "IC1 — I state the problem clearly with a time marker. This is a complete fact the landlord needs.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "the temperature inside the apartment has dropped significantly.",
        thought:
          "IC2 — I explain the consequence at home. Both ideas are equally important to establish urgency.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" connects two related facts in sequence. The broken heater caused the temperature drop — "and" links them naturally.',
      },
    ],
    final:
      "The heating system stopped working on Monday evening, <strong>and</strong> the temperature inside the apartment has dropped significantly.",
    tip: 'Useful for <strong>Writing Task 1 (email)</strong>. In complaint emails, compound sentences with "and" let you state the problem AND its impact in one professional sentence — examiners reward clear problem framing in the opening lines.',
  },
  {
    type: "compound",
    emoji: "🏙️",
    scenario:
      "CELPIP Speaking Task 2 — Talking about a Personal Experience: Describing changes in your old neighbourhood over time",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Several new restaurants and cafés have opened along the main street.",
        thought:
          "IC1 — a specific, observable change from a past memory. I can visualize and describe it clearly.",
      },
      {
        label: "Simple clause 2",
        sentence: "the area has become much more vibrant and lively.",
        thought:
          "IC2 — the overall effect of those changes. A natural result worth adding.",
      },
      {
        label: "Choose connector",
        sentence: "so",
        thought:
          '"So" signals that IC2 is the result of IC1. New openings → vibrancy. This cause-effect relationship sounds analytical and fluent.',
      },
    ],
    final:
      "Several new restaurants and cafés have opened along the main street, <strong>so</strong> the area has become much more vibrant and lively.",
    tip: 'Useful for <strong>Speaking Task 2 (Personal Experience)</strong>. Using "so" to show cause and effect moves your past narrative beyond simple description into reflective analysis — a key differentiator between CLB 7 and CLB 9+ responses.',
  },
  {
    type: "compound",
    emoji: "🤝",
    scenario:
      "CELPIP Speaking Task 1 — Giving Advice to a friend who got a poor performance review at work",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "You should speak with your manager privately to understand the feedback.",
        thought:
          "IC1 — the first piece of advice. Direct, actionable, complete.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "you could ask a trusted colleague to help you identify areas for improvement.",
        thought:
          "IC2 — a second option. These are two equally valid suggestions.",
      },
      {
        label: "Choose connector",
        sentence: "or",
        thought:
          '"Or" presents IC2 as an alternative to IC1. I am giving two options, not forcing one solution — this sounds considerate and helpful.',
      },
    ],
    final:
      "You should speak with your manager privately to understand the feedback, <strong>or</strong> you could ask a trusted colleague to help you identify areas for improvement.",
    tip: 'Useful for <strong>Speaking Task 1 (Giving Advice)</strong>. Offering alternative solutions with "or" shows flexibility and empathy — both qualities that score exceptionally well on Task Fulfillment and Coherence criteria.',
  },
  {
    type: "compound",
    emoji: "🌆",
    scenario:
      "CELPIP Writing Task 2 — Opinion essay: Should cities invest in public transit or road expansion?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Expanding road infrastructure may reduce congestion in the short term.",
        thought:
          "IC1 — I acknowledge the opposing side fairly. This shows balanced thinking.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it does not address the long-term environmental consequences of increased car use.",
        thought: "IC2 — my counter-argument. I am pivoting to my position.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" is perfect for acknowledging a point and then refuting it. It\'s the most common connector in academic argument for this purpose.',
      },
    ],
    final:
      "Expanding road infrastructure may reduce congestion in the short term, <strong>but</strong> it does not address the long-term environmental consequences of increased car use.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. The concede-then-counter pattern with "but" is a high-scoring move — it shows you can acknowledge the other option before defending your own choice.',
  },
  {
    type: "compound",
    emoji: "📞",
    scenario:
      "CELPIP Speaking Task 6 — Dealing with a Difficult Situation: Calling a medical clinic to reschedule a last-minute appointment",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "I have an appointment scheduled for Thursday at 2 pm.",
        thought:
          "IC1 — I identify the appointment clearly. The receptionist needs context first.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "I am afraid I will not be able to make it due to an urgent work commitment.",
        thought:
          "IC2 — I explain why I need to break the commitment. Polite and specific.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" signals the contrast: I have the appointment, BUT I cannot attend. It\'s natural and polite in spoken English.',
      },
    ],
    final:
      "I have an appointment scheduled for Thursday at 2 pm, <strong>but</strong> I am afraid I will not be able to make it due to an urgent work commitment.",
    tip: "Useful for <strong>Speaking Task 6 (Dealing with a Difficult Situation)</strong>. This context-then-problem compound structure sets up an official concession beautifully before you offer alternatives to resolve the conflict.",
  },
  {
    type: "compound",
    emoji: "🏫",
    scenario:
      "CELPIP Writing Task 2 — Should schools replace textbooks with tablets?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Tablets give students access to a vast range of updated educational resources.",
        thought: "IC1 — a clear benefit supporting one side of the argument.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "many schools in lower-income communities cannot afford to provide them for every student.",
        thought:
          "IC2 — a real practical limitation. Adding this makes the argument nuanced.",
      },
      {
        label: "Choose connector",
        sentence: "yet",
        thought:
          '"Yet" is like "but" but more formal — ideal for academic writing. It signals a surprising or important counterpoint.',
      },
    ],
    final:
      "Tablets give students access to a vast range of updated educational resources, <strong>yet</strong> many schools in lower-income communities cannot afford to provide them for every student.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. Replacing "but" with "yet" raises your vocabulary register instantly — a practical swap that signals writing maturity and can push your Lexical Range score from CLB 7 to CLB 9.',
  },
  {
    type: "compound",
    emoji: "🧳",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Working from home vs. working in a corporate office",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Working from home offers greater flexibility and reduces commute time.",
        thought:
          "IC1 — I state the main benefit of my preferred option clearly.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it can also lead to feelings of isolation and reduced team collaboration.",
        thought:
          "IC2 — I acknowledge a downside. Showing balance in Speaking Task 7 earns higher marks.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" pivots from my positive claim to a concession. I am not ignoring the other side — I am showing I have thought about it.',
      },
    ],
    final:
      "Working from home offers greater flexibility and reduces commute time, <strong>but</strong> it can also lead to feelings of isolation and reduced team collaboration.",
    tip: "Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. Showing both sides of a debate before landing on your core position fulfills the Coherence/Content criteria — it signals a mature, analytical thinker under pressure.",
  },
  {
    type: "compound",
    emoji: "🛒",
    scenario:
      "CELPIP Writing Task 1 — Email to a store about a defective product received online",
    steps: [
      {
        label: "Simple clause 1",
        sentence: "I ordered a blender from your website three weeks ago.",
        thought: "IC1 — context. Time and action are both clear.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "it arrived with a cracked base and does not function properly.",
        thought:
          "IC2 — the problem. Both facts together form the complaint — one without the other is incomplete.",
      },
      {
        label: "Choose connector",
        sentence: "but",
        thought:
          '"But" contrasts the expectation (a working product) with the reality (a defective one). Natural for complaints.',
      },
    ],
    final:
      "I ordered a blender from your website three weeks ago, <strong>but</strong> it arrived with a cracked base and does not function properly.",
    tip: "Useful for <strong>Writing Task 1 (formal complaint email)</strong>. This two-part compound structure — context + problem — is the ideal opening sentence for any complaint email. Examiners look for clear purpose in the first two lines; this delivers it efficiently.",
  },
  {
    type: "compound",
    emoji: "🌳",
    scenario:
      "CELPIP Writing Task 2 — Should city parks be converted into housing developments?",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "Green spaces provide residents with vital areas for recreation and mental well-being.",
        thought:
          "IC1 — a strong benefit of keeping parks. I want to now add a counterpoint the opposition might use.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "the city is facing a severe housing shortage that cannot be ignored.",
        thought:
          "IC2 — the reality of the opposing argument. I'm being fair before making my case.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" here doesn\'t contrast — it adds. I am saying both things are true simultaneously, which makes the dilemma feel real.',
      },
    ],
    final:
      "Green spaces provide residents with vital areas for recreation and mental well-being, <strong>and</strong> the city is facing a severe housing shortage that cannot be ignored.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Using "and" to present a genuine tension — rather than taking a side immediately — is a sophisticated setup that shows examiners you understand the full complexity of the issue before committing to your position.',
  },
  {
    type: "compound",
    emoji: "👩‍⚕️",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Proposing a solution to reduce wait times at a community health clinic",
    steps: [
      {
        label: "Simple clause 1",
        sentence:
          "The clinic could introduce an online booking system for routine appointments.",
        thought: "IC1 — a concrete solution proposal. Clear and practical.",
      },
      {
        label: "Simple clause 2",
        sentence:
          "this would significantly reduce the number of walk-in patients during peak hours.",
        thought:
          "IC2 — the expected benefit of the solution. Together, solution + impact = a complete proposal.",
      },
      {
        label: "Choose connector",
        sentence: "and",
        thought:
          '"And" links the solution to its benefit. This is the most natural connector when adding a positive consequence to a positive suggestion.',
      },
    ],
    final:
      "The clinic could introduce an online booking system for routine appointments, <strong>and</strong> this would significantly reduce the number of walk-in patients during peak hours.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. The solution + "and" + benefit formula is the most efficient structure for any policy proposal response — it answers both "what" and "why" in one fluent sentence within your 90-second limit.',
  },
  // ── COMPLEX SENTENCES (10) ──────────────────────────────────────────
  {
    type: "complex",
    emoji: "✉️",
    scenario:
      "CELPIP Writing Task 1 — Requesting a deadline extension from a professor",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "I am writing to request a brief extension on the assignment deadline.",
        thought:
          "IC — the main purpose of my email. Clear and direct. But I want to explain WHY I need it.",
      },
      {
        label: "Dependent clause",
        sentence:
          "because I have been dealing with a family emergency this week",
        thought:
          'DC — the reason. It cannot stand alone — it depends on the IC to give it purpose. "Because" introduces the explanation.',
      },
      {
        label: "Choose connector",
        sentence: "because",
        thought:
          '"Because" answers "why?" It makes the DC subordinate — the reason supports the request, it isn\'t the main message.',
      },
    ],
    final:
      "I am writing to request a brief extension on the assignment deadline <strong>because</strong> I have been dealing with a family emergency this week.",
    tip: "Useful for <strong>Writing Task 1 (formal or semi-formal email)</strong>. Leading with your purpose (IC) before your reason (because + DC) is standard professional email structure. Examiners for Task 1 specifically assess whether your email purpose is clear within the first sentence — this pattern guarantees it.",
  },
  {
    type: "complex",
    emoji: "🏙️",
    scenario:
      "CELPIP Writing Task 2 — Arguing that cities should invest in cycling infrastructure",
    steps: [
      {
        label: "Independent clause",
        sentence: "Urban air quality would improve dramatically.",
        thought:
          "IC — my main claim. It's a strong, confident statement. Now I want to make it conditional.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if more residents chose cycling over driving for short distances",
        thought:
          'DC — the condition under which IC is true. "If" creates a first conditional — realistic and possible.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" creates a conditional relationship. The improvement (IC) depends on the behaviour change (DC). This is persuasive writing logic.',
      },
    ],
    final:
      "Urban air quality would improve dramatically <strong>if</strong> more residents chose cycling over driving for short distances.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Second conditional sentences ("would… if…") are one of the most powerful structures in CELPIP writing — they make your argument sound logical and forward-thinking rather than purely opinion-based.',
  },
  {
    type: "complex",
    emoji: "🗣️",
    scenario:
      "CELPIP Speaking Task 4 — Making Predictions: Anticipating how people will react to construction noise near a school classroom",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "The school board will likely ask to reschedule noisy construction work for after school hours.",
        thought:
          "IC — my prediction. Direct, clear, stands alone based on what I see. I want to add why it will happen.",
      },
      {
        label: "Dependent clause",
        sentence:
          "so that students can concentrate during examinations and important lessons",
        thought:
          'DC — purpose clause. "So that" introduces the logic for the prediction. It depends on the IC.',
      },
      {
        label: "Choose connector",
        sentence: "so that",
        thought:
          '"So that" = purpose. I am not just saying what will happen — I am saying WHY based on the visual context, which makes the prediction stronger.',
      },
    ],
    final:
      "The school board will likely ask to reschedule noisy construction work for after school hours <strong>so that</strong> students can concentrate during examinations and important lessons.",
    tip: 'Useful for <strong>Speaking Task 4 (Making Predictions)</strong>. "So that" + modal verb is a purpose clause that signals sophisticated grammar — it connects a visual trend to a logical consequence, boosting your Content/Coherence score.',
  },
  {
    type: "complex",
    emoji: "💼",
    scenario:
      "CELPIP Speaking Task 5 — Comparing and Persuading: Advising a colleague why your chosen business layout is safer",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "We should test our service on a smaller focus group using my option first.",
        thought:
          "IC — structured persuasion. Suggesting a compromise layout strategy. I want to add a timeline condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "before we make any final commitments to the management about the floor plan",
        thought:
          'DC — a time clause. "Before" tells them WHEN to test. This makes the argument feel protective and analytical.',
      },
      {
        label: "Choose connector",
        sentence: "before",
        thought:
          '"Before" subordinates the final decision to the safer testing phase. It implies a strategic process, which sounds professional.',
      },
    ],
    final:
      "We should test our service on a smaller focus group using my option first <strong>before</strong> we make any final commitments to the management about the floor plan.",
    tip: 'Useful for <strong>Speaking Task 5 (Comparing and Persuading)</strong>. Sequencing your persuasive arguments chronologically with "before" signals structural control, helping you break down complex choices cleanly in under 60 seconds.',
  },
  {
    type: "complex",
    emoji: "🏥",
    scenario:
      "CELPIP Writing Task 2 — Should governments fund preventive healthcare or treatment?",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Governments would spend significantly less on treating chronic diseases.",
        thought:
          "IC — a key claim in my argument. Complete on its own. But I need to add the condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if they invested more heavily in preventive health education and community programs",
        thought:
          'DC — the condition. My IC is a consequence of this investment. "If" makes it a conditional argument.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" creates a second conditional here (would + if + past) — a hypothetical but realistic policy scenario. Perfect for essay arguments.',
      },
    ],
    final:
      "Governments would spend significantly less on treating chronic diseases <strong>if</strong> they invested more heavily in preventive health education and community programs.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. The second conditional ("would… if… past tense") is the go-to structure for policy arguments in Task 2 — it frames your chosen option as the logical solution to a real problem, which is exactly the reasoning pattern examiners reward at CLB 9+.',
  },
  {
    type: "complex",
    emoji: "🧒",
    scenario:
      "CELPIP Speaking Task 2 — Talking about a Personal Experience: Relating a meaningful childhood event",
    steps: [
      {
        label: "Independent clause",
        sentence: "I remember feeling incredibly nervous.",
        thought:
          "IC — a personal emotional memory. Short and vivid. I want to add WHEN this happened to give context.",
      },
      {
        label: "Dependent clause",
        sentence:
          "when I performed in my first school play at the age of seven",
        thought:
          'DC — a time clause. "When" pins the feeling to a specific moment. It depends on IC to make full sense.',
      },
      {
        label: "Choose connector",
        sentence: "when",
        thought:
          '"When" connects the emotion (IC) to the specific event (DC). It creates a vivid, story-like quality that sounds natural in spoken English.',
      },
    ],
    final:
      "I remember feeling incredibly nervous <strong>when</strong> I performed in my first school play at the age of seven.",
    tip: 'Useful for <strong>Speaking Task 2 (Talking about a Personal Experience)</strong>. "When" clauses instantly create a clear narrative arc — they anchor an emotion to a specific historical milestone, keeping your story well-paced.',
  },
  {
    type: "complex",
    emoji: "🌐",
    scenario:
      "CELPIP Writing Task 2 — Should social media companies be regulated by governments?",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Social media platforms often fail to adequately protect users' personal data.",
        thought:
          "IC — a claim that supports regulation. I want to add context — this is especially true in one situation.",
      },
      {
        label: "Dependent clause",
        sentence:
          "although many of them claim to have strict privacy policies in place",
        thought:
          'DC — a concession. "Although" shows I am aware of the counter-argument. This makes my IC stronger by contrast.',
      },
      {
        label: "Choose connector",
        sentence: "although",
        thought:
          '"Although" signals: I know the other side\'s argument — and yet my claim still stands. This concede-then-argue structure is a top essay technique.',
      },
    ],
    final:
      "Social media platforms often fail to adequately protect users' personal data, <strong>although</strong> many of them claim to have strict privacy policies in place.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong> and <strong>Speaking Task 7 (Expressing Opinions)</strong>. Placing "although" after your main claim (IC first, concession second) keeps your position dominant. This is more persuasive than leading with the concession — your argument lands first and the counter-argument is immediately weakened.',
  },
  {
    type: "complex",
    emoji: "📬",
    scenario:
      "CELPIP Writing Task 1 — Email to a community centre requesting a refund for a cancelled fitness class",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "I would like to request a full refund for the eight-week yoga program I registered for.",
        thought:
          "IC — the request is clear and polite. Now I need to explain the reason.",
      },
      {
        label: "Dependent clause",
        sentence:
          "since the program was cancelled without prior notice on your part",
        thought:
          'DC — "since" here means "because" (causal). It gives the reason for the refund request and assigns responsibility professionally.',
      },
      {
        label: "Choose connector",
        sentence: "since",
        thought:
          '"Since" (causal) is slightly more formal than "because." It implies the reason is known and undeniable — a stronger tone for a legitimate complaint.',
      },
    ],
    final:
      "I would like to request a full refund for the eight-week yoga program I registered for, <strong>since</strong> the program was cancelled without prior notice on your part.",
    tip: 'Useful for <strong>Writing Task 1 (formal complaint or request email)</strong>. Swapping "because" for causal "since" is a quick vocabulary upgrade that raises your Lexical Range score. It also sounds more assertive — implying the reason is self-evident and the request is therefore undeniable.',
  },
  {
    type: "complex",
    emoji: "🚌",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Recommending structural upgrades to a transit layout",
    steps: [
      {
        label: "Independent clause",
        sentence: "More residents would use public transit regularly.",
        thought:
          "IC — a confident prediction. My argument is: usage would go up. But this needs a condition.",
      },
      {
        label: "Dependent clause",
        sentence:
          "if bus routes were expanded to reach suburban neighbourhoods that are currently underserved",
        thought:
          'DC — the condition. "If" + past tense = second conditional recommendation. This is the change I am proposing.',
      },
      {
        label: "Choose connector",
        sentence: "if",
        thought:
          '"If" makes this a policy recommendation: I am saying what WOULD happen if a specific change were made. It\'s persuasive and structured.',
      },
    ],
    final:
      "More residents would use public transit regularly <strong>if</strong> bus routes were expanded to reach suburban neighbourhoods that are currently underserved.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. Second conditional recommendations ("would… if… were") are highly effective for abstract, opinion-based tasks — they structure a policy alternative smoothly without sounding too aggressive or definitive.',
  },
  {
    type: "complex",
    emoji: "👨‍👩‍👧",
    scenario:
      "CELPIP Speaking Task 1 — Giving Advice: Advising a sibling on how to balance their kids' habits",
    steps: [
      {
        label: "Independent clause",
        sentence:
          "Children are more likely to develop strong social skills and healthy habits.",
        thought:
          "IC — my main claim. Strong, positive, complete. But I need to show WHEN or UNDER WHAT CONDITION.",
      },
      {
        label: "Dependent clause",
        sentence:
          "when parents actively limit their screen time and encourage outdoor activities instead",
        thought:
          'DC — the condition using "when." It explains what parents need to do for the IC to be true.',
      },
      {
        label: "Choose connector",
        sentence: "when",
        thought:
          '"When" here functions as a conditional — "in situations where parents do this, children benefit." It\'s softer than "if" and sounds more like an observed truth.',
      },
    ],
    final:
      "Children are more likely to develop strong social skills and healthy habits <strong>when</strong> parents actively limit their screen time and encourage outdoor activities instead.",
    tip: 'Useful for <strong>Speaking Task 1 (Giving Advice)</strong>. Grounding your suggestions using an structural "when" clause makes your advice sound like an observable pattern rather than an unproven opinion, which gives your monologue added authority.',
  },
  // ── COMPOUND-COMPLEX SENTENCES (10) ────────────────────────────────
  {
    type: "compound-complex",
    emoji: "📧",
    scenario:
      "CELPIP Writing Task 1 — Email to a neighbour about noise during night hours",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "I have genuinely enjoyed living next door to you over the past two years.",
        thought:
          "IC1 — I open positively to avoid sounding aggressive. This is good email strategy.",
      },
      {
        label: "Independent clause 2",
        sentence:
          "I wanted to raise a concern about the noise levels late at night",
        thought:
          'IC2 — the actual purpose of the email. "But" will contrast the positive IC1 with this concern.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "because it has been making it difficult for me to sleep before work",
        thought:
          'DC — the impact on me. "Because" subordinates this reason to IC2, adding necessary detail without making it the main message.',
      },
    ],
    final:
      "I have genuinely enjoyed living next door to you over the past two years, <strong>but</strong> I wanted to raise a concern about the noise levels late at night <strong>because</strong> it has been making it difficult for me to sleep before work.",
    tip: 'Useful for <strong>Writing Task 1 (informal or semi-formal complaint email)</strong>. The structure positive IC + "but" + concern + "because" + impact is the ideal formula for any neighbour or acquaintance complaint email. It maintains tone (polite), delivers purpose (the concern), and provides justification (the impact) — all three elements that Task 1 marking requires.',
  },
  {
    type: "compound-complex",
    emoji: "🏫",
    scenario:
      "CELPIP Writing Task 2 — Should uniforms be mandatory in public schools?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Although school uniforms may restrict individual expression, they create a sense of equality among students",
        thought:
          'Leading DC = "Although… expression." IC1 = "they create a sense of equality." "Although" concedes, IC1 argues. Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and they reduce the social pressure associated with branded clothing",
        thought:
          'IC2 — a second benefit. "And" adds it to IC1. Together IC1 + IC2 form a compound structure supporting uniforms.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          'One dependent clause + two independent clauses joined by "and." Classic compound-complex pattern for a body paragraph.',
      },
    ],
    final:
      "<strong>Although</strong> school uniforms may restrict individual expression, they create a sense of equality among students, <strong>and</strong> they reduce the social pressure associated with branded clothing.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. The pattern "Although [concession], [argument 1], and [argument 2]" is one of the most efficient body paragraph sentence structures for Task 2 — it concedes, argues, and extends all in one sentence, demonstrating exactly the range of grammar that moves scores from CLB 7 to CLB 9+.',
  },
  {
    type: "compound-complex",
    emoji: "🗣️",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Defending why hybrid workplace models are ideal",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "Remote work has proven to be highly effective for many professionals.",
        thought:
          "IC1 — I establish my position with a confident claim backed by general observation.",
      },
      {
        label: "Independent clause 2",
        sentence:
          "some roles genuinely require in-person collaboration and cannot function well remotely",
        thought:
          'IC2 — I acknowledge the counter-argument honestly. "But" will signal this turn.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which is why a flexible hybrid model may be the most practical solution",
        thought:
          'DC introduced by "which is why" — a relative clause that draws a conclusion from IC2. It depends on IC2 to make sense.',
      },
    ],
    final:
      "Remote work has proven to be highly effective for many professionals, <strong>but</strong> some roles genuinely require in-person collaboration and cannot function well remotely, <strong>which is why</strong> a flexible hybrid model may be the most practical solution.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. "Which is why" introduces a relative clause of conclusion. It allows you to synthesize opposite view perspectives fluidly and deliver a balanced ultimate answer before your 90 seconds run out.',
  },
  {
    type: "compound-complex",
    emoji: "🌆",
    scenario:
      "CELPIP Speaking Task 7 — Expressing Opinions: Resolving infrastructure gridlock or transit overcrowding",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Since many commuters travel during the same two-hour window each morning, the buses become dangerously overcrowded",
        thought:
          'Leading DC = "Since… morning." IC1 = "the buses become dangerously overcrowded." "Since" = because. Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "so the city should consider introducing staggered shift incentives for local businesses",
        thought:
          'IC2 — the proposed solution. "So" = result/recommendation. It flows from the problem stated in IC1.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "so" + IC2',
        thought:
          'DC explains the cause → IC1 describes the problem → "so" leads to IC2 (solution). Perfect problem-solution structure.',
      },
    ],
    final:
      "<strong>Since</strong> many commuters travel during the same two-hour window each morning, the buses become dangerously overcrowded, <strong>so</strong> the city should consider introducing staggered shift incentives for local businesses.",
    tip: 'Useful for <strong>Speaking Task 7 (Expressing Opinions)</strong>. The structure "Since [cause], [problem], so [solution]" condenses a multi-step analytical argument into a single coherent framework. This showcases high-level analytical fluency to the assessors.',
  },
  {
    type: "compound-complex",
    emoji: "🌿",
    scenario:
      "CELPIP Writing Task 2 — Should individuals or governments take responsibility for reducing plastic waste?",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "Individuals can make meaningful choices to reduce plastic use in their daily lives.",
        thought:
          "IC1 — one side of the argument. I want to balance it with a government responsibility (IC2).",
      },
      {
        label: "Independent clause 2",
        sentence:
          "governments must also enforce regulations that hold corporations accountable",
        thought:
          'IC2 — the other side. "And" connects both sides as equally important.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "since consumer-level changes alone are insufficient to address industrial-scale pollution",
        thought:
          'DC — "since" = because. It justifies why IC2 (government action) is necessary. It depends on IC2.',
      },
    ],
    final:
      "Individuals can make meaningful choices to reduce plastic use in their daily lives, <strong>and</strong> governments must also enforce regulations that hold corporations accountable, <strong>since</strong> consumer-level changes alone are insufficient to address industrial-scale pollution.",
    tip: 'Useful for <strong>Writing Task 2 (Survey Response)</strong>. Adding "since" to justify the second independent clause transforms a simple compound sentence into compound-complex — and shows that you can provide reasoning, not just claims. Examiners at CLB 9+ expect every argument to be supported, not just stated.',
  },
  {
    type: "compound-complex",
    emoji: "👩‍💼",
    scenario:
      "CELPIP Speaking Task 6 — Dealing with a Difficult Situation: Explaining to a stressed colleague why you must decline taking on extra work",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Even though it might feel impossible to slow down right now, I need to stick to my current task list",
        thought:
          'Leading DC = "Even though… right now." IC1 = "I need to stick to my current task list." Concession + declaring your boundary.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and I should also encourage you to speak with our supervisor about redistribution",
        thought:
          'IC2 — a constructive compromise path. "And" links it cleanly to support the coworker.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          "Acknowledge their stress first (DC), set your boundary firmly (IC1), then provide an actionable team step (IC2). This sounds balanced and professional.",
      },
    ],
    final:
      "<strong>Even though</strong> it might feel impossible to slow down right now, I need to stick to my current task list, <strong>and</strong> I should also encourage you to speak with our supervisor about redistribution.",
    tip: "Useful for <strong>Speaking Task 6 (Dealing with a Difficult Situation)</strong>. In Task 6, you are specifically evaluated on tone and social awareness while delivering hard news. Starting with an 'even though' clause validates the situation up front, ensuring a professional delivery.",
  },
  {
    type: "compound-complex",
    emoji: "🏡",
    scenario:
      "CELPIP Writing Task 1 — Email to a property management company about an unresolved maintenance request",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "I submitted a maintenance request for the broken bathroom window over three weeks ago.",
        thought:
          "IC1 — establishes the timeline clearly. The reader immediately understands the delay.",
      },
      {
        label: "Independent clause 2",
        sentence: "no one has come to inspect or repair it yet",
        thought:
          'IC2 — the unresolved status. "But" contrasts what I did (submitted request) with what didn\'t happen (no repair).',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which has become a serious safety and security concern for my household",
        thought:
          'DC — "which" relative clause showing impact. It depends on IC2 and adds urgency to the complaint.',
      },
    ],
    final:
      "I submitted a maintenance request for the broken bathroom window over three weeks ago, <strong>but</strong> no one has come to inspect or repair it yet, <strong>which</strong> has become a serious safety and security concern for my household.",
    tip: 'Useful for <strong>Writing Task 1 (formal complaint email)</strong>. The non-restrictive relative clause "which has become…" escalates urgency without starting a new sentence — it keeps the tone controlled and professional while still communicating that the issue is serious. Task 1 formal emails are evaluated on tone as well as content.',
  },
  {
    type: "compound-complex",
    emoji: "📊",
    scenario:
      "CELPIP Writing Task 2 — Is technology making people more or less productive?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "While technology has undoubtedly streamlined many workplace tasks, it has also introduced significant distractions",
        thought:
          'DC = "While… tasks." IC1 = "it has also introduced significant distractions." "While" = contrast (whereas). Comma after DC.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "so the overall impact on productivity depends largely on how intentionally it is used",
        thought:
          'IC2 — a nuanced conclusion. "So" shows this follows from the tension set up by DC + IC1.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "so" + IC2',
        thought:
          "This entire sentence makes a balanced argument: acknowledge benefits (DC) + note drawbacks (IC1) + draw conclusion (IC2). Three ideas, one sentence.",
      },
    ],
    final:
      "<strong>While</strong> technology has undoubtedly streamlined many workplace tasks, it has also introduced significant distractions, <strong>so</strong> the overall impact on productivity depends largely on how intentionally it is used.",
    tip: "Useful for <strong>Writing Task 2 (Survey Response)</strong> as a thesis or conclusion sentence. This compound-complex sentence presents both sides of the argument AND your nuanced position in a single sentence — a strategy that immediately demonstrates the balanced reasoning examiners look for at CLB 9 and above.",
  },
  {
    type: "compound-complex",
    emoji: "🎙️",
    scenario:
      "CELPIP Speaking Task 8 — Describing an Unusual Situation: Calling a friend to describe an absurd, bizarre piece of public art you see",
    steps: [
      {
        label: "Independent clause 1",
        sentence:
          "It appears that a massive abstract structure has been installed outside the city hall.",
        thought:
          'IC1 — careful language ("it appears that") to introduce a bizarre, hard-to-explain shape. Sounds fluent.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "a giant metallic clock face is attached directly to its base",
        thought:
          'IC2 — specific, highly unusual details to paint a picture. "And" merges it naturally.',
      },
      {
        label: "Add dependent clause",
        sentence:
          "which looks incredibly bizarre because there are no hour hands on it",
        thought:
          "DC — relative clause detailing the unusual trait. It relies on IC2 to complete its meaning.",
      },
    ],
    final:
      "It appears that a massive abstract structure has been installed outside the city hall, <strong>and</strong> a giant metallic clock face is attached directly to its base, <strong>which looks incredibly bizarre</strong> because there are no hour hands on it.",
    tip: "Useful for <strong>Speaking Task 8 (Describing an Unusual Situation)</strong>. In Task 8, you must describe an abstract or surreal scene to someone who can't see it. Using a relative clause with 'which looks...' lets you describe a complex detail and explicitly label its strangeness seamlessly.",
  },
  {
    type: "compound-complex",
    emoji: "🏙️",
    scenario:
      "CELPIP Writing Task 2 — Conclusion paragraph: Should cities prioritise affordable housing over cultural landmarks?",
    steps: [
      {
        label: "Independent clause 1 + dependent clause",
        sentence:
          "Although preserving cultural landmarks is important for a city's identity, the urgent need for affordable housing must take priority in areas where residents are being displaced",
        thought:
          'DC = "Although… identity." IC1 = "the urgent need… must take priority." Long but structured. "Where" adds a relative clause inside IC1.',
      },
      {
        label: "Independent clause 2",
        sentence:
          "and both goals can ultimately be achieved through thoughtful, long-term urban planning",
        thought:
          'IC2 — the optimistic resolution. "And" bridges the tension into a conclusion. Strong essay closing move.',
      },
      {
        label: "Assemble",
        sentence: 'DC, IC1 + "and" + IC2',
        thought:
          "Concede (DC) + argue (IC1) + resolve (IC2). This is the structure of a high-scoring conclusion paragraph.",
      },
    ],
    final:
      "<strong>Although</strong> preserving cultural landmarks is important for a city's identity, the urgent need for affordable housing must take priority in areas where residents are being displaced, <strong>and</strong> both goals can ultimately be achieved through thoughtful, long-term urban planning.",
    tip: "Useful for <strong>Writing Task 2 (Survey Response)</strong> conclusion paragraph. The concede → argue → resolve structure (Although DC, IC1, and IC2) is the most powerful closing pattern for Task 2 — it shows balanced thinking, a clear position, and an optimistic forward-looking resolution, all of which are Content/Coherence markers at CLB 9+.",
  },
];

export const PHRASAL = [
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
    examples: ["We've run out of milk.", "I ran out of time during the exam."],
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
    examples: ["He turned down the job offer.", "She turned the volume down."],
  },
  {
    verb: "look into",
    meaning: "investigate / examine",
    separable: false,
    examples: ["The police are looking into the matter.", "I'll look into it."],
  },
  {
    verb: "make up",
    meaning: "invent / reconcile after argument",
    separable: true,
    examples: ["She made up an excuse.", "They argued but quickly made up."],
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
    examples: ["They set up a new business.", "Can you set up a meeting?"],
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

export const IRREGULAR = [
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

export const FILL_SENTENCES = [
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
    options: ["played", "are playing", "have been playing", "were playing"],
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

export const QUIZ_QS = [
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
    opts: ["will work", "will have worked", "has worked", "will be working"],
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

export const SOUND_WORDS = [
  {
    word: "apple",
    art: "an",
    why: '"apple" starts with /æ/ — a vowel sound → <strong>an</strong>.',
  },
  {
    word: "hour",
    art: "an",
    why: '"hour" has a silent h. The first sound is /aʊ/ — vowel → <strong>an</strong>.',
  },
  {
    word: "umbrella",
    art: "an",
    why: '"umbrella" starts with /ʌ/ — vowel sound → <strong>an</strong>.',
  },
  {
    word: "honest",
    art: "an",
    why: '"honest" has a silent h. It sounds like "on-est" — vowel start → <strong>an</strong>.',
  },
  {
    word: "MBA",
    art: "an",
    why: 'MBA is read letter by letter: "em-bee-ay". First sound is /ɛm/ — vowel → <strong>an</strong>.',
  },
  {
    word: "elephant",
    art: "an",
    why: '"elephant" starts with /ɛ/ — a vowel sound → <strong>an</strong>.',
  },
  {
    word: "university",
    art: "a",
    why: '"university" sounds like "you-ni-ver-si-ty". The /j/ sound is a consonant → <strong>a</strong>.',
  },
  {
    word: "European",
    art: "a",
    why: '"European" starts with /jʊər/ — the "y" sound is a consonant → <strong>a</strong>.',
  },
  {
    word: "uniform",
    art: "a",
    why: '"uniform" sounds like "you-ni-form". Starts with /j/ — consonant → <strong>a</strong>.',
  },
  {
    word: "historical",
    art: "a",
    why: 'The h in "historical" is pronounced /h/ — a consonant sound → <strong>a</strong>.',
  },
  {
    word: "one-way",
    art: "a",
    why: '"one-way" is pronounced "wun-way". First sound is /w/ — consonant → <strong>a</strong>.',
  },
  {
    word: "dog",
    art: "a",
    why: '"dog" starts with /d/ — a consonant sound → <strong>a</strong>.',
  },
];

export const TRAPS = [
  {
    wrong: "✗ She is the doctor.",
    right: "✓ She is a doctor.",
    why: 'Professions with "be" use <strong>a/an</strong> — unless you\'ve already said which doctor.',
  },
  {
    wrong: "✗ I go to the school every day.",
    right: "✓ I go to school every day.",
    why: "Institutions (school, hospital, prison) lose the article when used for their primary purpose.",
  },
  {
    wrong: "✗ He gave me an useful tip.",
    right: "✓ He gave me a useful tip.",
    why: '"useful" starts with /juː/ — the "y" consonant sound → <strong>a</strong>, not <strong>an</strong>.',
  },
  {
    wrong: "✗ The life is beautiful.",
    right: "✓ Life is beautiful.",
    why: "Abstract nouns as general truths (life, love, freedom, happiness) take no article.",
  },
  {
    wrong: "✗ I love a music.",
    right: "✓ I love music.",
    why: "Uncountable nouns (music, advice, water, information) in general statements take no article.",
  },
  {
    wrong: "✗ She has a experience.",
    right: "✓ She has experience.",
    why: '"experience" as uncountable skill takes no article. As one event, use <strong>an</strong> experience.',
  },
  {
    wrong: "✗ He went to a bed.",
    right: "✓ He went to bed.",
    why: '"Bed", "work", "home" drop the article when referring to a state or purpose, not the object.',
  },
  {
    wrong: "✗ The Mount Everest is tall.",
    right: "✓ Mount Everest is tall.",
    why: "Named mountains take no article. But mountain ranges do: <em>the</em> Himalayas.",
  },
  {
    wrong: "✗ She is the tallest among students.",
    right: "✓ She is the tallest among the students.",
    why: 'When referring to a specific group, use <strong>the</strong> — "the students" in this class.',
  },
  {
    wrong: "✗ I read the interesting book.",
    right: "✓ I read an interesting book.",
    why: "Introducing a book for the first time → <strong>a/an</strong>. Use <strong>the</strong> only once it's already known.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE_PRACTICE — combined fill-in / quiz bank for the Articles Practice tab.
// 12 questions × all 10 CELPIP tasks (Speaking 1–8, Writing 1–2) = 120 total,
// so the pool always clears the 100-question minimum and can be shuffled.
// ─────────────────────────────────────────────────────────────────────────────
const OPTS = ["a", "an", "the", "∅"];

export const ARTICLE_PRACTICE = [
  // ── Speaking Task 1 — Giving Advice ──────────────────────────────────────
  { task: "Speaking Task 1 — Giving Advice", before: "You should see", after: "doctor about that pain.", options: OPTS, answer: "a", explain: '"doctor" — first mention, consonant sound /d/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "I think you need", after: "break from work.", options: OPTS, answer: "a", explain: '"break" starts with consonant /b/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "Maybe you could ask", after: "expert for advice.", options: OPTS, answer: "an", explain: '"expert" starts with /ɛ/ — vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "Why don't you talk to", after: "counsellor at school?", options: OPTS, answer: "a", explain: '"counsellor" starts with consonant /k/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "You might want to take", after: "day off this week.", options: OPTS, answer: "a", explain: '"day" — first mention, consonant /d/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "I would recommend", after: "honest conversation with your manager.", options: OPTS, answer: "an", explain: '"honest" has a silent h — vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "Have you thought about getting", after: "second opinion?", options: OPTS, answer: "a", explain: '"second" starts with consonant /s/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "You should give yourself", after: "time to think it over.", options: OPTS, answer: "∅", explain: '"time" is uncountable here — a general amount, not one specific thing.' },
  { task: "Speaking Task 1 — Giving Advice", before: "I believe", after: "best solution is to talk to her directly.", options: OPTS, answer: "the", explain: 'Superlative "best" → always <strong>the</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "It might help to write down", after: "advice I'm giving you.", options: OPTS, answer: "the", explain: 'Already specific — "the advice I\'m giving you" is identified by the relative clause.' },
  { task: "Speaking Task 1 — Giving Advice", before: "You could look for", after: "new apartment closer to work.", options: OPTS, answer: "a", explain: '"new" starts with consonant /n/ → <strong>a</strong>.' },
  { task: "Speaking Task 1 — Giving Advice", before: "I suggest you avoid", after: "stress as much as possible.", options: OPTS, answer: "∅", explain: '"stress" is uncountable in this general statement — no article.' },

  // ── Speaking Task 2 — Personal Experience ────────────────────────────────
  { task: "Speaking Task 2 — Personal Experience", before: "Last year, I went on", after: "unforgettable trip to Banff.", options: OPTS, answer: "an", explain: '"unforgettable" starts with /ʌ/ — vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "I still remember", after: "day I graduated from college.", options: OPTS, answer: "the", explain: "A specific day, already identified by the relative clause → <strong>the</strong>." },
  { task: "Speaking Task 2 — Personal Experience", before: "We stayed at", after: "small hotel near the lake.", options: OPTS, answer: "a", explain: '"small" starts with consonant /s/ → <strong>a</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "It was", after: "hour before the bus finally arrived.", options: OPTS, answer: "an", explain: '"hour" has a silent h — vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "I met", after: "old friend I hadn't seen in years.", options: OPTS, answer: "an", explain: '"old" starts with vowel /oʊ/ → <strong>an</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "That afternoon, we had", after: "picnic in the park.", options: OPTS, answer: "a", explain: '"picnic" — first mention, consonant /p/ → <strong>a</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "I'll never forget", after: "look on her face when she saw the surprise.", options: OPTS, answer: "the", explain: "Specific, known look — identified by the context → <strong>the</strong>." },
  { task: "Speaking Task 2 — Personal Experience", before: "During the trip, we visited", after: "Rocky Mountains.", options: OPTS, answer: "the", explain: "Mountain ranges take <strong>the</strong>." },
  { task: "Speaking Task 2 — Personal Experience", before: "I felt", after: "happiness I had never experienced before.", options: OPTS, answer: "the", explain: "Abstract noun made specific by the relative clause → <strong>the</strong>." },
  { task: "Speaking Task 2 — Personal Experience", before: "We travelled by", after: "train through the mountains.", options: OPTS, answer: "∅", explain: 'No article after "by" for a mode of transport.' },
  { task: "Speaking Task 2 — Personal Experience", before: "It was", after: "most memorable summer of my life.", options: OPTS, answer: "the", explain: 'Superlative "most memorable" → <strong>the</strong>.' },
  { task: "Speaking Task 2 — Personal Experience", before: "I spent", after: "entire afternoon exploring the old town.", options: OPTS, answer: "the", explain: '"the entire afternoon" — a specific, whole period → <strong>the</strong>.' },

  // ── Speaking Task 3 — Describing a Scene ─────────────────────────────────
  { task: "Speaking Task 3 — Describing a Scene", before: "There is", after: "man sitting on a bench in the foreground.", options: OPTS, answer: "a", explain: '"man" — first mention, consonant /m/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "In the background, I can see", after: "old building.", options: OPTS, answer: "an", explain: '"old" starts with vowel /oʊ/ → <strong>an</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "In the picture,", after: "woman is walking her dog near the fountain.", options: OPTS, answer: "a", explain: '"woman" starts with consonant /w/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "On the left side of the picture, there is", after: "large tree.", options: OPTS, answer: "a", explain: '"large" starts with consonant /l/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "Overhead,", after: "sky looks cloudy and grey.", options: OPTS, answer: "the", explain: "There is only one sky — unique in context → <strong>the</strong>." },
  { task: "Speaking Task 3 — Describing a Scene", before: "Next to the bench, I notice", after: "umbrella lying on the ground.", options: OPTS, answer: "an", explain: '"umbrella" starts with vowel /ʌ/ → <strong>an</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "There seems to be", after: "small café at the corner of the street.", options: OPTS, answer: "a", explain: '"small" starts with consonant /s/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "In the middle of the scene, there is", after: "fountain surrounded by benches.", options: OPTS, answer: "a", explain: '"fountain" — first mention, consonant /f/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "Nearby,", after: "children are playing near the entrance.", options: OPTS, answer: "the", explain: "The specific children visible in this picture → <strong>the</strong>." },
  { task: "Speaking Task 3 — Describing a Scene", before: "I can also see", after: "elderly woman feeding the pigeons.", options: OPTS, answer: "an", explain: '"elderly" starts with vowel /ɛ/ → <strong>an</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "To the right, there is", after: "row of shops.", options: OPTS, answer: "a", explain: '"row" starts with consonant /r/ → <strong>a</strong>.' },
  { task: "Speaking Task 3 — Describing a Scene", before: "Overall,", after: "atmosphere in the picture seems calm and relaxed.", options: OPTS, answer: "the", explain: "Unique to this specific picture → <strong>the</strong>." },

  // ── Speaking Task 4 — Making Predictions ─────────────────────────────────
  { task: "Speaking Task 4 — Making Predictions", before: "I think the man is going to catch", after: "earlier train.", options: OPTS, answer: "an", explain: '"earlier" starts with a vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "She will probably ask for", after: "refund.", options: OPTS, answer: "a", explain: '"refund" — first mention, consonant /r/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "I predict he will find", after: "new job within a month.", options: OPTS, answer: "a", explain: '"new" starts with consonant /n/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "They will likely miss", after: "bus if they don't hurry.", options: OPTS, answer: "the", explain: "The specific bus already shown in the scene → <strong>the</strong>." },
  { task: "Speaking Task 4 — Making Predictions", before: "I imagine she is going to have", after: "wonderful time at the party.", options: OPTS, answer: "a", explain: '"wonderful" starts with consonant /w/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "He will probably need", after: "umbrella later today.", options: OPTS, answer: "an", explain: '"umbrella" starts with vowel /ʌ/ → <strong>an</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "I think this will become", after: "important issue in the future.", options: OPTS, answer: "an", explain: '"important" starts with vowel /ɪ/ → <strong>an</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "By next year, they will have opened", after: "new branch downtown.", options: OPTS, answer: "a", explain: '"new" starts with consonant /n/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "I bet", after: "weather will improve by tomorrow.", options: OPTS, answer: "the", explain: 'Unique, known referent — "the weather" right now → <strong>the</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "She's likely to get", after: "promotion soon.", options: OPTS, answer: "a", explain: '"promotion" — first mention, consonant /p/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "I think this will be", after: "turning point in his life.", options: OPTS, answer: "a", explain: '"turning" starts with consonant /t/ → <strong>a</strong>.' },
  { task: "Speaking Task 4 — Making Predictions", before: "They will probably reach", after: "airport just in time.", options: OPTS, answer: "the", explain: "The specific, already-known airport → <strong>the</strong>." },

  // ── Speaking Task 5 — Comparing and Persuading ───────────────────────────
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I believe the downtown apartment is", after: "better choice than the suburban house.", options: OPTS, answer: "a", explain: '"better" starts with consonant /b/ → <strong>a</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "In my opinion, this is", after: "most convenient option available.", options: OPTS, answer: "the", explain: 'Superlative "most convenient" → <strong>the</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I would choose", after: "online course because it offers more flexibility.", options: OPTS, answer: "the", explain: "The specific option under comparison → <strong>the</strong>." },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "This restaurant offers", after: "wider variety of dishes than the other one.", options: OPTS, answer: "a", explain: '"wider" starts with consonant /w/ → <strong>a</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I think public transit is", after: "eco-friendly option overall.", options: OPTS, answer: "an", explain: '"eco-friendly" starts with vowel /iː/ → <strong>an</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "You should pick this laptop because it has", after: "faster processor.", options: OPTS, answer: "a", explain: '"faster" starts with consonant /f/ → <strong>a</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I strongly recommend", after: "first option for several reasons.", options: OPTS, answer: "the", explain: "Ordinals (first, second, last) take <strong>the</strong>." },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "This plan gives us", after: "advantage the other one doesn't.", options: OPTS, answer: "an", explain: '"advantage" starts with vowel /æ/ → <strong>an</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I would rather stay at", after: "hotel near the city centre.", options: OPTS, answer: "a", explain: '"hotel" — first mention, consonant /h/ → <strong>a</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "This job offers", after: "higher salary than my current one.", options: OPTS, answer: "a", explain: '"higher" starts with a pronounced consonant /h/ → <strong>a</strong>.' },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "I think", after: "second choice is more practical.", options: OPTS, answer: "the", explain: "Ordinals take <strong>the</strong>." },
  { task: "Speaking Task 5 — Comparing and Persuading", before: "This option is clearly", after: "better fit for our team.", options: OPTS, answer: "a", explain: '"better" starts with consonant /b/ → <strong>a</strong>.' },

  // ── Speaking Task 6 — Dealing with a Difficult Situation ─────────────────
  { task: "Speaking Task 6 — Difficult Situation", before: "I'm sorry, but I have to cancel", after: "appointment we scheduled.", options: OPTS, answer: "the", explain: "Already mentioned/known appointment → <strong>the</strong>." },
  { task: "Speaking Task 6 — Difficult Situation", before: "I'm afraid I can't lend you", after: "money right now.", options: OPTS, answer: "∅", explain: '"money" is uncountable in this general statement — no article.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I understand this is", after: "difficult situation for you.", options: OPTS, answer: "a", explain: '"difficult" starts with consonant /d/ → <strong>a</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I'm going to need", after: "extra day to finish the report.", options: OPTS, answer: "an", explain: '"extra" starts with vowel /ɛ/ → <strong>an</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "Unfortunately, I won't be able to attend", after: "meeting tomorrow.", options: OPTS, answer: "the", explain: "The specific, already-arranged meeting → <strong>the</strong>." },
  { task: "Speaking Task 6 — Difficult Situation", before: "I hope you understand it wasn't", after: "easy decision to make.", options: OPTS, answer: "an", explain: '"easy" starts with vowel /iː/ → <strong>an</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I owe you", after: "honest explanation for the delay.", options: OPTS, answer: "an", explain: '"honest" has a silent h — vowel sound → <strong>an</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I know this isn't", after: "ideal outcome, but it's the best I can offer.", options: OPTS, answer: "an", explain: '"ideal" starts with vowel /aɪ/ → <strong>an</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I'd like to propose", after: "compromise that works for both of us.", options: OPTS, answer: "a", explain: '"compromise" — first mention, consonant /k/ → <strong>a</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I realize this puts you in", after: "awkward position.", options: OPTS, answer: "an", explain: '"awkward" starts with vowel /ɔː/ → <strong>an</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "Let's find", after: "solution that satisfies everyone.", options: OPTS, answer: "a", explain: '"solution" — first mention, consonant /s/ → <strong>a</strong>.' },
  { task: "Speaking Task 6 — Difficult Situation", before: "I apologize for", after: "inconvenience this has caused.", options: OPTS, answer: "the", explain: "Specific, known inconvenience — identified by the context → <strong>the</strong>." },

  // ── Speaking Task 7 — Expressing Opinions ────────────────────────────────
  { task: "Speaking Task 7 — Expressing Opinions", before: "I believe social media has", after: "negative effect on teenagers.", options: OPTS, answer: "a", explain: '"negative" starts with consonant /n/ → <strong>a</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I think", after: "government should invest more in public transit.", options: OPTS, answer: "the", explain: "A specific, known institution → <strong>the</strong>." },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I think working from home is", after: "best option for many employees.", options: OPTS, answer: "the", explain: 'Superlative "best" → <strong>the</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I strongly believe", after: "education is the key to success.", options: OPTS, answer: "∅", explain: "Abstract noun stating a general truth → no article." },
  { task: "Speaking Task 7 — Expressing Opinions", before: "From my perspective, this policy creates", after: "unfair advantage for large companies.", options: OPTS, answer: "an", explain: '"unfair" starts with vowel /ʌ/ → <strong>an</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I would argue that", after: "internet has changed the way we communicate.", options: OPTS, answer: "the", explain: 'Unique, known referent — "the internet" → <strong>the</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "In my view, this is", after: "unnecessary restriction on personal freedom.", options: OPTS, answer: "an", explain: '"unnecessary" starts with vowel /ʌ/ → <strong>an</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I disagree because", after: "younger generation faces different challenges.", options: OPTS, answer: "the", explain: "A specific, known group being discussed → <strong>the</strong>." },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I feel that", after: "honesty is always the best policy.", options: OPTS, answer: "∅", explain: "Abstract noun stating a general truth → no article." },
  { task: "Speaking Task 7 — Expressing Opinions", before: "To me, this represents", after: "important shift in public opinion.", options: OPTS, answer: "an", explain: '"important" starts with vowel /ɪ/ → <strong>an</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "I believe technology has become", after: "essential part of modern life.", options: OPTS, answer: "an", explain: '"essential" starts with vowel /ɪ/ → <strong>an</strong>.' },
  { task: "Speaking Task 7 — Expressing Opinions", before: "Overall, I think this is", after: "reasonable approach to the problem.", options: OPTS, answer: "a", explain: '"reasonable" starts with consonant /r/ → <strong>a</strong>.' },

  // ── Speaking Task 8 — Describing an Unusual Situation ────────────────────
  { task: "Speaking Task 8 — Unusual Situation", before: "It's", after: "small object with a strange shape.", options: OPTS, answer: "a", explain: '"small" starts with consonant /s/ → <strong>a</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "The item has", after: "unusual texture, almost like rubber.", options: OPTS, answer: "an", explain: '"unusual" starts with vowel /ʌ/ → <strong>an</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "It looks like", after: "oversized paperclip.", options: OPTS, answer: "an", explain: '"oversized" starts with vowel /oʊ/ → <strong>an</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "There's", after: "odd smell coming from it.", options: OPTS, answer: "an", explain: '"odd" starts with vowel /ɒ/ → <strong>an</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "It seems to be made of", after: "metal and plastic.", options: OPTS, answer: "∅", explain: "Uncountable materials named generally — no article." },
  { task: "Speaking Task 8 — Unusual Situation", before: "It has", after: "handle on one side and a button on the other.", options: OPTS, answer: "a", explain: '"handle" — first mention, consonant /h/ → <strong>a</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "I think it's used to hold", after: "documents together.", options: OPTS, answer: "∅", explain: "Plural generalization — documents in general, no article." },
  { task: "Speaking Task 8 — Unusual Situation", before: "It's shaped like", after: "egg but much larger.", options: OPTS, answer: "an", explain: '"egg" starts with vowel /ɛ/ → <strong>an</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "The surface has", after: "unique pattern I've never seen before.", options: OPTS, answer: "a", explain: '"unique" sounds like "yoo-neek" — /j/ is a consonant sound → <strong>a</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "It could be", after: "tool for opening cans.", options: OPTS, answer: "a", explain: '"tool" — first mention, consonant /t/ → <strong>a</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "There is", after: "hole in the middle of it.", options: OPTS, answer: "a", explain: '"hole" — first mention, consonant /h/ → <strong>a</strong>.' },
  { task: "Speaking Task 8 — Unusual Situation", before: "It looks like", after: "ancient artifact from a museum.", options: OPTS, answer: "an", explain: '"ancient" starts with vowel /eɪ/ → <strong>an</strong>.' },

  // ── Writing Task 1 — Writing an Email ────────────────────────────────────
  { task: "Writing Task 1 — Email", before: "I am writing to inform you about", after: "change in our meeting schedule.", options: OPTS, answer: "a", explain: '"change" — first mention, consonant /tʃ/ → <strong>a</strong>.' },
  { task: "Writing Task 1 — Email", before: "I would like to request", after: "refund for the defective item.", options: OPTS, answer: "a", explain: '"refund" — first mention, consonant /r/ → <strong>a</strong>.' },
  { task: "Writing Task 1 — Email", before: "Please let me know if you have", after: "questions.", options: OPTS, answer: "∅", explain: "Plural generalization — any questions at all, no article." },
  { task: "Writing Task 1 — Email", before: "I am writing to express", after: "concern about the recent delay.", options: OPTS, answer: "a", explain: '"concern" — first mention, consonant /k/ → <strong>a</strong>.' },
  { task: "Writing Task 1 — Email", before: "I would appreciate", after: "quick response at your earliest convenience.", options: OPTS, answer: "a", explain: '"quick" starts with consonant /k/ → <strong>a</strong>.' },
  { task: "Writing Task 1 — Email", before: "I am attaching", after: "copy of the invoice for your reference.", options: OPTS, answer: "a", explain: '"copy" — first mention, consonant /k/ → <strong>a</strong>.' },
  { task: "Writing Task 1 — Email", before: "I wanted to bring to your attention", after: "issue with my recent order.", options: OPTS, answer: "an", explain: '"issue" starts with vowel /ɪ/ → <strong>an</strong>.' },
  { task: "Writing Task 1 — Email", before: "Thank you for", after: "opportunity to work on this project.", options: OPTS, answer: "the", explain: "Specific, already-known opportunity → <strong>the</strong>." },
  { task: "Writing Task 1 — Email", before: "I look forward to hearing from you at", after: "earliest opportunity.", options: OPTS, answer: "the", explain: 'Fixed phrase with a superlative — "at the earliest opportunity" → <strong>the</strong>.' },
  { task: "Writing Task 1 — Email", before: "I am writing on behalf of", after: "residents in our building.", options: OPTS, answer: "the", explain: "A specific, known group of residents → <strong>the</strong>." },
  { task: "Writing Task 1 — Email", before: "Please find attached", after: "document you requested.", options: OPTS, answer: "the", explain: "Specific document — identified by the relative clause → <strong>the</strong>." },
  { task: "Writing Task 1 — Email", before: "I would like to schedule", after: "appointment for next week.", options: OPTS, answer: "an", explain: '"appointment" starts with vowel /ə/ → <strong>an</strong>.' },

  // ── Writing Task 2 — Survey / Opinion ────────────────────────────────────
  { task: "Writing Task 2 — Survey", before: "I prefer", after: "online option because it saves time.", options: OPTS, answer: "the", explain: "The specific one of the two survey options → <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "In my opinion,", after: "second choice is more practical for families.", options: OPTS, answer: "the", explain: "Ordinals take <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "I would choose to attend", after: "in-person event rather than a virtual one.", options: OPTS, answer: "the", explain: "The specific option under comparison → <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "I believe this is", after: "better solution for most people.", options: OPTS, answer: "a", explain: '"better" starts with consonant /b/ → <strong>a</strong>.' },
  { task: "Writing Task 2 — Survey", before: "I think", after: "first option offers more benefits overall.", options: OPTS, answer: "the", explain: "Ordinals take <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "For me, convenience is", after: "most important factor.", options: OPTS, answer: "the", explain: 'Superlative "most important" → <strong>the</strong>.' },
  { task: "Writing Task 2 — Survey", before: "I would rather take", after: "shorter route even if it costs more.", options: OPTS, answer: "the", explain: "The specific route under comparison → <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "Overall, I support", after: "idea of remote work.", options: OPTS, answer: "the", explain: "A specific, known idea already introduced → <strong>the</strong>." },
  { task: "Writing Task 2 — Survey", before: "I feel that", after: "flexibility is essential in today's workplace.", options: OPTS, answer: "∅", explain: "Abstract noun stating a general truth — no article." },
  { task: "Writing Task 2 — Survey", before: "My preference is for", after: "option that offers long-term value.", options: OPTS, answer: "an", explain: '"option" — first mention, vowel /ɒ/ → <strong>an</strong>.' },
  { task: "Writing Task 2 — Survey", before: "I chose this survey response because it reflects", after: "honest opinion.", options: OPTS, answer: "an", explain: '"honest" has a silent h — vowel sound → <strong>an</strong>.' },
  { task: "Writing Task 2 — Survey", before: "I believe", after: "majority of people would agree with this approach.", options: OPTS, answer: "the", explain: 'Fixed phrase — "the majority of" → <strong>the</strong>.' },
];
// ─────────────────────────────────────────────────────────────────────────────
// 1. ADD to data.js
// ─────────────────────────────────────────────────────────────────────────────

export const VOICE_RULES = [
  {
    id: "active-def",
    voice: "active",
    title: "What is Active Voice?",
    body: "The subject performs the action. The sentence follows the natural order: Subject → Verb → Object. Active voice is direct, clear, and energetic.",
    formula: "Subject + Verb + Object",
    tip: "Active voice is preferred in CELPIP speaking tasks — it sounds more natural, confident, and conversational.",
  },
  {
    id: "passive-def",
    voice: "passive",
    title: "What is Passive Voice?",
    body: "The subject receives the action. The doer (agent) is either unknown, unimportant, or deliberately omitted. Passive voice is formed with be + past participle.",
    formula: "Subject + be (conjugated) + Past Participle + (by agent)",
    tip: "Passive voice is common in CELPIP Writing Task 1 formal emails and Writing Task 2 essays — it creates an objective, impersonal tone.",
  },
  {
    id: "passive-tenses",
    voice: "passive",
    title: "Passive Voice Across Tenses",
    body: 'The passive works in every tense by changing the form of "be" while keeping the past participle.',
    formula: null,
    tenseTable: [
      {
        tense: "Present simple",
        active: "They check the reports.",
        passive: "The reports are checked.",
      },
      {
        tense: "Past simple",
        active: "They cancelled the event.",
        passive: "The event was cancelled.",
      },
      {
        tense: "Future simple",
        active: "They will review the policy.",
        passive: "The policy will be reviewed.",
      },
      {
        tense: "Present perfect",
        active: "They have repaired the road.",
        passive: "The road has been repaired.",
      },
      {
        tense: "Past perfect",
        active: "They had informed the staff.",
        passive: "The staff had been informed.",
      },
      {
        tense: "Present continuous",
        active: "They are building a new school.",
        passive: "A new school is being built.",
      },
      {
        tense: "Past continuous",
        active: "They were processing my claim.",
        passive: "My claim was being processed.",
      },
      {
        tense: "Modal (will)",
        active: "They will address the issue.",
        passive: "The issue will be addressed.",
      },
      {
        tense: "Modal (should)",
        active: "They should review the plan.",
        passive: "The plan should be reviewed.",
      },
    ],
    tip: null,
  },
  {
    id: "when-to-use",
    voice: "both",
    title: "When to use each voice",
    body: null,
    formula: null,
    whenTable: [
      {
        situation: "Doer is unknown",
        voice: "Passive",
        example: "My bicycle was stolen last night.",
      },
      {
        situation: "Doer is unimportant",
        voice: "Passive",
        example: "The application form must be submitted by Friday.",
      },
      {
        situation: "Formal / impersonal tone",
        voice: "Passive",
        example: "It is recommended that residents conserve water.",
      },
      {
        situation: "Describing a process",
        voice: "Passive",
        example: "The water is filtered and then distributed to homes.",
      },
      {
        situation: "Personal opinion / story",
        voice: "Active",
        example: "I strongly believe the city should invest in transit.",
      },
      {
        situation: "Advice giving",
        voice: "Active",
        example: "You should speak with your manager directly.",
      },
      {
        situation: "Describing a scene",
        voice: "Active",
        example: "A large crowd is gathering near the city hall.",
      },
      {
        situation: "Emphasising the doer",
        voice: "Active",
        example: "The government announced new housing grants yesterday.",
      },
    ],
    tip: null,
  },
];

export const ACTIVE_EXAMPLES = [
  {
    task: "Speaking Task 7",
    scenario:
      "Expressing a strong opinion about the need for more cycling lanes in a city",
    sentence:
      "The city <em>should invest</em> in dedicated cycling lanes to reduce traffic congestion and improve public health.",
    why: "Active voice makes your opinion sound direct and confident — ideal for opinion tasks where you are defending a position.",
  },
  {
    task: "Speaking Task 1",
    scenario:
      "Giving advice to a friend who missed an important deadline at work",
    sentence:
      "You <em>should speak</em> with your manager immediately and <em>explain</em> what happened before the situation gets worse.",
    why: "Active voice with modal verbs (should) is the natural structure for advice — it places the listener as the subject in control of the action.",
  },
  {
    task: "Speaking Task 2",
    scenario:
      "Describing a personal experience — moving to a new city for the first time",
    sentence:
      "When I first <em>arrived</em> in Toronto, I <em>did not know</em> anyone, so I <em>joined</em> a local community group to meet new people.",
    why: "Personal narratives (Task 2) always use active voice — the story is about what YOU did, making you the natural subject of every verb.",
  },
  {
    task: "Speaking Task 5",
    scenario:
      "Comparing two options — living downtown vs. living in the suburbs",
    sentence:
      "People who <em>live</em> downtown <em>save</em> time on commuting, but they <em>pay</em> significantly higher rent for smaller spaces.",
    why: "Active voice makes comparisons crisp and balanced. Both subjects are doing something — commuting, paying, living — which is exactly the structure Speaking Task 5 rewards.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Opening sentence of an opinion essay arguing that governments should fund public libraries",
    sentence:
      "Public libraries <em>provide</em> communities with free access to knowledge, cultural resources, and digital services that many residents cannot afford independently.",
    why: "A strong active opening sentence in Task 2 establishes your argument immediately — subject (libraries) + verb (provide) + object (communities) = clear, authoritative claim.",
  },
  {
    task: "Speaking Task 4",
    scenario:
      "Predicting what will happen if a neighbourhood park is removed to build a shopping mall",
    sentence:
      "If the city <em>removes</em> the park, families <em>will lose</em> their only green space and children <em>will have</em> nowhere safe to play.",
    why: "Conditional predictions use active voice naturally. The subject of each clause is clear — city, families, children — making the cause-effect chain easy for the examiner to follow.",
  },
  {
    task: "Speaking Task 3",
    scenario:
      "Describing a scene in an image showing a busy farmers market on a Saturday morning",
    sentence:
      "Vendors <em>are setting up</em> their stalls, shoppers <em>are browsing</em> the produce, and a group of children <em>are playing</em> near the fountain.",
    why: "Scene description uses active present continuous naturally — each subject is actively doing something visible, which makes the description vivid and organised.",
  },
  {
    task: "Writing Task 1",
    scenario:
      "Opening of a semi-formal email to a neighbour about a recurring noise problem",
    sentence:
      "I <em>am writing</em> to raise a concern about the noise levels late at night that <em>have been affecting</em> my sleep for the past two weeks.",
    why: 'In semi-formal complaint emails, active voice keeps the tone personal and direct. Starting with "I am writing" is the standard professional email opener.',
  },
  {
    task: "Speaking Task 8",
    scenario:
      "Describing an unusual situation — you arrive at work and find the office completely empty",
    sentence:
      "When I <em>walked</em> in, I <em>noticed</em> that no one <em>had arrived</em> yet, all the lights <em>were off</em>, and a note <em>was sitting</em> on the reception desk.",
    why: "Narrating an unusual situation (Task 8) uses active voice to make the sequence of discoveries feel immediate and real — as if you are reliving it.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Conclusion of an essay arguing that individuals bear more responsibility than governments for environmental protection",
    sentence:
      "Individuals <em>make</em> purchasing decisions every day that either <em>support</em> or <em>undermine</em> sustainable practices, and no government policy can fully <em>replace</em> that personal responsibility.",
    why: "A strong active conclusion re-centres the argument on a clear subject (individuals) and drives home the essay's main point with confident, unambiguous verbs.",
  },
  {
    task: "Speaking Task 6",
    scenario:
      "Explaining how you handled a difficult situation — a disagreement with a coworker in front of a client",
    sentence:
      "I <em>calmly interrupted</em> the conversation, <em>suggested</em> we discuss the matter privately, and <em>offered</em> the client an alternative solution on the spot.",
    why: "In Task 6 (dealing with a difficult situation), active voice shows you took initiative — you are the subject who acted, which demonstrates competence and confidence.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Body paragraph arguing that technology improves access to education",
    sentence:
      "Online platforms <em>allow</em> students in rural areas to <em>access</em> the same high-quality courses that urban students <em>attend</em> in person, effectively <em>bridging</em> the educational gap.",
    why: "Each clause has a clear active subject — platforms, students — making the argument easy to follow and logically structured, which Writing Task 2 rewards with higher Coherence scores.",
  },
];

export const PASSIVE_EXAMPLES = [
  {
    task: "Writing Task 1",
    scenario:
      "Formal complaint email to a property management company about an unresolved repair",
    sentence:
      "A maintenance request <em>was submitted</em> over three weeks ago, and the issue <em>has not been resolved</em> despite two follow-up calls.",
    why: "Passive voice in formal complaint emails creates an objective, professional tone. The focus stays on what was done (or not done), not on accusing a specific person.",
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay discussing how public policy shapes environmental behaviour",
    sentence:
      "When recycling programs <em>are introduced</em> at the municipal level, household waste <em>is significantly reduced</em> within the first year of implementation.",
    why: "Passive voice in essay body paragraphs creates an academic tone. The focus is on the outcome (waste reduced) rather than who reduces it — appropriate for general policy claims.",
  },
  {
    task: "Writing Task 1",
    scenario: "Formal email to a university registrar requesting a transcript",
    sentence:
      "I would appreciate it if my official transcript could <em>be sent</em> to the address provided below at your earliest convenience.",
    why: '"Could be sent" (passive modal) is the most polite form of a request in formal writing. It removes direct pressure on the reader by not making them the subject of the obligation.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Discussing the impact of social media in an opinion essay about technology",
    sentence:
      "Young people <em>are constantly bombarded</em> with unrealistic images online, and their self-esteem <em>is gradually eroded</em> as a result.",
    why: "Passive voice here emphasises that young people are the recipients of harm — they are acted upon, not acting. This structures the argument as one about vulnerability and systemic impact.",
  },
  {
    task: "Speaking Task 4",
    scenario:
      "Predicting what will happen if a hospital in a small town is closed",
    sentence:
      "If the hospital <em>is closed</em>, hundreds of patients <em>will be forced</em> to travel long distances for emergency care, and lives could <em>be put</em> at risk.",
    why: 'Passive constructions like "will be forced" and "be put at risk" are common in formal predictions — they emphasise consequence without needing to assign blame.',
  },
  {
    task: "Writing Task 1",
    scenario: "Email to an online retailer about a delayed order",
    sentence:
      "My order <em>was placed</em> on the 3rd of October, and I <em>was informed</em> at the time that it would arrive within five business days.",
    why: 'Passive voice establishes a timeline of events objectively. "Was placed" and "was informed" focus on what happened, not on who is responsible — keeping the tone factual rather than confrontational.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay arguing that more funding should be given to mental health services",
    sentence:
      "Mental health conditions <em>are often misunderstood</em> and <em>are frequently left untreated</em> due to a lack of publicly funded support services.",
    why: 'Double passive constructions ("are misunderstood" + "are left untreated") create a powerful accumulation of systemic failures — ideal for establishing a problem before proposing your solution.',
  },
  {
    task: "Speaking Task 7",
    scenario:
      "Expressing an opinion about whether schools should be responsible for teaching life skills",
    sentence:
      "Many essential life skills, such as financial literacy and conflict resolution, <em>are never taught</em> in schools, which means students <em>are left</em> unprepared for adult life.",
    why: 'Using passive voice in opinion tasks adds weight to a claim about systemic neglect. "Are never taught" and "are left" emphasise institutional failure without needing to name a specific actor.',
  },
  {
    task: "Writing Task 1",
    scenario:
      "Formal letter to a city council requesting repairs to a damaged sidewalk",
    sentence:
      "The sidewalk along Maple Avenue <em>has not been repaired</em> since the damage <em>was first reported</em> to the city over two months ago.",
    why: 'Present perfect passive ("has not been repaired") is the ideal structure for complaints about unresolved issues — it links a past event to an ongoing present consequence.',
  },
  {
    task: "Writing Task 2",
    scenario:
      "Essay about whether traditional media or social media should be trusted for news",
    sentence:
      "Traditional news articles <em>are written</em> by trained journalists, <em>are edited</em> by experienced professionals, and <em>are held</em> to strict standards of factual accuracy.",
    why: "Triple passive construction emphasises process and rigour. The focus is entirely on what happens to the article — the quality controls — rather than on the people performing them.",
  },
  {
    task: "Speaking Task 3",
    scenario:
      "Describing what has happened in a news broadcast image showing a damaged building after a storm",
    sentence:
      "It appears that several windows <em>have been shattered</em>, the roof <em>has been partially torn off</em>, and the surrounding street <em>has been closed</em> to traffic.",
    why: "Present perfect passive is ideal for describing results visible in an image. You can see what has been done — windows shattered, roof torn — without knowing who or what caused it.",
  },
  {
    task: "Writing Task 1",
    scenario:
      "Closing sentence of a formal complaint email escalating the issue",
    sentence:
      "If this matter <em>is not resolved</em> within the next five business days, a formal complaint <em>will be filed</em> with the relevant consumer protection authority.",
    why: 'Passive voice in escalation sentences keeps the tone formal and impersonal while still delivering a firm ultimatum — "will be filed" sounds more professional than "I will file a complaint."',
  },
];

export const ADV_TYPES = [
  {
    emoji: "⚡",
    type: "Adverbs of Manner",
    badge: "How?",
    bg: "#dbeafe",
    color: "#1e40af",
    border: "#bfdbfe",
    intro:
      "Describe HOW an action is done. These are the most powerful adverbs for CELPIP Speaking Tasks 2, 3, and 7 — they add colour and precision to descriptions and opinions.",
    formation:
      "Most are formed by adding <strong>-ly</strong> to an adjective: <em>quick → quickly, clear → clearly, confident → confidently</em>. Irregular: <em>good → well, fast → fast, hard → hard</em>.",
    nativeTip:
      "Native speakers place manner adverbs <strong>after the main verb</strong> or <strong>after the object</strong>: <em>'She spoke clearly'</em> or <em>'He handled it professionally.'</em> Placing them before the verb sounds bookish.",
    celpipUse:
      "Speaking Task 3 (describe a scene), Task 7 (express an opinion), Writing Task 2 (survey).",
    items: [
      {
        word: "clearly",
        example:
          "She explained her concerns <strong>clearly</strong> in the email.",
        task: "Writing T1",
      },
      {
        word: "effectively",
        example:
          "The new policy addresses the issue <strong>effectively</strong>.",
        task: "Writing T2",
      },
      {
        word: "confidently",
        example:
          "He spoke <strong>confidently</strong> about his reasons for choosing the city.",
        task: "Speaking T7",
      },
      {
        word: "rapidly",
        example:
          "The neighbourhood is growing <strong>rapidly</strong>, which creates traffic problems.",
        task: "Writing T2",
      },
      {
        word: "carefully",
        example: "I have <strong>carefully</strong> considered both options.",
        task: "Writing T2",
      },
      {
        word: "fluently",
        example:
          "She communicated <strong>fluently</strong> despite her nervousness.",
        task: "Speaking T5",
      },
      {
        word: "politely",
        example: "I would like to <strong>politely</strong> request a refund.",
        task: "Writing T1",
      },
      {
        word: "immediately",
        example:
          "I would appreciate it if you could address this <strong>immediately</strong>.",
        task: "Writing T1",
      },
      {
        word: "significantly",
        example:
          "The noise has <strong>significantly</strong> affected my quality of life.",
        task: "Writing T1",
      },
      {
        word: "gradually",
        example:
          "You will <strong>gradually</strong> feel more comfortable in the new city.",
        task: "Speaking T5",
      },
    ],
  },
  {
    emoji: "📅",
    type: "Adverbs of Time",
    badge: "When?",
    bg: "#dcfce7",
    color: "#166534",
    border: "#86efac",
    intro:
      "Tell us WHEN something happens. Essential in Writing Task 1 emails (reporting timelines) and Speaking Task 2 (personal experience).",
    formation:
      "Most are standalone words: <em>recently, already, still, yet, soon, eventually, immediately, lately, currently, previously</em>.",
    nativeTip:
      "Native speakers put time adverbs <strong>at the start or end</strong> of a sentence for emphasis: <em>'Recently, I noticed a problem'</em> or <em>'I contacted the office yesterday.'</em> Mid-sentence placement is less common but natural with auxiliaries: <em>'I have already spoken to the manager.'</em>",
    celpipUse:
      "Writing Task 1 (complaint/request emails), Speaking Task 2 (personal experience), Speaking Task 4 (predictions).",
    items: [
      {
        word: "recently",
        example:
          "<strong>Recently</strong>, the noise level in my building has become unbearable.",
        task: "Writing T1",
      },
      {
        word: "currently",
        example:
          "I am <strong>currently</strong> working from home, which makes the issue worse.",
        task: "Writing T1",
      },
      {
        word: "previously",
        example:
          "I had <strong>previously</strong> contacted the front desk about this matter.",
        task: "Writing T1",
      },
      {
        word: "eventually",
        example:
          "I believe the situation will <strong>eventually</strong> improve with the right support.",
        task: "Speaking T5",
      },
      {
        word: "already",
        example:
          "I have <strong>already</strong> attempted to resolve this on my own.",
        task: "Writing T1",
      },
      {
        word: "still",
        example:
          "The problem is <strong>still</strong> ongoing despite my earlier complaint.",
        task: "Writing T1",
      },
      {
        word: "soon",
        example: "I hope to hear back from you <strong>soon</strong>.",
        task: "Writing T1",
      },
      {
        word: "lately",
        example:
          "<strong>Lately</strong>, I have been struggling with the commute.",
        task: "Speaking T2",
      },
      {
        word: "immediately",
        example: "Please arrange for a repair <strong>immediately</strong>.",
        task: "Writing T1",
      },
      {
        word: "ultimately",
        example:
          "<strong>Ultimately</strong>, the decision should benefit the entire community.",
        task: "Writing T2",
      },
    ],
  },
  {
    emoji: "📍",
    type: "Adverbs of Place",
    badge: "Where?",
    bg: "#fef3c7",
    color: "#92400e",
    border: "#fde68a",
    intro:
      "Tell us WHERE something happens. Vital for Speaking Task 3 (describing a scene) where you must locate objects and people accurately.",
    formation:
      "Standalone words: <em>here, there, nearby, everywhere, inside, outside, above, below, ahead, behind</em>.",
    nativeTip:
      "Place adverbs go <strong>after the verb</strong> or at the <strong>end of a clause</strong>: <em>'A man is standing nearby'</em>, <em>'Children are playing outside.'</em> Don't place them before the subject.",
    celpipUse:
      "Speaking Task 3 (scene description), Speaking Task 8 (unusual situation).",
    items: [
      {
        word: "nearby",
        example:
          "A vendor is standing <strong>nearby</strong>, arranging fresh produce.",
        task: "Speaking T3",
      },
      {
        word: "outside",
        example:
          "A group of children are playing <strong>outside</strong> the community centre.",
        task: "Speaking T3",
      },
      {
        word: "ahead",
        example:
          "Further <strong>ahead</strong>, there appears to be a crowded intersection.",
        task: "Speaking T3",
      },
      {
        word: "everywhere",
        example:
          "Colourful decorations are <strong>everywhere</strong> in the market.",
        task: "Speaking T3",
      },
      {
        word: "inside",
        example:
          "The staff are working busily <strong>inside</strong> the shop.",
        task: "Speaking T3",
      },
      {
        word: "here",
        example:
          "<strong>Here</strong>, we can see a family seated at a picnic table.",
        task: "Speaking T3",
      },
      {
        word: "there",
        example:
          "Over <strong>there</strong>, a couple is looking at the menu board.",
        task: "Speaking T3",
      },
      {
        word: "above",
        example:
          "<strong>Above</strong>, a large banner is advertising the summer festival.",
        task: "Speaking T3",
      },
    ],
  },
  {
    emoji: "🔢",
    type: "Adverbs of Frequency",
    badge: "How often?",
    bg: "#ede9fe",
    color: "#5b21b6",
    border: "#c4b5fd",
    intro:
      "Show HOW OFTEN something happens. Widely used in Speaking Task 7 (opinions) and Writing Task 2 to support arguments with general truths.",
    formation:
      "Key words: <em>always, usually, often, frequently, sometimes, occasionally, rarely, seldom, never, generally, typically, regularly</em>.",
    nativeTip:
      "Frequency adverbs go <strong>before the main verb</strong> but <strong>after auxiliary verbs</strong>: <em>'I usually take the subway'</em> / <em>'He has never missed a deadline.'</em> They can also open a sentence for emphasis: <em>'Occasionally, I work from a café.'</em>",
    celpipUse:
      "Speaking Task 7 (opinions/habits), Writing Task 2 (support arguments), Speaking Task 1 (giving advice).",
    items: [
      {
        word: "generally",
        example:
          "Green spaces are <strong>generally</strong> better for community wellbeing than commercial malls.",
        task: "Writing T2",
      },
      {
        word: "typically",
        example:
          "New immigrants <strong>typically</strong> face challenges in their first year.",
        task: "Speaking T7",
      },
      {
        word: "often",
        example:
          "Children <strong>often</strong> benefit from access to outdoor spaces.",
        task: "Writing T2",
      },
      {
        word: "frequently",
        example:
          "I <strong>frequently</strong> hear noise from the unit above me.",
        task: "Writing T1",
      },
      {
        word: "rarely",
        example:
          "Such problems are <strong>rarely</strong> resolved without direct communication.",
        task: "Speaking T6",
      },
      {
        word: "always",
        example:
          "You should <strong>always</strong> introduce yourself professionally in a new workplace.",
        task: "Speaking T1",
      },
      {
        word: "sometimes",
        example:
          "<strong>Sometimes</strong>, the best solution is to speak directly with the person involved.",
        task: "Speaking T6",
      },
      {
        word: "occasionally",
        example:
          "<strong>Occasionally</strong>, I take a different route to appreciate the neighbourhood.",
        task: "Speaking T2",
      },
      {
        word: "never",
        example:
          "You should <strong>never</strong> ignore a formal complaint from a tenant.",
        task: "Writing T1",
      },
      {
        word: "regularly",
        example:
          "Residents who <strong>regularly</strong> use the park oppose its removal.",
        task: "Writing T2",
      },
    ],
  },
  {
    emoji: "🎯",
    type: "Adverbs of Degree",
    badge: "How much?",
    bg: "#fce7f3",
    color: "#be185d",
    border: "#fbcfe8",
    intro:
      "Intensify or soften adjectives, verbs, and other adverbs. These are score-boosters — high-band CELPIP responses use degree adverbs to make arguments sound precise and measured.",
    formation:
      "Key words: <em>very, extremely, quite, rather, fairly, somewhat, slightly, particularly, especially, incredibly, largely, entirely, completely, barely, hardly</em>.",
    nativeTip:
      "Native speakers rarely say <em>'very very good'</em>. Instead they use: <em>'exceptionally good', 'particularly effective', 'largely successful'</em>. Varying your degree adverbs signals a wider vocabulary range, which directly affects your CELPIP vocabulary score.",
    celpipUse:
      "All tasks — degree adverbs make every point more precise and nuanced.",
    items: [
      {
        word: "particularly",
        example:
          "This is <strong>particularly</strong> important for residents who work night shifts.",
        task: "Writing T2",
      },
      {
        word: "extremely",
        example:
          "The situation has become <strong>extremely</strong> disruptive to my daily routine.",
        task: "Writing T1",
      },
      {
        word: "largely",
        example:
          "The success of the program is <strong>largely</strong> dependent on community participation.",
        task: "Writing T2",
      },
      {
        word: "entirely",
        example:
          "I do not <strong>entirely</strong> agree with converting the space.",
        task: "Writing T2",
      },
      {
        word: "quite",
        example:
          "The experience was <strong>quite</strong> different from what I had expected.",
        task: "Speaking T2",
      },
      {
        word: "somewhat",
        example:
          "I am <strong>somewhat</strong> concerned about the long-term impact of this decision.",
        task: "Speaking T7",
      },
      {
        word: "barely",
        example:
          "I could <strong>barely</strong> concentrate on my work due to the constant noise.",
        task: "Writing T1",
      },
      {
        word: "especially",
        example:
          "This matters <strong>especially</strong> for families with young children.",
        task: "Writing T2",
      },
      {
        word: "incredibly",
        example:
          "Moving to a new city can be <strong>incredibly</strong> overwhelming at first.",
        task: "Speaking T5",
      },
      {
        word: "slightly",
        example:
          "The second option is <strong>slightly</strong> more expensive but far more sustainable.",
        task: "Writing T2",
      },
    ],
  },
  {
    emoji: "🔗",
    type: "Conjunctive Adverbs (Linking)",
    badge: "Transitions",
    bg: "#f0fdf4",
    color: "#166534",
    border: "#bbf7d0",
    intro:
      "Connect ideas between sentences and clauses. These are among the most important adverbs for CELPIP Writing — they directly affect your <strong>coherence score</strong>.",
    formation:
      "Standalone words used between sentences or after a semicolon: <em>however, therefore, furthermore, moreover, consequently, nevertheless, meanwhile, additionally, thus, instead, otherwise, subsequently</em>.",
    nativeTip:
      "In formal writing, conjunctive adverbs follow a <strong>period or semicolon</strong> and are followed by a comma: <em>'The noise persisted. <strong>However</strong>, my complaint was ignored.'</em> or <em>'...; however, my complaint was ignored.'</em> Using them mid-sentence without punctuation is a common error.",
    celpipUse:
      "Writing Task 1 (structured emails), Writing Task 2 (opinion essays), Speaking Task 7 and Task 5.",
    items: [
      {
        word: "however",
        example:
          "I spoke to my neighbour directly. <strong>However</strong>, the noise continued.",
        task: "Writing T1",
      },
      {
        word: "therefore",
        example:
          "The park serves hundreds of residents. <strong>Therefore</strong>, it should be preserved.",
        task: "Writing T2",
      },
      {
        word: "furthermore",
        example:
          "The cost is too high. <strong>Furthermore</strong>, the timeline is unrealistic.",
        task: "Writing T2",
      },
      {
        word: "moreover",
        example:
          "The location is convenient. <strong>Moreover</strong>, the rent is within budget.",
        task: "Speaking T5",
      },
      {
        word: "consequently",
        example:
          "The repairs were delayed. <strong>Consequently</strong>, I had to stay in a hotel.",
        task: "Writing T1",
      },
      {
        word: "nevertheless",
        example:
          "The task was difficult. <strong>Nevertheless</strong>, I completed it on time.",
        task: "Speaking T2",
      },
      {
        word: "additionally",
        example:
          "<strong>Additionally</strong>, the building lacks proper ventilation.",
        task: "Writing T1",
      },
      {
        word: "meanwhile",
        example:
          "<strong>Meanwhile</strong>, the city has approved new green spaces in other districts.",
        task: "Writing T2",
      },
      {
        word: "thus",
        example:
          "Demand for housing has risen. <strong>Thus</strong>, prices have increased significantly.",
        task: "Writing T2",
      },
      {
        word: "instead",
        example:
          "<strong>Instead</strong>, the city should invest in upgrading existing facilities.",
        task: "Writing T2",
      },
    ],
  },
  {
    emoji: "🗓️",
    type: "Adverbs of Probability & Certainty",
    badge: "How likely?",
    bg: "#fff7ed",
    color: "#c2410c",
    border: "#fed7aa",
    intro:
      "Express how certain or likely something is. Essential for Speaking Task 4 (making predictions) and Writing Task 2 (presenting an argument with appropriate hedging).",
    formation:
      "Key words: <em>certainly, definitely, probably, likely, possibly, perhaps, maybe, presumably, apparently, evidently, undoubtedly</em>.",
    nativeTip:
      "Native speakers use hedging adverbs (<em>probably, perhaps, likely</em>) to sound measured and confident — not uncertain. Saying <em>'This will probably lead to congestion'</em> sounds more sophisticated than <em>'This will make traffic bad.'</em>",
    celpipUse:
      "Speaking Task 4 (predictions), Speaking Task 7 (opinion), Writing Task 2 (argument).",
    items: [
      {
        word: "probably",
        example:
          "This change will <strong>probably</strong> lead to increased traffic congestion.",
        task: "Speaking T4",
      },
      {
        word: "certainly",
        example:
          "The removal of the park will <strong>certainly</strong> upset long-term residents.",
        task: "Writing T2",
      },
      {
        word: "likely",
        example:
          "House prices will <strong>likely</strong> continue to rise over the next decade.",
        task: "Speaking T4",
      },
      {
        word: "possibly",
        example:
          "The delay could <strong>possibly</strong> last several more weeks.",
        task: "Speaking T6",
      },
      {
        word: "undoubtedly",
        example:
          "Access to green space <strong>undoubtedly</strong> improves mental health.",
        task: "Writing T2",
      },
      {
        word: "presumably",
        example:
          "<strong>Presumably</strong>, the decision was made without consulting residents.",
        task: "Writing T2",
      },
      {
        word: "perhaps",
        example:
          "<strong>Perhaps</strong> a compromise could satisfy both the developers and the community.",
        task: "Speaking T5",
      },
      {
        word: "apparently",
        example:
          "<strong>Apparently</strong>, the construction will take at least six months.",
        task: "Speaking T8",
      },
    ],
  },
];

export const ADV_VS_ADJ = [
  {
    category: "The Core Difference",
    icon: "🧠",
    bg: "#dbeafe",
    color: "#1e40af",
    explanation:
      "An <strong>adjective</strong> describes a <strong>noun</strong> (a person, place, or thing). An <strong>adverb</strong> describes a <strong>verb, adjective, or another adverb</strong> — anything that is NOT a noun.",
    pairs: [
      {
        adj: "She is a <strong>careful</strong> driver.",
        adv: "She drives <strong>carefully</strong>.",
        note: "careful → describes 'driver' (noun) | carefully → describes 'drives' (verb)",
      },
      {
        adj: "He gave a <strong>clear</strong> explanation.",
        adv: "He explained it <strong>clearly</strong>.",
        note: "clear → describes 'explanation' (noun) | clearly → describes 'explained' (verb)",
      },
      {
        adj: "It was a <strong>significant</strong> impact.",
        adv: "It <strong>significantly</strong> affected my sleep.",
        note: "significant → describes 'impact' (noun) | significantly → describes 'affected' (verb)",
      },
      {
        adj: "She is a <strong>fluent</strong> speaker.",
        adv: "She speaks <strong>fluently</strong>.",
        note: "fluent → describes 'speaker' (noun) | fluently → describes 'speaks' (verb)",
      },
    ],
  },
  {
    category: "Linking Verbs Trap",
    icon: "⚠️",
    bg: "#fef3c7",
    color: "#92400e",
    explanation:
      "After <strong>linking verbs</strong> (be, seem, feel, look, appear, smell, taste, sound, become), use an <strong>adjective</strong>, NOT an adverb. These verbs connect the subject back to a description of itself — not an action.",
    pairs: [
      {
        adj: "She looks <strong>confident</strong>. ✓",
        adv: "She looks <strong>confidently</strong>. ✗",
        note: "'looks' here = appears/seems, not an action. Use adjective.",
      },
      {
        adj: "The situation seems <strong>serious</strong>. ✓",
        adv: "The situation seems <strong>seriously</strong>. ✗",
        note: "'seems' is a linking verb — it needs an adjective to describe the subject.",
      },
      {
        adj: "I feel <strong>terrible</strong> about the delay. ✓",
        adv: "I feel <strong>terribly</strong> about the delay. ✗",
        note: "'feel' as a linking verb takes an adjective describing the speaker's state.",
      },
      {
        adj: "The park looks <strong>beautiful</strong> in autumn. ✓",
        adv: "The park looks <strong>beautifully</strong> in autumn. ✗",
        note: "Adjective describes the park, not how it performs the action of looking.",
      },
    ],
  },
  {
    category: "Irregular Forms — the Most Common Errors",
    icon: "🔁",
    bg: "#dcfce7",
    color: "#166534",
    explanation:
      "Some adjective/adverb pairs look alike or have completely different forms. These are responsible for the most penalised errors in CELPIP.",
    pairs: [
      {
        adj: "She is a <strong>good</strong> communicator. (adj)",
        adv: "She communicates <strong>well</strong>. (adv)",
        note: "NEVER: 'She communicates good.' This is one of the most common CELPIP errors.",
      },
      {
        adj: "It was a <strong>fast</strong> decision. (adj)",
        adv: "She decided <strong>fast</strong>. (adv)",
        note: "'Fast' is both adjective and adverb. 'Fastly' does not exist.",
      },
      {
        adj: "He is a <strong>hard</strong> worker. (adj)",
        adv: "He works <strong>hard</strong>. (adv)",
        note: "'Hard' is both forms. 'Hardly' is a completely different word meaning 'almost not'.",
      },
      {
        adj: "That was a <strong>late</strong> submission. (adj)",
        adv: "She submitted it <strong>late</strong>. (adv)",
        note: "'Late' is both forms. 'Lately' means 'recently' — a different meaning entirely.",
      },
      {
        adj: "It is a <strong>high</strong> standard. (adj)",
        adv: "She aims <strong>high</strong>. (adv)",
        note: "'Highly' means 'very/greatly' (highly recommended), NOT physically high.",
      },
    ],
  },
  {
    category: "Adverb Modifying an Adjective",
    icon: "🎯",
    bg: "#ede9fe",
    color: "#5b21b6",
    explanation:
      "An adverb can modify an adjective to show degree or intensity. The adverb comes <strong>before</strong> the adjective it modifies. This is a key pattern for sounding natural on CELPIP.",
    pairs: [
      {
        adj: "The park is <strong>important</strong>.",
        adv: "The park is <strong>particularly important</strong>.",
        note: "'particularly' (adverb) intensifies 'important' (adjective).",
      },
      {
        adj: "The noise was <strong>loud</strong>.",
        adv: "The noise was <strong>extremely loud</strong>.",
        note: "'extremely' (adverb) strengthens 'loud' (adjective) — more precise than 'very loud'.",
      },
      {
        adj: "The decision was <strong>surprising</strong>.",
        adv: "The decision was <strong>somewhat surprising</strong>.",
        note: "'somewhat' (adverb) softens 'surprising' — useful for hedging in Task 7.",
      },
      {
        adj: "The process is <strong>straightforward</strong>.",
        adv: "The process is <strong>relatively straightforward</strong>.",
        note: "'relatively' (adverb) adds nuance — sounds more sophisticated than 'quite easy'.",
      },
    ],
  },
  {
    category: "CELPIP Misconceptions",
    icon: "🚫",
    bg: "#fee2e2",
    color: "#991b1b",
    explanation:
      "These are the most common wrong beliefs test-takers have about adverbs vs adjectives, and what the correct rule actually is.",
    misconceptions: [
      {
        myth: '"Any word ending in -ly is an adverb."',
        truth:
          "Several common <strong>adjectives</strong> end in -ly: <em>friendly, lovely, lonely, lively, elderly, likely, timely, costly, orderly</em>. These describe nouns, not verbs.",
        wrong:
          "She gave a <strong>friendly</strong> greeting. → 'friendly' is an ADJECTIVE here (describes 'greeting').",
        right:
          "She greeted us in a <strong>friendly</strong> manner. → still adjective. There is no 'friendlily' in standard English.",
      },
      {
        myth: '"Adverbs always come right after the verb."',
        truth:
          "Adverb placement depends on the type. Frequency adverbs go <strong>before</strong> the main verb. Conjunctive adverbs go at the <strong>start of a new sentence</strong>. Manner adverbs typically go <strong>after the object</strong>.",
        wrong: "I go always to the park. | She explained clearly the issue.",
        right:
          "I <strong>always</strong> go to the park. | She explained the issue <strong>clearly</strong>.",
      },
      {
        myth: "\"'Hardly' means the same as 'hard' used as an adverb.\"",
        truth:
          "'<strong>Hard</strong>' as an adverb means with effort or force. '<strong>Hardly</strong>' means almost not at all — almost the opposite meaning.",
        wrong: "I worked hardly all week. (implies you barely worked)",
        right:
          "I worked <strong>hard</strong> all week. | I could <strong>hardly</strong> concentrate due to the noise.",
      },
      {
        myth: "\"'Good' and 'well' are interchangeable.\"",
        truth:
          "'<strong>Good</strong>' is always an adjective. '<strong>Well</strong>' is the adverb (and also an adjective meaning healthy). Using 'good' as an adverb is one of the most penalised errors in CELPIP readability scoring.",
        wrong: "She performed good in the interview. | He writes good.",
        right:
          "She performed <strong>well</strong>. | He writes <strong>well</strong>. | She is a <strong>good</strong> writer.",
      },
      {
        myth: '"Adjectives can be used after action verbs."',
        truth:
          "After action verbs, you must use an <strong>adverb</strong>. Only after <strong>linking verbs</strong> (seem, feel, appear, look, become) do you use an adjective.",
        wrong: "She spoke polite. | He answered quick.",
        right:
          "She spoke <strong>politely</strong>. | He answered <strong>quickly</strong>.",
      },
      {
        myth: "\"'Lately' and 'late' mean the same thing.\"",
        truth:
          "'<strong>Late</strong>' as an adverb means not on time or after the expected moment. '<strong>Lately</strong>' means recently — a completely different meaning.",
        wrong:
          "I have been arriving lately to work. (sounds like 'recently arriving')",
        right:
          "I have been arriving <strong>late</strong> to work. | <strong>Lately</strong>, I have been struggling with the commute.",
      },
    ],
  },
];

export const ADV_MISTAKES = [
  {
    icon: "❌",
    title: "Using 'very' for everything",
    wrong:
      "The noise is <em>very very</em> bad. It is <em>very</em> disturbing and <em>very</em> loud.",
    right:
      "The noise is <em>extremely</em> disruptive and <em>particularly</em> loud during late evenings.",
    tip: "Replace 'very + adjective' with a single stronger adverb+adjective pair. CELPIP rewards vocabulary range.",
    score: "Vocabulary score ↑",
  },
  {
    icon: "❌",
    title: "Wrong position — adverb before auxiliary",
    wrong: "I <em>completely have</em> addressed this issue.",
    right: "I have <em>completely</em> addressed this issue.",
    tip: "Degree and frequency adverbs go <strong>after</strong> the auxiliary verb (have, is, was, will), not before it.",
    score: "Readability score ↑",
  },
  {
    icon: "❌",
    title: "Confusing adjective and adverb forms",
    wrong: "She performed <em>good</em> in her interview.",
    right: "She performed <em>well</em> in her interview.",
    tip: "<strong>Good</strong> is an adjective (modifies nouns). <strong>Well</strong> is the adverb (modifies verbs). This is one of the most penalised errors in CELPIP.",
    score: "Readability score ↑",
  },
  {
    icon: "❌",
    title: "Overusing 'basically' and 'actually'",
    wrong:
      "<em>Basically</em>, I think the park is <em>basically</em> important. <em>Actually</em>, it is <em>actually</em> very good.",
    right:
      "The park is <em>fundamentally</em> important to the community's wellbeing.",
    tip: "'Basically' and 'actually' are filler words in informal speech. Replace them with precise adverbs in CELPIP responses.",
    score: "Coherence + Vocabulary ↑",
  },
  {
    icon: "❌",
    title: "Missing the adverb entirely — flat, vague statements",
    wrong: "The situation affected my sleep. I tried to fix it.",
    right:
      "The situation has <em>significantly</em> affected my sleep. I have <em>already</em> attempted to resolve it <em>independently</em>.",
    tip: "Adding adverbs of degree (significantly), time (already), and manner (independently) immediately makes your writing richer and more precise.",
    score: "Coherence + Task Fulfillment ↑",
  },
  {
    icon: "❌",
    title: "Putting conjunctive adverbs mid-clause without punctuation",
    wrong: "The park is important however it is underused.",
    right: "The park is important. <em>However</em>, it is underused.",
    tip: "Conjunctive adverbs (however, therefore, moreover) must be preceded by a period or semicolon, and followed by a comma.",
    score: "Readability score ↑",
  },
  {
    icon: "❌",
    title: "Using 'also' as the only linking adverb",
    wrong:
      "The park is good for children. It is <em>also</em> good for seniors. It is <em>also</em> a community space.",
    right:
      "The park benefits children. <em>Furthermore</em>, it serves seniors. <em>Additionally</em>, it functions as a vital community hub.",
    tip: "Vary your conjunctive adverbs. Using only 'also' signals a low vocabulary range. Rotate: furthermore, moreover, additionally, in addition.",
    score: "Vocabulary + Coherence ↑",
  },
  {
    icon: "❌",
    title: "Placing frequency adverbs after the main verb",
    wrong: "I go <em>always</em> to the park on weekends.",
    right: "I <em>always</em> go to the park on weekends.",
    tip: "Frequency adverbs (always, usually, often, rarely, never) go <strong>before</strong> the main verb, not after it.",
    score: "Readability score ↑",
  },
];

export const UPGRADE_BANK = ([
  { basic: "good", upgrades: ["beneficial", "effective", "commendable"] },
  { basic: "bad", upgrades: ["detrimental", "problematic", "adverse"] },
  { basic: "big", upgrades: ["substantial", "considerable", "extensive"] },
  { basic: "small", upgrades: ["minimal", "negligible", "modest"] },
  { basic: "nice", upgrades: ["pleasant", "appealing", "delightful"] },
  { basic: "important", upgrades: ["crucial", "pivotal", "indispensable"] },
  {
    basic: "interesting",
    upgrades: ["compelling", "thought-provoking", "intriguing"],
  },
  { basic: "happy", upgrades: ["thrilled", "elated", "gratified"] },
  { basic: "sad", upgrades: ["disheartened", "dejected", "distressed"] },
  {
    basic: "hard / difficult",
    upgrades: ["challenging", "demanding", "arduous"],
  },
  { basic: "easy", upgrades: ["straightforward", "effortless", "accessible"] },
  { basic: "fast", upgrades: ["rapid", "swift", "expeditious"] },
  { basic: "slow", upgrades: ["gradual", "sluggish", "unhurried"] },
  { basic: "old", upgrades: ["aged", "antiquated", "time-honoured"] },
  { basic: "new", upgrades: ["innovative", "cutting-edge", "contemporary"] },
  { basic: "tired", upgrades: ["exhausted", "drained", "fatigued"] },
  { basic: "scared", upgrades: ["apprehensive", "anxious", "alarmed"] },
  { basic: "busy", upgrades: ["hectic", "demanding", "action-packed"] },
  { basic: "clean", upgrades: ["immaculate", "spotless", "pristine"] },
  { basic: "different", upgrades: ["distinct", "contrasting", "diverse"] },
]);


export const ADV_CELPIP_TASKS = [
  {
    taskNum: "Speaking Task 3",
    taskName: "Describing a Scene",
    badge: "🗣️ ST3",
    badgeBg: "#fef3c7",
    badgeColor: "#92400e",
    scenario:
      "You are shown a busy outdoor farmer's market. Describe what you see.",
    sample: `In this picture, I can see a <em>lively</em> farmer's market taking place <em>outdoors</em>. <em>Immediately</em> in the foreground, a woman is <em>carefully</em> examining a basket of vegetables, while a vendor stands <em>nearby</em>, smiling <em>warmly</em>. <em>Further</em> in the background, there are <em>brightly</em> coloured stalls arranged <em>neatly</em> in rows. Children are running <em>excitedly</em> between the stalls, and a man in a red jacket is walking <em>purposefully</em> toward the entrance. The atmosphere appears <em>particularly</em> cheerful, and the market seems <em>well</em>-attended by people of all ages.`,
    adverbsUsed: [
      "immediately",
      "carefully",
      "nearby",
      "warmly",
      "further",
      "brightly",
      "neatly",
      "excitedly",
      "purposefully",
      "particularly",
      "well",
    ],
    tip: "In Task 3, stack manner adverbs (carefully, warmly, excitedly) with place adverbs (nearby, further, in the foreground) to create vivid, layered descriptions.",
  },
  {
    taskNum: "Speaking Task 4",
    taskName: "Making Predictions",
    badge: "🗣️ ST4",
    badgeBg: "#dcfce7",
    badgeColor: "#166534",
    scenario:
      "Look at the image of a busy city construction site near a residential area. Predict what will happen next.",
    sample: `Based on what I can see, this area will <em>likely</em> undergo significant development over the next few years. The construction is <em>clearly</em> progressing <em>rapidly</em>, and it will <em>probably</em> attract more businesses and residents to the area. <em>Consequently</em>, traffic will <em>almost certainly</em> increase, which may <em>negatively</em> impact the quality of life for people <em>currently</em> living nearby. <em>Eventually</em>, however, the neighbourhood will <em>undoubtedly</em> benefit from improved infrastructure and amenities.`,
    adverbsUsed: [
      "likely",
      "clearly",
      "rapidly",
      "probably",
      "consequently",
      "almost certainly",
      "negatively",
      "currently",
      "eventually",
      "undoubtedly",
    ],
    tip: "Probability adverbs (likely, probably, certainly, undoubtedly) are essential in Task 4 — they show you understand the difference between facts and predictions.",
  },
  {
    taskNum: "Speaking Task 7",
    taskName: "Expressing an Opinion",
    badge: "🗣️ ST7",
    badgeBg: "#ede9fe",
    badgeColor: "#5b21b6",
    scenario:
      "Do you agree or disagree: children should not be allowed to use smartphones until age 13?",
    sample: `I <em>strongly</em> believe that a total ban is <em>largely</em> unrealistic in today's world. Children are <em>increasingly</em> exposed to technology from a very young age, and <em>completely</em> restricting access can <em>actually</em> leave them <em>poorly</em> prepared for modern life. <em>However</em>, I <em>firmly</em> agree that parents should <em>carefully</em> monitor and <em>actively</em> limit screen time. <em>Ultimately</em>, it is not about banning smartphones <em>outright</em>, but about using them <em>responsibly</em> and <em>purposefully</em>.`,
    adverbsUsed: [
      "strongly",
      "largely",
      "increasingly",
      "completely",
      "actually",
      "poorly",
      "however",
      "firmly",
      "carefully",
      "actively",
      "ultimately",
      "outright",
      "responsibly",
      "purposefully",
    ],
    tip: "In Task 7, open with a stance adverb (strongly, firmly, genuinely), use degree adverbs to qualify your claims (largely, completely), and close with a conjunctive adverb (ultimately, therefore).",
  },
  {
    taskNum: "Writing Task 1",
    taskName: "Email Writing",
    badge: "✉️ WT1",
    badgeBg: "#dbeafe",
    badgeColor: "#1e40af",
    scenario:
      "Your upstairs neighbour has been making noise late at night. Write to your building manager.",
    sample: `I am writing to <em>formally</em> bring an ongoing noise issue to your attention. For the past two weeks, my upstairs neighbour has been <em>consistently</em> playing loud music late at night, <em>typically</em> beginning around 10 p.m. and <em>frequently</em> continuing past midnight. I have <em>already</em> spoken to the neighbour <em>directly</em>, but the situation has not <em>noticeably</em> improved.\n\nThis has <em>significantly</em> disrupted my sleep and has <em>negatively</em> affected my ability to work <em>effectively</em> the following morning. I am <em>currently</em> working from home, which makes this <em>particularly</em> problematic.\n\nI would <em>greatly</em> appreciate it if you could look into this matter <em>promptly</em>. I look forward to hearing from you <em>soon</em>.`,
    adverbsUsed: [
      "formally",
      "consistently",
      "typically",
      "frequently",
      "already",
      "directly",
      "noticeably",
      "significantly",
      "negatively",
      "effectively",
      "currently",
      "particularly",
      "greatly",
      "promptly",
      "soon",
    ],
    tip: "In Task 1 emails, use time adverbs (already, currently, previously) to establish a timeline, manner adverbs (formally, directly, promptly) to set a professional tone, and degree adverbs (significantly, particularly) to justify urgency.",
  },
  {
    taskNum: "Writing Task 2",
    taskName: "Survey Response",
    badge: "📝 WT2",
    badgeBg: "#f0fdf4",
    badgeColor: "#166534",
    scenario:
      "Should the city convert its central park into a shopping mall? Give your opinion.",
    sample: `I <em>strongly</em> oppose converting the park into a commercial development. Green spaces are <em>fundamentally</em> important to the physical and mental health of urban residents, <em>particularly</em> those who live in high-density apartments and do not have <em>readily</em> available outdoor space.\n\nThe park is <em>currently</em> used by hundreds of families every weekend. Children <em>regularly</em> rely on it for outdoor play, and seniors gather there <em>daily</em> for exercise and socializing. Removing this space would <em>disproportionately</em> affect the most vulnerable residents.\n\n<em>Furthermore</em>, commercial malls are <em>increasingly</em> losing relevance as online shopping grows. <em>Consequently</em>, investing in a mall is a <em>financially</em> questionable decision. <em>Instead</em>, the city should <em>actively</em> invest in upgrading and expanding the park. <em>Ultimately</em>, a community's long-term wellbeing should <em>always</em> take priority over short-term commercial gain.`,
    adverbsUsed: [
      "strongly",
      "fundamentally",
      "particularly",
      "readily",
      "currently",
      "regularly",
      "daily",
      "disproportionately",
      "furthermore",
      "increasingly",
      "consequently",
      "financially",
      "instead",
      "actively",
      "ultimately",
      "always",
    ],
    tip: "In Task 2, use conjunctive adverbs (furthermore, consequently, instead, ultimately) to structure paragraphs. Use degree adverbs (fundamentally, disproportionately, financially) to make your argument sound analytical and mature.",
  },
];

export const ADV_NATIVE_PATTERNS = [
  {
    pattern: "Stance opener",
    example: "<strong>Honestly</strong>, I think the park should be preserved.",
    note: "Opens with your attitude — sounds natural and direct in speaking tasks.",
  },
  {
    pattern: "Fronted time adverb",
    example:
      "<strong>Recently</strong>, I noticed a significant change in my neighbourhood.",
    note: "Puts the time context first — common in emails and spoken narratives.",
  },
  {
    pattern: "Adverb sandwich",
    example: "She spoke <strong>calmly</strong> but <strong>firmly</strong>.",
    note: "Two manner adverbs contrasted — adds sophistication.",
  },
  {
    pattern: "Degree + adjective upgrade",
    example:
      "It's <strong>particularly</strong> challenging for working parents.",
    note: "Replaces 'very hard for parents' — sounds more academic.",
  },
  {
    pattern: "Hedged prediction",
    example:
      "Prices will <strong>likely</strong> rise <strong>significantly</strong> over the next year.",
    note: "Two adverbs: one for probability, one for degree. Sounds native and measured.",
  },
  {
    pattern: "Concession + rebound",
    example:
      "The plan is <strong>largely</strong> beneficial. <strong>However</strong>, it needs <strong>carefully</strong> considered safeguards.",
    note: "Classic CELPIP opinion structure: admit a nuance, then redirect.",
  },
  {
    pattern: "Intensified passive",
    example: "The issue has been <strong>widely</strong> documented.",
    note: "Adverb before a past participle — common in formal writing.",
  },
  {
    pattern: "Stacked frequency",
    example:
      "Residents <strong>consistently</strong> and <strong>repeatedly</strong> raise this concern.",
    note: "Two frequency adverbs for emphasis — used in formal complaints.",
  },
];

export const VOICE_TRAPS = [
  {
    wrong: "✗ The letter was written by me to the manager.",
    right: "✓ I wrote the letter to the manager.",
    why: 'When the doer (agent) IS known and important, active voice is cleaner. Passive with "by me" sounds awkward and unnatural.',
  },
  {
    wrong: "✗ A decision was made by the committee to reject the proposal.",
    right: "✓ The committee decided to reject the proposal.",
    why: "If you know the agent and want to emphasise who acted, use active voice. Passive here buries the most important information.",
  },
  {
    wrong: "✗ The problem should be spoken about to your manager by you.",
    right: "✓ You should speak to your manager about the problem.",
    why: "Passive voice with advice (should) sounds extremely unnatural in speaking. Active is always preferred for advice-giving.",
  },
  {
    wrong: "✗ It was gone to the store by her.",
    right: "✓ She went to the store.",
    why: "Intransitive verbs (go, arrive, sleep) cannot be made passive — they have no object to become the subject. This is one of the most common passive errors.",
  },
  {
    wrong: "✗ My essay has been written by me yesterday.",
    right: "✓ I wrote my essay yesterday.",
    why: "Passive voice with clear personal authorship and a past time marker is redundant. Simple past active is natural here.",
  },
  {
    wrong:
      "✗ The new policy was being announced by the government last Tuesday.",
    right: "✓ The government announced the new policy last Tuesday.",
    why: 'Past continuous passive ("was being announced") is awkward when a simple past active construction communicates the same idea more clearly.',
  },
];
