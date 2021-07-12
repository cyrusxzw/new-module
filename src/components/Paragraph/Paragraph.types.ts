import type { ComponentWithChildren, Themes } from '~/types';

type ParagraphProps = {
  className?: string;
  hasSerifFont?: boolean;
  isFlush?: boolean;
  isHero?: boolean;
  isLarge?: boolean;
  theme?: Themes;
};

type ParagraphType = ComponentWithChildren<ParagraphProps>;

type ParagraphSetProps = {
  className?: string;
  isLarge?: boolean;
  theme?: Themes;
};

type ParagraphSetType = ComponentWithChildren<ParagraphSetProps>;

export type { ParagraphType, ParagraphSetType };
