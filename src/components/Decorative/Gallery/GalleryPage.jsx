// src/components/GalleryPage.jsx
import { useMemo, useState, useRef } from "react";
import { PHOTOS } from "../../../Data/PhotoData";
import FilterBar from "./FIlterBar";
import ImageModal from "./ImageModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const gridRef = useRef(null);

  const visiblePhotos = useMemo(() => {
    if (activeCategory === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useGSAP(
    () => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (!items || !items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    },
    { scope: gridRef, dependencies: [activeCategory, visiblePhotos.length] }
  );

  return (
    <div className="space-y-6">
      <FilterBar activeCategory={activeCategory} onChange={setActiveCategory} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {visiblePhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="gallery-item group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.95]"
              />
            </div>

            {/* Gradient overlay + title */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0 opacity-80" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-sm md:text-base font-medium tracking-tight text-slate-50">
                  {photo.title}
                </h3>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-300 mt-1">
                  {photo.category}
                </p>
              </div>

              <div className="hidden sm:flex items-center justify-center rounded-full border border-slate-300/60 bg-slate-100/90 px-3 py-1 text-[0.65rem] font-medium text-slate-900 tracking-[0.18em]">
                VIEW
              </div>
            </div>
          </button>
        ))}
      </div>

      <ImageModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
