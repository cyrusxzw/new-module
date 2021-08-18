import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type NestedCollectionProps = Clickable & {
  items: Link[];
  isVisible?: boolean;
};

type NestedCollectionType = ComponentWithoutChildren<NestedCollectionProps>;

export type { NestedCollectionType };
