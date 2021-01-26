import React, { useEffect, useState } from "react";

import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";

import { WeatherContainer } from "./weather.styles";

import { getCityAndState, getWeatherData } from "../../API";

const Weather = ({ latitude, longitude }) => {
  const [main, setMain] = useState({});
  const [windSpeed, setWindSpeed] = useState("");
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    try {
      getWeatherData(latitude, longitude).then((resp) => {
        if (resp.status === 200) {
          const { main, wind, weather } = resp.data;
          delete main.pressure;
          setMain(main);
          setWindSpeed(wind.speed);
          setWeather(weather);
        }
      });
    } catch (error) {
      alert("There was an issue fetching weather data!");
      console.log(error);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    try {
      getCityAndState(latitude, longitude).then((resp) => {
        if (resp.status == 200) {
          const { city, state } = resp.data;
          setCity(city);
          setState(state);
        }
      });
    } catch (error) {
      alert("There was an issue fetching City and State data!");
      console.log(error);
    }
  }, [latitude, longitude]);

  console.log(latitude, longitude);
  return (
    <WeatherContainer className="weather-container">
      <WeatherHeader city={city} state={state} />
      <WeatherDisplay main={main} windSpeed={windSpeed} weather={weather} />
    </WeatherContainer>
  );
};

export default Weather;
