import type { ComponentWithoutChildren } from '~/types';
import type {
  Trigger,
  Link,
  Read,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type SecondaryMenuItem = Trigger | Link | Read;

type SecondaryMenuProps = {
  isVisible?: boolean;
  items?: SecondaryMenuItem[];
};

type SecondaryMenuType = ComponentWithoutChildren<SecondaryMenuProps>;

export type { SecondaryMenuType, SecondaryMenuProps, SecondaryMenuItem };
