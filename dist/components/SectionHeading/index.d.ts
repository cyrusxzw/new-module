import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type SectionHeadingProps = {
    childrenClassNames?: {
        eyebrow?: string;
        heading?: string;
        subHeading?: string;
    };
    className?: string;
    eyebrow?: string;
    hasSerifFontHeading?: boolean;
    heading?: string;
    id?: string;
    isFlush?: boolean;
    isOffsetPageHeading?: boolean;
    isHeroHeading?: boolean;
    isPageHeading?: boolean;
    subHeading?: string;
    theme?: Themes;
    titleFont?: 'Suisse' | 'Zapf';
};

declare const SectionHeading: ({ childrenClassNames, className, eyebrow, hasSerifFontHeading, heading, id, isFlush, isOffsetPageHeading, isHeroHeading, isPageHeading, subHeading, theme, titleFont, }: SectionHeadingProps) => ReactElement | null;

export { SectionHeading };
