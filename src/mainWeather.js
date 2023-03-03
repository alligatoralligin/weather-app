import { Box, Card, Typography, Container } from "@mui/material";
import React from "react";
import { renderImg, imgSrc, imgAlt } from "./renderImgLogic";
import { styled } from "@mui/material/styles";

const MediaQuery = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "inline-flex",
    overflow: "auto",
  },
  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
    overflow: "auto",
  },
  [theme.breakpoints.down("lg")]: {
    display: "inline-flex",
    overflow: "auto",
  },
}));

function MainWeatherComponent(props) {
  renderImg(props.weekData.current_weathercode);
  console.log("Main Weather Component", imgSrc);
  console.log(props.weekData.current_weathercode);
  return (
    <Box
      sx={{
        p: 2,
        width: "30vw",
        height: "45vh",
        display: "inline-block",
      }}
    >
      <MediaQuery>
        <Card
          sx={{
            objectFit: "contain",
            height: "45vh",
            width: "100%",
            alignSelf: "center",
            overflow: "auto",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <img src={imgSrc} alt={imgAlt} style={{ maxHeight: 225 }}></img>

          <Typography variant="h3" gutterBottom fontWeight={600}>
            {props.weekData.current_weather}°C ||{""}
            {Math.round(
              ((props.weekData.current_weather * 1.8 + 32) * 100) / 100
            )}
            °F
          </Typography>

          <Typography variant="p" fontWeight={600}>
            Last Update:{props.weekData.last_updated}
            <br></br>
            current wind direction:{props.weekData.current_winddirection}°
          </Typography>
        </Card>
      </MediaQuery>

      {/* last_updated: weekObject.data.current_weather.time, current_weathercode:
      weekObject.data.current_weather.weathercode, current_winddirection:
      weekObject.data.current_weather.winddirection, */}
    </Box>
  );
}

export default MainWeatherComponent;
