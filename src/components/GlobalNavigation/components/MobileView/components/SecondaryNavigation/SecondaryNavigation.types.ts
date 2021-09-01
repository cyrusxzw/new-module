import type { ComponentWithoutChildren } from '~/types';
import type {
  Trigger,
  Link,
  Read,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type SecondaryNavigationItem = Trigger | Link | Read;

type SecondaryNavigationProps = {
  isVisible?: boolean;
  items?: SecondaryNavigationItem[];
};

type SecondaryNavigationType = ComponentWithoutChildren<SecondaryNavigationProps>;

export type {
  SecondaryNavigationType,
  SecondaryNavigationProps,
  SecondaryNavigationItem,
};
