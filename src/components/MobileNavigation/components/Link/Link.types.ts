import type { ComponentWithoutChildren } from '~/types';

type LinkProps = {
  isActive?: boolean;
  isNested?: boolean;
  label: string;
  title: string;
  url: string;
};

type LinkType = ComponentWithoutChildren<LinkProps>;

export type { LinkType };
