import { MouseEvent } from 'react';
import { ComponentWithoutChildren } from '~/types';

type ControlsProps = {
  captions?: {
    isActive?: boolean;
    onToggleClick?: () => void;
    shouldShowToggleButton?: boolean;
    copy?: {
      toggleButtonTitleOn?: string;
      toggleButtonTitleOff?: string;
    };
  };
  className?: string;
  copy?: {
    closeButtonTitle?: string;
    muteButtonTitle?: string;
    pauseButtonTitle?: string;
    playButtonTitle?: string;
    unmuteButtonTitle?: string;
  };
  hasActiveVideo?: boolean;
  hasAllowAudio?: boolean;
  hasPlayInFullScreen?: boolean;
  isMobileOrTablet?: boolean;
  isMuted?: boolean;
  isPlaying?: boolean;
  onAudioButtonClick?: (event: MouseEvent) => void;
  onCloseButtonClick?: (event?: MouseEvent) => void;
  onPlayPauseButtonClick?: (event: MouseEvent) => void;
  progress?: number;
};

type ControlsType = ComponentWithoutChildren<ControlsProps>;

export type { ControlsType, ControlsProps };
