import React__default, { MouseEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { L as LinkStyle } from '../../sharedChunks/Hyperlink.types';

declare type SubNavLink = {
    children: string /** @TODO change this prop api to content or text  */;
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
    onSelectCallback?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

declare const SubNav: React__default.ForwardRefExoticComponent<SubNavProps & React__default.RefAttributes<HTMLElement>>;

export { SubNav };
