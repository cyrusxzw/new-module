import React from 'react';
import { BREAKPOINTS } from '~/constants';

const getCarouselSettings = ({
  autoplaySpeed,
  className,
  hasAutoplay,
  hasFlushPagination,
  hasFullWidthSlides,
  initialSlideIndex,
  isNextButtonActive,
  isPreviousButtonActive,
  Pagination,
  NextButton,
  PreviousButton,
  progressIndex,
  theme,
}) => ({
  autoplay: hasAutoplay,
  autoplaySpeed: autoplaySpeed,
  appendDots: dots => (
    <Pagination
      dots={dots}
      fullWidth={hasFullWidthSlides}
      hasFlushPagination={hasFlushPagination}
      progressIndex={progressIndex}
      theme={theme}
    />
  ),
  centerMode: false,
  className,
  customPaging: () => <div />,
  dots: true,
  infinite: hasFullWidthSlides,
  initialSlide: initialSlideIndex,
  nextArrow: <NextButton isActive={isNextButtonActive} theme={theme} />,
  prevArrow: <PreviousButton isActive={isPreviousButtonActive} theme={theme} />,
  responsive: [
    {
      breakpoint: BREAKPOINTS.SMALL.MAX_WIDTH,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.MEDIUM.MAX_WIDTH,
      settings: {
        slidesToShow: hasFullWidthSlides ? 1 : 2,
      },
    },
    {
      breakpoint: BREAKPOINTS.XXLARGE.MIN_WIDTH,
      settings: {
        slidesToShow: hasFullWidthSlides ? 1 : 3,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: hasFullWidthSlides ? 1 : 4,
  speed: 500,
  swipeToSlide: true,
});

export { getCarouselSettings };
