import type { MutableRefObject } from 'react';
import type { ComponentWithoutChildren } from '~/types';
import type { ImageProps } from '~/components/Image/Image.types';

type Image = Pick<ImageProps, 'altText' | 'sizes'>;

type Article = {
  articleRef?: MutableRefObject<HTMLDivElement>;
  category?: string;
  horizontalThumbnail?: Image;
  id?: string;
  longTitle?: string;
  onClick?: () => void;
  readingTime?: string;
  uri?: string;
  verticalThumbnail?: Image;
};

type ContentHubArticleProps = Article & {
  className?: string;
  dataTestRef: string;
  isHorizontal?: boolean;
  isInFirstGroup?: boolean;
  isMenuItem?: boolean;
  isReadMore?: boolean;
};

type ContentHubArticleType = ComponentWithoutChildren<ContentHubArticleProps>;

export type { ContentHubArticleProps, ContentHubArticleType, Article };
