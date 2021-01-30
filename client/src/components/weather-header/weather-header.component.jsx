// import React, { useContext, useEffect, useState } from "react";
import React from "react";
import { useAddressData, useDateTimeData } from "../../context/app.provider";

import Spinner from "../spinner/spinner.component";

import SunnyDayIcon from "../../assets/sunny-day.png";

import {
  LocationContainer,
  TimeContainer,
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = () => {
  const address = useAddressData();
  const dateTime = useDateTimeData();
  const city = address?.city ? `${address?.city}, ` : "";
  const county = address?.county ? `${address?.county}, ` : "";
  const state = address?.state ? `${address?.state}` : "";

  return address && dateTime ? (
    <WeatherDisplayHeaderContainer className="weather-display-header">
      <WeatherPrimaryIconContainer src={SunnyDayIcon} />
      <WeatherDisplayTitleContainer>
        <LocationContainer>
          {city} {county} {state}
        </LocationContainer>
        <TimeContainer>{dateTime}</TimeContainer>
      </WeatherDisplayTitleContainer>
    </WeatherDisplayHeaderContainer>
  ) : (
    <Spinner />
  );
};

export default WeatherHeader;
