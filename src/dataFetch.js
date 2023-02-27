import React, { useEffect, useState } from "react";
import axios from "axios";

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

function DataFetch() {
  let fullData = [];
  let fullweatherData = [];
  // const [weatherData, setweatherData] = useState({});
  const [weekWeather, setweekWeather] = useState("");
  const [geoCode, setgeoCode] = useState("");
  const [geoCodeComplete, setGeoCodeComplete] = useState(false);
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
      console.log(fullData);
      console.log("getgeoCode is running");
    }

    const geoLoop = async () => {
      for (let i = 0; i < cities.length; i++) {
        await getGeocode(cities[i]);
      }
      setGeoCodeComplete(true);
      console.log("set to true");
    };
    geoLoop();
  }, []);
  useEffect(() => {
    async function getWeeklyWeather(lat, long) {
      const weekObject = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&start_date=${isoDate}&end_date=${newIsoDate}`
      );
      fullweatherData.push({
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
    console.log(fullweatherData);
    const WeeklyWeatherLoop = async () => {
      for (let i = 0; i < cities.length; i++) {
        await getWeeklyWeather(geoCode[i].lat, geoCode[i].long);
      }
      setweekWeather((weekWeather) => [...weekWeather, ...fullweatherData]);
    };
    if (geoCodeComplete === true) {
      WeeklyWeatherLoop();
    }
  }, [geoCode]);
  let renderCityName;
  if (geoCode != "") {
    renderCityName = <div>{geoCode[0].name}</div>;
  }
  return <div>{renderCityName}</div>;
}
export default DataFetch;
