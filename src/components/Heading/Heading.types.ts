import type { Themes } from '~/types';

type Levels = '1' | '2' | '3' | '4' | '5' | '6';

type Sizes = 'xXSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  hasMediumWeightFont?: boolean;
  hasSerifFont?: boolean;
  id?: string;
  isFlush?: boolean;
  level: Levels;
  size: Sizes;
  theme?: Themes;
};

export type { HeadingProps };
