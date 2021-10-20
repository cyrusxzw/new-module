import type { ComponentWithoutChildren } from '~/types';
import {
  Article,
  CollectionImage,
  Link,
  NestedCollection,
  NotableNestedCollection,
  Promotion,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionLayoutProps = {
  articles?: Article[];
  articlesListHeading?: string;
  id?: string;
  image?: CollectionImage;
  items: (Link | NestedCollection | NotableNestedCollection)[];
  menuType: 'Shop' | 'Read';
  promotion?: Promotion;
  topLevelCollectionLabel?: string;
  type: 'collection' | 'read-collection';
};

type CollectionLayoutType = ComponentWithoutChildren<CollectionLayoutProps>;

export type { CollectionLayoutType, CollectionLayoutProps };
