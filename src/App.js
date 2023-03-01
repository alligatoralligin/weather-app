import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import WeatherDisplay from "./weatherRender";
import ResponsiveAppBar from "./navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomePage from "./homePage";
import LoadingPage from "./loadingPage";
import { backgroundImages } from "./bgImgImport";

const cities = [
  "Tokyo",
  "Jakarta",
  "Los Angeles",
  "Toronto",
  "Istanbul",
  "Paris",
  "Houston",
  "Busan",
  "Hanoi",
];

const isoDate = new Date().toISOString().split("T")[0];
var myDate = new Date();
myDate.setDate(myDate.getDate() + parseInt(7));
var newIsoDate = myDate.toISOString().split("T")[0];

function App() {
  let fullweatherData = [];
  let fullData = [];
  const [geoCode, setgeoCode] = useState("");
  const [geoCodeLoaded, setgeoCodeLoaded] = useState(false);
  const [weekWeather, setweekWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getGeocode(city) {
      setIsLoading(true);
      const geocodeObject = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      fullData.push({
        name: geocodeObject.data.results[0].name,
        lat: geocodeObject.data.results[0].latitude,
        long: geocodeObject.data.results[0].longitude,
      });
      setgeoCode((geoCode) => ({
        ...geoCode,
        ...fullData,
      }));
    }
    const getGeoCode = async () => {
      for (let i = 0; i < cities.length; i++) {
        await getGeocode(cities[i]);
      }
      setgeoCodeLoaded(true);
    };
    getGeoCode();
  }, []);

  useEffect(() => {
    async function getWeeklyWeather(lat, long, cityName) {
      const weekObject = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&start_date=${isoDate}&end_date=${newIsoDate}`
      );
      fullweatherData.push({
        name: cityName,
        time: weekObject.data.daily.time,
        max_temp: weekObject.data.daily.temperature_2m_max,
        min_temp: weekObject.data.daily.temperature_2m_min,
        weather_code: weekObject.data.daily.weathercode,
        current_weather: weekObject.data.current_weather.temperature,
        last_updated: weekObject.data.current_weather.time,
        current_weathercode: weekObject.data.current_weather.weathercode,
        current_winddirection: weekObject.data.current_weather.winddirection,
        current_windspeed: weekObject.data.current_weather.windspeed,
      });
    }

    const WeeklyWeatherLoop = async () => {
      for (let i = 0; i < cities.length; i++) {
        await getWeeklyWeather(
          geoCode[i].lat,
          geoCode[i].long,
          geoCode[i].name
        );
      }
      setweekWeather((weekWeather) => [...weekWeather, ...fullweatherData]);
      setIsLoading(false);
    };
    if (geoCodeLoaded === true) {
      WeeklyWeatherLoop();
    }
  }, [geoCode]);

  let renderRoutes;
  if (geoCode !== "" && weekWeather !== "") {
    /*if geoCode and weekWeather are not empty*/
    renderRoutes = [
      /* renderRoutes are avaiable to prevent having no data*/
      <Route path="/" element={<HomePage />}></Route>,
      <Route path="/weather-app/" element={<HomePage />}></Route>,
      <Route
        path="/Tokyo"
        element={
          <WeatherDisplay
            cityData={weekWeather[0]}
            cityName={geoCode[0].name}
            cityImg={backgroundImages[0]}
          />
        }
      />,
      <Route
        path="/Batavia"
        element={
          <WeatherDisplay
            cityData={weekWeather[1]}
            cityName={geoCode[1].name}
            cityImg={backgroundImages[1]}
          />
        }
      />,
      <Route
        path="/Los Angeles"
        element={
          <WeatherDisplay
            cityData={weekWeather[2]}
            cityName={geoCode[2].name}
            cityImg={backgroundImages[2]}
          />
        }
      />,
      <Route
        path="/Toronto"
        element={
          <WeatherDisplay
            cityData={weekWeather[3]}
            cityName={geoCode[3].name}
            cityImg={backgroundImages[3]}
          />
        }
      />,
      <Route
        path="/Istanbul"
        element={
          <WeatherDisplay
            cityData={weekWeather[4]}
            cityName={geoCode[4].name}
            cityImg={backgroundImages[4]}
          />
        }
      />,
      <Route
        path="/Paris"
        element={
          <WeatherDisplay
            cityData={weekWeather[5]}
            cityName={geoCode[5].name}
            cityImg={backgroundImages[5]}
          />
        }
      />,
      <Route
        path="/Houston"
        element={
          <WeatherDisplay
            cityData={weekWeather[6]}
            cityName={geoCode[6].name}
            cityImg={backgroundImages[6]}
          />
        }
      />,
      <Route
        path="/Busan"
        element={
          <WeatherDisplay
            cityData={weekWeather[7]}
            cityName={geoCode[7].name}
            cityImg={backgroundImages[7]}
          />
        }
      />,
      <Route
        path="/Hanoi"
        element={
          <WeatherDisplay
            cityData={weekWeather[8]}
            cityName={geoCode[8].name}
            cityImg={backgroundImages[8]}
          />
        }
      />,
    ];
  }
  let loadingScreen;
  if (isLoading) {
    loadingScreen = <LoadingPage></LoadingPage>;
  }
  return (
    <>
      <ResponsiveAppBar />
      {loadingScreen}
      <Routes>{renderRoutes}</Routes>
    </>
  );
}

export default App;
