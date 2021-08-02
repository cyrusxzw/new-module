/// <reference types="react" />
import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ContentCopy = {
    description?: React.ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
};

declare type ContainMedia = 'center' | 'left' | 'right';
declare type ForegroundImageLink = {
    onClick?: () => void;
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

declare const MediaWithContent: React__default.ForwardRefExoticComponent<MediaWithContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { MediaWithContent };
