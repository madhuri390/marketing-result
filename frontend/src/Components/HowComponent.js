import "./HowComponent.css";

import ar from "../img/a&r.jpg";
import ce from "../img/c&e.jpg";
import sp from "../img/s&p.jpg";

const HowComponent = () => {
  return (
    <section className="section-how margin-bottom-sm" id="section-how">
      <div className="section-how-content">
        <span className="section-how-subheading">How We Do It</span>
        <p className="how-description margin-bottom-sm">
          Our expert media buying team will managed the ad buys for your
          business on all platforms of your desire: Facebook, Instagram,
          Snapchat, Pinterest, TikTok, Taboola, Outbrain, etc.
        </p>
      </div>
      <div className="steps">
        <div className="step-box-content">
          <div className="step-img-box">
            <img
              src={ar}
              className="steps-img"
              alt="Iphone app preference selection screen"
            />
          </div>
          <div className="step-description-box">
            <h4 className="heading-quaternary to-uppercase">
              Analytics and Reporting
            </h4>
            <p className="step-box-description">
              Our team analyzes the data, providing you with regular reports,
              engagement and insights.
            </p>
          </div>
        </div>
        <div className="step-box-content">
          <div className="step-img-box">
            <img
              src={ce}
              className="steps-img"
              alt="Iphone app preference selection screen"
            />
          </div>
          <div className="step-description-box">
            <h4 className="heading-quaternary to-uppercase">
              Compelling and Engaging
            </h4>
            <p className="step-box-description">
              Our skilled content team develops engaging and relevant content
              that resonates with your target audience.
            </p>
          </div>
        </div>
        <div className="step-box-content">
          <div className="step-img-box">
            <img
              src={sp}
              className="steps-img"
              alt="Iphone app preference selection screen"
            />
          </div>
          <div className="step-description-box">
            <h4 className="heading-quaternary to-uppercase">
              Strategy and Planning
            </h4>
            <p className="step-box-description">
              We start by understanding your business objectives, target
              audience, and competitive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowComponent;
