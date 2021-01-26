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

const WeatherDisplay = ({ position }) => {
  const [main, setMain] = useState({});
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    const { latitude, longitude } = position;
    try {
      getWeatherData(latitude, longitude).then((resp) => {
        if (resp.status === 200) {
          const { main, wind } = resp.data;
          delete main.pressure;
          setMain(main);
          setWindSpeed(wind.speed);
          // setWeather(weather);
        }
      });
    } catch (error) {
      alert("There was an issue fetching weather data!");
      console.log(error);
    }
  }, [position]);

  const mainDataDisplay = main ? (
    Object.keys(main).map((key, index) => {
      return (
        <WeatherDataContainer key={index} aria-label={key.toString()}>
          <WeatherIconContainer src={keyToIconMap[key]} />
          <WeatherTextContainer>{main[key]}</WeatherTextContainer>
        </WeatherDataContainer>
      );
    })
  ) : (
    <div>No main data found! </div>
  );

  const windSpeedDisplay = (
    <WeatherDataContainer aria-label={"speed"}>
      <WeatherIconContainer src={keyToIconMap["speed"]} />
      <WeatherTextContainer>{windSpeed}</WeatherTextContainer>
    </WeatherDataContainer>
  );

  return (
    <WeatherDisplayContainer className="weather-display-container">
      <WeatherDataGrid>
        {mainDataDisplay}
        {windSpeedDisplay}
      </WeatherDataGrid>
    </WeatherDisplayContainer>
  );
};

export default WeatherDisplay;
