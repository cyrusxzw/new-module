import type { Control } from 'react-hook-form';
import type { Themes } from '~/types';
import type { ValidationRules } from '../validators/validators.types';

export type CommonWrapperProps = {
  className?: string;
  control: Control;
  dataTestRef?: string;
  defaultValue: string;
  errorMessage?: string;
  id: string;
  label: string;
  name: string;
  rules: ValidationRules;
  theme?: Themes;
};
