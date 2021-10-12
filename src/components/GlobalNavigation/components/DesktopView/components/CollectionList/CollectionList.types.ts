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
  menuSubnav: string;
  menuType: 'Shop' | 'Read';
  panel: 'Panel 1' | 'Panel 2';
};

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

export type { CollectionListType, CollectionListProps };
