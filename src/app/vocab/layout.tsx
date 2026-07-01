import type { Metadata } from "next";
import StudyChrome from "../celpip/StudyChrome";

export const metadata: Metadata = {
  title: "CELPIP Vocabulary Bank",
  description:
    "Build a precise CELPIP vocabulary with word lists, emotions, collocations, and idioms.",
};

export default function VocabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudyChrome>{children}</StudyChrome>;
}
