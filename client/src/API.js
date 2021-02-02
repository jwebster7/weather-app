import axios from "axios";

export const getWeatherDataByCoords = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
    units: "imperial"
  };
  try {
    const resp = axios.get("/weather-lat-lon", {
      params: params
    });
    // const endPoint = `http://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&units=${params.units}&appid=${'5758202996b1be0ee8ceedce38bf2225'}`;
    // const resp = axios.get(endPoint);
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherDataByCityState = (city, state) => {
  const params = {
    city: city,
    state: state,
    units: "imperial"
  };
  try {
    const resp = axios.get("/weather-city-state", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getCityAndState = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude
  };

  try {
    const resp = axios.get("/reverse-geocode", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherForecast = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude
  };

  try {
    const resp = axios.get("/forecast", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherIcon = (iconId) => {
  const endPoint = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  try {
    const resp = axios.get(endPoint);
    return resp;
  } catch (error) {
    return error;
  }
};
