"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdsenseAd() {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    const el = insRef.current;
    if (!el) return;

    const tryPush = () => {
      // AdSense throws "No slot size for availableWidth=0" if the slot has no
      // width yet (e.g. hidden tab panel or a flex rail that hasn't laid out).
      if (pushed.current || el.offsetWidth === 0) return;
      pushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    };

    tryPush();
    if (pushed.current) return;

    // Width wasn't available yet — watch until it is.
    const observer = new ResizeObserver(() => {
      tryPush();
      if (pushed.current) observer.disconnect();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ins
      ref={insRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7311309398490146"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
