import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  CollectionImage,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type PromotionCardProps = Clickable & {
  className?: string;
  dataTestRef?: string;
  heading: string;
  isFlush?: boolean;
  isVisible?: boolean;
  url: string;
  image?: CollectionImage;
};

type PromotionCardType = ComponentWithoutChildren<PromotionCardProps>;

export type { PromotionCardType, PromotionCardProps };
