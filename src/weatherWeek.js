import React from "react";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const renderList = [];

function WeatherWeek(props) {
  const maxtempArray = props.weekData[0].max_temp;
  const ArrayLength = maxtempArray.length;

  for (let i = 0; i <= ArrayLength; i++) {
    renderList.push(
      <p>
        time:{props.weekData[0].time[i]}
        max_temp:{props.weekData[0].max_temp[i]}
      </p>
    );
  }
  console.log(props.weekData[0]);
  return (
    <div>
      <p>Hello from WeatherWeek</p>
      {renderList}
    </div>
  );
}

export default WeatherWeek;
