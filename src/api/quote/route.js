// app/api/quote/route.js
// Server-side proxy for live stock quotes. Keeps FINNHUB_API_KEY off the
// client bundle — the browser calls THIS route, this route calls Finnhub.
//
// Setup: add FINNHUB_API_KEY=your_key to .env.local (free key at
// https://finnhub.io/register). Finnhub's /quote endpoint accepts the same
// ticker format used in data.js — plain US tickers ("AAPL") and Toronto
// Stock Exchange tickers with a ".TO" suffix ("SHOP.TO").

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");

  if (!symbol) {
    return Response.json({ error: "Missing symbol" }, { status: 400 });
  }

  const apiKey = process.env.FINNHUB_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "FINNHUB_API_KEY is not configured on the server" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(
        symbol,
      )}&token=${apiKey}`,
      { next: { revalidate: 15 } }, // short cache so a busy page doesn't burn the free tier
    );

    if (!res.ok) {
      return Response.json(
        { error: `Finnhub responded with ${res.status}` },
        { status: res.status },
      );
    }

    const data = await res.json();

    // Finnhub /quote shape: c=current, d=change, dp=percent change,
    // h=day high, l=day low, o=open, pc=previous close, t=unix timestamp.
    // A quote of all-zero fields usually means the symbol wasn't recognized.
    if (data.c === 0 && data.pc === 0) {
      return Response.json(
        { error: `No data for symbol "${symbol}"` },
        { status: 404 },
      );
    }

    return Response.json({
      symbol,
      current: data.c,
      change: data.d,
      percentChange: data.dp,
      high: data.h,
      low: data.l,
      open: data.o,
      previousClose: data.pc,
      timestamp: data.t,
    });
  } catch (err) {
    return Response.json({ error: "Failed to fetch quote" }, { status: 502 });
  }
}
