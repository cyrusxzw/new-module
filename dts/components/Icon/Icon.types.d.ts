import type { Themes } from '~/types';
declare type SvgName =
  | ''
  | 'rightArrow'
  | 'warning'
  | 'rightUpArrow'
  | 'downArrow'
  | 'plusAndCloseWithCircle'
  | 'chevron'
  | 'close'
  | 'play'
  | 'pause'
  | 'muted'
  | 'unmuted'
  | 'aesop'
  | 'download'
  | 'seek'
  | 'scrolldown';
declare type Svg = {
  data: {
    [key: string]: unknown;
  }[];
  height?: string;
  name: SvgName;
  viewBox: string;
  width?: string;
};
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
export type { IconProps, SvgName, Svg };
