import React, { useContext, useEffect, useReducer } from "react";

import { getCityAndState, getWeatherDataByCoords } from "../API";
import { getLocalTimeData, formatCurrentWeatherData } from "../API.utils";

import AppReducer from "./app.reducer";
import { initialState } from "./app.state";
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
    // const geo = navigator.geolocation;
    // geo.getCurrentPosition(
    //   (position) => {
    //     const { latitude, longitude } = position.coords;
    //     const coordinates = { latitude, longitude };
    //     dispatch({
    //       type: AppActionTypes.SET_COORDINATES,
    //       payload: coordinates
    //     });
    //     dispatch({
    //       type: AppActionTypes.TOGGLE_GEOLOCATION_ENABLED,
    //       payload: true
    //     });
    //   },
    //   (error) => {
    //     dispatch({
    //       type: AppActionTypes.TOGGLE_GEOLOCATION_ENABLED,
    //       payload: false
    //     });
    //     alert("Unable to use location. Please search by city and state.");
    //     console.log(error);
    //   },
    //   () => ({
    //     enableHighAccuracy: true,
    //     timeout: 5000
    //   })
    // );
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
            // dispatch({
            //   type: AppActionTypes.GET_LOCAL_DATE,
            //   payload: date
            // });
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
            const current = formatCurrentWeatherData(resp.data);
            const dateTime = getLocalTimeData(resp.data);
            dispatch({
              type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
              payload: current
            });
            dispatch({
              type: AppActionTypes.SET_LOCAL_DATE_TIME,
              payload: dateTime
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

export const useCurrentWeatherData = () => {
  const { state } = useContext(AppContext);
  const { current } = state;
  return current;
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

export const useGeolocationData = () => {
  const { state } = useContext(AppContext);
  const { geolocation } = state;
  return geolocation;
};

export default AppProvider;
