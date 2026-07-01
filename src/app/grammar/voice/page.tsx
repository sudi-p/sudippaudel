import type { Metadata } from "next";
import VoiceTab from "./VoiceTab";

export const metadata: Metadata = {
  title: "Active & Passive Voice | CELPIP Grammar Bank",
  description:
    "Master active and passive voice — when to use each, how to convert between them, and CELPIP-specific examples for writing and speaking tasks.",
};

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-slate max-w-2xl leading-relaxed">
          Master{" "}
          <span className="font-semibold text-emerald2-dark">active</span> and{" "}
          <span className="font-semibold text-amber2-dark">passive</span>{" "}
          voice — when to use each, how to convert between them, and
          CELPIP-specific examples for writing and speaking tasks.
        </p>
      </div>
      <VoiceTab />
    </div>
  );
}
