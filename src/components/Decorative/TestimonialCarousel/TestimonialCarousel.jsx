import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

// -------- Demo data --------
const demoTestimonials = [
  {
    title: "Staying Since 2005!",
    body: "We have been going to The Greystone Inn for 25 years and have loved all of our stays. We started out in the Mansion but as the years went by, we chose an entry level room in the Hillmont building. We love the convenience of just one step and a private balcony overlooking the lake. The bedroom/living room is very large and comfortable. I certainly enjoyed the soaking tub! Our only disappointment was the lack of local television channels on the tv lineup. When planning outdoor activities, the perspective of a local meteorologist is extremely helpful. We are looking forward to our return trip there next summer.",
    author: "Judith T.",
  },
  {
    title: "Exceptional boutique hotel",
    body: "We discovered The Greystone Inn in the summer of 1988 and were immediately captivated by its breathtaking location & the mansion’s charm. We have been grateful & regular visitors ever since. The panoramic views of the lake and surrounding mountains are simply stunning. Waking up to the sunrise over the water and watching the sunset behind the mountain peaks was unforgettable. Paulette, Regan, Brittany and Autumn were attentive to our every need. The on-site restaurant offered delicious meals with exceptional views of the beautiful Lake Toxaway and the Blue Ridge mountains. ",
    author: "Louellen B.",
  },
  {
    title: "Beautiful Inn",
    body: "Wonder lodge surrounded by beautiful scenery! This was our 2nd stay at the Inn and we can’t wait to go back again. The hospitality was amazing the room was spectacular and the food at the Inn was fabulous! It was an all around enjoyable birthday get away",
    author: "Lup S.",
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
      className={`relative mx-auto max-w-4xl px-24 py-14 text-center ${className} h-[80vh] md:h-[60vh]`}
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
