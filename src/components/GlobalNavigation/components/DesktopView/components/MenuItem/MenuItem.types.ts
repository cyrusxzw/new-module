import type { ReactNode } from 'react';
import type { ComponentWithChildren } from '~/types';

type MenuItemProps = {
  dataTestRef?: string;
  dataTestId?: string;
  id: string;
  label: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
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
