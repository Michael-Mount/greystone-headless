import React from "react";

import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

export default function PackageCard({ pkg }) {
  const { img, name, desciption, slug = "#" } = pkg;
  return (
    <>
      <div className="package-card flex flex-col gap-6">
        {/* Image */}
        <div className="package-image w-[80%] h-[80%]">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="package-content pr-44 flex flex-col gap-3">
          <h3 className="text-5xl font-cursive  text-[rgb(0, 61, 81)]">
            {name}
          </h3>
          <p>{desciption}</p>
          <BasicBtn bg="blue-btn" link={slug} title="+ Explore Package" />
        </div>
      </div>
    </>
  );
}
