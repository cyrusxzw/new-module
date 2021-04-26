import { ReactNode, MouseEvent } from 'react';
import type { Themes } from '~/types';
declare type ButtonBehaviourType = 'button' | 'reset' | 'submit';
declare type ButtonProps = {
  children?: ReactNode;
  className?: string;
  dataTestRef?: string;
  id?: string;
  isAlternate?: boolean;
  isEnabled?: boolean;
  isInline?: boolean;
  onClick?: (event: MouseEvent) => void;
  tabIndex?: number;
  title?: string;
  type?: ButtonBehaviourType;
  theme?: Themes;
};
export type { ButtonProps };
