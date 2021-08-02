import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Card,
  NestedCollection,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type CollectionProps = Clickable & {
  items: (NestedCollection | Link | Card)[];
  isActive?: boolean;
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

export type { CollectionType };
