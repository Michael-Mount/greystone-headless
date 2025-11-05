import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const { title, preText, slug, img } = restaurant;

  return (
    <div className="resturaunt-card bg-white overflow-hidden shadow-sm border border-slate-100 flex flex-col">
      <div className="relative h-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        {preText && (
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {preText}
          </p>
        )}
        <div className="mt-auto pt-2">
          <Link
            to={slug}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00486b] hover:text-[#003552]"
          >
            Discover More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
