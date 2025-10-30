import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

gsap.registerPlugin(ScrollTrigger);

export default function StaggeredGallery2({
  eyebrow = "The Hotel",
  title = "A Small, Elegant Escape",
  text = "Understated rooms, thoughtful amenities, and a slower rhythm—welcome to your hideaway.",
  images = [],
  link = "",
}) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the heading block
      gsap.from(".sg-heading", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stagger in the image cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-16 bg-[#ffffff]  md:py-24"
    >
      {/* Background flourish */}
      <div
        className="pointer-events-none  absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neutral-200/30 blur-3xl dark:bg-neutral-700/20"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 ">
        {/* Heading */}
        <div className="sg-heading mb-10 max-w-2xl md:mb-14">
          <p className="mb-2 text-sm uppercase tracking-[0.18em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="text-3xl uppercase font-semibold leading-tight text-[#003D51] md:text-4xl dark:text-[#003D51]">
            {title}
          </h2>
          {text && (
            <p className="mt-3 text-base leading-relaxed text-[#003D51] md:mt-4 dark:text-[#003D51]">
              {text}
            </p>
          )}
          <BasicBtn bg="blue-btn" title="Learn More" link={link} />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 3).map((img, i) => (
            <figure
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={[
                "group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 will-change-transform dark:bg-neutral-900",
                // Subtle vertical staggering using margins on larger screens
                i === 1 ? "sm:mt-8" : "",
                i === 2 ? "lg:-mt-6" : "",
              ].join(" ")}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Caption overlay */}
              {(img.caption || img.alt) && (
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4">
                  <span className="text-sm font-medium text-white drop-shadow-sm">
                    {img.caption || img.alt}
                  </span>
                </figcaption>
              )}

              {/* Hover lift */}
              <div className="absolute inset-0 -z-10 scale-95 opacity-0 blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
