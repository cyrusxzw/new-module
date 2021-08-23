import type { ComponentWithChildren } from '~/types';
import type {
  Promotion,
  Collection,
  Link,
  NestedCollection,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type ListItemProps = {
  isNestedItem?: boolean;
  isTopItem?: boolean;
  isVisible?: boolean;
  itemProps: NestedCollection | Collection | Link | Promotion;
};

type ListItemType = ComponentWithChildren<ListItemProps>;

export type { ListItemType };
