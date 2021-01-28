import React, { useEffect, useState } from "react";

import { getWeatherData } from "../../API";

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

const WeatherDisplay = ({ current }) => {
  const { main, wind } = current;
  const { speed } = wind;

  const mainDataDisplay = main
    ? Object.keys(main).map((key, index) => {
        return (
          <WeatherDataContainer key={index} aria-label={key.toString()}>
            <WeatherIconContainer src={keyToIconMap[key]} />
            <WeatherTextContainer>{main[key]}</WeatherTextContainer>
          </WeatherDataContainer>
        );
      })
    : null;

  const windSpeedDisplay = speed ? (
    <WeatherDataContainer aria-label={"speed"}>
      <WeatherIconContainer src={keyToIconMap["speed"]} />
      <WeatherTextContainer>{speed}</WeatherTextContainer>
    </WeatherDataContainer>
  ) : null;

  return (
    <WeatherDisplayContainer className="weather-display-container">
      <WeatherDataGrid>
        {mainDataDisplay}
        {windSpeedDisplay}
      </WeatherDataGrid>
    </WeatherDisplayContainer>
  );

  // return !loading ? (
  //   <WeatherDisplayContainer className="weather-display-container">
  //     <WeatherDataGrid>
  //       {mainDataDisplay}
  //       {windSpeedDisplay}
  //     </WeatherDataGrid>
  //   </WeatherDisplayContainer>
  // ) : null;
};

export default WeatherDisplay;
