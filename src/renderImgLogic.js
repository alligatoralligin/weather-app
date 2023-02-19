import clearSkyIcon from "./img/clear-sky-icon.png";
import clearDay from "./img/svg/clear-day.svg";
import overcast from "./img/svg/overcast.svg";
import drizzle from "./img/svg/drizzle.svg";
import rain from "./img/svg/rain.svg";
import extremeSleet from "./img/svg/extreme-day-sleet.svg";
import extremeSnow from "./img/svg/extreme-day-snow.svg";
import snow from "./img/svg/snow.svg";

function isBetween(number, min, max) {
  return number >= min && number <= max;
}
export let renderWeatherImg;
export function renderImg(propsweatherCode) {
  if (isBetween(propsweatherCode, 0, 0) === true) {
    renderWeatherImg = <img src={clearDay} alt="Clear sky"></img>;
  }
  if (isBetween(propsweatherCode, 1, 3) === true) {
    renderWeatherImg = (
      <img src={overcast} alt="Mainly clear, partly cloudy, and overcast"></img>
    );
  }
  if (isBetween(propsweatherCode, 45, 48) === true) {
    renderWeatherImg = (
      <img src={overcast} alt="	Fog and depositing rime fog"></img>
    );
  }
  if (isBetween(propsweatherCode, 51, 55) === true) {
    renderWeatherImg = (
      <img
        src={drizzle}
        alt="Drizzle: Light, moderate, and dense intensity"
      ></img>
    );
  }
  if (isBetween(propsweatherCode, 56, 57) === true) {
    renderWeatherImg = (
      <img
        src={clearDay}
        alt="	Freezing Drizzle: Light and dense intensity"
      ></img>
    );
  }
  if (isBetween(propsweatherCode, 61, 65) === true) {
    renderWeatherImg = (
      <img src={rain} alt="Rain: Slight, moderate and heavy intensity"></img>
    );
  }
  if (isBetween(propsweatherCode, 66, 67) === true) {
    renderWeatherImg = (
      <img
        src={extremeSleet}
        alt="	Freezing Rain: Light and heavy intensity"
      ></img>
    );
  }
  if (isBetween(propsweatherCode, 71, 75) === true) {
    renderWeatherImg = (
      <img
        src={snow}
        alt="Snow fall: Slight, moderate, and heavy intensity"
      ></img>
    );
  }
  if (isBetween(propsweatherCode, 80, 82) === true) {
    renderWeatherImg = <img src={clearDay} alt="Snow Grains"></img>;
  }
  if (isBetween(propsweatherCode, 77, 77) === true) {
    renderWeatherImg = (
      <img
        src={clearDay}
        alt="Rain showers: Slight, moderate, and violent"
      ></img>
    );
  }
  if (isBetween(propsweatherCode, 85, 86) === true) {
    renderWeatherImg = (
      <img src={clearDay} alt="Snow showers slight and heavy"></img>
    );
  }
  if (isBetween(propsweatherCode, 95, 95) === true) {
    renderWeatherImg = (
      <img src={clearDay} alt="	Thunderstorm: Slight or moderate"></img>
    );
  }
  if (isBetween(propsweatherCode, 96, 99) === true) {
    renderWeatherImg = (
      <img src={clearDay} alt="	Thunderstorm with slight and heavy hail"></img>
    );
  }
}
