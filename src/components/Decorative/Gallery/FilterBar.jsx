import { CATEGORIES } from "../../../Data/PhotoData";

export default function FilterBar({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-b">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory == cat;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={[
              "px-4 py-1.5 rounded-full text-sm md:text-base border transition",
              "backdrop-blur-sm",
              isActive
                ? "bg-slate-100 text-[#003d51] border-slate-100 shadow-sm"
                : "bg-[#003d51] text-white border-[#003d51] hover:bg-white hover:text-[#003d51]",
            ].join(" ")}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
