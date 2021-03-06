import type { ComponentWithoutChildren, Themes } from '~/types';

type BreadcrumbItem = {
  label: string;
  id: string;
  url: string;
  title: string;
  dataTestRef?: string;
};

type BreadcrumbsProps = {
  className?: string;
  items?: BreadcrumbItem[];
  onHyperlinkClick?: (item: BreadcrumbItem) => void;
  theme?: Themes;
};

type BreadcrumbsType = ComponentWithoutChildren<BreadcrumbsProps>;

export type { BreadcrumbsProps, BreadcrumbsType, BreadcrumbItem };
