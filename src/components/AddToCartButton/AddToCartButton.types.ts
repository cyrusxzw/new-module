import type { ComponentWithoutChildren, Themes } from '~/types';

type AddToCartButtonProps = {
  className?: string;
  copy?: {
    cartAction?: string;
    postTaxPrice?: string;
    updateNotification?: string;
    outOfStock?: {
      label?: string;
      title?: string;
    };
  };
  dataTestRef: string;
  isEnabled?: boolean;
  isFullWidth?: boolean;
  theme?: Themes;
};

type AddToCartButtonType = ComponentWithoutChildren<AddToCartButtonProps>;

export type { AddToCartButtonProps, AddToCartButtonType };
