import type { ComponentWithoutChildren } from '~/types';
import type { Clickable } from '~/components/GlobalNavigation/GlobalNavigation.types';

type LinkProps = Clickable & {
  isNested?: boolean;
  isTop?: boolean;
  isVisible?: boolean;
  url: string;
};

type LinkType = ComponentWithoutChildren<LinkProps>;

export type { LinkType, LinkProps };
