import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  CategoryItemTrackingWithMobileAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type LinkProps = Clickable & {
  isNested?: boolean;
  isTop?: boolean;
  isVisible?: boolean;
  menuSubnav?: string;
  url: string;
  isExternal?: boolean;
};

type LinkType = ComponentWithoutChildren<LinkProps>;

type CategoryItemTrackingWithMobileActionType = CategoryItemTrackingWithMobileAction;

export type { CategoryItemTrackingWithMobileActionType, LinkType, LinkProps };
