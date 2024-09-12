import classes from "./ExtensiveInformationPanel.module.scss";
import ExtensiveInformationItem from "../ExtensiveInformationItem/ExtensiveInformationItem";
import { useSwipeable } from "react-swipeable";
import { CSSTransition } from "react-transition-group";
import { panelAnimation } from "./ExtensiveInformationPanelAnimation";
import { closePanel, openPanel } from "../../store/panelToggleSlicer";
import { useAppDispatch, useAppSelector } from "/src/store/store";

const ExtensiveInformationPanel = () => {
  const { isPanelOpen } = useAppSelector((state) => state.panelToggle);
  const dispatch = useAppDispatch();

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => dispatch(openPanel()),
    onSwipedDown: () => dispatch(closePanel()),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const leftInfoColumnFullnes = [
    {
      name: "Visibility",
      value: "1000",
      unit: "meter",
      explanation: "clear",
    },
    { name: "Humidity", value: "21", unit: "%", explanation: "" },
    { name: "Air Quality", value: "132", unit: "", explanation: "moderate" },
  ];

  const rightInfoColumnFullnes = [
    { name: "Wind", value: "7", unit: "km", explanation: "NE" },
    { name: "UV Rays", value: "7", unit: "", explanation: "strong" },
    { name: "Air Pressure", value: "1009", unit: "", explanation: "hPa" },
  ];

  return (
    <CSSTransition in={isPanelOpen} timeout={500} classNames={panelAnimation}>
      <div
        className={classes.extensiveInformationPanelWrapper}
        {...swipeHandlers}
      >
        <div className={classes.extensiveInformationPanel}>
          <div className={classes.hrContainer}>
            <hr className={classes.hr} />
          </div>
          <div className={classes.extensiveInformationPanelInner}>
            <div className={classes.informationColumn}>
              {leftInfoColumnFullnes.map((item, index) => (
                <ExtensiveInformationItem
                  name={item.name}
                  value={item.value}
                  unit={item.unit}
                  explanation={item.explanation}
                  key={index}
                />
              ))}
            </div>
            <div className={classes.informationColumn}>
              {rightInfoColumnFullnes.map((item, index) => (
                <ExtensiveInformationItem
                  name={item.name}
                  value={item.value}
                  unit={item.unit}
                  explanation={item.explanation}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ExtensiveInformationPanel;
