import type { ReactNode } from 'react';
import type { LinkStyle } from '~/components/Hyperlink/Hyperlink.types';
import type { Themes } from '~/types';
declare type CarouselIntroductionProps = {
  cta?: {
    style?: LinkStyle;
    title?: string;
    url?: string;
    text?: string;
  };
  description?: ReactNode;
  heading?: string;
  theme?: Themes;
  eyebrow?: string;
};
export type { CarouselIntroductionProps };
