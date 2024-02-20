import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { motion } from "framer-motion";

import { restaurantsList } from "../constants/data";

const mapKey = process.env.REACT_APP_MAP_API_KEY;

const Locations = () => {
  const [area, setArea] = useState(0);

  const handleMidrandClick = () => {
    setArea(0);
  };
  const handlePtaClick = () => {
    setArea(1);
  };
  const handleUmhlangaClick = () => {
    setArea(2);
  };
  const handleCapetownClick = () => {
    setArea(3);
  };
  const handleBloemClick = () => {
    setArea(4);
  };
  const handleSunCityClick = () => {
    setArea(5);
  };

  let restaurant = restaurantsList[area];

  return (
    <div className="container">
      <div className="bg-dark row m-0 p-2">
        <button
          type="button"
          className="btn btn-dark text-primary col-6 col-md-2"
          onClick={handleMidrandClick}
        >
          {restaurantsList[0].city}
        </button>

        <button
          type="button"
          className="btn btn-dark text-primary btn-border-radius-0 col-6 col-md-2"
          onClick={handlePtaClick}
        >
          {restaurantsList[1].city}
        </button>

        <button
          type="button"
          className="btn btn-dark text-primary btn-border-radius-0 col-6 col-md-2"
          onClick={handleUmhlangaClick}
        >
          {restaurantsList[2].city}
        </button>

        <button
          type="button"
          className="btn btn-dark text-primary btn-border-radius-0 col-6 col-md-2"
          onClick={handleCapetownClick}
        >
          {restaurantsList[3].city}
        </button>

        <button
          type="button"
          className="btn btn-dark text-primary btn-border-radius-0 col-6 col-md-2"
          onClick={handleBloemClick}
        >
          {restaurantsList[4].city}
        </button>

        <button
          type="button"
          className="btn btn-dark text-primary btn-border-radius-0 col-6 col-md-2"
          onClick={handleSunCityClick}
        >
          {restaurantsList[5].city}
        </button>
      </div>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
        className="locationImg"
        style={{
          backgroundImage: `url(${restaurant.bg})`,
        }}
      >
        <div className="display-1 text-center text-secondary">
          {restaurant.location}
        </div>
      </motion.div>

      <div className="row bg-dark m-0">
        <div className="col-md-7 p-3">
          {/* Requires Google Cloud Subscription. iframe not suitable. */}
          <APIProvider apiKey={mapKey}>
            <div style={{ height: "350px", width: "100%" }}>
              <Map
                defaultZoom={15}
                // defaultCenter={restaurant.coordinates}  // Map does not change location on click, after .env was added.
                center={restaurant.coordinates}
                mapId="8fba7d4d171e3568"
              >
                <AdvancedMarker position={restaurant.coordinates} />
              </Map>
            </div>
          </APIProvider>
        </div>

        <div className="col-md-5 p-3">
          <h2 className="text-secondary">Contact Us</h2>
          <h4 className="text-primary">
            {restaurant.location}, {restaurant.city}
          </h4>
          <p className="text-primary">{restaurant.tel}</p>
          <p className="text-primary">{restaurant.email}</p>
          <hr />
          <h2 className="text-secondary">Operating Hours</h2>
          <p className="text-primary">Monday - Sunday (09h00 - 00h00)</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book A Reservation
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Reservation for {restaurant.location}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <Calendar />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
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
