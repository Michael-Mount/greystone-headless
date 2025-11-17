import HeroImage from "../../components/Decorative/HeroImage/HeroImage";

const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2020/09/MG_0056-1.jpg";

export default function Policies() {
  return (
    <div>
      <HeroImage image={hrimg} title="Hotel Polices" />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-10">
            {/* Cancellations section */}
            <section aria-labelledby="cancellations" className="mb-8">
              <h2
                id="cancellations"
                className="text-2xl font-semibold text-[#003d51]"
              >
                CANCELLATIONS
              </h2>
              <p className="mt-3 leading-relaxed">
                Due to our size, cancellations affect us significantly;
                therefore, we adhere to a strict cancellation policy.
                Reservations may be cancelled without penalty up to 14 days
                prior to arrival. Reservations not cancelled by 4 p.m. EST (14
                days before arrival) will be charged their deposit of a
                one-night stay.
              </p>
            </section>

            {/* ARRIVALS AND DEPARTURES conformance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003d51]">
                ARRIVALS AND DEPARTURES
              </h2>
              <p className="mt-3 leading-relaxed">
                Check-in time is 4 p.m.; checkout is 11 a.m. We are happy to
                store your luggage if you arrive before 4 p.m. or wish to depart
                later than 11 a.m.
              </p>
            </section>

            {/* RESORT FEE changes */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  RESORT FEE
                </h2>
                <p className="mt-3 leading-relaxed">
                  All bookings will be charged a resort fee of $30 plus tax
                  nightly. The fee includes access to premium amenities,
                  enhanced services, and exclusive guest benefits to elevate
                  your stay.
                </p>
              </article>
            </section>

            {/* SMOKING AND VAPING  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  RESORT FEE
                </h2>
                <p className="mt-3 leading-relaxed">
                  Inside, the Greystone Inn is a smoke-free environment as are
                  the public terraces.
                </p>
              </article>
            </section>

            {/* CHILDREN  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  CHILDREN
                </h2>
                <p className="mt-3 leading-relaxed">
                  Children are always welcome at the Greystone Inn. Pack n’
                  Plays are available at no charge. Call ahead, and one will be
                  set up in your room when you arrive.
                </p>
              </article>
            </section>

            {/* PETS  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">PETS</h2>
                <p className="mt-3 leading-relaxed">
                  Well-trained and quiet pets are welcome. We have a limited
                  number of pet rooms and they must be booked in advance of your
                  arrival. If your pet is joining you, a $150 charge plus tax
                  will be added. All pets must be on a leash while on property
                  and please make sure pets are secure in their crates when you
                  leave your room. A credit card must be presented at the time
                  of check in to guarantee against damages or soiled
                  carpets/soft goods in the room. Damages will be billed on a
                  case-by-case basis.
                </p>
              </article>
            </section>

            {/* BOATS  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">BOATS</h2>
                <p className="mt-3 leading-relaxed">
                  Guests are strictly prohibited from placing their own boats on
                  Lake Toxaway at any time. Private cruises on the Miss Lucy or
                  the Lightening Bug can be booked through our Concierge and
                  motor boats can be rented at the Marina. Please contact the
                  hotel to learn what boats are available for use during your
                  stay.
                </p>
              </article>
            </section>

            {/* HEALTH & WELLNESS  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  HEALTH & WELLNESS
                </h2>
                <p className="mt-3 leading-relaxed">
                  The comfort, well-being and safety of our guests has always
                  been our top priority. In addition to local, state and federal
                  guidelines within our industry, we have implemented additional
                  cleaning and sanitation protocols through the entire hotel and
                  installed the REME HALO in the HVAC systems of public areas of
                  the hotel. The HALO-LED is an in-duct, whole building air
                  purification system that is both zero ozone compliant, mercury
                  free and is intended to proactively treat every cubic inch of
                  air-conditioned space, reducing airborne and surface
                  contaminants. If you have any questions about our health and
                  wellness protocols or have a specific request, please do not
                  hesitate to reach out to us at info@greystoneinn.com or
                  828-966-4700.
                </p>
              </article>
            </section>

            {/* HEALTH & WELLNESS  */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  PHOTOGRAPHY
                </h2>
                <p className="mt-3 leading-relaxed">
                  To maintain the privacy and enjoyment of our guests,
                  professional photography sessions are prohibited without prior
                  written approval. A non-refundable $250 + tax fee will be
                  applied for all approved photography sessions and must be paid
                  in advance. Sessions are limited to a 1.5 hour time frame.
                  Date and time must be approved in advance by the General
                  Manager.
                  <br />
                  <br />
                  Note: Room rates are subject to all state and local taxes,
                  currently at 11.75 percent. Prices are subject to change
                  without notice.
                </p>
              </article>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
