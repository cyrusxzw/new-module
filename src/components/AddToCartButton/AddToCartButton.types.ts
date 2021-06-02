import type { Themes } from '~/types';

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

export type { AddToCartButtonProps };
