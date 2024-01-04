import React, { useEffect } from "react";
import $ from "jquery";

import hero from "./assets/images/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg";
import img1 from "./assets/images/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg";
import img2 from "./assets/images/louis-hansel-8qT_cml7M68-unsplash.jpg";
import img3 from "./assets/images/lidye-1Shk_PkNkNw-unsplash.jpg";
import img4 from "./assets/images/ash-edmonds-SSh9jI6sw-I-unsplash.jpg";
import img5 from "./assets/images/ash-edmonds-fsI-_MRsic0-unsplash.jpg";
import img6 from "./assets/images/david-todd-mccarty-46ht3RkmLBo-unsplash.jpg";
import imga from "./assets/images/lasse-bergqvist-TYj7ey6xn9M-unsplash.jpg";
import area1 from "./assets/images/jason-leung-poI7DelFiVA-unsplash.jpg";
import area2 from "./assets/images/ivan-stern-LOLSb7m6XkU-unsplash.jpg";
import area3 from "./assets/images/luca-bravo-8x_fFNrmeDk-unsplash.jpg";
import area4 from "./assets/images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import area5 from "./assets/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg";
import area6 from "./assets/images/qui-nguyen-cnTdKzMOBns-unsplash.jpg";

const Home = () => {
  //  useEffect(() => {
  //   const swapDiv = () => {
  //     if (window.matchMedia("(max-width: 600px)").matches) {
  //       $("#menu-text").insertAfter("#menu-carousel");
  //     }
  //   return () => {
  //     swapDiv;
  //   };
  // }, []);

  return (
    <div>
      {/*hero section  */}
      <div className="container">
        <div className="row ">
          <div className="col-12 bg-dark p-0">
            <img src={hero} alt="steak" className="img-fluid" />
            <div className="display-1 text-center text-success my-2 p-5">
              Welcome to Newton's
            </div>
          </div>
        </div>

        {/* section 1 */}
        <div className="row ">
          <div className="col-md-6 bg-primary p-0">
            <div className="display-6 text-center">
              <img src={imga} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 bg-primary" id="about-us">
            <div className="display-6 pt-3 px-3 text-center text-success">
              About Us
            </div>
            <p className="p-3 text-center text-dark">
              At Newton's, we believe in the power of good food to bring people
              closer. Our chefs are passionate about crafting a diverse menu
              that caters to every palate, blending global flavors with locally
              sourced ingredients. <br /> From hearty comfort food to innovative
              culinary creations, our menu is a celebration of taste and
              quality. We invite you to immerse yourself in a world where
              culinary artistry meets architectural finesse—a haven where every
              detail contributes to an unforgettable fine dining experience.
            </p>
          </div>

          <div className="col-md-7 bg-dark" id="menu-text">
            <div className="display-6 pt-3 px-3 text-success text-center">
              Menus
            </div>
            <p className="p-3 text-center text-primary">
              Come, join us at Newton's for a culinary adventure that transcends
              the ordinary—a place where exceptional food, warm hospitality, and
              family moments converge in perfect harmony. Our drink menu is more
              than a selection; it's a symphony of flavors, an ode to
              craftsmanship, and a celebration of the art of beverage curation.
              Cheers to a journey of taste and a toast to your unforgettable
              dining experience!
            </p>
          </div>
          <div className="col-md-5 bg-dark p-0" id="menu-carousel">
            <div className="display-6 text-center">
              <div
                id="carouselExampleControls"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img4} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img5} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img6} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-5 bg-primary p-0">
            <div className="display-6 text-center">
              <div
                id="carouselExampleControls"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={area1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={area2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={area3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={area4} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={area5} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={area6} class="d-block w-100" alt="..." />
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 bg-primary">
            <div className="display-6 pt-3 px-3 text-center text-success">
              Locations & Reservations
            </div>
            <p className="p-3 text-center text-dark">
              The interior of Newton's restaurants boasts a palette of muted
              tones, soft lighting, and tasteful decor that exudes understated
              opulence. From the plush upholstery to the carefully chosen
              artwork adorning the walls, each element has been selected to
              create a harmonious visual symphony. Enhancing the ambiance is the
              soft melody of live music, carefully curated to complement the
              dining experience without overpowering conversation. Our live
              musicians add an extra layer of sophistication to your evening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
