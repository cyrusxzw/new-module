import type { ComponentWithChildren } from '~/types';

type SelectionPanelProps = {
  isActive?: boolean;
};

type SelectionPanelType = ComponentWithChildren<SelectionPanelProps>;

export type { SelectionPanelType };
