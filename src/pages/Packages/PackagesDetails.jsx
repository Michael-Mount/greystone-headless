import { useLayoutEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";

import { pkgs } from "../../Data/PackageData";

const BOOK_URL =
  "https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&skd-property-code=S006006";

export default function PackageDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  // slug will be something like "romance-on-the-lake"
  const pkg = pkgs.find((p) => p.slug === slug);

  if (!pkg) {
    // If slug doesn't match anything, go back to /packages
    return <Navigate to="/packages" replace />;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".package-hero", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".package-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // fallback handling if your data shape is slightly different
  const title = pkg.name || pkg.title || "Package";
  const heroImage = pkg.img;
  const shortDescription = pkg.desciption;

  const detailedParagraphs = pkg.details;

  const bookLink = pkg.bookUrl || BOOK_URL;

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 py-16 px- mt-20 sm:px-6 lg:px-10 lg:mt-24 p-8"
    >
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Back link + hero */}
        <div className="package-hero">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900"
          >
            <span aria-hidden>←</span>
            Back to Packages &amp; Offers
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start ">
            {/* Text side */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Package Offer
              </p>

              <h1 className="font-cursive text-4xl md:text-6xl font-semibold text-slate-900">
                {title}
              </h1>

              {shortDescription && (
                <p className="mt-3 text-slate-600 text-base">
                  {shortDescription}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={bookLink}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-700 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book This Package
                </a>
              </div>
            </div>

            {/* Hero image */}
            {heroImage && (
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Body – just the detailed description, lighter than rentals/events */}
        <section className="package-body max-w-3xl space-y-4 px-8">
          {detailedParagraphs}
        </section>
      </section>
    </main>
  );
}
