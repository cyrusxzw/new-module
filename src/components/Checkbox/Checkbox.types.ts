import type { ChangeEvent } from 'react';
import type { Themes } from '~/types';

type CheckboxProps = {
  checkboxClassName?: string;
  className?: string;
  content: string;
  contentClassName?: string;
  dataTestRef?: string;
  errorMessage?: string;
  id?: string;
  isEnabled?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  theme?: Themes;
};

export type { CheckboxProps };
