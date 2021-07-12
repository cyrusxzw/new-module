import { RefObject } from 'react';

declare type UseOnScreen = (ref: RefObject<HTMLElement>, threshold?: number, rootMargin?: string, shouldNotifyOnLeavingScreen?: boolean) => boolean;

declare const useOnScreen: UseOnScreen;

export { useOnScreen };
