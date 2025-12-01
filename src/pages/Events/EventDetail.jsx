import { useLayoutEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";

import { events } from "../../Data/EventsData";

export default function EventDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  const event = events.find((e) => e.slug === slug);

  // If slug doesn't match anything, bounce back to /events
  if (!event) {
    return <Navigate to="/events" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-hero", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".event-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 py-16 px-4 mt-24 sm:px-6 lg:px-10 lg:mt-24"
    >
      <section className="max-w-5xl mx-auto space-y-10">
        {/* Back link */}
        <div className="event-hero">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span>
            Back to Events
          </Link>

          {/* Hero content */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Text */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Boutique Hotel Event
              </p>
              <h1 className="text-3xl md:text-6xl font-cursive text-[#003d51]">
                {event.title}
              </h1>
              <p className="text-sm font-medium text-slate-700">
                {formattedDate} · {event.time}
              </p>
              {event.location && (
                <p className="text-sm text-slate-500">{event.location}</p>
              )}

              <p className="text-slate-600 text-base mt-4">
                {event.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to="https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&skd-checkin=2025-11-02&skd-checkout=2025-11-03&skd-property-code=S006006"
                  className="inline-flex items-center justify-center rounded-full bg-[#003d51] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white transition hover:text-[#003d51]"
                >
                  Reserve Your Stay
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <section className="event-body grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* Main description */}
          <div className="space-y-6">
            {event.longDescription?.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sidebar: highlights & key info */}
          <aside className="rounded-2xl bg-white shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                Event Highlights
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {event.highlights?.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003d51]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 text-sm text-slate-600 space-y-2">
              <p>
                <span className="font-semibold">Date:</span> {formattedDate}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {event.time}
              </p>
              {event.location && (
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
              )}
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
