import React, { useEffect, useState } from "react";

import Spinner from "../../components/spinner/spinner.component";
import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";
import { useLocationData } from "../../context/location/location.provider";

import { WeatherContainer } from "./weather.styles";

const Weather = () => {
  const [loading, isLoading] = useState(true);
  const position = useLocationData();
  useEffect(() => {
    const { latitude, longitude } = position;

    if (!!latitude && !!longitude) {
      isLoading(false);
    } else {
      isLoading(true);
    }
  }, [position]);

  // return (
  //   <WeatherContainer className="weather-container">
  //     <WeatherHeader position={} />
  //     <WeatherDisplay position={} />
  //   </WeatherContainer>
  // );

  return loading ? (
    <Spinner />
  ) : (
    <WeatherContainer className="weather-container">
      <WeatherHeader position={position} />
      <WeatherDisplay position={position} />
    </WeatherContainer>
  );
};

export default Weather;
