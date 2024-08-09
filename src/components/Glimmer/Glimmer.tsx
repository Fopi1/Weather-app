import React, { FC } from "react";
import classes from "./Glimmer.module.scss";

enum Position {
  TopLeft = "topLeft",
  Center = "center",
}

interface GlimmerProps {
  position: Position;
}

const Glimmer: FC<GlimmerProps> = ({ position }) => {
  return <div className={`${classes.glimmer} ${classes[position]}`}></div>;
};

export default Glimmer;
export { Position };
