import { ReactElement } from 'react';
import type {
  HeroBannerVariations,
  HeroBannerMediaAnchorPoints,
} from '../../HeroBanner.types';
declare type HeroBannerMediaProps = {
  className?: string;
  containMedia?: HeroBannerMediaAnchorPoints;
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  media?: ReactElement;
  variation?: HeroBannerVariations;
};
export type { HeroBannerMediaProps };
