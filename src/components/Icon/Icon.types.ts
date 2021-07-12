import type { ComponentWithoutChildren, Themes } from '~/types';

type SvgName =
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

type Svg = {
  data: { [key: string]: unknown }[];
  height?: string;
  name: SvgName;
  viewBox: string;
  width?: string;
};

type IconProps = {
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

type IconType = ComponentWithoutChildren<IconProps>;

export type { IconProps, IconType, SvgName, Svg };
