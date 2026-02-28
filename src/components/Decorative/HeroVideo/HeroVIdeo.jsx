import { useEffect, useRef, useState } from "react";
import "./Index.css";

import video from "../../../Video/HeroVideo.mp4";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const markReady = () => setReady(true);
    vid.addEventListener("canplay", markReady, { once: true });
    vid.addEventListener("loadeddata", markReady, { once: true });

    vid.play().catch(() => {});

    return () => {
      vid.removeEventListener("canplay", markReady);
      vid.removeEventListener("loadeddata", markReady);
    };
  }, []);

  return (
    <section className={`heroVideo ${ready ? "is-ready" : ""}`}>
      <img
        className="heroPoster"
        src={video}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
      />

      <video
        ref={videoRef}
        className="heroMedia"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={video}
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}
