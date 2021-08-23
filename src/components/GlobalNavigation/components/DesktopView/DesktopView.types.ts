import type { Themes, ComponentWithChildren } from '~/types';

type DesktopViewProps = {
  className?: string;
  theme?: Themes;
};

type DesktopViewType = ComponentWithChildren<DesktopViewProps>;

export type { DesktopViewType };
