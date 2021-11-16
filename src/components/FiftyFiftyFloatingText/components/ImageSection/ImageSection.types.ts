import type { ImageProps } from '~/components/Image/Image.types';
import type { ComponentWithoutChildren } from '~/types';

type ImageSectionProps = {
  className?: string;
  image?: ImageProps;
};

type ImageSectionType = ComponentWithoutChildren<ImageSectionProps>;

export type { ImageSectionType, ImageSectionProps };
