import type { ComponentWithChildren } from '~/types';

type PanelProps = {
  backgroundColor?: string;
  id?: string;
  shouldOnlyMountWhenActive?: boolean;
};

type PanelType = ComponentWithChildren<PanelProps>;

export type { PanelType, PanelProps };
