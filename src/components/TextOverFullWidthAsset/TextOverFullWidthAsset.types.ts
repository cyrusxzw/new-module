import type { ReactNode } from 'react';
import type { ComponentWithoutChildren } from '~/types';
import type { ImageProps } from '../Image/Image.types';
import type { VideoProps } from '../Video/Video.types';

export type TextOverFullWidthAssetProps = {
  backgroundImage?: ImageProps;
  backgroundVideo?: VideoProps;
  className?: string;
  content: ReactNode;
  copyHeight?: 'Top' | 'Bottom';
  copySide?: 'Left' | 'Right';
  mediaType: 'Image' | 'Video';
};

type TextOverFullWidthAssetType = ComponentWithoutChildren<TextOverFullWidthAssetProps>;

export type { TextOverFullWidthAssetType };
