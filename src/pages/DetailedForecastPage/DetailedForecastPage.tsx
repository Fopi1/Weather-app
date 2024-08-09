import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";
import classes from "./DetailedForecastPage.module.scss";
import DetailedPageNavbar from "/src/components/DetailedPageNavbar/DetailedPageNavbar";
import MinimizedForecastCurrent from "/src/components/MinimizedForecastCurrent/MinimizedForecastCurrent";
import Chart from "/src/components/Chart/Chart";
import ExtensiveInformationPanel from "/src/components/ExtensiveInfromationPanel/ExtensiveInformationPanel";
import Glimmer, { Position } from "/src/components/Glimmer/Glimmer";
import { chartAnimation } from "@components/Chart/ChartAnimation";
import { panelAnimation } from "@components/ExtensiveInfromationPanel/ExtensiveInformationPanelAnimation";

const DetailedForecastPage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => setIsPanelOpen(true),
    onSwipedDown: () => setIsPanelOpen(false),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={classes.detailedPage}>
      <Glimmer position={Position.TopLeft} />
      <Glimmer position={Position.Center} />
      <header className={classes.detailedPageHeader}>
        <DetailedPageNavbar />
        <MinimizedForecastCurrent />
      </header>
      <main className={classes.detailedPageMain}>
        <CSSTransition
          in={isPanelOpen}
          timeout={500}
          classNames={chartAnimation}
        >
          <Chart />
        </CSSTransition>
      </main>
      <footer className={classes.detailedPageFooter} {...swipeHandlers}>
        <CSSTransition
          in={isPanelOpen}
          timeout={500}
          classNames={panelAnimation}
        >
          <ExtensiveInformationPanel />
        </CSSTransition>
      </footer>
    </div>
  );
};

export default DetailedForecastPage;
