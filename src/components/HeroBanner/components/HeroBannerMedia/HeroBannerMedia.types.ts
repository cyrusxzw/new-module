import { ReactElement } from 'react';
import type {
  HeroBannerVariations,
  HeroBannerMediaAnchorPoints,
} from '../../HeroBanner.types';

type HeroBannerMediaProps = {
  className?: string;
  containMedia?: HeroBannerMediaAnchorPoints;
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    onClick?: () => void;
    title?: string;
    url?: string;
  };
  media?: ReactElement;
  variation?: HeroBannerVariations;
};

export type { HeroBannerMediaProps };
