// @ts-nocheck
/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { cheatsheet, accounts, watchlist, gettingStarted } from "./data";

/**
 * Tailwind class names must exist as literal strings somewhere in the file
 * for the JIT compiler to pick them up — so colors are looked up from this
 * map rather than built with template strings like `bg-${color}-light`.
 */
const COLOR_CLASSES = {
  sapphire: {
    badge: "bg-sapphire-light text-sapphire-dark",
    hoverTitle: "group-hover:text-sapphire",
    iconBg: "bg-sapphire-light",
    iconText: "text-sapphire",
  },
  emerald2: {
    badge: "bg-emerald2-light text-emerald2-dark",
    hoverTitle: "group-hover:text-emerald2",
    iconBg: "bg-emerald2-light",
    iconText: "text-emerald2",
  },
  amber2: {
    badge: "bg-amber2-light text-amber2-dark",
    hoverTitle: "group-hover:text-amber2",
    iconBg: "bg-amber2-light",
    iconText: "text-amber2",
  },
  rose2: {
    badge: "bg-rose2-light text-rose2-dark",
    hoverTitle: "group-hover:text-rose2",
    iconBg: "bg-rose2-light",
    iconText: "text-rose2",
  },
  gold: {
    badge: "bg-gold-light text-gold-dark",
    hoverTitle: "group-hover:text-gold",
    iconBg: "bg-gold-light",
    iconText: "text-gold",
  },
};

function ArrowIcon({ colorText = "text-gold" }) {
  return (
    <svg
      className={`w-6 h-6 ${colorText} opacity-0 group-hover:opacity-100 transition-opacity shrink-0`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function SectionHeader({ kicker, title }) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
        {kicker}
      </p>
      <h2 className="font-display text-3xl text-ink">{title}</h2>
    </div>
  );
}

// Guide-style card used for account & platform overview pages
function GuideCard({ href, task, title, subtitle, description, tags, color }) {
  const c = COLOR_CLASSES[color] || COLOR_CLASSES.sapphire;
  return (
    <a
      href={href}
      className="bg-white rounded-2xl border border-mist p-6 card-hover group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">
            {task}
          </p>
          <h3
            className={`font-display text-2xl text-ink transition-colors ${c.hoverTitle}`}
          >
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm text-slate mt-1">{subtitle}</p>
          ) : null}
        </div>
        <ArrowIcon colorText={c.iconText} />
      </div>
      <p className="text-sm text-slate leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-4 text-xs text-slate flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className={`px-3 py-1 rounded-full ${c.badge}`}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

// Small inline price readout reused on the card and inside the modal
function PriceReadout({ quote, size = "sm" }) {
  if (!quote) {
    return <span className="text-xs text-slate">Loading price…</span>;
  }
  if (quote.error) {
    return <span className="text-xs text-slate">Price unavailable</span>;
  }
  const isUp = quote.change >= 0;
  const priceClass =
    size === "lg" ? "font-display text-4xl text-ink" : "font-semibold text-ink";
  const changeClass = isUp ? "text-emerald2-dark" : "text-rose2-dark";
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className={priceClass}>${quote.current?.toFixed(2)}</span>
      <span className={`text-xs font-semibold ${changeClass}`}>
        {isUp ? "+" : ""}
        {quote.change?.toFixed(2)} ({quote.percentChange?.toFixed(2)}%)
      </span>
    </span>
  );
}

// Watchlist card — clickable, opens the detail modal, shows a live price.
// Used for both individual stocks and ETFs, since they share one list now.
function WatchlistCard({ stock, quote, onOpen }) {
  const c = COLOR_CLASSES[stock.color] || COLOR_CLASSES.sapphire;
  return (
    <button
      type="button"
      onClick={() => onOpen(stock.ticker)}
      className="text-left bg-white rounded-2xl border border-mist p-5 card-hover group w-full"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}
        >
          {stock.ticker}
        </span>
        <span className="text-xs text-slate uppercase tracking-widest">
          {stock.exchange}
        </span>
      </div>
      <h3 className="font-display text-xl text-ink mb-1">{stock.name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded-full bg-fog text-slate">
          {stock.type}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-fog text-slate">
          {stock.country}
        </span>
      </div>
      <p className="text-sm text-slate leading-relaxed mb-3">{stock.thesis}</p>
      <PriceReadout quote={quote} />
    </button>
  );
}

