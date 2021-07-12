import type { Themes } from '~/types';

type ListItem = {
  content: React.ReactNode;
  id: string;
};

type ListProps = {
  className?: string;
  items?: ListItem[];
  listItemClassName?: string;
  theme?: Themes;
};

export type { ListProps, ListItem };
