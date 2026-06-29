// @ts-nocheck
/* eslint-disable */

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "My Template" },
  { id: "vocab", label: "Vocab Bank" },
  { id: "tips", label: "Pro Tips" },
];

export const SCORE_CRITERIA = [
  {
    label: "Comparison",
    badge: "bg-sapphire-light text-sapphire-dark",
    text: 'Clear comparative language ("much cheaper," "more durable") and use of the specific details — especially prices and numbers — from the pictures.',
  },
  {
    label: "Persuasion",
    badge: "bg-emerald2-light text-emerald2-dark",
    text: "You clearly choose one option, address the person directly, gently dismiss their choice, and ask for their agreement. Don't sit on the fence.",
  },
  {
    label: "Coherence",
    badge: "bg-amber2-light text-amber2-dark",
    text: "A logical flow: opening → 2–3 compared points → conclusion. Transitions make it easy to follow.",
  },
  {
    label: "Grammar",
    badge: "bg-rose2-light text-rose2-dark",
    text: 'Accurate comparative structures (avoid "more cheaper") and varied, complex sentences.',
  },
];

export const BLUEPRINT = [
  {
    n: "1",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Opening & Soft Rejection (10s)",
    desc: "Greet the person, acknowledge their option, and state which one you've chosen",
  },
  {
    n: "2",
    circle: "bg-fog/20 border-fog/40",
    accent: "text-fog",
    title: "Compare 2–3 Points (40s)",
    desc: "Price first, then value, then one detail — comparing your choice against theirs",
  },
  {
    n: "3",
    circle: "bg-gold/20 border-gold/40",
    accent: "text-gold",
    title: "Conclusion (10s)",
    desc: "Restate your choice and ask for their agreement",
  },
];

export const SCORE_BANDS = [
  {
    title: "Score 10–12 (Advanced)",
    dot: "text-emerald2",
    lines: {
      Comparison:
        "Rich comparative language and confident use of the specific prices/details from both options.",
      Persuasion:
        "Clearly chooses one option, addresses the person warmly, softly rejects their choice, and asks for agreement.",
      Coherence: "Opening → compared points → conclusion flows seamlessly.",
      Grammar: "Accurate comparatives and complex structures throughout.",
    },
  },
  {
    title: "Score 7–9 (Upper-Intermediate)",
    dot: "text-amber2",
    lines: {
      Comparison:
        "Good comparative language with 2 clear points; uses some specific details.",
      Persuasion:
        "Chooses an option and persuades, though the soft rejection or the request for agreement may be thin.",
      Coherence:
        "Logical and mostly easy to follow; transitions may be basic.",
      Grammar:
        "Mostly accurate; minor comparative errors don't impede meaning.",
    },
  },
  {
    title: "Score 4–6 (Intermediate)",
    dot: "text-rose2",
    lines: {
      Comparison:
        "Basic comparison; rarely uses the specific prices/details. Asserts rather than compares.",
      Persuasion:
        "The choice may be unclear, or it doesn't sound like persuading a real person.",
      Coherence:
        "Some structure, but the flow jumps around or one point dominates.",
      Grammar: 'Comparative errors ("more cheaper"); meaning sometimes unclear.',
    },
  },
  {
    title: "Score 1–3 (Below Intermediate)",
    dot: "text-slate",
    lines: {
      Comparison:
        "Little or no real comparison; no use of the details provided.",
      Persuasion: "No clear choice, or doesn't address a person at all.",
      Coherence: "Disjointed or very brief. Hard to follow.",
      Grammar: "Frequent errors. Meaning is often unclear.",
    },
  },
];

