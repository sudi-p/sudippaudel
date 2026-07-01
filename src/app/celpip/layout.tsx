import type { Metadata } from "next";
import StudyChrome from "./StudyChrome";
import VocabLoader from "./VocabLoader";

export const metadata: Metadata = {
  title: "CELPIP Practice | Study Notes & Vocabulary",
  description:
    "Deep-dive CELPIP study guides for speaking and writing tasks, plus a vocabulary bank.",
};

export default function CelpipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudyChrome>
      {/* Vocabulary data consumed by the per-page scripts via window.VOCAB */}
      <VocabLoader />
      {children}
    </StudyChrome>
  );
}
