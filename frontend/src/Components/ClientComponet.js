import React from "react";

import "./ClientComponent.css";

import buildingBoston from "../img/clients/BuildingBoston.jpeg";
import growp from "../img/clients/growp.jpeg";
import uptime from "../img/clients/Uptime.jpeg";

export default function ClientComponent() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">Clients Who Trust Us</h2>
        <div className="logos">
          <img src={buildingBoston} alt="Techcrunch logo" />
          <img src={growp} alt="Business Insider logo" />
          <img src={uptime} alt="The New York Times logo" />
        </div>
      </div>
    </section>
  );
}
