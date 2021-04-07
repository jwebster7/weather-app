import React, { useEffect, useState } from "react";
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

const isNullOrUndefined = (data) => {
  // using the double bang operator for a truthy value fails because temperature data may equal 0
  if (data === undefined || data === null) {
    return true;
  }
  return false;
};

const WeatherDisplay = ({ weather }) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const loadingState = (
      isNullOrUndefined(weather?.temp) ||
      isNullOrUndefined(weather?.feels_like) ||
      isNullOrUndefined(weather?.temp_max) ||
      isNullOrUndefined(weather?.temp_min) ||
      isNullOrUndefined(weather?.speed) ||
      isNullOrUndefined(weather?.humidity)
    );
    setLoading(loadingState);
  }, [weather]);

  return loading ? (
    <Spinner />
  ) : (
    <WeatherDisplayContainer className="weather-display-container">
      <WeatherDataGrid>{weatherDataDisplay}</WeatherDataGrid>
      <ReactTooltip />
    </WeatherDisplayContainer>
  );
};

export default WeatherDisplay;
