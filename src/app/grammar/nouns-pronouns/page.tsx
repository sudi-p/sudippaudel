import type { Metadata } from "next";
import NounsPronounsSection from "./NounsPronounsTab";

export const metadata: Metadata = {
  title: "Nouns & Pronouns | CELPIP Grammar Bank",
  description:
    "Understand English nouns and pronouns — the words that name people, places, things, and ideas, and the words that replace them. Master their types, forms, and common traps.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Understand English{" "}
          <span className="font-semibold text-sapphire-dark">nouns</span> and{" "}
          <span className="font-semibold text-sapphire-dark">pronouns</span> —
          the words that name people, places, things, and ideas, and the words
          that replace them. Master their types, forms, and common traps.
        </p>
      </div>
      <NounsPronounsSection />
    </div>
  );
}
