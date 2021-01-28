import React from "react";

import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";

// import { useGeolocationData } from "../../context/app.provider";

import { WeatherContainer } from "./weather.styles";

const Weather = () => {

  return (
    <WeatherContainer className="weather-container">
      <WeatherHeader />
      <WeatherDisplay />
    </WeatherContainer>
  );
};

export default Weather;
