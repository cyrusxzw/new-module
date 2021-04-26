import type { Themes } from '~/types';
declare type Sizes = 'small' | 'medium' | 'large';
declare type LoadingProps = {
  className?: string;
  isLoading: boolean;
  shouldFillSpace?: boolean;
  size?: Sizes;
  theme?: Themes;
};
export type { LoadingProps };
