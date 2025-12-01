import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

export default function HourSplit({ title, img }) {
  const splitRef = useRef(null);

  useLayoutEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // -------- Parallax  --------
      gsap.fromTo(
        ".split-img img",
        { yPercent: -12, scale: 1.1, transformOrigin: "center center" },
        {
          yPercent: 12,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: ".split-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // -------- Column fade-in --------
      gsap.from(".split-content", {
        y: 14,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".split-content",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // -------- Headings by words --------
      const splits = [];
      const refreshRevert = () => splits.forEach((s) => s.revert());

      gsap.utils.toArray(".split-content .hd").forEach((h) => {
        const split = new SplitText(h, { types: "words" });
        splits.push(split);

        gsap.from(split.words, {
          y: 10,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 1.2,
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
            once: true,
          },
        });
      });

      // ensure SplitText resets before ScrollTrigger recalculates
      ScrollTrigger.addEventListener("refreshInit", refreshRevert);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", refreshRevert);
        refreshRevert(); // revert SplitText DOM
      };
    }, splitRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="split-wrapper flex w-full gap-6 flex-col-reverse mt-[-15px] md:flex-row md:mt-0"
      ref={splitRef}
    >
      <div className="split-content flex flex-col gap-5 justify-center flex-1 px-4 md:px-9 text-main text-center md:text-left">
        <p>
          <span className="hd text-6xl font-cursive">Hours</span>
          <br />
          Friday - Sunday <br />
          Brunch: 8:00am to 2:00pm
          <br />
          <br />
          Dinner Daily <br />
          Dinner Menu: 5:00pm to 9:00pm
        </p>
        <p>
          <span className="hd text-6xl font-cursive">Location</span>
          <br />
          220 Greystone Ln <br />
          Lake Toxaway
          <br />
          NC 28 747
        </p>
        <div className="mt-2 md:mt-4 flex justify-center md:justify-start">
          <BasicBtn
            bg="blue-btn"
            title="Reserve Your Spot"
            link="https://www.opentable.com/booking/restref/availability?restref=1042366"
          />
        </div>
      </div>

      <div className="split-img relative overflow-hidden w-full md:basis-1/2 mt-4 md:mt-0">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
    </div>
  );
}
