import React, { FC, useState } from "react";
import classes from "./InfoBlock.module.scss";
import { rightSideAnimationClasses } from "./animation/animation";
import { CSSTransition } from "react-transition-group";

interface InfoBlockProps {
  icon: string;
  text: string;
  hoverInformation: string;
  additionalHoverInformation: string;
}

const RightInfoBlock: FC<InfoBlockProps> = ({
  icon,
  text,
  hoverInformation,
  additionalHoverInformation,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={classes.infoBlock}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={classes.infoBlockWrapper}>
        <div className={classes.infoBlockInner}>
          <CSSTransition
            in={isHover}
            timeout={250}
            className={classes.infoBlockImage}
            classNames={{ ...rightSideAnimationClasses.image }}
          >
            <img src={icon} alt="" />
          </CSSTransition>
          <CSSTransition
            in={isHover}
            timeout={250}
            className={classes.infoBlockText}
            classNames={{ ...rightSideAnimationClasses.text }}
          >
            <span>{text}</span>
          </CSSTransition>
        </div>
        <CSSTransition
          in={isHover}
          timeout={250}
          className={classes.rightSideHoverInformation}
          classNames={{ ...rightSideAnimationClasses.hoverInformation }}
        >
          <div>
            <span className={classes.primaryHoverInformation}>
              {hoverInformation}
            </span>
            <br />
            <span className={classes.additionalHoverInformation}>
              {additionalHoverInformation}
            </span>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default RightInfoBlock;
