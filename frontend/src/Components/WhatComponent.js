import React from "react";

import whatGraph from "../img/AgencyImg.webp";

import "./WhatComponent.css";

export default function WhatComponent() {
  return (
    <section className="scetion-what" id="section-what">
      <div className="what-container">
        <div className="what-img-box">
          <img src={whatGraph} alt="A incremental graph" className="what-img" />
        </div>
        <div className="what-text-box">
          <p className="what-heading">What We Do For Your Business</p>
          <p className="what-description margin-bottom-sm">
            We take new clients to your door through paid advertisement on
            Google, Facebook, Instagram and YouTube.
          </p>
          <p className="what-description">
            This way, you can focus on what really matters in your business -
            without having to worry about where your next client is coming from.
          </p>
        </div>
      </div>
    </section>
  );
}
