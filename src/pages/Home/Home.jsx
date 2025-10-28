import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/scrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Index.css";

import HeroVIdeo from "../../components/Decorative/HeroVideo/HeroVIdeo";
import LuxuryDraw from "../../components/Decorative/LuxuryDraw/LuxuryDraw";

import Lobby1 from "../../images/lobby1.png";
import Lake1 from "../../images/lake1.png";

export default function Home() {
  const drawContainer = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(drawContainer);

      gsap.set([q(".svgContainer p"), q(".headerImgContainer img")], {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: drawContainer.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.fromTo(
        q(".svgContainer p"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5 }
      ).fromTo(
        q(".headerImgContainer img"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, stagger: 1.5 },
        "-=0.25"
      );
    },
    { scope: drawContainer }
  );

  return (
    <div>
      <HeroVIdeo />
      <div className="drawHeader" ref={drawContainer}>
        <div className="svgContainer">
          <p>redefining</p>
          <LuxuryDraw size={520} />
        </div>
        <div className="headerImgContainer">
          <img src={Lobby1} alt="a rustic leather chair" />
          <img src={Lake1} alt="a man on a boat" />
        </div>
      </div>
    </div>
  );
}
