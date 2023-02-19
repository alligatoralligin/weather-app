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

const renderList = [];

function WeatherWeek(props) {
  const maxtempArray = props.weekData[0].max_temp;
  const ArrayLength = maxtempArray.length;

  for (let i = 0; i < ArrayLength; i++) {
    renderList.push(
      <Grid item="true" component={"div"} width="100%">
        <SingleweatherWeek
          time={props.weekData[0].time[i]}
          maxTemp={props.weekData[0].max_temp[i]}
          minTemp={props.weekData[0].min_temp[i]}
          weatherCode={props.weekData[0].weather_code[i]}
        />
      </Grid>
    );
  }
  console.log(props.weekData[0]);
  return (
    <div>
      <p>Weekly Weather</p>
      <Grid
        container="true"
        component={"div"}
        display="inline-flex"
        width="100%"
        flex-wrap="wrap"
      >
        {renderList}
      </Grid>
    </div>
  );
}

export default WeatherWeek;
