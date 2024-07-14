import leftAnimation from "./leftSideAnimation.module.scss";
import rightAnimation from "./rightSideAnimation.module.scss";
export const leftSideAnimationClasses = {
  image: {
    enter: leftAnimation.leftInfoBlock__imageEnter,
    enterActive: leftAnimation.leftInfoBlock__imageEnterActive,
    enterDone: leftAnimation.leftInfoBlock__imageEnterDone,
    exit: leftAnimation.leftInfoBlock__imageExit,
    exitActive: leftAnimation.leftInfoBlock__imageExitActive,
  },
  hoverInformation: {
    enter: leftAnimation.leftHoverInformationEnter,
    enterActive: leftAnimation.leftHoverInformationEnterActive,
    enterDone: leftAnimation.leftHoverInformationEnterDone,
    exit: leftAnimation.leftHoverInformationExit,
    exitActive: leftAnimation.leftHoverInformationExitActive,
    exitDone: leftAnimation.leftHoverInformationExitDone,
  },
  text: {
    enterActive: leftAnimation.leftInfoBlock__textEnterActive,
    enterDone: leftAnimation.leftInfoBlock__textEnterDone,
    exit: leftAnimation.leftInfoBlock__textExit,
    exitActive: leftAnimation.leftInfoBlock__textExitActive,
  },
};

export const rightSideAnimationClasses = {
  image: {
    enter: rightAnimation.rightInfoBlock__imageEnter,
    enterActive: rightAnimation.rightInfoBlock__imageEnterActive,
    enterDone: rightAnimation.rightInfoBlock__imageEnterDone,
    exit: rightAnimation.rightInfoBlock__imageExit,
    exitActive: rightAnimation.rightInfoBlock__imageExitActive,
  },
  hoverInformation: {
    enter: rightAnimation.rightHoverInformationEnter,
    enterActive: rightAnimation.rightHoverInformationEnterActive,
    enterDone: rightAnimation.rightHoverInformationEnterDone,
    exit: rightAnimation.rightHoverInformationExit,
    exitActive: rightAnimation.rightHoverInformationExitActive,
    exitDone: rightAnimation.rightHoverInformationExitDone,
  },
  text: {
    enterActive: rightAnimation.rightInfoBlock__textEnterActive,
    enterDone: rightAnimation.rightInfoBlock__textEnterDone,
    exit: rightAnimation.rightInfoBlock__textExit,
    exitActive: rightAnimation.rightInfoBlock__textExitActive,
  },
};
