import type { ChangeEvent } from 'react';
import type { Themes } from '~/types';

export type TextInputV2Props = {
  autoComplete?: string;
  /* @TODO change api to classNames */
  classes?: {
    errorMessage?: string;
    input?: string;
    label?: string;
    wrapper?: string;
  };
  dataTestRef?: string;
  errorMessage?: string;
  id?: string;
  isDisabled?: boolean /* @TODO can we please make this isEnabled */;
  label: string;
  max?: number;
  maxLength?: number;
  min?: number;
  name?: string;
  onChange?: (event: ChangeEvent) => void;
  pattern?: string;
  theme?: Themes;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
  value?: string;
};
