import { C as ControlsProps, P as PosterProps } from '../../sharedChunks/Poster.types';
import React__default from 'react';

declare const Video: React__default.ForwardRefExoticComponent<Pick<ControlsProps, "copy"> & {
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
    isFullWidth?: boolean;
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
} & React__default.RefAttributes<HTMLDivElement>>;

export { Video };
