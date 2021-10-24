import type { ComponentWithoutChildren } from '~/types';
import type { MenuItemTrackingWithMobileAction } from '~/components/GlobalNavigation/GlobalNavigation.types';

type HeaderProps = {
  onClose: () => void;
};

type HeaderType = ComponentWithoutChildren<HeaderProps>;

type MenuItemTrackingWithMobileActionType = MenuItemTrackingWithMobileAction;

export type { HeaderType, HeaderProps, MenuItemTrackingWithMobileActionType };
