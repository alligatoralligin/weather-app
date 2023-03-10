import React from "react";
import SingleweatherWeek from "./singleWeatherWeek";
import Grid from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

const MediaQuery = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    overflow: "auto",
  },
  [theme.breakpoints.down("md")]: {
    overflow: "auto",
  },
  [theme.breakpoints.down("lg")]: {
    overflow: "auto",
  },
}));

function WeatherWeek(props) {
  const maxtempArray = props.weekData.max_temp;
  const ArrayLength = maxtempArray.length;
  const currentCity = props.cityName;
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function getDayOfWeek(dateString) {
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName;
  }

  if (props.cityName !== props.weekData.name) {
    renderList = [];
    for (let i = 0; i < ArrayLength; i++) {
      renderList.push(
        <Grid item="true" component={"div"} width="100%">
          <SingleweatherWeek
            dayofWeek={getDayOfWeek(props.weekData.time[i])}
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
      <Typography variant="h6">Daily Weather</Typography>
      <MediaQuery>
        <Grid
          container="true"
          component={"div"}
          display="inline-flex"
          width="85vh"
          flex-wrap="wrap"
        >
          {renderList}
        </Grid>
      </MediaQuery>
    </div>
  );
}

export default WeatherWeek;
