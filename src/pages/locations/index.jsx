import React, { useState } from "react";
import { motion } from "framer-motion";

import restaurantsList from "../../data/restaurantsList";
import RestaurantMap from "../../components/RestaurantMap";
import Button from "../../components/Button";
import RestaurantDetails from "../../components/RestaurantDetails";

const Locations = () => {
  const [area, setArea] = useState(0);
  const restaurant = restaurantsList[area];

  const handleAreaClick = (index) => {
    setArea(index);
  };

  return (
    <div className="container">
      <div className="bg-dark row m-0 p-2">
        {restaurantsList.map((place, index) => (
          <Button key={place.id} onClick={() => handleAreaClick(index)}>
            {place.city}
          </Button>
        ))}
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
          <RestaurantMap
            center={restaurant.coordinates}
            position={restaurant.coordinates}
          />
          <span>*Requires Google Cloud Subscription. iframe not suitable.</span>
        </div>
        <div className="col-md-5 p-3">
          <RestaurantDetails
            location={restaurant.location}
            city={restaurant.city}
            tel={restaurant.tel}
            email={restaurant.email}
          />
        </div>
      </div>
    </div>
  );
};
export default Locations;
