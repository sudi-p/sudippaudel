import type { Metadata } from "next";
import BodyPositionsTab from "./BodyPositionsTab";

export const metadata: Metadata = {
  title: "Body Positions | CELPIP Grammar Bank",
  description:
    "Learn how to describe body positions — stand, sit, crouch, kneel, lean, and more — with clear figures and ready-made Speaking Task 3 sentences, then test yourself.",
};

export default function Page() {
  return (
    <div>
      <BodyPositionsTab />
    </div>
  );
}
