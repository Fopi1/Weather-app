import classes from "./DetailedForecastPage.module.scss";
import settingsIcon from "@DetailedForecastPageIcons/settings.svg";
import geoHintIcon from "@DetailedForecastPageIcons/geoHint.svg";
import Navbar from "@components/Navbar/Navbar";
import MinimizedForecastCurrent from "@components/MinimizedForecastCurrent/MinimizedForecastCurrent";
import Chart from "@components/Chart/Chart";
import ExtensiveInformationPanel from "@components/ExtensiveInfromationPanel/ExtensiveInformationPanel";
import Glimmer, { Position } from "@components/Glimmer/Glimmer";
import { useNavigate } from "react-router-dom";

const DetailedForecastPage = () => {
  const navigate = useNavigate();
  const leftIcon = {
    icon: settingsIcon,
    onClick: () => navigate("/Settings"),
  };
  const rightIcon = {
    icon: geoHintIcon,
    onClick: () => navigate("/Forecast"),
  };

  return (
    <div className={classes.detailedPage}>
      <Glimmer position={Position.TopLeft} />
      <Glimmer position={Position.Center} />
      <header className={classes.detailedPageHeader}>
        <Navbar leftIcon={leftIcon} rightIcon={rightIcon} />
        <MinimizedForecastCurrent />
      </header>
      <main className={classes.detailedPageMain}>
        <Chart />
      </main>
      <footer className={classes.detailedPageFooter}>
        <ExtensiveInformationPanel />
      </footer>
    </div>
  );
};

export default DetailedForecastPage;
