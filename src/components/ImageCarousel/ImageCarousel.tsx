import React from 'react';
import { Carousel } from '~/components/Carousel';
import type { ImageCarouselType } from './ImageCarousel.types';

const ImageCarousel: ImageCarouselType = ({
  autoplaySpeed = 3000,
  className,
  hasAutoplay = false,
  hasFlushPagination = false,
  isCompact = false,
  slides = [],
  theme,
}) => (
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
