import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Screenshots from "./Screenshots";

type ProjectProps = {
  title: string;
  description: string;
  type: string;
  images: Array<string>;
  screenshotsAvailable: boolean;
  link?: string;
  live_url?: string;
  tags: Array<string>;
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
}: ProjectProps) => {
  const normalizedLiveUrl = normalizeUrl(live_url);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-white/90 text-left shadow-lg shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60">
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
  );
};

export default Project;
