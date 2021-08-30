import type { ComponentWithoutChildren } from '~/types';

type CloseButtonProps = {
  onClose: () => void;
};

type CloseButtonType = ComponentWithoutChildren<CloseButtonProps>;

export type { CloseButtonType, CloseButtonProps };
