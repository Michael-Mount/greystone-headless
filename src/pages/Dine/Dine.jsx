import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import RestaurantCard from "../../components/Decorative/RestaurantCard/RestaurantCard";

import { resturaunts } from "../../Data/ResturauntData";

const heroimg =
  "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Dine-Parent-Header.jpg";

export default function Dine() {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".resturaunt-card");
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <HeroImage image={heroimg} />
      <CenteredTextBlock
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum."
      />
      <div
        className="card-wrapper flex flex-col md:flex-row gap-5 m-12"
        ref={cardRef}
      >
        {resturaunts.map((resturaunt) => (
          <RestaurantCard key={resturaunt.id} restaurant={resturaunt} />
        ))}
      </div>
    </div>
  );
}
