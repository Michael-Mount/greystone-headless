import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";

const hrImge =
  "https://greystoneinn.com/wp-content/uploads/2021/01/HEADER-2.jpg";

export default function EventRFP() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rfp-hero", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".rfp-form-card", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".rfp-side-panel", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.25,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook this up to your actual submission logic (email, API, CRM, etc.)
    // For now you can log or show a toast
    console.log("Social RFP submitted");
  };

  return (
    <div>
      <HeroImage image={hrImge} title="Request a Proposal" />
      <div ref={rootRef} className="min-h-screen bg-[#f5f5f5] text-slate-900">
        {/* Page wrapper */}
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Header / Intro */}
          <header className="rfp-hero max-w-3xl mb-10 lg:mb-14">
            <p className="text-xs tracking-[0.26em] uppercase text-slate-500 mb-3">
              Events at The Greystone Inn
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif tracking-tight text-[#003d51]">
              Event Request for Proposal
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              Share a few details about your gathering, and our events team will
              be in touch with tailored options for dates, venues, and packages
              at The Greystone Inn. This form is simply a starting point — we’ll
              refine everything together.
            </p>
          </header>

          {/* Main content: form + side panel */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            {/* FORM */}
            <section className="rfp-form-card rounded-3xl bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.45)] border border-slate-200">
              <form
                className="divide-y divide-slate-200"
                onSubmit={handleSubmit}
              >
                {/* Contact Information */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-5">
                    Contact Information
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        First Name*
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Last Name*
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Email*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Phone*
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="partnerName"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Partner&apos;s Name
                      </label>
                      <input
                        id="partnerName"
                        name="partnerName"
                        type="text"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Either</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-5">
                    Event Details
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="date"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2">
                        Is your date flexible?
                      </span>
                      <div className="flex gap-4 text-xs text-slate-700 mt-1">
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="flexibleDate"
                            value="Yes"
                            className="h-3 w-3 border-slate-400 text-[#003d51] focus:ring-[#003d51]/70"
                          />
                          Yes
                        </label>
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="flexibleDate"
                            value="No"
                            className="h-3 w-3 border-slate-400 text-[#003d51] focus:ring-[#003d51]/70"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="guestCount"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Approximate Guest Count
                      </label>
                      <input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min="1"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Team-building </option>
                        <option>Anniversarie</option>
                        <option>Fundraiser</option>
                        <option>Seminar</option>
                        <option>Conference</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Estimated Overall Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Undecided</option>
                        <option>Up to $25,000</option>
                        <option>$25,000 – $50,000</option>
                        <option>$50,000 – $75,000</option>
                        <option>$75,000 – $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Packages */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-5">
                    Venues of Interest
                  </h2>
                  <p className="text-xs text-slate-600 mb-3">
                    Select any venue experiences you&apos;d like to learn more
                    about:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-800">
                    {[
                      "The Lovelace",
                      "The Rockefeller",
                      "The South Lawn",
                      "The Library",
                      "The Restaurant",
                      "Exclusively Yours",
                    ].map((pkg) => (
                      <label
                        key={pkg}
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-200 hover:border-[#003d51]/50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="packages"
                          value={pkg}
                          className="h-3.5 w-3.5 border-slate-400 text-[#003d51] focus:ring-[#003d51]/70"
                        />
                        <span>{pkg}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Lodging / Dining Preferences */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-5">
                    Lodging &amp; Celebration
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="roomBlock"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Will you require guest room blocks?
                      </label>
                      <select
                        id="roomBlock"
                        name="roomBlock"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Undecided</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="nights"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Approximate Nights on Property
                      </label>
                      <input
                        id="nights"
                        name="nights"
                        type="text"
                        placeholder="e.g., 2–3 nights"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="diningStyle"
                      className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                    >
                      Dining &amp; Reception Style
                    </label>
                    <select
                      id="diningStyle"
                      name="diningStyle"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                    >
                      <option>Undecided</option>
                      <option>Plated dinner</option>
                      <option>Buffet dinner</option>
                      <option>Stations / cocktail-style</option>
                      <option>Brunch reception</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear & Details */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-5">
                    Final Details
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="hearAbout"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Search engine</option>
                        <option>Social media</option>
                        <option>Event planner</option>
                        <option>Friend or family</option>
                        <option>Previous stay at Greystone</option>
                        <option>Publication or blog</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="planner"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                      >
                        Do you have an Event planner?
                      </label>
                      <select
                        id="planner"
                        name="planner"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                      >
                        <option>Not yet</option>
                        <option>Yes, full-service planner</option>
                        <option>Yes, day-of coordinator</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="details"
                      className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 mb-2"
                    >
                      Tell us about your vision
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      placeholder="Share anything that will help us tailor your event – style, must-have moments, etc."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#003d51] focus:ring-1 focus:ring-[#003d51]/60"
                    />
                  </div>
                </div>

                {/* CTA Row */}
                <div className="px-6 py-5 sm:px-8 sm:py-6 flex flex-col gap-3 border-t border-slate-200 bg-slate-50/80 rounded-b-3xl">
                  <p className="text-xs text-slate-600">
                    By submitting this form, you&apos;re simply beginning a
                    conversation with our Events team. Dates and pricing are
                    subject to availability and will be confirmed with you
                    directly.
                  </p>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#003d51] px-6 py-2.5 text-sm font-medium tracking-[0.16em] uppercase text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.9)] hover:bg-[#01526a] transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </section>

            {/* SIDE PANEL */}
            <aside className="rfp-side-panel space-y-6 lg:space-y-8">
              {/* Image placeholder */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-200/60">
                <div className="relative h-52 sm:h-64 lg:h-72">
                  <img
                    src="https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_Meetings_BarFood_Drinks_Nest_April24-7836-HDR.jpg"
                    alt="Placeholder wedding image at lakeside estate"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003d51]/70 via-transparent to-transparent" />
                </div>
              </div>

              {/* Copy block */}
              <div className="rounded-3xl border border-slate-200 bg-white px-6 py-6 sm:px-7 sm:py-7">
                <h3 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-500 mb-3">
                  A Greystone Gathering
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  From lakeside terraces and manicured lawns to intimate mansion
                  salons, each gathering at The Greystone Inn is tailored to the
                  group.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Once we receive your request, a member of our team will
                  personally review your details and reach out with date
                  availability, recommended packages, and next steps for an
                  in-person or virtual visit.
                </p>
              </div>

              {/* Secondary CTA / Contact */}
              <div className="rounded-3xl border border-slate-200 bg-[#003d51] px-6 py-6 sm:px-7 sm:py-7 text-slate-100">
                <h3 className="text-sm font-semibold tracking-[0.24em] uppercase text-slate-100/80 mb-3">
                  Prefer to speak directly?
                </h3>
                <p className="text-sm text-slate-100/90 leading-relaxed mb-4">
                  Our events team would be delighted to connect by phone or
                  email to answer quick questions or help you get started.
                </p>
                {/* Replace href with your real tel/mailto/links */}
                <div className="space-y-1 text-sm">
                  <a
                    href="tel:0000000000"
                    className="block underline underline-offset-2 decoration-slate-200/70 hover:decoration-white"
                  >
                    (000) 000-0000
                  </a>
                  <a
                    href="mailto:weddings@example.com"
                    className="block underline underline-offset-2 decoration-slate-200/70 hover:decoration-white"
                  >
                    eventss@example.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
