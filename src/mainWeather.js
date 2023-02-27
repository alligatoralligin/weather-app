import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { renderImg, imgSrc, imgAlt } from "./renderImgLogic";

function MainWeatherComponent(props) {
  renderImg(props.weekData.current_weathercode);
  console.log("Main Weather Component", imgSrc);
  console.log(props.weekData.current_weathercode);
  return (
    <Box
      sx={{
        p: 2,
        width: "90vw",
        height: "45vh",
        display: "inline-block",
      }}
    >
      <Card
        sx={{
          objectFit: "contain",
          height: "45vh",
          width: "90vw",
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        <img src={imgSrc} alt={imgAlt} style={{ maxHeight: 225 }}></img>
        <Typography variant="h3" gutterBottom>
          {props.weekData.current_weather}°C ||{""}
          {Math.round(
            ((props.weekData.current_weather * 1.8 + 32) * 100) / 100
          )}
          °F
        </Typography>
        <Typography variant="p">
          last update:{props.weekData.last_updated}
        </Typography>

        <p>current wind direction:{props.weekData.current_winddirection}</p>
      </Card>

      {/* last_updated: weekObject.data.current_weather.time, current_weathercode:
      weekObject.data.current_weather.weathercode, current_winddirection:
      weekObject.data.current_weather.winddirection, */}
    </Box>
  );
}

export default MainWeatherComponent;
