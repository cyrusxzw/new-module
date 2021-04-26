/// <reference types="react" />
declare type TransitionType =
  | 'fade'
  | 'shiftInDown'
  | 'shiftInLeft'
  | 'shiftInUp'
  | 'slideDown'
  | 'slideRight'
  | 'slowFade'
  | 'zoom';
declare type TransitionProps = {
  children: JSX.Element;
  isActive?: boolean;
  isActiveOnMount?: boolean;
  shouldMountOnEnter?: boolean;
  shouldUnmountOnExit?: boolean;
  type?: TransitionType;
};
export type { TransitionProps };
