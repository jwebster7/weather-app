import AppActionTypes from "./app.types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case AppActionTypes.SET_COORDINATES:
      // adding coordinates to localStorage in case of refresh so this api call doesn't have to be remade
      window.localStorage.setItem(
        "coordinates",
        JSON.stringify(action.payload)
      );
      return { ...state, coordinates: action.payload };
    case AppActionTypes.SET_CITY_STATE:
      return { ...state, address: action.payload };
    case AppActionTypes.SET_LOCAL_DATE_TIME:
      return { ...state, dateTime: action.payload };
    case AppActionTypes.SET_WEATHER_STATUS:
      // console.log(action.payload);
      return { ...state, weather: action.payload };
    case AppActionTypes.SET_WEATHER_FORECAST:
      return { ...state, forecast: action.payload };
    case AppActionTypes.GET_CURRENT_WEATHER_DATA:
      return { ...state, current: action.payload };
    case AppActionTypes.TOGGLE_GEOLOCATION_ENABLED:
      return { ...state, geolocationEnabled: action.payload };
    default:
      return state;
  }
};

export default AppReducer;
