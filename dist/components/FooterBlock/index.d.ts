import { ReactNode } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type Link = {
    id?: string;
    openInANewWindow?: boolean;
    text: string;
    url: string;
};
declare type FooterBlockProps = {
    className?: string;
    copy?: ReactNode;
    heading?: string;
    headingClassName?: string;
    isVisibleOnTabletAndMobile?: boolean;
    links?: Link[];
    listClassName?: string;
    listItemClassName?: string;
    theme?: Themes;
};
declare type FooterBlockType = ComponentWithoutChildren<FooterBlockProps>;

declare const FooterBlock: FooterBlockType;

export { FooterBlock };
