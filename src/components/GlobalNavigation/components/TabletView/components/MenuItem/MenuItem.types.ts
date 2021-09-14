import type { ComponentWithChildren } from '~/types';

type MenuItemProps = {
  isActive?: boolean;
};

type MenuItemType = ComponentWithChildren<MenuItemProps>;

export type { MenuItemType };
