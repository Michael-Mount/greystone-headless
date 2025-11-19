// CenteredTextBlock.jsx
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
        // If we already split once, revert it before rebuilding
        if (split) {
          split.revert();
        }

        split = new SplitText(introRef.current, { type: "lines" });

        // Kill old timeline if it exists
        if (tl) tl.kill();

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.from(split.lines, {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
          delay: 1,
        });
      };

      // Build once on mount
      buildAnimation();

      // Rebuild SplitText + animation whenever ScrollTrigger refreshes (on resize, etc.)
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
