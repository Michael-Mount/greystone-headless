import React from "react";
import "./Index.css";

export default function HeroImage({ image, title }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">{title && <h1>{title}</h1>}</div>
    </section>
  );
}
