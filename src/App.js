import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import WeatherDisplay from "./weatherRender";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DataFetch from "./dataFetch";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGeocode(city) {
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
    };
    if (geoCodeLoaded === true) {
      WeeklyWeatherLoop();
    }
  }, [geoCode]);

  let renderRoutes;
  if (geoCode !== "" && weekWeather !== "") {
    renderRoutes = [
      <Route
        path="/Tokyo"
        element={
          <WeatherDisplay
            cityData={weekWeather[0]}
            cityName={geoCode[0].name}
          />
        }
      />,
      <Route
        path="/Batavia"
        element={
          <WeatherDisplay
            cityData={weekWeather[1]}
            cityName={geoCode[1].name}
          />
        }
      />,
      <Route
        path="/LosAngeles"
        element={
          <WeatherDisplay
            cityData={weekWeather[2]}
            cityName={geoCode[2].name}
          />
        }
      />,
      <Route
        path="/Toronto"
        element={
          <WeatherDisplay
            cityData={weekWeather[3]}
            cityName={geoCode[3].name}
          />
        }
      />,
    ];
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Tokyo">Tokyo</Link>
          </li>
          <li>
            <Link to="/Batavia">Batavia</Link>
          </li>
          <li>
            <Link to="/LosAngeles">Los Angeles</Link>
          </li>
          <li>
            <Link to="/Toronto">Toronto</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={"Hello this is homepage"}></Route>
        {renderRoutes}
      </Routes>
    </>
  );
}

export default App;
