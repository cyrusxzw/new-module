import type { ImageProps } from '~/components/Image/Image.types';
import type { ComponentWithoutChildren } from '~/types';

type BackgroundElementProps = {
  className?: string;
  image?: ImageProps;
};

type BackgroundElementType = ComponentWithoutChildren<BackgroundElementProps>;

export type { BackgroundElementType, BackgroundElementProps };
