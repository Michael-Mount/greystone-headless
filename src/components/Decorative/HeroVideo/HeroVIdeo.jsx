import "./Index.css";

import video from "../../../Video/HeroVideo.mp4";

export default function HeroVideo() {
  return (
    <section className="heroVideo">
      <video src={video} autoPlay loop muted />
    </section>
  );
}
