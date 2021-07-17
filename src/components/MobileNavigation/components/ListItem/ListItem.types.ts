import type { ComponentWithChildren } from '~/types';
import type {
  NestedCollection,
  Collection,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type ListItemProps = {
  isActive?: boolean;
  isNestedItem?: boolean;
  itemProps: NestedCollection | Collection | Link;
};

type ListItemType = ComponentWithChildren<ListItemProps>;

export type { ListItemType };
