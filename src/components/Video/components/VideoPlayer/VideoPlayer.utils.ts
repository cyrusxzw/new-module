import { isViewport } from '~/utils/viewport';
import type { VideoPlayerProps } from './VideoPlayer.types';

const getVideoSrc = (sizes: VideoPlayerProps['sizes']): string => {
  const { small, medium, large, xLarge, xSmall } = sizes || {};

  if (isViewport('xs only') && (xSmall || small)) return xSmall || small;

  if (isViewport('sm only') && small) return small;

  if (isViewport('md only') && medium) return medium;

  if (isViewport('lg to x2l only') && large) return large;

  if (isViewport('x3l') && (xLarge || large)) return xLarge || large;

  return small || medium || large || '';
};

export { getVideoSrc };
