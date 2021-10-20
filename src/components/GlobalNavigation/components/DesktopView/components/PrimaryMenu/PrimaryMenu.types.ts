import type { ComponentWithoutChildren } from '~/types';
import type { MenuItemNavBarTrackingWithAction } from '~/components/GlobalNavigation/GlobalNavigation.types';

type PrimaryMenuProps = {
  onClose: () => void;
};

type PrimaryMenuType = ComponentWithoutChildren<PrimaryMenuProps>;

type MenuItemNavBarTrackingWithActionType = MenuItemNavBarTrackingWithAction;

export type {
  MenuItemNavBarTrackingWithActionType,
  PrimaryMenuType,
  PrimaryMenuProps,
};
