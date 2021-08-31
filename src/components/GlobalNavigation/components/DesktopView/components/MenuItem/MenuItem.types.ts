import type { ReactNode } from 'react';
import type { ComponentWithChildren } from '~/types';

type MenuItemProps = {
  dataTestRef?: string;
  id: string;
  label: ReactNode;
  onClick?: () => void;
  title: string;
  type: 'trigger' | 'link';
  url?: string;
};

type MenuItemContextType = {
  id?: string;
  isActive: boolean;
};

type MenuItemContextProviderType = ComponentWithChildren<MenuItemContextType>;

type MenuItemType = ComponentWithChildren<MenuItemProps>;

export type {
  MenuItemContextProviderType,
  MenuItemContextType,
  MenuItemProps,
  MenuItemType,
};
