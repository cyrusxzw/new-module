import type { MouseEvent } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type NextButtonProps = {
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  theme?: Themes;
};

type NextButtonType = ComponentWithoutChildren<NextButtonProps>;

export type { NextButtonProps, NextButtonType };
