/// <reference types="react" />
import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type TwoColumnLayoutProps = {
    childrenClassNames?: {
        sidebar?: string;
        content?: string;
    };
    className?: string;
    content: React.ReactNode;
    hasFullWidthContent?: boolean;
    id?: string;
    isFlushOnSmall?: boolean;
    isReversed?: boolean;
    sidebar?: React.ReactNode;
    theme?: Themes;
};

declare const TwoColumnLayout: ({ childrenClassNames, className, content, hasFullWidthContent, id, isFlushOnSmall, isReversed, sidebar, theme, }: TwoColumnLayoutProps) => ReactElement;

export { TwoColumnLayout };
