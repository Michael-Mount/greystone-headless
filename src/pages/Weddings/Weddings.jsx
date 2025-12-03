import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroVideo from "../../components/Decorative/HeroVideo/HeroVIdeo";
import CenternedTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";

import wedVideo from "../../Video/Styled-Shoot-Social-Venue-HD-1080p.mp4";

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  {
    src: "https://greystoneinn.com/wp-content/uploads/2021/01/031_2086_MaggieAndZach_Wedding-FavOfJennings.jpg",
    alt: "Lakside King Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2021/01/057A5388.jpg",
    alt: "Mondern Bathroom",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2023/08/01_Anna-Grant.jpg",
    alt: "Lakeside View",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2021/01/Art-of-Wedding-Kathy-Beaver-Photography-13.png",
    alt: "Champagne Kitchen Table",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2021/01/20190704-18-42-40-whitney-cj-326-copy.jpg",
    alt: "Rain Room",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2021/01/Bridal-Session-0127.jpg",
    alt: "Living Room",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2023/08/taylorandtodd_thegreystoneinn_jennichandlerphotography-9.jpg",
    alt: "King Size Bed",
    aspect: "landscape",
  },
];

const weddingPackages = [
  {
    id: "your-weekend",
    name: "Exclusively Yours Weekend",
    tagline: "A full weekend woven around your story.",
    image:
      "https://greystoneinn.com/wp-content/uploads/2021/01/Art-of-Wedding-Kathy-Beaver-Photography-227.jpg",
    accommodations: [
      "Package is based on reserving all 30 rooms, it requires a full room block contract of all 30 rooms with a two-night minimum stay.",
      "Additional accommodation available through our vacation rental program. Per person catering pricing available for additional guests.",
    ],
    dine: [
      "Friday Rehearsal Dinner: Hors D’oeuvres & Dinner",
      "Saturday: Breakfast, Lunch, Wedding Hors D’oeuvres & Dinner",
      "Sunday: Breakfast",
    ],
    spaces: [
      "The Mansion: Lobby, Library, Piano Room & Bar",
      "North Terrace",
      "South Lawn",
      "Boathouse Deck",
      "Restaurant & Restaurant Patio",
      "Lovelace Room & Deck",
    ],
  },
  {
    id: "buy-out",
    name: "Restaurant Buy-Out",
    tagline: "The entire Restaurant, just for your guests.",
    image:
      "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Dine-Parent-Catering.jpg",
    accommodations: [
      "Pricing is based on reserving all 30 rooms, it requires a full room block contract of all 30 rooms with a two-night minimum stay.",
      "Additional accommodation available through our vacation rental program.",
      "The Restaurant Buy-Out Event can accommodate up to 108 maximum.",
    ],
    dine: [
      "Seated dinner in a private dining room or terrace.",
      "Personalized printed menus and place cards.",
      "Crafted cocktail list or signature couple’s cocktail.",
    ],

    spaces: ["Restaurant & Restaurant Patio"],
  },
  {
    id: "grand-event",
    name: "Grand Event",
    tagline: "A signature celebration by the water.",
    image:
      "https://greystoneinn.com/wp-content/uploads/2023/08/09_Lauren-Herb.jpg",
    accommodations: [
      "Pricing is based on reserving all 30 rooms, it requires a full room block contract of all 30 rooms with a two-night minimum stay.",
      "Additional accommodation available through our vacation rental program.",
      "The Grand Event can accommodate up to 150 maximum.",
    ],
    dine: [
      "Seated dinner in a private dining room or terrace.",
      "Personalized printed menus and place cards.",
      "Crafted cocktail list or signature couple’s cocktail.",
    ],
    spaces: [
      "The Mansion: Lobby, Library, Piano Room & Bar",
      "North Terrace",
      "South Lawn",
      "Boathouse Deck",
      "Restaurant & Restaurant Patio",
      "Lovelace Room & Deck",
    ],
  },
  {
    id: "intimate-weddings",
    name: "Intimate Weddings",
    tagline: "For smaller guest lists and big moments.",
    image: "https://greystoneinn.com/wp-content/uploads/2021/01/Q19A0113.jpg",
    accommodations: [
      "Private Ceremony in Location of Your Choice and Wedding Officiant",
      "Bridal Bouquet, Groom’s Boutonniere and Cake Flowers*",
      "Custom Three Course Dinner in the Lovelace Room*",
      "Custom Two-Tier Wedding Cake with Champagne Toast*",
    ],
    dine: [
      "Seated dinner in a private dining room or terrace.",
      "Personalized printed menus and place cards.",
      "Crafted cocktail list or signature couple’s cocktail.",
    ],
    spaces: [
      "The Mansion: Lobby, Library, Piano Room & Bar",
      "North Terrace",
      "South Lawn",
      "Boathouse Deck",
      "Restaurant & Restaurant Patio",
      "Lovelace Room & Deck",
    ],
  },
  {
    id: "elopements",
    name: "Elopements",
    tagline: "Just the two of you (and a few more, if you wish).",
    image: "https://greystoneinn.com/wp-content/uploads/2023/08/MxG-859.jpg",
    accommodations: [
      "Private Ceremony in Location of Your Choice and Wedding Officiant",
      "Bridal Bouquet, Groom’s Boutonniere and Cake Flowers*",
      "Rose Petal Turndown, Chocolate Truffles and Champagne on Wedding Night",
      "Greystone Inn Wedding Planner",
    ],
    dine: [
      "Custom Three Course Dinner for Two in The Restaurant*",
      "Custom Wedding Cake with Champagne Toast*",
      "A custom dinner menu will be created for you based on your preferences.",
    ],
    spaces: [
      "South Lawn",
      "Boathouse Deck",
      "Restaurant & Restaurant Patio",
      "Lovelace Room & Deck",
    ],
  },
  {
    id: "mansion",
    name: "Mansion Buy-Out",
    tagline: "A celebration centered around the historic mansion.",
    image:
      "https://greystoneinn.com/wp-content/uploads/2021/01/Bridal-Party-0938.jpg",
    accommodations: [
      "Pricing is based on reserving all 30 rooms, it requires a full room block contract of all 30 rooms with a two-night minimum stay.",
      "Additional accommodation available through our vacation rental program.",
      "The Mansion Buy-Out Event can accommodate up to 150 maximum.",
    ],
    dine: [
      "Cocktail hour in the mansion lounge or terrace.",
      "Reception in lakeview dining spaces.",
      "Custom late-night snack or dessert experience.",
    ],
    spaces: [
      "The Mansion: Lobby, Library, Piano Room & Bar",
      "South Lawn",
      "Boathouse Deck",
    ],
  },
];

