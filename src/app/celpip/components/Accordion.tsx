// @ts-nocheck
/* eslint-disable */
"use client";

import { useState } from "react";

const Chevron = ({ open }) => (
  <svg
    className={`chevron w-4 h-4 text-slate ${open ? "rotated" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Shared collapsible section used across every task page. Supports both the
// simple API (triggerHover / bodyBorder) and the extended one used by the
// writing tasks (triggerClassName / bodyBorderClass / bodyClassName).
export function Accordion({
  header,
  children,
  wrapClassName = "bg-white rounded-2xl border border-mist overflow-hidden",
  wrapStyle,
  triggerHover = "hover:bg-fog/50",
  triggerClassName,
  bodyBorder = "border-mist",
  bodyBorderClass,
  bodyClassName = "space-y-4",
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const triggerCls =
    triggerClassName ??
    `accordion-trigger w-full flex items-center justify-between px-6 py-4 text-left ${triggerHover} transition-colors`;
  const bodyBorderCls = bodyBorderClass ?? `border-t ${bodyBorder}`;
  return (
    <div className={wrapClassName} style={wrapStyle}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerCls}
      >
        {header}
        <Chevron open={open} />
      </button>
      <div
        className={`accordion-body ${bodyBorderCls} px-6 py-5 ${bodyClassName} ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
