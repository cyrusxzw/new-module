import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
  NestedCollection,
  NotableNestedCollection,
  Promotion,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionProps = Clickable & {
  backLabel?: string;
  isVisible?: boolean;
  items: (NestedCollection | Link | NotableNestedCollection)[];
  promotion?: Promotion;
  shouldHideTopCollection?: boolean;
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

export type { CollectionType };
