import "./index.css";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function CenteredTextBlock({ content }) {
  const wrapperRef = useRef(null);
  const introRef = useRef(null);

  useGSAP(
    () => {
      let split;
      let tl;

      const buildAnimation = () => {
        // Revert any previous split
        if (split) {
          split.revert();
        }

        // Fresh split for current layout
        split = new SplitText(introRef.current, { type: "lines" });

        // Ensure the paragraph is visible but lines start hidden/offset
        gsap.set(split.lines, {
          opacity: 0,
          yPercent: 100,
        });

        // Kill old timeline if it exists
        if (tl) tl.kill();

        // New scroll-based timeline
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(split.lines, {
          opacity: 1,
          yPercent: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        });
      };

      // Build once on mount
      buildAnimation();

      const onRefresh = () => buildAnimation();
      ScrollTrigger.addEventListener("refreshInit", onRefresh);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", onRefresh);
        if (tl) tl.kill();
        if (split) split.revert();
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div className="CenteredTextBlock-Wrapper" ref={wrapperRef}>
      <img
        src="https://greystoneinn.com/wp-content/uploads/2020/10/footer-add-logo.png"
        alt="decorative logo"
      />
      <p className="introPara" ref={introRef}>
        {content}
      </p>
    </div>
  );
}
