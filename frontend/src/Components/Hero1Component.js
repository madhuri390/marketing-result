import "./HeroComponent.css";

import paidAdsImage from "../img/services/PaidAds.jpg";

const HeroComponet = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Ignite Your Digital Success</h1>
          <p className="hero-description">
            To be a leading marketing agent, delivering innovative and results
            driven strategies that empower businesses to thrive in the ever
            changing digital landscape.
          </p>
          <a href="#section-how" className="btn btn--primary margin-right-sm">
            Get Started
          </a>
          <a href="#section-services" className="btn btn--secondary">
            Learn more &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src={paidAdsImage}
            alt="Digital Merketing text on the screen"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponet;
