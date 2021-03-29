import { ReactNode } from 'react';
import type { Themes } from '~/types';

type PresentaionVariations =
  | 'default'
  | 'fifty-fifty'
  | 'wide-header'
  | 'article-header'
  | 'full-display';

type HeroBannerContentProps = {
  className?: string;
  content?: ReactNode;
  copy?: {
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  hasFullWidthMedia?: boolean;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  theme?: Themes;
  variation?: PresentaionVariations;
};

export type { HeroBannerContentProps };
