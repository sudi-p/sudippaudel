import type { Metadata } from "next";
import ConjunctionsSection from "./ConjunctionsTab";

export const metadata: Metadata = {
  title: "Conjunctions | CELPIP Grammar Bank",
  description:
    "Master English conjunctions — the linking words that connect ideas, clauses, and sentences. Learn coordinating, subordinating, and correlative types with examples and common traps.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">
            conjunctions
          </span>{" "}
          — the linking words that connect ideas, clauses, and sentences.
          Learn coordinating, subordinating, and correlative types with
          examples and common traps.
        </p>
      </div>
      <ConjunctionsSection />
    </div>
  );
}