export default function Weddings() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro text block
      gsap.from(".weddings-intro", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });

      // Feature section image parallax
      gsap.to(".weddings-feature-image", {
        yPercent: 10,
        scrollTrigger: {
          trigger: ".weddings-feature",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Sections / cards reveal
      const sections = gsap.utils.toArray(".wedding-section");
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });

      gsap.from(".wedding-package-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#wedding-packages",
          start: "top 80%",
          once: true,
        },
      });

      // CTA
      gsap.from(".wedding-cta", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wedding-cta",
          start: "top 85%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-slate-900">
      <HeroVideo video={wedVideo} />

      <section className="weddings-intro">
        <CenternedTextBlock content="Set on the shores of private Lake Toxaway, The Greystone Inn feels less like a venue and more like a cherished family home. Exchange your vows on lakeside terraces or manicured lawns, then slip into candlelit dining rooms with mountain views as your celebration continues into the evening." />
      </section>

      {/* Why Greystone Weddings / feature section */}
      <section className="weddings-feature wedding-section py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-slate-500 uppercase">
              Weddings at The Greystone Inn
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#003d51]">
              A lakeside estate for the way you love to celebrate.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              From full-inn buyouts to intimate elopements, Greystone’s weddings
              are designed to feel personal, unhurried, and deeply connected to
              the water and mountains around you. Each package layers in
              accommodations, dining, and thoughtful inclusions so your time
              here feels like a beautifully hosted house party—just with a few
              more flowers and a very important dress.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our team will help you choose the setting that fits your story
              best, from stone terraces and manicured lawns to candlelit dining
              rooms that open to the lake. From there, we curate the details, so
              you can stay present with the people who matter most.
            </p>
          </div>

          <div className="relative h-72 sm:h-80 lg:h-[360px]">
            <img
              src="https://greystoneinn.com/wp-content/uploads/2021/01/5077_MaggieAndZach_Wedding.jpg"
              alt="Wedding celebration overlooking a lake at sunset"
              className="weddings-feature-image h-full w-full rounded-3xl object-cover shadow-[0_24px_80px_-40px_rgba(15,23,42,0.9)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40 ring-offset-2 ring-offset-slate-900/20" />
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section
        id="wedding-packages"
        className="wedding-section border-y border-slate-200 bg-[#f7f7f7] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 lg:mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-slate-500 uppercase mb-2">
                Wedding Packages
              </p>
              <h2 className="text-3xl font-serif tracking-tight text-[#003d51]">
                Six ways to make Greystone yours.
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-700 leading-relaxed">
                Each package combines carefully considered accommodations,
                bespoke dining, and meaningful inclusions. Begin with the
                framework that fits your celebration, then let our team tailor
                the details.
              </p>
            </div>

            <div className="flex items-center justify-start lg:justify-end">
              <Link
                to="/wedding-rfp"
                className="inline-flex items-center rounded-full border border-[#003d51] bg-[#003d51] px-5 py-2.5 text-sm font-medium tracking-[0.14em] uppercase text-white shadow-[0_14px_40px_-24px_rgba(0,61,81,0.9)] transition hover:bg-[#01566f] hover:border-[#01566f]"
              >
                Inquire About Weddings
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {weddingPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="wedding-package-card rounded-3xl bg-white/90 p-6 sm:p-7 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.6)] ring-1 ring-slate-200/70"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="sm:w-40 sm:flex-shrink-0">
                    <div className="relative h-32 overflow-hidden rounded-2xl sm:h-32">
                      <img
                        src={pkg.image}
                        alt={`${pkg.name} at The Greystone Inn`}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <p className="text-[11px] tracking-[0.28em] uppercase text-slate-500">
                      Wedding Package
                    </p>
                    <h3 className="text-xl sm:text-2xl font-serif tracking-tight text-[#003d51]">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-500">
                      Accommodations
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                      {pkg.accommodations.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-500">
                      Dine
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                      {pkg.dine.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-500">
                      Event Spaces
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                      {pkg.spaces.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Optional per-package link */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <Link
                    to="/wedding-rfp"
                    className="text-xs font-medium tracking-[0.18em] uppercase text-[#003d51] underline-offset-4 hover:underline"
                  >
                    Request Details for {pkg.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoGridGallery images={gallery} />

      {/* Closing CTA */}
      <section className="wedding-cta py-16 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#003d51] px-6 py-10 text-slate-50 shadow-[0_30px_80px_-40px_rgba(0,61,81,0.9)] lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-xs tracking-[0.28em] uppercase text-slate-200/80 mb-3">
                Begin Planning
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
                Tell us about the celebration you’re dreaming of.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-100/90 leading-relaxed">
                Share a few details about your ideal date, guest count, and how
                you imagine using our lakeside spaces. Our weddings team will
                follow up with tailored options and availability for Your
                Weekend, Buy-Out, Grand Event, Intimate Weddings, Elopements, or
                a Mansion-focused celebration.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Link
                to="/wedding-rfp"
                className="inline-flex items-center rounded-full border border-white/85 bg-white px-6 py-2.5 text-sm font-medium tracking-[0.16em] uppercase text-[#003d51] shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)] transition hover:bg-slate-100"
              >
                Submit a Wedding Inquiry
              </Link>
              <span className="text-xs text-slate-100/80">
                Prefer to speak with someone? Call{" "}
                <a
                  href="tel:+18286225746"
                  className="underline underline-offset-4"
                >
                  (828) 622-5746
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
