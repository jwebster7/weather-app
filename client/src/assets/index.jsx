import BrokenClouds from "./condition-icons/broken-clouds.png";
import ClearSky from "./condition-icons/clear-sky.png";
import FewClouds from "./condition-icons/few-clouds.png";
import Mist from "./condition-icons/mist.png";
import Moon from "./condition-icons/moon.png";
import Rain from "./condition-icons/rain.png";
import ScatteredClouds from "./condition-icons/scattered-clouds.png";
import ShowerRain from "./condition-icons/shower-rain.png";
import Snow from "./condition-icons/snow.png";
import ThunderStorm from "./condition-icons/thunderstorm.png";

export const iconMap = {
  "01d": {
    status: "Clear Sky",
    icon: ClearSky
  },
  "02d": {
    status: "Few Clouds",
    icon: FewClouds
  },
  "03d": {
    status: "Scattered Clouds",
    icon: ScatteredClouds
  },
  "04d": {
    status: "Broken Clouds",
    icon: BrokenClouds
  },
  "09d": {
    status: "Heavy Rain",
    icon: ShowerRain
  },
  "10d": {
    status: "Rain",
    icon: Rain
  },
  "11d": {
    status: "ThundesStorm",
    icon: ThunderStorm
  },
  "13d": {
    status: "Snow",
    icon: Snow
  },
  "50d": {
    status: "Mist",
    icon: Mist
  },
  "01n": {
    status: "Moon",
    icon: Moon
  },
  "02n": {
    status: "Few Clouds",
    icon: FewClouds
  },
  "03n": {
    status: "Scattered Clouds",
    icon: ScatteredClouds
  },
  "04n": {
    status: "Broken Clouds",
    icon: BrokenClouds
  },
  "09n": {
    status: "Heavy Rain",
    icon: ShowerRain
  },
  "10n": {
    status: "Rain",
    icon: Rain
  },
  "11n": {
    status: "Thunderstorm",
    icon: ThunderStorm
  },
  "13n": {
    status: "Snow",
    icon: Snow
  },
  "50n": {
    status: "Mist",
    icon: Mist
  }
};

/**
 * @returns {Object} An object with a status and a reference to a PNG icon.
 * @param {string} icon The icon ID from Open Weather.
 */
export const iconReducer = (icon) => {
  if (icon in iconMap) {
    return iconMap[icon];
  } else {
    return iconMap["01d"];
  }
};
