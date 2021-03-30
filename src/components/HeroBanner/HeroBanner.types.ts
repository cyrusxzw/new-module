import { ReactElement, ReactNode } from 'react';
import type { Themes } from '~/types';

type HeroBannerMediaAnchorPoints = 'center' | 'left' | 'right';
type HeroBannerVariations =
  | 'default'
  | 'fifty-fifty'
  | 'wide-header'
  | 'article-header'
  | 'full-display';

type HeroBannerCopy = {
  description?: ReactNode;
  eyebrow?: string;
  heading?: string;
  subHeading?: string;
};

type HeroBannerProps = {
  backgroundColor?: string;
  className?: string;
  containMedia?: HeroBannerMediaAnchorPoints;
  content?: ReactNode;
  copy?: HeroBannerCopy;
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  media: ReactElement;
  theme?: Themes;
  variation?: HeroBannerVariations;
};

export type {
  HeroBannerProps,
  HeroBannerCopy,
  HeroBannerVariations,
  HeroBannerMediaAnchorPoints,
};
