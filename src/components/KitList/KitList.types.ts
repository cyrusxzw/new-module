import type { Themes } from '~/types';
import type { ListItem } from '~/components/List/List.types';

type KitListProps = {
  className?: string;
  isVisible?: boolean;
  items: ListItem[];
  theme?: Themes;
};

export type { KitListProps };
