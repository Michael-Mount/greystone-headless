import { Link } from "react-router-dom";
import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

export default function RentalCard({ rental, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article className="w-full bg-white/95 border-y border-slate-200">
      <div
        className={`flex flex-col lg:flex-row ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="img-wrapper w-full lg:w-1/2 h-64 lg:h-[420px] overflow-hidden">
          <img
            src={rental.mainimage}
            alt={rental.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="content-wrapper w-full lg:w-1/2 px-6 py-8 md:px-10 md:py-12 flex flex-col justify-between gap-6 bg-slate-50">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
              Vacation Rental
            </p>

            <h3 className="text-2xl md:text-3xl font-[cursive] text-[#003d51]">
              {rental.name}
            </h3>

            <p className="text-sm font-medium text-slate-700">
              {rental.beds} {rental.beds === 1 ? "Bedroom" : "Bedrooms"},{" "}
              {rental.baths} {rental.baths === 1 ? "Bathroom" : "Bathrooms"}
            </p>

            {/* Amenities */}
            {Array.isArray(rental.amenities) && rental.amenities.length > 0 && (
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-slate-700">
                {rental.amenities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003d51]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <p className="text-slate-600 mt-4">{rental.shortDescription}</p>
          </div>

          <div>
            <BasicBtn
              link={`/rentals/${rental.slug}`}
              bg="blue-btn"
              title="Learn More"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
