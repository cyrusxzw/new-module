import { ReactElement } from 'react';

type MediaAnchorPoints = 'center' | 'left' | 'right';
type PresentaionVariations =
  | 'default'
  | 'fifty-fifty'
  | 'wide-header'
  | 'article-header'
  | 'full-display';

type HeroBannerMediaProps = {
  className?: string;
  containMedia?: MediaAnchorPoints;
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  media: ReactElement;
  variation?: PresentaionVariations;
};

export type { HeroBannerMediaProps };
