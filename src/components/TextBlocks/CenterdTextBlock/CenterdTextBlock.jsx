import "./index.css";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function CenteredTextBlock({ content }) {
  useGSAP(() => {
    const introSplit = new SplitText(".introPara", { type: "lines" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".CenteredTextBlock-Wrapper",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      })
      .from(introSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });
  });
  return (
    <div className="CenteredTextBlock-Wrapper">
      <img
        src="https://greystoneinn.com/wp-content/uploads/2020/10/footer-add-logo.png"
        alt="decortive logo"
      />
      <p className="introPara">{content}</p>
    </div>
  );
}
