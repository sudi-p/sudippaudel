import {
  formatDateRange,
  type EducationItem as EducationData,
} from "@/app/resume/data";

type EducationItemProps = {
  item: EducationData;
};

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <article>
      <h3 className="text-[0.88rem] font-bold text-stone-900">{item.degree}</h3>
      <p className="text-[0.83rem] italic text-stone-600">{item.school}</p>
      <p className="text-[0.8rem] text-stone-500">
        {formatDateRange(item.startDate, item.endDate)}
      </p>
    </article>
  );
};

export default EducationItem;
