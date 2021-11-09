import React, { ReactNode } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { B as BodyCopyProps } from '../../sharedChunks/BodyCopy.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import { V as VideoProps } from '../../sharedChunks/Video.types';
import '../../sharedChunks/Poster.types';

declare type BackgroundElementProps = {
    className?: string;
    image?: ImageProps;
    mediaType?: 'image' | 'video';
    video?: VideoProps;
};

declare type FullscreenSectionProps = {
    text?: ReactNode;
    theme?: Themes;
};

declare type FullWidthHeroScrollProps = {
    backgroundImage?: BackgroundElementProps['image'];
    backgroundMediaType?: BackgroundElementProps['mediaType'];
    backgroundVideo?: BackgroundElementProps['video'];
    copy?: BodyCopyProps['copy'];
    cta?: {
        englishLabel?: string;
        onClick?: () => void;
        text?: string;
        url?: string;
    };
    eyebrow?: string;
    hasSerifFontHeading?: boolean;
    hasTopOffset?: boolean;
    heading?: string;
    id?: string;
    textBlocks?: {
        text?: FullscreenSectionProps['text'];
    }[];
    theme?: Themes;
};

declare const FullWidthHeroScroll: React.ForwardRefExoticComponent<FullWidthHeroScrollProps & React.RefAttributes<any>>;

export { FullWidthHeroScroll };
