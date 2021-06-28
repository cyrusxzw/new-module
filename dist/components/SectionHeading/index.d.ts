import { ReactNode } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
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
    subHeading?: ReactNode;
    theme?: Themes;
    titleFont?: 'Suisse' | 'Zapf';
};
declare type SectionHeadingType = ComponentWithoutChildren<SectionHeadingProps>;

declare const SectionHeading: SectionHeadingType;

export { SectionHeading };
