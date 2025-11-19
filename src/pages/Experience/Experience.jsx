import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import ExperinceList from "../../components/Decorative/ExperienceCard/ExperinceList";
import { experiences } from "../../Data/ExperinceData";

const hrimg =
  "https://images.unsplash.com/photo-1668721899499-2372b9b8cce0?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const gridRef = useRef(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".experience-card");

      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: gridRef }
  );

  return (
    <div>
      <HeroImage image={hrimg} title="Experinces & Activities" />
      <CenteredTextBlock content="Life at The Greystone Inn is shaped by the water, the mountains, and the simple pleasure of unhurried time. From sunrise paddles on Lake Toxaway to sunset cruises, golf and tennis at the country club, waterfall hikes, and soothing afternoons at the spa, every day offers a new way to enjoy our corner of the Blue Ridge." />

      <div ref={gridRef} className="grid gap-6 p-10 md:grid-cols-3">
        <ExperinceList experiences={experiences} />
      </div>
    </div>
  );
}
