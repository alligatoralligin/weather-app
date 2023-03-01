import React from "react";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import fallingStars from "./img/svg/falling-stars.svg";
import beanie from "./img/svg/beanie.svg";
import dustWind from "./img/svg/dust-wind.svg";
import rainbowClear from "./img/svg/rainbow-clear.svg";
import umbrellaWind from "./img/svg/umbrella-wind.svg";
import haze from "./img/svg/haze.svg";
import overcast from "./img/svg/overcast.svg";

function randomIcon() {
  let randomIcons = [
    fallingStars,
    beanie,
    dustWind,
    rainbowClear,
    umbrellaWind,
    overcast,
    haze,
  ];

  return randomIcons[Math.floor(Math.random() * randomIcons.length)];
}
function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "90vh",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "25%", alignSelf: "center" }}>
        <img src={randomIcon()} alt="falling-star"></img>
        <LinearProgress />
      </Box>
    </Box>
  );
}

export default LoadingPage;
