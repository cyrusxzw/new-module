import type { ComponentWithoutChildren } from '~/types';
import type {
  Trigger,
  Link,
  Read,
  MenuItemTrackingWithMobileAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type SecondaryMenuItem = Trigger | Link | Read;

type SecondaryMenuProps = {
  isVisible?: boolean;
  items?: SecondaryMenuItem[];
};

type SecondaryMenuType = ComponentWithoutChildren<SecondaryMenuProps>;

type MenuItemTrackingWithMobileActionType = MenuItemTrackingWithMobileAction;

export type {
  MenuItemTrackingWithMobileActionType,
  SecondaryMenuType,
  SecondaryMenuProps,
  SecondaryMenuItem,
};
