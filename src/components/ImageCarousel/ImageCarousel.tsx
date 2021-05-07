import React, { ReactElement } from 'react';
import { Carousel } from '~/components/Carousel';
import type { ImageCarouselProps } from './ImageCarousel.types';

const ImageCarousel = ({
  autoplaySpeed = 3000,
  className,
  hasAutoplay = false,
  hasFlushPagination = false,
  isCompact = false,
  slides = [],
  theme,
}: ImageCarouselProps): ReactElement | null => (
  <Carousel
    autoplaySpeed={autoplaySpeed}
    className={className}
    hasAutoplay={hasAutoplay}
    hasFlushPagination={hasFlushPagination}
    hasFullWidthSlides={true}
    hasShowCaption={true}
    hasSlideCounter={true}
    isCompact={isCompact}
    slides={slides}
    theme={theme}
  />
);

export { ImageCarousel };
