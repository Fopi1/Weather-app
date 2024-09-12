import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./InfoBlock.module.scss";
import { leftSideAnimationClasses } from "./animation/leftSideAnimation/animation";

interface InfoBlockProps {
  icon: string;
  text: string;
  hoverInformation: string;
}

const LeftInfoBlock: FC<InfoBlockProps> = ({
  icon,
  text,
  hoverInformation,
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
            timeout={600}
            className={classes.infoBlockImage}
            classNames={leftSideAnimationClasses.image}
          >
            <img src={icon} alt="" />
          </CSSTransition>
          <CSSTransition
            in={isHover}
            timeout={600}
            className={classes.infoBlockText}
            classNames={leftSideAnimationClasses.text}
          >
            <span>{text}</span>
          </CSSTransition>
        </div>
        <CSSTransition
          in={isHover}
          timeout={600}
          className={classes.leftSideHoverInformation}
          classNames={leftSideAnimationClasses.hoverInformation}
        >
          <span>{hoverInformation}</span>
        </CSSTransition>
      </div>
    </div>
  );
};

export default LeftInfoBlock;
