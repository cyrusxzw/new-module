import React, { FC, ReactNode } from 'react';
import { BREAKPOINTS } from '~/constants';
import type { Themes } from '~/types';
import type { NextButtonProps } from './components/NextButton/NextButton.types';
import type { PaginationProps } from './components/Pagination/Pagination.types';
import type { PreviousButtonProps } from './components/PreviousButton/PreviousButton.types';

type GetCarouselSettingsArgs = {
  autoplaySpeed: number;
  className: string;
  hasAutoplay: boolean;
  hasFlushPagination: boolean;
  hasFullWidthSlides: boolean;
  initialSlideIndex: number;
  isNextButtonActive: boolean;
  isPreviousButtonActive: boolean;
  Pagination: FC<PaginationProps>;
  NextButton: FC<NextButtonProps>;
  PreviousButton: FC<PreviousButtonProps>;
  progressIndex: number;
  theme: Themes;
};

type GetCarouselSettingsReturn = {
  autoplay: boolean;
  autoplaySpeed: number;
  appendDots: (dots: any) => ReactNode;
  centerMode: boolean;
  className: string;
  customPaging: ReactNode;
  dots: boolean;
  infinite: boolean;
  initialSlide: number;
  nextArrow: ReactNode;
  prevArrow: ReactNode;
  responsive: { breakpoint: number; settings: { slidesToShow: number } }[];
  slidesToScroll: number;
  slidesToShow: number;
  speed: 500;
  swipeToSlide: boolean;
};

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
}: GetCarouselSettingsArgs): GetCarouselSettingsReturn => ({
  autoplay: hasAutoplay,
  autoplaySpeed: autoplaySpeed,
  appendDots: dots => (
    <Pagination
      dots={dots}
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
      breakpoint: BREAKPOINTS.get('sm').maxWidth,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.get('md').maxWidth,
      settings: {
        slidesToShow: hasFullWidthSlides ? 1 : 2,
      },
    },
    {
      breakpoint: BREAKPOINTS.get('x2l').minWidth,
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
