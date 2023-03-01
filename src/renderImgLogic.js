import React from "react";
import clearDay from "./img/svg/clear-day.svg";
import overcast from "./img/svg/overcast.svg";
import drizzle from "./img/svg/drizzle.svg";
import rain from "./img/svg/rain.svg";
import extremeSleet from "./img/svg/extreme-day-sleet.svg";
import extremeSnow from "./img/svg/extreme-day-snow.svg";
import extremeHail from "./img/svg/extreme-hail.svg";
import fog from "./img/svg/fog.svg";
import snow from "./img/svg/snow.svg";
import thunderstorms from "./img/svg/thunderstorms.svg";
import thunderstormsSnowEx from "./img/svg/thunderstorms-extreme-snow.svg";

function isBetween(number, min, max) {
  return number >= min && number <= max;
}
export let renderWeatherImg;
export let imgSrc;
export let imgAlt;
export function renderImg(propsweatherCode) {
  if (isBetween(propsweatherCode, 0, 0) === true) {
    renderWeatherImg = <img src={clearDay} alt="Clear sky"></img>;
    imgSrc = clearDay;
    imgAlt = "Clear sky";
  }
  if (isBetween(propsweatherCode, 1, 3) === true) {
    renderWeatherImg = (
      <img src={overcast} alt="Mainly clear, partly cloudy, and overcast"></img>
    );
    imgSrc = overcast;
    imgAlt = "Mainly clear, partly cloudy, and overcast";
  }
  if (isBetween(propsweatherCode, 45, 48) === true) {
    renderWeatherImg = <img src={fog} alt="Fog and depositing rime fog"></img>;
    imgSrc = fog;
    imgAlt = "Fog and depositing rime fog";
  }

  if (isBetween(propsweatherCode, 51, 55) === true) {
    renderWeatherImg = (
      <img
        src={drizzle}
        alt="Drizzle: Light, moderate, and dense intensity"
      ></img>
    );
    imgSrc = drizzle;
    imgAlt = "Drizzle: Light, moderate, and dense intensity";
  }
  if (isBetween(propsweatherCode, 56, 57) === true) {
    renderWeatherImg = (
      <img
        src={clearDay}
        alt="Freezing Drizzle: Light and dense intensity"
      ></img>
    );
    imgSrc = clearDay;
    imgAlt = "Freezing Drizzle: Light and dense intensity";
  }
  if (isBetween(propsweatherCode, 61, 65) === true) {
    renderWeatherImg = (
      <img src={rain} alt="Rain: Slight, moderate and heavy intensity"></img>
    );
    imgSrc = rain;
    imgAlt = "Rain: Slight, moderate and heavy intensity";
  }
  if (isBetween(propsweatherCode, 66, 67) === true) {
    renderWeatherImg = (
      <img
        src={extremeSleet}
        alt="Freezing Rain: Light and heavy intensity"
      ></img>
    );
    imgSrc = extremeSleet;
    imgAlt = "Freezing Rain: Light and heavy intensity";
  }
  if (isBetween(propsweatherCode, 71, 75) === true) {
    renderWeatherImg = (
      <img
        src={snow}
        alt="Snow fall: Slight, moderate, and heavy intensity"
      ></img>
    );
    imgSrc = snow;
    imgAlt = "Snow fall: Slight, moderate, and heavy intensity";
  }
  if (isBetween(propsweatherCode, 80, 82) === true) {
    renderWeatherImg = <img src={extremeHail} alt="Snow Grains"></img>;
    imgSrc = extremeHail;
    imgAlt = "Snow Grains";
  }
  if (isBetween(propsweatherCode, 77, 77) === true) {
    renderWeatherImg = (
      <img
        src={clearDay}
        alt="Rain showers: Slight, moderate, and violent"
      ></img>
    );
    imgSrc = clearDay;
    imgAlt = "Rain showers: Slight, moderate, and violent";
  }
  if (isBetween(propsweatherCode, 85, 86) === true) {
    renderWeatherImg = (
      <img src={extremeSnow} alt="Snow showers slight and heavy"></img>
    );
    imgSrc = extremeSnow;
    imgAlt = "Snow showers slight and heavy";
  }
  if (isBetween(propsweatherCode, 95, 95) === true) {
    renderWeatherImg = (
      <img src={thunderstorms} alt="Thunderstorm: Slight or moderate"></img>
    );
    imgSrc = thunderstorms;
    imgAlt = "Thunderstorm: Slight or moderate";
  }
  if (isBetween(propsweatherCode, 96, 99) === true) {
    renderWeatherImg = (
      <img
        src={thunderstormsSnowEx}
        alt="Thunderstorm with slight and heavy hail"
      ></img>
    );
    imgSrc = thunderstormsSnowEx;
    imgAlt = "Thunderstorm with slight and heavy hail";
  }
}
