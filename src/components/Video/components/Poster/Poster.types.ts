import { MouseEvent } from 'react';
import type { ImageProps } from '~/components/Image/Image.types';

type PosterProps = {
  className?: string;
  copy?: {
    playButtonTitle?: string;
    altText?: string;
  };
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  sizes?: Pick<ImageProps, 'small' | 'medium' | 'large'>;
};

export type { PosterProps };
