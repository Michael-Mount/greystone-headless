// src/pages/Amenities/Amenities.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const amenitySections = [
  {
    id: "on-property",
    label: "On Property",
    kicker: "Estate & Grounds",
    description:
      "Thoughtful spaces inside and out—crafted for slow mornings, golden-hour cocktails, and quiet moments by the water.",
    items: [
      "Lakeside setting on private Lake Toxaway with marina access",
      "Seasonal outdoor pool with loungers & pool towels",
      "Lakefront lawns, terraces, and outdoor fireplace / fire pit",
      "Picnic areas and rocking-chair porches",
      "Historic mansion lounge, library, and gathering spaces",
      "Complimentary self-parking; valet parking available",
    ],
  },
  {
    id: "dining",
    label: "Dining & Drinks",
    kicker: "Lakeside Dining",
    description:
      "From breakfast on the terrace to cocktails by the fire, dining at Greystone is designed around the shifting light on the lake.",
    items: [
      "Lakeside restaurant with mountain and water views",
      "Mansion Bar serving classic cocktails, wine, and beer",
      "Breakfast, lunch, and dinner service",
      "Seasonal terrace & outdoor dining",
      "In-room dining / room service",
      "Kids’ menus and special-diet options on request",
    ],
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    kicker: "Calm by the Water",
    description:
      "A quiet spa, thoughtful treatments, and simple rituals that slow time down between lake and mountains.",
    items: [
      "Full-service spa with dedicated treatment rooms",
      "Massages including deep tissue, aromatherapy, and hot stone",
      "Facials and body treatments / wraps",
      "Fitness center with cardio & strength equipment",
      "Yoga and wellness classes (seasonal)",
      "Access to nearby health club facilities",
    ],
  },
  {
    id: "activities",
    label: "Activities & Recreation",
    kicker: "On the Lake & Beyond",
    description:
      "Adventure at your own pace: from sunrise paddles to late-afternoon fairways and waterfall hikes.",
    items: [
      "Golf at Lake Toxaway Country Club",
      "Tennis, pickleball, and croquet",
      "Canoeing, kayaking, paddleboarding, and boating on Lake Toxaway",
      "Fishing on the lake and nearby streams",
      "Complimentary seasonal cruise aboard Miss Lucy",
      "Hiking, waterfall excursions, cycling, and horseback riding",
    ],
  },
  {
    id: "rooms",
    label: "Rooms & Suites",
    kicker: "Historic & Lakeside Rooms",
    description:
      "Intimate spaces that feel more like a private home than a hotel—many with lake views, balconies, or fireplaces.",
    items: [
      "~30 guest rooms & suites in mansion and lakeside buildings",
      "Many rooms with lake views, balconies, or terraces",
      "Premium feather-topped bedding and plush robes",
      "Complimentary Wi-Fi and in-room seating or desk",
      "Air conditioning, heating, and in-room coffee / tea",
      "Private baths with hairdryer and curated amenities",
    ],
  },
  {
    id: "services",
    label: "Services & Experiences",
    kicker: "Thoughtful Service",
    description:
      "A discreet, attentive team to curate your stay—from arrival to the last look back at the water.",
    items: [
      "24-hour front desk and concierge-style assistance",
      "Daily housekeeping and evening refresh (select stays)",
      "Private check-in / check-out",
      "Laundry and pressing services on request",
      "Event, meeting, and wedding facilities",
      "Seasonal romance, spa, and adventure packages",
    ],
  },
  {
    id: "families-pets",
    label: "Families & Pets",
    kicker: "For Families & Four-Legged Guests",
    description:
      "Greystone is designed for couples’ retreats and family escapes alike—with room for four-legged companions in select rooms.",
    items: [
      "Children welcome; family-friendly room options",
      "Kids’ meals and casual, family-friendly spaces",
      "Board games, lawn games, and seasonal activities",
      "Pack-n-plays / cribs available on request",
      "Select pet-friendly rooms with pet amenities (fee applies)",
    ],
  },
];

