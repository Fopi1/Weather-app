import React from "react";
import classes from "./DetailedForecastPage.module.scss";
import DetailedPageNavbar from "../../components/DetailedPageNavbar/DetailedPageNavbar";
import MinimizedForecastCurrent from "/src/components/MinimizedForecastCurrent/MinimizedForecastCurrent";
import Chart from "/src/components/Chart/Chart";

const DetailedForecastPage = () => {
  return (
    <div className={classes.detailedPage}>
      <header className={classes.detailedPageHeader}>
        <DetailedPageNavbar />
        <MinimizedForecastCurrent />
      </header>
      <main className={classes.detailedPageMain}>
        <Chart />
      </main>
      <footer className={classes.detailedPageFooter}></footer>
    </div>
  );
};

export default DetailedForecastPage;
