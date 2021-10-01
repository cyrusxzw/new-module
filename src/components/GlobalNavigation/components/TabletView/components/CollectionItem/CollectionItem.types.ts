import type { ComponentWithoutChildren } from '~/types';
import type {
  Link,
  Collection,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionItemProps = (Link | (Collection & { onClick: () => void })) & {
  isActive?: boolean;
  isVisible?: boolean;
};

type CollectionItemType = ComponentWithoutChildren<CollectionItemProps>;

export type { CollectionItemType };
