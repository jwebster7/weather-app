import React, { useEffect, useState } from "react";

import Spinner from "../../components/spinner/spinner.component";
import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";
import { useLocationData } from "../../context/location/location.provider";

// import { useAddressData, useCurrentWeatherData } from "../../context/app.provider";
import { useAppData } from "../../context/app.provider";

import { WeatherContainer } from "./weather.styles";

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useAppData();
  const { weather } = state;
  const { current } = weather;
  const { address } = state;

  console.log(weather);
  console.log(address);

  useEffect(() => {
    if (!!current && !!address) {
      setLoading(false);
    }
  }, [current, address]);

  return loading ? (
    <Spinner />
  ) : (
    <WeatherContainer className="weather-container">
      <WeatherHeader address={address} />
      <WeatherDisplay current={current} />
    </WeatherContainer>
  );
};

export default Weather;
