import type { ReactElement } from 'react';
import type { ComponentWithoutChildren } from '~/types';
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

type HeroBannerMediaType = ComponentWithoutChildren<HeroBannerMediaProps>;

export type { HeroBannerMediaProps, HeroBannerMediaType };
