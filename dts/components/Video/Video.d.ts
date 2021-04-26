import React from 'react';
declare const Video: React.ForwardRefExoticComponent<
  Pick<import('./components/Controls/Controls.types').ControlsProps, 'copy'> & {
    captions?: {
      copy?: {
        toggleButtonTitleOn?: string;
        toggleButtonTitleOff?: string;
      };
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
    isFullWidth?: boolean;
    isHeroFullWidth?: boolean;
    isHeroFullWidthMobile?: boolean;
    isScrollBasedVideo?: boolean;
    large?: string;
    medium?: string;
    poster?: Pick<
      import('./components/Poster/Poster.types').PosterProps,
      'copy' | 'className' | 'onClick' | 'isActive'
    > &
      Pick<
        {
          small?: string;
          medium?: string;
          large?: string;
        },
        'small' | 'medium' | 'large'
      >;
    small?: string;
  } & React.RefAttributes<HTMLDivElement>
>;
export { Video };
