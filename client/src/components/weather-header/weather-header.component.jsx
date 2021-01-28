// import React, { useContext, useEffect, useState } from "react";
import React from "react";

import { useAddressData } from "../../context/app.provider";

import Spinner from "../spinner/spinner.component";

import SunnyDayIcon from "../../assets/sunny-day.png";

import {
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = () => {
  const address = useAddressData();
  return !!address.city && !!address.state ? (
    <WeatherDisplayHeaderContainer className="weather-display-header">
      <WeatherPrimaryIconContainer src={SunnyDayIcon} />
      <WeatherDisplayTitleContainer>
        {address.city} {address.state}
      </WeatherDisplayTitleContainer>
    </WeatherDisplayHeaderContainer>
  ) : (
    <Spinner />
  );
};

export default WeatherHeader;
