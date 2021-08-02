import React__default, { ReactNode } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type BodyCopyProps = {
    childrenClassNames?: {
        eyebrow?: string;
        heading?: string;
        subHeading?: string;
    };
    className?: string;
    content?: ReactNode;
    copy?: ReactNode;
    eyebrow?: string;
    hasFlushHeading?: boolean;
    hasSerifFontHeading?: boolean;
    heading?: string;
    id?: string;
    isHeroArticle?: boolean;
    subHeading?: string;
    theme?: Themes;
};

declare const BodyCopy: React__default.ForwardRefExoticComponent<BodyCopyProps & React__default.RefAttributes<HTMLElement>>;

export { BodyCopy };
