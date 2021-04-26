import { MouseEvent } from 'react';
import type { Themes } from '~/types';
declare type PreviousButtonProps = {
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  theme?: Themes;
};
export { PreviousButtonProps };
