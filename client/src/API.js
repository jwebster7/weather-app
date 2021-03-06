import axios from "axios";

export const getWeatherDataByCoords = async (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
    units: "imperial"
  };
  try {
    // const endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
    const resp = await axios.get("/api/weather-lat-lon", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherDataByZipCode = async (zipCode) => {
  const params = {
    zipCode: zipCode,
    units: "imperial"
  };

  try {
    const resp = await axios.get("/api/weather-zip-code", {
      params: params
    });
    return resp;
  } catch (error) {
    alert("Invalid ZIP code!");
    return error;
  }
};

export const getWeatherDataByCityState = async (city, state) => {
  const params = {
    city: city,
    state: state,
    units: "imperial"
  };
  try {
    // const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
    const resp = await axios.get("/api/weather-city-state", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getCityAndState = async (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude
  };

  try {
    // const endPoint = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2&zoom=10`;
    // const resp = axios.get(endPoint);
    const resp = await axios.get("/api/reverse-geocode", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherForecast = async (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude
  };

  try {
    // const endPoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=hourly,minutely,alerts&appid=${process.env.OPEN_WEATHER_API_KEY}`;
    // const resp = axios.get(endPoint);
    const resp = await axios.get("/api/forecast", {
      params: params
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export const getWeatherIcon = async (iconId) => {
  const endPoint = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  try {
    const resp = await axios.get(endPoint);
    return resp;
  } catch (error) {
    return error;
  }
};
