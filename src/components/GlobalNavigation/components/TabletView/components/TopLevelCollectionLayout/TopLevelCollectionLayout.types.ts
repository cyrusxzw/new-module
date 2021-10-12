import type { ComponentWithoutChildren } from '~/types';
import type {
  Collection,
  MenuItemFirstPanelTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type TopLevelCollectionListsProps = Collection;

type TopLevelCollectionListsType = ComponentWithoutChildren<TopLevelCollectionListsProps>;

type TopLevelCollectionLayoutType = ComponentWithoutChildren;

type MenuItemFirstPanelTrackingWithActionType = MenuItemFirstPanelTrackingWithAction;

export type {
  MenuItemFirstPanelTrackingWithActionType,
  TopLevelCollectionLayoutType,
  TopLevelCollectionListsType,
};
