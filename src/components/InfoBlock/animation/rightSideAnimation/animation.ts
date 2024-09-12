import animation from "./rightSideAnimation.module.scss";

export const rightSideAnimationClasses = {
  image: {
    enter: animation.rightInfoBlockImageEnter,
    enterActive: animation.rightInfoBlockImageEnterActive,
    enterDone: animation.rightInfoBlockImageEnterDone,
    exit: animation.rightInfoBlockImageExit,
    exitActive: animation.rightInfoBlockImageExitActive,
  },
  hoverInformation: {
    enter: animation.rightHoverInformationEnter,
    enterActive: animation.rightHoverInformationEnterActive,
    enterDone: animation.rightHoverInformationEnterDone,
    exit: animation.rightHoverInformationExit,
    exitActive: animation.rightHoverInformationExitActive,
    exitDone: animation.rightHoverInformationExitDone,
  },
  text: {
    enterActive: animation.rightInfoBlockTextEnterActive,
    enterDone: animation.rightInfoBlockTextEnterDone,
    exit: animation.rightInfoBlockTextExit,
    exitActive: animation.rightInfoBlockTextExitActive,
  },
};
