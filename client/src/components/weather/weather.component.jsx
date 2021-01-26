import React, { useEffect, useState } from "react";

import WeatherDisplay from "../../components/weather-display/weather-display.component";

import { WeatherContainer } from "./weather.styles";

import { getWeatherData } from "../../API";

const Weather = ({ latitude, longitude }) => {
  const [main, setMain] = useState({});
  const [windSpeed, setWindSpeed] = useState('');
  const [weather, setWeather] = useState({});

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
      console.log(error);
    }
  }, [latitude, longitude]);

  return (
    <WeatherContainer className='weather-container'>
      <WeatherDisplay main={main} windSpeed={windSpeed} weather={weather} />
    </WeatherContainer>
  );
};


export default Weather;
