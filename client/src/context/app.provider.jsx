import React, { useContext, useEffect, useReducer } from "react";

import { getCityAndState, getWeatherDataByCoords } from "../API";

import AppActionTypes from "./app.types";
import AppReducer from "./app.reducer";

export const AppContext = React.createContext();
const { Provider } = AppContext;

const initialState = {
  weather: {
    current: {
      main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0
      },
      wind: {
        speed: 0
      }
    }
  },
  address: {
    city: "",
    state: ""
  },
  coordinates: {
    latitude: "",
    longitude: ""
  },
  geolocationEnabled: false
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (window.localStorage.getItem("coordinates")) {
      const { coordinates } = window.localStorage;
      console.log(
        "pulling the coordinates from localstorage: ",
        JSON.parse(coordinates)
      );
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
          dispatch({
            type: AppActionTypes.TOGGLE_GEOLOCATION_DENIED_OR_FAILED,
            payload: true
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
    const geolocated = !!state.coordinates.latitude && !!state.coordinates.longitude;
    if (geolocated) {
      const { latitude, longitude } = state.coordinates;
      try {
        getCityAndState(latitude, longitude).then((resp) => {
          if (resp.status === 200) {
            const { city, state } = resp.data;
            const address = { city, state };
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
            const { main, wind } = resp.data;
            delete main.pressure;
            const current = { main, wind };
            dispatch({
              type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
              payload: current
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

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAppData = () => {
  return useContext(AppContext);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useWeatherData = () => {
  const { state } = useContext(AppContext);
  const { weather } = state;
  return weather;
};

export const useCurrentWeatherData = () => {
  const { state } = useContext(AppContext);
  const { weather } = state;
  const { current } = weather;
  return current;
};

export const useAddressData = () => {
  const { state } = useContext(AppContext);
  const { address } = state;
  return address;
};

export const useGeolocationData = () => {
  const { state } = useContext(AppContext);
  const { geolocation } = state;
  return geolocation;
};

export default AppProvider;
