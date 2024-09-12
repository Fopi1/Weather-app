import { FC } from "react";
import classes from "./LocationBar.module.scss";
import locationBarIcon from "@ForecastPageIcons/locationBar/locationBar.svg";
import { useNavigate } from "react-router-dom";

const LocationBar: FC = () => {
  const navigate = useNavigate();
  const handleNavige = () => {
    navigate("Search");
  };
  return (
    <header className={classes.location} onClick={handleNavige}>
      <span className={classes.location__text}>location</span>
      <img src={locationBarIcon} className={classes.location__icon} />
    </header>
  );
};

export default LocationBar;
