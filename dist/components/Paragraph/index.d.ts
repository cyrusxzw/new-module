import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ParagraphProps = {
    className?: string;
    hasSerifFont?: boolean;
    isFlush?: boolean;
    isHero?: boolean;
    isLarge?: boolean;
    theme?: Themes;
};
declare type ParagraphSetProps = {
    className?: string;
    isLarge?: boolean;
    theme?: Themes;
};

declare const Paragraph: FC<ParagraphProps>;
declare const ParagraphSet: FC<ParagraphSetProps>;

export { Paragraph as P, Paragraph, ParagraphSet };
