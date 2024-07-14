import React, { FC, useCallback, useMemo, useState } from "react";
import { useSwipeable, SwipeEventData } from "react-swipeable";
import classes from "./SwipeableComponent.module.scss";

interface SwipeableComponent {
  children: React.ReactNode;
}

enum Direction {
  Left = "Left",
  Right = "Right",
  Up = "Up",
  Down = "Down",
}

const SwipeableComponent: FC<SwipeableComponent> = ({ children }) => {
  const [translateX, setTranslateX] = useState(0);

  const calculateLength: number = useMemo(
    () => React.Children.count(children) - 3,
    [children]
  );
  const maxSwipeWidth: number = useMemo(
    () =>
      -100 * calculateLength +
      -10 * calculateLength +
      -5 * (calculateLength - 1),
    [calculateLength]
  );

  const handleSwipe = useCallback(
    (eventData: SwipeEventData, direction: Direction) => {
      let newTranslateX: number = translateX;
      const swipeSpeed = Math.abs(eventData.velocity);

      if (direction === Direction.Left) {
        newTranslateX = Math.max(translateX - 50 * swipeSpeed, maxSwipeWidth);
      } else if (direction === Direction.Right) {
        newTranslateX = Math.min(translateX + 50 * swipeSpeed, 0);
      }
      setTranslateX(newTranslateX);
    },
    [translateX]
  );

  const handlers = useSwipeable({
    onSwiping: (eventData: SwipeEventData) =>
      handleSwipe(eventData, eventData.dir as Direction),
    trackMouse: true,
  });
  return (
    <div
      className={classes.swipeableComponent}
      style={{ transform: `translateX(${translateX}px)` }}
      {...handlers}
    >
      {children}
    </div>
  );
};

export default SwipeableComponent;
