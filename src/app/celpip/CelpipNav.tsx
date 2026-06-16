"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/celpip", label: "Notes" },
  { href: "/celpip/vocab", label: "Vocabulary" },
  // { href: "/celpip/speaking-task-1", label: "Speaking" },
  // { href: "/celpip/writing-task-1", label: "Writing" },
  { href: "/", label: "← Portfolio" },
];

export default function CelpipNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-mist bg-fog/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/celpip" className="font-display text-xl text-ink">
          CELPIP <span className="text-gold">Prep</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {LINKS.map((l) => {
            const active =
              l.href !== "/" &&
              (pathname === l.href || pathname.startsWith(l.href + "/"));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={
                    active
                      ? "text-ink"
                      : "text-slate hover:text-ink transition-colors"
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden border-t border-mist px-6 py-4 space-y-3 text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
