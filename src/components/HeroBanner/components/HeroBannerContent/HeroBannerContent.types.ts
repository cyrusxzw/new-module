import { ReactElement, ReactNode } from 'react';
import type { Themes } from '~/types';

type HeroBannerContentProps = {
  className?: string;
  content?: ReactNode;
  copy?: {
    description?: string;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  hasFullWidthMedia?: boolean;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  isReverse?: boolean;
  theme?: Themes;
};

export type { HeroBannerContentProps };
