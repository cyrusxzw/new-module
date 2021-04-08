import type { Themes } from '~/types';

type Sizes = 'small' | 'medium' | 'large';

type LoadingProps = {
  className?: string;
  isLoading: boolean;
  shouldFillSpace?: boolean;
  size?: Sizes;
  theme?: Themes;
};

export type { LoadingProps };
