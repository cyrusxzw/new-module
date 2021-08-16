import { ReactNode, MouseEvent } from 'react';
import type { Aria, Themes } from '~/types';

type ButtonBehaviourType = 'button' | 'reset' | 'submit';

type ButtonProps = {
  aria?: Pick<Aria, 'expanded' | 'haspopup' | 'hidden' | 'label'>;
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
