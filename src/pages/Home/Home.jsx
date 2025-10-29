import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/scrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Index.css";

import HeroVIdeo from "../../components/Decorative/HeroVideo/HeroVIdeo";
import LuxuryDraw from "../../components/Decorative/LuxuryDraw/LuxuryDraw";
import SplitFeature1 from "../../components/Decorative/SplitFeature1/SplitFeature1";
import SplitGallery from "../../components/Decorative/SplitGallery/SplitGallery";

import Lobby1 from "../../images/lobby1.png";
import Lake1 from "../../images/lake1.png";
import Lake2 from "../../images/lake2.png";
import Coffee1 from "../../images/coffee1.png";
import Wedding1 from "../../images/wedding1.png";

import AutumnLake from "../../Video/LakeAutumn.mp4";

const mainGallery = {
  image1: Coffee1,
  image2: Wedding1,
  video: AutumnLake,
};

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
      <SplitFeature1
        title="Welcome"
        content="There are endless things to do, although it’s perfectly alright to do nothing at all..."
        img={Lake2}
        alt="a wooden boat on a lake"
      />
      <SplitGallery gallery={mainGallery} />
    </div>
  );
}
