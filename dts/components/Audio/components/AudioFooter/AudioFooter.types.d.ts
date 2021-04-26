import type { AudioCopy, ProgressColor } from '../../Audio.types';
declare type OnPlayPauseButtonClick = () => void;
declare type OnSeekBackwardButtonClick = () => void;
declare type OnSeekForwardButtonClick = () => void;
declare type AudioFooterProps = {
  audioUrl?: string;
  copy?: AudioCopy;
  duration?: number;
  isLoading?: boolean;
  isPlaying?: boolean;
  onSeekBackwardButtonClick?: OnSeekBackwardButtonClick;
  onSeekForwardButtonClick?: OnSeekForwardButtonClick;
  onPlayPauseButtonClick?: OnPlayPauseButtonClick;
  progress?: number;
  progressColor?: ProgressColor;
};
export type {
  AudioFooterProps,
  OnPlayPauseButtonClick,
  OnSeekBackwardButtonClick,
  OnSeekForwardButtonClick,
};
