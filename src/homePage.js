import React from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import mountainImg from "./img/background-images/mountainImg.jpg";
function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `url(${mountainImg})`,
        backgroundSize: "cover",
        justifyContent: "center",
      }}
    >
      <Box sx={{ height: 450, width: 450, alignSelf: "center" }}>
        <Typography variant="h2" color={"whitesmoke"}>
          Weather App
        </Typography>
        <Typography variant="h5" color={"whitesmoke"}>
          View the weather of various cities around the world!
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
