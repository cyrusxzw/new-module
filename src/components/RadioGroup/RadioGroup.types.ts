import type { ChangeEvent } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type RadioGroupProps = {
  className?: string;
  dataTestRef?: string;
  errorMessage?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options?: {
    label?: string;
    value?: string;
  }[];
  theme?: Themes;
  value?: string;
};

type RadioGroupType = ComponentWithoutChildren<RadioGroupProps>;

export { RadioGroupType };
