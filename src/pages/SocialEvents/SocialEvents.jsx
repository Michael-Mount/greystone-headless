import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";

const heroimg =
  "https://greystoneinn.com/wp-content/uploads/2020/09/Greystone_Summer20-3166.jpg";

gsap.registerPlugin(ScrollTrigger);

const venues = [
  {
    id: "the-lovelace-room",
    name: "The Lovelace Room & Deck",
    tag: "Lakeside Terrace",
    blurb:
      "Tucked into a hill, a short stroll from our guestrooms is the Lovelace Room. This productive space feels removed from the rest of the resort and enjoys a break-out deck that overlooks the water. This private space is perfect for elegant lakefront dinners, receptions and corporate meetings.",
    accommodations: [
      "800 Square feet",
      "Theater seating 60 guests",
      "Classroom seating 48 guests",
      "Conference table 30 guests",
      "U-Shape table 54 guests",
      "Cocltail reception 60 guests",
      "Seated meal 40 guests (60 guests with deck)",
    ],
    image:
      "https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_Meetings_BarFood_Drinks_Nest_April24-7836-HDR.jpg",
  },
  {
    id: "the-rockefeller-suite",
    name: "The Rockefeller Suite",
    tag: "Suite",
    blurb:
      "Originally built as Lucy’s library, the Rockefeller Suite is an inspiring space for meetings and private dining.  Modeled after the library George Vanderbilt created at his Biltmore Estate, this magnificent two-story, oak paneled room with soaring ceiling and huge mullioned windows features walls of books, a massive stone fireplace, and is steeped in distinguished history and tradition.",
    accommodations: [
      "800 square feet",
      "Theater seating 64 guests",
      "Classroom 42 guests",
      "Conference table 28 guests",
      "Cocktail reception 60 guests",
      "Seated meal 52 guests",
    ],
    image:
      "https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_Meetings_BarFood_Drinks_Nest_April24-8333.jpg",
  },
  {
    id: "restaurant",
    name: "The Restaurant",
    tag: "Indoor Dinning",
    blurb:
      "Anchored by a large stone fireplace, the Lakeside Dining Room is lined with windows that allow for breathtaking views of the lake and mountains and enjoys an intimate outdoor stone patio.  Beautiful light filled space for meetings and special events.",
    accommodations: [
      "1350 square feet",
      "Theater seating 128 guests",
      "Classroom seating 77 guests",
      "Seated meal 108 guests",
      "Cocktail reception 125 guests",
    ],
    image:
      "https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_Christmas_Dec22-2669.jpg",
  },
  {
    id: "exculsively",
    name: "Exclusively Yours",
    tag: "Exculsivity",
    blurb:
      "Elevate your retreat with the Exclusively Yours as we close the property for the duration of your stay. Enjoy access to The Mansion, Restaurant and communal spaces, allowing you to tailor meetings , activities and events to your groups needs. Indulge in a culinary journey with all meals included, commencing with dinner on day of arrival and concluding with breakfast on the day of departure. Its not just a stay; it’s an exclusively tailored experience for your success.",
    accommodations: ["Greystone Event team here to help you plan"],
    image: "https://greystoneinn.com/wp-content/uploads/2020/09/Library-IV.jpg",
  },
  {
    id: "south-lawn",
    name: "The South Lawn",
    tag: "Lakeside Terrace",
    blurb:
      "The rolling hillside of the South Lawn and three grass terraces provide an elegant backdrop for a social occasion and celebration.",
    accommodations: [
      "3000 square feet",
      "Seated meal 146 guests",
      "Cocktail reception 100+ guests",
      "Theater seating 150 guests",
    ],
    image:
      "https://greystoneinn.com/wp-content/uploads/2020/09/Greystone_Summer20-3166.jpg",
  },
  {
    id: "library",
    name: "The Library",
    tag: "Indoor Refinment",
    blurb:
      "The Mansion’s original library is intimate and warm with wood paneled walls, fireplace and windows that gaze out over the lake.",
    accommodations: [
      "600 square feet",
      "Theater seating 40 guests",
      "Seated meal with buffet 30 guests",
      "Cocktail reception: 40 guests",
    ],
    image: "https://greystoneinn.com/wp-content/uploads/2020/09/Library-IV.jpg",
  },
];

export default function EventVenues() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".venues-header", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".venue-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".venues-grid",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".venues-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".venues-cta",
          start: "top 85%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <HeroImage image={heroimg} title="Event Venues" />
      <section ref={rootRef} className="bg-[#f5f5f5] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Intro / Header (sits under your hero image) */}
          <header className="venues-header max-w-3xl mb-10 lg:mb-14">
            <p className="text-xs tracking-[0.26em] uppercase text-slate-500 mb-3">
              The Greystone Inn
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-serif tracking-tight text-[#003d51]">
              Event Venues by the Water
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              From lakeside terraces and manicured lawns to intimate mansion
              salons, Greystone offers a collection of venues for retreats,
              celebrations, and gatherings of many kinds. Each space can be
              paired with curated accommodations, dining, and experiences on the
              lake.
            </p>
          </header>

          {/* Cards grid */}
          <div className="venues-grid grid gap-8 lg:gap-10 lg:grid-cols-2">
            {venues.map((venue) => (
              <article
                key={venue.id}
                className="venue-card overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.45)] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 lg:h-60 overflow-hidden">
                  {/* Replace with your own image paths */}
                  <img
                    src={venue.image}
                    alt={`${venue.name} at The Greystone Inn`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003d51]/65 via-transparent to-transparent" />
                  {venue.tag && (
                    <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-black/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-slate-50">
                      {venue.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7 flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif tracking-tight text-slate-900">
                      {venue.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {venue.blurb}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 mb-2">
                      Accommodations
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                      {venue.accommodations.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003d51]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Per-venue CTA */}
                  <div className="mt-2 flex justify-between items-center gap-3 pt-3 border-t border-slate-200">
                    <p className="text-[0.7rem] text-slate-500 uppercase tracking-[0.18em]">
                      Tailored layouts &amp; itineraries available
                    </p>
                    <Link
                      to={`/event-rfp?venue=${encodeURIComponent(venue.name)}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#003d51] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-[#01526a] transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Global CTA */}
          <div className="venues-cta mt-12 lg:mt-16 flex flex-col items-center text-center gap-3">
            <p className="text-sm text-slate-700 max-w-xl">
              Not sure which space is best for your retreat or gathering? Share
              a few details and our events team will recommend venues, dates,
              and sample itineraries.
            </p>
            <Link
              to="/event-rfp"
              className="inline-flex items-center justify-center rounded-full bg-[#003d51] px-6 py-2.5 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.8)] hover:bg-[#01526a] transition-colors"
            >
              Submit Event RFP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
