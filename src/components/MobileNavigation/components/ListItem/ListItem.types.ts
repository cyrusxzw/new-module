import type { ComponentWithChildren } from '~/types';
import type {
  PromotionCard,
  Collection,
  Link,
  NestedCollection,
} from '~/components/MobileNavigation/MobileNavigation.types';

type ListItemProps = {
  isNestedItem?: boolean;
  isTopItem?: boolean;
  isVisible?: boolean;
  itemProps: NestedCollection | Collection | Link | PromotionCard;
};

type ListItemType = ComponentWithChildren<ListItemProps>;

export type { ListItemType };
