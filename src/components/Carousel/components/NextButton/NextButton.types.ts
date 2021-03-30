import type { MouseEvent } from 'react';
import type { Themes } from '~/types';

type NextButtonProps = {
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  theme?: Themes;
};

export type { NextButtonProps };
