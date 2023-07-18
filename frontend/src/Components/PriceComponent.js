import React from "react";

import "./PriceComponent.css";
export default function PriceComponent() {
  return (
    <section className="section-price" id="section-price">
      <div className="price-container">
        <div className="price-amount">
          <p className="price-amount-value">$280</p>
          <p className="price-amount-unit">Thousand</p>
        </div>
        <div className="price-description">
          <p className="price-description margin-bottom-sm">
            Our agency has been trusted to buy & manage over{" "}
            <strong>$280.000 dollars</strong> in media for our current and past
            clients.
          </p>
        </div>
      </div>
    </section>
  );
}
