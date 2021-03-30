import { MouseEvent } from 'react';
import type { Themes } from '~/types';

type PreviousButtonProps = {
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  theme?: Themes;
};

export { PreviousButtonProps };
