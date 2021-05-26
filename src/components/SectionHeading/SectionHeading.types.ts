import type { Themes } from '~/types';

type SectionHeadingProps = {
  childrenClassNames?: {
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  className?: string;
  eyebrow?: string;
  hasSerifFontHeading?: boolean;
  heading?: string;
  id?: string;
  isFlush?: boolean;
  isOffsetPageHeading?: boolean;
  isHeroHeading?: boolean;
  isPageHeading?: boolean;
  subHeading?: string;
  theme?: Themes;
  titleFont?: 'Suisse' | 'Zapf';
};

export type { SectionHeadingProps };
