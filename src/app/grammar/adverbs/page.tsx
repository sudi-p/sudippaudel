import type { Metadata } from "next";
import AdverbsTab from "./AdverbsTab";

export const metadata: Metadata = {
  title: "Adverbs | CELPIP Grammar Bank",
  description:
    "Master English adverbs — the words that modify verbs, adjectives, and other adverbs. Learn every type, how native speakers use them, and how to boost your CELPIP Writing and Speaking score.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">adverbs</span> —
          the words that modify verbs, adjectives, and other adverbs. Learn
          every type, how native speakers use them, and how to boost your
          CELPIP Writing and Speaking score.
        </p>
      </div>
      <AdverbsTab />
    </div>
  );
}
