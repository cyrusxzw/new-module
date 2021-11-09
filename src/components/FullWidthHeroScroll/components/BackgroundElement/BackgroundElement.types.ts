import type { ImageProps } from '~/components/Image/Image.types';
import type { VideoProps } from '~/components/Video/Video.types';
import type { ComponentWithoutChildren } from '~/types';

type BackgroundElementProps = {
  className?: string;
  image?: ImageProps;
  mediaType?: 'image' | 'video';
  video?: VideoProps;
};

type BackgroundElementType = ComponentWithoutChildren<BackgroundElementProps>;

export type { BackgroundElementType, BackgroundElementProps };
