/// <reference types="react" />
import React from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type LinkButtonGroupProps = {
    children?: JSX.Element | JSX.Element[] /** @todo figure out how to efficiently allow only Button an Hyperlink */;
    className?: string;
    hasFitContent?: boolean;
    isFlush?: boolean;
    isFullWidth?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    theme?: Themes;
};

declare const LinkButtonGroup: ({ children, className, hasFitContent, isFlush, isFullWidth, textAlign, theme, }: LinkButtonGroupProps) => React.ReactElement;

export { LinkButtonGroup };
