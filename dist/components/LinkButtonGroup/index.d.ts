import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type LinkButtonGroupProps = {
    children?: JSX.Element | JSX.Element[] /** @TODO figure out how to efficiently allow only Button an Hyperlink */;
    className?: string;
    hasFitContent?: boolean;
    isFlush?: boolean;
    isFullWidth?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    theme?: Themes;
};
declare type LinkButtonGroupType = (props: LinkButtonGroupProps) => ReactElement | null;

declare const LinkButtonGroup: LinkButtonGroupType;

export { LinkButtonGroup };
