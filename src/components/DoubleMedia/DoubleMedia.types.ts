import type { Themes, ComponentWithoutChildren } from '~/types';
import type { MediaBlockProps } from './components/MediaBlock/MediaBlock.types';

type DoubleMediaProps = {
  className?: string;
  mediaOne?: MediaBlockProps;
  mediaTwo?: MediaBlockProps;
  theme?: Themes;
};

type DoubleMediaType = ComponentWithoutChildren<DoubleMediaProps>;

export type { DoubleMediaType, DoubleMediaProps };
