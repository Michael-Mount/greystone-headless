import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ASPECT_CLASS = {
  square: "row-span-1",
  portrait: "row-span-2",
  landscape: "col-span-2",
};

export default function PhotoGridGallery({ images = [] }) {
  const gridRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP: fade/scale in grid items on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".photo-grid-item");
      gsap.from(items, {
        opacity: 0,
        y: 30,
        scale: 0.98,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // keyboard nav for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div
        ref={gridRef}
        className="grid gap-4 auto-rows-[150px] m-9 md:auto-rows-[180px] lg:auto-rows-[200px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {images.map((img, idx) => {
          const aspect = img.aspect || "square";
          // combine Tailwind classes to let portrait/landscape “span”
          const spanClass = ASPECT_CLASS[aspect] || ASPECT_CLASS.square;

          return (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`photo-grid-item relative group overflow-hidden  bg-slate-200 ${spanClass}`}
            >
              <img
                src={img.src}
                alt={img.alt || "Gallery image"}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </button>
          );
        })}
      </div>

      {lightboxOpen && images[activeIndex] && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-2xl font-semibold bg-black/40  w-10 h-10 flex items-center justify-center hover:bg-black/70"
          >
            ×
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-10 text-white text-3xl bg-black/40 w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div className="max-h-[90vh] max-w-[90vw]">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt || "Gallery image"}
              className="max-h-[90vh] max-w-[90vw] object-contain  shadow-2xl"
            />
            {images[activeIndex].alt && (
              <p className="text-center text-sm text-white/80 mt-3">
                {images[activeIndex].alt}
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 md:right-10 text-white text-3xl bg-black/40  w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
