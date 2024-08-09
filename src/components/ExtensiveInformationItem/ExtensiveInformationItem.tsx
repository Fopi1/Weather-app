import React, { FC } from "react";
import classes from "./ExtensiveInformationItem.module.scss";

interface ExtensiveInformationItemProps {
  name: string;
  value: string;
  unit?: string;
  explanation?: string;
}

const ExtensiveInformationItem: FC<ExtensiveInformationItemProps> = ({
  name,
  value,
  unit,
  explanation,
}) => {
  return (
    <div className={classes.extensiveInformationItem}>
      <div className={classes.itemName}>{name}</div>
      <hr className={classes.hr} />
      <div className={classes.itemValue}>
        {value} {unit}
      </div>
      <div className={classes.itemExplanation}>{explanation}</div>
    </div>
  );
};

export default ExtensiveInformationItem;
