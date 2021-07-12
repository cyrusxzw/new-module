import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';
import type {
  HeroBannerCopy,
  HeroBannerVariations,
} from '../../HeroBanner.types';

type HeroBannerContentProps = {
  className?: string;
  content?: ReactNode;
  copy?: HeroBannerCopy;
  hasNoMedia?: boolean;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  theme?: Themes;
  variation?: HeroBannerVariations;
};

type HeroBannerContentType = ComponentWithoutChildren<HeroBannerContentProps>;

export type { HeroBannerContentProps, HeroBannerContentType };
