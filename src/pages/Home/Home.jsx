import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import "./Index.css";

import HeroVIdeo from "../../components/Decorative/HeroVideo/HeroVIdeo";
import LuxuryDraw from "../../components/Decorative/LuxuryDraw/LuxuryDraw";
import SplitFeature1 from "../../components/Decorative/SplitFeature1/SplitFeature1";
import SplitGallery from "../../components/Decorative/SplitGallery/SplitGallery";
import TestimonialCarousel from "../../components/Decorative/TestimonialCarousel/TestimonialCarousel";
import SplitFeature2 from "../../components/Decorative/SplitFeature2/SplitFeature2";

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

const roomSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionPremiumRm-4.jpg",
  title: "Rooms",
  para: "With a variety of social, special event, and holiday-themed packages, we have something for everyone.",
  links: [{ label: "EXPLORE FURTHER", href: "#" }],
};

const spaSplit = {
  img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Spa ",
  para: "Rounding out the guest experience is a luxurious spa with six treatment rooms. Its comprehensive menu of treatments creates a unique and replenishing spa getaway unlike anything in the area. ",
  links: [{ label: "EXPLORE FURTHER", href: "#" }],
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
      <TestimonialCarousel />
      <SplitFeature2 content={roomSplit} />
      <SplitFeature2 />
      <SplitFeature2 content={spaSplit} />
    </div>
  );
}
