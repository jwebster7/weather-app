import axios from "axios";

// export const getWeatherData = async (latitude, longitude) => {
//   const params = {
//     lat: latitude,
//     lon: longitude,
//     units: "imperial"
//   };
//   try {
//     // console.log("In getWeatherData");
//     const res = await axios.get("/weather", {
//       params: params
//     });
//     // console.log(res);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// export const getCityAndState = async (latitude, longitude) => {
//   const params = {
//     lat: latitude,
//     lon: longitude
//   };

//   try {
//     // console.log("In getCityAndState");
//     const res = await axios.get("/reverse-geocode", {
//       params: params
//     });
//     // console.log(res);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

export const getWeatherDataByCoords = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
    units: "imperial"
  };
  try {
    // console.log("In getWeatherData");
    const res = axios.get("/weather-lat-lon", {
      params: params
    });
    // console.log(res);
    return res;
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
    // console.log("In getWeatherData");
    const res = axios.get("/weather-city-state", {
      params: params
    });
    // console.log(res);
    return res;
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
    // console.log("In getCityAndState");
    const res = axios.get("/reverse-geocode", {
      params: params
    });
    // console.log(res);
    return res;
  } catch (error) {
    return error;
  }
};
