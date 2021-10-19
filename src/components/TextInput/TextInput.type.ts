import type { ChangeEvent, FocusEvent, Ref, ReactElement } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type TextInputProps = {
  'data-test-ref'?: string;
  className?: string;
  defaultValue?: string;
  hasContent?: boolean;
  hasError?: boolean;
  /** @deprecated no underlying functionality */
  hasValidation?: boolean;
  id: string;
  inputClassName?: string;
  inputRef?: Ref<HTMLInputElement>;
  isEnabled?: boolean;
  label?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  prefixElement?: ReactElement;
  theme?: Themes;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
  value?: string;
};

type TextInputType = ComponentWithoutChildren<TextInputProps>;

export { TextInputProps, TextInputType };
