import type { ChangeEvent } from 'react';
import type { Themes } from '~/types';

export type TextInputV2Props = {
  autoComplete?: string;
  classNames?: {
    errorMessage?: string;
    input?: string;
    label?: string;
    wrapper?: string;
  };
  dataTestRef?: string;
  errorMessage?: string;
  id?: string;
  isEnabled?: boolean;
  label: string;
  max?: number;
  maxLength?: number;
  min?: number;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  theme?: Themes;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
  value?: string;
};
