import type { Themes } from '~/types';
import type { MediaBlockProps } from './components/MediaBlock/MediaBlock.types';

type DoubleMediaProps = {
  className?: string;
  mediaOne?: MediaBlockProps;
  mediaTwo?: MediaBlockProps;
  theme?: Themes;
};

export type { DoubleMediaProps };
