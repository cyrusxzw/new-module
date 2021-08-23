import type { ComponentWithoutChildren } from '~/types';

type HeaderProps = {
  onClose: () => void;
};

type HeaderType = ComponentWithoutChildren<HeaderProps>;

export type { HeaderType };
