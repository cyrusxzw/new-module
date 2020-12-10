import { BREAKPOINTS } from '~/constants';
import { isInBrowser } from '~/utils/environment';

/**
sm
sm-md-only
sm-xl-only
md-only
md
lg-only
lg
lg-xl-only
xl-only
xl
xxl-only
*/

const useViewportSizeStore = size => {
  const IS_VIEWPORT_SMALL_ONLY = `(max-width: ${BREAKPOINTS.SMALL.MAX_WIDTH}px)`;
  const IS_VIEWPORT_MEDIUM = `(min-width: ${BREAKPOINTS.MEDIUM.MIN_WIDTH}px)`;
  const IS_VIEWPORT_MEDIUM_ONLY = `(min-width: ${BREAKPOINTS.MEDIUM.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.MEDIUM.MAX_WIDTH}px)`;
  const IS_VIEWPORT_SMALL_MEDIUM_ONLY = `(max-width: ${BREAKPOINTS.MEDIUM.MAX_WIDTH}px)`;
  const IS_VIEWPORT_LARGE = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px)`;
  const IS_VIEWPORT_LARGE_ONLY = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.LARGE.MAX_WIDTH}px)`;
  const IS_VIEWPORT_XLARGE = `(min-width: ${BREAKPOINTS.XLARGE.MIN_WIDTH}px)`;
  const IS_VIEWPORT_XLARGE_ONLY = `(min-width: ${BREAKPOINTS.XLARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
  const IS_VIEWPORT_LARGE_XLARGE_ONLY = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
  const IS_VIEWPORT_SMALL_TO_XLARGE_ONLY = `(max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
  const IS_VIEWPORT_XXLARGE = `(min-width: ${BREAKPOINTS.XXLARGE.MIN_WIDTH}px)`;

  const isSmallOnlyViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_SMALL_ONLY).matches : false;

  const isSmallOrMediumOnlyViewport = () =>
    isInBrowser()
      ? window.matchMedia(IS_VIEWPORT_SMALL_MEDIUM_ONLY).matches
      : false;

  const isMediumViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_MEDIUM).matches : false;

  const isMediumOnlyViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_MEDIUM_ONLY).matches : false;

  const isLargeViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_LARGE).matches : false;

  const isLargeOnlyViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_LARGE_ONLY).matches : false;

  const isLargeOrXLargeOnlyViewport = () =>
    isInBrowser()
      ? window.matchMedia(IS_VIEWPORT_LARGE_XLARGE_ONLY).matches
      : false;

  const isXLargeViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_XLARGE).matches : false;

  const isSmallToXLargeViewport = () =>
    isInBrowser()
      ? window.matchMedia(IS_VIEWPORT_SMALL_TO_XLARGE_ONLY).matches
      : false;

  const isXLargeOnlyViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_XLARGE_ONLY).matches : false;

  const isXXLargeViewport = () =>
    isInBrowser() ? window.matchMedia(IS_VIEWPORT_XXLARGE).matches : false;

  return {};
};

export { useViewportSizeStore };
