import React, { MouseEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { L as LinkStyle } from '../../sharedChunks/Hyperlink.types';

declare type SubNavLink = {
    children: string /** @todo change this prop api to content or text  */;
    id?: string;
    hasTargetInNewWindow?: boolean;
    style?: LinkStyle;
    url: string;
    onClick?: (event: MouseEvent) => void;
};
declare type SubNavProps = {
    className?: string;
    id: string;
    isSelect?: boolean;
    links: SubNavLink[];
    heading?: string;
    headingClassName?: string;
    theme?: Themes;
};

declare const SubNav: React.ForwardRefExoticComponent<SubNavProps & React.RefAttributes<HTMLElement>>;

export { SubNav };
