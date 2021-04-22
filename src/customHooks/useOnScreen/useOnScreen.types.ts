import type { RefObject } from 'react';

type UseOnScreen = (
  ref: RefObject<HTMLElement>,
  threshold?: number,
  rootMargin?: string,
  shouldNotifyOnLeavingScreen?: boolean,
) => boolean;

export type { UseOnScreen };
