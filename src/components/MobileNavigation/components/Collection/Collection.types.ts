import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  NestedCollection,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type CollectionProps = Clickable & {
  items: (NestedCollection | Link)[];
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

export type { CollectionType };
