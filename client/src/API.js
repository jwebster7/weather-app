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

  // const endPoint = `https://nominatim.openstreetmap.org/reverse?lat=${params.lat}&lon=${params.lon}&format=jsonv2&zoom=10`;
  // try {
  //   const res = await axios.get(endPoint);
  //   return res;
  // } catch (error) {
  //   return error;
  // }
};
