import type { Themes } from '~/types';

type ProductCommerceProps = {
  className?: string;
  copy?: {
    addToCart?: {
      cartAction?: string;
      updateNotification?: string;
      outOfStock?: {
        label?: string;
        title?: string;
      };
    };
    size?: string;
  };
  cta?: {
    text?: string;
    url?: string;
  };
  description?: React.ReactNode;
  eyebrow?: string;
  heading?: string;
  id?: string;
  isActive?: boolean;
  onCtaClick?: () => void;
  size?: string;
  theme?: Themes;
};

export type { ProductCommerceProps };
