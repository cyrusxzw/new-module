import type { ComponentWithChildren, ComponentWithoutChildren } from '~/types';

type DesktopViewProps = {
  className?: string;
};

type DesktopViewType = ComponentWithoutChildren<DesktopViewProps>;

type DesktopViewContextType = {
  closedClassName?: string;
  openClassName?: string;
};

type DesktopViewContextProviderType = ComponentWithChildren<DesktopViewContextType>;

type UseDesktopViewContextStore = (
  props: DesktopViewContextType,
) => DesktopViewContextType;

export type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  DesktopViewType,
  UseDesktopViewContextStore,
};
