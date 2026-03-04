import { useEffect, useMemo, useRef, useState } from "react";
import "./Index.css";

export default function HeroVideo({ video, poster }) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Dev-only cache buster to prove/disprove caching issues.
  // Turn this off later (or keep DEV-only).
  const src = useMemo(() => {
    if (!video) return "";
    if (import.meta.env.DEV) return `${video}?cb=${Date.now()}`;
    return video;
  }, [video]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !src) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setReady(false);

    // Reset and force reload (important for refresh + route edge cases)
    try {
      vid.pause();
      vid.currentTime = 0;
      vid.load();
    } catch {}

    const tryPlay = async () => {
      try {
        vid.muted = true;
        await vid.play();
      } catch (err) {
        console.log("HeroVideo play() blocked/failed:", err);
      }
    };

    const markReady = () => {
      setReady(true);
      tryPlay();
    };

    vid.addEventListener("canplay", markReady);
    vid.addEventListener("loadeddata", markReady);

    // Attempt immediately too
    tryPlay();

    return () => {
      vid.removeEventListener("canplay", markReady);
      vid.removeEventListener("loadeddata", markReady);
    };
  }, [src]);

  return (
    <section className={`heroVideo ${ready ? "is-ready" : ""}`}>
      {/* Only use an actual image poster */}
      {poster && (
        <img
          className="heroPoster"
          src={poster}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
      )}

      <video
        ref={videoRef}
        className="heroMedia"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster || undefined}
        onError={() => {
          const v = videoRef.current;
          if (!v) return;
          console.log("HeroVideo ERROR", {
            currentSrc: v.currentSrc,
            networkState: v.networkState,
            readyState: v.readyState,
            error: v.error,
          });
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  );
}
