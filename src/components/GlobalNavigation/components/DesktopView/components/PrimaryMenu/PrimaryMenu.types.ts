import type { ComponentWithoutChildren } from '~/types';

type PrimaryMenuProps = {
  onClose: () => void;
};

type PrimaryMenuType = ComponentWithoutChildren<PrimaryMenuProps>;

export type { PrimaryMenuType, PrimaryMenuProps };
