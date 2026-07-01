// @ts-nocheck
/* eslint-disable */
"use client";

import { GROUPS } from "./data";
import GroupSection from "../components/GroupSection";

export default function NounsPronounsSection() {
  return (
    <>
      {GROUPS.map((group, i) => (
        <GroupSection key={i} group={group} countNoun="entries" />
      ))}
    </>
  );
}
