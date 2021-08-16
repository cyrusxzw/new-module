import type { ComponentWithoutChildren } from '~/types';
import type { Collection } from '~/components/MobileNavigation/MobileNavigation.types';

type PrimaryNavigationProps = {
  isVisible?: boolean;
  items: Collection[];
};

type PrimaryNavigationType = ComponentWithoutChildren<PrimaryNavigationProps>;

export type { PrimaryNavigationType };
