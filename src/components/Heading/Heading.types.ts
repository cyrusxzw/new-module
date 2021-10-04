import type { ComponentWithChildren, Themes } from '~/types';

type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';

type HeadingSizes =
  | 'xXSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge';

type HeadingProps = {
  className?: string;
  dataTestRef?: string;
  hasMediumWeightFont?: boolean;
  hasSerifFont?: boolean;
  id?: string;
  isFlush?: boolean;
  level: HeadingLevels;
  size: HeadingSizes;
  theme?: Themes;
};

type HeadingType = ComponentWithChildren<HeadingProps>;

export type { HeadingLevels, HeadingProps, HeadingSizes, HeadingType };
