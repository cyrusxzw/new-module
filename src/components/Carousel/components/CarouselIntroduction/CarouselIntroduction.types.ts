import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';
import type { LinkStyle } from '~/components/Hyperlink/Hyperlink.types';

type CarouselIntroductionProps = {
  cta?: {
    style?: LinkStyle;
    title?: string;
    url?: string;
    text?: string;
  };
  description?: ReactNode;
  eyebrow?: string;
  heading?: string;
  theme?: Themes;
};

type CarouselIntroductionType = ComponentWithoutChildren<CarouselIntroductionProps>;

export type { CarouselIntroductionProps, CarouselIntroductionType };
