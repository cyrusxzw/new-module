import { MouseEvent } from 'react';
import { ComponentWithoutChildren } from '~/types';

type PosterProps = {
  className?: string;
  copy?: {
    playButtonTitle?: string;
    altText?: string;
  };
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  sizes?: {
    small?: string;
    medium?: string;
    large?: string;
    xLarge?: string;
    xSmall?: string;
  };
};

type PosterType = ComponentWithoutChildren<PosterProps>;

export type { PosterType, PosterProps };
