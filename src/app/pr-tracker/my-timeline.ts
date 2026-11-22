// My own Express Entry timeline. Only the password-protected API route
// (src/app/api/pr-tracker/me/route.ts) imports this, so it stays on the server
// and is never shipped to the browser. Same field names as data.json.
// Do NOT import this from page.tsx or tracker.ts.
export const MY_TIMELINE = {
  ita_date: "2026-08-05",
  aor_date: "2026-09-11",
  bil_date: "2026-10-28",
  biometrics_date: "2026-11-02",
  medical_date: null,
  fd_date: null,
  ppr_date: null,
  p1_date: null,
  p2_date: null,
  ecopr_date: null,
  pr_card_date: null,
};
