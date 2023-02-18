import React, { useEffect, useRef, useState } from "react";
import WeatherWeek from "./weatherWeek";
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

const date = new Date();

function WeatherDisplay() {
  const [weatherData, setweatherData] = useState({});
  const [weekWeather, setweekWeather] = useState("");
  const [geoCode, setgeoCode] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //   Object
  // config
  // :
  // {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
  // data
  // :
  // current
  // :
  // {last_updated_epoch: 1676598300, last_updated: '2023-02-17 02:45', temp_c: 12, temp_f: 53.6, is_day: 0, …}
  // location
  // :
  // {name: 'Paris', region: 'Ile-de-France', country: 'France', lat: 48.87, lon: 2.33, …}
  // [[Prototype]]
  // :

  useEffect(() => {
    async function getGeocode(city) {
      const geocodeObject = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      setgeoCode((geoCode) => ({
        ...geoCode,
        name: geocodeObject.data.results[0].name,
        lat: geocodeObject.data.results[0].latitude,
        long: geocodeObject.data.results[0].longitude,
      }));
      console.log(geocodeObject);
      console.log("getgeoCode is running");
    }
    getGeocode("Toronto");
  }, []);

  useEffect(() => {
    // async function getWeatherData() {
    //   const weatherObject = await axios.get(
    //     `https://api.open-meteo.com/v1/forecast?latitude=${geoCode.lat}&longitude=${geoCode.long}&hourly=temperature_2m&current_weather=true`
    //   );
    //   console.log(weatherObject);
    //   setweatherData((weatherData) => ({
    //     ...weatherData,
    //     temperature: weatherObject.data.current_weather.temperature,
    //     weathercode: weatherObject.data.current_weather.weathercode,
    //     winddirection: weatherObject.data.current_weather.winddirection,
    //   }));
    //   console.log("get WeatherData is running");
    // }

    async function getWeeklyWeather() {
      const weekObject = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${geoCode.lat}&longitude=${geoCode.long}&daily=weathercode,temperature_2m_max&current_weather=true&timezone=auto&start_date=2023-02-17&end_date=2023-02-23`
      );
      setweekWeather((weekWeather) => [
        ...weekWeather,
        {
          time: weekObject.data.daily.time,
          max_temp: weekObject.data.daily.temperature_2m_max,
        },
      ]);
      console.log("here is weekObject");
      console.log(weekObject.data.daily.time);
    }
    // getWeatherData();
    getWeeklyWeather();
  }, [geoCode]);
  let weatherWeekRender;
  if (weekWeather !== "") {
    weatherWeekRender = <WeatherWeek weekData={weekWeather} />;
  }
  return (
    <div>
      <p>
        name:{geoCode.name} lat:{geoCode.lat} long:{geoCode.long}
      </p>
      {weatherWeekRender}
    </div>
  );
}

export default WeatherDisplay;
