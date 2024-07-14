import React from "react";
import Forecast from "../../components/Forecast/Forecast";
import LocationBar from "../../components/LocationBar/LocationBar";
import classes from "./ForecastPage.module.scss";

const ForecastPage = () => {
  return (
    <div className={classes.forecastContainer}>
      <LocationBar />
      <Forecast />
    </div>
  );
};

export default ForecastPage;
