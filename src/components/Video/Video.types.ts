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
    copy?: {
      altText?: string;
    };
    small?: string;
    medium?: string;
    large?: string;
    className?: string;
  };
  hasControls?: boolean;
  hasNativeControls?: boolean;
  hasAllowAudio?: boolean;
  hasAutoplay?: boolean;
  hasLoop?: boolean;
  hasSpanContent?: boolean;
  hasPlayInFullScreen?: boolean;
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
  large?: string;
  medium?: string;
  poster?: Omit<PosterProps, 'sizes'> &
    Pick<PosterProps['sizes'], 'small' | 'medium' | 'large'>;
  small?: string;
};

export type { VideoProps };
