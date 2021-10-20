import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  CollectionImage,
  PromotionCardClickTracking,
  PromotionCardImpressionTracking,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type PromotionCardProps = Clickable & {
  className?: string;
  dataTestRef?: string;
  heading: string;
  isFlush?: boolean;
  image?: CollectionImage;
  isVisible?: boolean;
  url: string;
};

type PromotionCardType = ComponentWithoutChildren<PromotionCardProps>;

type PromotionCardClickTrackingType = PromotionCardClickTracking;

type PromotionCardImpressionTrackingType = PromotionCardImpressionTracking;

export type {
  PromotionCardType,
  PromotionCardProps,
  PromotionCardClickTrackingType,
  PromotionCardImpressionTrackingType,
};
