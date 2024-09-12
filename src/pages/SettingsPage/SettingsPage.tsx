import classes from "./SettingsPage.module.scss";
import curvedArrow from "@SettingsPageIcons/curvedArrow.svg";
import straightArrow from "@SettingsPageIcons/straightArrow.svg";
import UnitChanger from "@components/UnitChanger/UnitChanger";
import Navbar from "/src/components/Navbar/Navbar";
import Glimmer, { Position } from "@components/Glimmer/Glimmer";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const units = [
    { unitTitle: "Temperature", unitsMeasurement: ["Celsius", "Fahrenheit"] },
    { unitTitle: "Wind", unitsMeasurement: ["Kmp", "Mph", "Knots"] },
    { unitTitle: "Air pressure", unitsMeasurement: ["hPa", "mmHg", "inHg"] },
    { unitTitle: "Visibility", unitsMeasurement: ["Km", "Mi"] },
  ];
  const leftIcon = {
    icon: curvedArrow,
    onClick: () => navigate("/DetailedForecast"),
  };

  return (
    <div className={classes.settingsPage}>
      <Glimmer position={Position.TopLeft} />
      <Glimmer position={Position.Center} />
      <Navbar leftIcon={leftIcon} pageTitle={"Settings"} />
      <main className={classes.main}>
        <div className={classes.unitChangeWrapper}>
          <span className={classes.blockTitle}>Units</span>
          <div className={classes.unitChangePanel}>
            <div className={classes.unitChangePanelInner}>
              {units.map((unit, index) => (
                <UnitChanger unit={unit} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.aboutWeatherApp}>
          <div className={classes.aboutInner}>
            <span className={classes.aboutTitle}>About Weather App</span>
            <img src={straightArrow} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
