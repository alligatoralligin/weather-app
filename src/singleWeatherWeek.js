import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { renderImg, renderWeatherImg } from "./renderImgLogic";

function SingleweatherWeek(props) {
  renderImg(props.weatherCode);

  const card = (
    <React.Fragment>
      <CardContent component={"span"}>
        {renderWeatherImg}
        <Typography component={"span"} variant="body2">
          Time:{props.time}
          Max°C:{props.maxTemp}
          Min°C:{props.minTemp}
          <br />
          WMO:{props.weatherCode}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 275, height: 260 }}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          borderRadius: 2.3,
          border: 2,
        }}
      >
        {card}
      </Card>
    </Box>
  );
}

export default SingleweatherWeek;
