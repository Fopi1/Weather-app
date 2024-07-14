import React, { FC } from "react";
import classes from "./Cloudy.module.scss";

interface CloudyProps {
  children?: React.ReactNode;
  needSunnyGlare?: boolean;
}

const Cloudy: FC<CloudyProps> = ({ children, needSunnyGlare = false }) => {
  needSunnyGlare = true;
  return (
    <div className={classes.cloudy}>
      <div className={classes.cloudy__circles}>
        <div className={classes.cloudy__circleTopLeft}></div>
        <div className={classes.cloudy__circleBottomLeft}></div>
        <div className={classes.cloudy__circleBottomCenter}></div>
        <div className={classes.cloudy__circleBottomRight}></div>
        <div className={classes.cloudy__circleCenter}></div>
        {needSunnyGlare ? <div className={classes.sunnyGlare}></div> : null}
      </div>
      {children}
    </div>
  );
};

export default Cloudy;
