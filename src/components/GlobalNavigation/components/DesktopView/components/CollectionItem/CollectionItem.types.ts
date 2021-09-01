import type { ComponentWithoutChildren } from '~/types';
import {
  Link,
  Article,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionItemProps = Link | Article;

type CollectionItemType = ComponentWithoutChildren<CollectionItemProps>;

export type { CollectionItemType, CollectionItemProps };
