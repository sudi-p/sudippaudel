import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import CelpipNav from "./CelpipNav";
import VocabLoader from "./VocabLoader";
import "./celpip.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

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
    <div className={`${dmSans.variable} ${dmSerif.variable} celpip-page`}>
      {/* Vocabulary data consumed by the per-page scripts via window.VOCAB */}
      <VocabLoader />
      <CelpipNav />
      {children}
    </div>
  );
}
