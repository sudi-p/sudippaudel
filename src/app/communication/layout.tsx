import type { Metadata } from "next";
import StudyChrome from "../celpip/StudyChrome";

export const metadata: Metadata = {
  title: "CELPIP Communication Toolkit",
  description:
    "Master interpersonal communication vocabulary, intensity, and common mistakes for every CELPIP task.",
};

export default function CommunicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudyChrome>{children}</StudyChrome>;
}
