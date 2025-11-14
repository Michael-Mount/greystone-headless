// JobAdBlock.jsx
const JobAdBlock = ({
  title,
  imageSrc,
  imageAlt,
  intro,
  requirementsTitle,
  requirements = [],
  sub = [],
}) => {
  return (
    <section className="flex flex-col md:flex-row bg-[#d8d8d8] text-[#003d51] p-4 md:p-6 gap-4 md:gap-8">
      <div className="w-full md:w-60 lg:w-72 flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-2 uppercase">
          {title}
        </h3>

        <p className="mb-3">{intro}</p>

        {requirementsTitle && (
          <p className="mb-2 font-semibold text-[#005c8f]">
            {requirementsTitle}
          </p>
        )}

        {!!requirements.length && (
          <ul className="mb-3 list-disc list-outside pl-5 space-y-1 marker:text-[#005c8f]">
            {requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {sub.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? "" : "mt-2"}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default JobAdBlock;
