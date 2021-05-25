/// <reference types="react" />
import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type Levels = '1' | '2' | '3' | '4' | '5' | '6';
declare type Sizes = 'xXSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
declare type HeadingProps = {
    children?: React.ReactNode;
    className?: string;
    hasMediumWeightFont?: boolean;
    hasSerifFont?: boolean;
    id?: string;
    isFlush?: boolean;
    level: Levels;
    size: Sizes;
    theme?: Themes;
};

declare const Heading: FC<HeadingProps>;

export { Heading };
