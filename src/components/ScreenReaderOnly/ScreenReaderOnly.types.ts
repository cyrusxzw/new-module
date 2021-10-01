import type { ComponentWithChildren } from '~/types';

type ScreenReaderOnlyProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

type ScreenReaderOnlyType = ComponentWithChildren<ScreenReaderOnlyProps>;

export type { ScreenReaderOnlyType };
