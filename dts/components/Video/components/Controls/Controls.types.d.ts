import { MouseEvent } from 'react';
declare type ControlsProps = {
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
export type { ControlsProps };
