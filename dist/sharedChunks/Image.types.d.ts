import { CSSProperties } from 'react';
import { T as Themes } from './Themes.types';

declare type ImageProps = {
    altText?: string;
    className?: string;
    cta?: {
        openInANewWindow?: boolean;
        url?: string;
    };
    height?: string;
    id?: string;
    isFullBleedImage?: boolean;
    isLazyLoaded?: boolean;
    sizes?: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
    style?: CSSProperties;
    type?: string;
    theme?: Themes;
    width?: string;
};

export { ImageProps as I };
