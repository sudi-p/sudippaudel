import type { Metadata } from "next";
import AdjectivesTab from "./AdjectivesTab";

export const metadata: Metadata = {
  title: "Adjectives | CELPIP Grammar Bank",
  description:
    "Master English adjectives — the words that describe, qualify, and bring nouns to life. Learn every type, how native speakers use them, and how to boost your CELPIP Speaking and Writing scores with precise, vivid description.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">
            adjectives
          </span>{" "}
          — the words that describe, qualify, and bring nouns to life. Learn
          every type, how native speakers use them, and how to boost your
          CELPIP Speaking and Writing scores with precise, vivid description.
        </p>
      </div>
      <AdjectivesTab />
    </div>
  );
}
