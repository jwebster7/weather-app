import React, { useContext, useEffect, useReducer } from "react";

import {
  getCityAndState,
  getWeatherDataByCoords,
  getWeatherForecast
} from "../API";

import {
  formatCurrentWeatherData,
  formatCurrentWeatherForecast,
  formatWeatherStatusData,
  getLocalTimeData
} from "../API.utils";

import AppReducer from "./app.reducer";
import { initialState } from "./app.state.jsx";
import AppActionTypes from "./app.types";

export const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (window.localStorage.getItem("coordinates")) {
      const { coordinates } = window.localStorage;
      dispatch({
        type: AppActionTypes.SET_COORDINATES,
        payload: JSON.parse(coordinates)
      });
      dispatch({
        type: AppActionTypes.TOGGLE_GEOLOCATION_ENABLED,
        payload: true
      });
    } else {
      const geo = navigator.geolocation;
      geo.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coordinates = { latitude, longitude };
          dispatch({
            type: AppActionTypes.SET_COORDINATES,
            payload: coordinates
          });
          dispatch({
            type: AppActionTypes.TOGGLE_GEOLOCATION_ENABLED,
            payload: true
          });
        },
        (error) => {
          dispatch({
            type: AppActionTypes.TOGGLE_GEOLOCATION_ENABLED,
            payload: false
          });
          alert("Unable to use location. Please search by city and state.");
          console.log(error);
        },
        () => ({
          enableHighAccuracy: true,
          timeout: 5000
        })
      );
    }
  }, []);

  useEffect(() => {
    const geolocated =
      !!state.coordinates.latitude && !!state.coordinates.longitude;
    if (geolocated) {
      const { latitude, longitude } = state.coordinates;
      try {
        getCityAndState(latitude, longitude).then((resp) => {
          if (resp.status === 200) {
            const { city, state, county } = resp.data;
            const address = { city, state, county };
            dispatch({
              type: AppActionTypes.SET_CITY_STATE,
              payload: address
            });
          }
        });
      } catch (error) {
        alert("There was an issue fetching City and State data!");
        console.log(error);
      }
    }
  }, [
    state.geolocationEnabled,
    state.coordinates,
    state.coordinates.latitude,
    state.coordinates.latitude
  ]);

  useEffect(() => {
    const geolocated =
      state.geolocationEnabled &&
      !!state.coordinates.latitude &&
      !!state.coordinates.longitude;
    if (geolocated) {
      const { latitude, longitude } = state.coordinates;
      try {
        getWeatherDataByCoords(latitude, longitude).then((resp) => {
          if (resp.status === 200) {
            console.log(resp.data);
            const current = formatCurrentWeatherData(resp.data);
            const dateTime = getLocalTimeData(resp.data);
            const weather = formatWeatherStatusData(resp.data);
            dispatch({
              type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
              payload: current
            });
            dispatch({
              type: AppActionTypes.SET_LOCAL_DATE_TIME,
              payload: dateTime
            });
            dispatch({
              type: AppActionTypes.SET_WEATHER_STATUS,
              payload: weather
            });
          }
        });
      } catch (error) {
        alert("There was an issue fetching weather data!");
        console.log(error);
      }
    }
  }, [
    state.geolocationEnabled,
    state.coordinates,
    state.coordinates.latitude,
    state.coordinates.latitude
  ]);

  useEffect(() => {
    const geolocated =
      state.geolocationEnabled &&
      !!state.coordinates.latitude &&
      !!state.coordinates.longitude;
    if (geolocated) {
      const { latitude, longitude } = state.coordinates;
      getWeatherForecast(latitude, longitude).then((resp) => {
        // store resp.data in the context
        try {
          if (resp?.status === 200) {
            const { daily } = resp.data;
            const forecast = formatCurrentWeatherForecast(daily);
            dispatch({
              type: AppActionTypes.SET_WEATHER_FORECAST,
              payload: forecast
            });
          }
        } catch (error) {
          alert("There was an issue fetching the weather forecast data!");
          console.log(error);
        }
      });
    }
  }, [
    state.geolocationEnabled,
    state.coordinates,
    state.coordinates.latitude,
    state.coordinates.latitude
  ]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAppData = () => {
  return useContext(AppContext);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useCoordinateData = () => {
  const { state } = useContext(AppContext);
  const { coordinates } = state;
  return coordinates;
};

export const useCurrentWeatherData = () => {
  const { state } = useContext(AppContext);
  const { current } = state;
  return current;
};

export const useWeatherStatusData = () => {
  const { state } = useContext(AppContext);
  const { weather } = state;
  return weather;
};

export const useWeatherForecastData = () => {
  const { state } = useContext(AppContext);
  const { forecast } = state;
  return forecast;
};

export const useDateTimeData = () => {
  const { state } = useContext(AppContext);
  const { dateTime } = state;
  return dateTime;
};

export const useAddressData = () => {
  const { state } = useContext(AppContext);
  const { address } = state;
  return address;
};

export default AppProvider;
