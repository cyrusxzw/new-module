import type { ComponentWithoutChildren } from '~/types';
import {
  Link,
  Article,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionListProps = {
  eyebrow?: string;
  heading?: string;
  items: (Article | Link)[];
};

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

export type { CollectionListType, CollectionListProps };
