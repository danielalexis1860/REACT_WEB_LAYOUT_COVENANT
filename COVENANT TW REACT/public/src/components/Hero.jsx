import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="text">
          <h1>This website is awesome</h1>
          <p>
            This website has some subtext that goes here under the main title.
            It's a smaller font and the color is lower contrast.
          </p>
          <button className="btn">Sign up</button>
        </div>
        <div className="image-placeholder">
          <p>this is a placeholder for an image</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
