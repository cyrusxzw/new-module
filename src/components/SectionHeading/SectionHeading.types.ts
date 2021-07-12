import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

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
  subHeading?: ReactNode;
  theme?: Themes;
  titleFont?: 'Suisse' | 'Zapf';
};

type SectionHeadingType = ComponentWithoutChildren<SectionHeadingProps>;

export type { SectionHeadingProps, SectionHeadingType };
