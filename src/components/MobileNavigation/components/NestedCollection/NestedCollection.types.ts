import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type NestedCollectionProps = Clickable & {
  items: Link[];
  isActive?: boolean;
};

type NestedCollectionType = ComponentWithoutChildren<NestedCollectionProps>;

export type { NestedCollectionType };
