import type { Metadata } from "next";
import PhoneticsSection from "./PhoneticsTab";

export const metadata: Metadata = {
  title: "Phonetics | CELPIP Grammar Bank",
  description:
    "Master English pronunciation — learn how vowels, consonants, and stress patterns work so you can speak clearly and understand native speakers in every CELPIP task.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master English{" "}
          <span className="font-semibold text-sapphire-dark">
            pronunciation
          </span>{" "}
          — learn how vowels, consonants, and stress patterns work so you can
          speak clearly and understand native speakers in every CELPIP task.
        </p>
      </div>
      <PhoneticsSection />
    </div>
  );
}