export default function Amenities() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro animation
      gsap.from(".amenities-hero-heading", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".amenities-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".amenities-hero-meta", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      // Parallax on hero image
      gsap.to(".amenities-hero-image", {
        yPercent: 10,
        scrollTrigger: {
          trigger: ".amenities-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section fade + lift on scroll
      const sections = gsap.utils.toArray(".amenities-section");

      sections.forEach((section, index) => {
        const cards = section.querySelectorAll(".amenity-card");

        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.05 * index,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="amenities-hero relative overflow-hidden">
        <div className="absolute inset-0 amenities-hero-image">
          {/* Stand-in hero image */}
          <img
            src="https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Story-Parent-Header.jpg"
            alt="Lakeside view at dusk with mountains"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#003d51]/80 to-black" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col px-6 py-24 lg:min-h-[85vh] lg:px-8">
          <div className="mt-auto max-w-2xl pb-10 lg:pb-20">
            <p className="amenities-hero-meta text-xs tracking-[0.25em] text-slate-100/80 uppercase mb-4">
              The Greystone Inn &mdash; Lake Toxaway, North Carolina
            </p>
            <h1 className="amenities-hero-heading text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white">
              Amenities by the Water.
            </h1>
            <p className="amenities-hero-subtitle mt-5 text-base sm:text-lg text-slate-100/90 leading-relaxed">
              A historic lakeside estate with the quiet luxuries that matter:
              thoughtful dining, a calm spa, curated outdoor experiences, and
              rooms that feel like a private home.
            </p>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-slate-200 bg-[#003d51]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-100/80 uppercase mb-3">
              Lake. Mountains. Mansion.
            </p>
            <p className="text-sm sm:text-base text-slate-100/90 leading-relaxed">
              The Greystone Inn brings together the comforts of a private
              lakeside home with the ease and polish of a full-service boutique
              hotel. Explore what’s included in your stay and what our team can
              arrange on your behalf.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-100/90">
            <span className="rounded-full border border-slate-200/80 px-4 py-1">
              Lakeside pool &amp; spa
            </span>
            <span className="rounded-full border border-slate-200/80 px-4 py-1">
              Country club access
            </span>
            <span className="rounded-full border border-slate-200/80 px-4 py-1">
              Curated lake &amp; mountain experiences
            </span>
          </div>
        </div>
      </section>

      {/* Amenities grid on light gray background */}
      <main className="relative">
        <section className="bg-[#f5f5f5] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[220px,minmax(0,1fr)]">
              {/* Sidebar Amenity Index (desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-4">
                  <p className="text-xs tracking-[0.25em] text-slate-500 uppercase">
                    Amenities
                  </p>
                  <ul className="space-y-1.5">
                    {amenitySections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="amenities-nav-link block rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[#003d51] hover:bg-[#003d51]/5 transition-colors"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Content: sections + callout */}
              <div className="space-y-16 lg:space-y-24">
                {amenitySections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="amenities-section scroll-mt-24"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <span className="h-px w-10 bg-slate-300" />
                      <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">
                        {section.label}
                      </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
                      {/* Text / intro */}
                      <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-slate-900">
                          {section.kicker}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      {/* Cards */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <article
                            key={item}
                            className="amenity-card rounded-2xl bg-[#003d51] px-5 py-4 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6)]"
                          >
                            <div className="mb-3 flex items-center gap-2">
                              <span className="h-6 w-6 rounded-full border border-slate-100/60 flex items-center justify-center text-[0.6rem] font-semibold text-slate-100/90">
                                ●
                              </span>
                              <span className="h-px flex-1 bg-slate-100/40" />
                            </div>
                            <p className="text-sm text-slate-50 leading-relaxed">
                              {item}
                            </p>
                          </article>
                        ))}
                      </div>
                    </div>
                  </section>
                ))}

                {/* Callout / Image band */}
                <section className="mt-6 rounded-3xl border border-slate-200 bg-[#003d51] overflow-hidden">
                  <div className="grid gap-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.3fr)]">
                    <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <p className="text-xs tracking-[0.3em] text-slate-100/80 uppercase mb-3">
                        Curated Stays
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                        Romance, adventure, or a long weekend by the water.
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-slate-100/90 leading-relaxed">
                        Whether you’re planning a quiet escape, a family
                        gathering, or a celebration, our team can tailor spa
                        appointments, lake excursions, tee times, and private
                        dining to fit the way you like to travel.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
                        <span className="rounded-full border border-slate-200/80 px-4 py-1 text-slate-100/90">
                          Custom itineraries
                        </span>
                        <span className="rounded-full border border-slate-200/80 px-4 py-1 text-slate-100/90">
                          Spa &amp; wellness packages
                        </span>
                        <span className="rounded-full border border-slate-200/80 px-4 py-1 text-slate-100/90">
                          Lake &amp; golf experiences
                        </span>
                      </div>
                    </div>

                    <div className="relative h-60 md:h-full">
                      {/* Stand-in image for callout */}
                      <img
                        src="https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_Amenities-4673.jpg"
                        alt="Guests relaxing on a lakeside terrace at sunset"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#003d51]/65 via-transparent to-transparent" />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
