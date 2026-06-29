// @ts-nocheck
/* eslint-disable */
"use client";

import { CONJ_GROUPS } from "./data";
import GroupSection from "./components/GroupSection";

export default function ConjunctionsSection() {
  return (
    <>
      {CONJ_GROUPS.map((group, i) => (
        <GroupSection key={i} group={group} countNoun="conjunctions" />
      ))}
    </>
  );
}
