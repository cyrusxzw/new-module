import type { ComponentWithoutChildren, Themes } from '~/types';
import type { ImageProps } from '../Image/Image.types';

type Slide = {
  caption?: string;
  id?: string;
  image: ImageProps;
};

type ImageCarouselProps = {
  autoplaySpeed?: number;
  className?: string;
  hasAutoplay?: boolean;
  hasFlushPagination?: boolean;
  isCompact?: boolean;
  slides?: Slide[];
  theme?: Themes;
};

type ImageCarouselType = ComponentWithoutChildren<ImageCarouselProps>;

export type { ImageCarouselProps, ImageCarouselType };
