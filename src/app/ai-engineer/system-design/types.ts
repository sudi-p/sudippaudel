// Content model for the "System design interviews" notebook tab.
// Inline markup inside strings: `code`, **bold**, *italic*.
export type Block =
  | { t: "h2" | "h3" | "h4"; x: string }
  | { t: "p"; x: string }
  | { t: "ul" | "ol"; x: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "code"; lang: string; x: string };

export type Topic = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  question: Block[];
  answer: Block[];
};

export const h2 = (x: string): Block => ({ t: "h2", x });
export const h3 = (x: string): Block => ({ t: "h3", x });
export const h4 = (x: string): Block => ({ t: "h4", x });
export const p = (x: string): Block => ({ t: "p", x });
export const ul = (...x: string[]): Block => ({ t: "ul", x });
export const ol = (...x: string[]): Block => ({ t: "ol", x });
export const table = (head: string[], ...rows: string[][]): Block => ({ t: "table", head, rows });
export const code = (lang: string, x: string): Block => ({ t: "code", lang, x });
