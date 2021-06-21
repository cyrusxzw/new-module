import type { MutableRefObject } from 'react';
import type { ComponentWithoutChildren } from '~/types';
import type { ImageProps } from '~/components/Image/Image.types';

type Image = Pick<ImageProps, 'altText' | 'sizes'>;

type ContentHubArticleProps = {
  articleRef?: MutableRefObject<HTMLDivElement>;
  category?: string;
  className?: string;
  dataTestRef: string;
  horizontalThumbnail?: Image;
  id?: string;
  isHorizontal?: boolean;
  isInFirstGroup?: boolean;
  isMenuItem?: boolean;
  isReadMore?: boolean;
  longTitle?: string;
  onClick?: () => void;
  readingTime?: string;
  uri?: string;
  verticalThumbnail?: Image;
};

type ContentHubArticleType = ComponentWithoutChildren<ContentHubArticleProps>;

export type { ContentHubArticleType };
