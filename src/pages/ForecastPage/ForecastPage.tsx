import Forecast from "@components/Forecast/Forecast";
import LocationBar from "@components/LocationBar/LocationBar";
import classes from "./ForecastPage.module.scss";
import Glimmer, { Position } from "/src/components/Glimmer/Glimmer";

const ForecastPage = () => {
  return (
    <div className={classes.forecastPage}>
      <Glimmer position={Position.TopLeft} />
      <Glimmer position={Position.Center} />
      <LocationBar />
      <Forecast />
    </div>
  );
};

export default ForecastPage;
