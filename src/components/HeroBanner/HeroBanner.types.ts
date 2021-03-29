import { ReactElement, ReactNode } from 'react';
import type { Themes } from '~/types';

type AnchorPoints = 'center' | 'left' | 'right';
type PresentaionVariations =
  | 'default'
  | 'fifty-fifty'
  | 'wide-header'
  | 'article-header'
  | 'full-display';

type HeroBannerProps = {
  backgroundColor?: string;
  className?: string;
  containMedia?: AnchorPoints;
  content?: ReactNode;
  copy?: {
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  media: ReactElement;
  theme?: Themes;
  variation?: PresentaionVariations;
};

export type { HeroBannerProps };
