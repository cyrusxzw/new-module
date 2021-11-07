import React, { ReactNode } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { V as VideoProps } from '../../sharedChunks/Video.types';
import '../../sharedChunks/Poster.types';

declare type MediaType = 'video' | 'image' | 'scrollbasedvideo';
declare type MediaBlockProps = {
    altText?: string;
    caption?: ReactNode;
    fallbackImage?: VideoProps['fallbackImage'];
    heading?: string;
    link?: {
        hasTargetInNewWindow?: boolean;
        text?: string;
        type?: string;
        url: string;
    };
    poster?: VideoProps['poster'];
    type?: MediaType;
    theme?: Themes;
    sizes: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
};

declare type DoubleMediaProps = {
    className?: string;
    mediaOne?: MediaBlockProps;
    mediaTwo?: MediaBlockProps;
    theme?: Themes;
};

declare const DoubleMedia: React.ForwardRefExoticComponent<DoubleMediaProps & React.RefAttributes<HTMLDivElement>>;

export { DoubleMedia };
