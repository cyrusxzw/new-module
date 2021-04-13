import { isViewport } from '~/utils/viewports';

const getVideoSrc = sizes => {
  const { small, medium, large } = sizes || {};

  if (small && isViewport('xs to sm only')) return small;

  if (medium && isViewport('md only')) return medium;

  if (large && isViewport('lg')) return large;

  return small || medium || large || '';
};

export { getVideoSrc };
