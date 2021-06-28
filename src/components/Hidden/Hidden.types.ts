import type { ComponentWithChildren } from '~/types';

type HiddenProps = {
  children: React.ReactNode;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
  isXLarge?: boolean;
};

type HiddenType = ComponentWithChildren<HiddenProps>;

export type { HiddenProps, HiddenType };
