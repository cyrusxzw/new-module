import type { ComponentWithoutChildren } from '~/types';
import type {
  Trigger,
  Link,
} from '~/components/MobileNavigation/MobileNavigation.types';

type SecondaryNavigationItems = (Trigger | Link)[];

type SecondaryNavigationProps = {
  hasAriaHidden?: boolean;
  items?: SecondaryNavigationItems;
};

type SecondaryNavigationType = ComponentWithoutChildren<SecondaryNavigationProps>;

export type {
  SecondaryNavigationType,
  SecondaryNavigationProps,
  SecondaryNavigationItems,
};
