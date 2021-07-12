import type { LegacyRef } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';
import type { ImageProps } from '../Image/Image.types';
import type { CarouselIntroductionProps } from './components/CarouselIntroduction/CarouselIntroduction.types';

type Slide = {
  caption?: string;
  description?: string;
  heading?: string;
  id?: string;
  isLoading?: boolean;
  image: ImageProps;
  url?: string;
};

type CarouselProps = {
  autoplaySpeed?: number;
  className?: string;
  hasAutoplay?: boolean;
  hasFlushPagination?: boolean;
  hasFullWidthSlides?: boolean;
  hasShowCaption?: boolean;
  hasSlideCounter?: boolean;
  id?: string;
  initialSlideIndex?: number;
  introduction?: Omit<CarouselIntroductionProps, 'theme'>;
  isCompact?: boolean;
  slides?: Slide[];
  slideRefs?: LegacyRef<HTMLDivElement>[];
  theme?: Themes;
};

type CarouselType = ComponentWithoutChildren<CarouselProps>;

export type { CarouselProps, CarouselType };
