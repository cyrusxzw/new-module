import type { ComponentWithoutChildren } from '~/types';
import type {
  CategoryItemTrackingWithMobileAction,
  Clickable,
  Link,
  NestedCollection,
  NotableNestedCollection,
  MenuItemTrackingWithMobileAction,
  Promotion,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionProps = Clickable & {
  backLabel?: string;
  isVisible?: boolean;
  items: (NestedCollection | Link | NotableNestedCollection)[];
  promotion?: Promotion;
  shouldHideTopCollection?: boolean;
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

type CategoryItemTrackingWithMobileActionType = CategoryItemTrackingWithMobileAction;

type MenuItemTrackingWithMobileActionType = MenuItemTrackingWithMobileAction;

export type {
  CategoryItemTrackingWithMobileActionType,
  CollectionType,
  CollectionProps,
  MenuItemTrackingWithMobileActionType,
};
