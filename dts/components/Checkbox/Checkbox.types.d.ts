import type { Themes } from '~/types';
declare type CheckboxProps = {
  checkboxClassName?: string;
  className?: string;
  content: string;
  contentClassName?: string;
  dataTestRef?: string;
  errorMessage?: string;
  id?: string;
  isEnabled?: boolean;
  name?: string;
  onChange?: () => void;
  theme?: Themes;
};
export type { CheckboxProps };
