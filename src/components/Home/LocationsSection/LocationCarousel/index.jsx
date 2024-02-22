import React from "react";

import { cities } from "../../../../assets/images";

const LocationCarousel = () => {
  return (
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
  );
};

export default LocationCarousel;
