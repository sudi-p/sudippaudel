import type { Metadata } from "next";
import SentenceStructureTab from "./SentenceStructureTab";

export const metadata: Metadata = {
  title: "Sentence Structure | CELPIP Grammar Bank",
  description:
    "Understand how English sentences are built — from individual word roles to complete sentence types. Master these structures to write and speak with precision on CELPIP.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Understand how English sentences are built — from individual{" "}
          <span className="font-semibold text-sapphire-dark">word roles</span>{" "}
          to complete{" "}
          <span className="font-semibold text-emerald2-dark">
            sentence types
          </span>
          . Master these structures to write and speak with precision on
          CELPIP.
        </p>
      </div>
      <SentenceStructureTab />
    </div>
  );
}
