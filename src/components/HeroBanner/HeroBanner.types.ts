import type { ReactElement, ReactNode } from 'react';
import type { Themes } from '~/types';

type HeroBannerMediaAnchorPoints =
  | 'center'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top';
type HeroBannerVariations =
  | 'article-header'
  | 'default'
  | 'fifty-fifty'
  | 'full-display'
  | 'landing-header'
  | 'wide-header';

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
    onClick?: () => void;
    url?: string;
    title?: string;
  };
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  hasNewNav?: boolean;
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
