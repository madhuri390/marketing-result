import React from "react";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";

import "./HeaderComponent.css";

import logoImage from "../img/logo.jpg";

const HeaderComponent = () => {
  return (
    <header className="header">
      <img className="logo" src={logoImage} alt="Marketing Results Logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#section-how">
              How We Work
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-services">
              Services
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#section-cta">
              Contact Our Team
            </a>
          </li>
        </ul>
      </nav>
      <button className="button-mobile-nav">
        <IonIcon icon={menuOutline} className="icon-mobile-nav" />
        <IonIcon icon={closeOutline} className="icon-mobile-nav" />
        {/* <Icon name="github" size={16} color="blue" /> */}
        {/* <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon> */}
      </button>
    </header>
  );
};

export default HeaderComponent;
