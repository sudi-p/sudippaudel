// @ts-nocheck
/* eslint-disable */
"use client";

// The pill tab bar shared by every task page.
export function TabBar({ tabs, active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 mb-8 animate-fade-up"
      style={{ animationDelay: ".15s" }}
      id="tab-bar"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`tab-btn ${
            active === tab.id ? "tab-active" : "tab-inactive"
          } px-5 py-2 rounded-full border text-sm font-medium transition-all`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
