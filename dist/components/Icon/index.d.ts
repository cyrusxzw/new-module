import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type SvgName = '' | 'rightArrow' | 'warning' | 'rightUpArrow' | 'downArrow' | 'plusAndCloseWithCircle' | 'chevron' | 'close' | 'play' | 'pause' | 'muted' | 'unmuted' | 'aesop' | 'download' | 'seek' | 'scrolldown';
declare type IconProps = {
    className?: string;
    dataRef?: string;
    height?: number;
    isActive?: boolean;
    name: SvgName;
    tabIndex?: number;
    theme?: Themes;
    title?: string;
    width?: number;
};
declare type IconType = ComponentWithoutChildren<IconProps>;

declare const Icon: IconType;

export { Icon };
