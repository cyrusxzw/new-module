import transitions from './Transition.module.css';

const fade = {
  classNames: {
    enter: transitions.fadeEnter,
    enterActive: transitions.fadeEnterActive,
    enterDone: transitions.fadeEnterDone,
    exit: transitions.fadeExit,
    exitActive: transitions.fadeExitActive,
    exitDone: transitions.fadeExitDone,
  },
  timeout: 500,
};

const slowFade = {
  classNames: {
    enter: transitions.slowFadeEnter,
    enterActive: transitions.slowFadeEnterActive,
    enterDone: transitions.slowFadeEnterDone,
    exit: transitions.slowFadeExit,
    exitActive: transitions.slowFadeExitActive,
    exitDone: transitions.slowFadeExitDone,
  },
  timeout: 1500,
};

const shiftInLeft = {
  classNames: {
    enter: transitions.shiftInLeftEnter,
    enterActive: transitions.shiftInLeftEnterActive,
    enterDone: transitions.shiftInLeftEnterDone,
    exit: transitions.shiftInLeftExit,
    exitActive: transitions.shiftInLeftExitActive,
    exitDone: transitions.shiftInLeftExitDone,
  },
  timeout: 1500,
};

const shiftInUp = {
  classNames: {
    enter: transitions.shiftInUpEnter,
    enterActive: transitions.shiftInUpEnterActive,
    enterDone: transitions.shiftInUpEnterDone,
    exit: transitions.shiftInUpExit,
    exitActive: transitions.shiftInUpExitActive,
    exitDone: transitions.shiftInUpExitDone,
  },
  timeout: 1500,
};

const shiftInDown = {
  classNames: {
    enter: transitions.shiftInDownEnter,
    enterActive: transitions.shiftInDownEnterActive,
    enterDone: transitions.shiftInDownEnterDone,
    exit: transitions.shiftInDownExit,
    exitActive: transitions.shiftInDownExitActive,
    exitDone: transitions.shiftInDownExitDone,
  },
  timeout: 1500,
};

const slideDown = {
  classNames: {
    enter: transitions.slideDownEnter,
    enterActive: transitions.slideDownEnterActive,
    enterDone: transitions.slideDownEnterDone,
    exit: transitions.slideDownExit,
    exitActive: transitions.slideDownExitActive,
    exitDone: transitions.slideDownExitDone,
  },
  timeout: 800,
};

const slideRight = {
  classNames: {
    enter: transitions.slideRightEnter,
    enterActive: transitions.slideRightEnterActive,
    enterDone: transitions.slideRightEnterDone,
    exit: transitions.slideRightExit,
    exitActive: transitions.slideRightExitActive,
    exitDone: transitions.slideRightExitDone,
  },
  timeout: 800,
};

const zoom = {
  classNames: {
    enter: transitions.zoomEnter,
    enterActive: transitions.zoomEnterActive,
    enterDone: transitions.zoomEnterDone,
    exit: transitions.zoomExit,
    exitActive: transitions.zoomExitActive,
    exitDone: transitions.zoomExitDone,
  },
  timeout: 500,
};

export default {
  fade,
  shiftInDown,
  shiftInLeft,
  shiftInUp,
  slideDown,
  slideRight,
  slowFade,
  zoom,
};
