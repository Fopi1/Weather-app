import React, { FC, useState } from "react";
import classes from "./Forecast.module.scss";
import ForecastCurrent from "../ForecastCurrent/ForecastCurrent";
import ForecastNextDays from "../ForecastNextDays/ForecastNextDays";
import SwipeableComponent from "../SwipeableComponent/SwipeableComponent";
import InfoBlockContainer from "../InfoBlockContainer/InfoBlockContainer";
import LeftInfoBlock from "../InfoBlock/LeftInfoBlock";
import RightInfoBlock from "../InfoBlock/RightInfoBlock";
// Alias path to icons
import eyeIcon from "@eyeIcon";
import waterDropIcon from "@waterDropIcon";
import windIcon from "@windIcon";
import sunIcon from "@sunIcon";

const ICON_URLS: Record<string, string> = {
  eye: eyeIcon,
  waterDrop: waterDropIcon,
  wind: windIcon,
  sun: sunIcon,
};

const Forecast: FC = () => {
  const [leftInfoBlockFullnes] = useState([
    {
      icon: ICON_URLS.eye,
      text: "Visibility",
      hoverInformation: "1000m",
    },
    {
      icon: ICON_URLS.waterDrop,
      text: "Humidity",
      hoverInformation: "21%",
    },
  ]);
  const [rightInfoBlockFullness] = useState([
    {
      icon: ICON_URLS.wind,
      text: "Wind",
      hoverInformation: "7 km",
      additionalHoverInformation: "N - E",
    },
    {
      icon: ICON_URLS.sun,
      text: "UV",
      hoverInformation: "7",
      additionalHoverInformation: "Strong",
    },
  ]);

  return (
    <main className={classes.forecast}>
      <ForecastCurrent />
      <div className={classes.forecastNextDays}>
        <div className={classes.nextDaysGlimmer}></div>
        <SwipeableComponent>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <ForecastNextDays key={index} />
            ))}
        </SwipeableComponent>
      </div>
      <div className={classes.detailedInformation}>
        <InfoBlockContainer>
          {leftInfoBlockFullnes.map((element, index) => (
            <LeftInfoBlock
              key={index}
              icon={element.icon}
              text={element.text}
              hoverInformation={element.hoverInformation}
            />
          ))}
        </InfoBlockContainer>
        <InfoBlockContainer>
          {rightInfoBlockFullness.map((element, index) => (
            <RightInfoBlock
              key={index}
              icon={element.icon}
              text={element.text}
              hoverInformation={element.hoverInformation}
              additionalHoverInformation={element.additionalHoverInformation}
            />
          ))}
        </InfoBlockContainer>
      </div>
    </main>
  );
};

export default Forecast;
