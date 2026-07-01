import type { Metadata } from "next";
import AdsenseAd from "@/components/AdComponent";
import StudyChrome from "../celpip/StudyChrome";
import GrammarTabBar from "./GrammarTabBar";
import VoicePreloader from "./VoicePreloader";

export const metadata: Metadata = {
  title: "CELPIP Grammar & Vocabulary Bank",
  description:
    "Master words, grammar rules, and sentence structures for every CELPIP task. Review concepts or test yourself with interactive practice.",
};

export default function GrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudyChrome>
      <VoicePreloader />

      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Build Your English
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-3">
            Grammar &amp; Vocabulary{" "}
            <span className="hero-line italic">Bank</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Master words, grammar rules, and sentence structures for every
            CELPIP task. Review concepts or test yourself with interactive
            practice.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex">
        <aside className="hidden lg:block w-40 shrink-0 px-2">
          <AdsenseAd />
        </aside>

        <main className="max-w-6xl mx-auto px-6 pb-24">
          <div className="mb-8">
            <div className="my-4 border-t border-mist" />

            {/* ─── Tab bar ─── */}
            <GrammarTabBar />
          </div>

          {children}
        </main>
        <aside className="hidden lg:block w-40 shrink-0 px-2">
          <AdsenseAd />
        </aside>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          CELPIP Grammar & Vocabulary Bank · Master grammar and essential words
          for test success.
        </p>
      </footer>
    </StudyChrome>
  );
}
