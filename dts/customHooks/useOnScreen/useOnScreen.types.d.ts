import type { RefObject } from 'react';
declare type UseOnScreen = (
  ref: RefObject<HTMLElement>,
  threshold?: number,
  rootMargin?: string,
  shouldNotifyOnLeavingScreen?: boolean,
) => boolean;
export type { UseOnScreen };
