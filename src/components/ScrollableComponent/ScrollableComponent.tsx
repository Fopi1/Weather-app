import React, { FC, useState, useRef } from "react";
import classes from "./ScrollableComponent.module.scss";

interface ScrollableComponent {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const ScrollableComponent: FC<ScrollableComponent> = ({ children, styles }) => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemsRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - -itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemsRef.current || !isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = x - startX;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      style={styles}
      className={classes.scrollableComponent}
      ref={itemsRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default ScrollableComponent;
