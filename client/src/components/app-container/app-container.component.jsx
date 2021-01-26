import React, { useEffect, useState } from "react";

import Spinner from "../spinner/spinner.component";
import Weather from "../weather/weather.component";

import { AppStyledContainer } from "./app-container.styles";

const AppContainer = () => {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (position) => {
        // setLatitude(position.coords.latitude);
        // setLongitude(position.coords.longitude);
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        alert("Unable to use location. Please search by city and state.");
        console.log(err);
      },
      () => ({
        enableHighAccuracy: true,
        timeout: 5000
      })
    );
  }, []);

  return (
    <AppStyledContainer>
      {loading ? (
        <Spinner />
      ) : (
        <Weather latitude={position.latitude} longitude={position.longitude} />
      )}

      {/* <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/vitaly-gorbachev"
          title="Vitaly Gorbachev"
        >
          Vitaly Gorbachev
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </AppStyledContainer>
  );
};

export default AppContainer;
