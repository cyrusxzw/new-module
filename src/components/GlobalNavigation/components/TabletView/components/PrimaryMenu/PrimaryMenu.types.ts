import type { ComponentWithoutChildren } from '~/types';
import type { MenuItemTrackingWithAction } from '~/components/GlobalNavigation/GlobalNavigation.types';

type PrimaryMenuProps = {
  onClose: () => void;
};

type PrimaryMenuType = ComponentWithoutChildren<PrimaryMenuProps>;

type MenuItemTrackingWithActionType = MenuItemTrackingWithAction;

export type { PrimaryMenuType, MenuItemTrackingWithActionType };
