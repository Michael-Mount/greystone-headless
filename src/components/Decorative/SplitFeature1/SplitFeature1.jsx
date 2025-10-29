import "./index.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import NavGhostBtn from "../../Buttons/NavGhostBtn/NavGhostBtn";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function SplitFeature1({ title, content, img, alt }) {
  const sfa = useRef(null);

  useGSAP(
    () => {
      const root = sfa.current;
      const titleNode = root.querySelector(".titleSplit");

      const titleSplit = new SplitText(titleNode, { type: "chars,words" });

      titleSplit.chars.forEach((c) => c.classList.add("text-gradient"));

      gsap.set(root, { autoAlpha: 0, yPercent: 12 });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
          // markers: true,
        },
      });

      // 1) Fade/slide the whole block in
      tl.to(root, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.5,
      });
    },
    { scope: sfa }
  );

  return (
    <div className="splitFeatureContainer" id="splitFeature" ref={sfa}>
      <div className="splitImg">
        <img src={img} alt={alt} id="splitImg" />
      </div>
      <div className="splitContent">
        <p className="titleSplit text-6xl">{title}</p>
        <p className="paraSplit text-3xl">{content}</p>
        <NavGhostBtn title="Explore the Lake" link="#" />
      </div>
    </div>
  );
}
