import type { Themes, ComponentWithChildren } from '~/types';

type SecondaryNavigationProps = {
  className?: string;
  theme?: Themes;
};

type SecondaryNavigationType = ComponentWithChildren<SecondaryNavigationProps>;

export type { SecondaryNavigationType };
