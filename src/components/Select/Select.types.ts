import type { Themes } from '~/types';

type SelectOption = {
  id?: string;
  label?: string;
  value?: string;
};

type SelectProps = {
  className?: string;
  dataTestRef?: string;
  errorMessage?: string;
  isBlock?: boolean;
  isEnabled?: boolean;
  label?: string;
  name: string;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  theme?: Themes;
  value?: string;
};

export type { SelectProps };
