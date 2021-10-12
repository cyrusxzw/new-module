import type { Dispatch, SetStateAction } from 'react';
import type { Themes, ComponentWithChildren } from '~/types';
import type { MenuItemNavBarTrackingWithAction } from '~/components/GlobalNavigation/GlobalNavigation.types';

type TabletViewProps = {
  className?: string;
};

type MenuItemNavBarTrackingWithActionType = MenuItemNavBarTrackingWithAction;

type TabletViewType = ComponentWithChildren<TabletViewProps>;

type TabletViewContextType = {
  closedClassName?: string;
  closedLogoTheme?: Themes;
  isShopOpen: boolean;
  openClassName?: string;
  setIsShopOpen: Dispatch<SetStateAction<boolean>>;
};

type TabletViewContextProviderProps = {
  closedClassName?: string;
  closedLogoTheme?: Themes;
  openClassName?: string;
};

type TabletViewContextProviderType = ComponentWithChildren<TabletViewContextProviderProps>;

type UseTabletViewContextStore = (
  props: TabletViewContextProviderProps,
) => TabletViewContextType;

export type {
  MenuItemNavBarTrackingWithActionType,
  TabletViewContextProviderType,
  TabletViewContextType,
  TabletViewType,
  UseTabletViewContextStore,
};
