import type { Themes } from '~/types';

type BreadcrumbItem = {
  label: string;
  id: string;
  url: string;
  title: string;
};

type BreadcrumbsProps = {
  className?: string;
  items?: BreadcrumbItem[];
  onHyperlinkClick?: (item: BreadcrumbItem) => void;
  theme?: Themes;
};

export type { BreadcrumbsProps };
