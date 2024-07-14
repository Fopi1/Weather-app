import React from "react";
import settingsIcon from "@settingsIcon";
import geoHintIcon from "@geoHintIcon";
import classes from "./DetailedPageNavbar.module.scss";

const DetailedPageNavbar = () => {
  return (
    <nav className={classes.detailedPageNavbar}>
      <img
        src={settingsIcon}
        alt="settings icon"
        className={classes.navbarIcon}
      />
      <img
        src={geoHintIcon}
        alt="geo-hint icon"
        className={classes.navbarIcon}
      />
    </nav>
  );
};

export default DetailedPageNavbar;
