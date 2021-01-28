import React, { useContext, useEffect, useReducer, useState } from "react";

import { getCityAndState, getWeatherData } from "../API";

import AppActionTypes from "./app.types";
import AppReducer from "./app.reducer";

const AppContext = React.createContext(null);
const { Provider } = AppContext;

const initialState = {
  weather: {
    current: {}
  },
  address: {
    city: "",
    state: ""
  },
  coordinates: {
    latitude: "",
    longitude: ""
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const coordinates = { latitude, longitude };
        dispatch({
          type: AppActionTypes.GET_COORDINATES,
          payload: coordinates
        });
      },
      (error) => {
        alert("Unable to use location. Please search by city and state.");
        console.log(error);
      },
      () => ({
        enableHighAccuracy: true,
        timeout: 5000
      })
    );
  }, []);

  useEffect(() => {
    const { latitude, longitude } = state.coordinates;
    // console.log(!!latitude, !!longitude);
    if (!!latitude && !!longitude) {
      try {
        getCityAndState(latitude, longitude).then((resp) => {
          if (resp.status === 200) {
            const { city, state } = resp.data;
            const address = { city, state };
            dispatch({
              type: AppActionTypes.GET_CITY_STATE,
              payload: address
            });
          }
        });
      } catch (error) {
        alert("There was an issue fetching City and State data!");
        console.log(error);
      }
    }
  }, [state.coordinates]);

  useEffect(() => {
    const { latitude, longitude } = state.coordinates;
    if (!!latitude && !!longitude) {
      try {
        getWeatherData(latitude, longitude).then((resp) => {
          if (resp.status === 200) {
            const { main, wind } = resp.data;
            // delete main.pressure;
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
  }, [state.coordinates]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAppData = () => {
  return useContext(AppContext);
};

// export const useWeatherData = () => {
//   const { weather } = useAppData();
//   return weather;
// }

// export const useCurrentWeatherData = () => {
//   const { current } = useWeatherData();
//   return current;
// }

// export const useAddressData = () => {
//   const { address } = useAppData();
//   return address;
// }

export default AppProvider;
