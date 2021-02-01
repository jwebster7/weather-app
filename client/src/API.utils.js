export const formatCurrentWeatherData = (data) => {
  const { temp, humidity, temp_max, temp_min, feels_like } = data?.main;
  const { speed } = data?.wind;
  const current = { temp, humidity, temp_max, temp_min, feels_like, speed };
  return current;
};

export const formatWeatherStatusData = (data) => {
  const { weather } = data;
  const status = weather[0];
  const weatherStatus = {
    id: status?.id,
    main: status?.main,
    description: status?.description,
    icon: status?.icon
  };
  return weatherStatus;
};

export const getLocalTimeData = (data) => {
  const { timezone } = data;
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const date = new Date(utc + 1000 * timezone).toLocaleTimeString(
    navigator.language,
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );
  return date;
};

export const formatCurrentWeatherForecast = (data) => {
  const forecast = data?.map((day) => {
    const status = formatWeatherStatusData(day);
    return {
      dt: day?.dt,
      timezone: data?.timezone,
      timezoneOffset: data?.timezone_offset,
      weather: {
        main: status?.main,
        description: status?.description,
        icon: status?.icon
      },
      current: {
        temp: day?.temp?.day,
        temp_max: day?.temp?.max,
        temp_min: day?.temp?.min,
        feels_like: day?.feels_like?.day,
        speed: day?.wind_speed,
        humidity: day?.humidity
      }
    };
  });
  return forecast;
};
