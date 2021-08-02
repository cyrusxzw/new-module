import type { ComponentWithChildren } from '~/types';
import type {
  Card,
  Collection,
  Link,
  NestedCollection,
} from '~/components/MobileNavigation/MobileNavigation.types';

type ListItemProps = {
  isActive?: boolean;
  isNestedItem?: boolean;
  isTopItem?: boolean;
  itemProps: NestedCollection | Collection | Link | Card;
};

type ListItemType = ComponentWithChildren<ListItemProps>;

export type { ListItemType };
