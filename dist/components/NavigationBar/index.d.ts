import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { H as HyperlinkProps } from '../../sharedChunks/Hyperlink.types';
import 'react';
import '../../sharedChunks/Themes.types';

declare type Link = Pick<HyperlinkProps, 'hasTargetInNewWindow' | 'url'> & {
    text: string;
};
declare type NavigationBarProps = {
    childLinks?: Link[];
    className?: string;
    parentLink?: Link;
    selectedUrl?: string;
};
declare type NavigationBarType = ComponentWithoutChildren<NavigationBarProps>;

declare const NavigationBar: NavigationBarType;

export { NavigationBar };
