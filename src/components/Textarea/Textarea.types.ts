import type { ChangeEvent, FocusEvent, Ref } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type TextareaProps = {
  className?: string;
  dataTestRef?: string;
  defaultValue?: string;
  id: string;
  inputRef?: Ref<HTMLTextAreaElement>;
  isEnabled?: boolean;
  maxLength?: number;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  textareaClassName?: string;
  theme?: Themes;
  value?: string;
};

type TextareaType = ComponentWithoutChildren<TextareaProps>;

export type { TextareaProps, TextareaType };
