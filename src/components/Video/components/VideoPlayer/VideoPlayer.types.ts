type VideoPlayerProps = {
  captions?: {
    fileUrl?: string;
    languageCode?: string;
    languageLabel?: string;
  };
  className?: string;
  hasActiveVideo?: boolean;
  hasAllowAudio?: boolean;
  hasAutoplay?: boolean;
  hasLoop?: boolean;
  hasNativeControls?: boolean;
  hasPlayInFullScreen?: boolean;
  isActive?: boolean;
  isBackground?: boolean;
  isMuted?: boolean;
  sizes?: {
    large?: string;
    medium?: string;
    small?: string;
  };
};

export type { VideoPlayerProps };
