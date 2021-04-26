/// <reference types="react" />
import type { Themes } from '~/types';
declare type ListItem = {
  content: React.ReactNode;
  id: string;
};
declare type ListProps = {
  className?: string;
  items: ListItem[];
  listItemClassName?: string;
  theme?: Themes;
};
export type { ListProps };
