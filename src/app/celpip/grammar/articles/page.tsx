import type { Metadata } from "next";
import ArticlesTab from "./ArticlesTab";

export const metadata: Metadata = {
  title: "Articles | CELPIP Grammar Bank",
  description:
    "Master a, an, and the — every rule, every trap, with interactive practice and a quiz.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master <span className="font-semibold text-sapphire-dark">a</span>,{" "}
          <span className="font-semibold text-emerald2-dark">an</span>, and{" "}
          <span className="font-semibold text-amber2-dark">the</span> — every
          rule, every trap, with interactive practice and a quiz.
        </p>
      </div>
      <ArticlesTab />
    </div>
  );
}