function StepCard({ step, title, description, color }) {
  const c = COLOR_CLASSES[color] || COLOR_CLASSES.sapphire;
  return (
    <div className="bg-white rounded-2xl border border-mist p-6">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${c.iconBg}`}
      >
        <span className={`font-display text-lg ${c.iconText}`}>{step}</span>
      </div>
      <h3 className="font-semibold text-ink mb-2">{title}</h3>
      <p className="text-sm text-slate leading-relaxed">{description}</p>
    </div>
  );
}

// Detail modal — shows the live quote plus the personal notes for one stock
function StockModal({ stock, quote, onClose }) {
  if (!stock) return null;
  const c = COLOR_CLASSES[stock.color] || COLOR_CLASSES.sapphire;

  return (
    <div
      className="fixed inset-0 bg-ink/60 flex items-center justify-center p-6 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}
            >
              {stock.ticker}
            </span>
            <h3 className="font-display text-2xl text-ink mt-3">
              {stock.name}
            </h3>
            <p className="text-xs text-slate uppercase tracking-widest mt-1">
              {stock.exchange}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-fog text-slate">
                {stock.type}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-fog text-slate">
                {stock.country}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-slate hover:text-ink transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {!quote ? (
          <p className="text-sm text-slate mb-5">Loading live price…</p>
        ) : quote.error ? (
          <p className="text-sm text-rose2-dark mb-5">{quote.error}</p>
        ) : (
          <>
            <div className="mb-5">
              <PriceReadout quote={quote} size="lg" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm mb-5">
              <div>
                <p className="text-xs text-slate uppercase tracking-widest mb-1">
                  Open
                </p>
                <p className="text-ink">${quote.open?.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-slate uppercase tracking-widest mb-1">
                  Prev. Close
                </p>
                <p className="text-ink">${quote.previousClose?.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-slate uppercase tracking-widest mb-1">
                  Day High
                </p>
                <p className="text-ink">${quote.high?.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-slate uppercase tracking-widest mb-1">
                  Day Low
                </p>
                <p className="text-ink">${quote.low?.toFixed(2)}</p>
              </div>
            </div>
          </>
        )}

        <div className="border-t border-mist pt-4">
          <p className="text-xs text-slate uppercase tracking-widest mb-2">
            Your Notes
          </p>
          <p className="text-sm text-slate leading-relaxed">{stock.thesis}</p>
        </div>
      </div>
    </div>
  );
}

export default function FinanceNotesPage() {
  const [quotes, setQuotes] = useState({}); // { [ticker]: quoteData | { error } }
  const [activeTicker, setActiveTicker] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadQuotes() {
      const entries = await Promise.all(
        watchlist.map(async (stock) => {
          try {
            const res = await fetch(
              `/api/quote?symbol=${encodeURIComponent(stock.ticker)}`,
            );
            const json = await res.json();
            return [
              stock.ticker,
              res.ok ? json : { error: json.error || "Failed to load" },
            ];
          } catch (err) {
            return [stock.ticker, { error: "Failed to load" }];
          }
        }),
      );
      if (!cancelled) {
        setQuotes(Object.fromEntries(entries));
      }
    }

    loadQuotes();
    return () => {
      cancelled = true;
    };
  }, []);

  const activeStock = watchlist.find((s) => s.ticker === activeTicker) || null;

  // One shared list, two derived views: featured items for the main
  // watchlist, and anything typed "ETF" for the ETFs section.
  const featuredHoldings = watchlist.filter((s) => s.featured);
  const etfHoldings = watchlist.filter((s) => s.type === "ETF");

  return (
    <>
      {/* ─── HERO ─── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="animate-fade-up">
          <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-4">
            Personal Finance & Investing Notes
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mb-5">
            Canadian Investing <span className="hero-line italic">Notes</span>
          </h1>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Account guides and a live watchlist — focused on Wealthsimple,
            TFSA/FHSA/RRSP, and Canadian + US equities.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Cheatsheet */}
        <section className="mb-16">
          <a
            href={cheatsheet.href}
            className="block bg-ink rounded-2xl p-6 md:p-8 card-hover group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-gold font-semibold uppercase mb-2">
                  {cheatsheet.kicker}
                </p>
                <h2 className="font-display text-3xl text-fog mb-2 group-hover:text-gold transition-colors">
                  {cheatsheet.title}
                </h2>
                <p className="text-sm text-mist leading-relaxed max-w-2xl">
                  {cheatsheet.description}
                </p>
              </div>
              <ArrowIcon colorText="text-gold opacity-60 group-hover:opacity-100" />
            </div>
          </a>
        </section>

        {/* Accounts & platform guides */}
        <section className="mb-16">
          <SectionHeader
            kicker="Registered Accounts"
            title="TFSA, FHSA, RRSP & Wealthsimple"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accounts.map((account) => (
              <GuideCard key={account.slug} {...account} />
            ))}
          </div>
        </section>

        {/* Watchlist — featured items only */}
        <section className="mb-16">
          <SectionHeader kicker="Tracking" title="Current Watchlist" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredHoldings.map((stock) => (
              <WatchlistCard
                key={stock.ticker}
                stock={stock}
                quote={quotes[stock.ticker]}
                onOpen={setActiveTicker}
              />
            ))}
          </div>
        </section>

        {/* ETFs — every item typed "ETF", regardless of featured flag */}
        {etfHoldings.length > 0 && (
          <section className="mb-16">
            <SectionHeader kicker="Tracking" title="ETFs" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {etfHoldings.map((stock) => (
                <WatchlistCard
                  key={stock.ticker}
                  stock={stock}
                  quote={quotes[stock.ticker]}
                  onOpen={setActiveTicker}
                />
              ))}
            </div>
          </section>
        )}

        {/* How to use */}
        <section>
          <SectionHeader
            kicker="Getting Started"
            title="How to Use These Notes"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gettingStarted.map((item) => (
              <StepCard key={item.step} {...item} />
            ))}
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-mist bg-fog py-8 px-6 text-center">
        <p className="text-xs text-slate">
          Canadian Investing Notes · Not financial advice — personal reference
          only.
        </p>
      </footer>

      <StockModal
        stock={activeStock}
        quote={activeTicker ? quotes[activeTicker] : null}
        onClose={() => setActiveTicker(null)}
      />
    </>
  );
}
