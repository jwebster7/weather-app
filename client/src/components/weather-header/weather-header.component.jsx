import React from "react";
import ReactTooltip from "react-tooltip";

import { useAddressData } from "../../context/app.provider";

import { iconReducer } from "../../assets/index";

import {
  LocationContainer,
  TimeContainer,
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = ({ conditions, dateTime }) => {
  const address = useAddressData();
  const city = address?.city ? `${address?.city}, ` : "";
  const county = address?.county ? `${address?.county}, ` : "";
  const state = address?.state ? `${address?.state}` : "";

  const iconCode = conditions?.icon;
  const weatherStatusIcon = iconReducer(iconCode);
  const { status, icon } = weatherStatusIcon;

  return (
    <WeatherDisplayHeaderContainer className="weather-display-header">
      <WeatherPrimaryIconContainer
        src={icon}
        alt="oops! no image found"
        data-tip={status}
      />
      <WeatherDisplayTitleContainer>
        <LocationContainer>
          {city} {county} {state}
        </LocationContainer>
        <TimeContainer>{dateTime}</TimeContainer>
      </WeatherDisplayTitleContainer>
      <ReactTooltip />
    </WeatherDisplayHeaderContainer>
  );
};

export default WeatherHeader;
