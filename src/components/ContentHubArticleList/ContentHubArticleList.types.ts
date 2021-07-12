import type { MutableRefObject } from 'react';
import type { ComponentWithoutChildren } from '~/types';
import type { Article } from '~/components/ContentHubArticle/ContentHubArticle.types';

type ListArticle = Article & {
  mobileArticleRef?: MutableRefObject<HTMLDivElement>;
};

type ContentHubArticleListProps = {
  articles?: ListArticle[];
  className?: string;
  isFirstGroup?: boolean;
  pattern?: 0 | 1; // 0 means first image is horizontal
};

type ContentHubArticleListType = ComponentWithoutChildren<ContentHubArticleListProps>;

export type { ContentHubArticleListProps, ContentHubArticleListType };
