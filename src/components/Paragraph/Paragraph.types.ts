import type { Themes } from '~/types';

type ParagraphProps = {
  className?: string;
  hasSerifFont?: boolean;
  isFlush?: boolean;
  isHero?: boolean;
  isLarge?: boolean;
  theme?: Themes;
};

type ParagraphSetProps = {
  className?: string;
  isLarge?: boolean;
  theme?: Themes;
};

export type { ParagraphProps, ParagraphSetProps };
