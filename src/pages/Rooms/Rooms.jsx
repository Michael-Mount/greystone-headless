import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImg from "../../components/Decorative/HeroImage/HeroImage";
import CenterdTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import RoomCard from "../../components/Decorative/RoomCard.jsx/RoomCard";
import { rooms } from "../../Data/RoomData";

const heroImg =
  "https://greystoneinn.com/wp-content/uploads/2020/12/GreystoneInn_Rooms-9150_HEADER.jpg";

const introText =
  "From gracious mansion rooms in our historic inn to spacious private homes tucked around Lake Toxaway, every stay at The Greystone Inn is designed to feel like your own mountain retreat. Explore our collection of guest rooms, suites, and vacation rentals—each with its own character, thoughtful comforts, and a sense of place rooted in the lake and the Blue Ridge Mountains.";

export default function Rooms() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".room-card");
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
      <HeroImg image={heroImg} title="Rooms" />
      <CenterdTextBlock content={introText} />
      <div
        ref={gridRef}
        className="grid gap-6 m-9 sm:grid-cols-2 lg:grid-cols-3"
      >
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
