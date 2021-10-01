import type { ComponentWithoutChildren } from '~/types';
import type { Collection } from '~/components/GlobalNavigation/GlobalNavigation.types';

type PrimaryMenuProps = {
  isVisible?: boolean;
  items: Collection[];
};

type PrimaryMenuType = ComponentWithoutChildren<PrimaryMenuProps>;

export type { PrimaryMenuType, PrimaryMenuProps };
