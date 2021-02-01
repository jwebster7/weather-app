export const initialState = {
  weather: {
    main: "",
    description: "",
    icon: ""
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
  forecast: [
    {
      dt: 0,
      weather: {
        main: "",
        description: "",
        icon: ""
      },
      current: {
        temp: "",
        temp_max: "",
        temp_min: "",
        feels_like: "",
        speed: "",
        humidity: ""
      }
    }
  ],
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
