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
