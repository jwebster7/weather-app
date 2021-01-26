import React, { useContext, useEffect, useState } from "react";

import LocationContext from "./location.context";

const LocationProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      },
      (error) => {
        alert("Unable to use location. Please search by city and state.");
        console.log(error);
      },
      () => ({
        enableHighAccuracy: true,
        timeout: 5000
      })
    );
  }, []);

  return (
    <LocationContext.Provider value={{ latitude, longitude }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationData = () => {
  return useContext(LocationContext);
};

export default LocationProvider;
