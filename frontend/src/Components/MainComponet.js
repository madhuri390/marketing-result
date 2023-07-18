import CTAComponent from "./CTAComponent";
import HowComponent from "./HowComponent";
import ServicesComponent from "./ServicesComponent";

import WhatComponent from "./WhatComponent";
import ClientComponent from "./ClientComponet";
import PriceComponent from "./PriceComponent";

const MainComponet = () => {
  return (
    <main>
      {/* <HeroComponet /> */}
      <ClientComponent />
      <WhatComponent />
      <PriceComponent />
      <HowComponent />
      <ServicesComponent />
      <CTAComponent />
    </main>
  );
};

export default MainComponet;
