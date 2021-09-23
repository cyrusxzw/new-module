/// <reference types="react" />
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type TwoColumnLayoutType = ComponentWithoutChildren<TwoColumnLayoutProps>;

declare const TwoColumnLayout: TwoColumnLayoutType;

export { TwoColumnLayout };
