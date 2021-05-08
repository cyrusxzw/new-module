import { ReactNode } from 'react';
import type { Themes } from '~/types';

type Item = {
  content: ReactNode;
  id: string;
};

type KitListProps = {
  className?: string;
  isVisible?: boolean;
  items: Item[];
  theme?: Themes;
};

export type { KitListProps };
