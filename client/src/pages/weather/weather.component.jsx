import React from "react";

import {
  useCurrentWeatherData,
  useDateTimeData,
  useWeatherStatusData
} from "../../context/app.provider";

import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";

import { WeatherContainer } from "./weather.styles";
import Spinner from "../../components/spinner/spinner.component";

const Weather = () => {
  const weather = useCurrentWeatherData();
  const conditions = useWeatherStatusData();
  const dateTime = useDateTimeData();

  return !!weather && !!conditions && !!dateTime ? (
    <WeatherContainer className="weather-container">
      <WeatherHeader conditions={conditions} dateTime={dateTime} />
      <WeatherDisplay weather={weather} />
    </WeatherContainer>
  ) : (
    <Spinner />
  );
};

export default Weather;
