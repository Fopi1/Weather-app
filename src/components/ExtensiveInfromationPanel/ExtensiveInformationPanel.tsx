import React from "react";
import classes from "./ExtensiveInformationPanel.module.scss";
import ExtensiveInformationItem from "../ExtensiveInformationItem/ExtensiveInformationItem";

const ExtensiveInformationPanel = () => {
  const leftInfoColumnFullnes = [
    { name: "Visibility", value: "1000", unit: "meter", explanation: "clear" },
    { name: "Humidity", value: "21", unit: "%", explanation: "" },
    { name: "Air Quality", value: "132", unit: "", explanation: "moderate" },
  ];

  const rightInfoColumnFullnes = [
    { name: "Wind", value: "7", unit: "km", explanation: "NE" },
    { name: "UV Rays", value: "7", unit: "", explanation: "strong" },
    { name: "Air Pressure", value: "1009", unit: "", explanation: "hPa" },
  ];

  return (
    <div className={classes.extensiveInformationPanelWrapper}>
      <div className={classes.extensiveInformationPanel}>
        <div className={classes.hrContainer}>
          <hr className={classes.hr} />
        </div>
        <div className={classes.extensiveInformationPanelInner}>
          <div className={classes.informationColumn}>
            {leftInfoColumnFullnes.map((item, index) => (
              <ExtensiveInformationItem
                name={item.name}
                value={item.value}
                unit={item.unit}
                explanation={item.explanation}
                key={index}
              />
            ))}
          </div>
          <div className={classes.informationColumn}>
            {rightInfoColumnFullnes.map((item, index) => (
              <ExtensiveInformationItem
                name={item.name}
                value={item.value}
                unit={item.unit}
                explanation={item.explanation}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensiveInformationPanel;
