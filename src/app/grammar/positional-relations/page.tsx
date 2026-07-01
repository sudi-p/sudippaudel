import type { Metadata } from "next";
import PositionalRelationsTab from "./PositionalRelationsTab";

export const metadata: Metadata = {
  title: "Positional Relations | CELPIP Grammar Bank",
  description:
    "Master how to describe positional relationships between objects and people for CELPIP Speaking Task 3.",
};

export default function Page() {
  return (
    <div>
      <PositionalRelationsTab />
    </div>
  );
}
