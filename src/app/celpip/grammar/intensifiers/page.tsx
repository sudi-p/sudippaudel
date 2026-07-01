import type { Metadata } from "next";
import IntensifiersTab from "./IntensifiersTab";

export const metadata: Metadata = {
  title: "Intensifiers | CELPIP Grammar Bank",
  description:
    'Master English intensifiers — the words that strengthen or weaken adjectives and adverbs. Learn the intensity scale, gradable vs non-gradable rules, and natural collocations to replace a repetitive "very" and boost your CELPIP Vocabulary score.',
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">
            intensifiers
          </span>{" "}
          — the words that strengthen or weaken adjectives and adverbs. Learn
          the intensity scale, gradable vs non-gradable rules, and natural
          collocations to replace a repetitive <em>&quot;very&quot;</em> and
          boost your CELPIP Vocabulary score.
        </p>
      </div>
      <IntensifiersTab />
    </div>
  );
}
