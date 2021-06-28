import type { ComponentWithoutChildren, Themes } from '~/types';

type TwoColumnLayoutProps = {
  childrenClassNames?: {
    sidebar?: string;
    content?: string;
  };
  className?: string;
  content: React.ReactNode;
  hasFullWidthContent?: boolean;
  id?: string;
  isFlushOnSmall?: boolean;
  isReversed?: boolean;
  sidebar?: React.ReactNode;
  theme?: Themes;
};

type TwoColumnLayoutType = ComponentWithoutChildren<TwoColumnLayoutProps>;

export type { TwoColumnLayoutProps, TwoColumnLayoutType };
