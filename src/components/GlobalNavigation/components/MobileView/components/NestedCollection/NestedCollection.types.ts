import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type NestedCollectionProps = Clickable & {
  items: Link[];
  isVisible?: boolean;
};

type NestedCollectionType = ComponentWithoutChildren<NestedCollectionProps>;

export type { NestedCollectionType, NestedCollectionProps };