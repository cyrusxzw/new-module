import type { ComponentWithoutChildren } from '~/types';
import type {
  Collection,
  CategoryItemTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type TopLevelCollectionListsProps = Collection;

type TopLevelCollectionListsType = ComponentWithoutChildren<TopLevelCollectionListsProps>;

type TopLevelCollectionLayoutType = ComponentWithoutChildren;

type CategoryItemTrackingWithActionType = CategoryItemTrackingWithAction;

export type {
  CategoryItemTrackingWithAction,
  TopLevelCollectionLayoutType,
  TopLevelCollectionListsType,
};
