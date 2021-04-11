import { MouseEvent } from 'react';

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
  };
};

export type { PosterProps };
