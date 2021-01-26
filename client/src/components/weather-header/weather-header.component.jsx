import React, { useEffect, useState } from "react";

import { getCityAndState } from "../../API";

import SunnyDayIcon from "../../assets/sunny-day.png";

import {
  WeatherDisplayHeaderContainer,
  WeatherDisplayTitleContainer,
  WeatherPrimaryIconContainer
} from "./weather-header.styles";

const WeatherHeader = ({ position }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const { latitude, longitude } = position;
    try {
      getCityAndState(latitude, longitude).then((resp) => {
        if (resp.status === 200) {
          const { city, state } = resp.data;
          setCity(city.toString());
          setState(state.toString());
        }
      });
    } catch (error) {
      alert("There was an issue fetching City and State data!");
      console.log(error);
    }
  }, [position]);

  return (
    <WeatherDisplayHeaderContainer className="weather-display-header">
      <WeatherPrimaryIconContainer src={SunnyDayIcon} />
      <WeatherDisplayTitleContainer>
        {city}, {state}
      </WeatherDisplayTitleContainer>
    </WeatherDisplayHeaderContainer>
  );
};

export default WeatherHeader;
