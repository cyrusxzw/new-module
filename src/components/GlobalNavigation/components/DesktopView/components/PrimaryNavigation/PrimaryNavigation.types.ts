import type { ComponentWithoutChildren } from '~/types';

type PrimaryNavigationProps = {
  onClose: () => void;
};

type PrimaryNavigationType = ComponentWithoutChildren<PrimaryNavigationProps>;

export type { PrimaryNavigationType, PrimaryNavigationProps };
