import React, { FC } from "react";
import classes from "./ForecastCurrent.module.scss";
import Cloudy from "../WeatherIcons/Cloudy/Cloudy";
import Sunny from "../WeatherIcons/Sunny/Sunny";

const ForecastCurrent: FC = () => {
  return (
    <div className={classes.currentWrapper}>
      <div className={classes.currentStroke}></div>
      <div className={classes.currentGlimmer}></div>
      <div className={classes.current}>
        <div className={classes.currentInner}>
          <div className={classes.currentDetails}>
            <Cloudy>
              <Sunny />
            </Cloudy>
            <div className={classes.currentWeatherInfo}>
              <span className={classes.currentTemperature}>18</span>
              <span className={classes.currentWeather}>Cloudy</span>
            </div>
          </div>
          <div className={classes.currentLocationDate}>
            <span className={classes.currentDate}>Today</span>
            <span className={classes.currentLocation}>Lucknow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCurrent;
