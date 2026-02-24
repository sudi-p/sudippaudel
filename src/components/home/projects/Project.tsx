import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import Screenshots from "./Screenshots";
import { formatDateRange } from "@/data/data";

type ProjectProps = {
  title: string;
  description: string;
  type: string;
  images: Array<string>;
  screenshotsAvailable: boolean;
  link?: string;
  live_url?: string;
  tags: Array<string>;
  startDate?: Date;
  endDate?: Date;
  isPresent?: boolean;
  resumeExperience?: {
    role: string;
    bullets: string[];
  };
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

const Project = ({
  title,
  description,
  type,
  tags,
  screenshotsAvailable,
  images,
  link,
  live_url,
  startDate,
  endDate,
  isPresent,
  resumeExperience,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const normalizedLiveUrl = normalizeUrl(live_url);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-white/90 text-left shadow-lg shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60"
      >
        <div className="p-4 pb-2">
          <Screenshots
            images={images}
            screenshotsAvailable={screenshotsAvailable}
            liveUrl={live_url}
          />
        </div>

        <div className="flex flex-1 flex-col p-6 pt-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {type}
            </span>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3">
            {link && (
              <a
                href={link}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View Source
              </a>
            )}

            {normalizedLiveUrl && (
              <a
                href={normalizedLiveUrl}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-xs" /> Visit Site
              </a>
            )}
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-900 hover:text-white"
              aria-label="Close project details"
            >
              <FaTimes />
            </button>

            <div className="mb-4 pr-10">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Project Details
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {type}
                </span>
                {startDate && (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {formatDateRange(startDate, endDate, isPresent)}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {title}
              </h3>
              {resumeExperience?.role && (
                <p className="mt-1 text-sm font-medium text-slate-600 md:text-base">
                  Role: {resumeExperience.role}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Screenshots
                images={images}
                screenshotsAvailable={screenshotsAvailable}
                liveUrl={live_url}
              />
            </div>

            <p className="mb-5 text-sm leading-relaxed text-slate-700 md:text-base">
              {description}
            </p>

            {resumeExperience?.bullets?.length ? (
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {resumeExperience.bullets.map((bullet) => (
                    <li
                      key={`modal-bullet-${title}-${bullet}`}
                      className="flex gap-2 text-sm leading-relaxed text-slate-700 md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={`modal-${title}-${tag}`}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {link && (
                <a
                  href={link}
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View Source
                </a>
              )}

              {normalizedLiveUrl && (
                <a
                  href={normalizedLiveUrl}
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-xs" /> Visit Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
