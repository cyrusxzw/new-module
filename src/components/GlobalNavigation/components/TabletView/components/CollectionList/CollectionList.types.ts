import type { ComponentWithoutChildren } from '~/types';
import type {
  Link,
  CategoryItemTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionListProps = {
  heading?: string;
  isVisible?: boolean;
  items: Link[];
  menuCategory?: 'Read';
  menuSection?: 'Panel 1' /* To accomodate {About Us} for tablet Read Menu */;
  menuSubnav?: string;
};

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

type CategoryItemTrackingWithActionType = CategoryItemTrackingWithAction;

export type { CategoryItemTrackingWithActionType, CollectionListType };
