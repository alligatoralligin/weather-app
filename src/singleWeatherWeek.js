import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { renderImg, renderWeatherImg } from "./renderImgLogic";

const MediaQuery = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "75%",
  },
  [theme.breakpoints.down("md")]: {
    height: "75%",
  },
  [theme.breakpoints.down("lg")]: {
    height: "75%",
  },
}));

function SingleweatherWeek(props) {
  renderImg(props.weatherCode);
  //   returns renderWeatherImg content based on props.weatherCode value

  const card = (
    <React.Fragment>
      <CardContent component={"span"}>
        {renderWeatherImg}
        <Typography component={"span"} variant="body2">
          Time:{props.time}
          <br></br>
          Max°C:{props.maxTemp}
          <br></br>
          Min°C:{props.minTemp}
          <br />
          WMO:{props.weatherCode}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 275, height: 270, m: 0.4 }}>
      <MediaQuery>
        <Card
          variant="outlined"
          sx={{
            height: "100%",
            borderRadius: 2.3,
            border: 2,
            backgroundColor: "rgba(137,196,244,0.65)",
          }}
        >
          {card}
        </Card>
      </MediaQuery>
    </Box>
  );
}

export default SingleweatherWeek;
