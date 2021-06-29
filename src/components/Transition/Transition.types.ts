import type { ReactElement } from 'react';

type TransitionTypeLabel =
  | 'fade'
  | 'shiftInDown'
  | 'shiftInLeft'
  | 'shiftInUp'
  | 'slideDown'
  | 'slideRight'
  | 'slowFade'
  | 'zoom';

type TransitionProps = {
  children: JSX.Element;
  isActive?: boolean;
  isActiveOnMount?: boolean;
  shouldMountOnEnter?: boolean;
  shouldUnmountOnExit?: boolean;
  type?: TransitionTypeLabel;
};

type TransitionType = (props: TransitionProps) => ReactElement | null;

export type { TransitionProps, TransitionType, TransitionTypeLabel };
