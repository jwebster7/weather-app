import axios from "axios";

// export const getCurrentPosition = async () => {
//   const geo = navigator.geolocation;
//   geo.getCurrentPosition(
//     (position) => {
//       // setLatitude(position.coords.latitude);
//       // setLongitude(position.coords.longitude);
//       setPosition({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       });
//       setLoading(false);
//     },
//     (err) => {
//       alert("Unable to use location. Please search by city and state.");
//       console.log(err);
//     },
//     () => ({
//       enableHighAccuracy: true,
//       timeout: 5000
//     })
//   );
// }

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
}

export const getCityAndState = async (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude
  };
  try {
    const res = await axios.get('/reverse-geocode', {
      params: params
    });
    return res;
  } catch (error) {
    return error;
  }
}