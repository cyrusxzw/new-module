import { ReactElement } from 'react';
import { a as TransitionProps } from '../../sharedChunks/Transition.types';

declare const Transition: ({ children, isActive, isActiveOnMount, shouldMountOnEnter, shouldUnmountOnExit, type, }: TransitionProps) => ReactElement | null;

export { Transition };
