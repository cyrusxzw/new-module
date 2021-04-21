import type { ReactNode } from 'react';
import type { VideoProps } from '~/components/Video/Video.types';
import type { Themes } from '~/types';

type MediaType = 'video' | 'image' | 'scrollbasedvideo';

type MediaBlockProps = {
  altText?: string;
  caption?: ReactNode;
  fallbackImage?: VideoProps['fallbackImage'];
  heading?: string;
  large?: string;
  link?: {
    hasTargetInNewWindow?: boolean;
    text?: string;
    type?: string;
    url: string;
  };
  medium?: string;
  poster?: VideoProps['poster'];
  small?: string;
  type?: MediaType;
  theme?: Themes;
};

export type { MediaBlockProps };
