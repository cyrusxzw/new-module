import type { ComponentWithoutChildren } from '~/types';
import type {
  Link,
  CategoryItemTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionListProps = {
  heading?: string;
  isVisible?: boolean;
  items: Link[];
};

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

type CategoryItemTrackingWithActionType = CategoryItemTrackingWithAction;

export type { CategoryItemTrackingWithActionType, CollectionListType };
