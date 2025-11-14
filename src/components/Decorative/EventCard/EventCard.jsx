// src/components/events/EventCard.jsx
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <article className="event-card flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="md:w-1/3 h-52 md:h-auto">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-1">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {event.time}
          </p>
          <h3 className="text-2xl font-semibold text-[#003d51]">
            {event.title}
          </h3>
          <p className="text-slate-600 mt-2">{event.shortDescription}</p>
        </div>

        <div>
          <Link
            to={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2 text-sm font-medium uppercase tracking-[0.18em] hover:bg-slate-900 hover:text-white transition"
          >
            Learn More
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
