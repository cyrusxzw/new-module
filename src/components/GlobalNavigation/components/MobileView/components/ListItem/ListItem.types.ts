import type { ComponentWithChildren } from '~/types';
import type {
  Promotion,
  Collection,
  Link,
  Read,
  NestedCollection,
  NotableNestedCollection,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type ListItemProps = {
  isNestedItem?: boolean;
  isTopItem?: boolean;
  isVisible?: boolean;
  itemProps:
    | NestedCollection
    | Collection
    | Link
    | Promotion
    | NotableNestedCollection
    | Read;
  menuSubnav?: string;
};

type ListItemType = ComponentWithChildren<ListItemProps>;

export type { ListItemType, ListItemProps };
