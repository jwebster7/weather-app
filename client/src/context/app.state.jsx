export const initialState = {
  weather: {
    current: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      speed: 0
    }
  },
  current: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    speed: 0
  },
  dateTime: "",
  address: {
    city: "",
    state: "",
    county: ""
  },
  coordinates: {
    latitude: "",
    longitude: ""
  },
  geolocationEnabled: false
};
