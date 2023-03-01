import React from "react";
import WeatherWeek from "./weatherWeek";
import MainWeatherComponent from "./mainWeather";
import { Typography } from "@mui/material";

function WeatherDisplay(props) {
  // getWeatherData();

  // let weatherWeekRender;
  // let mainWeatherRender;
  // if (weekWeather !== "") {
  //   weatherWeekRender = <WeatherWeek weekData={weekWeather} />;
  //   mainWeatherRender = <MainWeatherComponent weekData={weekWeather} />;
  // }
  let renderMainWeather;
  let renderWeatherWeek;
  if (props.cityData) {
    renderMainWeather = <MainWeatherComponent weekData={props.cityData} />;
  }
  if (props.cityData) {
    renderWeatherWeek = (
      <WeatherWeek weekData={props.cityData} currentCity={props.cityName} />
    );
  }
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundImage: `url(${props.cityImg})`,
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h3">{props.cityName}</Typography>
      <br></br>
      {renderMainWeather}
      {renderWeatherWeek}
    </div>
  );
}

export default WeatherDisplay;
