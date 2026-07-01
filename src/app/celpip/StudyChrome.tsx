import { DM_Sans, DM_Serif_Display } from "next/font/google";
import CelpipNav from "./CelpipNav";
import "./celpip.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

// Shared fonts, nav, and styling for the CELPIP study section (celpip,
// grammar, vocab, communication), which live as sibling top-level routes.
export default function StudyChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dmSans.variable} ${dmSerif.variable} celpip-page`}>
      <CelpipNav />
      {children}
    </div>
  );
}
