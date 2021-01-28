import App from "../App";
import AppActionTypes from "./app.types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case AppActionTypes.GET_COORDINATES:
      return { ...state, coordinates: action.payload };
    case AppActionTypes.GET_CITY_STATE:
      return { ...state, address: action.payload };
    case AppActionTypes.GET_CURRENT_WEATHER_DATA:
      return { ...state, weather: { current: action.payload } };
    default:
      return state;
  }
};

export default AppReducer;
