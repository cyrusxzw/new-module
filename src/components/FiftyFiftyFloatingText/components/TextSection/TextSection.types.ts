import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type TextSectionProps = {
  text?: ReactNode;
  theme?: Themes;
};

type TextSectionType = ComponentWithoutChildren<TextSectionProps>;

export type { TextSectionType, TextSectionProps };
