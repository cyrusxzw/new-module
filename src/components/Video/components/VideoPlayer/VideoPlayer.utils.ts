import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeViewport,
} from '~/utils/viewports';
import type { VideoPlayerProps } from './VideoPlayer.types';

const getVideoSrc = (sizes: VideoPlayerProps['sizes']): string => {
  const { small, medium, large } = sizes || {};

  if (small && ascertainIsSmallOnlyViewport()) return small;

  if (medium && ascertainIsMediumOnlyViewport()) return medium;

  if (large && ascertainIsLargeViewport()) return large;

  return small || medium || large || '';
};

export { getVideoSrc };
