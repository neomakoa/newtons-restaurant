import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const mapKey = process.env.REACT_APP_MAP_API_KEY;

const RestaurantMap = ({ center, position }) => {
  return (
    <div>
      <APIProvider apiKey={mapKey}>
        <div style={{ height: "350px", width: "100%" }}>
          <Map
            defaultZoom={15}
            // defaultCenter={defaultCenter}   Map does not change location on click, after .env was added.
            center={center}
            mapId="8fba7d4d171e3568"
          >
            <AdvancedMarker position={position} />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default RestaurantMap;
