import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
  NestedCollection,
  Promotion,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionProps = Clickable & {
  backLabel?: string;
  items: (NestedCollection | Link)[];
  isVisible?: boolean;
  promotion?: Promotion;
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

export type { CollectionType };
