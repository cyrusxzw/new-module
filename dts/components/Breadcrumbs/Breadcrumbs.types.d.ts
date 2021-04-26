import type { Themes } from '~/types';
declare type BreadcrumbItem = {
  label: string;
  id: string;
  url: string;
  title: string;
};
declare type BreadcrumbsProps = {
  className?: string;
  items?: BreadcrumbItem[];
  theme?: Themes;
};
export type { BreadcrumbsProps };
