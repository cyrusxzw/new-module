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
  menuType?:
    | 'Shop'
    | 'Read' /* TODO{issue-3-nonFixture}: Remove optional condition when tablet tracking implemented */;
  panel?:
    | 'Panel 1'
    | 'Panel 2' /* TODO{issue-3-nonFixture}: Remove optional condition when tablet tracking implemented */;
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
