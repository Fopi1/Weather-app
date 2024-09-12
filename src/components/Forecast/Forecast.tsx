import React from "react";
import classes from "./Forecast.module.scss";
import ForecastCurrent from "../ForecastCurrent/ForecastCurrent";
import ForecastNextDays from "../ForecastNextDays/ForecastNextDays";
import ScrollableComponent from "../ScrollableComponent/ScrollableComponent";
import LeftInfoBlock from "../InfoBlock/LeftInfoBlock";
import RightInfoBlock from "../InfoBlock/RightInfoBlock";
// Alias path to icons
import eyeIcon from "@ForecastPageIcons/detailedInformation/eye.svg";
import waterDropIcon from "@ForecastPageIcons/detailedInformation/waterDrop.svg";
import windIcon from "@ForecastPageIcons/detailedInformation/wind.svg";
import sunIcon from "@ForecastPageIcons/detailedInformation/sun.svg";

const nextDaysStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  columnGap: "30px",
};

const Forecast = () => {
  const leftInfoBlockFullnes = [
    {
      icon: eyeIcon,
      text: "Visibility",
      hoverInformation: "1000m",
    },
    {
      icon: waterDropIcon,
      text: "Humidity",
      hoverInformation: "21%",
    },
  ];
  const rightInfoBlockFullness = [
    {
      icon: windIcon,
      text: "Wind",
      hoverInformation: "7 km",
      additionalHoverInformation: "N - E",
    },
    {
      icon: sunIcon,
      text: "UV",
      hoverInformation: "7",
      additionalHoverInformation: "Strong",
    },
  ];

  return (
    <main className={classes.forecast}>
      <ForecastCurrent />
      <div className={classes.forecastNextDays}>
        <div className={classes.nextDaysWrapper}>
          <ScrollableComponent styles={nextDaysStyles}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <ForecastNextDays key={index} />
              ))}
          </ScrollableComponent>
        </div>
      </div>
      <div className={classes.detailedInformation}>
        <div className={classes.infoBlockContainer}>
          {leftInfoBlockFullnes.map((element, index) => (
            <LeftInfoBlock
              key={index}
              icon={element.icon}
              text={element.text}
              hoverInformation={element.hoverInformation}
            />
          ))}
        </div>
        <div className={classes.infoBlockContainer}>
          {rightInfoBlockFullness.map((element, index) => (
            <RightInfoBlock
              key={index}
              icon={element.icon}
              text={element.text}
              hoverInformation={element.hoverInformation}
              additionalHoverInformation={element.additionalHoverInformation}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Forecast;
