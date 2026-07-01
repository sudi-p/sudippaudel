// @ts-nocheck
/* eslint-disable */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GRAMMAR_TABS } from "./tabsConfig";

export default function GrammarTabBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {GRAMMAR_TABS.map((tab) => {
        const href = `/grammar/${tab.id}`;
        const active = pathname === href || pathname === `/celpip${href}`;
        return (
          <Link
            key={tab.id}
            href={href}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              active
                ? "bg-ink text-fog"
                : "bg-fog text-slate hover:bg-mist hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
