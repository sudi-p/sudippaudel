import type { Metadata } from "next";
import PrepositionsTab from "./PrepositionsTab";

export const metadata: Metadata = {
  title: "Prepositions | CELPIP Grammar Bank",
  description:
    "Master English prepositions — the small words that show relationships of place, time, direction, and more. Learn the rules, common combinations, and traps to avoid.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">
            prepositions
          </span>{" "}
          — the small words that show relationships of place, time,
          direction, and more. Learn the rules, common combinations, and
          traps to avoid.
        </p>
      </div>
      <PrepositionsTab />
    </div>
  );
}
