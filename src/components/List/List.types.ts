import type { Themes } from '~/types';

type Item = {
  content: React.ReactNode;
  id: string;
};

type ListProps = {
  className?: string;
  items: Item[];
  listItemClassName?: string;
  theme?: Themes;
};

export type { ListProps };
