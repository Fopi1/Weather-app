import React, { FC } from "react";
import classes from "./UnitChanger.module.scss";

interface Unit {
  unitTitle: string;
  unitsMeasurement: string[];
}

interface UnitChangerProps {
  unit: Unit;
}

const UnitChanger: FC<UnitChangerProps> = ({ unit }) => {
  return (
    <div className={classes.unitChanger}>
      <span className={classes.unitTitle}>{unit.unitTitle}</span>
      <div className={classes.unitsMeasurement}>
        {unit.unitsMeasurement.map((measurement: string, index: number) => (
          <React.Fragment key={index}>
            <span>{measurement}</span>
            {index < unit.unitsMeasurement.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UnitChanger;
