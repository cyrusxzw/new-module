import type { RefObject } from 'react';
declare type UseExecuteOnImpressionOptions = {
  threshold?: number;
  isExecutableOnReEntry?: boolean;
};
declare type UseExecuteOnImpression = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options?: UseExecuteOnImpressionOptions,
) => void;
export type { UseExecuteOnImpression };
