import React from "react";

import { chef } from "../../../assets/images";

const AboutUsSection = () => {
  return (
    <>
      <div className="col-md-6 bg-primary p-0">
        <div className="display-6 text-center">
          <img src={chef} alt="steak" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6 bg-primary" id="about-us">
        <a href="/aboutUs">
          <div className="display-6 pt-3 px-3 text-center text-secondary">
            About Us
          </div>
          <p className="p-3 text-center text-dark">
            At Newton's, we believe in the power of good food to bring people
            closer. Our chefs are passionate about crafting a diverse menu that
            caters to every palate, blending global flavors with locally sourced
            ingredients.
            <br />
            From hearty comfort food to innovative culinary creations, our menu
            is a celebration of taste and quality. We invite you to immerse
            yourself in a world where culinary artistry meets architectural
            finesse—a haven where every detail contributes to an unforgettable
            fine dining experience.
          </p>
        </a>
      </div>
    </>
  );
};

export default AboutUsSection;
