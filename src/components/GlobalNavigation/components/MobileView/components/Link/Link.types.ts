import type { ComponentWithoutChildren } from '~/types';
import type { Clickable } from '~/components/GlobalNavigation/GlobalNavigation.types';

type LinkProps = Clickable & {
  isNested?: boolean;
  isTop?: boolean;
  isVisible?: boolean;
  url: string;
  isExternal?: boolean;
};

type LinkType = ComponentWithoutChildren<LinkProps>;

export type { LinkType, LinkProps };
