import { ReactNode } from 'react';
import type { Themes } from '~/types';
import type {
  HeroBannerCopy,
  HeroBannerVariations,
} from '../../HeroBanner.types';

type HeroBannerContentProps = {
  className?: string;
  content?: ReactNode;
  copy?: HeroBannerCopy;
  hasFullWidthMedia?: boolean;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  theme?: Themes;
  variation?: HeroBannerVariations;
};

export type { HeroBannerContentProps };
