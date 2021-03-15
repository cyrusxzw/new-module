import { ReactElement, ReactNode } from 'react';
import type { Themes } from '~/types';

type AnchorPoints = 'center' | 'left' | 'right';

type HeroBannerProps = {
  backgroundColor?: string;
  className?: string;
  containMedia?: AnchorPoints;
  content?: ReactNode;
  copy?: {
    description?: string;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
  };
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  hasFullWidthMedia?: boolean;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  isReverse?: boolean;
  media: ReactElement;
  theme?: Themes;
};

export type { HeroBannerProps };
