import React from "react";
import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="info">
      <h2>Some random information.</h2>
      <div className="info-cards">
        {[...Array(4)].map((_, index) => (
          <div className="card" key={index}>
            <div className="illustration"></div>
            <p>this is some subtext under an illustration or image</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
