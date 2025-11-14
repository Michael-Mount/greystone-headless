// src/pages/Rentals/RentalDetail.jsx
import { useLayoutEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";

import { rentals } from "../../Data/RentalsData";

export default function RentalDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  // slug is like "dancing-bear"
  const rental = rentals.find((r) => r.slug === slug);

  if (!rental) {
    return <Navigate to="/rentals" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rental-hero", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".rental-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: rental.pricing.currency || "USD",
    maximumFractionDigits: 0,
  });

  const nightlyRate = rental.pricing.nightlyFrom
    ? formatter.format(rental.pricing.nightlyFrom)
    : null;

  const cleaningFee = rental.pricing.cleaningFee
    ? formatter.format(rental.pricing.cleaningFee)
    : null;

  const galleryImages = rental.galleryImages || rental.images || [];
  const detailedParagraphs = rental.detailedDescription
    ? rental.detailedDescription
    : rental.description
    ? [rental.description]
    : [];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-10"
    >
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Back link + hero section */}
        <div className="rental-hero">
          <Link
            to="/rentals"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span>
            Back to Vacation Rentals
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Text side */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Vacation Rental
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
                {rental.name}
              </h1>

              <p className="text-sm font-medium text-slate-700">
                {rental.beds} {rental.beds === 1 ? "bed" : "beds"} ·{" "}
                {rental.baths} {rental.baths === 1 ? "bath" : "baths"}
              </p>

              {nightlyRate && (
                <p className="text-sm text-slate-500">
                  From{" "}
                  <span className="font-semibold text-slate-900">
                    {nightlyRate}
                  </span>{" "}
                  per night
                  {cleaningFee && <> · Cleaning fee {cleaningFee}</>}
                </p>
              )}

              <p className="mt-4 text-slate-600 text-base">
                {rental.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="/stay"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-700 transition"
                >
                  Check Availability
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition"
                >
                  Contact Reservations
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={rental.mainimage || galleryImages[0]}
                alt={rental.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body content */}
        <section className="rental-body grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* Main description + gallery hook */}
          <div className="space-y-8">
            {/* Detailed description */}
            <div className="space-y-4">
              {detailedParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Gallery
              </h2>

              {/* Replace with your custom gallery component later */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden bg-slate-100 p-2">
                {galleryImages.slice(0, 6).map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <img
                      src={src}
                      alt={`${rental.name} photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: features + pricing details */}
          <aside className="rounded-2xl bg-white shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                Features
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {rental.features?.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-sm text-slate-600">
              {nightlyRate && (
                <p>
                  <span className="font-semibold">Nightly from:</span>{" "}
                  {nightlyRate}
                </p>
              )}
              {cleaningFee && (
                <p>
                  <span className="font-semibold">Cleaning fee:</span>{" "}
                  {cleaningFee}
                </p>
              )}
              <p>
                <span className="font-semibold">Beds / Baths:</span>{" "}
                {rental.beds} {rental.beds === 1 ? "bed" : "beds"},{" "}
                {rental.baths} {rental.baths === 1 ? "bath" : "baths"}
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
