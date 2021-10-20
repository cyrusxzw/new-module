import type { Themes, ComponentWithChildren } from '~/types';
import { ArticleCardProps } from '../ArticleCard/ArticleCard.types';

type ArticleListProps = {
  className?: string;
  isReadMenu?: boolean;
  isVisible?: boolean;
  items?: ArticleCardProps[];
  theme?: Themes;
};

type ArticleListType = ComponentWithChildren<ArticleListProps>;

export type { ArticleListType };
