import { ReactNode, MouseEvent } from 'react';
import type { Themes } from '~/types';

type ButtonBehaviourType = 'button' | 'reset' | 'submit';

type ButtonProps = {
  aria?: {
    expanded?: boolean;
    haspopup?: boolean;
    hidden?: boolean;
    label?: string;
  };
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
