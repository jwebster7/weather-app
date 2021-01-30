import React from "react";
import ReactTooltip from "react-tooltip";

import { useCurrentWeatherData } from "../../context/app.provider";

import Spinner from "../spinner/spinner.component";

import {
  WeatherDataContainer,
  WeatherDataGrid,
  WeatherDisplayContainer,
  WeatherIconContainer,
  WeatherTextContainer
} from "./weather-display.styles";

// import ColdThermometerIcon from "../../assets/thermometer-cold.png";
// import HotThermometerIcon from "../../assets/thermometer-hot.png";
import FeverIcon from "../../assets/fever.png";
import HumidityIcon from "../../assets/humidity.png";
import ThermometerIcon from "../../assets/thermometer.png";
import ThermometerUpArrowIcon from "../../assets/thermometer-up-arrow.png";
import ThermometerDownArrowIcon from "../../assets/thermometer-down-arrow.png";
import WindIcon from "../../assets/wind.png";

const keyToIconMap = {
  temp: ThermometerIcon,
  feels_like: FeverIcon,
  temp_max: ThermometerUpArrowIcon,
  temp_min: ThermometerDownArrowIcon,
  speed: WindIcon,
  humidity: HumidityIcon
};

const keyToUnitMap = {
  temp: "F",
  feels_like: "F",
  temp_max: "F",
  temp_min: "F",
  speed: "m/h",
  humidity: "%"
};

const keyToTextMap = {
  temp: "Temperature",
  feels_like: "Feels Like",
  temp_max: "High",
  temp_min: "Low",
  speed: "Speed",
  humidity: "Humidity"
};

const WeatherDisplay = () => {
  const current = useCurrentWeatherData();

  const weatherDataDisplay = current
    ? Object.keys(current).map((key, index) => {
        return (
          <WeatherDataContainer
            key={index}
            aria-label={keyToTextMap[key]}
            data-tip={keyToTextMap[key]}
          >
            <WeatherIconContainer src={keyToIconMap[key]} />
            <WeatherTextContainer>
              {current[key]} {keyToUnitMap[key]}
            </WeatherTextContainer>
            <ReactTooltip />
          </WeatherDataContainer>
        );
      })
    : null;

  const isLoading =
    !!current?.temp &&
    !!current?.feels_like &&
    !!current?.temp_max &&
    !!current?.temp_min &&
    !!current?.speed &&
    !!current?.humidity;

  return !isLoading ? (
    <Spinner />
  ) : (
    <WeatherDisplayContainer className="weather-display-container">
      <WeatherDataGrid>{weatherDataDisplay}</WeatherDataGrid>
      <ReactTooltip />
    </WeatherDisplayContainer>
  );
};

export default WeatherDisplay;
