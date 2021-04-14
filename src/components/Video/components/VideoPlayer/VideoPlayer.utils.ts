import { isViewport } from '~/utils/viewport';
import type { VideoPlayerProps } from './VideoPlayer.types';

const getVideoSrc = (sizes: VideoPlayerProps['sizes']): string => {
  const { small, medium, large } = sizes || {};

  if (small && isViewport('xs to sm only')) return small;

  if (medium && isViewport('md only')) return medium;

  if (large && isViewport('lg')) return large;

  return small || medium || large || '';
};

export { getVideoSrc };
