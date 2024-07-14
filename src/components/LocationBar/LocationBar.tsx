import React, { FC } from "react";
import classes from "./LocationBar.module.scss";
import locationIcon from "@locationIcon";

const LocationBar: FC = () => {
  return (
    <header className={classes.location}>
      <span className={classes.location__text}>location</span>
      <img src={locationIcon} className={classes.location__icon} />
    </header>
  );
};

export default LocationBar;
