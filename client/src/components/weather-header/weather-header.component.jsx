import React, { useEffect, useState } from "react";

import { getCityAndState } from "../../API";

import SunnyDayIcon from "../../assets/sunny-day.png";

import {
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = ({ address }) => {
  return (
    <WeatherDisplayHeaderContainer className="weather-display-header">
      <WeatherPrimaryIconContainer src={SunnyDayIcon} />
      <WeatherDisplayTitleContainer>
        {address.city} {address.state}
      </WeatherDisplayTitleContainer>
    </WeatherDisplayHeaderContainer>
  );
};

export default WeatherHeader;
