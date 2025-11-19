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
      <CenteredTextBlock content="Savor the flavors of Lake Toxaway at The Greystone Inn, where every meal is framed by mountain air and lakeside views. From leisurely breakfasts and lingering dinners in our signature restaurant to handcrafted cocktails in the Mansion Bar, dining here feels as inviting as it is indulgent." />
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