export const SAMPLE_ANSWERS = [
  {
    accent: "text-gold",
    scenario: "Scenario 1 · A birthday gift (persuading your friend John)",
    options: "Tablet ($300) vs. Smartwatch ($100).",
    chosen: "Smartwatch.",
    optionA: {
      label: "🖼️ Option A — Tablet",
      prompt:
        "A modern black tablet with a large glossy screen displaying a movie, standing upright on a desk, price tag reading $300, clean studio product photography, white background, photorealistic.",
    },
    optionB: {
      label: "🖼️ Option B — Smartwatch",
      prompt:
        "A sleek fitness smartwatch with a round screen showing a step-count and heart-rate display, silicone sport band, price tag reading $100, clean studio product photography, white background, photorealistic.",
    },
    opening:
      "Hi John, I saw you were leaning toward the tablet. I understand why — the big screen is nice — but I actually think the smartwatch is the better choice for us.",
    compare:
      "First, regarding price, the smartwatch is only a hundred dollars, which is much cheaper than the tablet at three hundred — so we'd have plenty left for the party. Also, it has fitness and heart-rate tracking, which is more useful because he loves running. Finally, it's water-resistant, so it'll last far longer than a fragile tablet screen.",
    conclusion:
      "So for these reasons, I really think we should go with the smartwatch — it's cheaper and more practical. Let me know if you agree, and we can order it today!",
  },
  {
    accent: "text-sapphire",
    scenario:
      "Scenario 2 · A family celebration venue (persuading your sister)",
    options:
      "Downtown restaurant ($60/person) vs. Lakeside park pavilion ($150 total).",
    chosen: "Park pavilion.",
    optionA: {
      label: "🖼️ Option A — Restaurant",
      prompt:
        "An elegant downtown restaurant interior with formal table settings, warm chandelier lighting, waiters in the background, a small sign reading $60 per person, photorealistic, wide interior shot.",
    },
    optionB: {
      label: "🖼️ Option B — Park pavilion",
      prompt:
        "A bright lakeside park pavilion with picnic tables under a wooden shelter, green trees and a calm lake behind it, families gathering, a small sign reading $150 total rental, sunny day, photorealistic, wide shot.",
    },
    opening:
      "Hi Sara, I saw you were leaning toward the downtown restaurant. I understand why — it does look lovely — but I actually think the lakeside park pavilion is the better choice for us.",
    compare:
      "First, regarding price, the pavilion is just a hundred and fifty dollars for the whole group, which is much cheaper than the restaurant at sixty dollars per person — for fifteen people that's nine hundred dollars. Also, it gives the kids space to run around by the lake, which is more useful because they get restless indoors. Finally, we can bring Mom's favourite homemade food instead of a fixed set menu.",
    conclusion:
      "So for these reasons, I really think we should go with the park pavilion — it's cheaper and more fun. Let me know if you agree, and I'll book it!",
  },
  {
    accent: "text-emerald2",
    scenario: "Scenario 3 · A new office desk (persuading your colleague)",
    options: "Large L-shaped desk ($450) vs. Compact standing desk ($250).",
    chosen: "Standing desk.",
    optionA: {
      label: "🖼️ Option A — L-shaped desk",
      prompt:
        "A large wooden L-shaped office desk with plenty of surface space in a modern office, a price tag reading $450, clean lighting, photorealistic, product shot.",
    },
    optionB: {
      label: "🖼️ Option B — Standing desk",
      prompt:
        "A compact electric height-adjustable standing desk raised to standing position with a laptop on top, in a modern office, a price tag reading $250, clean lighting, photorealistic, product shot.",
    },
    opening:
      "Hi Priya, I saw you were leaning toward the big L-shaped desk. I understand why — all that space is tempting — but I actually think the compact standing desk is the better choice for us.",
    compare:
      "First, regarding price, the standing desk is two hundred and fifty dollars, which is much cheaper than the L-shaped one at four hundred and fifty — so we could buy two for the team. Also, it's height-adjustable, which is more useful because we sit all day and it's healthier for our backs. Finally, it's compact, so it fits our small office and leaves room to move around.",
    conclusion:
      "So for these reasons, I really think we should go with the standing desk — it's cheaper and healthier. Let me know if you agree!",
  },
  {
    accent: "text-amber2",
    scenario: "Scenario 4 · A family vacation (persuading your partner)",
    options:
      "Beach resort package ($2,000) vs. Mountain cabin getaway ($1,200).",
    chosen: "Mountain cabin.",
    optionA: {
      label: "🖼️ Option A — Beach resort",
      prompt:
        "A luxury tropical beach resort with palm trees, a large pool beside white sand and turquoise sea, sun loungers, a small sign reading $2000 per week, bright sunny day, photorealistic, wide shot.",
    },
    optionB: {
      label: "🖼️ Option B — Mountain cabin",
      prompt:
        "A cozy wooden mountain cabin surrounded by pine forest and snowy peaks, smoke rising from the chimney, a small sign reading $1200 per week, crisp daylight, photorealistic, wide shot.",
    },
    opening:
      "Hi love, I saw you were leaning toward the beach resort. I understand why — it does look amazing — but I actually think the mountain cabin is the better choice for us.",
    compare:
      "First, regarding price, the cabin is twelve hundred dollars, which is much cheaper than the resort at two thousand — that's eight hundred dollars we could save for next year's holiday. Also, it's far more peaceful and private, which is more useful because we really need to unwind. Finally, the kids would love hiking and seeing the snow, which is something completely new for them.",
    conclusion:
      "So for these reasons, I really think we should go with the cabin — it's cheaper and cosier. Let me know if you agree, and I'll book the dates!",
  },
  {
    accent: "text-rose2",
    scenario: "Scenario 5 · A new family car (persuading your spouse)",
    options:
      "Spacious SUV ($35,000) vs. Fuel-efficient hybrid sedan ($28,000).",
    chosen: "Hybrid sedan.",
    optionA: {
      label: "🖼️ Option A — SUV",
      prompt:
        "A large modern silver SUV parked in a dealership, spacious and tall, a price tag reading $35,000, clean showroom lighting, photorealistic, three-quarter front view.",
    },
    optionB: {
      label: "🖼️ Option B — Hybrid sedan",
      prompt:
        "A sleek modern blue hybrid sedan parked in a dealership, a small green hybrid badge, a price tag reading $28,000, clean showroom lighting, photorealistic, three-quarter front view.",
    },
    opening:
      "Hi honey, I saw you were leaning toward the big SUV. I understand why — it's roomy — but I actually think the hybrid sedan is the better choice for us.",
    compare:
      "First, regarding price, the hybrid is twenty-eight thousand dollars, which is much cheaper than the SUV at thirty-five thousand — that's seven thousand dollars saved. Also, it's far more fuel-efficient, which is more useful because we'd save a lot on gas every month. Finally, it's easier to park in the city, which matters since we drive downtown a lot.",
    conclusion:
      "So for these reasons, I really think we should go with the hybrid sedan — it's cheaper to own and easier to drive. Let me know if you agree, and we can test-drive it this weekend!",
  },
];

