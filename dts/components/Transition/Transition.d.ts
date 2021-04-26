import { ReactElement } from 'react';
import type { TransitionProps } from './Transition.types';
declare const Transition: ({
  children,
  isActive,
  isActiveOnMount,
  shouldMountOnEnter,
  shouldUnmountOnExit,
  type,
}: TransitionProps) => ReactElement | null;
export { Transition };
