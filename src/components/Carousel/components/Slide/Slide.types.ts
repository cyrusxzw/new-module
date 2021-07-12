import type { ComponentWithoutChildren, Themes } from '~/types';
import type { ImageProps } from '~/components/Image/Image.types';

type SlideProps = {
  description?: string;
  heading?: string;
  id?: string;
  image: ImageProps;
  isFullWidthSlide?: boolean;
  theme?: Themes;
};

type SlideType = ComponentWithoutChildren<SlideProps>;

export type { SlideProps, SlideType };