export const TIPS = [
  {
    category: "prep",
    color: "text-gold",
    title: "Pick your position in the first 10 seconds.",
    body: "Don't spend time deciding which option is better. Choose immediately, then jot down 2–3 reasons with examples.",
  },
  {
    category: "prep",
    color: "text-sapphire",
    title: "Use the actual prices and details from the pictures.",
    body: '"It\'s cheaper" is weak. "It\'s $100 vs. $300, so $200 cheaper" is strong. The numbers shown in both options are your best evidence — quote them.',
  },
  {
    category: "delivery",
    color: "text-emerald2",
    title: "Talk to the person — greet them by name.",
    body: 'This is a conversation, not a speech. Open with "Hi [name]," acknowledge their choice, and sound warm and confident throughout, as if you\'re really persuading them.',
  },
  {
    category: "delivery",
    color: "text-amber2",
    title: 'Use "first," "second" deliberately to structure your speech.',
    body: "Explicit structure shows organization and prevents rambling. It also makes it easier for the examiner to follow.",
  },
  {
    category: "language",
    color: "text-rose2",
    title: "Use comparison language — don't just assert.",
    body: 'Instead of "Option B is good," say "Option B is more cost-effective because..." The comparison structure shows sophistication.',
  },
  {
    category: "language",
    color: "text-violet2",
    title: "Acknowledge the other option, then counter it.",
    body: '"While option A has flexibility, option B is superior because..." Shows balanced, mature thinking.',
  },
  {
    category: "mistakes",
    color: "text-gold",
    title: 'Never say "I think both are equally good."',
    body: "Fence-sitting kills your score. The task specifically asks you to choose. Pick one and defend it.",
  },
  {
    category: "mistakes",
    color: "text-sapphire",
    title: "Don't memorize the same argument twice.",
    body: "If you practice the same scenario repeatedly, the examiner can tell it's memorized. Use prep time to generate fresh examples.",
  },
];

export const TIP_FILTERS = [
  { id: "all", label: "All" },
  { id: "prep", label: "Prep" },
  { id: "delivery", label: "Delivery" },
  { id: "language", label: "Language" },
  { id: "mistakes", label: "Mistakes" },
];
