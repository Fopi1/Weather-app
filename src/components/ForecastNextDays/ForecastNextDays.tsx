import React from "react";
import classes from "./ForecastNextDays.module.scss";
import Cloudy from "@WeatherIcons/Cloudy/Cloudy";
import Sunny from "@WeatherIcons/Sunny/Sunny";

const ForecastNextDays = () => {
  return (
    <div className={classes.nextDays}>
      <div className={classes.nextDaysInner}>
        <div className={classes.nextDaysDetails}>
          <Cloudy>
            <Sunny />
          </Cloudy>
        </div>
        <div className={classes.nextDaysWeatherInfo}>
          <div className={classes.nextDaysTemperature}>17</div>
          <div className={classes.nextDaysWeather}>Cloudy</div>
        </div>
        <div className={classes.nextDaysDate}>27 May</div>
      </div>
    </div>
  );
};

export default ForecastNextDays;
