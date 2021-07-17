import type { ComponentWithoutChildren } from '~/types';

type HeaderProps = {
  isActive?: boolean;
  onCloseButtonClick: () => void;
};

type HeaderType = ComponentWithoutChildren<HeaderProps>;

export type { HeaderType };
