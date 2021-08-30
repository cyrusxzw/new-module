import type { ComponentWithChildren, ComponentWithoutChildren } from '~/types';

type DesktopViewProps = {
  className?: string;
};

type DesktopViewType = ComponentWithoutChildren<DesktopViewProps>;

type DesktopViewContextType = {
  activeCollectionId: string;
  setActiveCollectionId: (id: string) => void;
};

type DesktopViewContextProviderType = ComponentWithChildren;

type UseDesktopViewContextStore = () => DesktopViewContextType;

export type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  DesktopViewType,
  UseDesktopViewContextStore,
};
