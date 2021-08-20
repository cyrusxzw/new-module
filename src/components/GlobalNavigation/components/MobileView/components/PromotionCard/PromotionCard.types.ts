import type { ComponentWithoutChildren } from '~/types';
import type { Clickable } from '~/components/GlobalNavigation/GlobalNavigation.types';

type PromotionCardProps = Clickable & {
  heading: string;
  isVisible?: boolean;
  url: string;
  image?: {
    altText: string;
    sizes: {
      large?: string;
      medium?: string;
      small?: string;
      xLarge?: string;
      xSmall?: string;
    };
  };
};

type PromotionCardType = ComponentWithoutChildren<PromotionCardProps>;

export type { PromotionCardType };
