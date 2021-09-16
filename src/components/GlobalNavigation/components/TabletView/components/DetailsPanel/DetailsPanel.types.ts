import type { ComponentWithChildren } from '~/types';

type DetailsPanelProps = {
  backgroundColor?: string;
  hasOffset?: boolean;
  isActive?: boolean;
};

type DetailsPanelType = ComponentWithChildren<DetailsPanelProps>;

export type { DetailsPanelType };
