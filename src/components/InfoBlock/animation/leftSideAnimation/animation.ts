import animation from "./leftSideAnimation.module.scss";

export const leftSideAnimationClasses = {
  image: {
    enter: animation.leftInfoBlockImageEnter,
    enterActive: animation.leftInfoBlockImageEnterActive,
    enterDone: animation.leftInfoBlockImageEnterDone,
    exit: animation.leftInfoBlockImageExit,
    exitActive: animation.leftInfoBlockImageExitActive,
  },
  hoverInformation: {
    enter: animation.leftHoverInformationEnter,
    enterActive: animation.leftHoverInformationEnterActive,
    enterDone: animation.leftHoverInformationEnterDone,
    exit: animation.leftHoverInformationExit,
    exitActive: animation.leftHoverInformationExitActive,
    exitDone: animation.leftHoverInformationExitDone,
  },
  text: {
    enterActive: animation.leftInfoBlockTextEnterActive,
    enterDone: animation.leftInfoBlockTextEnterDone,
    exit: animation.leftInfoBlockTextExit,
    exitActive: animation.leftInfoBlockTextExitActive,
  },
};
