// src/components/PressCard.jsx
export default function PressCard({ article }) {
  const { title, author, date, link } = article;

  const isLink = Boolean(link);

  const Wrapper = isLink ? "a" : "div";

  return (
    <Wrapper
      href={isLink ? link : undefined}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      className={[
        "group block h-full rounded-2xl border border-slate-200/70",
        "bg-white/80 backdrop-blur-sm shadow-sm",
        "px-5 py-5 md:px-6 md:py-6",
        "transition hover:-translate-y-1 hover:shadow-lg hover:border-slate-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80",
      ].join(" ")}
    >
      {/* Title */}
      <h3 className="font-semibold tracking-tight text-slate-900 text-base md:text-lg leading-snug">
        {title}
      </h3>

      {/* Meta */}
      <p className="mt-2 text-sm text-slate-600 italic">
        {author}
        {author && date && " \u2014 "}
        {date}
      </p>

      {/* CTA */}
      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {isLink ? (
          <span className="inline-flex items-center gap-1 group-hover:text-slate-900">
            Read more
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-slate-400">
            Link coming soon
          </span>
        )}
      </div>
    </Wrapper>
  );
}
