import type { Themes } from '~/types';

type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';

type HeadingSizes =
  | 'xXSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge';

type HeadingProps = {
  children?: React.ReactNode;
  className?: string;
  hasMediumWeightFont?: boolean;
  hasSerifFont?: boolean;
  id?: string;
  isFlush?: boolean;
  level: HeadingLevels;
  size: HeadingSizes;
  theme?: Themes;
};

export type { HeadingProps, HeadingLevels, HeadingSizes };
