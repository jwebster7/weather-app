import React from "react";
import ReactTooltip from "react-tooltip";

import Spinner from "../spinner/spinner.component";

import {
  keyToIconMap,
  keyToUnitMap,
  keyToTextMap
} from "./weather-display.utils";

import {
  WeatherDataContainer,
  WeatherDataGrid,
  WeatherDisplayContainer,
  WeatherIconContainer,
  WeatherTextContainer
} from "./weather-display.styles";

const WeatherDisplay = ({ weather }) => {

  const weatherDataDisplay = weather
    ? Object.keys(weather).map((key, index) => {
        return (
          <WeatherDataContainer
            key={index}
            aria-label={keyToTextMap[key]}
            data-tip={keyToTextMap[key]}
          >
            <WeatherIconContainer src={keyToIconMap[key]} />
            <WeatherTextContainer>
              {weather[key]} {keyToUnitMap[key]}
            </WeatherTextContainer>
            <ReactTooltip />
          </WeatherDataContainer>
        );
      })
    : null;

  const isLoading =
    !!weather?.temp &&
    !!weather?.feels_like &&
    !!weather?.temp_max &&
    !!weather?.temp_min &&
    !!weather?.speed &&
    !!weather?.humidity;

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
