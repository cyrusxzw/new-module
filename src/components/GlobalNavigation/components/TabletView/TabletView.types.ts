import type { Dispatch, SetStateAction } from 'react';
import type { ComponentWithChildren } from '~/types';

type TabletViewProps = {
  className?: string;
};

type TabletViewType = ComponentWithChildren<TabletViewProps>;

type TabletViewContextType = {
  closedClassName?: string;
  openClassName?: string;
  isShopOpen: boolean;
  setIsShopOpen: Dispatch<SetStateAction<boolean>>;
};

type TabletViewContextProviderProps = {
  closedClassName?: string;
  openClassName?: string;
};

type TabletViewContextProviderType = ComponentWithChildren<TabletViewContextProviderProps>;

type UseTabletViewContextStore = (
  props: TabletViewContextProviderProps,
) => TabletViewContextType;

export type {
  TabletViewContextProviderType,
  TabletViewContextType,
  TabletViewType,
  UseTabletViewContextStore,
};
