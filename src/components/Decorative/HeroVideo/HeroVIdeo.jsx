import { useEffect, useRef } from "react";
import "./Index.css";
import video from "../../../Video/HeroVideo.mp4";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <section className="heroVideo">
      <video ref={videoRef} src={video} autoPlay loop muted playsInline />
    </section>
  );
}
