"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SPEAKING = [
  { n: 1, label: "Advice" },
  { n: 2, label: "Personal Experience" },
  { n: 3, label: "Describe Image" },
  { n: 4, label: "Predictions" },
  { n: 5, label: "Compare & Persuade" },
  { n: 6, label: "Difficult Situation" },
  { n: 7, label: "Opinions" },
  { n: 8, label: "Unusual Situation" },
];

const WRITING = [
  { n: 1, label: "Personal Email" },
  { n: 2, label: "Survey Response" },
];

function Pill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
        active
          ? "bg-ink text-fog border-ink"
          : "bg-white text-slate border-mist hover:text-ink hover:border-slate"
      }`}
    >
      {children}
    </Link>
  );
}

// Per-task-page navigation for jumping between speaking and writing tasks.
// Intentionally not used on the /celpip index page.
export default function TaskNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-b border-mist bg-fog/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="shrink-0 text-xs font-semibold text-gold uppercase tracking-widest">
            Speaking
          </span>
          {SPEAKING.map((t) => {
            const href = `/celpip/speaking-task-${t.n}`;
            return (
              <Pill key={t.n} href={href} active={pathname === href}>
                {t.n}. {t.label}
              </Pill>
            );
          })}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="shrink-0 text-xs font-semibold text-gold uppercase tracking-widest">
            Writing
          </span>
          {WRITING.map((t) => {
            const href = `/celpip/writing-task-${t.n}`;
            return (
              <Pill key={t.n} href={href} active={pathname === href}>
                {t.n}. {t.label}
              </Pill>
            );
          })}
        </div>
      </div>
    </div>
  );
}
