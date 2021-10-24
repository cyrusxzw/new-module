import type { ComponentWithoutChildren } from '~/types';
import {
  Link,
  Article,
  CategoryItemTracking,
  CategoryItemTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionItemProps = Link | Article;

type CollectionItemType = ComponentWithoutChildren<CollectionItemProps>;

type CategoryItemTrackingType = CategoryItemTracking;
type CategoryItemTrackingWithActionType = CategoryItemTrackingWithAction;

export type {
  CollectionItemType,
  CollectionItemProps,
  CategoryItemTrackingType,
  CategoryItemTrackingWithActionType,
};
