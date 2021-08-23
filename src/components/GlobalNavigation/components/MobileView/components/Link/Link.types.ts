import type { ComponentWithoutChildren } from '~/types';

type LinkProps = {
  isNested?: boolean;
  isTop?: boolean;
  isVisible?: boolean;
  label: string;
  title: string;
  url: string;
};

type LinkType = ComponentWithoutChildren<LinkProps>;

export type { LinkType };
