import { FC, ReactNode } from 'react';
import type { Themes } from '~/types';
import type { NextButtonProps } from './components/NextButton/NextButton.types';
import type { PaginationProps } from './components/Pagination/Pagination.types';
import type { PreviousButtonProps } from './components/PreviousButton/PreviousButton.types';
declare type GetCarouselSettingsArgs = {
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
declare type GetCarouselSettingsReturn = {
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
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
  slidesToScroll: number;
  slidesToShow: number;
  speed: 500;
  swipeToSlide: boolean;
};
declare const getCarouselSettings: ({
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
}: GetCarouselSettingsArgs) => GetCarouselSettingsReturn;
export { getCarouselSettings };
