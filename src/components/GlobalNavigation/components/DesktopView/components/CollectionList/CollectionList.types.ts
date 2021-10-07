import type { ComponentWithoutChildren } from '~/types';
import {
  Link,
  Article,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionListProps = {
  dataTestRef?: string;
  eyebrow?: string;
  heading?: string;
  isVisible?: boolean;
  items: (Article | Link)[];
};

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

export type { CollectionListType, CollectionListProps };
