import axios from "axios";

export const getWeatherData = async (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
    units: "imperial"
  };
  try {
    const res = await axios.get("/weather", {
      params: params
    });
    return res;
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
    const res = await axios.get("/reverse-geocode", {
      params: params
    });
    return res;
  } catch (error) {
    return error;
  }
};
