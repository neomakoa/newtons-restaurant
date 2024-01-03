import React, { useState } from "react";
import Calendar from "react-calendar";
import { restaurantsList } from "./data";

const Locations = () => {
  const [store, setStore] = useState(0);

  const handleMidrandClick = () => {
    setStore(0);
  };
  const handlePtaClick = () => {
    setStore(1);
  };
  const handleUmhlangaClick = () => {
    setStore(2);
  };
  const handleCapetownClick = () => {
    setStore(3);
  };
  const handleBloemClick = () => {
    setStore(4);
  };
  const handleSunCityClick = () => {
    setStore(5);
  };

  let restaurant = restaurantsList[store];

  return (
    <div className="container">
      <div className="bg-dark">
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleMidrandClick}
        >
          {restaurantsList[0].city}
        </button>
        <button type="button" class="btn btn-primary" onClick={handlePtaClick}>
          {restaurantsList[1].city}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleUmhlangaClick}
        >
          {restaurantsList[2].city}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleCapetownClick}
        >
          {restaurantsList[3].city}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleBloemClick}
        >
          {restaurantsList[4].city}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleSunCityClick}
        >
          {restaurantsList[5].city}
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${restaurant.bg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "70vh",
          opacity: 0.97,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="display-1 text-center text-success">
          {restaurant.location}
        </div>
      </div>
      <div className="row bg-dark m-0">
        <div className="col-md-7 p-3">
          <iframe
            src={restaurant.map}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-md-5 p-3">
          <h2 className="text-success">Contact Us</h2>
          <h4 className="text-primary">
            {restaurant.location}, {restaurant.city}
          </h4>
          <p className="text-primary">{restaurant.tel}</p>
          <p className="text-primary">{restaurant.email}</p>
          <hr />
          <h2 className="text-success">Operating Hours</h2>
          <p className="text-primary">Monday - Sunday (09h00 - 00h00)</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book A Reservation
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Reservation for {restaurant.location}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <Calendar />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
