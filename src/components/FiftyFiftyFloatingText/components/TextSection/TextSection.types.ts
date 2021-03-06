import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type TextSectionProps = {
  id?: string;
  text?: ReactNode;
  theme?: Themes;
};

type TextSectionType = ComponentWithoutChildren<TextSectionProps>;

export type { TextSectionType, TextSectionProps };
