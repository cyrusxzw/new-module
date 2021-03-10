import { CSSProperties } from 'react';
import type { Themes } from '~/types';

type Props = {
  altText?: string;
  className?: string;
  cta?: {
    openInANewWindow?: boolean;
    url?: string;
  };
  id?: string;
  isFullBleedImage?: boolean;
  isLazyLoaded?: boolean;
  large?: string;
  medium?: string;
  small?: string;
  style?: CSSProperties;
  type?: string;
  theme?: Themes;
};

export type { Props };
