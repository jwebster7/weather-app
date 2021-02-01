import FeverIcon from "../../assets/weather-icons/fever.png";
import HumidityIcon from "../../assets/weather-icons/humidity.png";
import ThermometerIcon from "../../assets/weather-icons/thermometer.png";
import ThermometerUpArrowIcon from "../../assets/weather-icons/thermometer-up-arrow.png";
import ThermometerDownArrowIcon from "../../assets/weather-icons/thermometer-down-arrow.png";
import WindIcon from "../../assets/weather-icons/wind.png";

export const keyToIconMap = {
  temp: ThermometerIcon,
  feels_like: FeverIcon,
  temp_max: ThermometerUpArrowIcon,
  temp_min: ThermometerDownArrowIcon,
  speed: WindIcon,
  humidity: HumidityIcon
};

export const keyToTextMap = {
  temp: "Temperature",
  feels_like: "Feels Like",
  temp_max: "High",
  temp_min: "Low",
  speed: "Speed",
  humidity: "Humidity"
};

export const keyToUnitMap = {
  temp: "F",
  feels_like: "F",
  temp_max: "F",
  temp_min: "F",
  speed: "m/h",
  humidity: "%"
};
