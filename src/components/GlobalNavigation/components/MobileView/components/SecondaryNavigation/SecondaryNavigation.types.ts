import type { ComponentWithoutChildren } from '~/types';
import type {
  Trigger,
  Link,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type SecondaryNavigationItems = (Trigger | Link)[];

type SecondaryNavigationProps = {
  isVisible?: boolean;
  items?: SecondaryNavigationItems;
};

type SecondaryNavigationType = ComponentWithoutChildren<SecondaryNavigationProps>;

export type {
  SecondaryNavigationType,
  SecondaryNavigationProps,
  SecondaryNavigationItems,
};
