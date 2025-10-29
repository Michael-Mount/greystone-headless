import { useMemo, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

// -------- Demo data --------
const demoTestimonials = [
  {
    title: "TRULY GORGEOUS",
    body: "I only came here for an outdoor event. It was Saturday and they had the cutest little farm market set up with produce they grow organically on their own grounds. And I did have lunch at the bar, plus a Bloody Mary. The bartender was nice, there was a little Bloody Mary bar so you could add your own toppings, and the turkey club with tots was delicious. It’s also beautiful inside, like truly gorgeous.",
    author: "Victoria Davich",
  },
  {
    title: "WONDERFUL STAY",
    body: "The staff went above and beyond. Our room was spotless, quiet, and had a lovely view of the grounds. Breakfast was excellent and service was warm without being intrusive.",
    author: "James Miller",
  },
  {
    title: "CAN'T WAIT TO RETURN",
    body: "From check-in to checkout, everything felt effortless. Cozy spaces, great cocktails, and the best sleep I’ve had in months.",
    author: "Amelia Chen",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

export default function TestimonialCarousel({
  items = demoTestimonials,
  className = "",
  autoPlayMs = 0,
}) {
  const [index, setIndex] = useState(0);
  const dirRef = useRef(0);
  const wrapRef = useRef(null);
  const slideRef = useRef(null);

  const go = (dir) => {
    dirRef.current = dir;
    setIndex((i) => mod(i + dir, items.length));
  };

  useGSAP(
    () => {
      const el = slideRef.current;
      if (!el) return;
      const dir = dirRef.current || 0;

      gsap.set(el, {
        xPercent: dir === 0 ? 0 : dir === 1 ? 8 : -8,
        opacity: 0,
      });
      gsap.to(el, {
        xPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
      return () => gsap.killTweensOf(el);
    },
    { dependencies: [index], scope: wrapRef }
  );

  // Autoplay (optional)
  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(id);
  });

  const t = items[index];

  return (
    <section
      ref={wrapRef}
      className={`relative mx-auto max-w-4xl px-24 py-14 text-center ${className} h-[60vh]`}
      aria-roledescription="carousel"
    >
      {/* Title */}
      <div ref={slideRef}>
        <h3 className="tracking-wide uppercase text-[13px] md:text-sm font-semibold text-[rgb(0, 61, 81)]">
          “{t.title}”
        </h3>

        {/* Body */}
        <blockquote className="mt-5 text-base md:text-lg leading-relaxed text-neutral-700">
          {t.body}
        </blockquote>

        {/* Author */}
        <p className="mt-6 italic text-neutral-600">– {t.author}</p>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-neutral-600 focus:outline-none"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next testimonial"
        onClick={() => go(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-neutral-600 focus:outline-none"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const diff = i - index;
              dirRef.current = diff === 0 ? 0 : diff > 0 ? 1 : -1;
              setIndex(i);
            }}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-neutral-700"
                : "w-3 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
