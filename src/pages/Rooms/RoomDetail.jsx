import { useLayoutEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";

import { rooms } from "../../Data/RoomData";

export default function RoomDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  const room = rooms.find(
    (r) => r.slug === slug || r.slug === `/rooms/${slug}`
  );

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room-hero", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".room-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const heroImage = room.images?.[0];

  const detailedParagraphs = room.detailDescription
    ? [room.detailDescription]
    : room.description
    ? [room.description]
    : [];

  const galleryImages = room.images || [];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 py-16 px-4 mt-20 sm:px-6 lg:px-10 lg:mt-24"
    >
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Back link + hero */}
        <div className="room-hero">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span>
            Back to Rooms &amp; Suites
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Text side */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                {room.location
                  ? `${room.location
                      .charAt(0)
                      .toUpperCase()}${room.location.slice(1)} Room`
                  : "Guest Room"}
              </p>

              <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
                {room.name}
              </h1>

              {room.description && (
                <p className="mt-3 text-slate-600 text-base">
                  {room.description}
                </p>
              )}
            </div>

            {/* Hero image */}
            {heroImage && (
              <button
                type="button"
                onClick={() => setActiveImage(heroImage)}
                className="rounded-3xl overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                <img
                  src={heroImage}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </button>
            )}
          </div>
        </div>

        {/* Body content */}
        <section className="room-body grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* Main description + gallery */}
          <div className="space-y-8">
            {/* Detailed description */}
            <div className="space-y-4">
              {detailedParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Gallery with clickable images */}
            {galleryImages.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden bg-slate-100 p-2">
                  {galleryImages.slice(0, 9).map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className="aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                      <img
                        src={src}
                        alt={`${room.name} photo ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar: amenities */}
          <aside className="rounded-2xl bg-white shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                Amenities
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {room.amenities?.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3 text-sm text-slate-600">
              <p>
                Each room includes full access to hotel amenities, complimentary
                Wi-Fi, and nightly turndown service.
              </p>
              <a
                href="https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&checkin=2025-11-02&checkout=2025-11-03&skd-checkin=2025-11-17&skd-checkout=2025-11-18&skd-property-code=S006006"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-700 transition"
              >
                Check Availability
              </a>
            </div>
          </aside>
        </section>
      </section>

      {/* Lightbox / Modal for gallery images */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-white/80 hover:text-white text-xl leading-none px-2 py-1 rounded-full bg-black/40"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
            <img
              src={activeImage}
              alt={room.name}
              className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
