import type { ComponentWithoutChildren } from '~/types';
import type {
  CategoryItemTrackingWithMobileAction,
  Clickable,
  Link,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type NestedCollectionProps = Clickable & {
  items: Link[];
  isVisible?: boolean;
};

type NestedCollectionType = ComponentWithoutChildren<NestedCollectionProps>;

type CategoryItemTrackingWithMobileActionType = CategoryItemTrackingWithMobileAction;

export type {
  CategoryItemTrackingWithMobileActionType,
  NestedCollectionType,
  NestedCollectionProps,
};
