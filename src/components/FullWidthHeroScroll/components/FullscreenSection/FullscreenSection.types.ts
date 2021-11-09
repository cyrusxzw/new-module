import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type FullscreenSectionProps = {
  text?: ReactNode;
  theme?: Themes;
};

type FullscreenSectionType = ComponentWithoutChildren<FullscreenSectionProps>;

export type { FullscreenSectionType, FullscreenSectionProps };
