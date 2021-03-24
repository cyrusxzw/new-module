import { ReactNode } from 'react';
import type { Themes } from '~/types';

type BodyCopyProps = {
  childrenClassNames?: {
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  className?: string;
  content?: ReactNode;
  copy?: ReactNode;
  eyebrow?: string;
  hasFlushHeading?: boolean;
  hasSerifFontHeading?: boolean;
  heading?: string;
  id?: string;
  isHeroArticle?: boolean;
  subHeading?: string;
  theme?: Themes;
};

export type { BodyCopyProps };
