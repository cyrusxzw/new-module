import type { ComponentWithoutChildren } from '~/types';

type ArticleLayoutProps = {
  isVisible?: boolean;
};

type ArticleLayoutType = ComponentWithoutChildren<ArticleLayoutProps>;

export type { ArticleLayoutType };
