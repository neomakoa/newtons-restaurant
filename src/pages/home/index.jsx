import React from "react";

import HeroSection from "../../components/Home/HeroSection";
import AboutUsSection from "../../components/Home/AboutUsSection";
import MenuSection from "../../components/Home/MenuSection";
import LocationsSection from "../../components/Home/LocationsSection";

const Home = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar">
      <div className="container">
        <div className="row">
          <HeroSection />
          <AboutUsSection />
          <MenuSection />
          <LocationsSection />
        </div>
      </div>
    </div>
  );
};
export default Home;
