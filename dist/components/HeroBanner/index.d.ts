import React, { ReactNode, ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type HeroBannerMediaAnchorPoints = 'center' | 'left' | 'right' | 'bottom' | 'top';
declare type HeroBannerVariations = 'article-header' | 'default' | 'fifty-fifty' | 'full-display' | 'landing-header' | 'wide-header';
declare type HeroBannerCopy = {
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
};
declare type HeroBannerProps = {
    backgroundColor?: string;
    className?: string;
    containMedia?: HeroBannerMediaAnchorPoints;
    content?: ReactNode;
    copy?: HeroBannerCopy;
    foregroundImage?: ReactElement;
    foregroundImageLink?: {
        url?: string;
        title?: string;
    };
    hasSerifFontHeading?: boolean;
    hasTopOffset?: boolean;
    media: ReactElement;
    theme?: Themes;
    variation?: HeroBannerVariations;
};

declare const HeroBanner: React.ForwardRefExoticComponent<HeroBannerProps & React.RefAttributes<HTMLDivElement>>;

export { HeroBanner };
