import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  Link,
  NestedCollection,
  PromotionCard,
} from '~/components/MobileNavigation/MobileNavigation.types';

type CollectionProps = Clickable & {
  backLabel?: string;
  items: (NestedCollection | Link)[];
  isVisible?: boolean;
  promotion?: PromotionCard;
};

type CollectionType = ComponentWithoutChildren<CollectionProps>;

export type { CollectionType };
