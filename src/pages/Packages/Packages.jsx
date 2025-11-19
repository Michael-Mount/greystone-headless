import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import PackageCard from "../../components/Decorative/PackageCard/PackageCard";
import { pkgs } from "../../Data/PackageData";

const heroImg =
  "https://greystoneinn.com/wp-content/uploads/2021/01/Package-Pic.jpg";

export default function Packages() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".package-card");
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <HeroImage image={heroImg} title="Packages & Specials" />
      <CenteredTextBlock content="At The Greystone Inn, every stay is an occasion. Our curated packages and seasonal offers are designed to make the most of life on Lake Toxaway—from romantic escapes and spa-focused retreats to family adventures and long weekends with friends. Enhance your time in the mountains with thoughtful inclusions like lakeside dining, wellness experiences, and signature activities on North Carolina’s largest private lake." />
      <div
        ref={gridRef}
        className="grid gap-6 m-9 sm:grid-cols-2 p-2  lg:grid-cols-2 lg:p-24 al"
      >
        {pkgs.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
