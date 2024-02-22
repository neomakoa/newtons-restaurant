import React from "react";

import { hero } from "../../../assets/images";

const HeroSection = () => {
  return (
    <div className="col-12 bg-dark p-0">
      <img src={hero} alt="restaurant" className="img-fluid" />
      <div className="display-1 text-center text-secondary my-2 p-5">
        Welcome to Newton's
      </div>
    </div>
  );
};

export default HeroSection;
