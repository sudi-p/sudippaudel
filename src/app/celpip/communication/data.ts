export const CATEGORIES = [
        {
          id: "giving-suggestions",
          emoji: "💡",
          title: "Giving Suggestions",
          color: "#1d4ed8",
          bg: "#dbeafe",
          border: "#93c5fd",
          celpipTasks: [
            "Speaking Task 1",
            "Speaking Task 6",
            "Writing Task 1 (Email)",
          ],
          intro:
            "Used when you want to propose an idea or course of action without being pushy. Native speakers soften suggestions to show respect.",
          vocab: [
            {
              word: "Perhaps",
              example: "Perhaps we could meet on Friday instead.",
              note: "Softest suggestion — very polite, almost tentative.",
            },
            {
              word: "Maybe",
              example: "Maybe you should try calling them first.",
              note: "Casual and common in everyday speech.",
            },
            {
              word: "You might want to",
              example: "You might want to arrive early to get a good seat.",
              note: "Indirect; gives the listener full choice.",
            },
            {
              word: "Have you considered",
              example: "Have you considered taking the train?",
              note: "Question form; invites the person to think, not just comply.",
            },
            {
              word: "It might be worth",
              example: "It might be worth checking the weather before you go.",
              note: "Frames the suggestion as a value judgment.",
            },
            {
              word: "Why don't you",
              example: "Why don't you talk to your manager about it?",
              note: "Informal and friendly — common between colleagues.",
            },
            {
              word: "I'd suggest",
              example: "I'd suggest reviewing the report one more time.",
              note: "Slightly more assertive; own the idea without imposing.",
            },
            {
              word: "I strongly recommend",
              example: "I strongly recommend getting travel insurance.",
              note: "Confident and decisive — used when you're an expert or certain.",
            },
          ],
          intensityLevels: [
            {
              level: "Gentle",
              color: "#16a34a",
              bg: "#f0fdf4",
              example: "Perhaps you could look into it when you have time.",
            },
            {
              level: "Moderate",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "I'd suggest speaking with HR about this as soon as possible.",
            },
            {
              level: "Strong",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I strongly urge you to reconsider this decision immediately.",
            },
          ],
          mistakes: [
            {
              title: "Using the imperative instead of a suggestion",
              wrong: "Go to the doctor.",
              right: "You might want to see a doctor about that.",
              why: "In English, direct commands sound rude in suggestion contexts. Native speakers buffer with 'might', 'could', 'perhaps'.",
            },
            {
              title: "Overusing 'should' without hedging",
              wrong: "You should eat less sugar.",
              right:
                "You might want to cut back on sugar — it could really help.",
              why: "'Should' alone can feel judgmental. Pair it with 'might' or add a reason to soften it.",
            },
            {
              title: "Missing the conditional in formal writing",
              wrong: "I suggest to increase the budget.",
              right: "I would suggest increasing the budget.",
              why: "After 'suggest', use a gerund (-ing), not an infinitive (to + verb). 'Would' adds formality.",
            },
          ],
        },
        {
          id: "making-requests",
          emoji: "🙏",
          title: "Making Requests",
          color: "#6d28d9",
          bg: "#ede9fe",
          border: "#c4b5fd",
          celpipTasks: ["Writing Task 1 (Email)", "Speaking Task 6"],
          intro:
            "Requests range from casual to highly formal depending on the situation. CELPIP emails often require you to make polite, professional requests.",
          vocab: [
            {
              word: "Can you",
              example: "Can you send me the file by tomorrow?",
              note: "Informal — fine between friends and coworkers.",
            },
            {
              word: "Could you",
              example: "Could you please forward this to the team?",
              note: "More polite than 'can'; adds a layer of formality.",
            },
            {
              word: "Would you mind",
              example: "Would you mind lowering the music?",
              note: "Very polite; implies you're aware you're inconveniencing them.",
            },
            {
              word: "I was wondering if you could",
              example: "I was wondering if you could look into this issue.",
              note: "Formal and indirect — ideal for professional emails.",
            },
            {
              word: "I'd appreciate it if",
              example: "I'd appreciate it if you could reply by end of day.",
              note: "Expresses gratitude in advance; very professional.",
            },
            {
              word: "I'd like to request",
              example: "I'd like to request a change to my schedule.",
              note: "Clear and formal — good for written requests to managers.",
            },
            {
              word: "Is it possible to",
              example: "Is it possible to get an extension on the deadline?",
              note: "Leaves the door open; doesn't pressure the recipient.",
            },
          ],
          intensityLevels: [
            {
              level: "Casual",
              color: "#16a34a",
              bg: "#f0fdf4",
              example: "Hey, can you grab me a coffee?",
            },
            {
              level: "Polite",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "Could you possibly send that report over when you have a moment?",
            },
            {
              level: "Formal",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I would be most grateful if you could provide the requested documentation at your earliest convenience.",
            },
          ],
          mistakes: [
            {
              title: "Starting a formal email with 'I want you to'",
              wrong: "I want you to give me a refund.",
              right: "I would like to request a refund for the damaged item.",
              why: "'I want you to' sounds demanding. In formal writing, 'I would like to' is the standard polite alternative.",
            },
            {
              title: "Forgetting to include the reason in a request email",
              wrong: "Please reschedule my appointment.",
              right:
                "Due to an unexpected conflict, I'd appreciate it if we could reschedule my appointment.",
              why: "CELPIP email tasks require context. Giving a reason makes the request sound legitimate and polite.",
            },
          ],
        },
        {
          id: "explaining-difficult-situations",
          emoji: "🔍",
          title: "Explaining a Difficult Situation",
          color: "#b45309",
          bg: "#fef3c7",
          border: "#fde68a",
          celpipTasks: [
            "Speaking Task 6",
            "Speaking Task 2",
            "Writing Task 1 (Email)",
          ],
          intro:
            "When describing a problem, complaint, or challenging scenario, native speakers use specific language to set context, show impact, and maintain a respectful tone.",
          vocab: [
            {
              word: "Unfortunately",
              example: "Unfortunately, the delivery never arrived.",
              note: "Signals that bad news is coming; softens the impact.",
            },
            {
              word: "The issue is that",
              example:
                "The issue is that the noise level is affecting my work.",
              note: "Clearly frames the core problem.",
            },
            {
              word: "I'm concerned about",
              example: "I'm concerned about the safety of the equipment.",
              note: "Professional; expresses worry without accusation.",
            },
            {
              word: "As a result",
              example: "As a result, we missed the deadline.",
              note: "Shows cause-and-effect — critical for CELPIP task coherence.",
            },
            {
              word: "This has led to",
              example: "This has led to significant delays in our project.",
              note: "Stronger consequence marker; formal and precise.",
            },
            {
              word: "To make matters worse",
              example:
                "To make matters worse, the replacement also arrived damaged.",
              note: "Adds a second problem layer — useful in complaint writing.",
            },
            {
              word: "I would like to bring to your attention",
              example:
                "I would like to bring to your attention a recurring problem.",
              note: "Very formal opener for written complaints.",
            },
            {
              word: "Despite",
              example:
                "Despite several reminders, the issue remains unresolved.",
              note: "Shows contrast; signals persistence.",
            },
          ],
          intensityLevels: [
            {
              level: "Mild concern",
              color: "#16a34a",
              bg: "#f0fdf4",
              example:
                "I just wanted to mention that the printer has been a bit slow lately.",
            },
            {
              level: "Clear problem",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "Unfortunately, the situation has been affecting our team's productivity significantly.",
            },
            {
              level: "Serious complaint",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I must express my deep dissatisfaction with the repeated failure to address this critical issue.",
            },
          ],
          mistakes: [
            {
              title: "Describing events out of order",
              wrong: "The package broke and I ordered it and it came late.",
              right:
                "I placed the order on May 1st. It arrived two weeks late, and when it did, the item was broken.",
              why: "CELPIP markers assess coherence. Use chronological order with time markers (first, then, as a result) to score higher.",
            },
            {
              title: "Using 'very bad' instead of precise vocabulary",
              wrong: "The situation was very bad for us.",
              right:
                "The situation caused significant disruption to our daily operations.",
              why: "Precise, formal vocabulary boosts your Vocabulary score. Replace generic intensifiers with specific nouns and verbs.",
            },
          ],
        },
        {
          id: "expressing-opinion",
          emoji: "💬",
          title: "Expressing Your Opinion",
          color: "#0f766e",
          bg: "#ccfbf1",
          border: "#5eead4",
          celpipTasks: ["Speaking Task 7", "Speaking Task 5", "Writing Task 2"],
          intro:
            "CELPIP tasks frequently ask you to take a stance. Native speakers signal their opinion clearly and then support it with reasons — they don't waffle.",
          vocab: [
            {
              word: "In my opinion",
              example: "In my opinion, remote work is more productive.",
              note: "Clear, simple opener — good for speaking tasks.",
            },
            {
              word: "I believe",
              example: "I believe this policy will benefit the community.",
              note: "Slightly more confident than 'I think'.",
            },
            {
              word: "From my perspective",
              example:
                "From my perspective, the advantages outweigh the drawbacks.",
              note: "Academic tone — good for Writing Task 2.",
            },
            {
              word: "I strongly feel that",
              example:
                "I strongly feel that children should spend more time outdoors.",
              note: "Adds emotional weight; shows conviction.",
            },
            {
              word: "It seems to me that",
              example: "It seems to me that the current system is inefficient.",
              note: "Measured and thoughtful — avoids sounding arrogant.",
            },
            {
              word: "The way I see it",
              example: "The way I see it, both options have their merits.",
              note: "Conversational — works well in speaking tasks.",
            },
            {
              word: "I am convinced that",
              example: "I am convinced that this approach is the right one.",
              note: "Strong, assertive — use when fully committed to a view.",
            },
          ],
          intensityLevels: [
            {
              level: "Tentative",
              color: "#16a34a",
              bg: "#f0fdf4",
              example: "It seems to me that this could be a good approach.",
            },
            {
              level: "Clear",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "In my opinion, the benefits clearly outweigh the risks.",
            },
            {
              level: "Assertive",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I am firmly convinced that this is the only viable solution.",
            },
          ],
          mistakes: [
            {
              title: "Stating opinion without supporting it",
              wrong: "I think public transport is better. That's my opinion.",
              right:
                "I believe public transport is better because it reduces traffic, lowers emissions, and is more affordable for the average person.",
              why: "CELPIP Speaking and Writing tasks are scored on how well you develop your ideas. Always follow an opinion with 'because' or 'since' + reason.",
            },
            {
              title: "Starting every sentence with 'I think'",
              wrong:
                "I think it's good. I think more people should use it. I think the government should help.",
              right:
                "I believe public transport is beneficial. From my perspective, wider adoption would reduce pollution. In my view, government subsidies are essential.",
              why: "Repeating the same phrase lowers your vocabulary score. Rotate opinion phrases to show range.",
            },
          ],
        },
        {
          id: "agreeing-disagreeing",
          emoji: "🤝",
          title: "Agreeing & Disagreeing",
          color: "#065f46",
          bg: "#d1fae5",
          border: "#6ee7b7",
          celpipTasks: ["Speaking Task 7", "Speaking Task 5", "Writing Task 2"],
          intro:
            "In CELPIP speaking tasks involving discussion or debate, you need to agree, partially agree, or disagree diplomatically. Native speakers rarely say 'You are wrong.'",
          vocab: [
            {
              word: "I completely agree",
              example: "I completely agree with your point about flexibility.",
              note: "Full agreement — strong and direct.",
            },
            {
              word: "That's a fair point",
              example:
                "That's a fair point, though I think there are other factors too.",
              note: "Acknowledges before pivoting — great for partial agreement.",
            },
            {
              word: "I see what you mean, but",
              example:
                "I see what you mean, but I think we also need to consider cost.",
              note: "Classic diplomatic disagreement opener.",
            },
            {
              word: "I'd have to respectfully disagree",
              example:
                "I'd have to respectfully disagree on that — here's why.",
              note: "Formal and professional; good for workplace scenarios.",
            },
            {
              word: "While I understand your view",
              example:
                "While I understand your view, the data suggests otherwise.",
              note: "Empathetic before countering; shows maturity.",
            },
            {
              word: "You make a valid point, however",
              example:
                "You make a valid point; however, there are drawbacks worth noting.",
              note: "Validates then contrasts — structured and fluent.",
            },
            {
              word: "I'm not entirely convinced",
              example: "I'm not entirely convinced that this plan will work.",
              note: "Soft disagreement — avoids direct confrontation.",
            },
          ],
          intensityLevels: [
            {
              level: "Full agreement",
              color: "#16a34a",
              bg: "#f0fdf4",
              example:
                "I absolutely agree — that approach makes complete sense.",
            },
            {
              level: "Partial agreement",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "That's a valid point, though I think we also need to consider the long-term costs.",
            },
            {
              level: "Polite disagreement",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I'd have to respectfully disagree — the evidence doesn't fully support that conclusion.",
            },
          ],
          mistakes: [
            {
              title: "Saying 'No, you are wrong'",
              wrong: "No, you are wrong about that.",
              right:
                "I see your point, but I'm not entirely convinced — I think there's another way to look at it.",
              why: "Direct negation sounds blunt and rude. Native speakers soften disagreement with phrases like 'I see what you mean, but…'",
            },
            {
              title: "Just saying 'Yes I agree' with no development",
              wrong: "Yes, I agree with this.",
              right:
                "I completely agree. In fact, I'd add that this approach also saves time, which is especially important in high-pressure situations.",
              why: "CELPIP scores you on fluency and development. Even when agreeing, add a reason or a related point to show depth.",
            },
          ],
        },
        {
          id: "apologizing",
          emoji: "😔",
          title: "Apologizing",
          color: "#be185d",
          bg: "#fce7f3",
          border: "#f9a8d4",
          celpipTasks: ["Writing Task 1 (Email)", "Speaking Task 6"],
          intro:
            "Apologies in professional English follow a pattern: acknowledge → take responsibility → show impact → offer a solution. Simply saying 'sorry' is not enough in formal contexts.",
          vocab: [
            {
              word: "I apologize for",
              example: "I apologize for the delay in responding.",
              note: "Formal; preferred in professional and written contexts over 'I'm sorry'.",
            },
            {
              word: "I'm truly sorry for",
              example: "I'm truly sorry for any inconvenience this has caused.",
              note: "Adds sincerity; acknowledges the impact on others.",
            },
            {
              word: "Please accept my sincere apologies",
              example: "Please accept my sincere apologies for the oversight.",
              note: "Highly formal — ideal for emails to customers or managers.",
            },
            {
              word: "I take full responsibility",
              example:
                "I take full responsibility for the error and will ensure it doesn't happen again.",
              note: "Shows accountability without making excuses.",
            },
            {
              word: "I should have",
              example:
                "I should have informed you sooner — that was my mistake.",
              note: "Reflects on what was done wrong; avoids blame-shifting.",
            },
            {
              word: "To make it right",
              example:
                "To make it right, I've arranged for a replacement to be sent.",
              note: "Moves beyond apology to action — valued in CELPIP writing.",
            },
          ],
          intensityLevels: [
            {
              level: "Light",
              color: "#16a34a",
              bg: "#f0fdf4",
              example: "Sorry about that — I'll fix it right away.",
            },
            {
              level: "Professional",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "I apologize for the inconvenience. I will ensure this is corrected by end of day.",
            },
            {
              level: "Formal / serious",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "Please accept my sincerest apologies for this serious oversight. I take full responsibility and am taking immediate steps to resolve the matter.",
            },
          ],
          mistakes: [
            {
              title: "Apologizing without a solution",
              wrong: "I'm sorry the item was damaged. I hope you understand.",
              right:
                "I sincerely apologize for the damaged item. I will arrange for a full replacement to be dispatched within 24 hours.",
              why: "CELPIP Writing Task 1 expects action steps. A bare apology without a remedy is incomplete and lowers your Task Achievement score.",
            },
            {
              title: "Over-apologizing in speaking",
              wrong:
                "Sorry, sorry, I'm so sorry. I really apologize, I'm very very sorry.",
              right:
                "I'm truly sorry for what happened. Let me explain what I'll do to fix this.",
              why: "Repeated apologies waste your speaking time and sound unnatural. Say it once, mean it, then move to the solution.",
            },
          ],
        },
        {
          id: "giving-information",
          emoji: "📢",
          title: "Giving Information / Announcing",
          color: "#1e40af",
          bg: "#dbeafe",
          border: "#93c5fd",
          celpipTasks: ["Speaking Task 3", "Writing Task 1 (Email)"],
          intro:
            "In announcements and information-giving contexts, clarity and structure are key. Native speakers use signposting phrases to guide the listener.",
          vocab: [
            {
              word: "I'd like to inform you that",
              example:
                "I'd like to inform you that the event has been rescheduled.",
              note: "Formal announcement opener — very common in professional emails.",
            },
            {
              word: "Please be aware that",
              example:
                "Please be aware that the office will be closed on Monday.",
              note: "Signals important information the reader must know.",
            },
            {
              word: "I'm writing to let you know",
              example:
                "I'm writing to let you know about a change to your account.",
              note: "Friendly and professional — good all-purpose email opener.",
            },
            {
              word: "This is to confirm",
              example:
                "This is to confirm your appointment on June 15th at 2 p.m.",
              note: "Used for confirmations; very specific and transactional.",
            },
            {
              word: "As you may already know",
              example: "As you may already know, we are expanding our team.",
              note: "Assumes some shared knowledge; softens the announcement.",
            },
            {
              word: "I am pleased to announce",
              example:
                "I am pleased to announce that we have reached our fundraising goal.",
              note: "Positive announcement — used for good news.",
            },
          ],
          intensityLevels: [
            {
              level: "Casual",
              color: "#16a34a",
              bg: "#f0fdf4",
              example: "Just a heads-up — the meeting has been moved to 3 p.m.",
            },
            {
              level: "Professional",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "I'd like to inform you that the submission deadline has been extended to Friday.",
            },
            {
              level: "Formal",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "We are writing to formally notify you of the changes to our service agreement effective January 1st.",
            },
          ],
          mistakes: [
            {
              title: "No clear subject or opening in email",
              wrong: "Hello. The meeting is moved.",
              right:
                "I'm writing to inform you that tomorrow's team meeting has been rescheduled from 10 a.m. to 2 p.m.",
              why: "CELPIP email writing is scored on organization. Open by stating your purpose clearly; be specific about who/what/when.",
            },
          ],
        },
        {
          id: "persuading",
          emoji: "🎯",
          title: "Persuading / Convincing",
          color: "#7c3aed",
          bg: "#ede9fe",
          border: "#c4b5fd",
          celpipTasks: ["Speaking Task 5", "Speaking Task 7", "Writing Task 2"],
          intro:
            "Persuasion uses evidence, examples, and emotional appeal. Native speakers structure arguments: claim → reason → example → benefit.",
          vocab: [
            {
              word: "Consider the fact that",
              example:
                "Consider the fact that remote workers report 30% higher productivity.",
              note: "Invites the reader to reflect; leads into evidence.",
            },
            {
              word: "Research has shown",
              example:
                "Research has shown that exercise improves mental health significantly.",
              note: "Academic and credible — boosts formal writing scores.",
            },
            {
              word: "Not only… but also",
              example:
                "Not only is it cost-effective, but it also reduces our carbon footprint.",
              note: "Structures two benefits in one sentence — very fluent.",
            },
            {
              word: "This would result in",
              example:
                "This would result in a 20% reduction in overhead costs.",
              note: "Shows clear, specific consequence — persuasive and precise.",
            },
            {
              word: "Imagine how",
              example:
                "Imagine how much smoother operations would be with this system in place.",
              note: "Emotional appeal — makes the benefit vivid and real.",
            },
            {
              word: "It goes without saying",
              example:
                "It goes without saying that safety should be our top priority.",
              note: "Signals something obvious — rhetorical emphasis.",
            },
            {
              word: "The evidence clearly indicates",
              example:
                "The evidence clearly indicates that early intervention yields better outcomes.",
              note: "Strong, authoritative language for written persuasion.",
            },
          ],
          intensityLevels: [
            {
              level: "Gentle nudge",
              color: "#16a34a",
              bg: "#f0fdf4",
              example:
                "You might find it helpful to consider the long-term savings this option provides.",
            },
            {
              level: "Clear argument",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "The data clearly supports this approach — it reduces costs while improving quality.",
            },
            {
              level: "Strong push",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "This is without question the most effective solution available. The evidence is overwhelming and the benefits are immediate.",
            },
          ],
          mistakes: [
            {
              title: "Writing opinions as facts",
              wrong: "This is the best option. Everyone prefers it.",
              right:
                "In my view, this is the most practical option, as it consistently receives the highest satisfaction ratings among users.",
              why: "Unsubstantiated claims sound weak. Attribute claims properly and add evidence or a qualifier.",
            },
            {
              title: "Ignoring the other side",
              wrong:
                "Public transport is always better than cars in every way.",
              right:
                "While some may prefer the convenience of private vehicles, public transport is generally more economical and environmentally sustainable.",
              why: "Acknowledging a counter-argument before rebutting it shows critical thinking — a skill CELPIP Writing Task 2 rewards.",
            },
          ],
        },
        {
          id: "complaining",
          emoji: "😤",
          title: "Complaining (Formally)",
          color: "#dc2626",
          bg: "#fee2e2",
          border: "#fca5a5",
          celpipTasks: ["Writing Task 1 (Email)", "Speaking Task 6"],
          intro:
            "Formal complaints follow a strict pattern: state the problem → give evidence/timeline → describe the impact → request action. Avoid emotional language.",
          vocab: [
            {
              word: "I am writing to express my dissatisfaction",
              example:
                "I am writing to express my dissatisfaction with the service I received.",
              note: "Standard formal complaint opener.",
            },
            {
              word: "Contrary to what was promised",
              example:
                "Contrary to what was promised, the item arrived two weeks late.",
              note: "Points out a broken commitment clearly.",
            },
            {
              word: "This is not acceptable",
              example:
                "This level of service is not acceptable, given the premium I paid.",
              note: "Firm but professional; avoids personal attacks.",
            },
            {
              word: "On [date], I",
              example:
                "On March 10th, I contacted your customer service team regarding this issue.",
              note: "Specificity with dates strengthens a complaint.",
            },
            {
              word: "I expect",
              example: "I expect a full refund within 5 business days.",
              note: "States a clear resolution — outcome-focused.",
            },
            {
              word: "I trust this matter will be resolved promptly",
              example: "I trust this matter will be resolved promptly.",
              note: "Closing phrase — implies expectation without being aggressive.",
            },
          ],
          intensityLevels: [
            {
              level: "Mild",
              color: "#16a34a",
              bg: "#f0fdf4",
              example:
                "I wanted to flag that the product I received doesn't quite match the description online.",
            },
            {
              level: "Firm",
              color: "#92400e",
              bg: "#fffbeb",
              example:
                "I am writing to formally complain about the repeated delays in resolving my case, which has now been open for three weeks.",
            },
            {
              level: "Serious",
              color: "#991b1b",
              bg: "#fef2f2",
              example:
                "I must strongly register my complaint regarding what I consider a serious breach of your stated service standards. I expect an immediate response and full resolution.",
            },
          ],
          mistakes: [
            {
              title: "Using emotional or offensive language",
              wrong: "Your company is terrible and your staff are incompetent.",
              right:
                "I was disappointed by the lack of responsiveness from your support team, particularly given the urgency of the situation.",
              why: "Emotional insults undermine a complaint's credibility. Use factual, professional language that focuses on the issue, not the person.",
            },
            {
              title: "Forgetting to state what you want",
              wrong:
                "I just want you to know this happened to me and it was not great.",
              right:
                "I would appreciate a full refund and a written explanation of how this issue will be prevented in the future.",
              why: "A complaint without a resolution request is incomplete. Always close with a clear, reasonable ask.",
            },
          ],
        },
      ];
