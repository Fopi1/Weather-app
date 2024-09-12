import { useNavigate } from "react-router-dom";
import classes from "./SearchPage.module.scss";
import Glimmer, { Position } from "/src/components/Glimmer/Glimmer";
import Navbar from "/src/components/Navbar/Navbar";
import curvedArrow from "@SettingsPageIcons/curvedArrow.svg";
import settingsIcon from "@DetailedForecastPageIcons/settings.svg";

const SearchPage = () => {
  const navigate = useNavigate();
  const leftIcon = {
    icon: curvedArrow,
    onClick: () => navigate("Forecast"),
  };
  const rightIcon = {
    icon: settingsIcon,
    onClick: () => navigate("Settings"),
  };

  return (
    <div className={classes.searchPage}>
      <Glimmer position={Position.TopLeft}></Glimmer>
      <Glimmer position={Position.Center}></Glimmer>
      <Navbar leftIcon={leftIcon} rightIcon={rightIcon}></Navbar>
    </div>
  );
};

export default SearchPage;
