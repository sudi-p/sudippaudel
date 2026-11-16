// data.js
// Single source of truth for the Finance & Investing Notes page.
// Edit the arrays below — the page component just maps over them.
// Colors cycle through: 'sapphire' | 'emerald2' | 'amber2' | 'rose2' | 'gold'

export const cheatsheet = {
  href: "/finance/cheatsheet",
  kicker: "Before You Click Buy",
  title: "Account & Order Cheatsheet",
  description:
    "One condensed reference for account priority (FHSA → RRSP → TFSA), contribution room rules, and order-type basics. The single page to check before moving money or placing a trade.",
};

// ─── Registered accounts (Canada) ───
// Each of these is meant to link out to its own deep-dive page,
// e.g. /finance/accounts/tfsa
export const accounts = [
  {
    slug: "tfsa",
    href: "/finance/accounts/tfsa",
    task: "Account 1",
    title: "TFSA",
    subtitle: "Tax-Free Savings Account",
    color: "sapphire",
    description:
      "Contributions aren't deductible, but growth and withdrawals are entirely tax-free. Withdrawn amounts are added back to room the following year. Best general-purpose account once FHSA/RRSP room is used.",
    tags: ["2025 limit: $7,000", "Room is cumulative"],
  },
  {
    slug: "fhsa",
    href: "/finance/accounts/fhsa",
    task: "Account 2",
    title: "FHSA",
    subtitle: "First Home Savings Account",
    color: "emerald2",
    description:
      "Combines an RRSP-style deduction going in with TFSA-style tax-free growth coming out, as long as the withdrawal goes toward a qualifying first home. 15-year max account life.",
    tags: ["$8,000/yr, $40,000 lifetime", "Deductible + tax-free out"],
  },
  {
    slug: "rrsp",
    href: "/finance/accounts/rrsp",
    task: "Account 3",
    title: "RRSP",
    subtitle: "Registered Retirement Savings Plan",
    color: "amber2",
    description:
      "Contributions are tax-deductible now; withdrawals are taxed as income later — the bet is that your marginal rate in retirement is lower than it is today. Room is 18% of prior-year income, up to the annual max.",
    tags: ["18% of earned income", "Withdrawals = taxable income"],
  },
  {
    slug: "tfsa-managed",
    href: "/finance/accounts/tfsa-managed",
    task: "Account 4",
    title: "TFSA — Managed",
    subtitle: "Wealthsimple Managed Investing",
    color: "sapphire",
    description:
      "Same tax treatment as a self-directed TFSA, but held in a diversified ETF portfolio that's rebalanced automatically for a management fee. Trade-off is convenience versus the fee drag over decades.",
    tags: ["Auto-rebalanced", "Mgmt fee applies"],
  },
  {
    slug: "fhsa-managed",
    href: "/finance/accounts/fhsa-managed",
    task: "Account 5",
    title: "FHSA — Managed",
    subtitle: "Wealthsimple Managed Investing",
    color: "emerald2",
    description:
      "The FHSA's tax rules with a managed portfolio wrapper. Since the money may be needed within a few years for a home purchase, risk tolerance here should usually be lower than a long-horizon TFSA.",
    tags: ["Shorter horizon", "Consider lower-risk mix"],
  },
  {
    slug: "wealthsimple-overview",
    href: "/finance/wealthsimple",
    task: "Platform",
    title: "Wealthsimple Overview",
    subtitle: "Self-directed vs. Managed",
    color: "amber2",
    description:
      "How Wealthsimple Trade (self-directed, commission-free CAD/USD trading) differs from Wealthsimple Invest (managed portfolios), plus notes on USD conversion, account types offered, and where fees actually show up.",
    tags: ["Self-directed + Managed", "USD conversion notes"],
  },
];

// ─── Watchlist ───
// Single list for both individual stocks and ETFs — edit freely.
// type:    "Stock" | "ETF"        → drives which section(s) an item appears in
// country: "US" | "CAD"           → just a display badge
// featured: true | false          → true items show in "Current Watchlist"
//                                    ETF-type items always show in the ETFs
//                                    section regardless of featured
export const watchlist = [
  {
    ticker: "SHOP.TO",
    name: "Shopify",
    exchange: "TSX",
    type: "Stock",
    country: "CAD",
    featured: true,
    color: "sapphire",
    thesis: "Canadian e-commerce infra bellwether — watching for margin trend.",
  },
  {
    ticker: "RY.TO",
    name: "Royal Bank of Canada",
    exchange: "TSX",
    type: "Stock",
    country: "CAD",
    featured: true,
    color: "emerald2",
    thesis: "Core Canadian bank holding — dividend consistency check.",
  },
  {
    ticker: "CSU.TO",
    name: "Constellation Software",
    exchange: "TSX",
    type: "Stock",
    country: "CAD",
    featured: false,
    color: "amber2",
    thesis: "Serial acquirer — tracking capital allocation discipline.",
  },
  {
    ticker: "AAPL",
    name: "Apple",
    exchange: "NASDAQ",
    type: "Stock",
    country: "US",
    featured: true,
    color: "rose2",
    thesis: "US core holding — watching services revenue growth.",
  },
  {
    ticker: "NVDA",
    name: "Nvidia",
    exchange: "NASDAQ",
    type: "Stock",
    country: "US",
    featured: true,
    color: "sapphire",
    thesis: "AI compute cycle — valuation sensitivity to guidance.",
  },
  {
    ticker: "VFV.TO",
    name: "Vanguard S&P 500 ETF",
    exchange: "TSX",
    type: "ETF",
    country: "CAD",
    featured: true,
    color: "emerald2",
    thesis: "Core US index exposure held in CAD, unhedged.",
  },
  {
    ticker: "XEQT.TO",
    name: "iShares Core Equity ETF Portfolio",
    exchange: "TSX",
    type: "ETF",
    country: "CAD",
    featured: false,
    color: "amber2",
    thesis: "One-ticket global all-equity portfolio — simplicity vs. control trade-off.",
  },
  {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    exchange: "NYSE ARCA",
    type: "ETF",
    country: "US",
    featured: false,
    color: "rose2",
    thesis: "US-listed S&P 500 exposure — lower fee, but adds USD conversion.",
  },
  {
    ticker: "QQQ",
    name: "Invesco QQQ Trust",
    exchange: "NASDAQ",
    type: "ETF",
    country: "US",
    featured: false,
    color: "sapphire",
    thesis: "Nasdaq-100 concentration — watching tech-weighting risk.",
  },
];

// ─── Getting started steps ───
export const gettingStarted = [
  {
    step: "1",
    color: "sapphire",
    title: "Check Account Priority",
    description:
      "Start with the account guides to confirm contribution room and the right order to fund accounts in before moving new cash.",
  },
  {
    step: "2",
    color: "emerald2",
    title: "Review the Watchlist",
    description:
      "Skim current positions and thesis notes before checking a live quote, so a price move gets read in context.",
  },
  {
    step: "3",
    color: "amber2",
    title: "Check a Live Price",
    description:
      "Click any watchlist card to open its live quote — current price, day range, and your own notes — pulled from a public market-data API.",
  },
];