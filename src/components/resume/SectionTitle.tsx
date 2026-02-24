type SectionTitleProps = {
  title: string;
  headingClassName: string;
};

const SectionTitle = ({ title, headingClassName }: SectionTitleProps) => {
  return (
    <h2
      className={`mb-4 border-b border-stone-300 pb-1 text-[1.05rem] font-bold uppercase tracking-[0.12em] text-stone-900 ${headingClassName}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
