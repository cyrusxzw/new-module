import type { Themes, ComponentWithChildren } from '~/types';

type TabletViewProps = {
  className?: string;
  theme?: Themes;
};

type TabletViewType = ComponentWithChildren<TabletViewProps>;

export type { TabletViewType };
