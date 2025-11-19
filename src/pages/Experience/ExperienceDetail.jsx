import { useLayoutEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";

import { experiences } from "../../Data/ExperinceData";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  const experience = experiences.find(
    (exp) => exp.slug === slug || exp.slug === `/experience/${slug}`
  );

  if (!experience) {
    return <Navigate to="/experience" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-hero", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".experience-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const {
    title,
    image,
    location,
    longDescription,
    activities = [],
  } = experience;

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 py-16 px-4 mt-18 sm:px-6 lg:px-10"
    >
      <section className="max-w-6xl mx-auto space-y-10">
        <div className="experience-hero">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span>
            Back to Experiences
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Text side */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Signature Experience
              </p>

              <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
                {title}
              </h1>

              {location && (
                <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {location}
                </span>
              )}

              {longDescription && (
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {longDescription}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="/stay"
                  className="inline-flex items-center justify-center rounded-full bg-[#003e52] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-700 transition"
                >
                  Plan Your Stay
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
                >
                  Talk to Concierge
                </a>
              </div>
            </div>

            {/* Hero image */}
            {image && (
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Body: activities */}
        <section className="experience-body space-y-10">
          {activities.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Experiences on the Lake
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl">
                Explore ways to enjoy this setting, from complimentary
                on-property activities to curated outings with our local
                partners.
              </p>
            </div>
          )}

          <div className="space-y-8">
            {activities.map((activity, index) => {
              const isReversed = index % 2 === 1;
              const key = `${activity.id ?? "activity"}-${index}`;

              return (
                <article
                  key={key}
                  className="w-full bg-white/95 border border-slate-100 rounded-3xl overflow-hidden shadow-sm"
                >
                  <div
                    className={`flex flex-col lg:flex-row ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Activity image */}
                    {activity.image && (
                      <div className="w-full lg:w-1/2 h-56 lg:h-80 overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Activity content */}
                    <div className="w-full lg:w-1/2 px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center gap-3 bg-slate-50">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-wide">
                        {activity.name}
                      </h3>
                      {activity.description && (
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {activity.description}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Soft CTA footer */}
          <div className="mt-6 rounded-3xl bg-[#003e52] text-white px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                Make It Part of Your Stay
              </h2>
              <p className="mt-3 text-sm text-white/90 max-w-xl">
                Our team can help you weave this experience into your itinerary,
                whether you’re here for a quiet retreat or a celebration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/stay"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-100 transition"
              >
                View Rooms & Suites
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition"
              >
                Contact Concierge
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
