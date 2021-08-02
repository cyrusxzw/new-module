import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { L as LinkStyle } from '../../sharedChunks/Hyperlink.types';

/**
 * Not using HyperlinkType as url is not required here
 * @TODO openInANewWindow needs to be updated
 */
declare type HyperlinkItem = {
    id: string;
    text: string;
    style?: LinkStyle;
    url?: string;
    openInANewWindow?: boolean;
};
declare type List = {
    id: string;
    heading?: string;
    subHeading?: string;
    items?: HyperlinkItem[];
};
declare type TwoColumnListProps = {
    className?: string;
    leftColumn: List[];
    rightColumn: List[];
    theme?: Themes;
};

declare const TwoColumnList: React__default.ForwardRefExoticComponent<TwoColumnListProps & React__default.RefAttributes<HTMLDivElement>>;

export { TwoColumnList };
