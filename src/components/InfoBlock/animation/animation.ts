import leftAnimation from "./leftSideAnimation.module.scss";
import rightAnimation from "./rightSideAnimation.module.scss";
export const leftSideAnimationClasses = {
  image: {
    enter: leftAnimation.leftInfoBlockImageEnter,
    enterActive: leftAnimation.leftInfoBlockImageEnterActive,
    enterDone: leftAnimation.leftInfoBlockImageEnterDone,
    exit: leftAnimation.leftInfoBlockImageExit,
    exitActive: leftAnimation.leftInfoBlockImageExitActive,
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
    enterActive: leftAnimation.leftInfoBlockTextEnterActive,
    enterDone: leftAnimation.leftInfoBlockTextEnterDone,
    exit: leftAnimation.leftInfoBlockTextExit,
    exitActive: leftAnimation.leftInfoBlockTextExitActive,
  },
};

export const rightSideAnimationClasses = {
  image: {
    enter: rightAnimation.rightInfoBlockImageEnter,
    enterActive: rightAnimation.rightInfoBlockImageEnterActive,
    enterDone: rightAnimation.rightInfoBlockImageEnterDone,
    exit: rightAnimation.rightInfoBlockImageExit,
    exitActive: rightAnimation.rightInfoBlockImageExitActive,
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
    enterActive: rightAnimation.rightInfoBlockTextEnterActive,
    enterDone: rightAnimation.rightInfoBlockTextEnterDone,
    exit: rightAnimation.rightInfoBlockTextExit,
    exitActive: rightAnimation.rightInfoBlockTextExitActive,
  },
};
