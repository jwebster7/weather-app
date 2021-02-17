import React from "react";

import {
  useCurrentWeatherData,
  useDateTimeData,
  useWeatherStatusData
} from "../../context/app.provider";

import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";

import { WeatherContainer } from "./weather.styles";

const Weather = () => {
  const weather = useCurrentWeatherData();
  const conditions = useWeatherStatusData();
  const dateTime = useDateTimeData();

  return (
    <WeatherContainer className="weather-container">
      <WeatherHeader conditions={conditions} dateTime={dateTime} />
      <WeatherDisplay weather={weather} />
    </WeatherContainer>
  );
};

export default Weather;
