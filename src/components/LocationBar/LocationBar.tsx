import React, { FC } from "react";
import classes from "./LocationBar.module.scss";
import locationBarIcon from "@ForecastPageIcons/locationBar/locationBar.svg";

const LocationBar: FC = () => {
  return (
    <header className={classes.location}>
      <span className={classes.location__text}>location</span>
      <img src={locationBarIcon} className={classes.location__icon} />
    </header>
  );
};

export default LocationBar;
