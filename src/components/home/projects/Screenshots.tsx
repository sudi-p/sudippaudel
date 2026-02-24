import React, { useEffect, useState } from "react";
import styles from "./styles/Screenshots.module.scss"; // Use your existing custom styles
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type ScreenshotsProps = {
  images: Array<string>;
  screenshotsAvailable: boolean;
  liveUrl?: string;
};

const normalizeUrl = (url?: string) => {
  if (!url) {
    return undefined;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
};

const Screenshots = ({
  images,
  screenshotsAvailable,
  liveUrl,
}: ScreenshotsProps) => {
  const normalizedLiveUrl = normalizeUrl(liveUrl);
  const generatedSnapshot = normalizedLiveUrl
    ? `https://image.thum.io/get/width/1400/noanimate/${encodeURIComponent(normalizedLiveUrl)}`
    : undefined;
  const displayImages =
    screenshotsAvailable && images.length > 0
      ? images
      : generatedSnapshot
        ? [generatedSnapshot]
        : images;

  const [active, setActive] = useState(0);
  const hasMultiple = displayImages.length > 1;
  const hasImages = displayImages.length > 0;

  const handlePrevious = () => {
    setActive((prevActive) =>
      prevActive === 0 ? displayImages.length - 1 : prevActive - 1,
    );
  };

  const handleNext = () => {
    setActive((prevActive) =>
      prevActive === displayImages.length - 1 ? 0 : prevActive + 1,
    );
  };

  useEffect(() => {
    if (!hasMultiple) {
      return;
    }

    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [hasMultiple, displayImages.length]);

  useEffect(() => {
    if (active > displayImages.length - 1) {
      setActive(0);
    }
  }, [active, displayImages.length]);

  return (
    <a
      href={normalizedLiveUrl}
      target={normalizedLiveUrl ? "_blank" : undefined}
      rel={normalizedLiveUrl ? "noopener noreferrer" : undefined}
      className={`group relative block h-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-56 ${styles.imageWrapper} ${normalizedLiveUrl ? "cursor-pointer" : "cursor-default"}`}
      aria-label={
        normalizedLiveUrl ? "Open live website" : "Project screenshots"
      }
    >
      {displayImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          style={{ backgroundImage: `url(${image})` }}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${
            index === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

      {!hasImages && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm md:text-base">
            Screenshots Coming Soon
          </span>
        </div>
      )}

      {!screenshotsAvailable && normalizedLiveUrl && hasImages && (
        <div className="absolute inset-x-0 top-3 flex justify-center">
          <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Live Site Snapshot
          </span>
        </div>
      )}

      {hasImages && (
        <div className="absolute bottom-3 left-4 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(displayImages.length).padStart(2, "0")}
        </div>
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100"
            aria-label="Show previous screenshot"
          >
            <IoChevronBack className="text-lg" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100"
            aria-label="Show next screenshot"
          >
            <IoChevronForward className="text-lg" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center space-x-2">
            {images.map((_, id) => (
              <button
                key={id}
                type="button"
                className={`rounded-full border border-white/40 transition-all duration-300 ${
                  id === active
                    ? "h-2.5 w-7 bg-white"
                    : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                }`}
                onClick={() => setActive(id)}
                aria-label={`Show screenshot ${id + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {normalizedLiveUrl && (
        <div className="absolute bottom-3 right-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/35">
          Visit Site
        </div>
      )}
    </a>
  );
};

export default Screenshots;
