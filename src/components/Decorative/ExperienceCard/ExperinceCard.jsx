import { Link } from "react-router-dom";

export default function ExperienceCard({ experience }) {
  return (
    <Link
      to={`/experience/${experience.slug}`}
      className="experience-card block group"
    >
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        {/* Image */}
        <img
          src={experience.image}
          alt={experience.title}
          className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {experience.location && (
            <span className="mb-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
              {experience.location}
            </span>
          )}

          <h3 className="text-2xl md:text-5xl font-cursive text-white">
            {experience.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
