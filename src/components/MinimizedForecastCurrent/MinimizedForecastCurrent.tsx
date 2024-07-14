import React from "react";
import Sunny from "/src/components/WeatherIcons/Sunny/Sunny";
import Cloudy from "/src/components/WeatherIcons/Cloudy/Cloudy";
import classes from "./MinimizedForecastCurrent.module.scss";

const MinimizedForecastCurrent = () => {
  return (
    <div className={classes.minimizedForecastCurrentWrapper}>
      <div className={classes.minimizedForecastGlimmer}></div>
      <div className={classes.minimizedForecastStroke}></div>
      <div className={classes.minimizedForecastCurrent}>
        <div className={classes.minimizedForecastCurrentInner}>
          <div className={classes.minimizedWeatherIconWrapper}>
            <Cloudy>
              <Sunny />
            </Cloudy>
          </div>
          <div className={classes.minimizedLocationDate}>
            <span className={classes.minimizedDate}>Today</span>
            <span className={classes.minimizedLocation}>Lucknow</span>
          </div>
          <div className={classes.minimizedWeatherInfo}>
            <span className={classes.minimizedTemperature}>18</span>
            <span className={classes.minimizedWeather}>Cloudy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimizedForecastCurrent;
