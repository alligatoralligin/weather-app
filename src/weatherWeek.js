import React from "react";
import SingleweatherWeek from "./singleWeatherWeek";
import Grid from "@mui/material/Typography";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let renderList = [];

function WeatherWeek(props) {
  const maxtempArray = props.weekData.max_temp;
  const ArrayLength = maxtempArray.length;
  const currentCity = props.cityName;

  if (props.cityName !== props.weekData.name) {
    renderList = [];
    for (let i = 0; i < ArrayLength; i++) {
      renderList.push(
        <Grid item="true" component={"div"} width="100%">
          <SingleweatherWeek
            time={props.weekData.time[i]}
            maxTemp={props.weekData.max_temp[i]}
            minTemp={props.weekData.min_temp[i]}
            weatherCode={props.weekData.weather_code[i]}
          />
        </Grid>
      );
    }
  }

  console.log(props.weekData[0]);

  return (
    <div>
      <p>Weekly Weather</p>
      <Grid
        container="true"
        component={"div"}
        display="inline-flex"
        width="85%"
        flex-wrap="wrap"
      >
        {renderList}
      </Grid>
    </div>
  );
}

export default WeatherWeek;
