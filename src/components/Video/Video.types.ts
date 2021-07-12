import type { ControlsProps } from './components/Controls/Controls.types';
import type { PosterProps } from './components/Poster/Poster.types';

type VideoProps = Pick<ControlsProps, 'copy'> & {
  captions?: {
    copy?: ControlsProps['captions']['copy'];
    fileUrl?: string;
    isActiveOnLoad?: boolean;
    languageCode?: string;
    languageLabel?: string;
    shouldShowToggleButton?: boolean;
  };
  className?: string;
  fallbackImage?: {
    className?: string;
    copy?: {
      altText?: string;
    };
    sizes?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
  hasAllowAudio?: boolean;
  hasAutoplay?: boolean;
  hasControls?: boolean;
  hasLoop?: boolean;
  hasNativeControls?: boolean;
  hasPlayInFullScreen?: boolean;
  hasSpanContent?: boolean;
  id?: string;
  isBackground?: boolean;
  /**
    `isFullWidth` is set true by default and this will allow videos to display at the correct aspect ratio.
    In the event that a different, more fluid ratio is required, set this prop to false, this will collapse the hight of the Video,
    but it will react to the height of the surrounding element.
  */
  isFullWidth?: boolean;
  /**
    This prop negates the 16:9 aspect ratio on tablet so Full Width Hero Videos fill any available space.
   */
  isHeroFullWidth?: boolean;
  isHeroFullWidthMobile?: boolean;
  isScrollBasedVideo?: boolean;
  poster?: PosterProps;
  sizes?: {
    large?: string;
    medium?: string;
    small?: string;
    xLarge?: string;
    xSmall?: string;
  };
};

export type { VideoProps };
