import type { Themes } from '~/types';
declare type AddToCartButtonProps = {
  className?: string;
  copy?: {
    cartAction?: string;
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
