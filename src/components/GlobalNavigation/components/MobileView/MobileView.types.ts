import type {
  ComponentWithoutChildren,
  ComponentWithChildren,
  Themes,
} from '~/types';

type MobileViewContextType = {
  activeNestedCollectionIds: string;
  closedClassName?: string;
  closedTheme?: Themes;
  onNestedCollectionClick: (id: string) => void;
  openClassName?: string;
  setActiveNestedCollectionIds: (ids: string[]) => void;
};

type MobileViewContextProviderProps = {
  closedClassName?: string;
  closedTheme?: Themes;
  openClassName?: string;
};

type MobileViewContextProviderType = ComponentWithChildren<MobileViewContextProviderProps>;

type UseMobileViewContextStore = (
  props: MobileViewContextProviderProps,
) => MobileViewContextType;

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
