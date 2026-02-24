import {
  formatDateRange,
  type ExperienceItem as ExperienceData,
} from "@/app/resume/data";

type ExperienceItemProps = {
  item: ExperienceData;
};

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <article>
      <div className="mb-0.5 flex items-baseline justify-between gap-4">
        <h3 className="text-sm font-bold text-stone-900">{item.title}</h3>
        <span className="shrink-0 text-[0.8rem] italic text-stone-600">
          {formatDateRange(item.startDate, item.endDate, item.isPresent)}
        </span>
      </div>

      <p className="mb-2 text-[0.83rem] italic text-stone-600">
        {item.company}
      </p>

      <ul className="mb-1 space-y-1">
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative pl-4 text-[0.84rem] leading-relaxed text-stone-700 before:absolute before:left-0 before:top-[0.22rem] before:text-[0.7rem] before:text-stone-500 before:content-['▸']"
          >
            {bullet}
          </li>
        ))}
      </ul>

      <p className="text-[0.78rem] italic text-stone-600">
        <span className="font-semibold not-italic text-stone-700">
          Technologies:
        </span>{" "}
        {item.technologies}
      </p>
    </article>
  );
};

export default ExperienceItem;
