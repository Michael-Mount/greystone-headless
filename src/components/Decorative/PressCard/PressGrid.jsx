import PressCard from "./PressCard";
import { ARTICLES } from "../../../Data/NewsData";

export default function PressGrid({ items = ARTICLES }) {
  return (
    <section className="py-10 md:py-14">
      <header className="mb-8 md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          News & Press
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          The Greystone Inn in the Spotlight
        </h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
          A selection of recent articles, features, and mentions from magazines,
          newspapers, and travel editors who have shared our story.
        </p>
      </header>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((article, idx) => (
          <PressCard key={`${article.title}-${idx}`} article={article} />
        ))}
      </div>
    </section>
  );
}
