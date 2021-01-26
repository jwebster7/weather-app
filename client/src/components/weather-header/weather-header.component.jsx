import React from "react";

import SunnyDayIcon from "../../assets/sunny-day.png";

import {
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = ({ city, state }) => {
  return (
    <WeatherDisplayHeaderContainer className='weather-display-header'>
      <WeatherPrimaryIconContainer src={SunnyDayIcon} />
      <WeatherDisplayTitleContainer>
        {city}, {state}
      </WeatherDisplayTitleContainer>
    </WeatherDisplayHeaderContainer>
  );
};

export default WeatherHeader;
