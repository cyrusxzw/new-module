import type { Themes } from '~/types';

type Copy = {
  addToCart?: {
    cartAction?: string;
    outOfStock?: {
      label?: string;
      title?: string;
    };
    updateNotification?: string;
  };
};

type CallToAction = {
  clickFunction?: () => void;
  text?: string;
  url?: string;
};

type ProductGridItemProps = {
  className?: string;
  copy?: Copy;
  cta?: CallToAction;
  id?: string;
  info?: string;
  onCtaClick?: () => void;
  theme?: Themes;
  url?: string;
};

export type { ProductGridItemProps };
