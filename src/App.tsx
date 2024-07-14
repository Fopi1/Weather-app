import React from "react";
import "../src/scss/styles.scss";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import DetailedForecastPage from "./pages/DetailedForecastPage/DetailedForecastPage";
import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.app}>
      <DetailedForecastPage />
      {/* <ForecastPage /> */}
    </div>
  );
};

export default App;
