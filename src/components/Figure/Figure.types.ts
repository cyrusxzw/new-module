import type { ComponentWithChildren } from '~/types';

type FigureProps = {
  caption?: string;
  className?: string;
  hasCaptionBorder?: boolean;
  hasCaptionOffset?: boolean;
  id?: string;
  theme?: string;
  foo?: boolean;
};

type FigureType = ComponentWithChildren<FigureProps>;

export type { FigureProps, FigureType };
