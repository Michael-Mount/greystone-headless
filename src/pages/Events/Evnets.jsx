import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2021/01/GreystoneInn_Rooms-0368.jpg";

import { events } from "../../Data/EventsData";
import EventCalendar from "../../components/Decorative/EventCard/EventCalendar";
import EventList from "../../components/Decorative/EventCard/EventList";

export default function Evnets() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".event-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });

      gsap.from(".calendar-wrapper", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <HeroImage image={hrimg} title="Events & Activities" />
      <main
        ref={containerRef}
        className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-10"
      >
        <section className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <header className="page-heading text-center space-y-4">
            <p className="tracking-[0.3em] text-xs uppercase text-slate-500">
              Boutique Hotel Events
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
              Happenings at The Greystone
            </h1>
            <p className="max-w-2xl mx-auto text-slate-600">
              Discover intimate experiences curated for our guests—from rooftop
              yoga to chef&apos;s tasting dinners and seasonal celebrations.
            </p>
          </header>

          {/* Content layout */}
          <section className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            {/* Events list */}
            <div className="space-y-6">
              <EventList events={events} />
            </div>

            {/* Calendar */}
            <div className="lg:sticky lg:top-24">
              <EventCalendar events={events} />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
