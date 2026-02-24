import {
  formatDateRange,
  getRangeSortTimestamp,
  resumeData,
} from "../resume/data";

export default function ProjectsPage() {
  const timelineItems = [
    ...resumeData.experience.map((item) => ({
      kind: "experience" as const,
      id: `${item.company}-${item.startDate.toISOString()}`,
      startDate: item.startDate,
      endDate: item.endDate,
      isPresent: item.isPresent,
      title: item.title,
      subtitle: item.company,
      bullets: item.bullets,
      tags: item.technologies.split(",").map((tech) => tech.trim()),
    })),
    ...resumeData.education.map((item) => ({
      kind: "education" as const,
      id: `${item.degree}-${item.startDate.toISOString()}`,
      startDate: item.startDate,
      endDate: item.endDate,
      isPresent: false,
      title: item.degree,
      subtitle: item.school,
      bullets: [] as string[],
      tags: [] as string[],
    })),
  ].sort((left, right) => {
    const rightDate = getRangeSortTimestamp(
      right.startDate,
      right.endDate,
      right.isPresent,
    );
    const leftDate = getRangeSortTimestamp(
      left.startDate,
      left.endDate,
      left.isPresent,
    );

    return rightDate - leftDate;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/40 px-4 py-14 md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Professional Journey
          </p>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Experience & Education Timeline
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A unified timeline from my resume that combines career impact and
            academic background in one continuous journey.
          </p>
        </header>

        <section className="relative pl-8 md:pl-10">
          <div className="absolute left-2.5 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-blue-300 to-transparent md:left-3" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const isEducation = item.kind === "education";

              return (
                <article
                  key={item.id}
                  className={`relative rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                    isEducation
                      ? "border border-indigo-100 shadow-indigo-100/50 hover:shadow-indigo-200/60"
                      : "border border-blue-100 shadow-blue-100/50 hover:shadow-blue-200/60"
                  }`}
                >
                  <span
                    className={`absolute -left-[2.1rem] top-7 h-4 w-4 rounded-full border-4 border-white shadow md:-left-[2.35rem] ${
                      isEducation ? "bg-indigo-500" : "bg-blue-500"
                    }`}
                  />

                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {formatDateRange(
                        item.startDate,
                        item.endDate,
                        item.isPresent,
                      )}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isEducation ? "text-indigo-600" : "text-blue-600"
                      }`}
                    >
                      {isEducation ? "EDU" : "EXP"} #
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mb-4 mt-1 text-sm font-medium text-slate-600">
                    {item.subtitle}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-sm leading-relaxed text-slate-700 md:text-base"
                        >
                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                              isEducation ? "bg-indigo-500" : "bg-blue-500"
                            }`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={`${item.id}-${tag}`}
                          className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
