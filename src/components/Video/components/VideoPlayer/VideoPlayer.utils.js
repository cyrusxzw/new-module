import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeViewport,
} from '~/utils/viewports';

const getVideoSrc = sizes => {
  const { small, medium, large } = sizes || {};

  if (small && ascertainIsSmallOnlyViewport()) return small;

  if (medium && ascertainIsMediumOnlyViewport()) return medium;

  if (large && ascertainIsLargeViewport()) return large;

  return small || medium || large || '';
};

export { getVideoSrc };
