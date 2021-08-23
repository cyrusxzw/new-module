import type { ComponentWithoutChildren, ComponentWithChildren } from '~/types';

type MobileViewContextType = {
  activeCollectionId: string;
  activeNestedCollectionIds: string;
  onBackButtonClick: () => void;
  onCollectionClick: (id: string) => void;
  onNestedCollectionClick: (id: string) => void;
  setActiveCollectionId: (id: string) => void;
  setActiveNestedCollectionIds: (ids: string[]) => void;
};

type MobileViewContextProviderType = ComponentWithChildren;

type UseMobileViewContextStore = () => MobileViewContextType;

type MobileViewProps = {
  className?: string;
};

type MobileViewType = ComponentWithoutChildren<MobileViewProps>;

export type {
  MobileViewContextType,
  MobileViewContextProviderType,
  UseMobileViewContextStore,
  MobileViewType,
};
