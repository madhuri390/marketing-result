import "./ServicesComponent.css";

// import StrategyplanningImage from "../img/services/strategyplanning.jpg";
// import ContentCreationImage from "../img/services/ContentCreation.jpg";
// import SocialMediaManagementImage from "../img/services/SocialMediaManagement.jpg";
// import TreandingVideoEditingImage from "../img/services/treandingVideoEditing.jpg";

import StrategyplanningImage from "../img/services/PAID_ADS_1.svg";
import ContentCreationImage from "../img/services/CONTENT_CREATION_1.svg";
import SocialMediaManagementImage from "../img/services/SOCAIL_MEDIA_MARKETING.svg";
import TreandingVideoEditingImage from "../img/services/VIDEO_EDITING.svg";

const ServicesComponent = () => {
  return (
    <section className="services" id="section-services">
      <div className="container">
        <span className="subheading">Services provided by US</span>
        <h3 className="heading-secondary">
          Revolutionize Your Online Presence with our Digital Marketing Services
        </h3>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/* <!--SERVICE 01--> */}
        <div className="services-text-box">
          <p className="service-number">01</p>
          <h3 className="heading-tertiary">Paid Advertisement</h3>
          <p className="service-description">
            Harness the power of targeted advertising on popular platforms to
            reach your ideal customers. I create and manage effective campaigns
            that maximize your ad spend and drive conversions. Whether it's
            Facebook, Instagram, TikTok, Google, Pinterest, or Snapchat, I'll
            develop tailored strategies that align with your business objectives
            and deliver measurable results.
          </p>
        </div>
        <div className="services-img-box">
          <img
            src={StrategyplanningImage}
            className="service-img bigger"
            alt="Iphone app preference selection screen"
          />
        </div>
        {/* <!--SERVICE 02--> */}

        <div className="services-img-box">
          <img
            src={ContentCreationImage}
            className="service-img bigger"
            alt="Iphone app preference selection screen"
          />
        </div>
        <div className="services-text-box">
          <p className="service-number">02</p>
          <h3 className="heading-tertiary">Content Creation</h3>
          <p className="service-description">
            Compelling content is at the heart of every successful marketing
            campaign. I specialize in creating engaging, high quality content
            that captures attention, tells your brand story, and resonates with
            your audience. From captivating visuals to persuasive copy, I craft
            content that drives engagement, builds brand loyalty, and generates
            leads.
          </p>
        </div>
        {/* <!--SERVICE 03--> */}
        <div className="services-text-box">
          <p className="service-number">03</p>
          <h3 className="heading-tertiary">Social Media Management</h3>
          <p className="service-description">
            Managing your social media presence can be time consuming. Let me
            take care of it for you. I'll handle all aspects of your social
            media accounts, from strategy development to content creation,
            posting, and community management. With a focus on lead generation,
            engagement growth, following growth, and views growth, I'll ensure
            your brand stays relevant and connected in the ever-evolving social
            media landscape.
          </p>
        </div>
        <div className="services-img-box">
          <img
            src={SocialMediaManagementImage}
            className="service-img"
            alt="Iphone app preference selection screen"
          />
        </div>
        {/* <!--SERVICE 04--> */}

        <div className="services-img-box">
          <img
            src={TreandingVideoEditingImage}
            className="service-img"
            alt="Iphone app preference selection screen"
          />
        </div>
        <div className="services-text-box">
          <p className="service-number">04</p>
          <h3 className="heading-tertiary">Trending Video Editing</h3>
          <p className="service-description">
            Video content is the king of online engagement. I specialize in
            creating trending videos that capture attention and spark
            conversations. From editing existing footage to conceptualizing and
            producing original video content, I'll help your brand stand out in
            a crowded digital space. With my expertise in video editing
            techniques, I'll transform your raw footage into captivating videos
            that drive results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
