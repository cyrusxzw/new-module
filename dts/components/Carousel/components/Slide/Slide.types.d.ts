import type { ImageProps } from '~/components/Image/Image.types';
import type { Themes } from '~/types';
declare type SlideProps = {
  description?: string;
  heading?: string;
  id?: string;
  image: ImageProps;
  isFullWidthSlide?: boolean;
  theme?: Themes;
};
export type { SlideProps };
