import React from "react";
import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

export default function PackageCard({ pkg }) {
  const { img, name, desciption, slug = "#" } = pkg;

  return (
    <div className="package-card flex flex-col items-center gap-6 md:flex-row md:items-start">
      {/* Image */}
      <div className="package-image w-full md:w-2/5">
        <img
          src={img}
          alt={name}
          className="w-full h-full max-h-80 object-cover rounded-md"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="package-content w-full md:w-3/5 flex flex-col gap-3 text-center md:text-left pr-0 md:pr-16">
        <h3 className="font-cursive text-3xl md:text-5xl text-[rgb(0,61,81)]">
          {name}
        </h3>
        <p className="text-base md:text-lg">{desciption}</p>
        <div className="mt-2 md:mt-4 flex justify-center md:justify-start">
          <BasicBtn bg="blue-btn" link={slug} title="+ Explore Package" />
        </div>
      </div>
    </div>
  );
}
