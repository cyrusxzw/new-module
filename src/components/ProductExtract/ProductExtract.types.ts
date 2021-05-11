import type { Themes } from '~/types';
import { ImageProps } from '~/components/Image/Image.types';

type ProductExtractProps = {
  dataTestRef: string;
  className?: string;
  hasBottomBorder?: boolean;
  hasTopMargin?: boolean;
  imageSize?: 'small' | 'medium';
  isVisible?: boolean;
  itemNum?: number;
  theme?: Themes;
  product?: {
    image?: ImageProps;
    name?: string;
    url?: string;
  };
  works?: string;
};

export type { ProductExtractProps };
