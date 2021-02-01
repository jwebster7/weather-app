import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useWeatherForecastData } from "../../context/app.provider";

import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component";
import WeatherDisplay from "../../components/weather-display/weather-display.component";
import WeatherHeader from "../../components/weather-header/weather-header.component";

import {
  DailyForecastContainer,
  ForecastPageButtonContainer,
  ForecastPageContainer
} from "./forecast.styles";

const Forecast = ({ history }) => {
  const initialPageId = parseInt(useParams()?.forecastid);
  const [pageCount, setPageCount] = useState(initialPageId);
  const forecast = useWeatherForecastData();

  const days = forecast.map((day) => {
    const conditions = day?.weather;
    const weather = day?.current;
    const dt = day?.dt;
    const dateTime = new Date(dt * 1000).toLocaleDateString();
    return (
      <DailyForecastContainer key={dt}>
        <WeatherHeader conditions={conditions} dateTime={dateTime} />
        <WeatherDisplay weather={weather} />
      </DailyForecastContainer>
    );
  });

  const handleNextDay = () => {
    if (pageCount >= days.length - 1) {
      setPageCount(0);
    } else {
      const nextPageNumber = pageCount + 1;
      setPageCount(nextPageNumber);
    }
  };

  const handlePrevDay = () => {
    if (pageCount === 0) {
      setPageCount(days.length - 1);
    } else {
      const nextPageNumber = pageCount - 1;
      setPageCount(nextPageNumber);
    }
  };

  useEffect(() => {
    history.push(`/forecast/${pageCount}`);
  }, [pageCount, history]);

  useEffect(() => {}, [pageCount]);

  return (
    <ForecastPageContainer>
      <Header />
      {days[pageCount]}
      <ForecastPageButtonContainer>
        <CustomButton onClick={handlePrevDay} disabled={pageCount === 0}>
          Previous Day
        </CustomButton>
        <CustomButton onClick={handleNextDay} disabled={pageCount === days.length - 1}>
          Next Day
        </CustomButton>
      </ForecastPageButtonContainer>
    </ForecastPageContainer>
  );
};

export default Forecast;
