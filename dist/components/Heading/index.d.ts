import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';
declare type HeadingSizes = 'xXSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
declare type HeadingProps = {
    className?: string;
    hasMediumWeightFont?: boolean;
    hasSerifFont?: boolean;
    id?: string;
    isFlush?: boolean;
    level: HeadingLevels;
    size: HeadingSizes;
    theme?: Themes;
};
declare type HeadingType = ComponentWithChildren<HeadingProps>;

declare const Heading: HeadingType;

export { Heading };
