import type { Themes } from '~/types';

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

export type { TwoColumnLayoutProps };
