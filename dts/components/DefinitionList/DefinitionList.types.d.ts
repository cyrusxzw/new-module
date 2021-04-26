import type { ReactNode } from 'react';
import type { Themes } from '~/types';
declare type DefinitionListItem = {
  description?: ReactNode;
  id: string;
  term?: ReactNode;
};
declare type DefinitionListProps = {
  className?: string;
  hasBottomBorder?: boolean;
  isVisible?: boolean;
  items?: DefinitionListItem[];
  theme?: Themes;
};
export type { DefinitionListProps };
