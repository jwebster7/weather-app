export const formatCurrentWeatherData = (data) => {
  const { temp, humidity, temp_max, temp_min, feels_like } = data?.main;
  const { speed } = data?.wind;
  const current = { temp, humidity, temp_max, temp_min, feels_like, speed };
  return current;
};

export const getLocalTimeData = (data) => {
  const { timezone } = data;
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const date = new Date(utc + 1000 * timezone).toLocaleTimeString();
  return date;
};
