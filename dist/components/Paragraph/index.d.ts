import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type ParagraphProps = {
    className?: string;
    hasSerifFont?: boolean;
    isFlush?: boolean;
    isHero?: boolean;
    isLarge?: boolean;
    theme?: Themes;
};
declare type ParagraphType = ComponentWithChildren<ParagraphProps>;
declare type ParagraphSetProps = {
    className?: string;
    isLarge?: boolean;
    theme?: Themes;
};
declare type ParagraphSetType = ComponentWithChildren<ParagraphSetProps>;

declare const Paragraph: ParagraphType;
declare const ParagraphSet: ParagraphSetType;

export { Paragraph as P, Paragraph, ParagraphSet };
