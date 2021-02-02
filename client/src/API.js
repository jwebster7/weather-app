import axios from "axios";

export const getWeatherDataByCoords = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
    units: "imperial"
  };
  try {
    // const endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
    const resp = axios.get("/weather-lat-lon", {
      params: params
    });
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
    // const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
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
    // const endPoint = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2&zoom=10`;
    // const resp = axios.get(endPoint);
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
    // const endPoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=hourly,minutely,alerts&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
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
