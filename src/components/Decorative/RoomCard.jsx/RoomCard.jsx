import React from "react";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  const {
    name,
    description,
    images = [],
    slug = "#",
    price,
    amenities = [],
  } = room;

  const mainImage = images[0];

  return (
    <div className="room-card bg-white overflow-hidden shadow-sm border border-slate-100 flex flex-col">
      {/* IMAGE */}
      <div className="relative h-52 md:h-56 lg:h-60 overflow-hidden">
        {mainImage ? (
          <img
            src={mainImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-slate-200" />
        )}

        {/* small count badge */}
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 ">
            {images.length} photos
          </span>
        )}
      </div>

      {/* BODY */}
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          {price && (
            <span className="text-sm text-slate-500 whitespace-nowrap">
              {price}
            </span>
          )}
        </div>

        {description && (
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}

        {/* AMENITIES (first 3) */}
        {amenities.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((am, i) => (
              <li
                key={i}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 "
              >
                {am}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link
            to={slug}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00486b] hover:text-[#003552]"
          >
            View room
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* OPTIONAL: mini image strip */}
      {images.length > 1 && (
        <div className="flex gap-1 px-5 pb-5 pt-1">
          {images.slice(1, 4).map((img, idx) => (
            <button
              key={idx}
              type="button"
              className="h-12 w-14 overflow-hidden  border border-slate-100 hover:opacity-80"
            >
              <img
                src={img}
                alt={`${name} thumbnail ${idx + 2}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
