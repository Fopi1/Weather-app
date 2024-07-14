import React, { FC } from "react";
import classes from "./InfoBlockContainer.module.scss";

interface InfoBlockProps {
  children: React.ReactNode;
}

const InfoBlockContainer: FC<InfoBlockProps> = ({ children }) => {
  return <div className={classes.infoBlockContainer}>{children}</div>;
};

export default InfoBlockContainer;
