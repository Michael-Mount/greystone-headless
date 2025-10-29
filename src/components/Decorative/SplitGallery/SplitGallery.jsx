import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./index.css";

export default function SplitGallery({ gallery }) {
  const root = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
    }
  });

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(".ThreeImageGallery .reveal");
      gsap.set(targets, { autoAlpha: 0, y: 24 });

      ScrollTrigger.batch(targets, {
        start: "top 80%",
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            stagger: 0.5,
            ease: "power2.out",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 24,
            duration: 0.35,
            stagger: 0.1,
          }),
      });

      const videos = gsap.utils.toArray(".ThreeImageGallery video");
      videos.forEach((v) => {
        ScrollTrigger.create({
          trigger: v,
          start: "top 85%",
          end: "bottom 15%",
          onEnter: () => {
            v.playbackRate = 0.65;
            v.play().catch(() => {});
            gsap.to(v, { autoAlpha: 1, duration: 0.4, overwrite: "auto" });
          },
          onLeave: () => v.pause(),
          onEnterBack: () => v.play().catch(() => {}),
          onLeaveBack: () => v.pause(),
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <>
      <div ref={root} className="ThreeImageGallery">
        <div className="ThreeImageGallery-Wrapper">
          <div className="col-left">
            <div className="topWrap">
              <img
                className="reveal"
                src={gallery.image1}
                alt="Decorative Gallery 1"
              />
            </div>
            <div className="bottomWrap">
              <video
                ref={videoRef}
                className="reveal"
                src={gallery.video}
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          <div className="col-right">
            <img
              className="reveal"
              src={gallery.image2}
              alt="Decorative Gallery 2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
