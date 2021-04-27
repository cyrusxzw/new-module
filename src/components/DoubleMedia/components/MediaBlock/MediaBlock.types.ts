import type { ReactNode } from 'react';
import type { VideoProps } from '~/components/Video/Video.types';
import type { Themes } from '~/types';

type MediaType = 'video' | 'image' | 'scrollbasedvideo';

type MediaBlockProps = {
  altText?: string;
  caption?: ReactNode;
  fallbackImage?: VideoProps['fallbackImage'];
  heading?: string;
  link?: {
    hasTargetInNewWindow?: boolean;
    text?: string;
    type?: string;
    url: string;
  };
  poster?: VideoProps['poster'];
  type?: MediaType;
  theme?: Themes;
  sizes: {
    large?: string;
    medium?: string;
    small?: string;
    xLarge?: string;
    xSmall?: string;
  };
};

export type { MediaBlockProps };
