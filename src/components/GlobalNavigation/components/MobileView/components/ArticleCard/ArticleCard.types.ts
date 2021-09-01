import type { ComponentWithoutChildren } from '~/types';
import type { Clickable } from '~/components/GlobalNavigation/GlobalNavigation.types';

type ArticleCardProps = Clickable & {
  isVisible?: boolean;
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

export type { ArticleCardType, ArticleCardProps };
