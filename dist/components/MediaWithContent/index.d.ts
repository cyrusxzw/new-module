/// <reference types="react" />
import React$1 from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ContentCopy = {
    description?: React.ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
};

declare type ContainMedia = 'center' | 'left' | 'right';
declare type ForegroundImageLink = {
    url: string;
    title: string;
};
declare type MediaWithContentProps = {
    backgroundColor?: string;
    className?: string;
    containMedia?: ContainMedia;
    content?: React.ReactNode;
    copy: ContentCopy;
    foregroundImage?: JSX.Element;
    foregroundImageLink?: ForegroundImageLink;
    hasFullWidthImage?: boolean;
    hasSerifFontHeading?: boolean;
    isReverse?: boolean;
    media: JSX.Element;
    theme?: Themes;
};

declare const MediaWithContent: React$1.ForwardRefExoticComponent<MediaWithContentProps & React$1.RefAttributes<HTMLDivElement>>;

export { MediaWithContent };
