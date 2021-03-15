import { ReactElement } from 'react';

type MediaAnchorPoints = 'center' | 'left' | 'right';

type HeroBannerMediaProps = {
  className?: string;
  containMedia?: MediaAnchorPoints;
  foregroundImage?: ReactElement;
  foregroundImageLink?: {
    url?: string;
    title?: string;
  };
  hasFullWidthMedia?: boolean;
  media: ReactElement;
};

export type { HeroBannerMediaProps };
