import type { ComponentWithoutChildren } from '~/types';

type CollectionImageProps = {
  altText?: string;
  dataTestRef?: string;
  isVisible?: boolean;
  sizes?: {
    medium?: string;
    large?: string;
    small?: string;
  };
};

type CollectionImageType = ComponentWithoutChildren<CollectionImageProps>;

export type { CollectionImageType, CollectionImageProps };
