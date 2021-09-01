import type { Aria, ComponentWithoutChildren, Themes } from '~/types';

type SvgName =
  | ''
  | 'aesop'
  | 'chevron'
  | 'close'
  | 'downArrow'
  | 'download'
  | 'muted'
  | 'pause'
  | 'play'
  | 'plusAndCloseWithCircle'
  | 'rightArrow'
  | 'rightUpArrow'
  | 'scrolldown'
  | 'search'
  | 'seek'
  | 'unmuted'
  | 'warning';

type Svg = {
  data: { [key: string]: unknown }[];
  height?: string;
  name: SvgName;
  viewBox: string;
  width?: string;
};

type IconProps = {
  aria?: Pick<Aria, 'hidden'>;
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
