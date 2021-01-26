import React from "react";

import {
  WeatherDataContainer,
  WeatherDataGrid,
  WeatherDisplayContainer,
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherIconContainer,
  WeatherPrimaryIconContainer,
  WeatherTextContainer
} from "./weather-display.styles";

// import ColdThermometerIcon from "../../assets/thermometer-cold.png";
// import HotThermometerIcon from "../../assets/thermometer-hot.png";
import FeverIcon from "../../assets/fever.png";
import HumidityIcon from "../../assets/humidity.png";
import SunnyDayIcon from "../../assets/sunny-day.png";
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

const WeatherDisplay = ({ main, windSpeed }) => {
  const mainDataDisplay = main ? (
    Object.keys(main).map((key, index) => {
      return (
        <WeatherDataContainer key={index}>
          <WeatherIconContainer src={keyToIconMap[key]} />
          <WeatherTextContainer>{main[key]}</WeatherTextContainer>
        </WeatherDataContainer>
      );
    })
  ) : (
    <div>No main data found! </div>
  );

  const windSpeedDisplay = (
    <WeatherDataContainer>
      <WeatherIconContainer src={keyToIconMap["speed"]} />
      <WeatherTextContainer>{windSpeed}</WeatherTextContainer>
    </WeatherDataContainer>
  );

  return (
    <WeatherDisplayContainer className="weather-display-container">
      <WeatherDisplayHeaderContainer className="weather-display-header">
        <WeatherPrimaryIconContainer src={SunnyDayIcon} />
        {/* TODO: Need to pull the City and State somehow from the coordinates and replace the title with the City, State */}
        <WeatherDisplayTitleContainer>City, State</WeatherDisplayTitleContainer>
      </WeatherDisplayHeaderContainer>
      <WeatherDataGrid>
        {mainDataDisplay}
        {windSpeedDisplay}
      </WeatherDataGrid>
    </WeatherDisplayContainer>
  );
};

export default WeatherDisplay;
