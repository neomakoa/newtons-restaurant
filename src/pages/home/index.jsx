import React from "react";

import { hero, chef, cities, food } from "../../assets/images";
const Home = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar">
      {/*hero section  */}
      <div className="container">
        <div className="row ">
          <div className="col-12 bg-dark p-0">
            <img src={hero} alt="steak" className="img-fluid" />
            <div className="display-1 text-center text-secondary my-2 p-5">
              Welcome to Newton's
            </div>
          </div>
        </div>

        {/* section 1 */}
        <div className="row">
          <div className="col-md-6 bg-primary p-0">
            <div className="display-6 text-center">
              <img src={chef} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 bg-primary" id="about-us">
            <div className="display-6 pt-3 px-3 text-center text-secondary">
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

          {/* section 2 */}

          <div className="col-md-7 bg-dark" id="menu-text">
            <a href="menu">
              <div className="display-6 pt-3 px-3 text-secondary text-center">
                Menu
              </div>
              <p className="p-3 text-center text-primary">
                Come, join us at Newton's for a culinary adventure that
                transcends the ordinary—a place where exceptional food, warm
                hospitality, and family moments converge in perfect harmony. Our
                drink menu is more than a selection; it's a symphony of flavors,
                an ode to craftsmanship, and a celebration of the art of
                beverage curation. Cheers to a journey of taste and a toast to
                your unforgettable dining experience!
              </p>
            </a>
          </div>

          <div className="col-md-5 bg-dark p-0" id="menu-carousel">
            <div className="display-6 text-center">
              <div
                id="carouselMenu"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* Map does not work appropriately due to Bootstrap carousel */}
                    <img src={food[0]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={food[1]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={food[2]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={food[3]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={food[4]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={food[5]} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselMenu"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselMenu"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="col-md-5 bg-primary p-0">
            <div className="display-6 text-center">
              <div
                id="carouselLocations"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* Map does not work appropriately due to Bootstrap carousel */}
                    <img src={cities[0]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={cities[1]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={cities[2]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={cities[3]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={cities[4]} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={cities[5]} className="d-block w-100" alt="..." />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselLocations"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselLocations"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 bg-primary">
            <a href="locations">
              <div className="display-6 pt-3 px-3 text-center text-secondary">
                Locations & Reservations
              </div>
              <p className="p-3 text-center text-dark">
                The interior of Newton's restaurants boasts a palette of muted
                tones, soft lighting, and tasteful decor that exudes understated
                opulence. From the plush upholstery to the carefully chosen
                artwork adorning the walls, each element has been selected to
                create a harmonious visual symphony. Enhancing the ambiance is
                the soft melody of live music, carefully curated to complement
                the dining experience without overpowering conversation. Our
                live musicians add an extra layer of sophistication to your
                evening.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
