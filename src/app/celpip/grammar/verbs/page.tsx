import type { Metadata } from "next";
import VerbsTab from "./VerbsTab";

export const metadata: Metadata = {
  title: "Verbs | CELPIP Grammar Bank",
  description:
    "Everything about English verbs — types, all 12 tenses, forms, modals, phrasal verbs, irregular verbs, and interactive practice.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Everything about English verbs — types, all 12 tenses, forms,
          modals, phrasal verbs, irregular verbs, and interactive practice.
        </p>
      </div>
      <VerbsTab />
    </div>
  );
}
