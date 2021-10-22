import type { ComponentWithoutChildren } from '~/types';
import type {
  Clickable,
  CategoryItemTrackingWithAction,
} from '~/components/GlobalNavigation/GlobalNavigation.types';

type ArticleCardProps = Clickable & {
  isVisible?: boolean;
  metaDuration?: string;
  metaLabel?: string;
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

type ArticleCardType = ComponentWithoutChildren<ArticleCardProps>;

type CategoryItemTrackingWithActionType = CategoryItemTrackingWithAction;

export type {
  ArticleCardType,
  ArticleCardProps,
  CategoryItemTrackingWithActionType,
};
