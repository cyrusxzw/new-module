import { CSSProperties } from 'react';
import type { Themes } from '~/types';

type ImageSizeName = 'large' | 'medium' | 'small' | 'xLarge' | 'xSmall';
type ImageSizeCode = 'lg' | 'md' | 'sm' | 'xl' | 'xs';

type ImageProps = {
  altText?: string;
  className?: string;
  cta?: {
    openInANewWindow?: boolean;
    url?: string;
  };
  id?: string;
  isFullBleedImage?: boolean;
  isLazyLoaded?: boolean;
  sizes: {
    large?: string;
    medium?: string;
    small?: string;
    xLarge?: string;
    xSmall?: string;
  };
  style?: CSSProperties;
  type?: string;
  theme?: Themes;
};

export type { ImageProps, ImageSizeName, ImageSizeCode };
