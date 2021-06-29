import type { MouseEvent } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type PreviousButtonProps = {
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  theme?: Themes;
};

type PreviousButtonType = ComponentWithoutChildren<PreviousButtonProps>;

export { PreviousButtonProps, PreviousButtonType };
