import type { RefObject } from 'react';

type UseExecuteOnImpressionOptions = {
  threshold?: number;
  isExecutableOnReEntry?: boolean;
};

type UseExecuteOnImpression = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options?: UseExecuteOnImpressionOptions,
) => void;

export type { UseExecuteOnImpression };
