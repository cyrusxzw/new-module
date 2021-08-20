import type { ComponentWithoutChildren, Themes } from '~/types';

type LoadingSizes = 'small' | 'medium' | 'large';

type LoadingProps = {
  className?: string;
  isLoading: boolean;
  screenReaderText?: string;
  shouldFillSpace?: boolean;
  size?: LoadingSizes;
  theme?: Themes;
};

type LoadingType = ComponentWithoutChildren<LoadingProps>;

export type { LoadingProps, LoadingType };
