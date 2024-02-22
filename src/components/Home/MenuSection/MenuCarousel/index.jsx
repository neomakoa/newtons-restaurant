import React from "react";

import { food } from "../../../../assets/images";

const MenuCarousel = () => {
  return (
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
  );
};

export default MenuCarousel;
