import Hero from "@/components/Hero/hero";
import HomeProperties from "@/components/HomeProperties/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes/InfoBoxes";

import React from "react";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
