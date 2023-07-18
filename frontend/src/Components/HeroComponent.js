import React from "react";

import "./HeroComponent.css";

import logoImage from "../img/logo.jpg";

export default function HeroComponent() {
  return (
    <header>
      <div className="header-container">
        <div className="header-flex">
          <div className="header-marketing-name">
            <img
              className="logo"
              src={logoImage}
              alt="Marketing Results Logo"
            />
          </div>
          <div className="header-description">
            <p className="header-description-text">
              We Help <strong>Businesses</strong> Generate More
              <strong> Leads</strong> and <strong>Sales</strong> Through{" "}
              <strong>Social Media Marketing</strong>
            </p>
          </div>
          <div className="header-button">
            <a href="#section-cta" className="header-scale-button">
              <span className="button-scale">Scale Your Business Now</span>
              <span className="button-click">
                Click here to schedule a call with us
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
